import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import type { AddressInfo } from "node:net";
import path from "node:path";
import { createServer, type TLSSocket } from "node:tls";
import { fileURLToPath } from "node:url";

const WS_MAGIC_STRING = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
const CERT_FIXTURES_DIR = fileURLToPath(new URL("../fixtures/certs", import.meta.url));
const DEFAULT_CERT_PATH = path.join(CERT_FIXTURES_DIR, "server-cert.pem");
const DEFAULT_KEY_PATH = path.join(CERT_FIXTURES_DIR, "server-key.pem");
const DEFAULT_CA_PATH = path.join(CERT_FIXTURES_DIR, "ca-cert.pem");

export type SecureSteamCmServerStats = {
  tcpConnections: number;
  handshakeRequests: number;
  successfulHandshakes: number;
};

export type SecureSteamCmServer = {
  readonly host: string;
  readonly port: number;
  readonly certPath: string;
  readonly keyPath: string;
  getStats: () => Readonly<SecureSteamCmServerStats>;
  close: () => Promise<void>;
};

export type StartSecureSteamCmServerOptions = {
  host?: string;
  port?: number;
  certPath?: string;
  keyPath?: string;
};

const buildHandshakeResponse = (websocketKey: string): string => {
  const accept = createHash("sha1")
    .update(websocketKey + WS_MAGIC_STRING)
    .digest("base64");

  return [
    "HTTP/1.1 101 Switching Protocols",
    "Upgrade: websocket",
    "Connection: Upgrade",
    `Sec-WebSocket-Accept: ${accept}`,
    "Sec-WebSocket-Protocol: steam",
    "",
    "",
  ].join("\r\n");
};

const parseHeaders = (rawHeaders: string[]): Map<string, string> => {
  const headers = new Map<string, string>();

  for (const headerLine of rawHeaders) {
    const separatorIndex = headerLine.indexOf(":");
    if (separatorIndex <= 0) {
      continue;
    }

    const key = headerLine.slice(0, separatorIndex).trim().toLowerCase();
    const value = headerLine.slice(separatorIndex + 1).trim();

    if (key.length > 0) {
      headers.set(key, value);
    }
  }

  return headers;
};

const validateWebSocketUpgradeRequest = (request: string): string => {
  const lines = request.split("\r\n");
  const requestLine = lines[0] ?? "";
  const statusMatch = requestLine.match(/^GET\s+([^\s]+)\s+HTTP\/1\.1$/u);

  if (!statusMatch) {
    throw new Error(`Invalid handshake request line: ${requestLine}`);
  }

  const requestPath = statusMatch[1];
  if (requestPath !== "/cmsocket/") {
    throw new Error(`Unexpected handshake path: ${requestPath}`);
  }

  const headers = parseHeaders(lines.slice(1));
  const upgrade = headers.get("upgrade")?.toLowerCase() ?? "";
  const connection = headers.get("connection")?.toLowerCase() ?? "";
  const websocketKey = headers.get("sec-websocket-key");

  if (upgrade !== "websocket") {
    throw new Error("Missing or invalid Upgrade header");
  }

  if (!connection.includes("upgrade")) {
    throw new Error("Missing or invalid Connection header");
  }

  if (!websocketKey) {
    throw new Error("Missing Sec-WebSocket-Key header");
  }

  return websocketKey;
};

export const readIntegrationCaCertificate = (): string => {
  return readFileSync(DEFAULT_CA_PATH, "utf8");
};

export const startSecureSteamCmServer = async (
  options: StartSecureSteamCmServerOptions = {},
): Promise<SecureSteamCmServer> => {
  const host = options.host ?? "127.0.0.1";
  const port = options.port ?? 0;
  const certPath = options.certPath ?? DEFAULT_CERT_PATH;
  const keyPath = options.keyPath ?? DEFAULT_KEY_PATH;

  const cert = readFileSync(certPath, "utf8");
  const key = readFileSync(keyPath, "utf8");

  const sockets = new Set<TLSSocket>();
  const stats: SecureSteamCmServerStats = {
    tcpConnections: 0,
    handshakeRequests: 0,
    successfulHandshakes: 0,
  };

  const server = createServer(
    {
      cert,
      key,
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    (socket) => {
      stats.tcpConnections += 1;
      sockets.add(socket);

      let handshakeBuffer = Buffer.alloc(0);
      let handshakeCompleted = false;

      socket.once("close", () => {
        sockets.delete(socket);
      });

      socket.on("error", () => {
        socket.destroy();
      });

      socket.on("data", (chunk: Buffer) => {
        if (handshakeCompleted) {
          return;
        }

        handshakeBuffer = Buffer.concat([handshakeBuffer, chunk]);
        const headerEnd = handshakeBuffer.indexOf("\r\n\r\n");

        if (headerEnd === -1) {
          return;
        }

        stats.handshakeRequests += 1;

        const rawRequest = handshakeBuffer.subarray(0, headerEnd + 4).toString("utf8");

        try {
          const websocketKey = validateWebSocketUpgradeRequest(rawRequest);
          const response = buildHandshakeResponse(websocketKey);

          handshakeCompleted = true;
          stats.successfulHandshakes += 1;
          socket.write(response);
        } catch {
          socket.write("HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n");
          socket.end();
        }
      });
    },
  );

  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => resolve());
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Secure CM server did not bind to an address");
  }

  const resolvedPort = (address as AddressInfo).port;

  return {
    host,
    port: resolvedPort,
    certPath,
    keyPath,
    getStats: () => ({ ...stats }),
    close: async () => {
      for (const socket of sockets) {
        socket.destroy();
      }

      await new Promise<void>((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      });
    },
  };
};
