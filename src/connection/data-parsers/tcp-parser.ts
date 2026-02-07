import type { Socket } from "node:net";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import DataParserError from "./error";
import type { DataParser, DataParserEvents } from "./types";

export default class TcpDataParser implements DataParser {
  private buffer = Buffer.alloc(0);
  private socket: Socket | null = null;
  private dataHandler: ((data: Buffer) => void) | null = null;

  constructor(private readonly emitter: TypedEventEmitter<DataParserEvents>) {}

  public attach(_socket: Socket): void {
    this.socket = _socket;
    this.setupDataHandler();
  }

  public cleanUp(): void {
    throw new DataParserError("Not implemented");
  }

  public getBufferSize(): number {
    return this.buffer.length;
  }

  private setupDataHandler(): void {
    throw new DataParserError("Not implemented");
  }

  private parseFrames(_data: Buffer): Buffer[] {
    return [];
  }

  private parseNextFrame(): Buffer | null {
    throw new DataParserError("Not implemented");
  }
}
