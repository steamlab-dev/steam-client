/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CClientMetrics_ClientBootstrap_Summary,
  CClientMetrics_ContentDownloadResponse_Hosts,
} from "./clientmetrics";
import type { EGameRecordingType, EGRMode } from "./enums";
import type { UserSystemInformation } from "./steammessages_base";

export const ESteamPipeWorkType = {
  k_ESteamPipeClientWorkType_Invalid: 0,
  k_ESteamPipeClientWorkType_StageFromChunkStores: 1,
} as const;

export type ESteamPipeWorkType = (typeof ESteamPipeWorkType)[keyof typeof ESteamPipeWorkType];

export const ESteamPipeOperationType = {
  k_ESteamPipeOperationType_Invalid: 0,
  k_ESteamPipeOperationType_DecryptCPU: 1,
  k_ESteamPipeOperationType_DiskRead: 2,
  k_ESteamPipeOperationType_DiskWrite: 3,
} as const;

export type ESteamPipeOperationType =
  (typeof ESteamPipeOperationType)[keyof typeof ESteamPipeOperationType];

export const EClipShareMethod = {
  k_EClipShareMethod_Chat: 1,
  k_EClipShareMethod_Clipboard: 2,
  k_EClipShareMethod_File: 3,
  k_EClipShareMethod_SendClip: 4,
  k_EClipShareMethod_SaveToMedia: 5,
  k_EClipShareMethod_CreateLink: 6,
} as const;

export type EClipShareMethod = (typeof EClipShareMethod)[keyof typeof EClipShareMethod];

export const EClipRangeMethod = {
  k_EClipRangeMethod_CreateClipButton: 1,
  k_EClipRangeMethod_Highlight: 2,
  k_EClipRangeMethod_BeginEndButtons: 3,
  k_EClipRangeMethod_ContextMenu: 4,
  k_EClipRangeMethod_Drag: 5,
  k_EClipRangeMethod_EntireClip: 6,
  k_EClipRangeMethod_PhaseRecording: 7,
} as const;

export type EClipRangeMethod = (typeof EClipRangeMethod)[keyof typeof EClipRangeMethod];

export interface CClientMetrics_AppInterfaceCreation {
  raw_version?: string;
  requested_interface_type?: string;
}

export interface CClientMetrics_AppInterfaceMethodCounts {
  interface_name?: string;
  method_name?: string;
  call_count?: number;
}

export interface CClientMetrics_AppInterfaceStats_Notification {
  game_id?: Long;
  interfaces_created?: CClientMetrics_AppInterfaceCreation[];
  methods_called?: CClientMetrics_AppInterfaceMethodCounts[];
  session_length_seconds?: number;
}

export interface CClientMetrics_IPv6Connectivity_Result {
  protocol_tested?: number;
  connectivity_state?: number;
}

export interface CClientMetrics_IPv6Connectivity_Notification {
  cell_id?: number;
  results?: CClientMetrics_IPv6Connectivity_Result[];
  private_ip_is_rfc6598?: boolean;
}

export interface CClientMetrics_SteamPipeWorkStats_Operation {
  type?: ESteamPipeOperationType;
  num_ops?: number;
  num_bytes?: Long;
  busy_time_ms?: Long;
  idle_time_ms?: Long;
  sum_run_time_ms?: Long;
  sum_wait_time_ms?: Long;
}

export interface CClientMetrics_SteamPipeWorkStats_Notification {
  appid?: number;
  depotid?: number;
  work_type?: ESteamPipeWorkType;
  operations?: CClientMetrics_SteamPipeWorkStats_Operation[];
  hardware_type?: number;
}

export interface CClientMetrics_ReportReactUsage_Notification {
  product?: string;
  version?: string;
  routes?: CClientMetrics_ReportReactUsage_Notification.RouteData[];
  components?: CClientMetrics_ReportReactUsage_Notification.ComponentData[];
  actions?: CClientMetrics_ReportReactUsage_Notification.ActionData[];
}

export namespace CClientMetrics_ReportReactUsage_Notification {
  export interface RouteData {
    route?: string;
    count?: number;
  }

  export interface ComponentData {
    component?: string;
    count?: number;
  }

  export interface ActionData {
    action?: string;
    count?: number;
  }
}

export interface CClientMetrics_ReportClientError_Notification {
  product?: string;
  version?: string;
  errors?: CClientMetrics_ReportClientError_Notification.Error[];
  tags?: string[];
}

export namespace CClientMetrics_ReportClientError_Notification {
  export interface Error {
    identifier?: string;
    message?: string;
    count?: number;
    context?: string;
  }
}

export interface CClientMetrics_ClientBootstrap_Notification {
  summary?: CClientMetrics_ClientBootstrap_Summary;
}

export interface CClientMetrics_DownloadRates_Notification {
  cell_id?: number;
  stats?: CClientMetrics_DownloadRates_Notification.StatsInfo[];
  throttling_kbps?: number;
  os_type?: number;
  device_type?: number;
}

export namespace CClientMetrics_DownloadRates_Notification {
  export interface StatsInfo {
    source_type?: number;
    source_id?: number;
    bytes?: Long;
    host_name?: string;
    microseconds?: Long;
    used_ipv6?: boolean;
    proxied?: boolean;
    used_http2?: boolean;
    cache_hits?: number;
    cache_misses?: number;
    hit_bytes?: Long;
    miss_bytes?: Long;
  }
}

export interface CClientMetrics_ContentValidation_Notification {
  validation_result?: number;
  app_id?: number;
  staged_files?: boolean;
  user_initiated?: boolean;
  early_out?: boolean;
  chunks_scanned?: number;
  chunks_corrupt?: number;
  bytes_scanned?: Long;
  chunk_bytes_corrupt?: Long;
  total_file_size_corrupt?: Long;
}

export interface CClientMetrics_CloudAppSyncStats_Notification {
  app_id?: number;
  platform_type?: number;
  preload?: boolean;
  blocking_app_launch?: boolean;
  files_uploaded?: number;
  files_downloaded?: number;
  files_deleted?: number;
  bytes_uploaded?: Long;
  bytes_downloaded?: Long;
  microsec_total?: Long;
  microsec_init_caches?: Long;
  microsec_validate_state?: Long;
  microsec_ac_launch?: Long;
  microsec_ac_prep_user_files?: Long;
  microsec_ac_exit?: Long;
  microsec_build_sync_list?: Long;
  microsec_delete_files?: Long;
  microsec_download_files?: Long;
  microsec_upload_files?: Long;
  hardware_type?: number;
  files_managed?: number;
}

export interface CClientMetrics_ContentDownloadResponse_Counts_Notification {
  cell_id?: number;
  data?: CClientMetrics_ContentDownloadResponse_Hosts;
}

export interface CClientMetrics_ReportClientArgs_Notification {
  client_args?: string[];
  gpu_webview_regkey_disabled?: boolean;
  suppress_gpu_chrome?: boolean;
  browser_not_supported?: boolean;
  hw_accel_video_regkey_disabled?: boolean;
  mini_mode_enabled?: boolean;
  fps_counter_enabled?: boolean;
  library_low_bandwidth_mode_enabled?: boolean;
  library_low_perf_mode_enabled?: boolean;
  gr_mode?: EGRMode;
}

export interface CClientMetrics_ReportLinuxStats_Notification {
  glibc_version_major?: number;
  glibc_version_minor?: number;
  account_type?: number;
  launcher_type?: number;
  game_server_appid?: number;
  process_name?: string;
}

export interface CClientMetrics_ReportAccessibilitySettings_Notification {
  accessibility_desktop_ui_scale?: number;
  accessibility_screen_reader_enabled?: boolean;
  accessibility_high_contrast_mode?: boolean;
  accessibility_reduce_motion?: boolean;
  accessibility_color_filter_name?: string;
}

export interface CClientMetrics_ClipShare_Notification {
  eresult?: number;
  share_method?: EClipShareMethod;
  seconds?: number;
  bytes?: Long;
  gameid?: Long;
}

export interface CClientMetrics_ClipRange_Notification {
  original_range_method?: EClipRangeMethod;
  start?: CClientMetrics_ClipRange_Notification.RelativeRangeEdge;
  end?: CClientMetrics_ClipRange_Notification.RelativeRangeEdge;
  seconds?: number;
  gameid?: Long;
}

export namespace CClientMetrics_ClipRange_Notification {
  export interface RelativeRangeEdge {
    original_range_method?: EClipRangeMethod;
    latest_range_method?: EClipRangeMethod;
    delta_ms?: number;
  }
}

export interface CClientMetrics_EndGameRecording_Notification {
  recording_type?: EGameRecordingType;
  seconds?: number;
  bytes?: Long;
  gameid?: Long;
  instant_clip?: boolean;
}

export interface CClientMetrics_GamePerformance_Notification {
  frame_rates?: CClientMetrics_GamePerformance_Notification.FrameRate[];
  system_info?: UserSystemInformation;
}

export namespace CClientMetrics_GamePerformance_Notification {
  export interface FrameRate {
    gameid?: Long;
    frame_rate?: number;
    session_seconds?: number;
  }
}

export abstract class ClientMetricsService {
  abstract ClientAppInterfaceStatsReport(
    request: CClientMetrics_AppInterfaceStats_Notification,
  ): Promise<void>;
  abstract ClientIPv6ConnectivityReport(
    request: CClientMetrics_IPv6Connectivity_Notification,
  ): Promise<void>;
  abstract SteamPipeWorkStatsReport(
    request: CClientMetrics_SteamPipeWorkStats_Notification,
  ): Promise<void>;
  abstract ReportReactUsage(request: CClientMetrics_ReportReactUsage_Notification): Promise<void>;
  abstract ReportClientError(request: CClientMetrics_ReportClientError_Notification): Promise<void>;
  abstract ClientBootstrapReport(
    request: CClientMetrics_ClientBootstrap_Notification,
  ): Promise<void>;
  abstract ClientDownloadRatesReport(
    request: CClientMetrics_DownloadRates_Notification,
  ): Promise<void>;
  abstract ClientContentValidationReport(
    request: CClientMetrics_ContentValidation_Notification,
  ): Promise<void>;
  abstract ClientCloudAppSyncStats(
    request: CClientMetrics_CloudAppSyncStats_Notification,
  ): Promise<void>;
  abstract ClientDownloadResponseCodeCounts(
    request: CClientMetrics_ContentDownloadResponse_Counts_Notification,
  ): Promise<void>;
  abstract ReportClientArgs(request: CClientMetrics_ReportClientArgs_Notification): Promise<void>;
  abstract ReportLinuxStats(request: CClientMetrics_ReportLinuxStats_Notification): Promise<void>;
  abstract ReportAccessibilitySettings(
    request: CClientMetrics_ReportAccessibilitySettings_Notification,
  ): Promise<void>;
  abstract ReportClipShare(request: CClientMetrics_ClipShare_Notification): Promise<void>;
  abstract ReportClipRange(request: CClientMetrics_ClipRange_Notification): Promise<void>;
  abstract ReportEndGameRecording(
    request: CClientMetrics_EndGameRecording_Notification,
  ): Promise<void>;
  abstract ReportGamePerformance(
    request: CClientMetrics_GamePerformance_Notification,
  ): Promise<void>;
}
