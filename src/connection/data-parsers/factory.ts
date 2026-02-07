import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type { TransportType } from "../types";
import DataParserError from "./error";
import TcpDataParser from "./tcp-parser";
import type { DataParser } from "./types";
import WebSocketDataParser from "./websocket-parser";

/**
 * A static factory for creating data parser instances based on transport type.
 * This class cannot be instantiated.
 */
export default class DataParserFactory {
  private constructor() {}

  /**
   * Creates and returns a data parser instance for the specified transport type.
   * @throws {DataParserError} If the requested transport type is unsupported.
   */
  public static create(type: TransportType, emitter: TypedEventEmitter<unknown>): DataParser {
    switch (type) {
      case "ws":
        return new WebSocketDataParser(emitter);
      case "tcp":
        return new TcpDataParser(emitter);
      default:
        throw new DataParserError(`Unsupported data parser: ${type}`);
    }
  }
}
