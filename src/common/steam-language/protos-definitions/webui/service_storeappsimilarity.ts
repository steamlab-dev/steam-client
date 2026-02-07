/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export interface CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request {
  steamid?: Long;
  sort?: number;
  clusters_to_return?: number;
  cluster_index?: number;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response {
  clusters?: CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster[];
}

export interface CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster {
  cluster_id?: number;
  playtime_forever?: number;
  playtime_2weeks?: number;
  last_played?: number;
  played_appids?: number[];
  similar_items_appids?: number[];
  similar_items?: StoreItem[];
  similar_item_popularity_score?: number;
}

export interface CStoreAppSimilarity_PrioritizeAppsForUser_Request {
  steamid?: Long;
  country_code?: string;
  ids?: StoreItemID[];
  options?: StoreAppSimilarityPriorityOptions;
  debug?: boolean;
  include_owned_games?: boolean;
}

export interface CStoreAppSimilarity_PrioritizeAppsForUser_Response {
  items?: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem[];
}

export interface CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem {
  id?: StoreItemID;
  already_owned?: boolean;
  weight?: number;
  weight_before_dedupe?: number;
  debug_matches?: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo[];
  debug_popularity?: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo;
}

export interface CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo {
  source_app?: number;
  weight?: number;
  similarity?: number;
}

export interface CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo {
  rank?: number;
  popularity_factor?: number;
  weight_before_popularity?: number;
}

export interface StoreAppSimilarityPriorityOptions {
  tag_score_factor?: number;
  playtime_max_seconds?: number;
  playtime_max_games?: number;
  playtime_score_factor?: number;
  popularity_factor?: number;
  popularity_reciprocal?: number;
  popularity_base_score?: Long;
  played_since?: number;
}

export abstract class StoreAppSimilarityService {
  abstract IdentifyClustersFromPlaytime(
    request: CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request,
  ): Promise<CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response>;
  abstract PrioritizeAppsForUser(
    request: CStoreAppSimilarity_PrioritizeAppsForUser_Request,
  ): Promise<CStoreAppSimilarity_PrioritizeAppsForUser_Response>;
}
