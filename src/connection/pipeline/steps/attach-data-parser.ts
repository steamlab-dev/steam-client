import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class AttachDataParserStep implements ConnectionStep {
  readonly name = "data-parser";

  shouldExecute(context: ConnectionContext): boolean {
    return context.stateManager.getState().transportReady;
  }

  async execute(context: ConnectionContext): Promise<void> {
    if (context.socket) {
      context.parser.attach(context.socket);
    }
  }
}
