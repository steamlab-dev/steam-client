import { beforeEach, describe, expect, it } from "vitest";
import SteamProtoManager from "@/steam-protocol/proto-manager";

describe("SteamProtoManager", () => {
  describe("SteamProtoManager - Steam Namespace", () => {
    let steamProtos: SteamProtoManager;

    beforeEach(() => {
      steamProtos = new SteamProtoManager("steam");
    });

    it("Should load protos correctly", async () => {
      await steamProtos.loadProtos();
      expect(steamProtos.isLoaded()).toBe(true);
    });

    it("Should cache proto types on load", async () => {
      await steamProtos.loadProtos();
      const protoNames = steamProtos.getProtoNames();

      expect(steamProtos.isLoaded()).toBe(true);
      expect(Array.isArray(protoNames)).toBe(true);
      expect(protoNames.length).toBeGreaterThan(0);
    });

    it("Should throw when calling loadProtos twice", async () => {
      await steamProtos.loadProtos();
      const protoNames = steamProtos.getProtoNames();

      expect(steamProtos.isLoaded()).toBe(true);
      expect(Array.isArray(protoNames)).toBe(true);
      expect(protoNames.length).toBeGreaterThan(0);
      await expect(steamProtos.loadProtos()).rejects.toThrow("Protos were already loaded");
    });

    it("Should throw on unknown proto name", async () => {
      await steamProtos.loadProtos();
      expect(() => steamProtos.encode("csgo.AccountActivity", {})).toThrow(
        "Protocol buffer type csgo.AccountActivity not found",
      );
    });

    it("Should encode and decode correctly", async () => {
      await steamProtos.loadProtos();
      const message = { account_name: "test" };
      const encodedMessage = steamProtos.encode("steam.CMsgClientLogon", message);
      const decodedMessage = steamProtos.decode("steam.CMsgClientLogon", encodedMessage);

      expect(message).toEqual(decodedMessage);
    });

    it("Should encodeUnsafe and decode correctly", async () => {
      await steamProtos.loadProtos();
      const message = { account_name: "test" };
      const encodedMessage = steamProtos.encodeUnsafe("steam.CMsgClientLogon", message);
      const decodedMessage = steamProtos.decode("steam.CMsgClientLogon", encodedMessage);

      expect(message).toEqual(decodedMessage);
    });
  });
});
