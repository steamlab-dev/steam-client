/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgSteamUIBrowserWindow {
  id?: number;
  pid?: number;
  browser_id?: number;
  window_type?: number;
  x?: number;
  y?: number;
  appid?: Long;
  parent_window_handle?: Long;
  app_name?: string;
  gamepadui_via_gamescope?: boolean;
}

export type CSharedJSContext_GetDesiredSteamUIWindows_Request = Record<string, never>;

export interface CSharedJSContext_GetDesiredSteamUIWindows_Response {
  windows?: CMsgSteamUIBrowserWindow[];
}

export abstract class SharedJSContextService {
  abstract GetDesiredSteamUIWindows(
    request: CSharedJSContext_GetDesiredSteamUIWindows_Request,
  ): Promise<CSharedJSContext_GetDesiredSteamUIWindows_Response>;
}
