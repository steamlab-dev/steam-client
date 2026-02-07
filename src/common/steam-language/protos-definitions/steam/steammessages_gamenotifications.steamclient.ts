/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CGameNotifications_Variable {
  key?: string;
  value?: string;
}

export interface CGameNotifications_LocalizedText {
  token?: string;
  variables?: CGameNotifications_Variable[];
  rendered_text?: string;
}

export interface CGameNotifications_UserStatus {
  steamid?: Long;
  state?: string;
  title?: CGameNotifications_LocalizedText;
  message?: CGameNotifications_LocalizedText;
}

export interface CGameNotifications_CreateSession_Request {
  appid?: number;
  context?: Long;
  title?: CGameNotifications_LocalizedText;
  users?: CGameNotifications_UserStatus[];
  steamid?: Long;
}

export interface CGameNotifications_CreateSession_Response {
  sessionid?: Long;
}

export interface CGameNotifications_DeleteSession_Request {
  sessionid?: Long;
  appid?: number;
  steamid?: Long;
}

export type CGameNotifications_DeleteSession_Response = Record<string, never>;

export interface CGameNotifications_UpdateSession_Request {
  sessionid?: Long;
  appid?: number;
  title?: CGameNotifications_LocalizedText;
  users?: CGameNotifications_UserStatus[];
  steamid?: Long;
}

export type CGameNotifications_UpdateSession_Response = Record<string, never>;

export interface CGameNotifications_EnumerateSessions_Request {
  appid?: number;
  include_all_user_messages?: boolean;
  include_auth_user_message?: boolean;
  language?: string;
}

export interface CGameNotifications_Session {
  sessionid?: Long;
  appid?: Long;
  context?: Long;
  title?: CGameNotifications_LocalizedText;
  time_created?: number;
  time_updated?: number;
  user_status?: CGameNotifications_UserStatus[];
}

export interface CGameNotifications_EnumerateSessions_Response {
  sessions?: CGameNotifications_Session[];
}

export interface CGameNotifications_GetSessionDetails_Request {
  sessions?: CGameNotifications_GetSessionDetails_Request.RequestedSession[];
  appid?: number;
  language?: string;
}

export namespace CGameNotifications_GetSessionDetails_Request {
  export interface RequestedSession {
    sessionid?: Long;
    include_auth_user_message?: boolean;
  }
}

export interface CGameNotifications_GetSessionDetails_Response {
  sessions?: CGameNotifications_Session[];
}

export interface GameNotificationSettings {
  appid?: number;
  allow_notifications?: boolean;
}

export interface CGameNotifications_UpdateNotificationSettings_Request {
  game_notification_settings?: GameNotificationSettings[];
}

export type CGameNotifications_UpdateNotificationSettings_Response = Record<string, never>;

export interface CGameNotifications_OnNotificationsRequested_Notification {
  steamid?: Long;
  appid?: number;
}

export interface CGameNotifications_OnUserStatusChanged_Notification {
  steamid?: Long;
  sessionid?: Long;
  appid?: number;
  status?: CGameNotifications_UserStatus;
  removed?: boolean;
}

export abstract class GameNotificationsService {
  abstract UserCreateSession(
    request: CGameNotifications_CreateSession_Request,
  ): Promise<CGameNotifications_CreateSession_Response>;
  abstract UserDeleteSession(
    request: CGameNotifications_DeleteSession_Request,
  ): Promise<CGameNotifications_DeleteSession_Response>;
  abstract UserUpdateSession(
    request: CGameNotifications_UpdateSession_Request,
  ): Promise<CGameNotifications_UpdateSession_Response>;
  abstract EnumerateSessions(
    request: CGameNotifications_EnumerateSessions_Request,
  ): Promise<CGameNotifications_EnumerateSessions_Response>;
  abstract GetSessionDetails(
    request: CGameNotifications_GetSessionDetails_Request,
  ): Promise<CGameNotifications_GetSessionDetails_Response>;
  abstract UpdateNotificationSettings(
    request: CGameNotifications_UpdateNotificationSettings_Request,
  ): Promise<CGameNotifications_UpdateNotificationSettings_Response>;
}

export abstract class GameNotificationsClientService {
  abstract OnNotificationsRequested(
    request: CGameNotifications_OnNotificationsRequested_Notification,
  ): Promise<void>;
  abstract OnUserStatusChanged(
    request: CGameNotifications_OnUserStatusChanged_Notification,
  ): Promise<void>;
}
