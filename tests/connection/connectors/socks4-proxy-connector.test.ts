import { EventEmitter } from "node:events";
import { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import type ConnectorError from "@/connection/connectors/error";
import Socks4ProxyConnector from "@/connection/connectors/Socks4-proxy-connector";
import type { ConnectionOptions } from "@/connection/types";

// Mock the entire 'net' module. This is hoisted by Vitest to the top of the file.
vi.mock("net");

describe("Socks4ProxyConnector", () => {
  let mockSocket: Socket & EventEmitter;
  const options: ConnectionOptions = {
    steamCM: { host: "192.0.2.1", port: 27017 },
    proxy: { host: "proxy.example.com", port: 1080, protocol: "socks4" },
    timeout: 5000,
  };

  const SOCKS4_SUCCESS_RESPONSE = Buffer.from([0x00, 0x5a, 0xde, 0xad, 0xbe, 0xef, 0x00, 0x00]);
  const SOCKS4_REJECTED_RESPONSE = Buffer.from([0x00, 0x5b, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);

  beforeEach(() => {
    const removeListenerSpy = vi.fn();
    mockSocket = Object.assign(new EventEmitter(), {
      connect: vi.fn((_p, _h, cb?: () => void) => {
        if (cb) {
          cb();
        }
        return mockSocket;
      }),
      write: vi.fn((...args: unknown[]) => {
        const callback = args.find((arg) => typeof arg === "function");
        if (callback) {
          callback();
        }
        return true;
      }),
      destroy: vi.fn(),
      removeListener: removeListenerSpy,
      off: removeListenerSpy,
      destroyed: false,
    }) as unknown as Socket & EventEmitter;

    vi.mocked(Socket).mockImplementation(function () {
      return mockSocket;
    });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("should throw ConnectorError if proxy configuration is missing", async () => {
    const optionsWithoutProxy = { ...options, proxy: undefined };
    await expect(Socks4ProxyConnector.connect(optionsWithoutProxy)).rejects.toThrow(
      "Proxy configuration is required for Socks4ProxyConnector.",
    );
  });

  it("should successfully connect and perform SOCKS4 handshake for an IPv4 destination", async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS4_SUCCESS_RESPONSE);

    await expect(connectPromise).resolves.toBe(mockSocket);
    expect(mockSocket.connect).toHaveBeenCalledWith(
      options.proxy?.port,
      options.proxy?.host,
      expect.any(Function),
    );
    const writeCallArgs = (mockSocket.write as Mock).mock.calls[0];
    if (!writeCallArgs) {
      throw new Error("Expected SOCKS4 handshake write call");
    }
    const writtenBuffer = writeCallArgs[0] as Buffer;
    expect(writtenBuffer[0]).toBe(0x04); // SOCKS version 4
    expect(writtenBuffer[1]).toBe(0x01); // CONNECT command
    expect(mockSocket.removeListener).toHaveBeenCalledWith("data", expect.any(Function));
  });

  it("should successfully connect using SOCKS4a for a domain name destination with a userId", async () => {
    const p = options.proxy as { host: string; port: number };
    const optionsWithDomain: ConnectionOptions = {
      ...options,
      steamCM: { host: "steamcommunity.com", port: 27018 },
      proxy: {
        protocol: "socks4",
        host: p.host,
        port: p.port,
        socks4UserId: "testuser",
      },
    };
    const connectPromise = Socks4ProxyConnector.connect(optionsWithDomain);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS4_SUCCESS_RESPONSE);

    await expect(connectPromise).resolves.toBe(mockSocket);

    const writeCallArgs = (mockSocket.write as Mock).mock.calls[0];
    if (!writeCallArgs) {
      throw new Error("Expected SOCKS4 handshake write call");
    }
    const writtenBuffer = writeCallArgs[0] as Buffer;
    // For SOCKS4a, the IP address is 0.0.0.x where x is non-zero
    expect(writtenBuffer.subarray(4, 8).toString("hex")).toBe("00000001");
    // The request should end with the userId, a null byte, the domain name, and another null byte
    expect(writtenBuffer.toString("ascii")).to.match(/testuser\0steamcommunity.com\0$/);
  });

  it("should handle a socket error during connection to the proxy", async () => {
    const connectionError = new Error("ECONNREFUSED");
    vi.mocked(mockSocket.connect).mockImplementation(() => {
      mockSocket.emit("error", connectionError);
      return mockSocket;
    });

    const connectPromise = Socks4ProxyConnector.connect(options);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy(
      (e: ConnectorError) => e.cause === connectionError,
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it("should handle a socket error during the handshake write", async () => {
    const writeError = new Error("EPIPE");
    vi.mocked(mockSocket.write).mockImplementation((...args: unknown[]) => {
      const callback = args.find((arg) => typeof arg === "function");
      if (callback) {
        callback(writeError);
      }
      return false;
    });

    const connectPromise = Socks4ProxyConnector.connect(options);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy(
      (e: ConnectorError) => (e.cause as ConnectorError).cause === writeError,
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it('should reject on a SOCKS4 "rejected" status code', async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS4_REJECTED_RESPONSE);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("connection request rejected or failed"),
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it("should reject if the proxy response has an invalid header", async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    // The first byte must be 0x00, so 0xFF is invalid.
    const invalidHeaderResponse = Buffer.from([0xff, 0x5a, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
    mockSocket.emit("data", invalidHeaderResponse);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("Invalid SOCKS4 response header"),
    );
  });

  it("should reject on an unknown SOCKS4 status code", async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    // 0xFF is not a valid SOCKS4 status code.
    const unknownStatusResponse = Buffer.from([0x00, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
    mockSocket.emit("data", unknownStatusResponse);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("unknown response status code"),
    );
  });

  it("should reject if the proxy response is unexpectedly large", async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    // The MAX_BUFFER_SIZE is 1024.
    mockSocket.emit("data", Buffer.alloc(2048));

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("SOCKS4 response unexpectedly large"),
    );
  });

  it("should handle the socket closing unexpectedly during the handshake", async () => {
    const connectPromise = Socks4ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("close");

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket closed"),
    );
  });

  it("should reject on timeout", async () => {
    vi.mocked(mockSocket.connect).mockImplementation(() => mockSocket);
    vi.mocked(mockSocket.write).mockImplementation(() => true);

    const connectPromise = Socks4ProxyConnector.connect(options);
    vi.advanceTimersByTime(options.timeout + 1);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via SOCKS4 proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket timed out"),
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });
});
