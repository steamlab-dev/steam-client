import { describe, expect, it, vi } from "vitest";
import AttachDataParserStep from "@/connection/pipeline/steps/attach-data-parser";
import type { ConnectionContext } from "@/connection/types";

describe("AttachDataParserStep", () => {
  const createContext = (socket: unknown, transportReady = true): ConnectionContext =>
    ({
      socket,
      parser: { attach: vi.fn() },
      stateManager: {
        getState: vi.fn(() => ({ transportReady })),
      },
    }) as unknown as ConnectionContext;

  it("executes only when transport is ready", () => {
    const step = new AttachDataParserStep();

    expect(step.shouldExecute(createContext({}, true))).toBe(true);
    expect(step.shouldExecute(createContext({}, false))).toBe(false);
  });

  it("attaches parser when socket exists", async () => {
    const socket = {};
    const context = createContext(socket, true);
    const step = new AttachDataParserStep();

    await step.execute(context);

    expect(context.parser.attach).toHaveBeenCalledWith(socket);
  });

  it("is a no-op when socket is missing", async () => {
    const context = createContext(undefined, true);
    const step = new AttachDataParserStep();

    await step.execute(context);

    expect(context.parser.attach).not.toHaveBeenCalled();
  });
});
