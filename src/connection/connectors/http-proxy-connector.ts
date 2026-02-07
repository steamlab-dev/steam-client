import { Socket } from "node:net";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import ConnectorError from "./error";
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
    return new Promise((resolve) => {
      socket.connect(proxy.port, proxy.host, resolve);
    });
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
      let receivedBuffer = Buffer.alloc(0);

      const cleanup = () => {
        socket.removeListener("data", onData);
      };

      const onData = (chunk: Buffer) => {
        receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

        if (receivedBuffer.length > HttpProxyConnector.MAX_HEADER_SIZE) {
          cleanup();
          return reject(new ConnectorError("Proxy response headers too large or malformed."));
        }

        const responseStr = receivedBuffer.toString("ascii");
        if (responseStr.includes("\r\n\r\n")) {
          cleanup();

          try {
            const statusCode = HttpProxyConnector.parseHttpStatusCode(responseStr);
            HttpProxyConnector.validateProxyResponse(statusCode, responseStr);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      const connectRequest = HttpProxyConnector.buildConnectRequest(targetHost, targetPort, proxy);
      socket.write(connectRequest, (error) => {
        if (error) {
          cleanup();
          reject(new ConnectorError("Failed to write CONNECT request to proxy", error));
        }
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
    let request = `CONNECT ${host}:${port} HTTP/1.1\r\nHost: ${host}:${port}\r\n`;

    if (proxy.username && proxy.password) {
      const credentials = Buffer.from(`${proxy.username}:${proxy.password}`).toString("base64");
      request += `Proxy-Authorization: Basic ${credentials}\r\n`;
    }

    request += "Connection: Keep-Alive\r\n\r\n";
    return request;
  }

  /**
   * Parses the HTTP status code from the proxy's response.
   * @throws {ConnectorError} If the response status line is malformed.
   */
  private static parseHttpStatusCode(response: string): string {
    const statusLine = response.split("\r\n")[0] ?? "";
    const match = statusLine.match(/HTTP\/\d\.\d\s+(\d{3})/);

    if (!match) {
      throw new ConnectorError(`Invalid HTTP response from proxy: ${statusLine}`);
    }
    const statusCode = match[1];
    if (!statusCode) {
      throw new ConnectorError(`Invalid HTTP response from proxy: ${statusLine}`);
    }

    return statusCode;
  }

  /**
   * Validates the HTTP status code from the proxy's response.
   * @throws {ConnectorError} If the status code is not a 2xx success code.
   */
  private static validateProxyResponse(statusCode: string, response: string): void {
    if (statusCode.startsWith("2")) {
      return;
    }

    const statusLine = response.split("\r\n")[0] || "No status line found";

    switch (statusCode) {
      case "400":
        throw new ConnectorError(`HTTP proxy bad request: ${statusLine}`);
      case "403":
        throw new ConnectorError(`HTTP proxy forbidden: ${statusLine}`);
      case "407":
        throw new ConnectorError(`HTTP proxy authentication failed: ${statusLine}`);
      default:
        throw new ConnectorError(
          `HTTP proxy CONNECT failed with status ${statusCode}: ${statusLine}`,
        );
    }
  }
};

export default HttpProxyConnector;
