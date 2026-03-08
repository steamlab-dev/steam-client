import { EMsg } from "@/common/steam-language";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type Connection from "@/connection/connection";
import { SteamProtocolError } from "../error";
import type MessageParser from "./parser";
import type {
  MessageHandlerEvents,
  MsgHandler,
  ParsedMessage,
  PublicSteamMessage,
  SteamMessage,
  SteamMessageName,
  SteamMessages,
} from "./types";

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
    const steamMessages = this.collectPublicMessages(parsedMessages);

    if (this.hasMessages(steamMessages)) {
      this.emitter.emit("steam-messages", steamMessages);
    }
  }

  private collectPublicMessages(messages: ParsedMessage[]): SteamMessages {
    const publicMessages = Object.create(null) as SteamMessages;

    for (const message of messages) {
      if (this.isFiltered(message)) {
        continue;
      }

      this.runHandlersForMessage(message, (decodedMessage) => {
        if (this.isPublicMessage(decodedMessage)) {
          this.setMessage(publicMessages, decodedMessage);
        }
      });
    }

    return publicMessages;
  }

  /**
   * Executes handler chain for a single parsed message.
   * Stops at the first handler error and emits "steam-message-error".
   */
  private runHandlersForMessage(
    message: ParsedMessage,
    onDecodedMessage: (decodedMessage: SteamMessage) => void,
  ): void {
    let currentMessage: ParsedMessage = message;

    for (const handler of this.handlers) {
      if (!handler.canHandle(currentMessage)) {
        continue;
      }

      try {
        const decoded = handler.handle(currentMessage);
        if (!decoded) {
          continue;
        }
        currentMessage = decoded;
        onDecodedMessage(decoded);
      } catch (error) {
        const handlerError =
          error instanceof MessageHandlerError
            ? error
            : new MessageHandlerError("Failed to process steam message", message, error);
        this.emitter.emit("steam-message-error", handlerError);
        break;
      }
    }
  }

  /**
   * Check if message should be filtered from event emission
   */
  private isFiltered(_message: ParsedMessage): boolean {
    return false;
  }

  private isPublicMessage(message: SteamMessage): message is PublicSteamMessage {
    return (
      message.eMsg !== EMsg.k_EMsgServiceMethod && message.eMsg !== EMsg.k_EMsgServiceMethodResponse
    );
  }

  private hasMessages(messages: SteamMessages): boolean {
    for (const _name in messages) {
      return true;
    }
    return false;
  }

  private setMessage(messages: SteamMessages, message: PublicSteamMessage): void {
    const msgName = message.msgName as SteamMessageName;
    messages[msgName] = message as never;
  }
}
