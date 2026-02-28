import { describe, expect, it, vi } from "vitest";
import SteamClientError from "@/steam-client/error";
import Credentials from "@/steam-client/services/credentials";
import EconService from "@/steam-client/services/econ";
import StoreService from "@/steam-client/services/store";

describe("Store/Credentials/Econ services", () => {
  it("StoreService.RegisterCDKey wraps failures as SteamClientError with services subsystem", async () => {
    const cause = new Error("store unavailable");
    const steamProtocol = {
      sendServiceCallWithRes: vi.fn().mockRejectedValueOnce(cause),
    };
    const service = new StoreService(steamProtocol as never);

    try {
      await service.RegisterCDKey({ activation_code: "ABC-123" } as never);
      throw new Error("Expected RegisterCDKey to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({
        subsystem: "services",
        cause,
      });
    }
  });

  it("StoreService.RegisterCDKey rethrows existing SteamClientError unchanged", async () => {
    const existing = new SteamClientError("already normalized", "services");
    const steamProtocol = {
      sendServiceCallWithRes: vi.fn().mockRejectedValueOnce(existing),
    };
    const service = new StoreService(steamProtocol as never);

    try {
      await service.RegisterCDKey({ activation_code: "ABC-123" } as never);
      throw new Error("Expected RegisterCDKey to throw");
    } catch (err) {
      expect(err).toBe(existing);
    }
  });

  it("StoreService not-implemented methods throw SteamClientError with services subsystem", () => {
    const steamProtocol = {
      sendServiceCallWithRes: vi.fn(),
    };
    const service = new StoreService(steamProtocol as never);

    try {
      service.GetTagList({} as never);
      throw new Error("Expected GetTagList to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({ subsystem: "services" });
    }
  });

  it("Credentials not-implemented methods throw SteamClientError with services subsystem", () => {
    const service = new Credentials();

    try {
      service.ValidateEmailAddress({} as never);
      throw new Error("Expected ValidateEmailAddress to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({ subsystem: "services" });
    }
  });

  it("EconService not-implemented methods throw SteamClientError with services subsystem", () => {
    const service = new EconService();

    try {
      service.GetAssetClassInfo({} as never);
      throw new Error("Expected GetAssetClassInfo to throw");
    } catch (err) {
      expect(err).toBeInstanceOf(SteamClientError);
      expect(err).toMatchObject({ subsystem: "services" });
    }
  });
});
