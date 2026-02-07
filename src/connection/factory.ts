import { isIP } from "node:net";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import ConnectorFactory from "./connectors/factory";
import DataParserFactory from "./data-parsers/factory";
import DataSenderFactory from "./data-senders/factory";
import EventManager from "./event-manager";
import ConnectionOptionsValidator from "./options-validator";
import ConnectionPipeline from "./pipeline/pipeline";
import AttachDataParserStep from "./pipeline/steps/attach-data-parser";
import AttachDataSenderStep from "./pipeline/steps/attach-data-sender";
import ConnectorStep from "./pipeline/steps/connector";
import EventManagerStep from "./pipeline/steps/event-manager";
import ConnectionOptionsValidatorStep from "./pipeline/steps/options-validator";
import TransportStep from "./pipeline/steps/transport";
import TransportFactory from "./protocol-transports/factory";
import ConnectionStateManager from "./state-manager";
import type {
  ConnectionContext,
  ConnectionContextImps,
  ConnectionEvents,
  ConnectionOptions,
  SteamCMServer,
  TransportType,
} from "./types";

/**
 * A static factory class for creating and assembling connection components.
 * This class cannot be instantiated.
 */
export default class ConnectionFactory {
  private constructor() {}

  /**
   * Initializes the connection pipeline and context using provided
   * options and component implementations.
   */
  static createConnection(
    options: ConnectionOptions,
    imps: ConnectionContextImps & {
      emitter: TypedEventEmitter<ConnectionEvents>;
    },
  ): ConnectionContext {
    const transportType = ConnectionFactory.getTransportType(options.steamCM);

    const context: ConnectionContext = {
      options,
      connectionOptionsValidator: imps?.connectionOptionsValidator ?? ConnectionOptionsValidator,
      stateManager: imps?.stateManager ?? new ConnectionStateManager(),
      connector: imps?.connector ?? ConnectorFactory.create(options),
      transport: imps?.transport ?? TransportFactory.create(transportType),
      sender: imps?.sender ?? DataSenderFactory.create(transportType),
      parser: imps?.parser ?? DataParserFactory.create(transportType, imps.emitter),
      eventManager: imps?.eventManager ?? new EventManager(imps.emitter),
      emitter: imps.emitter,
    };

    return context;
  }

  /**
   * Creates and configures a ConnectionPipeline with a default set of processing steps.
   */
  static createPipeline(): ConnectionPipeline {
    return new ConnectionPipeline()
      .addStep(new ConnectionOptionsValidatorStep())
      .addStep(new ConnectorStep())
      .addStep(new TransportStep())
      .addStep(new AttachDataSenderStep())
      .addStep(new AttachDataParserStep())
      .addStep(new EventManagerStep());
  }

  /**
   * Determines the transport protocol ('tcp' or 'ws') based on the server's host format.
   */
  static getTransportType(server: SteamCMServer): TransportType {
    return isIP(server.host) ? "tcp" : "ws";
  }
}
