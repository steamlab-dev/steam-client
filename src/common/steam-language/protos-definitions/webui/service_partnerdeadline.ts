/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPartnerDeadline {
  partnerid?: number;
  type?: number;
  status?: number;
  due_date?: number;
  email_days_before_due?: number[];
  gid?: Long;
  store_item_type?: number;
  store_item_id?: number;
  discount_event_id?: number;
  description_jsondata?: string;
  required_rights?: Long;
  send_email_on_creation?: boolean;
  accountid?: number;
}

export interface CPartnerDeadline_GetDeadlineByTimeRange_Request {
  type?: number;
  start_date?: number;
  end_date?: number;
  include_complete?: boolean;
  store_item_type?: number;
  store_item_id?: number;
}

export interface CPartnerDeadline_GetDeadlineByTimeRange_Response {
  deadlines?: CPartnerDeadline_GetDeadlineByTimeRange_Response_Result[];
}

export interface CPartnerDeadline_GetDeadlineByTimeRange_Response_Result {
  deadlineid?: Long;
  data?: CPartnerDeadline;
}

export interface CPartnerDeadline_GetDeadlinesForPartner_Request {
  partnerid?: number;
  start_date?: number;
  end_date?: number;
  include_complete?: boolean;
  lookup_key?: CPartnerDeadlineLookUpKey[];
  accountid?: number;
}

export interface CPartnerDeadline_GetDeadlinesForPartner_Response {
  deadlines?: CPartnerDeadline_GetDeadlinesForPartner_Response_Result[];
}

export interface CPartnerDeadline_GetDeadlinesForPartner_Response_Result {
  deadlineid?: Long;
  data?: CPartnerDeadline;
}

export interface CPartnerDeadlineLookUpKey {
  deadlineid?: Long;
  partnerid?: number;
  type?: number;
  gid?: Long;
  store_item_type?: number;
  store_item_id?: number;
  discount_event_id?: number;
  accountid?: number;
}

export abstract class PartnerDeadlineService {
  abstract GetDeadlineByTimeRange(
    request: CPartnerDeadline_GetDeadlineByTimeRange_Request,
  ): Promise<CPartnerDeadline_GetDeadlineByTimeRange_Response>;
  abstract GetDeadlinesForPartner(
    request: CPartnerDeadline_GetDeadlinesForPartner_Request,
  ): Promise<CPartnerDeadline_GetDeadlinesForPartner_Response>;
}
