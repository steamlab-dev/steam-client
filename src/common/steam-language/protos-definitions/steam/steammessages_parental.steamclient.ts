/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  ParentalFeatureRequest,
  ParentalPlaytimeDay,
  ParentalPlaytimeRequest,
  ParentalSettings,
  ParentalTemporaryPlaytimeRestrictions,
} from "./steammessages_parental_objects";

export interface CParental_EnableParentalSettings_Request {
  password?: string;
  settings?: ParentalSettings;
  sessionid?: string;
  enablecode?: number;
  steamid?: Long;
}

export type CParental_EnableParentalSettings_Response = Record<string, never>;

export interface CParental_DisableParentalSettings_Request {
  password?: string;
  steamid?: Long;
}

export type CParental_DisableParentalSettings_Response = Record<string, never>;

export interface CParental_GetParentalSettings_Request {
  steamid?: Long;
}

export interface CParental_GetParentalSettings_Response {
  settings?: ParentalSettings;
}

export interface CParental_GetSignedParentalSettings_Request {
  priority?: number;
}

export interface CParental_GetSignedParentalSettings_Response {
  serialized_settings?: Buffer;
  signature?: Buffer;
}

export interface CParental_SetParentalSettings_Request {
  password?: string;
  settings?: ParentalSettings;
  new_password?: string;
  sessionid?: string;
  steamid?: Long;
}

export type CParental_SetParentalSettings_Response = Record<string, never>;

export interface CParental_ValidateToken_Request {
  unlock_token?: string;
}

export type CParental_ValidateToken_Response = Record<string, never>;

export interface CParental_ValidatePassword_Request {
  password?: string;
  session?: string;
  send_unlock_on_success?: boolean;
}

export interface CParental_ValidatePassword_Response {
  token?: string;
}

export interface CParental_LockClient_Request {
  session?: string;
}

export type CParental_LockClient_Response = Record<string, never>;

export type CParental_RequestRecoveryCode_Request = Record<string, never>;

export type CParental_RequestRecoveryCode_Response = Record<string, never>;

export interface CParental_RequestFeatureAccess_Request {
  features?: number;
  steamid?: Long;
}

export interface CParental_RequestFeatureAccess_Response {
  requestid?: Long;
}

export interface CParental_ApproveFeatureAccess_Request {
  approve?: boolean;
  requestid?: Long;
  features?: number;
  duration?: number;
  steamid?: Long;
}

export type CParental_ApproveFeatureAccess_Response = Record<string, never>;

export interface CParental_RequestPlaytime_Request {
  time_expires?: number;
  current_playtime_restrictions?: ParentalPlaytimeDay;
  steamid?: Long;
}

export interface CParental_RequestPlaytime_Response {
  requestid?: Long;
}

export interface CParental_ApprovePlaytime_Request {
  approve?: boolean;
  requestid?: Long;
  restrictions_approved?: ParentalTemporaryPlaytimeRestrictions;
  steamid?: Long;
}

export type CParental_ApprovePlaytime_Response = Record<string, never>;

export interface CParental_GetRequests_Request {
  rt_include_completed_since?: number;
  family_groupid?: Long;
}

export interface CParental_GetRequests_Response {
  feature_requests?: ParentalFeatureRequest[];
  playtime_requests?: ParentalPlaytimeRequest[];
}

export interface CParental_ReportPlaytimeAndNotify_Request {
  day_of_week?: number;
  minutes_used?: number;
  steamid?: Long;
}

export type CParental_ReportPlaytimeAndNotify_Response = Record<string, never>;

export interface CParental_ParentalSettingsChange_Notification {
  serialized_settings?: Buffer;
  signature?: Buffer;
  password?: string;
  sessionid?: string;
}

export interface CParental_ParentalUnlock_Notification {
  password?: string;
  sessionid?: string;
}

export interface CParental_ParentalLock_Notification {
  sessionid?: string;
}

export interface CParental_PlaytimeUsed_Notification {
  day_of_week?: number;
  minutes_used?: number;
}

export abstract class ParentalService {
  abstract EnableParentalSettings(
    request: CParental_EnableParentalSettings_Request,
  ): Promise<CParental_EnableParentalSettings_Response>;
  abstract DisableParentalSettings(
    request: CParental_DisableParentalSettings_Request,
  ): Promise<CParental_DisableParentalSettings_Response>;
  abstract GetParentalSettings(
    request: CParental_GetParentalSettings_Request,
  ): Promise<CParental_GetParentalSettings_Response>;
  abstract GetSignedParentalSettings(
    request: CParental_GetSignedParentalSettings_Request,
  ): Promise<CParental_GetSignedParentalSettings_Response>;
  abstract SetParentalSettings(
    request: CParental_SetParentalSettings_Request,
  ): Promise<CParental_SetParentalSettings_Response>;
  abstract ValidateToken(
    request: CParental_ValidateToken_Request,
  ): Promise<CParental_ValidateToken_Response>;
  abstract ValidatePassword(
    request: CParental_ValidatePassword_Request,
  ): Promise<CParental_ValidatePassword_Response>;
  abstract LockClient(
    request: CParental_LockClient_Request,
  ): Promise<CParental_LockClient_Response>;
  abstract RequestRecoveryCode(
    request: CParental_RequestRecoveryCode_Request,
  ): Promise<CParental_RequestRecoveryCode_Response>;
  abstract RequestFeatureAccess(
    request: CParental_RequestFeatureAccess_Request,
  ): Promise<CParental_RequestFeatureAccess_Response>;
  abstract ApproveFeatureAccess(
    request: CParental_ApproveFeatureAccess_Request,
  ): Promise<CParental_ApproveFeatureAccess_Response>;
  abstract RequestPlaytime(
    request: CParental_RequestPlaytime_Request,
  ): Promise<CParental_RequestPlaytime_Response>;
  abstract ApprovePlaytime(
    request: CParental_ApprovePlaytime_Request,
  ): Promise<CParental_ApprovePlaytime_Response>;
  abstract GetRequests(
    request: CParental_GetRequests_Request,
  ): Promise<CParental_GetRequests_Response>;
  abstract ReportPlaytimeAndNotify(
    request: CParental_ReportPlaytimeAndNotify_Request,
  ): Promise<CParental_ReportPlaytimeAndNotify_Response>;
}

export abstract class ParentalClientService {
  abstract NotifySettingsChange(
    request: CParental_ParentalSettingsChange_Notification,
  ): Promise<void>;
  abstract NotifyUnlock(request: CParental_ParentalUnlock_Notification): Promise<void>;
  abstract NotifyLock(request: CParental_ParentalLock_Notification): Promise<void>;
  abstract NotifyPlaytimeUsed(request: CParental_PlaytimeUsed_Notification): Promise<void>;
}
