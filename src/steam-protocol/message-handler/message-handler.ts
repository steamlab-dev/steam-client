import { EMsg } from "@/common/steam-language";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type Connection from "@/connection/connection";
import { SteamProtocolError } from "../error";
import type MessageParser from "./parser";
import type { MessageHandlerEvents, MsgHandler, ParsedMessage, SteamMessage } from "./types";

export class MessageHandlerError extends SteamProtocolError {
  constructor(
    messageOrCause: string | unknown,
    public readonly rawMessage: ParsedMessage,
    cause?: unknown,
  ) {
    super(messageOrCause, "handler", cause);
  }
}

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

    // Filter out service method call messages from public emission, they are handled by ServiceCallMessenger
    const publicMessages = steamMessages.filter(
      (msg) =>
        msg.eMsg !== EMsg.k_EMsgServiceMethod && msg.eMsg !== EMsg.k_EMsgServiceMethodResponse,
    );

    if (publicMessages.length) {
      this.emitter.emit("steam-messages", publicMessages);
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
      if (!handler.canHandle(currentMessage as ParsedMessage)) {
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
        const handlerError =
          error instanceof MessageHandlerError
            ? error
            : new MessageHandlerError("Failed to process steam message", message, error);
        this.emitter.emit("steam-message-error", handlerError);
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
