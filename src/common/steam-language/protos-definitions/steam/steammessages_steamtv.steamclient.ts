/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EBroadcastImageType = {
  k_EBroadcastImageType_None: 0,
  k_EBroadcastImageType_Offline: 1,
  k_EBroadcastImageType_Standby: 2,
  k_EBroadcastImageType_Avatar: 3,
  k_EBroadcastImageType_Summary: 4,
  k_EBroadcastImageType_Background: 5,
  k_EBroadcastImageType_Emoticon: 6,
} as const;

export type EBroadcastImageType = (typeof EBroadcastImageType)[keyof typeof EBroadcastImageType];

export const EGetGamesAlgorithm = {
  k_EGetGamesAlgorithm_Default: 1,
  k_EGetGamesAlgorithm_MostPlayed: 2,
  k_EGetGamesAlgorithm_PopularNew: 3,
} as const;

export type EGetGamesAlgorithm = (typeof EGetGamesAlgorithm)[keyof typeof EGetGamesAlgorithm];

export const EGetChannelsAlgorithm = {
  k_EGetChannelsAlgorithm_Default: 1,
  k_EGetChannelsAlgorithm_Friends: 2,
  k_EGetChannelsAlgorithm_Featured: 3,
  k_EGetChannelsAlgorithm_Developer: 4,
  k_EGetChannelsAlgorithm_Following: 5,
} as const;

export type EGetChannelsAlgorithm =
  (typeof EGetChannelsAlgorithm)[keyof typeof EGetChannelsAlgorithm];

export const ESteamTVContentTemplate = {
  k_ESteamTVContentTemplate_Invalid: 0,
  k_ESteamTVContentTemplate_Takeover: 1,
  k_ESteamTVContentTemplate_SingleGame: 2,
  k_ESteamTVContentTemplate_GameList: 3,
  k_ESteamTVContentTemplate_QuickExplore: 4,
  k_ESteamTVContentTemplate_ConveyorBelt: 5,
  k_ESteamTVContentTemplate_WatchParty: 6,
  k_ESteamTVContentTemplate_Developer: 7,
  k_ESteamTVContentTemplate_Event: 8,
} as const;

export type ESteamTVContentTemplate =
  (typeof ESteamTVContentTemplate)[keyof typeof ESteamTVContentTemplate];

export interface CSteamTV_CreateBroadcastChannel_Request {
  unique_name?: string;
}

export interface CSteamTV_CreateBroadcastChannel_Response {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelID_Request {
  unique_name?: string;
}

export interface CSteamTV_GetBroadcastChannelID_Response {
  broadcast_channel_id?: Long;
  unique_name?: string;
  steamid?: Long;
}

export interface CSteamTV_SetBroadcastChannelProfile_Request {
  broadcast_channel_id?: Long;
  name?: string;
  language?: string;
  headline?: string;
  summary?: string;
  avatar_hash?: string;
  schedule?: string;
  rules?: string;
  panels?: string;
}

export type CSteamTV_SetBroadcastChannelProfile_Response = Record<string, never>;

export interface CSteamTV_GetBroadcastChannelProfile_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelProfile_Response {
  unique_name?: string;
  owner_steamid?: Long;
  name?: string;
  language?: string;
  headline?: string;
  summary?: string;
  schedule?: string;
  rules?: string;
  panels?: string;
  is_partnered?: boolean;
}

export interface CSteamTV_SetBroadcastChannelImage_Request {
  broadcast_channel_id?: Long;
  image_type?: EBroadcastImageType;
  image_index?: number;
  image_width?: number;
  image_height?: number;
  file_size?: number;
  file_extension?: string;
  file_hash?: string;
  undo?: boolean;
}

export interface CSteamTV_SetBroadcastChannelImage_Response {
  replace_image_hash?: string;
}

export interface CSteamTV_GetBroadcastChannelImages_Request {
  broadcast_channel_id?: Long;
  image_types?: EBroadcastImageType[];
}

export interface CSteamTV_GetBroadcastChannelImages_Response {
  images?: CSteamTV_GetBroadcastChannelImages_Response.Images[];
}

export namespace CSteamTV_GetBroadcastChannelImages_Response {
  export interface Images {
    image_type?: EBroadcastImageType;
    image_path?: string;
    image_index?: number;
  }
}

export interface CSteamTV_SetBroadcastChannelLinkRegions_Request {
  broadcast_channel_id?: Long;
  links?: CSteamTV_SetBroadcastChannelLinkRegions_Request.Links[];
}

export namespace CSteamTV_SetBroadcastChannelLinkRegions_Request {
  export interface Links {
    link_index?: number;
    url?: string;
    link_description?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
  }
}

export type CSteamTV_SetBroadcastChannelLinkRegions_Response = Record<string, never>;

export interface CSteamTV_GetBroadcastChannelLinks_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelLinks_Response {
  links?: CSteamTV_GetBroadcastChannelLinks_Response.Links[];
}

export namespace CSteamTV_GetBroadcastChannelLinks_Response {
  export interface Links {
    link_index?: number;
    url?: string;
    link_description?: string;
    left?: number;
    top?: number;
    width?: number;
    height?: number;
  }
}

export interface CSteamTV_GetBroadcastChannelBroadcasters_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelBroadcasters_Response {
  broadcasters?: CSteamTV_GetBroadcastChannelBroadcasters_Response.Broadcaster[];
}

export namespace CSteamTV_GetBroadcastChannelBroadcasters_Response {
  export interface Broadcaster {
    steamid?: Long;
    name?: string;
    rtmp_token?: string;
  }
}

export type CSteamTV_GetFollowedChannels_Request = Record<string, never>;

export interface GetBroadcastChannelEntry {
  broadcast_channel_id?: Long;
  unique_name?: string;
  name?: string;
  appid?: number;
  viewers?: Long;
  views?: Long;
  thumbnail_url?: string;
  followers?: Long;
  headline?: string;
  avatar_url?: string;
  broadcaster_steamid?: Long;
  subscribers?: Long;
  background_url?: string;
  is_featured?: boolean;
  is_disabled?: boolean;
  is_live?: boolean;
  language?: string;
  reports?: number;
  is_partnered?: boolean;
}

export interface CSteamTV_GetFollowedChannels_Response {
  results?: GetBroadcastChannelEntry[];
}

export type CSteamTV_GetSubscribedChannels_Request = Record<string, never>;

export interface CSteamTV_GetSubscribedChannels_Response {
  results?: GetBroadcastChannelEntry[];
}

export interface CSteamTV_GetBroadcastChannelStatus_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelStatus_Response {
  is_live?: boolean;
  is_disabled?: boolean;
  appid?: number;
  viewers?: Long;
  views?: Long;
  broadcaster_steamid?: Long;
  thumbnail_url?: string;
  followers?: Long;
  subscribers?: Long;
  unique_name?: string;
  broadcast_session_id?: Long;
}

export interface CSteamTV_FollowBroadcastChannel_Request {
  broadcast_channel_id?: Long;
  undo?: boolean;
}

export interface CSteamTV_FollowBroadcastChannel_Response {
  is_followed?: boolean;
}

export interface CSteamTV_SubscribeBroadcastChannel_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_SubscribeBroadcastChannel_Response {
  is_subscribed?: boolean;
}

export interface CSteamTV_GetBroadcastChannelClips_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_BroadcastClipInfo {
  broadcast_clip_id?: Long;
  channel_id?: Long;
  app_id?: number;
  broadcaster_steamid?: Long;
  creator_steamid?: Long;
  video_description?: string;
  live_time?: number;
  length_ms?: number;
  thumbnail_path?: string;
}

export interface CSteamTV_GetBroadcastChannelClips_Response {
  clips?: CSteamTV_BroadcastClipInfo[];
  thumbnail_host?: string;
}

export interface CSteamTV_ReportBroadcastChannel_Request {
  broadcast_channel_id?: Long;
  reason?: string;
}

export type CSteamTV_ReportBroadcastChannel_Response = Record<string, never>;

export interface CSteamTV_GetBroadcastChannelInteraction_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetBroadcastChannelInteraction_Response {
  is_followed?: boolean;
  is_subscribed?: boolean;
}

export interface CSteamTV_GetGames_Request {
  appid?: number;
  algorithm?: EGetGamesAlgorithm;
  count?: number;
}

export interface CSteamTV_Game {
  appid?: number;
  name?: string;
  image?: string;
  viewers?: Long;
  channels?: GetBroadcastChannelEntry[];
  release_date?: string;
  developer?: string;
  publisher?: string;
}

export interface CSteamTV_GetGames_Response {
  results?: CSteamTV_Game[];
}

export interface CSteamTV_GetChannels_Request {
  algorithm?: EGetChannelsAlgorithm;
  count?: number;
  appid?: number;
}

export interface CSteamTV_GetChannels_Response {
  results?: GetBroadcastChannelEntry[];
}

export interface CSteamTV_AddChatBan_Request {
  broadcast_channel_id?: Long;
  chatter_steamid?: Long;
  duration?: number;
  permanent?: boolean;
  undo?: boolean;
}

export type CSteamTV_AddChatBan_Response = Record<string, never>;

export interface CSteamTV_GetChatBans_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_ChatBan {
  issuer_steamid?: Long;
  chatter_steamid?: Long;
  time_expires?: string;
  permanent?: boolean;
  name?: string;
}

export interface CSteamTV_GetChatBans_Response {
  results?: CSteamTV_ChatBan[];
}

export interface CSteamTV_AddChatModerator_Request {
  broadcast_channel_id?: Long;
  moderator_steamid?: Long;
  undo?: boolean;
}

export type CSteamTV_AddChatModerator_Response = Record<string, never>;

export interface CSteamTV_GetChatModerators_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_ChatModerator {
  steamid?: Long;
  name?: string;
}

export interface CSteamTV_GetChatModerators_Response {
  results?: CSteamTV_ChatModerator[];
}

export interface CSteamTV_AddWordBan_Request {
  broadcast_channel_id?: Long;
  word?: string;
  undo?: boolean;
}

export type CSteamTV_AddWordBan_Response = Record<string, never>;

export interface CSteamTV_GetWordBans_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_GetWordBans_Response {
  results?: string[];
}

export interface CSteamTV_JoinChat_Request {
  broadcast_channel_id?: Long;
}

export interface CSteamTV_JoinChat_Response {
  chat_id?: Long;
  view_url_template?: string;
  flair_group_ids?: Long[];
}

export interface CSteamTV_Search_Request {
  term?: string;
}

export interface CSteamTV_Search_Response {
  results?: GetBroadcastChannelEntry[];
}

export type CSteamTV_GetSteamTVUserSettings_Request = Record<string, never>;

export interface CSteamTV_GetSteamTVUserSettings_Response {
  stream_live_email?: boolean;
  stream_live_notification?: boolean;
}

export interface CSteamTV_SetSteamTVUserSettings_Request {
  stream_live_email?: boolean;
  stream_live_notification?: boolean;
}

export type CSteamTV_SetSteamTVUserSettings_Response = Record<string, never>;

export type CSteamTV_GetMyBroadcastChannels_Request = Record<string, never>;

export interface CSteamTV_GetMyBroadcastChannels_Response {
  results?: GetBroadcastChannelEntry[];
}

export type CSteamTV_GetHomePageContents_Request = Record<string, never>;

export interface CSteamTV_HomePageTemplate_Takeover {
  broadcasts?: GetBroadcastChannelEntry[];
}

export interface CSteamTV_HomePageTemplate_SingleGame {
  broadcasts?: GetBroadcastChannelEntry[];
  appid?: number;
  title?: string;
}

export interface GameListEntry {
  appid?: number;
  game_name?: string;
  broadcast?: GetBroadcastChannelEntry;
}

export interface CSteamTV_HomePageTemplate_GameList {
  entries?: GameListEntry[];
  title?: string;
}

export interface CSteamTV_HomePageTemplate_QuickExplore {
  broadcasts?: GetBroadcastChannelEntry[];
  title?: string;
}

export interface CSteamTV_HomePageTemplate_ConveyorBelt {
  broadcasts?: GetBroadcastChannelEntry[];
  title?: string;
}

export interface CSteamTV_HomePageTemplate_WatchParty {
  broadcast?: GetBroadcastChannelEntry;
  title?: string;
  chat_group_id?: Long;
}

export interface CSteamTV_HomePageTemplate_Developer {
  broadcast?: GetBroadcastChannelEntry;
  title?: string;
}

export interface CSteamTV_HomePageTemplate_Event {
  title?: string;
}

export interface CSteamTV_HomePageContentRow {
  template_type?: ESteamTVContentTemplate;
  takeover?: CSteamTV_HomePageTemplate_Takeover;
  single_game?: CSteamTV_HomePageTemplate_SingleGame;
  game_list?: CSteamTV_HomePageTemplate_GameList;
  quick_explore?: CSteamTV_HomePageTemplate_QuickExplore;
  conveyor_belt?: CSteamTV_HomePageTemplate_ConveyorBelt;
  watch_party?: CSteamTV_HomePageTemplate_WatchParty;
  developer?: CSteamTV_HomePageTemplate_Developer;
  event?: CSteamTV_HomePageTemplate_Event;
}

export interface CSteamTV_GetHomePageContents_Response {
  rows?: CSteamTV_HomePageContentRow[];
}

export interface CSteamTV_AppCheer_SingleCheerType {
  cheer_type?: number;
  cheer_amount?: number;
}

export interface CSteamTV_AppCheer_Request {
  app_id?: number;
  cheer_target_id?: Long;
  cheers?: CSteamTV_AppCheer_SingleCheerType[];
}

export interface CSteamTV_AppCheer_Response {
  aggregation_delay_ms?: number;
}

export abstract class SteamTVService {
  abstract CreateBroadcastChannel(
    request: CSteamTV_CreateBroadcastChannel_Request,
  ): Promise<CSteamTV_CreateBroadcastChannel_Response>;
  abstract GetBroadcastChannelID(
    request: CSteamTV_GetBroadcastChannelID_Request,
  ): Promise<CSteamTV_GetBroadcastChannelID_Response>;
  abstract SetBroadcastChannelProfile(
    request: CSteamTV_SetBroadcastChannelProfile_Request,
  ): Promise<CSteamTV_SetBroadcastChannelProfile_Response>;
  abstract GetBroadcastChannelProfile(
    request: CSteamTV_GetBroadcastChannelProfile_Request,
  ): Promise<CSteamTV_GetBroadcastChannelProfile_Response>;
  abstract SetBroadcastChannelImage(
    request: CSteamTV_SetBroadcastChannelImage_Request,
  ): Promise<CSteamTV_SetBroadcastChannelImage_Response>;
  abstract GetBroadcastChannelImages(
    request: CSteamTV_GetBroadcastChannelImages_Request,
  ): Promise<CSteamTV_GetBroadcastChannelImages_Response>;
  abstract SetBroadcastChannelLinkRegions(
    request: CSteamTV_SetBroadcastChannelLinkRegions_Request,
  ): Promise<CSteamTV_SetBroadcastChannelLinkRegions_Response>;
  abstract GetBroadcastChannelLinks(
    request: CSteamTV_GetBroadcastChannelLinks_Request,
  ): Promise<CSteamTV_GetBroadcastChannelLinks_Response>;
  abstract GetBroadcastChannelBroadcasters(
    request: CSteamTV_GetBroadcastChannelBroadcasters_Request,
  ): Promise<CSteamTV_GetBroadcastChannelBroadcasters_Response>;
  abstract GetFollowedChannels(
    request: CSteamTV_GetFollowedChannels_Request,
  ): Promise<CSteamTV_GetFollowedChannels_Response>;
  abstract GetSubscribedChannels(
    request: CSteamTV_GetSubscribedChannels_Request,
  ): Promise<CSteamTV_GetSubscribedChannels_Response>;
  abstract GetBroadcastChannelStatus(
    request: CSteamTV_GetBroadcastChannelStatus_Request,
  ): Promise<CSteamTV_GetBroadcastChannelStatus_Response>;
  abstract FollowBroadcastChannel(
    request: CSteamTV_FollowBroadcastChannel_Request,
  ): Promise<CSteamTV_FollowBroadcastChannel_Response>;
  abstract SubscribeBroadcastChannel(
    request: CSteamTV_SubscribeBroadcastChannel_Request,
  ): Promise<CSteamTV_SubscribeBroadcastChannel_Response>;
  abstract GetBroadcastChannelClips(
    request: CSteamTV_GetBroadcastChannelClips_Request,
  ): Promise<CSteamTV_GetBroadcastChannelClips_Response>;
  abstract ReportBroadcastChannel(
    request: CSteamTV_ReportBroadcastChannel_Request,
  ): Promise<CSteamTV_ReportBroadcastChannel_Response>;
  abstract GetBroadcastChannelInteraction(
    request: CSteamTV_GetBroadcastChannelInteraction_Request,
  ): Promise<CSteamTV_GetBroadcastChannelInteraction_Response>;
  abstract GetGames(request: CSteamTV_GetGames_Request): Promise<CSteamTV_GetGames_Response>;
  abstract GetChannels(
    request: CSteamTV_GetChannels_Request,
  ): Promise<CSteamTV_GetChannels_Response>;
  abstract AddChatBan(request: CSteamTV_AddChatBan_Request): Promise<CSteamTV_AddChatBan_Response>;
  abstract GetChatBans(
    request: CSteamTV_GetChatBans_Request,
  ): Promise<CSteamTV_GetChatBans_Response>;
  abstract AddChatModerator(
    request: CSteamTV_AddChatModerator_Request,
  ): Promise<CSteamTV_AddChatModerator_Response>;
  abstract GetChatModerators(
    request: CSteamTV_GetChatModerators_Request,
  ): Promise<CSteamTV_GetChatModerators_Response>;
  abstract AddWordBan(request: CSteamTV_AddWordBan_Request): Promise<CSteamTV_AddWordBan_Response>;
  abstract GetWordBans(
    request: CSteamTV_GetWordBans_Request,
  ): Promise<CSteamTV_GetWordBans_Response>;
  abstract JoinChat(request: CSteamTV_JoinChat_Request): Promise<CSteamTV_JoinChat_Response>;
  abstract Search(request: CSteamTV_Search_Request): Promise<CSteamTV_Search_Response>;
  abstract GetSteamTVUserSettings(
    request: CSteamTV_GetSteamTVUserSettings_Request,
  ): Promise<CSteamTV_GetSteamTVUserSettings_Response>;
  abstract SetSteamTVUserSettings(
    request: CSteamTV_SetSteamTVUserSettings_Request,
  ): Promise<CSteamTV_SetSteamTVUserSettings_Response>;
  abstract GetMyBroadcastChannels(
    request: CSteamTV_GetMyBroadcastChannels_Request,
  ): Promise<CSteamTV_GetMyBroadcastChannels_Response>;
  abstract GetHomePageContents(
    request: CSteamTV_GetHomePageContents_Request,
  ): Promise<CSteamTV_GetHomePageContents_Response>;
  abstract AppCheer(request: CSteamTV_AppCheer_Request): Promise<CSteamTV_AppCheer_Response>;
}
