/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export type CSteamCharts_GetBestOfYearPages_Request = Record<string, never>;

export interface CSteamCharts_GetBestOfYearPages_Response {
  pages?: CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage[];
}

export interface CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage {
  name?: string;
  url_path?: string;
  banner_url?: string[];
  banner_url_mobile?: string[];
  start_date?: number;
}

export interface CSteamCharts_GetGamesByConcurrentPlayers_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CSteamCharts_GetGamesByConcurrentPlayers_Response {
  last_update?: number;
  ranks?: CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank[];
}

export interface CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank {
  rank?: number;
  appid?: number;
  item?: StoreItem;
  concurrent_in_game?: number;
  peak_in_game?: number;
}

export interface CSteamCharts_GetMonthTopAppReleases_Request {
  rtime_month?: number;
  include_dlc?: boolean;
  top_results_limit?: number;
}

export interface CSteamCharts_GetMonthTopAppReleases_Response {
  top_dlc_releases?: CTopAppNewRelease[];
  top_combined_app_and_dlc_releases?: CTopAppNewRelease[];
}

export interface CSteamCharts_GetMostPlayedGames_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CSteamCharts_GetMostPlayedGames_Response {
  rollup_date?: number;
  ranks?: CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank[];
}

export interface CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank {
  rank?: number;
  appid?: number;
  item?: StoreItem;
  last_week_rank?: number;
  peak_in_game?: number;
  daily_active_players?: number;
}

export interface CSteamCharts_GetMostPlayedSteamDeckGames_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  top_played_period?: number;
  count?: number;
}

export interface CSteamCharts_GetMostPlayedSteamDeckGames_Response {
  ranks?: CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank[];
  top_played_period?: number;
}

export interface CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank {
  rank?: number;
  appid?: number;
  item?: StoreItem;
  last_period_rank?: number;
}

export type CSteamCharts_GetTopReleasesPages_Request = Record<string, never>;

export interface CSteamCharts_GetTopReleasesPages_Response {
  pages?: CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage[];
}

export interface CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage {
  name?: string;
  start_of_month?: number;
  url_path?: string;
  item_ids?: StoreItemID[];
}

export interface CSteamCharts_GetYearTopAppReleases_Request {
  rtime_year?: number;
  include_dlc?: boolean;
}

export interface CSteamCharts_GetYearTopAppReleases_Response {
  top_dlc_releases?: CTopAppNewRelease[];
  top_combined_app_and_dlc_releases?: CTopAppNewRelease[];
  top_app_list?: CSteamCharts_GetYearTopAppReleases_Response_TopApps[];
}

export interface CSteamCharts_GetYearTopAppReleases_Response_TopApps {
  appid?: number;
  app_release_rank?: number;
  type?: number;
}

export interface CTopAppNewRelease {
  appid?: number;
  rtime_release?: number;
  app_release_rank?: number;
}

export abstract class SteamChartsService {
  abstract GetBestOfYearPages(
    request: CSteamCharts_GetBestOfYearPages_Request,
  ): Promise<CSteamCharts_GetBestOfYearPages_Response>;
  abstract GetGamesByConcurrentPlayers(
    request: CSteamCharts_GetGamesByConcurrentPlayers_Request,
  ): Promise<CSteamCharts_GetGamesByConcurrentPlayers_Response>;
  abstract GetMonthTopAppReleases(
    request: CSteamCharts_GetMonthTopAppReleases_Request,
  ): Promise<CSteamCharts_GetMonthTopAppReleases_Response>;
  abstract GetMostPlayedGames(
    request: CSteamCharts_GetMostPlayedGames_Request,
  ): Promise<CSteamCharts_GetMostPlayedGames_Response>;
  abstract GetMostPlayedSteamDeckGames(
    request: CSteamCharts_GetMostPlayedSteamDeckGames_Request,
  ): Promise<CSteamCharts_GetMostPlayedSteamDeckGames_Response>;
  abstract GetTopReleasesPages(
    request: CSteamCharts_GetTopReleasesPages_Request,
  ): Promise<CSteamCharts_GetTopReleasesPages_Response>;
  abstract GetYearTopAppReleases(
    request: CSteamCharts_GetYearTopAppReleases_Request,
  ): Promise<CSteamCharts_GetYearTopAppReleases_Response>;
}
