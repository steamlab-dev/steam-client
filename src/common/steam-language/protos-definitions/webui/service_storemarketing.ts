/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export interface CStoreMarketing_GetFrontPageConfig_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CStoreMarketing_GetFrontPageConfig_Response {
  cluster?: CStorePageCluster;
}

export interface CStoreMarketing_GetItemsToFeature_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  include_spotlights?: CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter;
  include_dailydeals?: boolean;
  include_top_specials_count?: number;
  include_purchase_recommendations?: boolean;
  additional_purchase_item_ids?: StoreItemID[];
}

export interface CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter {
  location?: string;
  category?: string;
  genre_id?: number;
}

export interface CStoreMarketing_GetItemsToFeature_Response {
  spotlights?: CStoreMarketing_GetItemsToFeature_Response_Spotlight[];
  daily_deals?: StoreCapsule[];
  specials?: StoreCapsule[];
  purchase_recommendations?: StoreCapsule[];
}

export interface CStoreMarketing_GetItemsToFeature_Response_Spotlight {
  item_id?: StoreItemID;
  associated_item?: StoreItem;
  spotlight_template?: string;
  spotlight_title?: string;
  spotlight_body?: string;
  asset_url?: string;
  spotlight_link_url?: string;
  start_date?: number;
  end_date?: number;
}

export interface CStorePageCluster {
  capsule_lists?: CStorePageCluster_CapsuleList[];
  takeover?: StoreCapsule;
  assets?: CStorePageCluster_Asset[];
  custom_assets?: CStorePageCluster_Asset[];
  layout?: string;
  fields?: CStorePageCluster_Field[];
}

export interface CStorePageCluster_Asset {
  asset_name?: string;
  asset_path?: string;
}

export interface CStorePageCluster_CapsuleList {
  name?: string;
  capsules?: StoreCapsule[];
  max_visible?: number;
  max_unreleased?: number;
}

export interface CStorePageCluster_Field {
  name?: string;
  value?: string;
}

export interface StoreCapsule {
  item_id?: StoreItemID;
  item?: StoreItem;
}

export abstract class StoreMarketingService {
  abstract GetFrontPageConfig(
    request: CStoreMarketing_GetFrontPageConfig_Request,
  ): Promise<CStoreMarketing_GetFrontPageConfig_Response>;
  abstract GetItemsToFeature(
    request: CStoreMarketing_GetItemsToFeature_Request,
  ): Promise<CStoreMarketing_GetItemsToFeature_Response>;
}
