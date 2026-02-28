import type { EMsg } from "@/common/steam-language";
import { EMsgReqToEMsgRes, EMsgToProtoName } from "@/common/steam-language/steam/EMsgMapping";
import type Connection from "@/connection/connection";
import type SteamProtoManager from "@/steam-protocol/proto-manager";
import { SteamProtocolError } from "../error";
import PendingRequestMap from "./common/pending-request-map";
import type ProtoHeaderBuilder from "./common/proto-header-builder";
import type { Messenger, ProtoMessageReq, ProtoMessageRes } from "./types";

export class ProtoMessengerError extends SteamProtocolError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "proto-messenger", cause);
  }
}

const PENDING_REQUEST_TIMEOUT_MS = 30_000;
const CLEANUP_ERROR_MESSAGE = "Cancelled by ProtoSender";

export default class ProtoMessenger implements Messenger {
  constructor(
    private readonly protos: SteamProtoManager,
    private readonly connection: Connection,
    private readonly headerBuilder: ProtoHeaderBuilder,
    private readonly pendingRequest: PendingRequestMap<
      EMsg,
      Record<string, unknown>
    > = new PendingRequestMap(PENDING_REQUEST_TIMEOUT_MS),
  ) {}

  sendWithResponse<K extends EMsg, T extends EMsg | undefined = undefined>(
    req: ProtoMessageReq<K, T>,
  ): Promise<ProtoMessageRes<K, T>> {
    const eMsgRes = this.resolveResponseEMsg(req);

    const promise = this.pendingRequest.add(eMsgRes);

    this.sendProto(req.eMsg, req.payload);
    return promise as Promise<ProtoMessageRes<K, T>>;
  }

  public send(req: Omit<ProtoMessageReq, "eMsgRes">): void {
    this.sendProto(req.eMsg, req.payload);
  }

  public resolveRequest(eMsg: EMsg, payload: Record<string, unknown>): boolean {
    return this.pendingRequest.resolve(eMsg, payload);
  }

  public rejectRequest(eMsg: EMsg, error: Error): boolean {
    return this.pendingRequest.reject(eMsg, error);
  }

  public cleanUp(): void {
    this.pendingRequest.cleanUp(new ProtoMessengerError(CLEANUP_ERROR_MESSAGE));
  }

  private sendProto(eMsg: EMsg, payload: unknown): void {
    const header = this.headerBuilder.build(eMsg, {});
    const protoName = EMsgToProtoName[eMsg as keyof typeof EMsgToProtoName];
    if (!protoName) {
      throw new ProtoMessengerError(`Missing proto mapping for eMsg: ${eMsg}`);
    }
    const body = this.protos.encode(protoName, payload as Record<string, unknown>);
    this.connection.send(Buffer.concat([header, body]));
  }

  private resolveResponseEMsg<K extends EMsg, T extends EMsg | undefined>(
    req: ProtoMessageReq<K, T>,
  ): EMsg {
    const eMsgRes = req.eMsgRes ?? EMsgReqToEMsgRes[req.eMsg as keyof typeof EMsgReqToEMsgRes];
    if (eMsgRes === undefined) {
      throw new ProtoMessengerError(`Missing response mapping for eMsg: ${req.eMsg}`);
    }
    return eMsgRes;
  }
}
