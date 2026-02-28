import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { EMsg } from "@/common/steam-language";
import HeartBeatManager from "@/steam-protocol/heartbeat-manager";

describe("HeartBeatManager", () => {
  const messenger = {
    send: vi.fn(),
  };

  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("starts heartbeat using the default delay", async () => {
    const manager = new HeartBeatManager(messenger as never);

    manager.start();
    await vi.advanceTimersByTimeAsync(10_000);

    expect(messenger.send).toHaveBeenCalledWith({
      eMsg: EMsg.k_EMsgClientHeartBeat,
      payload: {},
    });
  });

  it("throws for invalid heartbeat delay", () => {
    const manager = new HeartBeatManager(messenger as never);

    expect(() => manager.start(9)).toThrow("Delay must be between 10 and 30 seconds");
    expect(() => manager.start(31)).toThrow("Delay must be between 10 and 30 seconds");
  });

  it("restarts interval when start is called again", async () => {
    const manager = new HeartBeatManager(messenger as never);

    manager.start(10);
    await vi.advanceTimersByTimeAsync(10_000);
    expect(messenger.send).toHaveBeenCalledTimes(1);

    manager.start(20);
    await vi.advanceTimersByTimeAsync(10_000);
    expect(messenger.send).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(10_000);
    expect(messenger.send).toHaveBeenCalledTimes(2);
  });

  it("stop is idempotent", async () => {
    const manager = new HeartBeatManager(messenger as never);

    manager.stop();
    manager.start(10);
    manager.stop();
    manager.stop();

    await vi.advanceTimersByTimeAsync(20_000);
    expect(messenger.send).not.toHaveBeenCalled();
  });
});
