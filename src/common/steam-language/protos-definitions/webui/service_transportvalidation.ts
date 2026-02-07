/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CTransportValidation_AppendToString_Request,
  CTransportValidation_AppendToString_Response,
} from "./common";

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

export interface CTransportValidation_GetLargeResponse_Request {
  data_size?: number;
}

export interface CTransportValidation_GetLargeResponse_Response {
  data?: Buffer;
}

export type CTransportValidation_GetLastNotifyNumber_Request = Record<string, never>;

export interface CTransportValidation_GetLastNotifyNumber_Response {
  last_notify_number?: number;
}

export interface CTransportValidation_NotifyCount_Notification {
  num?: number;
}

export interface CTransportValidation_NotifyLarge_Notification {
  data?: Buffer;
}

export interface CTransportValidation_NotifyNumber_Notification {
  number?: number;
}

export interface CTransportValidation_NotifySyntheticEvent_Notification {
  sequence?: number;
}

export interface CTransportValidation_NotifyText_Notification {
  text?: string;
}

export type CTransportValidation_RequestInvalidBool_Request = Record<string, never>;

export interface CTransportValidation_RequestInvalidBool_Response {
  before?: number;
  output?: boolean;
  after?: number;
}

export interface CTransportValidation_RequestLargeNotification_Request {
  data_size?: number;
}

export type CTransportValidation_RequestLargeNotification_Response = Record<string, never>;

export interface CTransportValidation_ThreadedCount_Request {
  start_num?: number;
  end_num?: number;
}

export type CTransportValidation_ThreadedCount_Response = Record<string, never>;

export interface CTransportValidation_TriggerSyntheticEvents_Request {
  count?: number;
}

export type CTransportValidation_TriggerSyntheticEvents_Response = Record<string, never>;

export interface CTransportValidationClient_AddNumbers_Request {
  numbers?: number[];
}

export interface CTransportValidationClient_AddNumbers_Response {
  accumulated?: number;
}

export abstract class TransportValidationService {
  abstract AddNumbers(
    request: CTransportValidation_AddNumbers_Request,
  ): Promise<CTransportValidation_AddNumbers_Response>;
  abstract AddNumbersStatic(
    request: CTransportValidation_AddNumbers_Request,
  ): Promise<CTransportValidation_AddNumbers_Response>;
  abstract AppendToString(
    request: CTransportValidation_AppendToString_Request,
  ): Promise<CTransportValidation_AppendToString_Response>;
  abstract CountOrderedBytes(
    request: CTransportValidation_CountOrderedBytes_Request,
  ): Promise<CTransportValidation_CountOrderedBytes_Response>;
  abstract GetLargeResponse(
    request: CTransportValidation_GetLargeResponse_Request,
  ): Promise<CTransportValidation_GetLargeResponse_Response>;
  abstract GetLastNotifyNumber(
    request: CTransportValidation_GetLastNotifyNumber_Request,
  ): Promise<CTransportValidation_GetLastNotifyNumber_Response>;
  abstract NotifyCount(request: CTransportValidation_NotifyCount_Notification): Promise<void>;
  abstract NotifyLarge(request: CTransportValidation_NotifyLarge_Notification): Promise<void>;
  abstract NotifyNumber(request: CTransportValidation_NotifyNumber_Notification): Promise<void>;
  abstract NotifySyntheticEvent(
    request: CTransportValidation_NotifySyntheticEvent_Notification,
  ): Promise<void>;
  abstract NotifyText(request: CTransportValidation_NotifyText_Notification): Promise<void>;
  abstract RequestInvalidBool(
    request: CTransportValidation_RequestInvalidBool_Request,
  ): Promise<CTransportValidation_RequestInvalidBool_Response>;
  abstract RequestLargeNotification(
    request: CTransportValidation_RequestLargeNotification_Request,
  ): Promise<CTransportValidation_RequestLargeNotification_Response>;
  abstract ThreadedCount(
    request: CTransportValidation_ThreadedCount_Request,
  ): Promise<CTransportValidation_ThreadedCount_Response>;
  abstract TriggerSyntheticEvents(
    request: CTransportValidation_TriggerSyntheticEvents_Request,
  ): Promise<CTransportValidation_TriggerSyntheticEvents_Response>;
}

export abstract class TransportValidationClientService {
  abstract AddNumbers(
    request: CTransportValidationClient_AddNumbers_Request,
  ): Promise<CTransportValidationClient_AddNumbers_Response>;
}
