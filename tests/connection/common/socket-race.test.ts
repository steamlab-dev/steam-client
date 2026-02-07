import { EventEmitter } from "node:events";
import type { Socket } from "node:net";
import { afterEach, beforeEach, describe, expect, it, type Mock, vi } from "vitest";
import socketRace from "@/connection/common/socket-race";

// Define a type for our mock socket to ensure type safety in tests.
interface MockSocket extends EventEmitter {
  off: Mock;
}

let mockSocket: MockSocket;

describe("socketRace", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockSocket = Object.assign(new EventEmitter(), {
      off: vi.fn(),
    }) as MockSocket;
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("should resolve with the operation result if it completes first", async () => {
    const operation = Promise.resolve("success");
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });
    await expect(racePromise).resolves.toBe("success");
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should reject with the operation error if it rejects first", async () => {
    const operationError = new Error("Operation failed");
    const operation = Promise.reject(operationError);
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });

    await expect(racePromise).rejects.toThrow(operationError);
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should reject if the socket emits an error", async () => {
    const socketError = new Error("Socket error");
    // Use a promise that never settles to isolate the socket event.
    const operation = new Promise(() => {});
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });
    mockSocket.emit("error", socketError);

    await expect(racePromise).rejects.toThrow(socketError);
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should reject if the socket closes without an error", async () => {
    const operation = new Promise(() => {});
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });

    mockSocket.emit("close", false);

    await expect(racePromise).rejects.toThrow("Socket closed by remote end");
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should reject if the socket closes due to an error", async () => {
    const operation = new Promise(() => {});
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });

    mockSocket.emit("close", true);

    await expect(racePromise).rejects.toThrow("Socket closed due to error");
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should reject on timeout", async () => {
    const operation = new Promise(() => {});
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 5000,
    });

    vi.advanceTimersByTime(5001);

    await expect(racePromise).rejects.toThrow("Socket timed out after 5000 ms");
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should only settle once if the operation succeeds then other events occur", async () => {
    const operation = Promise.resolve("first");
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });

    // The operation resolves, settling the race.
    await expect(racePromise).resolves.toBe("first");

    // Trigger other events to ensure the promise state does not change.
    mockSocket.emit("error", new Error("Late error"));
    mockSocket.emit("close", false);
    vi.advanceTimersByTime(1001);

    // The result should remain the original resolution.
    await expect(racePromise).resolves.toBe("first");
    // Cleanup should only have been called once.
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should only settle once, using the first failure event", async () => {
    const firstError = new Error("This should be the error");
    const operation = new Promise(() => {});
    const racePromise = socketRace({
      socket: mockSocket as unknown as Socket,
      operation,
      timeoutMs: 1000,
    });

    // Trigger multiple failure events in quick succession.
    mockSocket.emit("error", firstError);
    mockSocket.emit("close", true); // This event should be ignored.

    await expect(racePromise).rejects.toThrow(firstError);
    expect(mockSocket.off).toHaveBeenCalledTimes(2);
  });

  it("should clean up listeners even if the operation rejects synchronously", async () => {
    const operation = Promise.reject(new Error("Immediate failure"));

    // The rejection is expected, so we catch it to prevent test warnings.
    await expect(
      socketRace({
        socket: mockSocket as unknown as Socket,
        operation,
        timeoutMs: 1000,
      }),
    ).rejects.toThrow("Immediate failure");

    expect(mockSocket.off).toHaveBeenCalledWith("error", expect.any(Function));
    expect(mockSocket.off).toHaveBeenCalledWith("close", expect.any(Function));
  });
});
