/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EGCBaseMsg = {
  k_EMsgGCSystemMessage: 4001,
  k_EMsgGCReplicateConVars: 4002,
  k_EMsgGCConVarUpdated: 4003,
  k_EMsgGCInQueue: 4008,
  k_EMsgGCInviteToParty: 4501,
  k_EMsgGCInvitationCreated: 4502,
  k_EMsgGCPartyInviteResponse: 4503,
  k_EMsgGCKickFromParty: 4504,
  k_EMsgGCLeaveParty: 4505,
  k_EMsgGCServerAvailable: 4506,
  k_EMsgGCClientConnectToServer: 4507,
  k_EMsgGCGameServerInfo: 4508,
  k_EMsgGCError: 4509,
  k_EMsgGCReplay_UploadedToYouTube: 4510,
  k_EMsgGCLANServerAvailable: 4511,
} as const;

export type EGCBaseMsg = (typeof EGCBaseMsg)[keyof typeof EGCBaseMsg];

export const EGCBaseProtoObjectTypes = {
  k_EProtoObjectPartyInvite: 1001,
  k_EProtoObjectLobbyInvite: 1002,
} as const;

export type EGCBaseProtoObjectTypes =
  (typeof EGCBaseProtoObjectTypes)[keyof typeof EGCBaseProtoObjectTypes];

export const GC_BannedWordType = {
  GC_BANNED_WORD_DISABLE_WORD: 0,
  GC_BANNED_WORD_ENABLE_WORD: 1,
} as const;

export type GC_BannedWordType = (typeof GC_BannedWordType)[keyof typeof GC_BannedWordType];

export interface CGCStorePurchaseInit_LineItem {
  item_def_id?: number;
  quantity?: number;
  cost_in_local_currency?: Long;
  purchase_type?: number;
  supplemental_data?: Long;
}

export interface CMsgGCStorePurchaseInit {
  country?: string;
  language?: number;
  currency?: number;
  line_items?: CGCStorePurchaseInit_LineItem[];
}

export interface CMsgGCStorePurchaseInitResponse {
  result?: number;
  txn_id?: Long;
  url?: string;
  item_ids?: Long[];
}

export interface CSOPartyInvite {
  group_id?: Long;
  sender_id?: Long;
  sender_name?: string;
}

export interface CSOLobbyInvite {
  group_id?: Long;
  sender_id?: Long;
  sender_name?: string;
}

export interface CMsgSystemBroadcast {
  message?: string;
}

export interface CMsgInviteToParty {
  steam_id?: Long;
  client_version?: number;
  team_invite?: number;
}

export interface CMsgInvitationCreated {
  group_id?: Long;
  steam_id?: Long;
}

export interface CMsgPartyInviteResponse {
  party_id?: Long;
  accept?: boolean;
  client_version?: number;
  team_invite?: number;
}

export interface CMsgKickFromParty {
  steam_id?: Long;
}

export type CMsgLeaveParty = Record<string, never>;

export type CMsgServerAvailable = Record<string, never>;

export interface CMsgLANServerAvailable {
  lobby_id?: Long;
}

export interface CSOEconGameAccountClient {
  additional_backpack_slots?: number;
  trade_ban_expiration?: number;
  bonus_xp_timestamp_refresh?: number;
  bonus_xp_usedflags?: number;
  elevated_state?: number;
  elevated_timestamp?: number;
}

export interface CSOItemCriteriaCondition {
  op?: number;
  field?: string;
  required?: boolean;
  float_value?: number;
  string_value?: string;
}

export interface CSOItemCriteria {
  item_level?: number;
  item_quality?: number;
  item_level_set?: boolean;
  item_quality_set?: boolean;
  initial_inventory?: number;
  initial_quantity?: number;
  ignore_enabled_flag?: boolean;
  conditions?: CSOItemCriteriaCondition[];
  item_rarity?: number;
  item_rarity_set?: boolean;
  recent_only?: boolean;
}

export interface CSOItemRecipe {
  def_index?: number;
  name?: string;
  n_a?: string;
  desc_inputs?: string;
  desc_outputs?: string;
  di_a?: string;
  di_b?: string;
  di_c?: string;
  do_a?: string;
  do_b?: string;
  do_c?: string;
  requires_all_same_class?: boolean;
  requires_all_same_slot?: boolean;
  class_usage_for_output?: number;
  slot_usage_for_output?: number;
  set_for_output?: number;
  input_items_criteria?: CSOItemCriteria[];
  output_items_criteria?: CSOItemCriteria[];
  input_item_dupe_counts?: number[];
}

export interface CMsgDevNewItemRequest {
  receiver?: Long;
  criteria?: CSOItemCriteria;
}

export interface CMsgIncrementKillCountAttribute {
  killer_account_id?: number;
  victim_account_id?: number;
  item_id?: Long;
  event_type?: number;
  amount?: number;
}

export interface CMsgApplySticker {
  sticker_item_id?: Long;
  item_item_id?: Long;
  sticker_slot?: number;
  baseitem_defidx?: number;
  sticker_wear?: number;
  sticker_rotation?: number;
  sticker_scale?: number;
  sticker_offset_x?: number;
  sticker_offset_y?: number;
  sticker_offset_z?: number;
  sticker_wear_target?: number;
}

export interface CMsgModifyItemAttribute {
  item_id?: Long;
  attr_defidx?: number;
  attr_value?: number;
}

export interface CMsgApplyStatTrakSwap {
  tool_item_id?: Long;
  item_1_item_id?: Long;
  item_2_item_id?: Long;
}

export interface CMsgApplyStrangePart {
  strange_part_item_id?: Long;
  item_item_id?: Long;
}

export interface CMsgApplyPennantUpgrade {
  upgrade_item_id?: Long;
  pennant_item_id?: Long;
}

export interface CMsgApplyEggEssence {
  essence_item_id?: Long;
  egg_item_id?: Long;
}

export interface CSOEconItemAttribute {
  def_index?: number;
  value?: number;
  value_bytes?: Buffer;
}

export interface CSOEconItemEquipped {
  new_class?: number;
  new_slot?: number;
}

export interface CSOEconItem {
  id?: Long;
  account_id?: number;
  inventory?: number;
  def_index?: number;
  quantity?: number;
  level?: number;
  quality?: number;
  flags?: number;
  origin?: number;
  custom_name?: string;
  custom_desc?: string;
  attribute?: CSOEconItemAttribute[];
  interior_item?: CSOEconItem;
  in_use?: boolean;
  style?: number;
  original_id?: Long;
  equipped_state?: CSOEconItemEquipped[];
  rarity?: number;
}

export interface CMsgSortItems {
  sort_type?: number;
}

export interface CSOEconClaimCode {
  account_id?: number;
  code_type?: number;
  time_acquired?: number;
  code?: string;
}

export interface CMsgStoreGetUserData {
  price_sheet_version?: number;
  currency?: number;
}

export interface CMsgStoreGetUserDataResponse {
  result?: number;
  currency_deprecated?: number;
  country_deprecated?: string;
  price_sheet_version?: number;
  price_sheet?: Buffer;
}

export interface CMsgUpdateItemSchema {
  items_game?: Buffer;
  item_schema_version?: number;
  items_game_url?: string;
}

export interface CMsgGCError {
  error_text?: string;
}

export type CMsgRequestInventoryRefresh = Record<string, never>;

export interface CMsgConVarValue {
  name?: string;
  value?: string;
}

export interface CMsgReplicateConVars {
  convars?: CMsgConVarValue[];
}

export interface CMsgUseItem {
  item_id?: Long;
  target_steam_id?: Long;
  gift__potential_targets?: number[];
  duel__class_lock?: number;
  initiator_steam_id?: Long;
}

export interface CMsgReplayUploadedToYouTube {
  youtube_url?: string;
  youtube_account_name?: string;
  session_id?: Long;
}

export interface CMsgConsumableExhausted {
  item_def_id?: number;
}

export interface CMsgItemAcknowledged__DEPRECATED {
  account_id?: number;
  inventory?: number;
  def_index?: number;
  quality?: number;
  rarity?: number;
  origin?: number;
  item_id?: Long;
}

export interface CMsgSetItemPositions {
  item_positions?: CMsgSetItemPositions.ItemPosition[];
}

export namespace CMsgSetItemPositions {
  export interface ItemPosition {
    legacy_item_id?: number;
    position?: number;
    item_id?: Long;
  }
}

export interface CMsgGCReportAbuse {
  target_steam_id?: Long;
  description?: string;
  gid?: Long;
  abuse_type?: number;
  content_type?: number;
  target_game_server_ip?: number;
  target_game_server_port?: number;
}

export interface CMsgGCReportAbuseResponse {
  target_steam_id?: Long;
  result?: number;
  error_message?: string;
}

export interface CMsgGCNameItemNotification {
  player_steamid?: Long;
  item_def_index?: number;
  item_name_custom?: string;
}

export interface CMsgGCClientDisplayNotification {
  notification_title_localization_key?: string;
  notification_body_localization_key?: string;
  body_substring_keys?: string[];
  body_substring_values?: string[];
}

export interface CMsgGCShowItemsPickedUp {
  player_steamid?: Long;
}

export interface CMsgGCIncrementKillCountResponse {
  killer_account_id?: number;
  num_kills?: number;
  item_def?: number;
  level_type?: number;
}

export interface CSOEconItemDropRateBonus {
  account_id?: number;
  expiration_date?: number;
  bonus?: number;
  bonus_count?: number;
  item_id?: Long;
  def_index?: number;
}

export interface CSOEconItemLeagueViewPass {
  account_id?: number;
  league_id?: number;
  admin?: number;
  itemindex?: number;
}

export interface CSOEconItemEventTicket {
  account_id?: number;
  event_id?: number;
  item_id?: Long;
}

export interface CMsgGCItemPreviewItemBoughtNotification {
  item_def_index?: number;
}

export interface CMsgGCStorePurchaseCancel {
  txn_id?: Long;
}

export interface CMsgGCStorePurchaseCancelResponse {
  result?: number;
}

export interface CMsgGCStorePurchaseFinalize {
  txn_id?: Long;
}

export interface CMsgGCStorePurchaseFinalizeResponse {
  result?: number;
  item_ids?: Long[];
}

export interface CMsgGCBannedWordListRequest {
  ban_list_group_id?: number;
  word_id?: number;
}

export type CMsgGCRequestAnnouncements = Record<string, never>;

export interface CMsgGCRequestAnnouncementsResponse {
  announcement_title?: string;
  announcement?: string;
  nextmatch_title?: string;
  nextmatch?: string;
}

export interface CMsgGCBannedWord {
  word_id?: number;
  word_type?: GC_BannedWordType;
  word?: string;
}

export interface CMsgGCBannedWordListResponse {
  ban_list_group_id?: number;
  word_list?: CMsgGCBannedWord[];
}

export interface CMsgGCToGCBannedWordListBroadcast {
  broadcast?: CMsgGCBannedWordListResponse;
}

export interface CMsgGCToGCBannedWordListUpdated {
  group_id?: number;
}

export interface CMsgGCToGCDirtySDOCache {
  sdo_type?: number;
  key_uint64?: Long;
}

export interface CMsgGCToGCDirtyMultipleSDOCache {
  sdo_type?: number;
  key_uint64?: Long[];
}

export interface CMsgGCCollectItem {
  collection_item_id?: Long;
  subject_item_id?: Long;
}

export type CMsgSDONoMemcached = Record<string, never>;

export interface CMsgGCToGCUpdateSQLKeyValue {
  key_name?: string;
}

export interface CMsgGCToGCIsTrustedServer {
  steam_id?: Long;
}

export interface CMsgGCToGCIsTrustedServerResponse {
  is_trusted?: boolean;
}

export interface CMsgGCToGCBroadcastConsoleCommand {
  con_command?: string;
}

export interface CMsgGCServerVersionUpdated {
  server_version?: number;
}

export interface CMsgGCClientVersionUpdated {
  client_version?: number;
}

export type CMsgGCToGCWebAPIAccountChanged = Record<string, never>;

export interface CMsgGCToGCRequestPassportItemGrant {
  steam_id?: Long;
  league_id?: number;
  reward_flag?: number;
}

export interface CMsgGameServerInfo {
  server_public_ip_addr?: number;
  server_private_ip_addr?: number;
  server_port?: number;
  server_tv_port?: number;
  server_key?: string;
  server_hibernation?: boolean;
  server_type?: CMsgGameServerInfo.ServerType;
  server_region?: number;
  server_loadavg?: number;
  server_tv_broadcast_time?: number;
  server_game_time?: number;
  server_relay_connected_steam_id?: Long;
  relay_slots_max?: number;
  relays_connected?: number;
  relay_clients_connected?: number;
  relayed_game_server_steam_id?: Long;
  parent_relay_count?: number;
  tv_secret_code?: Long;
}

export namespace CMsgGameServerInfo {
  export const ServerType = {
    UNSPECIFIED: 0,
    GAME: 1,
    PROXY: 2,
  } as const;

  export type ServerType = (typeof ServerType)[keyof typeof ServerType];
}

export interface CSOEconEquipSlot {
  account_id?: number;
  class_id?: number;
  slot_id?: number;
  item_id?: Long;
  item_definition?: number;
}

export interface CMsgAdjustEquipSlot {
  class_id?: number;
  slot_id?: number;
  item_id?: Long;
}

export interface CMsgAdjustEquipSlots {
  slots?: CMsgAdjustEquipSlot[];
  change_num?: number;
}

export interface CMsgOpenCrate {
  tool_item_id?: Long;
  subject_item_id?: Long;
  for_rental?: boolean;
  points_remaining?: number;
}

export interface CSOEconRentalHistory {
  account_id?: number;
  crate_item_id?: Long;
  crate_def_index?: number;
  issue_date?: number;
  expiration_date?: number;
}

export interface CMsgAcknowledgeRentalExpiration {
  crate_item_id?: Long;
}
