/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CQuest_ActivateProfileModifierItem_Request {
  appid?: number;
  communityitemid?: Long;
  activate?: boolean;
}

export type CQuest_ActivateProfileModifierItem_Response = Record<string, never>;

export interface CQuest_CommunityItem {
  communityitemid?: Long;
  item_type?: number;
  appid?: number;
  owner?: number;
  attributes?: CQuest_CommunityItem_Attribute[];
  used?: boolean;
  owner_origin?: number;
  amount?: Long;
}

export interface CQuest_CommunityItem_Attribute {
  attributeid?: number;
  value?: Long;
}

export interface CQuest_GetCommunityInventory_Request {
  filter_appids?: number[];
}

export interface CQuest_GetCommunityInventory_Response {
  items?: CQuest_CommunityItem[];
}

export interface CQuest_GetCommunityItemDefinitions_Request {
  appid?: number;
  item_type?: number;
  language?: string;
  broadcast_channel_id?: Long;
  keyvalues_as_json?: boolean;
}

export interface CQuest_GetCommunityItemDefinitions_Response {
  item_definitions?: CQuest_GetCommunityItemDefinitions_Response_ItemDefinition[];
}

export interface CQuest_GetCommunityItemDefinitions_Response_ItemDefinition {
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

export interface CQuest_GetNumTradingCardsEarned_Request {
  timestamp_start?: number;
  timestamp_end?: number;
}

export interface CQuest_GetNumTradingCardsEarned_Response {
  num_trading_cards?: number;
}

export interface CQuest_SetVirtualItemRewardDefinition_Request {
  eventid?: number;
  itemsdefs?: CVirtualItemRewardDefinition[];
  action?: number;
}

export type CQuest_SetVirtualItemRewardDefinition_Response = Record<string, never>;

export interface CQuest_VirtualItemRewardDefinition_Request {
  eventid?: number;
  include_inactive?: boolean;
}

export interface CQuest_VirtualItemRewardDefinition_Response {
  rewards?: CVirtualItemRewardDefinition[];
}

export interface CVirtualItemRewardDefinition {
  eventid?: number;
  item_bucket?: number;
  appid?: number;
  active?: boolean;
  rarity?: number;
  package_to_grant?: number;
  game_item_id?: Long;
  community_item_class?: number;
  community_item_type?: number;
  loyalty_point_type?: number;
  amount?: Long;
  rtime_time_active?: number;
  loyalty_reward_defid?: number;
  user_badge_to_grant?: number;
  user_badge_level?: number;
  virtual_item_def_id?: number;
}

export abstract class QuestService {
  abstract ActivateProfileModifierItem(
    request: CQuest_ActivateProfileModifierItem_Request,
  ): Promise<CQuest_ActivateProfileModifierItem_Response>;
  abstract GetCommunityInventory(
    request: CQuest_GetCommunityInventory_Request,
  ): Promise<CQuest_GetCommunityInventory_Response>;
  abstract GetCommunityItemDefinitions(
    request: CQuest_GetCommunityItemDefinitions_Request,
  ): Promise<CQuest_GetCommunityItemDefinitions_Response>;
  abstract GetNumTradingCardsEarned(
    request: CQuest_GetNumTradingCardsEarned_Request,
  ): Promise<CQuest_GetNumTradingCardsEarned_Response>;
  abstract GetVirtualItemRewardDefinition(
    request: CQuest_VirtualItemRewardDefinition_Request,
  ): Promise<CQuest_VirtualItemRewardDefinition_Response>;
  abstract SetVirtualItemRewardDefinition(
    request: CQuest_SetVirtualItemRewardDefinition_Request,
  ): Promise<CQuest_SetVirtualItemRewardDefinition_Response>;
}
