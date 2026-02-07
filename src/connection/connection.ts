import type { Socket } from "node:net";
import GenericError from "@/common/generic-error";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import ConnectionFactory from "./factory";
import type ConnectionPipeline from "./pipeline/pipeline";
import type ConnectionStateManager from "./state-manager";
import type { ConnectionState } from "./state-manager";
import type {
  ConnectionContext,
  ConnectionContextImps,
  ConnectionEvents,
  ConnectionOptions,
  IConnection,
} from "./types";

export class ConnectionError extends GenericError {}

// Omit dataParserError event from consumer since it's handled internally
type ConnEventsForConsumer = Omit<ConnectionEvents, "dataParseError">;

export default class Connection
  extends TypedEventEmitter<ConnEventsForConsumer>
  implements IConnection
{
  private pipeline?: ConnectionPipeline;
  private context?: ConnectionContext;
  private cleaningUp = false;
  private readonly state: ConnectionStateManager;
  private eventsAttached = false;

  constructor(
    private options: ConnectionOptions,
    private readonly implementations?: ConnectionContextImps,
  ) {
    super();
    this.context = ConnectionFactory.createConnection(options, {
      ...this.implementations,
      emitter: this.getEmitter(),
    });
    this.pipeline = ConnectionFactory.createPipeline();
    // State manager must be persistent
    this.state = this.context.stateManager;
  }

  /**
   * Establishes a connection to the server by executing the connection pipeline.
   * @throws {ConnectionError} If a connection is already active or if the pipeline execution fails.
   */
  async connect(): Promise<Socket> {
    this.validateContext();

    if (this.state.hasActiveConnection()) {
      throw new ConnectionError("There's an active connection");
    }

    const context = this.context;
    if (!context) {
      throw new ConnectionError("Connection context is undefined");
    }

    try {
      if (this.pipeline) {
        await this.pipeline.execute(context);
      }
      this.handleEvents();
      if (!context.socket) {
        throw new ConnectionError("Connection socket is undefined");
      }
      return context.socket;
    } catch (err) {
      this.cleanUp();
      throw new ConnectionError(err);
    }
  }

  /**
   * Tears down the active connection and cleans up all resources
   * without emitting a 'disconnected' event.
   */
  disconnect(): void {
    this.cleanUp();
  }

  /**
   * Checks if the connection is currently in an active or connecting state.
   */
  hasActiveConnection() {
    return this.state.hasActiveConnection();
  }

  /**
   * Returns a read-only snapshot of the current connection state.
   */
  getState(): Readonly<ConnectionState> {
    return this.state.getState();
  }

  /**
   * Sends a data buffer over the active connection.
   * @throws {ConnectionError} If the connection context is not available.
   */
  async send(data: Buffer): Promise<void> {
    this.validateContext();
    const context = this.context;
    if (!context) {
      throw new ConnectionError("Connection context is undefined");
    }
    return context.sender.send(data);
  }

  /**
   * Binds handlers to the internal EventManager to propagate events externally.
   * @throws {ConnectionError} If the connection context is not available.
   */
  private handleEvents() {
    this.validateContext();

    if (this.eventsAttached) {
      return;
    }
    this.eventsAttached = true;

    this.once("disconnected", () => {
      this.cleanUp();
    });
  }

  /**
   * Performs a full teardown of the connection, releasing all resources and resetting state.
   */
  private cleanUp(): void {
    if (this.cleaningUp || !this.context) {
      return;
    }

    this.cleaningUp = true;

    try {
      this.state.setDisconnected();
      this.context.eventManager.cleanUp();
      this.context.parser.cleanUp();
      this.context.sender.cleanUp();

      if (this.context.socket) {
        this.context.socket.destroy();
      }
    } finally {
      this.pipeline = undefined;
      this.context = undefined;
      this.cleaningUp = false;
    }
  }

  private validateContext() {
    if (!this.context) {
      throw new ConnectionError("Connection context is undefined");
    }
  }
}
