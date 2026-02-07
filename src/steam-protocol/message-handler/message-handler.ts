import GenericError from "@/common/generic-error";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type Connection from "@/connection/connection";
import type MessageParser from "./parser";
import type { MessageHandlerEvents, MsgHandler, ParsedMessage, SteamMessage } from "./types";

export class MessageHandlerError extends GenericError {}

export default class MessageHandler {
  private readonly handlers: MsgHandler[] = [];

  constructor(
    private readonly connection: Connection,
    private readonly emitter: TypedEventEmitter<MessageHandlerEvents>,
    private readonly parser: MessageParser,
  ) {
    this.handleIncomingData = this.handleIncomingData.bind(this);
    this.connection.on("data", this.handleIncomingData);
  }

  public addHandler(...items: MsgHandler[]): void {
    this.handlers.push(...items);
  }

  public cleanUp() {
    this.connection.off("data", this.handleIncomingData);
  }

  private async handleIncomingData(data: Buffer): Promise<void> {
    const parsedMessages = await this.parser.parse(data);
    const steamMessages = this.runHandlers(parsedMessages);

    if (steamMessages.length) {
      this.emitter.emit("steam-messages", steamMessages);
    }
  }

  private runHandlers(messages: ParsedMessage[]): SteamMessage[] {
    const steamMessages: SteamMessage[] = [];

    // Process each message
    for (const msg of messages) {
      if (this.isFiltered(msg)) {
        continue;
      }

      // one of the handlers will decode the parsed message
      let steamMessage: SteamMessage | undefined;

      // pass the parsed message to handlers
      for (const handler of this.handlers) {
        const canHandle = handler.canHandle(msg);
        if (!canHandle) {
          continue;
        }

        try {
          // one of the handlers will return the decoded message
          // once it returns, pass the steamMessage instead
          const decodedMsg = handler.handle(steamMessage ?? msg);

          if (decodedMsg) {
            steamMessage = decodedMsg;
            steamMessages.push(decodedMsg);
          }
        } catch (error) {
          this.emitter.emit("steam-message-error", new MessageHandlerError(error, msg));
          break; // stop processing this message
        }
      }
    }

    return steamMessages;
  }

  /**
   * Check if message should be filtered from event emission
   */
  private isFiltered(_message: ParsedMessage): boolean {
    return false;
  }
}
