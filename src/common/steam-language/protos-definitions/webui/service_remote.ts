/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { NotImplemented } from "./common_base";

export interface CRemoteClient_AllocateRelayServer_Request {
  cellid?: number;
  credentials?: string;
}

export interface CRemoteClient_AllocateRelayServer_Response {
  relay_server?: string;
}

export interface CRemoteClient_AllocateSDR_Request {
  appid?: number;
}

export type CRemoteClient_AllocateSDR_Response = Record<string, never>;

export interface CRemoteClient_ClientDetails {
  remote_client_id?: Long;
  device_details?: CRemoteClient_DeviceDetails;
  last_seen?: Long;
  city?: string;
  state?: string;
  country?: string;
  is_online?: boolean;
}

export interface CRemoteClient_CreateRemotePlayTogetherInvitation_Request {
  appid?: number;
  launch_parameters?: string;
}

export interface CRemoteClient_CreateRemotePlayTogetherInvitation_Response {
  invitation_code?: string;
}

export interface CRemoteClient_DeleteRemotePlayTogetherInvitation_Request {
  invitation_code?: string;
}

export type CRemoteClient_DeleteRemotePlayTogetherInvitation_Response = Record<string, never>;

export interface CRemoteClient_DeviceDetails {
  device_friendly_name?: string;
  os_type?: number;
  gaming_device_type?: number;
}

export interface CRemoteClient_GetPairingInfo_Request {
  pin?: number;
}

export interface CRemoteClient_GetPairingInfo_Response {
  session_id?: Long;
  device_id?: Long;
  request?: Buffer;
}

export type CRemoteClient_GetRecentClients_Request = Record<string, never>;

export interface CRemoteClient_GetRecentClients_Response {
  clients?: CRemoteClient_ClientDetails[];
}

export interface CRemoteClient_MarkTaskComplete_Request {
  remote_client_id?: Long;
  task_id?: Long;
  content_id?: string;
}

export type CRemoteClient_MarkTaskComplete_Response = Record<string, never>;

export interface CRemoteClient_Online_Notification {
  steamid?: Long;
  remote_client_id?: Long;
  device_details?: CRemoteClient_DeviceDetails;
}

export interface CRemoteClient_ReplyPacket_Notification {
  session_id?: Long;
  payload?: Buffer;
}

export interface CRemotePlay_SessionStarted_Request {
  host_account_id?: number;
  client_account_id?: number;
  appid?: number;
  device_form_factor?: number;
  remote_play_together?: boolean;
  guest_session?: boolean;
}

export interface CRemotePlay_SessionStarted_Response {
  record_id?: Long;
}

export abstract class RemoteClientService {
  abstract AllocateRelayServer(
    request: CRemoteClient_AllocateRelayServer_Request,
  ): Promise<CRemoteClient_AllocateRelayServer_Response>;
  abstract AllocateSDR(
    request: CRemoteClient_AllocateSDR_Request,
  ): Promise<CRemoteClient_AllocateSDR_Response>;
  abstract CreateRemotePlayTogetherInvitation(
    request: CRemoteClient_CreateRemotePlayTogetherInvitation_Request,
  ): Promise<CRemoteClient_CreateRemotePlayTogetherInvitation_Response>;
  abstract DeleteRemotePlayTogetherInvitation(
    request: CRemoteClient_DeleteRemotePlayTogetherInvitation_Request,
  ): Promise<CRemoteClient_DeleteRemotePlayTogetherInvitation_Response>;
  abstract GetPairingInfo(
    request: CRemoteClient_GetPairingInfo_Request,
  ): Promise<CRemoteClient_GetPairingInfo_Response>;
  abstract GetRecentClients(
    request: CRemoteClient_GetRecentClients_Request,
  ): Promise<CRemoteClient_GetRecentClients_Response>;
  abstract MarkTaskComplete(
    request: CRemoteClient_MarkTaskComplete_Request,
  ): Promise<CRemoteClient_MarkTaskComplete_Response>;
  abstract NotifyOnline(request: CRemoteClient_Online_Notification): Promise<void>;
  abstract NotifyReplyPacket(request: CRemoteClient_ReplyPacket_Notification): Promise<void>;
  abstract SendRemotePlaySessionStarted(
    request: CRemotePlay_SessionStarted_Request,
  ): Promise<CRemotePlay_SessionStarted_Response>;
  abstract SendRemotePlaySessionStopped(request: NotImplemented): Promise<void>;
  abstract SendRemotePlayTogetherPacket(request: NotImplemented): Promise<void>;
  abstract SendSteamBroadcastPacket(request: NotImplemented): Promise<void>;
  abstract SendSteamToSteamPacket(request: NotImplemented): Promise<void>;
}
