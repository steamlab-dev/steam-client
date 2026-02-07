import type { ConnectionContext } from "@/connection/types";
import type { ConnectionStep } from "../types";

export default class TransportStep implements ConnectionStep {
  readonly name = "transport-setup";

  shouldExecute(): boolean {
    return true;
  }

  async execute(context: ConnectionContext): Promise<void> {
    if (!context.socket) {
      throw new Error("Socket not available for transport setup");
    }

    const socket = await context.transport.setupTransport(context.socket, context.options);
    context.socket = socket; // Mutate context
    context.stateManager.setTransportReady();
    context.stateManager.setFullyConnected();
  }
}
