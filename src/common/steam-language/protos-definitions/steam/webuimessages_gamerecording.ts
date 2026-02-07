/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EExportCodec, EGameRecordingType } from "./enums";
import type { WebUINoResponse } from "./webuimessages_base";
import type {
  CGameRecordingTimelineEvent,
  CGameRecordingTimelineMetadata,
  CPhaseAttribute,
  CTimelineTag,
} from "./webuimessages_gamerecordingfiles";

export const ETimelineEntryType = {
  k_ETimelineEntryType_Invalid: 0,
  k_ETimelineEntryType_GameMode: 1,
  k_ETimelineEntryType_Event: 2,
  k_ETimelineEntryType_StateDescription: 3,
  k_ETimelineEntryType_Achievement: 4,
  k_ETimelineEntryType_UserMarker: 5,
  k_ETimelineEntryType_Screenshot: 6,
  k_ETimelineEntryType_Error: 7,
  k_ETimelineEntryType_Tag: 8,
  k_ETimelineEntryType_GamePhase: 9,
} as const;

export type ETimelineEntryType = (typeof ETimelineEntryType)[keyof typeof ETimelineEntryType];

export const EPhaseResultType = {
  k_EPhaseResultType_Automatic: 1,
  k_EPhaseResultType_Blank: 2,
  k_EPhaseResultType_API: 3,
} as const;

export type EPhaseResultType = (typeof EPhaseResultType)[keyof typeof EPhaseResultType];

export const ETimelineChangeNotificationType = {
  k_ETimelineChangeNotificationType_Started: 1,
  k_ETimelineChangeNotificationType_Stopped: 2,
  k_ETimelineChangeNotificationType_Deleted: 3,
  k_ETimelineChangeNotificationType_RecordingStarted: 4,
  k_ETimelineChangeNotificationType_RecordingStopped: 5,
  k_ETimelineChangeNotificationType_RecordingUpdated: 6,
} as const;

export type ETimelineChangeNotificationType =
  (typeof ETimelineChangeNotificationType)[keyof typeof ETimelineChangeNotificationType];

export const ERecordingSessionChangeNotificationType = {
  k_ERecordingSessionChangeNotificationType_Started: 1,
  k_ERecordingSessionChangeNotificationType_Stopped: 2,
  k_ERecordingSessionChangeNotificationType_Deleted: 3,
  k_ERecordingSessionChangeNotificationType_Updated: 4,
} as const;

export type ERecordingSessionChangeNotificationType =
  (typeof ERecordingSessionChangeNotificationType)[keyof typeof ERecordingSessionChangeNotificationType];

export const EDiskSpaceType = {
  k_eDiskSpaceType_Recording: 0,
  k_eDiskSpaceType_Clip: 1,
} as const;

export type EDiskSpaceType = (typeof EDiskSpaceType)[keyof typeof EDiskSpaceType];

export const EThumbnailTimePrecision = {
  k_ePrecise: 0,
  k_eLoose: 1,
} as const;

export type EThumbnailTimePrecision =
  (typeof EThumbnailTimePrecision)[keyof typeof EThumbnailTimePrecision];

export const EThumbnailFormat = {
  k_eJPEG: 1,
  k_eRGB: 2,
} as const;

export type EThumbnailFormat = (typeof EThumbnailFormat)[keyof typeof EThumbnailFormat];

export type CGameRecording_GetAppsWithBackgroundVideo_Request = Record<string, never>;

export interface CGameRecording_GetAppsWithBackgroundVideo_Response {
  apps?: CGameRecording_GetAppsWithBackgroundVideo_Response.App[];
}

export namespace CGameRecording_GetAppsWithBackgroundVideo_Response {
  export interface App {
    game_id?: Long;
    most_recent_start_time?: number;
    recording_type?: EGameRecordingType;
    video_duration_seconds?: number;
    timeline_duration_seconds?: number;
    is_active?: boolean;
    file_size?: Long;
  }
}

export interface CGameRecording_GetTimelinesForApp_Request {
  game_id?: Long;
}

export interface CGameRecording_GetTimelinesForApp_Response {
  timelines?: CGameRecordingTimelineMetadata[];
}

export interface CGameRecording_GetTimelinesForClip_Request {
  clip_id?: string;
}

export interface CGameRecording_GetTimelinesForClip_Response {
  game_id?: Long;
  timelines?: CGameRecordingTimelineMetadata[];
  first_timeline_start_offset_ms?: Long;
}

export interface CGameRecording_QueryPhases_Request {
  page?: number;
  count?: number;
  filter_gameid?: Long;
  filter_search_string?: string;
  filter_tags?: CGameRecording_QueryPhases_Request.Tag[];
  filter_phase_id?: string;
}

export namespace CGameRecording_QueryPhases_Request {
  export interface Tag {
    group?: string;
    name?: string;
  }
}

export interface CGameRecording_QueryPhases_Response {
  phases?: CGameRecording_QueryPhases_Response.Phase[];
  total_count?: number;
}

export namespace CGameRecording_QueryPhases_Response {
  export interface Phase {
    game_id?: Long;
    date_recorded?: number;
    duration_ms?: Long;
    tags?: CTimelineTag[];
    contained_tags?: CTimelineTag[];
    clip_ids?: string[];
    type?: EPhaseResultType;
    start_ms?: Long;
    screenshots?: number[];
    active?: boolean;
    phase_id?: string;
    significant_events?: CTimelineEntry[];
    attributes?: CPhaseAttribute[];
  }

  export namespace Phase {
    export interface BackgroundRecording {
      timeline_id?: string;
      offset?: Long;
      duration_ms?: Long;
    }
  }
}

export interface CGameRecording_GetTags_Request {
  game_id?: Long;
}

export interface CGameRecording_GetTags_Response {
  tags?: CTimelineTag[];
}

export type CGameRecording_GetEnoughDiskSpace_Request = Record<string, never>;

export interface CGameRecording_GetEnoughDiskSpace_Response {
  enough_space?: boolean;
}

export type CGameRecording_GetAvailableDiskSpace_Request = Record<string, never>;

export interface CGameRecording_GetAvailableDiskSpace_Response {
  size?: number;
}

export interface CGameRecording_TimelineChanged_Notification {
  notification_type?: ETimelineChangeNotificationType;
  timeline_id?: string;
  game_id?: Long;
  start_time?: number;
  duration_ms?: Long;
}

export interface CGameRecording_RecordingSessionChanged_Notification {
  notification_type?: ERecordingSessionChangeNotificationType;
  timeline_id?: string;
  game_id?: Long;
  session_id?: string;
  start_offset?: Long;
  duration_ms?: Long;
  recording_type?: EGameRecordingType;
}

export interface CTimelineEntry {
  timeline_id?: string;
  entry_id?: Long;
  time?: Long;
  type?: ETimelineEntryType;
  game_mode?: number;
  range_title?: string;
  range_duration?: Long;
  range_possible_clip?: number;
  timestamp_title?: string;
  marker_icon?: string;
  marker_description?: string;
  marker_priority?: number;
  screenshot_handle?: number;
  achievement_name?: string;
  tag?: CTimelineTag[];
  phase_id?: string;
  attributes?: CPhaseAttribute[];
}

export interface CGameRecording_TimelineEntryChanged_Notification {
  entry?: CTimelineEntry;
  game_id?: Long;
}

export interface CGameRecording_TimelineEntryRemoved_Notification {
  game_id?: Long;
  timeline_id?: string;
  entry_id?: Long;
}

export type CGameRecording_LowDiskSpace_Notification = Record<string, never>;

export interface CGameRecording_PostGameHighlightsChanged_Notification {
  game_id?: Long;
}

export interface CGameRecording_OpenOverlayToGamePhase_Notification {
  game_id?: Long;
  phase_id?: string;
}

export interface CGameRecording_OpenOverlayToTimelineEvent_Notification {
  game_id?: Long;
  entry_id?: Long;
}

export type CGameRecording_PhaseListChanged_Notification = Record<string, never>;

export interface CGameRecording_ClipSummary {
  clip_id?: string;
  game_id?: Long;
  duration_ms?: Long;
  date_recorded?: number;
  start_timeline_id?: string;
  start_offset_ms?: Long;
  published_file_id?: Long;
  file_size?: Long;
  name?: string;
  date_clipped?: number;
  temporary?: boolean;
  original_device?: string;
  original_gaming_device_type?: number;
  date_downloaded?: number;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface CGameRecording_SaveClip_Request {
  game_id?: Long;
  start?: CGameRecording_SaveClip_Request.Position;
  end?: CGameRecording_SaveClip_Request.Position;
  name?: string;
  src_clip_id?: string;
  temporary?: boolean;
  force_thumbnail?: boolean;
}

export namespace CGameRecording_SaveClip_Request {
  export interface Position {
    timeline_id?: string;
    offset_ms?: Long;
  }
}

export interface CGameRecording_SaveClip_Response {
  summary?: CGameRecording_ClipSummary;
}

export interface CGameRecording_DeleteClip_Request {
  clip_id?: string;
}

export type CGameRecording_DeleteClip_Response = Record<string, never>;

export interface CGameRecording_ExportClip_Settings {
  bitrate_kbps?: number;
  width?: number;
  height?: number;
  frames_per_second?: number;
  codec?: EExportCodec;
}

export interface CGameRecording_ExportClip_Request {
  clip_id?: string;
  export_mp4_path?: string;
  settings?: CGameRecording_ExportClip_Settings;
  use_unique_filename?: boolean;
}

export type CGameRecording_ExportClip_Response = Record<string, never>;

export interface CGameRecording_ExportClipPreview_Request {
  clip_id?: string;
  settings?: CGameRecording_ExportClip_Settings;
  run_policy_checks?: boolean;
}

export interface CGameRecording_ExportClipPreview_Response {
  estimated_size?: Long;
  settings?: CGameRecording_ExportClip_Settings;
}

export interface CGameRecording_TakeScreenshot_Request {
  game_id?: Long;
  timeline_id?: string;
  timeline_offset_ms?: Long;
}

export interface CGameRecording_TakeScreenshot_Response {
  screenshot_id?: Long;
}

export interface CGameRecording_UploadClipToSteam_Request {
  clip_id?: string;
  title?: string;
  desc?: string;
  visibility?: number;
}

export interface CGameRecording_UploadClipToSteam_Response {
  summary?: CGameRecording_ClipSummary;
}

export interface CGameRecording_ZipClip_Request {
  clip_id?: string;
}

export interface CGameRecording_ZipClip_Response {
  zip_path?: string;
}

export interface CGameRecording_GetClips_Request {
  game_id?: Long;
  created_after?: number;
  include_temporary?: boolean;
}

export interface CGameRecording_GetClips_Response {
  clip?: CGameRecording_ClipSummary[];
}

export interface CGameRecording_GetAndTrimPostGameHighlights_Request {
  game_id?: Long;
  created_after?: number;
}

export interface CGameRecording_GetAndTrimPostGameHighlights_Response {
  events?: CGameRecordingTimelineEvent[];
}

export interface CGameRecording_UserAddTimelineEntry_Request {
  game_id?: Long;
  entry?: CTimelineEntry;
  clip_id?: string;
}

export interface CGameRecording_UserAddTimelineEntry_Response {
  entry_id?: Long;
}

export interface CGameRecording_UserUpdateTimelineEntry_Request {
  game_id?: Long;
  entry?: CTimelineEntry;
  clip_id?: string;
}

export type CGameRecording_UserUpdateTimelineEntry_Response = Record<string, never>;

export interface CGameRecording_UserRemoveTimelineEntry_Request {
  game_id?: Long;
  timeline_id?: string;
  entry_id?: Long;
  clip_id?: string;
}

export type CGameRecording_UserRemoveTimelineEntry_Response = Record<string, never>;

export interface CGameRecording_ManuallyDeleteRecordingsForApps_Request {
  game_ids?: Long[];
}

export type CGameRecording_ManuallyDeleteRecordingsForApps_Response = Record<string, never>;

export interface CGameRecording_GetTotalDiskSpaceUsage_Request {
  folder_path?: string;
  type?: EDiskSpaceType;
}

export interface CGameRecording_GetTotalDiskSpaceUsage_Response {
  size?: Long;
}

export interface CGameRecording_GetThumbnails_Request {
  recording_id?: string;
  clip_id?: string;
  timeline_id?: string;
  start_offset_us?: Long[];
  major_axis?: number;
  time_precision?: EThumbnailTimePrecision;
  format?: EThumbnailFormat;
}

export interface CGameRecording_GetThumbnails_Response {
  thumbnails?: CGameRecording_GetThumbnails_Response.Thumbnail[];
}

export namespace CGameRecording_GetThumbnails_Response {
  export interface Thumbnail {
    image_data?: Buffer;
    width?: number;
    height?: number;
  }
}

export interface CGameRecording_StartRecording_Request {
  game_id?: Long;
}

export type CGameRecording_StartRecording_Response = Record<string, never>;

export interface CGameRecording_StopRecording_Request {
  game_id?: Long;
}

export interface CGameRecording_StopRecording_Response {
  summary?: CGameRecording_ClipSummary;
}

export interface CGameRecording_GetRecordingSize_Request {
  game_id?: Long;
}

export interface CGameRecording_GetRecordingSize_Response {
  file_size?: Long;
}

export type CGameRecording_CleanupBackgroundRecordings_Request = Record<string, never>;

export type CGameRecording_CleanupBackgroundRecordings_Response = Record<string, never>;

export type CGameRecording_GetPlatformCapabilities_Request = Record<string, never>;

export interface CGameRecording_GetPlatformCapabilities_Response {
  per_process_audio_capture?: boolean;
}

export interface CGameRecording_ClipCreated_Notification {
  summary?: CGameRecording_ClipSummary;
}

export interface CGameRecording_ClipDeleted_Notification {
  clip_id?: string;
  game_id?: Long;
}

export interface CGameRecording_ExportProgress_Notification {
  progress?: number;
  clip_id?: string;
  eresult?: number;
}

export interface CGameRecording_PerGameSettings {
  gameid?: Long;
  enabled?: boolean;
  minutes?: number;
  bitrate?: string;
  infinite?: boolean;
}

export type CGameRecording_GetPerGameSettings_Request = Record<string, never>;

export interface CGameRecording_GetPerGameSettings_Response {
  settings?: CGameRecording_PerGameSettings[];
}

export interface CGameRecording_SetPerGameSettings_Request {
  game_settings?: CGameRecording_PerGameSettings;
}

export type CGameRecording_SetPerGameSettings_Response = Record<string, never>;

export interface CGameRecording_DeletePerGameSettings_Request {
  gameid?: Long;
}

export type CGameRecording_DeletePerGameSettings_Response = Record<string, never>;

export interface CGameRecording_UploadProgress_Notification {
  progress?: number;
  clip_id?: string;
  eresult?: number;
}

export interface CGameRecording_SwitchBackgroundRecordingGame_Request {
  game_id?: Long;
}

export type CGameRecording_SwitchBackgroundRecordingGame_Response = Record<string, never>;

export abstract class GameRecordingService {
  abstract GetAppsWithBackgroundVideo(
    request: CGameRecording_GetAppsWithBackgroundVideo_Request,
  ): Promise<CGameRecording_GetAppsWithBackgroundVideo_Response>;
  abstract GetTimelinesForApp(
    request: CGameRecording_GetTimelinesForApp_Request,
  ): Promise<CGameRecording_GetTimelinesForApp_Response>;
  abstract GetTimelinesForClip(
    request: CGameRecording_GetTimelinesForClip_Request,
  ): Promise<CGameRecording_GetTimelinesForClip_Response>;
  abstract QueryPhases(
    request: CGameRecording_QueryPhases_Request,
  ): Promise<CGameRecording_QueryPhases_Response>;
  abstract GetTags(
    request: CGameRecording_GetTags_Request,
  ): Promise<CGameRecording_GetTags_Response>;
  abstract GetEnoughDiskSpace(
    request: CGameRecording_GetEnoughDiskSpace_Request,
  ): Promise<CGameRecording_GetEnoughDiskSpace_Response>;
  abstract GetAvailableDiskSpace(
    request: CGameRecording_GetAvailableDiskSpace_Request,
  ): Promise<CGameRecording_GetAvailableDiskSpace_Response>;
  abstract SaveClip(
    request: CGameRecording_SaveClip_Request,
  ): Promise<CGameRecording_SaveClip_Response>;
  abstract DeleteClip(
    request: CGameRecording_DeleteClip_Request,
  ): Promise<CGameRecording_DeleteClip_Response>;
  abstract GetClips(
    request: CGameRecording_GetClips_Request,
  ): Promise<CGameRecording_GetClips_Response>;
  abstract UploadClipToSteam(
    request: CGameRecording_UploadClipToSteam_Request,
  ): Promise<CGameRecording_UploadClipToSteam_Response>;
  abstract ExportClip(
    request: CGameRecording_ExportClip_Request,
  ): Promise<CGameRecording_ExportClip_Response>;
  abstract ExportClipPreview(
    request: CGameRecording_ExportClipPreview_Request,
  ): Promise<CGameRecording_ExportClipPreview_Response>;
  abstract TakeScreenshot(
    request: CGameRecording_TakeScreenshot_Request,
  ): Promise<CGameRecording_TakeScreenshot_Response>;
  abstract ZipClip(
    request: CGameRecording_ZipClip_Request,
  ): Promise<CGameRecording_ZipClip_Response>;
  abstract StartRecording(
    request: CGameRecording_StartRecording_Request,
  ): Promise<CGameRecording_StartRecording_Response>;
  abstract StopRecording(
    request: CGameRecording_StopRecording_Request,
  ): Promise<CGameRecording_StopRecording_Response>;
  abstract GetBackgroundRecordingFileSize(
    request: CGameRecording_GetRecordingSize_Request,
  ): Promise<CGameRecording_GetRecordingSize_Response>;
  abstract CleanupBackgroundRecordings(
    request: CGameRecording_CleanupBackgroundRecordings_Request,
  ): Promise<CGameRecording_CleanupBackgroundRecordings_Response>;
  abstract GetAndTrimPostGameHighlights(
    request: CGameRecording_GetAndTrimPostGameHighlights_Request,
  ): Promise<CGameRecording_GetAndTrimPostGameHighlights_Response>;
  abstract GetThumbnails(
    request: CGameRecording_GetThumbnails_Request,
  ): Promise<CGameRecording_GetThumbnails_Response>;
  abstract GetPlatformCapabilities(
    request: CGameRecording_GetPlatformCapabilities_Request,
  ): Promise<CGameRecording_GetPlatformCapabilities_Response>;
  abstract NotifyTimelineChanged(
    request: CGameRecording_TimelineChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyRecordingSessionChanged(
    request: CGameRecording_RecordingSessionChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyTimelineEntryChanged(
    request: CGameRecording_TimelineEntryChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyTimelineEntryRemoved(
    request: CGameRecording_TimelineEntryRemoved_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyClipCreated(
    request: CGameRecording_ClipCreated_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyClipDeleted(
    request: CGameRecording_ClipDeleted_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyExportProgress(
    request: CGameRecording_ExportProgress_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyUploadProgress(
    request: CGameRecording_UploadProgress_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyLowDiskSpace(
    request: CGameRecording_LowDiskSpace_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyPostGameHighlightsChanged(
    request: CGameRecording_PostGameHighlightsChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyOpenOverlayToGamePhase(
    request: CGameRecording_OpenOverlayToGamePhase_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyOpenOverlayToTimelineEvent(
    request: CGameRecording_OpenOverlayToTimelineEvent_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyPhaseListChanged(
    request: CGameRecording_PhaseListChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract GetPerGameSettings(
    request: CGameRecording_GetPerGameSettings_Request,
  ): Promise<CGameRecording_GetPerGameSettings_Response>;
  abstract SetPerGameSettings(
    request: CGameRecording_SetPerGameSettings_Request,
  ): Promise<CGameRecording_SetPerGameSettings_Response>;
  abstract DeletePerGameSettings(
    request: CGameRecording_DeletePerGameSettings_Request,
  ): Promise<CGameRecording_DeletePerGameSettings_Response>;
  abstract UserAddTimelineEntry(
    request: CGameRecording_UserAddTimelineEntry_Request,
  ): Promise<CGameRecording_UserAddTimelineEntry_Response>;
  abstract UserUpdateTimelineEntry(
    request: CGameRecording_UserUpdateTimelineEntry_Request,
  ): Promise<CGameRecording_UserUpdateTimelineEntry_Response>;
  abstract UserRemoveTimelineEntry(
    request: CGameRecording_UserRemoveTimelineEntry_Request,
  ): Promise<CGameRecording_UserRemoveTimelineEntry_Response>;
  abstract ManuallyDeleteRecordingsForApps(
    request: CGameRecording_ManuallyDeleteRecordingsForApps_Request,
  ): Promise<CGameRecording_ManuallyDeleteRecordingsForApps_Response>;
  abstract GetTotalDiskSpaceUsage(
    request: CGameRecording_GetTotalDiskSpaceUsage_Request,
  ): Promise<CGameRecording_GetTotalDiskSpaceUsage_Response>;
  abstract SwitchBackgroundRecordingGame(
    request: CGameRecording_SwitchBackgroundRecordingGame_Request,
  ): Promise<CGameRecording_SwitchBackgroundRecordingGame_Response>;
}
