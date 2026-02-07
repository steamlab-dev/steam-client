/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CVideo_GameRecordingSegmentInfo } from "./common";

export interface CGameRecording_CreateShareClip_Request {
  clip?: CGameRecordingClip;
  video_def?: CMsgVideoGameRecordingDef[];
}

export interface CGameRecording_CreateShareClip_Response {
  clip?: CGameRecordingClip;
}

export interface CGameRecording_DeleteSharedClip_Request {
  clip_id?: Long;
}

export type CGameRecording_DeleteSharedClip_Response = Record<string, never>;

export interface CGameRecording_GetSingleSharedClip_Request {
  clip_id?: Long;
}

export interface CGameRecording_GetSingleSharedClip_Response {
  clip?: CGameRecordingClip;
}

export interface CGameRecordingClip {
  clip_id?: Long;
  gameid?: Long;
  date_recorded?: number;
  total_file_size_bytes?: Long;
  video_ids?: CVideoManagerClipID[];
  owner_steamid?: Long;
  upload_complete?: boolean;
  duration_ms?: number;
}

export interface CMsgVideoGameRecordingComponent {
  component_name?: string;
  contents?: number;
  segment_size?: number;
  file_type?: string;
  representations?: CMsgVideoGameRecordingRepresentation[];
}

export interface CMsgVideoGameRecordingDef {
  steamid?: Long;
  app_id?: number;
  num_segments?: number;
  length_milliseconds?: number;
  segment_duration_timescale?: number;
  segment_duration?: number;
  components?: CMsgVideoGameRecordingComponent[];
  start_time_ms?: number;
  start_offset_in_timeline_ms?: number;
}

export interface CMsgVideoGameRecordingRepresentation {
  representation_name?: string;
  horizontal_resolution?: number;
  vertical_resolution?: number;
  frame_rate?: number;
  bandwidth?: number;
  audio_sample_rate?: number;
  frame_rate_string?: string;
  codec?: string;
  audio_channel_config?: number;
  segment_info?: CVideo_GameRecordingSegmentInfo[];
}

export interface CVideoManagerClipID {
  video_manager_clip_id?: Long;
  video_manager_video_id?: Long;
  server_timeline_id?: Long;
  manifest_url?: string;
  duration_ms?: number;
  start_offset_ms?: number;
}

export abstract class GameRecordingClipService {
  abstract CreateShareClip(
    request: CGameRecording_CreateShareClip_Request,
  ): Promise<CGameRecording_CreateShareClip_Response>;
  abstract DeleteSharedClip(
    request: CGameRecording_DeleteSharedClip_Request,
  ): Promise<CGameRecording_DeleteSharedClip_Response>;
  abstract GetSingleSharedClip(
    request: CGameRecording_GetSingleSharedClip_Request,
  ): Promise<CGameRecording_GetSingleSharedClip_Response>;
}
