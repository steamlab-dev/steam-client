import Long from "long";
import { describe, expect, it } from "vitest";
import SessionManager from "@/steam-protocol/session-manager";

describe("steam-protocol SessionManager", () => {
  it("writes steamId only once and ignores zero/undefined", () => {
    const session = new SessionManager();

    expect(session.getSteamId()).toEqual(Long.UZERO);
    session.setSteamId(undefined);
    expect(session.getSteamId()).toEqual(Long.UZERO);

    session.setSteamId(Long.UZERO);
    expect(session.getSteamId()).toEqual(Long.UZERO);

    session.setSteamId(Long.fromString("76561197960265729", true));
    expect(session.getSteamId().toString()).toBe("76561197960265729");

    session.setSteamId(Long.fromString("76561197960265730", true));
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
    session.setSteamId(Long.fromString("76561197960265729", true));
    session.setClientId(123);
    session.setLoggedIn(true);

    expect(session.isLoggedIn()).toBe(true);
    expect(session.getSession()).toEqual({
      steamId: Long.fromString("76561197960265729", true),
      clientId: 123,
      isLoggedIn: true,
    });

    session.cleanUp();

    expect(session.getSession()).toEqual({
      steamId: Long.UZERO,
      clientId: 0,
      isLoggedIn: false,
    });
  });
});
