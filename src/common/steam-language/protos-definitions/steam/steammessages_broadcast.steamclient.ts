/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EBroadcastWatchLocation = {
  k_EBroadcastWatchLocation_Invalid: 0,
  k_EBroadcastWatchLocation_SteamTV_Tab: 1,
  k_EBroadcastWatchLocation_SteamTV_WatchParty: 2,
  k_EBroadcastWatchLocation_Chat_Tab: 3,
  k_EBroadcastWatchLocation_Chat_WatchParty: 4,
  k_EBroadcastWatchLocation_CommunityPage: 5,
  k_EBroadcastWatchLocation_StoreAppPage: 6,
  k_EBroadcastWatchLocation_InGame: 7,
  k_EBroadcastWatchLocation_BigPicture: 8,
  k_EBroadcastWatchLocation_SalesPage: 9,
  k_EBroadcastWatchLocation_CuratorPage: 10,
  k_EBroadcastWatchLocation_DeveloperPage: 11,
  k_EBroadcastWatchLocation_Chat_Friends: 12,
  k_EBroadcastWatchLocation_SteamTV_Web: 13,
  k_EBroadcastWatchLocation_DesktopUI_Overlay: 14,
  k_EBroadcastWatchLocation_TrailerCarousel: 15,
} as const;

export type EBroadcastWatchLocation =
  (typeof EBroadcastWatchLocation)[keyof typeof EBroadcastWatchLocation];

export const EBroadcastChatPermission = {
  k_EBroadcastChatPermissionPublic: 0,
  k_EBroadcastChatPermissionOwnsApp: 1,
} as const;

export type EBroadcastChatPermission =
  (typeof EBroadcastChatPermission)[keyof typeof EBroadcastChatPermission];

export interface CBroadcast_BeginBroadcastSession_Request {
  permission?: number;
  gameid?: Long;
  client_instance_id?: Long;
  title?: string;
  cellid?: number;
  rtmp_token?: Long;
  thumbnail_upload?: boolean;
  sysid?: number;
  allow_webrtc?: boolean;
}

export interface CBroadcast_BeginBroadcastSession_Response {
  broadcast_id?: Long;
  thumbnail_upload_address?: string;
  thumbnail_upload_token?: string;
  thumbnail_interval_seconds?: number;
  heartbeat_interval_seconds?: number;
}

export interface CBroadcast_EndBroadcastSession_Request {
  broadcast_id?: Long;
}

export type CBroadcast_EndBroadcastSession_Response = Record<string, never>;

export interface CBroadcast_StartBroadcastUpload_Request {
  broadcast_id?: Long;
  cellid?: number;
  as_rtmp?: boolean;
  delay_seconds?: number;
  rtmp_token?: Long;
  upload_ip_address?: number;
  is_replay?: boolean;
  sysid?: number;
}

export interface CBroadcast_StartBroadcastUpload_Response {
  upload_token?: string;
  upload_address?: string;
  broadcast_upload_id?: Long;
  enable_replay?: boolean;
  http_address?: string;
}

export interface CBroadcast_NotifyBroadcastUploadStop_Notification {
  broadcast_upload_id?: Long;
  upload_result?: number;
}

export interface CBroadcast_WatchBroadcast_Request {
  steamid?: Long;
  existing_broadcast_id?: Long;
  viewer_token?: Long;
  client_cell?: number;
  watch_location?: EBroadcastWatchLocation;
  is_webrtc?: boolean;
}

export interface CBroadcast_WatchBroadcast_Response {
  response?: CBroadcast_WatchBroadcast_Response.EWatchResponse;
  mpd_url?: string;
  broadcast_id?: Long;
  gameid?: Long;
  title?: string;
  num_viewers?: number;
  permission?: number;
  is_rtmp?: boolean;
  seconds_delay?: number;
  viewer_token?: Long;
  hls_m3u8_master_url?: string;
  heartbeat_interval?: number;
  thumbnail_url?: string;
  is_webrtc?: boolean;
  webrtc_session_id?: Long;
  webrtc_offer_sdp?: string;
  webrtc_turn_server?: string;
  is_replay?: boolean;
  duration?: number;
  cdn_auth_url_parameters?: string;
}

export namespace CBroadcast_WatchBroadcast_Response {
  export const EWatchResponse = {
    k_EWatchResponseReady: 1,
    k_EWatchResponseNotAvailable: 2,
    k_EWatchResponseWaitingForApproval: 3,
    k_EWatchResponseWaitingForStart: 4,
    k_EWatchResponseInvalidSession: 5,
    k_EWatchResponseTooManyBroadcasts: 6,
    k_EWatchResponseWaitingForReconnect: 7,
    k_EWatchResponseSystemNotSupported: 8,
    k_EWatchResponseUserRestricted: 9,
    k_EWatchResponseClientOutOfDate: 10,
    k_EWatchResponsePoorUploadQuality: 11,
    k_EWatchResponseMissingSubscription: 12,
    k_EWatchResponseTooManyViewers: 13,
  } as const;

  export type EWatchResponse = (typeof EWatchResponse)[keyof typeof EWatchResponse];
}

export interface CBroadcast_HeartbeatBroadcast_Notification {
  steamid?: Long;
  broadcast_id?: Long;
  viewer_token?: Long;
  representation?: number;
}

export interface CBroadcast_StopWatchingBroadcast_Notification {
  steamid?: Long;
  broadcast_id?: Long;
  viewer_token?: Long;
}

export interface CBroadcast_GetBroadcastStatus_Request {
  steamid?: Long;
  broadcast_id?: Long;
}

export interface CBroadcast_GetBroadcastStatus_Response {
  gameid?: Long;
  title?: string;
  num_viewers?: number;
  permission?: number;
  is_rtmp?: boolean;
  seconds_delay?: number;
  is_publisher?: boolean;
  thumbnail_url?: string;
  update_interval?: number;
  is_uploading?: boolean;
  duration?: number;
  is_replay?: boolean;
  is_capturing_vod?: boolean;
  is_store_whitelisted?: boolean;
}

export interface CBroadcast_GetBroadcastThumbnail_Request {
  steamid?: Long;
  broadcast_id?: Long;
}

export interface CBroadcast_GetBroadcastThumbnail_Response {
  thumbnail_url?: string;
  update_interval?: number;
  num_viewers?: number;
  duration?: number;
}

export interface CBroadcast_InviteToBroadcast_Request {
  steamid?: Long;
  approval_response?: boolean;
}

export interface CBroadcast_InviteToBroadcast_Response {
  success?: boolean;
}

export interface CBroadcast_SendBroadcastStateToServer_Request {
  permission?: number;
  gameid?: Long;
  title?: string;
  game_data_config?: string;
}

export type CBroadcast_SendBroadcastStateToServer_Response = Record<string, never>;

export interface CBroadcast_NotifyBroadcastSessionHeartbeat_Notification {
  broadcast_id?: Long;
}

export interface CBroadcast_GetBroadcastChatInfo_Request {
  steamid?: Long;
  broadcast_id?: Long;
  client_ip?: number;
  client_cell?: number;
}

export interface CBroadcast_GetBroadcastChatInfo_Response {
  chat_id?: Long;
  view_url_template?: string;
  flair_group_ids?: number[];
}

export interface CBroadcast_PostChatMessage_Request {
  chat_id?: Long;
  message?: string;
  instance_id?: number;
  language?: number;
  country_code?: string;
}

export interface CBroadcast_PostChatMessage_Response {
  persona_name?: string;
  in_game?: boolean;
  result?: number;
  cooldown_time_seconds?: number;
}

export interface CBroadcast_UpdateChatMessageFlair_Request {
  chat_id?: Long;
  flair?: string;
}

export interface CBroadcast_UpdateChatMessageFlair_Response {
  result?: number;
  chat_id?: Long;
  flair?: string;
}

export interface CBroadcast_MuteBroadcastChatUser_Request {
  chat_id?: Long;
  user_steamid?: Long;
  muted?: boolean;
}

export type CBroadcast_MuteBroadcastChatUser_Response = Record<string, never>;

export interface CBroadcast_RemoveUserChatText_Request {
  chat_id?: Long;
  user_steamid?: Long;
}

export type CBroadcast_RemoveUserChatText_Response = Record<string, never>;

export interface CBroadcast_GetBroadcastChatUserNames_Request {
  chat_id?: Long;
  user_steamid?: Long[];
}

export interface CBroadcast_GetBroadcastChatUserNames_Response {
  persona_names?: CBroadcast_GetBroadcastChatUserNames_Response.PersonaName[];
}

export namespace CBroadcast_GetBroadcastChatUserNames_Response {
  export interface PersonaName {
    steam_id?: Long;
    persona?: string;
  }
}

export interface CBroadcast_StartBuildClip_Request {
  steamid?: Long;
  broadcast_session_id?: Long;
  first_segment?: number;
  num_segments?: number;
  clip_description?: string;
}

export interface CBroadcast_StartBuildClip_Response {
  broadcast_clip_id?: Long;
}

export interface CBroadcast_GetBuildClipStatus_Request {
  broadcast_clip_id?: Long;
}

export type CBroadcast_GetBuildClipStatus_Response = Record<string, never>;

export interface CBroadcast_SetClipDetails_Request {
  broadcast_clip_id?: Long;
  start_time?: number;
  end_time?: number;
  video_description?: string;
}

export type CBroadcast_SetClipDetails_Response = Record<string, never>;

export interface CBroadcast_GetClipDetails_Request {
  broadcast_clip_id?: Long;
}

export interface CBroadcast_GetClipDetails_Response {
  broadcast_clip_id?: Long;
  video_id?: Long;
  channel_id?: Long;
  app_id?: number;
  accountid_broadcaster?: number;
  accountid_clipmaker?: number;
  video_description?: string;
  start_time?: number;
  length_milliseconds?: number;
  thumbnail_path?: string;
}

export interface CBroadcast_SetRTMPInfo_Request {
  broadcast_permission?: number;
  update_token?: boolean;
  broadcast_delay?: number;
  app_id?: number;
  required_app_id?: number;
  broadcast_chat_permission?: EBroadcastChatPermission;
  broadcast_buffer?: number;
  steamid?: Long;
  chat_rate_limit?: number;
  enable_replay?: boolean;
  is_partner_chat_only?: boolean;
  wordban_list?: string;
}

export type CBroadcast_SetRTMPInfo_Response = Record<string, never>;

export interface CBroadcast_GetRTMPInfo_Request {
  ip?: number;
  steamid?: Long;
}

export interface CBroadcast_GetRTMPInfo_Response {
  broadcast_permission?: number;
  rtmp_host?: string;
  rtmp_token?: string;
  broadcast_delay?: number;
  app_id?: number;
  required_app_id?: number;
  broadcast_chat_permission?: EBroadcastChatPermission;
  broadcast_buffer?: number;
  steamid?: Long;
  chat_rate_limit?: number;
  enable_replay?: boolean;
  is_partner_chat_only?: boolean;
  wordban_list?: string;
}

export interface CBroadcast_WebRTCHaveTURNServer_Notification {
  broadcast_session_id?: Long;
  turn_server?: string;
}

export interface CBroadcast_WebRTCStartResult_Request {
  webrtc_session_id?: Long;
  started?: boolean;
  offer?: string;
  resolution_x?: number;
  resolution_y?: number;
  fps?: number;
}

export type CBroadcast_WebRTCStartResult_Response = Record<string, never>;

export interface CBroadcast_WebRTCStopped_Request {
  webrtc_session_id?: Long;
}

export type CBroadcast_WebRTCStopped_Response = Record<string, never>;

export interface CBroadcast_WebRTCSetAnswer_Request {
  broadcaster_steamid?: Long;
  webrtc_session_id?: Long;
  answer?: string;
}

export type CBroadcast_WebRTCSetAnswer_Response = Record<string, never>;

export interface CBroadcast_WebRTCLookupTURNServer_Request {
  cellid?: number;
}

export interface CBroadcast_WebRTCLookupTURNServer_Response {
  turn_server?: string;
}

export interface CBroadcast_WebRTC_Candidate {
  sdp_mid?: string;
  sdp_mline_index?: number;
  candidate?: string;
}

export interface CBroadcast_WebRTCAddHostCandidate_Request {
  webrtc_session_id?: Long;
  candidate?: CBroadcast_WebRTC_Candidate;
}

export type CBroadcast_WebRTCAddHostCandidate_Response = Record<string, never>;

export interface CBroadcast_WebRTCAddViewerCandidate_Request {
  broadcaster_steamid?: Long;
  webrtc_session_id?: Long;
  candidate?: CBroadcast_WebRTC_Candidate;
}

export type CBroadcast_WebRTCAddViewerCandidate_Response = Record<string, never>;

export interface CBroadcast_WebRTCGetHostCandidates_Request {
  broadcaster_steamid?: Long;
  webrtc_session_id?: Long;
  candidate_generation?: number;
}

export interface CBroadcast_WebRTCGetHostCandidates_Response {
  candidate_generation?: number;
  candidates?: CBroadcast_WebRTC_Candidate[];
}

export interface CBroadcast_GetBroadcastUploadStats_Request {
  row_limit?: number;
  start_time?: number;
  upload_id?: Long;
  steamid?: Long;
  session_id?: Long;
}

export interface CBroadcast_GetBroadcastUploadStats_Response {
  upload_stats?: CBroadcast_GetBroadcastUploadStats_Response.UploadStats[];
}

export namespace CBroadcast_GetBroadcastUploadStats_Response {
  export interface UploadStats {
    upload_result?: number;
    time_stopped?: number;
    seconds_uploaded?: number;
    max_viewers?: number;
    resolution_x?: number;
    resolution_y?: number;
    avg_bandwidth?: number;
    total_bytes?: Long;
    app_id?: number;
    total_unique_viewers?: number;
    total_seconds_watched?: Long;
    time_started?: number;
    upload_id?: Long;
    local_address?: string;
    remote_address?: string;
    frames_per_second?: number;
    num_representations?: number;
    app_name?: string;
    is_replay?: boolean;
    session_id?: Long;
  }
}

export interface CBroadcast_GetBroadcastViewerStats_Request {
  upload_id?: Long;
  steamid?: Long;
}

export interface CBroadcast_GetBroadcastViewerStats_Response {
  viewer_stats?: CBroadcast_GetBroadcastViewerStats_Response.ViewerStats[];
  country_stats?: CBroadcast_GetBroadcastViewerStats_Response.CountryStats[];
}

export namespace CBroadcast_GetBroadcastViewerStats_Response {
  export interface ViewerStats {
    time?: number;
    num_viewers?: number;
  }

  export interface CountryStats {
    country_code?: string;
    num_viewers?: number;
  }
}

export interface CBroadcast_BroadcastViewerState_Notification {
  steamid?: Long;
  state?: CBroadcast_BroadcastViewerState_Notification.EViewerState;
}

export namespace CBroadcast_BroadcastViewerState_Notification {
  export const EViewerState = {
    k_EViewerNeedsApproval: 1,
    k_EViewerWatching: 2,
    k_EViewerLeft: 3,
  } as const;

  export type EViewerState = (typeof EViewerState)[keyof typeof EViewerState];
}

export interface CBroadcast_WaitingBroadcastViewer_Notification {
  broadcast_id?: Long;
}

export interface CBroadcast_BroadcastUploadStarted_Notification {
  broadcast_id?: Long;
  upload_token?: string;
  upload_address?: string;
  http_address?: string;
  broadcast_upload_id?: Long;
  heartbeat_interval_seconds?: number;
  is_rtmp?: boolean;
}

export interface CBroadcast_StopBroadcastUpload_Notification {
  broadcast_id?: Long;
  broadcast_relay_id?: Long;
  upload_result?: number;
  too_many_poor_uploads?: boolean;
}

export interface CBroadcast_SessionClosed_Notification {
  broadcast_id?: Long;
}

export interface CBroadcast_ViewerBroadcastInvite_Notification {
  broadcaster_steamid?: Long;
}

export interface CBroadcast_BroadcastStatus_Notification {
  broadcast_id?: Long;
  num_viewers?: number;
}

export interface CBroadcast_BroadcastChannelLive_Notification {
  broadcast_channel_id?: Long;
  broadcast_channel_name?: string;
  broadcast_channel_avatar?: string;
}

export interface CBroadcast_SendThumbnailToRelay_Notification {
  thumbnail_upload_token?: string;
  thumbnail_broadcast_session_id?: Long;
  thumbnail_data?: Buffer;
  thumbnail_width?: number;
  thumbnail_height?: number;
}

export interface CBroadcast_WebRTCNeedTURNServer_Notification {
  broadcast_session_id?: Long;
}

export interface CBroadcast_WebRTCStart_Notification {
  broadcast_session_id?: Long;
  webrtc_session_id?: Long;
  viewer_steamid?: Long;
  viewer_token?: Long;
}

export interface CBroadcast_WebRTCSetAnswer_Notification {
  broadcast_session_id?: Long;
  webrtc_session_id?: Long;
  answer?: string;
}

export interface CBroadcast_WebRTCAddViewerCandidate_Notification {
  broadcast_session_id?: Long;
  webrtc_session_id?: Long;
  candidate?: CBroadcast_WebRTC_Candidate;
}

export abstract class BroadcastService {
  abstract BeginBroadcastSession(
    request: CBroadcast_BeginBroadcastSession_Request,
  ): Promise<CBroadcast_BeginBroadcastSession_Response>;
  abstract EndBroadcastSession(
    request: CBroadcast_EndBroadcastSession_Request,
  ): Promise<CBroadcast_EndBroadcastSession_Response>;
  abstract StartBroadcastUpload(
    request: CBroadcast_StartBroadcastUpload_Request,
  ): Promise<CBroadcast_StartBroadcastUpload_Response>;
  abstract NotifyBroadcastUploadStop(
    request: CBroadcast_NotifyBroadcastUploadStop_Notification,
  ): Promise<void>;
  abstract WatchBroadcast(
    request: CBroadcast_WatchBroadcast_Request,
  ): Promise<CBroadcast_WatchBroadcast_Response>;
  abstract HeartbeatBroadcast(request: CBroadcast_HeartbeatBroadcast_Notification): Promise<void>;
  abstract StopWatchingBroadcast(
    request: CBroadcast_StopWatchingBroadcast_Notification,
  ): Promise<void>;
  abstract GetBroadcastStatus(
    request: CBroadcast_GetBroadcastStatus_Request,
  ): Promise<CBroadcast_GetBroadcastStatus_Response>;
  abstract GetBroadcastThumbnail(
    request: CBroadcast_GetBroadcastThumbnail_Request,
  ): Promise<CBroadcast_GetBroadcastThumbnail_Response>;
  abstract InviteToBroadcast(
    request: CBroadcast_InviteToBroadcast_Request,
  ): Promise<CBroadcast_InviteToBroadcast_Response>;
  abstract SendBroadcastStateToServer(
    request: CBroadcast_SendBroadcastStateToServer_Request,
  ): Promise<CBroadcast_SendBroadcastStateToServer_Response>;
  abstract NotifyBroadcastSessionHeartbeat(
    request: CBroadcast_NotifyBroadcastSessionHeartbeat_Notification,
  ): Promise<void>;
  abstract GetBroadcastChatInfo(
    request: CBroadcast_GetBroadcastChatInfo_Request,
  ): Promise<CBroadcast_GetBroadcastChatInfo_Response>;
  abstract PostChatMessage(
    request: CBroadcast_PostChatMessage_Request,
  ): Promise<CBroadcast_PostChatMessage_Response>;
  abstract UpdateChatMessageFlair(
    request: CBroadcast_UpdateChatMessageFlair_Request,
  ): Promise<CBroadcast_UpdateChatMessageFlair_Response>;
  abstract MuteBroadcastChatUser(
    request: CBroadcast_MuteBroadcastChatUser_Request,
  ): Promise<CBroadcast_MuteBroadcastChatUser_Response>;
  abstract RemoveUserChatText(
    request: CBroadcast_RemoveUserChatText_Request,
  ): Promise<CBroadcast_RemoveUserChatText_Response>;
  abstract GetBroadcastChatUserNames(
    request: CBroadcast_GetBroadcastChatUserNames_Request,
  ): Promise<CBroadcast_GetBroadcastChatUserNames_Response>;
  abstract StartBuildClip(
    request: CBroadcast_StartBuildClip_Request,
  ): Promise<CBroadcast_StartBuildClip_Response>;
  abstract GetBuildClipStatus(
    request: CBroadcast_GetBuildClipStatus_Request,
  ): Promise<CBroadcast_GetBuildClipStatus_Response>;
  abstract SetClipDetails(
    request: CBroadcast_SetClipDetails_Request,
  ): Promise<CBroadcast_SetClipDetails_Response>;
  abstract GetClipDetails(
    request: CBroadcast_GetClipDetails_Request,
  ): Promise<CBroadcast_GetClipDetails_Response>;
  abstract SetRTMPInfo(
    request: CBroadcast_SetRTMPInfo_Request,
  ): Promise<CBroadcast_SetRTMPInfo_Response>;
  abstract GetRTMPInfo(
    request: CBroadcast_GetRTMPInfo_Request,
  ): Promise<CBroadcast_GetRTMPInfo_Response>;
  abstract NotifyWebRTCHaveTURNServer(
    request: CBroadcast_WebRTCHaveTURNServer_Notification,
  ): Promise<void>;
  abstract WebRTCStartResult(
    request: CBroadcast_WebRTCStartResult_Request,
  ): Promise<CBroadcast_WebRTCStartResult_Response>;
  abstract WebRTCStopped(
    request: CBroadcast_WebRTCStopped_Request,
  ): Promise<CBroadcast_WebRTCStopped_Response>;
  abstract WebRTCSetAnswer(
    request: CBroadcast_WebRTCSetAnswer_Request,
  ): Promise<CBroadcast_WebRTCSetAnswer_Response>;
  abstract WebRTCLookupTURNServer(
    request: CBroadcast_WebRTCLookupTURNServer_Request,
  ): Promise<CBroadcast_WebRTCLookupTURNServer_Response>;
  abstract WebRTCAddHostCandidate(
    request: CBroadcast_WebRTCAddHostCandidate_Request,
  ): Promise<CBroadcast_WebRTCAddHostCandidate_Response>;
  abstract WebRTCAddViewerCandidate(
    request: CBroadcast_WebRTCAddViewerCandidate_Request,
  ): Promise<CBroadcast_WebRTCAddViewerCandidate_Response>;
  abstract WebRTCGetHostCandidates(
    request: CBroadcast_WebRTCGetHostCandidates_Request,
  ): Promise<CBroadcast_WebRTCGetHostCandidates_Response>;
  abstract GetBroadcastUploadStats(
    request: CBroadcast_GetBroadcastUploadStats_Request,
  ): Promise<CBroadcast_GetBroadcastUploadStats_Response>;
  abstract GetBroadcastViewerStats(
    request: CBroadcast_GetBroadcastViewerStats_Request,
  ): Promise<CBroadcast_GetBroadcastViewerStats_Response>;
}

export abstract class BroadcastClientService {
  abstract NotifyBroadcastViewerState(
    request: CBroadcast_BroadcastViewerState_Notification,
  ): Promise<void>;
  abstract NotifyWaitingBroadcastViewer(
    request: CBroadcast_WaitingBroadcastViewer_Notification,
  ): Promise<void>;
  abstract NotifyBroadcastUploadStarted(
    request: CBroadcast_BroadcastUploadStarted_Notification,
  ): Promise<void>;
  abstract NotifyStopBroadcastUpload(
    request: CBroadcast_StopBroadcastUpload_Notification,
  ): Promise<void>;
  abstract NotifySessionClosed(request: CBroadcast_SessionClosed_Notification): Promise<void>;
  abstract NotifyViewerBroadcastInvite(
    request: CBroadcast_ViewerBroadcastInvite_Notification,
  ): Promise<void>;
  abstract NotifyBroadcastStatus(request: CBroadcast_BroadcastStatus_Notification): Promise<void>;
  abstract NotifyBroadcastChannelLive(
    request: CBroadcast_BroadcastChannelLive_Notification,
  ): Promise<void>;
  abstract SendThumbnailToRelay(
    request: CBroadcast_SendThumbnailToRelay_Notification,
  ): Promise<void>;
  abstract NotifyWebRTCNeedTURNServer(
    request: CBroadcast_WebRTCNeedTURNServer_Notification,
  ): Promise<void>;
  abstract NotifyWebRTCStart(request: CBroadcast_WebRTCStart_Notification): Promise<void>;
  abstract NotifyWebRTCSetAnswer(request: CBroadcast_WebRTCSetAnswer_Notification): Promise<void>;
  abstract NotifyWebRTCAddViewerCandidate(
    request: CBroadcast_WebRTCAddViewerCandidate_Notification,
  ): Promise<void>;
}
