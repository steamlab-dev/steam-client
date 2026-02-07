/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EncryptedAppTicket } from "./encrypted_app_ticket";
import type { CMsgAuthTicket, CMsgIPAddress } from "./steammessages_base";

export interface CMsgClientRegisterAuthTicketWithCM {
  protocol_version?: number;
  ticket?: Buffer;
  client_instance_id?: Long;
}

export interface CMsgClientTicketAuthComplete {
  steam_id?: Long;
  game_id?: Long;
  estate?: number;
  eauth_session_response?: number;
  DEPRECATED_ticket?: Buffer;
  ticket_crc?: number;
  ticket_sequence?: number;
  owner_steam_id?: Long;
}

export interface CMsgClientP2PConnectionInfo {
  steam_id_dest?: Long;
  steam_id_src?: Long;
  app_id?: number;
  candidate?: Buffer;
  legacy_connection_id_src?: Long;
  rendezvous?: Buffer;
  app_id_secondary?: number;
}

export interface CMsgClientP2PConnectionFailInfo {
  steam_id_dest?: Long;
  steam_id_src?: Long;
  app_id?: number;
  ep2p_session_error?: number;
  connection_id_dest?: Long;
  close_reason?: number;
  close_message?: string;
}

export interface CMsgClientNetworkingCertRequest {
  key_data?: Buffer;
  app_id?: number;
}

export interface CMsgClientNetworkingCertReply {
  cert?: Buffer;
  ca_key_id?: Long;
  ca_signature?: Buffer;
}

export interface CMsgClientNetworkingMobileCertRequest {
  app_id?: number;
}

export interface CMsgClientNetworkingMobileCertReply {
  encoded_cert?: string;
}

export interface CMsgClientGetAppOwnershipTicket {
  app_id?: number;
}

export interface CMsgClientGetAppOwnershipTicketResponse {
  eresult?: number;
  app_id?: number;
  ticket?: Buffer;
}

export interface CMsgClientSessionToken {
  token?: Long;
}

export interface CMsgClientGameConnectTokens {
  max_tokens_to_keep?: number;
  tokens?: Buffer[];
}

export interface CMsgClientGamesPlayed {
  games_played?: CMsgClientGamesPlayed.GamePlayed[];
  client_os_type?: number;
  cloud_gaming_platform?: number;
  recent_reauthentication?: boolean;
}

export namespace CMsgClientGamesPlayed {
  export interface ProcessInfo {
    process_id?: number;
    process_id_parent?: number;
    parent_is_steam?: boolean;
  }

  export interface GamePlayed {
    steam_id_gs?: Long;
    game_id?: Long;
    deprecated_game_ip_address?: number;
    game_port?: number;
    is_secure?: boolean;
    token?: Buffer;
    game_extra_info?: string;
    game_data_blob?: Buffer;
    process_id?: number;
    streaming_provider_id?: number;
    game_flags?: number;
    owner_id?: number;
    vr_hmd_vendor?: string;
    vr_hmd_model?: string;
    launch_option_type?: number;
    primary_controller_type?: number;
    primary_steam_controller_serial?: string;
    total_steam_controller_count?: number;
    total_non_steam_controller_count?: number;
    controller_workshop_file_id?: Long;
    launch_source?: number;
    vr_hmd_runtime?: number;
    game_ip_address?: CMsgIPAddress;
    controller_connection_type?: number;
    game_os_platform?: number;
    game_build_id?: number;
    compat_tool_id?: number;
    compat_tool_cmd?: string;
    compat_tool_build_id?: number;
    beta_name?: string;
    dlc_context?: number;
    process_id_list?: CMsgClientGamesPlayed.ProcessInfo[];
  }
}

export interface CMsgGSApprove {
  steam_id?: Long;
  owner_steam_id?: Long;
}

export interface CMsgGSDeny {
  steam_id?: Long;
  edeny_reason?: number;
  deny_string?: string;
}

export interface CMsgGSKick {
  steam_id?: Long;
  edeny_reason?: number;
}

export interface CMsgClientAuthList {
  tokens_left?: number;
  last_request_seq?: number;
  last_request_seq_from_server?: number;
  tickets?: CMsgAuthTicket[];
  app_ids?: number[];
  message_sequence?: number;
  filtered?: boolean;
}

export interface CMsgClientAuthListAck {
  ticket_crc?: number[];
  app_ids?: number[];
  message_sequence?: number;
}

export interface CMsgGameServerPolicyUpdate {
  app_id?: number;
  app_id_aux?: number;
}

export interface CMsgClientLicenseList {
  eresult?: number;
  licenses?: CMsgClientLicenseList.License[];
}

export namespace CMsgClientLicenseList {
  export interface License {
    package_id?: number;
    time_created?: number;
    time_next_process?: number;
    minute_limit?: number;
    minutes_used?: number;
    payment_method?: number;
    flags?: number;
    purchase_country_code?: string;
    license_type?: number;
    territory_code?: number;
    change_number?: number;
    owner_id?: number;
    initial_period?: number;
    initial_time_unit?: number;
    renewal_period?: number;
    renewal_time_unit?: number;
    access_token?: Long;
    master_package_id?: number;
  }
}

export interface CMsgClientIsLimitedAccount {
  bis_limited_account?: boolean;
  bis_community_banned?: boolean;
  bis_locked_account?: boolean;
  bis_limited_account_allowed_to_invite_friends?: boolean;
}

export interface CMsgClientRequestedClientStats {
  stats_to_send?: CMsgClientRequestedClientStats.StatsToSend[];
}

export namespace CMsgClientRequestedClientStats {
  export interface StatsToSend {
    client_stat?: number;
    stat_aggregate_method?: number;
  }
}

export interface CMsgClientStat2 {
  stat_detail?: CMsgClientStat2.StatDetail[];
}

export namespace CMsgClientStat2 {
  export interface StatDetail {
    client_stat?: number;
    ll_value?: Long;
    time_of_day?: number;
    cell_id?: number;
    depot_id?: number;
    app_id?: number;
  }
}

export interface CMsgClientInviteToGame {
  steam_id_dest?: Long;
  steam_id_src?: Long;
  connect_string?: string;
  remote_play?: string;
}

export interface CMsgClientChatInvite {
  steam_id_invited?: Long;
  steam_id_chat?: Long;
  steam_id_patron?: Long;
  chatroom_type?: number;
  steam_id_friend_chat?: Long;
  chat_name?: string;
  game_id?: Long;
}

export interface CMsgClientConnectionStats {
  stats_logon?: CMsgClientConnectionStats.Stats_Logon;
  stats_vconn?: CMsgClientConnectionStats.Stats_VConn;
}

export namespace CMsgClientConnectionStats {
  export interface Stats_Logon {
    connect_attempts?: number;
    connect_successes?: number;
    connect_failures?: number;
    connections_dropped?: number;
    seconds_running?: number;
    msec_tologonthistime?: number;
    count_bad_cms?: number;
    no_udp_connectivity?: boolean;
    no_tcp_connectivity?: boolean;
    no_websocket_443_connectivity?: boolean;
    no_websocket_non_443_connectivity?: boolean;
  }

  export interface Stats_UDP {
    pkts_sent?: Long;
    bytes_sent?: Long;
    pkts_recv?: Long;
    pkts_processed?: Long;
    bytes_recv?: Long;
  }

  export interface Stats_VConn {
    connections_udp?: number;
    connections_tcp?: number;
    stats_udp?: CMsgClientConnectionStats.Stats_UDP;
    pkts_abandoned?: Long;
    conn_req_received?: Long;
    pkts_resent?: Long;
    msgs_sent?: Long;
    msgs_sent_failed?: Long;
    msgs_recv?: Long;
    datagrams_sent?: Long;
    datagrams_recv?: Long;
    bad_pkts_recv?: Long;
    unknown_conn_pkts_recv?: Long;
    missed_pkts_recv?: Long;
    dup_pkts_recv?: Long;
    failed_connect_challenges?: Long;
    micro_sec_avg_latency?: number;
    micro_sec_min_latency?: number;
    micro_sec_max_latency?: number;
  }
}

export interface CMsgClientServersAvailable {
  server_types_available?: CMsgClientServersAvailable.Server_Types_Available[];
  server_type_for_auth_services?: number;
}

export namespace CMsgClientServersAvailable {
  export interface Server_Types_Available {
    server?: number;
    changed?: boolean;
  }
}

export interface CMsgClientReportOverlayDetourFailure {
  failure_strings?: string[];
}

export interface CMsgClientRequestEncryptedAppTicket {
  app_id?: number;
  userdata?: Buffer;
}

export interface CMsgClientRequestEncryptedAppTicketResponse {
  app_id?: number;
  eresult?: number;
  encrypted_app_ticket?: EncryptedAppTicket;
}

export interface CMsgClientWalletInfoUpdate {
  has_wallet?: boolean;
  balance?: number;
  currency?: number;
  balance_delayed?: number;
  balance64?: Long;
  balance64_delayed?: Long;
  realm?: number;
}

export interface CMsgClientAMGetClanOfficers {
  steamid_clan?: Long;
}

export interface CMsgClientAMGetClanOfficersResponse {
  eresult?: number;
  steamid_clan?: Long;
  officer_count?: number;
}

export interface CMsgClientAMGetPersonaNameHistory {
  id_count?: number;
  Ids?: CMsgClientAMGetPersonaNameHistory.IdInstance[];
}

export namespace CMsgClientAMGetPersonaNameHistory {
  export interface IdInstance {
    steamid?: Long;
  }
}

export interface CMsgClientAMGetPersonaNameHistoryResponse {
  responses?: CMsgClientAMGetPersonaNameHistoryResponse.NameTableInstance[];
}

export namespace CMsgClientAMGetPersonaNameHistoryResponse {
  export interface NameTableInstance {
    eresult?: number;
    steamid?: Long;
  }

  export namespace NameTableInstance {
    export interface NameInstance {
      name_since?: number;
      name?: string;
    }
  }
}

export interface CMsgClientDeregisterWithServer {
  eservertype?: number;
  app_id?: number;
}

export interface CMsgClientClanState {
  steamid_clan?: Long;
  clan_account_flags?: number;
  name_info?: CMsgClientClanState.NameInfo;
  user_counts?: CMsgClientClanState.UserCounts;
  events?: CMsgClientClanState.Event[];
  announcements?: CMsgClientClanState.Event[];
  chat_room_private?: boolean;
}

export namespace CMsgClientClanState {
  export interface NameInfo {
    clan_name?: string;
    sha_avatar?: Buffer;
  }

  export interface UserCounts {
    members?: number;
    online?: number;
    chatting?: number;
    in_game?: number;
    chat_room_members?: number;
  }

  export interface Event {
    gid?: Long;
    event_time?: number;
    headline?: string;
    game_id?: Long;
    just_posted?: boolean;
  }
}
