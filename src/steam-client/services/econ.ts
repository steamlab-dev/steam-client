import type {
  CEcon_ClientGetItemShopOverlayAuthURL_Request,
  CEcon_ClientGetItemShopOverlayAuthURL_Response,
  CEcon_GetAssetClassInfo_Request,
  CEcon_GetAssetClassInfo_Response,
  CEcon_GetAssetPropertySchema_Request,
  CEcon_GetAssetPropertySchema_Response,
  CEcon_GetInventoryItemsWithDescriptions_Request,
  CEcon_GetInventoryItemsWithDescriptions_Response,
  CEcon_GetTradeOfferAccessToken_Request,
  CEcon_GetTradeOfferAccessToken_Response,
  EconService as IEconService,
} from "@/common/steam-language/protos-definitions/steam/steammessages_econ.steamclient";
import SteamClientError from "@/steam-client/error";

export default class EconService implements IEconService {
  GetInventoryItemsWithDescriptions(
    _request: CEcon_GetInventoryItemsWithDescriptions_Request,
  ): Promise<CEcon_GetInventoryItemsWithDescriptions_Response> {
    return this.notImplemented();
  }
  GetTradeOfferAccessToken(
    _request: CEcon_GetTradeOfferAccessToken_Request,
  ): Promise<CEcon_GetTradeOfferAccessToken_Response> {
    return this.notImplemented();
  }
  ClientGetItemShopOverlayAuthURL(
    _request: CEcon_ClientGetItemShopOverlayAuthURL_Request,
  ): Promise<CEcon_ClientGetItemShopOverlayAuthURL_Response> {
    return this.notImplemented();
  }
  GetAssetClassInfo(
    _request: CEcon_GetAssetClassInfo_Request,
  ): Promise<CEcon_GetAssetClassInfo_Response> {
    return this.notImplemented();
  }
  GetAssetPropertySchema(
    _request: CEcon_GetAssetPropertySchema_Request,
  ): Promise<CEcon_GetAssetPropertySchema_Response> {
    return this.notImplemented();
  }

  private notImplemented(): never {
    throw new SteamClientError("Method not implemented.", "services");
  }
}
