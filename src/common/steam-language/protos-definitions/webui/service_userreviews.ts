/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CUserReviews_BackfillSavedHardware_Request {
  saved_hardware_id?: Long;
}

export interface CUserReviews_BackfillSavedHardware_Response {
  num_backfilled?: number;
}

export interface CUserReviews_GetFriendsRecommendedApp_Request {
  appid?: number;
}

export interface CUserReviews_GetFriendsRecommendedApp_Response {
  accountids_recommended?: number[];
  accountids_not_recommended?: number[];
}

export interface CUserReviews_GetIndividualRecommendations_Request {
  requests?: CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest[];
}

export interface CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest {
  steamid?: Long;
  appid?: number;
}

export interface CUserReviews_GetIndividualRecommendations_Response {
  recommendations?: RecommendationDetails[];
}

export interface CUserReviews_Recommendation_LoyaltyReaction {
  reaction_type?: number;
  count?: number;
}

export interface CUserReviews_Recommendation_Tag {
  id?: number;
  ranges?: CUserReviews_Recommendation_Tag_Range[];
}

export interface CUserReviews_Recommendation_Tag_Range {
  start?: number;
  end?: number;
}

export interface CUserReviews_Update_Request {
  recommendationid?: Long;
  review_text?: string;
  voted_up?: boolean;
  is_public?: boolean;
  language?: string;
  is_in_early_access?: boolean;
  received_compensation?: boolean;
  comments_disabled?: boolean;
  hide_in_steam_china?: boolean;
  saved_hardware_id?: Long;
}

export type CUserReviews_Update_Response = Record<string, never>;

export interface RecommendationDetails {
  recommendationid?: Long;
  steamid?: Long;
  appid?: number;
  review?: string;
  time_created?: number;
  time_updated?: number;
  votes_up?: number;
  votes_down?: number;
  vote_score?: number;
  language?: string;
  comment_count?: number;
  voted_up?: boolean;
  is_public?: boolean;
  moderator_hidden?: boolean;
  flagged_by_developer?: number;
  report_score?: number;
  steamid_moderator?: Long;
  steamid_developer?: Long;
  steamid_dev_responder?: Long;
  developer_response?: string;
  time_developer_responded?: number;
  developer_flag_cleared?: boolean;
  written_during_early_access?: boolean;
  votes_funny?: number;
  received_compensation?: boolean;
  unverified_purchase?: boolean;
  review_qualities?: number[];
  weighted_vote_score?: number;
  moderation_note?: string;
  payment_method?: number;
  playtime_2weeks?: number;
  playtime_forever?: number;
  last_playtime?: number;
  comments_disabled?: boolean;
  playtime_at_review?: number;
  approved_for_china?: boolean;
  ban_check_result?: number;
  refunded?: boolean;
  account_score_spend?: number;
  reactions?: CUserReviews_Recommendation_LoyaltyReaction[];
  ipaddress?: string;
  hidden_in_steam_china?: boolean;
  steam_china_location?: string;
  category_ascii_pct?: number;
  category_meme_pct?: number;
  category_offtopic_pct?: number;
  category_uninformative_pct?: number;
  category_votefarming_pct?: number;
  deck_playtime_at_review?: number;
  is_bot_review_pct?: number;
  positivity_pct?: number;
  tags_with_ranges?: CUserReviews_Recommendation_Tag[];
  saved_hardware_id?: Long;
  hardware_cluster_id?: Long;
}

export abstract class UserReviewsService {
  abstract BackfillSavedHardware(
    request: CUserReviews_BackfillSavedHardware_Request,
  ): Promise<CUserReviews_BackfillSavedHardware_Response>;
  abstract GetFriendsRecommendedApp(
    request: CUserReviews_GetFriendsRecommendedApp_Request,
  ): Promise<CUserReviews_GetFriendsRecommendedApp_Response>;
  abstract GetIndividualRecommendations(
    request: CUserReviews_GetIndividualRecommendations_Request,
  ): Promise<CUserReviews_GetIndividualRecommendations_Response>;
  abstract Update(request: CUserReviews_Update_Request): Promise<CUserReviews_Update_Response>;
}
