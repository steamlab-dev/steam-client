import { createHash, randomBytes } from "node:crypto";
import { EventEmitter } from "node:events";
import type { Socket } from "node:net";
import { connect, type TLSSocket } from "node:tls";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import TransportError from "@/connection/protocol-transports/error";
import WebSocketTransport from "@/connection/protocol-transports/websocket-transport";
import type { ConnectionOptions, SteamCMServer } from "@/connection/types";

// --- Mocks ---
vi.mock("net");
vi.mock("tls", () => ({ connect: vi.fn() }));
vi.mock("crypto", () => ({ randomBytes: vi.fn(), createHash: vi.fn() }));
vi.mock("@/connection/protocol-transports/error", () => {
  class MockTransportError extends Error {
    public cause: unknown;
    constructor(message: string, cause?: unknown) {
      super(message);
      this.name = "TransportError";
      this.cause = cause;
    }
  }
  return { default: MockTransportError };
});

describe("WebSocketTransport", () => {
  let mockInitialSocket: Socket & EventEmitter;
  let mockTlsSocket: Socket & EventEmitter;
  let mockConnectionOptions: ConnectionOptions;

  const mockTlsConnect = connect as Mock;
  const mockRandomBytes = randomBytes as Mock;
  const mockCreateHash = createHash as Mock;

  const _FAKE_HANDSHAKE_KEY = "dGhlIHNhbXBsZSBub25jZQ==";
  const FAKE_ACCEPT_KEY = "s3pPLMBiTxaQ9kYGzzhZRbK+xOo=";
  const STEAM_CM_SERVER: SteamCMServer = {
    host: "testhost.steam.com",
    port: 27019,
  };
  const SUCCESSFUL_HANDSHAKE_RESPONSE = [
    "HTTP/1.1 101 Switching Protocols",
    "Upgrade: websocket",
    "Connection: Upgrade",
    `Sec-WebSocket-Accept: ${FAKE_ACCEPT_KEY}`,
    "\r\n",
  ].join("\r\n");

  const getWrappedErrorPrefix = () =>
    `Failed to establish websocket transport to ${STEAM_CM_SERVER.host}:${STEAM_CM_SERVER.port}`;

  beforeEach(() => {
    vi.useFakeTimers();
    const removeListenerSpy = vi.fn();

    mockInitialSocket = Object.assign(new EventEmitter(), {
      destroy: vi.fn(),
      off: removeListenerSpy,
      removeListener: removeListenerSpy,
    }) as unknown as Socket & EventEmitter;

    mockTlsSocket = Object.assign(new EventEmitter(), {
      write: vi.fn((_data, cb?: (err?: Error) => void) => {
        if (cb) {
          cb();
        }
      }),
      destroy: vi.fn(),
      off: removeListenerSpy,
      removeListener: removeListenerSpy,
    }) as unknown as Socket & EventEmitter;

    mockTlsConnect.mockReturnValue(mockTlsSocket as unknown as TLSSocket);
    mockRandomBytes.mockReturnValue(Buffer.from("the sample nonce"));

    const mockSha1 = {
      update: vi.fn().mockReturnThis(),
      digest: vi.fn(),
    };
    mockSha1.digest.mockImplementation((encoding?: "base64" | "hex" | "binary") => {
      const rawDigest = Buffer.from(FAKE_ACCEPT_KEY, "base64");
      return encoding ? rawDigest.toString(encoding) : rawDigest;
    });
    mockCreateHash.mockReturnValue(mockSha1);

    mockConnectionOptions = {
      steamCM: STEAM_CM_SERVER,
      timeout: 5000,
    };
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  describe("setupTransport", () => {
    it("should successfully perform TLS upgrade and WebSocket handshake", async () => {
      const setupPromise = WebSocketTransport.setupTransport(
        mockInitialSocket,
        mockConnectionOptions,
      );

      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("secureConnect");

      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("data", Buffer.from(SUCCESSFUL_HANDSHAKE_RESPONSE));

      await expect(setupPromise).resolves.toBe(mockTlsSocket);
    });

    it("should throw TransportError if TLS upgrade fails", async () => {
      const setupPromise = WebSocketTransport.setupTransport(
        mockInitialSocket,
        mockConnectionOptions,
      );
      const tlsError = new Error("TLS connection failed");

      // Attach the handler BEFORE the action that causes rejection.
      const assertion = expect(setupPromise).rejects.toSatisfy((e: TransportError) => {
        expect(e).toBeInstanceOf(TransportError);
        expect(e.message).toBe(getWrappedErrorPrefix());
        expect(e.cause).toBe(tlsError);
        return true;
      });

      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("error", tlsError);

      await assertion;
    });

    it("should throw TransportError if the socket closes during handshake", async () => {
      const setupPromise = WebSocketTransport.setupTransport(
        mockInitialSocket,
        mockConnectionOptions,
      );

      const assertion = expect(setupPromise).rejects.toSatisfy((e: TransportError) => {
        expect(e.message).toBe(getWrappedErrorPrefix());
        expect((e.cause as Error).message).toBe("Socket closed by remote end");
        return true;
      });

      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("secureConnect");
      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("close");

      await assertion;
    });

    it("should throw TransportError on timeout", async () => {
      const setupPromise = WebSocketTransport.setupTransport(
        mockInitialSocket,
        mockConnectionOptions,
      );

      const assertion = expect(setupPromise).rejects.toSatisfy((e: TransportError) => {
        expect(e.message).toBe(getWrappedErrorPrefix());
        expect((e.cause as Error).message).toBe(
          `Socket timed out after ${mockConnectionOptions.timeout} ms`,
        );
        return true;
      });

      await vi.advanceTimersByTimeAsync(mockConnectionOptions.timeout + 1);

      await assertion;
    });
  });

  describe("WebSocket Handshake Failures", () => {
    const testHandshakeFailure = async (response: string, expectedCauseMessage: string) => {
      const setupPromise = WebSocketTransport.setupTransport(
        mockInitialSocket,
        mockConnectionOptions,
      );

      const assertion = expect(setupPromise).rejects.toSatisfy((e: TransportError) => {
        expect(e.message).toBe(getWrappedErrorPrefix());
        expect((e.cause as Error).message).toContain(expectedCauseMessage);
        return true;
      });

      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("secureConnect");
      await vi.advanceTimersByTimeAsync(0);
      mockTlsSocket.emit("data", Buffer.from(response));

      await assertion;
    };

    it("should fail on invalid HTTP status code", async () => {
      await testHandshakeFailure(
        "HTTP/1.1 500 Internal Server Error\r\n\r\n",
        "failed with status: HTTP/1.1 500",
      );
    });

    it("should fail if Sec-WebSocket-Accept header is missing", async () => {
      await testHandshakeFailure(
        "HTTP/1.1 101 Switching Protocols\r\n\r\n",
        "missing Sec-WebSocket-Accept header",
      );
    });

    it("should fail if Sec-WebSocket-Accept header is incorrect", async () => {
      await testHandshakeFailure(
        "HTTP/1.1 101 Switching Protocols\r\nSec-WebSocket-Accept: incorrectValue\r\n\r\n",
        "Invalid Sec-WebSocket-Accept header value",
      );
    });

    it("should fail if Upgrade header is invalid", async () => {
      await testHandshakeFailure(
        `HTTP/1.1 101 Switching Protocols\r\nUpgrade: not-websocket\r\nSec-WebSocket-Accept: ${FAKE_ACCEPT_KEY}\r\n\r\n`,
        "Invalid or missing Upgrade header",
      );
    });

    it("should fail if Connection header is invalid", async () => {
      const response = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: keep-alive",
        `Sec-WebSocket-Accept: ${FAKE_ACCEPT_KEY}`,
        "\r\n",
      ].join("\r\n");
      await testHandshakeFailure(response, "Invalid or missing Connection header");
    });
  });
});
