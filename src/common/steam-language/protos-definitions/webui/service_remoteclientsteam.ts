/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CRemoteClient_RegisterStatusUpdate_Notification {
  session_id?: Long;
  steamid?: Long;
  device_id?: Long;
  disable_polling?: boolean;
}

export interface CRemoteClient_RemotePacket_Notification {
  session_id?: Long;
  steamid?: Long;
  payload?: Buffer;
}

export interface CRemoteClient_SteamBroadcast_Notification {
  steamid?: Long;
  clientid?: Long;
  payload?: Buffer;
}

export interface CRemoteClient_SteamToSteam_Notification {
  steamid?: Long;
  src_clientid?: Long;
  dst_clientid?: Long;
  secretid?: number;
  encrypted_payload?: Buffer;
}

export interface CRemoteClient_Task {
  type?: number;
  task_id?: Long;
  url?: string;
  file_id?: Long;
}

export interface CRemoteClient_TaskList_Notification {
  remote_client_id?: Long;
  tasklist?: CRemoteClient_Task[];
}

export interface CRemoteClient_UnregisterStatusUpdate_Notification {
  session_id?: Long;
  steamid?: Long;
}

export interface CRemotePlayTogether_Notification {
  steamid?: Long;
  group_updated?: CRemotePlayTogether_Notification_GroupUpdated;
}

export interface CRemotePlayTogether_Notification_ControllerSlot {
  slotid?: number;
  player?: CRemotePlayTogether_Notification_Player;
  controller_type?: number;
}

export interface CRemotePlayTogether_Notification_ControllerSlot_obsolete {
  slotid?: number;
  steamid?: Long;
}

export interface CRemotePlayTogether_Notification_GroupUpdated {
  host_steamid?: Long;
  host_clientid?: Long;
  players_obsolete?: Long[];
  host_gameid?: Long;
  controller_slots_obsolete?: CRemotePlayTogether_Notification_ControllerSlot_obsolete[];
  has_new_players?: boolean;
  player_slots?: CRemotePlayTogether_Notification_Player[];
  controller_slots?: CRemotePlayTogether_Notification_ControllerSlot[];
}

export interface CRemotePlayTogether_Notification_Player {
  steamid?: Long;
  guestid?: number;
  avatar_hash?: Buffer;
  keyboard_enabled?: boolean;
  mouse_enabled?: boolean;
  controller_enabled?: boolean;
}

export abstract class RemoteClientSteamClientService {
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
