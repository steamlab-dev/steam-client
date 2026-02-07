/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CChatPartyBeacon,
  CChatRoleActions,
  CChatRoom_GetChatRoomGroupSummary_Response,
  CChatRoomState,
  CMsgClientPersonaState_Friend,
} from "./common";

export interface CChatMentions {
  mention_all?: boolean;
  mention_here?: boolean;
  mention_accountids?: number[];
}

export interface CChatRole {
  role_id?: Long;
  name?: string;
  ordinal?: number;
}

export interface CChatRoom_AckChatMessage_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  timestamp?: number;
}

export interface CChatRoom_AddRoleToUser_Request {
  chat_group_id?: Long;
  role_id?: Long;
  steamid?: Long;
}

export type CChatRoom_AddRoleToUser_Response = Record<string, never>;

export interface CChatRoom_ChatMessageModified_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  messages?: CChatRoom_ChatMessageModified_Notification_ChatMessage[];
}

export interface CChatRoom_ChatMessageModified_Notification_ChatMessage {
  server_timestamp?: number;
  ordinal?: number;
  deleted?: boolean;
}

export interface CChatRoom_ChatRoomGroupRoomsChange_Notification {
  chat_group_id?: Long;
  default_chat_id?: Long;
  chat_rooms?: CChatRoomState[];
}

export interface CChatRoom_ChatRoomHeaderState_Notification {
  header_state?: CChatRoomGroupHeaderState;
}

export interface CChatRoom_CreateChatRoom_Request {
  chat_group_id?: Long;
  name?: string;
  allow_voice?: boolean;
}

export interface CChatRoom_CreateChatRoom_Response {
  chat_room?: CChatRoomState;
}

export interface CChatRoom_CreateChatRoomGroup_Request {
  steamid_partner?: Long;
  steamid_invited?: Long;
  name?: string;
  steamid_invitees?: Long[];
  watching_broadcast_accountid?: number;
  watching_broadcast_channel_id?: Long;
}

export interface CChatRoom_CreateChatRoomGroup_Response {
  chat_group_id?: Long;
  state?: CChatRoomGroupState;
  user_chat_state?: CUserChatRoomGroupState;
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

export interface CChatRoom_CreateRole_Request {
  chat_group_id?: Long;
  name?: string;
}

export interface CChatRoom_CreateRole_Response {
  actions?: CChatRoleActions;
}

export interface CChatRoom_DeleteChatMessages_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  messages?: CChatRoom_DeleteChatMessages_Request_Message[];
}

export interface CChatRoom_DeleteChatMessages_Request_Message {
  server_timestamp?: number;
  ordinal?: number;
}

export type CChatRoom_DeleteChatMessages_Response = Record<string, never>;

export interface CChatRoom_DeleteChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export type CChatRoom_DeleteChatRoom_Response = Record<string, never>;

export interface CChatRoom_DeleteInviteLink_Request {
  chat_group_id?: Long;
  invite_code?: string;
}

export type CChatRoom_DeleteInviteLink_Response = Record<string, never>;

export interface CChatRoom_DeleteRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
}

export type CChatRoom_DeleteRole_Response = Record<string, never>;

export interface CChatRoom_DeleteRoleFromUser_Request {
  chat_group_id?: Long;
  role_id?: Long;
  steamid?: Long;
}

export type CChatRoom_DeleteRoleFromUser_Response = Record<string, never>;

export interface CChatRoom_EndMiniGameForChatRoomGroup_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  minigame_id?: Long;
}

export type CChatRoom_EndMiniGameForChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_GetBanList_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetBanList_Response {
  bans?: CChatRoom_GetBanList_Response_BanInfo[];
}

export interface CChatRoom_GetBanList_Response_BanInfo {
  accountid?: number;
  accountid_actor?: number;
  time_banned?: number;
  ban_reason?: string;
}

export interface CChatRoom_GetChatRoomGroupState_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetChatRoomGroupState_Response {
  state?: CChatRoomGroupState;
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

export interface CChatRoom_GetInviteLinksForGroup_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetInviteLinksForGroup_Response {
  invite_links?: CChatRoom_GetInviteLinksForGroup_Response_LinkInfo[];
}

export interface CChatRoom_GetInviteLinksForGroup_Response_LinkInfo {
  invite_code?: string;
  steamid_creator?: Long;
  time_expires?: number;
  chat_id?: Long;
}

export interface CChatRoom_GetInviteList_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetInviteList_Response {
  invites?: CChatRoomGroupInvite[];
}

export interface CChatRoom_GetMessageHistory_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  last_time?: number;
  last_ordinal?: number;
  start_time?: number;
  start_ordinal?: number;
  max_count?: number;
}

export interface CChatRoom_GetMessageHistory_Response {
  messages?: CChatRoom_GetMessageHistory_Response_ChatMessage[];
  more_available?: boolean;
}

export interface CChatRoom_GetMessageHistory_Response_ChatMessage {
  sender?: number;
  server_timestamp?: number;
  message?: string;
  ordinal?: number;
  server_message?: ServerMessage;
  deleted?: boolean;
  reactions?: CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction[];
}

export interface CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction {
  reaction_type?: number;
  reaction?: string;
  num_reactors?: number;
  has_user_reacted?: boolean;
}

export interface CChatRoom_GetMessageReactionReactors_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reaction_type?: number;
  reaction?: string;
  limit?: number;
}

export interface CChatRoom_GetMessageReactionReactors_Response {
  reactors?: number[];
}

export type CChatRoom_GetMyChatRoomGroups_Request = Record<string, never>;

export interface CChatRoom_GetMyChatRoomGroups_Response {
  chat_room_groups?: CChatRoomSummaryPair[];
}

export interface CChatRoom_GetRoleActions_Request {
  chat_group_id?: Long;
  role_id?: Long;
}

export interface CChatRoom_GetRoleActions_Response {
  actions?: CChatRoleActions[];
}

export interface CChatRoom_GetRoles_Request {
  chat_group_id?: Long;
}

export interface CChatRoom_GetRoles_Response {
  roles?: CChatRole[];
}

export interface CChatRoom_GetRolesForUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
}

export interface CChatRoom_GetRolesForUser_Response {
  role_ids?: Long[];
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

export interface CChatRoom_InviteFriendToChatRoomGroup_Request {
  chat_group_id?: Long;
  steamid?: Long;
  chat_id?: Long;
  skip_friendsui_check?: boolean;
}

export type CChatRoom_InviteFriendToChatRoomGroup_Response = Record<string, never>;

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

export interface CChatRoom_JoinMiniGameForChatRoomGroup_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export interface CChatRoom_JoinMiniGameForChatRoomGroup_Response {
  minigame_id?: Long;
}

export interface CChatRoom_JoinVoiceChat_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export interface CChatRoom_JoinVoiceChat_Response {
  voice_chatid?: Long;
}

export interface CChatRoom_KickUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
  expiration?: number;
}

export type CChatRoom_KickUser_Response = Record<string, never>;

export interface CChatRoom_LeaveChatRoomGroup_Request {
  chat_group_id?: Long;
}

export type CChatRoom_LeaveChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_LeaveVoiceChat_Request {
  chat_group_id?: Long;
  chat_id?: Long;
}

export type CChatRoom_LeaveVoiceChat_Response = Record<string, never>;

export interface CChatRoom_MemberStateChange_Notification {
  chat_group_id?: Long;
  member?: CChatRoomMember;
  change?: number;
}

export interface CChatRoom_MessageReaction_Notification {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reactor?: Long;
  reaction_type?: number;
  reaction?: string;
  is_add?: boolean;
}

export interface CChatRoom_MuteUser_Request {
  chat_group_id?: Long;
  steamid?: Long;
  expiration?: number;
}

export type CChatRoom_MuteUser_Response = Record<string, never>;

export interface CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification {
  chat_id?: Long;
  chat_group_id?: Long;
}

export interface CChatRoom_RenameChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  name?: string;
}

export type CChatRoom_RenameChatRoom_Response = Record<string, never>;

export interface CChatRoom_RenameChatRoomGroup_Request {
  chat_group_id?: Long;
  name?: string;
}

export interface CChatRoom_RenameChatRoomGroup_Response {
  name?: string;
}

export interface CChatRoom_RenameRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
  name?: string;
}

export type CChatRoom_RenameRole_Response = Record<string, never>;

export interface CChatRoom_ReorderChatRoom_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  move_after_chat_id?: Long;
}

export type CChatRoom_ReorderChatRoom_Response = Record<string, never>;

export interface CChatRoom_ReorderRole_Request {
  chat_group_id?: Long;
  role_id?: Long;
  ordinal?: number;
}

export type CChatRoom_ReorderRole_Response = Record<string, never>;

export interface CChatRoom_ReplaceRoleActions_Request {
  chat_group_id?: Long;
  role_id?: Long;
  actions?: CChatRoleActions;
}

export type CChatRoom_ReplaceRoleActions_Response = Record<string, never>;

export interface CChatRoom_ReportMessage_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  steamid_from?: Long;
  timestamp?: number;
  ordinal?: number;
  report_reason?: number;
  report_text?: string;
  language?: string;
  subject_type?: number;
}

export type CChatRoom_ReportMessage_Response = Record<string, never>;

export interface CChatRoom_ResolveReport_Request {
  subject_group_id?: Long;
  subject_id?: Long;
  resolution?: number;
  reason?: number;
  subject_type?: number;
  chat_group_id?: Long;
  kick_expiration_time?: number;
  skip_lock?: boolean;
}

export type CChatRoom_ResolveReport_Response = Record<string, never>;

export interface CChatRoom_RevokeInvite_Request {
  chat_group_id?: Long;
  steamid?: Long;
}

export type CChatRoom_RevokeInvite_Response = Record<string, never>;

export interface CChatRoom_SaveChatRoomGroup_Request {
  chat_group_id?: Long;
  name?: string;
}

export type CChatRoom_SaveChatRoomGroup_Response = Record<string, never>;

export interface CChatRoom_SearchMembers_Request {
  chat_group_id?: Long;
  search_id?: Long;
  search_text?: string;
  max_results?: number;
}

export interface CChatRoom_SearchMembers_Response {
  matching_members?: CChatRoom_SearchMembers_Response_MemberMatch[];
  status_flags?: number;
}

export interface CChatRoom_SearchMembers_Response_MemberMatch {
  accountid?: number;
  persona?: CMsgClientPersonaState_Friend;
}

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

export interface CChatRoom_SetChatRoomGroupAvatar_Request {
  chat_group_id?: Long;
  avatar_sha?: Buffer;
}

export type CChatRoom_SetChatRoomGroupAvatar_Response = Record<string, never>;

export interface CChatRoom_SetChatRoomGroupTagline_Request {
  chat_group_id?: Long;
  tagline?: string;
}

export type CChatRoom_SetChatRoomGroupTagline_Response = Record<string, never>;

export interface CChatRoom_SetChatRoomGroupWatchingBroadcast_Request {
  chat_group_id?: Long;
  watching_broadcast_accountid?: number;
  watching_broadcast_channel_id?: Long;
}

export type CChatRoom_SetChatRoomGroupWatchingBroadcast_Response = Record<string, never>;

export interface CChatRoom_SetSessionActiveChatRoomGroups_Request {
  chat_group_ids?: Long[];
  chat_groups_data_requested?: Long[];
  virtualize_members_threshold?: number;
}

export interface CChatRoom_SetSessionActiveChatRoomGroups_Response {
  chat_states?: CChatRoomGroupState[];
  virtualize_members_chat_group_ids?: Long[];
}

export interface CChatRoom_SetUserBanState_Request {
  chat_group_id?: Long;
  steamid?: Long;
  ban_state?: boolean;
}

export type CChatRoom_SetUserBanState_Response = Record<string, never>;

export interface CChatRoom_SetUserChatGroupPreferences_Request {
  chat_group_id?: Long;
  chat_group_preferences?: CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences;
  chat_room_preferences?: CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences[];
}

export interface CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences {
  desktop_notification_level?: number;
  mobile_notification_level?: number;
  unread_indicator_muted?: boolean;
  direct_messages_allowed?: boolean;
}

export interface CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences {
  chat_id?: Long;
  desktop_notification_level?: number;
  mobile_notification_level?: number;
  unread_indicator_muted?: boolean;
}

export type CChatRoom_SetUserChatGroupPreferences_Response = Record<string, never>;

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

export interface CChatRoom_UpdateMessageReaction_Request {
  chat_group_id?: Long;
  chat_id?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reaction_type?: number;
  reaction?: string;
  is_add?: boolean;
}

export interface CChatRoom_UpdateMessageReaction_Response {
  num_reactors?: number;
}

export interface CChatRoomClient_MemberListViewUpdated_Notification {
  chat_group_id?: Long;
  view_id?: Long;
  view?: CChatRoomMemberListView;
  members?: CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry[];
  status_flags?: number;
  member_summary?: CChatRoomMemberSummaryCounts;
  subscribed_personas?: CMsgClientPersonaState_Friend[];
}

export interface CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry {
  rank?: number;
  accountid?: number;
  persona?: CMsgClientPersonaState_Friend;
}

export interface CChatRoomGroupHeaderState {
  chat_group_id?: Long;
  chat_name?: string;
  clanid?: number;
  accountid_owner?: number;
  tagline?: string;
  avatar_sha?: Buffer;
  default_role_id?: Long;
  roles?: CChatRole[];
  role_actions?: CChatRoleActions[];
  watching_broadcast_accountid?: number;
  appid?: number;
  party_beacons?: CChatPartyBeacon[];
  watching_broadcast_channel_id?: Long;
  active_minigame_id?: Long;
  avatar_ugc_url?: string;
  disabled?: boolean;
}

export interface CChatRoomGroupInvite {
  accountid?: number;
  accountid_actor?: number;
  time_invited?: number;
}

export interface CChatRoomGroupState {
  header_state?: CChatRoomGroupHeaderState;
  members?: CChatRoomMember[];
  default_chat_id?: Long;
  chat_rooms?: CChatRoomState[];
  kicked?: CChatRoomMember[];
}

export interface CChatRoomMember {
  accountid?: number;
  state?: number;
  rank?: number;
  time_kick_expire?: number;
  role_ids?: Long[];
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

export interface CChatRoomSummaryPair {
  user_chat_group_state?: CUserChatRoomGroupState;
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
}

export interface ChatRoomClient_NotifyChatGroupUserStateChanged_Notification {
  chat_group_id?: Long;
  user_chat_group_state?: CUserChatRoomGroupState;
  group_summary?: CChatRoom_GetChatRoomGroupSummary_Response;
  user_action?: number;
}

export interface ChatRoomClient_NotifyChatRoomDisconnect_Notification {
  chat_group_ids?: Long[];
}

export interface CUserChatRoomGroupState {
  chat_group_id?: Long;
  time_joined?: number;
  user_chat_room_state?: CUserChatRoomState[];
  desktop_notification_level?: number;
  mobile_notification_level?: number;
  time_last_group_ack?: number;
  unread_indicator_muted?: boolean;
  direct_messages_allowed?: boolean;
}

export interface CUserChatRoomState {
  chat_id?: Long;
  time_joined?: number;
  time_last_ack?: number;
  desktop_notification_level?: number;
  mobile_notification_level?: number;
  time_last_mention?: number;
  unread_indicator_muted?: boolean;
  time_first_unread?: number;
}

export interface ServerMessage {
  message?: number;
  string_param?: string;
  accountid_param?: number;
}

export abstract class ChatRoomService {
  abstract AckChatMessage(request: CChatRoom_AckChatMessage_Notification): Promise<void>;
  abstract AddRoleToUser(
    request: CChatRoom_AddRoleToUser_Request,
  ): Promise<CChatRoom_AddRoleToUser_Response>;
  abstract CreateChatRoom(
    request: CChatRoom_CreateChatRoom_Request,
  ): Promise<CChatRoom_CreateChatRoom_Response>;
  abstract CreateChatRoomGroup(
    request: CChatRoom_CreateChatRoomGroup_Request,
  ): Promise<CChatRoom_CreateChatRoomGroup_Response>;
  abstract CreateInviteLink(
    request: CChatRoom_CreateInviteLink_Request,
  ): Promise<CChatRoom_CreateInviteLink_Response>;
  abstract CreateRole(
    request: CChatRoom_CreateRole_Request,
  ): Promise<CChatRoom_CreateRole_Response>;
  abstract DeleteChatMessages(
    request: CChatRoom_DeleteChatMessages_Request,
  ): Promise<CChatRoom_DeleteChatMessages_Response>;
  abstract DeleteChatRoom(
    request: CChatRoom_DeleteChatRoom_Request,
  ): Promise<CChatRoom_DeleteChatRoom_Response>;
  abstract DeleteInviteLink(
    request: CChatRoom_DeleteInviteLink_Request,
  ): Promise<CChatRoom_DeleteInviteLink_Response>;
  abstract DeleteRole(
    request: CChatRoom_DeleteRole_Request,
  ): Promise<CChatRoom_DeleteRole_Response>;
  abstract DeleteRoleFromUser(
    request: CChatRoom_DeleteRoleFromUser_Request,
  ): Promise<CChatRoom_DeleteRoleFromUser_Response>;
  abstract EndMiniGameForChatRoomGroup(
    request: CChatRoom_EndMiniGameForChatRoomGroup_Request,
  ): Promise<CChatRoom_EndMiniGameForChatRoomGroup_Response>;
  abstract GetBanList(
    request: CChatRoom_GetBanList_Request,
  ): Promise<CChatRoom_GetBanList_Response>;
  abstract GetChatRoomGroupState(
    request: CChatRoom_GetChatRoomGroupState_Request,
  ): Promise<CChatRoom_GetChatRoomGroupState_Response>;
  abstract GetInviteInfo(
    request: CChatRoom_GetInviteInfo_Request,
  ): Promise<CChatRoom_GetInviteInfo_Response>;
  abstract GetInviteLinkInfo(
    request: CChatRoom_GetInviteLinkInfo_Request,
  ): Promise<CChatRoom_GetInviteLinkInfo_Response>;
  abstract GetInviteLinksForGroup(
    request: CChatRoom_GetInviteLinksForGroup_Request,
  ): Promise<CChatRoom_GetInviteLinksForGroup_Response>;
  abstract GetInviteList(
    request: CChatRoom_GetInviteList_Request,
  ): Promise<CChatRoom_GetInviteList_Response>;
  abstract GetMessageHistory(
    request: CChatRoom_GetMessageHistory_Request,
  ): Promise<CChatRoom_GetMessageHistory_Response>;
  abstract GetMessageReactionReactors(
    request: CChatRoom_GetMessageReactionReactors_Request,
  ): Promise<CChatRoom_GetMessageReactionReactors_Response>;
  abstract GetMyChatRoomGroups(
    request: CChatRoom_GetMyChatRoomGroups_Request,
  ): Promise<CChatRoom_GetMyChatRoomGroups_Response>;
  abstract GetRoleActions(
    request: CChatRoom_GetRoleActions_Request,
  ): Promise<CChatRoom_GetRoleActions_Response>;
  abstract GetRoles(request: CChatRoom_GetRoles_Request): Promise<CChatRoom_GetRoles_Response>;
  abstract GetRolesForUser(
    request: CChatRoom_GetRolesForUser_Request,
  ): Promise<CChatRoom_GetRolesForUser_Response>;
  abstract InviteFriendToChatRoomGroup(
    request: CChatRoom_InviteFriendToChatRoomGroup_Request,
  ): Promise<CChatRoom_InviteFriendToChatRoomGroup_Response>;
  abstract JoinChatRoomGroup(
    request: CChatRoom_JoinChatRoomGroup_Request,
  ): Promise<CChatRoom_JoinChatRoomGroup_Response>;
  abstract JoinMiniGameForChatRoomGroup(
    request: CChatRoom_JoinMiniGameForChatRoomGroup_Request,
  ): Promise<CChatRoom_JoinMiniGameForChatRoomGroup_Response>;
  abstract JoinVoiceChat(
    request: CChatRoom_JoinVoiceChat_Request,
  ): Promise<CChatRoom_JoinVoiceChat_Response>;
  abstract KickUserFromGroup(
    request: CChatRoom_KickUser_Request,
  ): Promise<CChatRoom_KickUser_Response>;
  abstract LeaveChatRoomGroup(
    request: CChatRoom_LeaveChatRoomGroup_Request,
  ): Promise<CChatRoom_LeaveChatRoomGroup_Response>;
  abstract LeaveVoiceChat(
    request: CChatRoom_LeaveVoiceChat_Request,
  ): Promise<CChatRoom_LeaveVoiceChat_Response>;
  abstract MuteUserInGroup(
    request: CChatRoom_MuteUser_Request,
  ): Promise<CChatRoom_MuteUser_Response>;
  abstract RenameChatRoom(
    request: CChatRoom_RenameChatRoom_Request,
  ): Promise<CChatRoom_RenameChatRoom_Response>;
  abstract RenameChatRoomGroup(
    request: CChatRoom_RenameChatRoomGroup_Request,
  ): Promise<CChatRoom_RenameChatRoomGroup_Response>;
  abstract RenameRole(
    request: CChatRoom_RenameRole_Request,
  ): Promise<CChatRoom_RenameRole_Response>;
  abstract ReorderChatRoom(
    request: CChatRoom_ReorderChatRoom_Request,
  ): Promise<CChatRoom_ReorderChatRoom_Response>;
  abstract ReorderRole(
    request: CChatRoom_ReorderRole_Request,
  ): Promise<CChatRoom_ReorderRole_Response>;
  abstract ReplaceRoleActions(
    request: CChatRoom_ReplaceRoleActions_Request,
  ): Promise<CChatRoom_ReplaceRoleActions_Response>;
  abstract ReportMessage(
    request: CChatRoom_ReportMessage_Request,
  ): Promise<CChatRoom_ReportMessage_Response>;
  abstract ResolveReport(
    request: CChatRoom_ResolveReport_Request,
  ): Promise<CChatRoom_ResolveReport_Response>;
  abstract RevokeInviteToGroup(
    request: CChatRoom_RevokeInvite_Request,
  ): Promise<CChatRoom_RevokeInvite_Response>;
  abstract SaveChatRoomGroup(
    request: CChatRoom_SaveChatRoomGroup_Request,
  ): Promise<CChatRoom_SaveChatRoomGroup_Response>;
  abstract SearchMembers(
    request: CChatRoom_SearchMembers_Request,
  ): Promise<CChatRoom_SearchMembers_Response>;
  abstract SendChatMessage(
    request: CChatRoom_SendChatMessage_Request,
  ): Promise<CChatRoom_SendChatMessage_Response>;
  abstract SetAppChatRoomGroupForceActive(
    request: CChatRoom_SetAppChatRoomGroupForceActive_Request,
  ): Promise<CChatRoom_SetAppChatRoomGroupForceActive_Response>;
  abstract SetAppChatRoomGroupStopForceActive(
    request: CChatRoom_SetAppChatRoomGroupStopForceActive_Notification,
  ): Promise<void>;
  abstract SetChatRoomGroupAvatar(
    request: CChatRoom_SetChatRoomGroupAvatar_Request,
  ): Promise<CChatRoom_SetChatRoomGroupAvatar_Response>;
  abstract SetChatRoomGroupTagline(
    request: CChatRoom_SetChatRoomGroupTagline_Request,
  ): Promise<CChatRoom_SetChatRoomGroupTagline_Response>;
  abstract SetChatRoomGroupWatchingBroadcast(
    request: CChatRoom_SetChatRoomGroupWatchingBroadcast_Request,
  ): Promise<CChatRoom_SetChatRoomGroupWatchingBroadcast_Response>;
  abstract SetSessionActiveChatRoomGroups(
    request: CChatRoom_SetSessionActiveChatRoomGroups_Request,
  ): Promise<CChatRoom_SetSessionActiveChatRoomGroups_Response>;
  abstract SetUserBanState(
    request: CChatRoom_SetUserBanState_Request,
  ): Promise<CChatRoom_SetUserBanState_Response>;
  abstract SetUserChatGroupPreferences(
    request: CChatRoom_SetUserChatGroupPreferences_Request,
  ): Promise<CChatRoom_SetUserChatGroupPreferences_Response>;
  abstract UpdateMemberListView(
    request: CChatRoom_UpdateMemberListView_Notification,
  ): Promise<void>;
  abstract UpdateMessageReaction(
    request: CChatRoom_UpdateMessageReaction_Request,
  ): Promise<CChatRoom_UpdateMessageReaction_Response>;
}

export abstract class ChatRoomClientService {
  abstract NotifyAckChatMessageEcho(request: CChatRoom_AckChatMessage_Notification): Promise<void>;
  abstract NotifyChatGroupUserStateChanged(
    request: ChatRoomClient_NotifyChatGroupUserStateChanged_Notification,
  ): Promise<void>;
  abstract NotifyChatMessageModified(
    request: CChatRoom_ChatMessageModified_Notification,
  ): Promise<void>;
  abstract NotifyChatRoomDisconnect(
    request: ChatRoomClient_NotifyChatRoomDisconnect_Notification,
  ): Promise<void>;
  abstract NotifyChatRoomGroupRoomsChange(
    request: CChatRoom_ChatRoomGroupRoomsChange_Notification,
  ): Promise<void>;
  abstract NotifyChatRoomHeaderStateChange(
    request: CChatRoom_ChatRoomHeaderState_Notification,
  ): Promise<void>;
  abstract NotifyIncomingChatMessage(
    request: CChatRoom_IncomingChatMessage_Notification,
  ): Promise<void>;
  abstract NotifyMemberListViewUpdated(
    request: CChatRoomClient_MemberListViewUpdated_Notification,
  ): Promise<void>;
  abstract NotifyMemberStateChange(
    request: CChatRoom_MemberStateChange_Notification,
  ): Promise<void>;
  abstract NotifyMessageReaction(request: CChatRoom_MessageReaction_Notification): Promise<void>;
  abstract NotifyShouldRejoinChatRoomVoiceChat(
    request: CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification,
  ): Promise<void>;
}
