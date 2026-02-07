import { beforeEach, describe, expect, it, vi } from "vitest";
import ConnectionPipeline, { ConnectionPipelineError } from "@/connection/pipeline/pipeline";
import type { ConnectionStep } from "@/connection/pipeline/types";
import type { ConnectionContext } from "@/connection/types";

const makeFakeContext = (): ConnectionContext => ({
  options: {} as unknown as ConnectionContext["options"],
  connectionOptionsValidator: {} as unknown as ConnectionContext["connectionOptionsValidator"],
  stateManager: {} as unknown as ConnectionContext["stateManager"],
  connector: {} as unknown as ConnectionContext["connector"],
  transport: {} as unknown as ConnectionContext["transport"],
  eventManager: {} as unknown as ConnectionContext["eventManager"],
  sender: {} as unknown as ConnectionContext["sender"],
  parser: {} as unknown as ConnectionContext["parser"],
  emitter: {} as unknown as ConnectionContext["emitter"],
});

describe("ConnectionPipeline", () => {
  let pipeline: ConnectionPipeline;
  let context: ConnectionContext;

  const createStep = (
    name: string,
    shouldExec = true,
    execImpl?: () => Promise<void>,
  ): ConnectionStep => ({
    name,
    shouldExecute: vi.fn().mockReturnValue(shouldExec) as (ctx: ConnectionContext) => boolean,
    execute: vi.fn().mockImplementation(execImpl || (async () => {})) as (
      ctx: ConnectionContext,
    ) => Promise<void>,
  });

  beforeEach(() => {
    pipeline = new ConnectionPipeline();
    context = makeFakeContext();
  });

  it("adds steps with addStep and returns pipeline for chaining", () => {
    const step = createStep("step1");
    const result = pipeline.addStep(step);
    expect(result).toBe(pipeline);
    expect((pipeline as unknown as { steps: ConnectionStep[] }).steps).toContain(step);
  });

  it("executes only steps where shouldExecute returns true", async () => {
    const step1 = createStep("step1", true);
    const step2 = createStep("step2", false);
    pipeline.addStep(step1).addStep(step2);

    await pipeline.execute(context);

    expect(step1.shouldExecute).toHaveBeenCalledWith(context);
    expect(step1.execute).toHaveBeenCalledWith(context);
    expect(step2.shouldExecute).toHaveBeenCalledWith(context);
    expect(step2.execute).not.toHaveBeenCalled();
  });

  it("executes multiple steps in sequence", async () => {
    const order: string[] = [];
    const step1 = createStep("s1", true, async () => {
      order.push("s1");
    });
    const step2 = createStep("s2", true, async () => {
      order.push("s2");
    });
    pipeline.addStep(step1).addStep(step2);

    await pipeline.execute(context);

    expect(order).toEqual(["s1", "s2"]);
  });

  it("wraps errors from a step in ConnectionPipelineError", async () => {
    const failingStep = createStep("failStep", true, async () => {
      throw new Error("boom");
    });
    pipeline.addStep(failingStep);

    await expect(pipeline.execute(context)).rejects.toThrowError(ConnectionPipelineError);
    await expect(pipeline.execute(context)).rejects.toThrowError(/Step 'failStep' failed:/);
  });

  it("passes the same context object to all executed steps", async () => {
    const step1 = createStep("s1", true);
    const step2 = createStep("s2", true);
    pipeline.addStep(step1).addStep(step2);

    await pipeline.execute(context);

    expect(step1.execute).toHaveBeenCalledWith(context);
    expect(step2.execute).toHaveBeenCalledWith(context);
  });
});
