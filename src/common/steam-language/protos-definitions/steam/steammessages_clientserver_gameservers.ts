/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./steammessages_base";

export interface CMsgGSServerType {
  app_id_served?: number;
  flags?: number;
  deprecated_game_ip_address?: number;
  game_port?: number;
  game_dir?: string;
  game_version?: string;
  game_query_port?: number;
  game_port_local?: number;
  sdr_logon?: Buffer;
  fake_ip?: number;
}

export interface CMsgGSStatusReply {
  is_secure?: boolean;
  is_valveds?: boolean;
}

export interface CMsgGSPlayerList {
  players?: CMsgGSPlayerList.Player[];
}

export namespace CMsgGSPlayerList {
  export interface Player {
    steam_id?: Long;
    deprecated_public_ip?: number;
    token?: Buffer;
    public_ip?: CMsgIPAddress;
  }
}

export interface CMsgGSUserPlaying {
  steam_id?: Long;
  deprecated_public_ip?: number;
  token?: Buffer;
  public_ip?: CMsgIPAddress;
}

export interface CMsgGSDisconnectNotice {
  steam_id?: Long;
}

export interface CMsgGameServerData {
  revision?: number;
  query_port?: number;
  game_port?: number;
  spectator_port?: number;
  server_name?: string;
  game_description?: string;
  spectator_server_name?: string;
  fake_ip?: number;
  sdr_ping_location?: string;
  app_id?: number;
  gamedir?: string;
  version?: string;
  product?: string;
  region?: string;
  players?: CMsgGameServerData.Player[];
  max_players?: number;
  bot_count?: number;
  password?: boolean;
  secure?: boolean;
  dedicated?: boolean;
  os?: string;
  game_data?: string;
  game_type?: string;
  map?: string;
}

export namespace CMsgGameServerData {
  export interface Player {
    steam_id?: Long;
  }
}

export interface CMsgGameServerRemove {
  legacy_steam_id_gs?: Long;
  legacy_query_port?: number;
}

export interface CMsgClientGMSServerQuery {
  app_id?: number;
  geo_location_ip?: number;
  region_code?: number;
  filter_text?: string;
  max_servers?: number;
  sdr_ping_location?: string;
}

export interface CMsgGMSClientServerQueryResponse {
  servers?: CMsgGMSClientServerQueryResponse.Server[];
  error?: string;
  default_server_data?: CMsgGMSClientServerQueryResponse.Server;
  server_strings?: string[];
}

export namespace CMsgGMSClientServerQueryResponse {
  export interface Server {
    deprecated_server_ip?: number;
    query_port?: number;
    auth_players?: number;
    server_ip?: CMsgIPAddress;
    steam_id?: Long;
    revision?: number;
    players?: number;
    game_port?: number;
    sdr_popid?: number;
    sdr_ping_location?: string;
    flags?: number;
    app_id?: number;
    max_players?: number;
    bots?: number;
    spectator_port?: number;
    gamedir_str?: string;
    gamedir_strindex?: number;
    map_str?: string;
    map_strindex?: number;
    name_str?: string;
    name_strindex?: number;
    game_description_str?: string;
    game_description_strindex?: number;
    version_str?: string;
    version_strindex?: number;
    gametype_str?: string;
    gametype_strindex?: number;
    spectator_name_str?: string;
    spectator_name_strindex?: number;
  }

  export const EFlags = {
    k_EFlag_HasPassword: 1,
    k_EFlag_Secure: 2,
  } as const;

  export type EFlags = (typeof EFlags)[keyof typeof EFlags];
}

export interface CMsgGameServerOutOfDate {
  steam_id_gs?: Long;
  reject?: boolean;
  message?: string;
}

export interface CMsgGSAssociateWithClan {
  steam_id_clan?: Long;
}

export interface CMsgGSAssociateWithClanResponse {
  steam_id_clan?: Long;
  eresult?: number;
}

export interface CMsgGSComputeNewPlayerCompatibility {
  steam_id_candidate?: Long;
}

export interface CMsgGSComputeNewPlayerCompatibilityResponse {
  steam_id_candidate?: Long;
  eresult?: number;
  is_clan_member?: boolean;
  ct_dont_like_you?: number;
  ct_you_dont_like?: number;
  ct_clanmembers_dont_like_you?: number;
}
