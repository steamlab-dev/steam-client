/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPlaytest_GetInviteHistory_Request {
  limit?: number;
  time_before?: number;
}

export interface CPlaytest_GetInviteHistory_Response {
  invites?: CPlaytest_GetInviteHistory_Response_Invite[];
}

export interface CPlaytest_GetInviteHistory_Response_Invite {
  appid?: number;
  steamid_invited?: Long;
  time_created?: number;
  app_name?: string;
}

export interface CPlaytest_GetInviteOptions_Request {
  appid?: number;
}

export interface CPlaytest_GetInviteOptions_Response {
  ineligible_friends?: number[];
}

export interface CPlaytest_GetInvites_Request {
  invite_id?: Long;
}

export interface CPlaytest_GetInvites_Response {
  invites?: CPlaytest_GetInvites_Response_Invite[];
}

export interface CPlaytest_GetInvites_Response_Invite {
  invite_id?: Long;
  appid?: number;
  steamid_inviter?: Long;
  status?: number;
  time_created?: number;
  app_name?: string;
}

export interface CPlaytest_GetUserStatus_Request {
  appid?: number;
}

export interface CPlaytest_GetUserStatus_Response {
  results?: CPlaytest_GetUserStatus_Response_AppStatus[];
}

export interface CPlaytest_GetUserStatus_Response_AppStatus {
  appid?: number;
  status?: number;
  invites_remaining?: number;
  time_joined?: number;
  packageid?: number;
  invites_sent?: number;
}

export interface CPlaytest_RequestInvite_Request {
  appid?: number;
  steamid?: Long;
}

export interface CPlaytest_RequestInvite_Response {
  invites_remaining?: number;
  status?: number;
}

export interface CPlaytest_UpdateInvites_Request {
  invite_ids?: Long[];
  status?: number;
}

export interface CPlaytest_UpdateInvites_Response {
  invites_updated?: number;
}

export abstract class PlaytestService {
  abstract GetInviteHistory(
    request: CPlaytest_GetInviteHistory_Request,
  ): Promise<CPlaytest_GetInviteHistory_Response>;
  abstract GetInviteOptions(
    request: CPlaytest_GetInviteOptions_Request,
  ): Promise<CPlaytest_GetInviteOptions_Response>;
  abstract GetInvites(
    request: CPlaytest_GetInvites_Request,
  ): Promise<CPlaytest_GetInvites_Response>;
  abstract GetUserStatus(
    request: CPlaytest_GetUserStatus_Request,
  ): Promise<CPlaytest_GetUserStatus_Response>;
  abstract RequestInvite(
    request: CPlaytest_RequestInvite_Request,
  ): Promise<CPlaytest_RequestInvite_Response>;
  abstract UpdateInvites(
    request: CPlaytest_UpdateInvites_Request,
  ): Promise<CPlaytest_UpdateInvites_Response>;
}
