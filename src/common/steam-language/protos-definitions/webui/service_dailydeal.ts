/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CDailyDeal_CancelDailyDeal_Request {
  gid?: Long;
}

export type CDailyDeal_CancelDailyDeal_Response = Record<string, never>;

export interface CDailyDeal_CreateDailyDeal_Request {
  daily_deal?: CDailyDealDetails;
  partnerid?: number;
  inviteid?: Long;
}

export interface CDailyDeal_CreateDailyDeal_Response {
  gid?: Long;
}

export interface CDailyDeal_DeleteDailyDeal_Request {
  gid?: Long;
}

export type CDailyDeal_DeleteDailyDeal_Response = Record<string, never>;

export interface CDailyDeal_GetDailyDeals_Request {
  gid?: Long;
  rtime32_start_date?: number;
  rtime32_end_date?: number;
  appid?: number;
  store_item_type?: number;
  search_term?: string;
  partnerid?: number;
}

export interface CDailyDeal_GetDailyDeals_Response {
  daily_deals?: CDailyDealDetails[];
  blocked_dates?: number[];
  scheduled_slots?: number[];
  blocked?: CDailyDeal_GetDailyDeals_Response_DailyDealBlockedDate[];
  scheduled?: CDailyDeal_GetDailyDeals_Response_DailyDealScheduledSlot[];
}

export interface CDailyDeal_GetDailyDeals_Response_DailyDealBlockedDate {
  date?: number;
  name?: string;
}

export interface CDailyDeal_GetDailyDeals_Response_DailyDealScheduledSlot {
  date?: number;
  descids?: string;
}

export interface CDailyDeal_GetDailyDealsForApps_Request {
  appids?: number[];
}

export interface CDailyDeal_GetDailyDealsForApps_Response {
  daily_deals?: CDailyDealDetails[];
}

export interface CDailyDeal_UpdateDailyDeal_Request {
  daily_deal?: CDailyDealDetails;
  gid?: Long;
}

export type CDailyDeal_UpdateDailyDeal_Response = Record<string, never>;

export interface CDailyDealDetails {
  gid?: Long;
  store_item_type?: number;
  store_item_id?: number;
  store_item_name?: string;
  discount_event_id?: number;
  creator_id?: number;
  rtime32_start_time?: number;
  last_update_time?: number;
  template_json?: string;
  partner_jsondata?: string;
  internal_json?: string;
  deleted?: boolean;
  cancelled?: boolean;
  rtime32_cancel_time?: number;
  asset_request_id?: Long;
  descids?: string;
}

export abstract class DailyDealService {
  abstract CancelDailyDeal(
    request: CDailyDeal_CancelDailyDeal_Request,
  ): Promise<CDailyDeal_CancelDailyDeal_Response>;
  abstract CreateDailyDeal(
    request: CDailyDeal_CreateDailyDeal_Request,
  ): Promise<CDailyDeal_CreateDailyDeal_Response>;
  abstract DeleteDailyDeal(
    request: CDailyDeal_DeleteDailyDeal_Request,
  ): Promise<CDailyDeal_DeleteDailyDeal_Response>;
  abstract GetDailyDeals(
    request: CDailyDeal_GetDailyDeals_Request,
  ): Promise<CDailyDeal_GetDailyDeals_Response>;
  abstract GetDailyDealsForApps(
    request: CDailyDeal_GetDailyDealsForApps_Request,
  ): Promise<CDailyDeal_GetDailyDealsForApps_Response>;
  abstract UpdateDailyDeal(
    request: CDailyDeal_UpdateDailyDeal_Request,
  ): Promise<CDailyDeal_UpdateDailyDeal_Response>;
}
