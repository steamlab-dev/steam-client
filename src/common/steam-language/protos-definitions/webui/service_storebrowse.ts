/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CStoreBrowse_GetItems_Request,
  CStoreBrowse_GetItems_Response,
  CStorePageFilter,
  StoreBrowseContext,
  StoreItemID,
} from "./common";

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

export interface CStoreBrowse_GetContentHubConfig_Request {
  context?: StoreBrowseContext;
  excluded_content_descriptorids?: number[];
}

export interface CStoreBrowse_GetContentHubConfig_Response {
  hubconfigs?: CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig[];
}

export interface CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig {
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

export interface CStoreBrowse_GetDLCForApps_Request {
  context?: StoreBrowseContext;
  store_page_filter?: CStorePageFilter;
  appids?: StoreItemID[];
  steamid?: Long;
}

export interface CStoreBrowse_GetDLCForApps_Response {
  dlc_data?: CStoreBrowse_GetDLCForApps_Response_DLCData[];
  playtime?: CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp[];
}

export interface CStoreBrowse_GetDLCForApps_Response_DLCData {
  appid?: number;
  parentappid?: number;
  release_date?: number;
  coming_soon?: boolean;
  price?: Long;
  discount?: number;
  free?: boolean;
}

export interface CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp {
  appid?: number;
  playtime?: number;
  last_played?: number;
}

export interface CStoreBrowse_GetDLCForAppsSolr_Request {
  context?: StoreBrowseContext;
  appids?: number[];
  flavor?: string;
  count?: number;
  store_page_filter?: CStorePageFilter;
}

export interface CStoreBrowse_GetDLCForAppsSolr_Response {
  dlc_lists?: CStoreBrowse_GetDLCForAppsSolr_Response_DLCList[];
}

export interface CStoreBrowse_GetDLCForAppsSolr_Response_DLCList {
  parent_appid?: number;
  dlc_appids?: number[];
}

export interface CStoreBrowse_GetHardwareItems_Request {
  packageid?: number[];
  context?: StoreBrowseContext;
}

export interface CStoreBrowse_GetHardwareItems_Response {
  details?: CHardwarePackageDetails[];
}

export interface CStoreBrowse_GetPriceStops_Request {
  country_code?: string;
  currency_code?: string;
}

export interface CStoreBrowse_GetPriceStops_Response {
  price_stops?: CStoreBrowse_GetPriceStops_Response_PriceStop[];
  currency_code?: string;
}

export interface CStoreBrowse_GetPriceStops_Response_PriceStop {
  formatted_amount?: string;
  amount_in_cents?: Long;
}

export interface CStoreBrowse_GetStoreCategories_Request {
  language?: string;
  elanguage?: number;
}

export interface CStoreBrowse_GetStoreCategories_Response {
  categories?: CStoreBrowse_GetStoreCategories_Response_Category[];
}

export interface CStoreBrowse_GetStoreCategories_Response_Category {
  categoryid?: number;
  type?: number;
  internal_name?: string;
  display_name?: string;
  image_url?: string;
  show_in_search?: boolean;
  computed?: boolean;
  edit_url?: string;
  edit_sort_order?: number;
}

export abstract class StoreBrowseService {
  abstract GetContentHubConfig(
    request: CStoreBrowse_GetContentHubConfig_Request,
  ): Promise<CStoreBrowse_GetContentHubConfig_Response>;
  abstract GetDLCForApps(
    request: CStoreBrowse_GetDLCForApps_Request,
  ): Promise<CStoreBrowse_GetDLCForApps_Response>;
  abstract GetDLCForAppsSolr(
    request: CStoreBrowse_GetDLCForAppsSolr_Request,
  ): Promise<CStoreBrowse_GetDLCForAppsSolr_Response>;
  abstract GetHardwareItems(
    request: CStoreBrowse_GetHardwareItems_Request,
  ): Promise<CStoreBrowse_GetHardwareItems_Response>;
  abstract GetItems(
    request: CStoreBrowse_GetItems_Request,
  ): Promise<CStoreBrowse_GetItems_Response>;
  abstract GetPriceStops(
    request: CStoreBrowse_GetPriceStops_Request,
  ): Promise<CStoreBrowse_GetPriceStops_Response>;
  abstract GetStoreCategories(
    request: CStoreBrowse_GetStoreCategories_Request,
  ): Promise<CStoreBrowse_GetStoreCategories_Response>;
}
