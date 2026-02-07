/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CSteamOSSLS_GetState_Request = Record<string, never>;

export interface CSteamOSSLS_GetState_Response {
  state?: CSteamOSSLSState;
}

export interface CSteamOSSLS_SetEnabled_Request {
  enabled?: boolean;
}

export type CSteamOSSLS_SetEnabled_Response = Record<string, never>;

export interface CSteamOSSLS_SetPluginEnabled_Request {
  etype?: number;
  enabled?: boolean;
}

export type CSteamOSSLS_SetPluginEnabled_Response = Record<string, never>;

export type CSteamOSSLS_StateChanged_Notification = Record<string, never>;

export interface CSteamOSSLSPlugin {
  etype?: number;
  is_available?: boolean;
  is_enabled?: boolean;
}

export interface CSteamOSSLSState {
  is_available?: boolean;
  is_enabled?: boolean;
  plugins?: CSteamOSSLSPlugin[];
}

export abstract class SteamOSSLSService {
  abstract GetState(request: CSteamOSSLS_GetState_Request): Promise<CSteamOSSLS_GetState_Response>;
  abstract NotifyStateChanged(request: CSteamOSSLS_StateChanged_Notification): Promise<void>;
  abstract SetEnabled(
    request: CSteamOSSLS_SetEnabled_Request,
  ): Promise<CSteamOSSLS_SetEnabled_Response>;
  abstract SetPluginEnabled(
    request: CSteamOSSLS_SetPluginEnabled_Request,
  ): Promise<CSteamOSSLS_SetPluginEnabled_Response>;
}
