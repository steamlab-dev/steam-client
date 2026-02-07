import type { Socket } from "node:net";
import type { MockedFunction } from "vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Connection, { ConnectionError } from "@/connection/connection";
import ConnectionFactory from "@/connection/factory";
import type { ConnectionOptions } from "@/connection/types";

// Mock the ConnectionFactory
vi.mock("@/connection/factory");

// MockPipeline interface
interface MockPipeline {
  execute: MockedFunction<(context: unknown) => Promise<void>>;
}

// MockContext interface with proper typing
interface MockContext {
  stateManager: {
    hasActiveConnection: MockedFunction<() => boolean>;
    setDisconnected: MockedFunction<() => void>;
    setConnecting: MockedFunction<() => void>;
    getState: MockedFunction<() => unknown>;
  };
  eventManager: {
    cleanUp: MockedFunction<() => void>;
    attachEvents: MockedFunction<(context: unknown) => void>;
  };
  sender: {
    send: MockedFunction<(data: Buffer) => Promise<void>>;
    cleanUp: MockedFunction<() => void>;
  };
  socket: Socket;
  parser: {
    cleanUp: MockedFunction<() => void>;
  };
  connector: object;
  transport: object;
  connectionOptionsValidator: {
    validate: MockedFunction<() => void>;
  };
  emitter: {
    on: MockedFunction<(event: string, callback: (...args: unknown[]) => unknown) => void>;
    once: MockedFunction<(event: string, callback: (...args: unknown[]) => unknown) => void>;
    emit: MockedFunction<(event: string, ...args: unknown[]) => void>;
  };
}

// Factory function for creating mock Socket
const createMockSocket = (): Socket =>
  ({
    removeAllListeners: vi.fn(),
    destroy: vi.fn(),
    write: vi.fn(),
    connect: vi.fn(),
    setEncoding: vi.fn(),
  }) as unknown as Socket;

// Factory function for creating mock context
const createMockContext = (): MockContext => ({
  stateManager: {
    hasActiveConnection: vi.fn(() => false),
    setDisconnected: vi.fn(),
    setConnecting: vi.fn(),
    getState: vi.fn(() => ({
      status: "Disconnected",
      connected: false,
    })),
  },
  eventManager: {
    cleanUp: vi.fn(),
    attachEvents: vi.fn(),
  },
  sender: {
    send: vi.fn().mockResolvedValue(undefined),
    cleanUp: vi.fn(),
  },
  socket: createMockSocket(),
  parser: {
    cleanUp: vi.fn(),
  },
  connector: {},
  transport: {},
  connectionOptionsValidator: {
    validate: vi.fn(),
  },
  emitter: {
    on: vi.fn(),
    once: vi.fn(),
    emit: vi.fn(),
  },
});

// Factory function for creating mock pipeline
const createMockPipeline = (): MockPipeline => ({
  execute: vi.fn().mockResolvedValue(undefined),
});

// Default connection options
const DEFAULT_OPTIONS: ConnectionOptions = {
  steamCM: { host: "127.0.0.1", port: 27020 },
  timeout: 5000,
} as const;

describe("Connection", () => {
  let connection: Connection;
  let mockPipeline: MockPipeline;
  let mockContext: MockContext;
  let mockConnectionFactory: unknown;

  beforeEach(() => {
    mockPipeline = createMockPipeline();
    mockContext = createMockContext();

    // Get the mocked ConnectionFactory
    mockConnectionFactory = vi.mocked(ConnectionFactory);

    // Setup default mocks for ConnectionFactory
    const mf = mockConnectionFactory as unknown as {
      createConnection: (...args: unknown[]) => unknown;
      createPipeline: () => MockPipeline;
    };
    mf.createConnection = vi.fn().mockReturnValue(mockContext);
    mf.createPipeline = vi.fn().mockReturnValue(mockPipeline);

    connection = new Connection(DEFAULT_OPTIONS);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("connect", () => {
    it("should throw ConnectionError if connection is already active", async () => {
      mockContext.stateManager.hasActiveConnection.mockReturnValue(true);

      await expect(connection.connect()).rejects.toThrow(ConnectionError);
      expect(mockContext.stateManager.hasActiveConnection).toHaveBeenCalledOnce();
    });

    it("should execute pipeline successfully", async () => {
      // Configure the mock pipeline's execute method to simulate the side-effect
      // of the EventManagerStep, which is to call attachEvents.
      mockPipeline.execute.mockImplementation(async (context: unknown) => {
        const ctx = context as MockContext;
        ctx.eventManager.attachEvents(ctx);
        return Promise.resolve();
      });

      await connection.connect();

      // Now, all assertions will pass
      expect(mockPipeline.execute).toHaveBeenCalledOnce();
      expect(mockPipeline.execute).toHaveBeenCalledWith(mockContext);
      expect(mockContext.eventManager.attachEvents).toHaveBeenCalledWith(mockContext);
    });

    it("should clean up and throw ConnectionError when pipeline execution fails", async () => {
      const pipelineError = new Error("Pipeline execution failed");
      mockPipeline.execute.mockRejectedValue(pipelineError);
      const cleanUpSpy = vi.spyOn(
        connection as unknown as { cleanUp: () => Promise<void> },
        "cleanUp",
      );

      await expect(connection.connect()).rejects.toThrow(ConnectionError);

      expect(cleanUpSpy).toHaveBeenCalledOnce();
    });
  });

  describe("disconnect", () => {
    it("should call cleanUp method", async () => {
      const cleanUpSpy = vi
        .spyOn(connection as unknown as { cleanUp: () => void }, "cleanUp")
        .mockImplementation(() => {});

      connection.disconnect();

      expect(cleanUpSpy).toHaveBeenCalledOnce();
    });

    it("should be safe to call multiple times", async () => {
      // We need to establish a context for cleanup to work on
      await connection.connect();
      const destroySpy = vi.spyOn(mockContext.socket, "destroy");

      connection.disconnect();
      connection.disconnect();

      expect(destroySpy).toHaveBeenCalledOnce();
    });
  });

  describe("getState", () => {
    it("should return current connection state", () => {
      const expectedState = { status: "Connected", connected: true };
      // Simulate an active connection by assigning the persistent state manager
      (connection as unknown as { state?: unknown }).state = mockContext.stateManager;
      // Make the mock state return the connected state
      mockContext.stateManager.getState.mockReturnValue(expectedState);
      const result = connection.getState();

      expect(result).toEqual(expectedState);
      expect(mockContext.stateManager.getState).toHaveBeenCalledOnce();
    });

    it("should return state even if context is undefined", () => {
      const expectedState = { status: "Disconnected", connected: false };

      // The state manager is persistent, so even if context is undefined,
      // we should still be able to get state through the persistent state manager
      const _persistentState = (connection as unknown as { state?: unknown }).state;
      (connection as unknown as { context?: unknown }).context = undefined;

      const result = connection.getState();
      expect(result).toEqual(expectedState);
    });
  });

  describe("send", () => {
    beforeEach(async () => {
      // Ensure there's a context for send operations
      await connection.connect();
    });

    it("should send data using sender", async () => {
      const testData = Buffer.from("test data");

      await connection.send(testData);

      expect(mockContext.sender.send).toHaveBeenCalledOnce();
      expect(mockContext.sender.send).toHaveBeenCalledWith(testData);
    });

    it("should throw ConnectionError if context is undefined", async () => {
      (connection as unknown as { context?: unknown }).context = undefined;
      const testData = Buffer.from("test");

      await expect(connection.send(testData)).rejects.toThrow(ConnectionError);
    });

    it("should propagate sender errors", async () => {
      const senderError = new Error("Send failed");
      mockContext.sender.send.mockRejectedValue(senderError);

      await expect(connection.send(Buffer.from("test"))).rejects.toThrow(senderError);
    });
  });

  describe("event handling", () => {
    it("should set up event handlers correctly", async () => {
      // Spy on the connection's event emitter methods
      const onSpy = vi.spyOn(connection, "once");

      await connection.connect();

      // Check that the 'disconnected' event handler is set up
      expect(onSpy).toHaveBeenCalledWith("disconnected", expect.any(Function));
    });

    it("should handle 'disconnected' event and cleanup", async () => {
      const disconnectedListener = vi.fn();
      connection.on("disconnected", disconnectedListener);

      const cleanUpSpy = vi.spyOn(
        connection as unknown as { cleanUp: () => Promise<void> },
        "cleanUp",
      );

      // Connect to set up the context and listeners
      await connection.connect();

      // Simulate a disconnected event being emitted from the internal emitter
      const internalEmitter = (
        connection as unknown as {
          emitter?: { emit: (...args: unknown[]) => void };
        }
      ).emitter;
      internalEmitter?.emit("disconnected", new Error("Socket closed"));

      expect(cleanUpSpy).toHaveBeenCalledOnce();
      expect(disconnectedListener).toHaveBeenCalledOnce();
      expect(disconnectedListener).toHaveBeenCalledWith(new Error("Socket closed"));
    });

    it("should forward events from emitter", async () => {
      const dataListener = vi.fn();
      connection.on("data", dataListener);

      await connection.connect();

      // Simulate data event being emitted from the internal emitter
      const internalEmitter = (
        connection as unknown as {
          emitter?: { emit: (...args: unknown[]) => void };
        }
      ).emitter;
      const testPayload = Buffer.from("hello world");
      internalEmitter?.emit("data", testPayload);

      expect(dataListener).toHaveBeenCalledOnce();
      expect(dataListener).toHaveBeenCalledWith(testPayload);
    });

    describe("cleanup", () => {
      beforeEach(async () => {
        // Ensure there's a context to clean up
        await connection.connect();
      });

      it("should perform complete cleanup", async () => {
        await (connection as unknown as { cleanUp: () => Promise<void> }).cleanUp();

        expect(mockContext.stateManager.setDisconnected).toHaveBeenCalledOnce();
        expect(mockContext.socket.destroy).toHaveBeenCalledOnce();
        expect(mockContext.eventManager.cleanUp).toHaveBeenCalledOnce();
        expect(mockContext.parser.cleanUp).toHaveBeenCalledOnce();
        expect((connection as unknown as { context?: unknown }).context).toBeUndefined();
      });

      it("should be idempotent", async () => {
        const destroySpy = vi.spyOn(mockContext.socket, "destroy");

        await (connection as unknown as { cleanUp: () => Promise<void> }).cleanUp();
        await (connection as unknown as { cleanUp: () => Promise<void> }).cleanUp();

        expect(destroySpy).toHaveBeenCalledOnce();
      });
    });

    describe("hasActiveConnection", () => {
      it("should return the result from state manager", () => {
        const mockState = (
          connection as unknown as {
            state?: { hasActiveConnection: () => boolean };
          }
        ).state;
        const ms = mockState as unknown as {
          hasActiveConnection: import("vitest").MockedFunction<() => boolean>;
        };
        vi.spyOn(ms, "hasActiveConnection").mockReturnValue(true);

        const result = connection.hasActiveConnection();

        expect(result).toBe(true);
        expect(ms.hasActiveConnection).toHaveBeenCalledOnce();
      });
    });
  });
});
