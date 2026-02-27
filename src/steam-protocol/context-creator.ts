import { TypedEventEmitter } from "@/common/typed-event-emitter";
import Connection from "@/connection";
import type { ConnectionOptions } from "@/connection/types";
import HeartBeatManager from "./heartbeat-manager";
import MessageHandler from "./message-handler";
import MessengerFactory from "./messengers";
import ProtoManager from "./proto-manager";
import SessionManager from "./session-manager";
import type { SteamProtoContext, SteamProtocolEvents } from "./types";

export default class ContextCreator {
  private constructor() {}

  static create(
    options: ConnectionOptions,
    instances?: Partial<Omit<SteamProtoContext, "options">>,
  ): SteamProtoContext {
    // These instances can be instantiated elsewhere, and passed here
    const connection = instances?.connection ?? Connection.create(options);
    const emitter = instances?.emitter ?? new TypedEventEmitter<SteamProtocolEvents>();
    const session = instances?.session ?? new SessionManager();
    const protos = instances?.protos ?? new ProtoManager("steam");

    // Messengers - handle incoming and outgoing Steam Messages
    const { protoMessenger, serviceCallMessenger } = MessengerFactory({
      connection,
      protos,
      session,
    });

    // Connection heartbeat starts only after a successful logon response.
    const heartBeat = new HeartBeatManager(protoMessenger);

    const messageHandler = MessageHandler({
      connection,
      emitter,
      protos,
      protoMessenger,
      serviceCallMessenger,
      session,
      heartBeat,
    });

    const context: SteamProtoContext = {
      options,
      protos,
      connection,
      session,
      messageHandler,
      protoMessenger,
      serviceCallMessenger,
      emitter,
      heartBeat,
    };

    return context;
  }
}
