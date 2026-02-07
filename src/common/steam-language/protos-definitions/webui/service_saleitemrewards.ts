/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { LoyaltyRewardDefinition } from "./common";

export interface CommunityItemDefinition {
  item_type?: number;
  appid?: number;
  item_name?: string;
  item_title?: string;
  item_description?: string;
  item_image_small?: string;
  item_image_large?: string;
  item_key_values?: string;
  item_series?: number;
  item_class?: number;
  editor_accountid?: number;
  active?: boolean;
  item_image_composed?: string;
  item_image_composed_foil?: string;
  deleted?: boolean;
  item_last_changed?: number;
  broadcast_channel_id?: Long;
  item_movie_webm?: string;
  item_movie_mp4?: string;
  item_movie_webm_small?: string;
  item_movie_mp4_small?: string;
  item_internal_name?: string;
}

export interface CSaleItemRewards_CanClaimItem_Request {
  language?: string;
}

export interface CSaleItemRewards_CanClaimItem_Response {
  can_claim?: boolean;
  next_claim_time?: number;
  reward_item?: LoyaltyRewardDefinition;
}

export interface CSaleItemRewards_ClaimItem_Request {
  language?: string;
}

export interface CSaleItemRewards_ClaimItem_Response {
  communityitemid?: Long;
  next_claim_time?: number;
  reward_item?: LoyaltyRewardDefinition;
}

export interface CSaleItemRewards_GetClaimedSaleRewards_Request {
  sale_def_type?: number;
  language?: string;
  include_community_item_def?: boolean;
}

export interface CSaleItemRewards_GetClaimedSaleRewards_Response {
  num_items_granted?: number;
  num_items_earned?: number;
  current_def?: CSteamItemRewardDefinition;
  reward_items?: SaleItemRewardGrant[];
}

export interface CSaleItemRewards_GetCurrentDefinition_Request {
  sale_def_type?: number;
  language?: string;
  include_community_item_def?: boolean;
}

export interface CSaleItemRewards_GetCurrentDefinition_Response {
  definition?: CSteamItemRewardDefinition;
  reward_items?: SaleReward_ItemDefinition[];
}

export interface CSaleItemRewards_GetRewardDefinitions_Request {
  virtual_item_reward_event_id?: number;
}

export interface CSaleItemRewards_GetRewardDefinitions_Response {
  definitions?: CSteamItemRewardDefinition[];
}

export interface CSaleItemRewards_SetRewardDefinitions_Request {
  definitions?: CSteamItemRewardDefinition[];
  action?: number;
}

export interface CSaleItemRewards_SetRewardDefinitions_Response {
  definitions?: CSteamItemRewardDefinition[];
}

export interface CSteamItemRewardDefinition {
  sale_reward_def_id?: number;
  appid?: number;
  virtual_item_reward_event_id?: number;
  rtime_start_time?: number;
  rtime_end_time?: number;
  num_items_per_def?: number;
  reward_def_type?: number;
}

export interface SaleItemRewardGrant {
  communityitemid?: Long;
  time_granted?: number;
  item_definition?: SaleReward_ItemDefinition;
}

export interface SaleReward_ItemDefinition {
  appid?: number;
  community_item_type?: number;
  community_item_class?: number;
  community_definition?: CommunityItemDefinition;
}

export abstract class SaleItemRewardsService {
  abstract CanClaimItem(
    request: CSaleItemRewards_CanClaimItem_Request,
  ): Promise<CSaleItemRewards_CanClaimItem_Response>;
  abstract ClaimItem(
    request: CSaleItemRewards_ClaimItem_Request,
  ): Promise<CSaleItemRewards_ClaimItem_Response>;
  abstract GetClaimedSaleRewards(
    request: CSaleItemRewards_GetClaimedSaleRewards_Request,
  ): Promise<CSaleItemRewards_GetClaimedSaleRewards_Response>;
  abstract GetCurrentDefinition(
    request: CSaleItemRewards_GetCurrentDefinition_Request,
  ): Promise<CSaleItemRewards_GetCurrentDefinition_Response>;
  abstract GetRewardDefinitions(
    request: CSaleItemRewards_GetRewardDefinitions_Request,
  ): Promise<CSaleItemRewards_GetRewardDefinitions_Response>;
  abstract SetRewardDefinitions(
    request: CSaleItemRewards_SetRewardDefinitions_Request,
  ): Promise<CSaleItemRewards_SetRewardDefinitions_Response>;
}
