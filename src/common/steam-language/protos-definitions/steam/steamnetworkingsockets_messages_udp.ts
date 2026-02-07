/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramSessionCryptInfoSigned,
} from "./steamnetworkingsockets_messages";
import type {
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "./steamnetworkingsockets_messages_certs";

export const ESteamNetworkingUDPMsgID = {
  k_ESteamNetworkingUDPMsg_ChallengeRequest: 32,
  k_ESteamNetworkingUDPMsg_ChallengeReply: 33,
  k_ESteamNetworkingUDPMsg_ConnectRequest: 34,
  k_ESteamNetworkingUDPMsg_ConnectOK: 35,
  k_ESteamNetworkingUDPMsg_ConnectionClosed: 36,
  k_ESteamNetworkingUDPMsg_NoConnection: 37,
} as const;

export type ESteamNetworkingUDPMsgID =
  (typeof ESteamNetworkingUDPMsgID)[keyof typeof ESteamNetworkingUDPMsgID];

export interface CMsgSteamSockets_UDP_ChallengeRequest {
  connection_id?: number;
  my_timestamp?: Long;
  protocol_version?: number;
}

export interface CMsgSteamSockets_UDP_ChallengeReply {
  connection_id?: number;
  challenge?: Long;
  your_timestamp?: Long;
  protocol_version?: number;
}

export interface CMsgSteamSockets_UDP_ConnectRequest {
  client_connection_id?: number;
  challenge?: Long;
  my_timestamp?: Long;
  ping_est_ms?: number;
  crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
  cert?: CMsgSteamDatagramCertificateSigned;
  legacy_protocol_version?: number;
  identity_string?: string;
  legacy_client_steam_id?: Long;
  legacy_identity_binary?: CMsgSteamNetworkingIdentityLegacyBinary;
}

export interface CMsgSteamSockets_UDP_ConnectOK {
  client_connection_id?: number;
  server_connection_id?: number;
  your_timestamp?: Long;
  delay_time_usec?: number;
  crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
  cert?: CMsgSteamDatagramCertificateSigned;
  identity_string?: string;
  legacy_server_steam_id?: Long;
  legacy_identity_binary?: CMsgSteamNetworkingIdentityLegacyBinary;
}

export interface CMsgSteamSockets_UDP_ConnectionClosed {
  to_connection_id?: number;
  from_connection_id?: number;
  debug?: string;
  reason_code?: number;
}

export interface CMsgSteamSockets_UDP_NoConnection {
  from_connection_id?: number;
  to_connection_id?: number;
}

export interface CMsgSteamSockets_UDP_Stats {
  stats?: CMsgSteamDatagramConnectionQuality;
  flags?: number;
}

export namespace CMsgSteamSockets_UDP_Stats {
  export const Flags = {
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
    NOT_PRIMARY_TRANSPORT_E2E: 16,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}
