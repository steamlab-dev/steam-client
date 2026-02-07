import type { Socket } from "node:net";
import type DataParserError from "./error";

export interface DataParserEvents {
  data: (payload: Buffer) => void;
  dataParseError: (error: DataParserError) => void;
}

export interface DataParser {
  attach(socket: Socket): void;
  getBufferSize(): number;
  cleanUp(): void;
}
