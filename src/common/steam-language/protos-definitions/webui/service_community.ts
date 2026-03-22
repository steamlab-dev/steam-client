/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CMsgIPAddress } from "./common";

export interface CAppPriority {
  priority?: number;
  appid?: number[];
}

export interface CCDDBAppDetailCommon {
  appid?: number;
  name?: string;
  icon?: string;
  tool?: boolean;
  demo?: boolean;
  media?: boolean;
  community_visible_stats?: boolean;
  friendly_name?: string;
  propagation?: string;
  has_adult_content?: boolean;
  is_visible_in_steam_china?: boolean;
  app_type?: number;
  has_adult_content_sex?: boolean;
  has_adult_content_violence?: boolean;
  content_descriptorids?: number[];
  content_descriptorids_including_dlc?: number[];
}

export interface CClanEventUserNewsTuple {
  clanid?: number;
  event_gid?: bigint;
  announcement_gid?: bigint;
  rtime_start?: number;
  rtime_end?: number;
  priority_score?: number;
  type?: number;
  clamp_range_slot?: number;
  appid?: number;
  rtime32_last_modified?: number;
}

export interface CClanMatchEventByRange {
  rtime_before?: number;
  rtime_after?: number;
  qualified?: number;
  events?: CClanEventUserNewsTuple[];
}

export interface CCommunity_ClanLocGroupImage {
  loc_group_id?: bigint;
  image_hash?: string;
  thumbnail_hash?: string;
  file_type?: number;
  group?: number;
  width?: number;
  height?: number;
  extensions?: string;
}

export interface CCommunity_ClearSinglePartnerEventsAppPriority_Request {
  appid?: number;
}

export type CCommunity_ClearSinglePartnerEventsAppPriority_Response = Record<string, never>;

export type CCommunity_ClearUserPartnerEventsAppPriorities_Request = Record<string, never>;

export type CCommunity_ClearUserPartnerEventsAppPriorities_Response = Record<string, never>;

export interface CCommunity_Comment {
  gidcomment?: bigint;
  steamid?: bigint;
  timestamp?: number;
  text?: string;
  upvotes?: number;
  hidden?: boolean;
  hidden_by_user?: boolean;
  deleted?: boolean;
  ipaddress?: CMsgIPAddress;
  total_hidden?: number;
  upvoted_by_user?: boolean;
  reactions?: CCommunity_Comment_Reaction[];
  gidparentcomment?: bigint;
  delete_reason?: number;
}

export interface CCommunity_Comment_Reaction {
  reactionid?: number;
  count?: number;
}

export interface CCommunity_DeleteCommentFromThread_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
  undelete?: boolean;
}

export type CCommunity_DeleteCommentFromThread_Response = Record<string, never>;

export interface CCommunity_FetchTranslationFromCrowdIn_Request {
  steamid?: bigint;
  itemid?: bigint;
  language?: number;
}

export type CCommunity_FetchTranslationFromCrowdIn_Response = Record<string, never>;

export interface CCommunity_GetAppRichPresenceLocalization_Request {
  appid?: number;
  language?: string;
}

export interface CCommunity_GetAppRichPresenceLocalization_Response {
  appid?: number;
  token_lists?: CCommunity_GetAppRichPresenceLocalization_Response_TokenList[];
}

export interface CCommunity_GetAppRichPresenceLocalization_Response_Token {
  name?: string;
  value?: string;
}

export interface CCommunity_GetAppRichPresenceLocalization_Response_TokenList {
  language?: string;
  tokens?: CCommunity_GetAppRichPresenceLocalization_Response_Token[];
}

export interface CCommunity_GetApps_Request {
  appids?: number[];
  language?: number;
}

export interface CCommunity_GetApps_Response {
  apps?: CCDDBAppDetailCommon[];
}

export interface CCommunity_GetAvatarHistory_Request {
  steamid?: bigint;
  filter_user_uploaded_only?: boolean;
}

export interface CCommunity_GetAvatarHistory_Response {
  avatars?: CCommunity_GetAvatarHistory_Response_AvatarData[];
}

export interface CCommunity_GetAvatarHistory_Response_AvatarData {
  avatar_sha1?: string;
  user_uploaded?: boolean;
  timestamp?: number;
}

export interface CCommunity_GetBestEventsForUser_Request {
  include_steam_blog?: boolean;
  filter_to_played_within_days?: number;
  include_only_game_updates?: boolean;
}

export interface CCommunity_GetBestEventsForUser_Response {
  results?: CCommunity_PartnerEventResult[];
}

export interface CCommunity_GetClanAnnouncementVoteForUser_Request {
  announcementid?: bigint;
}

export interface CCommunity_GetClanAnnouncementVoteForUser_Response {
  voted_up?: boolean;
  voted_down?: boolean;
}

export interface CCommunity_GetClanCrowdInMetadata_Request {
  steamid?: bigint;
}

export interface CCommunity_GetClanCrowdInMetadata_Response {
  crowdin_project_id?: bigint;
  crowdin_directory_id?: bigint;
  push_by_default?: boolean;
}

export interface CCommunity_GetClanEventCrowdInMetadata_Request {
  steamid?: bigint;
  itemid?: bigint;
}

export interface CCommunity_GetClanEventCrowdInMetadata_Response {
  crowdin_project_id?: bigint;
  crowdin_file_id?: bigint;
}

export interface CCommunity_GetClanLocGroupImages_Request {
  steamid?: bigint;
  group?: number;
  language?: number;
  loc_group_ids?: bigint[];
}

export interface CCommunity_GetClanLocGroupImages_Response {
  images?: CCommunity_ClanLocGroupImage[];
}

export interface CCommunity_GetClanMetadata_Request {
  steamid?: bigint;
}

export interface CCommunity_GetClanMetadata_Response {
  is_ogg?: boolean;
  name?: string;
  profile_url?: string;
  appid?: number;
}

export interface CCommunity_GetCommentThread_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  commentthreadid?: bigint;
  start?: number;
  count?: number;
  upvoters?: number;
  include_deleted?: boolean;
  gidcomment?: bigint;
  time_oldest?: number;
  oldest_first?: boolean;
}

export interface CCommunity_GetCommentThread_Response {
  comments?: CCommunity_Comment[];
  deleted_comments?: CCommunity_Comment[];
  steamid?: bigint;
  commentthreadid?: bigint;
  start?: number;
  count?: number;
  total_count?: number;
  upvotes?: number;
  upvoters?: number[];
  user_subscribed?: boolean;
  user_upvoted?: boolean;
  answer_commentid?: bigint;
  answer_actor?: number;
  answer_actor_rank?: number;
  can_post?: boolean;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
}

export interface CCommunity_GetCommentThreadRatings_Request {
  commentthreadtype?: string;
  steamid?: bigint;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
  max_results?: number;
}

export interface CCommunity_GetCommentThreadRatings_Response {
  commentthreadid?: bigint;
  gidcomment?: bigint;
  upvotes?: number;
  has_upvoted?: boolean;
  upvoter_accountids?: number[];
}

export interface CCommunity_GetUserPartnerEventNews_Request {
  count?: number;
  offset?: number;
  rtime32_start_time?: number;
  rtime32_end_time?: number;
  language_preference?: number[];
  filter_event_type?: number[];
  filter_to_appid?: boolean;
  app_list?: CAppPriority[];
  count_after?: number;
  count_before?: number;
}

export interface CCommunity_GetUserPartnerEventNews_Response {
  results?: CClanMatchEventByRange[];
}

export type CCommunity_GetUserPartnerEventsAppPriorities_Request = Record<string, never>;

export interface CCommunity_GetUserPartnerEventsAppPriorities_Response {
  priorities?: CCommunity_PartnerEventsAppPriority[];
}

export interface CCommunity_GetUserPartnerEventViewStatus_Request {
  event_gids?: bigint[];
  include_read_events_only?: boolean;
}

export interface CCommunity_GetUserPartnerEventViewStatus_Response {
  events?: CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent[];
}

export interface CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent {
  event_gid?: bigint;
  last_shown_time?: number;
  last_read_time?: number;
  clan_account_id?: number;
}

export interface CCommunity_HideAndReportComment_Request {
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
  steamid?: bigint;
  commentthreadtype?: string;
  hide?: boolean;
  report_reason?: number;
  report_text?: string;
}

export type CCommunity_HideAndReportComment_Response = Record<string, never>;

export interface CCommunity_MarkPartnerEventsForUser_Request {
  markings?: CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking[];
}

export interface CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking {
  clanid?: number;
  event_gid?: bigint;
  display_location?: number;
  mark_shown?: boolean;
  mark_read?: boolean;
}

export type CCommunity_MarkPartnerEventsForUser_Response = Record<string, never>;

export interface CCommunity_PartnerEventResult {
  clanid?: number;
  event_gid?: bigint;
  announcement_gid?: bigint;
  appid?: number;
  possible_takeover?: boolean;
  rtime32_last_modified?: number;
  user_app_priority?: number;
}

export interface CCommunity_PartnerEventsAppPriority {
  appid?: number;
  user_app_priority?: number;
}

export interface CCommunity_PartnerEventsShowLessForApp_Request {
  appid?: number;
}

export type CCommunity_PartnerEventsShowLessForApp_Response = Record<string, never>;

export interface CCommunity_PartnerEventsShowMoreForApp_Request {
  appid?: number;
}

export type CCommunity_PartnerEventsShowMoreForApp_Response = Record<string, never>;

export interface CCommunity_PostCommentToThread_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  text?: string;
  gidparentcomment?: bigint;
  suppress_notifications?: boolean;
  is_report?: boolean;
  start_hidden?: boolean;
}

export interface CCommunity_PostCommentToThread_Response {
  gidcomment?: bigint;
  commentthreadid?: bigint;
  count?: number;
  upvotes?: number;
}

export interface CCommunity_RateClanAnnouncement_Request {
  announcementid?: bigint;
  vote_up?: boolean;
  clan_accountid?: number;
}

export type CCommunity_RateClanAnnouncement_Response = Record<string, never>;

export interface CCommunity_RateCommentThread_Request {
  commentthreadtype?: string;
  steamid?: bigint;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
  rate_up?: boolean;
  suppress_notifications?: boolean;
}

export interface CCommunity_RateCommentThread_Response {
  gidcomment?: bigint;
  commentthreadid?: bigint;
  count?: number;
  upvotes?: number;
  has_upvoted?: boolean;
}

export interface CCommunity_SetRecommendationBotReviewStatus_Request {
  review_labels?: CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel[];
}

export interface CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel {
  appid?: number;
  recommendationid?: bigint;
  is_bot_review?: boolean;
}

export type CCommunity_SetRecommendationBotReviewStatus_Response = Record<string, never>;

export interface CCommunity_VerifyClanMembership_Request {
  steamid?: bigint;
  steamids_verifymembership?: bigint[];
}

export interface CCommunity_VerifyClanMembership_Response {
  steamids_nonmembers?: bigint[];
}

export abstract class CommunityService {
  abstract ClearSinglePartnerEventsAppPriority(
    request: CCommunity_ClearSinglePartnerEventsAppPriority_Request,
  ): Promise<CCommunity_ClearSinglePartnerEventsAppPriority_Response>;
  abstract ClearUserPartnerEventsAppPriorities(
    request: CCommunity_ClearUserPartnerEventsAppPriorities_Request,
  ): Promise<CCommunity_ClearUserPartnerEventsAppPriorities_Response>;
  abstract DeleteCommentFromThread(
    request: CCommunity_DeleteCommentFromThread_Request,
  ): Promise<CCommunity_DeleteCommentFromThread_Response>;
  abstract FetchTranslationFromCrowdIn(
    request: CCommunity_FetchTranslationFromCrowdIn_Request,
  ): Promise<CCommunity_FetchTranslationFromCrowdIn_Response>;
  abstract GetAppRichPresenceLocalization(
    request: CCommunity_GetAppRichPresenceLocalization_Request,
  ): Promise<CCommunity_GetAppRichPresenceLocalization_Response>;
  abstract GetApps(request: CCommunity_GetApps_Request): Promise<CCommunity_GetApps_Response>;
  abstract GetAvatarHistory(
    request: CCommunity_GetAvatarHistory_Request,
  ): Promise<CCommunity_GetAvatarHistory_Response>;
  abstract GetBestEventsForUser(
    request: CCommunity_GetBestEventsForUser_Request,
  ): Promise<CCommunity_GetBestEventsForUser_Response>;
  abstract GetClanAnnouncementVoteForUser(
    request: CCommunity_GetClanAnnouncementVoteForUser_Request,
  ): Promise<CCommunity_GetClanAnnouncementVoteForUser_Response>;
  abstract GetClanCrowdInMetadata(
    request: CCommunity_GetClanCrowdInMetadata_Request,
  ): Promise<CCommunity_GetClanCrowdInMetadata_Response>;
  abstract GetClanEventCrowdInMetadata(
    request: CCommunity_GetClanEventCrowdInMetadata_Request,
  ): Promise<CCommunity_GetClanEventCrowdInMetadata_Response>;
  abstract GetClanLocGroupImages(
    request: CCommunity_GetClanLocGroupImages_Request,
  ): Promise<CCommunity_GetClanLocGroupImages_Response>;
  abstract GetClanMetadata(
    request: CCommunity_GetClanMetadata_Request,
  ): Promise<CCommunity_GetClanMetadata_Response>;
  abstract GetCommentThread(
    request: CCommunity_GetCommentThread_Request,
  ): Promise<CCommunity_GetCommentThread_Response>;
  abstract GetCommentThreadRatings(
    request: CCommunity_GetCommentThreadRatings_Request,
  ): Promise<CCommunity_GetCommentThreadRatings_Response>;
  abstract GetUserPartnerEventNews(
    request: CCommunity_GetUserPartnerEventNews_Request,
  ): Promise<CCommunity_GetUserPartnerEventNews_Response>;
  abstract GetUserPartnerEventsAppPriorities(
    request: CCommunity_GetUserPartnerEventsAppPriorities_Request,
  ): Promise<CCommunity_GetUserPartnerEventsAppPriorities_Response>;
  abstract GetUserPartnerEventViewStatus(
    request: CCommunity_GetUserPartnerEventViewStatus_Request,
  ): Promise<CCommunity_GetUserPartnerEventViewStatus_Response>;
  abstract HideAndReportComment(
    request: CCommunity_HideAndReportComment_Request,
  ): Promise<CCommunity_HideAndReportComment_Response>;
  abstract MarkPartnerEventsForUser(
    request: CCommunity_MarkPartnerEventsForUser_Request,
  ): Promise<CCommunity_MarkPartnerEventsForUser_Response>;
  abstract PartnerEventsShowLessForApp(
    request: CCommunity_PartnerEventsShowLessForApp_Request,
  ): Promise<CCommunity_PartnerEventsShowLessForApp_Response>;
  abstract PartnerEventsShowMoreForApp(
    request: CCommunity_PartnerEventsShowMoreForApp_Request,
  ): Promise<CCommunity_PartnerEventsShowMoreForApp_Response>;
  abstract PostCommentToThread(
    request: CCommunity_PostCommentToThread_Request,
  ): Promise<CCommunity_PostCommentToThread_Response>;
  abstract RateClanAnnouncement(
    request: CCommunity_RateClanAnnouncement_Request,
  ): Promise<CCommunity_RateClanAnnouncement_Response>;
  abstract RateCommentThread(
    request: CCommunity_RateCommentThread_Request,
  ): Promise<CCommunity_RateCommentThread_Response>;
  abstract SetRecommendationBotReviewStatus(
    request: CCommunity_SetRecommendationBotReviewStatus_Request,
  ): Promise<CCommunity_SetRecommendationBotReviewStatus_Response>;
  abstract VerifyClanMembership(
    request: CCommunity_VerifyClanMembership_Request,
  ): Promise<CCommunity_VerifyClanMembership_Response>;
}
