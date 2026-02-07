/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const ESource2PlayStatsFieldType = {
  Source2PlayStats_Invalid: 0,
  Source2PlayStats_UInt64: 1,
  Source2PlayStats_UInt32: 2,
  Source2PlayStats_UInt16: 3,
  Source2PlayStats_UInt8: 4,
  Source2PlayStats_Int64: 5,
  Source2PlayStats_Int32: 6,
  Source2PlayStats_Int16: 7,
  Source2PlayStats_Int8: 8,
  Source2PlayStats_Float64: 9,
  Source2PlayStats_Float32: 10,
  Source2PlayStats_Bool: 11,
  Source2PlayStats_String: 12,
  Source2PlayStats_LowCardinalityString: 13,
  Source2PlayStats_UTCDateTime: 14,
} as const;

export type ESource2PlayStatsFieldType =
  (typeof ESource2PlayStatsFieldType)[keyof typeof ESource2PlayStatsFieldType];

export interface CMsgSource2SystemSpecs {
  cpu_id?: string;
  cpu_brand?: string;
  cpu_model?: number;
  cpu_num_physical?: number;
  ram_physical_total_mb?: number;
  gpu_rendersystem_dll_name?: string;
  gpu_vendor_id?: number;
  gpu_driver_name?: string;
  gpu_driver_version_high?: number;
  gpu_driver_version_low?: number;
  gpu_dx_support_level?: number;
  gpu_texture_memory_size_mb?: number;
  backbuffer_width?: number;
  backbuffer_height?: number;
}

export interface CMsgSource2VProfLiteReportItem {
  name?: string;
  active_samples?: number;
  active_samples_1secmax?: number;
  usec_max?: number;
  usec_avg_active?: number;
  usec_p50_active?: number;
  usec_p99_active?: number;
  usec_avg_all?: number;
  usec_p50_all?: number;
  usec_p99_all?: number;
  usec_1secmax_avg_active?: number;
  usec_1secmax_p50_active?: number;
  usec_1secmax_p95_active?: number;
  usec_1secmax_p99_active?: number;
  usec_1secmax_avg_all?: number;
  usec_1secmax_p50_all?: number;
  usec_1secmax_p95_all?: number;
  usec_1secmax_p99_all?: number;
}

export interface CMsgSource2VProfLiteReport {
  total?: CMsgSource2VProfLiteReportItem;
  items?: CMsgSource2VProfLiteReportItem[];
  discarded_frames?: number;
}

export interface CMsgSource2NetworkFlowQuality {
  duration?: number;
  bytes_total?: Long;
  bytes_total_reliable?: Long;
  bytes_total_voice?: Long;
  bytes_sec_p95?: number;
  bytes_sec_p99?: number;
  enginemsgs_total?: number;
  enginemsgs_sec_p95?: number;
  enginemsgs_sec_p99?: number;
  netframes_total?: number;
  netframes_dropped?: number;
  netframes_outoforder?: number;
  netframes_size_exceeds_mtu?: number;
  netframes_size_p95?: number;
  netframes_size_p99?: number;
  ticks_total?: number;
  ticks_good?: number;
  ticks_good_almost_late?: number;
  ticks_fixed_dropped?: number;
  ticks_fixed_late?: number;
  ticks_bad_dropped?: number;
  ticks_bad_late?: number;
  ticks_bad_other?: number;
  tick_missrate_samples_total?: number;
  tick_missrate_samples_perfect?: number;
  tick_missrate_samples_perfectnet?: number;
  tick_missratenet_p75_x10?: number;
  tick_missratenet_p95_x10?: number;
  tick_missratenet_p99_x10?: number;
  recvmargin_p1?: number;
  recvmargin_p5?: number;
  recvmargin_p25?: number;
  recvmargin_p50?: number;
  recvmargin_p75?: number;
  recvmargin_p95?: number;
  netframe_jitter_p50?: number;
  netframe_jitter_p99?: number;
  interval_peakjitter_p50?: number;
  interval_peakjitter_p95?: number;
  packet_misdelivery_rate_p50_x4?: number;
  packet_misdelivery_rate_p95_x4?: number;
  net_ping_p5?: number;
  net_ping_p50?: number;
  net_ping_p95?: number;
}

export interface CMsgSource2PerfIntervalSample {
  frame_time_max_ms?: number;
  frame_time_avg_ms?: number;
  frame_time_min_ms?: number;
  frame_count?: number;
  frame_time_total_ms?: number;
  tags?: CMsgSource2PerfIntervalSample.Tag[];
}

export namespace CMsgSource2PerfIntervalSample {
  export interface Tag {
    tag?: string;
    max_value?: number;
  }
}

export interface CSource2Metrics_MatchPerfSummary_Notification {
  appid?: number;
  game_mode?: string;
  server_build_id?: number;
  server_popid?: number;
  server_profile?: CMsgSource2VProfLiteReport;
  clients?: CSource2Metrics_MatchPerfSummary_Notification.Client[];
  map?: string;
}

export namespace CSource2Metrics_MatchPerfSummary_Notification {
  export interface Client {
    system_specs?: CMsgSource2SystemSpecs;
    profile?: CMsgSource2VProfLiteReport;
    build_id?: number;
    downstream_flow?: CMsgSource2NetworkFlowQuality;
    upstream_flow?: CMsgSource2NetworkFlowQuality;
    steamid?: Long;
    perf_samples?: CMsgSource2PerfIntervalSample[];
  }
}

export interface CMsgSource2PlayStatsPackedRecordList {
  record_name?: string;
  field_defs?: CMsgSource2PlayStatsPackedRecordList.FieldDef[];
  record_count?: number;
  uint64_vals?: Long[];
  uint32_vals?: number[];
  uint16_vals?: number[];
  uint8_vals?: number[];
  int64_vals?: Long[];
  int32_vals?: number[];
  int16_vals?: number[];
  int8_vals?: number[];
  float64_vals?: number[];
  float32_vals?: number[];
  bool_vals?: boolean[];
  string_vals?: string[];
  low_cardinality_string_vals?: string[];
  utcdatetime_vals?: number[];
}

export namespace CMsgSource2PlayStatsPackedRecordList {
  export interface FieldDef {
    field_name?: string;
    field_type?: ESource2PlayStatsFieldType;
  }
}

export interface CSource2Metrics_RecordPlayStats_Notification {
  record_types?: CMsgSource2PlayStatsPackedRecordList[];
  appid?: number;
}
