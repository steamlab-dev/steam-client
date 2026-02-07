/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientGetUserStats {
  game_id?: Long;
  crc_stats?: number;
  schema_local_version?: number;
  steam_id_for_user?: Long;
}

export interface CMsgClientGetUserStatsResponse {
  game_id?: Long;
  eresult?: number;
  crc_stats?: number;
  schema?: Buffer;
  stats?: CMsgClientGetUserStatsResponse.Stats[];
  achievement_blocks?: CMsgClientGetUserStatsResponse.Achievement_Blocks[];
}

export namespace CMsgClientGetUserStatsResponse {
  export interface Stats {
    stat_id?: number;
    stat_value?: number;
  }

  export interface Achievement_Blocks {
    achievement_id?: number;
    unlock_time?: number[];
  }
}

export interface CMsgClientStoreUserStatsResponse {
  game_id?: Long;
  eresult?: number;
  crc_stats?: number;
  stats_failed_validation?: CMsgClientStoreUserStatsResponse.Stats_Failed_Validation[];
  stats_out_of_date?: boolean;
}

export namespace CMsgClientStoreUserStatsResponse {
  export interface Stats_Failed_Validation {
    stat_id?: number;
    reverted_stat_value?: number;
  }
}

export interface CMsgClientStoreUserStats2 {
  game_id?: Long;
  settor_steam_id?: Long;
  settee_steam_id?: Long;
  crc_stats?: number;
  explicit_reset?: boolean;
  stats?: CMsgClientStoreUserStats2.Stats[];
}

export namespace CMsgClientStoreUserStats2 {
  export interface Stats {
    stat_id?: number;
    stat_value?: number;
  }
}

export interface CMsgClientStatsUpdated {
  steam_id?: Long;
  game_id?: Long;
  crc_stats?: number;
  updated_stats?: CMsgClientStatsUpdated.Updated_Stats[];
}

export namespace CMsgClientStatsUpdated {
  export interface Updated_Stats {
    stat_id?: number;
    stat_value?: number;
  }
}
