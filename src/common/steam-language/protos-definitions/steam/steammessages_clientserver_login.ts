/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgIPAddress } from "./steammessages_base";

export interface CMsgClientHeartBeat {
  send_reply?: boolean;
}

export interface CMsgClientServerTimestampRequest {
  client_request_timestamp?: Long;
}

export interface CMsgClientServerTimestampResponse {
  client_request_timestamp?: Long;
  server_timestamp_ms?: Long;
}

export interface CMsgClientSecret {
  version?: number;
  appid?: number;
  deviceid?: number;
  nonce?: Long;
  hmac?: Buffer;
}

export interface CMsgClientHello {
  protocol_version?: number;
}

export interface CMsgClientLogon {
  protocol_version?: number;
  deprecated_obfustucated_private_ip?: number;
  cell_id?: number;
  last_session_id?: number;
  client_package_version?: number;
  client_language?: string;
  client_os_type?: number;
  should_remember_password?: boolean;
  wine_version?: string;
  deprecated_10?: number;
  obfuscated_private_ip?: CMsgIPAddress;
  deprecated_public_ip?: number;
  qos_level?: number;
  client_supplied_steam_id?: Long;
  public_ip?: CMsgIPAddress;
  machine_id?: Buffer;
  launcher_type?: number;
  ui_mode?: number;
  chat_mode?: number;
  steam2_auth_ticket?: Buffer;
  email_address?: string;
  rtime32_account_creation?: number;
  account_name?: string;
  password?: string;
  game_server_token?: string;
  login_key?: string;
  was_converted_deprecated_msg?: boolean;
  anon_user_target_account_name?: string;
  resolved_user_steam_id?: Long;
  eresult_sentryfile?: number;
  sha_sentryfile?: Buffer;
  auth_code?: string;
  otp_type?: number;
  otp_value?: number;
  otp_identifier?: string;
  steam2_ticket_request?: boolean;
  sony_psn_ticket?: Buffer;
  sony_psn_service_id?: string;
  create_new_psn_linked_account_if_needed?: boolean;
  sony_psn_name?: string;
  game_server_app_id?: number;
  steamguard_dont_remember_computer?: boolean;
  machine_name?: string;
  machine_name_userchosen?: string;
  country_override?: string;
  client_instance_id?: Long;
  two_factor_code?: string;
  supports_rate_limit_response?: boolean;
  web_logon_nonce?: string;
  priority_reason?: number;
  embedded_client_secret?: CMsgClientSecret;
  disable_partner_autogrants?: boolean;
  access_token?: string;
  is_chrome_os?: boolean;
  is_steam_box_deprecated?: boolean;
  is_steam_deck_deprecated?: boolean;
  is_tesla_deprecated?: boolean;
  gaming_device_type?: number;
}

export interface CMsgClientLogOnResponse {
  eresult?: number;
  legacy_out_of_game_heartbeat_seconds?: number;
  heartbeat_seconds?: number;
  deprecated_public_ip?: number;
  rtime32_server_time?: number;
  account_flags?: number;
  cell_id?: number;
  email_domain?: string;
  steam2_ticket?: Buffer;
  eresult_extended?: number;
  cell_id_ping_threshold?: number;
  deprecated_use_pics?: boolean;
  vanity_url?: string;
  public_ip?: CMsgIPAddress;
  user_country?: string;
  client_supplied_steamid?: Long;
  ip_country_code?: string;
  parental_settings?: Buffer;
  parental_setting_signature?: Buffer;
  count_loginfailures_to_migrate?: number;
  count_disconnects_to_migrate?: number;
  ogs_data_report_time_window?: number;
  client_instance_id?: Long;
  force_client_update_check?: boolean;
  agreement_session_url?: string;
  token_id?: Long;
  family_group_id?: Long;
}

export interface CMsgClientRequestWebAPIAuthenticateUserNonce {
  token_type?: number;
}

export interface CMsgClientRequestWebAPIAuthenticateUserNonceResponse {
  eresult?: number;
  webapi_authenticate_user_nonce?: string;
  token_type?: number;
}

export type CMsgClientLogOff = Record<string, never>;

export interface CMsgClientLoggedOff {
  eresult?: number;
}

export interface CMsgClientNewLoginKey {
  unique_id?: number;
  login_key?: string;
}

export interface CMsgClientNewLoginKeyAccepted {
  unique_id?: number;
}

export interface CMsgClientAccountInfo {
  persona_name?: string;
  ip_country?: string;
  count_authed_computers?: number;
  account_flags?: number;
  steamguard_machine_name_user_chosen?: string;
  is_phone_verified?: boolean;
  two_factor_state?: number;
  is_phone_identifying?: boolean;
  is_phone_needing_reverify?: boolean;
}

export interface CMsgClientChallengeRequest {
  steamid?: Long;
}

export interface CMsgClientChallengeResponse {
  challenge?: Long;
}
