import { Socket } from "node:net";
import {
  type ConnectionOptions as NodeTlsConnectionOptions,
  type TLSSocket,
  connect as tlsConnect,
} from "node:tls";
import { connectSocket, waitForTlsSecureConnect } from "../common/socket-operations";
import socketRace from "../common/socket-race";
import type { ConnectionOptions, ProxyConfiguration } from "../types";
import ConnectorError from "./error";
import {
  buildConnectRequest,
  parseHttpStatusCode,
  readHttpHeadersUntilTerminator,
  validateProxyConnectStatus,
} from "./http-connect-shared";
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
    return connectSocket(socket, proxy.host, proxy.port);
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

    return waitForTlsSecureConnect(tlsConnect(tlsOptions));
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
      const connectRequest = HttpsProxyConnector.buildConnectRequest(targetHost, targetPort, proxy);
      socket.write(connectRequest, (error) => {
        if (error) {
          reject(new ConnectorError("Failed to write CONNECT request to proxy", error));
          return;
        }

        readHttpHeadersUntilTerminator(socket, {
          maxHeaderSize: HttpsProxyConnector.MAX_HEADER_SIZE,
        })
          .then((responseStr) => {
            const statusCode = HttpsProxyConnector.parseHttpStatusCode(responseStr);
            HttpsProxyConnector.validateProxyResponse(statusCode, responseStr);
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
   */
  private static parseHttpStatusCode(response: string): string {
    return parseHttpStatusCode(response);
  }

  /**
   * Validates the HTTP status code from the proxy's response.
   */
  private static validateProxyResponse(statusCode: string, response: string): void {
    validateProxyConnectStatus(statusCode, response, "HTTPS");
  }
};

export default HttpsProxyConnector;
