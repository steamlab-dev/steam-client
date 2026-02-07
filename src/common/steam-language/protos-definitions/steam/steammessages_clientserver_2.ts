/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientUpdateUserGameInfo {
  steamid_idgs?: Long;
  gameid?: Long;
  game_ip?: number;
  game_port?: number;
  token?: Buffer;
}

export interface CMsgClientRichPresenceUpload {
  rich_presence_kv?: Buffer;
  steamid_broadcast?: Long[];
}

export interface CMsgClientRichPresenceRequest {
  steamid_request?: Long[];
}

export interface CMsgClientRichPresenceInfo {
  rich_presence?: CMsgClientRichPresenceInfo.RichPresence[];
}

export namespace CMsgClientRichPresenceInfo {
  export interface KV {
    key?: string;
    value?: string;
  }

  export interface RichPresence {
    steamid_user?: Long;
    rich_presense?: CMsgClientRichPresenceInfo.KV[];
  }
}

export interface CMsgClientCheckFileSignature {
  app_id?: number;
}

export interface CMsgClientCheckFileSignatureResponse {
  app_id?: number;
  pid?: number;
  eresult?: number;
  filename?: string;
  esignatureresult?: number;
  sha_file?: Buffer;
  signatureheader?: Buffer;
  filesize?: number;
  getlasterror?: number;
  evalvesignaturecheckdetail?: number;
}

export interface CMsgClientRegisterKey {
  key?: string;
}

export interface CMsgClientPurchaseResponse {
  eresult?: number;
  purchase_result_details?: number;
  purchase_receipt_info?: Buffer;
}

export interface CMsgClientActivateOEMLicense {
  bios_manufacturer?: string;
  bios_serialnumber?: string;
  license_file?: Buffer;
  mainboard_manufacturer?: string;
  mainboard_product?: string;
  mainboard_serialnumber?: string;
}

export interface CMsgClientRegisterOEMMachine {
  oem_register_file?: Buffer;
}

export interface CMsgClientRegisterOEMMachineResponse {
  eresult?: number;
}

export interface CMsgClientPurchaseWithMachineID {
  package_id?: number;
  machine_info?: Buffer;
}

export interface CMsgTrading_InitiateTradeRequest {
  trade_request_id?: number;
  other_steamid?: Long;
  other_name?: string;
}

export interface CMsgTrading_InitiateTradeResponse {
  response?: number;
  trade_request_id?: number;
  other_steamid?: Long;
  steamguard_required_days?: number;
  new_device_cooldown_days?: number;
  default_password_reset_probation_days?: number;
  password_reset_probation_days?: number;
  default_email_change_probation_days?: number;
  email_change_probation_days?: number;
}

export interface CMsgTrading_CancelTradeRequest {
  other_steamid?: Long;
}

export interface CMsgTrading_StartSession {
  other_steamid?: Long;
}

export interface CMsgClientGetDepotDecryptionKey {
  depot_id?: number;
  app_id?: number;
}

export interface CMsgClientGetDepotDecryptionKeyResponse {
  eresult?: number;
  depot_id?: number;
  depot_encryption_key?: Buffer;
}

export interface CMsgClientCheckAppBetaPassword {
  app_id?: number;
  betapassword?: string;
  language?: number;
}

export interface CMsgClientCheckAppBetaPasswordResponse {
  eresult?: number;
  betapasswords?: CMsgClientCheckAppBetaPasswordResponse.BetaPassword[];
}

export namespace CMsgClientCheckAppBetaPasswordResponse {
  export interface BetaPassword {
    betaname?: string;
    betapassword?: string;
    betadescription?: string;
  }
}

export interface CMsgClientUGSGetGlobalStats {
  gameid?: Long;
  history_days_requested?: number;
  time_last_requested?: number;
  first_day_cached?: number;
  days_cached?: number;
}

export interface CMsgClientUGSGetGlobalStatsResponse {
  eresult?: number;
  timestamp?: number;
  day_current?: number;
  days?: CMsgClientUGSGetGlobalStatsResponse.Day[];
}

export namespace CMsgClientUGSGetGlobalStatsResponse {
  export interface Day {
    day_id?: number;
  }

  export namespace Day {
    export interface Stat {
      stat_id?: number;
      data?: Long;
    }
  }
}

export interface CMsgClientRedeemGuestPass {
  guest_pass_id?: Long;
}

export interface CMsgClientRedeemGuestPassResponse {
  eresult?: number;
  package_id?: number;
  must_own_appid?: number;
}

export interface CMsgClientGetClanActivityCounts {
  steamid_clans?: Long[];
}

export interface CMsgClientGetClanActivityCountsResponse {
  eresult?: number;
}

export interface CMsgClientOGSReportString {
  accumulated?: boolean;
  sessionid?: Long;
  severity?: number;
  formatter?: string;
  varargs?: Buffer;
}

export interface CMsgClientOGSReportBug {
  sessionid?: Long;
  bugtext?: string;
  screenshot?: Buffer;
}

export type CMsgClientSentLogs = Record<string, never>;

export interface CMsgGCClient {
  appid?: number;
  msgtype?: number;
  payload?: Buffer;
  steamid?: Long;
  gcname?: string;
  ip?: number;
  flags?: number;
}

export namespace CMsgGCClient {
  export const EFlag = {
    VALVE_DS: 1,
  } as const;

  export type EFlag = (typeof EFlag)[keyof typeof EFlag];
}

export interface CMsgClientRequestFreeLicense {
  appids?: number[];
}

export interface CMsgClientRequestFreeLicenseResponse {
  eresult?: number;
  granted_packageids?: number[];
  granted_appids?: number[];
}

export interface CMsgDRMDownloadRequestWithCrashData {
  download_flags?: number;
  download_types_known?: number;
  guid_drm?: Buffer;
  guid_split?: Buffer;
  guid_merge?: Buffer;
  module_name?: string;
  module_path?: string;
  crash_data?: Buffer;
}

export interface CMsgDRMDownloadResponse {
  eresult?: number;
  app_id?: number;
  blob_download_type?: number;
  merge_guid?: Buffer;
  download_file_dfs_ip?: number;
  download_file_dfs_port?: number;
  download_file_url?: string;
  module_path?: string;
}

export interface CMsgDRMFinalResult {
  eResult?: number;
  app_id?: number;
  blob_download_type?: number;
  error_detail?: number;
  merge_guid?: Buffer;
  download_file_dfs_ip?: number;
  download_file_dfs_port?: number;
  download_file_url?: string;
}

export interface CMsgClientDPCheckSpecialSurvey {
  survey_id?: number;
}

export interface CMsgClientDPCheckSpecialSurveyResponse {
  eResult?: number;
  state?: number;
  name?: string;
  custom_url?: string;
  include_software?: boolean;
  token?: Buffer;
}

export interface CMsgClientDPSendSpecialSurveyResponse {
  survey_id?: number;
  data?: Buffer;
}

export interface CMsgClientDPSendSpecialSurveyResponseReply {
  eResult?: number;
  token?: Buffer;
}

export interface CMsgClientRequestForgottenPasswordEmail {
  account_name?: string;
  password_tried?: string;
}

export interface CMsgClientRequestForgottenPasswordEmailResponse {
  eResult?: number;
  use_secret_question?: boolean;
}

export interface CMsgClientItemAnnouncements {
  count_new_items?: number;
  unseen_items?: CMsgClientItemAnnouncements.UnseenItem[];
}

export namespace CMsgClientItemAnnouncements {
  export interface UnseenItem {
    appid?: number;
    context_id?: Long;
    asset_id?: Long;
    amount?: Long;
    rtime32_gained?: number;
    source_appid?: number;
  }
}

export type CMsgClientRequestItemAnnouncements = Record<string, never>;

export interface CMsgClientUserNotifications {
  notifications?: CMsgClientUserNotifications.Notification[];
}

export namespace CMsgClientUserNotifications {
  export interface Notification {
    user_notification_type?: number;
    count?: number;
  }
}

export interface CMsgClientCommentNotifications {
  count_new_comments?: number;
  count_new_comments_owner?: number;
  count_new_comments_subscriptions?: number;
}

export type CMsgClientRequestCommentNotifications = Record<string, never>;

export interface CMsgClientOfflineMessageNotification {
  offline_messages?: number;
  friends_with_offline_messages?: number[];
}

export type CMsgClientRequestOfflineMessageCount = Record<string, never>;

export interface CMsgClientChatGetFriendMessageHistory {
  steamid?: Long;
}

export interface CMsgClientChatGetFriendMessageHistoryResponse {
  steamid?: Long;
  success?: number;
  messages?: CMsgClientChatGetFriendMessageHistoryResponse.FriendMessage[];
}

export namespace CMsgClientChatGetFriendMessageHistoryResponse {
  export interface FriendMessage {
    accountid?: number;
    timestamp?: number;
    message?: string;
    unread?: boolean;
  }
}

export type CMsgClientChatGetFriendMessageHistoryForOfflineMessages = Record<string, never>;

export interface CMsgClientFSGetFriendsSteamLevels {
  accountids?: number[];
}

export interface CMsgClientFSGetFriendsSteamLevelsResponse {
  friends?: CMsgClientFSGetFriendsSteamLevelsResponse.Friend[];
}

export namespace CMsgClientFSGetFriendsSteamLevelsResponse {
  export interface Friend {
    accountid?: number;
    level?: number;
  }
}

export interface CMsgClientEmailAddrInfo {
  email_address?: string;
  email_is_validated?: boolean;
  email_validation_changed?: boolean;
  credential_change_requires_code?: boolean;
  password_or_secretqa_change_requires_code?: boolean;
}

export interface CMsgCREItemVoteSummary {
  published_file_ids?: CMsgCREItemVoteSummary.PublishedFileId[];
}

export namespace CMsgCREItemVoteSummary {
  export interface PublishedFileId {
    published_file_id?: Long;
  }
}

export interface CMsgCREItemVoteSummaryResponse {
  eresult?: number;
  item_vote_summaries?: CMsgCREItemVoteSummaryResponse.ItemVoteSummary[];
}

export namespace CMsgCREItemVoteSummaryResponse {
  export interface ItemVoteSummary {
    published_file_id?: Long;
    votes_for?: number;
    votes_against?: number;
    reports?: number;
    score?: number;
  }
}

export interface CMsgCREUpdateUserPublishedItemVote {
  published_file_id?: Long;
  vote_up?: boolean;
}

export interface CMsgCREUpdateUserPublishedItemVoteResponse {
  eresult?: number;
}

export interface CMsgCREGetUserPublishedItemVoteDetails {
  published_file_ids?: CMsgCREGetUserPublishedItemVoteDetails.PublishedFileId[];
}

export namespace CMsgCREGetUserPublishedItemVoteDetails {
  export interface PublishedFileId {
    published_file_id?: Long;
  }
}

export interface CMsgCREGetUserPublishedItemVoteDetailsResponse {
  eresult?: number;
  user_item_vote_details?: CMsgCREGetUserPublishedItemVoteDetailsResponse.UserItemVoteDetail[];
}

export namespace CMsgCREGetUserPublishedItemVoteDetailsResponse {
  export interface UserItemVoteDetail {
    published_file_id?: Long;
    vote?: number;
  }
}

export interface CMsgFSGetFollowerCount {
  steam_id?: Long;
}

export interface CMsgFSGetFollowerCountResponse {
  eresult?: number;
  count?: number;
}

export interface CMsgFSGetIsFollowing {
  steam_id?: Long;
}

export interface CMsgFSGetIsFollowingResponse {
  eresult?: number;
  is_following?: boolean;
}

export interface CMsgFSEnumerateFollowingList {
  start_index?: number;
}

export interface CMsgFSEnumerateFollowingListResponse {
  eresult?: number;
  total_results?: number;
  steam_ids?: Long[];
}

export interface CMsgDPGetNumberOfCurrentPlayers {
  appid?: number;
}

export interface CMsgDPGetNumberOfCurrentPlayersResponse {
  eresult?: number;
  player_count?: number;
}

export interface CMsgClientFriendUserStatusPublished {
  friend_steamid?: Long;
  appid?: number;
  status_text?: string;
}

export interface CMsgClientServiceMethodLegacy {
  method_name?: string;
  serialized_method?: Buffer;
  is_notification?: boolean;
}

export interface CMsgClientServiceMethodLegacyResponse {
  method_name?: string;
  serialized_method_response?: Buffer;
}

export interface CMsgClientUIMode {
  uimode?: number;
  chat_mode?: number;
}

export interface CMsgClientVanityURLChangedNotification {
  vanity_url?: string;
}

export interface CMsgClientAuthorizeLocalDeviceRequest {
  device_description?: string;
  owner_account_id?: number;
  local_device_token?: Long;
}

export interface CMsgClientAuthorizeLocalDevice {
  eresult?: number;
  owner_account_id?: number;
  authed_device_token?: Long;
}

export interface CMsgClientAuthorizeLocalDeviceNotification {
  eresult?: number;
  owner_account_id?: number;
  local_device_token?: Long;
}

export interface CMsgClientDeauthorizeDeviceRequest {
  deauthorization_account_id?: number;
  deauthorization_device_token?: Long;
}

export interface CMsgClientDeauthorizeDevice {
  eresult?: number;
  deauthorization_account_id?: number;
}

export interface CMsgClientUseLocalDeviceAuthorizations {
  authorization_account_id?: number[];
  device_tokens?: CMsgClientUseLocalDeviceAuthorizations.DeviceToken[];
}

export namespace CMsgClientUseLocalDeviceAuthorizations {
  export interface DeviceToken {
    owner_account_id?: number;
    token_id?: Long;
  }
}

export type CMsgClientGetAuthorizedDevices = Record<string, never>;

export interface CMsgClientGetAuthorizedDevicesResponse {
  eresult?: number;
  authorized_device?: CMsgClientGetAuthorizedDevicesResponse.AuthorizedDevice[];
}

export namespace CMsgClientGetAuthorizedDevicesResponse {
  export interface AuthorizedDevice {
    auth_device_token?: Long;
    device_name?: string;
    last_access_time?: number;
    borrower_id?: number;
    is_pending?: boolean;
    app_played?: number;
  }
}

export interface CMsgClientSharedLibraryLockStatus {
  locked_library?: CMsgClientSharedLibraryLockStatus.LockedLibrary[];
  own_library_locked_by?: number;
}

export namespace CMsgClientSharedLibraryLockStatus {
  export interface LockedLibrary {
    owner_id?: number;
    locked_by?: number;
  }
}

export interface CMsgClientSharedLibraryStopPlaying {
  seconds_left?: number;
  stop_apps?: CMsgClientSharedLibraryStopPlaying.StopApp[];
}

export namespace CMsgClientSharedLibraryStopPlaying {
  export interface StopApp {
    app_id?: number;
    owner_id?: number;
  }
}

export interface CMsgClientServiceCall {
  sysid_routing?: Buffer;
  call_handle?: number;
  module_crc?: number;
  module_hash?: Buffer;
  function_id?: number;
  cub_output_max?: number;
  flags?: number;
  callparameter?: Buffer;
  ping_only?: boolean;
  max_outstanding_calls?: number;
  app_id?: number;
}

export interface CMsgClientServiceModule {
  module_crc?: number;
  module_hash?: Buffer;
  module_content?: Buffer;
}

export interface CMsgClientServiceCallResponse {
  sysid_routing?: Buffer;
  call_handle?: number;
  module_crc?: number;
  module_hash?: Buffer;
  ecallresult?: number;
  result_content?: Buffer;
  os_version_info?: Buffer;
  system_info?: Buffer;
  load_address?: Long;
  exception_record?: Buffer;
  portable_os_version_info?: Buffer;
  portable_system_info?: Buffer;
  was_converted?: boolean;
  internal_result?: number;
  current_count?: number;
  last_call_handle?: number;
  last_call_module_crc?: number;
  last_call_sysid_routing?: Buffer;
  last_ecallresult?: number;
  last_callissue_delta?: number;
  last_callcomplete_delta?: number;
}

export interface CMsgAMUnlockH264 {
  appid?: number;
  platform?: number;
  reason?: number;
}

export interface CMsgAMUnlockH264Response {
  eresult?: number;
  encryption_key?: Buffer;
}

export interface CMsgClientPlayingSessionState {
  playing_blocked?: boolean;
  playing_app?: number;
}

export interface CMsgClientKickPlayingSession {
  only_stop_game?: boolean;
}

export interface CMsgClientVoiceCallPreAuthorize {
  caller_steamid?: Long;
  receiver_steamid?: Long;
  caller_id?: number;
  hangup?: boolean;
}

export interface CMsgClientVoiceCallPreAuthorizeResponse {
  caller_steamid?: Long;
  receiver_steamid?: Long;
  eresult?: number;
  caller_id?: number;
}

export interface CMsgBadgeCraftedNotification {
  appid?: number;
  badge_level?: number;
}

export interface CMsgClientStartPeerContentServer {
  steamid?: Long;
  client_remote_id?: Long;
  app_id?: number;
  current_build_id?: number;
}

export interface CMsgClientStartPeerContentServerResponse {
  result?: number;
  server_port?: number;
  installed_depots?: number[];
  access_token?: Long;
}

export interface CMsgClientGetPeerContentInfo {
  steamid?: Long;
  client_remote_id?: Long;
  owned_games_visible?: boolean;
}

export interface CMsgClientGetPeerContentInfoResponse {
  result?: number;
  apps?: number[];
}

export interface CMsgClientPendingGameLaunch {
  app_id?: number;
}

export interface CMsgClientPendingGameLaunchResponse {
  eresult?: number;
  app_id?: number;
  envkey?: string;
}
