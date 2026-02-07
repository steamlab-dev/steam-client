/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CVideo_GameRecordingSegmentInfo } from "./common";

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

export interface CVideo_GameRecordingCommitSegmentUploads_Request {
  recording_id?: Long;
  segments_uploaded?: CVideo_GameRecordingSegmentInfo[];
}

export type CVideo_GameRecordingCommitSegmentUploads_Response = Record<string, never>;

export interface CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request {
  recording_id?: Long;
}

export interface CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response {
  segments_needed?: CVideo_GameRecordingSegmentUploadInfo[];
}

export interface CVideo_GameRecordingSegmentUploadInfo {
  segment_info?: CVideo_GameRecordingSegmentInfo;
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  request_headers?: CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders[];
}

export interface CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders {
  name?: string;
  value?: string;
}

export abstract class VideoClipService {
  abstract BeginGameRecordingSegmentsUpload(
    request: CVideo_BeginGameRecordingSegmentsUpload_Request,
  ): Promise<CVideo_BeginGameRecordingSegmentsUpload_Response>;
  abstract CommitGameRecordingSegmentsUpload(
    request: CVideo_CommitGameRecordingSegmentsUpload_Request,
  ): Promise<CVideo_CommitGameRecordingSegmentsUpload_Response>;
  abstract CommitSegmentUploads(
    request: CVideo_GameRecordingCommitSegmentUploads_Request,
  ): Promise<CVideo_GameRecordingCommitSegmentUploads_Response>;
  abstract GetNextBatchOfSegmentsToUpload(
    request: CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request,
  ): Promise<CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response>;
}
