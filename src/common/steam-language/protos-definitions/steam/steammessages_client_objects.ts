/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  EBluetoothDeviceType,
  EColorGamutLabelSet,
  ECPUGovernor,
  EGPUPerformanceLevel,
  EGraphicsPerfOverlayLevel,
  EHDRToneMapOperator,
  EOSBranch,
  ESDCardFormatStage,
  ESplitScalingFilter,
  ESplitScalingScaler,
  EStorageBlockContentType,
  EStorageBlockFileSystemType,
  EStorageDriveMediaType,
  ESystemAudioChannel,
  ESystemAudioDirection,
  ESystemAudioPortDirection,
  ESystemAudioPortType,
  ESystemDisplayCompatibilityMode,
  ESystemFanControlMode,
  ESystemServiceState,
  EUpdaterState,
  EUpdaterType,
} from "./enums";

export const ECloudPendingRemoteOperation = {
  k_ECloudPendingRemoteOperationNone: 0,
  k_ECloudPendingRemoteOperationAppSessionActive: 1,
  k_ECloudPendingRemoteOperationUploadInProgress: 2,
  k_ECloudPendingRemoteOperationUploadPending: 3,
  k_ECloudPendingRemoteOperationAppSessionSuspended: 4,
} as const;

export type ECloudPendingRemoteOperation =
  (typeof ECloudPendingRemoteOperation)[keyof typeof ECloudPendingRemoteOperation];

export const ESteamDeckKeyboardLayout = {
  k_ESteamDeckKeyboardLayout_QWERTY: 0,
  k_ESteamDeckKeyboardLayout_Bulgarian: 1,
  k_ESteamDeckKeyboardLayout_Chinese_Simplified: 2,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional: 3,
  k_ESteamDeckKeyboardLayout_Czech: 4,
  k_ESteamDeckKeyboardLayout_Danish: 5,
  k_ESteamDeckKeyboardLayout_Finnish: 6,
  k_ESteamDeckKeyboardLayout_French: 7,
  k_ESteamDeckKeyboardLayout_German: 8,
  k_ESteamDeckKeyboardLayout_Greek: 9,
  k_ESteamDeckKeyboardLayout_Hungarian: 10,
  k_ESteamDeckKeyboardLayout_Italian: 11,
  k_ESteamDeckKeyboardLayout_Japanese: 12,
  k_ESteamDeckKeyboardLayout_Korean: 13,
  k_ESteamDeckKeyboardLayout_Norwegian: 14,
  k_ESteamDeckKeyboardLayout_Polish: 15,
  k_ESteamDeckKeyboardLayout_Portuguese: 16,
  k_ESteamDeckKeyboardLayout_Romanian: 17,
  k_ESteamDeckKeyboardLayout_Russian: 18,
  k_ESteamDeckKeyboardLayout_Spanish: 19,
  k_ESteamDeckKeyboardLayout_Swedish: 20,
  k_ESteamDeckKeyboardLayout_Thai: 21,
  k_ESteamDeckKeyboardLayout_Turkish_F: 22,
  k_ESteamDeckKeyboardLayout_Turkish_Q: 23,
  k_ESteamDeckKeyboardLayout_Ukrainian: 24,
  k_ESteamDeckKeyboardLayout_Vietnamese: 25,
  k_ESteamDeckKeyboardLayout_QWERTY_International: 26,
  k_ESteamDeckKeyboardLayout_Dvorak: 27,
  k_ESteamDeckKeyboardLayout_Colemak: 28,
  k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic_Traditional: 29,
  k_ESteamDeckKeyboardLayout_Bulgarian_Phonetic: 30,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Bopomofo: 31,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Cangjie: 32,
  k_ESteamDeckKeyboardLayout_Japanese_Kana: 33,
  k_ESteamDeckKeyboardLayout_Chinese_Traditional_Quick: 34,
  k_ESteamDeckKeyboardLayout_Indonesian: 35,
} as const;

export type ESteamDeckKeyboardLayout =
  (typeof ESteamDeckKeyboardLayout)[keyof typeof ESteamDeckKeyboardLayout];

export interface SteamMessagesClientIClientForcedEnumDependencies {
  a?: EBluetoothDeviceType;
  b?: EStorageBlockContentType;
  c?: EStorageBlockFileSystemType;
  d?: ESDCardFormatStage;
}

export interface CMsgNetworkDeviceIP4Address {
  ip?: number;
  netmask?: number;
}

export interface CMsgNetworkDeviceIP4Config {
  addresses?: CMsgNetworkDeviceIP4Address[];
  dns_ip?: number[];
  gateway_ip?: number;
  is_dhcp_enabled?: boolean;
  is_default_route?: boolean;
  is_enabled?: boolean;
}

export interface CMsgNetworkDeviceIP6Address {
  ip?: string;
}

export interface CMsgNetworkDeviceIP6Config {
  addresses?: CMsgNetworkDeviceIP6Address[];
  dns_ip?: string[];
  gateway_ip?: string;
  is_dhcp_enabled?: boolean;
  is_default_route?: boolean;
  is_enabled?: boolean;
}

export interface CMsgNetworkDevicesData {
  devices?: CMsgNetworkDevicesData.Device[];
  is_wifi_enabled?: boolean;
  is_wifi_scanning_enabled?: boolean;
}

export namespace CMsgNetworkDevicesData {
  export interface Device {
    id?: number;
    etype?: number;
    estate?: number;
    mac?: string;
    vendor?: string;
    product?: string;
    ip4?: CMsgNetworkDeviceIP4Config;
    ip6?: CMsgNetworkDeviceIP6Config;
  }

  export namespace Device {
    export interface Wired {
      is_cable_present?: boolean;
      speed_mbit?: number;
      friendly_name?: string;
    }

    export interface Wireless {
      esecurity_supported?: number;
    }

    export namespace Wireless {
      export interface AP {
        id?: number;
        estrength?: number;
        ssid?: string;
        is_active?: boolean;
        is_autoconnect?: boolean;
        esecurity?: number;
        user_name?: string;
        password?: string;
        strength_raw?: number;
        band_filter?: string;
        has_non_6ghz_channel?: boolean;
        is_saved?: boolean;
      }
    }
  }
}

export interface CMsgNetworkDeviceConnect {
  device_id?: number;
  credentials?: CMsgNetworkDeviceConnect.Credentials;
  ip4?: CMsgNetworkDeviceIP4Config;
  ip6?: CMsgNetworkDeviceIP6Config;
  wireless?: CMsgNetworkDeviceConnect.Wireless;
  ap_info?:
    | { ap_known: CMsgNetworkDeviceConnect.KnownAP }
    | { ap_custom: CMsgNetworkDeviceConnect.CustomAP };
}

export namespace CMsgNetworkDeviceConnect {
  export interface KnownAP {
    ap_id?: number;
  }

  export interface CustomAP {
    ssid?: string;
    esecurity?: number;
  }

  export interface Credentials {
    username?: string;
    password?: string;
  }

  export interface Wireless {
    band_filter?: string;
  }
}

export interface CMsgNetworkDeviceSetOptions {
  wireless?: CMsgNetworkDeviceSetOptions.Wireless;
}

export namespace CMsgNetworkDeviceSetOptions {
  export interface Wireless {
    ap_id?: number;
    is_autoconnect?: boolean;
    band_filter?: string;
  }
}

export interface CMsgStorageDevicesData {
  drives?: CMsgStorageDevicesData.Drive[];
  block_devices?: CMsgStorageDevicesData.BlockDevice[];
  is_unmount_supported?: boolean;
  is_trim_supported?: boolean;
  is_trim_running?: boolean;
}

export namespace CMsgStorageDevicesData {
  export interface Drive {
    id?: number;
    model?: string;
    vendor?: string;
    serial?: string;
    is_ejectable?: boolean;
    size_bytes?: Long;
    media_type?: EStorageDriveMediaType;
  }

  export interface BlockDevice {
    id?: number;
    drive_id?: number;
    path?: string;
    friendly_path?: string;
    label?: string;
    size_bytes?: Long;
    is_formattable?: boolean;
    is_read_only?: boolean;
    is_root_device?: boolean;
    content_type?: EStorageBlockContentType;
    filesystem_type?: EStorageBlockFileSystemType;
    mount_path?: string;
  }
}

export interface CCloud_PendingRemoteOperation {
  operation?: ECloudPendingRemoteOperation;
  machine_name?: string;
  client_id?: Long;
  time_last_updated?: number;
  os_type?: number;
  device_type?: number;
}

export interface CMsgCloudPendingRemoteOperations {
  operations?: CCloud_PendingRemoteOperation[];
}

export interface CMsgBluetoothDevicesData {
  adapters?: CMsgBluetoothDevicesData.Adapter[];
  devices?: CMsgBluetoothDevicesData.Device[];
  manager?: CMsgBluetoothDevicesData.Manager;
}

export namespace CMsgBluetoothDevicesData {
  export interface Adapter {
    id?: number;
    mac?: string;
    name?: string;
    is_enabled?: boolean;
    is_discovering?: boolean;
  }

  export interface Device {
    id?: number;
    adapter_id?: number;
    etype?: EBluetoothDeviceType;
    mac?: string;
    name?: string;
    is_connected?: boolean;
    is_paired?: boolean;
    strength_raw?: number;
    wake_allowed?: boolean;
    wake_allowed_supported?: boolean;
    battery_percent?: number;
  }

  export interface Manager {
    is_bluetooth_enabled?: boolean;
  }
}

export interface CMsgSystemPerfDiagnosticEntry {
  name?: string;
  value?: string;
}

export interface CMsgSystemPerfNetworkInterface {
  name?: string;
  timestamp?: number;
  tx_bytes_total?: Long;
  rx_bytes_total?: Long;
  tx_bytes_per_sec?: number;
  rx_bytes_per_sec?: number;
}

export interface CMsgSystemPerfDiagnosticInfo {
  entries?: CMsgSystemPerfDiagnosticEntry[];
  interfaces?: CMsgSystemPerfNetworkInterface[];
  battery_temp_c?: number;
}

export interface CMsgSystemPerfLimits {
  cpu_governor_manual_min_mhz?: number;
  cpu_governor_manual_max_mhz?: number;
  fsr_sharpness_min?: number;
  fsr_sharpness_max?: number;
  gpu_performance_manual_min_mhz?: number;
  gpu_performance_manual_max_mhz?: number;
  perf_overlay_is_standalone?: boolean;
  is_manual_display_refresh_rate_available?: boolean;
  gpu_performance_levels_available?: EGPUPerformanceLevel[];
  display_refresh_manual_hz_min?: number;
  display_refresh_manual_hz_max?: number;
  fps_limit_options?: number[];
  tdp_limit_min?: number;
  tdp_limit_max?: number;
  display_external_refresh_manual_hz_min?: number;
  display_external_refresh_manual_hz_max?: number;
  fps_limit_options_external?: number[];
  is_vrr_supported?: boolean;
  is_dynamic_refresh_rate_in_steam_supported?: boolean;
  split_scaling_filters_available?: ESplitScalingFilter[];
  split_scaling_scalers_available?: ESplitScalingScaler[];
  disable_refresh_rate_management?: boolean;
}

export interface CMsgSystemPerfSettingsGlobal {
  diagnostic_update_rate?: number;
  graphics_profiling_service_state?: ESystemServiceState;
  perf_overlay_service_state?: ESystemServiceState;
  perf_overlay_level?: EGraphicsPerfOverlayLevel;
  is_show_perf_overlay_over_steam_enabled?: boolean;
  is_advanced_settings_enabled?: boolean;
  allow_external_display_refresh_control?: boolean;
  hdr_on_sdr_tonemap_operator?: EHDRToneMapOperator;
  is_hdr_debug_heatmap_enabled?: boolean;
  force_hdr_wide_gammut_for_sdr?: boolean;
  sdr_to_hdr_brightness?: number;
  is_color_management_enabled?: boolean;
}

export interface CMsgSystemPerfSettingsPerApp {
  gpu_performance_manual_mhz?: number;
  fps_limit?: number;
  is_variable_resolution_enabled?: boolean;
  is_dynamic_refresh_rate_enabled?: boolean;
  tdp_limit?: number;
  cpu_governor?: ECPUGovernor;
  cpu_governor_manual_mhz?: number;
  scaling_filter?: number;
  fsr_sharpness?: number;
  is_fps_limit_enabled?: boolean;
  is_tdp_limit_enabled?: boolean;
  is_low_latency_mode_enabled?: boolean;
  display_refresh_manual_hz?: number;
  is_game_perf_profile_enabled?: boolean;
  gpu_performance_level?: EGPUPerformanceLevel;
  display_external_refresh_manual_hz?: number;
  fps_limit_external?: number;
  is_tearing_enabled?: boolean;
  is_vrr_enabled?: boolean;
  use_dynamic_refresh_rate_in_steam?: boolean;
  split_scaling_filter?: ESplitScalingFilter;
  split_scaling_scaler?: ESplitScalingScaler;
}

export interface CMsgSystemPerfSettings {
  global?: CMsgSystemPerfSettingsGlobal;
  per_app?: CMsgSystemPerfSettingsPerApp;
}

export interface CMsgSystemPerfSettingsV1 {
  diagnostic_update_rate?: number;
  system_trace_service_state?: ESystemServiceState;
  graphics_profiling_service_state?: ESystemServiceState;
  perf_overlay_service_state?: ESystemServiceState;
  perf_overlay_level?: EGraphicsPerfOverlayLevel;
  gpu_performance_level?: EGPUPerformanceLevel;
  gpu_performance_manual_mhz?: number;
  fps_limit?: number;
  is_variable_resolution_enabled?: boolean;
  is_dynamic_refresh_rate_enabled?: boolean;
  tdp_limit?: number;
  cpu_governor?: ECPUGovernor;
  cpu_governor_manual_mhz?: number;
  scaling_filter?: number;
  fsr_sharpness?: number;
  is_fps_limit_enabled?: boolean;
  is_tdp_limit_enabled?: boolean;
  is_show_perf_overlay_over_steam_enabled?: boolean;
  is_low_latency_mode_enabled?: boolean;
  display_refresh_manual_hz?: number;
  is_game_perf_profile_enabled?: boolean;
}

export interface CMsgSystemPerfState {
  limits?: CMsgSystemPerfLimits;
  settings?: CMsgSystemPerfSettings;
  current_game_id?: Long;
  active_profile_game_id?: Long;
}

export interface CMsgSystemPerfUpdateSettings {
  gameid?: Long;
  skip_storage_update?: boolean;
  update?: { reset_to_default: boolean } | { settings_delta: CMsgSystemPerfSettings };
}

export interface CMsgSystemPerfLegacySettingEntry {
  profile_game_id?: Long;
  settings?: CMsgSystemPerfSettingsPerApp;
}

export interface CMsgSystemPerfLegacySettings {
  global?: CMsgSystemPerfSettingsGlobal;
  per_app_settings?: CMsgSystemPerfLegacySettingEntry[];
}

export interface CMsgSystemDockUpdateState {
  state?: EUpdaterState;
  rtime_last_checked?: number;
  version_current?: string;
  version_available?: string;
  stage_progress?: number;
  rtime_estimated_completion?: number;
  old_fw_workaround?: number;
}

export interface CMsgSystemDockState {
  update_state?: CMsgSystemDockUpdateState;
}

export interface CMsgSystemDockUpdateFirmware {
  check_only?: boolean;
}

export interface CMsgSystemAudioVolume {
  entries?: CMsgSystemAudioVolume.ChannelEntry[];
  is_muted?: boolean;
}

export namespace CMsgSystemAudioVolume {
  export interface ChannelEntry {
    echannel?: ESystemAudioChannel;
    volume?: number;
  }
}

export interface CMsgSystemAudioManagerObject {
  id?: number;
  rtime_last_update?: number;
}

export interface CMsgSystemAudioManagerDevice {
  base?: CMsgSystemAudioManagerObject;
  name?: string;
  nick?: string;
  description?: string;
  api?: string;
}

export interface CMsgSystemAudioManagerNode {
  base?: CMsgSystemAudioManagerObject;
  device_id?: number;
  name?: string;
  nick?: string;
  description?: string;
  edirection?: ESystemAudioDirection;
  volume?: CMsgSystemAudioVolume;
}

export interface CMsgSystemAudioManagerPort {
  base?: CMsgSystemAudioManagerObject;
  node_id?: number;
  name?: string;
  alias?: string;
  etype?: ESystemAudioPortType;
  edirection?: ESystemAudioPortDirection;
  is_physical?: boolean;
  is_terminal?: boolean;
  is_control?: boolean;
  is_monitor?: boolean;
}

export interface CMsgSystemAudioManagerLink {
  base?: CMsgSystemAudioManagerObject;
  output_node_id?: number;
  output_port_id?: number;
  input_node_id?: number;
  input_port_id?: number;
}

export interface CMsgSystemAudioManagerStateHW {
  devices?: CMsgSystemAudioManagerDevice[];
  nodes?: CMsgSystemAudioManagerNode[];
  ports?: CMsgSystemAudioManagerPort[];
  links?: CMsgSystemAudioManagerLink[];
}

export interface CMsgSystemAudioManagerState {
  rtime_filter?: number;
  counter?: number;
  hw?: CMsgSystemAudioManagerStateHW;
}

export interface CMsgSystemAudioManagerUpdateSomething {
  counter?: number;
}

export interface CMsgSystemDisplayMode {
  id?: number;
  width?: number;
  height?: number;
  refresh_hz?: number;
}

export interface CMsgSystemDisplay {
  id?: number;
  name?: string;
  description?: string;
  is_primary?: boolean;
  is_enabled?: boolean;
  is_internal?: boolean;
  has_mode_override?: boolean;
  width_mm?: number;
  height_mm?: number;
  current_mode_id?: number;
  modes?: CMsgSystemDisplayMode[];
  refresh_rate_min?: number;
  refresh_rate_max?: number;
  is_vrr_capable?: boolean;
  is_vrr_output_active?: boolean;
  is_hdr_capable?: boolean;
  is_hdr_output_active?: boolean;
  supported_refresh_rates?: number[];
}

export interface CMsgSystemDisplayManagerState {
  displays?: CMsgSystemDisplay[];
  is_mode_switching_supported?: boolean;
  compatibility_mode?: ESystemDisplayCompatibilityMode;
}

export interface CMsgSystemDisplayManagerSetMode {
  display_id?: number;
  mode_id?: number;
}

export interface CMsgSystemManagerSettings {
  idle_backlight_dim_battery_seconds?: number;
  idle_backlight_dim_ac_seconds?: number;
  is_adaptive_brightness_available?: boolean;
  display_adaptive_brightness_enabled?: boolean;
  display_nightmode_enabled?: boolean;
  display_nightmode_tintstrength?: number;
  display_nightmode_maxhue?: number;
  display_nightmode_maxsat?: number;
  display_nightmode_uiexp?: number;
  display_nightmode_blend?: number;
  display_nightmode_reset?: boolean;
  display_nightmode_schedule_enabled?: boolean;
  display_nightmode_schedule_starttime?: number;
  display_nightmode_schedule_endtime?: number;
  display_diagnostics_enabled?: boolean;
  als_lux_primary?: number;
  als_lux_median?: number;
  display_backlight_raw?: number;
  display_brightness_adaptivemin?: number;
  display_brightness_adaptivemax?: number;
  is_wifi_powersave_enabled?: boolean;
  is_fan_control_available?: boolean;
  fan_control_mode?: ESystemFanControlMode;
  is_display_brightness_available?: boolean;
  is_display_colormanagement_available?: boolean;
  display_colorgamut?: number;
  als_lux_alternate?: number;
  is_display_colortemp_available?: boolean;
  display_colortemp?: number;
  display_colortemp_default?: number;
  display_colortemp_enabled?: boolean;
  display_colorgamut_labelset?: EColorGamutLabelSet;
  display_brightness_overdrive_hdr_split?: number;
}

export interface CMsgSelectOSBranchParams {
  branch?: EOSBranch;
  custom_branch?: string;
}

export interface CMsgSystemUpdateProgress {
  stage_progress?: number;
  stage_size_bytes?: Long;
  rtime_estimated_completion?: number;
}

export interface CMsgSystemUpdateCheckResult {
  type?: EUpdaterType;
  eresult?: number;
  rtime_checked?: number;
  available?: boolean;
  version?: string;
  auto_message?: string;
  system_restart_pending?: boolean;
}

export interface CMsgSystemUpdateApplyParams {
  apply_types?: EUpdaterType[];
}

export interface CMsgSystemUpdateApplyResult {
  type?: EUpdaterType;
  eresult?: number;
  requires_client_restart?: boolean;
  requires_system_restart?: boolean;
}

export interface CMsgSystemUpdateState {
  state?: EUpdaterState;
  progress?: CMsgSystemUpdateProgress;
  update_check_results?: CMsgSystemUpdateCheckResult[];
  update_apply_results?: CMsgSystemUpdateApplyResult[];
  supports_os_updates?: boolean;
}

export interface CMsgAchievementChange {
  appid?: number;
}

export interface CMsgCellList {
  cells?: CMsgCellList.Cell[];
}

export namespace CMsgCellList {
  export interface Cell {
    cell_id?: number;
    loc_name?: string;
  }
}

export interface CMsgShortcutInfo {
  appid?: number;
  exe?: string;
  start_dir?: string;
  icon?: string;
  path?: string;
  args?: string;
  app_name?: string;
  override_appid?: number;
  flatpak_appid?: string;
  tags?: string[];
  remote_client_id?: Long;
  is_hidden?: boolean;
  is_temporary?: boolean;
  is_openvr?: boolean;
  allow_desktop_config?: boolean;
  allow_overlay?: boolean;
  rt_last_played_time?: number;
  is_devkit_shortcut?: boolean;
  devkit_gameid?: string;
  remote_launch_available?: boolean;
  sortas?: string;
}

export interface CMsgShortcutInfos {
  shorcuts?: CMsgShortcutInfo[];
}

export interface CMsgShortcutAppIds {
  appids?: number[];
}

export interface CMsgMonitorInfo {
  selected_display_name?: string;
  monitors?: CMsgMonitorInfo.MonitorInfo[];
}

export namespace CMsgMonitorInfo {
  export interface MonitorInfo {
    monitor_device_name?: string;
    monitor_display_name?: string;
  }
}

export interface CMsgGenerateSystemReportReply {
  report_id?: string;
}

export interface CMsgWebUITransportInfo {
  port?: number;
  auth_key?: string;
}

export interface CMsgWebUITransportFailure {
  connect_count?: number;
}

export interface CMsgClientShaderHitCacheEntry {
  key_sha?: Buffer;
  code_sha?: Buffer;
  time_last_reported?: Long;
}

export interface CMsgClientShaderHitCache {
  entries?: CMsgClientShaderHitCacheEntry[];
}
