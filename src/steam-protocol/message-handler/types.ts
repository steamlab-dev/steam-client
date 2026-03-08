import type Long from "long";
import type {
  EMsg,
  EMsgMapToPayload,
  EMsgMapToProtoName,
  EMsg as EMsgValue,
  SteamProtos,
} from "@/common/steam-language";
import type { MessageHandlerError } from "./message-handler";

type StripCMsgPrefix<T extends string> = T extends `CMsg${infer Name}` ? Name : T;

type ProtoMappedEMsg = Extract<keyof EMsgMapToPayload, EMsg>;
type ProtoMessageByEMsg = {
  [K in ProtoMappedEMsg]: ProtoMessage & {
    eMsg: K;
    msgName: StripCMsgPrefix<(typeof EMsgMapToProtoName)[K]>;
    body: EMsgMapToPayload[K];
  };
};
type ProtoMessagesByName = {
  [K in ProtoMappedEMsg as ProtoMessageByEMsg[K]["msgName"]]: ProtoMessageByEMsg[K];
};
type NonProtoMessagesByName = {
  ClientVacBanStatus: NonProtoMessage & {
    eMsg: typeof EMsgValue.k_EMsgClientVACBanStatus;
    msgName: "ClientVacBanStatus";
    body: ClientVacBanStatusBody;
  };
  ClientUpdateGuestPassesList: NonProtoMessage & {
    eMsg: typeof EMsgValue.k_EMsgClientUpdateGuestPassesList;
    msgName: "ClientUpdateGuestPassesList";
    body: ClientUpdateGuestPassesListBody;
  };
};

export interface ClientVacBanStatusBody {
  numBans: number;
}

export interface ClientUpdateGuestPassesListBody {
  EResult: number;
  countGuestPassesToGive: number;
  countGuestPassesToRedeem: number;
}

type SteamMessagesByName = ProtoMessagesByName & NonProtoMessagesByName;
export type SteamMessageName = keyof SteamMessagesByName;
export type PublicSteamMessage = SteamMessagesByName[SteamMessageName];
export type SteamMessages = Partial<{ [K in SteamMessageName]: SteamMessagesByName[K] }>;

export interface MessageHandlerEvents {
  "steam-messages": (steamMessages: SteamMessages) => void;
  "steam-message-error": (error: MessageHandlerError) => void;
}

// Header for non-protobuf messages
export interface NonProtoHeader {
  headerSize: number;
  headerVersion: number;
  targetJobId: Long;
  sourceJobId: Long;
  headerCanary: number;
  steamid: Long;
  client_sessionid: number;
}

// Base message structure
interface BaseMessage {
  eMsg: EMsg;
  msgName: string;
  rawBody: Buffer;
}

// Proto message
export interface ProtoMessage extends BaseMessage {
  isProto: true;
  header: SteamProtos["CMsgProtoBufHeader"];
}

// Non-proto message
export interface NonProtoMessage extends BaseMessage {
  isProto: false;
  header: NonProtoHeader;
}

// Union of all message types
export type ParsedMessage = ProtoMessage | NonProtoMessage;

// Decoded proto message with typed body
export type DecodedProtoMessage<K extends ProtoMappedEMsg = ProtoMappedEMsg> =
  ProtoMessageByEMsg[K];

// Decoded non-proto messages with message-specific bodies.
export type DecodedNonProtoMessage = NonProtoMessagesByName[keyof NonProtoMessagesByName];

export type DecodedServiceMethodMessage = ProtoMessage & {
  eMsg: typeof EMsgValue.k_EMsgServiceMethod | typeof EMsgValue.k_EMsgServiceMethodResponse;
  msgName: string;
  body: Record<string, unknown>;
};

// Union of all decoded message types handled in the pipeline.
export type SteamMessage = PublicSteamMessage | DecodedServiceMethodMessage;

// Message handler interface
export interface MsgHandler {
  canHandle(message: ParsedMessage): boolean;
  handle(message: ParsedMessage): undefined | SteamMessage;
}
