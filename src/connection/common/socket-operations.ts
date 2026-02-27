import type { Socket } from "node:net";
import type { TLSSocket } from "node:tls";

/**
 * Opens a socket connection and resolves once Node reports the socket as connected.
 */
export function connectSocket(socket: Socket, host: string, port: number): Promise<void> {
  return new Promise((resolve) => {
    socket.connect(port, host, resolve);
  });
}

/**
 * Waits for a TLSSocket to complete its secure handshake.
 */
export function waitForTlsSecureConnect(tlsSocket: TLSSocket): Promise<TLSSocket> {
  return new Promise<TLSSocket>((resolve, reject) => {
    const cleanup = () => {
      tlsSocket.off("error", onError);
      tlsSocket.off("secureConnect", onSecureConnect);
    };

    const onError = (error: unknown) => {
      cleanup();
      reject(error);
    };

    const onSecureConnect = () => {
      cleanup();
      resolve(tlsSocket);
    };

    tlsSocket.once("error", onError);
    tlsSocket.once("secureConnect", onSecureConnect);
  });
}
