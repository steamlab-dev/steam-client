/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CLocalizationToken {
  language?: number;
  localized_string?: string;
}

export interface CStoreCuration_GetListDetails_Request {
  steamid?: Long;
  listid?: Long;
}

export interface CStoreCuration_GetListDetails_Response {
  list_details?: CStoreCuration_ListDetails;
}

export interface CStoreCuration_GetLists_Request {
  steamid?: Long;
  list_state?: number;
  start?: number;
  count?: number;
  return_total_only?: boolean;
  return_metadata_only?: boolean;
  max_apps?: number;
  sale_clan_event_gid?: Long;
}

export interface CStoreCuration_GetLists_Response {
  list_details?: CStoreCuration_ListDetails[];
  total?: number;
}

export interface CStoreCuration_ListDetails {
  listid?: Long;
  title?: string;
  blurb?: string;
  link?: string;
  list_state?: number;
  sort_order?: number;
  time_created?: number;
  time_updated?: number;
  accountid?: number;
  apps?: CStoreCuration_ListDetails_ListItem[];
  list_type?: number;
  title_localization?: CLocalizationToken[];
  blurb_localization?: CLocalizationToken[];
  link_localization?: CLocalizationToken[];
  sale_clan_steamid?: Long;
  sale_clan_event_gid?: Long;
  list_jsondata?: string;
  clan_account_id?: number;
}

export interface CStoreCuration_ListDetails_ListItem {
  recommended_app?: CStoreCuration_RecommendedApp;
  blurb?: string;
  sort_order?: number;
}

export interface CStoreCuration_RecommendedApp {
  appid?: number;
  clanid?: number;
  link_url?: string;
  link_text?: string;
  blurb?: string;
  time_recommended?: number;
  comment_count?: number;
  upvote_count?: number;
  accountid_creator?: number;
  recommendation_state?: number;
  received_compensation?: boolean;
  received_for_free?: boolean;
}

export abstract class StoreCurationService {
  abstract GetListDetails(
    request: CStoreCuration_GetListDetails_Request,
  ): Promise<CStoreCuration_GetListDetails_Response>;
  abstract GetLists(
    request: CStoreCuration_GetLists_Request,
  ): Promise<CStoreCuration_GetLists_Response>;
}
