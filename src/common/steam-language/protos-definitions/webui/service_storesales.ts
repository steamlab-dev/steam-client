/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CStore_GetUserVotes_Request {
  sale_appid?: number;
}

export interface CStore_GetUserVotes_Response {
  user_votes?: SteamAwardsUserVote[];
}

export interface CStore_GetVoteDefinitions_Request {
  language?: string;
  sale_appid?: number;
}

export interface CStore_GetVoteDefinitions_Response {
  votes?: CStore_VoteDefinition[];
  labor_of_love_winners?: number[];
}

export interface CStore_SetVote_Request {
  voteid?: number;
  appid?: number;
  sale_appid?: number;
}

export interface CStore_SetVote_Response {
  user_votes?: SteamAwardsUserVote[];
}

export interface CStore_VoteDefinition {
  voteid?: number;
  active?: boolean;
  start_time?: number;
  end_time?: number;
  app_discounts?: CStore_VoteDefinition_AppDefinition[];
  grouped_vote_options?: number;
  groups?: CStore_VoteDefinition_GroupDefinition[];
  internal_name?: string;
  localization?: CStore_VoteDefinition_Localization;
  reveal_time?: number;
  release_date_min?: number;
  winner_appid?: number;
  flag?: number;
  release_date_max?: number;
  item_type?: number;
}

export interface CStore_VoteDefinition_AppDefinition {
  appid?: number;
  discount?: number;
}

export interface CStore_VoteDefinition_GroupDefinition {
  groupid?: number;
  group_name?: string;
  app_discounts?: CStore_VoteDefinition_AppDefinition[];
}

export interface CStore_VoteDefinition_Localization {
  title?: string;
  title_linebreak?: string;
  title_award?: string;
  award_description?: string;
}

export interface SteamAwardsUserVote {
  voteid?: number;
  appid?: number;
  communityitemid?: Long;
}

export abstract class StoreSalesService {
  abstract GetUserVotes(
    request: CStore_GetUserVotes_Request,
  ): Promise<CStore_GetUserVotes_Response>;
  abstract GetVoteDefinitions(
    request: CStore_GetVoteDefinitions_Request,
  ): Promise<CStore_GetVoteDefinitions_Response>;
  abstract SetVote(request: CStore_SetVote_Request): Promise<CStore_SetVote_Response>;
}
