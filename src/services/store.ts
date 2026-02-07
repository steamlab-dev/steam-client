import type {
  CSteamDeckCompatibility_SetFeedback_Request,
  CSteamDeckCompatibility_SetFeedback_Response,
  CSteamDeckCompatibility_ShouldPrompt_Request,
  CSteamDeckCompatibility_ShouldPrompt_Response,
  CStore_DeleteReservationPositionMessage_Request,
  CStore_DeleteReservationPositionMessage_Response,
  CStore_GetAllReservationPositionMessages_Request,
  CStore_GetAllReservationPositionMessages_Response,
  CStore_GetDiscoveryQueue_Request,
  CStore_GetDiscoveryQueue_Response,
  CStore_GetDiscoveryQueueSettings_Request,
  CStore_GetDiscoveryQueueSettings_Response,
  CStore_GetDiscoveryQueueSkippedApps_Request,
  CStore_GetDiscoveryQueueSkippedApps_Response,
  CStore_GetGamesFollowed_Request,
  CStore_GetGamesFollowed_Response,
  CStore_GetGamesFollowedCount_Request,
  CStore_GetGamesFollowedCount_Response,
  CStore_GetLocalizedNameForTags_Request,
  CStore_GetLocalizedNameForTags_Response,
  CStore_GetMostPopularTags_Request,
  CStore_GetMostPopularTags_Response,
  CStore_GetRecommendedTagsForUser_Request,
  CStore_GetRecommendedTagsForUser_Response,
  CStore_GetStorePreferences_Request,
  CStore_GetStorePreferences_Response,
  CStore_GetTagList_Request,
  CStore_GetTagList_Response,
  CStore_GetTrendingAppsAmongFriends_Request,
  CStore_GetTrendingAppsAmongFriends_Response,
  CStore_GetUserGameInterestState_Request,
  CStore_GetUserGameInterestState_Response,
  CStore_GetWishlistDemoEmailStatus_Request,
  CStore_GetWishlistDemoEmailStatus_Response,
  CStore_MigratePartnerLinkTracking_Notification,
  CStore_QueueWishlistDemoEmailToFire_Request,
  CStore_QueueWishlistDemoEmailToFire_Response,
  CStore_RegisterCDKey_Request,
  CStore_RegisterCDKey_Response,
  CStore_ReloadAllReservationPositionMessages_Notification,
  CStore_ReportApp_Request,
  CStore_ReportApp_Response,
  CStore_SetReservationPositionMessage_Request,
  CStore_SetReservationPositionMessage_Response,
  CStore_SkipDiscoveryQueueItem_Request,
  CStore_SkipDiscoveryQueueItem_Response,
  CStore_UpdatePackageReservations_Request,
  CStore_UpdatePackageReservations_Response,
  StoreService as IStoreService,
} from "@/common/steam-language/protos-definitions/steam/steammessages_store.steamclient";
import type SteamProtocol from "@/steam-protocol/steam-protocol";
import type { RequireSome } from "./types";

export default class StoreService implements IStoreService {
  constructor(private readonly steamProtocol: SteamProtocol) {}

  RegisterCDKey(
    _request: RequireSome<CStore_RegisterCDKey_Request, "activation_code">,
  ): Promise<CStore_RegisterCDKey_Response> {
    return this.steamProtocol.sendServiceCallWithRes({
      message: "CStore_RegisterCDKey_Request",
      payload: {
        ..._request,
        is_request_from_client: true,
      },
    });
  }
  GetRecommendedTagsForUser(
    _request: CStore_GetRecommendedTagsForUser_Request,
  ): Promise<CStore_GetRecommendedTagsForUser_Response> {
    throw new Error("Method not implemented.");
  }
  GetMostPopularTags(
    _request: CStore_GetMostPopularTags_Request,
  ): Promise<CStore_GetMostPopularTags_Response> {
    throw new Error("Method not implemented.");
  }
  GetLocalizedNameForTags(
    _request: CStore_GetLocalizedNameForTags_Request,
  ): Promise<CStore_GetLocalizedNameForTags_Response> {
    throw new Error("Method not implemented.");
  }
  GetTagList(_request: CStore_GetTagList_Request): Promise<CStore_GetTagList_Response> {
    throw new Error("Method not implemented.");
  }
  GetDiscoveryQueue(
    _request: CStore_GetDiscoveryQueue_Request,
  ): Promise<CStore_GetDiscoveryQueue_Response> {
    throw new Error("Method not implemented.");
  }
  GetDiscoveryQueueSettings(
    _request: CStore_GetDiscoveryQueueSettings_Request,
  ): Promise<CStore_GetDiscoveryQueueSettings_Response> {
    throw new Error("Method not implemented.");
  }
  SkipDiscoveryQueueItem(
    _request: CStore_SkipDiscoveryQueueItem_Request,
  ): Promise<CStore_SkipDiscoveryQueueItem_Response> {
    throw new Error("Method not implemented.");
  }
  GetUserGameInterestState(
    _request: CStore_GetUserGameInterestState_Request,
  ): Promise<CStore_GetUserGameInterestState_Response> {
    throw new Error("Method not implemented.");
  }
  GetDiscoveryQueueSkippedApps(
    _request: CStore_GetDiscoveryQueueSkippedApps_Request,
  ): Promise<CStore_GetDiscoveryQueueSkippedApps_Response> {
    throw new Error("Method not implemented.");
  }
  ReportApp(_request: CStore_ReportApp_Request): Promise<CStore_ReportApp_Response> {
    throw new Error("Method not implemented.");
  }
  GetStorePreferences(
    _request: CStore_GetStorePreferences_Request,
  ): Promise<CStore_GetStorePreferences_Response> {
    throw new Error("Method not implemented.");
  }
  GetTrendingAppsAmongFriends(
    _request: CStore_GetTrendingAppsAmongFriends_Request,
  ): Promise<CStore_GetTrendingAppsAmongFriends_Response> {
    throw new Error("Method not implemented.");
  }
  MigratePartnerLinkTracking(
    _request: CStore_MigratePartnerLinkTracking_Notification,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  UpdatePackageReservations(
    _request: CStore_UpdatePackageReservations_Request,
  ): Promise<CStore_UpdatePackageReservations_Response> {
    throw new Error("Method not implemented.");
  }
  GetWishlistDemoEmailStatus(
    _request: CStore_GetWishlistDemoEmailStatus_Request,
  ): Promise<CStore_GetWishlistDemoEmailStatus_Response> {
    throw new Error("Method not implemented.");
  }
  QueueWishlistDemoEmailToFire(
    _request: CStore_QueueWishlistDemoEmailToFire_Request,
  ): Promise<CStore_QueueWishlistDemoEmailToFire_Response> {
    throw new Error("Method not implemented.");
  }
  SetReservationPositionMessage(
    _request: CStore_SetReservationPositionMessage_Request,
  ): Promise<CStore_SetReservationPositionMessage_Response> {
    throw new Error("Method not implemented.");
  }
  DeleteReservationPositionMessage(
    _request: CStore_DeleteReservationPositionMessage_Request,
  ): Promise<CStore_DeleteReservationPositionMessage_Response> {
    throw new Error("Method not implemented.");
  }
  GetAllReservationPositionMessages(
    _request: CStore_GetAllReservationPositionMessages_Request,
  ): Promise<CStore_GetAllReservationPositionMessages_Response> {
    throw new Error("Method not implemented.");
  }
  ReloadAllReservationPositionMessages(
    _request: CStore_ReloadAllReservationPositionMessages_Notification,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  SetCompatibilityFeedback(
    _request: CSteamDeckCompatibility_SetFeedback_Request,
  ): Promise<CSteamDeckCompatibility_SetFeedback_Response> {
    throw new Error("Method not implemented.");
  }
  ShouldPromptForCompatibilityFeedback(
    _request: CSteamDeckCompatibility_ShouldPrompt_Request,
  ): Promise<CSteamDeckCompatibility_ShouldPrompt_Response> {
    throw new Error("Method not implemented.");
  }
  GetGamesFollowed(
    _request: CStore_GetGamesFollowed_Request,
  ): Promise<CStore_GetGamesFollowed_Response> {
    throw new Error("Method not implemented.");
  }
  GetGamesFollowedCount(
    _request: CStore_GetGamesFollowedCount_Request,
  ): Promise<CStore_GetGamesFollowedCount_Response> {
    throw new Error("Method not implemented.");
  }
}
