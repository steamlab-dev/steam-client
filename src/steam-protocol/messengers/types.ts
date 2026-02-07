import type { EMsg, SteamProtos } from "@/common/steam-language";
import type { CAuthentication_Token_Revoke_Response } from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
import type {
  EMsgFromProtoName,
  EMsgReqToEMsgRes,
  EMsgToProto,
} from "@/common/steam-language/steam/EMsgMapping";
import type {
  ServiceCallsWithOutRes,
  ServiceCallToResMap,
} from "@/common/steam-language/steam/ServiceReqtoResMap";

export interface Messenger {
  sendWithResponse(req: unknown): Promise<unknown>;
  send(req: unknown): void;
  resolveRequest(key: unknown, body: unknown): boolean;
  rejectRequest(key: unknown, error: Error): boolean;
  cleanUp(): void;
}

// Basic type aliases for better readability
export type ProtoName = keyof typeof EMsgFromProtoName;

// Helper type to get payload for a given EMsg
export type ProtoPayload<K extends EMsg = EMsg> = K extends keyof EMsgToProto
  ? EMsgToProto[K]
  : never;

// Request message structure
export type ProtoMessageReq<K extends EMsg = EMsg, T extends EMsg | undefined = undefined> = {
  eMsg: K;
  eMsgRes?: T; // Expected EMsg Response for non-conventional Req->Res mappings
  payload: ProtoPayload<K>;
};

// Helper types for response resolution (broken down for clarity)
type ResolveResponseFromRequest<K extends EMsg> = K extends keyof typeof EMsgReqToEMsgRes
  ? (typeof EMsgReqToEMsgRes)[K] extends keyof EMsgToProto
    ? EMsgToProto[(typeof EMsgReqToEMsgRes)[K]]
    : never
  : never;

type ResolveExplicitResponse<T extends EMsg> = T extends keyof EMsgToProto
  ? EMsgToProto[T]
  : undefined;

// Response message type - uses explicit response type T if provided, otherwise infers from request K
export type ProtoMessageRes<K extends EMsg, T extends EMsg | undefined = undefined> = T extends EMsg
  ? ResolveExplicitResponse<T>
  : ResolveResponseFromRequest<K>;

//  service call types
type ServiceCallToResMapType = typeof ServiceCallToResMap;
export type ServiceCallsWithRes = keyof ServiceCallToResMapType;

export interface ServiceCallProtoOverrides {
  CAuthentication_Token_Revoke_Response: CAuthentication_Token_Revoke_Response;
}

type ProtoOrUnknown<K> = K extends keyof ServiceCallProtoOverrides
  ? ServiceCallProtoOverrides[K]
  : K extends keyof SteamProtos
    ? SteamProtos[K]
    : unknown;

export type ServiceCallPayload<K extends ServiceCallsWithOutRes | ServiceCallsWithRes> =
  ProtoOrUnknown<K>;
export type ServiceCallResponse<K extends ServiceCallsWithRes> = ProtoOrUnknown<
  ServiceCallToResMapType[K]
>;

export type ServiceCallMessageWithRes<K extends ServiceCallsWithRes = ServiceCallsWithRes> = {
  message: K;
  payload: ServiceCallPayload<K>;
};

export type ServiceCallMessage<K extends ServiceCallsWithOutRes = ServiceCallsWithOutRes> = {
  message: K;
  payload: ServiceCallPayload<K>;
};
