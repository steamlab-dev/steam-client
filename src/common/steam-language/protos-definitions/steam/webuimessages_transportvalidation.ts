/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export interface CTransportValidation_AppendToString_Request {
  append_strings?: string[];
}

export interface CTransportValidation_AppendToString_Response {
  combined_text?: string;
}

export interface CTransportValidation_NotifyText_Notification {
  text?: string;
}

export interface CTransportValidation_NotifyNumber_Notification {
  number?: number;
}

export type CTransportValidation_GetLastNotifyNumber_Request = Record<string, never>;

export interface CTransportValidation_GetLastNotifyNumber_Response {
  last_notify_number?: number;
}

export interface CTransportValidation_TriggerSyntheticEvents_Request {
  count?: number;
}

export type CTransportValidation_TriggerSyntheticEvents_Response = Record<string, never>;

export interface CTransportValidation_NotifySyntheticEvent_Notification {
  sequence?: number;
}

export type CTransportValidation_TriggerDataRequest_Request = Record<string, never>;

export interface CTransportValidation_TriggerDataRequest_Response {
  data?: number;
}

export type CTransportValidation_DataRequest_Request = Record<string, never>;

export interface CTransportValidation_DataRequest_Response {
  data?: number;
}

export interface CTransportValidation_AddNumbers_Request {
  numbers?: number[];
}

export interface CTransportValidation_AddNumbers_Response {
  accumulated?: number;
}

export interface CTransportValidation_CountOrderedBytes_Request {
  ordered_bytes?: Buffer;
}

export interface CTransportValidation_CountOrderedBytes_Response {
  byte_count?: number;
}

export interface CTransportValidation_ThreadedCount_Request {
  start_num?: number;
  end_num?: number;
}

export type CTransportValidation_ThreadedCount_Response = Record<string, never>;

export interface CTransportValidation_NotifyCount_Notification {
  num?: number;
}

export type CTransportValidation_RequestInvalidBool_Request = Record<string, never>;

export interface CTransportValidation_RequestInvalidBool_Response {
  before?: number;
  output?: boolean;
  after?: number;
}

export interface CTransportValidation_GetLargeResponse_Request {
  data_size?: number;
}

export interface CTransportValidation_GetLargeResponse_Response {
  data?: Buffer;
}

export interface CTransportValidation_RequestLargeNotification_Request {
  data_size?: number;
}

export type CTransportValidation_RequestLargeNotification_Response = Record<string, never>;

export interface CTransportValidation_NotifyLarge_Notification {
  data?: Buffer;
}

export interface CTransportValidationClient_AddNumbers_Request {
  numbers?: number[];
}

export interface CTransportValidationClient_AddNumbers_Response {
  accumulated?: number;
}

export abstract class TransportValidationService {
  abstract AppendToString(
    request: CTransportValidation_AppendToString_Request,
  ): Promise<CTransportValidation_AppendToString_Response>;
  abstract AddNumbers(
    request: CTransportValidation_AddNumbers_Request,
  ): Promise<CTransportValidation_AddNumbers_Response>;
  abstract AddNumbersStatic(
    request: CTransportValidation_AddNumbers_Request,
  ): Promise<CTransportValidation_AddNumbers_Response>;
  abstract NotifyText(
    request: CTransportValidation_NotifyText_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyNumber(
    request: CTransportValidation_NotifyNumber_Notification,
  ): Promise<WebUINoResponse>;
  abstract GetLastNotifyNumber(
    request: CTransportValidation_GetLastNotifyNumber_Request,
  ): Promise<CTransportValidation_GetLastNotifyNumber_Response>;
  abstract NotifySyntheticEvent(
    request: CTransportValidation_NotifySyntheticEvent_Notification,
  ): Promise<WebUINoResponse>;
  abstract TriggerSyntheticEvents(
    request: CTransportValidation_TriggerSyntheticEvents_Request,
  ): Promise<CTransportValidation_TriggerSyntheticEvents_Response>;
  abstract CountOrderedBytes(
    request: CTransportValidation_CountOrderedBytes_Request,
  ): Promise<CTransportValidation_CountOrderedBytes_Response>;
  abstract ThreadedCount(
    request: CTransportValidation_ThreadedCount_Request,
  ): Promise<CTransportValidation_ThreadedCount_Response>;
  abstract NotifyCount(
    request: CTransportValidation_NotifyCount_Notification,
  ): Promise<WebUINoResponse>;
  abstract RequestInvalidBool(
    request: CTransportValidation_RequestInvalidBool_Request,
  ): Promise<CTransportValidation_RequestInvalidBool_Response>;
  abstract GetLargeResponse(
    request: CTransportValidation_GetLargeResponse_Request,
  ): Promise<CTransportValidation_GetLargeResponse_Response>;
  abstract RequestLargeNotification(
    request: CTransportValidation_RequestLargeNotification_Request,
  ): Promise<CTransportValidation_RequestLargeNotification_Response>;
  abstract NotifyLarge(
    request: CTransportValidation_NotifyLarge_Notification,
  ): Promise<WebUINoResponse>;
}

export abstract class TransportValidationClientService {
  abstract AddNumbers(
    request: CTransportValidationClient_AddNumbers_Request,
  ): Promise<CTransportValidationClient_AddNumbers_Response>;
}
