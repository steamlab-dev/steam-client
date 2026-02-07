/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { WebUINoResponse } from "./webuimessages_base";

export interface CSteamEngine_UpdateTextFilterDictionary_Notification {
  language?: string;
  type?: string;
}

export interface CSteamEngine_GetTextFilterDictionary_Request {
  language?: string;
  type?: string;
}

export interface CSteamEngine_GetTextFilterDictionary_Response {
  dictionary?: string;
}

export interface CSteamEngine_TextFilterDictionaryChanged_Notification {
  language?: string;
  type?: string;
}

export interface CSteamEngine_GetGameIDForPID_Request {
  pid?: number;
}

export interface CSteamEngine_GetGameIDForPID_Response {
  gameid?: Long;
}

export interface CSteamEngine_SetOverlayEscapeKeyHandling_Notification {
  gameid?: Long;
  should_handle?: boolean;
}

export interface CSteamEngine_SearchAppDataCacheByStoreKeywords_Request {
  search_term?: string;
  max_results?: number;
}

export interface CSteamEngine_SearchAppDataCacheByStoreKeywords_Response {
  appids?: number[];
}

export abstract class SteamEngineService {
  abstract UpdateTextFilterDictionary(
    request: CSteamEngine_UpdateTextFilterDictionary_Notification,
  ): Promise<WebUINoResponse>;
  abstract GetTextFilterDictionary(
    request: CSteamEngine_GetTextFilterDictionary_Request,
  ): Promise<CSteamEngine_GetTextFilterDictionary_Response>;
  abstract NotifyTextFilterDictionaryChanged(
    request: CSteamEngine_TextFilterDictionaryChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract GetGameIDForPID(
    request: CSteamEngine_GetGameIDForPID_Request,
  ): Promise<CSteamEngine_GetGameIDForPID_Response>;
  abstract SetOverlayEscapeKeyHandling(
    request: CSteamEngine_SetOverlayEscapeKeyHandling_Notification,
  ): Promise<WebUINoResponse>;
  abstract SearchAppDataCacheByStoreKeywords(
    request: CSteamEngine_SearchAppDataCacheByStoreKeywords_Request,
  ): Promise<CSteamEngine_SearchAppDataCacheByStoreKeywords_Response>;
}
