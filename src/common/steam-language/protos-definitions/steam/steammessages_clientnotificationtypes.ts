/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EClientNotificationType = {
  k_EClientNotificationType_Invalid: 0,
  k_EClientNotificationType_DownloadCompleted: 1,
  k_EClientNotificationType_FriendInvite: 2,
  k_EClientNotificationType_FriendInGame: 3,
  k_EClientNotificationType_FriendOnline: 4,
  k_EClientNotificationType_Achievement: 5,
  k_EClientNotificationType_LowBattery: 6,
  k_EClientNotificationType_SystemUpdate: 7,
  k_EClientNotificationType_FriendMessage: 8,
  k_EClientNotificationType_GroupChatMessage: 9,
  k_EClientNotificationType_FriendInviteRollup: 10,
  k_EClientNotificationType_FamilySharingStopPlaying: 12,
  k_EClientNotificationType_Screenshot: 14,
  k_EClientNotificationType_CloudSyncFailure: 15,
  k_EClientNotificationType_CloudSyncConflict: 16,
  k_EClientNotificationType_IncomingVoiceChat: 17,
  k_EClientNotificationType_ClaimSteamDeckRewards: 18,
  k_EClientNotificationType_GiftReceived: 19,
  k_EClientNotificationType_ItemAnnouncement: 20,
  k_EClientNotificationType_HardwareSurvey: 21,
  k_EClientNotificationType_LowDiskSpace: 22,
  k_EClientNotificationType_BatteryTemperature: 23,
  k_EClientNotificationType_DockUnsupportedFirmware: 24,
  k_EClientNotificationType_PeerContentUpload: 25,
  k_EClientNotificationType_CannotReadControllerGuideButton: 26,
  k_EClientNotificationType_Comment: 27,
  k_EClientNotificationType_Wishlist: 28,
  k_EClientNotificationType_TradeOffer: 29,
  k_EClientNotificationType_AsyncGame: 30,
  k_EClientNotificationType_General: 31,
  k_EClientNotificationType_HelpRequest: 32,
  k_EClientNotificationType_OverlaySplashScreen: 33,
  k_EClientNotificationType_BroadcastAvailableToWatch: 34,
  k_EClientNotificationType_TimedTrialRemaining: 35,
  k_EClientNotificationType_LoginRefresh: 36,
  k_EClientNotificationType_MajorSale: 37,
  k_EClientNotificationType_TimerExpired: 38,
  k_EClientNotificationType_ModeratorMsg: 39,
  k_EClientNotificationType_SteamInputActionSetChanged: 40,
  k_EClientNotificationType_RemoteClientConnection: 41,
  k_EClientNotificationType_RemoteClientStartStream: 42,
  k_EClientNotificationType_StreamingClientConnection: 43,
  k_EClientNotificationType_FamilyInvite: 44,
  k_EClientNotificationType_PlaytimeWarning: 45,
  k_EClientNotificationType_FamilyPurchaseRequest: 46,
  k_EClientNotificationType_FamilyPurchaseRequestResponse: 47,
  k_EClientNotificationType_ParentalFeatureRequest: 48,
  k_EClientNotificationType_ParentalPlaytimeRequest: 49,
  k_EClientNotificationType_GameRecordingError: 50,
  k_EClientNotificationType_ParentalFeatureResponse: 51,
  k_EClientNotificationType_ParentalPlaytimeResponse: 52,
  k_EClientNotificationType_RequestedGameAdded: 53,
  k_EClientNotificationType_ClipDownloaded: 54,
  k_EClientNotificationType_GameRecordingStart: 55,
  k_EClientNotificationType_GameRecordingStop: 56,
  k_EClientNotificationType_GameRecordingUserMarkerAdded: 57,
  k_EClientNotificationType_GameRecordingInstantClip: 58,
  k_EClientNotificationType_PlaytestInvite: 59,
  k_EClientNotificationType_TradeReversal: 60,
  k_EClientNotificationType_HardwareUpdateAvailable: 61,
} as const;

export type EClientNotificationType =
  (typeof EClientNotificationType)[keyof typeof EClientNotificationType];

export const ESystemUpdateNotificationType = {
  k_ESystemUpdateNotificationType_Invalid: 0,
  k_ESystemUpdateNotificationType_Available: 1,
  k_ESystemUpdateNotificationType_NeedsRestart: 2,
} as const;

export type ESystemUpdateNotificationType =
  (typeof ESystemUpdateNotificationType)[keyof typeof ESystemUpdateNotificationType];

export const EGameRecordingErrorType = {
  k_EGameRecordingErrorGeneral: 1,
  k_EGameRecordingErrorLowDiskSpace: 2,
} as const;

export type EGameRecordingErrorType =
  (typeof EGameRecordingErrorType)[keyof typeof EGameRecordingErrorType];

export interface CClientNotificationCloudSyncFailure {
  appid?: number;
}

export interface CClientNotificationCloudSyncConflict {
  appid?: number;
}

export interface CClientNotificationScreenshot {
  screenshot_handle?: string;
  description?: string;
  local_url?: string;
}

export interface CClientNotificationDownloadCompleted {
  appid?: number;
  dlc_appid?: number;
}

export interface CClientNotificationFriendInvite {
  steamid?: Long;
}

export interface CClientNotificationFriendInviteRollup {
  new_invite_count?: number;
}

export interface CClientNotificationFriendInGame {
  steamid?: Long;
  game_name?: string;
}

export interface CClientNotificationFriendOnline {
  steamid?: Long;
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

export interface CClientNotificationLowBattery {
  pct_remaining?: number;
}

export interface CClientNotificationSystemUpdate {
  type?: ESystemUpdateNotificationType;
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

export interface CClientNotificationFamilySharingDeviceAuthorizationChanged {
  accountid_owner?: number;
  authorized?: boolean;
}

export interface CClientNotificationFamilySharingStopPlaying {
  accountid_owner?: number;
  seconds_remaining?: number;
  appid?: number;
}

export interface CClientNotificationFamilySharingLibraryAvailable {
  accountid_owner?: number;
}

export interface CClientNotificationIncomingVoiceChat {
  steamid?: Long;
}

export type CClientNotificationClaimSteamDeckRewards = Record<string, never>;

export interface CClientNotificationGiftReceived {
  sender_name?: string;
}

export interface CClientNotificationItemAnnouncement {
  new_item_count?: number;
  new_backpack_items?: boolean;
}

export type CClientNotificationHardwareSurveyPending = Record<string, never>;

export interface CClientNotificationLowDiskSpace {
  folder_index?: number;
}

export interface CClientNotificationBatteryTemperature {
  temperature?: number;
  notification_type?: string;
}

export type CClientNotificationDockUnsupportedFirmware = Record<string, never>;

export interface CClientNotificationPeerContentUpload {
  appid?: number;
  peer_name?: string;
}

export interface CClientNotificationCannotReadControllerGuideButton {
  controller_index?: number;
}

export type CClientNotificationOverlaySplashScreen = Record<string, never>;

export interface CClientNotificationBroadcastAvailableToWatch {
  broadcast_permission?: number;
}

export interface CClientNotificationTimedTrialRemaining {
  appid?: number;
  icon?: string;
  offline?: boolean;
  allowed_seconds?: number;
  played_seconds?: number;
}

export type CClientNotificationLoginRefresh = Record<string, never>;

export type CClientNotificationTimerExpired = Record<string, never>;

export interface CClientNotificationSteamInputActionSetChanged {
  controller_index?: number;
  action_set_name?: string;
}

export interface CClientNotificationRemoteClientConnection {
  machine?: string;
  connected?: boolean;
}

export interface CClientNotificationRemoteClientStartStream {
  machine?: string;
  game_name?: string;
}

export interface CClientNotificationStreamingClientConnection {
  hostname?: string;
  machine?: string;
  guest_id?: number;
  connected?: boolean;
}

export interface CClientNotificationPlaytimeWarning {
  type?: string;
  playtime_remaining?: number;
}

export interface CClientNotificationGameRecordingError {
  game_id?: Long;
  error_type?: EGameRecordingErrorType;
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

export interface CClientNotificationGameRecordingInstantClip {
  game_id?: Long;
  clip_id?: string;
  duration_secs?: number;
}

export interface CClientNotificationHardwareUpdateAvailable {
  etype?: number[];
}
