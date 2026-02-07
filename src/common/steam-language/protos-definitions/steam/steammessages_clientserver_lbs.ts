/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientLBSSetScore {
  app_id?: number;
  leaderboard_id?: number;
  score?: number;
  details?: Buffer;
  upload_score_method?: number;
}

export interface CMsgClientLBSSetScoreResponse {
  eresult?: number;
  leaderboard_entry_count?: number;
  score_changed?: boolean;
  global_rank_previous?: number;
  global_rank_new?: number;
}

export interface CMsgClientLBSSetUGC {
  app_id?: number;
  leaderboard_id?: number;
  ugc_id?: Long;
}

export interface CMsgClientLBSSetUGCResponse {
  eresult?: number;
}

export interface CMsgClientLBSFindOrCreateLB {
  app_id?: number;
  leaderboard_sort_method?: number;
  leaderboard_display_type?: number;
  create_if_not_found?: boolean;
  leaderboard_name?: string;
}

export interface CMsgClientLBSFindOrCreateLBResponse {
  eresult?: number;
  leaderboard_id?: number;
  leaderboard_entry_count?: number;
  leaderboard_sort_method?: number;
  leaderboard_display_type?: number;
  leaderboard_name?: string;
}

export interface CMsgClientLBSGetLBEntries {
  app_id?: number;
  leaderboard_id?: number;
  range_start?: number;
  range_end?: number;
  leaderboard_data_request?: number;
  steamids?: Long[];
}

export interface CMsgClientLBSGetLBEntriesResponse {
  eresult?: number;
  leaderboard_entry_count?: number;
  entries?: CMsgClientLBSGetLBEntriesResponse.Entry[];
}

export namespace CMsgClientLBSGetLBEntriesResponse {
  export interface Entry {
    steam_id_user?: Long;
    global_rank?: number;
    score?: number;
    details?: Buffer;
    ugc_id?: Long;
  }
}
