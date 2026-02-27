import { Socket } from "node:net";
import { connect as tlsConnect } from "node:tls";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import type ConnectorError from "@/connection/connectors/error";
import HttpsProxyConnector from "@/connection/connectors/https-proxy-connector";
import type { ConnectionOptions } from "@/connection/types";
import {
  createEventEmitterSocket,
  type EventEmitterSocket,
  flushMicrotasks,
  mockConnectSuccess,
  mockWriteSuccess,
} from "../../helpers/socket-mocks";

vi.mock("net");
vi.mock("tls", () => ({ connect: vi.fn() }));

describe("HttpsProxyConnector", () => {
  let proxySocket: EventEmitterSocket;
  let secureProxySocket: EventEmitterSocket;

  const options: ConnectionOptions = {
    steamCM: { host: "steam.example.com", port: 27017 },
    proxy: {
      protocol: "https",
      host: "proxy.example.com",
      port: 8443,
      username: "user",
      password: "password",
    },
    timeout: 5000,
  };

  beforeEach(() => {
    proxySocket = createEventEmitterSocket();
    secureProxySocket = createEventEmitterSocket();

    mockConnectSuccess(proxySocket);
    mockWriteSuccess(secureProxySocket);

    vi.mocked(Socket).mockImplementation(function () {
      return proxySocket as unknown as Socket;
    });

    (tlsConnect as Mock).mockImplementation(() => {
      return secureProxySocket;
    });

    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("throws ConnectorError when proxy configuration is missing", async () => {
    const optionsWithoutProxy = {
      ...options,
      proxy: undefined,
    };

    await expect(HttpsProxyConnector.connect(optionsWithoutProxy)).rejects.toThrow(
      "Proxy configuration is required for HttpsProxyConnector",
    );
  });

  it("connects through HTTPS proxy with authentication", async () => {
    const connectPromise = HttpsProxyConnector.connect(options);

    await flushMicrotasks();
    secureProxySocket.emit("secureConnect");
    await flushMicrotasks();
    await flushMicrotasks();
    secureProxySocket.emit("data", Buffer.from("HTTP/1.1 200 Connection Established\r\n\r\n"));

    await expect(connectPromise).resolves.toBe(secureProxySocket);

    expect(proxySocket.connect).toHaveBeenCalledWith(
      options.proxy?.port,
      options.proxy?.host,
      expect.any(Function),
    );

    const tlsCall = (tlsConnect as Mock).mock.calls.at(-1)?.[0] as {
      host: string;
      port: number;
      servername: string;
      rejectUnauthorized: boolean;
      socket: unknown;
    };

    expect(tlsCall.host).toBe("proxy.example.com");
    expect(tlsCall.port).toBe(8443);
    expect(tlsCall.servername).toBe("proxy.example.com");
    expect(tlsCall.rejectUnauthorized).toBe(true);
    expect(tlsCall.socket).toBe(proxySocket);

    const writeCall = (secureProxySocket.write as Mock).mock.calls[0]?.[0] as string;
    expect(writeCall).toContain("CONNECT steam.example.com:27017 HTTP/1.1");
    expect(writeCall).toContain("Proxy-Authorization: Basic");
  });

  it("does not set SNI when proxy host is an IP address", async () => {
    const optionsWithIpProxyHost: ConnectionOptions = {
      ...options,
      proxy: {
        ...(options.proxy as NonNullable<ConnectionOptions["proxy"]>),
        host: "127.0.0.1",
      },
    };

    const connectPromise = HttpsProxyConnector.connect(optionsWithIpProxyHost);

    await flushMicrotasks();
    secureProxySocket.emit("secureConnect");
    await flushMicrotasks();
    await flushMicrotasks();
    secureProxySocket.emit("data", Buffer.from("HTTP/1.1 200 OK\r\n\r\n"));

    await expect(connectPromise).resolves.toBe(secureProxySocket);

    const tlsCall = (tlsConnect as Mock).mock.calls.at(-1)?.[0] as {
      servername?: string;
      rejectUnauthorized: boolean;
    };

    expect(tlsCall.servername).toBeUndefined();
    expect(tlsCall.rejectUnauthorized).toBe(true);
  });

  it("rejects when HTTPS proxy returns non-2xx response", async () => {
    const connectPromise = HttpsProxyConnector.connect(options);

    await flushMicrotasks();
    secureProxySocket.emit("secureConnect");
    await flushMicrotasks();
    await flushMicrotasks();
    secureProxySocket.emit(
      "data",
      Buffer.from("HTTP/1.1 407 Proxy Authentication Required\r\n\r\n"),
    );

    await expect(connectPromise).rejects.toThrow(
      "Failed to connect via HTTPS proxy proxy.example.com:8443 to steam.example.com:27017",
    );
    await expect(connectPromise).rejects.toSatisfy((error: ConnectorError) =>
      (error.cause as Error).message.includes("HTTPS proxy authentication failed"),
    );
  });

  it("rejects when proxy TLS handshake fails", async () => {
    const connectPromise = HttpsProxyConnector.connect(options);
    const tlsError = new Error("certificate verify failed");

    await flushMicrotasks();
    secureProxySocket.emit("error", tlsError);

    await expect(connectPromise).rejects.toThrow(
      "Failed to connect via HTTPS proxy proxy.example.com:8443 to steam.example.com:27017",
    );
    await expect(connectPromise).rejects.toSatisfy(
      (error: ConnectorError) => error.cause === tlsError,
    );
  });

  it("rejects on timeout", async () => {
    vi.mocked(proxySocket.connect).mockImplementation(() => proxySocket);

    const connectPromise = HttpsProxyConnector.connect(options);
    vi.advanceTimersByTime(options.timeout + 1);

    await expect(connectPromise).rejects.toThrow(
      "Failed to connect via HTTPS proxy proxy.example.com:8443 to steam.example.com:27017",
    );
    await expect(connectPromise).rejects.toSatisfy((error: ConnectorError) =>
      (error.cause as Error).message.includes("Socket timed out"),
    );
  });
});
