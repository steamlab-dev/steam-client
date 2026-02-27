import { Socket } from "node:net";
import {
  type ConnectionOptions as NodeTlsConnectionOptions,
  type TLSSocket,
  connect as tlsConnect,
} from "node:tls";
import socketRace from "../common/socket-race";
import type { ConnectionOptions, ProxyConfiguration } from "../types";
import ConnectorError from "./error";
import type { Connector } from "./types";

/**
 * Handles establishing a TCP connection through an HTTPS proxy
 * (HTTP CONNECT over a TLS session with the proxy endpoint).
 */
const HttpsProxyConnector: Connector = class HttpsProxyConnector {
  private static readonly MAX_HEADER_SIZE = 8192;
  private static readonly IPV4_REGEX = /^(\d{1,3}\.){3}\d{1,3}$/;

  private constructor() {}

  /**
   * Establishes a connection to a target host through an HTTPS proxy by:
   * 1) opening TCP to the proxy,
   * 2) upgrading to TLS,
   * 3) issuing an HTTP CONNECT tunnel request.
   */
  public static async connect(options: ConnectionOptions): Promise<Socket> {
    if (!options.proxy) {
      throw new ConnectorError("Proxy configuration is required for HttpsProxyConnector");
    }

    const socket = new Socket();
    const { host, port } = options.steamCM;
    const proxy = options.proxy;
    let tlsSocket: TLSSocket | undefined;

    const connectAndUpgradeOperation = async () => {
      await HttpsProxyConnector.connectToProxy(socket, proxy);
      tlsSocket = await HttpsProxyConnector.performProxyTlsUpgrade(socket, proxy);
    };

    try {
      await socketRace({
        socket,
        operation: connectAndUpgradeOperation(),
        timeoutMs: options.timeout,
      });

      if (!tlsSocket) {
        throw new ConnectorError("HTTPS proxy TLS socket is unavailable");
      }

      await socketRace({
        socket: tlsSocket,
        operation: HttpsProxyConnector.performHttpConnect(tlsSocket, host, port, proxy),
        timeoutMs: options.timeout,
      });
    } catch (error) {
      if (tlsSocket && !tlsSocket.destroyed) {
        tlsSocket.destroy();
      }

      if (!socket.destroyed) {
        socket.destroy();
      }

      throw new ConnectorError(
        `Failed to connect via HTTPS proxy ${options.proxy.host}:${options.proxy.port} to ${options.steamCM.host}:${options.steamCM.port}`,
        error,
      );
    }

    if (!tlsSocket) {
      throw new ConnectorError("HTTPS proxy TLS socket is unavailable");
    }

    return tlsSocket;
  }

  /**
   * Initiates a raw TCP connection to the HTTPS proxy server.
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
   * Upgrades a connected TCP socket to TLS for the proxy endpoint.
   */
  private static performProxyTlsUpgrade(
    socket: Socket,
    proxy: ProxyConfiguration,
  ): Promise<TLSSocket> {
    const isIpHost = HttpsProxyConnector.IPV4_REGEX.test(proxy.host) || proxy.host.includes(":");
    const servername = isIpHost ? undefined : proxy.host;

    const tlsOptions: NodeTlsConnectionOptions = {
      socket,
      host: proxy.host,
      port: proxy.port,
      servername,
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
      rejectUnauthorized: true,
    };

    const tlsSocket = tlsConnect(tlsOptions);

    return new Promise<TLSSocket>((resolve, reject) => {
      const cleanup = () => {
        tlsSocket.off("error", onError);
        tlsSocket.off("secureConnect", onSecureConnect);
      };

      const onError = (error: unknown) => {
        cleanup();
        reject(error);
      };

      const onSecureConnect = () => {
        cleanup();
        resolve(tlsSocket);
      };

      tlsSocket.once("error", onError);
      tlsSocket.once("secureConnect", onSecureConnect);
    });
  }

  /**
   * Performs the HTTP CONNECT handshake over the established TLS session.
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

        if (receivedBuffer.length > HttpsProxyConnector.MAX_HEADER_SIZE) {
          cleanup();
          return reject(new ConnectorError("Proxy response headers too large or malformed."));
        }

        const responseStr = receivedBuffer.toString("ascii");
        if (responseStr.includes("\r\n\r\n")) {
          cleanup();

          try {
            const statusCode = HttpsProxyConnector.parseHttpStatusCode(responseStr);
            HttpsProxyConnector.validateProxyResponse(statusCode, responseStr);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      const connectRequest = HttpsProxyConnector.buildConnectRequest(targetHost, targetPort, proxy);
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
   */
  private static validateProxyResponse(statusCode: string, response: string): void {
    if (statusCode.startsWith("2")) {
      return;
    }

    const statusLine = response.split("\r\n")[0] || "No status line found";

    switch (statusCode) {
      case "400":
        throw new ConnectorError(`HTTPS proxy bad request: ${statusLine}`);
      case "403":
        throw new ConnectorError(`HTTPS proxy forbidden: ${statusLine}`);
      case "407":
        throw new ConnectorError(`HTTPS proxy authentication failed: ${statusLine}`);
      default:
        throw new ConnectorError(
          `HTTPS proxy CONNECT failed with status ${statusCode}: ${statusLine}`,
        );
    }
  }
};

export default HttpsProxyConnector;
