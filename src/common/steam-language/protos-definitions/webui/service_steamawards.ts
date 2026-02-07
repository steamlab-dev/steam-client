/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CSteamAwards_GetNominationRecommendations_Request {
  category_id?: number;
}

export interface CSteamAwards_GetNominationRecommendations_Response {
  played_app?: CSteamAwards_GetNominationRecommendations_Response_PlayedApps[];
  suggested_events?: CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent[];
  suggested_apps?: CSteamAwards_GetNominationRecommendations_Response_SuggestedApp[];
  debug_query?: string;
}

export interface CSteamAwards_GetNominationRecommendations_Response_PlayedApps {
  appid?: number;
  playtime?: number;
}

export interface CSteamAwards_GetNominationRecommendations_Response_SuggestedApp {
  appid?: number;
}

export interface CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent {
  clanid?: number;
  event_gid?: Long;
  appid?: number;
}

export interface CSteamAwards_GetNominationShareLink_Request {
  generate_new?: boolean;
}

export interface CSteamAwards_GetNominationShareLink_Response {
  code?: Long;
}

export interface CSteamAwards_GetOtherUserNominations_Request {
  steamid?: Long;
  code?: Long;
}

export type CSteamAwards_GetUserNominations_Request = Record<string, never>;

export interface CSteamAwards_GetUserNominations_Response {
  nominations?: CSteamAwardsNomination[];
}

export interface CSteamAwards_Nominate_Request {
  category_id?: number;
  nominated_id?: number;
  source?: number;
}

export interface CSteamAwards_Nominate_Response {
  nominations?: CSteamAwardsNomination[];
}

export interface CSteamAwardsNomination {
  category_id?: number;
  appid?: number;
  last_updated?: number;
}

export abstract class SteamAwardsService {
  abstract GetNominationRecommendations(
    request: CSteamAwards_GetNominationRecommendations_Request,
  ): Promise<CSteamAwards_GetNominationRecommendations_Response>;
  abstract GetNominationShareLink(
    request: CSteamAwards_GetNominationShareLink_Request,
  ): Promise<CSteamAwards_GetNominationShareLink_Response>;
  abstract GetOtherUserNominations(
    request: CSteamAwards_GetOtherUserNominations_Request,
  ): Promise<CSteamAwards_GetUserNominations_Response>;
  abstract GetUserNominations(
    request: CSteamAwards_GetUserNominations_Request,
  ): Promise<CSteamAwards_GetUserNominations_Response>;
  abstract Nominate(
    request: CSteamAwards_Nominate_Request,
  ): Promise<CSteamAwards_Nominate_Response>;
}
