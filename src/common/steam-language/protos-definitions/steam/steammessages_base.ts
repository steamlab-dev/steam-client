/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EBanContentCheckResult = {
  k_EBanContentCheckResult_NotScanned: 0,
  k_EBanContentCheckResult_Reset: 1,
  k_EBanContentCheckResult_NeedsChecking: 2,
  k_EBanContentCheckResult_VeryUnlikely: 5,
  k_EBanContentCheckResult_Unlikely: 30,
  k_EBanContentCheckResult_Possible: 50,
  k_EBanContentCheckResult_Likely: 75,
  k_EBanContentCheckResult_VeryLikely: 100,
} as const;

export type EBanContentCheckResult =
  (typeof EBanContentCheckResult)[keyof typeof EBanContentCheckResult];

export const EProtoClanEventType = {
  k_EClanOtherEvent: 1,
  k_EClanGameEvent: 2,
  k_EClanPartyEvent: 3,
  k_EClanMeetingEvent: 4,
  k_EClanSpecialCauseEvent: 5,
  k_EClanMusicAndArtsEvent: 6,
  k_EClanSportsEvent: 7,
  k_EClanTripEvent: 8,
  k_EClanChatEvent: 9,
  k_EClanGameReleaseEvent: 10,
  k_EClanBroadcastEvent: 11,
  k_EClanSmallUpdateEvent: 12,
  k_EClanPreAnnounceMajorUpdateEvent: 13,
  k_EClanMajorUpdateEvent: 14,
  k_EClanDLCReleaseEvent: 15,
  k_EClanFutureReleaseEvent: 16,
  k_EClanESportTournamentStreamEvent: 17,
  k_EClanDevStreamEvent: 18,
  k_EClanFamousStreamEvent: 19,
  k_EClanGameSalesEvent: 20,
  k_EClanGameItemSalesEvent: 21,
  k_EClanInGameBonusXPEvent: 22,
  k_EClanInGameLootEvent: 23,
  k_EClanInGamePerksEvent: 24,
  k_EClanInGameChallengeEvent: 25,
  k_EClanInGameContestEvent: 26,
  k_EClanIRLEvent: 27,
  k_EClanNewsEvent: 28,
  k_EClanBetaReleaseEvent: 29,
  k_EClanInGameContentReleaseEvent: 30,
  k_EClanFreeTrial: 31,
  k_EClanSeasonRelease: 32,
  k_EClanSeasonUpdate: 33,
  k_EClanCrosspostEvent: 34,
  k_EClanInGameEventGeneral: 35,
  k_EClanCreatorHome: 36,
} as const;

export type EProtoClanEventType = (typeof EProtoClanEventType)[keyof typeof EProtoClanEventType];

export const PartnerEventNotificationType = {
  k_EEventStart: 0,
  k_EEventBroadcastStart: 1,
  k_EEventMatchStart: 2,
  k_EEventPartnerMaxType: 3,
} as const;

export type PartnerEventNotificationType =
  (typeof PartnerEventNotificationType)[keyof typeof PartnerEventNotificationType];

export interface CMsgIPAddress {
  ip?: { v4: number } | { v6: Buffer };
}

export interface CMsgIPAddressBucket {
  original_ip_address?: CMsgIPAddress;
  bucket?: Long;
}

export interface CMsgGCRoutingProtoBufHeader {
  dst_gcid_queue?: Long;
  dst_gc_dir_index?: number;
}

export interface CMsgProtoBufHeader {
  steamid?: Long;
  client_sessionid?: number;
  routing_appid?: number;
  jobid_source?: Long;
  jobid_target?: Long;
  target_job_name?: string;
  seq_num?: number;
  eresult?: number;
  error_message?: string;
  auth_account_flags?: number;
  token_source?: number;
  admin_spoofing_user?: boolean;
  transport_error?: number;
  messageid?: Long;
  publisher_group_id?: number;
  sysid?: number;
  webapi_key_id?: number;
  is_from_external_source?: boolean;
  forward_to_sysid?: number[];
  cm_sysid?: number;
  launcher_type?: number;
  realm?: number;
  timeout_ms?: number;
  debug_source?: string;
  debug_source_string_index?: number;
  token_id?: Long;
  routing_gc?: CMsgGCRoutingProtoBufHeader;
  session_disposition?: CMsgProtoBufHeader.ESessionDisposition;
  wg_token?: string;
  webui_auth_key?: string;
  exclude_client_sessionids?: number[];
  admin_request_spoofing_steamid?: Long;
  is_valveds?: boolean;
  trace_tag?: Long;
  ip_addr?: { ip: number } | { ip_v6: Buffer };
}

export namespace CMsgProtoBufHeader {
  export const ESessionDisposition = {
    k_ESessionDispositionNormal: 0,
    k_ESessionDispositionDisconnect: 1,
  } as const;

  export type ESessionDisposition = (typeof ESessionDisposition)[keyof typeof ESessionDisposition];
}

export interface CMsgKubeRPCPacket {
  hdr?: CMsgKubeRPCPacket.Hdr;
  payload?: Buffer;
}

export namespace CMsgKubeRPCPacket {
  export interface Hdr {
    jobid_source?: Long;
    jobid_target?: Long;
    eresult?: number;
    target_job_name?: string;
    error_message?: string;
    reply_address?: string;
  }
}

export interface CMsgMulti {
  size_unzipped?: number;
  message_body?: Buffer;
}

export interface CMsgProtobufWrapped {
  message_body?: Buffer;
}

export interface CMsgAuthTicket {
  estate?: number;
  eresult?: number;
  steamid?: Long;
  gameid?: Long;
  h_steam_pipe?: number;
  ticket_crc?: number;
  ticket?: Buffer;
  server_secret?: Buffer;
  ticket_type?: number;
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

export interface CMsgAppRights {
  edit_info?: boolean;
  publish?: boolean;
  view_error_data?: boolean;
  download?: boolean;
  upload_cdkeys?: boolean;
  generate_cdkeys?: boolean;
  view_financials?: boolean;
  manage_ceg?: boolean;
  manage_signing?: boolean;
  manage_cdkeys?: boolean;
  edit_marketing?: boolean;
  economy_support?: boolean;
  economy_support_supervisor?: boolean;
  manage_pricing?: boolean;
  broadcast_live?: boolean;
  view_marketing_traffic?: boolean;
  edit_store_display_content?: boolean;
}

export interface CCuratorPreferences {
  supported_languages?: number;
  platform_windows?: boolean;
  platform_mac?: boolean;
  platform_linux?: boolean;
  vr_content?: boolean;
  adult_content_violence?: boolean;
  adult_content_sex?: boolean;
  timestamp_updated?: number;
  tagids_curated?: number[];
  tagids_filtered?: number[];
  website_title?: string;
  website_url?: string;
  discussion_url?: string;
  show_broadcast?: boolean;
}

export interface CLocalizationToken {
  language?: number;
  localized_string?: string;
}

export interface CClanEventUserNewsTuple {
  clanid?: number;
  event_gid?: Long;
  announcement_gid?: Long;
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

export interface CCommunity_ClanAnnouncementInfo {
  gid?: Long;
  clanid?: Long;
  posterid?: Long;
  headline?: string;
  posttime?: number;
  updatetime?: number;
  body?: string;
  commentcount?: number;
  tags?: string[];
  language?: number;
  hidden?: boolean;
  forum_topic_id?: Long;
  event_gid?: Long;
  voteupcount?: number;
  votedowncount?: number;
  ban_check_result?: EBanContentCheckResult;
  banned?: boolean;
}

export interface CClanEventData {
  gid?: Long;
  clan_steamid?: Long;
  event_name?: string;
  event_type?: EProtoClanEventType;
  appid?: number;
  server_address?: string;
  server_password?: string;
  rtime32_start_time?: number;
  rtime32_end_time?: number;
  comment_count?: number;
  creator_steamid?: Long;
  last_update_steamid?: Long;
  event_notes?: string;
  jsondata?: string;
  announcement_body?: CCommunity_ClanAnnouncementInfo;
  published?: boolean;
  hidden?: boolean;
  rtime32_visibility_start?: number;
  rtime32_visibility_end?: number;
  broadcaster_accountid?: number;
  follower_count?: number;
  ignore_count?: number;
  forum_topic_id?: Long;
  rtime32_last_modified?: number;
  news_post_gid?: Long;
  rtime_mod_reviewed?: number;
  featured_app_tagid?: number;
  referenced_appids?: number[];
  build_id?: number;
  build_branch?: string;
  unlisted?: boolean;
}

export interface CBilling_Address {
  first_name?: string;
  last_name?: string;
  address1?: string;
  address2?: string;
  city?: string;
  us_state?: string;
  country_code?: string;
  postcode?: string;
  zip_plus4?: number;
  phone?: string;
}

export interface CPackageReservationStatus {
  packageid?: number;
  reservation_state?: number;
  queue_position?: number;
  total_queue_size?: number;
  reservation_country_code?: string;
  expired?: boolean;
  time_expires?: number;
  time_reserved?: number;
  rtime_estimated_notification?: number;
  notificaton_token?: string;
  queue_head_position_at_reservation?: number;
  queue_head_position_now?: number;
}

export interface CMsgKeyValuePair {
  name?: string;
  value?: string;
}

export interface CMsgKeyValueSet {
  pairs?: CMsgKeyValuePair[];
}

export interface UserContentDescriptorPreferences {
  content_descriptors_to_exclude?: UserContentDescriptorPreferences.ContentDescriptor[];
}

export namespace UserContentDescriptorPreferences {
  export interface ContentDescriptor {
    content_descriptorid?: number;
    timestamp_added?: number;
  }
}

export interface UserSystemInformation {
  manufacturer?: string;
  model?: string;
  dx_video_card?: string;
  dx_vendorid?: number;
  dx_deviceid?: number;
  num_gpu?: number;
  system_ram?: Long;
  os?: string;
  cpu_vendor?: string;
  cpu_name?: string;
  gaming_device_type?: number;
  dx_driver_version?: string;
  dx_driver_name?: string;
  adapter_description?: string;
  driver_version?: string;
  driver_date?: string;
  vram_size?: number;
}
