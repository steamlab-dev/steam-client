import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class ConnectionOptionsValidatorStep implements ConnectionStep {
  readonly name = "connection-options-validator";

  shouldExecute(): boolean {
    return true;
  }

  async execute(context: ConnectionContext): Promise<void> {
    context.connectionOptionsValidator.validate(context.options);
  }
}
