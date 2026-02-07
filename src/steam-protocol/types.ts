import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type Connection from "@/connection/connection";
import type { DisconnectMsg } from "@/connection/event-manager";
import type { ConnectionOptions } from "@/connection/types";
import type HeartBeatManager from "./hearbeat-manager";
import type MessageHandler from "./message-handler/message-handler";
import type { MessageHandlerEvents } from "./message-handler/types";
import type ProtoMessenger from "./messengers/proto-messenger";
import type ServiceCallMessenger from "./messengers/service-call-messenger";
import type ProtoManager from "./proto-manager";
import type SessionManager from "./session-manager";

export interface SteamProtocolEvents extends MessageHandlerEvents {
  disconnected: (msg: DisconnectMsg) => void;
}

export interface SteamProtoContext {
  options: ConnectionOptions;
  protos: ProtoManager;
  connection: Connection;
  session: SessionManager;
  messageHandler: MessageHandler;
  protoMessenger: ProtoMessenger;
  serviceCallMessenger: ServiceCallMessenger;
  emitter: TypedEventEmitter<SteamProtocolEvents>;
  heartBeat: HeartBeatManager;
}

export type SteamProtoContextImps = Partial<Omit<SteamProtoContext, "options">>;

export interface SteamJWT {
  header: {
    /** Token type - always "JWT" */
    typ: "JWT";
    /** Signature algorithm - EdDSA for Steam tokens */
    alg: "EdDSA";
  };
  payload: {
    /** Issuer - "steam" for refresh tokens, "r:ID_PATTERN" for access tokens */
    iss: string;
    /** Subject - Steam ID (e.g. "76561197960410044") */
    sub: string;
    /** Audience - ["web", "renew", "derive"] for refresh, ["web"] for access */
    aud: string[];
    /** Expiration time - Unix timestamp when token expires */
    exp: number;
    /** Not before - Unix timestamp when token becomes valid */
    nbf: number;
    /** Issued at - Unix timestamp when token was created */
    iat: number;
    /** JWT ID - Unique token identifier (format: "XXXX_XXXXXXXX_XXXXX") */
    jti: string;
    /** Original auth time - Unix timestamp of initial authentication */
    oat: number;
    /** Permission level - 1 for refresh tokens, 0 for access tokens */
    per: number;
    /** IP subject - IP address of the authenticated user */
    ip_subject: string;
    /** IP confirmer - IP address that confirmed authentication */
    ip_confirmer: string;
    /** Refresh token expiration - Only present in access tokens */
    rt_exp?: number;
  };
}
