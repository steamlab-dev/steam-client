import type { TransportType } from "../types";
import TcpTransport from "./tcp-transport";
import type { Transport } from "./types";
import WebSocketTransport from "./websocket-transport";

/**
 * A static factory for creating transport protocol handlers.
 * This class cannot be instantiated.
 */
export default class TransportFactory {
  private constructor() {}

  private static readonly TRANSPORT_MAP: Record<TransportType, Transport> = {
    ws: WebSocketTransport,
    tcp: TcpTransport,
  } as const;

  /**
   * Creates and returns a transport handler based on the specified type.
   * @throws {Error} If the requested transport type is unsupported.
   */
  public static create(type: TransportType): Transport {
    const Transport = TransportFactory.TRANSPORT_MAP[type];
    if (!Transport) {
      throw new Error(`Unsupported transport: ${type}`);
    }

    return Transport;
  }
}
