import { describe, expect, it } from "vitest";
import SessionManager from "@/steam-protocol/session-manager";

describe("steam-protocol SessionManager", () => {
  it("writes steamId only once and ignores zero/undefined", () => {
    const session = new SessionManager();

    expect(session.getSteamId()).toEqual(0n);
    session.setSteamId(undefined);
    expect(session.getSteamId()).toEqual(0n);

    session.setSteamId(0n);
    expect(session.getSteamId()).toEqual(0n);

    session.setSteamId(76561197960265729n);
    expect(session.getSteamId().toString()).toBe("76561197960265729");

    session.setSteamId(76561197960265730n);
    expect(session.getSteamId().toString()).toBe("76561197960265729");
  });

  it("accepts decoded bigint steamId values", () => {
    const session = new SessionManager();

    session.setSteamId(76561197960265729n);

    expect(session.getSteamId().toString()).toBe("76561197960265729");
  });

  it("writes clientId only once and ignores zero/undefined", () => {
    const session = new SessionManager();

    session.setClientId(undefined);
    expect(session.getClientId()).toBe(0);

    session.setClientId(0);
    expect(session.getClientId()).toBe(0);

    session.setClientId(100);
    expect(session.getClientId()).toBe(100);

    session.setClientId(200);
    expect(session.getClientId()).toBe(100);
  });

  it("tracks login state and resets on cleanup", () => {
    const session = new SessionManager();
    session.setSteamId(76561197960265729n);
    session.setClientId(123);
    session.setLoggedIn(true);

    expect(session.isLoggedIn()).toBe(true);
    expect(session.getSession()).toEqual({
      steamId: 76561197960265729n,
      clientId: 123,
      isLoggedIn: true,
    });

    session.cleanUp();

    expect(session.getSession()).toEqual({
      steamId: 0n,
      clientId: 0,
      isLoggedIn: false,
    });
  });
});
