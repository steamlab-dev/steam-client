/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./steammessages_base";

export const EMMSLobbyStatus = {
  k_EMMSLobbyStatusInvalid: 0,
  k_EMMSLobbyStatusExists: 1,
  k_EMMSLobbyStatusDoesNotExist: 2,
  k_EMMSLobbyStatusNotAMember: 3,
} as const;

export type EMMSLobbyStatus = (typeof EMMSLobbyStatus)[keyof typeof EMMSLobbyStatus];

export interface CMsgClientMMSSetRatelimitPolicyOnClient {
  app_id?: number;
  enable_rate_limits?: boolean;
  seconds_per_message?: number;
  milliseconds_per_data_update?: number;
}

export interface CMsgClientMMSCreateLobby {
  app_id?: number;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  cell_id?: number;
  deprecated_public_ip?: number;
  metadata?: Buffer;
  persona_name_owner?: string;
  public_ip?: CMsgIPAddress;
  network_ping_location?: string;
}

export interface CMsgClientMMSCreateLobbyResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  eresult?: number;
}

export interface CMsgClientMMSJoinLobby {
  app_id?: number;
  steam_id_lobby?: Long;
  persona_name?: string;
  network_ping_location?: string;
  cell_id?: number;
}

export interface CMsgClientMMSJoinLobbyResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  chat_room_enter_response?: number;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  steam_id_owner?: Long;
  metadata?: Buffer;
  members?: CMsgClientMMSJoinLobbyResponse.Member[];
}

export namespace CMsgClientMMSJoinLobbyResponse {
  export interface Member {
    steam_id?: Long;
    persona_name?: string;
    metadata?: Buffer;
  }
}

export interface CMsgClientMMSLeaveLobby {
  app_id?: number;
  steam_id_lobby?: Long;
}

export interface CMsgClientMMSLeaveLobbyResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  eresult?: number;
}

export interface CMsgClientMMSGetLobbyList {
  app_id?: number;
  num_lobbies_requested?: number;
  cell_id?: number;
  deprecated_public_ip?: number;
  filters?: CMsgClientMMSGetLobbyList.Filter[];
  public_ip?: CMsgIPAddress;
  network_ping_location?: string;
}

export namespace CMsgClientMMSGetLobbyList {
  export interface Filter {
    key?: string;
    value?: string;
    comparision?: number;
    filter_type?: number;
  }
}

export interface CMsgClientMMSGetLobbyListResponse {
  app_id?: number;
  eresult?: number;
  lobbies?: CMsgClientMMSGetLobbyListResponse.Lobby[];
}

export namespace CMsgClientMMSGetLobbyListResponse {
  export interface Lobby {
    steam_id?: Long;
    max_members?: number;
    lobby_type?: number;
    lobby_flags?: number;
    metadata?: Buffer;
    num_members?: number;
    distance?: number;
    weight?: Long;
    ping?: number;
    missing_ping?: number;
  }
}

export interface CMsgClientMMSSetLobbyData {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_member?: Long;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  metadata?: Buffer;
  network_ping_location?: string;
}

export interface CMsgClientMMSSetLobbyDataResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  eresult?: number;
}

export interface CMsgClientMMSGetLobbyData {
  app_id?: number;
  steam_id_lobby?: Long;
}

export interface CMsgClientMMSLobbyData {
  app_id?: number;
  steam_id_lobby?: Long;
  num_members?: number;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  steam_id_owner?: Long;
  metadata?: Buffer;
  members?: CMsgClientMMSLobbyData.Member[];
  lobby_cellid?: number;
  owner_should_accept_changes?: boolean;
}

export namespace CMsgClientMMSLobbyData {
  export interface Member {
    steam_id?: Long;
    persona_name?: string;
    metadata?: Buffer;
    ping_data?: string;
  }
}

export interface CMsgClientMMSSendLobbyChatMsg {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_target?: Long;
  lobby_message?: Buffer;
}

export interface CMsgClientMMSLobbyChatMsg {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_sender?: Long;
  lobby_message?: Buffer;
}

export interface CMsgClientMMSSetLobbyOwner {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_new_owner?: Long;
}

export interface CMsgClientMMSSetLobbyOwnerResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  eresult?: number;
}

export interface CMsgClientMMSSetLobbyLinked {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_lobby2?: Long;
}

export interface CMsgClientMMSSetLobbyGameServer {
  app_id?: number;
  steam_id_lobby?: Long;
  deprecated_game_server_ip?: number;
  game_server_port?: number;
  game_server_steam_id?: Long;
  game_server_ip?: CMsgIPAddress;
  network_ping_location?: string;
}

export interface CMsgClientMMSLobbyGameServerSet {
  app_id?: number;
  steam_id_lobby?: Long;
  deprecated_game_server_ip?: number;
  game_server_port?: number;
  game_server_steam_id?: Long;
  game_server_ip?: CMsgIPAddress;
}

export interface CMsgClientMMSUserJoinedLobby {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_user?: Long;
  persona_name?: string;
}

export interface CMsgClientMMSUserLeftLobby {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_user?: Long;
  persona_name?: string;
}

export interface CMsgClientMMSInviteToLobby {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_user_invited?: Long;
}

export interface CMsgClientMMSGetLobbyStatus {
  app_id?: number;
  steam_id_lobby?: Long;
  claim_membership?: boolean;
  claim_ownership?: boolean;
}

export interface CMsgClientMMSGetLobbyStatusResponse {
  app_id?: number;
  steam_id_lobby?: Long;
  lobby_status?: EMMSLobbyStatus;
}
