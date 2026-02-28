import { describe, expect, it, vi } from "vitest";
import AttachDataSenderStep from "@/connection/pipeline/steps/attach-data-sender";
import type { ConnectionContext } from "@/connection/types";

describe("AttachDataSenderStep", () => {
  const createContext = (socket: unknown, transportReady = true): ConnectionContext =>
    ({
      socket,
      sender: { attach: vi.fn() },
      stateManager: {
        getState: vi.fn(() => ({ transportReady })),
      },
    }) as unknown as ConnectionContext;

  it("executes only when transport is ready", () => {
    const step = new AttachDataSenderStep();

    expect(step.shouldExecute(createContext({}, true))).toBe(true);
    expect(step.shouldExecute(createContext({}, false))).toBe(false);
  });

  it("attaches sender when socket exists", async () => {
    const socket = {};
    const context = createContext(socket, true);
    const step = new AttachDataSenderStep();

    await step.execute(context);

    expect(context.sender.attach).toHaveBeenCalledWith(socket);
  });

  it("is a no-op when socket is missing", async () => {
    const context = createContext(undefined, true);
    const step = new AttachDataSenderStep();

    await step.execute(context);

    expect(context.sender.attach).not.toHaveBeenCalled();
  });
});
