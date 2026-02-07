import type Long from "long";
import type { EMsg, SteamProtos } from "@/common/steam-language";
import type { EMsgToProto, EMsgToProtoName } from "@/common/steam-language/steam/EMsgMapping";
import type { MessageHandlerError } from "./message-handler";

export interface MessageHandlerEvents {
  "steam-messages": (messages: SteamMessage[]) => void;
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
  msgName: (typeof EMsgToProtoName)[keyof typeof EMsgToProtoName] | string;
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
export interface DecodedProtoMessage<K extends EMsg = EMsg> extends ProtoMessage {
  eMsg: K;
  body: EMsgToProto[K extends keyof EMsgToProto ? K : never];
}

// Decoded non-proto message with generic body
export interface DecodedNonProtoMessage extends NonProtoMessage {
  body: Record<string, unknown>;
}

// Union of all decoded message types
export type SteamMessage = DecodedProtoMessage | DecodedNonProtoMessage;

// Message handler interface
export interface MsgHandler {
  canHandle(message: ParsedMessage): boolean;
  handle(message: ParsedMessage | SteamMessage): undefined | SteamMessage;
}
