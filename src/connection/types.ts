import type { Socket } from "node:net";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type { Connector } from "./connectors/types";
import type { DataParser, DataParserEvents } from "./data-parsers/types";
import type { DataSender } from "./data-senders/types";
import type EventManager from "./event-manager";
import type { DisconnectMsg } from "./event-manager";
import type ConnectionOptionsValidator from "./options-validator";
import type { Transport } from "./protocol-transports/types";
import type StateManager from "./state-manager";

/**
 * Represents a SteamCM server (host/port pair).
 */
export interface SteamCMServer {
  host: string;
  port: number;
}

/**
 * Represents proxy configuration options.
 */
export interface ProxyConfiguration {
  protocol: "http" | "socks4" | "socks5";
  host: string;
  port: number;
  username?: string;
  password?: string;
  socks4UserId?: string;
}

/**
 * Represents the options for initializing a connection.
 */
export interface ConnectionOptions {
  steamCM: SteamCMServer;
  proxy?: ProxyConfiguration;
  timeout: number;
}

/**
 * Defines the available transport protocols for the connection.
 */
export type TransportType = "ws" | "tcp";

/**
 * Defines the events that a Connection instance can emit.
 */
export interface ConnectionEvents extends DataParserEvents {
  disconnected(message: DisconnectMsg): void;
}

// Connection context
export interface ConnectionContext {
  readonly options: ConnectionOptions;
  socket?: Socket; // set by transports and/or connectors. Passing socket to connection has no effect
  readonly connectionOptionsValidator: typeof ConnectionOptionsValidator;
  readonly stateManager: StateManager;
  readonly connector: Connector;
  readonly transport: Transport;
  readonly eventManager: EventManager;
  readonly sender: DataSender;
  readonly parser: DataParser;
  readonly emitter: TypedEventEmitter<ConnectionEvents>;
}

export type ConnectionContextImps = Partial<Omit<ConnectionContext, "options" | "emmiter">>;

/**
 * Describes the public interface for a Connection, defining it as an emitter of ConnectionEvents.
 */
export interface IConnection extends TypedEventEmitter<ConnectionEvents> {}
