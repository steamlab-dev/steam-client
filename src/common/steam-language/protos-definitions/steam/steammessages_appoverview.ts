/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EProtoAppType } from "./enums";

export const EDisplayStatus = {
  k_EDisplayStatusInvalid: 0,
  k_EDisplayStatusLaunching: 1,
  k_EDisplayStatusUninstalling: 2,
  k_EDisplayStatusInstalling: 3,
  k_EDisplayStatusRunning: 4,
  k_EDisplayStatusValidating: 5,
  k_EDisplayStatusUpdating: 6,
  k_EDisplayStatusDownloading: 7,
  k_EDisplayStatusSynchronizing: 8,
  k_EDisplayStatusReadyToInstall: 9,
  k_EDisplayStatusReadyToPreload: 10,
  k_EDisplayStatusReadyToLaunch: 11,
  k_EDisplayStatusRegionRestricted: 12,
  k_EDisplayStatusPresaleOnly: 13,
  k_EDisplayStatusInvalidPlatform: 14,
  k_EDisplayStatusPreloadComplete: 16,
  k_EDisplayStatusBorrowerLocked: 17,
  k_EDisplayStatusUpdatePaused: 18,
  k_EDisplayStatusUpdateQueued: 19,
  k_EDisplayStatusUpdateRequired: 20,
  k_EDisplayStatusUpdateDisabled: 21,
  k_EDisplayStatusDownloadPaused: 22,
  k_EDisplayStatusDownloadQueued: 23,
  k_EDisplayStatusDownloadRequired: 24,
  k_EDisplayStatusDownloadDisabled: 25,
  k_EDisplayStatusLicensePending: 26,
  k_EDisplayStatusLicenseExpired: 27,
  k_EDisplayStatusAvailForFree: 28,
  k_EDisplayStatusAvailToBorrow: 29,
  k_EDisplayStatusAvailGuestPass: 30,
  k_EDisplayStatusPurchase: 31,
  k_EDisplayStatusUnavailable: 32,
  k_EDisplayStatusNotLaunchable: 33,
  k_EDisplayStatusCloudError: 34,
  k_EDisplayStatusCloudOutOfDate: 35,
  k_EDisplayStatusTerminating: 36,
  k_EDisplayStatusOwnerLocked: 37,
  k_EDisplayStatusDownloadFailed: 38,
  k_EDisplayStatusUpdateFailed: 39,
} as const;

export type EDisplayStatus = (typeof EDisplayStatus)[keyof typeof EDisplayStatus];

export const EAppCloudStatus = {
  k_EAppCloudStatusInvalid: 0,
  k_EAppCloudStatusDisabled: 1,
  k_EAppCloudStatusUnknown: 2,
  k_EAppCloudStatusSynchronized: 3,
  k_EAppCloudStatusChecking: 4,
  k_EAppCloudStatusOutOfSync: 5,
  k_EAppCloudStatusUploading: 6,
  k_EAppCloudStatusDownloading: 7,
  k_EAppCloudStatusSyncFailed: 8,
  k_EAppCloudStatusConflict: 9,
  k_EAppCloudStatusPendingElsewhere: 10,
} as const;

export type EAppCloudStatus = (typeof EAppCloudStatus)[keyof typeof EAppCloudStatus];

export const EAppControllerSupportLevel = {
  k_EAppControllerSupportLevelNone: 0,
  k_EAppControllerSupportLevelPartial: 1,
  k_EAppControllerSupportLevelFull: 2,
} as const;

export type EAppControllerSupportLevel =
  (typeof EAppControllerSupportLevel)[keyof typeof EAppControllerSupportLevel];

export const EAppGamepadGyroTrackpadSupportLevel = {
  k_EAppGamepadGyroTrackpadSupportLevelNoGamepad: 0,
  k_EAppGamepadGyroTrackpadSupportLevelGamepad: 1,
  k_EAppGamepadGyroTrackpadSupportLevelSimultaneous: 2,
} as const;

export type EAppGamepadGyroTrackpadSupportLevel =
  (typeof EAppGamepadGyroTrackpadSupportLevel)[keyof typeof EAppGamepadGyroTrackpadSupportLevel];

export const EAppHDRSupport = {
  k_EHDRSupport_Unknown: 0,
  k_EHDRSupport_SDR: 1,
  k_EHDRSupport_HDR: 2,
  k_EHDRSupport_HDR_Broken: 3,
  k_EHDRSupport_HDR_RequiresUserAction: 4,
} as const;

export type EAppHDRSupport = (typeof EAppHDRSupport)[keyof typeof EAppHDRSupport];

export interface CAppOverview_PerClientData {
  clientid?: Long;
  client_name?: string;
  display_status?: EDisplayStatus;
  status_percentage?: number;
  active_beta?: string;
  installed?: boolean;
  streaming_to_local_client?: boolean;
  is_available_on_current_platform?: boolean;
  is_invalid_os_type?: boolean;
  playtime_left?: number;
  update_available_but_disabled_by_app?: boolean;
}

export interface CAppOverview {
  appid?: number;
  display_name?: string;
  visible_in_game_list?: boolean;
  subscribed_to?: boolean;
  sort_as?: string;
  app_type?: EProtoAppType;
  mru_index?: number;
  rt_recent_activity_time?: number;
  minutes_playtime_forever?: number;
  minutes_playtime_last_two_weeks?: number;
  rt_last_time_played?: number;
  store_tag?: number[];
  store_category?: number[];
  rt_original_release_date?: number;
  rt_steam_release_date?: number;
  icon_hash?: string;
  xbox_controller_support?: EAppControllerSupportLevel;
  vr_supported?: boolean;
  metacritic_score?: number;
  size_on_disk?: Long;
  third_party_mod?: boolean;
  icon_data?: string;
  icon_data_format?: string;
  gameid?: string;
  library_capsule_filename?: string;
  per_client_data?: CAppOverview_PerClientData[];
  most_available_clientid?: Long;
  selected_clientid?: Long;
  rt_store_asset_mtime?: number;
  rt_custom_image_mtime?: number;
  optional_parent_app_id?: number;
  owner_account_id?: number;
  review_score_with_bombs?: number;
  review_percentage_with_bombs?: number;
  review_score_without_bombs?: number;
  review_percentage_without_bombs?: number;
  library_id?: string;
  vr_only?: boolean;
  mastersub_appid?: number;
  mastersub_includedwith_logo?: string;
  site_license_site_name?: string;
  shortcut_override_appid?: number;
  rt_last_time_locally_played?: number;
  rt_purchased_time?: number;
  header_filename?: string;
  local_cache_version?: number;
  number_of_copies?: number;
  steam_hw_compat_category_packed?: number;
  album_cover_hash?: string;
  display_name_elanguage?: number;
  has_custom_sort_as?: boolean;
  bitfield_supported_languages?: Long;
}

export interface CAppOverview_Change {
  app_overview?: CAppOverview[];
  removed_appid?: number[];
  full_update?: boolean;
  update_complete?: boolean;
}
