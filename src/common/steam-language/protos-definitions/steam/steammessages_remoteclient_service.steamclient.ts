/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CRemoteClient_AllocateRelayServer_Request,
  CRemoteClient_AllocateRelayServer_Response,
  CRemoteClient_AllocateSDR_Request,
  CRemoteClient_AllocateSDR_Response,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Request,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Response,
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Request,
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Response,
  CRemoteClient_GetPairingInfo_Request,
  CRemoteClient_GetPairingInfo_Response,
  CRemoteClient_GetRecentClients_Request,
  CRemoteClient_GetRecentClients_Response,
  CRemoteClient_MarkTaskComplete_Request,
  CRemoteClient_MarkTaskComplete_Response,
  CRemoteClient_Online_Notification,
  CRemoteClient_RegisterStatusUpdate_Notification,
  CRemoteClient_RemotePacket_Notification,
  CRemoteClient_ReplyPacket_Notification,
  CRemoteClient_SteamBroadcast_Notification,
  CRemoteClient_SteamToSteam_Notification,
  CRemoteClient_TaskList_Notification,
  CRemoteClient_UnregisterStatusUpdate_Notification,
  CRemotePlay_SessionStarted_Request,
  CRemotePlay_SessionStarted_Response,
  CRemotePlay_SessionStopped_Notification,
  CRemotePlayTogether_Notification,
} from "./steammessages_remoteclient_service_messages";

export abstract class RemoteClientService {
  abstract GetPairingInfo(
    request: CRemoteClient_GetPairingInfo_Request,
  ): Promise<CRemoteClient_GetPairingInfo_Response>;
  abstract NotifyOnline(request: CRemoteClient_Online_Notification): Promise<void>;
  abstract GetRecentClients(
    request: CRemoteClient_GetRecentClients_Request,
  ): Promise<CRemoteClient_GetRecentClients_Response>;
  abstract MarkTaskComplete(
    request: CRemoteClient_MarkTaskComplete_Request,
  ): Promise<CRemoteClient_MarkTaskComplete_Response>;
  abstract NotifyReplyPacket(request: CRemoteClient_ReplyPacket_Notification): Promise<void>;
  abstract AllocateRelayServer(
    request: CRemoteClient_AllocateRelayServer_Request,
  ): Promise<CRemoteClient_AllocateRelayServer_Response>;
  abstract AllocateSDR(
    request: CRemoteClient_AllocateSDR_Request,
  ): Promise<CRemoteClient_AllocateSDR_Response>;
  abstract SendSteamBroadcastPacket(
    request: CRemoteClient_SteamBroadcast_Notification,
  ): Promise<void>;
  abstract SendSteamToSteamPacket(request: CRemoteClient_SteamToSteam_Notification): Promise<void>;
  abstract SendRemotePlaySessionStarted(
    request: CRemotePlay_SessionStarted_Request,
  ): Promise<CRemotePlay_SessionStarted_Response>;
  abstract SendRemotePlaySessionStopped(
    request: CRemotePlay_SessionStopped_Notification,
  ): Promise<void>;
  abstract SendRemotePlayTogetherPacket(request: CRemotePlayTogether_Notification): Promise<void>;
  abstract CreateRemotePlayTogetherInvitation(
    request: CRemoteClient_CreateRemotePlayTogetherInvitation_Request,
  ): Promise<CRemoteClient_CreateRemotePlayTogetherInvitation_Response>;
  abstract DeleteRemotePlayTogetherInvitation(
    request: CRemoteClient_DeleteRemotePlayTogetherInvitation_Request,
  ): Promise<CRemoteClient_DeleteRemotePlayTogetherInvitation_Response>;
}

export abstract class RemoteClientSteamClientService {
  abstract NotifyRegisterStatusUpdate(
    request: CRemoteClient_RegisterStatusUpdate_Notification,
  ): Promise<void>;
  abstract NotifyUnregisterStatusUpdate(
    request: CRemoteClient_UnregisterStatusUpdate_Notification,
  ): Promise<void>;
  abstract NotifyRemotePacket(request: CRemoteClient_RemotePacket_Notification): Promise<void>;
  abstract NotifySteamBroadcastPacket(
    request: CRemoteClient_SteamBroadcast_Notification,
  ): Promise<void>;
  abstract NotifySteamToSteamPacket(
    request: CRemoteClient_SteamToSteam_Notification,
  ): Promise<void>;
  abstract NotifyRemotePlayTogetherPacket(request: CRemotePlayTogether_Notification): Promise<void>;
  abstract NotifyTaskList(request: CRemoteClient_TaskList_Notification): Promise<void>;
}
