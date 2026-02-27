import type Long from "long";
import GenericError from "@/common/generic-error";
import { EMsg } from "@/common/steam-language";
import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type { DisconnectMsg } from "@/connection/event-manager";
import type { ConnectionOptions } from "@/connection/types";
import SteamProtoConstants from "./constants";
import ContextCreator from "./context-creator";
import type { MsgHandler } from "./message-handler/types";
import type {
  ProtoMessageReq,
  ProtoMessageRes,
  ServiceCallMessage,
  ServiceCallMessageWithRes,
  ServiceCallResponse,
  ServiceCallsWithRes,
} from "./messengers/types";
import type SessionManager from "./session-manager";
import type { SteamProtocolSession } from "./session-manager";
import type { SteamProtoContext, SteamProtoContextImps, SteamProtocolEvents } from "./types";

export class SteamProtocolError extends GenericError {}

export default class SteamProtocol {
  private context?: SteamProtoContext;
  private disconnectHandler!: (msg: DisconnectMsg) => void;
  private session!: SessionManager;

  /**
   * @param options Connection options
   * @param instances
   */
  constructor(
    private options: ConnectionOptions,
    private readonly instances?: SteamProtoContextImps,
  ) {
    this.createContext();
  }

  public async connect(): Promise<void> {
    const context = this.requireContext();

    // 1. Validate no active transport/session connection is already present.
    if (context.connection.hasActiveConnection()) {
      throw new SteamProtocolError("There's an active connection");
    }

    // 2. Ensure protos are loaded before any protocol-level send/decode.
    if (!context.protos.isLoaded()) {
      await context.protos.loadProtos();
    }

    // 3. Connect to Steam.
    await context.connection.connect();

    // 4. Send initial hello after transport is connected.
    this.send({
      eMsg: EMsg.k_EMsgClientHello,
      payload: { protocol_version: SteamProtoConstants.ProtocolVersion },
    });
  }

  private createContext() {
    if (this.context) {
      throw new SteamProtocolError("SteamProtoContext is already defined");
    }

    // 1. create context
    const context = ContextCreator.create(this.options, this.instances);
    this.context = context;

    // 2. persist the session manager
    this.session = context.session;

    // 3. Define disconnect listener
    this.disconnectHandler = this.cleanUp.bind(this);

    // 4. Listen to connection disconnect
    context.connection.once("disconnected", this.disconnectHandler);
  }

  private cleanUp(msg?: DisconnectMsg): void {
    const context = this.context;
    if (!context) {
      return;
    }

    // Always detach first so cleanup remains idempotent across repeated calls.
    context.connection.off("disconnected", this.disconnectHandler);

    if (msg) {
      context.emitter.emit("disconnected", msg);
    }

    // Release session/protocol resources in a fixed order.
    context.session.cleanUp();
    context.messageHandler.cleanUp();
    context.protoMessenger.cleanUp();
    context.serviceCallMessenger.cleanUp();
    context.heartBeat.stop();
    this.context = undefined;
  }

  addMessageHandler(...msgHandler: MsgHandler[]) {
    this.requireContext().messageHandler.addHandler(...msgHandler);
  }

  getEmitter(): TypedEventEmitter<SteamProtocolEvents> {
    return this.requireContext().emitter;
  }

  getSession(): SteamProtocolSession {
    return this.session.getSession();
  }

  isLoggedIn(): boolean {
    return this.session.getSession().isLoggedIn;
  }

  disconnect(): void {
    this.context?.connection.disconnect();
  }

  send(req: Omit<ProtoMessageReq, "eMsgRes">): void {
    this.requireConnectedContext().protoMessenger.send(req);
  }

  sendWithResponse<K extends EMsg, T extends EMsg | undefined = undefined>(
    req: ProtoMessageReq<K, T>,
  ): Promise<ProtoMessageRes<K, T>> {
    return this.requireConnectedContext().protoMessenger.sendWithResponse(req);
  }

  setSteamId(steamId: Long) {
    this.requireConnectedContext().session.setSteamId(steamId);
  }

  sendServiceCall(req: ServiceCallMessage) {
    this.requireConnectedContext().serviceCallMessenger.send(req);
  }

  sendServiceCallWithRes<K extends ServiceCallsWithRes>(
    req: ServiceCallMessageWithRes<K>,
  ): Promise<ServiceCallResponse<K>> {
    return this.requireConnectedContext().serviceCallMessenger.sendWithResponse(req);
  }

  private requireContext(): SteamProtoContext {
    const context = this.context;
    if (!context) {
      throw new SteamProtocolError("SteamProtoContext is undefined");
    }
    return context;
  }

  private requireConnectedContext(): SteamProtoContext {
    const context = this.requireContext();
    if (!context.connection.getState().connected) {
      throw new SteamProtocolError("Not Connected");
    }
    return context;
  }
}
