/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CStorePageFilter } from "./contenthubs";
import type {
  EGameFrameRateReportingPreference,
  EProvideDeckFeedbackPreference,
  ESteamDeckCompatibilityFeedback,
} from "./enums";
import type {
  CPackageReservationStatus,
  UserContentDescriptorPreferences,
} from "./steammessages_base";
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
} from "./steammessages_storebrowse.steamclient";

export const EStoreDiscoveryQueueType = {
  k_EStoreDiscoveryQueueTypeNew: 0,
  k_EStoreDiscoveryQueueTypeComingSoon: 1,
  k_EStoreDiscoveryQueueTypeRecommended: 2,
  k_EStoreDiscoveryQueueTypeEveryNewRelease: 3,
  k_EStoreDiscoveryQueueTypeMLRecommender: 5,
  k_EStoreDiscoveryQueueTypeWishlistOnSale: 6,
  k_EStoreDiscoveryQueueTypeDLC: 7,
  k_EStoreDiscoveryQueueTypeDLCOnSale: 8,
  k_EStoreDiscoveryQueueTypeRecommendedComingSoon: 9,
  k_EStoreDiscoveryQueueTypeRecommendedFree: 10,
  k_EStoreDiscoveryQueueTypeRecommendedOnSale: 11,
  k_EStoreDiscoveryQueueTypeRecommendedDemos: 12,
  k_EStoreDiscoveryQueueTypeDLCNewReleases: 13,
  k_EStoreDiscoveryQueueTypeDLCTopSellers: 14,
  k_EStoreDiscoveryQueueTypeDLCUpcoming: 15,
  k_EStoreDiscoveryQueueTypeMAX: 16,
} as const;

export type EStoreDiscoveryQueueType =
  (typeof EStoreDiscoveryQueueType)[keyof typeof EStoreDiscoveryQueueType];

export const EPlaytestStatus = {
  k_ETesterStatusNone: 0,
  k_ETesterStatusPending: 1,
  k_ETesterStatusInvited: 2,
  k_ETesterStatusGranted: 3,
  k_ETesterStatusExpired: 4,
} as const;

export type EPlaytestStatus = (typeof EPlaytestStatus)[keyof typeof EPlaytestStatus];

export const EAppReportType = {
  k_EAppReportType_Invalid: 0,
  k_EAppReportType_Scam: 1,
  k_EAppReportType_Malware: 2,
  k_EAppReportType_HateSpeech: 3,
  k_EAppReportType_Pornography: 4,
  k_EAppReportType_NonLabeledAdultContent: 5,
  k_EAppReportType_Libelous: 6,
  k_EAppReportType_Offensive: 7,
  k_EAppReportType_ExploitsChildren: 8,
  k_EAppReportType_MtxWithNonSteamWalletPaymentMethods: 9,
  k_EAppReportType_CopyrightViolation: 10,
  k_EAppReportType_ViolatesLaws: 11,
  k_EAppReportType_Other: 12,
  k_EAppReportType_Broken: 13,
  k_EAppReportType_AIContentReport: 14,
} as const;

export type EAppReportType = (typeof EAppReportType)[keyof typeof EAppReportType];

export const EUserReviewScorePreference = {
  k_EUserReviewScorePreference_Unset: 0,
  k_EUserReviewScorePreference_IncludeAll: 1,
  k_EUserReviewScorePreference_ExcludeBombs: 2,
} as const;

export type EUserReviewScorePreference =
  (typeof EUserReviewScorePreference)[keyof typeof EUserReviewScorePreference];

export const EPartnerLinkTrackingBackfillSource = {
  k_EPartnerLinkTrackingBackfillSource_None: 0,
  k_EPartnerLinkTrackingBackfillSource_Web: 1,
  k_EPartnerLinkTrackingBackfillSource_Mobile: 2,
  k_EPartnerLinkTrackingBackfillSource_Desktop: 3,
} as const;

export type EPartnerLinkTrackingBackfillSource =
  (typeof EPartnerLinkTrackingBackfillSource)[keyof typeof EPartnerLinkTrackingBackfillSource];

export interface CStore_RegisterCDKey_Request {
  activation_code?: string;
  purchase_platform?: number;
  is_request_from_client?: boolean;
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
  line_items?: CStore_PurchaseReceiptInfo.LineItem[];
}

export namespace CStore_PurchaseReceiptInfo {
  export interface LineItem {
    packageid?: number;
    appid?: number;
    line_item_description?: string;
  }
}

export interface CStore_RegisterCDKey_Response {
  purchase_result_details?: number;
  purchase_receipt_info?: CStore_PurchaseReceiptInfo;
}

export interface CStore_GetRecommendedTagsForUser_Request {
  language?: string;
  country_code?: string;
  favor_rarer_tags?: boolean;
}

export interface CStore_GetRecommendedTagsForUser_Response {
  tags?: CStore_GetRecommendedTagsForUser_Response.Tag[];
}

export namespace CStore_GetRecommendedTagsForUser_Response {
  export interface Tag {
    tagid?: number;
    name?: string;
    weight?: number;
  }
}

export interface CStore_GetMostPopularTags_Request {
  language?: string;
}

export interface CStore_GetMostPopularTags_Response {
  tags?: CStore_GetMostPopularTags_Response.Tag[];
}

export namespace CStore_GetMostPopularTags_Response {
  export interface Tag {
    tagid?: number;
    name?: string;
  }
}

export interface CStore_GetLocalizedNameForTags_Request {
  language?: string;
  tagids?: number[];
}

export interface CStore_GetLocalizedNameForTags_Response {
  tags?: CStore_GetLocalizedNameForTags_Response.Tag[];
}

export namespace CStore_GetLocalizedNameForTags_Response {
  export interface Tag {
    tagid?: number;
    english_name?: string;
    name?: string;
    normalized_name?: string;
  }
}

export interface CStore_GetTagList_Request {
  language?: string;
  have_version_hash?: string;
}

export interface CStore_GetTagList_Response {
  version_hash?: string;
  tags?: CStore_GetTagList_Response.Tag[];
}

export namespace CStore_GetTagList_Response {
  export interface Tag {
    tagid?: number;
    name?: string;
  }
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

export interface CStore_GetDiscoveryQueue_Request {
  queue_type?: EStoreDiscoveryQueueType;
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
  queue_type?: EStoreDiscoveryQueueType;
  store_page_filter?: CStorePageFilter;
}

export interface CStore_GetDiscoveryQueueSettings_Response {
  country_code?: string;
  settings?: CStoreDiscoveryQueueSettings;
}

export interface CStore_SkipDiscoveryQueueItem_Request {
  queue_type?: EStoreDiscoveryQueueType;
  appid?: number;
  store_page_filter?: CStorePageFilter;
}

export type CStore_SkipDiscoveryQueueItem_Response = Record<string, never>;

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
  in_queues?: EStoreDiscoveryQueueType[];
  queues_with_skip?: EStoreDiscoveryQueueType[];
  queue_items_remaining?: number[];
  queue_items_next_appid?: number[];
  temporarily_owned?: boolean;
  queues?: CStore_GetUserGameInterestState_Response.InQueue[];
  ignored_reason?: number;
  beta_status?: EPlaytestStatus;
}

export namespace CStore_GetUserGameInterestState_Response {
  export interface InQueue {
    type?: EStoreDiscoveryQueueType;
    skipped?: boolean;
    items_remaining?: number;
    next_appid?: number;
    experimental_cohort?: number;
  }
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

export interface CStore_GetDiscoveryQueueSkippedApps_Request {
  steamid?: Long;
  queue_type?: EStoreDiscoveryQueueType;
  store_page_filter?: CStorePageFilter;
}

export interface CStore_GetDiscoveryQueueSkippedApps_Response {
  appids?: number[];
}

export interface CStore_ReportApp_Request {
  appid?: number;
  report_type?: EAppReportType;
  report?: string;
}

export type CStore_ReportApp_Response = Record<string, never>;

export interface CStore_GetStorePreferences_Request {
  country_code?: string;
}

export interface CStore_UserPreferences {
  primary_language?: number;
  secondary_languages?: number;
  platform_windows?: boolean;
  platform_mac?: boolean;
  platform_linux?: boolean;
  timestamp_updated?: number;
  hide_store_broadcast?: boolean;
  review_score_preference?: EUserReviewScorePreference;
  timestamp_content_descriptor_preferences_updated?: number;
  provide_deck_feedback?: EProvideDeckFeedbackPreference;
  additional_languages?: string;
  game_frame_rate_reporting?: EGameFrameRateReportingPreference;
}

export interface CStore_UserTagPreferences {
  tags_to_exclude?: CStore_UserTagPreferences.Tag[];
}

export namespace CStore_UserTagPreferences {
  export interface Tag {
    tagid?: number;
    name?: string;
    timestamp_added?: number;
  }
}

export interface CStore_GetStorePreferences_Response {
  preferences?: CStore_UserPreferences;
  tag_preferences?: CStore_UserTagPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export interface CStore_GetTrendingAppsAmongFriends_Request {
  num_apps?: number;
  num_top_friends?: number;
}

export interface CStore_GetTrendingAppsAmongFriends_Response {
  trending_apps?: CStore_GetTrendingAppsAmongFriends_Response.TrendingAppData[];
}

export namespace CStore_GetTrendingAppsAmongFriends_Response {
  export interface TrendingAppData {
    appid?: number;
    steamids_top_friends?: Long[];
    total_friends?: number;
  }
}

export interface CStore_MigratePartnerLinkTracking_Notification {
  accountid?: number;
  browserid?: Long;
  backfill_source?: EPartnerLinkTrackingBackfillSource;
}

export interface CStore_UpdatePackageReservations_Request {
  packages_to_reserve?: number[];
  packages_to_unreserve?: number[];
  country_code?: string;
}

export interface CStore_UpdatePackageReservations_Response {
  reservation_status?: CPackageReservationStatus[];
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

export interface CStore_QueueWishlistDemoEmailToFire_Request {
  appid?: number;
  demo_appid?: number;
  allow_late_firing?: boolean;
}

export type CStore_QueueWishlistDemoEmailToFire_Response = Record<string, never>;

export interface CReservationPositionMessage {
  edistributor?: number;
  product_identifier?: string;
  start_queue_position?: number;
  rtime_estimated_notification?: number;
  localization_token?: string;
  accountid?: number;
  rtime_created?: number;
}

export interface CStore_SetReservationPositionMessage_Request {
  settings?: CReservationPositionMessage[];
}

export type CStore_SetReservationPositionMessage_Response = Record<string, never>;

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

export type CStore_ReloadAllReservationPositionMessages_Notification = Record<string, never>;

export interface CSteamDeckCompatibility_SetFeedback_Request {
  appid?: number;
  feedback?: ESteamDeckCompatibilityFeedback;
}

export type CSteamDeckCompatibility_SetFeedback_Response = Record<string, never>;

export interface CSteamDeckCompatibility_ShouldPrompt_Request {
  appid?: number;
}

export interface CSteamDeckCompatibility_ShouldPrompt_Response {
  prompt?: boolean;
  feedback_eligible?: boolean;
  existing_feedback?: ESteamDeckCompatibilityFeedback;
}

export interface CStore_StorePreferencesChanged_Notification {
  preferences?: CStore_UserPreferences;
  tag_preferences?: CStore_UserTagPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export abstract class StoreService {
  abstract RegisterCDKey(
    request: CStore_RegisterCDKey_Request,
  ): Promise<CStore_RegisterCDKey_Response>;
  abstract GetRecommendedTagsForUser(
    request: CStore_GetRecommendedTagsForUser_Request,
  ): Promise<CStore_GetRecommendedTagsForUser_Response>;
  abstract GetMostPopularTags(
    request: CStore_GetMostPopularTags_Request,
  ): Promise<CStore_GetMostPopularTags_Response>;
  abstract GetLocalizedNameForTags(
    request: CStore_GetLocalizedNameForTags_Request,
  ): Promise<CStore_GetLocalizedNameForTags_Response>;
  abstract GetTagList(request: CStore_GetTagList_Request): Promise<CStore_GetTagList_Response>;
  abstract GetDiscoveryQueue(
    request: CStore_GetDiscoveryQueue_Request,
  ): Promise<CStore_GetDiscoveryQueue_Response>;
  abstract GetDiscoveryQueueSettings(
    request: CStore_GetDiscoveryQueueSettings_Request,
  ): Promise<CStore_GetDiscoveryQueueSettings_Response>;
  abstract SkipDiscoveryQueueItem(
    request: CStore_SkipDiscoveryQueueItem_Request,
  ): Promise<CStore_SkipDiscoveryQueueItem_Response>;
  abstract GetUserGameInterestState(
    request: CStore_GetUserGameInterestState_Request,
  ): Promise<CStore_GetUserGameInterestState_Response>;
  abstract GetGamesFollowed(
    request: CStore_GetGamesFollowed_Request,
  ): Promise<CStore_GetGamesFollowed_Response>;
  abstract GetGamesFollowedCount(
    request: CStore_GetGamesFollowedCount_Request,
  ): Promise<CStore_GetGamesFollowedCount_Response>;
  abstract GetDiscoveryQueueSkippedApps(
    request: CStore_GetDiscoveryQueueSkippedApps_Request,
  ): Promise<CStore_GetDiscoveryQueueSkippedApps_Response>;
  abstract ReportApp(request: CStore_ReportApp_Request): Promise<CStore_ReportApp_Response>;
  abstract GetStorePreferences(
    request: CStore_GetStorePreferences_Request,
  ): Promise<CStore_GetStorePreferences_Response>;
  abstract GetTrendingAppsAmongFriends(
    request: CStore_GetTrendingAppsAmongFriends_Request,
  ): Promise<CStore_GetTrendingAppsAmongFriends_Response>;
  abstract MigratePartnerLinkTracking(
    request: CStore_MigratePartnerLinkTracking_Notification,
  ): Promise<void>;
  abstract UpdatePackageReservations(
    request: CStore_UpdatePackageReservations_Request,
  ): Promise<CStore_UpdatePackageReservations_Response>;
  abstract GetWishlistDemoEmailStatus(
    request: CStore_GetWishlistDemoEmailStatus_Request,
  ): Promise<CStore_GetWishlistDemoEmailStatus_Response>;
  abstract QueueWishlistDemoEmailToFire(
    request: CStore_QueueWishlistDemoEmailToFire_Request,
  ): Promise<CStore_QueueWishlistDemoEmailToFire_Response>;
  abstract SetReservationPositionMessage(
    request: CStore_SetReservationPositionMessage_Request,
  ): Promise<CStore_SetReservationPositionMessage_Response>;
  abstract DeleteReservationPositionMessage(
    request: CStore_DeleteReservationPositionMessage_Request,
  ): Promise<CStore_DeleteReservationPositionMessage_Response>;
  abstract GetAllReservationPositionMessages(
    request: CStore_GetAllReservationPositionMessages_Request,
  ): Promise<CStore_GetAllReservationPositionMessages_Response>;
  abstract ReloadAllReservationPositionMessages(
    request: CStore_ReloadAllReservationPositionMessages_Notification,
  ): Promise<void>;
  abstract SetCompatibilityFeedback(
    request: CSteamDeckCompatibility_SetFeedback_Request,
  ): Promise<CSteamDeckCompatibility_SetFeedback_Response>;
  abstract ShouldPromptForCompatibilityFeedback(
    request: CSteamDeckCompatibility_ShouldPrompt_Request,
  ): Promise<CSteamDeckCompatibility_ShouldPrompt_Response>;
}

export abstract class StoreClientService {
  abstract NotifyStorePreferencesChanged(
    request: CStore_StorePreferencesChanged_Notification,
  ): Promise<void>;
}
