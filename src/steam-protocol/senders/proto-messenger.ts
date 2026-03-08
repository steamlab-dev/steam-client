import { EMsg } from "@/common/steam-language";
import { EMsgMapToProtoName, EMsgMapToResponse } from "@/common/steam-language/steam/EMsgMapping";
import type Connection from "@/connection/connection";
import type SteamProtoManager from "@/steam-protocol/proto-manager";
import { SteamProtocolError } from "../error";
import PendingRequestMap from "./common/pending-request-map";
import type ProtoHeaderBuilder from "./common/proto-header-builder";
import type { Messenger, ProtoRequestMessage, ProtoResponseMessage } from "./types";

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
    req: ProtoRequestMessage<K, T>,
  ): Promise<ProtoResponseMessage<K, T>> {
    const eMsgRes = this.resolveResponseEMsg(req);

    const promise = this.pendingRequest.add(eMsgRes);

    this.sendProto(req.eMsg, req.payload);
    return promise as Promise<ProtoResponseMessage<K, T>>;
  }

  public send(req: Omit<ProtoRequestMessage, "eMsgRes">): void {
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
    const protoName = this.getProtoName(eMsg);
    if (!protoName) {
      throw new ProtoMessengerError(`Missing proto mapping for eMsg: ${eMsg}`);
    }
    const body = this.protos.encode(protoName, payload as Record<string, unknown>);
    this.connection.send(Buffer.concat([header, body]));
  }

  private resolveResponseEMsg<K extends EMsg, T extends EMsg | undefined>(
    req: ProtoRequestMessage<K, T>,
  ): EMsg {
    const eMsgRes = req.eMsgRes ?? EMsgMapToResponse[req.eMsg as keyof typeof EMsgMapToResponse];
    if (eMsgRes === undefined) {
      throw new ProtoMessengerError(`Missing response mapping for eMsg: ${req.eMsg}`);
    }
    return eMsgRes;
  }

  // Resolve proto message name while applying special rules for certain eMsg types.
  private getProtoName(eMsg: EMsg): string {
    if (eMsg === EMsg.k_EMsgClientGamesPlayedWithDataBlob) {
      eMsg = EMsg.k_EMsgClientGamesPlayed;
    }

    const protoName = EMsgMapToProtoName[eMsg as keyof typeof EMsgMapToProtoName];

    if (!protoName) {
      throw new ProtoMessengerError(`Missing proto mapping for eMsg: ${eMsg}`);
    }
    return protoName;
  }
}
