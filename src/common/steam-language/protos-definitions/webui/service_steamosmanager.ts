/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CMsgFactoryResetState {
  is_running?: boolean;
  progress?: number;
  is_restart_pending?: boolean;
  rtime_estimated_completion?: number;
}

export type CSteamOS_GetUserHasPassword_Request = Record<string, never>;

export interface CSteamOS_GetUserHasPassword_Response {
  has_password?: boolean;
}

export interface CSteamOS_SetUserPassword_Request {
  current_password?: string;
  new_password?: string;
}

export type CSteamOS_SetUserPassword_Response = Record<string, never>;

export type CSteamOSManager_ApplyMandatoryUpdate_Request = Record<string, never>;

export type CSteamOSManager_ApplyMandatoryUpdate_Response = Record<string, never>;

export interface CSteamOSManager_FactoryReset_Request {
  reset_os?: boolean;
  reset_user_data?: boolean;
}

export type CSteamOSManager_FactoryReset_Response = Record<string, never>;

export type CSteamOSManager_GetState_Request = Record<string, never>;

export interface CSteamOSManager_GetState_Response {
  state?: CSteamOSManagerState;
}

export type CSteamOSManager_OptOutOfSideloadedClient_Request = Record<string, never>;

export type CSteamOSManager_OptOutOfSideloadedClient_Response = Record<string, never>;

export interface CSteamOSManager_PrepareFactoryImageTest_Request {
  factory_reset?: boolean;
}

export type CSteamOSManager_PrepareFactoryImageTest_Response = Record<string, never>;

export type CSteamOSManager_RefreshScreenReaderAutoLocale_Request = Record<string, never>;

export type CSteamOSManager_RefreshScreenReaderAutoLocale_Response = Record<string, never>;

export type CSteamOSManager_StateChanged_Notification = Record<string, never>;

export interface CSteamOSManagerState {
  is_service_available?: boolean;
  os_version?: string;
  is_mandatory_update_available?: boolean;
  startup_movie_variant?: number;
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

export abstract class SteamOSManagerService {
  abstract ApplyMandatoryUpdate(
    request: CSteamOSManager_ApplyMandatoryUpdate_Request,
  ): Promise<CSteamOSManager_ApplyMandatoryUpdate_Response>;
  abstract FactoryReset(
    request: CSteamOSManager_FactoryReset_Request,
  ): Promise<CSteamOSManager_FactoryReset_Response>;
  abstract GetState(
    request: CSteamOSManager_GetState_Request,
  ): Promise<CSteamOSManager_GetState_Response>;
  abstract GetUserHasPassword(
    request: CSteamOS_GetUserHasPassword_Request,
  ): Promise<CSteamOS_GetUserHasPassword_Response>;
  abstract NotifyStateChanged(request: CSteamOSManager_StateChanged_Notification): Promise<void>;
  abstract OptOutOfSideloadedClient(
    request: CSteamOSManager_OptOutOfSideloadedClient_Request,
  ): Promise<CSteamOSManager_OptOutOfSideloadedClient_Response>;
  abstract PrepareFactoryImageTest(
    request: CSteamOSManager_PrepareFactoryImageTest_Request,
  ): Promise<CSteamOSManager_PrepareFactoryImageTest_Response>;
  abstract RefreshScreenReaderAutoLocale(
    request: CSteamOSManager_RefreshScreenReaderAutoLocale_Request,
  ): Promise<CSteamOSManager_RefreshScreenReaderAutoLocale_Response>;
  abstract SetUserPassword(
    request: CSteamOS_SetUserPassword_Request,
  ): Promise<CSteamOS_SetUserPassword_Response>;
}
