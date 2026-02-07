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
    // 1. Check if already connected
    if (this.context?.connection.hasActiveConnection()) {
      throw new Error("There's an active connection");
    }

    // 2. Load protos
    if (!this.context?.protos.isLoaded()) {
      await this.context?.protos.loadProtos();
    }

    // 3. Connect to Steam
    await this.context?.connection.connect();
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
    this.context = ContextCreator.create(this.options, this.instances);

    // 2. persist the session manager
    this.session = this.context?.session;

    // 3. Define disconnect listener
    this.disconnectHandler = this.cleanUp.bind(this);

    // 4. Listen to connection disconnect
    this.context?.connection.once("disconnected", this.disconnectHandler);
  }

  private cleanUp(msg?: DisconnectMsg) {
    if (!this.context) {
      return;
    }
    this.context.connection.off("disconnected", this.disconnectHandler);

    if (msg) {
      this.context.emitter.emit("disconnected", msg);
    }

    this.context.session.cleanUp();
    this.context.messageHandler.cleanUp();
    this.context.protoMessenger.cleanUp();
    this.context.serviceCallMessenger.cleanUp();
    this.context.heartBeat.stop();
    this.context = undefined;
  }

  addMessageHandler(...msgHandler: MsgHandler[]) {
    this.validateContext();
    const ctx = this.context as SteamProtoContext;
    ctx.messageHandler.addHandler(...msgHandler);
  }

  getEmitter(): TypedEventEmitter<SteamProtocolEvents> {
    this.validateContext();
    const ctx = this.context as SteamProtoContext;
    return ctx.emitter;
  }

  getSession(): SteamProtocolSession {
    return this.session.getSession();
  }

  isLoggedIn(): boolean {
    return this.session.getSession().isLoggedIn;
  }

  disconnect(): void {
    if (!this.context) {
      return;
    }
    const ctx = this.context as SteamProtoContext;
    ctx.connection.disconnect();
  }

  send(req: Omit<ProtoMessageReq, "eMsgRes">): void {
    this.validateConnection();
    const ctx = this.context as SteamProtoContext;
    ctx.protoMessenger.send(req);
  }

  sendWithResponse<K extends EMsg, T extends EMsg | undefined = undefined>(
    req: ProtoMessageReq<K, T>,
  ): Promise<ProtoMessageRes<K, T>> {
    this.validateConnection();
    const ctx = this.context as SteamProtoContext;
    return ctx.protoMessenger.sendWithResponse(req);
  }

  setSteamId(steamId: Long) {
    this.validateConnection();
    const ctx = this.context as SteamProtoContext;
    ctx.session.setSteamId(steamId);
  }

  sendServiceCall(req: ServiceCallMessage) {
    this.validateConnection();
    const ctx = this.context as SteamProtoContext;
    ctx.serviceCallMessenger.send(req);
  }

  sendServiceCallWithRes<K extends ServiceCallsWithRes>(
    req: ServiceCallMessageWithRes<K>,
  ): Promise<ServiceCallResponse<K>> {
    this.validateConnection();
    const ctx = this.context as SteamProtoContext;
    return ctx.serviceCallMessenger.sendWithResponse(req);
  }

  private validateContext() {
    if (!this.context) {
      throw new SteamProtocolError("SteamProtoContext is undefined");
    }
  }

  private validateConnection() {
    this.validateContext();

    if (!this.context?.connection.getState().connected) {
      throw new SteamProtocolError("Not Connected");
    }
  }
}
