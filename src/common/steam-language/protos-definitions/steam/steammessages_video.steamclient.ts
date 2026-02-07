/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CVideo_ClientGetVideoURL_Request {
  video_id?: Long;
  client_cellid?: number;
}

export interface CVideo_ClientGetVideoURL_Response {
  video_id?: Long;
  video_url?: string;
}

export interface VideoBookmark {
  app_id?: number;
  playback_position_in_seconds?: number;
  video_track_id?: Long;
  audio_track_id?: Long;
  timedtext_track_id?: Long;
  last_modified?: number;
  hide_from_watch_history?: boolean;
  hide_from_library?: boolean;
}

export interface CVideo_SetVideoBookmark_Notification {
  bookmarks?: VideoBookmark[];
}

export interface CVideo_GetVideoBookmarks_Request {
  appids?: number[];
  updated_since?: number;
}

export interface CVideo_GetVideoBookmarks_Response {
  bookmarks?: VideoBookmark[];
}

export interface CVideo_UnlockedH264_Notification {
  encryption_key?: Buffer;
}

export interface CFovasVideo_ClientGetOPFSettings_Request {
  app_id?: number;
  client_cellid?: number;
}

export interface CFovasVideo_ClientGetOPFSettings_Response {
  app_id?: number;
  opf_settings?: string;
}

export abstract class VideoService {
  abstract ClientGetVideoURL(
    request: CVideo_ClientGetVideoURL_Request,
  ): Promise<CVideo_ClientGetVideoURL_Response>;
  abstract SetVideoBookmark(request: CVideo_SetVideoBookmark_Notification): Promise<void>;
  abstract GetVideoBookmarks(
    request: CVideo_GetVideoBookmarks_Request,
  ): Promise<CVideo_GetVideoBookmarks_Response>;
}

export abstract class VideoClientService {
  abstract NotifyUnlockedH264(request: CVideo_UnlockedH264_Notification): Promise<void>;
}

export abstract class FovasVideoService {
  abstract ClientGetOPFSettings(
    request: CFovasVideo_ClientGetOPFSettings_Request,
  ): Promise<CFovasVideo_ClientGetOPFSettings_Response>;
}
