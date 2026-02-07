import GenericError from "@/common/generic-error";
import type { EMsg } from "@/common/steam-language";
import { EMsgReqToEMsgRes, EMsgToProtoName } from "@/common/steam-language/steam/EMsgMapping";
import type Connection from "@/connection/connection";
import type SteamProtoManager from "@/steam-protocol/proto-manager";
import PendingRequestMap from "./common/pending-request-map";
import type ProtoHeaderBuilder from "./common/proto-header-builder";
import type { Messenger, ProtoMessageReq, ProtoMessageRes } from "./types";

export class ProtoMessengerError extends GenericError {}

export default class ProtoMessenger implements Messenger {
  constructor(
    private readonly protos: SteamProtoManager,
    private readonly connection: Connection,
    private readonly headerBuilder: ProtoHeaderBuilder,
    private readonly pendingRequest: PendingRequestMap<
      EMsg,
      Record<string, unknown>
    > = new PendingRequestMap(30_000),
  ) {}

  sendWithResponse<K extends EMsg, T extends EMsg | undefined = undefined>(
    req: ProtoMessageReq<K, T>,
  ): Promise<ProtoMessageRes<K, T>> {
    const eMsgRes = req.eMsgRes ?? EMsgReqToEMsgRes[req.eMsg as keyof typeof EMsgReqToEMsgRes];

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
    this.pendingRequest.cleanUp(new Error("Cancelled by ProtoSender"));
  }

  private sendProto(eMsg: EMsg, payload: unknown): void {
    const header = this.headerBuilder.build(eMsg, {});
    const protoName = EMsgToProtoName[eMsg as keyof typeof EMsgToProtoName];
    const body = this.protos.encode(protoName, payload as Record<string, unknown>);
    this.connection.send(Buffer.concat([header, body]));
  }
}
