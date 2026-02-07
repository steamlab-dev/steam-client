/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { ECommentThreadType, EContentReportReason } from "./enums";
import type {
  CCDDBAppDetailCommon,
  CClanMatchEventByRange,
  CMsgIPAddress,
  EProtoClanEventType,
} from "./steammessages_base";

export const ECommentDeleteReason = {
  k_ECommentDeleteReason_Invalid: 0,
  k_ECommentDeleteReason_User: 1,
  k_ECommentDeleteReason_ThreadOwner: 2,
  k_ECommentDeleteReason_Moderator: 3,
  k_ECommentDeleteReason_Support: 4,
  k_ECommentDeleteReason_Spam: 5,
  k_ECommentDeleteReason_AccountDeletion: 6,
} as const;

export type ECommentDeleteReason = (typeof ECommentDeleteReason)[keyof typeof ECommentDeleteReason];

export const EClanImageGroup = {
  k_EClanImageGroup_None: 0,
  k_EClanImageGroup_Announcement: 1,
  k_EClanImageGroup_Curator: 2,
} as const;

export type EClanImageGroup = (typeof EClanImageGroup)[keyof typeof EClanImageGroup];

export const EClanImageFileType = {
  k_EClanImageFileType_Unknown: 0,
  k_EClanImageFileType_JPEG: 1,
  k_EClanImageFileType_GIF: 2,
  k_EClanImageFileType_PNG: 3,
  k_EClanImageFileType_MP4: 4,
  k_EClanImageFileType_WEBM: 5,
  k_EClanImageFileType_VTT: 6,
  k_EClanImageFileType_SRT: 7,
  k_EClanImageFileType_SVG: 8,
  k_EClanImageFileType_XML: 9,
  k_EClanImageFileType_WEBP: 10,
} as const;

export type EClanImageFileType = (typeof EClanImageFileType)[keyof typeof EClanImageFileType];

export const EPartnerEventDisplayLocation = {
  k_EPartnerEventDisplayLocation_Invalid: 0,
  k_EPartnerEventDisplayLocation_AppDetailsSpotlight: 1,
  k_EPartnerEventDisplayLocation_LibraryOverview: 2,
  k_EPartnerEventDisplayLocation_StoreAppPage: 3,
  k_EPartnerEventDisplayLocation_EventScroller: 4,
  k_EPartnerEventDisplayLocation_AppDetailsActivity: 5,
  k_EPartnerEventDisplayLocation_CommunityHub: 6,
  k_EPartnerEventDisplayLocation_StoreFrontPage: 7,
  k_EPartnerEventDisplayLocation_NewsHub: 8,
  k_EPartnerEventDisplayLocation_GamepadHome: 9,
  k_EPartnerEventDisplayLocation_StoreHub: 10,
} as const;

export type EPartnerEventDisplayLocation =
  (typeof EPartnerEventDisplayLocation)[keyof typeof EPartnerEventDisplayLocation];

export interface CCommunity_GetApps_Request {
  appids?: number[];
  language?: number;
}

export interface CCommunity_GetApps_Response {
  apps?: CCDDBAppDetailCommon[];
}

export interface CCommunity_GetAppRichPresenceLocalization_Request {
  appid?: number;
  language?: string;
}

export interface CCommunity_GetAppRichPresenceLocalization_Response {
  appid?: number;
  token_lists?: CCommunity_GetAppRichPresenceLocalization_Response.TokenList[];
}

export namespace CCommunity_GetAppRichPresenceLocalization_Response {
  export interface Token {
    name?: string;
    value?: string;
  }

  export interface TokenList {
    language?: string;
    tokens?: CCommunity_GetAppRichPresenceLocalization_Response.Token[];
  }
}

export interface CCommunity_GetCommentThread_Request {
  steamid?: Long;
  comment_thread_type?: ECommentThreadType;
  gidfeature?: Long;
  gidfeature2?: Long;
  commentthreadid?: Long;
  start?: number;
  count?: number;
  upvoters?: number;
  include_deleted?: boolean;
  gidcomment?: Long;
  time_oldest?: number;
  oldest_first?: boolean;
}

export interface CCommunity_Comment {
  gidcomment?: Long;
  steamid?: Long;
  timestamp?: number;
  text?: string;
  upvotes?: number;
  hidden?: boolean;
  hidden_by_user?: boolean;
  deleted?: boolean;
  ipaddress?: CMsgIPAddress;
  total_hidden?: number;
  upvoted_by_user?: boolean;
  reactions?: CCommunity_Comment.Reaction[];
  gidparentcomment?: Long;
  delete_reason?: ECommentDeleteReason;
}

export namespace CCommunity_Comment {
  export interface Reaction {
    reactionid?: number;
    count?: number;
  }
}

export interface CCommunity_GetCommentThread_Response {
  comments?: CCommunity_Comment[];
  deleted_comments?: CCommunity_Comment[];
  steamid?: Long;
  commentthreadid?: Long;
  start?: number;
  count?: number;
  total_count?: number;
  upvotes?: number;
  upvoters?: number[];
  user_subscribed?: boolean;
  user_upvoted?: boolean;
  answer_commentid?: Long;
  answer_actor?: number;
  answer_actor_rank?: number;
  can_post?: boolean;
  comment_thread_type?: number;
  gidfeature?: Long;
  gidfeature2?: Long;
}

export interface CCommunity_PostCommentToThread_Request {
  steamid?: Long;
  comment_thread_type?: ECommentThreadType;
  gidfeature?: Long;
  gidfeature2?: Long;
  text?: string;
  gidparentcomment?: Long;
  suppress_notifications?: boolean;
  is_report?: boolean;
  start_hidden?: boolean;
}

export interface CCommunity_PostCommentToThread_Response {
  gidcomment?: Long;
  commentthreadid?: Long;
  count?: number;
  upvotes?: number;
}

export interface CCommunity_DeleteCommentFromThread_Request {
  steamid?: Long;
  comment_thread_type?: ECommentThreadType;
  gidfeature?: Long;
  gidfeature2?: Long;
  gidcomment?: Long;
  undelete?: boolean;
}

export type CCommunity_DeleteCommentFromThread_Response = Record<string, never>;

export interface CCommunity_RateCommentThread_Request {
  commentthreadtype?: string;
  steamid?: Long;
  gidfeature?: Long;
  gidfeature2?: Long;
  gidcomment?: Long;
  rate_up?: boolean;
  suppress_notifications?: boolean;
}

export interface CCommunity_RateCommentThread_Response {
  gidcomment?: Long;
  commentthreadid?: Long;
  count?: number;
  upvotes?: number;
  has_upvoted?: boolean;
}

export interface CCommunity_GetCommentThreadRatings_Request {
  commentthreadtype?: string;
  steamid?: Long;
  gidfeature?: Long;
  gidfeature2?: Long;
  gidcomment?: Long;
  max_results?: number;
}

export interface CCommunity_GetCommentThreadRatings_Response {
  commentthreadid?: Long;
  gidcomment?: Long;
  upvotes?: number;
  has_upvoted?: boolean;
  upvoter_accountids?: number[];
}

export interface CCommunity_VerifyClanMembership_Request {
  steamid?: Long;
  steamids_verifymembership?: Long[];
}

export interface CCommunity_VerifyClanMembership_Response {
  steamids_nonmembers?: Long[];
}

export interface CCommunity_RateClanAnnouncement_Request {
  announcementid?: Long;
  vote_up?: boolean;
  clan_accountid?: number;
}

export type CCommunity_RateClanAnnouncement_Response = Record<string, never>;

export interface CCommunity_GetClanAnnouncementVoteForUser_Request {
  announcementid?: Long;
}

export interface CCommunity_GetClanAnnouncementVoteForUser_Response {
  voted_up?: boolean;
  voted_down?: boolean;
}

export interface CCommunity_GetClanLocGroupImages_Request {
  steamid?: Long;
  group?: EClanImageGroup;
  language?: number;
  loc_group_ids?: Long[];
}

export interface CCommunity_ClanLocGroupImage {
  loc_group_id?: Long;
  image_hash?: string;
  thumbnail_hash?: string;
  file_type?: EClanImageFileType;
  group?: EClanImageGroup;
  width?: number;
  height?: number;
  extensions?: string;
}

export interface CCommunity_GetClanLocGroupImages_Response {
  images?: CCommunity_ClanLocGroupImage[];
}

export interface CCommunity_GetAvatarHistory_Request {
  steamid?: Long;
  filter_user_uploaded_only?: boolean;
}

export interface CCommunity_GetAvatarHistory_Response {
  avatars?: CCommunity_GetAvatarHistory_Response.AvatarData[];
}

export namespace CCommunity_GetAvatarHistory_Response {
  export interface AvatarData {
    avatar_sha1?: string;
    user_uploaded?: boolean;
    timestamp?: number;
  }
}

export interface CCommunity_GetClanEventCrowdInMetadata_Request {
  steamid?: Long;
  itemid?: Long;
}

export interface CCommunity_GetClanEventCrowdInMetadata_Response {
  crowdin_project_id?: Long;
  crowdin_file_id?: Long;
}

export interface CCommunity_GetClanCrowdInMetadata_Request {
  steamid?: Long;
}

export interface CCommunity_GetClanCrowdInMetadata_Response {
  crowdin_project_id?: Long;
  crowdin_directory_id?: Long;
  push_by_default?: boolean;
}

export interface CCommunity_FetchTranslationFromCrowdIn_Request {
  steamid?: Long;
  itemid?: Long;
  language?: number;
}

export type CCommunity_FetchTranslationFromCrowdIn_Response = Record<string, never>;

export interface CCommunity_HideAndReportComment_Request {
  gidfeature?: Long;
  gidfeature2?: Long;
  gidcomment?: Long;
  steamid?: Long;
  commentthreadtype?: string;
  hide?: boolean;
  report_reason?: EContentReportReason;
  report_text?: string;
}

export type CCommunity_HideAndReportComment_Response = Record<string, never>;

export interface CAppPriority {
  priority?: number;
  appid?: number[];
}

export interface CCommunity_GetUserPartnerEventNews_Request {
  count?: number;
  offset?: number;
  rtime32_start_time?: number;
  rtime32_end_time?: number;
  language_preference?: number[];
  filter_event_type?: EProtoClanEventType[];
  filter_to_appid?: boolean;
  app_list?: CAppPriority[];
  count_after?: number;
  count_before?: number;
}

export interface CCommunity_GetUserPartnerEventNews_Response {
  results?: CClanMatchEventByRange[];
}

export interface CCommunity_GetBestEventsForUser_Request {
  include_steam_blog?: boolean;
  filter_to_played_within_days?: number;
  include_only_game_updates?: boolean;
}

export interface CCommunity_PartnerEventResult {
  clanid?: number;
  event_gid?: Long;
  announcement_gid?: Long;
  appid?: number;
  possible_takeover?: boolean;
  rtime32_last_modified?: number;
  user_app_priority?: number;
}

export interface CCommunity_GetBestEventsForUser_Response {
  results?: CCommunity_PartnerEventResult[];
}

export interface CCommunity_MarkPartnerEventsForUser_Request {
  markings?: CCommunity_MarkPartnerEventsForUser_Request.PartnerEventMarking[];
}

export namespace CCommunity_MarkPartnerEventsForUser_Request {
  export interface PartnerEventMarking {
    clanid?: number;
    event_gid?: Long;
    display_location?: EPartnerEventDisplayLocation;
    mark_shown?: boolean;
    mark_read?: boolean;
  }
}

export type CCommunity_MarkPartnerEventsForUser_Response = Record<string, never>;

export interface CCommunity_GetUserPartnerEventViewStatus_Request {
  event_gids?: Long[];
  include_read_events_only?: boolean;
}

export interface CCommunity_GetUserPartnerEventViewStatus_Response {
  events?: CCommunity_GetUserPartnerEventViewStatus_Response.PartnerEvent[];
}

export namespace CCommunity_GetUserPartnerEventViewStatus_Response {
  export interface PartnerEvent {
    event_gid?: Long;
    last_shown_time?: number;
    last_read_time?: number;
    clan_account_id?: number;
  }
}

export interface CCommunity_PartnerEventsShowMoreForApp_Request {
  appid?: number;
}

export type CCommunity_PartnerEventsShowMoreForApp_Response = Record<string, never>;

export interface CCommunity_PartnerEventsShowLessForApp_Request {
  appid?: number;
}

export type CCommunity_PartnerEventsShowLessForApp_Response = Record<string, never>;

export type CCommunity_ClearUserPartnerEventsAppPriorities_Request = Record<string, never>;

export type CCommunity_ClearUserPartnerEventsAppPriorities_Response = Record<string, never>;

export type CCommunity_GetUserPartnerEventsAppPriorities_Request = Record<string, never>;

export interface CCommunity_PartnerEventsAppPriority {
  appid?: number;
  user_app_priority?: number;
}

export interface CCommunity_GetUserPartnerEventsAppPriorities_Response {
  priorities?: CCommunity_PartnerEventsAppPriority[];
}

export interface CCommunity_ClearSinglePartnerEventsAppPriority_Request {
  appid?: number;
}

export type CCommunity_ClearSinglePartnerEventsAppPriority_Response = Record<string, never>;

export interface CCommunity_SetRecommendationBotReviewStatus_Request {
  review_labels?: CCommunity_SetRecommendationBotReviewStatus_Request.ReviewLabel[];
}

export namespace CCommunity_SetRecommendationBotReviewStatus_Request {
  export interface ReviewLabel {
    appid?: number;
    recommendationid?: Long;
    is_bot_review?: boolean;
  }
}

export type CCommunity_SetRecommendationBotReviewStatus_Response = Record<string, never>;

export abstract class CommunityService {
  abstract GetApps(request: CCommunity_GetApps_Request): Promise<CCommunity_GetApps_Response>;
  abstract GetAppRichPresenceLocalization(
    request: CCommunity_GetAppRichPresenceLocalization_Request,
  ): Promise<CCommunity_GetAppRichPresenceLocalization_Response>;
  abstract GetCommentThread(
    request: CCommunity_GetCommentThread_Request,
  ): Promise<CCommunity_GetCommentThread_Response>;
  abstract PostCommentToThread(
    request: CCommunity_PostCommentToThread_Request,
  ): Promise<CCommunity_PostCommentToThread_Response>;
  abstract DeleteCommentFromThread(
    request: CCommunity_DeleteCommentFromThread_Request,
  ): Promise<CCommunity_DeleteCommentFromThread_Response>;
  abstract RateCommentThread(
    request: CCommunity_RateCommentThread_Request,
  ): Promise<CCommunity_RateCommentThread_Response>;
  abstract GetCommentThreadRatings(
    request: CCommunity_GetCommentThreadRatings_Request,
  ): Promise<CCommunity_GetCommentThreadRatings_Response>;
  abstract VerifyClanMembership(
    request: CCommunity_VerifyClanMembership_Request,
  ): Promise<CCommunity_VerifyClanMembership_Response>;
  abstract RateClanAnnouncement(
    request: CCommunity_RateClanAnnouncement_Request,
  ): Promise<CCommunity_RateClanAnnouncement_Response>;
  abstract GetClanAnnouncementVoteForUser(
    request: CCommunity_GetClanAnnouncementVoteForUser_Request,
  ): Promise<CCommunity_GetClanAnnouncementVoteForUser_Response>;
  abstract GetClanLocGroupImages(
    request: CCommunity_GetClanLocGroupImages_Request,
  ): Promise<CCommunity_GetClanLocGroupImages_Response>;
  abstract GetAvatarHistory(
    request: CCommunity_GetAvatarHistory_Request,
  ): Promise<CCommunity_GetAvatarHistory_Response>;
  abstract GetClanEventCrowdInMetadata(
    request: CCommunity_GetClanEventCrowdInMetadata_Request,
  ): Promise<CCommunity_GetClanEventCrowdInMetadata_Response>;
  abstract GetClanCrowdInMetadata(
    request: CCommunity_GetClanCrowdInMetadata_Request,
  ): Promise<CCommunity_GetClanCrowdInMetadata_Response>;
  abstract FetchTranslationFromCrowdIn(
    request: CCommunity_FetchTranslationFromCrowdIn_Request,
  ): Promise<CCommunity_FetchTranslationFromCrowdIn_Response>;
  abstract HideAndReportComment(
    request: CCommunity_HideAndReportComment_Request,
  ): Promise<CCommunity_HideAndReportComment_Response>;
  abstract GetUserPartnerEventNews(
    request: CCommunity_GetUserPartnerEventNews_Request,
  ): Promise<CCommunity_GetUserPartnerEventNews_Response>;
  abstract GetBestEventsForUser(
    request: CCommunity_GetBestEventsForUser_Request,
  ): Promise<CCommunity_GetBestEventsForUser_Response>;
  abstract MarkPartnerEventsForUser(
    request: CCommunity_MarkPartnerEventsForUser_Request,
  ): Promise<CCommunity_MarkPartnerEventsForUser_Response>;
  abstract GetUserPartnerEventViewStatus(
    request: CCommunity_GetUserPartnerEventViewStatus_Request,
  ): Promise<CCommunity_GetUserPartnerEventViewStatus_Response>;
  abstract PartnerEventsShowMoreForApp(
    request: CCommunity_PartnerEventsShowMoreForApp_Request,
  ): Promise<CCommunity_PartnerEventsShowMoreForApp_Response>;
  abstract PartnerEventsShowLessForApp(
    request: CCommunity_PartnerEventsShowLessForApp_Request,
  ): Promise<CCommunity_PartnerEventsShowLessForApp_Response>;
  abstract ClearUserPartnerEventsAppPriorities(
    request: CCommunity_ClearUserPartnerEventsAppPriorities_Request,
  ): Promise<CCommunity_ClearUserPartnerEventsAppPriorities_Response>;
  abstract GetUserPartnerEventsAppPriorities(
    request: CCommunity_GetUserPartnerEventsAppPriorities_Request,
  ): Promise<CCommunity_GetUserPartnerEventsAppPriorities_Response>;
  abstract ClearSinglePartnerEventsAppPriority(
    request: CCommunity_ClearSinglePartnerEventsAppPriority_Request,
  ): Promise<CCommunity_ClearSinglePartnerEventsAppPriority_Response>;
  abstract SetRecommendationBotReviewStatus(
    request: CCommunity_SetRecommendationBotReviewStatus_Request,
  ): Promise<CCommunity_SetRecommendationBotReviewStatus_Response>;
}
