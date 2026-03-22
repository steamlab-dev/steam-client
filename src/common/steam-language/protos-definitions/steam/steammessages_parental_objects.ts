/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface ParentalApp {
  appid?: number;
  is_allowed?: boolean;
}

export interface ParentalPlaytimeDay {
  allowed_time_windows?: bigint;
  allowed_daily_minutes?: number;
}

export interface ParentalPlaytimeRestrictions {
  apply_playtime_restrictions?: boolean;
  playtime_days?: ParentalPlaytimeDay[];
}

export interface ParentalTemporaryPlaytimeRestrictions {
  restrictions?: ParentalPlaytimeDay;
  rtime_expires?: number;
}

export interface ParentalSettings {
  steamid?: bigint;
  applist_base_id?: number;
  applist_base_description?: string;
  applist_base?: ParentalApp[];
  applist_custom?: ParentalApp[];
  passwordhashtype?: number;
  salt?: Buffer;
  passwordhash?: Buffer;
  is_enabled?: boolean;
  enabled_features?: number;
  recovery_email?: string;
  is_site_license_lock?: boolean;
  temporary_enabled_features?: number;
  rtime_temporary_feature_expiration?: number;
  playtime_restrictions?: ParentalPlaytimeRestrictions;
  temporary_playtime_restrictions?: ParentalTemporaryPlaytimeRestrictions;
  excluded_store_content_descriptors?: number[];
  excluded_community_content_descriptors?: number[];
  utility_appids?: number[];
}

export interface ParentalFeatureRequest {
  requestid?: bigint;
  family_groupid?: bigint;
  steamid?: bigint;
  features?: number;
  time_requested?: number;
  approved?: boolean;
  steamid_responder?: bigint;
  time_responded?: number;
}

export interface ParentalPlaytimeRequest {
  requestid?: bigint;
  family_groupid?: bigint;
  steamid?: bigint;
  current_playtime_restrictions?: ParentalPlaytimeDay;
  time_expires?: number;
  time_requested?: number;
  approved?: boolean;
  steamid_responder?: bigint;
  time_responded?: number;
  restrictions_approved?: ParentalTemporaryPlaytimeRestrictions;
}
