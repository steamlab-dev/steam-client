/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const GCProtoBufMsgSrc = {
  GCProtoBufMsgSrc_Unspecified: 0,
  GCProtoBufMsgSrc_FromSystem: 1,
  GCProtoBufMsgSrc_FromSteamID: 2,
  GCProtoBufMsgSrc_FromGC: 3,
  GCProtoBufMsgSrc_ReplySystem: 4,
} as const;

export type GCProtoBufMsgSrc = (typeof GCProtoBufMsgSrc)[keyof typeof GCProtoBufMsgSrc];

export interface CMsgProtoBufHeader {
  client_steam_id?: Long;
  client_session_id?: number;
  source_app_id?: number;
  job_id_source?: Long;
  job_id_target?: Long;
  target_job_name?: string;
  eresult?: number;
  error_message?: string;
  ip?: number;
  gc_msg_src?: GCProtoBufMsgSrc;
  gc_dir_index_source?: number;
}

export interface CChinaAgreementSessions_StartAgreementSessionInGame_Request {
  appid?: number;
  steamid?: Long;
  client_ipaddress?: string;
}

export interface CChinaAgreementSessions_StartAgreementSessionInGame_Response {
  agreement_url?: string;
}
