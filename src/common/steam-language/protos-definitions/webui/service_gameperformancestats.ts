/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CGamePerformanceStats_GetGameFrameRateStats_Request {
  appid?: number;
}

export interface CGamePerformanceStats_GetGameFrameRateStats_Response {
  frame_rates?: CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate[];
}

export interface CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate {
  clusterid?: Long;
  report_days?: number;
  report_count?: Long;
  mean_frame_rate?: number;
  mean_frame_rate_stddev?: number;
}

export abstract class GamePerformanceStatsService {
  abstract GetGameFrameRateStats(
    request: CGamePerformanceStats_GetGameFrameRateStats_Request,
  ): Promise<CGamePerformanceStats_GetGameFrameRateStats_Response>;
}
