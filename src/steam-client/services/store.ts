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
import SteamClientError from "@/steam-client/error";
import type SteamProtocol from "@/steam-protocol/steam-protocol";
import type { RequireSome } from "./types";

export default class StoreService implements IStoreService {
  constructor(private readonly steamProtocol: SteamProtocol) {}

  async RegisterCDKey(
    _request: RequireSome<CStore_RegisterCDKey_Request, "activation_code">,
  ): Promise<CStore_RegisterCDKey_Response> {
    try {
      return await this.steamProtocol.sendServiceCallWithRes({
        message: "CStore_RegisterCDKey_Request",
        payload: {
          ..._request,
          is_request_from_client: true,
        },
      });
    } catch (error) {
      if (error instanceof SteamClientError) {
        throw error;
      }
      throw new SteamClientError("Failed to register CD key", "services", error);
    }
  }
  GetRecommendedTagsForUser(
    _request: CStore_GetRecommendedTagsForUser_Request,
  ): Promise<CStore_GetRecommendedTagsForUser_Response> {
    return this.notImplemented();
  }
  GetMostPopularTags(
    _request: CStore_GetMostPopularTags_Request,
  ): Promise<CStore_GetMostPopularTags_Response> {
    return this.notImplemented();
  }
  GetLocalizedNameForTags(
    _request: CStore_GetLocalizedNameForTags_Request,
  ): Promise<CStore_GetLocalizedNameForTags_Response> {
    return this.notImplemented();
  }
  GetTagList(_request: CStore_GetTagList_Request): Promise<CStore_GetTagList_Response> {
    return this.notImplemented();
  }
  GetDiscoveryQueue(
    _request: CStore_GetDiscoveryQueue_Request,
  ): Promise<CStore_GetDiscoveryQueue_Response> {
    return this.notImplemented();
  }
  GetDiscoveryQueueSettings(
    _request: CStore_GetDiscoveryQueueSettings_Request,
  ): Promise<CStore_GetDiscoveryQueueSettings_Response> {
    return this.notImplemented();
  }
  SkipDiscoveryQueueItem(
    _request: CStore_SkipDiscoveryQueueItem_Request,
  ): Promise<CStore_SkipDiscoveryQueueItem_Response> {
    return this.notImplemented();
  }
  GetUserGameInterestState(
    _request: CStore_GetUserGameInterestState_Request,
  ): Promise<CStore_GetUserGameInterestState_Response> {
    return this.notImplemented();
  }
  GetDiscoveryQueueSkippedApps(
    _request: CStore_GetDiscoveryQueueSkippedApps_Request,
  ): Promise<CStore_GetDiscoveryQueueSkippedApps_Response> {
    return this.notImplemented();
  }
  ReportApp(_request: CStore_ReportApp_Request): Promise<CStore_ReportApp_Response> {
    return this.notImplemented();
  }
  GetStorePreferences(
    _request: CStore_GetStorePreferences_Request,
  ): Promise<CStore_GetStorePreferences_Response> {
    return this.notImplemented();
  }
  GetTrendingAppsAmongFriends(
    _request: CStore_GetTrendingAppsAmongFriends_Request,
  ): Promise<CStore_GetTrendingAppsAmongFriends_Response> {
    return this.notImplemented();
  }
  MigratePartnerLinkTracking(
    _request: CStore_MigratePartnerLinkTracking_Notification,
  ): Promise<void> {
    return this.notImplemented();
  }
  UpdatePackageReservations(
    _request: CStore_UpdatePackageReservations_Request,
  ): Promise<CStore_UpdatePackageReservations_Response> {
    return this.notImplemented();
  }
  GetWishlistDemoEmailStatus(
    _request: CStore_GetWishlistDemoEmailStatus_Request,
  ): Promise<CStore_GetWishlistDemoEmailStatus_Response> {
    return this.notImplemented();
  }
  QueueWishlistDemoEmailToFire(
    _request: CStore_QueueWishlistDemoEmailToFire_Request,
  ): Promise<CStore_QueueWishlistDemoEmailToFire_Response> {
    return this.notImplemented();
  }
  SetReservationPositionMessage(
    _request: CStore_SetReservationPositionMessage_Request,
  ): Promise<CStore_SetReservationPositionMessage_Response> {
    return this.notImplemented();
  }
  DeleteReservationPositionMessage(
    _request: CStore_DeleteReservationPositionMessage_Request,
  ): Promise<CStore_DeleteReservationPositionMessage_Response> {
    return this.notImplemented();
  }
  GetAllReservationPositionMessages(
    _request: CStore_GetAllReservationPositionMessages_Request,
  ): Promise<CStore_GetAllReservationPositionMessages_Response> {
    return this.notImplemented();
  }
  ReloadAllReservationPositionMessages(
    _request: CStore_ReloadAllReservationPositionMessages_Notification,
  ): Promise<void> {
    return this.notImplemented();
  }
  SetCompatibilityFeedback(
    _request: CSteamDeckCompatibility_SetFeedback_Request,
  ): Promise<CSteamDeckCompatibility_SetFeedback_Response> {
    return this.notImplemented();
  }
  ShouldPromptForCompatibilityFeedback(
    _request: CSteamDeckCompatibility_ShouldPrompt_Request,
  ): Promise<CSteamDeckCompatibility_ShouldPrompt_Response> {
    return this.notImplemented();
  }
  GetGamesFollowed(
    _request: CStore_GetGamesFollowed_Request,
  ): Promise<CStore_GetGamesFollowed_Response> {
    return this.notImplemented();
  }
  GetGamesFollowedCount(
    _request: CStore_GetGamesFollowedCount_Request,
  ): Promise<CStore_GetGamesFollowedCount_Response> {
    return this.notImplemented();
  }

  private notImplemented(): never {
    throw new SteamClientError("Method not implemented.", "services");
  }
}
