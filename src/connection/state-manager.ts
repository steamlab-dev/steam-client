import GenericError from "@/common/generic-error";

/**
 * Custom error type for invalid connection state transitions.
 */
export class ConnectionStateError extends GenericError {}

/**
 * Defines the flags that represent the various stages of a connection.
 */
export interface ConnectionState {
  connecting: boolean;
  connected: boolean;
  steamConnected: boolean;
  proxyConnected: boolean;
  transportReady: boolean;
}

/**
 * Manages and enforces a state machine for a multi-stage connection process,
 * ensuring that connection stages occur in a valid order.
 * * Paths:
 * 1. client → connecting → proxy → steam → transport handshake → fully connected
 * 2. client → connecting → steam → transport handshake → fully connected
 * */
export default class StateManager {
  private _state: ConnectionState = {
    connecting: false,
    connected: false,
    steamConnected: false,
    proxyConnected: false,
    transportReady: false,
  };

  /**
   * Checks if the connection is in any state other than fully disconnected.
   */
  public hasActiveConnection(): boolean {
    return Object.values(this._state).some(Boolean);
  }

  /**
   * Checks if the transport layer handshake is complete.
   */
  public isFullyConnected(): boolean {
    return this._state.transportReady;
  }

  /**
   * Returns a read-only snapshot of the current connection state.
   */
  public getState(): Readonly<ConnectionState> {
    return { ...this._state };
  }

  /**
   * Initiates the connection process.
   * @throws {ConnectionStateError} If already connecting or connected.
   */
  public setConnecting(): void {
    if (this._state.connecting || this._state.connected) {
      throw new ConnectionStateError("cannot connect: already connecting or connected");
    }
    this._state = {
      connecting: true,
      connected: false,
      steamConnected: false,
      proxyConnected: false,
      transportReady: false,
    };
  }

  /**
   * Marks the proxy connection as established.
   * @throws {ConnectionStateError} If called in an invalid state.
   */
  public setProxyConnected(): void {
    if (!this._state.connecting || this._state.steamConnected) {
      throw new ConnectionStateError("cannot set proxy: invalid state");
    }
    this._state.proxyConnected = true;
  }

  /**
   * Marks the Steam connection as established.
   * @throws {ConnectionStateError} If called in an invalid state.
   */
  public setSteamConnected(): void {
    if (!this._state.connecting || this._state.steamConnected) {
      throw new ConnectionStateError("cannot set steam: invalid state");
    }
    this._state.steamConnected = true;
  }

  /**
   * Marks the transport layer as ready after a successful handshake.
   * @throws {ConnectionStateError} If called in an invalid state.
   */
  public setTransportReady(): void {
    if (!this._state.connecting || !this._state.steamConnected || this._state.transportReady) {
      throw new ConnectionStateError("cannot set transport: invalid state");
    }
    this._state.transportReady = true;
  }

  /**
   * Finalizes the connection process, marking it as fully connected at the application level.
   * @throws {ConnectionStateError} If the required preliminary connection steps are not complete.
   */
  public setFullyConnected(): void {
    if (
      !this._state.connecting ||
      !this._state.steamConnected ||
      !this._state.transportReady ||
      this._state.connected
    ) {
      throw new ConnectionStateError("cannot set full connect: invalid state");
    }
    this._state.connected = true;
    this._state.connecting = false;
  }

  /**
   * Resets all state flags to their initial, disconnected values.
   */
  public setDisconnected(): void {
    this._state = {
      connecting: false,
      connected: false,
      steamConnected: false,
      proxyConnected: false,
      transportReady: false,
    };
  }
}
