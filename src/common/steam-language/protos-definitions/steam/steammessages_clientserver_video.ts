/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

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

export interface CVideo_GameRecordingSegmentInfo {
  segment_number?: number;
  segment_size_bytes?: Long;
  component_name?: string;
  representation_name?: string;
}

export interface CVideo_GameRecordingSegmentUploadInfo {
  segment_info?: CVideo_GameRecordingSegmentInfo;
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  request_headers?: CVideo_GameRecordingSegmentUploadInfo.HTTPHeaders[];
}

export namespace CVideo_GameRecordingSegmentUploadInfo {
  export interface HTTPHeaders {
    name?: string;
    value?: string;
  }
}
