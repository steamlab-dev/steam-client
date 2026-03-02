import type { Socket } from "node:net";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import ConnectionError from "./error";
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

export { default as ConnectionError } from "./error";

// Omit dataParserError event from consumer since it's handled internally
type ConnEventsForConsumer = Omit<ConnectionEvents, "dataParseError">;

/**
 * High-level transport lifecycle manager used by the Steam protocol layer.
 *
 * How it works:
 * - Builds a connection context and pipeline via `ConnectionFactory`.
 * - `connect()` executes pipeline steps in order (validate options, connect socket,
 *   apply transport, attach sender/parser, attach event manager).
 * - Parsed inbound payloads are emitted as `"data"` events.
 * - Transport/parser failures are normalized into a single `"disconnected"` event.
 * - Cleanup is centralized and idempotent (`disconnect()` or `"disconnected"` both
 *   end in `cleanUp()`), and tears down listeners, parser/sender hooks, and socket.
 *
 * Consumer usage (for example `src/steam-protocol/*`):
 * 1. Construct once with connection options.
 * 2. Subscribe to `"data"` and `"disconnected"` before or immediately after connect.
 * 3. Call `connect()` before calling `send(...)`.
 * 4. Treat `"disconnected"` as terminal for the instance.
 * 5. Call `disconnect()` for explicit shutdown.
 */
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
    this.context = ConnectionFactory.createConnection(this.options, {
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
    if (this.state.hasActiveConnection()) {
      throw new ConnectionError("There's an active connection", "pipeline");
    }

    const context = this.requireContext();
    const pipeline = this.pipeline;

    try {
      if (pipeline) {
        await pipeline.execute(context);
      }
      this.handleEvents();
      if (!context.socket) {
        throw new ConnectionError("Connection socket is undefined", "pipeline");
      }
      return context.socket;
    } catch (err) {
      this.cleanUp();
      if (err instanceof ConnectionError) {
        throw err;
      }
      throw new ConnectionError("Failed to establish connection", "pipeline", err);
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
    const context = this.requireContext();
    return context.sender.send(data);
  }

  /**
   * Binds handlers to the internal EventManager to propagate events externally.
   * @throws {ConnectionError} If the connection context is not available.
   */
  private handleEvents() {
    this.requireContext();

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
    const context = this.context;
    if (this.cleaningUp || !context) {
      return;
    }

    this.cleaningUp = true;

    try {
      // Reset state first so any in-flight logic observes disconnected status.
      this.state.setDisconnected();
      // Detach listeners and parser/sender hooks before closing the socket.
      context.eventManager.cleanUp();
      context.parser.cleanUp();
      context.sender.cleanUp();

      if (context.socket) {
        context.socket.destroy();
      }
    } finally {
      this.pipeline = undefined;
      this.context = undefined;
      this.cleaningUp = false;
    }
  }

  private requireContext(): ConnectionContext {
    const context = this.context;
    if (!context) {
      throw new ConnectionError("Connection context is undefined", "pipeline");
    }
    return context;
  }
}
