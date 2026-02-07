import type { Socket } from "node:net";

/**
 * Races a given asynchronous operation against socket events (error, close), and timeout
 * This utility ensures that an operation does not hang indefinitely and is properly cleaned up
 * in case of socket failures or timeouts.
 *
 * @param socket The socket to monitor for 'error' and 'close' events.
 * @param operation The asynchronous promise-based operation to execute.
 * @param timeoutMs The maximum time in milliseconds to wait for the operation to complete.
 * @returns A promise that resolves with the result of the operation or rejects if the socket
 * fails, the operation is rejected, or the timeout is exceeded.
 * @throws {Error} If the socket closes, an error occurs on the socket, or the operation times out.
 */
export default async function socketRace<T>({
  socket,
  operation,
  timeoutMs,
}: {
  socket: Socket;
  operation: Promise<T>;
  timeoutMs: number;
}): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let settled = false;
    let timeoutId: NodeJS.Timeout | null = null;

    /**
     * Removes all event listeners and clears the timeout to prevent memory leaks
     * and ensure the race is concluded cleanly.
     */
    function cleanup() {
      socket.off("error", onError);
      socket.off("close", onClose);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    /**
     * Handles the 'error' event on the socket, rejecting the main promise if the race is not already settled.
     */
    function onError(err: unknown) {
      if (!settled) {
        settled = true;
        cleanup();
        reject(err);
      }
    }

    /**
     * Handles the 'close' event on the socket, rejecting the main promise if the race is not already settled.
     */
    function onClose(hadError: boolean) {
      if (!settled) {
        settled = true;
        cleanup();
        reject(new Error(hadError ? "Socket closed due to error" : "Socket closed by remote end"));
      }
    }

    socket.on("error", onError);
    socket.on("close", onClose);

    timeoutId = setTimeout(() => {
      if (!settled) {
        settled = true;
        cleanup();
        reject(new Error(`Socket timed out after ${timeoutMs} ms`));
      }
    }, timeoutMs);

    operation
      .then((result) => {
        if (!settled) {
          settled = true;
          cleanup();
          resolve(result);
        }
      })
      .catch((err) => {
        if (!settled) {
          settled = true;
          cleanup();
          reject(err);
        }
      });
  });
}
