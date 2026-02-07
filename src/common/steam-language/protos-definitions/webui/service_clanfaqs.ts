/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CClanFAQContent {
  faq_id?: Long;
  language?: number;
  version?: Long;
  content?: string;
  title?: string;
  timestamp?: number;
  author_account_id?: Long;
  url_code?: string;
}

export interface CClanFAQS_CheckFAQPermissions_Request {
  steamid?: Long;
}

export type CClanFAQS_CheckFAQPermissions_Response = Record<string, never>;

export interface CClanFAQS_Create_Request {
  steamid?: Long;
  internal_name?: string;
  json_data?: string;
}

export interface CClanFAQS_Create_Response {
  faq_id?: Long;
}

export interface CClanFAQS_Delete_Request {
  steamid?: Long;
  faq_id?: Long;
}

export type CClanFAQS_Delete_Response = Record<string, never>;

export interface CClanFAQs_FetchLocalizationFromCrowdIn_Request {
  faq_id?: Long;
  language?: number;
  steamid?: Long;
}

export type CClanFAQs_FetchLocalizationFromCrowdIn_Response = Record<string, never>;

export interface CClanFAQS_GetAllDrafts_Request {
  steamid?: Long;
  faq_id?: Long;
}

export interface CClanFAQS_GetAllDrafts_Response {
  summary?: CClanFAQSummary;
  draft?: CClanFAQContent[];
}

export interface CClanFAQS_GetAllFAQsForClan_Request {
  steamid?: Long;
}

export interface CClanFAQS_GetAllFAQsForClan_Response {
  faq?: CClanFAQSummary[];
}

export interface CClanFAQS_GetAllLatestVersionPublishedFAQS_Request {
  steamid?: Long;
  faq_id?: Long;
}

export interface CClanFAQS_GetAllLatestVersionPublishedFAQS_Response {
  faqs?: CClanFAQContent[];
}

export interface CClanFAQs_GetCrowdInMetadata_Request {
  faq_id?: Long;
  steamid?: Long;
}

export interface CClanFAQs_GetCrowdInMetadata_Response {
  crowdin_project_id?: Long;
  crowdin_file_id?: Long;
}

export interface CClanFAQS_GetFAQ_Request {
  faq_id?: Long;
  language?: number;
}

export interface CClanFAQS_GetFAQ_Response {
  faq?: CClanFAQContent;
  faq_exists?: boolean;
}

export interface CClanFAQS_GetFAQVersion_Request {
  steamid?: Long;
  faq_id?: Long;
  language?: number;
  version?: Long;
}

export interface CClanFAQS_GetFAQVersion_Response {
  faq?: CClanFAQContent;
}

export interface CClanFAQS_PreviewDraft_Request {
  steamid?: Long;
  faq_id?: Long;
  language?: number;
}

export interface CClanFAQS_PreviewDraft_Response {
  faq?: CClanFAQContent;
}

export interface CClanFAQS_PublishDraft_Request {
  steamid?: Long;
  faq_id?: Long;
  language?: number[];
}

export interface CClanFAQS_PublishDraft_Response {
  last_publish_timestamp?: number;
}

export interface CClanFAQS_SearchFAQs_Request {
  search_text?: string;
  elanguages?: number[];
  count?: number;
  cursor?: string;
  filter_clanids?: number[];
}

export interface CClanFAQS_SearchFAQs_Response {
  faqs?: CClanFAQS_SearchFAQs_Response_CFAQSearchResult[];
  num_total_results?: number;
  next_cursor?: string;
}

export interface CClanFAQS_SearchFAQs_Response_CFAQSearchResult {
  articleid?: Long;
  name?: string;
  content?: string;
  clan_accountid?: number;
  url_code?: string;
  localized_names?: string[];
}

export interface CClanFAQS_SetVisibility_Request {
  steamid?: Long;
  faq_id?: Long;
  visible_in_global_realm?: boolean;
  visible_in_china_realm?: boolean;
}

export type CClanFAQS_SetVisibility_Response = Record<string, never>;

export interface CClanFAQS_UpdateDraft_Request {
  steamid?: Long;
  faq_id?: Long;
  language?: number;
  content?: string;
  title?: string;
}

export interface CClanFAQS_UpdateDraft_Response {
  last_update_timestamp?: number;
}

export interface CClanFAQS_UpdateInternalName_Request {
  steamid?: Long;
  faq_id?: Long;
  internal_name?: string;
}

export type CClanFAQS_UpdateInternalName_Response = Record<string, never>;

export interface CClanFAQS_UpdateJsonData_Request {
  steamid?: Long;
  faq_id?: Long;
  json_data?: string;
}

export type CClanFAQS_UpdateJsonData_Response = Record<string, never>;

export interface CClanFAQSummary {
  faq_id?: Long;
  internal_name?: string;
  visible_in_global_realm?: boolean;
  visible_in_china_realm?: boolean;
  json_data?: string;
  per_language_info?: CClanFAQSummary_CLanguageInfo[];
  url_code?: string;
}

export interface CClanFAQSummary_CLanguageInfo {
  language?: number;
  last_update_timestamp?: number;
  last_publish_timestamp?: number;
}

export abstract class ClanFAQSService {
  abstract CheckFAQPermissions(
    request: CClanFAQS_CheckFAQPermissions_Request,
  ): Promise<CClanFAQS_CheckFAQPermissions_Response>;
  abstract Create(request: CClanFAQS_Create_Request): Promise<CClanFAQS_Create_Response>;
  abstract Delete(request: CClanFAQS_Delete_Request): Promise<CClanFAQS_Delete_Response>;
  abstract FetchLocalizationFromCrowdIn(
    request: CClanFAQs_FetchLocalizationFromCrowdIn_Request,
  ): Promise<CClanFAQs_FetchLocalizationFromCrowdIn_Response>;
  abstract GetAllDrafts(
    request: CClanFAQS_GetAllDrafts_Request,
  ): Promise<CClanFAQS_GetAllDrafts_Response>;
  abstract GetAllFAQsForClan(
    request: CClanFAQS_GetAllFAQsForClan_Request,
  ): Promise<CClanFAQS_GetAllFAQsForClan_Response>;
  abstract GetAllLatestVersionPublishedFAQS(
    request: CClanFAQS_GetAllLatestVersionPublishedFAQS_Request,
  ): Promise<CClanFAQS_GetAllLatestVersionPublishedFAQS_Response>;
  abstract GetCrowdInMetadata(
    request: CClanFAQs_GetCrowdInMetadata_Request,
  ): Promise<CClanFAQs_GetCrowdInMetadata_Response>;
  abstract GetFAQ(request: CClanFAQS_GetFAQ_Request): Promise<CClanFAQS_GetFAQ_Response>;
  abstract GetFAQVersion(
    request: CClanFAQS_GetFAQVersion_Request,
  ): Promise<CClanFAQS_GetFAQVersion_Response>;
  abstract PreviewDraft(
    request: CClanFAQS_PreviewDraft_Request,
  ): Promise<CClanFAQS_PreviewDraft_Response>;
  abstract PublishDraft(
    request: CClanFAQS_PublishDraft_Request,
  ): Promise<CClanFAQS_PublishDraft_Response>;
  abstract SearchFAQs(
    request: CClanFAQS_SearchFAQs_Request,
  ): Promise<CClanFAQS_SearchFAQs_Response>;
  abstract SetVisibility(
    request: CClanFAQS_SetVisibility_Request,
  ): Promise<CClanFAQS_SetVisibility_Response>;
  abstract UpdateDraft(
    request: CClanFAQS_UpdateDraft_Request,
  ): Promise<CClanFAQS_UpdateDraft_Response>;
  abstract UpdateInternalName(
    request: CClanFAQS_UpdateInternalName_Request,
  ): Promise<CClanFAQS_UpdateInternalName_Response>;
  abstract UpdateJsonData(
    request: CClanFAQS_UpdateJsonData_Request,
  ): Promise<CClanFAQS_UpdateJsonData_Response>;
}
