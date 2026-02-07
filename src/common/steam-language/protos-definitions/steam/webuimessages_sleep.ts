/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export const ESystemPowerState = {
  k_ESystemPowerState_Invalid: 0,
  k_ESystemPowerState_Normal: 1,
  k_ESystemPowerState_LowPowerDownloads: 2,
  k_ESystemPowerState_Sleep: 3,
} as const;

export type ESystemPowerState = (typeof ESystemPowerState)[keyof typeof ESystemPowerState];

export interface CMsgSleepManagerState {
  is_low_power_download_supported?: boolean;
  current_state?: ESystemPowerState;
}

export type CSleepManager_GetState_Request = Record<string, never>;

export interface CSleepManager_GetState_Response {
  state?: CMsgSleepManagerState;
}

export type CSleepManager_StateChanged_Notification = Record<string, never>;

export interface CSleepManager_RequestSuspend_Notification {
  optionally_transition_to_low_power_downloads?: boolean;
}

export type CSleepManager_ResumeFromSuspend_Notification = Record<string, never>;

export type CSleepManager_ShowPowerMenu_Notification = Record<string, never>;

export interface CSleepManager_SwitchToPowerState_Request {
  state?: ESystemPowerState;
  reason?: string;
}

export type CSleepManager_SwitchToPowerState_Response = Record<string, never>;

export type CSleepManager_RequestSleep_Request = Record<string, never>;

export type CSleepManager_RequestSleep_Response = Record<string, never>;

export abstract class SleepManagerService {
  abstract GetState(
    request: CSleepManager_GetState_Request,
  ): Promise<CSleepManager_GetState_Response>;
  abstract NotifyStateChanged(
    request: CSleepManager_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyRequestSuspend(
    request: CSleepManager_RequestSuspend_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyResumeFromSuspend(
    request: CSleepManager_ResumeFromSuspend_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyShowPowerMenu(
    request: CSleepManager_ShowPowerMenu_Notification,
  ): Promise<WebUINoResponse>;
  abstract SwitchToPowerState(
    request: CSleepManager_SwitchToPowerState_Request,
  ): Promise<CSleepManager_SwitchToPowerState_Response>;
  abstract RequestSleep(
    request: CSleepManager_RequestSleep_Request,
  ): Promise<CSleepManager_RequestSleep_Response>;
}
