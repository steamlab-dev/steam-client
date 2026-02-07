/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CDismissPinData {
  state?: number;
  accountid?: number;
  key_json?: string;
  partnerid?: number;
  rtime_create?: number;
  rtime_validity?: number;
  dismiss_id?: Long;
}

export interface CPartnerDismiss_CreateDismiss_Request {
  dismiss_list?: CDismissPinData[];
}

export interface CPartnerDismiss_CreateDismiss_Response {
  dismiss_list?: CDismissPinData[];
}

export interface CPartnerDismiss_DeleteDismiss_Request {
  dismiss_id?: Long;
}

export type CPartnerDismiss_DeleteDismiss_Response = Record<string, never>;

export interface CPartnerDismiss_GetDismissTimeRange_Request {
  partnerid?: number;
  accountid?: number;
  rtime_after?: number;
}

export interface CPartnerDismiss_GetDismissTimeRange_Response {
  dismiss_list?: CDismissPinData[];
}

export abstract class PartnerDismissService {
  abstract CreateDismiss(
    request: CPartnerDismiss_CreateDismiss_Request,
  ): Promise<CPartnerDismiss_CreateDismiss_Response>;
  abstract DeleteDismiss(
    request: CPartnerDismiss_DeleteDismiss_Request,
  ): Promise<CPartnerDismiss_DeleteDismiss_Response>;
  abstract GetDismissTimeRange(
    request: CPartnerDismiss_GetDismissTimeRange_Request,
  ): Promise<CPartnerDismiss_GetDismissTimeRange_Response>;
}
