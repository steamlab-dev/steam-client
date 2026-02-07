import type { Socket } from "node:net";
import type { ConnectionOptions } from "../types";
import TransportError from "./error";
import type { Transport } from "./types";

const TcpTransport: Transport = class TcpTransport {
  private constructor() {}

  public static async setupTransport(
    _socket: Socket,
    _options: ConnectionOptions,
  ): Promise<Socket> {
    throw new TransportError("Method not implemented");
  }
};

export default TcpTransport;
