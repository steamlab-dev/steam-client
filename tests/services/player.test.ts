import Long from "long";
import { describe, expect, it, vi } from "vitest";
import SteamClientError from "@/steam-client/error";
import PlayerService from "@/steam-client/services/player";

describe("PlayerService", () => {
  const createService = () => {
    const steamId = Long.fromString("76561197960265729", true);
    const steamProtocol = {
      getSession: vi.fn().mockReturnValue({ steamId }),
      sendServiceCallWithRes: vi.fn().mockResolvedValue({ response: true }),
    };

    const service = new PlayerService(steamProtocol as never);
    return { service, steamProtocol, steamId };
  };

  it("GetOwnedGames uses defaults and session steamid when request is omitted", async () => {
    const { service, steamProtocol, steamId } = createService();

    await service.GetOwnedGames();

    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenCalledWith({
      message: "CPlayer_GetOwnedGames_Request",
      payload: {
        include_appinfo: true,
        include_played_free_games: true,
        include_free_sub: false,
        skip_unvetted_apps: false,
        include_extended_appinfo: true,
        steamid: steamId,
      },
    });
  });

  it("GetOwnedGames merges overrides but always forces session steamid", async () => {
    const { service, steamProtocol, steamId } = createService();
    const fakeSteamId = Long.fromString("123", true);

    await service.GetOwnedGames({
      include_appinfo: false,
      include_played_free_games: false,
      include_free_sub: true,
      steamid: fakeSteamId,
    } as never);

    expect(steamProtocol.sendServiceCallWithRes).toHaveBeenCalledWith({
      message: "CPlayer_GetOwnedGames_Request",
      payload: expect.objectContaining({
        include_appinfo: false,
        include_played_free_games: false,
        include_free_sub: true,
        steamid: steamId,
      }),
    });
  });

  it("wraps GetOwnedGames failures as SteamClientError with services subsystem", async () => {
    const { service, steamProtocol } = createService();
    const cause = new Error("service down");
    steamProtocol.sendServiceCallWithRes.mockRejectedValueOnce(cause);

    try {
      await service.GetOwnedGames();
      throw new Error("Expected GetOwnedGames to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "services",
        cause,
      });
    }
  });

  it("rethrows existing SteamClientError from GetOwnedGames without re-wrapping", async () => {
    const { service, steamProtocol } = createService();
    const existing = new SteamClientError("already normalized", "services");
    steamProtocol.sendServiceCallWithRes.mockRejectedValueOnce(existing);

    try {
      await service.GetOwnedGames();
      throw new Error("Expected GetOwnedGames to throw");
    } catch (err) {
      expect(err).toBe(existing);
    }
  });

  it("throws SteamClientError for not implemented methods", async () => {
    const { service } = createService();
    try {
      await service.GetPlayNext({} as never);
      throw new Error("Expected GetPlayNext to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "services",
      });
    }
  });
});
