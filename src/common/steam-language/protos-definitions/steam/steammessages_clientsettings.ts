/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  EBroadcastEncoderSetting,
  EBroadcastPermission,
  EExportCodec,
  EGRMode,
  EHDRVisualization,
} from "./enums";

export const EClientSettingStore = {
  k_EClientSettingStore_Invalid: 0,
  k_EClientSettingStore_ConfigStore_Install: 1,
  k_EClientSettingStore_ConfigStore_UserRoaming: 2,
  k_EClientSettingStore_ConfigStore_UserLocal: 3,
  k_EClientSettingStore_Registry: 4,
  k_EClientSettingStore_CustomFunc: 5,
} as const;

export type EClientSettingStore = (typeof EClientSettingStore)[keyof typeof EClientSettingStore];

export const EOverlayToggleBarLocation = {
  k_EOverlayToggleBarLocation_Bottom: 0,
  k_EOverlayToggleBarLocation_Left: 1,
  k_EOverlayToggleBarLocation_Right: 2,
  k_EOverlayToggleBarLocation_Top: 3,
} as const;

export type EOverlayToggleBarLocation =
  (typeof EOverlayToggleBarLocation)[keyof typeof EOverlayToggleBarLocation];

export const ESettingProfileMode = {
  k_ESettingProfileMode_None: 0,
  k_ESettingProfileMode_PerGame: 1,
  k_ESettingProfileMode_PerGamePerDisplay: 2,
  k_ESettingProfileMode_PerDisplay: 3,
} as const;

export type ESettingProfileMode = (typeof ESettingProfileMode)[keyof typeof ESettingProfileMode];

export const EGRAudio = {
  k_EGRAudio_Game: 0,
  k_EGRAudio_System: 1,
  k_EGRAudio_Select: 2,
} as const;

export type EGRAudio = (typeof EGRAudio)[keyof typeof EGRAudio];

export const EGRExportLimitType = {
  k_EGRExportLimitType_Native: 0,
  k_EGRExportLimitType_FileSize: 1,
  k_EGRExportLimitType_Advanced: 2,
} as const;

export type EGRExportLimitType = (typeof EGRExportLimitType)[keyof typeof EGRExportLimitType];

export const EFrameRateReportEnabled = {
  k_EFrameRateReportEnabled_Unset: 0,
  k_EFrameRateReportEnabled_Enabled: 1,
  k_EFrameRateReportEnabled_Disabled: 2,
} as const;

export type EFrameRateReportEnabled =
  (typeof EFrameRateReportEnabled)[keyof typeof EFrameRateReportEnabled];

export interface CMsgHotkey {
  key_code?: number;
  alt_key?: boolean;
  shift_key?: boolean;
  ctrl_key?: boolean;
  meta_key?: boolean;
  display_name?: string;
}

export interface CMsgSettingVariant {
  value?:
    | { value_bool: boolean }
    | { value_int32: number }
    | { value_uint32: number }
    | { value_uint64: Long }
    | { value_float: number }
    | { value_string: string }
    | { value_hotkey: CMsgHotkey };
}

export interface CMsgClientSettings {
  no_save_personal_info?: boolean;
  in_client_beta?: boolean;
  is_steam_sideloaded?: boolean;
  preferred_monitor?: string;
  steam_cef_gpu_blocklist_disabled?: boolean;
  bigpicture_windowed?: boolean;
  display_name?: string;
  is_external_display?: boolean;
  steam_os_underscan_level?: number;
  steam_os_underscan_enabled?: boolean;
  min_scale_factor?: number;
  max_scale_factor?: number;
  auto_scale_factor?: number;
  small_mode?: boolean;
  skip_steamvr_install_dialog?: boolean;
  always_show_user_chooser?: boolean;
  os_version_unsupported?: boolean;
  show_family_sharing_notifications?: boolean;
  show_copy_count_in_library?: boolean;
  overlay_fps_counter_corner?: number;
  overlay_fps_counter_high_contrast?: boolean;
  overlay_key?: CMsgHotkey;
  screenshot_key?: CMsgHotkey;
  enable_overlay?: boolean;
  enable_screenshot_notification?: boolean;
  enable_screenshot_sound?: boolean;
  save_uncompressed_screenshots?: boolean;
  screenshots_path?: string;
  default_ping_rate?: number;
  server_ping_rate?: number;
  steam_networking_share_ip?: number;
  web_browser_home?: string;
  voice_mic_device_name?: string;
  voice_mic_input_gain?: number;
  voice_speaker_output_gain?: number;
  voice_push_to_talk_setting?: number;
  voice_push_to_talk_key?: CMsgHotkey;
  overlay_toolbar_list_view?: boolean;
  always_use_gamepadui_overlay?: boolean;
  overlay_tabs?: string;
  overlay_scale_interface?: boolean;
  overlay_restore_browser_tabs?: boolean;
  enable_avif_screenshots?: boolean;
  overlay_fps_counter_detail_level?: number;
  overlay_fps_counter_saturation_factor?: number;
  overlay_fps_counter_bgopacity?: number;
  overlay_fps_counter_scale_factor?: number;
  overlay_fps_counter_key?: CMsgHotkey;
  overlay_fps_counter_fps_graph?: boolean;
  overlay_fps_counter_cpu_graph?: boolean;
  overlay_fps_counter_allow_km_driver?: boolean;
  achievement_notification_toast?: boolean;
  achievement_notification_sound?: boolean;
  smooth_scroll_webviews?: boolean;
  enable_gpu_accelerated_webviews?: boolean;
  enable_hardware_video_decoding?: boolean;
  run_at_startup?: boolean;
  enable_dpi_scaling?: boolean;
  enable_marketing_messages?: boolean;
  start_in_big_picture_mode?: boolean;
  jumplist_flags?: number;
  enable_ui_sounds?: boolean;
  enable_gamescope_composer?: boolean;
  enable_gamescope_composer_vr?: boolean;
  show_switch_to_desktop_at_login?: boolean;
  disable_all_toasts?: boolean;
  disable_toasts_in_game?: boolean;
  play_sound_on_toast?: boolean;
  library_display_size?: number;
  library_whats_new_show_only_product_updates?: boolean;
  show_store_content_on_home?: boolean;
  start_page?: string;
  library_low_bandwidth_mode?: boolean;
  library_low_perf_mode?: boolean;
  library_disable_community_content?: boolean;
  library_display_icon_in_game_list?: boolean;
  ready_to_play_includes_streaming?: boolean;
  show_steam_deck_info?: boolean;
  enable_shader_precache?: boolean;
  enable_shader_background_processing?: boolean;
  shader_precached_size?: Long;
  needs_steam_service_repair?: boolean;
  download_peer_content?: number;
  download_rate_bits_per_s?: boolean;
  restrict_auto_updates?: boolean;
  restrict_auto_updates_start?: number;
  restrict_auto_updates_end?: number;
  download_region?: number;
  download_while_app_running?: boolean;
  download_throttle_while_streaming?: boolean;
  download_throttle_rate?: number;
  default_app_update_behavior?: number;
  cloud_enabled?: boolean;
  show_screenshot_manager?: boolean;
  music_volume?: number;
  music_pause_on_app_start?: boolean;
  music_pause_on_voice_chat?: boolean;
  music_download_high_quality?: boolean;
  broadcast_permissions?: EBroadcastPermission;
  broadcast_output_width?: number;
  broadcast_output_height?: number;
  broadcast_bitrate?: number;
  broadcast_encoding_option?: EBroadcastEncoderSetting;
  broadcast_record_all_video?: boolean;
  broadcast_record_all_audio?: boolean;
  broadcast_record_microphone?: boolean;
  broadcast_show_upload_stats?: boolean;
  broadcast_show_live_reminder?: boolean;
  broadcast_chat_corner?: number;
  gamestream_hardware_video_encode?: boolean;
  gamestream_enable_video_h265?: boolean;
  steam_input_configurator_error_msg_enable?: boolean;
  controller_guide_button_focus_steam?: boolean;
  controller_ps_support?: number;
  controller_xbox_support?: boolean;
  controller_xbox_driver?: boolean;
  controller_switch_support?: boolean;
  controller_generic_support?: boolean;
  controller_power_off_timeout?: number;
  turn_off_controller_on_exit?: boolean;
  controller_combine_nintendo_joycons?: boolean;
  controller_enable_chord?: boolean;
  controller_poll_rate?: boolean;
  controller_siapi_config_author_mode?: boolean;
  startup_movie_id?: Long;
  startup_movie_local_path?: string;
  startup_movie_shuffle?: boolean;
  startup_movie_used_for_resume?: boolean;
  game_notes_enable_spellcheck?: boolean;
  screenshot_items_per_row?: number;
  gamerecording_background_path?: string;
  gamerecording_background_max_keep?: string;
  gamerecording_background_time_resolution?: number;
  gamerecording_background_mk?: CMsgHotkey;
  gamerecording_background_tg?: CMsgHotkey;
  gamerecording_background_a_m?: boolean;
  gamerecording_video_bitrate?: string;
  gamerecording_background_mode?: EGRMode;
  gamerecording_background_audio?: EGRAudio;
  gamerecording_max_fps?: number;
  gamerecording_hotkey_ic?: CMsgHotkey;
  gamerecording_ic_seconds?: number;
  gamerecording_export_limit_type?: EGRExportLimitType;
  gamerecording_export_limit_size_mb?: number;
  gamerecording_export_limit_bitrate?: number;
  gamerecording_export_limit_width?: number;
  gamerecording_export_limit_height?: number;
  gamerecording_export_limit_frame_rate?: number;
  gamerecording_export_directory?: string;
  gamerecording_export_codec?: EExportCodec;
  gamerecording_video_maxheight?: number;
  gamerecording_force_mic_mono?: boolean;
  gamerecording_automatic_gain_control?: boolean;
  show_timestamps_in_console?: boolean;
  override_browser_composer_mode?: number;
  cef_remote_debugging_enabled?: boolean;
  force_deck_perf_tab?: boolean;
  force_fake_mandatory_update?: boolean;
  hdr_compat_testing?: boolean;
  developer_mode_enabled?: boolean;
  show_advanced_update_channels?: boolean;
  gamescope_hdr_visualization?: EHDRVisualization;
  gamescope_app_target_framerate?: number;
  gamescope_enable_app_target_framerate?: boolean;
  gamescope_disable_framelimit?: boolean;
  gamescope_display_refresh_rate?: number;
  gamescope_use_game_refresh_rate_in_steam?: boolean;
  gamescope_disable_mura_correction?: boolean;
  gamescope_include_steamui_in_screenshots?: boolean;
  gamescope_allow_tearing?: boolean;
  gamescope_composite_debug?: boolean;
  gamescope_force_composite?: boolean;
  gamescope_game_resolution_global?: string;
  gamescope_guide_hotkey?: CMsgHotkey;
  gamescope_qam_hotkey?: CMsgHotkey;
  gamescope_hdr_enabled?: boolean;
  gamescope_native_external_res_in_steam?: boolean;
  steamos_status_led_brightness?: number;
  steamos_tdp_limit_enabled?: boolean;
  steamos_tdp_limit?: number;
  steamos_cec_enabled?: boolean;
  steamos_cec_wake_on_resume?: boolean;
  steamos_wifi_debug?: boolean;
  steamos_wifi_force_wpa_supplicant?: boolean;
  steamos_magnifier_scale?: number;
  steamos_manual_gpu_clock_enabled?: boolean;
  steamos_manual_gpu_clock_hz?: number;
  steamos_platform_performance_profile?: string;
  steamos_charge_limit_enabled?: boolean;
  steamos_charge_limit?: number;
  steamos_charge_limit_devmode?: boolean;
  steamos_system_tracing_enabled?: boolean;
  steamos_vrs_enabled?: boolean;
  steamos_separate_led_colors?: boolean;
  steamos_wifi_reload_wifi_driver_on_sleep?: boolean;
  setting_validation_bool?: boolean;
  setting_validation_enum?: EHDRVisualization;
  setting_validation_int32?: number;
  setting_validation_uint32?: number;
  setting_validation_uint64?: Long;
  setting_validation_float?: number;
  setting_validation_string?: string;
  setting_validation_hotkey?: CMsgHotkey;
  system_bluetooth_enabled?: boolean;
  hardware_updater_enabled?: boolean;
  system_idle_suspend_battery_sec?: number;
  system_idle_suspend_ac_sec?: number;
  system_enable_low_power_downloads?: boolean;
  system_allow_battery_low_power_downloads?: boolean;
  vr_show_perf_graph_in_hmd?: boolean;
  accessibility_debug_visualizer?: boolean;
  accessibility_screen_reader_enabled?: boolean;
  accessibility_screen_reader_rate?: number;
  accessibility_screen_reader_pitch?: number;
  accessibility_screen_reader_volume?: number;
  accessibility_high_contrast_mode?: boolean;
  accessibility_reduce_motion?: boolean;
  accessibility_minimum_font_size?: number;
  accessibility_color_filter_name?: string;
  accessibility_desktop_ui_scale?: number;
  accessibility_screen_reader_locale?: string;
  accessibility_mono_audio?: boolean;
  remote_play_wifi_ap_enabled?: boolean;
  remote_play_wifi_ap_channel_5ghz?: number;
  remote_play_wifi_ap_channel_6ghz?: number;
  remote_play_wifi_ap_channel_width?: number;
  remote_play_wifi_ap_hotspot_mode?: boolean;
  remote_play_wifi_ap_hotspot_ssid?: string;
  remote_play_wifi_ap_hotspot_password?: string;
  remote_play_wifi_ap_hotspot_routing?: string;
  remote_play_wifi_ap_show_advanced?: boolean;
  remote_play_wifi_ap_paired_ssid?: string;
  skip_steamframe_pairing_dialog?: boolean;
  oobe_completed?: boolean;
  oobe_test_mode_enabled?: boolean;
  force_oobe?: boolean;
  oobe_stage_2_completed?: boolean;
  oobe_stage_2_test_mode_enabled?: boolean;
  force_stage_2_oobe?: boolean;
}
