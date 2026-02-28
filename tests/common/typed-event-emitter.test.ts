import { describe, expect, it, vi } from "vitest";
import { TypedEventEmitter } from "@/common/typed-event-emitter";

interface TestEvents {
  ping: (value: string) => void;
  pong: (value: number) => void;
}

describe("TypedEventEmitter", () => {
  it("supports on + emit", () => {
    const emitter = new TypedEventEmitter<TestEvents>();
    const listener = vi.fn();
    emitter.on("ping", listener);

    const emitted = emitter.emit("ping", "a");

    expect(emitted).toBe(true);
    expect(listener).toHaveBeenCalledWith("a");
  });

  it("supports once listeners", () => {
    const emitter = new TypedEventEmitter<TestEvents>();
    const listener = vi.fn();
    emitter.once("ping", listener);

    emitter.emit("ping", "one");
    emitter.emit("ping", "two");

    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith("one");
  });

  it("removes a specific listener via off", () => {
    const emitter = new TypedEventEmitter<TestEvents>();
    const listener = vi.fn();
    emitter.on("ping", listener);
    emitter.off("ping", listener);

    const emitted = emitter.emit("ping", "x");

    expect(emitted).toBe(false);
    expect(listener).not.toHaveBeenCalled();
  });

  it("is a no-op when off is called without listener", () => {
    const emitter = new TypedEventEmitter<TestEvents>();
    const listener = vi.fn();
    emitter.on("ping", listener);

    expect(() => emitter.off("ping")).not.toThrow();

    emitter.emit("ping", "still-attached");
    expect(listener).toHaveBeenCalledWith("still-attached");
  });

  it("supports removeAllListeners for single event and all events", () => {
    const emitter = new TypedEventEmitter<TestEvents>();
    const ping = vi.fn();
    const pong = vi.fn();

    emitter.on("ping", ping);
    emitter.on("pong", pong);
    emitter.removeAllListeners("ping");

    emitter.emit("ping", "a");
    emitter.emit("pong", 42);

    expect(ping).not.toHaveBeenCalled();
    expect(pong).toHaveBeenCalledWith(42);

    emitter.removeAllListeners();
    emitter.emit("pong", 1);
    expect(pong).toHaveBeenCalledTimes(1);
  });
});
