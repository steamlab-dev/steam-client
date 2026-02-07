import { isIP } from "node:net";
import type { ConnectionOptions, ProxyConfiguration, SteamCMServer } from "./types";

/**
 * Provides static methods for validating connection options. This class cannot be instantiated.
 */
export default class ConnectionOptionsValidator {
  private static readonly MIN_TIMEOUT = 1_000;
  private static readonly MAX_TIMEOUT = 45_000;
  private static readonly MAX_HOSTNAME_LENGTH = 255;

  /**
   * Private constructor to prevent instantiation of this static utility class.
   */
  private constructor() {}

  /**
   * Validates the main connection options object by delegating to specific validators.
   * @throws {Error} If any part of the connection options is invalid.
   */
  public static validate(options: ConnectionOptions): void {
    ConnectionOptionsValidator.validateTimeout(options.timeout);
    ConnectionOptionsValidator.validateSteamCM(options.steamCM);
    if (options.proxy) {
      ConnectionOptionsValidator.validateProxy(options.proxy, options.steamCM);
    }
  }

  /**
   * Validates the Steam Connection Manager (CM) server configuration.
   * @throws {Error} If the host or port is missing, out of range, or invalidly formatted.
   */
  private static validateSteamCM(steamCM: SteamCMServer): void {
    const { host, port } = steamCM;

    if (!host || !port) {
      throw new Error("SteamCM host and port are required");
    }

    if (typeof port !== "number" || port < 1 || port > 65535) {
      throw new Error(`SteamCM port must be 1-65535 (got ${port})`);
    }

    for (let i = 0; i < host.length; i++) {
      const code = host.charCodeAt(i);
      if (code <= 0x1f || code === 0x7f) {
        throw new Error("SteamCM hostname contains control characters");
      }
    }

    if (isIP(host)) {
      return;
    }

    if (host.length > ConnectionOptionsValidator.MAX_HOSTNAME_LENGTH) {
      throw new Error(
        `SteamCM hostname too long (> ${ConnectionOptionsValidator.MAX_HOSTNAME_LENGTH})`,
      );
    }

    const hostnameRegex =
      /^(?=.{1,253}$)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))*$/;

    if (!hostnameRegex.test(host)) {
      throw new Error(`SteamCM host must be a valid IP address or hostname (got '${host}')`);
    }
  }

  /**
   * Validates the proxy server configuration.
   * @throws {Error} If the proxy configuration is invalid.
   */
  private static validateProxy(proxy: ProxyConfiguration, steamCM: SteamCMServer): void {
    if (!proxy.host || !proxy.port) {
      throw new Error("Proxy host and port are required");
    }
    if (proxy.port < 1 || proxy.port > 65535) {
      throw new Error(`Proxy port must be 1–65535 (got ${proxy.port})`);
    }
    if (proxy.host.length > ConnectionOptionsValidator.MAX_HOSTNAME_LENGTH) {
      throw new Error(
        `Proxy hostname too long (> ${ConnectionOptionsValidator.MAX_HOSTNAME_LENGTH})`,
      );
    }
    for (let i = 0; i < proxy.host.length; i++) {
      const code = proxy.host.charCodeAt(i);
      if (code <= 0x1f || code === 0x7f) {
        throw new Error("Proxy hostname contains control characters");
      }
    }
    if (proxy.username && Buffer.byteLength(proxy.username, "utf8") > 255) {
      throw new Error("Proxy username exceeds 255 bytes");
    }
    if (proxy.password && Buffer.byteLength(proxy.password, "utf8") > 255) {
      throw new Error("Proxy password exceeds 255 bytes");
    }
    if (proxy.protocol === "socks4" && !/^\d+\.\d+\.\d+\.\d+$/.test(steamCM.host)) {
      throw new Error("SOCKS4 requires destination (steamCM.host) to be an IPv4 address");
    }
  }

  /**
   * Validates that the connection timeout is within the allowed range.
   * @throws {Error} If the timeout is outside the configured minimum and maximum values.
   */
  private static validateTimeout(timeout: number): void {
    if (
      timeout < ConnectionOptionsValidator.MIN_TIMEOUT ||
      timeout > ConnectionOptionsValidator.MAX_TIMEOUT
    ) {
      throw new Error(
        `Timeout must be ${ConnectionOptionsValidator.MIN_TIMEOUT}–${ConnectionOptionsValidator.MAX_TIMEOUT}ms`,
      );
    }
  }
}
