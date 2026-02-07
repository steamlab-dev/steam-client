/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPublishedFile_Subscribe_Request {
  publishedfileid?: Long;
  list_type?: number;
  appid?: number;
  notify_client?: boolean;
}

export type CPublishedFile_Subscribe_Response = Record<string, never>;

export interface CPublishedFile_Unsubscribe_Request {
  publishedfileid?: Long;
  list_type?: number;
  appid?: number;
  notify_client?: boolean;
}

export type CPublishedFile_Unsubscribe_Response = Record<string, never>;

export interface CPublishedFile_Publish_Request {
  appid?: number;
  consumer_appid?: number;
  cloudfilename?: string;
  preview_cloudfilename?: string;
  title?: string;
  file_description?: string;
  file_type?: number;
  consumer_shortcut_name?: string;
  youtube_username?: string;
  youtube_videoid?: string;
  visibility?: number;
  redirect_uri?: string;
  tags?: string[];
  collection_type?: string;
  game_type?: string;
  url?: string;
}

export interface CPublishedFile_Publish_Response {
  publishedfileid?: Long;
  redirect_uri?: string;
}

export interface CPublishedFile_GetDetails_Request {
  publishedfileids?: Long[];
  includetags?: boolean;
  includeadditionalpreviews?: boolean;
  includechildren?: boolean;
  includekvtags?: boolean;
  includevotes?: boolean;
  short_description?: boolean;
}

export interface PublishedFileDetails {
  result?: number;
  publishedfileid?: Long;
  creator?: Long;
  creator_appid?: number;
  consumer_appid?: number;
  consumer_shortcutid?: number;
  filename?: string;
  file_size?: Long;
  preview_file_size?: Long;
  file_url?: string;
  preview_url?: string;
  youtubevideoid?: string;
  url?: string;
  hcontent_file?: Long;
  hcontent_preview?: Long;
  title?: string;
  file_description?: string;
  short_description?: string;
  time_created?: number;
  time_updated?: number;
  visibility?: number;
  flags?: number;
  workshop_file?: boolean;
  workshop_accepted?: boolean;
  show_subscribe_all?: boolean;
  num_comments_developer?: number;
  num_comments_public?: number;
  banned?: boolean;
  ban_reason?: string;
  banner?: Long;
  can_be_deleted?: boolean;
  incompatible?: boolean;
  app_name?: string;
  file_type?: number;
  can_subscribe?: boolean;
  subscriptions?: number;
  favorited?: number;
  followers?: number;
  lifetime_subscriptions?: number;
  lifetime_favorited?: number;
  lifetime_followers?: number;
  views?: number;
  image_width?: number;
  image_height?: number;
  image_url?: string;
  spoiler_tag?: boolean;
  shortcutid?: number;
  shortcutname?: string;
  num_children?: number;
  num_reports?: number;
  previews?: PublishedFileDetails.Preview[];
  tags?: PublishedFileDetails.Tag[];
  children?: PublishedFileDetails.Child[];
  kvtags?: PublishedFileDetails.KVTag[];
  vote_data?: PublishedFileDetails.VoteData;
  time_subscribed?: number;
}

export namespace PublishedFileDetails {
  export interface Tag {
    tag?: string;
    adminonly?: boolean;
  }

  export interface Preview {
    previewid?: Long;
    sortorder?: number;
    url?: string;
    size?: number;
    filename?: string;
    youtubevideoid?: string;
  }

  export interface Child {
    publishedfileid?: Long;
    sortorder?: number;
    file_type?: number;
  }

  export interface KVTag {
    key?: string;
    value?: string;
  }

  export interface VoteData {
    score?: number;
    votes_up?: number;
    votes_down?: number;
  }
}

export interface CPublishedFile_GetDetails_Response {
  publishedfiledetails?: PublishedFileDetails[];
}

export interface CPublishedFile_GetUserFiles_Request {
  appid?: number;
  page?: number;
  numperpage?: number;
  sortmethod?: string;
  totalonly?: boolean;
  privacy?: number;
  ids_only?: boolean;
  requiredtags?: string[];
  excludedtags?: string[];
}

export interface CPublishedFile_GetUserFiles_Response {
  total?: number;
  startindex?: number;
  publishedfiledetails?: PublishedFileDetails[];
  apps?: CPublishedFile_GetUserFiles_Response.App[];
}

export namespace CPublishedFile_GetUserFiles_Response {
  export interface App {
    appid?: number;
    name?: string;
    shortcutid?: number;
    private?: boolean;
  }
}

export interface CPublishedFile_Update_Request {
  appid?: number;
  publishedfileid?: Long;
  title?: string;
  file_description?: string;
  visibility?: number;
  tags?: string[];
  filename?: string;
  preview_filename?: string;
}

export type CPublishedFile_Update_Response = Record<string, never>;

export interface CPublishedFile_RefreshVotingQueue_Request {
  appid?: number;
  matching_file_type?: number;
  tags?: string[];
  match_all_tags?: boolean;
  excluded_tags?: string[];
  desired_queue_size?: number;
}

export type CPublishedFile_RefreshVotingQueue_Response = Record<string, never>;

export abstract class PublishedFileService {
  abstract Subscribe(
    request: CPublishedFile_Subscribe_Request,
  ): Promise<CPublishedFile_Subscribe_Response>;
  abstract Unsubscribe(
    request: CPublishedFile_Unsubscribe_Request,
  ): Promise<CPublishedFile_Unsubscribe_Response>;
  abstract Publish(
    request: CPublishedFile_Publish_Request,
  ): Promise<CPublishedFile_Publish_Response>;
  abstract GetDetails(
    request: CPublishedFile_GetDetails_Request,
  ): Promise<CPublishedFile_GetDetails_Response>;
  abstract GetUserFiles(
    request: CPublishedFile_GetUserFiles_Request,
  ): Promise<CPublishedFile_GetUserFiles_Response>;
  abstract Update(request: CPublishedFile_Update_Request): Promise<CPublishedFile_Update_Response>;
  abstract RefreshVotingQueue(
    request: CPublishedFile_RefreshVotingQueue_Request,
  ): Promise<CPublishedFile_RefreshVotingQueue_Response>;
}
