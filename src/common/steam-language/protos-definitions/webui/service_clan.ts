/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CClan_GetDraftAndRecentPartnerEventSnippet_Request {
  steamid?: Long;
  rtime_oldest_date?: number;
}

export interface CClan_GetDraftAndRecentPartnerEventSnippet_Response {
  snippets?: CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData[];
}

export interface CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData {
  gid?: Long;
  announcement_gid?: Long;
  hidden?: boolean;
  published?: boolean;
  rtime32_start_time?: number;
  event_name?: string;
  event_type?: number;
}

export interface CClan_GetPartnerEventsByBuildIDRange_Request {
  requests?: CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange[];
  cursor?: string;
  count?: number;
}

export interface CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange {
  appid?: number;
  start_build_id?: number;
  end_build_id?: number;
  branch?: string;
}

export interface CClan_GetPartnerEventsByBuildIDRange_Response {
  matches?: CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc[];
  num_total_results?: number;
  next_cursor?: string;
}

export interface CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc {
  appid?: number;
  build_id?: number;
  branch?: string;
  clan_event_gid?: Long;
  clan_account_id?: number;
}

export interface CClan_RespondToClanInvite_Request {
  steamid?: Long;
  accept?: boolean;
}

export type CClan_RespondToClanInvite_Response = Record<string, never>;

export abstract class ClanService {
  abstract GetDraftAndRecentPartnerEventSnippet(
    request: CClan_GetDraftAndRecentPartnerEventSnippet_Request,
  ): Promise<CClan_GetDraftAndRecentPartnerEventSnippet_Response>;
  abstract GetPartnerEventsByBuildIDRange(
    request: CClan_GetPartnerEventsByBuildIDRange_Request,
  ): Promise<CClan_GetPartnerEventsByBuildIDRange_Response>;
  abstract RespondToClanInvite(
    request: CClan_RespondToClanInvite_Request,
  ): Promise<CClan_RespondToClanInvite_Response>;
}
