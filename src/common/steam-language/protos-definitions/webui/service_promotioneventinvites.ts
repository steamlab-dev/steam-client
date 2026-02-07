/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPromotionEventInvitation {
  inviteid?: Long;
  appid?: number;
  invite_account?: number;
  rtinvitetime?: number;
  rtexpiretime?: number;
  type?: number;
  accept_account?: number;
  rtaccepttime?: number;
  rtdatechosen?: number;
  discount_eventid?: number;
  packageid?: number;
  bundleid?: number;
  primary_partnerid?: number;
  deadlines?: CPromotionRequirements;
  notify_partner?: boolean;
  additional_email?: string[];
  promotion_id?: string;
  cancelled?: boolean;
  rtime32_cancel_time?: number;
  require_sale_page?: boolean;
  require_sale_page_type?: number;
  admin_notes?: string;
  partner_notes?: string;
}

export interface CPromotionEventInviteReceive {
  accountid?: number;
  partnerid?: number;
  email_address?: string;
}

export interface CPromotionEventInvites_AcceptInvite_Request {
  inviteid?: Long;
  rtdatechosen?: number;
  discount_days?: number;
  discount_info?: string;
  skip_discount_event?: boolean;
}

export interface CPromotionEventInvites_AcceptInvite_Response {
  gid?: Long;
}

export interface CPromotionEventInvites_CancelInvite_Request {
  inviteid?: Long;
}

export type CPromotionEventInvites_CancelInvite_Response = Record<string, never>;

export interface CPromotionEventInvites_GetEmailTargets_Request {
  inviteid?: Long;
}

export interface CPromotionEventInvites_GetEmailTargets_Response {
  targets?: CPromotionEventInviteReceive[];
  additional_email_address?: string[];
  valve_account_ids?: number[];
  operation_email?: string;
}

export interface CPromotionEventInvites_GetInvite_Request {
  inviteid?: Long;
  appid?: number;
  packageid?: number;
  bundleid?: number;
  partnerid?: number;
  promotion_id?: string;
}

export interface CPromotionEventInvites_GetInvite_Response {
  invites?: CPromotionEventInvitation[];
}

export interface CPromotionEventInvites_ResendEmailInvite_Request {
  inviteid?: Long;
  only_notify_additional_email?: boolean;
}

export type CPromotionEventInvites_ResendEmailInvite_Response = Record<string, never>;

export interface CPromotionEventInvites_SetInvite_Request {
  invite?: CPromotionEventInvitation;
  queue_email_to_send?: boolean;
}

export interface CPromotionEventInvites_SetInvite_Response {
  inviteid?: Long;
}

export interface CPromotionRequirements {
  spotlight_due_date?: number;
  marketing_message_due_date?: number;
  discount_event_due_date?: number;
}

export abstract class PromotionEventInvitesService {
  abstract AcceptInvite(
    request: CPromotionEventInvites_AcceptInvite_Request,
  ): Promise<CPromotionEventInvites_AcceptInvite_Response>;
  abstract CancelInvite(
    request: CPromotionEventInvites_CancelInvite_Request,
  ): Promise<CPromotionEventInvites_CancelInvite_Response>;
  abstract GetEmailTargets(
    request: CPromotionEventInvites_GetEmailTargets_Request,
  ): Promise<CPromotionEventInvites_GetEmailTargets_Response>;
  abstract GetInvite(
    request: CPromotionEventInvites_GetInvite_Request,
  ): Promise<CPromotionEventInvites_GetInvite_Response>;
  abstract ResendEmailInvite(
    request: CPromotionEventInvites_ResendEmailInvite_Request,
  ): Promise<CPromotionEventInvites_ResendEmailInvite_Response>;
  abstract SetInvite(
    request: CPromotionEventInvites_SetInvite_Request,
  ): Promise<CPromotionEventInvites_SetInvite_Response>;
}
