/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CAuction_Bid {
  accountid?: number;
  auctiondescriptionid?: bigint;
  state?: number;
  time_created?: number;
  time_updated?: number;
  amount_bid?: bigint;
  amount_paid?: bigint;
  auctionbidid?: bigint;
}

export interface CAuction_CancelBid_Request {
  auctiondescriptionid?: bigint;
}

export interface CAuction_CancelBid_Response {
  amount_returned?: bigint;
}

export type CAuction_GetAllItems_Request = Record<string, never>;

export interface CAuction_GetAllItems_Response {
  items?: CAuction_Item[];
}

export interface CAuction_GetBidsForItem_Request {
  auctiondescriptionid?: bigint;
}

export interface CAuction_GetBidsForItem_Response {
  item?: CAuction_Item;
  count_total?: number;
  current_user_position?: number;
  winning_bids?: CAuction_Bid[];
}

export interface CAuction_GetBidsForUser_Request {
  steamid?: bigint;
}

export interface CAuction_GetBidsForUser_Response {
  bids?: CAuction_Bid[];
}

export interface CAuction_GetItemDetails_Request {
  auctiondescriptionid?: bigint;
}

export interface CAuction_GetItemDetails_Response {
  item?: CAuction_Item;
}

export interface CAuction_GetUserBidForItem_Request {
  auctiondescriptionid?: bigint;
}

export interface CAuction_GetUserBidForItem_Response {
  bid?: CAuction_Bid;
}

export interface CAuction_Item {
  auctiondescriptionid?: bigint;
  time_start?: number;
  time_end?: number;
  amount_total?: bigint;
  amount_remaining?: bigint;
  highest_amount?: bigint;
  highest_bidder_accountid?: number;
  community_item_appid?: number;
  community_item_type?: number;
  store_appid?: number;
  store_packageids?: number[];
  reserve_price?: bigint;
}

export interface CAuction_PlaceBid_Request {
  auctiondescriptionid?: bigint;
  amount_bid?: bigint;
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
