import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class AttachDataSenderStep implements ConnectionStep {
  readonly name = "data-sender";

  shouldExecute(context: ConnectionContext): boolean {
    return context.stateManager.getState().transportReady;
  }

  async execute(context: ConnectionContext): Promise<void> {
    if (context.socket) {
      context.sender.attach(context.socket);
    }
  }
}
