import { Socket } from "node:net";
import socketRace from "../common/socket-race";
import type { ConnectionOptions } from "../types";
import ConnectorError from "./error";
import type { Connector } from "./types";

const SOCKS5_CONSTANTS = {
  VERSION: 0x05,
  AUTH_VERSION: 0x01,
  CMD_CONNECT: 0x01,
  RSV: 0x00,
  ATYP_IPV4: 0x01,
  ATYP_DOMAIN: 0x03,
  AUTH_METHODS: {
    NO_AUTH: 0x00,
    USER_PASS: 0x02,
    NO_ACCEPTABLE: 0xff,
  },
  STATUS_CODES: {
    SUCCEEDED: 0x00,
    GENERAL_FAILURE: 0x01,
    NOT_ALLOWED: 0x02,
    NET_UNREACHABLE: 0x03,
    HOST_UNREACHABLE: 0x04,
    CONN_REFUSED: 0x05,
    TTL_EXPIRED: 0x06,
    CMD_NOT_SUPPORTED: 0x07,
    ADDR_TYPE_NOT_SUPPORTED: 0x08,
  },
  MAX_BUFFER_SIZE: 1024,
} as const;

/**
 * Handles the full SOCKS5 proxy connection and handshake process,
 * including authentication and establishing the final tunneled connection.
 */
const Socks5ProxyConnector: Connector = class Socks5ProxyConnector {
  /**
   * Private constructor to prevent instantiation of this static utility class.
   */
  private constructor() {}

  /**
   * Establishes a connection to a target host through a SOCKS5 proxy,
   * handling all handshake and authentication steps.
   * @throws {ConnectorError} If proxy configuration is missing or if any stage of the handshake fails.
   */
  public static async connect(options: ConnectionOptions): Promise<Socket> {
    if (!options.proxy) {
      throw new ConnectorError("Proxy configuration is required for Socks5ProxyConnector.");
    }

    const socket = new Socket();
    const { host, port } = options.steamCM;
    const proxy = options.proxy;

    const startOperation = async () => {
      await Socks5ProxyConnector.connectToProxy(socket, proxy);
      await Socks5ProxyConnector.performMethodSelection(socket, proxy);

      if (proxy.username && proxy.password) {
        await Socks5ProxyConnector.performAuthentication(socket, proxy.username, proxy.password);
      }

      await Socks5ProxyConnector.performConnectionRequest(socket, host, port);
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
   * Initiates a raw TCP connection to the SOCKS5 proxy server.
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
   * Negotiates the authentication method with the SOCKS5 proxy.
   * @throws {ConnectorError} If the server's response is invalid or no acceptable method is found.
   */
  private static performMethodSelection(
    socket: Socket,
    proxy: { username?: string; password?: string },
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      let receivedBuffer = Buffer.alloc(0);
      const needsAuth = !!(proxy.username && proxy.password);

      const cleanup = () => {
        socket.removeListener("data", onData);
      };

      const onData = (chunk: Buffer) => {
        receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

        if (receivedBuffer.length > SOCKS5_CONSTANTS.MAX_BUFFER_SIZE) {
          cleanup();
          return reject(new ConnectorError("SOCKS5 response unexpectedly large."));
        }

        if (receivedBuffer.length >= 2) {
          cleanup();
          try {
            const [version, chosenMethod] = receivedBuffer;
            if (version === undefined || chosenMethod === undefined) {
              throw new ConnectorError("SOCKS5 method selection response incomplete.");
            }
            Socks5ProxyConnector.validateMethodSelectionResponse(version, chosenMethod, needsAuth);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      const methodRequest = Socks5ProxyConnector.createMethodSelectionRequest(needsAuth);
      socket.write(methodRequest);
    });
  }

  /**
   * Performs username and password authentication if required by the proxy.
   * @throws {ConnectorError} If the server's authentication response is invalid or indicates failure.
   */
  private static performAuthentication(
    socket: Socket,
    username: string,
    password: string,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      let receivedBuffer = Buffer.alloc(0);

      const cleanup = () => {
        socket.off("data", onData);
      };

      const onData = (chunk: Buffer) => {
        receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

        if (receivedBuffer.length > SOCKS5_CONSTANTS.MAX_BUFFER_SIZE) {
          cleanup();
          return reject(new ConnectorError("SOCKS5 response unexpectedly large."));
        }

        if (receivedBuffer.length >= 2) {
          cleanup();
          try {
            const [authVersion, authStatus] = receivedBuffer;
            if (authVersion === undefined || authStatus === undefined) {
              throw new ConnectorError("SOCKS5 authentication response incomplete.");
            }
            Socks5ProxyConnector.validateAuthenticationResponse(authVersion, authStatus);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      const authRequest = Socks5ProxyConnector.createAuthenticationRequest(username, password);
      socket.write(authRequest);
    });
  }

  /**
   * Sends the final connection request to the proxy to establish the tunnel.
   * @throws {ConnectorError} If the proxy fails to establish the connection to the target.
   */
  private static performConnectionRequest(
    socket: Socket,
    targetHost: string,
    targetPort: number,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      let receivedBuffer = Buffer.alloc(0);

      const cleanup = () => {
        socket.removeListener("data", onData);
      };

      const onData = (chunk: Buffer) => {
        receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

        if (receivedBuffer.length > SOCKS5_CONSTANTS.MAX_BUFFER_SIZE) {
          cleanup();
          return reject(new ConnectorError("SOCKS5 response unexpectedly large."));
        }

        if (receivedBuffer.length >= 5) {
          cleanup();
          try {
            const statusCode = receivedBuffer[1];
            if (statusCode === undefined) {
              throw new ConnectorError("SOCKS5 connection response missing status code.");
            }
            Socks5ProxyConnector.validateConnectionStatus(statusCode);
            resolve();
          } catch (error) {
            reject(error);
          }
        }
      };

      socket.on("data", onData);

      const connRequest = Socks5ProxyConnector.createConnectionRequest(targetHost, targetPort);
      socket.write(connRequest);
    });
  }

  /**
   * Creates the initial SOCKS5 method selection request packet.
   */
  private static createMethodSelectionRequest(needsAuth: boolean): Buffer {
    const supportedMethods = needsAuth
      ? [SOCKS5_CONSTANTS.AUTH_METHODS.USER_PASS]
      : [SOCKS5_CONSTANTS.AUTH_METHODS.NO_AUTH];

    return Buffer.from([SOCKS5_CONSTANTS.VERSION, supportedMethods.length, ...supportedMethods]);
  }

  /**
   * Creates the SOCKS5 username/password authentication request packet.
   */
  private static createAuthenticationRequest(user: string, pass: string): Buffer {
    const userBuf = Buffer.from(user, "utf8");
    const passBuf = Buffer.from(pass, "utf8");

    return Buffer.concat([
      Buffer.from([SOCKS5_CONSTANTS.AUTH_VERSION, userBuf.length]),
      userBuf,
      Buffer.from([passBuf.length]),
      passBuf,
    ]);
  }

  /**
   * Creates the final SOCKS5 connection request packet for the target destination.
   */
  private static createConnectionRequest(destHost: string, destPort: number): Buffer {
    const portBuf = Buffer.alloc(2);
    portBuf.writeUInt16BE(destPort, 0);

    let addrBuf: Buffer;
    if (/^(\d{1,3}\.){3}\d{1,3}$/.test(destHost)) {
      const ipBytes = destHost.split(".").map((octet) => parseInt(octet, 10));
      addrBuf = Buffer.from([SOCKS5_CONSTANTS.ATYP_IPV4, ...ipBytes]);
    } else {
      const domainBuf = Buffer.from(destHost, "ascii");
      addrBuf = Buffer.concat([
        Buffer.from([SOCKS5_CONSTANTS.ATYP_DOMAIN, domainBuf.length]),
        domainBuf,
      ]);
    }

    return Buffer.concat([
      Buffer.from([SOCKS5_CONSTANTS.VERSION, SOCKS5_CONSTANTS.CMD_CONNECT, SOCKS5_CONSTANTS.RSV]),
      addrBuf,
      portBuf,
    ]);
  }

  /**
   * Validates the server's response to the method selection request.
   * @throws {ConnectorError} If the version is incorrect or the chosen method is not supported.
   */
  private static validateMethodSelectionResponse(
    version: number,
    chosenMethod: number,
    needsAuth: boolean,
  ): void {
    if (version !== SOCKS5_CONSTANTS.VERSION) {
      throw new ConnectorError(
        `Invalid SOCKS version: Expected 0x05, got 0x${version.toString(16)}.`,
      );
    }
    if (chosenMethod === SOCKS5_CONSTANTS.AUTH_METHODS.NO_ACCEPTABLE) {
      throw new ConnectorError("SOCKS5 proxy requires an unsupported authentication method.");
    }
    if (needsAuth && chosenMethod !== SOCKS5_CONSTANTS.AUTH_METHODS.USER_PASS) {
      throw new ConnectorError(
        "SOCKS5 proxy does not support username/password authentication, but credentials were provided.",
      );
    }
    if (!needsAuth && chosenMethod !== SOCKS5_CONSTANTS.AUTH_METHODS.NO_AUTH) {
      throw new ConnectorError(
        "SOCKS5 proxy requires authentication, but no credentials were provided.",
      );
    }
  }

  /**
   * Validates the server's response to the authentication request.
   * @throws {ConnectorError} If the auth version is incorrect or the status indicates failure.
   */
  private static validateAuthenticationResponse(authVersion: number, authStatus: number): void {
    if (authVersion !== SOCKS5_CONSTANTS.AUTH_VERSION) {
      throw new ConnectorError(
        `Invalid SOCKS5 auth version: Expected 0x01, got 0x${authVersion.toString(16)}.`,
      );
    }
    if (authStatus !== 0x00) {
      throw new ConnectorError("SOCKS5 authentication failed: Invalid username or password.");
    }
  }

  /**
   * Validates the status code in the final connection response from the proxy.
   * @throws {ConnectorError} If the status code indicates any type of failure.
   */
  private static validateConnectionStatus(statusCode: number): void {
    if (statusCode === SOCKS5_CONSTANTS.STATUS_CODES.SUCCEEDED) {
      return;
    }

    const errorMap: Record<number, string> = {
      [SOCKS5_CONSTANTS.STATUS_CODES.GENERAL_FAILURE]: "General SOCKS server failure",
      [SOCKS5_CONSTANTS.STATUS_CODES.NOT_ALLOWED]: "Connection not allowed by ruleset",
      [SOCKS5_CONSTANTS.STATUS_CODES.NET_UNREACHABLE]: "Network unreachable",
      [SOCKS5_CONSTANTS.STATUS_CODES.HOST_UNREACHABLE]: "Host unreachable",
      [SOCKS5_CONSTANTS.STATUS_CODES.CONN_REFUSED]: "Connection refused",
      [SOCKS5_CONSTANTS.STATUS_CODES.TTL_EXPIRED]: "TTL expired",
      [SOCKS5_CONSTANTS.STATUS_CODES.CMD_NOT_SUPPORTED]: "Command not supported",
      [SOCKS5_CONSTANTS.STATUS_CODES.ADDR_TYPE_NOT_SUPPORTED]: "Address type not supported",
    };

    const errorMessage =
      errorMap[statusCode] || `Unknown SOCKS5 error code 0x${statusCode.toString(16)}`;
    throw new ConnectorError(`SOCKS5 connection failed: ${errorMessage}.`);
  }
};

export default Socks5ProxyConnector;
