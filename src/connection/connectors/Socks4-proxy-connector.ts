import { Socket } from "node:net";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import ConnectorError from "./error";
import type { Connector } from "./types";

const SOCKS4_CONSTANTS = {
  VERSION: 0x04,
  CONNECT_COMMAND: 0x01,
  RESPONSE_NULL_BYTE: 0x00,
  RESPONSE_LENGTH: 8,
  MAX_BUFFER_SIZE: 1024,
  STATUS_CODES: {
    GRANTED: 0x5a,
    REJECTED: 0x5b,
    IDENTD_UNREACHABLE: 0x5c,
    IDENTD_AUTH_FAILED: 0x5d,
  },
} as const;

/**
 * Handles the SOCKS4 proxy connection and handshake process to establish
 * a tunneled connection to a target host.
 */
const Socks4ProxyConnector: Connector = class Socks4ProxyConnector {
  private constructor() {}

  /**
   * Establishes a connection to a target host through a SOCKS4 proxy,
   * handling the full handshake process.
   * @throws {ConnectorError} If proxy configuration is missing or if any stage of the handshake fails.
   */
  public static async connect(options: ConnectionOptions): Promise<Socket> {
    if (!options.proxy) {
      throw new ConnectorError("Proxy configuration is required for Socks4ProxyConnector.");
    }

    const socket = new Socket();
    const { host, port } = options.steamCM;
    const proxy = options.proxy;

    const startOperation = async () => {
      await Socks4ProxyConnector.connectToProxy(socket, proxy);
      await Socks4ProxyConnector.performSocks4Handshake(socket, host, port, proxy.socks4UserId);
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
        `Failed to connect via SOCKS4 proxy ${options.proxy.host}:${options.proxy.port} to ${options.steamCM.host}:${options.steamCM.port}`,
        error,
      );
    }

    return socket;
  }

  /**
   * Initiates a raw TCP connection to the SOCKS4 proxy server.
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
   * Performs the complete SOCKS4 handshake after connecting to the proxy.
   * @throws {ConnectorError} If the handshake fails, is rejected, or times out.
   */
  private static performSocks4Handshake(
    socket: Socket,
    targetHost: string,
    targetPort: number,
    userId?: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      let receivedBuffer = Buffer.alloc(0);

      const cleanup = () => {
        socket.off("data", onData);
      };

      const onData = (chunk: Buffer) => {
        receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

        if (receivedBuffer.length > SOCKS4_CONSTANTS.MAX_BUFFER_SIZE) {
          cleanup();
          return reject(new ConnectorError("SOCKS4 response unexpectedly large or malformed."));
        }

        if (receivedBuffer.length >= SOCKS4_CONSTANTS.RESPONSE_LENGTH) {
          cleanup();
          try {
            const response = receivedBuffer.subarray(0, SOCKS4_CONSTANTS.RESPONSE_LENGTH);
            Socks4ProxyConnector.validateHandshakeResponse(response);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      try {
        const handshakeRequest = Socks4ProxyConnector.createHandshakeRequest(
          targetHost,
          targetPort,
          userId,
        );
        socket.write(handshakeRequest, (error) => {
          if (error) {
            cleanup();
            reject(new ConnectorError("Failed to write SOCKS4 handshake request to proxy.", error));
          }
        });
      } catch (error) {
        cleanup();
        reject(error);
      }
    });
  }

  /**
   * Creates the SOCKS4 or SOCKS4a handshake request packet.
   * @throws {Error} If the destination host is not a valid IPv4 address for a SOCKS4 request.
   */
  private static createHandshakeRequest(destHost: string, destPort: number, userId = ""): Buffer {
    let ipBytes: number[];
    let isSocks4a = false;

    try {
      ipBytes = Socks4ProxyConnector.parseIPv4Address(destHost);
    } catch {
      isSocks4a = true;
      ipBytes = [0, 0, 0, 1];
    }

    const requestParts = [
      Buffer.from([SOCKS4_CONSTANTS.VERSION, SOCKS4_CONSTANTS.CONNECT_COMMAND]),
      Socks4ProxyConnector.encodePort(destPort),
      Buffer.from(ipBytes),
      Buffer.from(userId, "ascii"),
      Buffer.from([0x00]),
    ];

    if (isSocks4a) {
      requestParts.push(Buffer.from(destHost, "ascii"));
      requestParts.push(Buffer.from([0x00]));
    }

    return Buffer.concat(requestParts);
  }

  /**
   * Validates the SOCKS4 handshake response from the proxy server.
   * @throws {ConnectorError} If the response is malformed or indicates a failure status.
   */
  private static validateHandshakeResponse(response: Buffer): void {
    if (response.length < SOCKS4_CONSTANTS.RESPONSE_LENGTH) {
      throw new ConnectorError("SOCKS4 response too short or invalid format.");
    }

    const headerByte = response[0];
    if (headerByte === undefined) {
      throw new ConnectorError("SOCKS4 response missing header byte.");
    }

    if (headerByte !== SOCKS4_CONSTANTS.RESPONSE_NULL_BYTE) {
      throw new ConnectorError(
        `Invalid SOCKS4 response header: Expected 0x00, got 0x${headerByte.toString(16).padStart(2, "0")}.`,
      );
    }

    const statusCode = response[1];
    if (statusCode === undefined) {
      throw new ConnectorError("SOCKS4 response missing status code.");
    }
    Socks4ProxyConnector.validateStatusCode(statusCode);
  }

  /**
   * Parses a string into an array of IPv4 address bytes.
   * @throws {Error} If the string is not a valid IPv4 address.
   */
  private static parseIPv4Address(destHost: string): number[] {
    const octets = destHost.split(".");
    if (octets.length !== 4 || !octets.every((octet) => /^\d{1,3}$/.test(octet))) {
      throw new Error(`Not a valid IPv4 address string: "${destHost}".`);
    }
    return octets.map((octet) => {
      const num = parseInt(octet, 10);
      if (num < 0 || num > 255) {
        throw new Error(`IPv4 octet out of range (0-255): "${num}".`);
      }
      return num;
    });
  }

  /**
   * Encodes a port number into a 2-byte Buffer in network byte order (big-endian).
   */
  private static encodePort(port: number): Buffer {
    const buffer = Buffer.alloc(2);
    buffer.writeUInt16BE(port, 0);
    return buffer;
  }

  /**
   * Validates the status code from the SOCKS4 handshake response.
   * @throws {ConnectorError} If the status code indicates a failure.
   */
  private static validateStatusCode(statusCode: number): void {
    const { STATUS_CODES } = SOCKS4_CONSTANTS;
    switch (statusCode) {
      case STATUS_CODES.GRANTED:
        return;
      case STATUS_CODES.REJECTED:
        throw new ConnectorError("SOCKS4 proxy: connection request rejected or failed.");
      case STATUS_CODES.IDENTD_UNREACHABLE:
        throw new ConnectorError("SOCKS4 proxy: identd service not running or unreachable.");
      case STATUS_CODES.IDENTD_AUTH_FAILED:
        throw new ConnectorError("SOCKS4 proxy: identd failed to confirm user ID.");
      default:
        throw new ConnectorError(
          `SOCKS4 proxy: unknown response status code 0x${statusCode.toString(16).padStart(2, "0")}.`,
        );
    }
  }
};

export default Socks4ProxyConnector;
