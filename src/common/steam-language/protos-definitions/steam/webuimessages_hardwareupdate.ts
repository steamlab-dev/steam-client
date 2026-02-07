/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export type CHardwareUpdate_GetState_Request = Record<string, never>;

export interface CHardwareUpdate_GetState_Response {
  is_updater_supported?: boolean;
  has_seen_controllers?: boolean;
}

export type CHardwareUpdate_StateChanged_Notification = Record<string, never>;

export type CHardwareUpdate_CheckForUpdates_Request = Record<string, never>;

export interface CMsgAvailableHardwareUpdate {
  etype?: number;
  hardware_id?: number;
  serial_number?: string;
  current_ts?: string;
  update_ts?: string;
}

export interface CHardwareUpdate_CheckForUpdates_Response {
  updates?: CMsgAvailableHardwareUpdate[];
}

export interface CHardwareUpdate_Update_Request {
  serial_number?: string;
}

export type CHardwareUpdate_Update_Response = Record<string, never>;

export interface CHardwareUpdate_UpdateProgress_Notification {
  progress?: number;
}

export type CHardwareUpdate_UpdateStateChanged_Notification = Record<string, never>;

export interface CHardwareUpdate_PrepForUpdate_Request {
  serial_number?: string;
}

export type CHardwareUpdate_PrepForUpdate_Response = Record<string, never>;

export abstract class HardwareUpdateService {
  abstract GetState(
    request: CHardwareUpdate_GetState_Request,
  ): Promise<CHardwareUpdate_GetState_Response>;
  abstract NotifyStateChanged(
    request: CHardwareUpdate_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract CheckForUpdates(
    request: CHardwareUpdate_CheckForUpdates_Request,
  ): Promise<CHardwareUpdate_CheckForUpdates_Response>;
  abstract PrepForUpdate(
    request: CHardwareUpdate_PrepForUpdate_Request,
  ): Promise<CHardwareUpdate_PrepForUpdate_Response>;
  abstract Update(
    request: CHardwareUpdate_Update_Request,
  ): Promise<CHardwareUpdate_Update_Response>;
  abstract NotifyUpdateProgress(
    request: CHardwareUpdate_UpdateProgress_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyUpdateStateChanged(
    request: CHardwareUpdate_UpdateStateChanged_Notification,
  ): Promise<WebUINoResponse>;
}
