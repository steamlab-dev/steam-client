/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CStorePageFilter,
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  UserContentDescriptorPreferences,
} from "./common";

export interface CPackageReservationStatus {
  packageid?: number;
  reservation_state?: number;
  queue_position?: number;
  total_queue_size?: number;
  reservation_country_code?: string;
  expired?: boolean;
  time_expires?: number;
  time_reserved?: number;
  rtime_estimated_notification?: number;
  notificaton_token?: string;
  queue_head_position_at_reservation?: number;
  queue_head_position_now?: number;
}

export interface CReservationPositionMessage {
  edistributor?: number;
  product_identifier?: string;
  start_queue_position?: number;
  rtime_estimated_notification?: number;
  localization_token?: string;
  accountid?: number;
  rtime_created?: number;
}

export interface CSteamDeckCompatibility_SetFeedback_Request {
  appid?: number;
  feedback?: number;
}

export type CSteamDeckCompatibility_SetFeedback_Response = Record<string, never>;

export interface CSteamDeckCompatibility_ShouldPrompt_Request {
  appid?: number;
}

export interface CSteamDeckCompatibility_ShouldPrompt_Response {
  prompt?: boolean;
  feedback_eligible?: boolean;
  existing_feedback?: number;
}

export interface CStore_DeleteReservationPositionMessage_Request {
  edistributor?: number;
  product_identifier?: string;
  start_queue_position?: number;
}

export type CStore_DeleteReservationPositionMessage_Response = Record<string, never>;

export type CStore_GetAllReservationPositionMessages_Request = Record<string, never>;

export interface CStore_GetAllReservationPositionMessages_Response {
  settings?: CReservationPositionMessage[];
}

export interface CStore_GetDiscoveryQueue_Request {
  queue_type?: number;
  country_code?: string;
  rebuild_queue?: boolean;
  settings_changed?: boolean;
  settings?: CStoreDiscoveryQueueSettings;
  rebuild_queue_if_stale?: boolean;
  ignore_user_preferences?: boolean;
  no_experimental_results?: boolean;
  experimental_cohort?: number;
  debug_get_solr_query?: boolean;
  store_page_filter?: CStorePageFilter;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CStore_GetDiscoveryQueue_Response {
  appids?: number[];
  country_code?: string;
  settings?: CStoreDiscoveryQueueSettings;
  skipped?: number;
  exhausted?: boolean;
  experimental_cohort?: number;
  debug_solr_query?: string;
  store_items?: StoreItem[];
}

export interface CStore_GetDiscoveryQueueSettings_Request {
  queue_type?: number;
  store_page_filter?: CStorePageFilter;
}

export interface CStore_GetDiscoveryQueueSettings_Response {
  country_code?: string;
  settings?: CStoreDiscoveryQueueSettings;
}

export interface CStore_GetDiscoveryQueueSkippedApps_Request {
  steamid?: Long;
  queue_type?: number;
  store_page_filter?: CStorePageFilter;
}

export interface CStore_GetDiscoveryQueueSkippedApps_Response {
  appids?: number[];
}

export interface CStore_GetGamesFollowed_Request {
  steamid?: Long;
}

export interface CStore_GetGamesFollowed_Response {
  appids?: number[];
}

export interface CStore_GetGamesFollowedCount_Request {
  steamid?: Long;
}

export interface CStore_GetGamesFollowedCount_Response {
  followed_game_count?: number;
}

export interface CStore_GetLocalizedNameForTags_Request {
  language?: string;
  tagids?: number[];
}

export interface CStore_GetLocalizedNameForTags_Response {
  tags?: CStore_GetLocalizedNameForTags_Response_Tag[];
}

export interface CStore_GetLocalizedNameForTags_Response_Tag {
  tagid?: number;
  english_name?: string;
  name?: string;
  normalized_name?: string;
}

export interface CStore_GetMostPopularTags_Request {
  language?: string;
}

export interface CStore_GetMostPopularTags_Response {
  tags?: CStore_GetMostPopularTags_Response_Tag[];
}

export interface CStore_GetMostPopularTags_Response_Tag {
  tagid?: number;
  name?: string;
}

export interface CStore_GetRecommendedTagsForUser_Request {
  language?: string;
  country_code?: string;
  favor_rarer_tags?: boolean;
}

export interface CStore_GetRecommendedTagsForUser_Response {
  tags?: CStore_GetRecommendedTagsForUser_Response_Tag[];
}

export interface CStore_GetRecommendedTagsForUser_Response_Tag {
  tagid?: number;
  name?: string;
  weight?: number;
}

export interface CStore_GetStorePreferences_Request {
  country_code?: string;
}

export interface CStore_GetStorePreferences_Response {
  preferences?: CStore_UserPreferences;
  tag_preferences?: CStore_UserTagPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export interface CStore_GetTagList_Request {
  language?: string;
  have_version_hash?: string;
}

export interface CStore_GetTagList_Response {
  version_hash?: string;
  tags?: CStore_GetTagList_Response_Tag[];
}

export interface CStore_GetTagList_Response_Tag {
  tagid?: number;
  name?: string;
}

export interface CStore_GetTrendingAppsAmongFriends_Request {
  num_apps?: number;
  num_top_friends?: number;
}

export interface CStore_GetTrendingAppsAmongFriends_Response {
  trending_apps?: CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData[];
}

export interface CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData {
  appid?: number;
  steamids_top_friends?: Long[];
  total_friends?: number;
}

export interface CStore_GetUserGameInterestState_Request {
  appid?: number;
  store_appid?: number;
  beta_appid?: number;
}

export interface CStore_GetUserGameInterestState_Response {
  owned?: boolean;
  wishlist?: boolean;
  ignored?: boolean;
  following?: boolean;
  in_queues?: number[];
  queues_with_skip?: number[];
  queue_items_remaining?: number[];
  queue_items_next_appid?: number[];
  temporarily_owned?: boolean;
  queues?: CStore_GetUserGameInterestState_Response_InQueue[];
  ignored_reason?: number;
  beta_status?: number;
}

export interface CStore_GetUserGameInterestState_Response_InQueue {
  type?: number;
  skipped?: boolean;
  items_remaining?: number;
  next_appid?: number;
  experimental_cohort?: number;
}

export interface CStore_GetWishlistDemoEmailStatus_Request {
  appid?: number;
  demo_appid?: number;
  allow_late_firing?: boolean;
}

export interface CStore_GetWishlistDemoEmailStatus_Response {
  can_fire?: boolean;
  time_staged?: number;
  demo_release_date?: number;
}

export interface CStore_MigratePartnerLinkTracking_Notification {
  accountid?: number;
  browserid?: Long;
  backfill_source?: number;
}

export interface CStore_PurchaseReceiptInfo {
  transactionid?: Long;
  packageid?: number;
  purchase_status?: number;
  result_detail?: number;
  transaction_time?: number;
  payment_method?: number;
  base_price?: Long;
  total_discount?: Long;
  tax?: Long;
  shipping?: Long;
  currency_code?: number;
  country_code?: string;
  error_headline?: string;
  error_string?: string;
  error_link_text?: string;
  error_link_url?: string;
  error_appid?: number;
  line_items?: CStore_PurchaseReceiptInfo_LineItem[];
}

export interface CStore_PurchaseReceiptInfo_LineItem {
  packageid?: number;
  appid?: number;
  line_item_description?: string;
}

export interface CStore_QueueWishlistDemoEmailToFire_Request {
  appid?: number;
  demo_appid?: number;
  allow_late_firing?: boolean;
}

export type CStore_QueueWishlistDemoEmailToFire_Response = Record<string, never>;

export interface CStore_RegisterCDKey_Request {
  activation_code?: string;
  purchase_platform?: number;
  is_request_from_client?: boolean;
}

export interface CStore_RegisterCDKey_Response {
  purchase_result_details?: number;
  purchase_receipt_info?: CStore_PurchaseReceiptInfo;
}

export type CStore_ReloadAllReservationPositionMessages_Notification = Record<string, never>;

export interface CStore_ReportApp_Request {
  appid?: number;
  report_type?: number;
  report?: string;
}

export type CStore_ReportApp_Response = Record<string, never>;

export interface CStore_SetReservationPositionMessage_Request {
  settings?: CReservationPositionMessage[];
}

export type CStore_SetReservationPositionMessage_Response = Record<string, never>;

export interface CStore_SkipDiscoveryQueueItem_Request {
  queue_type?: number;
  appid?: number;
  store_page_filter?: CStorePageFilter;
}

export type CStore_SkipDiscoveryQueueItem_Response = Record<string, never>;

export interface CStore_StorePreferencesChanged_Notification {
  preferences?: CStore_UserPreferences;
  tag_preferences?: CStore_UserTagPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export interface CStore_UpdatePackageReservations_Request {
  packages_to_reserve?: number[];
  packages_to_unreserve?: number[];
  country_code?: string;
}

export interface CStore_UpdatePackageReservations_Response {
  reservation_status?: CPackageReservationStatus[];
}

export interface CStore_UserPreferences {
  primary_language?: number;
  secondary_languages?: number;
  platform_windows?: boolean;
  platform_mac?: boolean;
  platform_linux?: boolean;
  timestamp_updated?: number;
  hide_store_broadcast?: boolean;
  review_score_preference?: number;
  timestamp_content_descriptor_preferences_updated?: number;
  provide_deck_feedback?: number;
  additional_languages?: string;
  game_frame_rate_reporting?: number;
}

export interface CStore_UserTagPreferences {
  tags_to_exclude?: CStore_UserTagPreferences_Tag[];
}

export interface CStore_UserTagPreferences_Tag {
  tagid?: number;
  name?: string;
  timestamp_added?: number;
}

export interface CStoreDiscoveryQueueSettings {
  os_win?: boolean;
  os_mac?: boolean;
  os_linux?: boolean;
  full_controller_support?: boolean;
  native_steam_controller?: boolean;
  include_coming_soon?: boolean;
  excluded_tagids?: number[];
  exclude_early_access?: boolean;
  exclude_videos?: boolean;
  exclude_software?: boolean;
  exclude_dlc?: boolean;
  exclude_soundtracks?: boolean;
  featured_tagids?: number[];
}

export abstract class StoreService {
  abstract DeleteReservationPositionMessage(
    request: CStore_DeleteReservationPositionMessage_Request,
  ): Promise<CStore_DeleteReservationPositionMessage_Response>;
  abstract GetAllReservationPositionMessages(
    request: CStore_GetAllReservationPositionMessages_Request,
  ): Promise<CStore_GetAllReservationPositionMessages_Response>;
  abstract GetDiscoveryQueue(
    request: CStore_GetDiscoveryQueue_Request,
  ): Promise<CStore_GetDiscoveryQueue_Response>;
  abstract GetDiscoveryQueueSettings(
    request: CStore_GetDiscoveryQueueSettings_Request,
  ): Promise<CStore_GetDiscoveryQueueSettings_Response>;
  abstract GetDiscoveryQueueSkippedApps(
    request: CStore_GetDiscoveryQueueSkippedApps_Request,
  ): Promise<CStore_GetDiscoveryQueueSkippedApps_Response>;
  abstract GetGamesFollowed(
    request: CStore_GetGamesFollowed_Request,
  ): Promise<CStore_GetGamesFollowed_Response>;
  abstract GetGamesFollowedCount(
    request: CStore_GetGamesFollowedCount_Request,
  ): Promise<CStore_GetGamesFollowedCount_Response>;
  abstract GetLocalizedNameForTags(
    request: CStore_GetLocalizedNameForTags_Request,
  ): Promise<CStore_GetLocalizedNameForTags_Response>;
  abstract GetMostPopularTags(
    request: CStore_GetMostPopularTags_Request,
  ): Promise<CStore_GetMostPopularTags_Response>;
  abstract GetRecommendedTagsForUser(
    request: CStore_GetRecommendedTagsForUser_Request,
  ): Promise<CStore_GetRecommendedTagsForUser_Response>;
  abstract GetStorePreferences(
    request: CStore_GetStorePreferences_Request,
  ): Promise<CStore_GetStorePreferences_Response>;
  abstract GetTagList(request: CStore_GetTagList_Request): Promise<CStore_GetTagList_Response>;
  abstract GetTrendingAppsAmongFriends(
    request: CStore_GetTrendingAppsAmongFriends_Request,
  ): Promise<CStore_GetTrendingAppsAmongFriends_Response>;
  abstract GetUserGameInterestState(
    request: CStore_GetUserGameInterestState_Request,
  ): Promise<CStore_GetUserGameInterestState_Response>;
  abstract GetWishlistDemoEmailStatus(
    request: CStore_GetWishlistDemoEmailStatus_Request,
  ): Promise<CStore_GetWishlistDemoEmailStatus_Response>;
  abstract MigratePartnerLinkTracking(
    request: CStore_MigratePartnerLinkTracking_Notification,
  ): Promise<void>;
  abstract QueueWishlistDemoEmailToFire(
    request: CStore_QueueWishlistDemoEmailToFire_Request,
  ): Promise<CStore_QueueWishlistDemoEmailToFire_Response>;
  abstract RegisterCDKey(
    request: CStore_RegisterCDKey_Request,
  ): Promise<CStore_RegisterCDKey_Response>;
  abstract ReloadAllReservationPositionMessages(
    request: CStore_ReloadAllReservationPositionMessages_Notification,
  ): Promise<void>;
  abstract ReportApp(request: CStore_ReportApp_Request): Promise<CStore_ReportApp_Response>;
  abstract SetCompatibilityFeedback(
    request: CSteamDeckCompatibility_SetFeedback_Request,
  ): Promise<CSteamDeckCompatibility_SetFeedback_Response>;
  abstract SetReservationPositionMessage(
    request: CStore_SetReservationPositionMessage_Request,
  ): Promise<CStore_SetReservationPositionMessage_Response>;
  abstract ShouldPromptForCompatibilityFeedback(
    request: CSteamDeckCompatibility_ShouldPrompt_Request,
  ): Promise<CSteamDeckCompatibility_ShouldPrompt_Response>;
  abstract SkipDiscoveryQueueItem(
    request: CStore_SkipDiscoveryQueueItem_Request,
  ): Promise<CStore_SkipDiscoveryQueueItem_Response>;
  abstract UpdatePackageReservations(
    request: CStore_UpdatePackageReservations_Request,
  ): Promise<CStore_UpdatePackageReservations_Response>;
}

export abstract class StoreClientService {
  abstract NotifyStorePreferencesChanged(
    request: CStore_StorePreferencesChanged_Notification,
  ): Promise<void>;
}
