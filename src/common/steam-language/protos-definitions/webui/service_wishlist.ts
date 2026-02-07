/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CUserInterface_NavData,
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
} from "./common";

export interface CWishlist_AddToWishlist_Request {
  appid?: number;
  navdata?: CUserInterface_NavData;
}

export interface CWishlist_AddToWishlist_Response {
  wishlist_count?: number;
}

export interface CWishlist_GetWishlist_Request {
  steamid?: Long;
}

export interface CWishlist_GetWishlist_Response {
  items?: CWishlist_GetWishlist_Response_WishlistItem[];
}

export interface CWishlist_GetWishlist_Response_WishlistItem {
  appid?: number;
  priority?: number;
  date_added?: number;
}

export interface CWishlist_GetWishlistItemCount_Request {
  steamid?: Long;
}

export interface CWishlist_GetWishlistItemCount_Response {
  count?: number;
}

export interface CWishlist_GetWishlistItemsOnSale_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CWishlist_GetWishlistItemsOnSale_Response {
  items?: CWishlist_GetWishlistItemsOnSale_Response_WishlistItem[];
  total_items_on_sale?: number;
}

export interface CWishlist_GetWishlistItemsOnSale_Response_WishlistItem {
  appid?: number;
  store_item?: StoreItem;
}

export interface CWishlist_GetWishlistSortedFiltered_Request {
  steamid?: Long;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  sort_order?: number;
  filters?: CWishlistFilters;
  start_index?: number;
  page_size?: number;
}

export interface CWishlist_GetWishlistSortedFiltered_Response {
  items?: CWishlist_GetWishlistSortedFiltered_Response_WishlistItem[];
}

export interface CWishlist_GetWishlistSortedFiltered_Response_WishlistItem {
  appid?: number;
  priority?: number;
  date_added?: number;
  store_item?: StoreItem;
  category_ids?: Long[];
}

export interface CWishlist_RemoveFromWishlist_Request {
  appid?: number;
}

export interface CWishlist_RemoveFromWishlist_Response {
  wishlist_count?: number;
}

export interface CWishlistFilters {
  macos_only?: boolean;
  steamos_linux_only?: boolean;
  only_games?: boolean;
  only_software?: boolean;
  only_dlc?: boolean;
  only_free?: boolean;
  max_price_in_cents?: Long;
  min_discount_percent?: number;
  exclude_types?: CWishlistFilters_ExcludeTypeFilters;
  steam_deck_filters?: CWishlistFilters_SteamDeckFilters;
  tagids_must_match?: number[];
  excluded_content_descriptors?: number[];
  category_ids?: Long[];
}

export interface CWishlistFilters_ExcludeTypeFilters {
  exclude_early_access?: boolean;
  exclude_coming_soon?: boolean;
  exclude_vr_only?: boolean;
}

export interface CWishlistFilters_SteamDeckFilters {
  include_verified?: boolean;
  include_playable?: boolean;
}

export abstract class WishlistService {
  abstract AddToWishlist(
    request: CWishlist_AddToWishlist_Request,
  ): Promise<CWishlist_AddToWishlist_Response>;
  abstract GetWishlist(
    request: CWishlist_GetWishlist_Request,
  ): Promise<CWishlist_GetWishlist_Response>;
  abstract GetWishlistItemCount(
    request: CWishlist_GetWishlistItemCount_Request,
  ): Promise<CWishlist_GetWishlistItemCount_Response>;
  abstract GetWishlistItemsOnSale(
    request: CWishlist_GetWishlistItemsOnSale_Request,
  ): Promise<CWishlist_GetWishlistItemsOnSale_Response>;
  abstract GetWishlistSortedFiltered(
    request: CWishlist_GetWishlistSortedFiltered_Request,
  ): Promise<CWishlist_GetWishlistSortedFiltered_Response>;
  abstract RemoveFromWishlist(
    request: CWishlist_RemoveFromWishlist_Request,
  ): Promise<CWishlist_RemoveFromWishlist_Response>;
}
