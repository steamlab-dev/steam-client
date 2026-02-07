/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPublishedFile_AddAppRelationship_Request {
  publishedfileid?: Long;
  appid?: number;
  relationship?: number;
}

export type CPublishedFile_AddAppRelationship_Response = Record<string, never>;

export interface CPublishedFile_AddChild_Request {
  publishedfileid?: Long;
  child_publishedfileid?: Long;
}

export type CPublishedFile_AddChild_Response = Record<string, never>;

export interface CPublishedFile_AreFilesInSubscriptionList_Request {
  appid?: number;
  publishedfileids?: Long[];
  listtype?: number;
  filetype?: number;
  workshopfiletype?: number;
}

export interface CPublishedFile_AreFilesInSubscriptionList_Response {
  files?: CPublishedFile_AreFilesInSubscriptionList_Response_InList[];
}

export interface CPublishedFile_AreFilesInSubscriptionList_Response_InList {
  publishedfileid?: Long;
  inlist?: boolean;
}

export interface CPublishedFile_CanSubscribe_Request {
  publishedfileid?: Long;
}

export interface CPublishedFile_CanSubscribe_Response {
  can_subscribe?: boolean;
}

export interface CPublishedFile_Delete_Request {
  publishedfileid?: Long;
  appid?: number;
}

export type CPublishedFile_Delete_Response = Record<string, never>;

export interface CPublishedFile_FileDeleted_Client_Notification {
  published_file_id?: Long;
  app_id?: number;
}

export interface CPublishedFile_FileSubscribed_Notification {
  published_file_id?: Long;
  app_id?: number;
  file_hcontent?: Long;
  file_size?: number;
  rtime_subscribed?: number;
  is_depot_content?: boolean;
  rtime_updated?: number;
  revisions?: CPublishedFile_FileSubscribed_Notification_RevisionData[];
  revision?: number;
}

export interface CPublishedFile_FileSubscribed_Notification_RevisionData {
  revision?: number;
  file_hcontent?: Long;
  rtime_updated?: number;
  game_branch_min?: string;
  game_branch_max?: string;
}

export interface CPublishedFile_FileUnsubscribed_Notification {
  published_file_id?: Long;
  app_id?: number;
}

export interface CPublishedFile_GetAppRelationships_Request {
  publishedfileid?: Long;
}

export interface CPublishedFile_GetAppRelationships_Response {
  app_relationships?: CPublishedFile_GetAppRelationships_Response_AppRelationship[];
}

export interface CPublishedFile_GetAppRelationships_Response_AppRelationship {
  appid?: number;
  relationship?: number;
}

export interface CPublishedFile_GetAppRelationshipsBatched_Request {
  publishedfileids?: Long[];
  filter_relationship?: number;
}

export interface CPublishedFile_GetAppRelationshipsBatched_Response {
  relationships?: CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship[];
}

export interface CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship {
  appid?: number;
  relationship?: number;
}

export interface CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship {
  publishedfileid?: Long;
  result?: number;
  app_relationships?: CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship[];
}

export interface CPublishedFile_GetChangeHistory_Request {
  publishedfileid?: Long;
  total_only?: boolean;
  startindex?: number;
  count?: number;
  language?: number;
}

export interface CPublishedFile_GetChangeHistory_Response {
  changes?: CPublishedFile_GetChangeHistory_Response_ChangeLog[];
  total?: number;
}

export interface CPublishedFile_GetChangeHistory_Response_ChangeLog {
  timestamp?: number;
  change_description?: string;
  language?: number;
  saved_snapshot?: boolean;
  snapshot_game_branch_min?: string;
  snapshot_game_branch_max?: string;
  manifest_id?: Long;
  accountid?: number;
}

export interface CPublishedFile_GetChangeHistoryEntry_Request {
  publishedfileid?: Long;
  timestamp?: number;
  language?: number;
}

export interface CPublishedFile_GetChangeHistoryEntry_Response {
  change_description?: string;
  language?: number;
  saved_snapshot?: boolean;
  snapshot_game_branch_min?: string;
  snapshot_game_branch_max?: string;
  manifest_id?: Long;
  accountid?: number;
}

export interface CPublishedFile_GetContentDescriptors_Request {
  publishedfileid?: Long;
}

export interface CPublishedFile_GetContentDescriptors_Response {
  content_descriptors?: CPublishedFile_GetContentDescriptors_Response_ContentDescriptor[];
}

export interface CPublishedFile_GetContentDescriptors_Response_ContentDescriptor {
  descriptorid?: number;
  accountid?: number;
  timestamp?: number;
  moderator_set?: boolean;
}

export interface CPublishedFile_GetDetails_Request {
  publishedfileids?: Long[];
  includetags?: boolean;
  includeadditionalpreviews?: boolean;
  includechildren?: boolean;
  includekvtags?: boolean;
  includevotes?: boolean;
  short_description?: boolean;
  includeforsaledata?: boolean;
  includemetadata?: boolean;
  language?: number;
  return_playtime_stats?: number;
  appid?: number;
  strip_description_bbcode?: boolean;
  desired_revision?: number;
  includereactions?: boolean;
  admin_query?: boolean;
}

export interface CPublishedFile_GetDetails_Response {
  publishedfiledetails?: PublishedFileDetails[];
}

export interface CPublishedFile_GetItemChanges_Request {
  appid?: number;
  last_time_updated?: number;
  num_items_max?: number;
  desired_revision?: number;
}

export interface CPublishedFile_GetItemChanges_Response {
  update_time?: number;
  workshop_items?: CPublishedFile_GetItemChanges_Response_WorkshopItemInfo[];
}

export interface CPublishedFile_GetItemChanges_Response_WorkshopItemInfo {
  published_file_id?: Long;
  time_updated?: number;
  manifest_id?: Long;
  author_snapshots?: PublishedFileAuthorSnapshot[];
}

export interface CPublishedFile_GetItemInfo_Request {
  appid?: number;
  last_time_updated?: number;
  workshop_items?: CPublishedFile_GetItemInfo_Request_WorkshopItem[];
  desired_revision?: number;
}

export interface CPublishedFile_GetItemInfo_Request_WorkshopItem {
  published_file_id?: Long;
  time_updated?: number;
  desired_revision?: number;
}

export interface CPublishedFile_GetItemInfo_Response {
  update_time?: number;
  workshop_items?: CPublishedFile_GetItemInfo_Response_WorkshopItemInfo[];
  private_items?: Long[];
}

export interface CPublishedFile_GetItemInfo_Response_WorkshopItemInfo {
  published_file_id?: Long;
  time_updated?: number;
  manifest_id?: Long;
  flags?: number;
  revision?: number;
  author_snapshots?: PublishedFileAuthorSnapshot[];
}

export interface CPublishedFile_GetSubSectionData_Request {
  publishedfileid?: Long;
  for_table_of_contents?: boolean;
  specific_sectionid?: Long;
  desired_revision?: number;
}

export interface CPublishedFile_GetSubSectionData_Response {
  sub_sections?: PublishedFileSubSection[];
}

export interface CPublishedFile_GetUserFiles_Request {
  steamid?: Long;
  appid?: number;
  shortcutid?: number;
  page?: number;
  numperpage?: number;
  type?: string;
  sortmethod?: string;
  privacy?: number;
  requiredtags?: string[];
  excludedtags?: string[];
  filetype?: number;
  creator_appid?: number;
  match_cloud_filename?: string;
  totalonly?: boolean;
  ids_only?: boolean;
  return_vote_data?: boolean;
  return_tags?: boolean;
  return_kv_tags?: boolean;
  return_previews?: boolean;
  return_children?: boolean;
  return_short_description?: boolean;
  startindex_override?: number;
  return_for_sale_data?: boolean;
  cache_max_age_seconds?: number;
  return_metadata?: boolean;
  language?: number;
  required_kv_tags?: CPublishedFile_GetUserFiles_Request_KVTag[];
  return_playtime_stats?: number;
  strip_description_bbcode?: boolean;
  desired_revision?: number;
  taggroups?: CPublishedFile_GetUserFiles_Request_TagGroup[];
  return_reactions?: boolean;
  return_apps?: boolean;
  excluded_content_descriptors?: number[];
  admin_query?: boolean;
}

export interface CPublishedFile_GetUserFiles_Request_KVTag {
  key?: string;
  value?: string;
}

export interface CPublishedFile_GetUserFiles_Request_TagGroup {
  tags?: string[];
}

export interface CPublishedFile_GetUserFiles_Response {
  total?: number;
  startindex?: number;
  publishedfiledetails?: PublishedFileDetails[];
  apps?: CPublishedFile_GetUserFiles_Response_App[];
}

export interface CPublishedFile_GetUserFiles_Response_App {
  appid?: number;
  name?: string;
  shortcutid?: number;
  private?: boolean;
}

export interface CPublishedFile_GetUserVoteSummary_Request {
  publishedfileids?: Long[];
}

export interface CPublishedFile_GetUserVoteSummary_Response {
  summaries?: CPublishedFile_GetUserVoteSummary_Response_VoteSummary[];
}

export interface CPublishedFile_GetUserVoteSummary_Response_VoteSummary {
  publishedfileid?: Long;
  vote_for?: boolean;
  vote_against?: boolean;
  reported?: boolean;
}

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

export interface CPublishedFile_QueryFiles_Request {
  query_type?: number;
  page?: number;
  numperpage?: number;
  creator_appid?: number;
  appid?: number;
  requiredtags?: string[];
  excludedtags?: string[];
  match_all_tags?: boolean;
  required_flags?: string[];
  omitted_flags?: string[];
  search_text?: string;
  filetype?: number;
  child_publishedfileid?: Long;
  days?: number;
  include_recent_votes_only?: boolean;
  totalonly?: boolean;
  return_vote_data?: boolean;
  return_tags?: boolean;
  return_kv_tags?: boolean;
  return_previews?: boolean;
  return_children?: boolean;
  return_short_description?: boolean;
  return_for_sale_data?: boolean;
  cache_max_age_seconds?: number;
  return_metadata?: boolean;
  language?: number;
  required_kv_tags?: CPublishedFile_QueryFiles_Request_KVTag[];
  ids_only?: boolean;
  return_playtime_stats?: number;
  return_details?: boolean;
  strip_description_bbcode?: boolean;
  cursor?: string;
  desired_revision?: number;
  taggroups?: CPublishedFile_QueryFiles_Request_TagGroup[];
  return_reactions?: boolean;
  date_range_created?: CPublishedFile_QueryFiles_Request_DateRange;
  date_range_updated?: CPublishedFile_QueryFiles_Request_DateRange;
  excluded_content_descriptors?: number[];
  admin_query?: boolean;
}

export interface CPublishedFile_QueryFiles_Request_DateRange {
  timestamp_start?: number;
  timestamp_end?: number;
}

export interface CPublishedFile_QueryFiles_Request_KVTag {
  key?: string;
  value?: string;
}

export interface CPublishedFile_QueryFiles_Request_TagGroup {
  tags?: string[];
}

export interface CPublishedFile_QueryFiles_Response {
  total?: number;
  publishedfiledetails?: PublishedFileDetails[];
  next_cursor?: string;
}

export interface CPublishedFile_RefreshVotingQueue_Request {
  appid?: number;
  matching_file_type?: number;
  tags?: string[];
  match_all_tags?: boolean;
  excluded_tags?: string[];
  desired_queue_size?: number;
  desired_revision?: number;
}

export type CPublishedFile_RefreshVotingQueue_Response = Record<string, never>;

export interface CPublishedFile_RemoveAppRelationship_Request {
  publishedfileid?: Long;
  appid?: number;
  relationship?: number;
}

export type CPublishedFile_RemoveAppRelationship_Response = Record<string, never>;

export interface CPublishedFile_RemoveChild_Request {
  publishedfileid?: Long;
  child_publishedfileid?: Long;
}

export type CPublishedFile_RemoveChild_Response = Record<string, never>;

export interface CPublishedFile_SetCollectionChildren_Request {
  appid?: number;
  publishedfileid?: Long;
  children?: Long[];
}

export type CPublishedFile_SetCollectionChildren_Response = Record<string, never>;

export interface CPublishedFile_SetPlaytimeForControllerConfigs_Request {
  appid?: number;
  controller_config_usage?: CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage[];
}

export interface CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage {
  publishedfileid?: Long;
  seconds_active?: number;
}

export type CPublishedFile_SetPlaytimeForControllerConfigs_Response = Record<string, never>;

export interface CPublishedFile_SetSubscriptionListFromCollection_Request {
  appid?: number;
  list_type?: number;
  publishedfileid?: Long;
  add_only?: boolean;
}

export type CPublishedFile_SetSubscriptionListFromCollection_Response = Record<string, never>;

export interface CPublishedFile_StartPlaytimeTracking_Request {
  appid?: number;
  publishedfileids?: Long[];
}

export type CPublishedFile_StartPlaytimeTracking_Response = Record<string, never>;

export interface CPublishedFile_StopPlaytimeTracking_Request {
  appid?: number;
  publishedfileids?: Long[];
}

export type CPublishedFile_StopPlaytimeTracking_Response = Record<string, never>;

export interface CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request {
  appid?: number;
}

export type CPublishedFile_StopPlaytimeTrackingForAllAppItems_Response = Record<string, never>;

export interface CPublishedFile_Subscribe_Request {
  publishedfileid?: Long;
  list_type?: number;
  appid?: number;
  notify_client?: boolean;
  include_dependencies?: boolean;
}

export type CPublishedFile_Subscribe_Response = Record<string, never>;

export interface CPublishedFile_Unsubscribe_Request {
  publishedfileid?: Long;
  list_type?: number;
  appid?: number;
  notify_client?: boolean;
}

export type CPublishedFile_Unsubscribe_Response = Record<string, never>;

export interface CPublishedFile_Update_Request {
  appid?: number;
  publishedfileid?: Long;
  title?: string;
  file_description?: string;
  visibility?: number;
  tags?: string[];
  filename?: string;
  preview_filename?: string;
  spoiler_tag?: boolean;
  image_width?: number;
  image_height?: number;
  language?: number;
}

export type CPublishedFile_Update_Response = Record<string, never>;

export interface CPublishedFile_UpdateContentDescriptors_Request {
  publishedfileid?: Long;
  descriptors_to_add?: number[];
  descriptors_to_remove?: number[];
}

export interface CPublishedFile_UpdateContentDescriptors_Response {
  timestamp_updated?: number;
}

export interface CPublishedFile_Vote_Request {
  publishedfileid?: Long;
  vote_up?: boolean;
}

export type CPublishedFile_Vote_Response = Record<string, never>;

export interface PublishedFileAuthorSnapshot {
  timestamp?: number;
  game_branch_min?: string;
  game_branch_max?: string;
  manifestid?: Long;
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
  previews?: PublishedFileDetails_Preview[];
  tags?: PublishedFileDetails_Tag[];
  children?: PublishedFileDetails_Child[];
  kvtags?: PublishedFileDetails_KVTag[];
  vote_data?: PublishedFileDetails_VoteData;
  time_subscribed?: number;
  for_sale_data?: PublishedFileDetails_ForSaleData;
  metadata?: string;
  language?: number;
  lifetime_playtime?: Long;
  lifetime_playtime_sessions?: Long;
  playtime_stats?: PublishedFileDetails_PlaytimeStats;
  maybe_inappropriate_sex?: boolean;
  maybe_inappropriate_violence?: boolean;
  revision_change_number?: Long;
  revision?: number;
  available_revisions?: number[];
  reactions?: PublishedFileDetails_Reaction[];
  ban_text_check_result?: number;
  content_descriptorids?: number[];
  search_score?: number;
  external_asset_id?: Long;
  author_snapshots?: PublishedFileAuthorSnapshot[];
}

export interface PublishedFileDetails_Child {
  publishedfileid?: Long;
  sortorder?: number;
  file_type?: number;
}

export interface PublishedFileDetails_ForSaleData {
  is_for_sale?: boolean;
  price_category?: number;
  estatus?: number;
  price_category_floor?: number;
  price_is_pay_what_you_want?: boolean;
  discount_percentage?: number;
}

export interface PublishedFileDetails_KVTag {
  key?: string;
  value?: string;
}

export interface PublishedFileDetails_PlaytimeStats {
  playtime_seconds?: Long;
  num_sessions?: Long;
}

export interface PublishedFileDetails_Preview {
  previewid?: Long;
  sortorder?: number;
  url?: string;
  size?: number;
  filename?: string;
  youtubevideoid?: string;
  preview_type?: number;
  external_reference?: string;
}

export interface PublishedFileDetails_Reaction {
  reactionid?: number;
  count?: number;
}

export interface PublishedFileDetails_Tag {
  tag?: string;
  adminonly?: boolean;
  display_name?: string;
}

export interface PublishedFileDetails_VoteData {
  score?: number;
  votes_up?: number;
  votes_down?: number;
  trusted_score?: number;
  trusted_votes_up?: number;
  trusted_votes_down?: number;
}

export interface PublishedFileSubSection {
  sectionid?: Long;
  title?: string;
  description_text?: string;
  sort_order?: number;
}

export abstract class PublishedFileService {
  abstract AddAppRelationship(
    request: CPublishedFile_AddAppRelationship_Request,
  ): Promise<CPublishedFile_AddAppRelationship_Response>;
  abstract AddChild(
    request: CPublishedFile_AddChild_Request,
  ): Promise<CPublishedFile_AddChild_Response>;
  abstract AreFilesInSubscriptionList(
    request: CPublishedFile_AreFilesInSubscriptionList_Request,
  ): Promise<CPublishedFile_AreFilesInSubscriptionList_Response>;
  abstract CanSubscribe(
    request: CPublishedFile_CanSubscribe_Request,
  ): Promise<CPublishedFile_CanSubscribe_Response>;
  abstract Delete(request: CPublishedFile_Delete_Request): Promise<CPublishedFile_Delete_Response>;
  abstract GetAppRelationships(
    request: CPublishedFile_GetAppRelationships_Request,
  ): Promise<CPublishedFile_GetAppRelationships_Response>;
  abstract GetAppRelationshipsBatched(
    request: CPublishedFile_GetAppRelationshipsBatched_Request,
  ): Promise<CPublishedFile_GetAppRelationshipsBatched_Response>;
  abstract GetChangeHistory(
    request: CPublishedFile_GetChangeHistory_Request,
  ): Promise<CPublishedFile_GetChangeHistory_Response>;
  abstract GetChangeHistoryEntry(
    request: CPublishedFile_GetChangeHistoryEntry_Request,
  ): Promise<CPublishedFile_GetChangeHistoryEntry_Response>;
  abstract GetContentDescriptors(
    request: CPublishedFile_GetContentDescriptors_Request,
  ): Promise<CPublishedFile_GetContentDescriptors_Response>;
  abstract GetDetails(
    request: CPublishedFile_GetDetails_Request,
  ): Promise<CPublishedFile_GetDetails_Response>;
  abstract GetItemChanges(
    request: CPublishedFile_GetItemChanges_Request,
  ): Promise<CPublishedFile_GetItemChanges_Response>;
  abstract GetItemInfo(
    request: CPublishedFile_GetItemInfo_Request,
  ): Promise<CPublishedFile_GetItemInfo_Response>;
  abstract GetSubSectionData(
    request: CPublishedFile_GetSubSectionData_Request,
  ): Promise<CPublishedFile_GetSubSectionData_Response>;
  abstract GetUserFileCount(
    request: CPublishedFile_GetUserFiles_Request,
  ): Promise<CPublishedFile_GetUserFiles_Response>;
  abstract GetUserFiles(
    request: CPublishedFile_GetUserFiles_Request,
  ): Promise<CPublishedFile_GetUserFiles_Response>;
  abstract GetUserVoteSummary(
    request: CPublishedFile_GetUserVoteSummary_Request,
  ): Promise<CPublishedFile_GetUserVoteSummary_Response>;
  abstract Publish(
    request: CPublishedFile_Publish_Request,
  ): Promise<CPublishedFile_Publish_Response>;
  abstract QueryFiles(
    request: CPublishedFile_QueryFiles_Request,
  ): Promise<CPublishedFile_QueryFiles_Response>;
  abstract RefreshVotingQueue(
    request: CPublishedFile_RefreshVotingQueue_Request,
  ): Promise<CPublishedFile_RefreshVotingQueue_Response>;
  abstract RemoveAppRelationship(
    request: CPublishedFile_RemoveAppRelationship_Request,
  ): Promise<CPublishedFile_RemoveAppRelationship_Response>;
  abstract RemoveChild(
    request: CPublishedFile_RemoveChild_Request,
  ): Promise<CPublishedFile_RemoveChild_Response>;
  abstract SetCollectionChildren(
    request: CPublishedFile_SetCollectionChildren_Request,
  ): Promise<CPublishedFile_SetCollectionChildren_Response>;
  abstract SetPlaytimeForControllerConfigs(
    request: CPublishedFile_SetPlaytimeForControllerConfigs_Request,
  ): Promise<CPublishedFile_SetPlaytimeForControllerConfigs_Response>;
  abstract SetSubscriptionListFromCollection(
    request: CPublishedFile_SetSubscriptionListFromCollection_Request,
  ): Promise<CPublishedFile_SetSubscriptionListFromCollection_Response>;
  abstract StartPlaytimeTracking(
    request: CPublishedFile_StartPlaytimeTracking_Request,
  ): Promise<CPublishedFile_StartPlaytimeTracking_Response>;
  abstract StopPlaytimeTracking(
    request: CPublishedFile_StopPlaytimeTracking_Request,
  ): Promise<CPublishedFile_StopPlaytimeTracking_Response>;
  abstract StopPlaytimeTrackingForAllAppItems(
    request: CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request,
  ): Promise<CPublishedFile_StopPlaytimeTrackingForAllAppItems_Response>;
  abstract Subscribe(
    request: CPublishedFile_Subscribe_Request,
  ): Promise<CPublishedFile_Subscribe_Response>;
  abstract Unsubscribe(
    request: CPublishedFile_Unsubscribe_Request,
  ): Promise<CPublishedFile_Unsubscribe_Response>;
  abstract Update(request: CPublishedFile_Update_Request): Promise<CPublishedFile_Update_Response>;
  abstract UpdateContentDescriptors(
    request: CPublishedFile_UpdateContentDescriptors_Request,
  ): Promise<CPublishedFile_UpdateContentDescriptors_Response>;
  abstract Vote(request: CPublishedFile_Vote_Request): Promise<CPublishedFile_Vote_Response>;
}

export abstract class PublishedFileClientService {
  abstract NotifyFileDeleted(
    request: CPublishedFile_FileDeleted_Client_Notification,
  ): Promise<void>;
  abstract NotifyFileSubscribed(request: CPublishedFile_FileSubscribed_Notification): Promise<void>;
  abstract NotifyFileUnsubscribed(
    request: CPublishedFile_FileUnsubscribed_Notification,
  ): Promise<void>;
}
