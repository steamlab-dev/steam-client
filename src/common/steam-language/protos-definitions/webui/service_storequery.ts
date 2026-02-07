/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CStorePageFilter,
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export interface CStoreQuery_GetItemByUserCombinedTagsPriority_Request {
  sort?: number;
  max_items?: number;
  randomize?: boolean;
  include_packages?: boolean;
  include_bundles?: boolean;
  filters?: CStorePageFilter;
  context?: StoreBrowseContext;
}

export interface CStoreQuery_GetItemByUserCombinedTagsPriority_Response {
  tagid?: number[];
  store_item_ids?: StoreItemID[];
  tag_name?: string[];
}

export interface CStoreQuery_GetItemsByUserRecommendedTags_Request {
  filters?: CStorePageFilter;
  context?: StoreBrowseContext;
  sections?: CStoreQuery_GetItemsByUserRecommendedTags_Request_Section[];
}

export interface CStoreQuery_GetItemsByUserRecommendedTags_Request_Section {
  sort?: number;
  min_items?: number;
  randomize?: boolean;
  include_packages?: boolean;
  include_bundles?: boolean;
}

export interface CStoreQuery_GetItemsByUserRecommendedTags_Response {
  sections?: CStoreQuery_GetItemsByUserRecommendedTags_Response_Section[];
}

export interface CStoreQuery_GetItemsByUserRecommendedTags_Response_Section {
  tagid?: number;
  store_item_ids?: StoreItemID[];
  tag_name?: string;
}

export interface CStoreQuery_MoreLikeThis_Request {
  query_name?: string;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  item_id?: StoreItemID;
  count?: number;
  filters?: CStoreQueryFilters;
  options?: CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions;
}

export interface CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions {
  tag_weight?: number;
}

export interface CStoreQuery_MoreLikeThis_Response {
  metadata?: CStoreQueryResultMetadata;
  ids?: StoreItemID[];
  store_items?: StoreItem[];
}

export interface CStoreQuery_Query_Request {
  query_name?: string;
  query?: CStoreQueryParams;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  override_country_code?: string;
}

export interface CStoreQuery_Query_Response {
  metadata?: CStoreQueryResultMetadata;
  ids?: StoreItemID[];
  store_items?: StoreItem[];
}

export interface CStoreQuery_SearchSuggestions_Request {
  query_name?: string;
  context?: StoreBrowseContext;
  search_term?: string;
  max_results?: number;
  filters?: CStoreQueryFilters;
  data_request?: StoreBrowseItemDataRequest;
  use_spellcheck?: boolean;
  search_tags?: boolean;
  search_creators?: boolean;
}

export interface CStoreQuery_SearchSuggestions_Response {
  metadata?: CStoreQueryResultMetadata;
  ids?: StoreItemID[];
  store_items?: StoreItem[];
}

export interface CStoreQueryFilters {
  released_only?: boolean;
  coming_soon_only?: boolean;
  type_filters?: CStoreQueryFilters_TypeFilters;
  exclude_from?: number[];
  predefined_filter?: CStoreQueryFilters_PredefinedFilter;
  tagids_must_match?: CStoreQueryFilters_TagFilter[];
  tagids_exclude?: number[];
  price_filters?: CStoreQueryFilters_PriceFilters;
  content_descriptors_must_match?: number[];
  content_descriptors_excluded?: number[];
  regional_top_n_sellers?: number;
  global_top_n_sellers?: number;
  regional_long_term_top_n_sellers?: number;
  global_long_term_top_n_sellers?: number;
  store_page_filter?: CStorePageFilter;
  parent_appids?: number[];
}

export interface CStoreQueryFilters_PredefinedFilter {
  filter_type?: number;
  language_preferences?: number[];
}

export interface CStoreQueryFilters_PriceFilters {
  only_free_items?: boolean;
  exclude_free_items?: boolean;
  min_discount_percent?: number;
}

export interface CStoreQueryFilters_TagFilter {
  tagids?: number[];
}

export interface CStoreQueryFilters_TypeFilters {
  include_apps?: boolean;
  include_packages?: boolean;
  include_bundles?: boolean;
  include_games?: boolean;
  include_demos?: boolean;
  include_mods?: boolean;
  include_dlc?: boolean;
  include_software?: boolean;
  include_video?: boolean;
  include_hardware?: boolean;
  include_series?: boolean;
  include_music?: boolean;
  dlc_for_appid?: number;
}

export interface CStoreQueryParams {
  start?: number;
  count?: number;
  sort?: number;
  filters?: CStoreQueryFilters;
}

export interface CStoreQueryPerResultMetadata {
  id?: StoreItemID;
  score?: number;
  spellcheck_generated_result?: boolean;
}

export interface CStoreQueryResultMetadata {
  total_matching_records?: number;
  start?: number;
  count?: number;
  per_result_metadata?: CStoreQueryPerResultMetadata[];
  spellcheck_suggestions?: string[];
}

export abstract class StoreQueryService {
  abstract GetItemByUserCombinedTagsPriority(
    request: CStoreQuery_GetItemByUserCombinedTagsPriority_Request,
  ): Promise<CStoreQuery_GetItemByUserCombinedTagsPriority_Response>;
  abstract GetItemsByUserRecommendedTags(
    request: CStoreQuery_GetItemsByUserRecommendedTags_Request,
  ): Promise<CStoreQuery_GetItemsByUserRecommendedTags_Response>;
  abstract MoreLikeThis(
    request: CStoreQuery_MoreLikeThis_Request,
  ): Promise<CStoreQuery_MoreLikeThis_Response>;
  abstract Query(request: CStoreQuery_Query_Request): Promise<CStoreQuery_Query_Response>;
  abstract SearchSuggestions(
    request: CStoreQuery_SearchSuggestions_Request,
  ): Promise<CStoreQuery_SearchSuggestions_Response>;
}
