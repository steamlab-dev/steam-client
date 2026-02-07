import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class ConnectorStep implements ConnectionStep {
  readonly name = "connector-step";

  shouldExecute(): boolean {
    return true;
  }

  async execute(context: ConnectionContext): Promise<void> {
    context.stateManager.setConnecting();
    const socket = await context.connector.connect(context.options);
    context.socket = socket; // Mutate context
    context.stateManager.setSteamConnected();
    if (context.options.proxy) {
      context.stateManager.setProxyConnected();
    }
  }
}
