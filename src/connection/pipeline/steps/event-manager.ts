import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class EventManagerStep implements ConnectionStep {
  readonly name = "event-manager";

  shouldExecute(context: ConnectionContext): boolean {
    return context.stateManager.getState().transportReady;
  }

  async execute(context: ConnectionContext): Promise<void> {
    context.eventManager.attachEvents(context);
  }
}
