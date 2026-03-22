/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { EGameRecordingType } from "./enums";

export interface CGameRecordingFile {
  timelines?: CGameRecordingTimelineMetadata[];
  postgame_events?: CGameRecordingPostGameSummary[];
  temporary_clips?: string[];
  tags?: CGameRecordingTag[];
}

export interface CGameRecordingClipFile {
  timelines?: CGameRecordingTimelineMetadata[];
  first_timeline_start_offset_ms?: bigint;
  date_recorded?: number;
  game_id?: bigint;
  published_file_id?: bigint;
  size_in_bytes?: bigint;
  name?: string;
  temporary?: boolean;
  original_device?: string;
  original_gaming_device_type?: number;
  date_downloaded?: number;
  thumbnail_width?: number;
  thumbnail_height?: number;
  tags?: CGameRecordingTag[];
  phases?: CGameRecordingPhase[];
}

export interface CGameRecordingTimelineMetadata {
  timeline_id?: string;
  game_id?: bigint;
  date_recorded?: number;
  duration_ms?: bigint;
  recordings?: CGameRecordingTimelineMetadata.Recording[];
  phases?: CGameRecordingPhase[];
  significant_events?: CGameRecordingTimelineEvent[];
}

export namespace CGameRecordingTimelineMetadata {
  export interface Recording {
    recording_id?: string;
    start_offset_ms?: bigint;
    duration_ms?: bigint;
    recording_type?: EGameRecordingType;
    delete_on_cleanup?: boolean;
    video_manager_clip_id?: bigint;
    video_manager_video_id?: bigint;
    cdn_manifest_url?: string;
    file_size?: bigint;
    recording_zero_timeline_offset_ms?: bigint;
  }
}

export interface CGameRecordingPostGameSummary {
  game_id?: bigint;
  events?: CGameRecordingTimelineEvent[];
}

export interface CGameRecordingTimelineEvent {
  game_id?: bigint;
  rt_created?: number;
  possible_clip?: number;
  timeline_id?: string;
  entry_id?: bigint;
  timeline_offset_ms?: bigint;
  duration_ms?: bigint;
  marker_icon?: string;
  marker_title?: string;
  user_marker?: boolean;
}

export interface CGameRecordingTag {
  game_id?: bigint;
  tag?: CTimelineTag;
  references?: CGameRecordingTag.Timeline[];
}

export namespace CGameRecordingTag {
  export interface Timeline {
    clip_id?: string;
    timeline_id?: string;
    offset_ms?: bigint;
  }
}

export interface CGameRecordingTagInstance {
  timeline_id?: string;
  entry_id?: bigint;
  timeline_offset_ms?: bigint;
  duration_ms?: bigint;
}

export interface CGameRecordingPhase {
  phase_id?: string;
  duration_ms?: bigint;
  tags?: CGameRecordingPhase.Tag[];
  contained_tags?: CGameRecordingPhase.Tag[];
  background_timeline_offset?: bigint;
  attributes?: CPhaseAttribute[];
}

export namespace CGameRecordingPhase {
  export interface Tag {
    name?: string;
    group?: string;
  }
}

export interface CTimelineTag {
  name?: string;
  group?: string;
  icon?: string;
  priority?: number;
}

export interface CPhaseAttribute {
  group?: string;
  value?: string;
  priority?: number;
}
