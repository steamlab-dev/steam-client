/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { StoreBrowseContext, StoreBrowseItemDataRequest, StoreItem } from "./common";

export interface CStoreTopSellers_GetCountryList_Request {
  language?: string;
}

export interface CStoreTopSellers_GetCountryList_Response {
  countries?: CStoreTopSellers_GetCountryList_Response_Country[];
}

export interface CStoreTopSellers_GetCountryList_Response_Country {
  country_code?: string;
  name?: string;
}

export interface CStoreTopSellers_GetWeeklyTopSellers_Request {
  country_code?: string;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  start_date?: number;
  page_start?: number;
  page_count?: number;
}

export interface CStoreTopSellers_GetWeeklyTopSellers_Response {
  start_date?: number;
  ranks?: CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank[];
  next_page_start?: number;
}

export interface CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank {
  rank?: number;
  appid?: number;
  item?: StoreItem;
  last_week_rank?: number;
  consecutive_weeks?: number;
  first_top100?: boolean;
}

export abstract class StoreTopSellersService {
  abstract GetCountryList(
    request: CStoreTopSellers_GetCountryList_Request,
  ): Promise<CStoreTopSellers_GetCountryList_Response>;
  abstract GetWeeklyTopSellers(
    request: CStoreTopSellers_GetWeeklyTopSellers_Request,
  ): Promise<CStoreTopSellers_GetWeeklyTopSellers_Response>;
}
