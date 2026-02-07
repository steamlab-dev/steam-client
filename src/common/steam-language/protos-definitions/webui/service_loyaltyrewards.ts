/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { LoyaltyRewardDefinition } from "./common";

export interface CLoyaltyRewards_AddReaction_Request {
  target_type?: number;
  targetid?: Long;
  reactionid?: number;
}

export type CLoyaltyRewards_AddReaction_Response = Record<string, never>;

export interface CLoyaltyRewards_BatchedQueryRewardItems_Request {
  requests?: CLoyaltyRewards_QueryRewardItems_Request[];
}

export interface CLoyaltyRewards_BatchedQueryRewardItems_Response {
  responses?: CLoyaltyRewards_BatchedQueryRewardItems_Response_Response[];
}

export interface CLoyaltyRewards_BatchedQueryRewardItems_Response_Response {
  eresult?: number;
  response?: CLoyaltyRewards_QueryRewardItems_Response;
}

export type CLoyaltyRewards_GetActivePurchaseBonuses_Request = Record<string, never>;

export interface CLoyaltyRewards_GetActivePurchaseBonuses_Response {
  bonuses?: LoyaltyRewardPurchaseBonus[];
}

export type CLoyaltyRewards_GetEligibleApps_Request = Record<string, never>;

export interface CLoyaltyRewards_GetEligibleApps_Response {
  apps?: CLoyaltyRewards_GetEligibleApps_Response_EligibleApp[];
}

export interface CLoyaltyRewards_GetEligibleApps_Response_EligibleApp {
  appid?: number;
  has_items_anyone_can_purchase?: boolean;
  event_app?: boolean;
  hero_carousel_image?: string;
  owned?: boolean;
}

export interface CLoyaltyRewards_GetEquippedProfileItems_Request {
  steamid?: Long;
  language?: string;
}

export interface CLoyaltyRewards_GetEquippedProfileItems_Response {
  active_definitions?: LoyaltyRewardDefinition[];
  inactive_definitions?: LoyaltyRewardDefinition[];
  bundle_definitions?: LoyaltyRewardDefinition[];
}

export interface CLoyaltyRewards_GetPointsForSpend_Request {
  amount?: Long;
  ecurrency?: number;
}

export interface CLoyaltyRewards_GetPointsForSpend_Response {
  points?: Long;
}

export type CLoyaltyRewards_GetProfileCustomizationsConfig_Request = Record<string, never>;

export interface CLoyaltyRewards_GetProfileCustomizationsConfig_Response {
  points_cost?: number;
  upgrade_points_cost?: number;
  purchasable_customization_types?: number[];
  upgradable_customization_types?: number[];
  max_slots_per_type?: number;
  max_upgradable_level?: number;
}

export interface CLoyaltyRewards_GetReactionConfig_Request {
  elanguage?: number;
}

export interface CLoyaltyRewards_GetReactionConfig_Response {
  reactions?: CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig[];
}

export interface CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig {
  reactionid?: number;
  points_cost?: number;
  points_transferred?: number;
  valid_target_types?: number[];
  valid_ugc_types?: number[];
  purchaseable?: boolean;
  localized_title?: string;
  localized_desc?: string;
  available_until?: number;
}

export interface CLoyaltyRewards_GetReactions_Request {
  target_type?: number;
  targetid?: Long;
}

export interface CLoyaltyRewards_GetReactions_Response {
  reactionids?: number[];
}

export interface CLoyaltyRewards_GetReactionsSummaryForUser_Request {
  steamid?: Long;
}

export interface CLoyaltyRewards_GetReactionsSummaryForUser_Response {
  total?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  user_reviews?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  ugc?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  profile?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  forum_topics?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  comments?: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown[];
  total_given?: number;
  total_received?: number;
  total_points_given?: Long;
  total_points_received?: Long;
}

export interface CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown {
  reactionid?: number;
  given?: number;
  received?: number;
  points_given?: Long;
  points_received?: Long;
  purchaseable?: boolean;
}

export interface CLoyaltyRewards_GetSummary_Request {
  steamid?: Long;
}

export interface CLoyaltyRewards_GetSummary_Response {
  summary?: CLoyaltyRewards_GetSummary_Response_Summary;
  timestamp_updated?: number;
  auditid_highwater?: Long;
}

export interface CLoyaltyRewards_GetSummary_Response_Summary {
  points?: Long;
  points_earned?: Long;
  points_spent?: Long;
}

export interface CLoyaltyRewards_QueryRewardItems_Request {
  appids?: number[];
  time_available?: number;
  community_item_classes?: number[];
  language?: string;
  count?: number;
  cursor?: string;
  sort?: number;
  sort_descending?: boolean;
  reward_types?: number[];
  excluded_community_item_classes?: number[];
  definitionids?: number[];
  filters?: number[];
  filter_match_all_category_tags?: string[];
  filter_match_any_category_tags?: string[];
  contains_definitionids?: number[];
  include_direct_purchase_disabled?: boolean;
  excluded_content_descriptors?: number[];
  excluded_appids?: number[];
  excluded_store_tagids?: number[];
  store_tagids?: number[];
  search_term?: string;
}

export interface CLoyaltyRewards_QueryRewardItems_Response {
  definitions?: LoyaltyRewardDefinition[];
  total_count?: number;
  count?: number;
  next_cursor?: string;
}

export interface CLoyaltyRewards_RedeemPoints_Request {
  defid?: number;
  expected_points_cost?: Long;
}

export interface CLoyaltyRewards_RedeemPoints_Response {
  communityitemid?: Long;
  bundle_community_item_ids?: Long[];
}

export interface CLoyaltyRewards_RedeemPointsForBadgeLevel_Request {
  defid?: number;
  num_levels?: number;
}

export interface CLoyaltyRewards_RedeemPointsForProfileCustomization_Request {
  customization_type?: number;
}

export interface CLoyaltyRewards_RedeemPointsForProfileCustomization_Response {
  purchaseid?: Long;
}

export interface CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request {
  customization_type?: number;
  new_level?: number;
}

export type CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response = Record<
  string,
  never
>;

export interface CLoyaltyRewards_RedeemPointsToUpgradeItem_Request {
  defid?: number;
  communityitemid?: Long;
}

export interface CLoyaltyRewards_RegisterForSteamDeckRewards_Request {
  serial_number?: string;
  controller_code?: string;
}

export interface CLoyaltyRewards_RegisterForSteamDeckRewards_Response {
  granted_profile_modifier?: boolean;
}

export interface LoyaltyRewardPurchaseBonus {
  bonusid?: Long;
  appid?: number;
  active?: boolean;
  points?: number;
  timestamp_start?: number;
  timestamp_end?: number;
  internal_description?: string;
}

export abstract class LoyaltyRewardsService {
  abstract AddReaction(
    request: CLoyaltyRewards_AddReaction_Request,
  ): Promise<CLoyaltyRewards_AddReaction_Response>;
  abstract BatchedQueryRewardItems(
    request: CLoyaltyRewards_BatchedQueryRewardItems_Request,
  ): Promise<CLoyaltyRewards_BatchedQueryRewardItems_Response>;
  abstract GetActivePurchaseBonuses(
    request: CLoyaltyRewards_GetActivePurchaseBonuses_Request,
  ): Promise<CLoyaltyRewards_GetActivePurchaseBonuses_Response>;
  abstract GetEligibleApps(
    request: CLoyaltyRewards_GetEligibleApps_Request,
  ): Promise<CLoyaltyRewards_GetEligibleApps_Response>;
  abstract GetEquippedProfileItems(
    request: CLoyaltyRewards_GetEquippedProfileItems_Request,
  ): Promise<CLoyaltyRewards_GetEquippedProfileItems_Response>;
  abstract GetPointsForSpend(
    request: CLoyaltyRewards_GetPointsForSpend_Request,
  ): Promise<CLoyaltyRewards_GetPointsForSpend_Response>;
  abstract GetProfileCustomizationsConfig(
    request: CLoyaltyRewards_GetProfileCustomizationsConfig_Request,
  ): Promise<CLoyaltyRewards_GetProfileCustomizationsConfig_Response>;
  abstract GetReactionConfig(
    request: CLoyaltyRewards_GetReactionConfig_Request,
  ): Promise<CLoyaltyRewards_GetReactionConfig_Response>;
  abstract GetReactions(
    request: CLoyaltyRewards_GetReactions_Request,
  ): Promise<CLoyaltyRewards_GetReactions_Response>;
  abstract GetReactionsSummaryForUser(
    request: CLoyaltyRewards_GetReactionsSummaryForUser_Request,
  ): Promise<CLoyaltyRewards_GetReactionsSummaryForUser_Response>;
  abstract GetSummary(
    request: CLoyaltyRewards_GetSummary_Request,
  ): Promise<CLoyaltyRewards_GetSummary_Response>;
  abstract QueryRewardItems(
    request: CLoyaltyRewards_QueryRewardItems_Request,
  ): Promise<CLoyaltyRewards_QueryRewardItems_Response>;
  abstract RedeemPoints(
    request: CLoyaltyRewards_RedeemPoints_Request,
  ): Promise<CLoyaltyRewards_RedeemPoints_Response>;
  abstract RedeemPointsForBadgeLevel(
    request: CLoyaltyRewards_RedeemPointsForBadgeLevel_Request,
  ): Promise<CLoyaltyRewards_RedeemPoints_Response>;
  abstract RedeemPointsForProfileCustomization(
    request: CLoyaltyRewards_RedeemPointsForProfileCustomization_Request,
  ): Promise<CLoyaltyRewards_RedeemPointsForProfileCustomization_Response>;
  abstract RedeemPointsForProfileCustomizationUpgrade(
    request: CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request,
  ): Promise<CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Response>;
  abstract RedeemPointsToUpgradeItem(
    request: CLoyaltyRewards_RedeemPointsToUpgradeItem_Request,
  ): Promise<CLoyaltyRewards_RedeemPoints_Response>;
  abstract RegisterForSteamDeckRewards(
    request: CLoyaltyRewards_RegisterForSteamDeckRewards_Request,
  ): Promise<CLoyaltyRewards_RegisterForSteamDeckRewards_Response>;
}
