/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMsgClientSiteInfo {
  site_id?: bigint;
  site_name?: string;
  allow_cached_credentials?: boolean;
}

export interface CMsgClientSiteLicenseCheckout {
  appid?: number;
}

export interface CMsgClientSiteLicenseCheckoutResponse {
  eresult?: number;
}

export interface CMsgClientSiteLicenseGetAvailableSeats {
  appid?: number;
}

export interface CMsgClientSiteLicenseGetAvailableSeatsResponse {
  eresult?: number;
  seats?: number;
}

export type CMsgClientSiteLicenseGetContentCacheInfo = Record<string, never>;

export interface CMsgClientSiteLicenseGetContentCacheInfoResponse {
  use_cache?: boolean;
  ipv4_address?: number;
  port_number?: number;
  p2p_group?: number;
  ip_address?: string;
}
