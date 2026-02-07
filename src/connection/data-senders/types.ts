import type { Socket } from "node:net";

export interface DataSender {
  attach(socket: Socket): void;
  send(data: Buffer): Promise<void>;
  cleanUp(): void;
}
