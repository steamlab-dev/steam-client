import { Socket } from "node:net";
import { connectSocket } from "../common/socket-operations";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import ConnectorError from "./error";
import {
  buildConnectRequest,
  parseHttpStatusCode,
  readHttpHeadersUntilTerminator,
  validateProxyConnectStatus,
} from "./http-connect-shared";
import type { Connector } from "./types";

/**
 * Handles establishing a TCP connection through an HTTP proxy
 */
const HttpProxyConnector: Connector = class HttpProxyConnector {
  private static readonly MAX_HEADER_SIZE = 8192;

  private constructor() {}

  /**
   * Establishes a connection to a target host through an HTTP proxy by sending a
   * CONNECT request and validating the response.
   * @throws {ConnectorError} If proxy configuration is missing or if any stage of the connection fails.
   */
  public static async connect(options: ConnectionOptions): Promise<Socket> {
    if (!options.proxy) {
      throw new ConnectorError("Proxy configuration is required for HttpProxyConnector");
    }

    const socket = new Socket();
    const { host, port } = options.steamCM;
    const proxy = options.proxy;

    const startOperation = async () => {
      await HttpProxyConnector.connectToProxy(socket, proxy);
      await HttpProxyConnector.performHttpConnect(socket, host, port, proxy);
    };

    try {
      await socketRace({
        socket,
        operation: startOperation(),
        timeoutMs: options.timeout,
      });
    } catch (error) {
      if (!socket.destroyed) {
        socket.destroy();
      }
      throw new ConnectorError(
        `Failed to connect via HTTP proxy ${options.proxy.host}:${options.proxy.port} to ${options.steamCM.host}:${options.steamCM.port}`,
        error,
      );
    }

    return socket;
  }

  /**
   * Initiates a raw TCP connection to the HTTP proxy server.
   */
  private static connectToProxy(
    socket: Socket,
    proxy: { host: string; port: number },
  ): Promise<void> {
    return connectSocket(socket, proxy.host, proxy.port);
  }

  /**
   * Performs the HTTP CONNECT handshake, sending the request and waiting for a valid response.
   * @throws {ConnectorError} If the proxy response is too large, malformed, or indicates a failure.
   */
  private static performHttpConnect(
    socket: Socket,
    targetHost: string,
    targetPort: number,
    proxy: { username?: string; password?: string },
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const connectRequest = HttpProxyConnector.buildConnectRequest(targetHost, targetPort, proxy);
      socket.write(connectRequest, (error) => {
        if (error) {
          reject(new ConnectorError("Failed to write CONNECT request to proxy", error));
          return;
        }

        readHttpHeadersUntilTerminator(socket, {
          maxHeaderSize: HttpProxyConnector.MAX_HEADER_SIZE,
        })
          .then((responseStr) => {
            const statusCode = HttpProxyConnector.parseHttpStatusCode(responseStr);
            HttpProxyConnector.validateProxyResponse(statusCode, responseStr);
            resolve();
          })
          .catch(reject);
      });
    });
  }

  /**
   * Constructs the HTTP CONNECT request string, including the
   * Proxy-Authorization header if credentials are provided.
   */
  private static buildConnectRequest(
    host: string,
    port: number,
    proxy: { username?: string; password?: string },
  ): string {
    return buildConnectRequest(host, port, proxy);
  }

  /**
   * Parses the HTTP status code from the proxy's response.
   * @throws {ConnectorError} If the response status line is malformed.
   */
  private static parseHttpStatusCode(response: string): string {
    return parseHttpStatusCode(response);
  }

  /**
   * Validates the HTTP status code from the proxy's response.
   * @throws {ConnectorError} If the status code is not a 2xx success code.
   */
  private static validateProxyResponse(statusCode: string, response: string): void {
    validateProxyConnectStatus(statusCode, response, "HTTP");
  }
};

export default HttpProxyConnector;
