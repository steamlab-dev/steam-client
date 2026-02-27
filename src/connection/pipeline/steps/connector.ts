import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class ConnectorStep implements ConnectionStep {
  readonly name = "connector-step";

  shouldExecute(): boolean {
    return true;
  }

  async execute(context: ConnectionContext): Promise<void> {
    // Transition into connecting before any network activity starts.
    context.stateManager.setConnecting();
    const socket = await context.connector.connect(context.options);
    // Connector output becomes the canonical socket for the next pipeline step.
    context.socket = socket; // Mutate context
    if (context.options.proxy) {
      // Proxy must be marked before steamConnected for proxied connection paths.
      context.stateManager.setProxyConnected();
    }
    context.stateManager.setSteamConnected();
  }
}
