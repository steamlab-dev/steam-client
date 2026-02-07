/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export type CUserStoreVisit_GetFrequentlyVisitedPages_Request = Record<string, never>;

export interface CUserStoreVisit_GetFrequentlyVisitedPages_Response {
  visit_data?: CUserStoreVisitData;
  frequent_hubs?: CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs[];
}

export interface CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs {
  item_id?: StoreItemID;
  time_visit?: number;
  visit_count?: number;
}

export interface CUserStoreVisit_GetMostVisitedItemsOnStore_Request {
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  count?: number;
}

export interface CUserStoreVisit_GetMostVisitedItemsOnStore_Response {
  item_ids?: StoreItemID[];
  items?: StoreItem[];
}

export interface CUserStoreVisitData {
  recent_apps?: CUserStoreVisitData_RecentApps[];
}

export interface CUserStoreVisitData_RecentApps {
  item_id?: StoreItemID;
  time_visit?: number;
}

export abstract class UserStoreVisitService {
  abstract GetFrequentlyVisitedPages(
    request: CUserStoreVisit_GetFrequentlyVisitedPages_Request,
  ): Promise<CUserStoreVisit_GetFrequentlyVisitedPages_Response>;
  abstract GetMostVisitedItemsOnStore(
    request: CUserStoreVisit_GetMostVisitedItemsOnStore_Request,
  ): Promise<CUserStoreVisit_GetMostVisitedItemsOnStore_Response>;
}
