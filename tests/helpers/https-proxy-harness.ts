import { readFileSync } from "node:fs";
import net, { type AddressInfo, type Socket } from "node:net";
import path from "node:path";
import { createServer, type TLSSocket } from "node:tls";
import { fileURLToPath } from "node:url";

const CERT_FIXTURES_DIR = fileURLToPath(new URL("../fixtures/certs", import.meta.url));
const DEFAULT_CERT_PATH = path.join(CERT_FIXTURES_DIR, "server-cert.pem");
const DEFAULT_KEY_PATH = path.join(CERT_FIXTURES_DIR, "server-key.pem");

export type HttpsProxyHarness = {
  port: number;
  close: () => Promise<void>;
};

export type StartHttpsProxyHarnessOptions = {
  host?: string;
  port?: number;
  certPath?: string;
  keyPath?: string;
};

const parseConnectRequest = (request: string): { host: string; port: number } => {
  const requestLine = request.split("\r\n", 1)[0] ?? "";
  const match = requestLine.match(/^CONNECT\s+([^\s:]+):(\d+)\s+HTTP\/1\.[01]$/u);

  if (!match) {
    throw new Error(`Invalid CONNECT request line: ${requestLine}`);
  }

  const host = match[1];
  const portText = match[2];

  if (!host || !portText) {
    throw new Error(`Invalid CONNECT request line: ${requestLine}`);
  }

  const port = Number.parseInt(portText, 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid CONNECT target port: ${portText}`);
  }

  return { host, port };
};

export const startHttpsProxyHarness = async (
  options: StartHttpsProxyHarnessOptions = {},
): Promise<HttpsProxyHarness> => {
  const host = options.host ?? "127.0.0.1";
  const port = options.port ?? 0;
  const certPath = options.certPath ?? DEFAULT_CERT_PATH;
  const keyPath = options.keyPath ?? DEFAULT_KEY_PATH;

  const cert = readFileSync(certPath, "utf8");
  const key = readFileSync(keyPath, "utf8");

  const tlsSockets = new Set<TLSSocket>();
  const upstreamSockets = new Set<Socket>();

  const server = createServer(
    {
      cert,
      key,
      minVersion: "TLSv1.2",
      maxVersion: "TLSv1.3",
    },
    (clientSocket) => {
      tlsSockets.add(clientSocket);

      let handshakeBuffer = Buffer.alloc(0);
      let upstreamSocket: Socket | undefined;
      let tunnelEstablished = false;

      clientSocket.once("close", () => {
        tlsSockets.delete(clientSocket);
        if (upstreamSocket && !upstreamSocket.destroyed) {
          upstreamSocket.destroy();
        }
      });

      clientSocket.on("error", () => {
        clientSocket.destroy();
      });

      clientSocket.on("data", (chunk: Buffer) => {
        if (tunnelEstablished) {
          return;
        }

        handshakeBuffer = Buffer.concat([handshakeBuffer, chunk]);
        const headerEnd = handshakeBuffer.indexOf("\r\n\r\n");

        if (headerEnd === -1) {
          return;
        }

        const request = handshakeBuffer.subarray(0, headerEnd + 4).toString("ascii");
        const initialPayload = handshakeBuffer.subarray(headerEnd + 4);

        try {
          const target = parseConnectRequest(request);

          upstreamSocket = net.connect({ host: target.host, port: target.port }, () => {
            clientSocket.write(
              "HTTP/1.1 200 Connection Established\r\nConnection: Keep-Alive\r\n\r\n",
            );
            tunnelEstablished = true;

            if (initialPayload.length > 0) {
              upstreamSocket?.write(initialPayload);
            }

            clientSocket.pipe(upstreamSocket as Socket);
            (upstreamSocket as Socket).pipe(clientSocket);
          });

          upstreamSockets.add(upstreamSocket);
          upstreamSocket.once("close", () => {
            upstreamSockets.delete(upstreamSocket as Socket);
          });

          upstreamSocket.once("error", () => {
            if (!tunnelEstablished) {
              clientSocket.write("HTTP/1.1 502 Bad Gateway\r\nConnection: close\r\n\r\n");
              clientSocket.end();
              return;
            }

            clientSocket.destroy();
          });
        } catch {
          clientSocket.write("HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n");
          clientSocket.end();
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
    throw new Error("HTTPS proxy harness did not bind to an address");
  }

  return {
    port: (address as AddressInfo).port,
    close: async () => {
      for (const socket of tlsSockets) {
        socket.destroy();
      }
      for (const socket of upstreamSockets) {
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
