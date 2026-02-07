/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface COptInDef {
  opt_in_name?: string;
  type?: number;
  active?: boolean;
  start_date?: number;
  end_date?: number;
  jsondata?: string;
  opt_in_id?: number;
  last_modified_time?: number;
  last_modifier_accountid?: number;
}

export interface CPartnerAppOptInData {
  appid?: number;
  opt_in?: boolean;
  opt_in_name?: string;
  jsondata?: string;
  type?: number;
  accountid_add?: number;
  time_opted_in?: number;
  time_updated?: number;
  accountid_lastmod?: number;
  invited?: boolean;
  accountid_remove?: number;
  time_opted_out?: number;
  pruned?: boolean;
  accountid_prune?: number;
  time_pruned?: number;
  additional_featuring?: boolean;
  feature_day?: number;
  accountid_invited?: number;
  no_planned_discount?: boolean;
  pending_review?: number;
  appeal_state?: number;
  accountid_appeal?: number;
  time_appeal_decision?: number;
}

export interface CPartnerAppOptInEmailDef {
  opt_in_name?: string;
  targeting_flag?: Long;
  settings_flag?: Long;
  email_templates?: string;
  start_rtime?: number;
  end_rtime?: number;
  stats?: CPartnerAppOptInEmailStats;
  creator_accountid?: number;
  create_time?: number;
  last_update_time?: number;
  email_def_id?: Long;
  completed?: boolean;
  aborted?: boolean;
  deleted?: boolean;
  reviewed?: boolean;
}

export interface CPartnerAppOptInEmailStats {
  accounts_examined?: number;
  accounts_emailed?: number;
  accounts_not_emailed_opted_out?: number;
  accounts_email_failed?: number;
  completed?: boolean;
  rt_last_updated?: number;
}

export interface CPartnerOptInEmailTracking {
  accountid?: number;
  appid?: number;
  partnerid?: number;
  rtime_notified?: number;
  ignored_unverified_email?: boolean;
  ignored_email_optout?: boolean;
  status?: number;
  send_rtime?: number;
}

export interface CPublishing_CreatePartnerAppOptInEmail_Request {
  opt_in_name?: string;
  targeting_flag?: Long;
  settings_flag?: Long;
  email_templates?: string;
  start_rtime?: number;
  end_rtime?: number;
}

export interface CPublishing_CreatePartnerAppOptInEmail_Response {
  email_def_id?: Long;
}

export interface CPublishing_GetEstimatePartnerAppOptInEmail_Request {
  email_def_id?: Long;
}

export interface CPublishing_GetEstimatePartnerAppOptInEmail_Response {
  stats?: CPartnerAppOptInEmailStats;
}

export interface CPublishing_GetOptInAppealsSummaryStats_Request {
  opt_in_names?: string[];
}

export interface CPublishing_GetOptInAppealsSummaryStats_Response {
  summary?: CPublishing_GetOptInAppealsSummaryStats_Response_CSummary[];
}

export interface CPublishing_GetOptInAppealsSummaryStats_Response_CSummary {
  opt_in_name?: string;
  open_appeals?: number;
  reject_appeals?: number;
  accepted_appeals?: number;
  appeal_account_id?: number;
}

export interface CPublishing_GetOptInEmailTracking_Request {
  email_def_id?: Long;
}

export interface CPublishing_GetOptInEmailTracking_Response {
  email_def_id?: Long;
  results?: CPartnerOptInEmailTracking[];
}

export interface CPublishing_GetOptInHistoryInternal_Request {
  opt_in_name?: string;
  start?: number;
  count?: number;
  include_json?: boolean;
}

export interface CPublishing_GetOptInHistoryInternal_Response {
  opt_ins?: COptInDef[];
}

export interface CPublishing_GetPartnerAppOptInEmailDefAndStats_Request {
  opt_in_name?: string;
}

export interface CPublishing_GetPartnerAppOptInEmailDefAndStats_Response {
  defs?: CPartnerAppOptInEmailDef[];
}

export interface CPublishing_GetPartnerAppOptInsIDs_Request {
  opt_in_name?: string;
}

export interface CPublishing_GetPartnerAppOptInsIDs_Response {
  opted_in_appids?: number[];
}

export interface CPublishing_GetPartnerPaidGivenPackageList_Request {
  packageids?: number[];
}

export interface CPublishing_GetPartnerPaidGivenPackageList_Response {
  paid?: CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair[];
}

export interface CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair {
  partnerid?: number;
  packageid?: number;
}

export interface CPublishing_GetSinglePartnerAppOptIns_Request {
  appid?: number;
  opt_in_name?: string;
}

export interface CPublishing_GetSinglePartnerAppOptIns_Response {
  data?: CPartnerAppOptInData[];
}

export interface CPublishing_SendPartnerAppOptInEmailAndWait_Request {
  email_def_id?: Long;
  force_resend?: boolean;
}

export interface CPublishing_SendPartnerAppOptInEmailAndWait_Response {
  results?: CPartnerAppOptInEmailStats;
}

export interface CPublishing_SetFeaturingOnPartnerAppOptIn_Request {
  appids?: number[];
  additional_featuring?: boolean;
  opt_in_name?: string;
}

export interface CPublishing_SetFeaturingOnPartnerAppOptIn_Response {
  appids?: number[];
}

export interface CPublishing_TestFirePartnerAppOptInEmail_Request {
  email_def_id?: Long;
  appid?: number;
  partnerid?: number;
  language_override?: number;
}

export type CPublishing_TestFirePartnerAppOptInEmail_Response = Record<string, never>;

export interface CPublishing_UpdatePartnerAppOptInEmail_Request {
  email_def_id?: Long;
  targeting_flag?: Long;
  settings_flag?: Long;
  email_templates?: string;
  start_rtime?: number;
  end_rtime?: number;
  reviewed?: boolean;
}

export type CPublishing_UpdatePartnerAppOptInEmail_Response = Record<string, never>;

export abstract class PublishingService {
  abstract CreatePartnerAppOptInEmails(
    request: CPublishing_CreatePartnerAppOptInEmail_Request,
  ): Promise<CPublishing_CreatePartnerAppOptInEmail_Response>;
  abstract GetEstimatePartnerAppOptInEmail(
    request: CPublishing_GetEstimatePartnerAppOptInEmail_Request,
  ): Promise<CPublishing_GetEstimatePartnerAppOptInEmail_Response>;
  abstract GetOptInAppealsSummaryStats(
    request: CPublishing_GetOptInAppealsSummaryStats_Request,
  ): Promise<CPublishing_GetOptInAppealsSummaryStats_Response>;
  abstract GetOptInEmailTracking(
    request: CPublishing_GetOptInEmailTracking_Request,
  ): Promise<CPublishing_GetOptInEmailTracking_Response>;
  abstract GetOptInHistoryInternal(
    request: CPublishing_GetOptInHistoryInternal_Request,
  ): Promise<CPublishing_GetOptInHistoryInternal_Response>;
  abstract GetPartnerAppOptInEmailDefAndStats(
    request: CPublishing_GetPartnerAppOptInEmailDefAndStats_Request,
  ): Promise<CPublishing_GetPartnerAppOptInEmailDefAndStats_Response>;
  abstract GetPartnerAppOptInsIDs(
    request: CPublishing_GetPartnerAppOptInsIDs_Request,
  ): Promise<CPublishing_GetPartnerAppOptInsIDs_Response>;
  abstract GetPartnerPaidGivenPackageList(
    request: CPublishing_GetPartnerPaidGivenPackageList_Request,
  ): Promise<CPublishing_GetPartnerPaidGivenPackageList_Response>;
  abstract GetSinglePartnerAppOptIn(
    request: CPublishing_GetSinglePartnerAppOptIns_Request,
  ): Promise<CPublishing_GetSinglePartnerAppOptIns_Response>;
  abstract SendPartnerOptInEmailAndWait(
    request: CPublishing_SendPartnerAppOptInEmailAndWait_Request,
  ): Promise<CPublishing_SendPartnerAppOptInEmailAndWait_Response>;
  abstract SetFeaturingOnPartnerAppOptIn(
    request: CPublishing_SetFeaturingOnPartnerAppOptIn_Request,
  ): Promise<CPublishing_SetFeaturingOnPartnerAppOptIn_Response>;
  abstract TestFirePartnerAppOptInEmail(
    request: CPublishing_TestFirePartnerAppOptInEmail_Request,
  ): Promise<CPublishing_TestFirePartnerAppOptInEmail_Response>;
  abstract UpdatePartnerAppOptInEmails(
    request: CPublishing_UpdatePartnerAppOptInEmail_Request,
  ): Promise<CPublishing_UpdatePartnerAppOptInEmail_Response>;
}
