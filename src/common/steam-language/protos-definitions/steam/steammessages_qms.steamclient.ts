/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EGameSearchAction = {
  k_EGameSearchAction_None: 0,
  k_EGameSearchAction_Accept: 1,
  k_EGameSearchAction_Decline: 2,
  k_EGameSearchAction_Cancel: 3,
} as const;

export type EGameSearchAction = (typeof EGameSearchAction)[keyof typeof EGameSearchAction];

export const EGameSearchResult = {
  k_EGameSearchResult_Invalid: 0,
  k_EGameSearchResult_SearchInProgress: 1,
  k_EGameSearchResult_SearchFailedNoHosts: 2,
  k_EGameSearchResult_SearchGameFound: 3,
  k_EGameSearchResult_SearchCompleteAccepted: 4,
  k_EGameSearchResult_SearchCompleteDeclined: 5,
  k_EGameSearchResult_SearchCanceled: 6,
} as const;

export type EGameSearchResult = (typeof EGameSearchResult)[keyof typeof EGameSearchResult];

export interface GameSearchParam {
  key_name?: string;
  value?: string[];
}

export interface CQueuedMatchmaking_SearchForGame_Request {
  appid?: number;
  action?: EGameSearchAction;
  params?: GameSearchParam[];
  player_min?: number;
  player_max?: number;
  steamidlobby?: Long;
  searchid?: Long;
}

export interface CQueuedMatchmaking_SearchForGame_Response {
  gamesearchresult?: EGameSearchResult;
  searchid?: Long;
  seconds_time_estimate?: number;
  poll_frequency?: number;
  count_searching?: number;
  players_in_match?: number;
  players_accepted?: number;
  connect_string?: string;
  steamidhost?: Long;
  rtime_match_made?: number;
  rtime_now?: number;
  steamid_canceled_search?: Long;
}

export interface CQueuedMatchmakingGameHost_SearchForPlayers_Request {
  appid?: number;
  action?: EGameSearchAction;
  params?: GameSearchParam[];
  player_min?: number;
  player_max?: number;
  player_max_team_size?: number;
  connection_string?: string;
  searchid?: Long;
}

export interface PlayerFound {
  steamid?: Long;
  action?: EGameSearchAction;
  params?: GameSearchParam[];
  team_number?: number;
}

export interface CQueuedMatchmakingGameHost_SearchForPlayers_Response {
  gamesearchresult?: EGameSearchResult;
  searchid?: Long;
  poll_frequency?: number;
  matchid?: Long;
  players?: PlayerFound[];
  rtime_match_made?: number;
  rtime_now?: number;
}

export interface PlayerResult {
  steamid?: Long;
  value?: number;
}

export interface CQueuedMatchmakingGameHost_SubmitPlayerResult_Request {
  appid?: number;
  matchid?: Long;
  player_results?: PlayerResult[];
}

export type CQueuedMatchmakingGameHost_SubmitPlayerResult_Response = Record<string, never>;

export interface CQueuedMatchmakingGameHost_EndGame_Request {
  appid?: number;
  matchid?: Long;
}

export type CQueuedMatchmakingGameHost_EndGame_Response = Record<string, never>;

export abstract class QueuedMatchmakingService {
  abstract SearchForGame(
    request: CQueuedMatchmaking_SearchForGame_Request,
  ): Promise<CQueuedMatchmaking_SearchForGame_Response>;
}

export abstract class QueuedMatchmakingGameHostService {
  abstract SearchForPlayers(
    request: CQueuedMatchmakingGameHost_SearchForPlayers_Request,
  ): Promise<CQueuedMatchmakingGameHost_SearchForPlayers_Response>;
  abstract SubmitPlayerResult(
    request: CQueuedMatchmakingGameHost_SubmitPlayerResult_Request,
  ): Promise<CQueuedMatchmakingGameHost_SubmitPlayerResult_Response>;
  abstract EndGame(
    request: CQueuedMatchmakingGameHost_EndGame_Request,
  ): Promise<CQueuedMatchmakingGameHost_EndGame_Response>;
}
