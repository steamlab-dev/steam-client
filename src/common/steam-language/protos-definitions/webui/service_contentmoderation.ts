/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface AdditionalSubjectData {
  data?: AdditionalSubjectData_DataEntry[];
}

export interface AdditionalSubjectData_DataEntry {
  key?: string;
  value?: string;
}

export interface CContentModeration_CancelContentReport_Request {
  report_id?: Long;
}

export type CContentModeration_CancelContentReport_Response = Record<string, never>;

export interface CContentModeration_ClaimBatchForModeration_Request {
  accepted_subject_types?: number[];
  support_company?: number;
  accepted_languages?: number[];
  moderator_level?: number;
  disputed?: boolean;
}

export interface CContentModeration_ClaimBatchForModeration_Response {
  selected_subject_type?: number;
  subject?: ContentReportSubject[];
}

export interface CContentModeration_ClaimSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
}

export type CContentModeration_ClaimSubject_Response = Record<string, never>;

export interface CContentModeration_CreateContentReport_Request {
  report_reason?: number;
  report_text?: string;
  owner_steamid?: Long;
  language?: number;
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  additional_subject_data?: AdditionalSubjectData;
  detected_by_automation?: boolean;
}

export interface CContentModeration_CreateContentReport_Response {
  report_id?: Long;
}

export interface CContentModeration_DisputeModerationForReport_Request {
  report_id?: Long;
  details?: string;
}

export type CContentModeration_DisputeModerationForReport_Response = Record<string, never>;

export interface CContentModeration_DisputeModerationForSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  details?: string;
}

export type CContentModeration_DisputeModerationForSubject_Response = Record<string, never>;

export interface CContentModeration_EscalateSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  required_level?: number;
  reason?: number;
}

export type CContentModeration_EscalateSubject_Response = Record<string, never>;

export interface CContentModeration_GetAuditLog_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
}

export interface CContentModeration_GetAuditLog_Response {
  entries?: CContentModeration_GetAuditLog_Response_AuditLogEntry[];
}

export interface CContentModeration_GetAuditLog_Response_AuditLogEntry {
  timestamp?: number;
  actor_steamid?: Long;
  automated_action?: boolean;
  action?: number;
  additional_json_data?: string;
}

export interface CContentModeration_GetClaimed_Request {
  steamid?: Long;
}

export interface CContentModeration_GetClaimed_Response {
  subject?: ContentReportSubject[];
}

export interface CContentModeration_GetContentReportSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
}

export interface CContentModeration_GetContentReportSubject_Response {
  subject?: ContentReportSubject;
}

export interface CContentModeration_GetContentReportSubjectGroup_Request {
  subject_type?: number;
  subject_group_id?: Long;
}

export interface CContentModeration_GetContentReportSubjectGroup_Response {
  subjects?: ContentReportSubject[];
}

export interface CContentModeration_GetModeratorActivity_Request {
  steamid?: Long;
  rt_start?: number;
}

export interface CContentModeration_GetModeratorActivity_Response {
  activities?: CContentModeration_GetModeratorActivity_Response_ModerationActivity[];
}

export interface CContentModeration_GetModeratorActivity_Response_ModerationActivity {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  timestamp?: number;
  action?: number;
  json_data?: string;
}

export interface CContentModeration_GetModeratorPreferences_Request {
  steamid?: Long;
}

export interface CContentModeration_GetModeratorPreferences_Response {
  preferred_level?: number;
  enabled_subject_types?: number[];
}

export interface CContentModeration_GetReportedSubjectsByOwner_Request {
  steamid?: Long;
}

export interface CContentModeration_GetReportedSubjectsByOwner_Response {
  subject?: ContentReportSubject[];
}

export interface CContentModeration_GetReportsSubmittedByUser_Request {
  steamid?: Long;
}

export interface CContentModeration_GetReportsSubmittedByUser_Response {
  content_report?: ContentReport[];
}

export type CContentModeration_GetSubjectOverview_Request = Record<string, never>;

export interface CContentModeration_GetSubjectOverview_Response {
  buckets?: CContentModeration_GetSubjectOverview_Response_Bucket[];
  pending_for_any_moderator?: number;
  pending_for_supervisor?: number;
  pending_for_valve?: number;
}

export interface CContentModeration_GetSubjectOverview_Response_Bucket {
  subject_type?: number;
  unresolved_count?: number;
  oldest_unresolved?: number;
  unclaimed_count?: number;
  oldest_disputed?: number;
  disputed_count?: number;
  unclaimed_disputed_count?: number;
  pending_for_any_moderator?: number;
  pending_for_supervisor?: number;
  pending_for_valve?: number;
  oldest_unresolved_for_any_moderator?: number;
  oldest_unresolved_for_supervisor?: number;
  oldest_unresolved_for_valve?: number;
}

export interface CContentModeration_ReleaseClaimed_Request {
  steamid?: Long;
}

export type CContentModeration_ReleaseClaimed_Response = Record<string, never>;

export interface CContentModeration_ReleaseSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
}

export type CContentModeration_ReleaseSubject_Response = Record<string, never>;

export interface CContentModeration_ResolveDisputedSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  updated_resolution?: number;
  updated_reason?: number;
  updated_sanctions?: ContentReportSubjectSanction[];
}

export type CContentModeration_ResolveDisputedSubject_Response = Record<string, never>;

export interface CContentModeration_ResolveSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  resolution?: number;
  reason?: number;
  note?: string;
  resolved_by_automation?: number;
  skip_lock?: boolean;
  sanctions_applied?: ContentReportSubjectSanction[];
}

export type CContentModeration_ResolveSubject_Response = Record<string, never>;

export interface CContentModeration_ResolveSubjectGroup_Request {
  subject_type?: number;
  subject_group_id?: Long;
  resolution?: number;
  reason?: number;
  note?: string;
  resolved_by_automation?: number;
  sanctions_applied?: ContentReportSubjectSanction[];
}

export type CContentModeration_ResolveSubjectGroup_Response = Record<string, never>;

export interface CContentModeration_SetModeratorPreferences_Request {
  preferred_level?: number;
  enabled_subject_types?: CContentModeration_SetModeratorPreferences_Request_SubjectTypeList;
}

export interface CContentModeration_SetModeratorPreferences_Request_SubjectTypeList {
  subject_types?: number[];
}

export type CContentModeration_SetModeratorPreferences_Response = Record<string, never>;

export interface CContentModeration_UpdateSubject_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  csam_status?: number;
  terrorism_status?: number;
  credible_threat_of_violence_status?: number;
}

export type CContentModeration_UpdateSubject_Response = Record<string, never>;

export interface CContentModeration_WriteToAuditLog_Request {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  action?: number;
  automated_action?: boolean;
  additional_json_data?: string;
  actor_steamid?: Long;
}

export type CContentModeration_WriteToAuditLog_Response = Record<string, never>;

export interface ContentReport {
  report_id?: Long;
  reporter_steamid?: Long;
  time_reported?: number;
  report_reason?: number;
  report_text?: string;
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  resolved?: number;
  time_resolved?: number;
  resolver_steamid?: Long;
  time_notified?: number;
  additional_subject_data?: AdditionalSubjectData;
  time_disputed?: number;
  dispute_details?: string;
  dispute_resolver_steamid?: Long;
  dispute_resolved?: number;
  time_dispute_resolved?: number;
  detected_by_automation?: boolean;
  resolved_by_automation?: number;
  content_moderated_reason?: number;
  dispute_resolved_reason?: number;
  sanctions_applied?: ContentReportSubjectSanction[];
  sanctions_applied_on_dispute?: ContentReportSubjectSanction[];
}

export interface ContentReportSubject {
  subject_type?: number;
  subject_group_id?: Long;
  subject_id?: Long;
  owner_steam_id?: Long;
  language?: number;
  resolved?: number;
  time_resolved?: number;
  unresolved_report_count?: number;
  oldest_unresolved_report_time?: number;
  resolver_steamid?: Long;
  assigned_moderator_steamid?: Long;
  time_claimed_by_moderator?: Long;
  reports?: ContentReport[];
  additional_subject_data?: AdditionalSubjectData;
  csam_status?: number;
  terrorism_status?: number;
  content_moderated_reason?: number;
  unresolved_dispute_count?: number;
  oldest_unresolved_dispute_time?: number;
  dispute_resolved_time?: number;
  dispute_resolver_steamid?: Long;
  dispute_resolved?: number;
  dispute_resolved_reason?: number;
  owner_dispute_time?: number;
  owner_dispute_resolved_time?: number;
  owner_dispute_details?: string;
  required_moderator_level?: number;
  resolved_by_automation?: number;
  detected_by_automation?: boolean;
  credible_threat_of_violence_status?: number;
  sanctions_applied?: ContentReportSubjectSanction[];
  sanctions_applied_after_dispute?: ContentReportSubjectSanction[];
}

export interface ContentReportSubjectSanction {
  sanction?: number;
  days?: number;
}

export abstract class ContentModerationService {
  abstract CancelContentReport(
    request: CContentModeration_CancelContentReport_Request,
  ): Promise<CContentModeration_CancelContentReport_Response>;
  abstract ClaimBatchForModeration(
    request: CContentModeration_ClaimBatchForModeration_Request,
  ): Promise<CContentModeration_ClaimBatchForModeration_Response>;
  abstract ClaimSubject(
    request: CContentModeration_ClaimSubject_Request,
  ): Promise<CContentModeration_ClaimSubject_Response>;
  abstract CreateContentReport(
    request: CContentModeration_CreateContentReport_Request,
  ): Promise<CContentModeration_CreateContentReport_Response>;
  abstract DisputeModerationForReport(
    request: CContentModeration_DisputeModerationForReport_Request,
  ): Promise<CContentModeration_DisputeModerationForReport_Response>;
  abstract DisputeModerationForSubject(
    request: CContentModeration_DisputeModerationForSubject_Request,
  ): Promise<CContentModeration_DisputeModerationForSubject_Response>;
  abstract EscalateSubject(
    request: CContentModeration_EscalateSubject_Request,
  ): Promise<CContentModeration_EscalateSubject_Response>;
  abstract GetAuditLog(
    request: CContentModeration_GetAuditLog_Request,
  ): Promise<CContentModeration_GetAuditLog_Response>;
  abstract GetClaimed(
    request: CContentModeration_GetClaimed_Request,
  ): Promise<CContentModeration_GetClaimed_Response>;
  abstract GetContentReportSubject(
    request: CContentModeration_GetContentReportSubject_Request,
  ): Promise<CContentModeration_GetContentReportSubject_Response>;
  abstract GetContentReportSubjectGroup(
    request: CContentModeration_GetContentReportSubjectGroup_Request,
  ): Promise<CContentModeration_GetContentReportSubjectGroup_Response>;
  abstract GetModeratorActivity(
    request: CContentModeration_GetModeratorActivity_Request,
  ): Promise<CContentModeration_GetModeratorActivity_Response>;
  abstract GetModeratorPreferences(
    request: CContentModeration_GetModeratorPreferences_Request,
  ): Promise<CContentModeration_GetModeratorPreferences_Response>;
  abstract GetReportedSubjectsByOwner(
    request: CContentModeration_GetReportedSubjectsByOwner_Request,
  ): Promise<CContentModeration_GetReportedSubjectsByOwner_Response>;
  abstract GetReportsSubmittedByUser(
    request: CContentModeration_GetReportsSubmittedByUser_Request,
  ): Promise<CContentModeration_GetReportsSubmittedByUser_Response>;
  abstract GetSubjectOverview(
    request: CContentModeration_GetSubjectOverview_Request,
  ): Promise<CContentModeration_GetSubjectOverview_Response>;
  abstract ReleaseClaimed(
    request: CContentModeration_ReleaseClaimed_Request,
  ): Promise<CContentModeration_ReleaseClaimed_Response>;
  abstract ReleaseSubject(
    request: CContentModeration_ReleaseSubject_Request,
  ): Promise<CContentModeration_ReleaseSubject_Response>;
  abstract ResolveDisputedSubject(
    request: CContentModeration_ResolveDisputedSubject_Request,
  ): Promise<CContentModeration_ResolveDisputedSubject_Response>;
  abstract ResolveSubject(
    request: CContentModeration_ResolveSubject_Request,
  ): Promise<CContentModeration_ResolveSubject_Response>;
  abstract ResolveSubjectGroup(
    request: CContentModeration_ResolveSubjectGroup_Request,
  ): Promise<CContentModeration_ResolveSubjectGroup_Response>;
  abstract SetModeratorPreferences(
    request: CContentModeration_SetModeratorPreferences_Request,
  ): Promise<CContentModeration_SetModeratorPreferences_Response>;
  abstract UpdateSubject(
    request: CContentModeration_UpdateSubject_Request,
  ): Promise<CContentModeration_UpdateSubject_Response>;
  abstract WriteToAuditLog(
    request: CContentModeration_WriteToAuditLog_Request,
  ): Promise<CContentModeration_WriteToAuditLog_Response>;
}
