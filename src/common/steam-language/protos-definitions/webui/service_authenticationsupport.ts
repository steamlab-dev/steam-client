/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./common";

export interface CAuthenticationSupport_GetTokenHistory_Request {
  token_id?: Long;
}

export interface CAuthenticationSupport_GetTokenHistory_Response {
  history?: CSupportRefreshTokenAudit[];
}

export interface CAuthenticationSupport_MarkTokenCompromised_Request {
  steamid?: Long;
  token_id?: Long;
}

export type CAuthenticationSupport_MarkTokenCompromised_Response = Record<string, never>;

export interface CAuthenticationSupport_QueryRefreshTokenByID_Request {
  token_id?: Long;
}

export interface CAuthenticationSupport_QueryRefreshTokenByID_Response {
  refresh_tokens?: CSupportRefreshTokenDescription[];
}

export interface CAuthenticationSupport_QueryRefreshTokensByAccount_Request {
  steamid?: Long;
  include_revoked_tokens?: boolean;
}

export interface CAuthenticationSupport_QueryRefreshTokensByAccount_Response {
  refresh_tokens?: CSupportRefreshTokenDescription[];
  last_token_reset?: number;
}

export interface CAuthenticationSupport_RevokeToken_Request {
  token_id?: Long;
  steamid?: Long;
}

export type CAuthenticationSupport_RevokeToken_Response = Record<string, never>;

export interface CSupportRefreshTokenAudit {
  action?: number;
  time?: number;
  ip?: CMsgIPAddress;
  actor?: Long;
}

export interface CSupportRefreshTokenDescription {
  token_id?: Long;
  token_description?: string;
  time_updated?: number;
  platform_type?: number;
  token_state?: number;
  owner_steamid?: Long;
  os_platform?: number;
  os_type?: number;
  auth_type?: number;
  gaming_device_type?: number;
  first_seen?: CSupportRefreshTokenDescription_TokenUsageEvent;
  last_seen?: CSupportRefreshTokenDescription_TokenUsageEvent;
}

export interface CSupportRefreshTokenDescription_TokenUsageEvent {
  time?: number;
  ip?: CMsgIPAddress;
  country?: string;
  state?: string;
  city?: string;
}

export abstract class AuthenticationSupportService {
  abstract GetTokenHistory(
    request: CAuthenticationSupport_GetTokenHistory_Request,
  ): Promise<CAuthenticationSupport_GetTokenHistory_Response>;
  abstract MarkTokenCompromised(
    request: CAuthenticationSupport_MarkTokenCompromised_Request,
  ): Promise<CAuthenticationSupport_MarkTokenCompromised_Response>;
  abstract QueryRefreshTokenByID(
    request: CAuthenticationSupport_QueryRefreshTokenByID_Request,
  ): Promise<CAuthenticationSupport_QueryRefreshTokenByID_Response>;
  abstract QueryRefreshTokensByAccount(
    request: CAuthenticationSupport_QueryRefreshTokensByAccount_Request,
  ): Promise<CAuthenticationSupport_QueryRefreshTokensByAccount_Response>;
  abstract RevokeToken(
    request: CAuthenticationSupport_RevokeToken_Request,
  ): Promise<CAuthenticationSupport_RevokeToken_Response>;
}
