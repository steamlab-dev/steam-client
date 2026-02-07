/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CRemoveAuthenticatorViaChallengeContinue_Replacement_Token {
  shared_secret?: Buffer;
  serial_number?: Long;
  revocation_code?: string;
  uri?: string;
  server_time?: Long;
  account_name?: string;
  token_gid?: string;
  identity_secret?: Buffer;
  secret_1?: Buffer;
  status?: number;
  steamguard_scheme?: number;
  steamid?: Long;
}

export interface CTwoFactor_AddAuthenticator_Request {
  steamid?: Long;
  authenticator_time?: Long;
  serial_number?: Long;
  authenticator_type?: number;
  device_identifier?: string;
  http_headers?: string[];
  version?: number;
}

export interface CTwoFactor_AddAuthenticator_Response {
  shared_secret?: Buffer;
  serial_number?: Long;
  revocation_code?: string;
  uri?: string;
  server_time?: Long;
  account_name?: string;
  token_gid?: string;
  identity_secret?: Buffer;
  secret_1?: Buffer;
  status?: number;
  phone_number_hint?: string;
  confirm_type?: number;
}

export interface CTwoFactor_FinalizeAddAuthenticator_Request {
  steamid?: Long;
  authenticator_code?: string;
  authenticator_time?: Long;
  activation_code?: string;
  http_headers?: string[];
  validate_sms_code?: boolean;
}

export interface CTwoFactor_FinalizeAddAuthenticator_Response {
  success?: boolean;
  server_time?: Long;
  status?: number;
}

export interface CTwoFactor_RemoveAuthenticator_Request {
  revocation_code?: string;
  revocation_reason?: number;
  steamguard_scheme?: number;
  remove_all_steamguard_cookies?: boolean;
}

export interface CTwoFactor_RemoveAuthenticator_Response {
  success?: boolean;
  server_time?: Long;
  revocation_attempts_remaining?: number;
}

export interface CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request {
  sms_code?: string;
  generate_new_token?: boolean;
  version?: number;
}

export interface CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response {
  success?: boolean;
  replacement_token?: CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;
}

export type CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request = Record<string, never>;

export interface CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response {
  success?: boolean;
}

export interface CTwoFactor_Status_Request {
  steamid?: Long;
  include?: number;
}

export interface CTwoFactor_Status_Response {
  state?: number;
  inactivation_reason?: number;
  authenticator_type?: number;
  authenticator_allowed?: boolean;
  steamguard_scheme?: number;
  token_gid?: string;
  email_validated?: boolean;
  device_identifier?: string;
  time_created?: number;
  revocation_attempts_remaining?: number;
  classified_agent?: string;
  allow_external_authenticator?: boolean;
  time_transferred?: number;
  version?: number;
  last_seen_auth_token_id?: Long;
  usages?: CTwoFactor_UsageEvent[];
}

export interface CTwoFactor_Time_Request {
  sender_time?: Long;
}

export interface CTwoFactor_Time_Response {
  server_time?: Long;
  skew_tolerance_seconds?: Long;
  large_time_jink?: Long;
  probe_frequency_seconds?: number;
  adjusted_time_probe_frequency_seconds?: number;
  hint_probe_frequency_seconds?: number;
  sync_timeout?: number;
  try_again_seconds?: number;
  max_attempts?: number;
}

export interface CTwoFactor_UpdateTokenVersion_Request {
  steamid?: Long;
  version?: number;
  signature?: Buffer;
}

export type CTwoFactor_UpdateTokenVersion_Response = Record<string, never>;

export interface CTwoFactor_UsageEvent {
  time?: number;
  usage_type?: number;
  confirmation_type?: number;
  confirmation_action?: number;
}

export abstract class TwoFactorService {
  abstract AddAuthenticator(
    request: CTwoFactor_AddAuthenticator_Request,
  ): Promise<CTwoFactor_AddAuthenticator_Response>;
  abstract FinalizeAddAuthenticator(
    request: CTwoFactor_FinalizeAddAuthenticator_Request,
  ): Promise<CTwoFactor_FinalizeAddAuthenticator_Response>;
  abstract QueryStatus(request: CTwoFactor_Status_Request): Promise<CTwoFactor_Status_Response>;
  abstract QueryTime(request: CTwoFactor_Time_Request): Promise<CTwoFactor_Time_Response>;
  abstract RemoveAuthenticator(
    request: CTwoFactor_RemoveAuthenticator_Request,
  ): Promise<CTwoFactor_RemoveAuthenticator_Response>;
  abstract RemoveAuthenticatorViaChallengeContinue(
    request: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request,
  ): Promise<CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response>;
  abstract RemoveAuthenticatorViaChallengeStart(
    request: CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request,
  ): Promise<CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response>;
  abstract UpdateTokenVersion(
    request: CTwoFactor_UpdateTokenVersion_Request,
  ): Promise<CTwoFactor_UpdateTokenVersion_Response>;
}
