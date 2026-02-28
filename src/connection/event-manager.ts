import type { Socket } from "node:net";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import ConnectionError from "./error";
import type { ConnectionContext, ConnectionEvents } from "./types";

export class EventManagerError extends ConnectionError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "pipeline", cause);
  }
}

/**
 * Defines the structure of the message emitted on a 'disconnected' event.
 */
export interface DisconnectMsg {
  error: Error;
  source: "socket" | "parser";
}

/**
 * Describes the public interface for an EventManager.
 */
export interface IEventManager {
  attachEvents(context: ConnectionContext): void;
  cleanUp(): void;
}

/**
 * Manages and unifies events from a network socket and a data parser.
 * It abstracts lower-level events like 'close', 'error', and 'timeout'
 * into a simplified interface emitting 'data' and 'disconnected' events.
 */
export default class EventManager implements IEventManager {
  private disconnectedFired = false;
  private context?: ConnectionContext;
  private isAttached = false;
  private socket?: Socket;
  private errorHandler?: (error: Error) => void;
  private closeHandler?: (hadError: boolean) => void;
  private timeoutHandler?: () => void;
  private dataParseErrorHandler?: (error: Error) => void;

  constructor(private readonly emitter: TypedEventEmitter<ConnectionEvents>) {}

  /**
   * Attaches event listeners to the provided socket and parser from the connection context.
   * @throws {EventManagerError} If the manager is already attached or if the context is invalid.
   */
  public attachEvents(context: ConnectionContext): void {
    if (this.isAttached) {
      throw new EventManagerError(
        "EventManager is already attached. Call cleanUp() before attaching again.",
      );
    }

    if (!context || !context.socket || !context.parser) {
      throw new EventManagerError(
        "A valid ConnectionContext with a socket and parser is required.",
      );
    }

    this.context = context;
    this.socket = context.socket;
    this.isAttached = true;
    this.disconnectedFired = false;
    this.attachSocketEvents();
    this.attachDataParseErrorListener();
  }

  /**
   * Removes all attached event listeners to prevent memory leaks.
   */
  public cleanUp(): void {
    if (!this.isAttached) {
      return;
    }

    this.detachSocketEvents();
    this.detachDataParseErrorListener();

    // Reset state
    this.errorHandler = undefined;
    this.closeHandler = undefined;
    this.timeoutHandler = undefined;
    this.dataParseErrorHandler = undefined;
    this.socket = undefined;
    this.context = undefined;
    this.disconnectedFired = false;
    this.isAttached = false;
  }

  /**
   * Emits the 'disconnected' event if it has not already been fired.
   */
  private emitDisconnected(message: DisconnectMsg): void {
    if (this.disconnectedFired) {
      return;
    }
    this.disconnectedFired = true;
    // don't emit disconnected right away so any listerns are able to catch any enroute messages
    setImmediate(() => {
      this.emitter.emit("disconnected", message);
    });
  }

  /**
   * Binds handlers to the core socket events ('error', 'close', 'timeout').
   */
  private attachSocketEvents(): void {
    const socket = this.socket;
    if (!socket) {
      return;
    }

    this.errorHandler = (error) => this.emitDisconnected({ error, source: "socket" });

    this.closeHandler = () =>
      this.emitDisconnected({
        error: new ConnectionError("Socket closed unexpectedly.", "transport"),
        source: "socket",
      });

    this.timeoutHandler = () =>
      this.emitDisconnected({
        error: new ConnectionError("Socket timeout", "transport"),
        source: "socket",
      });

    socket.on("error", this.errorHandler);
    socket.on("close", this.closeHandler);
    socket.on("timeout", this.timeoutHandler);
  }

  /**
   * Detaches all previously registered socket listeners.
   */
  private detachSocketEvents(): void {
    if (!this.socket || !this.errorHandler || !this.closeHandler || !this.timeoutHandler) {
      return;
    }

    this.socket.off("error", this.errorHandler);
    this.socket.off("close", this.closeHandler);
    this.socket.off("timeout", this.timeoutHandler);
  }

  /**
   * Attaches listener for data parse errors from the parser.
   */
  private attachDataParseErrorListener(): void {
    this.dataParseErrorHandler = (err: Error) => {
      const parserError =
        err instanceof ConnectionError
          ? err
          : new ConnectionError("Data parser error", "parser", err);
      this.emitDisconnected({
        error: parserError,
        source: "parser",
      });
    };

    this.emitter.on("dataParseError", this.dataParseErrorHandler);
  }

  /**
   * Detaches parser-originated error listener from the shared emitter.
   */
  private detachDataParseErrorListener(): void {
    if (!this.dataParseErrorHandler) {
      return;
    }
    this.emitter.off("dataParseError", this.dataParseErrorHandler);
  }
}
