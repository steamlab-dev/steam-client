/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
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
  steam_id_lobby?: bigint;
  eresult?: number;
}

export interface CMsgClientMMSJoinLobby {
  app_id?: number;
  steam_id_lobby?: bigint;
  persona_name?: string;
  network_ping_location?: string;
  cell_id?: number;
}

export interface CMsgClientMMSJoinLobbyResponse {
  app_id?: number;
  steam_id_lobby?: bigint;
  chat_room_enter_response?: number;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  steam_id_owner?: bigint;
  metadata?: Buffer;
  members?: CMsgClientMMSJoinLobbyResponse.Member[];
}

export namespace CMsgClientMMSJoinLobbyResponse {
  export interface Member {
    steam_id?: bigint;
    persona_name?: string;
    metadata?: Buffer;
  }
}

export interface CMsgClientMMSLeaveLobby {
  app_id?: number;
  steam_id_lobby?: bigint;
}

export interface CMsgClientMMSLeaveLobbyResponse {
  app_id?: number;
  steam_id_lobby?: bigint;
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
    steam_id?: bigint;
    max_members?: number;
    lobby_type?: number;
    lobby_flags?: number;
    metadata?: Buffer;
    num_members?: number;
    distance?: number;
    weight?: bigint;
    ping?: number;
    missing_ping?: number;
  }
}

export interface CMsgClientMMSSetLobbyData {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_member?: bigint;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  metadata?: Buffer;
  network_ping_location?: string;
}

export interface CMsgClientMMSSetLobbyDataResponse {
  app_id?: number;
  steam_id_lobby?: bigint;
  eresult?: number;
}

export interface CMsgClientMMSGetLobbyData {
  app_id?: number;
  steam_id_lobby?: bigint;
}

export interface CMsgClientMMSLobbyData {
  app_id?: number;
  steam_id_lobby?: bigint;
  num_members?: number;
  max_members?: number;
  lobby_type?: number;
  lobby_flags?: number;
  steam_id_owner?: bigint;
  metadata?: Buffer;
  members?: CMsgClientMMSLobbyData.Member[];
  lobby_cellid?: number;
  owner_should_accept_changes?: boolean;
}

export namespace CMsgClientMMSLobbyData {
  export interface Member {
    steam_id?: bigint;
    persona_name?: string;
    metadata?: Buffer;
    ping_data?: string;
  }
}

export interface CMsgClientMMSSendLobbyChatMsg {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_target?: bigint;
  lobby_message?: Buffer;
}

export interface CMsgClientMMSLobbyChatMsg {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_sender?: bigint;
  lobby_message?: Buffer;
}

export interface CMsgClientMMSSetLobbyOwner {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_new_owner?: bigint;
}

export interface CMsgClientMMSSetLobbyOwnerResponse {
  app_id?: number;
  steam_id_lobby?: bigint;
  eresult?: number;
}

export interface CMsgClientMMSSetLobbyLinked {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_lobby2?: bigint;
}

export interface CMsgClientMMSSetLobbyGameServer {
  app_id?: number;
  steam_id_lobby?: bigint;
  deprecated_game_server_ip?: number;
  game_server_port?: number;
  game_server_steam_id?: bigint;
  game_server_ip?: CMsgIPAddress;
  network_ping_location?: string;
}

export interface CMsgClientMMSLobbyGameServerSet {
  app_id?: number;
  steam_id_lobby?: bigint;
  deprecated_game_server_ip?: number;
  game_server_port?: number;
  game_server_steam_id?: bigint;
  game_server_ip?: CMsgIPAddress;
}

export interface CMsgClientMMSUserJoinedLobby {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_user?: bigint;
  persona_name?: string;
}

export interface CMsgClientMMSUserLeftLobby {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_user?: bigint;
  persona_name?: string;
}

export interface CMsgClientMMSInviteToLobby {
  app_id?: number;
  steam_id_lobby?: bigint;
  steam_id_user_invited?: bigint;
}

export interface CMsgClientMMSGetLobbyStatus {
  app_id?: number;
  steam_id_lobby?: bigint;
  claim_membership?: boolean;
  claim_ownership?: boolean;
}

export interface CMsgClientMMSGetLobbyStatusResponse {
  app_id?: number;
  steam_id_lobby?: bigint;
  lobby_status?: EMMSLobbyStatus;
}
