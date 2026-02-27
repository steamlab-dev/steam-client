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

    for (const msg of messages) {
      if (this.isFiltered(msg)) {
        continue;
      }

      const decodedMessages = this.runHandlersForMessage(msg);
      if (decodedMessages.length) {
        steamMessages.push(...decodedMessages);
      }
    }

    return steamMessages;
  }

  /**
   * Executes handler chain for a single parsed message.
   * Stops at the first handler error and emits "steam-message-error".
   */
  private runHandlersForMessage(message: ParsedMessage): SteamMessage[] {
    const decodedMessages: SteamMessage[] = [];
    let currentMessage: ParsedMessage | SteamMessage = message;

    for (const handler of this.handlers) {
      if (!handler.canHandle(message)) {
        continue;
      }

      try {
        const decoded = handler.handle(currentMessage);
        if (!decoded) {
          continue;
        }
        currentMessage = decoded;
        decodedMessages.push(decoded);
      } catch (error) {
        this.emitter.emit("steam-message-error", new MessageHandlerError(error, message));
        break;
      }
    }

    return decodedMessages;
  }

  /**
   * Check if message should be filtered from event emission
   */
  private isFiltered(_message: ParsedMessage): boolean {
    return false;
  }
}
