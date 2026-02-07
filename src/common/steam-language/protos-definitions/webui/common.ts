/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CAppOverview {
  appid?: number;
  display_name?: string;
  visible_in_game_list?: boolean;
  subscribed_to?: boolean;
  sort_as?: string;
  app_type?: number;
  mru_index?: number;
  rt_recent_activity_time?: number;
  minutes_playtime_forever?: number;
  minutes_playtime_last_two_weeks?: number;
  rt_last_time_played?: number;
  store_tag?: number[];
  store_category?: number[];
  rt_original_release_date?: number;
  rt_steam_release_date?: number;
  icon_hash?: string;
  xbox_controller_support?: number;
  vr_supported?: boolean;
  metacritic_score?: number;
  size_on_disk?: Long;
  third_party_mod?: boolean;
  icon_data?: string;
  icon_data_format?: string;
  gameid?: string;
  library_capsule_filename?: string;
  per_client_data?: CAppOverview_PerClientData[];
  most_available_clientid?: Long;
  selected_clientid?: Long;
  rt_store_asset_mtime?: number;
  rt_custom_image_mtime?: number;
  optional_parent_app_id?: number;
  owner_account_id?: number;
  review_score_with_bombs?: number;
  review_percentage_with_bombs?: number;
  review_score_without_bombs?: number;
  review_percentage_without_bombs?: number;
  library_id?: string;
  vr_only?: boolean;
  mastersub_appid?: number;
  mastersub_includedwith_logo?: string;
  site_license_site_name?: string;
  shortcut_override_appid?: number;
  rt_last_time_locally_played?: number;
  rt_purchased_time?: number;
  header_filename?: string;
  local_cache_version?: number;
  number_of_copies?: number;
  steam_hw_compat_category_packed?: number;
  album_cover_hash?: string;
  display_name_elanguage?: number;
  has_custom_sort_as?: boolean;
  bitfield_supported_languages?: Long;
}

export interface CAppOverview_Change {
  app_overview?: CAppOverview[];
  removed_appid?: number[];
  full_update?: boolean;
  update_complete?: boolean;
}

export interface CAppOverview_PerClientData {
  clientid?: Long;
  client_name?: string;
  display_status?: number;
  status_percentage?: number;
  active_beta?: string;
  installed?: boolean;
  streaming_to_local_client?: boolean;
  is_available_on_current_platform?: boolean;
  is_invalid_os_type?: boolean;
  playtime_left?: number;
  update_available_but_disabled_by_app?: boolean;
}

export interface CartAmount {
  amount_in_cents?: Long;
  currency_code?: number;
  formatted_amount?: string;
}

export interface CartCoupon {
  couponid?: number;
  gidcoupon?: Long;
  title?: string;
  coupon_description?: string;
  large_icon_url?: string;
  discount_pct?: number;
}

export interface CartGiftInfo {
  accountid_giftee?: number;
  gift_message?: CartGiftMessage;
  time_scheduled_send?: number;
}

export interface CartGiftMessage {
  gifteename?: string;
  message?: string;
  sentiment?: string;
  signature?: string;
}

export interface CChatPartyBeacon {
  app_id?: number;
  steamid_owner?: Long;
  beacon_id?: Long;
  game_metadata?: string;
}

export interface CChatRoleActions {
  role_id?: Long;
  can_create_rename_delete_channel?: boolean;
  can_kick?: boolean;
  can_ban?: boolean;
  can_invite?: boolean;
  can_change_tagline_avatar_name?: boolean;
  can_chat?: boolean;
  can_view_history?: boolean;
  can_change_group_roles?: boolean;
  can_change_user_roles?: boolean;
  can_mention_all?: boolean;
  can_set_watching_broadcast?: boolean;
}

export interface CChatRoom_GetChatRoomGroupSummary_Response {
  chat_group_id?: Long;
  chat_group_name?: string;
  active_member_count?: number;
  active_voice_member_count?: number;
  default_chat_id?: Long;
  chat_rooms?: CChatRoomState[];
  clanid?: number;
  chat_group_tagline?: string;
  accountid_owner?: number;
  top_members?: number[];
  chat_group_avatar_sha?: Buffer;
  rank?: number;
  default_role_id?: Long;
  role_ids?: Long[];
  role_actions?: CChatRoleActions[];
  watching_broadcast_accountid?: number;
  appid?: number;
  party_beacons?: CChatPartyBeacon[];
  watching_broadcast_channel_id?: Long;
  active_minigame_id?: Long;
  avatar_ugc_url?: string;
  disabled?: boolean;
}

export interface CChatRoomState {
  chat_id?: Long;
  chat_name?: string;
  voice_allowed?: boolean;
  members_in_voice?: number[];
  time_last_message?: number;
  sort_order?: number;
  last_message?: string;
  accountid_last_message?: number;
}

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

export interface CClientMetrics_ClientBootstrap_Notification {
  summary?: CClientMetrics_ClientBootstrap_Summary;
}

export interface CClientMetrics_ClientBootstrap_RequestInfo {
  original_hostname?: string;
  actual_hostname?: string;
  path?: string;
  base_name?: string;
  success?: boolean;
  status_code?: number;
  address_of_request_url?: string;
  response_time_ms?: number;
  bytes_received?: Long;
  num_retries?: number;
}

export interface CClientMetrics_ClientBootstrap_Summary {
  launcher_type?: number;
  steam_realm?: number;
  beta_name?: string;
  download_completed?: boolean;
  total_time_ms?: number;
  manifest_requests?: CClientMetrics_ClientBootstrap_RequestInfo[];
  package_requests?: CClientMetrics_ClientBootstrap_RequestInfo[];
}

export interface CClientMetrics_ClipRange_Notification {
  original_range_method?: number;
  start?: CClientMetrics_ClipRange_Notification_RelativeRangeEdge;
  end?: CClientMetrics_ClipRange_Notification_RelativeRangeEdge;
  seconds?: number;
  gameid?: Long;
}

export interface CClientMetrics_ClipRange_Notification_RelativeRangeEdge {
  original_range_method?: number;
  latest_range_method?: number;
  delta_ms?: number;
}

export interface CClientMetrics_ClipShare_Notification {
  eresult?: number;
  share_method?: number;
  seconds?: number;
  bytes?: Long;
  gameid?: Long;
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

export interface CClientMetrics_ContentDownloadResponse_Counts {
  class_100?: number;
  class_200?: number;
  class_300?: number;
  class_400?: number;
  class_500?: number;
  no_response?: number;
  class_unknown?: number;
}

export interface CClientMetrics_ContentDownloadResponse_Counts_Notification {
  cell_id?: number;
  data?: CClientMetrics_ContentDownloadResponse_Hosts;
}

export interface CClientMetrics_ContentDownloadResponse_HostCounts {
  hostname?: string;
  source_type?: number;
  counts?: CClientMetrics_ContentDownloadResponse_Counts;
}

export interface CClientMetrics_ContentDownloadResponse_Hosts {
  hosts?: CClientMetrics_ContentDownloadResponse_HostCounts[];
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

export interface CClientMetrics_DownloadRates_Notification {
  cell_id?: number;
  stats?: CClientMetrics_DownloadRates_Notification_StatsInfo[];
  throttling_kbps?: number;
  os_type?: number;
  device_type?: number;
}

export interface CClientMetrics_DownloadRates_Notification_StatsInfo {
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

export interface CClientMetrics_EndGameRecording_Notification {
  recording_type?: number;
  seconds?: number;
  bytes?: Long;
  gameid?: Long;
  instant_clip?: boolean;
}

export interface CClientMetrics_GamePerformance_Notification {
  frame_rates?: CClientMetrics_GamePerformance_Notification_FrameRate[];
  system_info?: UserSystemInformation;
}

export interface CClientMetrics_GamePerformance_Notification_FrameRate {
  gameid?: Long;
  frame_rate?: number;
  session_seconds?: number;
}

export interface CClientMetrics_IPv6Connectivity_Notification {
  cell_id?: number;
  results?: CClientMetrics_IPv6Connectivity_Result[];
  private_ip_is_rfc6598?: boolean;
}

export interface CClientMetrics_IPv6Connectivity_Result {
  protocol_tested?: number;
  connectivity_state?: number;
}

export interface CClientMetrics_SteamPipeWorkStats_Notification {
  appid?: number;
  depotid?: number;
  work_type?: number;
  operations?: CClientMetrics_SteamPipeWorkStats_Operation[];
  hardware_type?: number;
}

export interface CClientMetrics_SteamPipeWorkStats_Operation {
  type?: number;
  num_ops?: number;
  num_bytes?: Long;
  busy_time_ms?: Long;
  idle_time_ms?: Long;
  sum_run_time_ms?: Long;
  sum_wait_time_ms?: Long;
}

export interface CClientNotificationAchievement {
  achievement_id?: string;
  appid?: number;
  name?: string;
  description?: string;
  image_url?: string;
  achieved?: boolean;
  rtime_unlocked?: number;
  min_progress?: number;
  current_progress?: number;
  max_progress?: number;
  global_achieved_pct?: number;
}

export interface CClientNotificationBatteryTemperature {
  temperature?: number;
  notification_type?: string;
}

export interface CClientNotificationBroadcastAvailableToWatch {
  broadcast_permission?: number;
}

export interface CClientNotificationCannotReadControllerGuideButton {
  controller_index?: number;
}

export type CClientNotificationClaimSteamDeckRewards = Record<string, never>;

export interface CClientNotificationCloudSyncConflict {
  appid?: number;
}

export interface CClientNotificationCloudSyncFailure {
  appid?: number;
}

export type CClientNotificationDockUnsupportedFirmware = Record<string, never>;

export interface CClientNotificationDownloadCompleted {
  appid?: number;
  dlc_appid?: number;
}

export interface CClientNotificationFamilySharingStopPlaying {
  accountid_owner?: number;
  seconds_remaining?: number;
  appid?: number;
}

export interface CClientNotificationFriendInGame {
  steamid?: Long;
  game_name?: string;
}

export interface CClientNotificationFriendInviteRollup {
  new_invite_count?: number;
}

export interface CClientNotificationFriendMessage {
  tag?: string;
  steamid?: string;
  title?: string;
  body?: string;
  icon?: string;
  notificationid?: number;
  response_steamurl?: string;
}

export interface CClientNotificationFriendOnline {
  steamid?: Long;
}

export interface CClientNotificationGameRecordingError {
  game_id?: Long;
  error_type?: number;
}

export interface CClientNotificationGameRecordingInstantClip {
  game_id?: Long;
  clip_id?: string;
  duration_secs?: number;
}

export interface CClientNotificationGameRecordingStart {
  game_id?: Long;
}

export interface CClientNotificationGameRecordingStop {
  game_id?: Long;
  clip_id?: string;
  duration_secs?: number;
}

export interface CClientNotificationGameRecordingUserMarkerAdded {
  game_id?: Long;
}

export interface CClientNotificationGroupChatMessage {
  tag?: string;
  steamid_sender?: string;
  chat_group_id?: string;
  chat_id?: string;
  title?: string;
  body?: string;
  rawbody?: string;
  icon?: string;
  notificationid?: number;
}

export type CClientNotificationHardwareSurveyPending = Record<string, never>;

export interface CClientNotificationHardwareUpdateAvailable {
  etype?: number[];
}

export interface CClientNotificationIncomingVoiceChat {
  steamid?: Long;
}

export interface CClientNotificationItemAnnouncement {
  new_item_count?: number;
  new_backpack_items?: boolean;
}

export type CClientNotificationLoginRefresh = Record<string, never>;

export interface CClientNotificationLowBattery {
  pct_remaining?: number;
}

export interface CClientNotificationLowDiskSpace {
  folder_index?: number;
}

export type CClientNotificationOverlaySplashScreen = Record<string, never>;

export interface CClientNotificationPlaytimeWarning {
  type?: string;
  playtime_remaining?: number;
}

export interface CClientNotificationRemoteClientConnection {
  machine?: string;
  connected?: boolean;
}

export interface CClientNotificationRemoteClientStartStream {
  machine?: string;
  game_name?: string;
}

export interface CClientNotificationScreenshot {
  screenshot_handle?: string;
  description?: string;
  local_url?: string;
}

export interface CClientNotificationSteamInputActionSetChanged {
  controller_index?: number;
  action_set_name?: string;
}

export interface CClientNotificationStreamingClientConnection {
  hostname?: string;
  machine?: string;
  guest_id?: number;
  connected?: boolean;
}

export interface CClientNotificationSystemUpdate {
  type?: number;
}

export interface CClientNotificationTimedTrialRemaining {
  appid?: number;
  icon?: string;
  offline?: boolean;
  allowed_seconds?: number;
  played_seconds?: number;
}

export type CClientNotificationTimerExpired = Record<string, never>;

export interface CCloud_AppExitSyncDone_Notification {
  appid?: number;
  client_id?: Long;
  uploads_completed?: boolean;
  uploads_required?: boolean;
}

export interface CCloud_PendingRemoteOperation {
  operation?: number;
  machine_name?: string;
  client_id?: Long;
  time_last_updated?: number;
  os_type?: number;
  device_type?: number;
}

export interface CGameNetworkingUI_AppSummary {
  appid?: number;
  ip_was_shared_with_friend?: boolean;
  ip_was_shared_with_nonfriend?: boolean;
  active_connections?: number;
  main_cxn?: CGameNetworkingUI_ConnectionSummary;
}

export interface CGameNetworkingUI_ConnectionState {
  connection_key?: string;
  appid?: number;
  connection_id_local?: number;
  identity_local?: string;
  identity_remote?: string;
  connection_state?: number;
  start_time?: number;
  close_time?: number;
  close_reason?: number;
  close_message?: string;
  status_loc_token?: string;
  transport_kind?: number;
  sdrpopid_local?: string;
  sdrpopid_remote?: string;
  address_remote?: string;
  p2p_routing?: CMsgSteamDatagramP2PRoutingSummary;
  ping_interior?: number;
  ping_remote_front?: number;
  ping_default_internet_route?: number;
  e2e_quality_local?: CMsgSteamDatagramConnectionQuality;
  e2e_quality_remote?: CMsgSteamDatagramConnectionQuality;
  e2e_quality_remote_instantaneous_time?: Long;
  e2e_quality_remote_lifetime_time?: Long;
  front_quality_local?: CMsgSteamDatagramConnectionQuality;
  front_quality_remote?: CMsgSteamDatagramConnectionQuality;
  front_quality_remote_instantaneous_time?: Long;
  front_quality_remote_lifetime_time?: Long;
}

export interface CGameNetworkingUI_ConnectionSummary {
  transport_kind?: number;
  sdrpop_local?: string;
  sdrpop_remote?: string;
  ping_ms?: number;
  packet_loss?: number;
  ping_default_internet_route?: number;
  ip_was_shared?: boolean;
  connection_state?: number;
}

export interface CGameRecording_AudioSessionsChanged_Notification {
  sessions?: CGameRecording_AudioSessionsChanged_Notification_Session[];
}

export interface CGameRecording_AudioSessionsChanged_Notification_Session {
  id?: string;
  name?: string;
  is_system?: boolean;
  is_muted?: boolean;
  is_active?: boolean;
  is_captured?: boolean;
  recent_peak?: number;
  is_game?: boolean;
  is_steam?: boolean;
  is_saved?: boolean;
}

export interface CMsgAchievementChange {
  appid?: number;
}

export interface CMsgAuthTicket {
  estate?: number;
  eresult?: number;
  steamid?: Long;
  gameid?: Long;
  h_steam_pipe?: number;
  ticket_crc?: number;
  ticket?: Buffer;
  server_secret?: Buffer;
  ticket_type?: number;
}

export interface CMsgBadgeCraftedNotification {
  appid?: number;
  badge_level?: number;
}

export interface CMsgClientAccountInfo {
  persona_name?: string;
  ip_country?: string;
  count_authed_computers?: number;
  account_flags?: number;
  steamguard_machine_name_user_chosen?: string;
  is_phone_verified?: boolean;
  two_factor_state?: number;
  is_phone_identifying?: boolean;
  is_phone_needing_reverify?: boolean;
}

export interface CMsgClientAddFriendToGroup {
  groupid?: number;
  steamiduser?: Long;
}

export interface CMsgClientAddFriendToGroupResponse {
  eresult?: number;
}

export interface CMsgClientAMGetPersonaNameHistory {
  id_count?: number;
  Ids?: CMsgClientAMGetPersonaNameHistory_IdInstance[];
}

export interface CMsgClientAMGetPersonaNameHistory_IdInstance {
  steamid?: Long;
}

export interface CMsgClientAMGetPersonaNameHistoryResponse {
  responses?: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance[];
}

export interface CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance {
  eresult?: number;
  steamid?: Long;
  names?: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance[];
}

export interface CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance {
  name_since?: number;
  name?: string;
}

export interface CMsgClientChangeStatus {
  persona_state?: number;
  player_name?: string;
  is_auto_generated_name?: boolean;
  high_priority?: boolean;
  persona_set_by_user?: boolean;
  persona_state_flags?: number;
  need_persona_response?: boolean;
  is_client_idle?: boolean;
}

export interface CMsgClientClanState {
  steamid_clan?: Long;
  clan_account_flags?: number;
  name_info?: CMsgClientClanState_NameInfo;
  user_counts?: CMsgClientClanState_UserCounts;
  events?: CMsgClientClanState_Event[];
  announcements?: CMsgClientClanState_Event[];
  chat_room_private?: boolean;
}

export interface CMsgClientClanState_Event {
  gid?: Long;
  event_time?: number;
  headline?: string;
  game_id?: Long;
  just_posted?: boolean;
}

export interface CMsgClientClanState_NameInfo {
  clan_name?: string;
  sha_avatar?: Buffer;
}

export interface CMsgClientClanState_UserCounts {
  members?: number;
  online?: number;
  chatting?: number;
  in_game?: number;
  chat_room_members?: number;
}

export interface CMsgClientCreateFriendsGroup {
  steamid?: Long;
  groupname?: string;
  steamid_friends?: Long[];
}

export interface CMsgClientCreateFriendsGroupResponse {
  eresult?: number;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroup {
  steamid?: Long;
  groupid?: number;
}

export interface CMsgClientDeleteFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientEmoticonList {
  emoticons?: CMsgClientEmoticonList_Emoticon[];
  stickers?: CMsgClientEmoticonList_Sticker[];
  effects?: CMsgClientEmoticonList_Effect[];
}

export interface CMsgClientEmoticonList_Effect {
  name?: string;
  count?: number;
  time_received?: number;
  infinite_use?: boolean;
  appid?: number;
}

export interface CMsgClientEmoticonList_Emoticon {
  name?: string;
  count?: number;
  time_last_used?: number;
  use_count?: number;
  time_received?: number;
  appid?: number;
}

export interface CMsgClientEmoticonList_Sticker {
  name?: string;
  count?: number;
  time_received?: number;
  appid?: number;
  time_last_used?: number;
  use_count?: number;
}

export interface CMsgClientGetClanActivityCounts {
  steamid_clans?: Long[];
}

export type CMsgClientGetEmoticonList = Record<string, never>;

export interface CMsgClientHeartBeat {
  send_reply?: boolean;
}

export interface CMsgClientInviteToGame {
  steam_id_dest?: Long;
  steam_id_src?: Long;
  connect_string?: string;
  remote_play?: string;
}

export interface CMsgClientItemAnnouncements {
  count_new_items?: number;
  unseen_items?: CMsgClientItemAnnouncements_UnseenItem[];
}

export interface CMsgClientItemAnnouncements_UnseenItem {
  appid?: number;
  context_id?: Long;
  asset_id?: Long;
  amount?: Long;
  rtime32_gained?: number;
  source_appid?: number;
}

export interface CMsgClientLoggedOff {
  eresult?: number;
}

export interface CMsgClientLogon {
  protocol_version?: number;
  deprecated_obfustucated_private_ip?: number;
  cell_id?: number;
  last_session_id?: number;
  client_package_version?: number;
  client_language?: string;
  client_os_type?: number;
  should_remember_password?: boolean;
  wine_version?: string;
  deprecated_10?: number;
  obfuscated_private_ip?: CMsgIPAddress;
  deprecated_public_ip?: number;
  qos_level?: number;
  client_supplied_steam_id?: Long;
  public_ip?: CMsgIPAddress;
  machine_id?: Buffer;
  launcher_type?: number;
  ui_mode?: number;
  chat_mode?: number;
  steam2_auth_ticket?: Buffer;
  email_address?: string;
  rtime32_account_creation?: number;
  account_name?: string;
  password?: string;
  game_server_token?: string;
  login_key?: string;
  was_converted_deprecated_msg?: boolean;
  anon_user_target_account_name?: string;
  resolved_user_steam_id?: Long;
  eresult_sentryfile?: number;
  sha_sentryfile?: Buffer;
  auth_code?: string;
  otp_type?: number;
  otp_value?: number;
  otp_identifier?: string;
  steam2_ticket_request?: boolean;
  sony_psn_ticket?: Buffer;
  sony_psn_service_id?: string;
  create_new_psn_linked_account_if_needed?: boolean;
  sony_psn_name?: string;
  game_server_app_id?: number;
  steamguard_dont_remember_computer?: boolean;
  machine_name?: string;
  machine_name_userchosen?: string;
  country_override?: string;
  is_steam_box_deprecated?: boolean;
  client_instance_id?: Long;
  two_factor_code?: string;
  supports_rate_limit_response?: boolean;
  web_logon_nonce?: string;
  priority_reason?: number;
  embedded_client_secret?: CMsgClientSecret;
  disable_partner_autogrants?: boolean;
  is_steam_deck_deprecated?: boolean;
  access_token?: string;
  is_chrome_os?: boolean;
  is_tesla_deprecated?: boolean;
  gaming_device_type?: number;
}

export interface CMsgClientLogonResponse {
  eresult?: number;
  legacy_out_of_game_heartbeat_seconds?: number;
  heartbeat_seconds?: number;
  deprecated_public_ip?: number;
  rtime32_server_time?: number;
  account_flags?: number;
  cell_id?: number;
  email_domain?: string;
  steam2_ticket?: Buffer;
  eresult_extended?: number;
  cell_id_ping_threshold?: number;
  deprecated_use_pics?: boolean;
  vanity_url?: string;
  public_ip?: CMsgIPAddress;
  user_country?: string;
  client_supplied_steamid?: Long;
  ip_country_code?: string;
  parental_settings?: Buffer;
  parental_setting_signature?: Buffer;
  count_loginfailures_to_migrate?: number;
  count_disconnects_to_migrate?: number;
  ogs_data_report_time_window?: number;
  client_instance_id?: Long;
  force_client_update_check?: boolean;
  agreement_session_url?: string;
  token_id?: Long;
  family_group_id?: Long;
}

export interface CMsgClientManageFriendsGroup {
  groupid?: number;
  groupname?: string;
  steamid_friends_added?: Long[];
  steamid_friends_removed?: Long[];
}

export interface CMsgClientManageFriendsGroupResponse {
  eresult?: number;
}

export interface CMsgClientMMSInviteToLobby {
  app_id?: number;
  steam_id_lobby?: Long;
  steam_id_user_invited?: Long;
}

export interface CMsgClientOfflineMessageNotification {
  offline_messages?: number;
  friends_with_offline_messages?: number[];
}

export interface CMsgClientPersonaState {
  status_flags?: number;
  friends?: CMsgClientPersonaState_Friend[];
}

export interface CMsgClientPersonaState_Friend {
  friendid?: Long;
  persona_state?: number;
  game_played_app_id?: number;
  game_server_ip?: number;
  game_server_port?: number;
  persona_state_flags?: number;
  online_session_instances?: number;
  persona_set_by_user?: boolean;
  player_name?: string;
  query_port?: number;
  steamid_source?: Long;
  avatar_hash?: Buffer;
  last_logoff?: number;
  last_logon?: number;
  last_seen_online?: number;
  clan_rank?: number;
  game_name?: string;
  gameid?: Long;
  game_data_blob?: Buffer;
  clan_data?: CMsgClientPersonaState_Friend_ClanData;
  clan_tag?: string;
  rich_presence?: CMsgClientPersonaState_Friend_KV[];
  broadcast_id?: Long;
  game_lobby_id?: Long;
  watching_broadcast_accountid?: number;
  watching_broadcast_appid?: number;
  watching_broadcast_viewers?: number;
  watching_broadcast_title?: string;
  is_community_banned?: boolean;
  player_name_pending_review?: boolean;
  avatar_pending_review?: boolean;
  on_steam_deck?: boolean;
  other_game_data?: CMsgClientPersonaState_Friend_OtherGameData[];
  gaming_device_type?: number;
}

export interface CMsgClientPersonaState_Friend_ClanData {
  ogg_app_id?: number;
  chat_group_id?: Long;
}

export interface CMsgClientPersonaState_Friend_KV {
  key?: string;
  value?: string;
}

export interface CMsgClientPersonaState_Friend_OtherGameData {
  gameid?: Long;
  rich_presence?: CMsgClientPersonaState_Friend_KV[];
}

export interface CMsgClientRemoveFriendFromGroup {
  groupid?: number;
  steamiduser?: Long;
}

export interface CMsgClientRemoveFriendFromGroupResponse {
  eresult?: number;
}

export interface CMsgClientRequestFriendData {
  persona_state_requested?: number;
  friends?: Long[];
}

export type CMsgClientRequestOfflineMessageCount = Record<string, never>;

export interface CMsgClientSecret {
  version?: number;
  appid?: number;
  deviceid?: number;
  nonce?: Long;
  hmac?: Buffer;
}

export interface CMsgClientServersAvailable {
  server_types_available?: CMsgClientServersAvailable_Server_Types_Available[];
  server_type_for_auth_services?: number;
}

export interface CMsgClientServersAvailable_Server_Types_Available {
  server?: number;
  changed?: boolean;
}

export interface CMsgClientServerTimestampRequest {
  client_request_timestamp?: Long;
}

export interface CMsgClientServerTimestampResponse {
  client_request_timestamp?: Long;
  server_timestamp_ms?: Long;
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
  broadcast_permissions?: number;
  broadcast_output_width?: number;
  broadcast_output_height?: number;
  broadcast_bitrate?: number;
  broadcast_encoding_option?: number;
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
  gamerecording_background_mode?: number;
  gamerecording_background_audio?: number;
  gamerecording_max_fps?: number;
  gamerecording_hotkey_ic?: CMsgHotkey;
  gamerecording_ic_seconds?: number;
  gamerecording_export_limit_type?: number;
  gamerecording_export_limit_size_mb?: number;
  gamerecording_export_limit_bitrate?: number;
  gamerecording_export_limit_width?: number;
  gamerecording_export_limit_height?: number;
  gamerecording_export_limit_frame_rate?: number;
  gamerecording_export_directory?: string;
  gamerecording_export_codec?: number;
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
  gamescope_hdr_visualization?: number;
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
  setting_validation_enum?: number;
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
  controller_enable_chord?: boolean;
  controller_poll_rate?: boolean;
  controller_siapi_config_author_mode?: boolean;
}

export interface CMsgCloudPendingRemoteOperations {
  operations?: CCloud_PendingRemoteOperation[];
}

export interface CMsgControllerActionSetMiscSettings {
  cursor_visible_action_set_key?: string;
  cursor_hidden_action_set_key?: string;
}

export interface CMsgControllerConfiguration {
  binding_handle?: number;
  display_name?: string;
  description?: string;
  creator?: string;
  controller_type?: number;
  controller_style?: number;
  sets?: CMsgGameActionSet[];
  modes?: CMsgControllerMode[];
  error_msg?: string;
  action_block_path?: string;
  misc_action_set_settings?: CMsgControllerActionSetMiscSettings;
  url?: string;
}

export interface CMsgControllerInput {
  key?: number;
  activators?: CMsgControllerInputActivator[];
  disabled_activators?: CMsgControllerInputActivator[];
  inherited_from_parentset?: boolean;
}

export interface CMsgControllerInputActivator {
  activation?: number;
  bindings?: CMsgControllerInputBinding[];
  settings?: CMsgControllerSetting[];
}

export interface CMsgControllerInputBinding {
  type?: number;
  key_binding_data?: CMsgControllerInputBinding_KeyBindingData;
  keyboard_key?: CMsgControllerInputKeyBinding;
  mouse_button?: CMsgControllerInputMouseButtonBinding;
  gamepad_button?: CMsgControllerInputGamepadButtonBinding;
  mouse_wheel?: CMsgControllerInputMouseWheelBinding;
  mode_shift?: CMsgControllerInputModeShiftBinding;
  game_action?: CMsgControllerInputGameActionBinding;
  controller_action?: CMsgControllerInputControllerActionBinding;
}

export interface CMsgControllerInputBinding_IconBindingData {
  icon_filename?: string;
  color_foreground?: string;
  color_background?: string;
  icon_url?: string;
}

export interface CMsgControllerInputBinding_KeyBindingData {
  keys_bound_utf8?: string;
  friendly_name_utf8?: string;
  icon_data?: CMsgControllerInputBinding_IconBindingData;
}

export interface CMsgControllerInputControllerActionBinding {
  action?: number;
  mouse?: CMsgControllerInputControllerActionMouseBinding;
  camera_horizon_reset?: CMsgControllerInputControllerActionCameraHorizonReset;
  dots_per_360_calibration_spin?: CMsgControllerInputControllerActionDotsPer360CalibrationSpin;
  turn_to_face_direction?: CMsgControllerInputControllerActionTurnToFaceDirection;
  action_set?: CMsgControllerInputControllerActionGameActionSetBinding;
  led_color?: CMsgControllerInputControllerActionLEDColorBinding;
  change_player_number?: CMsgControllerInputControllerActionChangePlayerNumberBinding;
}

export interface CMsgControllerInputControllerActionCameraHorizonReset {
  camera_dip_angle?: number;
  delay_duration?: number;
  camera_horizon_reset_angle?: number;
}

export interface CMsgControllerInputControllerActionChangePlayerNumberBinding {
  player_number?: number;
}

export interface CMsgControllerInputControllerActionDotsPer360CalibrationSpin {
  spin_by_amount?: number;
  spin_duration?: number;
}

export interface CMsgControllerInputControllerActionGameActionSetBinding {
  preset_type?: number;
  action_set_key?: string;
  display?: boolean;
  beep?: boolean;
}

export interface CMsgControllerInputControllerActionLEDColorBinding {
  setting?: number;
  brightness?: number;
  saturation?: number;
  color_r?: number;
  color_g?: number;
  color_b?: number;
}

export interface CMsgControllerInputControllerActionMouseBinding {
  x?: number;
  y?: number;
  restore?: boolean;
}

export interface CMsgControllerInputControllerActionTurnToFaceDirection {
  source_of_direction?: number;
  turn_duration?: number;
  use_last_direction_if_deadzoned?: boolean;
}

export interface CMsgControllerInputGameActionBinding {
  action_set_key?: string;
  action_key?: string;
}

export interface CMsgControllerInputGamepadButtonBinding {
  button?: number;
}

export interface CMsgControllerInputKeyBinding {
  key?: number;
}

export interface CMsgControllerInputModeShiftBinding {
  source?: number;
}

export interface CMsgControllerInputMouseButtonBinding {
  button?: number;
}

export interface CMsgControllerInputMouseWheelBinding {
  button?: number;
}

export interface CMsgControllerMode {
  mode?: number;
  modeid?: number;
  description?: string;
  inputs?: CMsgControllerInput[];
  settings?: CMsgControllerSetting[];
  friendlyname?: string;
  source?: number;
  virtual_menu_info?: CMsgControllerVirtualMenuPreviewInfo;
  mode_shift?: boolean;
  reference_modeid?: number;
  mode_shift_buttons?: number[];
}

export interface CMsgControllerSetting {
  key?: number;
  int_value?: number;
  int_min?: number;
  int_max?: number;
  int_default?: number;
  parentset_setting?: CMsgControllerSetting;
  long_value?: Long;
}

export interface CMsgControllerSourceGroup {
  mode?: number;
  game_action?: CMsgControllerInputGameActionBinding;
  inputs?: CMsgControllerInput[];
  settings?: CMsgControllerSetting[];
  modeid?: number;
  mode_shift?: boolean;
  mode_shift_source_group?: CMsgControllerSourceGroup;
}

export interface CMsgControllerSources {
  key?: number;
  active_group?: CMsgControllerSourceGroup;
}

export interface CMsgControllerVirtualMenuPreviewInfo {
  source?: number;
  x_pos?: number;
  y_pos?: number;
  opacity?: number;
  scale?: number;
  show_labels?: boolean;
  menu_style?: number;
  force_on?: boolean;
  keys?: CVirtualMenuKey[];
}

export interface CMsgCREGetUserPublishedItemVoteDetails {
  published_file_ids?: CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId[];
}

export interface CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId {
  published_file_id?: Long;
}

export interface CMsgCREGetUserPublishedItemVoteDetailsResponse {
  eresult?: number;
  user_item_vote_details?: CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail[];
}

export interface CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail {
  published_file_id?: Long;
  vote?: number;
}

export interface CMsgCREUpdateUserPublishedItemVote {
  published_file_id?: Long;
  vote_up?: boolean;
}

export interface CMsgCREUpdateUserPublishedItemVoteResponse {
  eresult?: number;
}

export interface CMsgGameAction {
  key?: string;
  display_name?: string;
  modes?: number[];
}

export interface CMsgGameActionBindingType {
  key?: number;
  actions?: CMsgGameAction[];
}

export interface CMsgGameActionSet {
  key?: string;
  display_name?: string;
  legacy_set?: boolean;
  layers?: CMsgGameActionSet[];
  action_binding_types?: CMsgGameActionBindingType[];
  source_bindings?: CMsgControllerSources[];
}

export interface CMsgGCRoutingProtoBufHeader {
  dst_gcid_queue?: Long;
  dst_gc_dir_index?: number;
}

export interface CMsgGenerateSystemReportReply {
  report_id?: string;
}

export interface CMsgHotkey {
  key_code?: number;
  alt_key?: boolean;
  shift_key?: boolean;
  ctrl_key?: boolean;
  meta_key?: boolean;
  display_name?: string;
}

export interface CMsgIPAddress {
  v4?: number;
  v6?: Buffer;
}

export interface CMsgMonitorInfo {
  selected_display_name?: string;
  monitors?: CMsgMonitorInfo_MonitorInfo[];
}

export interface CMsgMonitorInfo_MonitorInfo {
  monitor_device_name?: string;
  monitor_display_name?: string;
}

export interface CMsgMulti {
  size_unzipped?: number;
  message_body?: Buffer;
}

export interface CMsgNetworkDeviceConnect {
  device_id?: number;
  ap_known?: CMsgNetworkDeviceConnect_KnownAP;
  ap_custom?: CMsgNetworkDeviceConnect_CustomAP;
  credentials?: CMsgNetworkDeviceConnect_Credentials;
  ip4?: CMsgNetworkDeviceIP4Config;
  ip6?: CMsgNetworkDeviceIP6Config;
  wireless?: CMsgNetworkDeviceConnect_Wireless;
}

export interface CMsgNetworkDeviceConnect_Credentials {
  username?: string;
  password?: string;
}

export interface CMsgNetworkDeviceConnect_CustomAP {
  ssid?: string;
  esecurity?: number;
}

export interface CMsgNetworkDeviceConnect_KnownAP {
  ap_id?: number;
}

export interface CMsgNetworkDeviceConnect_Wireless {
  band_filter?: string;
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
  devices?: CMsgNetworkDevicesData_Device[];
  is_wifi_enabled?: boolean;
  is_wifi_scanning_enabled?: boolean;
}

export interface CMsgNetworkDevicesData_Device {
  id?: number;
  etype?: number;
  estate?: number;
  mac?: string;
  vendor?: string;
  product?: string;
  ip4?: CMsgNetworkDeviceIP4Config;
  ip6?: CMsgNetworkDeviceIP6Config;
  wired?: CMsgNetworkDevicesData_Device_Wired;
  wireless?: CMsgNetworkDevicesData_Device_Wireless;
}

export interface CMsgNetworkDevicesData_Device_Wired {
  is_cable_present?: boolean;
  speed_mbit?: number;
  friendly_name?: string;
}

export interface CMsgNetworkDevicesData_Device_Wireless {
  aps?: CMsgNetworkDevicesData_Device_Wireless_AP[];
  esecurity_supported?: number;
}

export interface CMsgNetworkDevicesData_Device_Wireless_AP {
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

export interface CMsgNetworkDeviceSetOptions {
  wireless?: CMsgNetworkDeviceSetOptions_Wireless;
}

export interface CMsgNetworkDeviceSetOptions_Wireless {
  ap_id?: number;
  is_autoconnect?: boolean;
  band_filter?: string;
}

export interface CMsgProtoBufHeader {
  steamid?: Long;
  client_sessionid?: number;
  routing_appid?: number;
  jobid_source?: Long;
  jobid_target?: Long;
  target_job_name?: string;
  eresult?: number;
  error_message?: string;
  ip?: number;
  auth_account_flags?: number;
  transport_error?: number;
  messageid?: Long;
  publisher_group_id?: number;
  sysid?: number;
  token_source?: number;
  admin_spoofing_user?: boolean;
  seq_num?: number;
  webapi_key_id?: number;
  is_from_external_source?: boolean;
  forward_to_sysid?: number[];
  cm_sysid?: number;
  ip_v6?: Buffer;
  launcher_type?: number;
  realm?: number;
  timeout_ms?: number;
  debug_source?: string;
  debug_source_string_index?: number;
  token_id?: Long;
  routing_gc?: CMsgGCRoutingProtoBufHeader;
  session_disposition?: number;
  wg_token?: string;
  webui_auth_key?: string;
  exclude_client_sessionids?: number[];
  admin_request_spoofing_steamid?: Long;
  is_valveds?: boolean;
  trace_tag?: Long;
}

export interface CMsgSelectOSBranchParams {
  branch?: number;
  custom_branch?: string;
}

export interface CMsgSetControllerActionSet {
  action_set_key?: string;
  action_set_layer_key?: string;
  new_display_name?: string;
  action_set_to_copy_key?: string;
}

export interface CMsgSetControllerInputActivator {
  action_set_key?: string;
  action_set_layer_key?: string;
  source_binding_key?: number;
  mode_shift?: boolean;
  input_key?: number;
  activator_index?: number;
  new_activation?: number;
  new_setting?: CMsgControllerSetting;
  modeid?: number;
}

export interface CMsgSetControllerInputActivatorEnabled {
  action_set_key?: string;
  action_set_layer_key?: string;
  source_binding_key?: number;
  mode_shift?: boolean;
  input_key?: number;
  activator_index?: number;
  enabled?: boolean;
  modeid?: number;
}

export interface CMsgSetControllerInputBinding {
  action_set_key?: string;
  action_set_layer_key?: string;
  source_binding_key?: number;
  mode_shift?: boolean;
  input_key?: number;
  activator_index?: number;
  binding_index?: number;
  new_binding?: CMsgControllerInputBinding;
  source_mode?: number;
  modeid?: number;
}

export interface CMsgSetControllerSourceMode {
  action_set_key?: string;
  action_set_layer_key?: string;
  source_binding_key?: number;
  mode_shift?: boolean;
  new_mode?: number;
  new_game_action?: CMsgControllerInputGameActionBinding;
  new_setting?: CMsgControllerSetting;
  new_name?: string;
  modeid?: number;
  change_mode?: boolean;
  new_virtual_menu?: boolean;
  enable_virtual_menu_support?: boolean;
}

export interface CMsgSetModeShiftButton {
  action_set_key?: string;
  action_set_layer_key?: string;
  modeid?: number;
  source?: number;
  mode_shift_buttons_digital_io?: number[];
}

export interface CMsgSteamDatagramConnectionQuality {
  instantaneous?: CMsgSteamDatagramLinkInstantaneousStats;
  lifetime?: CMsgSteamDatagramLinkLifetimeStats;
}

export interface CMsgSteamDatagramLinkInstantaneousStats {
  out_packets_per_sec_x10?: number;
  out_bytes_per_sec?: number;
  in_packets_per_sec_x10?: number;
  in_bytes_per_sec?: number;
  ping_ms?: number;
  packets_dropped_pct?: number;
  packets_weird_sequence_pct?: number;
  peak_jitter_usec?: number;
}

export interface CMsgSteamDatagramLinkLifetimeStats {
  connected_seconds?: number;
  packets_sent?: Long;
  kb_sent?: Long;
  packets_recv?: Long;
  kb_recv?: Long;
  packets_recv_sequenced?: Long;
  packets_recv_dropped?: Long;
  packets_recv_out_of_order?: Long;
  packets_recv_duplicate?: Long;
  packets_recv_lurch?: Long;
  multipath_packets_recv_sequenced?: Long[];
  multipath_packets_recv_later?: Long[];
  multipath_send_enabled?: number;
  packets_recv_out_of_order_corrected?: Long;
  quality_histogram_100?: number;
  quality_histogram_99?: number;
  quality_histogram_97?: number;
  quality_histogram_95?: number;
  quality_histogram_90?: number;
  quality_histogram_75?: number;
  quality_histogram_50?: number;
  quality_histogram_1?: number;
  quality_histogram_dead?: number;
  quality_ntile_2nd?: number;
  quality_ntile_5th?: number;
  quality_ntile_25th?: number;
  quality_ntile_50th?: number;
  ping_histogram_25?: number;
  ping_histogram_50?: number;
  ping_histogram_75?: number;
  ping_histogram_100?: number;
  ping_histogram_125?: number;
  ping_histogram_150?: number;
  ping_histogram_200?: number;
  ping_histogram_300?: number;
  ping_histogram_max?: number;
  ping_ntile_5th?: number;
  ping_ntile_50th?: number;
  ping_ntile_75th?: number;
  ping_ntile_95th?: number;
  ping_ntile_98th?: number;
  jitter_histogram_negligible?: number;
  jitter_histogram_1?: number;
  jitter_histogram_2?: number;
  jitter_histogram_5?: number;
  jitter_histogram_10?: number;
  jitter_histogram_20?: number;
}

export interface CMsgSteamDatagramP2PRoutingSummary {
  ice?: CMsgSteamNetworkingICESessionSummary;
  sdr?: CMsgSteamNetworkingP2PSDRRoutingSummary;
}

export interface CMsgSteamNetworkingICESessionSummary {
  local_candidate_types?: number;
  remote_candidate_types?: number;
  initial_route_kind?: number;
  initial_ping?: number;
  negotiation_ms?: number;
  initial_score?: number;
  failure_reason_code?: number;
  selected_seconds?: number;
  user_settings?: number;
  ice_enable_var?: number;
  local_candidate_types_allowed?: number;
  best_route_kind?: number;
  best_ping?: number;
  best_score?: number;
  best_time?: number;
}

export interface CMsgSteamNetworkingP2PSDRRoutingSummary {
  initial_ping?: number;
  initial_ping_front_local?: number;
  initial_ping_front_remote?: number;
  initial_score?: number;
  initial_pop_local?: number;
  initial_pop_remote?: number;
  negotiation_ms?: number;
  selected_seconds?: number;
  best_ping?: number;
  best_ping_front_local?: number;
  best_ping_front_remote?: number;
  best_score?: number;
  best_pop_local?: number;
  best_pop_remote?: number;
  best_time?: number;
}

export interface CMsgSwapControllerSourceModes {
  action_set_key_a?: string;
  action_set_layer_key_a?: string;
  source_a?: number;
  action_set_key_b?: string;
  action_set_layer_key_b?: string;
  source_b?: number;
}

export interface CMsgSwapModeInputBindings {
  action_set_key?: string;
  action_set_layer_key?: string;
  source_binding_key?: number;
  mode_shift?: boolean;
  modeid?: number;
  swaps?: CMsgSwapModeInputBindings_CModeInputSwap[];
}

export interface CMsgSwapModeInputBindings_CModeInputSwap {
  old_key?: number;
  new_key?: number;
}

export interface CMsgSystemAudioManagerDevice {
  base?: CMsgSystemAudioManagerObject;
  name?: string;
  nick?: string;
  description?: string;
  api?: string;
}

export interface CMsgSystemAudioManagerLink {
  base?: CMsgSystemAudioManagerObject;
  output_node_id?: number;
  output_port_id?: number;
  input_node_id?: number;
  input_port_id?: number;
}

export interface CMsgSystemAudioManagerNode {
  base?: CMsgSystemAudioManagerObject;
  device_id?: number;
  name?: string;
  nick?: string;
  description?: string;
  edirection?: number;
  volume?: CMsgSystemAudioVolume;
}

export interface CMsgSystemAudioManagerObject {
  id?: number;
  rtime_last_update?: number;
}

export interface CMsgSystemAudioManagerPort {
  base?: CMsgSystemAudioManagerObject;
  node_id?: number;
  name?: string;
  alias?: string;
  etype?: number;
  edirection?: number;
  is_physical?: boolean;
  is_terminal?: boolean;
  is_control?: boolean;
  is_monitor?: boolean;
}

export interface CMsgSystemAudioManagerState {
  rtime_filter?: number;
  counter?: number;
  hw?: CMsgSystemAudioManagerStateHW;
}

export interface CMsgSystemAudioManagerStateHW {
  devices?: CMsgSystemAudioManagerDevice[];
  nodes?: CMsgSystemAudioManagerNode[];
  ports?: CMsgSystemAudioManagerPort[];
  links?: CMsgSystemAudioManagerLink[];
}

export interface CMsgSystemAudioManagerUpdateSomething {
  counter?: number;
}

export interface CMsgSystemAudioVolume {
  entries?: CMsgSystemAudioVolume_ChannelEntry[];
  is_muted?: boolean;
}

export interface CMsgSystemAudioVolume_ChannelEntry {
  echannel?: number;
  volume?: number;
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

export interface CMsgSystemDisplayManagerSetMode {
  display_id?: number;
  mode_id?: number;
}

export interface CMsgSystemDisplayManagerState {
  displays?: CMsgSystemDisplay[];
  is_mode_switching_supported?: boolean;
  compatibility_mode?: number;
}

export interface CMsgSystemDisplayMode {
  id?: number;
  width?: number;
  height?: number;
  refresh_hz?: number;
}

export interface CMsgSystemDockState {
  update_state?: CMsgSystemDockUpdateState;
}

export interface CMsgSystemDockUpdateFirmware {
  check_only?: boolean;
}

export interface CMsgSystemDockUpdateState {
  state?: number;
  rtime_last_checked?: number;
  version_current?: string;
  version_available?: string;
  stage_progress?: number;
  rtime_estimated_completion?: number;
  old_fw_workaround?: number;
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
  fan_control_mode?: number;
  is_display_brightness_available?: boolean;
  is_display_colormanagement_available?: boolean;
  display_colorgamut?: number;
  als_lux_alternate?: number;
  is_display_colortemp_available?: boolean;
  display_colortemp?: number;
  display_colortemp_default?: number;
  display_colortemp_enabled?: boolean;
  display_colorgamut_labelset?: number;
  display_brightness_overdrive_hdr_split?: number;
}

export interface CMsgSystemPerfDiagnosticEntry {
  name?: string;
  value?: string;
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
  gpu_performance_levels_available?: number[];
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
  split_scaling_filters_available?: number[];
  split_scaling_scalers_available?: number[];
  disable_refresh_rate_management?: boolean;
}

export interface CMsgSystemPerfNetworkInterface {
  name?: string;
  timestamp?: number;
  tx_bytes_total?: Long;
  rx_bytes_total?: Long;
  tx_bytes_per_sec?: number;
  rx_bytes_per_sec?: number;
}

export interface CMsgSystemPerfSettings {
  global?: CMsgSystemPerfSettingsGlobal;
  per_app?: CMsgSystemPerfSettingsPerApp;
}

export interface CMsgSystemPerfSettingsGlobal {
  diagnostic_update_rate?: number;
  graphics_profiling_service_state?: number;
  perf_overlay_service_state?: number;
  perf_overlay_level?: number;
  is_show_perf_overlay_over_steam_enabled?: boolean;
  is_advanced_settings_enabled?: boolean;
  allow_external_display_refresh_control?: boolean;
  hdr_on_sdr_tonemap_operator?: number;
  is_hdr_debug_heatmap_enabled?: boolean;
  force_hdr_wide_gammut_for_sdr?: boolean;
  is_color_management_enabled?: boolean;
  sdr_to_hdr_brightness?: number;
}

export interface CMsgSystemPerfSettingsPerApp {
  gpu_performance_manual_mhz?: number;
  fps_limit?: number;
  is_variable_resolution_enabled?: boolean;
  is_dynamic_refresh_rate_enabled?: boolean;
  tdp_limit?: number;
  cpu_governor?: number;
  cpu_governor_manual_mhz?: number;
  scaling_filter?: number;
  fsr_sharpness?: number;
  is_fps_limit_enabled?: boolean;
  is_tdp_limit_enabled?: boolean;
  is_low_latency_mode_enabled?: boolean;
  display_refresh_manual_hz?: number;
  is_game_perf_profile_enabled?: boolean;
  gpu_performance_level?: number;
  display_external_refresh_manual_hz?: number;
  fps_limit_external?: number;
  is_tearing_enabled?: boolean;
  is_vrr_enabled?: boolean;
  use_dynamic_refresh_rate_in_steam?: boolean;
  split_scaling_filter?: number;
  split_scaling_scaler?: number;
}

export interface CMsgSystemPerfState {
  limits?: CMsgSystemPerfLimits;
  settings?: CMsgSystemPerfSettings;
  current_game_id?: Long;
  active_profile_game_id?: Long;
}

export interface CMsgSystemPerfUpdateSettings {
  gameid?: Long;
  reset_to_default?: boolean;
  settings_delta?: CMsgSystemPerfSettings;
  skip_storage_update?: boolean;
}

export interface CMsgSystemUpdateApplyParams {
  apply_types?: number[];
}

export interface CMsgSystemUpdateApplyResult {
  type?: number;
  eresult?: number;
  requires_client_restart?: boolean;
  requires_system_restart?: boolean;
}

export interface CMsgSystemUpdateCheckResult {
  type?: number;
  eresult?: number;
  rtime_checked?: number;
  available?: boolean;
  version?: string;
  auto_message?: string;
  system_restart_pending?: boolean;
}

export interface CMsgSystemUpdateProgress {
  stage_progress?: number;
  stage_size_bytes?: Long;
  rtime_estimated_completion?: number;
}

export interface CMsgSystemUpdateState {
  state?: number;
  progress?: CMsgSystemUpdateProgress;
  update_check_results?: CMsgSystemUpdateCheckResult[];
  update_apply_results?: CMsgSystemUpdateApplyResult[];
  supports_os_updates?: boolean;
}

export interface CMsgWebUITransportFailure {
  connect_count?: number;
}

export interface CProductImpressionsFromClient_Notification {
  impressions?: CProductImpressionsFromClient_Notification_Impression[];
}

export interface CProductImpressionsFromClient_Notification_Impression {
  type?: number;
  appid?: number;
  num_impressions?: number;
}

export interface CRemotePlay_SessionStopped_Notification {
  record_id?: Long;
  used_x264?: boolean;
  used_h264?: boolean;
  used_hevc?: boolean;
}

export interface CSteamVR_AudioSettings_ChangeSettings_Request {
  settings?: CSteamVR_AudioSettings_Settings;
}

export type CSteamVR_AudioSettings_RegisterForSettings_Request = Record<string, never>;

export interface CSteamVR_AudioSettings_Settings {
  main?: CSteamVR_AudioSettings_Settings_Channel;
  audio_mirror?: CSteamVR_AudioSettings_Settings_Channel;
  microphone?: CSteamVR_AudioSettings_Settings_Channel;
}

export interface CSteamVR_AudioSettings_Settings_Channel {
  available?: boolean;
  muted?: boolean;
  volume?: number;
}

export interface CSteamVR_AudioSettings_SettingsChanged_Notification {
  settings?: CSteamVR_AudioSettings_Settings;
}

export interface CSteamVR_Header {
  type?: number;
  id?: number;
}

export interface CSteamVR_Settings_SetValue_Request {
  section?: string;
  settings_key?: string;
  bool?: boolean;
  int?: number;
  float?: number;
  string?: string;
}

export interface CSteamVR_Vector3 {
  x?: number;
  y?: number;
  z?: number;
}

export type CSteamVR_VoiceChat_Active_Notification = Record<string, never>;

export interface CSteamVR_VoiceChat_ConfigureVideo_Request {
  send?: boolean;
  receive?: boolean;
}

export type CSteamVR_VoiceChat_ConfigureVideo_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_ExitRoomChat_Request {
  chat_group_id?: Long;
  chat_room_id?: Long;
}

export type CSteamVR_VoiceChat_ExitRoomChat_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_GetAvatarUrl_Request {
  profile_steamid?: Long;
  avatar_type?: number;
}

export interface CSteamVR_VoiceChat_GetAvatarUrl_Response {
  profile_avatar_url?: string;
}

export interface CSteamVR_VoiceChat_GroupName_Notification {
  name?: string;
}

export type CSteamVR_VoiceChat_Inactive_Notification = Record<string, never>;

export interface CSteamVR_VoiceChat_InitiateRoomChat_Request {
  chat_group_id?: Long;
  chat_room_id?: Long;
}

export type CSteamVR_VoiceChat_InitiateRoomChat_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_NewGroupChatMsgAdded_Notification {
  chat_group_id?: Long;
  chat_room_id?: Long;
  sender_accountid?: number;
  timestamp?: number;
  ordinal?: number;
  message?: string;
}

export interface CSteamVR_VoiceChat_PerUserGainValue_Notification {
  accountid?: number;
  muted?: boolean;
  gain?: number;
}

export interface CSteamVR_VoiceChat_PerUserVoiceStatus_Notification {
  accountid?: number;
  mic_muted_locally?: boolean;
  output_muted_locally?: boolean;
}

export type CSteamVR_VoiceChat_Ready_Notification = Record<string, never>;

export interface CSteamVR_VoiceChat_SendGroupChatMessage_Request {
  message_with_bbcode?: string;
}

export type CSteamVR_VoiceChat_SendGroupChatMessage_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_SetDefaultSession_Notification {
  chat_group_id?: Long;
  chat_room_id?: Long;
}

export interface CSteamVR_VoiceChat_SetPerUserMuting_Request {
  accountid?: number;
  muted?: boolean;
}

export type CSteamVR_VoiceChat_SetPerUserMuting_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_SetPerUserVideo_Request {
  accountid?: number;
  receive?: boolean;
}

export type CSteamVR_VoiceChat_SetPerUserVideo_Response = Record<string, never>;

export interface CSteamVR_VoiceChat_SetSpatialAudioListener_Notification {
  position?: CSteamVR_Vector3;
  forward?: CSteamVR_Vector3;
  up?: CSteamVR_Vector3;
}

export interface CSteamVR_VoiceChat_SetSpatialAudioSource_Notification {
  steamid?: Long;
  position?: CSteamVR_Vector3;
}

export interface CSteamVR_VRGamepadUI_Message {
  header?: Buffer;
  payload?: Buffer;
}

export type CSteamVR_WebRTC_Active_Notification = Record<string, never>;

export interface CSteamVR_WebRTC_CloseDataChannel_Request {
  channel_id?: number;
}

export type CSteamVR_WebRTC_CloseDataChannel_Response = Record<string, never>;

export interface CSteamVR_WebRTC_CreateDataChannel_Request {
  label?: string;
  ordered?: boolean;
  max_retransmits?: number;
  max_packet_life_time?: number;
}

export interface CSteamVR_WebRTC_CreateDataChannel_Response {
  channel_id?: number;
}

export interface CSteamVR_WebRTC_DataChannel_Close_Notification {
  channel_id?: number;
}

export interface CSteamVR_WebRTC_DataChannel_Error_Notification {
  channel_id?: number;
  reason?: string;
}

export interface CSteamVR_WebRTC_DataChannel_Message_Notification {
  channel_id?: number;
  data?: Buffer;
}

export interface CSteamVR_WebRTC_DataChannel_Open_Notification {
  channel_id?: number;
}

export type CSteamVR_WebRTC_Inactive_Notification = Record<string, never>;

export interface CSteamVR_WebRTC_OnDataChannel_Notification {
  source_steamid?: Long;
  channel_id?: number;
  label?: string;
}

export interface CStoreBrowse_GetItems_Request {
  ids?: StoreItemID[];
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CStoreBrowse_GetItems_Response {
  store_items?: StoreItem[];
}

export interface CStorePageFilter {
  sale_filter?: CStorePageFilter_SalePageFilter;
  content_hub_filter?: CStorePageFilter_ContentHubFilter;
  store_filters?: CStorePageFilter_StoreFilter[];
}

export interface CStorePageFilter_ContentHubFilter {
  hub_type?: string;
  hub_category?: string;
  hub_tagid?: number;
  discount_filter?: number;
  optin?: CStorePageFilter_ContentHubFilter_OptInInfo;
}

export interface CStorePageFilter_ContentHubFilter_OptInInfo {
  name?: string;
  optin_tagid?: number;
  prune_tagid?: number;
  optin_only?: boolean;
}

export interface CStorePageFilter_SalePageFilter {
  sale_tagid?: number;
  creator_clan_account_id?: number;
}

export interface CStorePageFilter_StoreFilter {
  filter_json?: string;
  cache_key?: string;
}

export interface CStreamingClientConfig {
  quality?: number;
  desired_resolution_x?: number;
  desired_resolution_y?: number;
  desired_framerate_numerator?: number;
  desired_framerate_denominator?: number;
  desired_bitrate_kbps?: number;
  enable_hardware_decoding?: boolean;
  enable_performance_overlay?: boolean;
  enable_video_streaming?: boolean;
  enable_audio_streaming?: boolean;
  enable_input_streaming?: boolean;
  audio_channels?: number;
  enable_video_hevc?: boolean;
  enable_performance_icons?: boolean;
  enable_microphone_streaming?: boolean;
  controller_overlay_hotkey?: string;
  enable_touch_controller_OBSOLETE?: boolean;
  p2p_scope?: number;
  enable_audio_uncompressed?: boolean;
  display_limit?: CStreamVideoLimit;
  quality_limit?: CStreamVideoLimit;
  runtime_limit?: CStreamVideoLimit;
  decoder_limit?: CStreamVideoLimit[];
  enable_unreliable_fec?: boolean;
  enable_video_av1?: boolean;
}

export interface CStreamingServerConfig {
  change_desktop_resolution?: boolean;
  dynamically_adjust_resolution_OBSOLETE?: boolean;
  enable_capture_nvfbc?: boolean;
  enable_hardware_encoding_nvidia_OBSOLETE?: boolean;
  enable_hardware_encoding_amd_OBSOLETE?: boolean;
  enable_hardware_encoding_intel_OBSOLETE?: boolean;
  software_encoding_threads?: number;
  enable_traffic_priority?: boolean;
  host_play_audio?: number;
  enable_hardware_encoding?: boolean;
}

export interface CStreamVideoLimit {
  codec?: number;
  mode?: CStreamVideoMode;
  bitrate_kbps?: number;
  burst_bitrate_kbps?: number;
}

export interface CStreamVideoMode {
  width?: number;
  height?: number;
  refresh_rate?: number;
  refresh_rate_numerator?: number;
  refresh_rate_denominator?: number;
}

export interface CTransportValidation_AppendToString_Request {
  append_strings?: string[];
}

export interface CTransportValidation_AppendToString_Response {
  combined_text?: string;
}

export interface CUserInterface_CuratorData {
  clanid?: number;
  listid?: Long;
}

export interface CUserInterface_NavData {
  domain?: string;
  controller?: string;
  method?: string;
  submethod?: string;
  feature?: string;
  depth?: number;
  countrycode?: string;
  webkey?: Long;
  is_client?: boolean;
  curator_data?: CUserInterface_CuratorData;
  is_likely_bot?: boolean;
  is_utm?: boolean;
}

export interface CVideo_GameRecordingSegmentInfo {
  segment_number?: number;
  segment_size_bytes?: Long;
  component_name?: string;
  representation_name?: string;
}

export interface CVirtualMenuCreateDestroy {
  created?: boolean;
  controller_idx?: number;
  menu_idx?: number;
  source?: number;
  x_position?: number;
  y_position?: number;
  opacity?: number;
  scale?: number;
  show_labels?: boolean;
  force_on?: boolean;
  appID?: number;
  menu_style?: number;
  popup_keys?: CVirtualMenuCreateDestroy_TouchMenuKey[];
}

export interface CVirtualMenuCreateDestroy_TouchMenuKey {
  key_idx?: number;
  bound?: boolean;
  placeholder?: boolean;
  binding_type?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  description?: string;
  label?: string;
  glyph_path?: string;
  icon_filename?: string;
  color_foreground?: string;
  color_background?: string;
  quandrants?: number;
}

export interface CVirtualMenuKey {
  key_index?: number;
  bound?: boolean;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  description?: string;
  label?: string;
  glyph_path?: string;
  icon_filename?: string;
  color_foreground?: string;
  color_background?: string;
  quadrants?: number;
  binding_type?: number;
}

export interface CVRGamepadUI_Frame {
  frame_id?: number;
  menu?: CVRGamepadUI_Frame_FrameMenu;
  defined_actions?: CVRGamepadUIShared_Action[];
  controls?: CVRGamepadUI_Frame_FrameControls;
  tmp_title?: string;
}

export interface CVRGamepadUI_Frame_FrameControls {
  items_for_bottom_frame_controls?: CVRGamepadUI_Frame_FrameControls_Item[];
  items_for_tab_hover_menu?: CVRGamepadUI_Frame_FrameControls_Item[];
}

export interface CVRGamepadUI_Frame_FrameControls_Item {
  type?: number;
  action_id?: number;
}

export interface CVRGamepadUI_Frame_FrameMenu {
  items_for_left_frame_menu?: CVRGamepadUI_Frame_FrameMenu_Item[];
  items_for_tab_hover_menu?: CVRGamepadUI_Frame_FrameMenu_Item[];
}

export interface CVRGamepadUI_Frame_FrameMenu_Item {
  type?: number;
  action_id?: number;
  steam_main_menu_options?: CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions;
}

export interface CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions {
  allow_show_as_active?: boolean;
}

export interface CVRGamepadUI_Message_DashboardActionInvoked_Request {
  action_id?: number;
  toggle_value?: boolean;
}

export type CVRGamepadUI_Message_DashboardActionInvoked_Response = Record<string, never>;

export interface CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request {
  window_id?: number;
}

export type CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response = Record<string, never>;

export interface CVRGamepadUI_Message_DashboardTabClicked_Request {
  tab_id?: number;
}

export type CVRGamepadUI_Message_DashboardTabClicked_Response = Record<string, never>;

export interface CVRGamepadUI_Message_Error_Response {
  error_code?: number;
  error_description?: string;
  origin?: number;
  was_transmitted?: boolean;
}

export interface CVRGamepadUI_Message_ExecuteSteamURL_Request {
  url?: string;
}

export type CVRGamepadUI_Message_ExecuteSteamURL_Response = Record<string, never>;

export interface CVRGamepadUI_Message_Header {
  name?: string;
  message_id?: number;
  response_to_message_id?: number;
  is_error_response?: boolean;
}

export interface CVRGamepadUI_Message_HideDashboardPopup_Request {
  dashboard_popup_id?: number;
}

export type CVRGamepadUI_Message_HideDashboardPopup_Response = Record<string, never>;

export type CVRGamepadUI_Message_InitFrameSystem_Request = Record<string, never>;

export type CVRGamepadUI_Message_InitFrameSystem_Response = Record<string, never>;

export interface CVRGamepadUI_Message_RemoteVideoStream_Request {
  source_accountid?: number;
  video_uniqueid?: string;
}

export type CVRGamepadUI_Message_RemoteVideoStream_Response = Record<string, never>;

export interface CVRGamepadUI_Message_SetCurrentLanguage_Request {
  language?: string;
}

export type CVRGamepadUI_Message_SetCurrentLanguage_Response = Record<string, never>;

export interface CVRGamepadUI_Message_SetDisplayBrightness_Request {
  user_brightness_value?: number;
}

export type CVRGamepadUI_Message_SetDisplayBrightness_Response = Record<string, never>;

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request {
  dashboard_popup_id?: number;
  popup_overlay_key?: string;
  parent_overlay_key?: string;
  origin_on_parent?: CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition;
  origin_on_popup?: CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition;
  offset?: CVRGamepadUI_Message_ShowDashboardPopup_Request_Position;
  rotation?: CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation;
  inherit_parent_pitch?: boolean;
  inherit_parent_curvature?: boolean;
  clip_rect?: CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect;
  interactive?: boolean;
  requires_laser?: boolean;
  parent_device_path?: string;
  sort_order?: number;
  parent_enum?: number;
  special_identifier?: number;
  scale?: CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale;
}

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition {
  x?: number;
  y?: number;
}

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request_Position {
  x_pixels?: number;
  y_pixels?: number;
  z_pixels?: number;
  x_meters?: number;
  y_meters?: number;
  z_meters?: number;
}

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect {
  u_min?: number;
  v_min?: number;
  u_max?: number;
  v_max?: number;
}

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation {
  pitch_degrees?: number;
  yaw_degrees?: number;
}

export interface CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale {
  scaler_value?: number;
}

export type CVRGamepadUI_Message_ShowDashboardPopup_Response = Record<string, never>;

export interface CVRGamepadUI_Message_ShowGame_Request {
  overlay_key?: string;
}

export type CVRGamepadUI_Message_ShowGame_Response = Record<string, never>;

export interface CVRGamepadUI_Message_ShowOverlay_Request {
  overlay_key?: string;
}

export type CVRGamepadUI_Message_ShowOverlay_Response = Record<string, never>;

export interface CVRGamepadUI_Message_UpdateFrameUIs_Request {
  updated_frames?: CVRGamepadUI_Frame[];
  deleted_frames?: number[];
  shown_frames?: number[];
  hidden_frames?: number[];
}

export interface CVRGamepadUI_Message_UpdateFrameUIs_Response {
  results?: CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult[];
}

export interface CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult {
  frame_id?: number;
  frame_menu_dashboard_popup_id?: number;
}

export interface CVRGamepadUIShared_Action {
  action_id?: number;
  display_name?: string;
  invocation?: number;
  icon?: CVRGamepadUIShared_Icon;
  icon_active?: CVRGamepadUIShared_Icon;
  enabled?: boolean;
  active?: boolean;
}

export interface CVRGamepadUIShared_DEPRECATED_DashboardActionIcon {
  enum?: number;
}

export interface CVRGamepadUIShared_DEPRECATED_DashboardBarAction {
  action_id?: number;
  visible_in_dashboard_bar?: boolean;
  enabled?: boolean;
  display_name?: string;
  deprecated_icon?: CVRGamepadUIShared_DEPRECATED_DashboardActionIcon;
  deprecated_icon_active?: CVRGamepadUIShared_DEPRECATED_DashboardActionIcon;
  invocation?: number;
  active?: boolean;
  special_invocation?: number;
  visible_in_menu?: boolean;
  is_menu?: boolean;
  parent_menu_action_id?: number;
  icon?: CVRGamepadUIShared_Icon;
  icon_active?: CVRGamepadUIShared_Icon;
}

export interface CVRGamepadUIShared_DEPRECATED_DashboardTabIcon {
  enum?: number;
  appid?: number;
  overlay?: string;
  hwnd?: number;
}

export interface CVRGamepadUIShared_Icon {
  enum?: number;
  appid?: number;
  overlay?: string;
  hwnd?: number;
}

export interface CVRGamepadUIShared_PathProperty_DashboardBarActions {
  deprecated_actions?: CVRGamepadUIShared_DEPRECATED_DashboardBarAction[];
  defined_actions?: CVRGamepadUIShared_Action[];
  bar_buttons?: CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton[];
  bar_menu_items?: CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem[];
  playspace_actions?: number[];
}

export interface CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton {
  type?: number;
  action_id?: number;
  is_main_hamburger_menu?: boolean;
}

export interface CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem {
  type?: number;
  parent_menu_action_id?: number;
  action_id?: number;
}

export interface CVRGamepadUIShared_PathProperty_DashboardTabs {
  tabs?: CVRGamepadUIShared_PathProperty_DashboardTabs_Tab[];
  selected_tab_id?: number;
  deprecated_vr_settings_tab_id?: number;
  vr_steam_tab_id?: number;
}

export interface CVRGamepadUIShared_PathProperty_DashboardTabs_Tab {
  tab_id?: number;
  visible_in_dashboard_bar?: boolean;
  display_name?: string;
  deprecated_icon?: CVRGamepadUIShared_DEPRECATED_DashboardTabIcon;
  visible_in_dashboard_bar_hamburger_menu?: boolean;
  icon?: CVRGamepadUIShared_Icon;
  associated_frame_id?: number;
}

export interface CVRGamepadUIShared_PathProperty_DesktopWindows {
  windows?: CVRGamepadUIShared_PathProperty_DesktopWindows_Window[];
}

export interface CVRGamepadUIShared_PathProperty_DesktopWindows_Window {
  window_id?: number;
  hwnd?: number;
  title?: string;
  tab_id?: number;
}

export interface CVRGamepadUIShared_PathProperty_HMDSettings {
  display_brightness_user_value?: number;
  display_brightness_min?: number;
  display_brightness_max?: number;
}

export interface CVRGamepadUIShared_PathProperty_PowerOptions {
  can_sleep?: boolean;
  can_shutdown?: boolean;
  can_restart_system?: boolean;
  can_exitvr?: boolean;
}

export interface CVRGamepadUIShared_PathProperty_VRVersionInfo {
  version?: string;
  webpack_build_timestamp?: number;
  hmd_tracking_info?: string;
}

export interface LoyaltyRewardDefinition {
  appid?: number;
  defid?: number;
  type?: number;
  community_item_class?: number;
  community_item_type?: number;
  point_cost?: Long;
  timestamp_created?: number;
  timestamp_updated?: number;
  timestamp_available?: number;
  quantity?: Long;
  internal_description?: string;
  active?: boolean;
  community_item_data?: LoyaltyRewardDefinition_CommunityItemData;
  timestamp_available_end?: number;
  bundle_defids?: number[];
  usable_duration?: number;
  bundle_discount?: number;
  timestamp_free_until?: number;
}

export interface LoyaltyRewardDefinition_BadgeData {
  level?: number;
  image?: string;
}

export interface LoyaltyRewardDefinition_CommunityItemData {
  item_name?: string;
  item_title?: string;
  item_description?: string;
  item_image_small?: string;
  item_image_large?: string;
  item_movie_webm?: string;
  item_movie_mp4?: string;
  animated?: boolean;
  badge_data?: LoyaltyRewardDefinition_BadgeData[];
  item_movie_webm_small?: string;
  item_movie_mp4_small?: string;
  profile_theme_id?: string;
  tiled?: boolean;
}

export interface StoreBrowseContext {
  language?: string;
  elanguage?: number;
  country_code?: string;
  steam_realm?: number;
}

export interface StoreBrowseFilterFailure {
  filter_failure?: number;
  already_owned?: boolean;
  on_wishlist?: boolean;
  ignored?: boolean;
  not_in_users_language?: boolean;
  not_on_users_platform?: boolean;
  demo_for_owned_game?: boolean;
  dlc_for_unowned_game?: boolean;
  nonpreferred_product_type?: boolean;
  excluded_tagids?: number[];
  excluded_content_descriptorids?: number[];
}

export interface StoreBrowseItemDataRequest {
  include_assets?: boolean;
  include_release?: boolean;
  include_platforms?: boolean;
  include_all_purchase_options?: boolean;
  include_screenshots?: boolean;
  include_trailers?: boolean;
  include_ratings?: boolean;
  include_tag_count?: number;
  include_reviews?: boolean;
  include_basic_info?: boolean;
  include_supported_languages?: boolean;
  include_full_description?: boolean;
  include_included_items?: boolean;
  included_item_data_request?: StoreBrowseItemDataRequest;
  include_assets_without_overrides?: boolean;
  apply_user_filters?: boolean;
  include_links?: boolean;
}

export interface StoreGameRating {
  type?: string;
  rating?: string;
  descriptors?: string[];
  interactive_elements?: string;
  required_age?: number;
  use_age_gate?: boolean;
  image_url?: string;
  image_target?: string;
}

export interface StoreItem {
  item_type?: number;
  id?: number;
  success?: number;
  visible?: boolean;
  unvailable_for_country_restriction?: boolean;
  name?: string;
  store_url_path?: string;
  appid?: number;
  type?: number;
  included_types?: number[];
  included_appids?: number[];
  is_free?: boolean;
  is_early_access?: boolean;
  related_items?: StoreItem_RelatedItems;
  included_items?: StoreItem_IncludedItems;
  content_descriptorids?: number[];
  tagids?: number[];
  categories?: StoreItem_Categories;
  reviews?: StoreItem_Reviews;
  basic_info?: StoreItem_BasicInfo;
  tags?: StoreItem_Tag[];
  assets?: StoreItem_Assets;
  release?: StoreItem_ReleaseInfo;
  platforms?: StoreItem_Platforms;
  game_rating?: StoreGameRating;
  is_coming_soon?: boolean;
  best_purchase_option?: StoreItem_PurchaseOption;
  purchase_options?: StoreItem_PurchaseOption[];
  accessories?: StoreItem_PurchaseOption[];
  self_purchase_option?: StoreItem_PurchaseOption;
  invalid_purchase_options?: StoreItem_PurchaseOption[];
  screenshots?: StoreItem_Screenshots;
  trailers?: StoreItem_Trailers;
  supported_languages?: StoreItem_SupportedLanguage[];
  store_url_path_override?: string;
  free_weekend?: StoreItem_FreeWeekend;
  unlisted?: boolean;
  game_count?: number;
  internal_name?: string;
  full_description?: string;
  is_free_temporarily?: boolean;
  assets_without_overrides?: StoreItem_Assets;
  user_filter_failure?: StoreBrowseFilterFailure;
  links?: StoreItem_Link[];
}

export interface StoreItem_Assets {
  asset_url_format?: string;
  main_capsule?: string;
  small_capsule?: string;
  header?: string;
  package_header?: string;
  page_background?: string;
  hero_capsule?: string;
  hero_capsule_2x?: string;
  library_capsule?: string;
  library_capsule_2x?: string;
  library_hero?: string;
  library_hero_2x?: string;
  community_icon?: string;
  clan_avatar?: string;
  page_background_path?: string;
  raw_page_background?: string;
}

export interface StoreItem_BasicInfo {
  short_description?: string;
  publishers?: StoreItem_BasicInfo_CreatorHomeLink[];
  developers?: StoreItem_BasicInfo_CreatorHomeLink[];
  franchises?: StoreItem_BasicInfo_CreatorHomeLink[];
  capsule_headline?: string;
}

export interface StoreItem_BasicInfo_CreatorHomeLink {
  name?: string;
  creator_clan_account_id?: number;
}

export interface StoreItem_Categories {
  supported_player_categoryids?: number[];
  feature_categoryids?: number[];
  controller_categoryids?: number[];
}

export interface StoreItem_FreeWeekend {
  start_time?: number;
  end_time?: number;
  text?: string;
}

export interface StoreItem_IncludedItems {
  included_apps?: StoreItem[];
  included_packages?: StoreItem[];
}

export interface StoreItem_Link {
  link_type?: number;
  url?: string;
  text?: string;
}

export interface StoreItem_Platforms {
  windows?: boolean;
  mac?: boolean;
  steamos_linux?: boolean;
  vr_support?: StoreItem_Platforms_VRSupport;
  steam_deck_compat_category?: number;
  steam_os_compat_category?: number;
}

export interface StoreItem_Platforms_VRSupport {
  vrhmd?: boolean;
  vrhmd_only?: boolean;
  htc_vive?: boolean;
  oculus_rift?: boolean;
  windows_mr?: boolean;
  valve_index?: boolean;
}

export interface StoreItem_PurchaseOption {
  packageid?: number;
  bundleid?: number;
  purchase_option_name?: string;
  final_price_in_cents?: Long;
  original_price_in_cents?: Long;
  formatted_final_price?: string;
  formatted_original_price?: string;
  discount_pct?: number;
  bundle_discount_pct?: number;
  is_free_to_keep?: boolean;
  price_before_bundle_discount?: Long;
  formatted_price_before_bundle_discount?: string;
  active_discounts?: StoreItem_PurchaseOption_Discount[];
  user_can_purchase_as_gift?: boolean;
  is_commercial_license?: boolean;
  should_suppress_discount_pct?: boolean;
  hide_discount_pct_for_compliance?: boolean;
  included_game_count?: number;
  lowest_recent_price_in_cents?: Long;
  requires_shipping?: boolean;
  recurrence_info?: StoreItem_PurchaseOption_RecurrenceInfo;
  free_to_keep_ends?: number;
  must_purchase_as_set?: boolean;
}

export interface StoreItem_PurchaseOption_Discount {
  discount_amount?: Long;
  discount_description?: string;
  discount_end_date?: number;
}

export interface StoreItem_PurchaseOption_RecurrenceInfo {
  packageid?: number;
  billing_agreement_type?: number;
  renewal_time_unit?: number;
  renewal_time_period?: number;
  renewal_price_in_cents?: Long;
  formatted_renewal_price?: string;
}

export interface StoreItem_RelatedItems {
  parent_appid?: number;
  demo_appid?: number[];
  standalone_demo_appid?: number[];
}

export interface StoreItem_ReleaseInfo {
  steam_release_date?: number;
  original_release_date?: number;
  original_steam_release_date?: number;
  is_coming_soon?: boolean;
  is_preload?: boolean;
  custom_release_date_message?: string;
  is_abridged_release_date?: boolean;
  coming_soon_display?: string;
  is_early_access?: boolean;
  release_from_early_access_date?: number;
  release_from_early_access_style?: number;
  mac_release_date?: number;
  linux_release_date?: number;
  limited_launch_active?: boolean;
}

export interface StoreItem_Reviews {
  summary_filtered?: StoreItem_Reviews_StoreReviewSummary;
  summary_unfiltered?: StoreItem_Reviews_StoreReviewSummary;
  summary_language_specific?: StoreItem_Reviews_StoreReviewSummary;
}

export interface StoreItem_Reviews_StoreReviewSummary {
  review_count?: number;
  percent_positive?: number;
  review_score?: number;
  review_score_label?: string;
}

export interface StoreItem_Screenshots {
  all_ages_screenshots?: StoreItem_Screenshots_Screenshot[];
  mature_content_screenshots?: StoreItem_Screenshots_Screenshot[];
}

export interface StoreItem_Screenshots_Screenshot {
  filename?: string;
  ordinal?: number;
}

export interface StoreItem_SupportedLanguage {
  elanguage?: number;
  supported?: boolean;
  full_audio?: boolean;
  subtitles?: boolean;
  eadditionallanguage?: number;
}

export interface StoreItem_Tag {
  tagid?: number;
  weight?: number;
}

export interface StoreItem_Trailers {
  highlights?: StoreItem_Trailers_Trailer[];
  other_trailers?: StoreItem_Trailers_Trailer[];
}

export interface StoreItem_Trailers_AdaptiveTrailer {
  cdn_path?: string;
  encoding?: string;
}

export interface StoreItem_Trailers_Trailer {
  trailer_name?: string;
  trailer_url_format?: string;
  trailer_480p?: StoreItem_Trailers_VideoSource[];
  trailer_max?: StoreItem_Trailers_VideoSource[];
  microtrailer?: StoreItem_Trailers_VideoSource[];
  adaptive_trailers?: StoreItem_Trailers_AdaptiveTrailer[];
  screenshot_medium?: string;
  screenshot_full?: string;
  trailer_base_id?: number;
  trailer_category?: number;
  all_ages?: boolean;
}

export interface StoreItem_Trailers_VideoSource {
  filename?: string;
  type?: string;
}

export interface StoreItemID {
  appid?: number;
  packageid?: number;
  bundleid?: number;
  tagid?: number;
  creatorid?: number;
  hubcategoryid?: number;
}

export interface UserContentDescriptorPreferences {
  content_descriptors_to_exclude?: UserContentDescriptorPreferences_ContentDescriptor[];
}

export interface UserContentDescriptorPreferences_ContentDescriptor {
  content_descriptorid?: number;
  timestamp_added?: number;
}

export interface UserSystemInformation {
  manufacturer?: string;
  model?: string;
  dx_video_card?: string;
  dx_vendorid?: number;
  dx_deviceid?: number;
  num_gpu?: number;
  system_ram?: Long;
  os?: string;
  cpu_vendor?: string;
  cpu_name?: string;
  gaming_device_type?: number;
  dx_driver_version?: string;
  dx_driver_name?: string;
  adapter_description?: string;
  driver_version?: string;
  driver_date?: string;
  vram_size?: number;
}
