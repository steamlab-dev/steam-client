/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export type CRemoteClient_DisableSteamBroadcast_Notification = Record<string, never>;

export type CRemoteClient_EnableSteamBroadcast_Notification = Record<string, never>;

export interface CRemoteClient_RegisterStatusUpdate_Notification {
  session_id?: bigint;
  steamid?: bigint;
  device_id?: bigint;
  disable_polling?: boolean;
}

export interface CRemoteClient_RemotePacket_Notification {
  session_id?: bigint;
  steamid?: bigint;
  payload?: Buffer;
}

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

export interface CRemoteClient_Task {
  type?: number;
  task_id?: bigint;
  url?: string;
  file_id?: bigint;
}

export interface CRemoteClient_TaskList_Notification {
  remote_client_id?: bigint;
  tasklist?: CRemoteClient_Task[];
}

export interface CRemoteClient_UnregisterStatusUpdate_Notification {
  session_id?: bigint;
  steamid?: bigint;
}

export interface CRemotePlayTogether_Notification {
  steamid?: bigint;
  group_updated?: CRemotePlayTogether_Notification_GroupUpdated;
}

export interface CRemotePlayTogether_Notification_ControllerSlot {
  slotid?: number;
  player?: CRemotePlayTogether_Notification_Player;
  controller_type?: number;
}

export interface CRemotePlayTogether_Notification_ControllerSlot_obsolete {
  slotid?: number;
  steamid?: bigint;
}

export interface CRemotePlayTogether_Notification_GroupUpdated {
  host_steamid?: bigint;
  host_clientid?: bigint;
  players_obsolete?: bigint[];
  host_gameid?: bigint;
  controller_slots_obsolete?: CRemotePlayTogether_Notification_ControllerSlot_obsolete[];
  has_new_players?: boolean;
  player_slots?: CRemotePlayTogether_Notification_Player[];
  controller_slots?: CRemotePlayTogether_Notification_ControllerSlot[];
}

export interface CRemotePlayTogether_Notification_Player {
  steamid?: bigint;
  guestid?: number;
  avatar_hash?: Buffer;
  keyboard_enabled?: boolean;
  mouse_enabled?: boolean;
  controller_enabled?: boolean;
}

export abstract class RemoteClientSteamClientService {
  abstract NotifyDisableSteamBroadcast(
    request: CRemoteClient_DisableSteamBroadcast_Notification,
  ): Promise<void>;
  abstract NotifyEnableSteamBroadcast(
    request: CRemoteClient_EnableSteamBroadcast_Notification,
  ): Promise<void>;
  abstract NotifyRegisterStatusUpdate(
    request: CRemoteClient_RegisterStatusUpdate_Notification,
  ): Promise<void>;
  abstract NotifyRemotePacket(request: CRemoteClient_RemotePacket_Notification): Promise<void>;
  abstract NotifyRemotePlayTogetherPacket(request: CRemotePlayTogether_Notification): Promise<void>;
  abstract NotifySteamBroadcastPacket(
    request: CRemoteClient_SteamBroadcast_Notification,
  ): Promise<void>;
  abstract NotifySteamToSteamPacket(
    request: CRemoteClient_SteamToSteam_Notification,
  ): Promise<void>;
  abstract NotifyTaskList(request: CRemoteClient_TaskList_Notification): Promise<void>;
  abstract NotifyUnregisterStatusUpdate(
    request: CRemoteClient_UnregisterStatusUpdate_Notification,
  ): Promise<void>;
}
