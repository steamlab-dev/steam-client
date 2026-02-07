import type { ConnectionContext } from "../types";

// Base interface for pipeline steps
export interface ConnectionStep {
  readonly name: string;
  shouldExecute(context: ConnectionContext): boolean;
  execute(context: ConnectionContext): Promise<void>;
}
