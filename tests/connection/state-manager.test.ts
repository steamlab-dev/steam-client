// ConnectionStateManager.test.ts
import { beforeEach, describe, expect, it } from "vitest";
import ConnectionStateManager, { ConnectionStateError } from "@/connection/state-manager";

describe("ConnectionStateManager", () => {
  let manager: ConnectionStateManager;

  beforeEach(() => {
    manager = new ConnectionStateManager();
  });

  describe("initial state", () => {
    it("should be fully disconnected initially", () => {
      expect(manager.hasActiveConnection()).toBe(false);
      expect(manager.isFullyConnected()).toBe(false);
      expect(manager.getState()).toEqual({
        connecting: false,
        connected: false,
        steamConnected: false,
        proxyConnected: false,
        transportReady: false,
      });
    });
  });

  describe("setConnecting", () => {
    it("should set connecting state", () => {
      manager.setConnecting();
      expect(manager.getState()).toMatchObject({
        connecting: true,
        connected: false,
      });
    });

    it("should throw if already connecting", () => {
      manager.setConnecting();
      expect(() => manager.setConnecting()).toThrow(ConnectionStateError);
    });

    it("should throw if already connected", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      manager.setFullyConnected();
      expect(() => manager.setConnecting()).toThrow(ConnectionStateError);
    });
  });

  describe("setProxyConnected", () => {
    it("should set proxy connected after connecting", () => {
      manager.setConnecting();
      manager.setProxyConnected();
      expect(manager.getState().proxyConnected).toBe(true);
    });

    it("should throw if not connecting", () => {
      expect(() => manager.setProxyConnected()).toThrow(ConnectionStateError);
    });

    it("should throw if already steam connected", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      expect(() => manager.setProxyConnected()).toThrow(ConnectionStateError);
    });
  });

  describe("setSteamConnected", () => {
    it("should set steam connected after connecting", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      expect(manager.getState().steamConnected).toBe(true);
    });

    it("should throw if not connecting", () => {
      expect(() => manager.setSteamConnected()).toThrow(ConnectionStateError);
    });

    it("should throw if already steam connected", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      expect(() => manager.setSteamConnected()).toThrow(ConnectionStateError);
    });
  });

  describe("setTransportReady", () => {
    it("should set transport ready after steam connected", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      expect(manager.getState().transportReady).toBe(true);
    });

    it("should throw if not connecting", () => {
      expect(() => manager.setTransportReady()).toThrow(ConnectionStateError);
    });

    it("should throw if steam not connected", () => {
      manager.setConnecting();
      expect(() => manager.setTransportReady()).toThrow(ConnectionStateError);
    });

    it("should throw if already transport ready", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      expect(() => manager.setTransportReady()).toThrow(ConnectionStateError);
    });
  });

  describe("setFullyConnected", () => {
    it("should set fully connected and stop connecting", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      manager.setFullyConnected();
      expect(manager.getState()).toMatchObject({
        connected: true,
        connecting: false,
      });
      expect(manager.isFullyConnected()).toBe(true);
    });

    it("should throw if not connecting", () => {
      expect(() => manager.setFullyConnected()).toThrow(ConnectionStateError);
    });

    it("should throw if steam not connected", () => {
      manager.setConnecting();
      expect(() => manager.setFullyConnected()).toThrow(ConnectionStateError);
    });

    it("should throw if transport not ready", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      expect(() => manager.setFullyConnected()).toThrow(ConnectionStateError);
    });

    it("should throw if already fully connected", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      manager.setFullyConnected();
      expect(() => manager.setFullyConnected()).toThrow(ConnectionStateError);
    });
  });

  describe("setDisconnected", () => {
    it("should reset all flags", () => {
      manager.setConnecting();
      manager.setSteamConnected();
      manager.setTransportReady();
      manager.setFullyConnected();
      manager.setDisconnected();
      expect(manager.hasActiveConnection()).toBe(false);
    });
  });
});
