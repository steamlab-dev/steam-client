/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CForums_DeleteModeratedComment_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
  reason?: number;
  resolution?: number;
}

export type CForums_DeleteModeratedComment_Response = Record<string, never>;

export interface CForums_DeleteModeratedTopic_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  reason?: number;
  resolution?: number;
}

export type CForums_DeleteModeratedTopic_Response = Record<string, never>;

export interface CForums_GetForumDetails_Response {
  gidforum?: bigint;
  clanidowner?: number;
  gidfeature?: bigint;
  forumtype?: string;
  appid?: number;
  name?: string;
  permission_moderate?: number;
  permission_post?: number;
  permission_reply?: number;
  permission_view?: number;
  permissions?: CForums_UserPermissions;
  user_ban?: CForums_UserBan;
  is_public_forum?: boolean;
  permission_attach_images?: number;
}

export interface CForums_GetTopicDetails_Request {
  steamid?: bigint;
  gidforum?: bigint;
  forumtype?: string;
  gidfeature?: bigint;
  gidtopics?: bigint[];
  include_preview?: boolean;
  include_full_text?: boolean;
}

export interface CForums_GetTopicDetails_Response {
  forum_details?: CForums_GetForumDetails_Response;
  topics?: CForums_Topic[];
}

export interface CForums_ReportPost_Request {
  steamid?: bigint;
  forum_type?: string;
  gidfeature?: bigint;
  gidforum?: bigint;
  gidtopic?: bigint;
  gidcomment?: bigint;
  authorname?: string;
  reportername?: string;
  report?: string;
  report_type?: number;
  report_reason?: number;
}

export interface CForums_ReportPost_Response {
  gidreportforum?: bigint;
  gidreportthread?: bigint;
}

export interface CForums_ResolveReportedPost_Request {
  steamid?: bigint;
  gidforum?: bigint;
  gidtopic?: bigint;
  gidpost?: bigint;
}

export type CForums_ResolveReportedPost_Response = Record<string, never>;

export interface CForums_ResolveReportedPosts_Request {
  steamid?: bigint;
  forumtype?: string;
  gidfeature?: bigint;
  gidtopic?: bigint;
  audit_note?: string;
}

export interface CForums_ResolveReportedPosts_Response {
  resolved_count?: number;
}

export interface CForums_SetTopicLocked_Request {
  steamid?: bigint;
  gidforum?: bigint;
  gidtopic?: bigint;
  locked?: boolean;
  audit_note?: string;
}

export type CForums_SetTopicLocked_Response = Record<string, never>;

export interface CForums_Topic {
  gidforumtopic?: bigint;
  originalpost_accountid?: number;
  originalpost_date?: number;
  lastpost_accountid?: number;
  lastpost_date?: number;
  replies?: number;
  expires_date?: number;
  deleted?: boolean;
  sticky?: boolean;
  locked?: boolean;
  moved?: boolean;
  merged?: boolean;
  expired?: boolean;
  has_attachments?: boolean;
  title?: string;
  textpreview?: string;
  ipaddress?: number;
  answer_comment?: bigint;
  ipaddress_string?: string;
  ban_check_result?: number;
  reactions?: CForums_Topic_Reaction[];
  full_text?: string;
  delete_reason?: number;
}

export interface CForums_Topic_Reaction {
  reactionid?: number;
  count?: number;
}

export interface CForums_UndeleteDisputedComment_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
  gidcomment?: bigint;
}

export type CForums_UndeleteDisputedComment_Response = Record<string, never>;

export interface CForums_UndeleteDisputedTopic_Request {
  steamid?: bigint;
  comment_thread_type?: number;
  gidfeature?: bigint;
  gidfeature2?: bigint;
}

export type CForums_UndeleteDisputedTopic_Response = Record<string, never>;

export interface CForums_UserBan {
  accountid_ban_actor?: number;
  time_ban_start?: number;
  time_ban_end?: number;
  ban_reason?: string;
}

export interface CForums_UserPermissions {
  can_view?: boolean;
  can_post?: boolean;
  can_reply?: boolean;
  can_moderate?: boolean;
  can_edit_others_posts?: boolean;
  can_purge_topics?: boolean;
  is_banned?: boolean;
  can_attach_images?: boolean;
}

export abstract class ForumsService {
  abstract DeleteModeratedComment(
    request: CForums_DeleteModeratedComment_Request,
  ): Promise<CForums_DeleteModeratedComment_Response>;
  abstract DeleteModeratedTopic(
    request: CForums_DeleteModeratedTopic_Request,
  ): Promise<CForums_DeleteModeratedTopic_Response>;
  abstract GetTopicDetails(
    request: CForums_GetTopicDetails_Request,
  ): Promise<CForums_GetTopicDetails_Response>;
  abstract ReportPost(request: CForums_ReportPost_Request): Promise<CForums_ReportPost_Response>;
  abstract ResolveReportedPost(
    request: CForums_ResolveReportedPost_Request,
  ): Promise<CForums_ResolveReportedPost_Response>;
  abstract ResolveReportedPosts(
    request: CForums_ResolveReportedPosts_Request,
  ): Promise<CForums_ResolveReportedPosts_Response>;
  abstract SetTopicLocked(
    request: CForums_SetTopicLocked_Request,
  ): Promise<CForums_SetTopicLocked_Response>;
  abstract UndeleteDisputedComment(
    request: CForums_UndeleteDisputedComment_Request,
  ): Promise<CForums_UndeleteDisputedComment_Response>;
  abstract UndeleteDisputedTopic(
    request: CForums_UndeleteDisputedTopic_Request,
  ): Promise<CForums_UndeleteDisputedTopic_Response>;
}
