import { EventEmitter } from "node:events";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";
import DataParserError from "@/connection/data-parsers/error";
import type { DataParser } from "@/connection/data-parsers/types";
import EventManager, { type DisconnectMsg, EventManagerError } from "@/connection/event-manager";
import type { ConnectionContext, ConnectionEvents } from "@/connection/types";

// --- Mock helpers ---
const createMockSocket = () => {
  const socket = new EventEmitter() as EventEmitter & {
    on: ReturnType<typeof vi.fn>;
    off: ReturnType<typeof vi.fn>;
    emit: (event: string, ...args: unknown[]) => boolean;
  };
  socket.on = vi.fn().mockImplementation(socket.on);
  socket.off = vi.fn().mockImplementation(socket.off);
  return socket;
};

const createMockParser = () => {
  return {
    attach: vi.fn(),
    cleanUp: vi.fn(),
    getBufferSize: vi.fn().mockReturnValue(0),
  } as unknown as DataParser;
};

describe("EventManager", () => {
  let manager: EventManager;
  let socket: ReturnType<typeof createMockSocket>;
  let parser: ReturnType<typeof createMockParser>;
  let context: ConnectionContext;
  let emitter: TypedEventEmitter<ConnectionEvents>;

  beforeEach(() => {
    emitter = new TypedEventEmitter<ConnectionEvents>();
    manager = new EventManager(emitter);
    socket = createMockSocket();
    parser = createMockParser();
    context = { socket, parser } as unknown as ConnectionContext;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("attachEvents", () => {
    it("should attach listeners for socket and emitter events", () => {
      const emitterOnSpy = vi.spyOn(emitter, "on");
      manager.attachEvents(context);
      expect(socket.on).toHaveBeenCalledWith("error", expect.any(Function));
      expect(socket.on).toHaveBeenCalledWith("close", expect.any(Function));
      expect(socket.on).toHaveBeenCalledWith("timeout", expect.any(Function));
      expect(emitterOnSpy).toHaveBeenCalledWith("dataParseError", expect.any(Function));
    });

    it("throws an error if context is invalid", () => {
      const expectedError = "A valid ConnectionContext with a socket and parser is required.";
      expect(() => manager.attachEvents(undefined as unknown as ConnectionContext)).toThrow(
        expectedError,
      );
      expect(() => manager.attachEvents(null as unknown as ConnectionContext)).toThrow(
        expectedError,
      );
      expect(() => manager.attachEvents({} as unknown as ConnectionContext)).toThrow(expectedError);
      expect(() => manager.attachEvents({ socket } as unknown as ConnectionContext)).toThrow(
        expectedError,
      );
      expect(() => manager.attachEvents({ parser } as unknown as ConnectionContext)).toThrow(
        expectedError,
      );
    });

    it("throws an error if called a second time without cleanup", () => {
      manager.attachEvents(context);
      expect(() => manager.attachEvents(context)).toThrow(EventManagerError);
      expect(() => manager.attachEvents(context)).toThrow(
        "EventManager is already attached. Call cleanUp() before attaching again.",
      );
    });
  });

  describe("cleanUp", () => {
    it("should remove all attached listeners", () => {
      const emitterOffSpy = vi.spyOn(emitter, "off");
      manager.attachEvents(context);
      manager.cleanUp();

      expect(socket.off).toHaveBeenCalledWith("error", expect.any(Function));
      expect(socket.off).toHaveBeenCalledWith("close", expect.any(Function));
      expect(socket.off).toHaveBeenCalledWith("timeout", expect.any(Function));
      expect(emitterOffSpy).toHaveBeenCalledWith("dataParseError", expect.any(Function));
    });

    it("should be idempotent and not throw if called multiple times", () => {
      manager.attachEvents(context);
      expect(() => manager.cleanUp()).not.toThrow();
      expect(() => manager.cleanUp()).not.toThrow();
      expect(socket.off).toHaveBeenCalledTimes(3);
    });

    it("should not throw if called before attaching events", () => {
      expect(() => manager.cleanUp()).not.toThrow();
    });

    it("should stop emitting events after being called", () => {
      const onDisc = vi.fn();
      emitter.on("disconnected", onDisc);
      manager.attachEvents(context);
      manager.cleanUp();
      socket.on("error", () => {}); // Prevent unhandled error in test
      socket.emit("error", new Error("post-cleanup error"));
      expect(onDisc).not.toHaveBeenCalled();
    });
  });

  describe("Lifecycle", () => {
    it("should allow re-attaching after a cleanup", () => {
      manager.attachEvents(context);
      manager.cleanUp();
      expect(() => manager.attachEvents(context)).not.toThrow();
      expect(socket.on).toHaveBeenCalledTimes(6);
    });
  });

  describe("Event Emission", () => {
    let onDisc: Mock<(message: DisconnectMsg) => void>;

    // Use fake timers to control asynchronous `setImmediate`
    beforeEach(() => {
      vi.useFakeTimers();
      manager.attachEvents(context);
      onDisc = vi.fn();
      emitter.on("disconnected", onDisc);
    });

    // Restore real timers after each test in this block
    afterEach(() => {
      vi.useRealTimers();
    });

    it("emits 'disconnected' when socket emits error", () => {
      const err = new Error("socket fail");
      socket.emit("error", err);

      vi.runAllTimers(); // Execute the pending setImmediate callback

      expect(onDisc).toHaveBeenCalledWith({
        error: err,
        source: "socket",
        hadError: true,
      });
    });

    it("emits 'disconnected' when socket emits close without error", () => {
      socket.emit("close", false);

      vi.runAllTimers(); // Execute the pending setImmediate callback

      expect(onDisc).toHaveBeenCalledWith({
        error: null,
        source: "socket",
        hadError: false,
      });
    });

    it("emits 'disconnected' when socket emits close with an error", () => {
      socket.emit("close", true);

      vi.runAllTimers(); // Execute the pending setImmediate callback

      expect(onDisc).toHaveBeenCalledTimes(1);
      const callArgs = onDisc.mock.calls[0];
      if (!callArgs) {
        throw new Error("Expected disconnected callback to be called");
      }
      const payload = callArgs[0];
      expect(payload).toEqual({
        error: expect.any(Error),
        source: "socket",
        hadError: true,
      });
      expect(payload.error?.message).toBe("Socket closed with error");
    });

    it("emits 'disconnected' when socket emits timeout", () => {
      socket.emit("timeout");

      vi.runAllTimers(); // Execute the pending setImmediate callback

      expect(onDisc).toHaveBeenCalledTimes(1);
      const callArgs = onDisc.mock.calls[0];
      if (!callArgs) {
        throw new Error("Expected disconnected callback to be called");
      }
      const payload = callArgs[0];
      expect(payload).toEqual({
        error: expect.any(Error),
        source: "socket",
        hadError: true,
      });
      expect(payload.error?.message).toBe("Socket timeout");
    });

    it("emits 'disconnected' when dataParseError is emitted", () => {
      const err = new DataParserError("parser fail");
      emitter.emit("dataParseError", err as unknown as DataParserError);

      vi.runAllTimers(); // Execute the pending setImmediate callback

      expect(onDisc).toHaveBeenCalledWith({
        error: err,
        source: "parser",
        hadError: true,
      });
    });

    it("fires 'disconnected' only once even if multiple errors occur", () => {
      const firstError = new Error("first");
      socket.emit("error", firstError);
      emitter.emit("dataParseError", new DataParserError("second") as unknown as DataParserError);
      socket.emit("close", true);

      vi.runAllTimers(); // Execute all pending setImmediate callbacks

      expect(onDisc).toHaveBeenCalledTimes(1);
      expect(onDisc).toHaveBeenCalledWith({
        error: firstError,
        source: "socket",
        hadError: true,
      });
    });
  });
});
