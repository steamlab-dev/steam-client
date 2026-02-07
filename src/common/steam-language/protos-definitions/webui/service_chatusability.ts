/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CChatUsability_ClientUsabilityMetrics_Notification {
  metrics_run_id?: number;
  client_build?: number;
  metrics_version?: number;
  in_web?: boolean;
  settings?: CChatUsability_ClientUsabilityMetrics_Notification_Settings;
  voice_settings?: CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings;
  ui_state?: CChatUsability_ClientUsabilityMetrics_Notification_UIState;
  metrics?: CChatUsability_ClientUsabilityMetrics_Notification_Metrics;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification_Metrics {
  friends_count?: number;
  friends_category_count?: number;
  friends_categorized_count?: number;
  friends_online_count?: number;
  friends_in_game_count?: number;
  friends_in_game_singleton_count?: number;
  game_group_count?: number;
  friends_favorite_count?: number;
  group_chat_count?: number;
  group_chat_favorite_count?: number;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification_Settings {
  notifications_show_ingame?: boolean;
  notifications_show_online?: boolean;
  notifications_show_message?: boolean;
  notifications_events_and_announcements?: boolean;
  sounds_play_ingame?: boolean;
  sounds_play_online?: boolean;
  sounds_play_message?: boolean;
  sounds_events_and_announcements?: boolean;
  always_new_chat_window?: boolean;
  force_alphabetic_friend_sorting?: boolean;
  chat_flash_mode?: number;
  remember_open_chats?: boolean;
  compact_quick_access?: boolean;
  compact_friends_list?: boolean;
  notifications_show_chat_room_notification?: boolean;
  sounds_play_chat_room_notification?: boolean;
  hide_offline_friends_in_tag_groups?: boolean;
  hide_categorized_friends?: boolean;
  categorize_in_game_friends_by_game?: boolean;
  chat_font_size?: number;
  use24hour_clock?: boolean;
  do_not_disturb_mode?: boolean;
  disable_embed_inlining?: boolean;
  sign_into_friends?: boolean;
  animated_avatars?: boolean;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification_UIState {
  friends_list_height?: number;
  friends_list_width?: number;
  friends_list_docked?: boolean;
  friends_list_collapsed?: boolean;
  friends_list_group_chats_height?: number;
  friends_list_visible?: boolean;
  chat_popups_opened?: number;
  group_chat_tabs_opened?: number;
  friend_chat_tabs_opened?: number;
  chat_window_width?: number;
  chat_window_height?: number;
  category_collapse?: CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState;
  group_chat_left_col_collapsed?: number;
  group_chat_right_col_collapsed?: number;
  in_one_on_one_voice_chat?: boolean;
  in_group_voice_chat?: boolean;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState {
  in_game_collapsed?: boolean;
  online_collapsed?: boolean;
  offline_collapsed?: boolean;
  game_groups_collapsed?: number;
  categories_collapsed?: number;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings {
  voice_input_gain?: number;
  voice_output_gain?: number;
  noise_gate_level?: number;
  voice_use_echo_cancellation?: boolean;
  voice_use_noise_cancellation?: boolean;
  voice_use_auto_gain_control?: boolean;
  selected_non_default_mic?: boolean;
  selected_non_default_output?: boolean;
  push_to_talk_enabled?: boolean;
  push_to_mute_enabled?: boolean;
  play_ptt_sounds?: boolean;
}

export interface CChatUsability_RequestClientUsabilityMetrics_Notification {
  metrics_run_id?: number;
}

export abstract class ChatUsabilityService {
  abstract NotifyClientUsabilityMetrics(
    request: CChatUsability_ClientUsabilityMetrics_Notification,
  ): Promise<void>;
}

export abstract class ChatUsabilityClientService {
  abstract NotifyRequestClientUsabilityMetrics(
    request: CChatUsability_RequestClientUsabilityMetrics_Notification,
  ): Promise<void>;
}
