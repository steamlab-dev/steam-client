import { describe, expect, it } from "vitest";
import ConnectionOptionsValidator from "@/connection/options-validator";
import type { ConnectionOptions, ProxyConfiguration, SteamCMServer } from "@/connection/types";

const validSteamCM: SteamCMServer = {
  host: "steam.example.com",
  port: 27017,
};

const validProxy: ProxyConfiguration = {
  host: "proxy.example.com",
  port: 1080,
  protocol: "socks5",
};

const validOptions: ConnectionOptions = {
  timeout: 2000,
  steamCM: validSteamCM,
  proxy: undefined,
};

describe("ConnectionOptionsValidator", () => {
  describe("validate (happy paths)", () => {
    it("should not throw for valid options without proxy", () => {
      expect(() => ConnectionOptionsValidator.validate(validOptions)).not.toThrow();
    });

    it("should not throw for valid options with proxy", () => {
      const opts: ConnectionOptions = { ...validOptions, proxy: validProxy };
      expect(() => ConnectionOptionsValidator.validate(opts)).not.toThrow();
    });

    it("should allow socks4 proxy if steamCM host is IPv4", () => {
      const opts: ConnectionOptions = {
        ...validOptions,
        steamCM: { host: "127.0.0.1", port: 27017 },
        proxy: { ...validProxy, protocol: "socks4" },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).not.toThrow();
    });

    it("should allow valid IPv6 steamCM host", () => {
      const opts: ConnectionOptions = {
        ...validOptions,
        steamCM: {
          host: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
          port: 27017,
        },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).not.toThrow();
    });

    it("should allow proxy with protocol other than socks4 or socks5 (e.g. http)", () => {
      const opts: ConnectionOptions = {
        ...validOptions,
        proxy: { ...validProxy, protocol: "http" },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).not.toThrow();
    });

    it("should allow empty proxy username and password", () => {
      const opts: ConnectionOptions = {
        ...validOptions,
        proxy: { ...validProxy, username: "", password: "" },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).not.toThrow();
    });
  });

  describe("timeout validation", () => {
    it("should throw if timeout below min", () => {
      const opts = { ...validOptions, timeout: 500 };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/Timeout must be/);
    });

    it("should throw if timeout above max", () => {
      const opts = { ...validOptions, timeout: 50000 };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/Timeout must be/);
    });
  });

  describe("steamCM validation", () => {
    it("should throw if host missing", () => {
      const opts = { ...validOptions, steamCM: { host: "", port: 27017 } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /SteamCM host and port are required/,
      );
    });

    it("should throw if port missing", () => {
      const opts = {
        ...validOptions,
        steamCM: { host: "steam.example.com", port: 0 },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /SteamCM host and port are required/,
      );
    });

    it("should throw if port out of range", () => {
      const opts = {
        ...validOptions,
        steamCM: { host: "steam.example.com", port: 70000 },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/SteamCM port must be/);
    });

    it("should throw if hostname too long", () => {
      const longHost = "a".repeat(256);
      const opts = {
        ...validOptions,
        steamCM: { host: longHost, port: 27017 },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/hostname too long/);
    });

    it("should throw if hostname has control characters", () => {
      const badHost = "bad\u0001host";
      const opts = { ...validOptions, steamCM: { host: badHost, port: 27017 } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /contains control characters/,
      );
    });

    it("should throw if hostname has invalid label (starts or ends with hyphen)", () => {
      const opts1 = {
        ...validOptions,
        steamCM: { host: "-badlabel.example.com", port: 27017 },
      };
      const opts2 = {
        ...validOptions,
        steamCM: { host: "badlabel-.example.com", port: 27017 },
      };
      expect(() => ConnectionOptionsValidator.validate(opts1)).toThrow(
        /must be a valid IP address or hostname/,
      );
      expect(() => ConnectionOptionsValidator.validate(opts2)).toThrow(
        /must be a valid IP address or hostname/,
      );
    });
  });

  describe("proxy validation", () => {
    it("should throw if host missing", () => {
      const opts = { ...validOptions, proxy: { ...validProxy, host: "" } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /Proxy host and port are required/,
      );
    });

    it("should throw if port missing", () => {
      const opts = { ...validOptions, proxy: { ...validProxy, port: 0 } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /Proxy host and port are required/,
      );
    });

    it("should throw if port out of range", () => {
      const opts = { ...validOptions, proxy: { ...validProxy, port: 70000 } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/Proxy port must be/);
    });

    it("should throw if hostname too long", () => {
      const longHost = "a".repeat(256);
      const opts = {
        ...validOptions,
        proxy: { ...validProxy, host: longHost },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/hostname too long/);
    });

    it("should throw if hostname has control characters", () => {
      const badHost = "bad\u0001host";
      const opts = { ...validOptions, proxy: { ...validProxy, host: badHost } };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(
        /contains control characters/,
      );
    });

    it("should throw if username exceeds 255 bytes", () => {
      const longUsername = "u".repeat(256);
      const opts = {
        ...validOptions,
        proxy: { ...validProxy, username: longUsername },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/username exceeds/);
    });

    it("should throw if password exceeds 255 bytes", () => {
      const longPassword = "p".repeat(256);
      const opts = {
        ...validOptions,
        proxy: { ...validProxy, password: longPassword },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/password exceeds/);
    });

    it("should throw if socks4 and steamCM host not IPv4", () => {
      const opts: ConnectionOptions = {
        ...validOptions,
        steamCM: { host: "steam.example.com", port: 27017 },
        proxy: { ...validProxy, protocol: "socks4" },
      };
      expect(() => ConnectionOptionsValidator.validate(opts)).toThrow(/SOCKS4 requires/);
    });
  });
});
