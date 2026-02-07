/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CartAmount,
  CartCoupon,
  CartGiftInfo,
  StoreBrowseContext,
  StoreBrowseItemDataRequest,
  StoreItem,
  StoreItemID,
} from "./common";

export interface CCheckout_AddFreeLicense_Request {
  item_id?: StoreItemID;
}

export interface CCheckout_AddFreeLicense_Response {
  packageids_added?: number[];
  appids_added?: number[];
  purchase_result_detail?: number;
}

export interface CCheckout_GetFriendOwnershipForGifting_Request {
  item_ids?: StoreItemID[];
}

export interface CCheckout_GetFriendOwnershipForGifting_Response {
  ownership_info?: CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo[];
}

export interface CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership {
  accountid?: number;
  already_owns?: boolean;
  wishes_for?: boolean;
  partial_owns_appids?: number[];
  partial_wishes_for?: number[];
}

export interface CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo {
  item_id?: StoreItemID;
  friend_ownership?: CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership[];
}

export interface CCheckout_ValidateCart_Request {
  gidshoppingcart?: Long;
  context?: StoreBrowseContext;
  data_request?: StoreBrowseItemDataRequest;
  gift_info?: CartGiftInfo;
  gidreplayoftransid?: Long;
  for_init_purchase?: boolean;
}

export interface CCheckout_ValidateCart_Response {
  cart_items?: CCheckout_ValidateCart_Response_CartItem[];
  estimated_totals?: CCheckout_ValidateCart_Response_EstimatedTotals;
}

export interface CCheckout_ValidateCart_Response_CartItem {
  line_item_id?: Long;
  item_id?: StoreItemID;
  store_item?: StoreItem;
  gift_info?: CartGiftInfo;
  errors?: CCheckout_ValidateCart_Response_CartItem_Errors;
  warnings?: CCheckout_ValidateCart_Response_CartItem_Warnings;
  subtotal?: CartAmount;
  price_when_added?: CartAmount;
  original_price?: CartAmount;
  coupon_applied?: CartCoupon;
  coupon_discount?: CartAmount;
  can_purchase_as_gift?: boolean;
  restrict_add_additional_to_cart?: boolean;
  quantity?: number;
  included_packageids?: number[];
}

export interface CCheckout_ValidateCart_Response_CartItem_Errors {
  owned_appids?: number[];
  duplicate_appids_in_cart?: number[];
  unavailable_in_country?: boolean;
  invalid_coupon?: boolean;
  invalid_coupon_for_item?: boolean;
  coupon_exclusive_promo?: boolean;
  cannot_purchase_as_gift?: boolean;
  invalid_item?: boolean;
  too_many_in_cart?: boolean;
  has_existing_billing_agreement?: boolean;
  missing_must_own_appids?: number[];
  adult_content_restricted?: boolean;
  commercial_license_restricted?: boolean;
}

export interface CCheckout_ValidateCart_Response_CartItem_Warnings {
  owned_appids?: number[];
  owned_appids_extra_copy?: number[];
  appids_in_mastersub?: CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub[];
  price_has_changed?: boolean;
  non_refundable?: boolean;
}

export interface CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub {
  cart_appid?: number;
  mastersub_appid?: number;
}

export interface CCheckout_ValidateCart_Response_EstimatedTotals {
  subtotal?: CartAmount;
  wallet_balance?: CartAmount;
  exceeding_wallet_balance?: CartAmount;
  remaining_wallet_balance?: CartAmount;
}

export abstract class CheckoutService {
  abstract AddFreeLicense(
    request: CCheckout_AddFreeLicense_Request,
  ): Promise<CCheckout_AddFreeLicense_Response>;
  abstract GetFriendOwnershipForGifting(
    request: CCheckout_GetFriendOwnershipForGifting_Request,
  ): Promise<CCheckout_GetFriendOwnershipForGifting_Response>;
  abstract ValidateCart(
    request: CCheckout_ValidateCart_Request,
  ): Promise<CCheckout_ValidateCart_Response>;
}
