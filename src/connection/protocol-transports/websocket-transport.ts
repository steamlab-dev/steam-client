import { createHash, randomBytes } from "node:crypto";
import type { Socket } from "node:net";
import { type ConnectionOptions as TlsConnectionOptions, connect as tlsConnect } from "node:tls";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import TransportError from "./error";
import type { Transport } from "./types";

/**
 * A static utility class to handle WebSocket connections over a given socket.
 * It provides methods to upgrade a socket to TLS and perform a WebSocket
 * handshake. It does not manage the socket's lifecycle or data framing.
 */
const WebSocketTransport: Transport = class WebSocketTransport {
  private static readonly WS_MAGIC_STRING = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
  private static readonly DEFAULT_WS_VERSION = "13";
  private static readonly DEFAULT_WS_PROTOCOL = "steam";
  private static readonly HTTP_SWITCHING_PROTOCOLS = 101;

  private constructor() {}

  /**
   * Establishes a WebSocket connection by upgrading a TCP socket to TLS
   * and then performing the WebSocket handshake.
   * @throws {TransportError} If the TLS upgrade or WebSocket handshake fails.
   */
  public static async setupTransport(socket: Socket, options: ConnectionOptions): Promise<Socket> {
    const { host, port } = options.steamCM;
    const wsUrl = new URL(`wss://${host}:${port}/cmsocket/`);
    let tlsSocket: Socket | undefined;

    try {
      tlsSocket = await socketRace({
        socket,
        operation: WebSocketTransport.performTlsUpgrade(socket, wsUrl),
        timeoutMs: options.timeout,
      });
      await socketRace({
        socket: tlsSocket,
        operation: WebSocketTransport.performWebSocketHandshake(tlsSocket, wsUrl),
        timeoutMs: options.timeout,
      });
    } catch (error) {
      if (tlsSocket && !tlsSocket.destroyed) {
        tlsSocket.destroy();
      }

      if (!socket.destroyed) {
        socket.destroy();
      }

      throw new TransportError(
        `Failed to establish websocket transport to ${options.steamCM.host}:${options.steamCM.port}`,
        error,
      );
    }

    return tlsSocket;
  }

  private static async performTlsUpgrade(socket: Socket, wsUrl: URL): Promise<Socket> {
    const tlsOptions: TlsConnectionOptions = {
      socket,
      host: wsUrl.hostname,
      port: Number(wsUrl.port),
      servername: wsUrl.hostname,
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
      rejectUnauthorized: true,
    };

    const tlsSocket = tlsConnect(tlsOptions);

    return new Promise<Socket>((resolve, reject) => {
      const cleanup = () => {
        tlsSocket.off("error", onTlsError);
        tlsSocket.off("secureConnect", onSecureConnect);
      };

      const onTlsError = (err: unknown) => {
        cleanup();
        reject(err);
      };

      const onSecureConnect = () => {
        cleanup();
        resolve(tlsSocket);
      };

      tlsSocket.once("error", onTlsError);
      tlsSocket.once("secureConnect", onSecureConnect);
    });
  }

  /**
   * Executes the WebSocket opening handshake over a secure socket.
   * @throws {TransportError} If the handshake fails, is rejected by the server, or times out.
   */
  private static performWebSocketHandshake(socket: Socket, wsUrl: URL): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const handshakeKey = WebSocketTransport.generateHandshakeKey();
      const expectedAccept = WebSocketTransport.calculateExpectedAccept(handshakeKey);
      let responseBuffer = Buffer.alloc(0);
      let cleanedUp = false;

      const cleanup = () => {
        if (cleanedUp) {
          return;
        }
        cleanedUp = true;
        socket.off("data", handleData);
        socket.off("error", onError);
      };

      const handleData = (data: Buffer) => {
        responseBuffer = Buffer.concat([responseBuffer, data]);
        const headerEnd = responseBuffer.indexOf("\r\n\r\n");

        if (headerEnd !== -1) {
          cleanup();

          try {
            const headersOnly = responseBuffer.subarray(0, headerEnd + 4);
            WebSocketTransport.validateHandshakeResponse(headersOnly, expectedAccept);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      const onError = (err: Error) => {
        cleanup();
        reject(err);
      };

      socket.on("data", handleData);
      socket.once("error", onError);

      const request = WebSocketTransport.buildHandshakeRequest(wsUrl, handshakeKey);

      socket.write(request, (error) => {
        if (error) {
          cleanup();
          reject(new TransportError("Failed to write WebSocket handshake request", error));
        }
      });
    });
  }

  /**
   * Generates a random base64-encoded key for the Sec-WebSocket-Key header.
   */
  private static generateHandshakeKey(): string {
    return randomBytes(16).toString("base64");
  }

  /**
   * Calculates the expected Sec-WebSocket-Accept value for handshake validation.
   */
  private static calculateExpectedAccept(handshakeKey: string): string {
    return createHash("sha1")
      .update(handshakeKey + WebSocketTransport.WS_MAGIC_STRING)
      .digest("base64");
  }

  /**
   * Constructs the HTTP GET request for the WebSocket handshake.
   */
  private static buildHandshakeRequest(wsUrl: URL, handshakeKey: string): string {
    const protocol = WebSocketTransport.DEFAULT_WS_PROTOCOL;
    const version = WebSocketTransport.DEFAULT_WS_VERSION;

    return `${[
      `GET ${wsUrl.pathname} HTTP/1.1`,
      `Host: ${wsUrl.host}`,
      "Upgrade: websocket",
      "Connection: Upgrade",
      `Sec-WebSocket-Key: ${handshakeKey}`,
      `Sec-WebSocket-Version: ${version}`,
      `Sec-WebSocket-Protocol: ${protocol}`,
      "",
    ].join("\r\n")}\r\n`;
  }

  /**
   * Validates the server's HTTP response to the handshake request.
   * @throws {TransportError} If the status code or headers are invalid.
   */
  private static validateHandshakeResponse(responseBuffer: Buffer, expectedAccept: string): void {
    const responseStr = responseBuffer.toString("utf8");
    const [statusLine, ...headerLines] = responseStr.split("\r\n");
    const safeStatusLine = statusLine ?? "";

    const statusMatch = safeStatusLine.match(/^HTTP\/1\.1 (\d{3})/);
    if (!statusMatch) {
      throw new TransportError("Invalid HTTP response during WebSocket handshake");
    }

    const statusText = statusMatch[1];
    if (!statusText) {
      throw new TransportError("Invalid HTTP response during WebSocket handshake");
    }
    const statusCode = parseInt(statusText, 10);
    if (statusCode !== WebSocketTransport.HTTP_SWITCHING_PROTOCOLS) {
      throw new TransportError(`WebSocket handshake failed with status: ${safeStatusLine}`);
    }

    const headers = WebSocketTransport.parseHeaders(headerLines);
    WebSocketTransport.validateHandshakeHeaders(headers, expectedAccept);
  }

  /**
   * Parses an array of HTTP header strings into a case-insensitive map.
   */
  private static parseHeaders(headerLines: string[]): Map<string, string> {
    const headers = new Map<string, string>();

    for (const line of headerLines) {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) {
        continue;
      }

      const key = line.substring(0, separatorIndex).trim().toLowerCase();
      const value = line.substring(separatorIndex + 1).trim();
      headers.set(key, value);
    }

    return headers;
  }

  /**
   * Validates that the required headers are present and correct in the handshake response.
   * @throws {TransportError} If any required header is missing or has an invalid value.
   */
  private static validateHandshakeHeaders(
    headers: Map<string, string>,
    expectedAccept: string,
  ): void {
    const acceptHeader = headers.get("sec-websocket-accept");
    if (!acceptHeader) {
      throw new TransportError("Server response missing Sec-WebSocket-Accept header");
    }

    if (acceptHeader !== expectedAccept) {
      throw new TransportError(
        `Invalid Sec-WebSocket-Accept header value (got: "${acceptHeader}")`,
      );
    }

    const upgradeHeader = headers.get("upgrade");
    if (upgradeHeader?.toLowerCase() !== "websocket") {
      throw new TransportError("Invalid or missing Upgrade header");
    }

    const connectionHeader = headers.get("connection");
    if (!connectionHeader?.toLowerCase().includes("upgrade")) {
      throw new TransportError("Invalid or missing Connection header");
    }

    const versionHeader = headers.get("sec-websocket-version");
    if (versionHeader && versionHeader !== WebSocketTransport.DEFAULT_WS_VERSION) {
      throw new TransportError(
        `Unexpected Sec-WebSocket-Version header value (expected: "${WebSocketTransport.DEFAULT_WS_VERSION}", got: "${versionHeader}")`,
      );
    }
  }
};

export default WebSocketTransport;
