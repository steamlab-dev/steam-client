/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CFriendMessages_AckMessage_Notification {
  steamid_partner?: Long;
  timestamp?: number;
}

export interface CFriendMessages_DismissSessionNotice_Notification {
  steamid_friend?: Long;
  notice_type?: number;
}

export interface CFriendMessages_GetRecentMessages_Request {
  steamid1?: Long;
  steamid2?: Long;
  count?: number;
  most_recent_conversation?: boolean;
  rtime32_start_time?: number;
  bbcode_format?: boolean;
  start_ordinal?: number;
  time_last?: number;
  ordinal_last?: number;
}

export interface CFriendMessages_GetRecentMessages_Response {
  messages?: CFriendMessages_GetRecentMessages_Response_FriendMessage[];
  more_available?: boolean;
}

export interface CFriendMessages_GetRecentMessages_Response_FriendMessage {
  accountid?: number;
  timestamp?: number;
  message?: string;
  ordinal?: number;
  reactions?: CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction[];
}

export interface CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction {
  reaction_type?: number;
  reaction?: string;
  reactors?: number[];
}

export interface CFriendMessages_IncomingMessage_Notification {
  steamid_friend?: Long;
  chat_entry_type?: number;
  from_limited_account?: boolean;
  message?: string;
  rtime32_server_timestamp?: number;
  ordinal?: number;
  local_echo?: boolean;
  message_no_bbcode?: string;
  low_priority?: boolean;
}

export interface CFriendMessages_IsInFriendsUIBeta_Request {
  steamid?: Long;
}

export interface CFriendMessages_IsInFriendsUIBeta_Response {
  online_in_friendsui?: boolean;
  has_used_friendsui?: boolean;
}

export interface CFriendMessages_MessageReaction_Notification {
  steamid_friend?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reactor?: Long;
  reaction_type?: number;
  reaction?: string;
  is_add?: boolean;
}

export interface CFriendMessages_ReportMessage_Request {
  steamid_from?: Long;
  steamid_to?: Long;
  timestamp?: number;
  ordinal?: number;
  report_reason?: number;
  report_text?: string;
  language?: string;
}

export type CFriendMessages_ReportMessage_Response = Record<string, never>;

export interface CFriendMessages_ResolveReport_Request {
  steamid_from?: Long;
  steamid_to?: Long;
  subject_group_id?: Long;
  subject_id?: Long;
  resolution?: number;
  reason?: number;
  skip_lock?: boolean;
}

export type CFriendMessages_ResolveReport_Response = Record<string, never>;

export interface CFriendMessages_SendMessage_Request {
  steamid?: Long;
  chat_entry_type?: number;
  message?: string;
  contains_bbcode?: boolean;
  echo_to_sender?: boolean;
  low_priority?: boolean;
  client_message_id?: string;
}

export interface CFriendMessages_SendMessage_Response {
  modified_message?: string;
  server_timestamp?: number;
  ordinal?: number;
  message_without_bb_code?: string;
}

export interface CFriendMessages_SessionNotice_Notification {
  steamid_friend?: Long;
  notice_type?: number;
  active?: boolean;
}

export interface CFriendMessages_UpdateMessageReaction_Request {
  steamid?: Long;
  server_timestamp?: number;
  ordinal?: number;
  reaction_type?: number;
  reaction?: string;
  is_add?: boolean;
}

export interface CFriendMessages_UpdateMessageReaction_Response {
  reactors?: number[];
}

export interface CFriendsMessages_GetActiveMessageSessions_Request {
  lastmessage_since?: number;
  only_sessions_with_messages?: boolean;
}

export interface CFriendsMessages_GetActiveMessageSessions_Response {
  message_sessions?: CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession[];
  timestamp?: number;
}

export interface CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession {
  accountid_friend?: number;
  last_message?: number;
  last_view?: number;
  unread_message_count?: number;
  notices?: number[];
}

export abstract class FriendMessagesService {
  abstract AckMessage(request: CFriendMessages_AckMessage_Notification): Promise<void>;
  abstract DismissSessionNotice(
    request: CFriendMessages_DismissSessionNotice_Notification,
  ): Promise<void>;
  abstract GetActiveMessageSessions(
    request: CFriendsMessages_GetActiveMessageSessions_Request,
  ): Promise<CFriendsMessages_GetActiveMessageSessions_Response>;
  abstract GetRecentMessages(
    request: CFriendMessages_GetRecentMessages_Request,
  ): Promise<CFriendMessages_GetRecentMessages_Response>;
  abstract IsInFriendsUIBeta(
    request: CFriendMessages_IsInFriendsUIBeta_Request,
  ): Promise<CFriendMessages_IsInFriendsUIBeta_Response>;
  abstract ReportMessage(
    request: CFriendMessages_ReportMessage_Request,
  ): Promise<CFriendMessages_ReportMessage_Response>;
  abstract ResolveReport(
    request: CFriendMessages_ResolveReport_Request,
  ): Promise<CFriendMessages_ResolveReport_Response>;
  abstract SendMessage(
    request: CFriendMessages_SendMessage_Request,
  ): Promise<CFriendMessages_SendMessage_Response>;
  abstract UpdateMessageReaction(
    request: CFriendMessages_UpdateMessageReaction_Request,
  ): Promise<CFriendMessages_UpdateMessageReaction_Response>;
}

export abstract class FriendMessagesClientService {
  abstract IncomingMessage(request: CFriendMessages_IncomingMessage_Notification): Promise<void>;
  abstract MessageReaction(request: CFriendMessages_MessageReaction_Notification): Promise<void>;
  abstract NotifyAckMessageEcho(request: CFriendMessages_AckMessage_Notification): Promise<void>;
  abstract SessionNotice(request: CFriendMessages_SessionNotice_Notification): Promise<void>;
}
