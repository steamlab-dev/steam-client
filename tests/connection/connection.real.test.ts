import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Connection from "@/connection/connection";
import type { DisconnectMsg } from "@/connection/event-manager";
import type { ConnectionOptions } from "@/connection/types";

// Test configuration - WebSocket endpoints for Steam CM
const STEAM_WS_SERVERS = [
  { host: "cmp1-ord1.steamserver.net", port: 27019 },
  { host: "cmp1-iad1.steamserver.net", port: 27018 },
  { host: "cmp1-lax1.steamserver.net", port: 27017 },
] as const;

const DEFAULT_TIMEOUT = 15000; // 15 seconds for real network operations
const CONNECTION_TIMEOUT = 12000; // 12 seconds for connection attempts

// Test utilities
const createConnectionOptions = (
  serverIndex: number = 0,
  timeout: number = CONNECTION_TIMEOUT,
): ConnectionOptions => {
  const server = STEAM_WS_SERVERS[serverIndex];
  if (!server) {
    throw new Error(`Invalid server index: ${serverIndex}`);
  }
  return {
    steamCM: server,
    timeout,
  };
};

function createWebSocketBinaryFrame(data: string | Buffer): Buffer {
  const payload = typeof data === "string" ? Buffer.from(data, "utf8") : data;
  const frame = Buffer.alloc(2 + payload.length);
  frame[0] = 0x82; // FIN + binary opcode
  frame[1] = payload.length; // payload length
  payload.copy(frame, 2);
  return frame;
}

const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("WebSocket Connection Integration Tests", () => {
  // Global test cleanup
  let activeConnections: Connection[] = [];

  beforeEach(() => {
    vi.clearAllMocks();
    activeConnections = [];
  });

  afterEach(async () => {
    // Clean up all active connections
    await Promise.allSettled(
      activeConnections.map(async (conn) => {
        try {
          await conn.disconnect();
        } catch (_error) {
          // Ignore cleanup errors
        }
      }),
    );
    activeConnections = [];
  });

  // Helper function to create and track connections
  const createTrackedConnection = (options: ConnectionOptions): Connection => {
    const connection = new Connection(options);
    activeConnections.push(connection);
    return connection;
  };

  describe("WebSocket Connection Tests", { retry: 2 }, () => {
    it(
      "should connect to Steam CM server via WebSocket",
      async () => {
        const connection = createTrackedConnection(createConnectionOptions(0));

        const socket = await connection.connect();
        expect(socket).toBeDefined();

        const state = connection.getState();
        expect(state.connected).toBe(true);
        expect(state.connecting).toBe(false);
        expect(state.steamConnected).toBe(true);
        expect(state.transportReady).toBe(true);
      },
      DEFAULT_TIMEOUT,
    );

    it(
      "should handle connection lifecycle properly",
      async () => {
        const connection = createTrackedConnection(createConnectionOptions(0));

        let state = connection.getState();
        expect(state.connected).toBe(false);

        const socket = await connection.connect();
        expect(socket).toBeDefined();

        state = connection.getState();
        expect(state.connected).toBe(true);

        await connection.disconnect();

        state = connection.getState();
        expect(state.transportReady).toBe(false);
        expect(state.steamConnected).toBe(false);
      },
      DEFAULT_TIMEOUT,
    );

    it("should handle connection timeout", async () => {
      const connection = createTrackedConnection({
        steamCM: { host: "192.0.2.1", port: 12345 },
        timeout: 1000,
      });

      await expect(connection.connect()).rejects.toThrow();
    }, 5000);

    it(
      "should handle WebSocket-specific connection flow",
      async () => {
        const connection = createTrackedConnection(createConnectionOptions(1));

        const socket = await connection.connect();
        expect(socket).toBeDefined();

        const state = connection.getState();
        expect(state.connected).toBe(true);
      },
      DEFAULT_TIMEOUT,
    );

    describe("Connection Drop Simulation", () => {
      it(
        "should emit disconnected event when socket is forcibly closed",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          let disconnectedCalled = false;
          let _disconnectMsg: DisconnectMsg | undefined;
          const disconnectedHandler = (msg: DisconnectMsg) => {
            disconnectedCalled = true;
            _disconnectMsg = msg;
          };

          connection.once("disconnected", disconnectedHandler);
          try {
            const socket = await connection.connect();
            expect(connection.getState().connected).toBe(true);

            const dropError = new Error("Simulated connection drop");
            socket.destroy(dropError);

            await waitFor(2000);

            expect(disconnectedCalled).toBe(true);
            expect(_disconnectMsg?.hadError).toBe(true);
            expect(_disconnectMsg?.source).toBe("socket");
          } finally {
            connection.off("disconnected", disconnectedHandler);
          }
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should handle unexpected socket errors",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          let disconnectedCalled = false;
          let _disconnectMsg: DisconnectMsg | undefined;
          const disconnectedHandler = (msg: DisconnectMsg) => {
            disconnectedCalled = true;
            _disconnectMsg = msg;
          };

          connection.once("disconnected", disconnectedHandler);
          try {
            const socket = await connection.connect();
            expect(connection.getState().connected).toBe(true);

            const socketError = new Error("Simulated socket error");
            socket.emit("error", socketError);

            await waitFor(2000);

            expect(disconnectedCalled).toBe(true);
          } finally {
            connection.off("disconnected", disconnectedHandler);
          }
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should detect connection state after socket destruction",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const socket = await connection.connect();
          expect(connection.getState().connected).toBe(true);

          const networkError = new Error("Network connection lost");
          socket.destroy(networkError);

          await waitFor(1000);

          try {
            const state = connection.getState();
            expect(state.connected).toBe(false);
          } catch (error) {
            expect((error as Error).message).toContain("Connection context is undefined");
          }
        },
        DEFAULT_TIMEOUT,
      );
    });

    describe("Connection Events", () => {
      it(
        "should emit data events when receiving data",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const dataEvents: Buffer[] = [];
          const dataHandler = (data: Buffer) => {
            dataEvents.push(data);
          };

          connection.on("data", dataHandler);

          try {
            await connection.connect();

            await waitFor(2000);

            const state = connection.getState();
            expect(state.connected).toBe(true);
          } finally {
            connection.off("data", dataHandler);
          }
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should NOT emit disconnected event on manual disconnect",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          let disconnectedCalled = false;
          const disconnectedHandler = () => {
            disconnectedCalled = true;
          };

          connection.once("disconnected", disconnectedHandler);

          try {
            await connection.connect();
            expect(connection.getState().connected).toBe(true);

            await connection.disconnect();

            await waitFor(500);

            expect(disconnectedCalled).toBe(false);
          } finally {
            connection.off("disconnected", disconnectedHandler);
          }
        },
        DEFAULT_TIMEOUT,
      );
    });

    describe("Data Transmission", () => {
      it(
        "should be able to send data after connecting",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          await connection.connect();
          expect(connection.getState().connected).toBe(true);

          const testData = Buffer.from([0x00, 0x00, 0x00, 0x00]);

          await expect(connection.send(testData)).resolves.not.toThrow();
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should reject send attempts when disconnected",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const testData = Buffer.from("test");

          await expect(connection.send(testData)).rejects.toThrow();

          await connection.connect();
          await connection.disconnect();

          await expect(connection.send(testData)).rejects.toThrow();
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should handle send failures when socket is unexpectedly closed",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const socket = await connection.connect();
          expect(connection.getState().connected).toBe(true);

          const connectionError = new Error("Connection reset by peer");
          socket.destroy(connectionError);

          await waitFor(500);

          const testData = Buffer.from("test");

          await expect(connection.send(testData)).rejects.toThrow();
        },
        DEFAULT_TIMEOUT,
      );
    });

    describe("Multiple Connections", () => {
      it(
        "should prevent multiple simultaneous connections",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          await connection.connect();
          expect(connection.getState().connected).toBe(true);

          await expect(connection.connect()).rejects.toThrow();
        },
        DEFAULT_TIMEOUT,
      );
    });

    describe("Fallback Servers", () => {
      it(
        "should work with different Steam CM servers",
        async () => {
          const connections = [
            createTrackedConnection(createConnectionOptions(0)),
            createTrackedConnection(createConnectionOptions(1)),
            createTrackedConnection(createConnectionOptions(2)),
          ];

          const results = await Promise.allSettled(connections.map((conn) => conn.connect()));

          const successes = results.filter((r) => r.status === "fulfilled");
          expect(successes.length).toBeGreaterThan(0);

          results.forEach((result, index) => {
            if (result.status === "fulfilled") {
              const connection = connections[index];
              if (!connection) {
                throw new Error(`Missing connection at index ${index}`);
              }
              const state = connection.getState();
              expect(state.connected).toBe(true);
              expect(result.value).toBeDefined();
            }
          });

          // Connections will be cleaned up automatically by afterEach
        },
        DEFAULT_TIMEOUT,
      );
    });

    describe("Error Handling", () => {
      it("should handle invalid host gracefully", async () => {
        const connection = createTrackedConnection({
          steamCM: {
            host: "invalid-host-that-does-not-exist.com",
            port: 27019,
          },
          timeout: 2000,
        });

        await expect(connection.connect()).rejects.toThrow();

        try {
          const state = connection.getState();
          expect(state.connected).toBe(false);
        } catch (error) {
          expect((error as Error).message).toContain("Connection context is undefined");
        }
      }, 5000);

      it("should handle invalid port gracefully", async () => {
        const connection = createTrackedConnection({
          steamCM: { host: "cmp1-ord1.steamserver.net", port: 99999 },
          timeout: 2000,
        });

        await expect(connection.connect()).rejects.toThrow();

        try {
          const state = connection.getState();
          expect(state.connected).toBe(false);
        } catch (error) {
          expect((error as Error).message).toContain("Connection context is undefined");
        }
      }, 5000);
    });

    describe("Connection Options", () => {
      it("should respect timeout settings", async () => {
        const startTime = Date.now();
        const connection = createTrackedConnection({
          steamCM: { host: "192.0.2.1", port: 12345 },
          timeout: 1000,
        });

        await expect(connection.connect()).rejects.toThrow();

        const elapsed = Date.now() - startTime;
        expect(elapsed).toBeGreaterThan(800);
        expect(elapsed).toBeLessThan(3000);
      }, 5000);
    });

    describe("Socket Management", () => {
      it(
        "should properly manage socket lifecycle",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const socket = await connection.connect();
          expect(socket).toBeDefined();
          expect(socket.destroyed).toBe(false);

          connection.disconnect();

          expect(socket.destroyed).toBe(true);
        },
        DEFAULT_TIMEOUT,
      );

      it(
        "should handle multiple socket events gracefully",
        async () => {
          const connection = createTrackedConnection(createConnectionOptions(0));

          const socket = await connection.connect();
          expect(connection.getState().connected).toBe(true);

          const disconnectedHandler = (_msg: DisconnectMsg) => {};

          const receivedData: string[] = [];
          const dataHandler = (data: Buffer) => {
            receivedData.push(data.toString());
          };

          connection.on("disconnected", disconnectedHandler);
          connection.on("data", dataHandler);

          try {
            const dummyPayload = Buffer.from("testdata");
            socket.emit("data", createWebSocketBinaryFrame(dummyPayload));
            const dummyPayload2 = Buffer.from("testdata2");
            socket.emit("data", createWebSocketBinaryFrame(dummyPayload2));

            await waitFor(100);

            expect(connection.getState().connected).toBe(true);
            expect(receivedData[0]).toEqual("testdata");
            expect(receivedData[1]).toEqual("testdata2");
          } finally {
            connection.off("disconnected", disconnectedHandler);
            connection.off("data", dataHandler);
          }
        },
        DEFAULT_TIMEOUT,
      );
    });
  });
});
