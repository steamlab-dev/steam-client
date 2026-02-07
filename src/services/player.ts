import type {
  CPlayer_AcceptSSA_Request,
  CPlayer_AcceptSSA_Response,
  CPlayer_AddFriend_Request,
  CPlayer_AddFriend_Response,
  CPlayer_DeletePostedStatus_Request,
  CPlayer_DeletePostedStatus_Response,
  CPlayer_GetAchievementsProgress_Request,
  CPlayer_GetAchievementsProgress_Response,
  CPlayer_GetAnimatedAvatar_Request,
  CPlayer_GetAnimatedAvatar_Response,
  CPlayer_GetAvatarFrame_Request,
  CPlayer_GetAvatarFrame_Response,
  CPlayer_GetCommunityBadgeProgress_Request,
  CPlayer_GetCommunityBadgeProgress_Response,
  CPlayer_GetCommunityPreferences_Request,
  CPlayer_GetCommunityPreferences_Response,
  CPlayer_GetDurationControl_Request,
  CPlayer_GetDurationControl_Response,
  CPlayer_GetEmoticonList_Request,
  CPlayer_GetEmoticonList_Response,
  CPlayer_GetFavoriteBadge_Request,
  CPlayer_GetFavoriteBadge_Response,
  CPlayer_GetFriendsGameplayInfo_Request,
  CPlayer_GetFriendsGameplayInfo_Response,
  CPlayer_GetGameAchievements_Request,
  CPlayer_GetGameAchievements_Response,
  CPlayer_GetGameBadgeLevels_Request,
  CPlayer_GetGameBadgeLevels_Response,
  CPlayer_GetLastPlayedTimes_Request,
  CPlayer_GetLastPlayedTimes_Response,
  CPlayer_GetMiniProfileBackground_Request,
  CPlayer_GetMiniProfileBackground_Response,
  CPlayer_GetMutualFriendsForIncomingInvites_Request,
  CPlayer_GetMutualFriendsForIncomingInvites_Response,
  CPlayer_GetNewSteamAnnouncementState_Request,
  CPlayer_GetNewSteamAnnouncementState_Response,
  CPlayer_GetNicknameList_Request,
  CPlayer_GetNicknameList_Response,
  CPlayer_GetOwnedGames_Request,
  CPlayer_GetOwnedGames_Response,
  CPlayer_GetPerFriendPreferences_Request,
  CPlayer_GetPerFriendPreferences_Response,
  CPlayer_GetPlayerLinkDetails_Request,
  CPlayer_GetPlayerLinkDetails_Response,
  CPlayer_GetPlayNext_Request,
  CPlayer_GetPlayNext_Response,
  CPlayer_GetPostedStatus_Request,
  CPlayer_GetPostedStatus_Response,
  CPlayer_GetPrivacySettings_Request,
  CPlayer_GetPrivacySettings_Response,
  CPlayer_GetProfileBackground_Request,
  CPlayer_GetProfileBackground_Response,
  CPlayer_GetProfileCustomization_Request,
  CPlayer_GetProfileCustomization_Response,
  CPlayer_GetProfileItemsEquipped_Request,
  CPlayer_GetProfileItemsEquipped_Response,
  CPlayer_GetProfileItemsOwned_Request,
  CPlayer_GetProfileItemsOwned_Response,
  CPlayer_GetProfileThemesAvailable_Request,
  CPlayer_GetProfileThemesAvailable_Response,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response,
  CPlayer_GetPurchasedProfileCustomizations_Request,
  CPlayer_GetPurchasedProfileCustomizations_Response,
  CPlayer_GetRecentPlaytimeSessionsForChild_Request,
  CPlayer_GetRecentPlaytimeSessionsForChild_Response,
  CPlayer_GetSteamDeckKeyboardSkin_Request,
  CPlayer_GetSteamDeckKeyboardSkin_Response,
  CPlayer_GetTextFilterWords_Request,
  CPlayer_GetTextFilterWords_Response,
  CPlayer_GetTimeSSAAccepted_Request,
  CPlayer_GetTimeSSAAccepted_Response,
  CPlayer_GetTopAchievementsForGames_Request,
  CPlayer_GetTopAchievementsForGames_Response,
  CPlayer_IgnoreFriend_Request,
  CPlayer_IgnoreFriend_Response,
  CPlayer_PostStatusToFriends_Request,
  CPlayer_PostStatusToFriends_Response,
  CPlayer_RecordDisconnectedPlaytime_Request,
  CPlayer_RecordDisconnectedPlaytime_Response,
  CPlayer_RemoveFriend_Request,
  CPlayer_RemoveFriend_Response,
  CPlayer_SetAnimatedAvatar_Request,
  CPlayer_SetAnimatedAvatar_Response,
  CPlayer_SetAvatarFrame_Request,
  CPlayer_SetAvatarFrame_Response,
  CPlayer_SetCommunityPreferences_Request,
  CPlayer_SetCommunityPreferences_Response,
  CPlayer_SetEquippedProfileItemFlags_Request,
  CPlayer_SetEquippedProfileItemFlags_Response,
  CPlayer_SetFavoriteBadge_Request,
  CPlayer_SetFavoriteBadge_Response,
  CPlayer_SetMiniProfileBackground_Request,
  CPlayer_SetMiniProfileBackground_Response,
  CPlayer_SetPerFriendPreferences_Request,
  CPlayer_SetPerFriendPreferences_Response,
  CPlayer_SetProfileBackground_Request,
  CPlayer_SetProfileBackground_Response,
  CPlayer_SetProfilePreferences_Request,
  CPlayer_SetProfilePreferences_Response,
  CPlayer_SetProfileTheme_Request,
  CPlayer_SetProfileTheme_Response,
  CPlayer_SetSteamDeckKeyboardSkin_Request,
  CPlayer_SetSteamDeckKeyboardSkin_Response,
  CPlayer_UpdateSteamAnnouncementLastRead_Request,
  CPlayer_UpdateSteamAnnouncementLastRead_Response,
  PlayerService as IPlayerService,
} from "@/common/steam-language/protos-definitions/steam/steammessages_player.steamclient";
import type SteamProtocol from "@/steam-protocol/steam-protocol";

export default class PlayerService implements IPlayerService {
  constructor(private readonly steamProtocol: SteamProtocol) {}

  GetRecentPlaytimeSessionsForChild(
    _request: CPlayer_GetRecentPlaytimeSessionsForChild_Request,
  ): Promise<CPlayer_GetRecentPlaytimeSessionsForChild_Response> {
    throw new Error("Method not implemented.");
  }
  GetPlayerLinkDetails(
    _request: CPlayer_GetPlayerLinkDetails_Request,
  ): Promise<CPlayer_GetPlayerLinkDetails_Response> {
    throw new Error("Method not implemented.");
  }
  GetMutualFriendsForIncomingInvites(
    _request: CPlayer_GetMutualFriendsForIncomingInvites_Request,
  ): Promise<CPlayer_GetMutualFriendsForIncomingInvites_Response> {
    throw new Error("Method not implemented.");
  }
  GetOwnedGames(
    _request: CPlayer_GetOwnedGames_Request = {},
  ): Promise<CPlayer_GetOwnedGames_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CPlayer_GetOwnedGames_Request",
      payload: {
        include_appinfo: true,
        include_played_free_games: true,
        include_free_sub: false,
        skip_unvetted_apps: false,
        include_extended_appinfo: true,
        ..._request,
        steamid: this.steamProtocol.getSession().steamId,
      },
    });
  }
  GetPlayNext(_request: CPlayer_GetPlayNext_Request): Promise<CPlayer_GetPlayNext_Response> {
    throw new Error("Method not implemented.");
  }
  GetFriendsGameplayInfo(
    _request: CPlayer_GetFriendsGameplayInfo_Request,
  ): Promise<CPlayer_GetFriendsGameplayInfo_Response> {
    throw new Error("Method not implemented.");
  }
  GetGameBadgeLevels(
    _request: CPlayer_GetGameBadgeLevels_Request,
  ): Promise<CPlayer_GetGameBadgeLevels_Response> {
    throw new Error("Method not implemented.");
  }
  GetProfileBackground(
    _request: CPlayer_GetProfileBackground_Request,
  ): Promise<CPlayer_GetProfileBackground_Response> {
    throw new Error("Method not implemented.");
  }
  SetProfileBackground(
    _request: CPlayer_SetProfileBackground_Request,
  ): Promise<CPlayer_SetProfileBackground_Response> {
    throw new Error("Method not implemented.");
  }
  GetMiniProfileBackground(
    _request: CPlayer_GetMiniProfileBackground_Request,
  ): Promise<CPlayer_GetMiniProfileBackground_Response> {
    throw new Error("Method not implemented.");
  }
  SetMiniProfileBackground(
    _request: CPlayer_SetMiniProfileBackground_Request,
  ): Promise<CPlayer_SetMiniProfileBackground_Response> {
    throw new Error("Method not implemented.");
  }
  GetAvatarFrame(
    _request: CPlayer_GetAvatarFrame_Request,
  ): Promise<CPlayer_GetAvatarFrame_Response> {
    throw new Error("Method not implemented.");
  }
  SetAvatarFrame(
    _request: CPlayer_SetAvatarFrame_Request,
  ): Promise<CPlayer_SetAvatarFrame_Response> {
    throw new Error("Method not implemented.");
  }
  GetAnimatedAvatar(
    _request: CPlayer_GetAnimatedAvatar_Request,
  ): Promise<CPlayer_GetAnimatedAvatar_Response> {
    throw new Error("Method not implemented.");
  }
  SetAnimatedAvatar(
    _request: CPlayer_SetAnimatedAvatar_Request,
  ): Promise<CPlayer_SetAnimatedAvatar_Response> {
    throw new Error("Method not implemented.");
  }
  GetSteamDeckKeyboardSkin(
    _request: CPlayer_GetSteamDeckKeyboardSkin_Request,
  ): Promise<CPlayer_GetSteamDeckKeyboardSkin_Response> {
    throw new Error("Method not implemented.");
  }
  SetSteamDeckKeyboardSkin(
    _request: CPlayer_SetSteamDeckKeyboardSkin_Request,
  ): Promise<CPlayer_SetSteamDeckKeyboardSkin_Response> {
    throw new Error("Method not implemented.");
  }
  GetProfileItemsOwned(
    _request: CPlayer_GetProfileItemsOwned_Request,
  ): Promise<CPlayer_GetProfileItemsOwned_Response> {
    throw new Error("Method not implemented.");
  }
  GetProfileItemsEquipped(
    _request: CPlayer_GetProfileItemsEquipped_Request,
  ): Promise<CPlayer_GetProfileItemsEquipped_Response> {
    throw new Error("Method not implemented.");
  }
  SetEquippedProfileItemFlags(
    _request: CPlayer_SetEquippedProfileItemFlags_Request,
  ): Promise<CPlayer_SetEquippedProfileItemFlags_Response> {
    throw new Error("Method not implemented.");
  }
  GetEmoticonList(
    _request: CPlayer_GetEmoticonList_Request,
  ): Promise<CPlayer_GetEmoticonList_Response> {
    throw new Error("Method not implemented.");
  }
  GetCommunityBadgeProgress(
    _request: CPlayer_GetCommunityBadgeProgress_Request,
  ): Promise<CPlayer_GetCommunityBadgeProgress_Response> {
    throw new Error("Method not implemented.");
  }
  GetTopAchievementsForGames(
    _request: CPlayer_GetTopAchievementsForGames_Request,
  ): Promise<CPlayer_GetTopAchievementsForGames_Response> {
    throw new Error("Method not implemented.");
  }
  GetAchievementsProgress(
    _request: CPlayer_GetAchievementsProgress_Request,
  ): Promise<CPlayer_GetAchievementsProgress_Response> {
    throw new Error("Method not implemented.");
  }
  GetGameAchievements(
    _request: CPlayer_GetGameAchievements_Request,
  ): Promise<CPlayer_GetGameAchievements_Response> {
    throw new Error("Method not implemented.");
  }
  GetFavoriteBadge(
    _request: CPlayer_GetFavoriteBadge_Request,
  ): Promise<CPlayer_GetFavoriteBadge_Response> {
    throw new Error("Method not implemented.");
  }
  SetFavoriteBadge(
    _request: CPlayer_SetFavoriteBadge_Request,
  ): Promise<CPlayer_SetFavoriteBadge_Response> {
    throw new Error("Method not implemented.");
  }
  GetProfileCustomization(
    _request: CPlayer_GetProfileCustomization_Request,
  ): Promise<CPlayer_GetProfileCustomization_Response> {
    throw new Error("Method not implemented.");
  }
  GetPurchasedProfileCustomizations(
    _request: CPlayer_GetPurchasedProfileCustomizations_Request,
  ): Promise<CPlayer_GetPurchasedProfileCustomizations_Response> {
    throw new Error("Method not implemented.");
  }
  GetPurchasedAndUpgradedProfileCustomizations(
    _request: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request,
  ): Promise<CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response> {
    throw new Error("Method not implemented.");
  }
  GetProfileThemesAvailable(
    _request: CPlayer_GetProfileThemesAvailable_Request,
  ): Promise<CPlayer_GetProfileThemesAvailable_Response> {
    throw new Error("Method not implemented.");
  }
  SetProfileTheme(
    _request: CPlayer_SetProfileTheme_Request,
  ): Promise<CPlayer_SetProfileTheme_Response> {
    throw new Error("Method not implemented.");
  }
  SetProfilePreferences(
    _request: CPlayer_SetProfilePreferences_Request,
  ): Promise<CPlayer_SetProfilePreferences_Response> {
    throw new Error("Method not implemented.");
  }
  PostStatusToFriends(
    _request: CPlayer_PostStatusToFriends_Request,
  ): Promise<CPlayer_PostStatusToFriends_Response> {
    throw new Error("Method not implemented.");
  }
  GetPostedStatus(
    _request: CPlayer_GetPostedStatus_Request,
  ): Promise<CPlayer_GetPostedStatus_Response> {
    throw new Error("Method not implemented.");
  }
  DeletePostedStatus(
    _request: CPlayer_DeletePostedStatus_Request,
  ): Promise<CPlayer_DeletePostedStatus_Response> {
    throw new Error("Method not implemented.");
  }
  ClientGetLastPlayedTimes(
    _request: CPlayer_GetLastPlayedTimes_Request,
  ): Promise<CPlayer_GetLastPlayedTimes_Response> {
    throw new Error("Method not implemented.");
  }
  GetTimeSSAAccepted(
    _request: CPlayer_GetTimeSSAAccepted_Request,
  ): Promise<CPlayer_GetTimeSSAAccepted_Response> {
    throw new Error("Method not implemented.");
  }
  AcceptSSA(_request: CPlayer_AcceptSSA_Request): Promise<CPlayer_AcceptSSA_Response> {
    throw new Error("Method not implemented.");
  }
  GetNicknameList(
    _request: CPlayer_GetNicknameList_Request,
  ): Promise<CPlayer_GetNicknameList_Response> {
    throw new Error("Method not implemented.");
  }
  GetPerFriendPreferences(
    _request: CPlayer_GetPerFriendPreferences_Request,
  ): Promise<CPlayer_GetPerFriendPreferences_Response> {
    throw new Error("Method not implemented.");
  }
  SetPerFriendPreferences(
    _request: CPlayer_SetPerFriendPreferences_Request,
  ): Promise<CPlayer_SetPerFriendPreferences_Response> {
    throw new Error("Method not implemented.");
  }
  AddFriend(_request: CPlayer_AddFriend_Request): Promise<CPlayer_AddFriend_Response> {
    throw new Error("Method not implemented.");
  }
  RemoveFriend(_request: CPlayer_RemoveFriend_Request): Promise<CPlayer_RemoveFriend_Response> {
    throw new Error("Method not implemented.");
  }
  IgnoreFriend(_request: CPlayer_IgnoreFriend_Request): Promise<CPlayer_IgnoreFriend_Response> {
    throw new Error("Method not implemented.");
  }
  GetCommunityPreferences(
    _request: CPlayer_GetCommunityPreferences_Request,
  ): Promise<CPlayer_GetCommunityPreferences_Response> {
    throw new Error("Method not implemented.");
  }
  SetCommunityPreferences(
    _request: CPlayer_SetCommunityPreferences_Request,
  ): Promise<CPlayer_SetCommunityPreferences_Response> {
    throw new Error("Method not implemented.");
  }
  GetTextFilterWords(
    _request: CPlayer_GetTextFilterWords_Request,
  ): Promise<CPlayer_GetTextFilterWords_Response> {
    throw new Error("Method not implemented.");
  }
  GetNewSteamAnnouncementState(
    _request: CPlayer_GetNewSteamAnnouncementState_Request,
  ): Promise<CPlayer_GetNewSteamAnnouncementState_Response> {
    throw new Error("Method not implemented.");
  }
  UpdateSteamAnnouncementLastRead(
    _request: CPlayer_UpdateSteamAnnouncementLastRead_Request,
  ): Promise<CPlayer_UpdateSteamAnnouncementLastRead_Response> {
    throw new Error("Method not implemented.");
  }
  GetPrivacySettings(
    _request: CPlayer_GetPrivacySettings_Request,
  ): Promise<CPlayer_GetPrivacySettings_Response> {
    throw new Error("Method not implemented.");
  }
  GetDurationControl(
    _request: CPlayer_GetDurationControl_Request,
  ): Promise<CPlayer_GetDurationControl_Response> {
    throw new Error("Method not implemented.");
  }
  RecordDisconnectedPlaytime(
    _request: CPlayer_RecordDisconnectedPlaytime_Request,
  ): Promise<CPlayer_RecordDisconnectedPlaytime_Response> {
    throw new Error("Method not implemented.");
  }
}
