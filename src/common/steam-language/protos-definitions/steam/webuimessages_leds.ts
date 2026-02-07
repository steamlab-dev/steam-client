/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export interface CMsgLEDColor {
  r?: number;
  g?: number;
  b?: number;
}

export interface CMsgLEDManagerDevice {
  id?: number;
  enabled?: boolean;
  name?: string;
  effects_available?: string[];
  effect?: string;
  supports_color?: boolean;
  color?: CMsgLEDColor[];
  supports_speed?: boolean;
  speed?: number;
  supports_brightness?: boolean;
  brightness?: number;
}

export interface CMsgLEDManagerState {
  is_service_available?: boolean;
  devices?: CMsgLEDManagerDevice[];
}

export type CLEDManager_GetState_Request = Record<string, never>;

export interface CLEDManager_GetState_Response {
  state?: CMsgLEDManagerState;
}

export type CLEDManager_StateChanged_Notification = Record<string, never>;

export interface CLEDManager_SetColor_Request {
  device_id?: number;
  color?: CMsgLEDColor;
  color_index?: number;
}

export type CLEDManager_SetColor_Response = Record<string, never>;

export interface CLEDManager_SetEnabled_Request {
  device_id?: number;
  enabled?: boolean;
}

export type CLEDManager_SetEnabled_Response = Record<string, never>;

export interface CLEDManager_SetEffect_Request {
  device_id?: number;
  effect?: string;
}

export type CLEDManager_SetEffect_Response = Record<string, never>;

export interface CLEDManager_SetSpeed_Request {
  device_id?: number;
  speed?: number;
}

export type CLEDManager_SetSpeed_Response = Record<string, never>;

export interface CLEDManager_SetBrightness_Request {
  device_id?: number;
  brightness?: number;
}

export type CLEDManager_SetBrightness_Response = Record<string, never>;

export abstract class LEDManagerService {
  abstract GetState(request: CLEDManager_GetState_Request): Promise<CLEDManager_GetState_Response>;
  abstract NotifyStateChanged(
    request: CLEDManager_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract SetEnabled(
    request: CLEDManager_SetEnabled_Request,
  ): Promise<CLEDManager_SetEnabled_Response>;
  abstract SetColor(request: CLEDManager_SetColor_Request): Promise<CLEDManager_SetColor_Response>;
  abstract SetEffect(
    request: CLEDManager_SetEffect_Request,
  ): Promise<CLEDManager_SetEffect_Response>;
  abstract SetSpeed(request: CLEDManager_SetSpeed_Request): Promise<CLEDManager_SetSpeed_Response>;
  abstract SetBrightness(
    request: CLEDManager_SetBrightness_Request,
  ): Promise<CLEDManager_SetBrightness_Response>;
}
