/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CGameRecordingDebug_AddTimelineHighlightMarker_Request {
  appid?: number;
  icon?: string;
  title?: string;
  desc?: string;
}

export type CGameRecordingDebug_AddTimelineHighlightMarker_Response = Record<string, never>;

export interface CGameRecordingDebug_AddTimelineRangeEnd_Request {
  appid?: number;
  id?: string;
}

export type CGameRecordingDebug_AddTimelineRangeEnd_Response = Record<string, never>;

export interface CGameRecordingDebug_AddTimelineRangeStart_Request {
  appid?: number;
  id?: string;
  title?: string;
}

export type CGameRecordingDebug_AddTimelineRangeStart_Response = Record<string, never>;

export interface CGameRecordingDebug_AddTimelineTimestamp_Request {
  appid?: number;
  title?: string;
}

export type CGameRecordingDebug_AddTimelineTimestamp_Response = Record<string, never>;

export interface CGameRecordingDebug_SetTimelineGameMode_Request {
  appid?: number;
  mode?: number;
}

export type CGameRecordingDebug_SetTimelineGameMode_Response = Record<string, never>;

export abstract class GameRecordingDebugService {
  abstract AddTimelineHighlightMarker(
    request: CGameRecordingDebug_AddTimelineHighlightMarker_Request,
  ): Promise<CGameRecordingDebug_AddTimelineHighlightMarker_Response>;
  abstract AddTimelineRangeEnd(
    request: CGameRecordingDebug_AddTimelineRangeEnd_Request,
  ): Promise<CGameRecordingDebug_AddTimelineRangeEnd_Response>;
  abstract AddTimelineRangeStart(
    request: CGameRecordingDebug_AddTimelineRangeStart_Request,
  ): Promise<CGameRecordingDebug_AddTimelineRangeStart_Response>;
  abstract AddTimelineTimestamp(
    request: CGameRecordingDebug_AddTimelineTimestamp_Request,
  ): Promise<CGameRecordingDebug_AddTimelineTimestamp_Response>;
  abstract SetTimelineGameMode(
    request: CGameRecordingDebug_SetTimelineGameMode_Request,
  ): Promise<CGameRecordingDebug_SetTimelineGameMode_Response>;
}
