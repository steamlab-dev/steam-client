/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CAuction_Bid {
  accountid?: number;
  auctiondescriptionid?: Long;
  state?: number;
  time_created?: number;
  time_updated?: number;
  amount_bid?: Long;
  amount_paid?: Long;
  auctionbidid?: Long;
}

export interface CAuction_CancelBid_Request {
  auctiondescriptionid?: Long;
}

export interface CAuction_CancelBid_Response {
  amount_returned?: Long;
}

export type CAuction_GetAllItems_Request = Record<string, never>;

export interface CAuction_GetAllItems_Response {
  items?: CAuction_Item[];
}

export interface CAuction_GetBidsForItem_Request {
  auctiondescriptionid?: Long;
}

export interface CAuction_GetBidsForItem_Response {
  item?: CAuction_Item;
  count_total?: number;
  current_user_position?: number;
  winning_bids?: CAuction_Bid[];
}

export interface CAuction_GetBidsForUser_Request {
  steamid?: Long;
}

export interface CAuction_GetBidsForUser_Response {
  bids?: CAuction_Bid[];
}

export interface CAuction_GetItemDetails_Request {
  auctiondescriptionid?: Long;
}

export interface CAuction_GetItemDetails_Response {
  item?: CAuction_Item;
}

export interface CAuction_GetUserBidForItem_Request {
  auctiondescriptionid?: Long;
}

export interface CAuction_GetUserBidForItem_Response {
  bid?: CAuction_Bid;
}

export interface CAuction_Item {
  auctiondescriptionid?: Long;
  time_start?: number;
  time_end?: number;
  amount_total?: Long;
  amount_remaining?: Long;
  highest_amount?: Long;
  highest_bidder_accountid?: number;
  community_item_appid?: number;
  community_item_type?: number;
  store_appid?: number;
  store_packageids?: number[];
  reserve_price?: Long;
}

export interface CAuction_PlaceBid_Request {
  auctiondescriptionid?: Long;
  amount_bid?: Long;
  expected_amount_remaining?: number;
}

export type CAuction_PlaceBid_Response = Record<string, never>;

export abstract class AuctionService {
  abstract CancelBid(request: CAuction_CancelBid_Request): Promise<CAuction_CancelBid_Response>;
  abstract GetAllItems(
    request: CAuction_GetAllItems_Request,
  ): Promise<CAuction_GetAllItems_Response>;
  abstract GetBidsForItem(
    request: CAuction_GetBidsForItem_Request,
  ): Promise<CAuction_GetBidsForItem_Response>;
  abstract GetBidsForUser(
    request: CAuction_GetBidsForUser_Request,
  ): Promise<CAuction_GetBidsForUser_Response>;
  abstract GetItemDetails(
    request: CAuction_GetItemDetails_Request,
  ): Promise<CAuction_GetItemDetails_Response>;
  abstract GetUserBidForItem(
    request: CAuction_GetUserBidForItem_Request,
  ): Promise<CAuction_GetUserBidForItem_Response>;
  abstract PlaceBid(request: CAuction_PlaceBid_Request): Promise<CAuction_PlaceBid_Response>;
}
