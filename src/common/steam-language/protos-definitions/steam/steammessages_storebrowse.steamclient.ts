/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CStorePageFilter } from "./contenthubs";
import type { ESteamDeckCompatibilityCategory, ESteamOSCompatibilityCategory } from "./enums";
import type { EContentDescriptorID } from "./enums_productinfo";

export const EStoreItemType = {
  k_EStoreItemType_App: 0,
  k_EStoreItemType_Package: 1,
  k_EStoreItemType_Bundle: 2,
  k_EStoreItemType_Mtx: 3,
  k_EStoreItemType_Tag: 4,
  k_EStoreItemType_Creator: 5,
  k_EStoreItemType_HubCategory: 6,
} as const;

export type EStoreItemType = (typeof EStoreItemType)[keyof typeof EStoreItemType];

export const EStoreAppType = {
  k_EStoreAppType_Game: 0,
  k_EStoreAppType_Demo: 1,
  k_EStoreAppType_Mod: 2,
  k_EStoreAppType_Movie: 3,
  k_EStoreAppType_DLC: 4,
  k_EStoreAppType_Guide: 5,
  k_EStoreAppType_Software: 6,
  k_EStoreAppType_Video: 7,
  k_EStoreAppType_Series: 8,
  k_EStoreAppType_Episode: 9,
  k_EStoreAppType_Hardware: 10,
  k_EStoreAppType_Music: 11,
  k_EStoreAppType_Beta: 12,
  k_EStoreAppType_Tool: 13,
  k_EStoreAppType_Advertising: 14,
} as const;

export type EStoreAppType = (typeof EStoreAppType)[keyof typeof EStoreAppType];

export const EUserReviewScore = {
  k_EUserReviewScore_None: 0,
  k_EUserReviewScore_OverwhelminglyNegative: 1,
  k_EUserReviewScore_VeryNegative: 2,
  k_EUserReviewScore_Negative: 3,
  k_EUserReviewScore_MostlyNegative: 4,
  k_EUserReviewScore_Mixed: 5,
  k_EUserReviewScore_MostlyPositive: 6,
  k_EUserReviewScore_Positive: 7,
  k_EUserReviewScore_VeryPositive: 8,
  k_EUserReviewScore_OverwhelminglyPositive: 9,
} as const;

export type EUserReviewScore = (typeof EUserReviewScore)[keyof typeof EUserReviewScore];

export const ETrailerCategory = {
  k_ETrailerCategory_Invalid: 0,
  k_ETrailerCategory_Gameplay: 1,
  k_ETrailerCategory_Teaser: 2,
  k_ETrailerCategory_Cinematic: 3,
  k_ETrailerCategory_Update: 4,
  k_ETrailerCategory_Accolades: 5,
  k_ETrailerCategory_Interview: 6,
} as const;

export type ETrailerCategory = (typeof ETrailerCategory)[keyof typeof ETrailerCategory];

export const EStoreBrowseFilterFailure = {
  k_EStoreBrowseFilterFailure_None: 0,
  k_EStoreBrowseFilterFailure_Redundant: 10,
  k_EStoreBrowseFilterFailure_NotPreferred: 20,
  k_EStoreBrowseFilterFailure_NotInterested: 30,
  k_EStoreBrowseFilterFailure_UnwantedContent: 40,
  k_EStoreBrowseFilterFailure_Unavailable: 50,
} as const;

export type EStoreBrowseFilterFailure =
  (typeof EStoreBrowseFilterFailure)[keyof typeof EStoreBrowseFilterFailure];

export const EStoreLinkType = {
  k_EStoreLinkType_None: 0,
  k_EStoreLinkType_YouTube: 1,
  k_EStoreLinkType_Facebook: 2,
  k_EStoreLinkType_Twitter: 3,
  k_EStoreLinkType_Twitch: 4,
  k_EStoreLinkType_Discord: 5,
  k_EStoreLinkType_QQ: 6,
  k_EStoreLinkType_VK: 7,
  k_EStoreLinkType_Bilibili: 8,
  k_EStoreLinkType_Weibo: 9,
  k_EStoreLinkType_Reddit: 10,
  k_EStoreLinkType_Instagram: 11,
  k_EStoreLinkType_Tumblr: 12,
  k_EStoreLinkType_Tieba: 13,
  k_EStoreLinkType_Tiktok: 14,
  k_EStoreLinkType_Telegram: 15,
  k_EStoreLinkType_LinkedIn: 16,
  k_EStoreLinkType_WeChat: 17,
  k_EStoreLinkType_QQLink: 18,
  k_EStoreLinkType_Douyin: 19,
  k_EStoreLinkType_Bluesky: 20,
  k_EStoreLinkType_Mastodon: 21,
  k_EStoreLinkType_Threads: 22,
  k_EStoreLinkType_QQChannel: 23,
  k_EStoreLinkType_RedNote: 24,
  k_EStoreLinkType_MAX: 25,
} as const;

export type EStoreLinkType = (typeof EStoreLinkType)[keyof typeof EStoreLinkType];

export const EStoreCategoryType = {
  k_EStoreCategoryType_Category: 0,
  k_EStoreCategoryType_SupportedPlayers: 1,
  k_EStoreCategoryType_Feature: 2,
  k_EStoreCategoryType_ControllerSupport: 3,
  k_EStoreCategoryType_CloudGaming: 4,
  k_EStoreCategoryType_MAX: 5,
} as const;

export type EStoreCategoryType = (typeof EStoreCategoryType)[keyof typeof EStoreCategoryType];

export interface StoreItemID {
  appid?: number;
  packageid?: number;
  bundleid?: number;
  tagid?: number;
  creatorid?: number;
  hubcategoryid?: number;
}

export interface StoreBrowseContext {
  language?: string;
  elanguage?: number;
  country_code?: string;
  steam_realm?: number;
}

export interface StoreBrowseItemDataRequest {
  include_assets?: boolean;
  include_release?: boolean;
  include_platforms?: boolean;
  include_all_purchase_options?: boolean;
  include_screenshots?: boolean;
  include_trailers?: boolean;
  include_ratings?: boolean;
  include_tag_count?: number;
  include_reviews?: boolean;
  include_basic_info?: boolean;
  include_supported_languages?: boolean;
  include_full_description?: boolean;
  include_included_items?: boolean;
  included_item_data_request?: StoreBrowseItemDataRequest;
  include_assets_without_overrides?: boolean;
  apply_user_filters?: boolean;
  include_links?: boolean;
}

export interface CStoreBrowse_GetItems_Request {
  ids?: StoreItemID[];
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface StoreItem {
  item_type?: EStoreItemType;
  id?: number;
  success?: number;
  visible?: boolean;
  unvailable_for_country_restriction?: boolean;
  name?: string;
  store_url_path?: string;
  appid?: number;
  type?: EStoreAppType;
  included_types?: EStoreAppType[];
  included_appids?: number[];
  is_free?: boolean;
  is_early_access?: boolean;
  related_items?: StoreItem.RelatedItems;
  included_items?: StoreItem.IncludedItems;
  content_descriptorids?: EContentDescriptorID[];
  tagids?: number[];
  categories?: StoreItem.Categories;
  reviews?: StoreItem.Reviews;
  basic_info?: StoreItem.BasicInfo;
  tags?: StoreItem.Tag[];
  assets?: StoreItem.Assets;
  release?: StoreItem.ReleaseInfo;
  platforms?: StoreItem.Platforms;
  game_rating?: StoreGameRating;
  is_coming_soon?: boolean;
  best_purchase_option?: StoreItem.PurchaseOption;
  purchase_options?: StoreItem.PurchaseOption[];
  accessories?: StoreItem.PurchaseOption[];
  self_purchase_option?: StoreItem.PurchaseOption;
  invalid_purchase_options?: StoreItem.PurchaseOption[];
  screenshots?: StoreItem.Screenshots;
  trailers?: StoreItem.Trailers;
  supported_languages?: StoreItem.SupportedLanguage[];
  store_url_path_override?: string;
  free_weekend?: StoreItem.FreeWeekend;
  unlisted?: boolean;
  game_count?: number;
  internal_name?: string;
  full_description?: string;
  is_free_temporarily?: boolean;
  assets_without_overrides?: StoreItem.Assets;
  user_filter_failure?: StoreBrowseFilterFailure;
  links?: StoreItem.Link[];
}

export namespace StoreItem {
  export interface RelatedItems {
    parent_appid?: number;
    demo_appid?: number[];
    standalone_demo_appid?: number[];
  }

  export interface IncludedItems {
    included_apps?: StoreItem[];
    included_packages?: StoreItem[];
  }

  export interface Categories {
    supported_player_categoryids?: number[];
    feature_categoryids?: number[];
    controller_categoryids?: number[];
  }

  export type Reviews = Record<string, never>;

  export namespace Reviews {
    export interface StoreReviewSummary {
      review_count?: number;
      percent_positive?: number;
      review_score?: EUserReviewScore;
      review_score_label?: string;
    }
  }
  export interface BasicInfo {
    short_description?: string;
    capsule_headline?: string;
  }

  export namespace BasicInfo {
    export interface CreatorHomeLink {
      name?: string;
      creator_clan_account_id?: number;
    }
  }
  export interface Tag {
    tagid?: number;
    weight?: number;
  }

  export interface Assets {
    asset_url_format?: string;
    main_capsule?: string;
    small_capsule?: string;
    header?: string;
    package_header?: string;
    page_background?: string;
    hero_capsule?: string;
    hero_capsule_2x?: string;
    library_capsule?: string;
    library_capsule_2x?: string;
    library_hero?: string;
    library_hero_2x?: string;
    community_icon?: string;
    clan_avatar?: string;
    page_background_path?: string;
    raw_page_background?: string;
  }

  export interface ReleaseInfo {
    steam_release_date?: number;
    original_release_date?: number;
    original_steam_release_date?: number;
    is_coming_soon?: boolean;
    is_preload?: boolean;
    custom_release_date_message?: string;
    is_abridged_release_date?: boolean;
    coming_soon_display?: string;
    is_early_access?: boolean;
    mac_release_date?: number;
    linux_release_date?: number;
    limited_launch_active?: boolean;
  }

  export interface Platforms {
    windows?: boolean;
    mac?: boolean;
    steamos_linux?: boolean;
    steam_deck_compat_category?: ESteamDeckCompatibilityCategory;
    steam_os_compat_category?: ESteamOSCompatibilityCategory;
  }

  export namespace Platforms {
    export interface VRSupport {
      vrhmd?: boolean;
      vrhmd_only?: boolean;
      htc_vive?: boolean;
      oculus_rift?: boolean;
      windows_mr?: boolean;
      valve_index?: boolean;
    }
  }
  export interface PurchaseOption {
    packageid?: number;
    bundleid?: number;
    purchase_option_name?: string;
    final_price_in_cents?: Long;
    original_price_in_cents?: Long;
    formatted_final_price?: string;
    formatted_original_price?: string;
    discount_pct?: number;
    bundle_discount_pct?: number;
    is_free_to_keep?: boolean;
    price_before_bundle_discount?: Long;
    formatted_price_before_bundle_discount?: string;
    user_can_purchase_as_gift?: boolean;
    is_commercial_license?: boolean;
    should_suppress_discount_pct?: boolean;
    hide_discount_pct_for_compliance?: boolean;
    included_game_count?: number;
    lowest_recent_price_in_cents?: Long;
    requires_shipping?: boolean;
    free_to_keep_ends?: number;
    must_purchase_as_set?: boolean;
  }

  export namespace PurchaseOption {
    export interface Discount {
      discount_amount?: Long;
      discount_description?: string;
      discount_end_date?: number;
    }

    export interface RecurrenceInfo {
      packageid?: number;
      billing_agreement_type?: number;
      renewal_time_unit?: number;
      renewal_time_period?: number;
      renewal_price_in_cents?: Long;
      formatted_renewal_price?: string;
    }
  }
  export type Screenshots = Record<string, never>;

  export namespace Screenshots {
    export interface Screenshot {
      filename?: string;
      ordinal?: number;
    }
  }
  export type Trailers = Record<string, never>;

  export namespace Trailers {
    export interface VideoSource {
      filename?: string;
      type?: string;
    }

    export interface AdaptiveTrailer {
      cdn_path?: string;
      encoding?: string;
    }

    export interface Trailer {
      trailer_name?: string;
      trailer_url_format?: string;
      trailer_category?: ETrailerCategory;
      screenshot_medium?: string;
      screenshot_full?: string;
      trailer_base_id?: number;
      all_ages?: boolean;
    }
  }
  export interface SupportedLanguage {
    elanguage?: number;
    eadditionallanguage?: number;
    supported?: boolean;
    full_audio?: boolean;
    subtitles?: boolean;
  }

  export interface FreeWeekend {
    start_time?: number;
    end_time?: number;
    text?: string;
  }

  export interface Link {
    link_type?: EStoreLinkType;
    url?: string;
    text?: string;
  }
}

export interface StoreGameRating {
  type?: string;
  rating?: string;
  descriptors?: string[];
  interactive_elements?: string;
  required_age?: number;
  use_age_gate?: boolean;
  image_url?: string;
  image_target?: string;
}

export interface StoreBrowseFilterFailure {
  filter_failure?: EStoreBrowseFilterFailure;
  already_owned?: boolean;
  on_wishlist?: boolean;
  ignored?: boolean;
  not_in_users_language?: boolean;
  not_on_users_platform?: boolean;
  demo_for_owned_game?: boolean;
  dlc_for_unowned_game?: boolean;
  nonpreferred_product_type?: boolean;
  excluded_tagids?: number[];
  excluded_content_descriptorids?: EContentDescriptorID[];
}

export interface CStoreBrowse_GetItems_Response {
  store_items?: StoreItem[];
}

export interface CStoreBrowse_GetStoreCategories_Request {
  language?: string;
  elanguage?: number;
}

export interface CStoreBrowse_GetStoreCategories_Response {
  categories?: CStoreBrowse_GetStoreCategories_Response.Category[];
}

export namespace CStoreBrowse_GetStoreCategories_Response {
  export interface Category {
    categoryid?: number;
    type?: EStoreCategoryType;
    internal_name?: string;
    display_name?: string;
    image_url?: string;
    show_in_search?: boolean;
    computed?: boolean;
    edit_url?: string;
    edit_sort_order?: number;
  }
}

export interface CStoreBrowse_GetContentHubConfig_Request {
  context?: StoreBrowseContext;
  excluded_content_descriptorids?: EContentDescriptorID[];
}

export interface CStoreBrowse_GetContentHubConfig_Response {
  hubconfigs?: CStoreBrowse_GetContentHubConfig_Response.ContentHubConfig[];
}

export namespace CStoreBrowse_GetContentHubConfig_Response {
  export interface ContentHubConfig {
    hubcategoryid?: number;
    type?: string;
    handle?: string;
    display_name?: string;
    url_path?: string;
    replaces_tags?: number[];
    must_have_tags?: number[];
    any_one_of_tags?: number[];
    must_not_have_tags?: number[];
    hub_description?: string;
  }
}

export interface CStoreBrowse_GetPriceStops_Request {
  country_code?: string;
  currency_code?: string;
}

export interface CStoreBrowse_GetPriceStops_Response {
  price_stops?: CStoreBrowse_GetPriceStops_Response.PriceStop[];
  currency_code?: string;
}

export namespace CStoreBrowse_GetPriceStops_Response {
  export interface PriceStop {
    formatted_amount?: string;
    amount_in_cents?: Long;
  }
}

export interface CStoreBrowse_GetDLCForApps_Request {
  context?: StoreBrowseContext;
  store_page_filter?: CStorePageFilter;
  appids?: StoreItemID[];
  steamid?: Long;
}

export interface CStoreBrowse_GetDLCForApps_Response {
  dlc_data?: CStoreBrowse_GetDLCForApps_Response.DLCData[];
  playtime?: CStoreBrowse_GetDLCForApps_Response.PlaytimeForApp[];
}

export namespace CStoreBrowse_GetDLCForApps_Response {
  export interface DLCData {
    appid?: number;
    parentappid?: number;
    release_date?: number;
    coming_soon?: boolean;
    price?: Long;
    discount?: number;
    free?: boolean;
  }

  export interface PlaytimeForApp {
    appid?: number;
    playtime?: number;
    last_played?: number;
  }
}

export interface CStoreBrowse_GetDLCForAppsSolr_Request {
  context?: StoreBrowseContext;
  appids?: number[];
  flavor?: string;
  count?: number;
  store_page_filter?: CStorePageFilter;
}

export interface CStoreBrowse_GetDLCForAppsSolr_Response {
  dlc_lists?: CStoreBrowse_GetDLCForAppsSolr_Response.DLCList[];
}

export namespace CStoreBrowse_GetDLCForAppsSolr_Response {
  export interface DLCList {
    parent_appid?: number;
    dlc_appids?: number[];
  }
}

export interface CStoreBrowse_GetHardwareItems_Request {
  packageid?: number[];
  context?: StoreBrowseContext;
}

export interface CHardwarePackageDetails {
  packageid?: number;
  inventory_available?: boolean;
  high_pending_orders?: boolean;
  account_restricted_from_purchasing?: boolean;
  requires_reservation?: boolean;
  rtime_estimated_notification?: number;
  notificaton_token?: string;
  reservation_state?: number;
  expired?: boolean;
  time_expires?: number;
  time_reserved?: number;
  allow_quantity_purchase?: boolean;
  max_quantity_per_purchase?: number;
  allow_purchase_in_country?: boolean;
  estimated_delivery_soonest_business_days?: number;
  estimated_delivery_latest_business_days?: number;
}

export interface CStoreBrowse_GetHardwareItems_Response {
  details?: CHardwarePackageDetails[];
}

export abstract class StoreBrowseService {
  abstract GetItems(
    request: CStoreBrowse_GetItems_Request,
  ): Promise<CStoreBrowse_GetItems_Response>;
  abstract GetStoreCategories(
    request: CStoreBrowse_GetStoreCategories_Request,
  ): Promise<CStoreBrowse_GetStoreCategories_Response>;
  abstract GetContentHubConfig(
    request: CStoreBrowse_GetContentHubConfig_Request,
  ): Promise<CStoreBrowse_GetContentHubConfig_Response>;
  abstract GetPriceStops(
    request: CStoreBrowse_GetPriceStops_Request,
  ): Promise<CStoreBrowse_GetPriceStops_Response>;
  abstract GetDLCForApps(
    request: CStoreBrowse_GetDLCForApps_Request,
  ): Promise<CStoreBrowse_GetDLCForApps_Response>;
  abstract GetDLCForAppsSolr(
    request: CStoreBrowse_GetDLCForAppsSolr_Request,
  ): Promise<CStoreBrowse_GetDLCForAppsSolr_Response>;
  abstract GetHardwareItems(
    request: CStoreBrowse_GetHardwareItems_Request,
  ): Promise<CStoreBrowse_GetHardwareItems_Response>;
}
