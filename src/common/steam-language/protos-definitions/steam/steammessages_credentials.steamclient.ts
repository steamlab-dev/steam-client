/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./steammessages_base";

export interface CCredentials_GetSteamGuardDetails_Request {
  webcookie?: string;
  timestamp_minimum_wanted?: number;
  deprecated_ipaddress?: number;
  ip_address?: CMsgIPAddress;
}

export interface CCredentials_GetSteamGuardDetails_Response {
  is_steamguard_enabled?: boolean;
  timestamp_steamguard_enabled?: number;
  deprecated_machine_name_userchosen?: string;
  deprecated_timestamp_machine_steamguard_enabled?: number;
  deprecated_authentication_exists_from_geoloc_before_mintime?: boolean;
  deprecated_machine_id?: Long;
  session_data?: CCredentials_GetSteamGuardDetails_Response.SessionData[];
  is_twofactor_enabled?: boolean;
  timestamp_twofactor_enabled?: number;
  is_phone_verified?: boolean;
}

export namespace CCredentials_GetSteamGuardDetails_Response {
  export interface SessionData {
    machine_id?: Long;
    machine_name_userchosen?: string;
    timestamp_machine_steamguard_enabled?: number;
    authentication_exists_from_geoloc_before_mintime?: boolean;
    authentication_exists_from_same_ip_before_mintime?: boolean;
    public_ipv4?: number;
    public_ip_address?: string;
  }
}

export interface CCredentials_ValidateEmailAddress_Request {
  stoken?: string;
}

export interface CCredentials_ValidateEmailAddress_Response {
  was_validated?: boolean;
}

export interface CCredentials_SteamGuardPhishingReport_Request {
  param_string?: string;
  ipaddress_actual?: string;
}

export interface CCredentials_SteamGuardPhishingReport_Response {
  ipaddress_loginattempt?: string;
  countryname_loginattempt?: string;
  statename_loginattempt?: string;
  cityname_loginattempt?: string;
  ipaddress_actual?: string;
  countryname_actual?: string;
  statename_actual?: string;
  cityname_actual?: string;
  steamguard_code?: string;
}

export interface CCredentials_LastCredentialChangeTime_Request {
  user_changes_only?: boolean;
}

export interface CCredentials_LastCredentialChangeTime_Response {
  timestamp_last_password_change?: number;
  timestamp_last_email_change?: number;
  timestamp_last_password_reset?: number;
}

export type CCredentials_GetAccountAuthSecret_Request = Record<string, never>;

export interface CCredentials_GetAccountAuthSecret_Response {
  secret_id?: number;
  secret?: Buffer;
}

export abstract class CredentialsService {
  abstract GetSteamGuardDetails(
    request: CCredentials_GetSteamGuardDetails_Request,
  ): Promise<CCredentials_GetSteamGuardDetails_Response>;
  abstract ValidateEmailAddress(
    request: CCredentials_ValidateEmailAddress_Request,
  ): Promise<CCredentials_ValidateEmailAddress_Response>;
  abstract SteamGuardPhishingReport(
    request: CCredentials_SteamGuardPhishingReport_Request,
  ): Promise<CCredentials_SteamGuardPhishingReport_Response>;
  abstract GetCredentialChangeTimeDetails(
    request: CCredentials_LastCredentialChangeTime_Request,
  ): Promise<CCredentials_LastCredentialChangeTime_Response>;
  abstract GetAccountAuthSecret(
    request: CCredentials_GetAccountAuthSecret_Request,
  ): Promise<CCredentials_GetAccountAuthSecret_Response>;
}
