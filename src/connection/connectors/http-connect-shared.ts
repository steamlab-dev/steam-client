import type { Socket } from "node:net";
import ConnectorError from "./error";

export interface ProxyConnectAuth {
  username?: string;
  password?: string;
}

export interface ProxyResponseReadOptions {
  maxHeaderSize: number;
}

/**
 * Constructs an HTTP CONNECT request with optional Basic proxy auth.
 */
export function buildConnectRequest(host: string, port: number, proxy: ProxyConnectAuth): string {
  let request = `CONNECT ${host}:${port} HTTP/1.1\r\nHost: ${host}:${port}\r\n`;

  if (proxy.username && proxy.password) {
    const credentials = Buffer.from(`${proxy.username}:${proxy.password}`).toString("base64");
    request += `Proxy-Authorization: Basic ${credentials}\r\n`;
  }

  request += "Connection: Keep-Alive\r\n\r\n";
  return request;
}

/**
 * Reads incoming proxy response headers until the HTTP header terminator is received.
 */
export function readHttpHeadersUntilTerminator(
  socket: Socket,
  options: ProxyResponseReadOptions,
): Promise<string> {
  return new Promise((resolve, reject) => {
    let receivedBuffer = Buffer.alloc(0);

    const cleanup = () => {
      socket.removeListener("data", onData);
    };

    const onData = (chunk: Buffer) => {
      receivedBuffer = Buffer.concat([receivedBuffer, chunk]);

      if (receivedBuffer.length > options.maxHeaderSize) {
        cleanup();
        reject(new ConnectorError("Proxy response headers too large or malformed."));
        return;
      }

      const responseStr = receivedBuffer.toString("ascii");
      if (responseStr.includes("\r\n\r\n")) {
        cleanup();
        resolve(responseStr);
      }
    };

    socket.on("data", onData);
  });
}

/**
 * Parses the HTTP status code from a proxy response status line.
 */
export function parseHttpStatusCode(response: string): string {
  const statusLine = response.split("\r\n")[0] ?? "";
  const match = statusLine.match(/HTTP\/\d\.\d\s+(\d{3})/);

  if (!match) {
    throw new ConnectorError(`Invalid HTTP response from proxy: ${statusLine}`);
  }

  const statusCode = match[1];
  if (!statusCode) {
    throw new ConnectorError(`Invalid HTTP response from proxy: ${statusLine}`);
  }

  return statusCode;
}

/**
 * Validates HTTP CONNECT status and throws protocol-specific errors for non-2xx statuses.
 */
export function validateProxyConnectStatus(
  statusCode: string,
  response: string,
  protocolName: "HTTP" | "HTTPS",
): void {
  if (statusCode.startsWith("2")) {
    return;
  }

  const statusLine = response.split("\r\n")[0] || "No status line found";

  switch (statusCode) {
    case "400":
      throw new ConnectorError(`${protocolName} proxy bad request: ${statusLine}`);
    case "403":
      throw new ConnectorError(`${protocolName} proxy forbidden: ${statusLine}`);
    case "407":
      throw new ConnectorError(`${protocolName} proxy authentication failed: ${statusLine}`);
    default:
      throw new ConnectorError(
        `${protocolName} proxy CONNECT failed with status ${statusCode}: ${statusLine}`,
      );
  }
}
