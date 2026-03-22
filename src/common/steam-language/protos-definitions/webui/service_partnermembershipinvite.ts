/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CPartnerMembershipInvite_GetInvites_Request {
  partnerid?: number;
  filter_states?: number[];
}

export interface CPartnerMembershipInvite_GetInvites_Response {
  invites?: MembershipInvite[];
}

export interface MembershipInvite {
  inviteid?: bigint;
  accountid_sender?: number;
  email?: string;
  real_name?: string;
  note?: string;
  time_sent?: number;
  current_state?: number;
  pub_rights?: bigint;
  app_rights?: bigint;
  time_receiver_responded?: number;
  accountid?: number;
  time_partner_responded?: number;
  accountid_partner?: number;
  partnerid?: number;
  time_last_updated?: number;
  sender_ip?: string;
}

export abstract class PartnerMembershipInviteService {
  abstract GetInvites(
    request: CPartnerMembershipInvite_GetInvites_Request,
  ): Promise<CPartnerMembershipInvite_GetInvites_Response>;
}
