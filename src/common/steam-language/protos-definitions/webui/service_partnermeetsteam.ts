/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CParterMeetSteam_TestFireEmails_Request {
  clan_event_gid?: Long;
  steamid?: Long;
}

export interface CParterMeetSteam_TestFireEmails_Response {
  sessionids?: number[];
}

export interface CPartnerEmailAndName {
  accountid?: number;
  partnerid?: number;
  realname?: string;
  email?: string;
}

export interface CPartnerMeetSteam_EmailInvitees_Request {
  clan_event_gid?: Long;
  steamid?: Long;
}

export interface CPartnerMeetSteam_EmailInvitees_Response {
  num_emailed?: number;
  num_skipped?: number;
}

export interface CPartnerMeetSteam_GetAvailability_Request {
  clan_event_gid?: Long;
}

export interface CPartnerMeetSteam_GetAvailability_Response {
  availability?: CPartnerMeetSteam_GetAvailability_Response_Session[];
}

export interface CPartnerMeetSteam_GetAvailability_Response_Session {
  group_id?: number;
  session_id?: number;
  guest_count?: number;
}

export interface CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request {
  accountids?: number[];
  partnerids?: number[];
}

export interface CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response {
  info?: CPartnerEmailAndName[];
}

export interface CPartnerMeetSteam_GetRegistrations_Request {
  clan_event_gid?: Long;
  steamid?: Long;
}

export interface CPartnerMeetSteam_GetRegistrations_Response {
  registrations?: CPartnerMeetSteam_GetRegistrations_Response_Registration[];
}

export interface CPartnerMeetSteam_GetRegistrations_Response_Registration {
  group_id?: number;
  session_id?: number;
  steamid?: Long;
  guests_registered?: number;
  jsondata?: string;
  rt_attendance_marked?: number;
  attendance_count?: number;
  guests_attendance?: string;
}

export interface CPartnerMeetSteam_GetSaleEventOrganizers_Request {
  rt_oldest_date?: number;
}

export interface CPartnerMeetSteam_GetSaleEventOrganizers_Response {
  info?: CSaleEventOrganizerInfo[];
}

export interface CPartnerMeetSteam_UpdateRegistration_Request {
  clan_event_gid?: Long;
  steamid?: Long;
  registration_group_id?: number;
  registration_session_id?: number;
  guest_count?: number;
  jsondata?: string;
  skip_email?: boolean;
}

export type CPartnerMeetSteam_UpdateRegistration_Response = Record<string, never>;

export interface CSaleEventOrganizerInfo {
  accountid?: number;
  clan_event_gids?: Long[];
}

export abstract class PartnerMeetSteamService {
  abstract EmailInvitees(
    request: CPartnerMeetSteam_EmailInvitees_Request,
  ): Promise<CPartnerMeetSteam_EmailInvitees_Response>;
  abstract GetAvailability(
    request: CPartnerMeetSteam_GetAvailability_Request,
  ): Promise<CPartnerMeetSteam_GetAvailability_Response>;
  abstract GetBatchPartnerEmailAndName(
    request: CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request,
  ): Promise<CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response>;
  abstract GetRegistrations(
    request: CPartnerMeetSteam_GetRegistrations_Request,
  ): Promise<CPartnerMeetSteam_GetRegistrations_Response>;
  abstract GetSaleEventOrganizers(
    request: CPartnerMeetSteam_GetSaleEventOrganizers_Request,
  ): Promise<CPartnerMeetSteam_GetSaleEventOrganizers_Response>;
  abstract TestFireEmails(
    request: CParterMeetSteam_TestFireEmails_Request,
  ): Promise<CParterMeetSteam_TestFireEmails_Response>;
  abstract UpdateRegistration(
    request: CPartnerMeetSteam_UpdateRegistration_Request,
  ): Promise<CPartnerMeetSteam_UpdateRegistration_Response>;
}
