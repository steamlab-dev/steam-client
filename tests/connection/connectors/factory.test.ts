import { describe, expect, it } from "vitest";
import DirectConnector from "@/connection/connectors/direct-connector";
import ConnectorError from "@/connection/connectors/error";
import ConnectorFactory from "@/connection/connectors/factory";
import HttpProxyConnector from "@/connection/connectors/http-proxy-connector";
import HttpsProxyConnector from "@/connection/connectors/https-proxy-connector";
import Socks5ProxyConnector from "@/connection/connectors/Socks5-proxy-connector";
import ConnectionError from "@/connection/error";
import type { ConnectionOptions } from "@/connection/types";

describe("ConnectorFactory", () => {
  it("returns direct connector when no proxy is configured", () => {
    const options: ConnectionOptions = {
      steamCM: { host: "127.0.0.1", port: 27018 },
      timeout: 5_000,
    };

    const connector = ConnectorFactory.create(options);

    expect(connector).toBe(DirectConnector);
  });

  it("returns HTTP connector when http proxy protocol is configured", () => {
    const options: ConnectionOptions = {
      steamCM: { host: "127.0.0.1", port: 27018 },
      proxy: { protocol: "http", host: "proxy.local", port: 8080 },
      timeout: 5_000,
    };

    const connector = ConnectorFactory.create(options);

    expect(connector).toBe(HttpProxyConnector);
  });

  it("returns HTTPS connector when https proxy protocol is configured", () => {
    const options: ConnectionOptions = {
      steamCM: { host: "127.0.0.1", port: 27018 },
      proxy: { protocol: "https", host: "proxy.local", port: 8443 },
      timeout: 5_000,
    };

    const connector = ConnectorFactory.create(options);

    expect(connector).toBe(HttpsProxyConnector);
  });

  it("returns SOCKS5 connector when socks5 proxy protocol is configured", () => {
    const options: ConnectionOptions = {
      steamCM: { host: "127.0.0.1", port: 27018 },
      proxy: { protocol: "socks5", host: "proxy.local", port: 1080 },
      timeout: 5_000,
    };

    const connector = ConnectorFactory.create(options);

    expect(connector).toBe(Socks5ProxyConnector);
  });

  it("throws for unsupported proxy protocol", () => {
    const options = {
      steamCM: { host: "127.0.0.1", port: 27018 },
      proxy: { protocol: "ftp", host: "proxy.local", port: 21 },
      timeout: 5_000,
    } as unknown as ConnectionOptions;

    try {
      ConnectorFactory.create(options);
      throw new Error("Expected factory to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(ConnectorError);
      expect(error).toBeInstanceOf(ConnectionError);
      expect((error as ConnectorError).subsystem).toBe("connector");
      expect((error as ConnectorError).message).toContain("Unsupported proxy protocol: ftp");
    }
  });
});
