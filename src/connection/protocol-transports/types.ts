import type { Socket } from "node:net";
import type { ConnectionOptions } from "../types";

export type Transport = {
  setupTransport(socket: Socket, options: ConnectionOptions): Promise<Socket>;
};
