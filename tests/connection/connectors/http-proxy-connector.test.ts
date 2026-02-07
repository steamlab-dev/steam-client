import { EventEmitter } from "node:events";
import { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type ConnectorError from "@/connection/connectors/error";
import HttpProxyConnector from "@/connection/connectors/http-proxy-connector";
import type { ConnectionOptions } from "@/connection/types";

// Mock the entire 'net' module. This is hoisted by Vitest to the top of the file.
vi.mock("net");

describe("HttpProxyConnector", () => {
  let mockSocket: Socket & EventEmitter;
  const options: ConnectionOptions = {
    steamCM: { host: "steam.example.com", port: 27017 },
    proxy: {
      protocol: "http",
      host: "proxy.example.com",
      port: 8080,
      username: "user",
      password: "password",
    },
    timeout: 5000,
  };

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
      off: removeListenerSpy, // Ensure `off` uses the same spy as `removeListener`
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
    await expect(HttpProxyConnector.connect(optionsWithoutProxy)).rejects.toThrow(
      "Proxy configuration is required for HttpProxyConnector",
    );
  });

  it("should successfully connect with proxy authentication", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from("HTTP/1.1 200 OK\r\n\r\n"));

    await expect(connectPromise).resolves.toBe(mockSocket);
    expect(mockSocket.connect).toHaveBeenCalledWith(
      options.proxy?.port,
      options.proxy?.host,
      expect.any(Function),
    );
    const writeCallArgs = vi.mocked(mockSocket.write).mock.calls[0];
    if (!writeCallArgs) {
      throw new Error("Expected proxy CONNECT write call");
    }
    const writeCall = writeCallArgs[0];
    expect(writeCall).toContain("CONNECT steam.example.com:27017 HTTP/1.1");
    expect(writeCall).toContain("Proxy-Authorization: Basic");
  });

  it("should successfully connect without proxy authentication", async () => {
    const optionsWithoutAuth: ConnectionOptions = {
      ...options,
      proxy: {
        protocol: "http",
        host: "proxy.example.com",
        port: 8080,
      },
    };
    const connectPromise = HttpProxyConnector.connect(optionsWithoutAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from("HTTP/1.1 200 OK\r\n\r\n"));

    await expect(connectPromise).resolves.toBe(mockSocket);
    const writeCallArgs = vi.mocked(mockSocket.write).mock.calls[0];
    if (!writeCallArgs) {
      throw new Error("Expected proxy CONNECT write call");
    }
    const writeCall = writeCallArgs[0];
    expect(writeCall).not.toContain("Proxy-Authorization");
  });

  it("should succeed when the proxy response arrives in multiple chunks", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));

    mockSocket.emit("data", Buffer.from("HTTP/1.1 20"));
    mockSocket.emit("data", Buffer.from("0 OK\r\n\r\n"));

    await expect(connectPromise).resolves.toBe(mockSocket);
    expect(mockSocket.removeListener).toHaveBeenCalledWith("data", expect.any(Function));
  });

  it("should handle a socket error during connection to proxy", async () => {
    const connectionError = new Error("ECONNREFUSED");
    vi.mocked(mockSocket.connect).mockImplementation(() => {
      mockSocket.emit("error", connectionError);
      return mockSocket;
    });

    const connectPromise = HttpProxyConnector.connect(options);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy(
      (e: ConnectorError) => e.cause === connectionError,
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it("should handle a socket error during HTTP CONNECT write", async () => {
    const writeError = new Error("EPIPE");
    vi.mocked(mockSocket.write).mockImplementation((...args: unknown[]) => {
      const callback = args.find((arg) => typeof arg === "function");
      if (callback) {
        callback(writeError);
      }
      return false;
    });

    const connectPromise = HttpProxyConnector.connect(options);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy(
      (e: ConnectorError) => (e.cause as ConnectorError).cause === writeError,
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it("should reject on non-2xx status code from proxy", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from("HTTP/1.1 407 Proxy Authentication Required\r\n\r\n"));

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("HTTP proxy authentication failed"),
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });

  it("should reject if the proxy sends a malformed HTTP response", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from("This is not a valid HTTP response\r\n\r\n"));

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("Invalid HTTP response from proxy"),
    );
  });

  it("should reject if the proxy response is unexpectedly large", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    // The MAX_HEADER_SIZE is 8192
    mockSocket.emit("data", Buffer.alloc(9000));

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as ConnectorError).message.includes("Proxy response headers too large"),
    );
  });

  it("should handle the socket closing unexpectedly during the handshake", async () => {
    const connectPromise = HttpProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("close");

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket closed"),
    );
  });

  it("should reject on timeout", async () => {
    vi.mocked(mockSocket.connect).mockImplementation(() => mockSocket);
    vi.mocked(mockSocket.write).mockImplementation(() => true);

    const connectPromise = HttpProxyConnector.connect(options);
    vi.advanceTimersByTime(options.timeout + 1);

    await expect(connectPromise).rejects.toThrow(
      `Failed to connect via HTTP proxy ${options.proxy?.host}:${options.proxy?.port} to ${options.steamCM.host}:${options.steamCM.port}`,
    );
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket timed out"),
    );
    expect(mockSocket.destroy).toHaveBeenCalled();
  });
});
