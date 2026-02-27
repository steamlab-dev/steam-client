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
    // Replace the raw socket with the transport-upgraded socket.
    context.socket = socket; // Mutate context
    context.stateManager.setTransportReady();
    // connected=true is only valid after both steam + transport are complete.
    context.stateManager.setFullyConnected();
  }
}
