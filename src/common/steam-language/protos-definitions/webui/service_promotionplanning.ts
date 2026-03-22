/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CPromoAssociation {
  type?: number;
  gid?: bigint;
  promotion_planid?: bigint;
}

export interface CPromotionNotificationResults {
  notification_id?: bigint;
  tracking_id?: bigint;
  email_address?: string;
  accountid?: number;
  status?: number;
  type?: number;
  rt_send_time?: number;
}

export interface CPromotionPlan {
  promotion_id?: bigint;
  admin_jsondata?: string;
  partner_jsondata?: string;
  input_jsondata?: string;
  rtime32_start_time?: number;
  rtime32_end_time?: number;
  partner_id?: number;
  input_access_key?: string;
  last_update_time?: number;
  partner_readonly_jsondata?: string;
  partner_writable_jsondata?: string;
  assets_readonly_jsondata?: string;
  assets_writable_jsondata?: string;
}

export interface CPromotionPlan_CreateSalePageForPromo_Request {
  clan_account_id?: number;
  clan_event_gid?: bigint;
  rtime_sale_start?: number;
  rtime_sale_end?: number;
  daily_deal_gid?: bigint;
  promotion_gid?: bigint;
  create_asset_request?: boolean;
  partner_id?: number;
  advertising_appid?: number;
}

export interface CPromotionPlan_CreateSalePageForPromo_Response {
  clan_account_id?: number;
  clan_event_gid?: bigint;
  daily_deal_gid?: bigint;
  promotion_gid?: bigint;
  asset_request_gid?: bigint;
  advertising_appid?: number;
}

export interface CPromotionPlan_GetPromotionPlanSalesDaily_Request {
  promotionids?: bigint[];
  partnerid?: number;
}

export interface CPromotionPlan_GetPromotionPlanSalesDaily_Response {
  sales?: CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData[];
  partial_access?: boolean;
}

export interface CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales {
  rtime_date?: number;
  date?: string;
  summary_sales?: CPromotionPlan_SummarySaleResult;
}

export interface CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product {
  appid?: number;
  packageid?: number;
  secondary_product_id?: number;
  summary_sales?: CPromotionPlan_SummarySaleResult;
  daily_promo_sales?: CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales[];
  package_billing_type?: number;
}

export interface CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData {
  promotionid?: bigint;
  daily_promo_sales?: CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales[];
  summary_sales?: CPromotionPlan_SummarySaleResult;
  products?: CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product[];
}

export interface CPromotionPlan_SummarySaleResult {
  total_gross_sales_usdx100?: bigint;
  total_gross_returns_usdx100?: bigint;
  total_net_tax_usdx100?: bigint;
  steam_gross_sales_usdx100?: bigint;
  steam_gross_returns_usdx100?: bigint;
  steam_net_tax_usdx100?: bigint;
  in_game_gross_sales_usdx100?: bigint;
  in_game_gross_returns_usdx100?: bigint;
  in_game_net_tax_usdx100?: bigint;
  total_net_sales_usdx100?: bigint;
  steam_net_sales_usdx100?: bigint;
  in_game_net_sales_usdx100?: bigint;
  steam_gross_units_sold?: bigint;
  steam_gross_units_returned?: bigint;
  gross_units_activated?: bigint;
}

export interface CPromotionPlanning_CreatePlan_Request {
  plan?: CPromotionPlan;
}

export interface CPromotionPlanning_CreatePlan_Response {
  promotion_id?: bigint;
  input_access_key?: string;
}

export interface CPromotionPlanning_DeletePlan_Request {
  promotion_id?: bigint;
}

export type CPromotionPlanning_DeletePlan_Response = Record<string, never>;

export interface CPromotionPlanning_GetAdvertisingAppsForPartner_Request {
  partner_id?: number;
}

export interface CPromotionPlanning_GetAdvertisingAppsForPartner_Response {
  advertising_apps?: CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app[];
}

export interface CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app {
  appid?: number;
  app_name?: string;
  itemid?: number;
}

export type CPromotionPlanning_GetAllActivePlan_Request = Record<string, never>;

export interface CPromotionPlanning_GetAllActivePlan_Response {
  plan?: CPromotionPlan[];
}

export interface CPromotionPlanning_GetAllPlansForApps_Request {
  appids?: number[];
  exclude_sales?: boolean;
  exclude_direct_featuring?: boolean;
}

export interface CPromotionPlanning_GetAllPlansForApps_Response {
  plans?: CPromotionPlan[];
  apps_included_in_sales?: CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales[];
}

export interface CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales {
  appids?: number[];
  clan_event_gid?: bigint;
}

export interface CPromotionPlanning_GetAllPlansForPartner_Request {
  partnerid?: number;
  show_hidden?: boolean;
  start_date?: number;
  end_date?: number;
}

export interface CPromotionPlanning_GetAllPlansForPartner_Response {
  plans?: CPromotionPlan[];
}

export interface CPromotionPlanning_GetPlan_Request {
  promotion_id?: bigint;
}

export interface CPromotionPlanning_GetPlan_Response {
  plan?: CPromotionPlan;
}

export interface CPromotionPlanning_GetPlanByAssociationID_Request {
  requested?: CPromoAssociation[];
}

export interface CPromotionPlanning_GetPlanByAssociationID_Response {
  matching?: CPromoAssociation[];
  plans?: CPromotionPlan[];
}

export interface CPromotionPlanning_GetPlanByInputAccessKey_Request {
  input_access_key?: string;
}

export interface CPromotionPlanning_GetPlanByInputAccessKey_Response {
  plan?: CPromotionPlan;
}

export interface CPromotionPlanning_GetPlanCompletedInDateRange_Request {
  oldest_rtime?: number;
  newest_rtime?: number;
  promotion_types?: string[];
}

export interface CPromotionPlanning_GetPlanCompletedInDateRange_Response {
  plans?: CPromotionPlan[];
}

export interface CPromotionPlanning_GetPlansUpdatedSince_Request {
  rtime?: number;
  upto_rtime?: number;
}

export interface CPromotionPlanning_GetPlansUpdatedSince_Response {
  plans?: CPromotionPlan[];
  deleted_plan_ids?: bigint[];
}

export interface CPromotionPlanning_GetPromotionPlanForSalePages_Request {
  request_list?: CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage[];
}

export interface CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage {
  clan_account_id?: number;
  gid_clan_event?: bigint;
}

export interface CPromotionPlanning_GetPromotionPlanForSalePages_Response {
  plans?: CPromotionPlan[];
}

export interface CPromotionPlanning_GetSalePageCandidatesForPromo_Request {
  account_id?: number;
  include_published?: boolean;
}

export interface CPromotionPlanning_GetSalePageCandidatesForPromo_Response {
  clans?: CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan[];
}

export interface CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan {
  clan_account_id?: number;
  clan_name?: string;
  is_creator_home?: boolean;
  sale_pages?: CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage[];
}

export interface CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage {
  clan_account_id?: number;
  gid_clan_event?: bigint;
  name?: string;
  published?: boolean;
  start_time?: number;
  end_time?: number;
  external_sale_event_type?: number;
}

export interface CPromotionPlanning_GetSentNotification_Request {
  promotion_id?: bigint;
  notification_id?: bigint;
}

export interface CPromotionPlanning_GetSentNotification_Response {
  results?: CPromotionNotificationResults[];
}

export interface CPromotionPlanning_GetUpcomingScheduledDiscounts_Request {
  rtstart?: number;
  rtend?: number;
  include_packages?: boolean;
  filter_modified_sales_rank?: boolean;
}

export interface CPromotionPlanning_GetUpcomingScheduledDiscounts_Response {
  package_details?: CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo[];
  app_details?: CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo[];
}

export interface CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo {
  appid?: number;
  cheapest_package_id?: number;
  cheapest_discount_id?: number;
  cheapest_discount_name?: string;
  package_original_price_usd?: number;
  discounted_price_usd?: number;
  discount_percentage?: number;
  rtime_discount_start?: number;
  rtime_discount_end?: number;
  num_discounted_packages?: number;
  modified_sales_rank?: number;
}

export interface CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo {
  package_id?: number;
  discount_id?: number;
  discount_name?: string;
  discount_percentage?: number;
  original_price_usd?: number;
  discount_price_usd?: number;
  rtime_discount_start?: number;
  rtime_discount_end?: number;
}

export interface CPromotionPlanning_MarkLocalizationAssetComplete_Request {
  promotion_id?: bigint;
  value?: boolean;
}

export type CPromotionPlanning_MarkLocalizationAssetComplete_Response = Record<string, never>;

export interface CPromotionPlanning_ResendNotification_Request {
  promotion_id?: bigint;
  notification_id?: bigint;
}

export type CPromotionPlanning_ResendNotification_Response = Record<string, never>;

export interface CPromotionPlanning_SearchPlan_Request {
  token?: string;
}

export interface CPromotionPlanning_SearchPlan_Response {
  plan?: CPromotionPlan[];
}

export interface CPromotionPlanning_SendNotification_Request {
  promotion_id?: bigint;
  notification_type?: number;
  only_explicit_email_addresses?: boolean;
}

export type CPromotionPlanning_SendNotification_Response = Record<string, never>;

export interface CPromotionPlanning_SetPromotionEmailTarget_Request {
  promotion_id?: bigint;
  add?: boolean;
  email_address?: string;
}

export type CPromotionPlanning_SetPromotionEmailTarget_Response = Record<string, never>;

export interface CPromotionPlanning_UpdatePlan_Request {
  plan?: CPromotionPlan;
  promotion_id?: bigint;
}

export type CPromotionPlanning_UpdatePlan_Response = Record<string, never>;

export abstract class PromotionPlanningService {
  abstract CreatePlan(
    request: CPromotionPlanning_CreatePlan_Request,
  ): Promise<CPromotionPlanning_CreatePlan_Response>;
  abstract CreateSalePageForPromo(
    request: CPromotionPlan_CreateSalePageForPromo_Request,
  ): Promise<CPromotionPlan_CreateSalePageForPromo_Response>;
  abstract CreateTentativePlan(
    request: CPromotionPlanning_CreatePlan_Request,
  ): Promise<CPromotionPlanning_CreatePlan_Response>;
  abstract DeletePlan(
    request: CPromotionPlanning_DeletePlan_Request,
  ): Promise<CPromotionPlanning_DeletePlan_Response>;
  abstract GetAdvertisingAppsForPartner(
    request: CPromotionPlanning_GetAdvertisingAppsForPartner_Request,
  ): Promise<CPromotionPlanning_GetAdvertisingAppsForPartner_Response>;
  abstract GetAllActivePlan(
    request: CPromotionPlanning_GetAllActivePlan_Request,
  ): Promise<CPromotionPlanning_GetAllActivePlan_Response>;
  abstract GetAllPlansForApps(
    request: CPromotionPlanning_GetAllPlansForApps_Request,
  ): Promise<CPromotionPlanning_GetAllPlansForApps_Response>;
  abstract GetAllPlansForPartner(
    request: CPromotionPlanning_GetAllPlansForPartner_Request,
  ): Promise<CPromotionPlanning_GetAllPlansForPartner_Response>;
  abstract GetPlan(
    request: CPromotionPlanning_GetPlan_Request,
  ): Promise<CPromotionPlanning_GetPlan_Response>;
  abstract GetPlanByAssociationID(
    request: CPromotionPlanning_GetPlanByAssociationID_Request,
  ): Promise<CPromotionPlanning_GetPlanByAssociationID_Response>;
  abstract GetPlanByInputAccessKey(
    request: CPromotionPlanning_GetPlanByInputAccessKey_Request,
  ): Promise<CPromotionPlanning_GetPlanByInputAccessKey_Response>;
  abstract GetPlanCompletedInDateRange(
    request: CPromotionPlanning_GetPlanCompletedInDateRange_Request,
  ): Promise<CPromotionPlanning_GetPlanCompletedInDateRange_Response>;
  abstract GetPlansUpdatedSince(
    request: CPromotionPlanning_GetPlansUpdatedSince_Request,
  ): Promise<CPromotionPlanning_GetPlansUpdatedSince_Response>;
  abstract GetPromotionPlanForSalePages(
    request: CPromotionPlanning_GetPromotionPlanForSalePages_Request,
  ): Promise<CPromotionPlanning_GetPromotionPlanForSalePages_Response>;
  abstract GetPromotionPlanSalesDaily(
    request: CPromotionPlan_GetPromotionPlanSalesDaily_Request,
  ): Promise<CPromotionPlan_GetPromotionPlanSalesDaily_Response>;
  abstract GetSalePageCandidatesForPromo(
    request: CPromotionPlanning_GetSalePageCandidatesForPromo_Request,
  ): Promise<CPromotionPlanning_GetSalePageCandidatesForPromo_Response>;
  abstract GetSentNotification(
    request: CPromotionPlanning_GetSentNotification_Request,
  ): Promise<CPromotionPlanning_GetSentNotification_Response>;
  abstract GetUpcomingScheduledDiscounts(
    request: CPromotionPlanning_GetUpcomingScheduledDiscounts_Request,
  ): Promise<CPromotionPlanning_GetUpcomingScheduledDiscounts_Response>;
  abstract MarkLocalizationAssetComplete(
    request: CPromotionPlanning_MarkLocalizationAssetComplete_Request,
  ): Promise<CPromotionPlanning_MarkLocalizationAssetComplete_Response>;
  abstract ResendNotification(
    request: CPromotionPlanning_ResendNotification_Request,
  ): Promise<CPromotionPlanning_ResendNotification_Response>;
  abstract SearchPlan(
    request: CPromotionPlanning_SearchPlan_Request,
  ): Promise<CPromotionPlanning_SearchPlan_Response>;
  abstract SendNotification(
    request: CPromotionPlanning_SendNotification_Request,
  ): Promise<CPromotionPlanning_SendNotification_Response>;
  abstract SetPromotionEmailTarget(
    request: CPromotionPlanning_SetPromotionEmailTarget_Request,
  ): Promise<CPromotionPlanning_SetPromotionEmailTarget_Response>;
  abstract UpdatePlan(
    request: CPromotionPlanning_UpdatePlan_Request,
  ): Promise<CPromotionPlanning_UpdatePlan_Response>;
  abstract UpdatePlanInputData(
    request: CPromotionPlanning_UpdatePlan_Request,
  ): Promise<CPromotionPlanning_UpdatePlan_Response>;
  abstract UpdatePlanPartnerInfo(
    request: CPromotionPlanning_UpdatePlan_Request,
  ): Promise<CPromotionPlanning_UpdatePlan_Response>;
}
