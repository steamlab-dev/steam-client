import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PendingRequestMap, {
  PendingRequestMapError,
} from "@/steam-protocol/messengers/common/pending-request-map";

describe("PendingRequestMap", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("validates constructor timeout range", () => {
    expect(() => new PendingRequestMap<string, unknown>(9_999)).toThrow(PendingRequestMapError);
    expect(() => new PendingRequestMap<string, unknown>(60_001)).toThrow(PendingRequestMapError);
    expect(() => new PendingRequestMap<string, unknown>(10_000)).not.toThrow();
    expect(() => new PendingRequestMap<string, unknown>(60_000)).not.toThrow();
  });

  it("rejects duplicate pending keys", async () => {
    const pending = new PendingRequestMap<string, unknown>(10_000);
    const first = pending.add("k1");

    expect(() => pending.add("k1")).toThrow(PendingRequestMapError);
    expect(pending.size()).toBe(1);

    expect(pending.resolve("k1", "ok")).toBe(true);
    await expect(first).resolves.toBe("ok");
  });

  it("resolves and rejects entries and returns false for missing keys", async () => {
    const pending = new PendingRequestMap<string, string>(10_000);
    const promise = pending.add("a");

    expect(pending.resolve("missing", "x")).toBe(false);
    expect(pending.reject("missing", new Error("x"))).toBe(false);

    expect(pending.resolve("a", "ok")).toBe(true);
    await expect(promise).resolves.toBe("ok");

    const promise2 = pending.add("b");
    expect(pending.reject("b", new Error("bad"))).toBe(true);
    await expect(promise2).rejects.toThrow("bad");
  });

  it("times out pending requests and clears key", async () => {
    const pending = new PendingRequestMap<string, number>(10_000);
    const promise = pending.add("t1");
    const rejection = expect(promise).rejects.toThrow(
      "Timeout waiting for response for key: t1 after 10000ms",
    );

    await vi.advanceTimersByTimeAsync(10_001);

    await rejection;
    expect(pending.size()).toBe(0);
  });

  it("cleanup rejects every pending request and clears map", async () => {
    const pending = new PendingRequestMap<string, unknown>(10_000);
    const p1 = pending.add("k1");
    const p2 = pending.add("k2");
    const p1Rejection = expect(p1).rejects.toThrow("cancelled");
    const p2Rejection = expect(p2).rejects.toThrow("cancelled");

    expect(pending.pendingKeys().sort()).toEqual(["k1", "k2"]);

    pending.cleanUp(new Error("cancelled"));

    await p1Rejection;
    await p2Rejection;
    expect(pending.size()).toBe(0);
    expect(pending.pendingKeys()).toEqual([]);
  });
});
