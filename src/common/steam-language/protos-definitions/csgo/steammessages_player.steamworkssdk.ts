/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const ENotificationSetting = {
  k_ENotificationSettingNotifyUseDefault: 0,
  k_ENotificationSettingAlways: 1,
  k_ENotificationSettingNever: 2,
} as const;

export type ENotificationSetting = (typeof ENotificationSetting)[keyof typeof ENotificationSetting];

export type CPlayer_GetMutualFriendsForIncomingInvites_Request = Record<string, never>;

export interface CPlayer_IncomingInviteMutualFriendList {
  steamid?: Long;
  mutual_friend_account_ids?: number[];
}

export interface CPlayer_GetMutualFriendsForIncomingInvites_Response {
  incoming_invite_mutual_friends_lists?: CPlayer_IncomingInviteMutualFriendList[];
}

export interface CPlayer_GetFriendsGameplayInfo_Request {
  appid?: number;
}

export interface CPlayer_GetFriendsGameplayInfo_Response {
  your_info?: CPlayer_GetFriendsGameplayInfo_Response.OwnGameplayInfo;
  in_game?: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo[];
  played_recently?: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo[];
  played_ever?: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo[];
  owns?: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo[];
  in_wishlist?: CPlayer_GetFriendsGameplayInfo_Response.FriendsGameplayInfo[];
}

export namespace CPlayer_GetFriendsGameplayInfo_Response {
  export interface FriendsGameplayInfo {
    steamid?: Long;
    minutes_played?: number;
    minutes_played_forever?: number;
  }

  export interface OwnGameplayInfo {
    steamid?: Long;
    minutes_played?: number;
    minutes_played_forever?: number;
    in_wishlist?: boolean;
    owned?: boolean;
  }
}

export interface CPlayer_GetGameBadgeLevels_Request {
  appid?: number;
}

export interface CPlayer_GetGameBadgeLevels_Response {
  player_level?: number;
  badges?: CPlayer_GetGameBadgeLevels_Response.Badge[];
}

export namespace CPlayer_GetGameBadgeLevels_Response {
  export interface Badge {
    level?: number;
    series?: number;
    border_color?: number;
  }
}

export interface CPlayer_GetLastPlayedTimes_Request {
  min_last_played?: number;
}

export interface CPlayer_GetLastPlayedTimes_Response {
  games?: CPlayer_GetLastPlayedTimes_Response.Game[];
}

export namespace CPlayer_GetLastPlayedTimes_Response {
  export interface Game {
    appid?: number;
    last_playtime?: number;
    playtime_2weeks?: number;
    playtime_forever?: number;
    first_playtime?: number;
  }
}

export type CPlayer_AcceptSSA_Request = Record<string, never>;

export type CPlayer_AcceptSSA_Response = Record<string, never>;

export type CPlayer_GetNicknameList_Request = Record<string, never>;

export interface CPlayer_GetNicknameList_Response {
  nicknames?: CPlayer_GetNicknameList_Response.PlayerNickname[];
}

export namespace CPlayer_GetNicknameList_Response {
  export interface PlayerNickname {
    accountid?: number;
    nickname?: string;
  }
}

export type CPlayer_GetPerFriendPreferences_Request = Record<string, never>;

export interface PerFriendPreferences {
  accountid?: number;
  nickname?: string;
  notifications_showingame?: ENotificationSetting;
  notifications_showonline?: ENotificationSetting;
  notifications_showmessages?: ENotificationSetting;
  sounds_showingame?: ENotificationSetting;
  sounds_showonline?: ENotificationSetting;
  sounds_showmessages?: ENotificationSetting;
  notifications_sendmobile?: ENotificationSetting;
}

export interface CPlayer_GetPerFriendPreferences_Response {
  preferences?: PerFriendPreferences[];
}

export interface CPlayer_SetPerFriendPreferences_Request {
  preferences?: PerFriendPreferences;
}

export type CPlayer_SetPerFriendPreferences_Response = Record<string, never>;

export interface CPlayer_AddFriend_Request {
  steamid?: Long;
}

export interface CPlayer_AddFriend_Response {
  invite_sent?: boolean;
  friend_relationship?: number;
}

export interface CPlayer_RemoveFriend_Request {
  steamid?: Long;
}

export interface CPlayer_RemoveFriend_Response {
  friend_relationship?: number;
}

export interface CPlayer_IgnoreFriend_Request {
  steamid?: Long;
  unignore?: boolean;
}

export interface CPlayer_IgnoreFriend_Response {
  friend_relationship?: number;
}

export type CPlayer_GetCommunityPreferences_Request = Record<string, never>;

export interface CPlayer_CommunityPreferences {
  hide_adult_content_violence?: boolean;
  hide_adult_content_sex?: boolean;
  parenthesize_nicknames?: boolean;
  timestamp_updated?: number;
}

export interface CPlayer_GetCommunityPreferences_Response {
  preferences?: CPlayer_CommunityPreferences;
}

export interface CPlayer_SetCommunityPreferences_Request {
  preferences?: CPlayer_CommunityPreferences;
}

export type CPlayer_SetCommunityPreferences_Response = Record<string, never>;

export interface CPlayer_GetNewSteamAnnouncementState_Request {
  language?: number;
}

export interface CPlayer_GetNewSteamAnnouncementState_Response {
  state?: number;
  announcement_headline?: string;
  announcement_url?: string;
  time_posted?: number;
  announcement_gid?: Long;
}

export interface CPlayer_UpdateSteamAnnouncementLastRead_Request {
  announcement_gid?: Long;
  time_posted?: number;
}

export type CPlayer_UpdateSteamAnnouncementLastRead_Response = Record<string, never>;

export abstract class PlayerService {
  abstract GetMutualFriendsForIncomingInvites(
    request: CPlayer_GetMutualFriendsForIncomingInvites_Request,
  ): Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response>;
  abstract GetFriendsGameplayInfo(
    request: CPlayer_GetFriendsGameplayInfo_Request,
  ): Promise<CPlayer_GetFriendsGameplayInfo_Response>;
  abstract GetGameBadgeLevels(
    request: CPlayer_GetGameBadgeLevels_Request,
  ): Promise<CPlayer_GetGameBadgeLevels_Response>;
  abstract ClientGetLastPlayedTimes(
    request: CPlayer_GetLastPlayedTimes_Request,
  ): Promise<CPlayer_GetLastPlayedTimes_Response>;
  abstract AcceptSSA(request: CPlayer_AcceptSSA_Request): Promise<CPlayer_AcceptSSA_Response>;
  abstract GetNicknameList(
    request: CPlayer_GetNicknameList_Request,
  ): Promise<CPlayer_GetNicknameList_Response>;
  abstract GetPerFriendPreferences(
    request: CPlayer_GetPerFriendPreferences_Request,
  ): Promise<CPlayer_GetPerFriendPreferences_Response>;
  abstract SetPerFriendPreferences(
    request: CPlayer_SetPerFriendPreferences_Request,
  ): Promise<CPlayer_SetPerFriendPreferences_Response>;
  abstract AddFriend(request: CPlayer_AddFriend_Request): Promise<CPlayer_AddFriend_Response>;
  abstract RemoveFriend(
    request: CPlayer_RemoveFriend_Request,
  ): Promise<CPlayer_RemoveFriend_Response>;
  abstract IgnoreFriend(
    request: CPlayer_IgnoreFriend_Request,
  ): Promise<CPlayer_IgnoreFriend_Response>;
  abstract GetCommunityPreferences(
    request: CPlayer_GetCommunityPreferences_Request,
  ): Promise<CPlayer_GetCommunityPreferences_Response>;
  abstract SetCommunityPreferences(
    request: CPlayer_SetCommunityPreferences_Request,
  ): Promise<CPlayer_SetCommunityPreferences_Response>;
  abstract GetNewSteamAnnouncementState(
    request: CPlayer_GetNewSteamAnnouncementState_Request,
  ): Promise<CPlayer_GetNewSteamAnnouncementState_Response>;
  abstract UpdateSteamAnnouncementLastRead(
    request: CPlayer_UpdateSteamAnnouncementLastRead_Request,
  ): Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response>;
}
