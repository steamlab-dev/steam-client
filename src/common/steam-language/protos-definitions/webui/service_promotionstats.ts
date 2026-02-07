/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CPromotionStats_GetOptInDemoStats_Request {
  opt_in_name?: string;
  partner_id?: number;
}

export interface CPromotionStats_GetOptInDemoStats_Response {
  stats?: CPromotionStats_GetOptInDemoStats_Response_PerAppStats[];
  appid_without_permissions?: number[];
}

export interface CPromotionStats_GetOptInDemoStats_Response_PerAppStats {
  appid?: number;
  demo_appid?: number;
  rt_start_time?: number;
  rt_end_time?: number;
  demo_player_count?: number;
  wishlist_count?: number;
  player_wishlist_count?: number;
  rt_last_update_time?: number;
}

export abstract class PromotionStatsService {
  abstract GetOptInDemoStats(
    request: CPromotionStats_GetOptInDemoStats_Request,
  ): Promise<CPromotionStats_GetOptInDemoStats_Response>;
}
