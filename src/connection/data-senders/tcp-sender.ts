import type { Socket } from "node:net";
import DataSenderError from "./error";
import type { DataSender } from "./types";

export default class TcpDataSender implements DataSender {
  attach(_socket: Socket): void {
    throw new DataSenderError("Method not implemented.");
  }
  send(_data: Buffer): Promise<void> {
    throw new DataSenderError("Method not implemented.");
  }
  cleanUp(): void {
    throw new DataSenderError("Method not implemented.");
  }
}
