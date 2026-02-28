import { describe, expect, it } from "vitest";
import SessionManager from "@/steam-client/session-manager";

describe("steam-client SessionManager", () => {
  it("updates and exposes playing state", () => {
    const session = new SessionManager();

    expect(session.isPlaying).toBe(false);

    session.isPlaying = true;
    expect(session.isPlaying).toBe(true);

    session.isPlaying = false;
    expect(session.isPlaying).toBe(false);
  });

  it("updates and exposes blocked state", () => {
    const session = new SessionManager();

    expect(session.playingBlocked).toBe(true);

    session.playingBlocked = false;
    expect(session.playingBlocked).toBe(false);
  });
});
