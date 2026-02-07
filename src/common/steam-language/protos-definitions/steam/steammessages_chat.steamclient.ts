/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  EContentReportReason,
  EContentReportResolution,
  EContentReportSubjectType,
} from "./enums";
import type { CMsgClientPersonaState } from "./steammessages_clientserver_friends";

export const EChatRoomJoinState = {
  k_EChatRoomJoinState_Default: 0,
  k_EChatRoomJoinState_None: 1,
  k_EChatRoomJoinState_Joined: 2,
  k_EChatRoomJoinState_TestInvalid: 99,
} as const;

export type EChatRoomJoinState = (typeof EChatRoomJoinState)[keyof typeof EChatRoomJoinState];

export const EChatRoomGroupRank = {
  k_EChatRoomGroupRank_Default: 0,
  k_EChatRoomGroupRank_Viewer: 10,
  k_EChatRoomGroupRank_Guest: 15,
  k_EChatRoomGroupRank_Member: 20,
  k_EChatRoomGroupRank_Moderator: 30,
  k_EChatRoomGroupRank_Officer: 40,
  k_EChatRoomGroupRank_Owner: 50,
  k_EChatRoomGroupRank_TestInvalid: 99,
} as const;

export type EChatRoomGroupRank = (typeof EChatRoomGroupRank)[keyof typeof EChatRoomGroupRank];

export const EChatRoomNotificationLevel = {
  k_EChatroomNotificationLevel_Invalid: 0,
  k_EChatroomNotificationLevel_None: 1,
  k_EChatroomNotificationLevel_MentionMe: 2,
  k_EChatroomNotificationLevel_MentionAll: 3,
  k_EChatroomNotificationLevel_AllMessages: 4,
} as const;

export type EChatRoomNotificationLevel =
  (typeof EChatRoomNotificationLevel)[keyof typeof EChatRoomNotificationLevel];

export const EChatRoomServerMessage = {
  k_EChatRoomServerMsg_Invalid: 0,
  k_EChatRoomServerMsg_RenameChatRoom: 1,
  k_EChatRoomServerMsg_Joined: 2,
  k_EChatRoomServerMsg_Parted: 3,
  k_EChatRoomServerMsg_Kicked: 4,
  k_EChatRoomServerMsg_Invited: 5,
  k_EChatRoomServerMsg_InviteDismissed: 8,
  k_EChatRoomServerMsg_ChatRoomTaglineChanged: 9,
  k_EChatRoomServerMsg_ChatRoomAvatarChanged: 10,
  k_EChatRoomServerMsg_AppCustom: 11,
  k_EChatRoomServerMsg_JoinedMany: 12,
  k_EChatRoomServerMsg_PartedMany: 13,
  k_EChatRoomServerMsg_InvitedMany: 14,
} as const;

export type EChatRoomServerMessage =
  (typeof EChatRoomServerMessage)[keyof typeof EChatRoomServerMessage];

export const EChatRoomMessageReactionType = {
  k_EChatRoomMessageReactionType_Invalid: 0,
  k_EChatRoomMessageReactionType_Emoticon: 1,
  k_EChatRoomMessageReactionType_Sticker: 2,
} as const;

export type EChatRoomMessageReactionType =
  (typeof EChatRoomMessageReactionType)[keyof typeof EChatRoomMessageReactionType];

export const EChatRoomMemberStateChange = {
  k_EChatRoomMemberStateChange_Invalid: 0,
  k_EChatRoomMemberStateChange_Joined: 1,
  k_EChatRoomMemberStateChange_Parted: 2,
  k_EChatRoomMemberStateChange_Kicked: 3,
  k_EChatRoomMemberStateChange_Invited: 4,
  k_EChatRoomMemberStateChange_RankChanged: 7,
  k_EChatRoomMemberStateChange_InviteDismissed: 8,
  k_EChatRoomMemberStateChange_Muted: 9,
  k_EChatRoomMemberStateChange_Banned: 10,
  k_EChatRoomMemberStateChange_RolesChanged: 12,
} as const;

export type EChatRoomMemberStateChange =
  (typeof EChatRoomMemberStateChange)[keyof typeof EChatRoomMemberStateChange];

export type CChat_RequestFriendPersonaStates_Request = Record<string, never>;

export type CChat_RequestFriendPersonaStates_Response = Record<string, never>;

export interface CChatRoom_CreateChatRoomGroup_Request {
  steamid_partner?: Long;
  steamid_invited?: Long;
  name?: string;
  steamid_invitees?: Long[];
  watching_broadcast_accountid?: number;
  watching_broadcast_channel_id?: Long;
}

export interface CChatRole {
  role_id?: Long;
  name?: string;
  ordinal?: number;
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

export interface CChatPartyBeacon {
  app_id?: number;
  steamid_owner?: Long;
  beacon_id?: Long;
  game_metadata?: string;
}

export interface CChatRoomGroupHeaderState {
  chat_group_id?: Long;
  chat_name?: string;
  clanid?: number;
  accountid_owner?: number;
  appid?: number;
  tagline?: string;
  avatar_sha?: Buffer;
  default_role_id?: Long;
  roles?: CChatRole[];
  role_actions?: CChatRoleActions[];
  watching_broadcast_accountid?: number;
  party_beacons?: CChatPartyBeacon[];
  watching_broadcast_channel_id?: Long;
  active_minigame_id?: Long;
  avatar_ugc_url?: string;
  disabled?: boolean;
}

export interface CChatRoomMember {
  accountid?: number;
  state?: EChatRoomJoinState;
  rank?: EChatRoomGroupRank;
  time_kick_expire?: number;
  role_ids?: Long[];
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

export interface CChatRoomGroupState {
  header_state?: CChatRoomGroupHeaderState;
  members?: CChatRoomMember[];
  default_chat_id?: Long;
  chat_rooms?: CChatRoomState[];
  kicked?: CChatRoomMember[];
}

export interface CUserChatRoomState {
  chat_id?: Long;
  time_joined?: number;
  time_last_ack?: number;
  desktop_notification_level?: EChatRoomNotificationLevel;
  mobile_notification_level?: EChatRoomNotificationLevel;
  time_last_mention?: number;
  unread_indicator_muted?: boolean;
  time_first_unread?: number;
}

export interface CUserChatRoomGroupState {
  chat_group_id?: Long;
  time_joined?: number;
  user_chat_room_state?: CUserChatRoomState[];
  desktop_notification_level?: EChatRoomNotificationLevel;
  mobile_notification_level?: EChatRoomNotificationLevel;
  time_last_group_ack?: number;
  unread_indicator_muted?: boolean;
  direct_messages_allowed?: boolean;
}

export interface CChatRoom_CreateChatRoomGroup_Response {
  chat_group_id?: Long;
  state?: CChatRoomGroupState;
  user_chat_state?: CUserChatRoomGroupState;
}

export interface CChatRoom_SaveChatRoomGroup_Request {
  chat_group_id?: Long;
  name?: string;
}

export type CChatRoom_SaveChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_RenameChatRoomGroup_Request {
  chat_group_id?: Long;
  name?: string;
}

export interface CChatRoom_RenameChatRoomGroup_Response {
  name?: string;
}

export interface CChatRoom_SetChatRoomGroupTagline_Request {
  chat_group_id?: Long;
  tagline?: string;
}

export type CChatRoom_SetChatRoomGroupTagline_Response = Record<string, never>;

export interface CChatRoom_SetChatRoomGroupAvatar_Request {
  chat_group_id?: Long;
  avatar_sha?: Buffer;
}

export type CChatRoom_SetChatRoomGroupAvatar_Response = Record<string, never>;

export interface CChatRoom_SetChatRoomGroupWatchingBroadcast_Request {
  chat_group_id?: Long;
  watching_broadcast_accountid?: number;
  watching_broadcast_channel_id?: Long;
}

export type CChatRoom_SetChatRoomGroupWatchingBroadcast_Response = Record<string, never>;

export interface CChatRoom_JoinMiniGameForChatRoomGroup_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export interface CChatRoom_JoinMiniGameForChatRoomGroup_Response {
  minigame_id?: Long;
}

export interface CChatRoom_EndMiniGameForChatRoomGroup_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  minigame_id?: Long;
}

export type CChatRoom_EndMiniGameForChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_MuteUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
  expiration?: number;
}

export type CChatRoom_MuteUser_Response = Record<string, never>;

export interface CChatRoom_KickUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
  expiration?: number;
}

export type CChatRoom_KickUser_Response = Record<string, never>;

export interface CChatRoom_SetUserBanState_Request {
  chat_group_id?: Long;
  steamid?: Long;
  ban_state?: boolean;
}

export type CChatRoom_SetUserBanState_Response = Record<string, never>;

export interface CChatRoom_RevokeInvite_Request {
  chat_group_id?: Long;
  steamid?: Long;
}

export type CChatRoom_RevokeInvite_Response = Record<string, never>;

export interface CChatRoom_CreateRole_Request {
  chat_group_id?: Long;
  name?: string;
}

export interface CChatRoom_CreateRole_Response {
  actions?: CChatRoleActions;
}

export interface CChatRoom_GetRoles_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetRoles_Response {
  roles?: CChatRole[];
}

export interface CChatRoom_RenameRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
  name?: string;
}

export type CChatRoom_RenameRole_Response = Record<string, never>;

export interface CChatRoom_ReorderRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
  ordinal?: number;
}

export type CChatRoom_ReorderRole_Response = Record<string, never>;

export interface CChatRoom_DeleteRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
}

export type CChatRoom_DeleteRole_Response = Record<string, never>;

export interface CChatRoom_GetRoleActions_Request {
  chat_group_id?: Long;
  role_id?: Long;
}

export interface CChatRoom_GetRoleActions_Response {
  actions?: CChatRoleActions[];
}

export interface CChatRoom_ReplaceRoleActions_Request {
  chat_group_id?: Long;
  role_id?: Long;
  actions?: CChatRoleActions;
}

export type CChatRoom_ReplaceRoleActions_Response = Record<string, never>;

export interface CChatRoom_AddRoleToUser_Request {
  chat_group_id?: Long;
  role_id?: Long;
  steamid?: Long;
}

export type CChatRoom_AddRoleToUser_Response = Record<string, never>;

export interface CChatRoom_GetRolesForUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
}

export interface CChatRoom_GetRolesForUser_Response {
  role_ids?: Long[];
}

export interface CChatRoom_DeleteRoleFromUser_Request {
  chat_group_id?: Long;
  role_id?: Long;
  steamid?: Long;
}

export type CChatRoom_DeleteRoleFromUser_Response = Record<string, never>;

export interface CChatRoom_JoinChatRoomGroup_Request {
  chat_group_id?: Long;
  invite_code?: string;
  chat_id?: Long;
}

export interface CChatRoom_JoinChatRoomGroup_Response {
  state?: CChatRoomGroupState;
  user_chat_state?: CUserChatRoomGroupState;
  join_chat_id?: Long;
  time_expire?: number;
}

export interface CChatRoom_InviteFriendToChatRoomGroup_Request {
  chat_group_id?: Long;
  steamid?: Long;
  chat_id?: Long;
  skip_friendsui_check?: boolean;
}

export type CChatRoom_InviteFriendToChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_LeaveChatRoomGroup_Request {
  chat_group_id?: Long;
}

export type CChatRoom_LeaveChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_CreateChatRoom_Request {
  chat_group_id?: Long;
  name?: string;
  allow_voice?: boolean;
}

export interface CChatRoom_CreateChatRoom_Response {
  chat_room?: CChatRoomState;
}

export interface CChatRoom_DeleteChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export type CChatRoom_DeleteChatRoom_Response = Record<string, never>;

export interface CChatRoom_RenameChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  name?: string;
}

export type CChatRoom_RenameChatRoom_Response = Record<string, never>;

export interface CChatRoom_ReorderChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  move_after_chat_id?: Long;
}

export type CChatRoom_ReorderChatRoom_Response = Record<string, never>;

export interface CChatRoom_SendChatMessage_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  message?: string;
  echo_to_sender?: boolean;
}

export interface CChatRoom_SendChatMessage_Response {
  modified_message?: string;
  server_timestamp?: number;
  ordinal?: number;
  message_without_bb_code?: string;
}

export interface CChatRoom_JoinVoiceChat_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export interface CChatRoom_JoinVoiceChat_Response {
  voice_chatid?: Long;
}

export interface CChatRoom_LeaveVoiceChat_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export type CChatRoom_LeaveVoiceChat_Response = Record<string, never>;

export interface CChatRoom_GetMessageHistory_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  last_time?: number;
  last_ordinal?: number;
  start_time?: number;
  start_ordinal?: number;
  max_count?: number;
}

export interface ServerMessage {
  message?: EChatRoomServerMessage;
  string_param?: string;
  accountid_param?: number;
}

export interface CChatRoom_GetMessageHistory_Response {
  messages?: CChatRoom_GetMessageHistory_Response.ChatMessage[];
  more_available?: boolean;
}

export namespace CChatRoom_GetMessageHistory_Response {
  export interface ChatMessage {
    sender?: number;
    server_timestamp?: number;
    message?: string;
    ordinal?: number;
    server_message?: ServerMessage;
    deleted?: boolean;
  }

  export namespace ChatMessage {
    export interface MessageReaction {
      reaction_type?: EChatRoomMessageReactionType;
      reaction?: string;
      num_reactors?: number;
      has_user_reacted?: boolean;
    }
  }
}

export type CChatRoom_GetMyChatRoomGroups_Request = Record<string, never>;

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
  rank?: EChatRoomGroupRank;
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

export interface CChatRoomSummaryPair {
  user_chat_group_state?: CUserChatRoomGroupState;
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
}

export interface CChatRoom_GetMyChatRoomGroups_Response {
  chat_room_groups?: CChatRoomSummaryPair[];
}

export interface CChatRoom_GetChatRoomGroupState_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetChatRoomGroupState_Response {
  state?: CChatRoomGroupState;
}

export interface CChatRoom_SetAppChatRoomGroupForceActive_Request {
  chat_group_id?: Long;
  requesting_app_id?: number;
}

export interface CChatRoom_SetAppChatRoomGroupForceActive_Response {
  result?: number;
  accounts_in_channel?: number[];
}

export interface CChatRoom_SetAppChatRoomGroupStopForceActive_Notification {
  chat_group_id?: Long;
  requesting_app_id?: number;
}

export interface CChatRoom_AckChatMessage_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  timestamp?: number;
}

export interface CChatRoom_CreateInviteLink_Request {
  chat_group_id?: Long;
  seconds_valid?: number;
  chat_id?: Long;
}

export interface CChatRoom_CreateInviteLink_Response {
  invite_code?: string;
  seconds_valid?: number;
}

export interface CChatRoom_GetInviteLinkInfo_Request {
  invite_code?: string;
}

export interface CChatRoom_GetInviteLinkInfo_Response {
  steamid_sender?: Long;
  time_expires?: number;
  chat_id?: Long;
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
  user_chat_group_state?: CUserChatRoomGroupState;
  time_kick_expire?: number;
  banned?: boolean;
}

export interface CChatRoom_GetInviteInfo_Request {
  steamid_invitee?: Long;
  chat_group_id?: Long;
  chat_id?: Long;
  invite_code?: string;
}

export interface CChatRoom_GetInviteInfo_Response {
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
  time_kick_expire?: number;
  banned?: boolean;
}

export interface CChatRoom_GetInviteLinksForGroup_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetInviteLinksForGroup_Response {
  invite_links?: CChatRoom_GetInviteLinksForGroup_Response.LinkInfo[];
}

export namespace CChatRoom_GetInviteLinksForGroup_Response {
  export interface LinkInfo {
    invite_code?: string;
    steamid_creator?: Long;
    time_expires?: number;
    chat_id?: Long;
  }
}

export interface CChatRoom_GetBanList_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetBanList_Response {
  bans?: CChatRoom_GetBanList_Response.BanInfo[];
}

export namespace CChatRoom_GetBanList_Response {
  export interface BanInfo {
    accountid?: number;
    accountid_actor?: number;
    time_banned?: number;
    ban_reason?: string;
  }
}

export interface CChatRoom_GetInviteList_Request {
  chat_group_id?: Long;
}

export interface CChatRoomGroupInvite {
  accountid?: number;
  accountid_actor?: number;
  time_invited?: number;
}

export interface CChatRoom_GetInviteList_Response {
  invites?: CChatRoomGroupInvite[];
}

export interface CChatRoom_DeleteInviteLink_Request {
  chat_group_id?: Long;
  invite_code?: string;
}

export type CChatRoom_DeleteInviteLink_Response = Record<string, never>;

export interface CChatRoom_SetSessionActiveChatRoomGroups_Request {
  chat_group_ids?: Long[];
  chat_groups_data_requested?: Long[];
  virtualize_members_threshold?: number;
}

export interface CChatRoom_SetSessionActiveChatRoomGroups_Response {
  chat_states?: CChatRoomGroupState[];
  virtualize_members_chat_group_ids?: Long[];
}

export interface CChatRoom_SetUserChatGroupPreferences_Request {
  chat_group_id?: Long;
  chat_group_preferences?: CChatRoom_SetUserChatGroupPreferences_Request.ChatGroupPreferences;
  chat_room_preferences?: CChatRoom_SetUserChatGroupPreferences_Request.ChatRoomPreferences[];
}

export namespace CChatRoom_SetUserChatGroupPreferences_Request {
  export interface ChatGroupPreferences {
    desktop_notification_level?: EChatRoomNotificationLevel;
    mobile_notification_level?: EChatRoomNotificationLevel;
    unread_indicator_muted?: boolean;
    direct_messages_allowed?: boolean;
  }

  export interface ChatRoomPreferences {
    chat_id?: Long;
    desktop_notification_level?: EChatRoomNotificationLevel;
    mobile_notification_level?: EChatRoomNotificationLevel;
    unread_indicator_muted?: boolean;
  }
}

export type CChatRoom_SetUserChatGroupPreferences_Response = Record<string, never>;

export interface CChatRoom_DeleteChatMessages_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  messages?: CChatRoom_DeleteChatMessages_Request.Message[];
}

export namespace CChatRoom_DeleteChatMessages_Request {
  export interface Message {
    server_timestamp?: number;
    ordinal?: number;
  }
}

export type CChatRoom_DeleteChatMessages_Response = Record<string, never>;

export interface CChatRoom_UpdateMemberListView_Notification {
  chat_group_id?: Long;
  view_id?: Long;
  start?: number;
  end?: number;
  client_changenumber?: number;
  delete_view?: boolean;
  persona_subscribe_accountids?: number[];
  persona_unsubscribe_accountids?: number[];
}

export interface CChatRoom_SearchMembers_Request {
  chat_group_id?: Long;
  search_id?: Long;
  search_text?: string;
  max_results?: number;
}

export interface CChatRoom_SearchMembers_Response {
  matching_members?: CChatRoom_SearchMembers_Response.MemberMatch[];
  status_flags?: number;
}

export namespace CChatRoom_SearchMembers_Response {
  export interface MemberMatch {
    accountid?: number;
    persona?: CMsgClientPersonaState.Friend;
  }
}

export interface CChatRoom_UpdateMessageReaction_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reaction_type?: EChatRoomMessageReactionType;
  reaction?: string;
  is_add?: boolean;
}

export interface CChatRoom_UpdateMessageReaction_Response {
  num_reactors?: number;
}

export interface CChatRoom_GetMessageReactionReactors_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reaction_type?: EChatRoomMessageReactionType;
  reaction?: string;
  limit?: number;
}

export interface CChatRoom_GetMessageReactionReactors_Response {
  reactors?: number[];
}

export interface CChatRoom_ReportMessage_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  steamid_from?: Long;
  timestamp?: number;
  ordinal?: number;
  report_reason?: EContentReportReason;
  report_text?: string;
  language?: string;
  subject_type?: EContentReportSubjectType;
}

export type CChatRoom_ReportMessage_Response = Record<string, never>;

export interface CChatRoom_ResolveReport_Request {
  subject_group_id?: Long;
  subject_id?: Long;
  resolution?: EContentReportResolution;
  reason?: EContentReportReason;
  subject_type?: EContentReportSubjectType;
  chat_group_id?: Long;
  kick_expiration_time?: number;
  skip_lock?: boolean;
}

export type CChatRoom_ResolveReport_Response = Record<string, never>;

export interface CClanChatRooms_GetClanChatRoomInfo_Request {
  steamid?: Long;
  autocreate?: boolean;
}

export interface CClanChatRooms_GetClanChatRoomInfo_Response {
  chat_group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
}

export interface CClanChatRooms_SetClanChatRoomPrivate_Request {
  steamid?: Long;
  chat_room_private?: boolean;
}

export interface CClanChatRooms_SetClanChatRoomPrivate_Response {
  chat_room_private?: boolean;
}

export interface CChatMentions {
  mention_all?: boolean;
  mention_here?: boolean;
  mention_accountids?: number[];
}

export interface CChatRoom_IncomingChatMessage_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  steamid_sender?: Long;
  message?: string;
  timestamp?: number;
  mentions?: CChatMentions;
  ordinal?: number;
  server_message?: ServerMessage;
  message_no_bbcode?: string;
  chat_name?: string;
  notification_key?: string;
}

export interface CChatRoom_ChatMessageModified_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  messages?: CChatRoom_ChatMessageModified_Notification.ChatMessage[];
}

export namespace CChatRoom_ChatMessageModified_Notification {
  export interface ChatMessage {
    server_timestamp?: number;
    ordinal?: number;
    deleted?: boolean;
  }
}

export interface CChatRoom_MemberStateChange_Notification {
  chat_group_id?: Long;
  member?: CChatRoomMember;
  change?: EChatRoomMemberStateChange;
}

export interface CChatRoom_ChatRoomHeaderState_Notification {
  header_state?: CChatRoomGroupHeaderState;
}

export interface CChatRoom_ChatRoomGroupRoomsChange_Notification {
  chat_group_id?: Long;
  default_chat_id?: Long;
  chat_rooms?: CChatRoomState[];
}

export interface CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification {
  chat_id?: Long;
  chat_group_id?: Long;
}

export interface ChatRoomClient_NotifyChatGroupUserStateChanged_Notification {
  chat_group_id?: Long;
  user_chat_group_state?: CUserChatRoomGroupState;
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
  user_action?: EChatRoomMemberStateChange;
}

export interface ChatRoomClient_NotifyChatRoomDisconnect_Notification {
  chat_group_ids?: Long[];
}

export interface CChatRoomMemberListView {
  start?: number;
  end?: number;
  total_count?: number;
  client_changenumber?: number;
  server_changenumber?: number;
}

export interface CChatRoomMemberSummaryCounts {
  ingame?: number;
  online?: number;
  offline?: number;
}

export interface CChatRoomClient_MemberListViewUpdated_Notification {
  chat_group_id?: Long;
  view_id?: Long;
  view?: CChatRoomMemberListView;
  members?: CChatRoomClient_MemberListViewUpdated_Notification.MemberListViewEntry[];
  status_flags?: number;
  member_summary?: CChatRoomMemberSummaryCounts;
  subscribed_personas?: CMsgClientPersonaState.Friend[];
}

export namespace CChatRoomClient_MemberListViewUpdated_Notification {
  export interface MemberListViewEntry {
    rank?: number;
    accountid?: number;
    persona?: CMsgClientPersonaState.Friend;
  }
}

export interface CChatRoom_MessageReaction_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reactor?: Long;
  reaction_type?: EChatRoomMessageReactionType;
  reaction?: string;
  is_add?: boolean;
}

export interface CChatUsability_ClientUsabilityMetrics_Notification {
  metrics_run_id?: number;
  client_build?: number;
  metrics_version?: number;
  in_web?: boolean;
  settings?: CChatUsability_ClientUsabilityMetrics_Notification.Settings;
  voice_settings?: CChatUsability_ClientUsabilityMetrics_Notification.VoiceSettings;
  ui_state?: CChatUsability_ClientUsabilityMetrics_Notification.UIState;
  metrics?: CChatUsability_ClientUsabilityMetrics_Notification.Metrics;
}

export namespace CChatUsability_ClientUsabilityMetrics_Notification {
  export interface Settings {
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

  export interface VoiceSettings {
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

  export interface UIState {
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
    group_chat_left_col_collapsed?: number;
    group_chat_right_col_collapsed?: number;
    in_one_on_one_voice_chat?: boolean;
    in_group_voice_chat?: boolean;
  }

  export namespace UIState {
    export interface CategoryCollapseState {
      in_game_collapsed?: boolean;
      online_collapsed?: boolean;
      offline_collapsed?: boolean;
      game_groups_collapsed?: number;
      categories_collapsed?: number;
    }
  }
  export interface Metrics {
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
}

export interface CChatUsability_RequestClientUsabilityMetrics_Notification {
  metrics_run_id?: number;
}

export abstract class ChatService {
  abstract RequestFriendPersonaStates(
    request: CChat_RequestFriendPersonaStates_Request,
  ): Promise<CChat_RequestFriendPersonaStates_Response>;
}

export abstract class ChatRoomService {
  abstract CreateChatRoomGroup(
    request: CChatRoom_CreateChatRoomGroup_Request,
  ): Promise<CChatRoom_CreateChatRoomGroup_Response>;
  abstract SaveChatRoomGroup(
    request: CChatRoom_SaveChatRoomGroup_Request,
  ): Promise<CChatRoom_SaveChatRoomGroup_Response>;
  abstract RenameChatRoomGroup(
    request: CChatRoom_RenameChatRoomGroup_Request,
  ): Promise<CChatRoom_RenameChatRoomGroup_Response>;
  abstract SetChatRoomGroupTagline(
    request: CChatRoom_SetChatRoomGroupTagline_Request,
  ): Promise<CChatRoom_SetChatRoomGroupTagline_Response>;
  abstract SetChatRoomGroupAvatar(
    request: CChatRoom_SetChatRoomGroupAvatar_Request,
  ): Promise<CChatRoom_SetChatRoomGroupAvatar_Response>;
  abstract SetChatRoomGroupWatchingBroadcast(
    request: CChatRoom_SetChatRoomGroupWatchingBroadcast_Request,
  ): Promise<CChatRoom_SetChatRoomGroupWatchingBroadcast_Response>;
  abstract JoinMiniGameForChatRoomGroup(
    request: CChatRoom_JoinMiniGameForChatRoomGroup_Request,
  ): Promise<CChatRoom_JoinMiniGameForChatRoomGroup_Response>;
  abstract EndMiniGameForChatRoomGroup(
    request: CChatRoom_EndMiniGameForChatRoomGroup_Request,
  ): Promise<CChatRoom_EndMiniGameForChatRoomGroup_Response>;
  abstract MuteUserInGroup(
    request: CChatRoom_MuteUser_Request,
  ): Promise<CChatRoom_MuteUser_Response>;
  abstract KickUserFromGroup(
    request: CChatRoom_KickUser_Request,
  ): Promise<CChatRoom_KickUser_Response>;
  abstract SetUserBanState(
    request: CChatRoom_SetUserBanState_Request,
  ): Promise<CChatRoom_SetUserBanState_Response>;
  abstract RevokeInviteToGroup(
    request: CChatRoom_RevokeInvite_Request,
  ): Promise<CChatRoom_RevokeInvite_Response>;
  abstract CreateRole(
    request: CChatRoom_CreateRole_Request,
  ): Promise<CChatRoom_CreateRole_Response>;
  abstract GetRoles(request: CChatRoom_GetRoles_Request): Promise<CChatRoom_GetRoles_Response>;
  abstract RenameRole(
    request: CChatRoom_RenameRole_Request,
  ): Promise<CChatRoom_RenameRole_Response>;
  abstract ReorderRole(
    request: CChatRoom_ReorderRole_Request,
  ): Promise<CChatRoom_ReorderRole_Response>;
  abstract DeleteRole(
    request: CChatRoom_DeleteRole_Request,
  ): Promise<CChatRoom_DeleteRole_Response>;
  abstract GetRoleActions(
    request: CChatRoom_GetRoleActions_Request,
  ): Promise<CChatRoom_GetRoleActions_Response>;
  abstract ReplaceRoleActions(
    request: CChatRoom_ReplaceRoleActions_Request,
  ): Promise<CChatRoom_ReplaceRoleActions_Response>;
  abstract AddRoleToUser(
    request: CChatRoom_AddRoleToUser_Request,
  ): Promise<CChatRoom_AddRoleToUser_Response>;
  abstract GetRolesForUser(
    request: CChatRoom_GetRolesForUser_Request,
  ): Promise<CChatRoom_GetRolesForUser_Response>;
  abstract DeleteRoleFromUser(
    request: CChatRoom_DeleteRoleFromUser_Request,
  ): Promise<CChatRoom_DeleteRoleFromUser_Response>;
  abstract JoinChatRoomGroup(
    request: CChatRoom_JoinChatRoomGroup_Request,
  ): Promise<CChatRoom_JoinChatRoomGroup_Response>;
  abstract InviteFriendToChatRoomGroup(
    request: CChatRoom_InviteFriendToChatRoomGroup_Request,
  ): Promise<CChatRoom_InviteFriendToChatRoomGroup_Response>;
  abstract LeaveChatRoomGroup(
    request: CChatRoom_LeaveChatRoomGroup_Request,
  ): Promise<CChatRoom_LeaveChatRoomGroup_Response>;
  abstract CreateChatRoom(
    request: CChatRoom_CreateChatRoom_Request,
  ): Promise<CChatRoom_CreateChatRoom_Response>;
  abstract DeleteChatRoom(
    request: CChatRoom_DeleteChatRoom_Request,
  ): Promise<CChatRoom_DeleteChatRoom_Response>;
  abstract RenameChatRoom(
    request: CChatRoom_RenameChatRoom_Request,
  ): Promise<CChatRoom_RenameChatRoom_Response>;
  abstract ReorderChatRoom(
    request: CChatRoom_ReorderChatRoom_Request,
  ): Promise<CChatRoom_ReorderChatRoom_Response>;
  abstract SendChatMessage(
    request: CChatRoom_SendChatMessage_Request,
  ): Promise<CChatRoom_SendChatMessage_Response>;
  abstract JoinVoiceChat(
    request: CChatRoom_JoinVoiceChat_Request,
  ): Promise<CChatRoom_JoinVoiceChat_Response>;
  abstract LeaveVoiceChat(
    request: CChatRoom_LeaveVoiceChat_Request,
  ): Promise<CChatRoom_LeaveVoiceChat_Response>;
  abstract GetMessageHistory(
    request: CChatRoom_GetMessageHistory_Request,
  ): Promise<CChatRoom_GetMessageHistory_Response>;
  abstract GetMyChatRoomGroups(
    request: CChatRoom_GetMyChatRoomGroups_Request,
  ): Promise<CChatRoom_GetMyChatRoomGroups_Response>;
  abstract GetChatRoomGroupState(
    request: CChatRoom_GetChatRoomGroupState_Request,
  ): Promise<CChatRoom_GetChatRoomGroupState_Response>;
  abstract SetAppChatRoomGroupForceActive(
    request: CChatRoom_SetAppChatRoomGroupForceActive_Request,
  ): Promise<CChatRoom_SetAppChatRoomGroupForceActive_Response>;
  abstract SetAppChatRoomGroupStopForceActive(
    request: CChatRoom_SetAppChatRoomGroupStopForceActive_Notification,
  ): Promise<void>;
  abstract AckChatMessage(request: CChatRoom_AckChatMessage_Notification): Promise<void>;
  abstract CreateInviteLink(
    request: CChatRoom_CreateInviteLink_Request,
  ): Promise<CChatRoom_CreateInviteLink_Response>;
  abstract GetInviteLinkInfo(
    request: CChatRoom_GetInviteLinkInfo_Request,
  ): Promise<CChatRoom_GetInviteLinkInfo_Response>;
  abstract GetInviteInfo(
    request: CChatRoom_GetInviteInfo_Request,
  ): Promise<CChatRoom_GetInviteInfo_Response>;
  abstract GetInviteLinksForGroup(
    request: CChatRoom_GetInviteLinksForGroup_Request,
  ): Promise<CChatRoom_GetInviteLinksForGroup_Response>;
  abstract GetBanList(
    request: CChatRoom_GetBanList_Request,
  ): Promise<CChatRoom_GetBanList_Response>;
  abstract GetInviteList(
    request: CChatRoom_GetInviteList_Request,
  ): Promise<CChatRoom_GetInviteList_Response>;
  abstract DeleteInviteLink(
    request: CChatRoom_DeleteInviteLink_Request,
  ): Promise<CChatRoom_DeleteInviteLink_Response>;
  abstract SetSessionActiveChatRoomGroups(
    request: CChatRoom_SetSessionActiveChatRoomGroups_Request,
  ): Promise<CChatRoom_SetSessionActiveChatRoomGroups_Response>;
  abstract SetUserChatGroupPreferences(
    request: CChatRoom_SetUserChatGroupPreferences_Request,
  ): Promise<CChatRoom_SetUserChatGroupPreferences_Response>;
  abstract DeleteChatMessages(
    request: CChatRoom_DeleteChatMessages_Request,
  ): Promise<CChatRoom_DeleteChatMessages_Response>;
  abstract UpdateMemberListView(
    request: CChatRoom_UpdateMemberListView_Notification,
  ): Promise<void>;
  abstract SearchMembers(
    request: CChatRoom_SearchMembers_Request,
  ): Promise<CChatRoom_SearchMembers_Response>;
  abstract UpdateMessageReaction(
    request: CChatRoom_UpdateMessageReaction_Request,
  ): Promise<CChatRoom_UpdateMessageReaction_Response>;
  abstract GetMessageReactionReactors(
    request: CChatRoom_GetMessageReactionReactors_Request,
  ): Promise<CChatRoom_GetMessageReactionReactors_Response>;
  abstract ReportMessage(
    request: CChatRoom_ReportMessage_Request,
  ): Promise<CChatRoom_ReportMessage_Response>;
  abstract ResolveReport(
    request: CChatRoom_ResolveReport_Request,
  ): Promise<CChatRoom_ResolveReport_Response>;
}

export abstract class ClanChatRoomsService {
  abstract GetClanChatRoomInfo(
    request: CClanChatRooms_GetClanChatRoomInfo_Request,
  ): Promise<CClanChatRooms_GetClanChatRoomInfo_Response>;
  abstract SetClanChatRoomPrivate(
    request: CClanChatRooms_SetClanChatRoomPrivate_Request,
  ): Promise<CClanChatRooms_SetClanChatRoomPrivate_Response>;
}

export abstract class ChatRoomClientService {
  abstract NotifyIncomingChatMessage(
    request: CChatRoom_IncomingChatMessage_Notification,
  ): Promise<void>;
  abstract NotifyChatMessageModified(
    request: CChatRoom_ChatMessageModified_Notification,
  ): Promise<void>;
  abstract NotifyMemberStateChange(
    request: CChatRoom_MemberStateChange_Notification,
  ): Promise<void>;
  abstract NotifyChatRoomHeaderStateChange(
    request: CChatRoom_ChatRoomHeaderState_Notification,
  ): Promise<void>;
  abstract NotifyChatRoomGroupRoomsChange(
    request: CChatRoom_ChatRoomGroupRoomsChange_Notification,
  ): Promise<void>;
  abstract NotifyShouldRejoinChatRoomVoiceChat(
    request: CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification,
  ): Promise<void>;
  abstract NotifyChatGroupUserStateChanged(
    request: ChatRoomClient_NotifyChatGroupUserStateChanged_Notification,
  ): Promise<void>;
  abstract NotifyAckChatMessageEcho(request: CChatRoom_AckChatMessage_Notification): Promise<void>;
  abstract NotifyChatRoomDisconnect(
    request: ChatRoomClient_NotifyChatRoomDisconnect_Notification,
  ): Promise<void>;
  abstract NotifyMemberListViewUpdated(
    request: CChatRoomClient_MemberListViewUpdated_Notification,
  ): Promise<void>;
  abstract NotifyMessageReaction(request: CChatRoom_MessageReaction_Notification): Promise<void>;
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
