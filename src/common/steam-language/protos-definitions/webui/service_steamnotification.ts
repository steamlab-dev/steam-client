/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export type CSteamNotification_GetPreferences_Request = Record<string, never>;

export interface CSteamNotification_GetPreferences_Response {
  preferences?: SteamNotificationPreference[];
}

export interface CSteamNotification_GetSteamNotifications_Request {
  include_hidden?: boolean;
  language?: number;
  include_confirmation_count?: boolean;
  include_pinned_counts?: boolean;
  include_read?: boolean;
  count_only?: boolean;
}

export interface CSteamNotification_GetSteamNotifications_Response {
  notifications?: SteamNotificationData[];
  confirmation_count?: number;
  pending_gift_count?: number;
  pending_friend_count?: number;
  unread_count?: number;
  pending_family_invite_count?: number;
}

export interface CSteamNotification_HideNotification_Notification {
  notification_ids?: Long[];
}

export interface CSteamNotification_MarkNotificationsRead_Notification {
  timestamp?: number;
  notification_type?: number;
  notification_ids?: Long[];
  mark_all_read?: boolean;
}

export interface CSteamNotification_MarkNotificationsViewed_Notification {
  remote_client_id?: Long;
  target_client_type?: number;
}

export interface CSteamNotification_NotificationsReceived_Notification {
  notifications?: SteamNotificationData[];
  pending_gift_count?: number;
  pending_friend_count?: number;
  pending_family_invite_count?: number;
}

export interface CSteamNotification_PreferencesUpdated_Notification {
  preferences?: SteamNotificationPreference[];
}

export interface CSteamNotification_SetPreferences_Request {
  preferences?: SteamNotificationPreference[];
}

export type CSteamNotification_SetPreferences_Response = Record<string, never>;

export interface SteamNotificationData {
  notification_id?: Long;
  notification_targets?: number;
  notification_type?: number;
  body_data?: string;
  read?: boolean;
  timestamp?: number;
  hidden?: boolean;
  expiry?: number;
  viewed?: number;
}

export interface SteamNotificationPreference {
  notification_type?: number;
  notification_targets?: number;
}

export abstract class SteamNotificationService {
  abstract GetPreferences(
    request: CSteamNotification_GetPreferences_Request,
  ): Promise<CSteamNotification_GetPreferences_Response>;
  abstract GetSteamNotifications(
    request: CSteamNotification_GetSteamNotifications_Request,
  ): Promise<CSteamNotification_GetSteamNotifications_Response>;
  abstract HideNotification(
    request: CSteamNotification_HideNotification_Notification,
  ): Promise<void>;
  abstract MarkNotificationsRead(
    request: CSteamNotification_MarkNotificationsRead_Notification,
  ): Promise<void>;
  abstract MarkNotificationsViewed(
    request: CSteamNotification_MarkNotificationsViewed_Notification,
  ): Promise<void>;
  abstract SetPreferences(
    request: CSteamNotification_SetPreferences_Request,
  ): Promise<CSteamNotification_SetPreferences_Response>;
}

export abstract class SteamNotificationClientService {
  abstract NotificationsReceived(
    request: CSteamNotification_NotificationsReceived_Notification,
  ): Promise<void>;
  abstract PreferencesUpdated(
    request: CSteamNotification_PreferencesUpdated_Notification,
  ): Promise<void>;
}
