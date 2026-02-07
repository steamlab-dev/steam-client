/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CNews_ConvertHTMLToBBCode_Request {
  content?: string;
  preserve_newlines?: boolean;
}

export interface CNews_ConvertHTMLToBBCode_Response {
  converted_content?: string;
  found_html?: boolean;
}

export interface CNews_GetBatchPublishedPartnerEvent_Request {
  news_feed_gid?: Long;
  start_index?: number;
  amount?: number;
}

export interface CNews_GetBatchPublishedPartnerEvent_Response {
  clan_account_id?: number;
  news_feed_gid?: Long;
  clan_event_gid?: Long[];
  news_post_gid?: Long[];
  news_url?: string[];
}

export interface CNews_GetNewsFeedByRepublishClan_Request {
  clan_account_id?: number;
}

export interface CNews_GetNewsFeedByRepublishClan_Response {
  feeds?: CNewsFeedDef[];
}

export interface CNews_PreviewPartnerEvents_Request {
  rss_url?: string;
  lang?: number;
}

export interface CNews_PreviewPartnerEvents_Response {
  rss_url?: string;
  results?: CNewsPartnerEventPreview[];
  error_msg?: string;
}

export interface CNews_PublishPartnerEvent_Request {
  post?: CNewsFeedPostDef;
  draft?: boolean;
}

export interface CNews_PublishPartnerEvent_Response {
  clan_event_gid?: Long;
  news_post_gid?: Long;
}

export interface CNewsFeedDef {
  gid?: Long;
  name?: string;
  type?: number;
  url?: string;
  associated_apps?: number[];
  poll_interval?: number;
  kv_description?: string;
  kv_filter?: string;
  publish_to_clan_account_id?: number;
  language?: number;
  last_error?: number;
  last_update?: number;
  last_checked?: number;
}

export interface CNewsFeedPostDef {
  gid?: Long;
  news_feed_gid?: Long;
  title?: string;
  url?: string;
  author?: string;
  rtime_date?: number;
  contents?: string;
  commited?: boolean;
  deleted?: boolean;
  tags?: string;
  appids?: number[];
  recommendation_state?: number;
  received_compensation?: boolean;
  received_for_free?: boolean;
  blurb?: string;
  event_subtitle?: string;
  event_summary?: string;
}

export interface CNewsPartnerEventPreview {
  rss_message?: string;
  unique_id?: string;
  title?: string;
  desc?: string;
  jsondata?: string;
  post?: CNewsFeedPostDef;
  valid_post?: boolean;
  post_error_msg?: string;
}

export abstract class NewsService {
  abstract ConvertHTMLToBBCode(
    request: CNews_ConvertHTMLToBBCode_Request,
  ): Promise<CNews_ConvertHTMLToBBCode_Response>;
  abstract GetBatchPublishedPartnerEvent(
    request: CNews_GetBatchPublishedPartnerEvent_Request,
  ): Promise<CNews_GetBatchPublishedPartnerEvent_Response>;
  abstract GetNewsFeedByRepublishClan(
    request: CNews_GetNewsFeedByRepublishClan_Request,
  ): Promise<CNews_GetNewsFeedByRepublishClan_Response>;
  abstract PreviewPartnerEvents(
    request: CNews_PreviewPartnerEvents_Request,
  ): Promise<CNews_PreviewPartnerEvents_Response>;
  abstract PublishPartnerEvent(
    request: CNews_PublishPartnerEvent_Request,
  ): Promise<CNews_PublishPartnerEvent_Response>;
}
