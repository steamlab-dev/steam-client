/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramSessionCryptInfoSigned,
  CMsgSteamNetworkingICESessionSummary,
} from "./steamnetworkingsockets_messages";
import type {
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "./steamnetworkingsockets_messages_certs";

export const ESteamDatagramMsgID = {
  k_ESteamDatagramMsg_Invalid: 0,
  k_ESteamDatagramMsg_RouterPingRequest: 1,
  k_ESteamDatagramMsg_RouterPingReply: 2,
  k_ESteamDatagramMsg_GameserverPingRequest: 3,
  k_ESteamDatagramMsg_GameserverSessionRequest: 5,
  k_ESteamDatagramMsg_GameserverSessionEstablished: 6,
  k_ESteamDatagramMsg_NoSession: 7,
  k_ESteamDatagramMsg_Diagnostic: 8,
  k_ESteamDatagramMsg_DataClientToRouter: 9,
  k_ESteamDatagramMsg_DataRouterToServer: 10,
  k_ESteamDatagramMsg_DataServerToRouter: 11,
  k_ESteamDatagramMsg_DataRouterToClient: 12,
  k_ESteamDatagramMsg_Stats: 13,
  k_ESteamDatagramMsg_ClientPingSampleRequest: 14,
  k_ESteamDatagramMsg_ClientPingSampleReply: 15,
  k_ESteamDatagramMsg_ClientToRouterSwitchedPrimary: 16,
  k_ESteamDatagramMsg_RelayHealth: 17,
  k_ESteamDatagramMsg_ConnectRequest: 18,
  k_ESteamDatagramMsg_ConnectOK: 19,
  k_ESteamDatagramMsg_ConnectionClosed: 20,
  k_ESteamDatagramMsg_NoConnection: 21,
  k_ESteamDatagramMsg_TicketDecryptRequest: 22,
  k_ESteamDatagramMsg_TicketDecryptReply: 23,
  k_ESteamDatagramMsg_P2PSessionRequest: 24,
  k_ESteamDatagramMsg_P2PSessionEstablished: 25,
  k_ESteamDatagramMsg_P2PStatsClient: 26,
  k_ESteamDatagramMsg_P2PStatsRelay: 27,
  k_ESteamDatagramMsg_P2PBadRoute: 28,
  k_ESteamDatagramMsg_GameserverPingReply: 29,
  k_ESteamDatagramMsg_LegacyGameserverRegistration: 30,
  k_ESteamDatagramMsg_SetSecondaryAddressRequest: 31,
  k_ESteamDatagramMsg_SetSecondaryAddressResult: 32,
  k_ESteamDatagramMsg_RelayToRelayPingRequest: 33,
  k_ESteamDatagramMsg_RelayToRelayPingReply: 34,
} as const;

export type ESteamDatagramMsgID = (typeof ESteamDatagramMsgID)[keyof typeof ESteamDatagramMsgID];

export interface CMsgSteamNetworkingIPAddress {
  v4?: number;
  v6?: Buffer;
}

export interface CMsgSteamDatagramSignedMessageGeneric {
  cert?: CMsgSteamDatagramCertificateSigned;
  signed_data?: Buffer;
  signature?: Buffer;
  dummy_pad?: Buffer;
}

export interface CMsgSteamDatagramRouterPingReply {
  client_timestamp?: number;
  latency_datacenter_ids?: number[];
  latency_ping_ms?: number[];
  latency_datacenter_ids_p2p?: number[];
  latency_ping_ms_p2p?: number[];
  your_public_ip?: number;
  your_public_port?: number;
  server_time?: number;
  challenge?: Long;
  seconds_until_shutdown?: number;
  client_cookie?: number;
  recv_tos?: number;
  echo_sent_tos?: number;
  sent_tos?: number;
  echo_request_reply_tos?: number;
  scoring_penalty_relay_cluster?: number;
  flags?: number;
  route_exceptions?: CMsgSteamDatagramRouterPingReply.RouteException[];
  alt_addresses?: CMsgSteamDatagramRouterPingReply.AltAddress[];
  dummy_pad?: Buffer;
  dummy_varint?: Long;
}

export namespace CMsgSteamDatagramRouterPingReply {
  export interface RouteException {
    data_center_id?: number;
    flags?: number;
    penalty?: number;
  }

  export interface AltAddress {
    ipv4?: number;
    port?: number;
    penalty?: number;
    id?: string;
  }

  export namespace AltAddress {
    export const Protocol = {
      DefaultProtocol: 0,
    } as const;

    export type Protocol = (typeof Protocol)[keyof typeof Protocol];
  }
  export const Flags = {
    FLAG_MAYBE_MORE_DATA_CENTERS: 1,
    FLAG_MAYBE_MORE_ALT_ADDRESSES: 2,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramGameserverPingRequestBody {
  relay_popid?: number;
  your_public_ip?: CMsgSteamNetworkingIPAddress;
  your_public_port?: number;
  relay_unix_time?: Long;
  routing_secret?: Long;
  my_ips?: CMsgSteamNetworkingIPAddress[];
  echo?: Buffer;
}

export interface CMsgSteamDatagramGameserverPingRequestEnvelope {
  cert?: CMsgSteamDatagramCertificateSigned;
  signed_data?: Buffer;
  signature?: Buffer;
  legacy_your_public_ip?: number;
  legacy_your_public_port?: number;
  legacy_relay_unix_time?: number;
  legacy_challenge?: Long;
  legacy_router_timestamp?: number;
  dummy_pad?: Buffer;
}

export interface CMsgSteamDatagramGameserverPingReplyData {
  echo_relay_unix_time?: number;
  echo?: Buffer;
  legacy_challenge?: Long;
  legacy_router_timestamp?: number;
  data_center_id?: number;
  appid?: number;
  protocol_version?: number;
  build?: string;
  network_config_version?: Long;
  my_unix_time?: number;
  routing_blob?: Buffer;
}

export interface CMsgSteamDatagramNoSessionRelayToClient {
  connection_id?: number;
  your_public_ip?: number;
  your_public_port?: number;
  server_time?: number;
  challenge?: Long;
  seconds_until_shutdown?: number;
}

export interface CMsgSteamDatagramNoSessionRelayToPeer {
  legacy_relay_session_id?: number;
  from_relay_session_id?: number;
  from_connection_id?: number;
  kludge_pad?: Long;
}

export interface CMsgTOSTreatment {
  l4s_detect?: string;
  up_ecn1?: string;
  down_dscp45?: string;
}

export interface CMsgSteamDatagramClientPingSampleRequest {
  connection_id?: number;
}

export interface CMsgSteamDatagramClientPingSampleReply {
  connection_id?: number;
  relay_override_active?: boolean;
  tos?: CMsgTOSTreatment;
  pops?: CMsgSteamDatagramClientPingSampleReply.POP[];
  legacy_data_centers?: CMsgSteamDatagramClientPingSampleReply.LegacyDataCenter[];
}

export namespace CMsgSteamDatagramClientPingSampleReply {
  export interface POP {
    pop_id?: number;
    default_front_ping_ms?: number;
    cluster_penalty?: number;
    default_e2e_ping_ms?: number;
    default_e2e_score?: number;
    p2p_via_peer_relay_pop_id?: number;
    best_dc_ping_ms?: number;
    best_dc_score?: number;
    best_dc_via_relay_pop_id?: number;
    default_dc_ping_ms?: number;
    default_dc_score?: number;
    default_dc_via_relay_pop_id?: number;
    test_dc_ping_ms?: number;
    test_dc_score?: number;
    test_dc_via_relay_pop_id?: number;
  }

  export namespace POP {
    export interface AltAddress {
      id?: string;
      front_ping_ms?: number;
      penalty?: number;
    }
  }
  export interface LegacyDataCenter {
    data_center_id?: number;
    best_dc_via_relay_pop_id?: number;
    best_dc_ping_ms?: number;
  }
}

export interface CMsgSteamDatagramClientSwitchedPrimary {
  connection_id?: number;
  from_ip?: number;
  from_port?: number;
  from_router_cluster?: number;
  from_active_time?: number;
  from_active_packets_recv?: number;
  from_dropped_reason?: string;
  gap_ms?: number;
  from_quality_now?: CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;
  to_quality_now?: CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;
  from_quality_then?: CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;
  to_quality_then?: CMsgSteamDatagramClientSwitchedPrimary.RouterQuality;
}

export namespace CMsgSteamDatagramClientSwitchedPrimary {
  export interface RouterQuality {
    score?: number;
    front_ping?: number;
    back_ping?: number;
    seconds_until_down?: number;
  }
}

export interface CMsgSteamDatagramConnectRequest {
  connection_id?: number;
  my_timestamp?: Long;
  ping_est_ms?: number;
  virtual_port?: number;
  gameserver_relay_session_id?: number;
  crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
  cert?: CMsgSteamDatagramCertificateSigned;
  routing_secret?: Long;
  legacy_client_steam_id?: Long;
}

export interface CMsgSteamDatagramConnectOK {
  client_connection_id?: number;
  server_connection_id?: number;
  your_timestamp?: Long;
  delay_time_usec?: number;
  gameserver_relay_session_id?: number;
  crypt?: CMsgSteamDatagramSessionCryptInfoSigned;
  cert?: CMsgSteamDatagramCertificateSigned;
}

export interface CMsgSteamNetworkingP2PSDRRoutingSummary {
  initial_ping?: number;
  initial_ping_front_local?: number;
  initial_ping_front_remote?: number;
  initial_score?: number;
  initial_pop_local?: number;
  initial_pop_remote?: number;
  best_ping?: number;
  best_ping_front_local?: number;
  best_ping_front_remote?: number;
  best_score?: number;
  best_pop_local?: number;
  best_pop_remote?: number;
  best_time?: number;
  negotiation_ms?: number;
  selected_seconds?: number;
}

export interface CMsgSteamDatagramP2PRoutingSummary {
  ice?: CMsgSteamNetworkingICESessionSummary;
  sdr?: CMsgSteamNetworkingP2PSDRRoutingSummary;
}

export interface CMsgSteamDatagramConnectionClosed {
  to_connection_id?: number;
  from_connection_id?: number;
  from_identity_string?: string;
  legacy_from_identity_binary?: CMsgSteamNetworkingIdentityLegacyBinary;
  legacy_from_steam_id?: Long;
  legacy_gameserver_relay_session_id?: number;
  to_relay_session_id?: number;
  from_relay_session_id?: number;
  forward_target_relay_routing_token?: Buffer;
  forward_target_revision?: number;
  relay_mode?: CMsgSteamDatagramConnectionClosed.ERelayMode;
  debug?: string;
  reason_code?: number;
  routing_secret?: Long;
  not_primary_session?: boolean;
  not_primary_transport?: boolean;
  relay_override_active?: boolean;
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  p2p_routing_summary?: CMsgSteamDatagramP2PRoutingSummary;
}

export namespace CMsgSteamDatagramConnectionClosed {
  export const ERelayMode = {
    None: 0,
    EndToEnd: 1,
    ClosedByPeer: 2,
  } as const;

  export type ERelayMode = (typeof ERelayMode)[keyof typeof ERelayMode];
}

export interface CMsgSteamDatagramNoConnection {
  to_connection_id?: number;
  from_connection_id?: number;
  legacy_gameserver_relay_session_id?: number;
  to_relay_session_id?: number;
  from_relay_session_id?: number;
  from_identity_string?: string;
  legacy_from_steam_id?: Long;
  end_to_end?: boolean;
  not_primary_session?: boolean;
  not_primary_transport?: boolean;
  relay_override_active?: boolean;
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  p2p_routing_summary?: CMsgSteamDatagramP2PRoutingSummary;
  routing_secret?: Long;
  dummy_pad?: number;
}

export interface CMsgSteamDatagramGameserverSessionRequest {
  ticket?: Buffer;
  challenge_time?: number;
  challenge?: Long;
  client_connection_id?: number;
  server_connection_id?: number;
  network_config_version?: Long;
  protocol_version?: number;
  platform?: string;
  build?: string;
  dev_gameserver_identity?: string;
  dev_client_cert?: CMsgSteamDatagramCertificateSigned;
}

export interface CMsgSteamDatagramGameserverSessionEstablished {
  connection_id?: number;
  gameserver_identity_string?: string;
  seconds_until_shutdown?: number;
  seq_num_r2c?: number;
  dummy_legacy_identity_binary?: Buffer;
  legacy_gameserver_steamid?: Long;
}

export interface CMsgSteamDatagramConnectionStatsClientToRouter {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  client_connection_id?: number;
  seq_num_c2r?: number;
  seq_num_e2e?: number;
}

export namespace CMsgSteamDatagramConnectionStatsClientToRouter {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
    NOT_PRIMARY_SESSION: 8,
    CLIENT_RELAY_OVERRIDE: 32,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramConnectionStatsRouterToClient {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  seconds_until_shutdown?: number;
  migrate_request_ip?: number;
  migrate_request_port?: number;
  scoring_penalty_relay_cluster?: number;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  client_connection_id?: number;
  seq_num_r2c?: number;
  seq_num_e2e?: number;
}

export namespace CMsgSteamDatagramConnectionStatsRouterToClient {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramConnectionStatsRouterToServer {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  seq_num_r2s?: number;
  seq_num_e2e?: number;
  client_identity_string?: string;
  legacy_client_steam_id?: Long;
  relay_session_id?: number;
  client_connection_id?: number;
  server_connection_id?: number;
  routing_secret?: Long;
}

export namespace CMsgSteamDatagramConnectionStatsRouterToServer {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramConnectionStatsServerToRouter {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  seq_num_s2r?: number;
  seq_num_e2e?: number;
  relay_session_id?: number;
  client_connection_id?: number;
  server_connection_id?: number;
}

export namespace CMsgSteamDatagramConnectionStatsServerToRouter {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramP2PSessionRequestBody {
  challenge_time?: number;
  challenge?: Long;
  client_connection_id?: number;
  legacy_peer_steam_id?: Long;
  peer_identity_string?: string;
  peer_connection_id?: number;
  encrypted_data?: Buffer;
  encryption_your_public_key_lead_byte?: number;
  encryption_my_ephemeral_public_key?: Buffer;
  protocol_version?: number;
  network_config_version?: Long;
  platform?: string;
  build?: string;
}

export namespace CMsgSteamDatagramP2PSessionRequestBody {
  export interface EncryptedData {
    peer_identity_string?: string;
  }
}

export interface CMsgSteamDatagramP2PSessionRequest {
  cert?: CMsgSteamDatagramCertificateSigned;
  body?: Buffer;
  signature?: Buffer;
}

export interface CMsgSteamDatagramP2PSessionEstablished {
  connection_id?: number;
  seconds_until_shutdown?: number;
  relay_routing_token?: Buffer;
  seq_num_r2c?: number;
}

export interface CMsgSteamDatagramConnectionStatsP2PClientToRouter {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  p2p_routing_summary?: CMsgSteamDatagramP2PRoutingSummary;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  forward_target_relay_routing_token?: Buffer;
  forward_target_revision?: number;
  routes?: Buffer;
  ack_peer_routes_revision?: number;
  connection_id?: number;
  seq_num_c2r?: number;
  seq_num_e2e?: number;
}

export namespace CMsgSteamDatagramConnectionStatsP2PClientToRouter {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
    NOT_PRIMARY_SESSION: 8,
    NOT_PRIMARY_TRANSPORT_E2E: 16,
    CLIENT_RELAY_OVERRIDE: 32,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramConnectionStatsP2PRouterToClient {
  quality_relay?: CMsgSteamDatagramConnectionQuality;
  quality_e2e?: CMsgSteamDatagramConnectionQuality;
  seconds_until_shutdown?: number;
  migrate_request_ip?: number;
  migrate_request_port?: number;
  scoring_penalty_relay_cluster?: number;
  ack_relay?: number[];
  legacy_ack_e2e?: number[];
  flags?: number;
  ack_forward_target_revision?: number;
  routes?: Buffer;
  ack_peer_routes_revision?: number;
  connection_id?: number;
  seq_num_r2c?: number;
  seq_num_e2e?: number;
}

export namespace CMsgSteamDatagramConnectionStatsP2PRouterToClient {
  export const Flags = {
    ACK_REQUEST_RELAY: 1,
    ACK_REQUEST_E2E: 2,
    ACK_REQUEST_IMMEDIATE: 4,
    NOT_PRIMARY_TRANSPORT_E2E: 16,
  } as const;

  export type Flags = (typeof Flags)[keyof typeof Flags];
}

export interface CMsgSteamDatagramP2PBadRouteRouterToClient {
  connection_id?: number;
  failed_relay_routing_token?: Buffer;
  ack_forward_target_revision?: number;
  kludge_pad?: Long;
}

export interface CMsgSteamDatagramP2PRoutes {
  relay_clusters?: CMsgSteamDatagramP2PRoutes.RelayCluster[];
  routes?: CMsgSteamDatagramP2PRoutes.Route[];
  revision?: number;
}

export namespace CMsgSteamDatagramP2PRoutes {
  export interface RelayCluster {
    pop_id?: number;
    ping_ms?: number;
    score_penalty?: number;
    session_relay_routing_token?: Buffer;
  }

  export interface Route {
    my_pop_id?: number;
    your_pop_id?: number;
    legacy_score?: number;
    interior_score?: number;
  }
}

export interface CMsgSteamDatagramSetSecondaryAddressRequest {
  client_main_ip?: number;
  client_main_port?: number;
  client_connection_id?: number;
  client_identity?: string;
  request_send_duplication?: boolean;
  kludge_pad?: Buffer;
}

export interface CMsgSteamDatagramSetSecondaryAddressResult {
  success?: boolean;
  message?: string;
}
