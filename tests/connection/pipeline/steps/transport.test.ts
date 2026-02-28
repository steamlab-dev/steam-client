import type { Socket } from "node:net";
import { describe, expect, it, vi } from "vitest";
import TransportStep from "@/connection/pipeline/steps/transport";
import type { ConnectionContext } from "@/connection/types";

describe("TransportStep", () => {
  const createContext = (socket: unknown): ConnectionContext =>
    ({
      socket,
      options: { timeout: 1000, steamCM: { host: "127.0.0.1", port: 27017 } },
      transport: {
        setupTransport: vi.fn(async () => ({ upgraded: true }) as unknown as Socket),
      },
      stateManager: {
        setTransportReady: vi.fn(),
        setFullyConnected: vi.fn(),
      },
    }) as unknown as ConnectionContext;

  it("always executes", () => {
    const step = new TransportStep();
    expect(step.shouldExecute()).toBe(true);
  });

  it("throws when socket is unavailable", async () => {
    const step = new TransportStep();
    const context = createContext(undefined);

    await expect(step.execute(context)).rejects.toThrow("Socket not available for transport setup");
    expect(context.transport.setupTransport).not.toHaveBeenCalled();
  });

  it("upgrades socket and marks state manager as fully connected", async () => {
    const step = new TransportStep();
    const rawSocket = { raw: true } as unknown as Socket;
    const upgradedSocket = { tls: true } as unknown as Socket;
    const context = createContext(rawSocket);
    context.transport.setupTransport = vi.fn(async () => upgradedSocket);

    await step.execute(context);

    expect(context.transport.setupTransport).toHaveBeenCalledWith(rawSocket, context.options);
    expect(context.socket).toBe(upgradedSocket);
    expect(context.stateManager.setTransportReady).toHaveBeenCalledTimes(1);
    expect(context.stateManager.setFullyConnected).toHaveBeenCalledTimes(1);
  });
});
