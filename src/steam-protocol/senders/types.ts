import type {
  EMsg,
  EMsgMapRequestPayloadByEMsg,
  EMsgMapResponsePayloadByRequestEMsg,
  EMsgMapToPayload,
  ServiceCallsWithOutRes,
  ServiceCallToResMap,
  SteamProtos,
} from "@/common/steam-language";

export interface Messenger {
  sendWithResponse(req: unknown): Promise<unknown>;
  send(req: unknown): void;
  resolveRequest(key: unknown, body: unknown): boolean;
  rejectRequest(key: unknown, error: Error): boolean;
  cleanUp(): void;
}

type ProtoMessagePayload<K extends EMsg = EMsg> = EMsgMapRequestPayloadByEMsg<K>;

// Request message structure
export type ProtoRequestMessage<K extends EMsg = EMsg, T extends EMsg | undefined = undefined> = {
  eMsg: K;
  eMsgRes?: T; // Expected EMsg Response for non-conventional Req->Res mappings
  payload: ProtoMessagePayload<K>;
};

// Response message type - uses explicit response type T if provided, otherwise infers from request K
export type ProtoResponseMessage<
  K extends EMsg,
  T extends EMsg | undefined = undefined,
> = T extends EMsg
  ? T extends keyof EMsgMapToPayload
    ? EMsgMapToPayload[T]
    : undefined
  : EMsgMapResponsePayloadByRequestEMsg<K>;

//  service call types
type ServiceCallToResMapType = typeof ServiceCallToResMap;
export type ServiceCallNamesWithResponse = keyof ServiceCallToResMapType;

interface ServiceCallProtoOverrides {
  CAuthentication_Token_Revoke_Response: Record<string, never>;
}

type ProtoOrUnknown<K> = K extends keyof ServiceCallProtoOverrides
  ? ServiceCallProtoOverrides[K]
  : K extends keyof SteamProtos
    ? SteamProtos[K]
    : unknown;

export type ServiceCallRequestPayload<
  K extends ServiceCallsWithOutRes | ServiceCallNamesWithResponse,
> = ProtoOrUnknown<K>;
export type ServiceCallResponsePayload<K extends ServiceCallNamesWithResponse> = ProtoOrUnknown<
  ServiceCallToResMapType[K]
>;

export type ServiceCallRequestWithResponse<
  K extends ServiceCallNamesWithResponse = ServiceCallNamesWithResponse,
> = {
  message: K;
  payload: ServiceCallRequestPayload<K>;
};

export type ServiceCallRequest<K extends ServiceCallsWithOutRes = ServiceCallsWithOutRes> = {
  message: K;
  payload: ServiceCallRequestPayload<K>;
};
