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
const HTTP_PROXY_AUTH_PORT = 19129;
const PROXY_USERNAME = "integration_user";
const PROXY_PASSWORD = "integration_pass";

const CM_HOST_DIRECT = "localhost";
const CM_HOST_DOCKER = "host.docker.internal";

describe("SteamClient secure CM integration (direct + proxies)", () => {
  let secureCmServer: SecureSteamCmServer | undefined;
  let httpsProxyHarnessOpen: HttpsProxyHarness | undefined;
  let httpsProxyHarnessAuth: HttpsProxyHarness | undefined;
  const activeClients: SteamClient[] = [];

  beforeAll(async () => {
    await acquireIntegrationDockerServices(["proxy"]);
    secureCmServer = await startSecureSteamCmServer({ host: "0.0.0.0" });
    httpsProxyHarnessOpen = await startHttpsProxyHarness({ host: "127.0.0.1" });
    httpsProxyHarnessAuth = await startHttpsProxyHarness({
      host: "127.0.0.1",
      requiredUsername: PROXY_USERNAME,
      requiredPassword: PROXY_PASSWORD,
    });
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
    if (httpsProxyHarnessOpen) {
      await httpsProxyHarnessOpen.close();
    }
    if (httpsProxyHarnessAuth) {
      await httpsProxyHarnessAuth.close();
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

  const connectAndAssertFailure = async (options: ConnectionOptions): Promise<void> => {
    if (!secureCmServer) {
      throw new Error("Secure CM test server is not initialized");
    }

    const before = secureCmServer.getStats().successfulHandshakes;
    const client = new SteamClient(options);
    activeClients.push(client);

    await expect(client.connect()).rejects.toThrow();

    const after = secureCmServer.getStats().successfulHandshakes;
    expect(after).toBe(before);
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

  it("fails through an authenticated SOCKS5 proxy when credentials are missing", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DOCKER, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "socks5",
        host: "127.0.0.1",
        port: SOCKS5_PROXY_PORT,
      },
    };

    await connectAndAssertFailure(options);
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

  it("connects through an authenticated HTTP proxy with valid credentials", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DOCKER, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "http",
        host: "127.0.0.1",
        port: HTTP_PROXY_AUTH_PORT,
        username: PROXY_USERNAME,
        password: PROXY_PASSWORD,
      },
    };

    await connectAndAssertHandshake(options);
  });

  it("fails through an authenticated HTTP proxy when credentials are missing", async () => {
    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DOCKER, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "http",
        host: "127.0.0.1",
        port: HTTP_PROXY_AUTH_PORT,
      },
    };

    await connectAndAssertFailure(options);
  });

  it("connects through an HTTPS proxy to the local secure Steam CM helper", async () => {
    if (!httpsProxyHarnessOpen) {
      throw new Error("HTTPS proxy harness is not initialized");
    }

    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DIRECT, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "https",
        host: "127.0.0.1",
        port: httpsProxyHarnessOpen.port,
      },
    };

    await connectAndAssertHandshake(options);
  });

  it("connects through an authenticated HTTPS proxy with valid credentials", async () => {
    if (!httpsProxyHarnessAuth) {
      throw new Error("Authenticated HTTPS proxy harness is not initialized");
    }

    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DIRECT, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "https",
        host: "127.0.0.1",
        port: httpsProxyHarnessAuth.port,
        username: PROXY_USERNAME,
        password: PROXY_PASSWORD,
      },
    };

    await connectAndAssertHandshake(options);
  });

  it("fails through an authenticated HTTPS proxy when credentials are missing", async () => {
    if (!httpsProxyHarnessAuth) {
      throw new Error("Authenticated HTTPS proxy harness is not initialized");
    }

    const cmServer = requireSecureCmServer();
    const options: ConnectionOptions = {
      steamCM: { host: CM_HOST_DIRECT, port: cmServer.port },
      timeout: 15_000,
      proxy: {
        protocol: "https",
        host: "127.0.0.1",
        port: httpsProxyHarnessAuth.port,
      },
    };

    await connectAndAssertFailure(options);
  });
});
