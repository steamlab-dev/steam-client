/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { ESLSHelper, EStartupMovieVariant } from "./enums";
import type { WebUINoResponse } from "./webuimessages_base";

export interface CMsgFactoryResetState {
  is_running?: boolean;
  progress?: number;
  is_restart_pending?: boolean;
  rtime_estimated_completion?: number;
}

export interface CSteamOSManagerState {
  is_service_available?: boolean;
  os_version?: string;
  is_mandatory_update_available?: boolean;
  startup_movie_variant?: EStartupMovieVariant;
  is_status_led_control_available?: boolean;
  factory_reset_state?: CMsgFactoryResetState;
  is_tdp_limit_available?: boolean;
  tdp_limit_min?: number;
  tdp_limit_max?: number;
  is_cec_available?: boolean;
  is_wifi_debug_supported?: boolean;
  is_wifi_debug_force_disabled?: boolean;
  is_wifi_force_wpa_supplicant_supported?: boolean;
  is_manual_gpu_clock_available?: boolean;
  manual_gpu_clock_min?: number;
  manual_gpu_clock_max?: number;
  platform_performance_profiles_available?: string[];
  platform_performance_profile_default?: string;
  is_charge_limit_available?: boolean;
  charge_limit_min?: number;
  charge_limit_max?: number;
  charge_limit_default?: number;
  is_screen_reader_supported?: boolean;
  screen_reader_locales_available?: string[];
  screen_reader_locale_default?: string;
  is_system_tracing_available?: boolean;
  is_vrs_available?: boolean;
  is_wifi_driver_reload_available?: boolean;
  is_password_change_supported?: boolean;
}

export type CSteamOSManager_GetState_Request = Record<string, never>;

export interface CSteamOSManager_GetState_Response {
  state?: CSteamOSManagerState;
}

export type CSteamOSManager_StateChanged_Notification = Record<string, never>;

export interface CSteamOSManager_IsTelemetryHelperAvailable_Request {
  etype?: ESLSHelper;
}

export interface CSteamOSManager_IsTelemetryHelperAvailable_Response {
  available?: boolean;
}

export type CSteamOSManager_OptOutOfSideloadedClient_Request = Record<string, never>;

export type CSteamOSManager_OptOutOfSideloadedClient_Response = Record<string, never>;

export type CSteamOSManager_ApplyMandatoryUpdate_Request = Record<string, never>;

export type CSteamOSManager_ApplyMandatoryUpdate_Response = Record<string, never>;

export interface CSteamOSManager_FactoryReset_Request {
  reset_os?: boolean;
  reset_user_data?: boolean;
}

export type CSteamOSManager_FactoryReset_Response = Record<string, never>;

export type CSteamOSManager_RefreshScreenReaderAutoLocale_Request = Record<string, never>;

export type CSteamOSManager_RefreshScreenReaderAutoLocale_Response = Record<string, never>;

export interface CSteamOS_SetUserPassword_Request {
  current_password?: string;
  new_password?: string;
}

export type CSteamOS_SetUserPassword_Response = Record<string, never>;

export type CSteamOS_GetUserHasPassword_Request = Record<string, never>;

export interface CSteamOS_GetUserHasPassword_Response {
  has_password?: boolean;
}

export interface CSteamOSManager_PrepareFactoryImageTest_Request {
  factory_reset?: boolean;
}

export type CSteamOSManager_PrepareFactoryImageTest_Response = Record<string, never>;

export interface CSteamOSSLSPlugin {
  etype?: ESLSHelper;
  is_available?: boolean;
  is_enabled?: boolean;
}

export interface CSteamOSSLSState {
  is_available?: boolean;
  is_enabled?: boolean;
  plugins?: CSteamOSSLSPlugin[];
}

export type CSteamOSSLS_GetState_Request = Record<string, never>;

export interface CSteamOSSLS_GetState_Response {
  state?: CSteamOSSLSState;
}

export type CSteamOSSLS_StateChanged_Notification = Record<string, never>;

export interface CSteamOSSLS_SetEnabled_Request {
  enabled?: boolean;
}

export type CSteamOSSLS_SetEnabled_Response = Record<string, never>;

export interface CSteamOSSLS_SetPluginEnabled_Request {
  etype?: ESLSHelper;
  enabled?: boolean;
}

export type CSteamOSSLS_SetPluginEnabled_Response = Record<string, never>;

export abstract class SteamOSManagerService {
  abstract GetState(
    request: CSteamOSManager_GetState_Request,
  ): Promise<CSteamOSManager_GetState_Response>;
  abstract NotifyStateChanged(
    request: CSteamOSManager_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract OptOutOfSideloadedClient(
    request: CSteamOSManager_OptOutOfSideloadedClient_Request,
  ): Promise<CSteamOSManager_OptOutOfSideloadedClient_Response>;
  abstract ApplyMandatoryUpdate(
    request: CSteamOSManager_ApplyMandatoryUpdate_Request,
  ): Promise<CSteamOSManager_ApplyMandatoryUpdate_Response>;
  abstract FactoryReset(
    request: CSteamOSManager_FactoryReset_Request,
  ): Promise<CSteamOSManager_FactoryReset_Response>;
  abstract PrepareFactoryImageTest(
    request: CSteamOSManager_PrepareFactoryImageTest_Request,
  ): Promise<CSteamOSManager_PrepareFactoryImageTest_Response>;
  abstract RefreshScreenReaderAutoLocale(
    request: CSteamOSManager_RefreshScreenReaderAutoLocale_Request,
  ): Promise<CSteamOSManager_RefreshScreenReaderAutoLocale_Response>;
  abstract SetUserPassword(
    request: CSteamOS_SetUserPassword_Request,
  ): Promise<CSteamOS_SetUserPassword_Response>;
  abstract GetUserHasPassword(
    request: CSteamOS_GetUserHasPassword_Request,
  ): Promise<CSteamOS_GetUserHasPassword_Response>;
}

export abstract class SteamOSSLSService {
  abstract GetState(request: CSteamOSSLS_GetState_Request): Promise<CSteamOSSLS_GetState_Response>;
  abstract NotifyStateChanged(
    request: CSteamOSSLS_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract SetEnabled(
    request: CSteamOSSLS_SetEnabled_Request,
  ): Promise<CSteamOSSLS_SetEnabled_Response>;
  abstract SetPluginEnabled(
    request: CSteamOSSLS_SetPluginEnabled_Request,
  ): Promise<CSteamOSSLS_SetPluginEnabled_Response>;
}
