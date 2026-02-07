/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./common";

export interface CAuthentication_AccessToken_GenerateForApp_Request {
  refresh_token?: string;
  steamid?: Long;
  renewal_type?: number;
}

export interface CAuthentication_AccessToken_GenerateForApp_Response {
  access_token?: string;
  refresh_token?: string;
}

export interface CAuthentication_AllowedConfirmation {
  confirmation_type?: number;
  associated_message?: string;
}

export interface CAuthentication_BeginAuthSessionViaCredentials_Request {
  device_friendly_name?: string;
  account_name?: string;
  encrypted_password?: string;
  encryption_timestamp?: Long;
  remember_login?: boolean;
  platform_type?: number;
  persistence?: number;
  website_id?: string;
  device_details?: CAuthentication_DeviceDetails;
  guard_data?: string;
  language?: number;
  qos_level?: number;
}

export interface CAuthentication_BeginAuthSessionViaCredentials_Response {
  client_id?: Long;
  request_id?: Buffer;
  interval?: number;
  allowed_confirmations?: CAuthentication_AllowedConfirmation[];
  steamid?: Long;
  weak_token?: string;
  agreement_session_url?: string;
  extended_error_message?: string;
}

export interface CAuthentication_BeginAuthSessionViaQR_Request {
  device_friendly_name?: string;
  platform_type?: number;
  device_details?: CAuthentication_DeviceDetails;
  website_id?: string;
}

export interface CAuthentication_BeginAuthSessionViaQR_Response {
  client_id?: Long;
  challenge_url?: string;
  request_id?: Buffer;
  interval?: number;
  allowed_confirmations?: CAuthentication_AllowedConfirmation[];
  version?: number;
}

export interface CAuthentication_DeviceDetails {
  device_friendly_name?: string;
  platform_type?: number;
  os_type?: number;
  gaming_device_type?: number;
  client_count?: number;
  machine_id?: Buffer;
  app_type?: number;
}

export interface CAuthentication_GetAuthSessionInfo_Request {
  client_id?: Long;
}

export interface CAuthentication_GetAuthSessionInfo_Response {
  ip?: string;
  geoloc?: string;
  city?: string;
  state?: string;
  country?: string;
  platform_type?: number;
  device_friendly_name?: string;
  version?: number;
  login_history?: number;
  requestor_location_mismatch?: boolean;
  high_usage_login?: boolean;
  requested_persistence?: number;
  device_trust?: number;
  app_type?: number;
}

export interface CAuthentication_GetAuthSessionRiskInfo_Request {
  client_id?: Long;
  language?: number;
}

export interface CAuthentication_GetAuthSessionRiskInfo_Response {
  location_confirmer?: string;
  location_requestor?: string;
  location_other?: string;
  platform_type?: number;
}

export type CAuthentication_GetAuthSessionsForAccount_Request = Record<string, never>;

export interface CAuthentication_GetAuthSessionsForAccount_Response {
  client_ids?: Long[];
}

export interface CAuthentication_GetPasswordRSAPublicKey_Request {
  account_name?: string;
}

export interface CAuthentication_GetPasswordRSAPublicKey_Response {
  publickey_mod?: string;
  publickey_exp?: string;
  timestamp?: Long;
}

export interface CAuthentication_MigrateMobileSession_Request {
  steamid?: Long;
  token?: string;
  signature?: string;
}

export interface CAuthentication_MigrateMobileSession_Response {
  refresh_token?: string;
  access_token?: string;
}

export interface CAuthentication_NotifyRiskQuizResults_Notification {
  client_id?: Long;
  results?: CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults;
  selected_action?: string;
  did_confirm_login?: boolean;
}

export interface CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults {
  platform?: boolean;
  location?: boolean;
  action?: boolean;
}

export interface CAuthentication_PollAuthSessionStatus_Request {
  client_id?: Long;
  request_id?: Buffer;
  token_to_revoke?: Long;
}

export interface CAuthentication_PollAuthSessionStatus_Response {
  new_client_id?: Long;
  new_challenge_url?: string;
  refresh_token?: string;
  access_token?: string;
  had_remote_interaction?: boolean;
  account_name?: string;
  new_guard_data?: string;
  agreement_session_url?: string;
}

export interface CAuthentication_RefreshToken_Enumerate_Request {
  include_revoked?: boolean;
}

export interface CAuthentication_RefreshToken_Enumerate_Response {
  refresh_tokens?: CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription[];
  requesting_token?: Long;
}

export interface CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription {
  token_id?: Long;
  token_description?: string;
  time_updated?: number;
  platform_type?: number;
  logged_in?: boolean;
  os_platform?: number;
  auth_type?: number;
  gaming_device_type?: number;
  first_seen?: CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent;
  last_seen?: CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent;
  os_type?: number;
  authentication_type?: number;
  effective_token_state?: number;
}

export interface CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent {
  time?: number;
  ip?: CMsgIPAddress;
  locale?: string;
  country?: string;
  state?: string;
  city?: string;
}

export interface CAuthentication_RefreshToken_Revoke_Request {
  token_id?: Long;
  steamid?: Long;
  revoke_action?: number;
  signature?: Buffer;
}

export type CAuthentication_RefreshToken_Revoke_Response = Record<string, never>;

export interface CAuthentication_Token_Revoke_Request {
  token?: string;
  revoke_action?: number;
}

export type CAuthentication_Token_Revoke_Response = Record<string, never>;

export interface CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request {
  version?: number;
  client_id?: Long;
  steamid?: Long;
  signature?: Buffer;
  confirm?: boolean;
  persistence?: number;
}

export type CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response = Record<
  string,
  never
>;

export interface CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request {
  client_id?: Long;
  steamid?: Long;
  code?: string;
  code_type?: number;
}

export interface CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response {
  agreement_session_url?: string;
}

export abstract class AuthenticationService {
  abstract BeginAuthSessionViaCredentials(
    request: CAuthentication_BeginAuthSessionViaCredentials_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaCredentials_Response>;
  abstract BeginAuthSessionViaQR(
    request: CAuthentication_BeginAuthSessionViaQR_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaQR_Response>;
  abstract EnumerateTokens(
    request: CAuthentication_RefreshToken_Enumerate_Request,
  ): Promise<CAuthentication_RefreshToken_Enumerate_Response>;
  abstract GenerateAccessTokenForApp(
    request: CAuthentication_AccessToken_GenerateForApp_Request,
  ): Promise<CAuthentication_AccessToken_GenerateForApp_Response>;
  abstract GetAuthSessionInfo(
    request: CAuthentication_GetAuthSessionInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionInfo_Response>;
  abstract GetAuthSessionRiskInfo(
    request: CAuthentication_GetAuthSessionRiskInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionRiskInfo_Response>;
  abstract GetAuthSessionsForAccount(
    request: CAuthentication_GetAuthSessionsForAccount_Request,
  ): Promise<CAuthentication_GetAuthSessionsForAccount_Response>;
  abstract GetPasswordRSAPublicKey(
    request: CAuthentication_GetPasswordRSAPublicKey_Request,
  ): Promise<CAuthentication_GetPasswordRSAPublicKey_Response>;
  abstract MigrateMobileSession(
    request: CAuthentication_MigrateMobileSession_Request,
  ): Promise<CAuthentication_MigrateMobileSession_Response>;
  abstract NotifyRiskQuizResults(
    request: CAuthentication_NotifyRiskQuizResults_Notification,
  ): Promise<void>;
  abstract PollAuthSessionStatus(
    request: CAuthentication_PollAuthSessionStatus_Request,
  ): Promise<CAuthentication_PollAuthSessionStatus_Response>;
  abstract RevokeRefreshToken(
    request: CAuthentication_RefreshToken_Revoke_Request,
  ): Promise<CAuthentication_RefreshToken_Revoke_Response>;
  abstract RevokeToken(
    request: CAuthentication_Token_Revoke_Request,
  ): Promise<CAuthentication_Token_Revoke_Response>;
  abstract UpdateAuthSessionWithMobileConfirmation(
    request: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response>;
  abstract UpdateAuthSessionWithSteamGuardCode(
    request: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response>;
}
