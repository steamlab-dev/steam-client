/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CGamescope_GetState_Request = Record<string, never>;

export interface CGamescope_GetState_Response {
  state?: CMsgGamescopeState;
}

export type CGamescope_ReArmMuraCalibration_Request = Record<string, never>;

export type CGamescope_ReArmMuraCalibration_Response = Record<string, never>;

export interface CGamescope_SetBlurParams_Request {
  mode?: number;
  radius?: number;
  fade_duration_ms?: number;
}

export type CGamescope_SetBlurParams_Response = Record<string, never>;

export interface CGamescope_SetDisplayPowerState_Request {
  estate?: number;
}

export type CGamescope_SetDisplayPowerState_Response = Record<string, never>;

export type CGamescope_StateChanged_Notification = Record<string, never>;

export interface CMsgDisplayInfo {
  make?: string;
  model?: string;
  connector_name?: string;
  supported_refresh_rates?: number[];
  supported_frame_rates?: number[];
  is_external?: boolean;
  is_hdr_capable?: boolean;
  is_vrr_capable?: boolean;
  display_state?: number;
}

export interface CMsgGamescopeState {
  is_service_available?: boolean;
  is_reshade_supported?: boolean;
  is_app_hdr_enabled?: boolean;
  is_app_refresh_rate_supported?: boolean;
  active_display_info?: CMsgDisplayInfo;
  is_app_refresh_rate_capable?: boolean;
  is_refresh_rate_switching_supported?: boolean;
  is_refresh_rate_switching_restricted?: boolean;
  is_hdr_visualization_supported?: boolean;
  is_mura_correction_supported?: boolean;
  is_global_action_binding_supported?: boolean;
  is_look_supported?: boolean;
  look_names?: string[];
  is_display_state_management_supported?: boolean;
}

export abstract class GamescopeService {
  abstract GetState(request: CGamescope_GetState_Request): Promise<CGamescope_GetState_Response>;
  abstract NotifyStateChanged(request: CGamescope_StateChanged_Notification): Promise<void>;
  abstract ReArmMuraCalibration(
    request: CGamescope_ReArmMuraCalibration_Request,
  ): Promise<CGamescope_ReArmMuraCalibration_Response>;
  abstract SetBlurParams(
    request: CGamescope_SetBlurParams_Request,
  ): Promise<CGamescope_SetBlurParams_Response>;
  abstract SetDisplayPowerState(
    request: CGamescope_SetDisplayPowerState_Request,
  ): Promise<CGamescope_SetDisplayPowerState_Response>;
}
