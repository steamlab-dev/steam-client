import { EventEmitter } from "node:events";
import { type Mock, vi } from "vitest";

type WriteCallback = (error?: Error) => void;

export interface EventEmitterSocket {
  on: EventEmitter["on"];
  once: EventEmitter["once"];
  emit: EventEmitter["emit"];
  addListener: EventEmitter["addListener"];
  removeAllListeners: EventEmitter["removeAllListeners"];
  connect: Mock<(...args: unknown[]) => unknown>;
  write: Mock<(...args: unknown[]) => boolean>;
  destroy: Mock<() => void>;
  removeListener: Mock<(eventName: string, listener: (...args: unknown[]) => void) => unknown>;
  off: Mock<(eventName: string, listener: (...args: unknown[]) => void) => unknown>;
  destroyed: boolean;
}

export const createEventEmitterSocket = (
  overrides: Partial<EventEmitterSocket> = {},
): EventEmitterSocket => {
  const removeListenerSpy = vi.fn();
  const socket = Object.assign(new EventEmitter(), {
    connect: vi.fn(),
    write: vi.fn(() => true),
    destroy: vi.fn(),
    removeListener: removeListenerSpy,
    off: removeListenerSpy,
    destroyed: false,
  }) as unknown as EventEmitterSocket;

  Object.assign(socket, overrides);

  return socket;
};

export const mockConnectSuccess = (socket: EventEmitterSocket): void => {
  socket.connect.mockImplementation((...args: unknown[]) => {
    const callback = args[2];
    if (callback) {
      (callback as () => void)();
    }
    return socket;
  });
};

export const mockWriteSuccess = (socket: EventEmitterSocket): void => {
  socket.write.mockImplementation((...args: unknown[]) => {
    const callback = args.find((arg) => typeof arg === "function") as WriteCallback | undefined;
    if (callback) {
      callback();
    }
    return true;
  });
};

export const flushMicrotasks = async (): Promise<void> =>
  new Promise<void>((resolve) => queueMicrotask(resolve));
