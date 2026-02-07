/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CartAmount, CartCoupon, CartGiftInfo, CUserInterface_NavData } from "./common";

export interface AccountCartContents {
  line_items?: AccountCartLineItem[];
  subtotal?: CartAmount;
  is_valid?: boolean;
  validation_details?: AccountCartValidationDetails;
}

export interface AccountCartLineItem {
  line_item_id?: Long;
  type?: number;
  packageid?: number;
  bundleid?: number;
  is_valid?: boolean;
  validation_details?: AccountCartValidationDetails;
  time_added?: number;
  price_when_added?: CartAmount;
  gift_info?: CartGiftInfo;
  flags?: AccountCartLineItemFlags;
  gidcoupon_applied?: Long;
}

export interface AccountCartLineItemFlags {
  is_gift?: boolean;
  is_private?: boolean;
}

export interface AccountCartValidationDetails {
  validation_failure?: number;
}

export interface CAccountCart_AddItemsToCart_Request {
  user_country?: string;
  items?: CAccountCart_AddItemsToCart_Request_ItemToAdd[];
  navdata?: CUserInterface_NavData;
}

export interface CAccountCart_AddItemsToCart_Request_ItemToAdd {
  packageid?: number;
  bundleid?: number;
  gift_info?: CartGiftInfo;
  flags?: AccountCartLineItemFlags;
}

export interface CAccountCart_AddItemsToCart_Response {
  line_item_ids?: Long[];
  cart?: AccountCartContents;
  replaced_packages?: number[];
  existing_billing_agreementid?: Long;
  new_billing_agreement_recurring_packageid?: number;
}

export type CAccountCart_DeleteCart_Request = Record<string, never>;

export type CAccountCart_DeleteCart_Response = Record<string, never>;

export interface CAccountCart_GetCart_Request {
  user_country?: string;
}

export interface CAccountCart_GetCart_Response {
  cart?: AccountCartContents;
}

export interface CAccountCart_GetRelevantCoupons_Request {
  language?: number;
}

export interface CAccountCart_GetRelevantCoupons_Response {
  line_items?: CAccountCart_GetRelevantCoupons_Response_LineItemCoupons[];
}

export interface CAccountCart_GetRelevantCoupons_Response_LineItemCoupons {
  line_item_id?: Long;
  coupons?: CartCoupon[];
}

export interface CAccountCart_MergeShoppingCartContents_Request {
  gidshoppingcart?: Long;
  user_country?: string;
}

export interface CAccountCart_MergeShoppingCartContents_Response {
  cart?: AccountCartContents;
}

export interface CAccountCart_ModifyLineItem_Request {
  line_item_id?: Long;
  user_country?: string;
  gift_info?: CartGiftInfo;
  flags?: AccountCartLineItemFlags;
  apply_gidcoupon?: Long;
}

export interface CAccountCart_ModifyLineItem_Response {
  cart?: AccountCartContents;
}

export interface CAccountCart_RemoveItemFromCart_Request {
  line_item_id?: Long;
  user_country?: string;
}

export interface CAccountCart_RemoveItemFromCart_Response {
  cart?: AccountCartContents;
}

export abstract class AccountCartService {
  abstract AddItemsToCart(
    request: CAccountCart_AddItemsToCart_Request,
  ): Promise<CAccountCart_AddItemsToCart_Response>;
  abstract DeleteCart(
    request: CAccountCart_DeleteCart_Request,
  ): Promise<CAccountCart_DeleteCart_Response>;
  abstract GetCart(request: CAccountCart_GetCart_Request): Promise<CAccountCart_GetCart_Response>;
  abstract GetRelevantCoupons(
    request: CAccountCart_GetRelevantCoupons_Request,
  ): Promise<CAccountCart_GetRelevantCoupons_Response>;
  abstract MergeShoppingCartContents(
    request: CAccountCart_MergeShoppingCartContents_Request,
  ): Promise<CAccountCart_MergeShoppingCartContents_Response>;
  abstract ModifyLineItem(
    request: CAccountCart_ModifyLineItem_Request,
  ): Promise<CAccountCart_ModifyLineItem_Response>;
  abstract RemoveItemFromCart(
    request: CAccountCart_RemoveItemFromCart_Request,
  ): Promise<CAccountCart_RemoveItemFromCart_Response>;
}
