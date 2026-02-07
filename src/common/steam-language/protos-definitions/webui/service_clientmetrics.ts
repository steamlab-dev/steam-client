/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { NotImplemented } from "./common_base";

export interface CClientMetrics_ReportAccessibilitySettings_Notification {
  accessibility_desktop_ui_scale?: number;
  accessibility_screen_reader_enabled?: boolean;
  accessibility_high_contrast_mode?: boolean;
  accessibility_reduce_motion?: boolean;
  accessibility_color_filter_name?: string;
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
  gr_mode?: number;
}

export interface CClientMetrics_ReportClientError_Notification {
  product?: string;
  version?: string;
  errors?: CClientMetrics_ReportClientError_Notification_Error[];
  tags?: string[];
}

export interface CClientMetrics_ReportClientError_Notification_Error {
  identifier?: string;
  message?: string;
  count?: number;
  context?: string;
}

export interface CClientMetrics_ReportLinuxStats_Notification {
  glibc_version_major?: number;
  glibc_version_minor?: number;
  account_type?: number;
  launcher_type?: number;
  game_server_appid?: number;
  process_name?: string;
}

export interface CClientMetrics_ReportReactUsage_Notification {
  product?: string;
  version?: string;
  routes?: CClientMetrics_ReportReactUsage_Notification_RouteData[];
  components?: CClientMetrics_ReportReactUsage_Notification_ComponentData[];
  actions?: CClientMetrics_ReportReactUsage_Notification_ActionData[];
}

export interface CClientMetrics_ReportReactUsage_Notification_ActionData {
  action?: string;
  count?: number;
}

export interface CClientMetrics_ReportReactUsage_Notification_ComponentData {
  component?: string;
  count?: number;
}

export interface CClientMetrics_ReportReactUsage_Notification_RouteData {
  route?: string;
  count?: number;
}

export abstract class ClientMetricsService {
  abstract ClientAppInterfaceStatsReport(request: NotImplemented): Promise<void>;
  abstract ClientBootstrapReport(request: NotImplemented): Promise<void>;
  abstract ClientCloudAppSyncStats(request: NotImplemented): Promise<void>;
  abstract ClientContentValidationReport(request: NotImplemented): Promise<void>;
  abstract ClientDownloadRatesReport(request: NotImplemented): Promise<void>;
  abstract ClientDownloadResponseCodeCounts(request: NotImplemented): Promise<void>;
  abstract ClientIPv6ConnectivityReport(request: NotImplemented): Promise<void>;
  abstract ReportAccessibilitySettings(
    request: CClientMetrics_ReportAccessibilitySettings_Notification,
  ): Promise<void>;
  abstract ReportClientArgs(request: CClientMetrics_ReportClientArgs_Notification): Promise<void>;
  abstract ReportClientError(request: CClientMetrics_ReportClientError_Notification): Promise<void>;
  abstract ReportClipRange(request: NotImplemented): Promise<void>;
  abstract ReportClipShare(request: NotImplemented): Promise<void>;
  abstract ReportEndGameRecording(request: NotImplemented): Promise<void>;
  abstract ReportGamePerformance(request: NotImplemented): Promise<void>;
  abstract ReportLinuxStats(request: CClientMetrics_ReportLinuxStats_Notification): Promise<void>;
  abstract ReportReactUsage(request: CClientMetrics_ReportReactUsage_Notification): Promise<void>;
  abstract SteamPipeWorkStatsReport(request: NotImplemented): Promise<void>;
}
