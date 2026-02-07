import type { TransportType } from "../types";
import DataSenderError from "./error";
import TcpDataSender from "./tcp-sender";
import type { DataSender } from "./types";
import WebSocketDataSender from "./websocket-sender";

/**
 * A static factory for creating instances of data senders based on transport type.
 * This class cannot be instantiated.
 */
export default class DataSenderFactory {
  private constructor() {}

  private static readonly DATA_SENDER_MAP: Record<TransportType, DataSender> = {
    ws: new WebSocketDataSender(),
    tcp: new TcpDataSender(),
  } as const;

  /**
   * Creates and returns a data sender instance for the specified transport type.
   * @throws {DataSenderError} If the requested transport type is unsupported.
   */
  public static create(type: TransportType): DataSender {
    const parser = DataSenderFactory.DATA_SENDER_MAP[type];
    if (!parser) {
      throw new DataSenderError(`Unsupported data sender: ${type}`);
    }

    return parser;
  }
}
