/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { UserContentDescriptorPreferences } from "./common";

export interface CPlayer_AcceptSSA_Request {
  agreement_type?: number;
  time_signed_utc?: number;
}

export type CPlayer_AcceptSSA_Response = Record<string, never>;

export interface CPlayer_AddFriend_Request {
  steamid?: Long;
}

export interface CPlayer_AddFriend_Response {
  invite_sent?: boolean;
  friend_relationship?: number;
  result?: number;
}

export interface CPlayer_CommunityPreferences {
  timestamp_updated?: number;
  parenthesize_nicknames?: boolean;
  text_filter_setting?: number;
  text_filter_ignore_friends?: boolean;
  text_filter_words_revision?: number;
}

export interface CPlayer_CommunityPreferencesChanged_Notification {
  preferences?: CPlayer_CommunityPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export interface CPlayer_DeletePostedStatus_Request {
  postid?: Long;
}

export type CPlayer_DeletePostedStatus_Response = Record<string, never>;

export interface CPlayer_FriendEquippedProfileItemsChanged_Notification {
  accountid?: number;
}

export interface CPlayer_FriendNicknameChanged_Notification {
  accountid?: number;
  nickname?: string;
  is_echo_to_self?: boolean;
}

export interface CPlayer_GetAchievementsProgress_Request {
  steamid?: Long;
  language?: string;
  appids?: number[];
  include_unvetted_apps?: boolean;
}

export interface CPlayer_GetAchievementsProgress_Response {
  achievement_progress?: CPlayer_GetAchievementsProgress_Response_AchievementProgress[];
}

export interface CPlayer_GetAchievementsProgress_Response_AchievementProgress {
  appid?: number;
  unlocked?: number;
  total?: number;
  percentage?: number;
  all_unlocked?: boolean;
  cache_time?: number;
  vetted?: boolean;
}

export interface CPlayer_GetAnimatedAvatar_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetAnimatedAvatar_Response {
  avatar?: ProfileItem;
}

export interface CPlayer_GetAvatarFrame_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetAvatarFrame_Response {
  avatar_frame?: ProfileItem;
}

export interface CPlayer_GetCommunityBadgeProgress_Request {
  steamid?: Long;
  badgeid?: number;
}

export interface CPlayer_GetCommunityBadgeProgress_Response {
  quests?: CPlayer_GetCommunityBadgeProgress_Response_Quest[];
}

export interface CPlayer_GetCommunityBadgeProgress_Response_Quest {
  questid?: number;
  completed?: boolean;
}

export type CPlayer_GetCommunityPreferences_Request = Record<string, never>;

export interface CPlayer_GetCommunityPreferences_Response {
  preferences?: CPlayer_CommunityPreferences;
  content_descriptor_preferences?: UserContentDescriptorPreferences;
}

export interface CPlayer_GetDurationControl_Request {
  appid?: number;
}

export interface CPlayer_GetDurationControl_Response {
  is_enabled?: boolean;
  seconds?: number;
  seconds_today?: number;
  is_steamchina_account?: boolean;
  is_age_verified?: boolean;
  seconds_allowed_today?: number;
  age_verification_pending?: boolean;
  block_minors?: boolean;
}

export type CPlayer_GetEmoticonList_Request = Record<string, never>;

export interface CPlayer_GetEmoticonList_Response {
  emoticons?: CPlayer_GetEmoticonList_Response_Emoticon[];
}

export interface CPlayer_GetEmoticonList_Response_Emoticon {
  name?: string;
  count?: number;
  time_last_used?: number;
  use_count?: number;
  time_received?: number;
  appid?: number;
}

export interface CPlayer_GetFavoriteBadge_Request {
  steamid?: Long;
}

export interface CPlayer_GetFavoriteBadge_Response {
  has_favorite_badge?: boolean;
  badgeid?: number;
  communityitemid?: Long;
  item_type?: number;
  border_color?: number;
  appid?: number;
  level?: number;
}

export interface CPlayer_GetFriendsGameplayInfo_Request {
  appid?: number;
}

export interface CPlayer_GetFriendsGameplayInfo_Response {
  your_info?: CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo;
  in_game?: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[];
  played_recently?: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[];
  played_ever?: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[];
  owns?: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[];
  in_wishlist?: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo[];
}

export interface CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo {
  steamid?: Long;
  minutes_played?: number;
  minutes_played_forever?: number;
}

export interface CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo {
  steamid?: Long;
  minutes_played?: number;
  minutes_played_forever?: number;
  in_wishlist?: boolean;
  owned?: boolean;
}

export interface CPlayer_GetGameAchievements_Request {
  appid?: number;
  language?: string;
}

export interface CPlayer_GetGameAchievements_Response {
  achievements?: CPlayer_GetGameAchievements_Response_Achievement[];
}

export interface CPlayer_GetGameAchievements_Response_Achievement {
  internal_name?: string;
  localized_name?: string;
  localized_desc?: string;
  icon?: string;
  icon_gray?: string;
  hidden?: boolean;
  player_percent_unlocked?: string;
}

export interface CPlayer_GetGameBadgeLevels_Request {
  appid?: number;
}

export interface CPlayer_GetGameBadgeLevels_Response {
  player_level?: number;
  badges?: CPlayer_GetGameBadgeLevels_Response_Badge[];
}

export interface CPlayer_GetGameBadgeLevels_Response_Badge {
  level?: number;
  series?: number;
  border_color?: number;
}

export interface CPlayer_GetLastPlayedTimes_Request {
  min_last_played?: number;
}

export interface CPlayer_GetLastPlayedTimes_Response {
  games?: CPlayer_GetLastPlayedTimes_Response_Game[];
}

export interface CPlayer_GetLastPlayedTimes_Response_Game {
  appid?: number;
  last_playtime?: number;
  playtime_2weeks?: number;
  playtime_forever?: number;
  first_playtime?: number;
  playtime_windows_forever?: number;
  playtime_mac_forever?: number;
  playtime_linux_forever?: number;
  first_windows_playtime?: number;
  first_mac_playtime?: number;
  first_linux_playtime?: number;
  last_windows_playtime?: number;
  last_mac_playtime?: number;
  last_linux_playtime?: number;
  playtime_disconnected?: number;
  playtime_deck_forever?: number;
  first_deck_playtime?: number;
  last_deck_playtime?: number;
}

export interface CPlayer_GetMiniProfileBackground_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetMiniProfileBackground_Response {
  profile_background?: ProfileItem;
}

export type CPlayer_GetMutualFriendsForIncomingInvites_Request = Record<string, never>;

export interface CPlayer_GetMutualFriendsForIncomingInvites_Response {
  incoming_invite_mutual_friends_lists?: CPlayer_IncomingInviteMutualFriendList[];
}

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

export type CPlayer_GetNicknameList_Request = Record<string, never>;

export interface CPlayer_GetNicknameList_Response {
  nicknames?: CPlayer_GetNicknameList_Response_PlayerNickname[];
}

export interface CPlayer_GetNicknameList_Response_PlayerNickname {
  accountid?: number;
  nickname?: string;
}

export interface CPlayer_GetOwnedGames_Request {
  steamid?: Long;
  include_appinfo?: boolean;
  include_played_free_games?: boolean;
  appids_filter?: number[];
  include_free_sub?: boolean;
  skip_unvetted_apps?: boolean;
  language?: string;
  include_extended_appinfo?: boolean;
}

export interface CPlayer_GetOwnedGames_Response {
  game_count?: number;
  games?: CPlayer_GetOwnedGames_Response_Game[];
}

export interface CPlayer_GetOwnedGames_Response_Game {
  appid?: number;
  name?: string;
  playtime_2weeks?: number;
  playtime_forever?: number;
  img_icon_url?: string;
  has_community_visible_stats?: boolean;
  playtime_windows_forever?: number;
  playtime_mac_forever?: number;
  playtime_linux_forever?: number;
  rtime_last_played?: number;
  capsule_filename?: string;
  sort_as?: string;
  has_workshop?: boolean;
  has_market?: boolean;
  has_dlc?: boolean;
  has_leaderboards?: boolean;
  content_descriptorids?: number[];
  playtime_disconnected?: number;
  playtime_deck_forever?: number;
}

export type CPlayer_GetPerFriendPreferences_Request = Record<string, never>;

export interface CPlayer_GetPerFriendPreferences_Response {
  preferences?: PerFriendPreferences[];
}

export interface CPlayer_GetPlayerLinkDetails_Request {
  steamids?: Long[];
}

export interface CPlayer_GetPlayerLinkDetails_Response {
  accounts?: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails[];
}

export interface CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails {
  public_data?: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData;
  private_data?: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData;
}

export interface CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData {
  persona_state?: number;
  persona_state_flags?: number;
  time_created?: number;
  game_id?: Long;
  game_server_steam_id?: Long;
  game_server_ip_address?: number;
  game_server_port?: number;
  game_extra_info?: string;
  account_name?: string;
  lobby_steam_id?: Long;
  rich_presence_kv?: string;
  broadcast_session_id?: Long;
  watching_broadcast_accountid?: number;
  watching_broadcast_appid?: number;
  watching_broadcast_viewers?: number;
  watching_broadcast_title?: string;
  last_logoff_time?: number;
  last_seen_online?: number;
  game_os_type?: number;
  game_device_type?: number;
  game_device_name?: string;
  game_is_private?: boolean;
}

export interface CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData {
  steamid?: Long;
  visibility_state?: number;
  privacy_state?: number;
  profile_state?: number;
  ban_expires_time?: number;
  account_flags?: number;
  sha_digest_avatar?: Buffer;
  persona_name?: string;
  profile_url?: string;
  content_country_restricted?: boolean;
}

export interface CPlayer_GetPlayNext_Request {
  max_age_seconds?: number;
  ignore_appids?: number[];
}

export interface CPlayer_GetPlayNext_Response {
  last_update_time?: number;
  appids?: number[];
}

export interface CPlayer_GetPostedStatus_Request {
  steamid?: Long;
  postid?: Long;
}

export interface CPlayer_GetPostedStatus_Response {
  accountid?: number;
  postid?: Long;
  status_text?: string;
  deleted?: boolean;
  appid?: number;
}

export type CPlayer_GetPrivacySettings_Request = Record<string, never>;

export interface CPlayer_GetPrivacySettings_Response {
  privacy_settings?: CPrivacySettings;
}

export interface CPlayer_GetProfileBackground_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetProfileBackground_Response {
  profile_background?: ProfileItem;
}

export interface CPlayer_GetProfileCustomization_Request {
  steamid?: Long;
  include_inactive_customizations?: boolean;
  include_purchased_customizations?: boolean;
}

export interface CPlayer_GetProfileCustomization_Response {
  customizations?: ProfileCustomization[];
  slots_available?: number;
  profile_theme?: ProfileTheme;
  purchased_customizations?: CPlayer_GetProfileCustomization_Response_PurchasedCustomization[];
  profile_preferences?: ProfilePreferences;
}

export interface CPlayer_GetProfileCustomization_Response_PurchasedCustomization {
  purchaseid?: Long;
  customization_type?: number;
  level?: number;
}

export interface CPlayer_GetProfileItemsEquipped_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetProfileItemsEquipped_Response {
  profile_background?: ProfileItem;
  mini_profile_background?: ProfileItem;
  avatar_frame?: ProfileItem;
  animated_avatar?: ProfileItem;
  profile_modifier?: ProfileItem;
  steam_deck_keyboard_skin?: ProfileItem;
}

export interface CPlayer_GetProfileItemsOwned_Request {
  language?: string;
  filters?: number[];
}

export interface CPlayer_GetProfileItemsOwned_Response {
  profile_backgrounds?: ProfileItem[];
  mini_profile_backgrounds?: ProfileItem[];
  avatar_frames?: ProfileItem[];
  animated_avatars?: ProfileItem[];
  profile_modifiers?: ProfileItem[];
  steam_deck_keyboard_skins?: ProfileItem[];
  steam_deck_startup_movies?: ProfileItem[];
}

export type CPlayer_GetProfileThemesAvailable_Request = Record<string, never>;

export interface CPlayer_GetProfileThemesAvailable_Response {
  profile_themes?: ProfileTheme[];
}

export interface CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request {
  steamid?: Long;
}

export interface CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response {
  purchased_customizations?: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization[];
  upgraded_customizations?: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization[];
}

export interface CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization {
  customization_type?: number;
  count?: number;
}

export interface CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization {
  customization_type?: number;
  level?: number;
}

export interface CPlayer_GetPurchasedProfileCustomizations_Request {
  steamid?: Long;
}

export interface CPlayer_GetPurchasedProfileCustomizations_Response {
  purchased_customizations?: CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization[];
}

export interface CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization {
  purchaseid?: Long;
  customization_type?: number;
}

export interface CPlayer_GetRecentPlaytimeSessionsForChild_Request {
  steamid?: Long;
}

export interface CPlayer_GetRecentPlaytimeSessionsForChild_Response {
  sessions?: CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession[];
}

export interface CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession {
  time_start?: number;
  time_end?: number;
  appid?: number;
  device_type?: number;
  disconnected?: boolean;
}

export interface CPlayer_GetSteamDeckKeyboardSkin_Request {
  steamid?: Long;
  language?: string;
}

export interface CPlayer_GetSteamDeckKeyboardSkin_Response {
  steam_deck_keyboard_skin?: ProfileItem;
}

export type CPlayer_GetTextFilterWords_Request = Record<string, never>;

export interface CPlayer_GetTextFilterWords_Response {
  words?: CPlayer_TextFilterWords;
}

export type CPlayer_GetTimeSSAAccepted_Request = Record<string, never>;

export interface CPlayer_GetTimeSSAAccepted_Response {
  time_ssa_accepted?: number;
  time_ssa_updated?: number;
  time_chinassa_accepted?: number;
}

export interface CPlayer_GetTopAchievementsForGames_Request {
  steamid?: Long;
  language?: string;
  max_achievements?: number;
  appids?: number[];
}

export interface CPlayer_GetTopAchievementsForGames_Response {
  games?: CPlayer_GetTopAchievementsForGames_Response_Game[];
}

export interface CPlayer_GetTopAchievementsForGames_Response_Achievement {
  statid?: number;
  bit?: number;
  name?: string;
  desc?: string;
  icon?: string;
  icon_gray?: string;
  hidden?: boolean;
  player_percent_unlocked?: string;
}

export interface CPlayer_GetTopAchievementsForGames_Response_Game {
  appid?: number;
  total_achievements?: number;
  achievements?: CPlayer_GetTopAchievementsForGames_Response_Achievement[];
}

export interface CPlayer_IgnoreFriend_Request {
  steamid?: Long;
  unignore?: boolean;
}

export interface CPlayer_IgnoreFriend_Response {
  friend_relationship?: number;
}

export interface CPlayer_IncomingInviteMutualFriendList {
  steamid?: Long;
  mutual_friend_account_ids?: number[];
}

export interface CPlayer_LastPlayedTimes_Notification {
  games?: CPlayer_GetLastPlayedTimes_Response_Game[];
}

export interface CPlayer_NewSteamAnnouncementState_Notification {
  state?: number;
  announcement_headline?: string;
  announcement_url?: string;
  time_posted?: number;
  announcement_gid?: Long;
}

export interface CPlayer_PerFriendPreferencesChanged_Notification {
  accountid?: number;
  preferences?: PerFriendPreferences;
}

export interface CPlayer_PostStatusToFriends_Request {
  appid?: number;
  status_text?: string;
}

export type CPlayer_PostStatusToFriends_Response = Record<string, never>;

export interface CPlayer_PrivacySettingsChanged_Notification {
  privacy_settings?: CPrivacySettings;
}

export interface CPlayer_RecordDisconnectedPlaytime_Request {
  play_sessions?: CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory[];
}

export interface CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory {
  appid?: number;
  session_time_start?: number;
  seconds?: number;
  offline?: boolean;
  owner?: number;
}

export type CPlayer_RecordDisconnectedPlaytime_Response = Record<string, never>;

export interface CPlayer_RemoveFriend_Request {
  steamid?: Long;
}

export interface CPlayer_RemoveFriend_Response {
  friend_relationship?: number;
}

export interface CPlayer_SetAnimatedAvatar_Request {
  communityitemid?: Long;
}

export type CPlayer_SetAnimatedAvatar_Response = Record<string, never>;

export interface CPlayer_SetAvatarFrame_Request {
  communityitemid?: Long;
}

export type CPlayer_SetAvatarFrame_Response = Record<string, never>;

export interface CPlayer_SetCommunityPreferences_Request {
  preferences?: CPlayer_CommunityPreferences;
}

export type CPlayer_SetCommunityPreferences_Response = Record<string, never>;

export interface CPlayer_SetEquippedProfileItemFlags_Request {
  communityitemid?: Long;
  flags?: number;
}

export type CPlayer_SetEquippedProfileItemFlags_Response = Record<string, never>;

export interface CPlayer_SetFavoriteBadge_Request {
  communityitemid?: Long;
  badgeid?: number;
}

export type CPlayer_SetFavoriteBadge_Response = Record<string, never>;

export interface CPlayer_SetMiniProfileBackground_Request {
  communityitemid?: Long;
}

export type CPlayer_SetMiniProfileBackground_Response = Record<string, never>;

export interface CPlayer_SetPerFriendPreferences_Request {
  preferences?: PerFriendPreferences;
}

export type CPlayer_SetPerFriendPreferences_Response = Record<string, never>;

export interface CPlayer_SetProfileBackground_Request {
  communityitemid?: Long;
}

export type CPlayer_SetProfileBackground_Response = Record<string, never>;

export interface CPlayer_SetProfilePreferences_Request {
  profile_preferences?: ProfilePreferences;
}

export type CPlayer_SetProfilePreferences_Response = Record<string, never>;

export interface CPlayer_SetProfileTheme_Request {
  theme_id?: string;
}

export type CPlayer_SetProfileTheme_Response = Record<string, never>;

export interface CPlayer_SetSteamDeckKeyboardSkin_Request {
  communityitemid?: Long;
}

export type CPlayer_SetSteamDeckKeyboardSkin_Response = Record<string, never>;

export interface CPlayer_TextFilterWords {
  text_filter_custom_banned_words?: string[];
  text_filter_custom_clean_words?: string[];
  text_filter_words_revision?: number;
}

export interface CPlayer_TextFilterWordsChanged_Notification {
  words?: CPlayer_TextFilterWords;
}

export interface CPlayer_UpdateSteamAnnouncementLastRead_Request {
  announcement_gid?: Long;
  time_posted?: number;
}

export type CPlayer_UpdateSteamAnnouncementLastRead_Response = Record<string, never>;

export interface CPrivacySettings {
  privacy_state?: number;
  privacy_state_inventory?: number;
  privacy_state_gifts?: number;
  privacy_state_ownedgames?: number;
  privacy_state_playtime?: number;
  privacy_state_friendslist?: number;
}

export interface PerFriendPreferences {
  accountid?: number;
  nickname?: string;
  notifications_showingame?: number;
  notifications_showonline?: number;
  notifications_showmessages?: number;
  sounds_showingame?: number;
  sounds_showonline?: number;
  sounds_showmessages?: number;
  notifications_sendmobile?: number;
}

export interface ProfileCustomization {
  customization_type?: number;
  large?: boolean;
  slots?: ProfileCustomizationSlot[];
  active?: boolean;
  customization_style?: number;
  purchaseid?: Long;
  level?: number;
}

export interface ProfileCustomizationSlot {
  slot?: number;
  appid?: number;
  publishedfileid?: Long;
  item_assetid?: Long;
  item_contextid?: Long;
  notes?: string;
  title?: string;
  accountid?: number;
  badgeid?: number;
  border_color?: number;
  item_classid?: Long;
  item_instanceid?: Long;
  ban_check_result?: number;
  replay_year?: number;
}

export interface ProfileItem {
  communityitemid?: Long;
  image_small?: string;
  image_large?: string;
  name?: string;
  item_title?: string;
  item_description?: string;
  appid?: number;
  item_type?: number;
  item_class?: number;
  movie_webm?: string;
  movie_mp4?: string;
  equipped_flags?: number;
  movie_webm_small?: string;
  movie_mp4_small?: string;
  profile_colors?: ProfileItem_ProfileColor[];
  tiled?: boolean;
}

export interface ProfileItem_ProfileColor {
  style_name?: string;
  color?: string;
}

export interface ProfilePreferences {
  hide_profile_awards?: boolean;
}

export interface ProfileTheme {
  theme_id?: string;
  title?: string;
}

export abstract class PlayerService {
  abstract AcceptSSA(request: CPlayer_AcceptSSA_Request): Promise<CPlayer_AcceptSSA_Response>;
  abstract AddFriend(request: CPlayer_AddFriend_Request): Promise<CPlayer_AddFriend_Response>;
  abstract ClientGetLastPlayedTimes(
    request: CPlayer_GetLastPlayedTimes_Request,
  ): Promise<CPlayer_GetLastPlayedTimes_Response>;
  abstract DeletePostedStatus(
    request: CPlayer_DeletePostedStatus_Request,
  ): Promise<CPlayer_DeletePostedStatus_Response>;
  abstract GetAchievementsProgress(
    request: CPlayer_GetAchievementsProgress_Request,
  ): Promise<CPlayer_GetAchievementsProgress_Response>;
  abstract GetAnimatedAvatar(
    request: CPlayer_GetAnimatedAvatar_Request,
  ): Promise<CPlayer_GetAnimatedAvatar_Response>;
  abstract GetAvatarFrame(
    request: CPlayer_GetAvatarFrame_Request,
  ): Promise<CPlayer_GetAvatarFrame_Response>;
  abstract GetCommunityBadgeProgress(
    request: CPlayer_GetCommunityBadgeProgress_Request,
  ): Promise<CPlayer_GetCommunityBadgeProgress_Response>;
  abstract GetCommunityPreferences(
    request: CPlayer_GetCommunityPreferences_Request,
  ): Promise<CPlayer_GetCommunityPreferences_Response>;
  abstract GetDurationControl(
    request: CPlayer_GetDurationControl_Request,
  ): Promise<CPlayer_GetDurationControl_Response>;
  abstract GetEmoticonList(
    request: CPlayer_GetEmoticonList_Request,
  ): Promise<CPlayer_GetEmoticonList_Response>;
  abstract GetFavoriteBadge(
    request: CPlayer_GetFavoriteBadge_Request,
  ): Promise<CPlayer_GetFavoriteBadge_Response>;
  abstract GetFriendsGameplayInfo(
    request: CPlayer_GetFriendsGameplayInfo_Request,
  ): Promise<CPlayer_GetFriendsGameplayInfo_Response>;
  abstract GetGameAchievements(
    request: CPlayer_GetGameAchievements_Request,
  ): Promise<CPlayer_GetGameAchievements_Response>;
  abstract GetGameBadgeLevels(
    request: CPlayer_GetGameBadgeLevels_Request,
  ): Promise<CPlayer_GetGameBadgeLevels_Response>;
  abstract GetMiniProfileBackground(
    request: CPlayer_GetMiniProfileBackground_Request,
  ): Promise<CPlayer_GetMiniProfileBackground_Response>;
  abstract GetMutualFriendsForIncomingInvites(
    request: CPlayer_GetMutualFriendsForIncomingInvites_Request,
  ): Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response>;
  abstract GetNewSteamAnnouncementState(
    request: CPlayer_GetNewSteamAnnouncementState_Request,
  ): Promise<CPlayer_GetNewSteamAnnouncementState_Response>;
  abstract GetNicknameList(
    request: CPlayer_GetNicknameList_Request,
  ): Promise<CPlayer_GetNicknameList_Response>;
  abstract GetOwnedGames(
    request: CPlayer_GetOwnedGames_Request,
  ): Promise<CPlayer_GetOwnedGames_Response>;
  abstract GetPerFriendPreferences(
    request: CPlayer_GetPerFriendPreferences_Request,
  ): Promise<CPlayer_GetPerFriendPreferences_Response>;
  abstract GetPlayerLinkDetails(
    request: CPlayer_GetPlayerLinkDetails_Request,
  ): Promise<CPlayer_GetPlayerLinkDetails_Response>;
  abstract GetPlayNext(request: CPlayer_GetPlayNext_Request): Promise<CPlayer_GetPlayNext_Response>;
  abstract GetPostedStatus(
    request: CPlayer_GetPostedStatus_Request,
  ): Promise<CPlayer_GetPostedStatus_Response>;
  abstract GetPrivacySettings(
    request: CPlayer_GetPrivacySettings_Request,
  ): Promise<CPlayer_GetPrivacySettings_Response>;
  abstract GetProfileBackground(
    request: CPlayer_GetProfileBackground_Request,
  ): Promise<CPlayer_GetProfileBackground_Response>;
  abstract GetProfileCustomization(
    request: CPlayer_GetProfileCustomization_Request,
  ): Promise<CPlayer_GetProfileCustomization_Response>;
  abstract GetProfileItemsEquipped(
    request: CPlayer_GetProfileItemsEquipped_Request,
  ): Promise<CPlayer_GetProfileItemsEquipped_Response>;
  abstract GetProfileItemsOwned(
    request: CPlayer_GetProfileItemsOwned_Request,
  ): Promise<CPlayer_GetProfileItemsOwned_Response>;
  abstract GetProfileThemesAvailable(
    request: CPlayer_GetProfileThemesAvailable_Request,
  ): Promise<CPlayer_GetProfileThemesAvailable_Response>;
  abstract GetPurchasedAndUpgradedProfileCustomizations(
    request: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request,
  ): Promise<CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response>;
  abstract GetPurchasedProfileCustomizations(
    request: CPlayer_GetPurchasedProfileCustomizations_Request,
  ): Promise<CPlayer_GetPurchasedProfileCustomizations_Response>;
  abstract GetRecentPlaytimeSessionsForChild(
    request: CPlayer_GetRecentPlaytimeSessionsForChild_Request,
  ): Promise<CPlayer_GetRecentPlaytimeSessionsForChild_Response>;
  abstract GetSteamDeckKeyboardSkin(
    request: CPlayer_GetSteamDeckKeyboardSkin_Request,
  ): Promise<CPlayer_GetSteamDeckKeyboardSkin_Response>;
  abstract GetTextFilterWords(
    request: CPlayer_GetTextFilterWords_Request,
  ): Promise<CPlayer_GetTextFilterWords_Response>;
  abstract GetTimeSSAAccepted(
    request: CPlayer_GetTimeSSAAccepted_Request,
  ): Promise<CPlayer_GetTimeSSAAccepted_Response>;
  abstract GetTopAchievementsForGames(
    request: CPlayer_GetTopAchievementsForGames_Request,
  ): Promise<CPlayer_GetTopAchievementsForGames_Response>;
  abstract IgnoreFriend(
    request: CPlayer_IgnoreFriend_Request,
  ): Promise<CPlayer_IgnoreFriend_Response>;
  abstract PostStatusToFriends(
    request: CPlayer_PostStatusToFriends_Request,
  ): Promise<CPlayer_PostStatusToFriends_Response>;
  abstract RecordDisconnectedPlaytime(
    request: CPlayer_RecordDisconnectedPlaytime_Request,
  ): Promise<CPlayer_RecordDisconnectedPlaytime_Response>;
  abstract RemoveFriend(
    request: CPlayer_RemoveFriend_Request,
  ): Promise<CPlayer_RemoveFriend_Response>;
  abstract SetAnimatedAvatar(
    request: CPlayer_SetAnimatedAvatar_Request,
  ): Promise<CPlayer_SetAnimatedAvatar_Response>;
  abstract SetAvatarFrame(
    request: CPlayer_SetAvatarFrame_Request,
  ): Promise<CPlayer_SetAvatarFrame_Response>;
  abstract SetCommunityPreferences(
    request: CPlayer_SetCommunityPreferences_Request,
  ): Promise<CPlayer_SetCommunityPreferences_Response>;
  abstract SetEquippedProfileItemFlags(
    request: CPlayer_SetEquippedProfileItemFlags_Request,
  ): Promise<CPlayer_SetEquippedProfileItemFlags_Response>;
  abstract SetFavoriteBadge(
    request: CPlayer_SetFavoriteBadge_Request,
  ): Promise<CPlayer_SetFavoriteBadge_Response>;
  abstract SetMiniProfileBackground(
    request: CPlayer_SetMiniProfileBackground_Request,
  ): Promise<CPlayer_SetMiniProfileBackground_Response>;
  abstract SetPerFriendPreferences(
    request: CPlayer_SetPerFriendPreferences_Request,
  ): Promise<CPlayer_SetPerFriendPreferences_Response>;
  abstract SetProfileBackground(
    request: CPlayer_SetProfileBackground_Request,
  ): Promise<CPlayer_SetProfileBackground_Response>;
  abstract SetProfilePreferences(
    request: CPlayer_SetProfilePreferences_Request,
  ): Promise<CPlayer_SetProfilePreferences_Response>;
  abstract SetProfileTheme(
    request: CPlayer_SetProfileTheme_Request,
  ): Promise<CPlayer_SetProfileTheme_Response>;
  abstract SetSteamDeckKeyboardSkin(
    request: CPlayer_SetSteamDeckKeyboardSkin_Request,
  ): Promise<CPlayer_SetSteamDeckKeyboardSkin_Response>;
  abstract UpdateSteamAnnouncementLastRead(
    request: CPlayer_UpdateSteamAnnouncementLastRead_Request,
  ): Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response>;
}

export abstract class PlayerClientService {
  abstract NotifyCommunityPreferencesChanged(
    request: CPlayer_CommunityPreferencesChanged_Notification,
  ): Promise<void>;
  abstract NotifyFriendEquippedProfileItemsChanged(
    request: CPlayer_FriendEquippedProfileItemsChanged_Notification,
  ): Promise<void>;
  abstract NotifyFriendNicknameChanged(
    request: CPlayer_FriendNicknameChanged_Notification,
  ): Promise<void>;
  abstract NotifyLastPlayedTimes(request: CPlayer_LastPlayedTimes_Notification): Promise<void>;
  abstract NotifyNewSteamAnnouncementState(
    request: CPlayer_NewSteamAnnouncementState_Notification,
  ): Promise<void>;
  abstract NotifyPerFriendPreferencesChanged(
    request: CPlayer_PerFriendPreferencesChanged_Notification,
  ): Promise<void>;
  abstract NotifyPrivacyPrivacySettingsChanged(
    request: CPlayer_PrivacySettingsChanged_Notification,
  ): Promise<void>;
  abstract NotifyTextFilterWordsChanged(
    request: CPlayer_TextFilterWordsChanged_Notification,
  ): Promise<void>;
}
