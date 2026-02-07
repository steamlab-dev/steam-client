/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export interface CDisplayMarketingMessage {
  gid?: Long;
  title?: string;
  type?: number;
  associated_item_id?: StoreItemID;
  associated_item?: StoreItem;
  associated_name?: string;
  template_type?: string;
  template_vars_json?: string;
}

export interface CMarketingMessage_GetMarketingMessagesForApps_Request {
  appids?: number[];
}

export interface CMarketingMessage_GetMarketingMessagesForApps_Response {
  messages?: CMarketingMessageProto[];
}

export interface CMarketingMessage_GetMarketingMessagesForPartner_Request {
  partnerid?: number;
}

export interface CMarketingMessage_GetMarketingMessagesForPartner_Response {
  messages?: CMarketingMessageProto[];
}

export interface CMarketingMessageClickedHourlyStats {
  rt_time_hour?: number;
  clicked_count?: number;
  display_index?: number;
  template_type?: number;
  click_location?: number;
}

export interface CMarketingMessageHourlyStats {
  rt_time_hour?: number;
  seen_count?: number;
  template_type?: number;
  display_index?: number;
}

export interface CMarketingMessageProto {
  gid?: Long;
  title?: string;
  type?: number;
  visibility?: number;
  priority?: number;
  association_type?: number;
  associated_id?: number;
  associated_name?: string;
  start_date?: number;
  end_date?: number;
  country_allow?: string;
  country_deny?: string;
  ownership_restrictions_overridden?: boolean;
  must_own_appid?: number;
  must_not_own_appid?: number;
  must_own_packageid?: number;
  must_not_own_packageid?: number;
  must_have_launched_appid?: number;
  additional_restrictions?: string;
  template_type?: string;
  template_vars?: string;
  flags?: number;
  creator_name?: string;
  template_vars_json?: string;
  additional_restrictions_json?: string;
}

export interface CMarketingMessages_CreateMarketingMessage_Request {
  message?: CMarketingMessageProto;
  from_json?: boolean;
}

export interface CMarketingMessages_CreateMarketingMessage_Response {
  gid?: Long;
}

export interface CMarketingMessages_DeleteMarketingMessage_Request {
  gid?: Long;
}

export type CMarketingMessages_DeleteMarketingMessage_Response = Record<string, never>;

export interface CMarketingMessages_DoesUserHavePendingMarketingMessages_Request {
  country_code?: string;
  elanguage?: number;
  operating_system?: number;
  client_package_version?: number;
}

export interface CMarketingMessages_DoesUserHavePendingMarketingMessages_Response {
  has_pending_messages?: boolean;
  pending_message_count?: number;
}

export interface CMarketingMessages_FindMarketingMessages_Request {
  lookup_type?: number;
  gid?: Long;
  message_type?: number;
  gidlist?: Long[];
  title?: string;
}

export interface CMarketingMessages_FindMarketingMessages_Response {
  messages?: CMarketingMessageProto[];
}

export interface CMarketingMessages_GetActiveMarketingMessages_Request {
  country?: string;
  anonymous_user?: boolean;
}

export interface CMarketingMessages_GetActiveMarketingMessages_Response {
  messages?: CMarketingMessageProto[];
  time_next_message_age?: number;
}

export interface CMarketingMessages_GetDisplayMarketingMessage_Request {
  gid?: Long;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CMarketingMessages_GetDisplayMarketingMessage_Response {
  message?: CDisplayMarketingMessage;
}

export interface CMarketingMessages_GetMarketingMessage_Request {
  gid?: Long;
}

export interface CMarketingMessages_GetMarketingMessage_Response {
  message?: CMarketingMessageProto;
}

export interface CMarketingMessages_GetMarketingMessageClickedStats_Request {
  gid?: Long;
}

export interface CMarketingMessages_GetMarketingMessageClickedStats_Response {
  stats?: CMarketingMessageClickedHourlyStats[];
}

export interface CMarketingMessages_GetMarketingMessagesForUser_Request {
  include_seen_messages?: boolean;
  country_code?: string;
  elanguage?: number;
  operating_system?: number;
  client_package_version?: number;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
}

export interface CMarketingMessages_GetMarketingMessagesForUser_Response {
  messages?: CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser[];
}

export interface CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser {
  already_seen?: boolean;
  message?: CDisplayMarketingMessage;
}

export interface CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request {
  rt_start_time?: number;
  rt_end_time?: number;
}

export interface CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response {
  stats?: CMarketingMessageHourlyStats[];
  clicked_stats?: CMarketingMessageClickedHourlyStats[];
}

export interface CMarketingMessages_GetMarketingMessageViewerStats_Request {
  gid?: Long;
}

export interface CMarketingMessages_GetMarketingMessageViewerStats_Response {
  stats?: CMarketingMessageHourlyStats[];
}

export interface CMarketingMessages_GetPartnerMessagePreview_Request {
  gid?: Long;
  partnerid?: number;
}

export interface CMarketingMessages_GetPartnerMessagePreview_Response {
  message?: CMarketingMessageProto;
}

export interface CMarketingMessages_GetPartnerReadyToPublishMessages_Request {
  partnerid?: number;
}

export interface CMarketingMessages_GetPartnerReadyToPublishMessages_Response {
  messages?: CDisplayMarketingMessage[];
}

export interface CMarketingMessages_GetPastMarketingMessages_Request {
  start_past_days?: number;
  upto_past_days?: number;
}

export interface CMarketingMessages_GetPastMarketingMessages_Response {
  messages?: CMarketingMessageProto[];
}

export interface CMarketingMessages_MarkMessageClicked_Notification {
  gid?: Long;
  display_index?: number;
  template_type?: number;
  click_location?: number;
}

export interface CMarketingMessages_MarkMessageSeen_Notification {
  gid?: Long;
  display_index?: number;
  template_type?: number;
}

export interface CMarketingMessages_PartnerPublishMessage_Request {
  gid?: Long;
  partnerid?: number;
}

export type CMarketingMessages_PartnerPublishMessage_Response = Record<string, never>;

export interface CMarketingMessages_UpdateMarketingMessage_Request {
  gid?: Long;
  message?: CMarketingMessageProto;
  from_json?: boolean;
}

export type CMarketingMessages_UpdateMarketingMessage_Response = Record<string, never>;

export abstract class MarketingMessagesService {
  abstract CreateMarketingMessage(
    request: CMarketingMessages_CreateMarketingMessage_Request,
  ): Promise<CMarketingMessages_CreateMarketingMessage_Response>;
  abstract DeleteMarketingMessage(
    request: CMarketingMessages_DeleteMarketingMessage_Request,
  ): Promise<CMarketingMessages_DeleteMarketingMessage_Response>;
  abstract DoesUserHavePendingMarketingMessages(
    request: CMarketingMessages_DoesUserHavePendingMarketingMessages_Request,
  ): Promise<CMarketingMessages_DoesUserHavePendingMarketingMessages_Response>;
  abstract FindMarketingMessages(
    request: CMarketingMessages_FindMarketingMessages_Request,
  ): Promise<CMarketingMessages_FindMarketingMessages_Response>;
  abstract GetActiveMarketingMessages(
    request: CMarketingMessages_GetActiveMarketingMessages_Request,
  ): Promise<CMarketingMessages_GetActiveMarketingMessages_Response>;
  abstract GetDisplayMarketingMessage(
    request: CMarketingMessages_GetDisplayMarketingMessage_Request,
  ): Promise<CMarketingMessages_GetDisplayMarketingMessage_Response>;
  abstract GetDisplayMarketingMessageAdmin(
    request: CMarketingMessages_GetDisplayMarketingMessage_Request,
  ): Promise<CMarketingMessages_GetDisplayMarketingMessage_Response>;
  abstract GetDisplayMarketingMessageForUser(
    request: CMarketingMessages_GetDisplayMarketingMessage_Request,
  ): Promise<CMarketingMessages_GetDisplayMarketingMessage_Response>;
  abstract GetMarketingMessage(
    request: CMarketingMessages_GetMarketingMessage_Request,
  ): Promise<CMarketingMessages_GetMarketingMessage_Response>;
  abstract GetMarketingMessageClickedStats(
    request: CMarketingMessages_GetMarketingMessageClickedStats_Request,
  ): Promise<CMarketingMessages_GetMarketingMessageClickedStats_Response>;
  abstract GetMarketingMessagesForApps(
    request: CMarketingMessage_GetMarketingMessagesForApps_Request,
  ): Promise<CMarketingMessage_GetMarketingMessagesForApps_Response>;
  abstract GetMarketingMessagesForPartner(
    request: CMarketingMessage_GetMarketingMessagesForPartner_Request,
  ): Promise<CMarketingMessage_GetMarketingMessagesForPartner_Response>;
  abstract GetMarketingMessagesForUser(
    request: CMarketingMessages_GetMarketingMessagesForUser_Request,
  ): Promise<CMarketingMessages_GetMarketingMessagesForUser_Response>;
  abstract GetMarketingMessagesViewerRangeStats(
    request: CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request,
  ): Promise<CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response>;
  abstract GetMarketingMessageViewerStats(
    request: CMarketingMessages_GetMarketingMessageViewerStats_Request,
  ): Promise<CMarketingMessages_GetMarketingMessageViewerStats_Response>;
  abstract GetPartnerMessagePreview(
    request: CMarketingMessages_GetPartnerMessagePreview_Request,
  ): Promise<CMarketingMessages_GetPartnerMessagePreview_Response>;
  abstract GetPartnerReadyToPublishMessages(
    request: CMarketingMessages_GetPartnerReadyToPublishMessages_Request,
  ): Promise<CMarketingMessages_GetPartnerReadyToPublishMessages_Response>;
  abstract GetPastMarketingMessages(
    request: CMarketingMessages_GetPastMarketingMessages_Request,
  ): Promise<CMarketingMessages_GetPastMarketingMessages_Response>;
  abstract MarkMessageClicked(
    request: CMarketingMessages_MarkMessageClicked_Notification,
  ): Promise<void>;
  abstract MarkMessageSeen(request: CMarketingMessages_MarkMessageSeen_Notification): Promise<void>;
  abstract PublishPartnerMessage(
    request: CMarketingMessages_PartnerPublishMessage_Request,
  ): Promise<CMarketingMessages_PartnerPublishMessage_Response>;
  abstract UpdateMarketingMessage(
    request: CMarketingMessages_UpdateMarketingMessage_Request,
  ): Promise<CMarketingMessages_UpdateMarketingMessage_Response>;
}
