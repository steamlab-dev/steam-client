/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { ESessionPersistence } from "./enums";
import type { CMsgIPAddress } from "./steammessages_base";

export const EAuthTokenPlatformType = {
  k_EAuthTokenPlatformType_Unknown: 0,
  k_EAuthTokenPlatformType_SteamClient: 1,
  k_EAuthTokenPlatformType_WebBrowser: 2,
  k_EAuthTokenPlatformType_MobileApp: 3,
} as const;

export type EAuthTokenPlatformType =
  (typeof EAuthTokenPlatformType)[keyof typeof EAuthTokenPlatformType];

export const EAuthTokenAppType = {
  k_EAuthTokenAppType_Unknown: 0,
  k_EAuthTokenAppType_Mobile_SteamApp: 1,
  k_EAuthTokenAppType_Mobile_ChatApp: 2,
} as const;

export type EAuthTokenAppType = (typeof EAuthTokenAppType)[keyof typeof EAuthTokenAppType];

export const EAuthSessionGuardType = {
  k_EAuthSessionGuardType_Unknown: 0,
  k_EAuthSessionGuardType_None: 1,
  k_EAuthSessionGuardType_EmailCode: 2,
  k_EAuthSessionGuardType_DeviceCode: 3,
  k_EAuthSessionGuardType_DeviceConfirmation: 4,
  k_EAuthSessionGuardType_EmailConfirmation: 5,
  k_EAuthSessionGuardType_MachineToken: 6,
  k_EAuthSessionGuardType_LegacyMachineAuth: 7,
} as const;

export type EAuthSessionGuardType =
  (typeof EAuthSessionGuardType)[keyof typeof EAuthSessionGuardType];

export const EAuthSessionSecurityHistory = {
  k_EAuthSessionSecurityHistory_Invalid: 0,
  k_EAuthSessionSecurityHistory_UsedPreviously: 1,
  k_EAuthSessionSecurityHistory_NoPriorHistory: 2,
} as const;

export type EAuthSessionSecurityHistory =
  (typeof EAuthSessionSecurityHistory)[keyof typeof EAuthSessionSecurityHistory];

export const ETokenRenewalType = {
  k_ETokenRenewalType_None: 0,
  k_ETokenRenewalType_Allow: 1,
} as const;

export type ETokenRenewalType = (typeof ETokenRenewalType)[keyof typeof ETokenRenewalType];

export const EAuthenticationType = {
  k_EAuthenticationType_Unknown: 0,
  k_EAuthenticationType_Password: 1,
  k_EAuthenticationType_QR: 2,
  k_EAuthenticationType_AccountCreation: 3,
  k_EAuthenticationType_GuestAccount: 4,
} as const;

export type EAuthenticationType = (typeof EAuthenticationType)[keyof typeof EAuthenticationType];

export const EAuthTokenState = {
  k_EAuthTokenState_Invalid: 0,
  k_EAuthTokenState_New: 1,
  k_EAuthTokenState_Confirmed: 2,
  k_EAuthTokenState_Issued: 3,
  k_EAuthTokenState_Denied: 4,
  k_EAuthTokenState_LoggedOut: 5,
  k_EAuthTokenState_Consumed: 6,
  k_EAuthTokenState_Revoked: 99,
} as const;

export type EAuthTokenState = (typeof EAuthTokenState)[keyof typeof EAuthTokenState];

export const EAuthTokenRevokeAction = {
  k_EAuthTokenRevokeLogout: 0,
  k_EAuthTokenRevokePermanent: 1,
  k_EAuthTokenRevokeReplaced: 2,
  k_EAuthTokenRevokeSupport: 3,
  k_EAuthTokenRevokeConsume: 4,
  k_EAuthTokenRevokeNonRememberedLogout: 5,
  k_EAuthTokenRevokeNonRememberedPermanent: 6,
  k_EAuthTokenRevokeAutomatic: 7,
} as const;

export type EAuthTokenRevokeAction =
  (typeof EAuthTokenRevokeAction)[keyof typeof EAuthTokenRevokeAction];

export interface CAuthentication_GetPasswordRSAPublicKey_Request {
  account_name?: string;
}

export interface CAuthentication_GetPasswordRSAPublicKey_Response {
  publickey_mod?: string;
  publickey_exp?: string;
  timestamp?: Long;
}

export interface CAuthentication_DeviceDetails {
  device_friendly_name?: string;
  platform_type?: EAuthTokenPlatformType;
  os_type?: number;
  gaming_device_type?: number;
  client_count?: number;
  machine_id?: Buffer;
  app_type?: EAuthTokenAppType;
}

export interface CAuthentication_BeginAuthSessionViaQR_Request {
  device_friendly_name?: string;
  platform_type?: EAuthTokenPlatformType;
  device_details?: CAuthentication_DeviceDetails;
  website_id?: string;
}

export interface CAuthentication_AllowedConfirmation {
  confirmation_type?: EAuthSessionGuardType;
  associated_message?: string;
}

export interface CAuthentication_BeginAuthSessionViaQR_Response {
  client_id?: Long;
  challenge_url?: string;
  request_id?: Buffer;
  interval?: number;
  allowed_confirmations?: CAuthentication_AllowedConfirmation[];
  version?: number;
}

export interface CAuthentication_BeginAuthSessionViaCredentials_Request {
  device_friendly_name?: string;
  account_name?: string;
  encrypted_password?: string;
  encryption_timestamp?: Long;
  remember_login?: boolean;
  platform_type?: EAuthTokenPlatformType;
  persistence?: ESessionPersistence;
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

export interface CAuthentication_GetAuthSessionInfo_Request {
  client_id?: Long;
}

export interface CAuthentication_GetAuthSessionInfo_Response {
  ip?: string;
  geoloc?: string;
  city?: string;
  state?: string;
  country?: string;
  platform_type?: EAuthTokenPlatformType;
  device_friendly_name?: string;
  version?: number;
  login_history?: EAuthSessionSecurityHistory;
  requestor_location_mismatch?: boolean;
  high_usage_login?: boolean;
  requested_persistence?: ESessionPersistence;
  device_trust?: number;
  app_type?: EAuthTokenAppType;
}

export interface CAuthentication_GetAuthSessionRiskInfo_Request {
  client_id?: Long;
  language?: number;
}

export interface CAuthentication_GetAuthSessionRiskInfo_Response {
  location_confirmer?: string;
  location_requestor?: string;
  location_other?: string;
  platform_type?: EAuthTokenPlatformType;
}

export interface CAuthentication_NotifyRiskQuizResults_Notification {
  client_id?: Long;
  results?: CAuthentication_NotifyRiskQuizResults_Notification.RiskQuizResults;
  selected_action?: string;
  did_confirm_login?: boolean;
}

export namespace CAuthentication_NotifyRiskQuizResults_Notification {
  export interface RiskQuizResults {
    platform?: boolean;
    location?: boolean;
    action?: boolean;
  }
}

export interface CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request {
  version?: number;
  client_id?: Long;
  steamid?: Long;
  signature?: Buffer;
  confirm?: boolean;
  persistence?: ESessionPersistence;
}

export type CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response = Record<
  string,
  never
>;

export interface CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request {
  client_id?: Long;
  steamid?: Long;
  code?: string;
  code_type?: EAuthSessionGuardType;
}

export interface CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response {
  agreement_session_url?: string;
}

export interface CAuthentication_AccessToken_GenerateForApp_Request {
  refresh_token?: string;
  steamid?: Long;
  renewal_type?: ETokenRenewalType;
}

export interface CAuthentication_AccessToken_GenerateForApp_Response {
  access_token?: string;
  refresh_token?: string;
}

export interface CAuthentication_RefreshToken_Enumerate_Request {
  include_revoked?: boolean;
}

export interface CAuthentication_RefreshToken_Enumerate_Response {
  refresh_tokens?: CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription[];
  requesting_token?: Long;
}

export namespace CAuthentication_RefreshToken_Enumerate_Response {
  export interface TokenUsageEvent {
    time?: number;
    ip?: CMsgIPAddress;
    locale?: string;
    country?: string;
    state?: string;
    city?: string;
  }

  export interface RefreshTokenDescription {
    token_id?: Long;
    token_description?: string;
    time_updated?: number;
    platform_type?: EAuthTokenPlatformType;
    logged_in?: boolean;
    os_platform?: number;
    auth_type?: number;
    gaming_device_type?: number;
    first_seen?: CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;
    last_seen?: CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;
    os_type?: number;
    authentication_type?: EAuthenticationType;
    effective_token_state?: EAuthTokenState;
  }
}

export type CAuthentication_GetAuthSessionsForAccount_Request = Record<string, never>;

export interface CAuthentication_GetAuthSessionsForAccount_Response {
  client_ids?: Long[];
}

export interface CAuthentication_Token_Revoke_Request {
  token?: string;
  revoke_action?: EAuthTokenRevokeAction;
}

export type CAuthentication_Token_Revoke_Response = Record<string, never>;

export interface CAuthentication_RefreshToken_Revoke_Request {
  token_id?: Long;
  steamid?: Long;
  revoke_action?: EAuthTokenRevokeAction;
  signature?: Buffer;
}

export type CAuthentication_RefreshToken_Revoke_Response = Record<string, never>;

export interface CAuthenticationSupport_QueryRefreshTokensByAccount_Request {
  steamid?: Long;
  include_revoked_tokens?: boolean;
}

export interface CSupportRefreshTokenDescription {
  token_id?: Long;
  token_description?: string;
  time_updated?: number;
  platform_type?: EAuthTokenPlatformType;
  token_state?: EAuthTokenState;
  owner_steamid?: Long;
  os_platform?: number;
  os_type?: number;
  auth_type?: number;
  gaming_device_type?: number;
  first_seen?: CSupportRefreshTokenDescription.TokenUsageEvent;
  last_seen?: CSupportRefreshTokenDescription.TokenUsageEvent;
}

export namespace CSupportRefreshTokenDescription {
  export interface TokenUsageEvent {
    time?: number;
    ip?: CMsgIPAddress;
    country?: string;
    state?: string;
    city?: string;
  }
}

export interface CAuthenticationSupport_QueryRefreshTokensByAccount_Response {
  refresh_tokens?: CSupportRefreshTokenDescription[];
  last_token_reset?: number;
}

export interface CAuthenticationSupport_QueryRefreshTokenByID_Request {
  token_id?: Long;
}

export interface CAuthenticationSupport_QueryRefreshTokenByID_Response {
  refresh_tokens?: CSupportRefreshTokenDescription[];
}

export interface CAuthenticationSupport_RevokeToken_Request {
  token_id?: Long;
  steamid?: Long;
}

export type CAuthenticationSupport_RevokeToken_Response = Record<string, never>;

export interface CAuthenticationSupport_GetTokenHistory_Request {
  token_id?: Long;
}

export interface CSupportRefreshTokenAudit {
  action?: number;
  time?: number;
  ip?: CMsgIPAddress;
  actor?: Long;
}

export interface CAuthenticationSupport_GetTokenHistory_Response {
  history?: CSupportRefreshTokenAudit[];
}

export interface CAuthenticationSupport_MarkTokenCompromised_Request {
  steamid?: Long;
  token_id?: Long;
}

export type CAuthenticationSupport_MarkTokenCompromised_Response = Record<string, never>;

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

export interface CCloudGaming_TimeRemaining {
  appid?: number;
  minutes_remaining?: number;
}

export interface CCloudGaming_GetTimeRemaining_Response {
  entries?: CCloudGaming_TimeRemaining[];
}

export abstract class AuthenticationService {
  abstract GetPasswordRSAPublicKey(
    request: CAuthentication_GetPasswordRSAPublicKey_Request,
  ): Promise<CAuthentication_GetPasswordRSAPublicKey_Response>;
  abstract BeginAuthSessionViaQR(
    request: CAuthentication_BeginAuthSessionViaQR_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaQR_Response>;
  abstract BeginAuthSessionViaCredentials(
    request: CAuthentication_BeginAuthSessionViaCredentials_Request,
  ): Promise<CAuthentication_BeginAuthSessionViaCredentials_Response>;
  abstract PollAuthSessionStatus(
    request: CAuthentication_PollAuthSessionStatus_Request,
  ): Promise<CAuthentication_PollAuthSessionStatus_Response>;
  abstract GetAuthSessionInfo(
    request: CAuthentication_GetAuthSessionInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionInfo_Response>;
  abstract GetAuthSessionRiskInfo(
    request: CAuthentication_GetAuthSessionRiskInfo_Request,
  ): Promise<CAuthentication_GetAuthSessionRiskInfo_Response>;
  abstract NotifyRiskQuizResults(
    request: CAuthentication_NotifyRiskQuizResults_Notification,
  ): Promise<void>;
  abstract UpdateAuthSessionWithMobileConfirmation(
    request: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response>;
  abstract UpdateAuthSessionWithSteamGuardCode(
    request: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  ): Promise<CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response>;
  abstract GenerateAccessTokenForApp(
    request: CAuthentication_AccessToken_GenerateForApp_Request,
  ): Promise<CAuthentication_AccessToken_GenerateForApp_Response>;
  abstract EnumerateTokens(
    request: CAuthentication_RefreshToken_Enumerate_Request,
  ): Promise<CAuthentication_RefreshToken_Enumerate_Response>;
  abstract GetAuthSessionsForAccount(
    request: CAuthentication_GetAuthSessionsForAccount_Request,
  ): Promise<CAuthentication_GetAuthSessionsForAccount_Response>;
  abstract RevokeToken(
    request: CAuthentication_Token_Revoke_Request,
  ): Promise<CAuthentication_Token_Revoke_Response>;
  abstract RevokeRefreshToken(
    request: CAuthentication_RefreshToken_Revoke_Request,
  ): Promise<CAuthentication_RefreshToken_Revoke_Response>;
}

export abstract class AuthenticationSupportService {
  abstract QueryRefreshTokensByAccount(
    request: CAuthenticationSupport_QueryRefreshTokensByAccount_Request,
  ): Promise<CAuthenticationSupport_QueryRefreshTokensByAccount_Response>;
  abstract QueryRefreshTokenByID(
    request: CAuthenticationSupport_QueryRefreshTokenByID_Request,
  ): Promise<CAuthenticationSupport_QueryRefreshTokenByID_Response>;
  abstract RevokeToken(
    request: CAuthenticationSupport_RevokeToken_Request,
  ): Promise<CAuthenticationSupport_RevokeToken_Response>;
  abstract GetTokenHistory(
    request: CAuthenticationSupport_GetTokenHistory_Request,
  ): Promise<CAuthenticationSupport_GetTokenHistory_Response>;
  abstract MarkTokenCompromised(
    request: CAuthenticationSupport_MarkTokenCompromised_Request,
  ): Promise<CAuthenticationSupport_MarkTokenCompromised_Response>;
}

export abstract class CloudGamingService {
  abstract CreateNonce(
    request: CCloudGaming_CreateNonce_Request,
  ): Promise<CCloudGaming_CreateNonce_Response>;
  abstract GetTimeRemaining(
    request: CCloudGaming_GetTimeRemaining_Request,
  ): Promise<CCloudGaming_GetTimeRemaining_Response>;
}
