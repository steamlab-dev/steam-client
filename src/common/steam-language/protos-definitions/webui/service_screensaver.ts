/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CScreensaver_ActiveStateChanged_Notification {
  active?: boolean;
}

export type CScreensaver_GetActiveState_Request = Record<string, never>;

export interface CScreensaver_GetActiveState_Response {
  active?: boolean;
}

export abstract class ScreensaverService {
  abstract GetActiveState(
    request: CScreensaver_GetActiveState_Request,
  ): Promise<CScreensaver_GetActiveState_Response>;
  abstract NotifyActiveStateChanged(
    request: CScreensaver_ActiveStateChanged_Notification,
  ): Promise<void>;
}
