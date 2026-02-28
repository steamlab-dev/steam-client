import type { Socket } from "node:net";
import { describe, expect, it } from "vitest";
import ConnectorError from "@/connection/connectors/error";
import {
  buildConnectRequest,
  parseHttpStatusCode,
  readHttpHeadersUntilTerminator,
  validateProxyConnectStatus,
} from "@/connection/connectors/http-connect-shared";
import { createEventEmitterSocket, type EventEmitterSocket } from "../../helpers/socket-mocks";

describe("http-connect-shared", () => {
  it("builds CONNECT request with Proxy-Authorization when credentials are provided", () => {
    const request = buildConnectRequest("steam.example.com", 27017, {
      username: "user",
      password: "password",
    });

    expect(request).toContain("CONNECT steam.example.com:27017 HTTP/1.1");
    expect(request).toContain("Host: steam.example.com:27017");
    expect(request).toContain("Proxy-Authorization: Basic dXNlcjpwYXNzd29yZA==");
    expect(request).toContain("Connection: Keep-Alive");
  });

  it("builds CONNECT request without Proxy-Authorization when credentials are absent", () => {
    const request = buildConnectRequest("steam.example.com", 27017, {});

    expect(request).not.toContain("Proxy-Authorization");
    expect(request).toContain("CONNECT steam.example.com:27017 HTTP/1.1");
  });

  it("reads response headers that arrive in multiple chunks", async () => {
    const socket = createEventEmitterSocket() as unknown as Socket & EventEmitterSocket;

    const responsePromise = readHttpHeadersUntilTerminator(socket, { maxHeaderSize: 8192 });
    socket.emit("data", Buffer.from("HTTP/1.1 200"));
    socket.emit("data", Buffer.from(" OK\r\n\r\n"));

    await expect(responsePromise).resolves.toBe("HTTP/1.1 200 OK\r\n\r\n");
    expect(socket.removeListener).toHaveBeenCalledWith("data", expect.any(Function));
  });

  it("rejects when proxy response headers exceed max size", async () => {
    const socket = createEventEmitterSocket() as unknown as Socket;

    const responsePromise = readHttpHeadersUntilTerminator(socket, { maxHeaderSize: 16 });
    socket.emit("data", Buffer.from("HTTP/1.1 200 OK\r\nHeader: very-large-value\r\n\r\n"));

    await expect(responsePromise).rejects.toThrow(ConnectorError);
    await expect(responsePromise).rejects.toThrow("Proxy response headers too large or malformed.");
  });

  it("parses HTTP status code from valid response", () => {
    expect(parseHttpStatusCode("HTTP/1.1 407 Proxy Authentication Required\r\n\r\n")).toBe("407");
  });

  it("throws on malformed HTTP response status line", () => {
    expect(() => parseHttpStatusCode("Not HTTP\r\n\r\n")).toThrow(
      "Invalid HTTP response from proxy",
    );
  });

  it("accepts 2xx status code during CONNECT validation", () => {
    expect(() =>
      validateProxyConnectStatus("200", "HTTP/1.1 200 OK\r\n\r\n", "HTTP"),
    ).not.toThrow();
  });

  it("maps 407 status to protocol-specific auth error", () => {
    expect(() =>
      validateProxyConnectStatus(
        "407",
        "HTTP/1.1 407 Proxy Authentication Required\r\n\r\n",
        "HTTP",
      ),
    ).toThrow("HTTP proxy authentication failed");

    expect(() =>
      validateProxyConnectStatus(
        "407",
        "HTTP/1.1 407 Proxy Authentication Required\r\n\r\n",
        "HTTPS",
      ),
    ).toThrow("HTTPS proxy authentication failed");
  });

  it("includes status code and status line for unhandled failure statuses", () => {
    expect(() =>
      validateProxyConnectStatus("502", "HTTP/1.1 502 Bad Gateway\r\n\r\n", "HTTP"),
    ).toThrow("HTTP proxy CONNECT failed with status 502: HTTP/1.1 502 Bad Gateway");
  });

  it("maps 400 and 403 statuses to protocol-specific errors", () => {
    expect(() =>
      validateProxyConnectStatus("400", "HTTP/1.1 400 Bad Request\r\n\r\n", "HTTP"),
    ).toThrow("HTTP proxy bad request: HTTP/1.1 400 Bad Request");

    expect(() =>
      validateProxyConnectStatus("403", "HTTP/1.1 403 Forbidden\r\n\r\n", "HTTPS"),
    ).toThrow("HTTPS proxy forbidden: HTTP/1.1 403 Forbidden");
  });

  it("uses fallback status line text when response has no status line", () => {
    expect(() => validateProxyConnectStatus("500", "", "HTTP")).toThrow(
      "HTTP proxy CONNECT failed with status 500: No status line found",
    );
  });

  it("handles undefined first split segment via status-line fallback", () => {
    const fakeResponse = {
      split: () => [],
    } as unknown as string;

    expect(() => parseHttpStatusCode(fakeResponse)).toThrow("Invalid HTTP response from proxy");
  });
});
