/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientUCMAddScreenshot {
  appid?: number;
  filename?: string;
  thumbname?: string;
  vr_filename?: string;
  rtime32_created?: number;
  width?: number;
  height?: number;
  permissions?: number;
  caption?: string;
  shortcut_name?: string;
  tag?: CMsgClientUCMAddScreenshot.Tag[];
  tagged_steamid?: Long[];
  spoiler_tag?: boolean;
  tagged_publishedfileid?: Long[];
}

export namespace CMsgClientUCMAddScreenshot {
  export interface Tag {
    tag_name?: string;
    tag_value?: string;
  }
}

export interface CMsgClientUCMAddScreenshotResponse {
  eresult?: number;
  screenshotid?: Long;
  publishedfileid?: Long;
}

export interface CMsgClientUCMDeleteScreenshot {
  screenshotid?: Long;
}

export interface CMsgClientUCMDeleteScreenshotResponse {
  eresult?: number;
}

export interface CMsgClientUCMPublishFile {
  app_id?: number;
  file_name?: string;
  preview_file_name?: string;
  consumer_app_id?: number;
  title?: string;
  description?: string;
  tags?: string[];
  workshop_file?: boolean;
  visibility?: number;
  file_type?: number;
  url?: string;
  video_provider?: number;
  video_account_name?: string;
  video_identifier?: string;
  in_progress?: boolean;
}

export interface CMsgClientUCMPublishFileResponse {
  eresult?: number;
  published_file_id?: Long;
  needs_workshop_legal_agreement_acceptance?: boolean;
}

export interface CMsgClientUCMUpdatePublishedFile {
  app_id?: number;
  published_file_id?: Long;
  file_name?: string;
  preview_file_name?: string;
  title?: string;
  description?: string;
  tags?: string[];
  visibility?: number;
  update_file?: boolean;
  update_preview_file?: boolean;
  update_title?: boolean;
  update_description?: boolean;
  update_tags?: boolean;
  update_visibility?: boolean;
  change_description?: string;
  update_url?: boolean;
  url?: string;
  update_content_manifest?: boolean;
  content_manifest?: Long;
  metadata?: string;
  update_metadata?: boolean;
  language?: number;
  removed_kvtags?: string[];
  kvtags?: CMsgClientUCMUpdatePublishedFile.KeyValueTag[];
  previews?: CMsgClientUCMUpdatePublishedFile.AdditionalPreview[];
  previews_to_remove?: number[];
  clear_in_progress?: boolean;
  remove_all_kvtags?: boolean;
  content_descriptors_to_add?: number[];
  content_descriptors_to_remove?: number[];
  allow_admin_tags?: boolean;
  external_asset_id?: Long;
  game_branch_min?: string;
  game_branch_max?: string;
}

export namespace CMsgClientUCMUpdatePublishedFile {
  export interface KeyValueTag {
    key?: string;
    value?: string;
  }

  export interface AdditionalPreview {
    original_file_name?: string;
    internal_file_name?: string;
    videoid?: string;
    preview_type?: number;
    update_index?: number;
  }
}

export interface CMsgClientUCMUpdatePublishedFileResponse {
  eresult?: number;
  needs_workshop_legal_agreement_acceptance?: boolean;
}

export interface CMsgClientUCMDeletePublishedFile {
  published_file_id?: Long;
  app_id?: number;
}

export interface CMsgClientUCMDeletePublishedFileResponse {
  eresult?: number;
}

export interface CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates {
  app_id?: number;
  start_index?: number;
  start_time?: number;
  desired_revision?: number;
}

export interface CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
  eresult?: number;
  subscribed_files?: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse.PublishedFileId[];
  total_results?: number;
}

export namespace CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse {
  export interface AuthorSnapshot {
    timestamp?: number;
    game_branch_min?: string;
    game_branch_max?: string;
    manifestid?: Long;
  }

  export interface PublishedFileId {
    published_file_id?: Long;
    rtime32_subscribed?: number;
    appid?: number;
    file_hcontent?: Long;
    file_size?: number;
    rtime32_last_updated?: number;
    is_depot_content?: boolean;
    author_snapshots?: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse.AuthorSnapshot[];
  }
}

export interface CMsgClientUCMPublishedFileUpdated {
  published_file_id?: Long;
  app_id?: number;
  time_updated?: number;
  hcontent?: Long;
  file_size?: number;
  is_depot_content?: boolean;
  revision?: number;
}

export interface CMsgClientWorkshopItemChangesRequest {
  app_id?: number;
  last_time_updated?: number;
  num_items_needed?: number;
}

export interface CMsgClientWorkshopItemChangesResponse {
  eresult?: number;
  update_time?: number;
  workshop_items?: CMsgClientWorkshopItemChangesResponse.WorkshopItemInfo[];
}

export namespace CMsgClientWorkshopItemChangesResponse {
  export interface WorkshopItemInfo {
    published_file_id?: Long;
    time_updated?: number;
    manifest_id?: Long;
  }
}

export interface CMsgClientUCMSetUserPublishedFileAction {
  published_file_id?: Long;
  app_id?: number;
  action?: number;
}

export interface CMsgClientUCMSetUserPublishedFileActionResponse {
  eresult?: number;
}

export interface CMsgClientUCMEnumeratePublishedFilesByUserAction {
  app_id?: number;
  start_index?: number;
  action?: number;
}

export interface CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
  eresult?: number;
  published_files?: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse.PublishedFileId[];
  total_results?: number;
}

export namespace CMsgClientUCMEnumeratePublishedFilesByUserActionResponse {
  export interface PublishedFileId {
    published_file_id?: Long;
    rtime_time_stamp?: number;
  }
}

export type CMsgClientScreenshotsChanged = Record<string, never>;
