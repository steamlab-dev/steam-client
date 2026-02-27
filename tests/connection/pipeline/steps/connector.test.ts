import { describe, expect, it, vi } from "vitest";
import ConnectorStep from "@/connection/pipeline/steps/connector";
import type { ConnectionContext } from "@/connection/types";

type MockedStateManager = {
  setConnecting: ReturnType<typeof vi.fn>;
  setProxyConnected: ReturnType<typeof vi.fn>;
  setSteamConnected: ReturnType<typeof vi.fn>;
};

const createContext = (
  withProxy: boolean,
): {
  context: ConnectionContext;
  stateManager: MockedStateManager;
  connect: ReturnType<typeof vi.fn>;
} => {
  const stateManager: MockedStateManager = {
    setConnecting: vi.fn(),
    setProxyConnected: vi.fn(),
    setSteamConnected: vi.fn(),
  };

  const socket = {};
  const connect = vi.fn().mockResolvedValue(socket);

  const context = {
    options: {
      steamCM: { host: "127.0.0.1", port: 27018 },
      timeout: 10_000,
      proxy: withProxy
        ? {
            protocol: "http",
            host: "127.0.0.1",
            port: 8080,
          }
        : undefined,
    },
    connector: {
      connect,
    },
    socket: undefined,
    stateManager,
  } as unknown as ConnectionContext;

  return { context, stateManager, connect };
};

describe("ConnectorStep", () => {
  it("sets connecting and steam state for direct connections", async () => {
    const step = new ConnectorStep();
    const { context, stateManager, connect } = createContext(false);

    await step.execute(context);

    expect(stateManager.setConnecting).toHaveBeenCalledTimes(1);
    expect(connect).toHaveBeenCalledWith(context.options);
    expect(stateManager.setProxyConnected).not.toHaveBeenCalled();
    expect(stateManager.setSteamConnected).toHaveBeenCalledTimes(1);
    expect(context.socket).toBeDefined();
  });

  it("sets proxy state before steam state for proxied connections", async () => {
    const step = new ConnectorStep();
    const { context, stateManager } = createContext(true);

    await step.execute(context);

    const proxyCallOrder = stateManager.setProxyConnected.mock.invocationCallOrder[0];
    const steamCallOrder = stateManager.setSteamConnected.mock.invocationCallOrder[0];

    expect(proxyCallOrder).toBeDefined();
    expect(steamCallOrder).toBeDefined();
    expect((proxyCallOrder as number) < (steamCallOrder as number)).toBe(true);
  });
});
