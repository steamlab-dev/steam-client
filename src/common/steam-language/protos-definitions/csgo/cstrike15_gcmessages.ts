/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CEngineGotvSyncPacket } from "./engine_gcmessages";
import type { CMsgSOCacheSubscribed, CMsgSOCacheSubscriptionCheck } from "./gcsdk_gcmessages";

export const ECsgoGCMsg = {
  k_EMsgGCCStrike15_v2_Base: 9100,
  k_EMsgGCCStrike15_v2_MatchmakingStart: 9101,
  k_EMsgGCCStrike15_v2_MatchmakingStop: 9102,
  k_EMsgGCCStrike15_v2_MatchmakingClient2ServerPing: 9103,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate: 9104,
  k_EMsgGCCStrike15_v2_MatchmakingServerReservationResponse: 9106,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientReserve: 9107,
  k_EMsgGCCStrike15_v2_MatchmakingClient2GCHello: 9109,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientHello: 9110,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon: 9112,
  k_EMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate: 9117,
  k_EMsgGCCStrike15_v2_ServerNotificationForUserPenalty: 9118,
  k_EMsgGCCStrike15_v2_ClientReportPlayer: 9119,
  k_EMsgGCCStrike15_v2_ClientReportServer: 9120,
  k_EMsgGCCStrike15_v2_ClientCommendPlayer: 9121,
  k_EMsgGCCStrike15_v2_ClientReportResponse: 9122,
  k_EMsgGCCStrike15_v2_ClientCommendPlayerQuery: 9123,
  k_EMsgGCCStrike15_v2_ClientCommendPlayerQueryResponse: 9124,
  k_EMsgGCCStrike15_v2_WatchInfoUsers: 9126,
  k_EMsgGCCStrike15_v2_ClientRequestPlayersProfile: 9127,
  k_EMsgGCCStrike15_v2_PlayersProfile: 9128,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate: 9131,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment: 9132,
  k_EMsgGCCStrike15_v2_PlayerOverwatchCaseStatus: 9133,
  k_EMsgGCCStrike15_v2_GC2ClientTextMsg: 9134,
  k_EMsgGCCStrike15_v2_Client2GCTextMsg: 9135,
  k_EMsgGCCStrike15_v2_MatchEndRunRewardDrops: 9136,
  k_EMsgGCCStrike15_v2_MatchEndRewardDropsNotification: 9137,
  k_EMsgGCCStrike15_v2_ClientRequestWatchInfoFriends2: 9138,
  k_EMsgGCCStrike15_v2_MatchList: 9139,
  k_EMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames: 9140,
  k_EMsgGCCStrike15_v2_MatchListRequestRecentUserGames: 9141,
  k_EMsgGCCStrike15_v2_GC2ServerReservationUpdate: 9142,
  k_EMsgGCCStrike15_v2_ClientVarValueNotificationInfo: 9144,
  k_EMsgGCCStrike15_v2_MatchListRequestTournamentGames: 9146,
  k_EMsgGCCStrike15_v2_MatchListRequestFullGameInfo: 9147,
  k_EMsgGCCStrike15_v2_GiftsLeaderboardRequest: 9148,
  k_EMsgGCCStrike15_v2_GiftsLeaderboardResponse: 9149,
  k_EMsgGCCStrike15_v2_ServerVarValueNotificationInfo: 9150,
  k_EMsgGCCStrike15_v2_ClientSubmitSurveyVote: 9152,
  k_EMsgGCCStrike15_v2_Server2GCClientValidate: 9153,
  k_EMsgGCCStrike15_v2_MatchListRequestLiveGameForUser: 9154,
  k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest: 9156,
  k_EMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse: 9157,
  k_EMsgGCCStrike15_v2_AccountPrivacySettings: 9158,
  k_EMsgGCCStrike15_v2_SetMyActivityInfo: 9159,
  k_EMsgGCCStrike15_v2_MatchListRequestTournamentPredictions: 9160,
  k_EMsgGCCStrike15_v2_MatchListUploadTournamentPredictions: 9161,
  k_EMsgGCCStrike15_v2_DraftSummary: 9162,
  k_EMsgGCCStrike15_v2_ClientRequestJoinFriendData: 9163,
  k_EMsgGCCStrike15_v2_ClientRequestJoinServerData: 9164,
  k_EMsgGCCStrike15_v2_GC2ClientTournamentInfo: 9167,
  k_EMsgGC_GlobalGame_Subscribe: 9168,
  k_EMsgGC_GlobalGame_Unsubscribe: 9169,
  k_EMsgGC_GlobalGame_Play: 9170,
  k_EMsgGCCStrike15_v2_AcknowledgePenalty: 9171,
  k_EMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin: 9172,
  k_EMsgGCCStrike15_v2_GC2ClientGlobalStats: 9173,
  k_EMsgGCCStrike15_v2_Client2GCStreamUnlock: 9174,
  k_EMsgGCCStrike15_v2_FantasyRequestClientData: 9175,
  k_EMsgGCCStrike15_v2_FantasyUpdateClientData: 9176,
  k_EMsgGCCStrike15_v2_GCToClientSteamdatagramTicket: 9177,
  k_EMsgGCCStrike15_v2_ClientToGCRequestTicket: 9178,
  k_EMsgGCCStrike15_v2_ClientToGCRequestElevate: 9179,
  k_EMsgGCCStrike15_v2_GlobalChat: 9180,
  k_EMsgGCCStrike15_v2_GlobalChat_Subscribe: 9181,
  k_EMsgGCCStrike15_v2_GlobalChat_Unsubscribe: 9182,
  k_EMsgGCCStrike15_v2_ClientAuthKeyCode: 9183,
  k_EMsgGCCStrike15_v2_GotvSyncPacket: 9184,
  k_EMsgGCCStrike15_v2_ClientPlayerDecalSign: 9185,
  k_EMsgGCCStrike15_v2_ClientLogonFatalError: 9187,
  k_EMsgGCCStrike15_v2_ClientPollState: 9188,
  k_EMsgGCCStrike15_v2_Party_Register: 9189,
  k_EMsgGCCStrike15_v2_Party_Unregister: 9190,
  k_EMsgGCCStrike15_v2_Party_Search: 9191,
  k_EMsgGCCStrike15_v2_Party_Invite: 9192,
  k_EMsgGCCStrike15_v2_Account_RequestCoPlays: 9193,
  k_EMsgGCCStrike15_v2_ClientGCRankUpdate: 9194,
  k_EMsgGCCStrike15_v2_ClientRequestOffers: 9195,
  k_EMsgGCCStrike15_v2_ClientAccountBalance: 9196,
  k_EMsgGCCStrike15_v2_ClientPartyJoinRelay: 9197,
  k_EMsgGCCStrike15_v2_ClientPartyWarning: 9198,
  k_EMsgGCCStrike15_v2_SetEventFavorite: 9200,
  k_EMsgGCCStrike15_v2_GetEventFavorites_Request: 9201,
  k_EMsgGCCStrike15_v2_ClientPerfReport: 9202,
  k_EMsgGCCStrike15_v2_GetEventFavorites_Response: 9203,
  k_EMsgGCCStrike15_v2_ClientRequestSouvenir: 9204,
  k_EMsgGCCStrike15_v2_ClientReportValidation: 9205,
  k_EMsgGCCStrike15_v2_GC2ClientRefuseSecureMode: 9206,
  k_EMsgGCCStrike15_v2_GC2ClientRequestValidation: 9207,
  k_EMsgGCCStrike15_v2_ClientRedeemMissionReward: 9209,
  k_EMsgGCCStrike15_ClientDeepStats: 9210,
  k_EMsgGCCStrike15_StartAgreementSessionInGame: 9211,
  k_EMsgGCCStrike15_v2_GC2ClientInitSystem: 9212,
  k_EMsgGCCStrike15_v2_GC2ClientInitSystem_Response: 9213,
  k_EMsgGCCStrike15_v2_PrivateQueues: 9214,
  k_EMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt: 9215,
  k_EMsgGCCStrike15_v2_BetaEnrollment: 9217,
  k_EMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName: 9218,
  k_EMsgGCCStrike15_v2_ClientRedeemFreeReward: 9219,
  k_EMsgGCCStrike15_v2_ClientNetworkConfig: 9220,
  k_EMsgGCCStrike15_v2_GC2ClientNotifyXPShop: 9221,
  k_EMsgGCCStrike15_v2_Client2GcAckXPShopTracks: 9222,
  k_EMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats: 9223,
  k_EMsgGCCStrike15_v2_PremierSeasonSummary: 9224,
  k_EMsgGCCStrike15_v2_RequestRecurringMissionSchedule: 9225,
  k_EMsgGCCStrike15_v2_RecurringMissionSchema: 9226,
  k_EMsgGCCStrike15_v2_VolatileItemClaimReward: 9227,
} as const;

export type ECsgoGCMsg = (typeof ECsgoGCMsg)[keyof typeof ECsgoGCMsg];

export const ECsgoSteamUserStat = {
  k_ECsgoSteamUserStat_XpEarnedGames: 1,
  k_ECsgoSteamUserStat_MatchWinsCompetitive: 2,
  k_ECsgoSteamUserStat_SurvivedDangerZone: 3,
} as const;

export type ECsgoSteamUserStat = (typeof ECsgoSteamUserStat)[keyof typeof ECsgoSteamUserStat];

export const QuestType = {
  k_EQuestType_Operation: 1,
  k_EQuestType_RecurringMission: 2,
} as const;

export type QuestType = (typeof QuestType)[keyof typeof QuestType];

export const EClientReportingVersion = {
  k_EClientReportingVersion_OldVersion: 0,
  k_EClientReportingVersion_BetaVersion: 1,
  k_EClientReportingVersion_SupportsTrustedMode: 2,
} as const;

export type EClientReportingVersion =
  (typeof EClientReportingVersion)[keyof typeof EClientReportingVersion];

export const EInitSystemResult = {
  k_EInitSystemResult_Invalid: 0,
  k_EInitSystemResult_Success: 1,
  k_EInitSystemResult_None: 2,
  k_EInitSystemResult_NotFound: 3,
  k_EInitSystemResult_Existing: 4,
  k_EInitSystemResult_FailedOpen: 5,
  k_EInitSystemResult_Mismatch: 6,
  k_EInitSystemResult_FailedInit: 7,
  k_EInitSystemResult_Max: 8,
} as const;

export type EInitSystemResult = (typeof EInitSystemResult)[keyof typeof EInitSystemResult];

export interface GameServerPing {
  ping?: number;
  ip?: number;
  instances?: number;
}

export interface DataCenterPing {
  data_center_id?: number;
  ping?: number;
}

export interface DetailedSearchStatistic {
  game_type?: number;
  search_time_avg?: number;
  players_searching?: number;
}

export interface TournamentPlayer {
  account_id?: number;
  player_nick?: string;
  player_name?: string;
  player_dob?: number;
  player_flag?: string;
  player_location?: string;
  player_desc?: string;
}

export interface TournamentTeam {
  team_id?: number;
  team_tag?: string;
  team_flag?: string;
  team_name?: string;
  players?: TournamentPlayer[];
}

export interface TournamentEvent {
  event_id?: number;
  event_tag?: string;
  event_name?: string;
  event_time_start?: number;
  event_time_end?: number;
  event_public?: number;
  event_stage_id?: number;
  event_stage_name?: string;
  active_section_id?: number;
}

export interface GlobalStatistics {
  players_online?: number;
  servers_online?: number;
  players_searching?: number;
  servers_available?: number;
  ongoing_matches?: number;
  search_time_avg?: number;
  search_statistics?: DetailedSearchStatistic[];
  main_post_url?: string;
  required_appid_version?: number;
  pricesheet_version?: number;
  twitch_streams_version?: number;
  active_tournament_eventid?: number;
  active_survey_id?: number;
  rtime32_cur?: number;
  required_appid_version2?: number;
}

export interface OperationalStatisticDescription {
  name?: string;
  idkey?: number;
}

export interface OperationalStatisticElement {
  idkey?: number;
  values?: number[];
}

export interface OperationalStatisticsPacket {
  packetid?: number;
  mstimestamp?: number;
  values?: OperationalStatisticElement[];
}

export interface OperationalVarValue {
  name?: string;
  ivalue?: number;
  fvalue?: number;
  svalue?: Buffer;
}

export interface PlayerRankingInfo {
  account_id?: number;
  rank_id?: number;
  wins?: number;
  rank_change?: number;
  rank_type_id?: number;
  tv_control?: number;
  rank_window_stats?: Long;
  leaderboard_name?: string;
  rank_if_win?: number;
  rank_if_lose?: number;
  rank_if_tie?: number;
  per_map_rank?: PlayerRankingInfo.PerMapRank[];
  leaderboard_name_status?: number;
  highest_rank?: number;
  rank_expiry?: number;
}

export namespace PlayerRankingInfo {
  export interface PerMapRank {
    map_id?: number;
    rank_id?: number;
    wins?: number;
  }
}

export interface PlayerCommendationInfo {
  cmd_friendly?: number;
  cmd_teaching?: number;
  cmd_leader?: number;
}

export interface PlayerMedalsInfo {
  display_items_defidx?: number[];
  featured_display_item_defidx?: number;
}

export interface AccountActivity {
  activity?: number;
  mode?: number;
  map?: number;
  matchid?: Long;
}

export interface TournamentMatchSetup {
  event_id?: number;
  team_id_ct?: number;
  team_id_t?: number;
  event_stage_id?: number;
}

export interface ServerHltvInfo {
  tv_udp_port?: number;
  tv_watch_key?: Long;
  tv_slots?: number;
  tv_clients?: number;
  tv_proxies?: number;
  tv_time?: number;
  game_type?: number;
  game_mapgroup?: string;
  game_map?: string;
  tv_master_steamid?: Long;
  tv_local_slots?: number;
  tv_local_clients?: number;
  tv_local_proxies?: number;
  tv_relay_slots?: number;
  tv_relay_clients?: number;
  tv_relay_proxies?: number;
  tv_relay_address?: number;
  tv_relay_port?: number;
  tv_relay_steamid?: Long;
  flags?: number;
}

export interface IpAddressMask {
  a?: number;
  b?: number;
  c?: number;
  d?: number;
  bits?: number;
  token?: number;
}

export interface CMsgCsgoSteamUserStatChange {
  ecsgosteamuserstat?: number;
  delta?: number;
  absolute?: boolean;
}

export interface XpProgressData {
  xp_points?: number;
  xp_category?: number;
}

export interface MatchEndItemUpdates {
  item_id?: Long;
  item_attr_defidx?: number;
  item_attr_delta_value?: number;
}

export interface ScoreLeaderboardData {
  quest_id?: Long;
  score?: number;
  accountentries?: ScoreLeaderboardData.AccountEntries[];
  matchentries?: ScoreLeaderboardData.Entry[];
  leaderboard_name?: string;
}

export namespace ScoreLeaderboardData {
  export interface Entry {
    tag?: number;
    val?: number;
  }

  export interface AccountEntries {
    accountid?: number;
    entries?: ScoreLeaderboardData.Entry[];
  }
}

export interface PlayerQuestData {
  quester_account_id?: number;
  quest_item_data?: PlayerQuestData.QuestItemData[];
  xp_progress_data?: XpProgressData[];
  time_played?: number;
  mm_game_mode?: number;
  item_updates?: MatchEndItemUpdates[];
  operation_points_eligible?: boolean;
  userstatchanges?: CMsgCsgoSteamUserStatChange[];
}

export namespace PlayerQuestData {
  export interface QuestItemData {
    quest_id?: Long;
    quest_normal_points_earned?: number;
    quest_bonus_points_earned?: number;
    quest_normal_points_required?: number[];
    quest_reward_xp?: number[];
    quest_period?: number;
    quest_type?: QuestType;
  }
}

export interface DeepPlayerStatsEntry {
  accountid?: number;
  match_id?: Long;
  mm_game_mode?: number;
  mapid?: number;
  b_starting_ct?: boolean;
  match_outcome?: number;
  rounds_won?: number;
  rounds_lost?: number;
  stat_score?: number;
  stat_deaths?: number;
  stat_mvps?: number;
  enemy_kills?: number;
  enemy_headshots?: number;
  enemy_2ks?: number;
  enemy_3ks?: number;
  enemy_4ks?: number;
  total_damage?: number;
  engagements_entry_count?: number;
  engagements_entry_wins?: number;
  engagements_1v1_count?: number;
  engagements_1v1_wins?: number;
  engagements_1v2_count?: number;
  engagements_1v2_wins?: number;
  utility_count?: number;
  utility_success?: number;
  flash_count?: number;
  flash_success?: number;
  mates?: number[];
}

export interface DeepPlayerMatchEvent {
  accountid?: number;
  match_id?: Long;
  event_id?: number;
  event_type?: number;
  b_playing_ct?: boolean;
  user_pos_x?: number;
  user_pos_y?: number;
  user_pos_z?: number;
  user_defidx?: number;
  other_pos_x?: number;
  other_pos_y?: number;
  other_pos_z?: number;
  other_defidx?: number;
  event_data?: number;
}

export interface CMsgGC_ServerQuestUpdateData {
  player_quest_data?: PlayerQuestData[];
  binary_data?: Buffer;
  mm_game_mode?: number;
  missionlbsdata?: ScoreLeaderboardData;
  flags?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm {
  token?: number;
  stamp?: number;
  exchange?: Long;
  retry?: number;
}

export interface CMsgGCCStrike15_v2_GC2ServerReservationUpdate {
  viewers_external_total?: number;
  viewers_external_steam?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingStart {
  account_ids?: number[];
  game_type?: number;
  ticket_data?: string;
  client_version?: number;
  tournament_match?: TournamentMatchSetup;
  prime_only?: boolean;
  tv_control?: number;
  lobby_id?: Long;
}

export interface CMsgGCCStrike15_v2_MatchmakingStop {
  abandon?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note {
  type?: number;
  region_id?: number;
  region_r?: number;
  distance?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingClient2ServerPing {
  gameserverpings?: GameServerPing[];
  offset_index?: number;
  final_batch?: number;
  data_center_pings?: DataCenterPing[];
  max_ping?: number;
  test_token?: number;
  search_key?: Buffer;
  notes?: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note[];
  debug_message?: string;
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate {
  matchmaking?: number;
  waiting_account_id_sessions?: number[];
  error?: string;
  ongoingmatch_account_id_sessions?: number[];
  global_stats?: GlobalStatistics;
  failping_account_id_sessions?: number[];
  penalty_account_id_sessions?: number[];
  failready_account_id_sessions?: number[];
  vacbanned_account_id_sessions?: number[];
  server_ipaddress_mask?: IpAddressMask;
  notes?: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note[];
  penalty_account_id_sessions_green?: number[];
  insufficientlevel_sessions?: number[];
  vsncheck_account_id_sessions?: number[];
  launcher_mismatch_sessions?: number[];
  insecure_account_id_sessions?: number[];
}

export interface CDataGCCStrike15_v2_TournamentMatchDraft {
  event_id?: number;
  event_stage_id?: number;
  team_id_0?: number;
  team_id_1?: number;
  maps_count?: number;
  maps_current?: number;
  team_id_start?: number;
  team_id_veto1?: number;
  team_id_pickn?: number;
  drafts?: CDataGCCStrike15_v2_TournamentMatchDraft.Entry[];
  vote_mapid_0?: number[];
  vote_mapid_1?: number[];
  vote_mapid_2?: number[];
  vote_mapid_3?: number[];
  vote_mapid_4?: number[];
  vote_mapid_5?: number[];
  vote_starting_side?: number[];
  vote_phase?: number;
  vote_phase_start?: number;
  vote_phase_length?: number;
}

export namespace CDataGCCStrike15_v2_TournamentMatchDraft {
  export interface Entry {
    mapid?: number;
    team_id_ct?: number;
  }
}

export interface CPreMatchInfoData {
  predictions_pct?: number;
  draft?: CDataGCCStrike15_v2_TournamentMatchDraft;
  stats?: CPreMatchInfoData.TeamStats[];
  wins?: number[];
}

export namespace CPreMatchInfoData {
  export interface TeamStats {
    match_info_idxtxt?: number;
    match_info_txt?: string;
    match_info_teams?: string[];
  }
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve {
  account_ids?: number[];
  game_type?: number;
  match_id?: Long;
  server_version?: number;
  flags?: number;
  rankings?: PlayerRankingInfo[];
  encryption_key?: Long;
  encryption_key_pub?: Long;
  party_ids?: number[];
  whitelist?: IpAddressMask[];
  tv_master_steamid?: Long;
  tournament_event?: TournamentEvent;
  tournament_teams?: TournamentTeam[];
  tournament_casters_account_ids?: number[];
  tv_relay_steamid?: Long;
  pre_match_data?: CPreMatchInfoData;
  tv_control?: number;
  op_var_values?: OperationalVarValue[];
  socache_control?: number;
  teammate_colors?: number[];
  match_id_additional?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingServerReservationResponse {
  reservationid?: Long;
  reservation?: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
  map?: string;
  gc_reservation_sent?: Long;
  server_version?: number;
  tv_info?: ServerHltvInfo;
  reward_player_accounts?: number[];
  idle_player_accounts?: number[];
  reward_item_attr_def_idx?: number;
  reward_item_attr_value?: number;
  reward_item_attr_reward_idx?: number;
  reward_drop_list?: number;
  tournament_tag?: string;
  legacy_steamdatagram_port?: number;
  steamdatagram_routing?: number;
  test_token?: number;
  flags?: number;
  system_load?: number;
  cpus_online?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve {
  serverid?: Long;
  direct_udp_ip?: number;
  direct_udp_port?: number;
  reservationid?: Long;
  reservation?: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
  map?: string;
  server_address?: string;
  gs_ping?: DataCenterPing;
  gs_location_id?: number;
}

export interface CMsgGCCStrike15_v2_MatchmakingServerRoundStats {
  reservationid?: Long;
  reservation?: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
  map?: string;
  round?: number;
  kills?: number[];
  assists?: number[];
  deaths?: number[];
  scores?: number[];
  pings?: number[];
  round_result?: number;
  match_result?: number;
  team_scores?: number[];
  confirm?: CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm;
  reservation_stage?: number;
  match_duration?: number;
  enemy_kills?: number[];
  enemy_headshots?: number[];
  enemy_3ks?: number[];
  enemy_4ks?: number[];
  enemy_5ks?: number[];
  mvps?: number[];
  spectators_count?: number;
  spectators_count_tv?: number;
  spectators_count_lnk?: number;
  enemy_kills_agg?: number[];
  drop_info?: CMsgGCCStrike15_v2_MatchmakingServerRoundStats.DropInfo;
  b_switched_teams?: boolean;
  enemy_2ks?: number[];
  player_spawned?: number[];
  team_spawn_count?: number[];
  max_rounds?: number;
  map_id?: number;
}

export namespace CMsgGCCStrike15_v2_MatchmakingServerRoundStats {
  export interface DropInfo {
    account_mvp?: number;
  }
}

export type CMsgGCCStrike15_v2_MatchmakingClient2GCHello = Record<string, never>;

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientHello {
  account_id?: number;
  ongoingmatch?: CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
  global_stats?: GlobalStatistics;
  penalty_seconds?: number;
  penalty_reason?: number;
  vac_banned?: number;
  ranking?: PlayerRankingInfo;
  commendation?: PlayerCommendationInfo;
  medals?: PlayerMedalsInfo;
  my_current_event?: TournamentEvent;
  my_current_event_teams?: TournamentTeam[];
  my_current_team?: TournamentTeam;
  my_current_event_stages?: TournamentEvent[];
  survey_vote?: number;
  activity?: AccountActivity;
  player_level?: number;
  player_cur_xp?: number;
  player_xp_bonus_flags?: number;
  rankings?: PlayerRankingInfo[];
  owcaseid?: Long;
}

export interface CMsgGCCStrike15_v2_AccountPrivacySettings {
  settings?: CMsgGCCStrike15_v2_AccountPrivacySettings.Setting[];
}

export namespace CMsgGCCStrike15_v2_AccountPrivacySettings {
  export interface Setting {
    setting_type?: number;
    setting_value?: number;
  }
}

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon {
  account_id?: number;
  abandoned_match?: CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
  penalty_seconds?: number;
  penalty_reason?: number;
}

export interface CMsgGCCStrike15_v2_ClientGCRankUpdate {
  rankings?: PlayerRankingInfo[];
}

export interface CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate {
  main_post_url?: string;
}

export interface CMsgGCCStrike15_v2_ServerNotificationForUserPenalty {
  account_id?: number;
  reason?: number;
  seconds?: number;
  communication_cooldown?: boolean;
}

export interface CMsgGCCStrike15_v2_ClientReportPlayer {
  account_id?: number;
  rpt_aimbot?: number;
  rpt_wallhack?: number;
  rpt_speedhack?: number;
  rpt_teamharm?: number;
  rpt_textabuse?: number;
  rpt_voiceabuse?: number;
  match_id?: Long;
  report_from_demo?: boolean;
}

export interface CMsgGCCStrike15_v2_ClientCommendPlayer {
  account_id?: number;
  match_id?: Long;
  commendation?: PlayerCommendationInfo;
  tokens?: number;
}

export interface CMsgGCCStrike15_v2_ClientReportServer {
  rpt_poorperf?: number;
  rpt_abusivemodels?: number;
  rpt_badmotd?: number;
  rpt_listingabuse?: number;
  rpt_inventoryabuse?: number;
  match_id?: Long;
}

export interface CMsgGCCStrike15_v2_ClientReportResponse {
  confirmation_id?: Long;
  account_id?: number;
  server_ip?: number;
  response_type?: number;
  response_result?: number;
  tokens?: number;
}

export interface CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends {
  request_id?: number;
  account_ids?: number[];
  serverid?: Long;
  matchid?: Long;
  client_launcher?: number;
  data_center_pings?: DataCenterPing[];
}

export interface WatchableMatchInfo {
  server_ip?: number;
  tv_port?: number;
  tv_spectators?: number;
  tv_time?: number;
  tv_watch_password?: Buffer;
  cl_decryptdata_key?: Long;
  cl_decryptdata_key_pub?: Long;
  game_type?: number;
  game_mapgroup?: string;
  game_map?: string;
  server_id?: Long;
  match_id?: Long;
  reservation_id?: Long;
}

export interface CMsgGCCStrike15_v2_ClientRequestJoinFriendData {
  version?: number;
  account_id?: number;
  join_token?: number;
  join_ipp?: number;
  res?: CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
  errormsg?: string;
}

export interface CMsgGCCStrike15_v2_ClientRequestJoinServerData {
  version?: number;
  account_id?: number;
  serverid?: Long;
  server_ip?: number;
  server_port?: number;
  res?: CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
  errormsg?: string;
}

export interface CMsgGCCstrike15_v2_ClientRedeemMissionReward {
  campaign_id?: number;
  redeem_id?: number;
  redeemable_balance?: number;
  expected_cost?: number;
  bid_control?: number;
}

export interface CMsgGCCstrike15_v2_ClientRedeemFreeReward {
  generation_time?: number;
  redeemable_balance?: number;
  items?: Long[];
}

export interface CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded {
  xp_progress_data?: XpProgressData[];
  account_id?: number;
  current_xp?: number;
  current_level?: number;
  upgraded_defidx?: number;
  operation_points_awarded?: number;
  free_rewards?: number;
  xp_trail_remaining?: number;
  xp_trail_xp_needed?: number;
  xp_trail_level?: number;
}

export interface CMsgGCCStrike15_v2_ClientNetworkConfig {
  data?: Buffer;
}

export interface CMsgGCCStrike15_ClientDeepStats {
  account_id?: number;
  range?: CMsgGCCStrike15_ClientDeepStats.DeepStatsRange;
  matches?: CMsgGCCStrike15_ClientDeepStats.DeepStatsMatch[];
}

export namespace CMsgGCCStrike15_ClientDeepStats {
  export interface DeepStatsRange {
    begin?: number;
    end?: number;
    frozen?: boolean;
  }

  export interface DeepStatsMatch {
    player?: DeepPlayerStatsEntry;
    events?: DeepPlayerMatchEvent[];
  }
}

export interface CMsgGCCStrike15_v2_WatchInfoUsers {
  request_id?: number;
  account_ids?: number[];
  watchable_match_infos?: WatchableMatchInfo[];
  extended_timeout?: number;
}

export interface CMsgGCCStrike15_v2_ClientRequestPlayersProfile {
  request_id__deprecated?: number;
  account_ids__deprecated?: number[];
  account_id?: number;
  request_level?: number;
}

export interface CMsgGCCStrike15_v2_PlayersProfile {
  request_id?: number;
  account_profiles?: CMsgGCCStrike15_v2_MatchmakingGC2ClientHello[];
}

export interface CMsgGCCStrike15_v2_PremierSeasonSummary {
  account_id?: number;
  season_id?: number;
  data_per_week?: CMsgGCCStrike15_v2_PremierSeasonSummary.DataPerWeek[];
  data_per_map?: CMsgGCCStrike15_v2_PremierSeasonSummary.DataPerMap[];
}

export namespace CMsgGCCStrike15_v2_PremierSeasonSummary {
  export interface DataPerWeek {
    week_id?: Long;
    rank_id?: number;
    matches_played?: number;
  }

  export interface DataPerMap {
    map_id?: number;
    wins?: number;
    ties?: number;
    losses?: number;
    rounds?: number;
    kills?: number;
    headshots?: number;
    assists?: number;
    deaths?: number;
    mvps?: number;
    rounds_3k?: number;
    rounds_4k?: number;
    rounds_5k?: number;
  }
}

export interface CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate {
  caseid?: Long;
  suspectid?: number;
  fractionid?: number;
  rpt_aimbot?: number;
  rpt_wallhack?: number;
  rpt_speedhack?: number;
  rpt_teamharm?: number;
  reason?: number;
}

export interface CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment {
  caseid?: Long;
  caseurl?: string;
  verdict?: number;
  timestamp?: number;
  throttleseconds?: number;
  suspectid?: number;
  fractionid?: number;
  numrounds?: number;
  fractionrounds?: number;
  streakconvictions?: number;
  reason?: number;
}

export interface CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus {
  caseid?: Long;
  statusid?: number;
}

export interface CClientHeaderOverwatchEvidence {
  accountid?: number;
  caseid?: Long;
}

export interface CMsgGCCStrike15_v2_GC2ClientTextMsg {
  id?: number;
  type?: number;
  payload?: Buffer;
}

export interface CMsgGCCStrike15_v2_Client2GCTextMsg {
  id?: number;
  args?: Buffer[];
}

export interface CMsgGCCStrike15_v2_MatchEndRunRewardDrops {
  serverinfo?: CMsgGCCStrike15_v2_MatchmakingServerReservationResponse;
  match_end_quest_data?: CMsgGC_ServerQuestUpdateData;
}

export interface CEconItemPreviewDataBlock {
  accountid?: number;
  itemid?: Long;
  defindex?: number;
  paintindex?: number;
  rarity?: number;
  quality?: number;
  paintwear?: number;
  paintseed?: number;
  killeaterscoretype?: number;
  killeatervalue?: number;
  customname?: string;
  stickers?: CEconItemPreviewDataBlock.Sticker[];
  inventory?: number;
  origin?: number;
  questid?: number;
  dropreason?: number;
  musicindex?: number;
  entindex?: number;
  petindex?: number;
  keychains?: CEconItemPreviewDataBlock.Sticker[];
  style?: number;
  variations?: CEconItemPreviewDataBlock.Sticker[];
  upgrade_level?: number;
}

export namespace CEconItemPreviewDataBlock {
  export interface Sticker {
    slot?: number;
    sticker_id?: number;
    wear?: number;
    scale?: number;
    rotation?: number;
    tint_id?: number;
    offset_x?: number;
    offset_y?: number;
    offset_z?: number;
    pattern?: number;
    highlight_reel?: number;
    wrapped_sticker?: number;
  }
}

export interface CMsgGCCStrike15_v2_MatchEndRewardDropsNotification {
  iteminfo?: CEconItemPreviewDataBlock;
}

export interface CMsgItemAcknowledged {
  iteminfo?: CEconItemPreviewDataBlock;
}

export interface CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest {
  param_s?: Long;
  param_a?: Long;
  param_d?: Long;
  param_m?: Long;
}

export interface CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse {
  iteminfo?: CEconItemPreviewDataBlock;
}

export type CMsgGCCStrike15_v2_MatchListRequestCurrentLiveGames = Record<string, never>;

export interface CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser {
  accountid?: number;
}

export interface CMsgGCCStrike15_v2_MatchListRequestRecentUserGames {
  accountid?: number;
}

export interface CMsgGCCStrike15_v2_MatchListRequestTournamentGames {
  eventid?: number;
}

export interface CMsgGCCStrike15_v2_MatchListRequestFullGameInfo {
  matchid?: Long;
  outcomeid?: Long;
  token?: number;
}

export interface CDataGCCStrike15_v2_MatchInfo {
  matchid?: Long;
  matchtime?: number;
  watchablematchinfo?: WatchableMatchInfo;
  roundstats_legacy?: CMsgGCCStrike15_v2_MatchmakingServerRoundStats;
  roundstatsall?: CMsgGCCStrike15_v2_MatchmakingServerRoundStats[];
}

export interface CDataGCCStrike15_v2_TournamentGroupTeam {
  team_id?: number;
  score?: number;
  correctpick?: boolean;
}

export interface CDataGCCStrike15_v2_TournamentGroup {
  groupid?: number;
  name?: string;
  desc?: string;
  picks__deprecated?: number;
  teams?: CDataGCCStrike15_v2_TournamentGroupTeam[];
  stage_ids?: number[];
  picklockuntiltime?: number;
  pickableteams?: number;
  points_per_pick?: number;
  picks?: CDataGCCStrike15_v2_TournamentGroup.Picks[];
}

export namespace CDataGCCStrike15_v2_TournamentGroup {
  export interface Picks {
    pickids?: number[];
  }
}

export interface CDataGCCStrike15_v2_TournamentSection {
  sectionid?: number;
  name?: string;
  desc?: string;
  groups?: CDataGCCStrike15_v2_TournamentGroup[];
}

export interface CDataGCCStrike15_v2_TournamentInfo {
  sections?: CDataGCCStrike15_v2_TournamentSection[];
  tournament_event?: TournamentEvent;
  tournament_teams?: TournamentTeam[];
}

export interface CMsgGCCStrike15_v2_MatchList {
  msgrequestid?: number;
  accountid?: number;
  servertime?: number;
  matches?: CDataGCCStrike15_v2_MatchInfo[];
  streams?: TournamentTeam[];
  tournamentinfo?: CDataGCCStrike15_v2_TournamentInfo;
}

export interface CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt {
  eventid?: number;
  matches?: CDataGCCStrike15_v2_MatchInfo[];
  accountid?: number;
}

export interface CMsgGCCStrike15_v2_Predictions {
  event_id?: number;
  group_match_team_picks?: CMsgGCCStrike15_v2_Predictions.GroupMatchTeamPick[];
}

export namespace CMsgGCCStrike15_v2_Predictions {
  export interface GroupMatchTeamPick {
    sectionid?: number;
    groupid?: number;
    index?: number;
    teamid?: number;
    itemid?: Long;
  }
}

export interface CMsgGCCStrike15_v2_Fantasy {
  event_id?: number;
  teams?: CMsgGCCStrike15_v2_Fantasy.FantasyTeam[];
}

export namespace CMsgGCCStrike15_v2_Fantasy {
  export interface FantasySlot {
    type?: number;
    pick?: number;
    itemid?: Long;
  }

  export interface FantasyTeam {
    sectionid?: number;
    slots?: CMsgGCCStrike15_v2_Fantasy.FantasySlot[];
  }
}

export interface CAttribute_String {
  value?: string;
}

export interface CMsgLegacySource1ClientWelcome {
  version?: number;
  game_data?: Buffer;
  outofdate_subscribed_caches?: CMsgSOCacheSubscribed[];
  uptodate_subscribed_caches?: CMsgSOCacheSubscriptionCheck[];
  location?: CMsgLegacySource1ClientWelcome.Location;
  game_data2?: Buffer;
  rtime32_gc_welcome_timestamp?: number;
  currency?: number;
  balance?: number;
  balance_url?: string;
  txn_country_code?: string;
}

export namespace CMsgLegacySource1ClientWelcome {
  export interface Location {
    latitude?: number;
    longitude?: number;
    country?: string;
  }
}

export interface CMsgCStrike15Welcome {
  store_item_hash?: number;
  timeplayedconsecutively?: number;
  time_first_played?: number;
  last_time_played?: number;
  last_ip_address?: number;
  gscookieid?: Long;
  uniqueid?: Long;
}

export interface CMsgGCCStrike15_v2_ClientVarValueNotificationInfo {
  value_name?: string;
  value_int?: number;
  server_addr?: number;
  server_port?: number;
  choked_blocks?: string[];
}

export interface CMsgGCCStrike15_v2_ServerVarValueNotificationInfo {
  accountid?: number;
  viewangles?: number[];
  type?: number;
  userdata?: number[];
}

export type CMsgGCCStrike15_v2_GiftsLeaderboardRequest = Record<string, never>;

export interface CMsgGCCStrike15_v2_GiftsLeaderboardResponse {
  servertime?: number;
  time_period_seconds?: number;
  total_gifts_given?: number;
  total_givers?: number;
  entries?: CMsgGCCStrike15_v2_GiftsLeaderboardResponse.GiftLeaderboardEntry[];
}

export namespace CMsgGCCStrike15_v2_GiftsLeaderboardResponse {
  export interface GiftLeaderboardEntry {
    accountid?: number;
    gifts?: number;
  }
}

export interface CMsgGCCStrike15_v2_ClientSubmitSurveyVote {
  survey_id?: number;
  vote?: number;
}

export interface CMsgGCCStrike15_v2_Server2GCClientValidate {
  accountid?: number;
}

export interface CMsgGCCStrike15_v2_GC2ClientTournamentInfo {
  eventid?: number;
  stageid?: number;
  game_type?: number;
  teamids?: number[];
}

export interface CSOEconCoupon {
  entryid?: number;
  defidx?: number;
  expiration_date?: number;
}

export interface CSOAccountItemPersonalStore {
  generation_time?: number;
  redeemable_balance?: number;
  items?: Long[];
}

export interface CSOAccountXpShop {
  generation_time?: number;
  redeemable_balance?: number;
  xp_tracks?: number[];
}

export interface CSOAccountXpShopBids {
  campaign_id?: number;
  redeem_id?: number;
  expected_cost?: number;
  generation_time?: number;
}

export interface CSOVolatileItemOffer {
  defidx?: number;
  faux_itemid?: Long[];
  generation_time?: number[];
}

export interface CSOVolatileItemClaimedRewards {
  defidx?: number;
  reward?: number[];
  generation_time?: number[];
}

export interface CSOAccountKeychainRemoveToolCharges {
  charges?: number;
}

export interface CSOQuestProgress {
  questid?: number;
  points_remaining?: number;
  bonus_points?: number;
}

export interface CSOAccountSeasonalOperation {
  season_value?: number;
  tier_unlocked?: number;
  premium_tiers?: number;
  mission_id?: number;
  missions_completed?: number;
  redeemable_balance?: number;
  season_pass_time?: number;
}

export interface CSOAccountRecurringSubscription {
  time_next_cycle?: number;
  time_initiated?: number;
}

export interface CSOGameAccountSteamChina {
  time_last_update?: number;
  time_comms_ban?: number;
  time_play_ban?: number;
}

export interface CSOPersonaDataPublic {
  player_level?: number;
  commendation?: PlayerCommendationInfo;
  elevated_state?: boolean;
  xp_trail_timestamp_refresh?: number;
  xp_trail_level?: number;
}

export interface CSOAccountRecurringMission {
  account_id?: number;
  mission_id?: number;
  period?: number;
  progress?: number;
}

export interface CMsgGCCStrike15_v2_GC2ClientNotifyXPShop {
  prematch?: CSOAccountXpShop;
  postmatch?: CSOAccountXpShop;
  current_xp?: number;
  current_level?: number;
}

export type CMsgGCCStrike15_v2_Client2GcAckXPShopTracks = Record<string, never>;

export interface CMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats {
  gs_location_id?: number;
  data_center_id?: number;
  num_locked_in?: number;
  num_found_nearby?: number;
  note_level?: number;
}

export interface CMsgGC_GlobalGame_Subscribe {
  ticket?: Long;
}

export interface CMsgGC_GlobalGame_Unsubscribe {
  timeleft?: number;
}

export interface CMsgGC_GlobalGame_Play {
  ticket?: Long;
  gametimems?: number;
  msperpoint?: number;
}

export interface CMsgGCCStrike15_v2_AcknowledgePenalty {
  acknowledged?: number;
}

export interface CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin {
  defindex?: number;
  upgradeid?: Long;
  hours?: number;
  prestigetime?: number;
}

export interface CMsgGCCStrike15_v2_Client2GCStreamUnlock {
  ticket?: Long;
  os?: number;
}

export interface CMsgGCCStrike15_v2_ClientToGCRequestElevate {
  stage?: number;
}

export interface CMsgGCCStrike15_v2_ClientToGCChat {
  match_id?: Long;
  text?: string;
}

export interface CMsgGCCStrike15_v2_GCToClientChat {
  account_id?: number;
  text?: string;
}

export interface CMsgGCCStrike15_v2_ClientAuthKeyCode {
  eventid?: number;
  code?: string;
}

export interface CMsgGCCStrike15_GotvSyncPacket {
  data?: CEngineGotvSyncPacket;
}

export interface PlayerDecalDigitalSignature {
  signature?: Buffer;
  accountid?: number;
  rtime?: number;
  endpos?: number[];
  startpos?: number[];
  left?: number[];
  tx_defidx?: number;
  entindex?: number;
  hitbox?: number;
  creationtime?: number;
  equipslot?: number;
  trace_id?: number;
  normal?: number[];
  tint_id?: number;
}

export interface CMsgGCCStrike15_v2_ClientPlayerDecalSign {
  data?: PlayerDecalDigitalSignature;
  itemid?: Long;
}

export interface CMsgGCCStrike15_v2_BetaEnrollment {
  eresult?: number;
}

export interface CMsgGCCStrike15_v2_ClientLogonFatalError {
  errorcode?: number;
  message?: string;
  country?: string;
}

export interface CMsgGCCStrike15_v2_ClientPollState {
  pollid?: number;
  names?: string[];
  values?: number[];
}

export interface CMsgGCCStrike15_v2_Party_Register {
  id?: number;
  ver?: number;
  apr?: number;
  ark?: number;
  nby?: number;
  grp?: number;
  slots?: number;
  launcher?: number;
  game_type?: number;
}

export interface CMsgGCCStrike15_v2_Party_Search {
  ver?: number;
  apr?: number;
  ark?: number;
  grps?: number[];
  launcher?: number;
  game_type?: number;
}

export interface CMsgGCCStrike15_v2_Party_SearchResults {
  entries?: CMsgGCCStrike15_v2_Party_SearchResults.Entry[];
}

export namespace CMsgGCCStrike15_v2_Party_SearchResults {
  export interface Entry {
    id?: number;
    grp?: number;
    game_type?: number;
    apr?: number;
    ark?: number;
    loc?: number;
    accountid?: number;
  }
}

export interface CMsgGCCStrike15_v2_Party_Invite {
  accountid?: number;
  lobbyid?: number;
}

export interface CMsgGCCStrike15_v2_Account_RequestCoPlays {
  players?: CMsgGCCStrike15_v2_Account_RequestCoPlays.Player[];
  servertime?: number;
}

export namespace CMsgGCCStrike15_v2_Account_RequestCoPlays {
  export interface Player {
    accountid?: number;
    rtcoplay?: number;
    online?: boolean;
  }
}

export interface CMsgGCCStrike15_v2_ClientToGCRequestTicket {
  authorized_steam_id?: Long;
  authorized_public_ip?: number;
  gameserver_steam_id?: Long;
  gameserver_sdr_routing?: string;
}

export interface CMsgGCToClientSteamDatagramTicket {
  serialized_ticket?: Buffer;
}

export type CMsgGCCStrike15_v2_ClientRequestOffers = Record<string, never>;

export interface CMsgGCCStrike15_v2_ClientRequestSouvenir {
  itemid?: Long;
  matchid?: Long;
  eventid?: number;
}

export interface CMsgGCCStrike15_v2_ClientAccountBalance {
  amount?: Long;
  url?: string;
}

export interface CMsgGCCStrike15_v2_ClientPartyJoinRelay {
  accountid?: number;
  lobbyid?: Long;
}

export interface CMsgGCCStrike15_v2_ClientPartyWarning {
  entries?: CMsgGCCStrike15_v2_ClientPartyWarning.Entry[];
}

export namespace CMsgGCCStrike15_v2_ClientPartyWarning {
  export interface Entry {
    accountid?: number;
    warntype?: number;
  }
}

export interface CMsgGCCStrike15_v2_SetEventFavorite {
  eventid?: Long;
  is_favorite?: boolean;
}

export interface CMsgGCCStrike15_v2_GetEventFavorites_Request {
  all_events?: boolean;
}

export interface CMsgGCCStrike15_v2_GetEventFavorites_Response {
  all_events?: boolean;
  json_favorites?: string;
  json_featured?: string;
}

export interface CMsgGCCStrike15_v2_ClientPerfReport {
  entries?: CMsgGCCStrike15_v2_ClientPerfReport.Entry[];
}

export namespace CMsgGCCStrike15_v2_ClientPerfReport {
  export interface Entry {
    perfcounter?: number;
    length?: number;
    reference?: Buffer;
    actual?: Buffer;
    sourceid?: number;
    status?: number;
  }
}

export interface CVDiagnostic {
  id?: number;
  extended?: number;
  value?: Long;
  string_value?: string;
}

export interface CMsgGCCStrike15_v2_ClientReportValidation {
  file_report?: string;
  command_line?: string;
  total_files?: number;
  internal_error?: number;
  trust_time?: number;
  count_pending?: number;
  count_completed?: number;
  process_id?: number;
  osversion?: number;
  clientreportversion?: number;
  status_id?: number;
  diagnostic1?: number;
  diagnostic2?: Long;
  diagnostic3?: Long;
  last_launch_data?: string;
  report_count?: number;
  client_time?: Long;
  diagnostic4?: Long;
  diagnostic5?: Long;
  diagnostics?: CVDiagnostic[];
}

export interface CMsgGCCStrike15_v2_GC2ClientRefuseSecureMode {
  file_report?: string;
  offer_insecure_mode?: boolean;
  offer_secure_mode?: boolean;
  show_unsigned_ui?: boolean;
  kick_user?: boolean;
  show_trusted_ui?: boolean;
  show_warning_not_trusted?: boolean;
  show_warning_not_trusted_2?: boolean;
  files_prevented_trusted?: string;
}

export interface CMsgGCCStrike15_v2_GC2ClientRequestValidation {
  full_report?: boolean;
  module?: string;
}

export interface CMsgGCCStrike15_v2_GC2ClientInitSystem {
  load?: boolean;
  name?: string;
  outputname?: string;
  key_data?: Buffer;
  sha_hash?: Buffer;
  cookie?: number;
  manifest?: string;
  system_package?: Buffer;
  load_system?: boolean;
}

export interface CMsgGCCStrike15_v2_GC2ClientInitSystem_Response {
  success?: boolean;
  diagnostic?: string;
  sha_hash?: Buffer;
  response?: number;
  error_code1?: number;
  error_code2?: number;
  handle?: Long;
  einit_result?: EInitSystemResult;
  aux_system1?: number;
  aux_system2?: number;
}

export interface CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName {
  leaderboard_safe_name?: string;
}

export type CMsgRequestRecurringMissionSchedule = Record<string, never>;

export interface CMsgRecurringMissionSchema {
  missions?: CMsgRecurringMissionSchema.MissionTemplateList[];
}

export namespace CMsgRecurringMissionSchema {
  export interface MissionTemplateList {
    period?: number;
    mission_templates?: Buffer[];
  }
}
