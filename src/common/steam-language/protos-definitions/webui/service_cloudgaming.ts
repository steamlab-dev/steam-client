/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CCloudGaming_CreateNonce_Request {
  platform?: string;
  appid?: number;
}

export interface CCloudGaming_CreateNonce_Response {
  nonce?: string;
  expiry?: number;
}

export interface CCloudGaming_GetTimeRemaining_Request {
  platform?: string;
  appid_list?: number[];
}

export interface CCloudGaming_GetTimeRemaining_Response {
  entries?: CCloudGaming_TimeRemaining[];
}

export interface CCloudGaming_TimeRemaining {
  appid?: number;
  minutes_remaining?: number;
}

export abstract class CloudGamingService {
  abstract CreateNonce(
    request: CCloudGaming_CreateNonce_Request,
  ): Promise<CCloudGaming_CreateNonce_Response>;
  abstract GetTimeRemaining(
    request: CCloudGaming_GetTimeRemaining_Request,
  ): Promise<CCloudGaming_GetTimeRemaining_Response>;
}
