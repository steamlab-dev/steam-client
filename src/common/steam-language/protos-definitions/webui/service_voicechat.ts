/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CVoiceChat_AllMembersStatus_Notification {
  voice_chatid?: Long;
  users?: CVoiceChat_UserVoiceStatus_Notification[];
}

export interface CVoiceChat_AnswerOneOnOneChat_Request {
  voice_chatid?: Long;
  steamid_partner?: Long;
  accepted_request?: boolean;
}

export type CVoiceChat_AnswerOneOnOneChat_Response = Record<string, never>;

export interface CVoiceChat_EndOneOnOneChat_Request {
  steamid_partner?: Long;
}

export type CVoiceChat_EndOneOnOneChat_Response = Record<string, never>;

export interface CVoiceChat_LeaveOneOnOneChat_Request {
  steamid_partner?: Long;
  voice_chatid?: Long;
}

export type CVoiceChat_LeaveOneOnOneChat_Response = Record<string, never>;

export interface CVoiceChat_LeaveVoiceChat_Request {
  voice_chatid?: Long;
}

export type CVoiceChat_LeaveVoiceChat_Response = Record<string, never>;

export interface CVoiceChat_OneOnOneChatRequested_Notification {
  voice_chatid?: Long;
  steamid_partner?: Long;
}

export interface CVoiceChat_OneOnOneChatRequestResponse_Notification {
  voicechat_id?: Long;
  steamid_partner?: Long;
  accepted_request?: boolean;
}

export interface CVoiceChat_RequestOneOnOneChat_Request {
  steamid_partner?: Long;
}

export interface CVoiceChat_RequestOneOnOneChat_Response {
  voice_chatid?: Long;
}

export interface CVoiceChat_UpdateUserVideoStatus_Request {
  voice_chatid?: Long;
  user_steamid?: Long;
  accept_webrtc_video?: boolean;
}

export type CVoiceChat_UpdateUserVideoStatus_Response = Record<string, never>;

export interface CVoiceChat_UpdateVoiceChatWebRTCData_Request {
  voice_chatid?: Long;
  ip_webrtc_server?: number;
  port_webrtc_server?: number;
  ip_webrtc_client?: number;
  port_webrtc_client?: number;
  ssrc_my_sending_stream?: number;
  user_agent?: string;
  has_audio_worklets_support?: boolean;
  has_webrtc_data_channel?: boolean;
  accepts_webrtc_video?: boolean;
  sends_webrtc_video?: boolean;
}

export interface CVoiceChat_UpdateVoiceChatWebRTCData_Response {
  send_client_voice_logs?: boolean;
}

export interface CVoiceChat_UploadClientVoiceChatLogs_Request {
  voice_chatid?: Long;
  client_voice_logs_new_lines?: string;
}

export type CVoiceChat_UploadClientVoiceChatLogs_Response = Record<string, never>;

export interface CVoiceChat_UserJoinedVoiceChat_Notification {
  voice_chatid?: Long;
  user_steamid?: Long;
  chatid?: Long;
  one_on_one_steamid_lower?: Long;
  one_on_one_steamid_higher?: Long;
  chat_group_id?: Long;
  user_sessionid?: number;
}

export interface CVoiceChat_UserLeftVoiceChat_Notification {
  voice_chatid?: Long;
  user_steamid?: Long;
  chatid?: Long;
  one_on_one_steamid_lower?: Long;
  one_on_one_steamid_higher?: Long;
  chat_group_id?: Long;
  user_sessionid?: number;
}

export interface CVoiceChat_UserVoiceStatus_Notification {
  voice_chatid?: Long;
  user_steamid?: Long;
  user_muted_mic_locally?: boolean;
  user_muted_output_locally?: boolean;
  user_has_no_mic_for_session?: boolean;
  user_webaudio_sample_rate?: number;
  user_sends_video?: boolean;
}

export interface CVoiceChat_VoiceChatEnded_Notification {
  voice_chatid?: Long;
  one_on_one_steamid_lower?: Long;
  one_on_one_steamid_higher?: Long;
  chatid?: Long;
  chat_group_id?: Long;
}

export abstract class VoiceChatService {
  abstract AnswerOneOnOneChat(
    request: CVoiceChat_AnswerOneOnOneChat_Request,
  ): Promise<CVoiceChat_AnswerOneOnOneChat_Response>;
  abstract EndOneOnOneChat(
    request: CVoiceChat_EndOneOnOneChat_Request,
  ): Promise<CVoiceChat_EndOneOnOneChat_Response>;
  abstract LeaveOneOnOneChat(
    request: CVoiceChat_LeaveOneOnOneChat_Request,
  ): Promise<CVoiceChat_LeaveOneOnOneChat_Response>;
  abstract LeaveVoiceChat(
    request: CVoiceChat_LeaveVoiceChat_Request,
  ): Promise<CVoiceChat_LeaveVoiceChat_Response>;
  abstract NotifyUserVoiceStatus(request: CVoiceChat_UserVoiceStatus_Notification): Promise<void>;
  abstract RequestOneOnOneChat(
    request: CVoiceChat_RequestOneOnOneChat_Request,
  ): Promise<CVoiceChat_RequestOneOnOneChat_Response>;
  abstract UpdateUserVideoStatus(
    request: CVoiceChat_UpdateUserVideoStatus_Request,
  ): Promise<CVoiceChat_UpdateUserVideoStatus_Response>;
  abstract UpdateVoiceChatWebRTCData(
    request: CVoiceChat_UpdateVoiceChatWebRTCData_Request,
  ): Promise<CVoiceChat_UpdateVoiceChatWebRTCData_Response>;
  abstract UploadClientVoiceChatLogs(
    request: CVoiceChat_UploadClientVoiceChatLogs_Request,
  ): Promise<CVoiceChat_UploadClientVoiceChatLogs_Response>;
}

export abstract class VoiceChatClientService {
  abstract NotifyAllUsersVoiceStatus(
    request: CVoiceChat_AllMembersStatus_Notification,
  ): Promise<void>;
  abstract NotifyOneOnOneChatRequested(
    request: CVoiceChat_OneOnOneChatRequested_Notification,
  ): Promise<void>;
  abstract NotifyOneOnOneChatResponse(
    request: CVoiceChat_OneOnOneChatRequestResponse_Notification,
  ): Promise<void>;
  abstract NotifyUserJoinedVoiceChat(
    request: CVoiceChat_UserJoinedVoiceChat_Notification,
  ): Promise<void>;
  abstract NotifyUserLeftVoiceChat(
    request: CVoiceChat_UserLeftVoiceChat_Notification,
  ): Promise<void>;
  abstract NotifyUserVoiceStatus(request: CVoiceChat_UserVoiceStatus_Notification): Promise<void>;
  abstract NotifyVoiceChatEnded(request: CVoiceChat_VoiceChatEnded_Notification): Promise<void>;
}
