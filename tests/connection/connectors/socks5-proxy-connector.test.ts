import { EventEmitter } from "node:events";
import { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import type ConnectorError from "@/connection/connectors/error";
import Socks5ProxyConnector from "@/connection/connectors/Socks5-proxy-connector";
import type { ConnectionOptions } from "@/connection/types";

// Mock the entire 'net' module. This is hoisted by Vitest to the top of the file.
vi.mock("net");

describe("Socks5ProxyConnector", () => {
  let mockSocket: Socket & EventEmitter;
  const options: ConnectionOptions = {
    steamCM: { host: "192.0.2.1", port: 27017 },
    proxy: { host: "proxy.example.com", port: 1080, protocol: "socks5" },
    timeout: 5000,
  };
  const p = options.proxy as { host: string; port: number };
  const optionsWithAuth: ConnectionOptions = {
    ...options,
    proxy: {
      protocol: "socks5",
      host: p.host,
      port: p.port,
      username: "user",
      password: "pass",
    },
  };

  // SOCKS5 Response buffers
  const SOCKS5_METHOD_NO_AUTH_RESPONSE = Buffer.from([0x05, 0x00]);
  const SOCKS5_METHOD_USER_PASS_RESPONSE = Buffer.from([0x05, 0x02]);
  const SOCKS5_METHOD_NO_ACCEPTABLE_RESPONSE = Buffer.from([0x05, 0xff]);
  const SOCKS5_AUTH_SUCCESS_RESPONSE = Buffer.from([0x01, 0x00]);
  const SOCKS5_AUTH_FAILED_RESPONSE = Buffer.from([0x01, 0x01]);
  const SOCKS5_CONNECT_SUCCESS_RESPONSE = Buffer.from([
    0x05, 0x00, 0x00, 0x01, 0xde, 0xad, 0xbe, 0xef, 0x12, 0x34,
  ]);
  const SOCKS5_CONNECT_REJECTED_RESPONSE = Buffer.from([
    0x05, 0x02, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  ]);

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

  // NOTE: The source code has a copy-paste error and says "SOCKS4", so we must match that.
  const getWrappedErrorPrefix = (opts: ConnectionOptions) =>
    `Failed to connect via SOCKS4 proxy ${opts.proxy?.host}:${opts.proxy?.port} to ${opts.steamCM.host}:${opts.steamCM.port}`;

  it("should throw ConnectorError if proxy configuration is missing", async () => {
    const optionsWithoutProxy = { ...options, proxy: undefined };
    await expect(Socks5ProxyConnector.connect(optionsWithoutProxy)).rejects.toThrow(
      "Proxy configuration is required for Socks5ProxyConnector.",
    );
  });

  it("should successfully connect without authentication for IPv4 destination", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_CONNECT_SUCCESS_RESPONSE);

    await expect(connectPromise).resolves.toBe(mockSocket);
    expect((mockSocket.write as Mock).mock.calls.length).toBe(2);
  });

  it("should successfully connect with username/password authentication", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_AUTH_SUCCESS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_CONNECT_SUCCESS_RESPONSE);

    await expect(connectPromise).resolves.toBe(mockSocket);
    expect((mockSocket.write as Mock).mock.calls.length).toBe(3);
  });

  it("should successfully connect to a domain name destination", async () => {
    const domainOptions = {
      ...options,
      steamCM: { host: "example.com", port: 80 },
    };
    const connectPromise = Socks5ProxyConnector.connect(domainOptions);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_CONNECT_SUCCESS_RESPONSE);

    await expect(connectPromise).resolves.toBe(mockSocket);
    const writeCallArgs = (mockSocket.write as Mock).mock.calls[1];
    if (!writeCallArgs) {
      throw new Error("Expected SOCKS5 connect request write call");
    }
    const connRequest = writeCallArgs[0] as Buffer;
    expect(connRequest[3]).toBe(0x03); // Domain name address type
    expect(connRequest.toString("ascii")).toContain("example.com");
  });

  it("should handle socket error during initial connection to proxy", async () => {
    const connectionError = new Error("ECONNREFUSED");
    vi.mocked(mockSocket.connect).mockImplementation(() => {
      mockSocket.emit("error", connectionError);
      return mockSocket;
    });
    const connectPromise = Socks5ProxyConnector.connect(options);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy(
      (e: ConnectorError) => e.cause === connectionError,
    );
  });

  it("should handle invalid SOCKS version in method selection response", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from([0x04, 0x00]));

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Invalid SOCKS version"),
    );
  });

  it("should handle no acceptable authentication methods", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_ACCEPTABLE_RESPONSE);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("unsupported authentication method"),
    );
  });

  it("should handle mismatch between provided auth and proxy requirements", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("does not support username/password"),
    );
  });

  it("should handle proxy requiring auth but no credentials provided", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("requires authentication"),
    );
  });

  it("should handle auth version mismatch", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.from([0x02, 0x00]));

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(optionsWithAuth));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Invalid SOCKS5 auth version"),
    );
  });

  it("should handle authentication failure", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_AUTH_FAILED_RESPONSE);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(optionsWithAuth));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("authentication failed"),
    );
  });

  it("should handle a generic connection request rejection", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_CONNECT_REJECTED_RESPONSE);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Connection not allowed by ruleset"),
    );
  });

  it("should handle a specific connection rejection reason (Host unreachable)", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    // Status 0x04 = Host unreachable
    const hostUnreachableResponse = Buffer.from([
      0x05, 0x04, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    ]);
    mockSocket.emit("data", hostUnreachableResponse);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Host unreachable"),
    );
  });

  it("should handle unexpectedly large response during method selection", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.alloc(2048));

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("response unexpectedly large"),
    );
  });

  it("should handle an oversized response during authentication", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", Buffer.alloc(2048)); // Oversized auth response

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(optionsWithAuth));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("response unexpectedly large"),
    );
  });

  it("should handle socket closing unexpectedly during method selection", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("close");

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket closed"),
    );
  });

  it("should handle socket closing unexpectedly during authentication", async () => {
    const connectPromise = Socks5ProxyConnector.connect(optionsWithAuth);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_USER_PASS_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("close");

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(optionsWithAuth));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket closed"),
    );
  });

  it("should handle socket closing unexpectedly during connection request", async () => {
    const connectPromise = Socks5ProxyConnector.connect(options);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("data", SOCKS5_METHOD_NO_AUTH_RESPONSE);
    await new Promise<void>((resolve) => queueMicrotask(resolve));
    mockSocket.emit("close");

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket closed"),
    );
  });

  it("should reject on timeout", async () => {
    vi.mocked(mockSocket.connect).mockImplementation(() => mockSocket);
    vi.mocked(mockSocket.write).mockImplementation(() => true);

    const connectPromise = Socks5ProxyConnector.connect(options);
    vi.advanceTimersByTime(options.timeout + 1);

    await expect(connectPromise).rejects.toThrow(getWrappedErrorPrefix(options));
    await expect(connectPromise).rejects.toSatisfy((e: ConnectorError) =>
      (e.cause as Error).message.includes("Socket timed out"),
    );
  });
});
