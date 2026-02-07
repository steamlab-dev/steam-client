import { Socket } from "node:net";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import ConnectorError from "./error";
import type { Connector } from "./types";

/**
 * Handles establishing a direct TCP connection to a target host and port,
 * bypassing any proxy.
 */
const DirectConnector: Connector = class DirectConnector {
  private constructor() {}

  /**
   * Initiates and establishes a direct TCP connection to the specified destination.
   * @throws {ConnectorError} If the connection fails or times out.
   */
  public static async connect(options: ConnectionOptions): Promise<Socket> {
    const socket = new Socket();
    const { host, port } = options.steamCM;

    const promise = new Promise<Socket>((resolve) => {
      socket.connect(port, host, () => {
        resolve(socket);
      });
    });

    try {
      await socketRace({
        socket,
        operation: promise,
        timeoutMs: options.timeout,
      });
    } catch (error) {
      if (!socket.destroyed) {
        socket.destroy();
      }

      throw new ConnectorError(
        `Failed to connect directly to ${options.steamCM.host}:${options.steamCM.port}`,
        error,
      );
    }

    return socket;
  }
};

export default DirectConnector;
