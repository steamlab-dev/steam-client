import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { SteamClient } from "@/.";
import type { ConnectionOptions } from "@/connection/types";
import { type HttpsProxyHarness, startHttpsProxyHarness } from "../helpers/https-proxy-harness";
import { acquireIntegrationDockerServices } from "../helpers/integration-docker";
import {
  type SecureSteamCmServer,
  startSecureSteamCmServer,
} from "../helpers/secure-steam-cm-server";

const SOCKS5_PROXY_PORT = 19080;
const HTTP_PROXY_PORT = 19128;
const PROXY_USERNAME = "integration_user";
const PROXY_PASSWORD = "integration_pass";

const CM_HOST_DIRECT = "localhost";
const CM_HOST_DOCKER = "host.docker.internal";

describe("SteamClient secure CM integration (direct + proxies)", () => {
  let secureCmServer: SecureSteamCmServer | undefined;
  let httpsProxyHarness: HttpsProxyHarness | undefined;
  const activeClients: SteamClient[] = [];

  beforeAll(async () => {
    await acquireIntegrationDockerServices(["proxy"]);
    secureCmServer = await startSecureSteamCmServer({ host: "0.0.0.0" });
    httpsProxyHarness = await startHttpsProxyHarness({ host: "127.0.0.1" });
  });

  beforeEach(() => {
    vi.clearAllMocks();
    activeClients.length = 0;
  });

  afterEach(() => {
    for (const client of activeClients) {
      try {
        client.disconnect();
      } catch {
        // Best-effort cleanup for integration sockets.
      }
    }

    activeClients.length = 0;
  });

  afterAll(async () => {
    if (httpsProxyHarness) {
      await httpsProxyHarness.close();
    }
    if (secureCmServer) {
      await secureCmServer.close();
    }
  });

  const connectAndAssertHandshake = async (options: ConnectionOptions): Promise<void> => {
    if (!secureCmServer) {
      throw new Error("Secure CM test server is not initialized");
    }

    const before = secureCmServer.getStats().successfulHandshakes;
    const client = new SteamClient(options);
    activeClients.push(client);

    await client.connect();

    const after = secureCmServer.getStats().successfulHandshakes;
    expect(after).toBe(before + 1);
  };

  const requireSecureCmServer = (): SecureSteamCmServer => {
    if (!secureCmServer) {
      throw new Error("Secure CM test server is not initialized");
    }

    return secureCmServer;
  };

  it("connects directly to the local secure Steam CM helper", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DIRECT, port: cmServer.port },
      timeout: 15_000,
    };

    await connectAndAssertHandshake(options);
  });

  it("connects through an authenticated SOCKS5 proxy to the local secure Steam CM helper", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DOCKER, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "socks5",
        host: "127.0.0.1",
        port: SOCKS5_PROXY_PORT,
        username: PROXY_USERNAME,
        password: PROXY_PASSWORD,
      },
    };

    await connectAndAssertHandshake(options);
  });

  it("connects through an HTTP proxy to the local secure Steam CM helper", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DOCKER, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "http",
        host: "127.0.0.1",
        port: HTTP_PROXY_PORT,
      },
    };

    await connectAndAssertHandshake(options);
  });

  it("connects through an HTTPS proxy to the local secure Steam CM helper", async () => {
    if (!httpsProxyHarness) {
      throw new Error("HTTPS proxy harness is not initialized");
    }

    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DIRECT, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "https",
        host: "127.0.0.1",
        port: httpsProxyHarness.port,
      },
    };

    await connectAndAssertHandshake(options);
  });
});
