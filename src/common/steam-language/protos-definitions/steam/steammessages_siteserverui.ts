/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface SiteServerUI_Login_Request {
  username?: string;
  password?: string;
  steamguardcode?: string;
  remember_password?: boolean;
}

export interface SiteServerUI_Login_Response {
  logon_state?: number;
  logon_eresult?: number;
}

export type SiteServerUI_LoginStatus_Request = Record<string, never>;

export interface SiteServerUI_LoginStatus_Response {
  username?: string;
  cached_credentials?: boolean;
  logon_state?: number;
  logon_eresult?: number;
}

export type SiteServerUI_CancelLogin_Request = Record<string, never>;

export interface SiteServerUI_CancelLogin_Response {
  logon_state?: number;
  logon_eresult?: number;
}

export type SiteServerUI_Logout_Request = Record<string, never>;

export interface SiteServerUI_Logout_Response {
  logon_state?: number;
  logout_eresult?: number;
}

export interface SiteServerUI_Quit_Request {
  restart?: boolean;
}

export type SiteServerUI_Quit_Response = Record<string, never>;

export type SiteServerUI_Status_Request = Record<string, never>;

export interface SiteServerUI_Status_Response {
  logon_state?: number;
  logon_eresult?: number;
  connected?: boolean;
  cache_enabled?: boolean;
  acct_status?: number;
}

export type SiteServerUI_GetLanguage_Request = Record<string, never>;

export interface SiteServerUI_GetLanguage_Response {
  language?: string;
}

export interface SiteServerUI_SetLanguage_Request {
  language?: string;
}

export type SiteServerUI_SetLanguage_Response = Record<string, never>;

export type SiteServerUI_ClientStatus_Request = Record<string, never>;

export interface SiteServerUI_ClientStatus_Response {
  clients?: SiteServerUI_ClientStatus_Response.ClientInfo[];
  payments?: SiteServerUI_ClientStatus_Response.Payment[];
}

export namespace SiteServerUI_ClientStatus_Response {
  export interface ClientInfo {
    ip?: number;
    hostname?: string;
    connected?: boolean;
    instance_id?: Long;
  }

  export interface Payment {
    transid?: Long;
    steamid?: Long;
    amount?: string;
    time_created?: number;
    purchase_status?: number;
    hostname?: string;
    persona_name?: string;
    profile_url?: string;
    avatar_url?: string;
  }
}

export type SiteServerUI_ContentCacheStatus_Request = Record<string, never>;

export interface SiteServerUI_ContentCacheStatus_Response {
  enabled?: boolean;
  port?: number;
  cache_location?: string;
  max_size_gb?: number;
  p2p_enabled?: boolean;
  explicit_ip_address?: string;
  external_process?: boolean;
  current_size_gb?: number;
  current_bw?: Long;
  total_bytes_served?: Long;
}

export interface SiteServerUI_ContentCacheConfig_Request {
  enabled?: boolean;
  port?: number;
  cache_location?: string;
  max_size_gb?: number;
  p2p_enabled?: boolean;
  external_process?: boolean;
  explicit_ip_address?: string;
}

export type SiteServerUI_ContentCacheConfig_Response = Record<string, never>;
