/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EGameRecordingType } from "./enums";

export interface CGameRecordingFile {
  timelines?: CGameRecordingTimelineMetadata[];
  postgame_events?: CGameRecordingPostGameSummary[];
  temporary_clips?: string[];
  tags?: CGameRecordingTag[];
}

export interface CGameRecordingClipFile {
  timelines?: CGameRecordingTimelineMetadata[];
  first_timeline_start_offset_ms?: Long;
  date_recorded?: number;
  game_id?: Long;
  published_file_id?: Long;
  size_in_bytes?: Long;
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
  game_id?: Long;
  date_recorded?: number;
  duration_ms?: Long;
  recordings?: CGameRecordingTimelineMetadata.Recording[];
  phases?: CGameRecordingPhase[];
  significant_events?: CGameRecordingTimelineEvent[];
}

export namespace CGameRecordingTimelineMetadata {
  export interface Recording {
    recording_id?: string;
    start_offset_ms?: Long;
    duration_ms?: Long;
    recording_type?: EGameRecordingType;
    delete_on_cleanup?: boolean;
    video_manager_clip_id?: Long;
    video_manager_video_id?: Long;
    cdn_manifest_url?: string;
    file_size?: Long;
    recording_zero_timeline_offset_ms?: Long;
  }
}

export interface CGameRecordingPostGameSummary {
  game_id?: Long;
  events?: CGameRecordingTimelineEvent[];
}

export interface CGameRecordingTimelineEvent {
  game_id?: Long;
  rt_created?: number;
  possible_clip?: number;
  timeline_id?: string;
  entry_id?: Long;
  timeline_offset_ms?: Long;
  duration_ms?: Long;
  marker_icon?: string;
  marker_title?: string;
  user_marker?: boolean;
}

export interface CGameRecordingTag {
  game_id?: Long;
  tag?: CTimelineTag;
  references?: CGameRecordingTag.Timeline[];
}

export namespace CGameRecordingTag {
  export interface Timeline {
    clip_id?: string;
    timeline_id?: string;
    offset_ms?: Long;
  }
}

export interface CGameRecordingTagInstance {
  timeline_id?: string;
  entry_id?: Long;
  timeline_offset_ms?: Long;
  duration_ms?: Long;
}

export interface CGameRecordingPhase {
  phase_id?: string;
  duration_ms?: Long;
  tags?: CGameRecordingPhase.Tag[];
  contained_tags?: CGameRecordingPhase.Tag[];
  background_timeline_offset?: Long;
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
