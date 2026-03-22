/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMobileApp_GetMobileSummary_Request {
  authenticator_gid?: bigint;
  device_identifier?: string;
}

export interface CMobileApp_GetMobileSummary_Response {
  stale_time_seconds?: number;
  is_authenticator_valid?: boolean;
  owned_games?: number;
  friend_count?: number;
  wallet_balance?: string;
  language?: string;
}

export abstract class MobileAppService {
  abstract GetMobileSummary(
    request: CMobileApp_GetMobileSummary_Request,
  ): Promise<CMobileApp_GetMobileSummary_Response>;
}
