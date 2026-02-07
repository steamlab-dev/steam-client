/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CMsgVideoGameRecordingDef,
  CVideo_GameRecordingSegmentInfo,
  CVideo_GameRecordingSegmentUploadInfo,
} from "./steammessages_clientserver_video";

export interface CVideoManagerClipID {
  video_manager_clip_id?: Long;
  video_manager_video_id?: Long;
  server_timeline_id?: Long;
  manifest_url?: string;
  duration_ms?: number;
  start_offset_ms?: number;
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

export interface CVideo_BeginGameRecordingSegmentsUpload_Request {
  recording_id?: Long;
  component_name?: string;
  representation_name?: string;
  segments_to_store?: CVideo_GameRecordingSegmentInfo[];
}

export interface CVideo_BeginGameRecordingSegmentsUpload_Response {
  segments_needed?: CVideo_GameRecordingSegmentUploadInfo[];
  call_again?: boolean;
}

export interface CVideo_CommitGameRecordingSegmentsUpload_Request {
  recording_id?: Long;
  component_name?: string;
  representation_name?: string;
  first_segment_number?: number;
  num_segments?: number;
  upload_result?: number;
}

export type CVideo_CommitGameRecordingSegmentsUpload_Response = Record<string, never>;

export interface CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request {
  recording_id?: Long;
}

export interface CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response {
  segments_needed?: CVideo_GameRecordingSegmentUploadInfo[];
}

export interface CVideo_GameRecordingCommitSegmentUploads_Request {
  recording_id?: Long;
  segments_uploaded?: CVideo_GameRecordingSegmentInfo[];
}

export type CVideo_GameRecordingCommitSegmentUploads_Response = Record<string, never>;

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

export abstract class VideoClipService {
  abstract BeginGameRecordingSegmentsUpload(
    request: CVideo_BeginGameRecordingSegmentsUpload_Request,
  ): Promise<CVideo_BeginGameRecordingSegmentsUpload_Response>;
  abstract CommitGameRecordingSegmentsUpload(
    request: CVideo_CommitGameRecordingSegmentsUpload_Request,
  ): Promise<CVideo_CommitGameRecordingSegmentsUpload_Response>;
  abstract GetNextBatchOfSegmentsToUpload(
    request: CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request,
  ): Promise<CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response>;
  abstract CommitSegmentUploads(
    request: CVideo_GameRecordingCommitSegmentUploads_Request,
  ): Promise<CVideo_GameRecordingCommitSegmentUploads_Response>;
}
