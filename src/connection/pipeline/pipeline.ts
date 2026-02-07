import GenericError from "@/common/generic-error";
import type { ConnectionContext } from "../types";
import type { ConnectionStep } from "./types";

/**
 * Custom error type for failures occurring within the connection pipeline.
 */
export class ConnectionPipelineError extends GenericError {}

/**
 * Manages and executes a sequence of steps to establish a connection.
 * Each step is processed in order, and its execution can be conditional
 * based on the current connection context.
 */
export default class ConnectionPipeline {
  /**
   * Stores the ordered list of connection steps to be executed.
   */
  private steps: ConnectionStep[] = [];

  /**
   * Adds a new step to the end of the connection pipeline.
   * @returns The current instance to allow for method chaining.
   */
  addStep(step: ConnectionStep): this {
    this.steps.push(step);
    return this;
  }

  /**
   * Executes the pipeline, running each applicable step in sequence.
   * If a step fails, the pipeline is halted, and the error is re-thrown.
   * @throws {ConnectionPipelineError} If any step in the pipeline fails during its execution.
   */
  async execute(context: ConnectionContext): Promise<void> {
    for (const step of this.steps) {
      if (step.shouldExecute(context)) {
        try {
          await step.execute(context);
        } catch (error) {
          throw new ConnectionPipelineError(`Step '${step.name}' failed: ${error}`);
        }
      }
    }
  }
}
