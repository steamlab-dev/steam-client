/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgSteamDatagramP2PRoutingSummary } from "./steamdatagram_messages_sdr";
import type { CMsgSteamDatagramConnectionQuality } from "./steamnetworkingsockets_messages";

export type CGameNetworkingUI_GlobalState = Record<string, never>;

export interface CGameNetworkingUI_ConnectionState {
  connection_key?: string;
  appid?: number;
  connection_id_local?: number;
  identity_local?: string;
  identity_remote?: string;
  connection_state?: number;
  start_time?: number;
  close_time?: number;
  close_reason?: number;
  close_message?: string;
  status_loc_token?: string;
  transport_kind?: number;
  sdrpopid_local?: string;
  sdrpopid_remote?: string;
  address_remote?: string;
  p2p_routing?: CMsgSteamDatagramP2PRoutingSummary;
  ping_interior?: number;
  ping_remote_front?: number;
  ping_default_internet_route?: number;
  e2e_quality_local?: CMsgSteamDatagramConnectionQuality;
  e2e_quality_remote?: CMsgSteamDatagramConnectionQuality;
  e2e_quality_remote_instantaneous_time?: Long;
  e2e_quality_remote_lifetime_time?: Long;
  front_quality_local?: CMsgSteamDatagramConnectionQuality;
  front_quality_remote?: CMsgSteamDatagramConnectionQuality;
  front_quality_remote_instantaneous_time?: Long;
  front_quality_remote_lifetime_time?: Long;
}

export interface CGameNetworkingUI_Message {
  connection_state?: CGameNetworkingUI_ConnectionState[];
}

export interface CGameNetworkingUI_ConnectionSummary {
  transport_kind?: number;
  connection_state?: number;
  sdrpop_local?: string;
  sdrpop_remote?: string;
  ping_ms?: number;
  packet_loss?: number;
  ping_default_internet_route?: number;
  ip_was_shared?: boolean;
}

export interface CGameNetworkingUI_AppSummary {
  appid?: number;
  ip_was_shared_with_friend?: boolean;
  ip_was_shared_with_nonfriend?: boolean;
  active_connections?: number;
  main_cxn?: CGameNetworkingUI_ConnectionSummary;
}
