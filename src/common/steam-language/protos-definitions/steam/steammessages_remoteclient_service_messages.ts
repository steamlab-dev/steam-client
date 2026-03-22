/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const ECLientTaskListType = {
  k_EClientTask_DownloadClip: 1,
} as const;

export type ECLientTaskListType = (typeof ECLientTaskListType)[keyof typeof ECLientTaskListType];

export type CRemoteClient_CreateSession_Request = Record<string, never>;

export interface CRemoteClient_CreateSession_Response {
  session_id?: bigint;
  euniverse?: number;
}

export interface CRemoteClient_DeleteSession_Notification {
  session_id?: bigint;
}

export interface CRemoteClient_StartPairing_Request {
  session_id?: bigint;
}

export interface CRemoteClient_StartPairing_Response {
  pin?: number;
}

export interface CRemoteClient_SetPairingInfo_Request {
  session_id?: bigint;
  device_id?: bigint;
  request?: Buffer;
}

export type CRemoteClient_SetPairingInfo_Response = Record<string, never>;

export interface CRemoteClient_GetPairingInfo_Request {
  pin?: number;
}

export interface CRemoteClient_GetPairingInfo_Response {
  session_id?: bigint;
  device_id?: bigint;
  request?: Buffer;
}

export interface CRemoteClient_CancelPairing_Request {
  session_id?: bigint;
}

export type CRemoteClient_CancelPairing_Response = Record<string, never>;

export interface CRemoteClient_CancelPairing_Notification {
  session_id?: bigint;
}

export interface CRemoteClient_RegisterStatusUpdate_Notification {
  session_id?: bigint;
  steamid?: bigint;
  device_id?: bigint;
  disable_polling?: boolean;
}

export interface CRemoteClient_UnregisterStatusUpdate_Notification {
  session_id?: bigint;
  steamid?: bigint;
}

export interface CRemoteClient_DeviceDetails {
  device_friendly_name?: string;
  os_type?: number;
  gaming_device_type?: number;
}

export interface CRemoteClient_Online_Notification {
  steamid?: bigint;
  remote_client_id?: bigint;
  device_details?: CRemoteClient_DeviceDetails;
}

export interface CRemoteClient_Offline_Notification {
  session_id?: bigint;
  steamid?: bigint;
  remote_client_id?: bigint;
}

export interface CRemoteClient_ClientLogin {
  remote_client_id?: bigint;
  token_id?: bigint;
  device_details?: CRemoteClient_DeviceDetails;
}

export interface CRemoteClient_ClientDetails {
  remote_client_id?: bigint;
  device_details?: CRemoteClient_DeviceDetails;
  last_seen?: bigint;
  city?: string;
  state?: string;
  country?: string;
  is_online?: boolean;
}

export type CRemoteClient_GetRecentClients_Request = Record<string, never>;

export interface CRemoteClient_GetRecentClients_Response {
  clients?: CRemoteClient_ClientDetails[];
}

export interface CRemoteClient_Task {
  type?: ECLientTaskListType;
  task_id?: bigint;
  url?: string;
  file_id?: bigint;
}

export interface CRemoteClient_AddClientTask_Request {
  remote_client_id?: bigint;
  task?: CRemoteClient_Task;
}

export type CRemoteClient_AddClientTask_Response = Record<string, never>;

export interface CRemoteClient_TaskList_Notification {
  remote_client_id?: bigint;
  tasklist?: CRemoteClient_Task[];
}

export interface CRemoteClient_MarkTaskComplete_Request {
  remote_client_id?: bigint;
  task_id?: bigint;
  content_id?: string;
}

export type CRemoteClient_MarkTaskComplete_Response = Record<string, never>;

export interface CRemoteClient_RemotePacket_Notification {
  session_id?: bigint;
  steamid?: bigint;
  payload?: Buffer;
}

export interface CRemoteClient_ReplyPacket_Notification {
  session_id?: bigint;
  payload?: Buffer;
}

export interface CRemoteClient_GetReplies_Request {
  session_id?: bigint;
}

export interface CRemoteClient_GetReplies_Response {
  payload?: Buffer[];
}

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

export type CRemoteClient_EnableSteamBroadcast_Notification = Record<string, never>;

export type CRemoteClient_DisableSteamBroadcast_Notification = Record<string, never>;

export interface CRemoteClient_SteamBroadcast_Notification {
  steamid?: bigint;
  clientid?: bigint;
  payload?: Buffer;
}

export interface CRemoteClient_SteamToSteam_Notification {
  steamid?: bigint;
  src_clientid?: bigint;
  dst_clientid?: bigint;
  secretid?: number;
  encrypted_payload?: Buffer;
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
  record_id?: bigint;
}

export interface CRemotePlay_SessionStopped_Notification {
  record_id?: bigint;
  used_x264?: boolean;
  used_h264?: boolean;
  used_hevc?: boolean;
}

export interface CRemotePlayTogether_Notification {
  steamid?: bigint;
  Message?: { group_updated: CRemotePlayTogether_Notification.GroupUpdated };
}

export namespace CRemotePlayTogether_Notification {
  export interface Player {
    steamid?: bigint;
    guestid?: number;
    avatar_hash?: Buffer;
    keyboard_enabled?: boolean;
    mouse_enabled?: boolean;
    controller_enabled?: boolean;
  }

  export interface ControllerSlot_obsolete {
    slotid?: number;
    steamid?: bigint;
  }

  export interface ControllerSlot {
    slotid?: number;
    player?: CRemotePlayTogether_Notification.Player;
    controller_type?: number;
  }

  export interface GroupUpdated {
    host_steamid?: bigint;
    host_clientid?: bigint;
    players_obsolete?: bigint[];
    host_gameid?: bigint;
    controller_slots_obsolete?: CRemotePlayTogether_Notification.ControllerSlot_obsolete[];
    has_new_players?: boolean;
    player_slots?: CRemotePlayTogether_Notification.Player[];
    controller_slots?: CRemotePlayTogether_Notification.ControllerSlot[];
  }
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

export interface CRemoteClient_LookupRemotePlayTogetherInvitation_Request {
  invitation_code?: string;
}

export interface CRemoteClient_LookupRemotePlayTogetherInvitation_Response {
  invitation_url?: string;
}

export interface CCMRemoteClient_ClientMessage {
  Message?:
    | { create_session_request: CRemoteClient_CreateSession_Request }
    | { start_pairing_request: CRemoteClient_StartPairing_Request }
    | { set_pairing_info_request: CRemoteClient_SetPairingInfo_Request }
    | { cancel_pairing_request: CRemoteClient_CancelPairing_Request }
    | { register_status_update: CRemoteClient_RegisterStatusUpdate_Notification }
    | { unregister_status_update: CRemoteClient_UnregisterStatusUpdate_Notification }
    | { remote_packet: CRemoteClient_RemotePacket_Notification };
}

export interface CCMRemoteClient_ServerMessage {
  result?: number;
  Message?:
    | { create_session_response: CRemoteClient_CreateSession_Response }
    | { start_pairing_response: CRemoteClient_StartPairing_Response }
    | { set_pairing_info_response: CRemoteClient_SetPairingInfo_Response }
    | { cancel_pairing_response: CRemoteClient_CancelPairing_Response }
    | { reply_packet: CRemoteClient_GetReplies_Response }
    | { offline: CRemoteClient_Offline_Notification };
}
