/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CShoppingCart_AddBundle_Request {
  gidshoppingcart?: Long;
  bundleid?: number;
  browserid?: Long;
  store_country?: string;
  quantity?: number;
  beta_mode?: boolean;
}

export interface CShoppingCart_AddBundle_Response {
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_AddPackages_Request {
  gidshoppingcart?: Long;
  browserid?: Long;
  cart_items?: CShoppingCart_PackageItem[];
  store_country_code?: string;
  beta_mode?: boolean;
}

export interface CShoppingCart_AddPackages_Response {
  gidshoppingcart?: Long;
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_Amount {
  amount?: Long;
  currencycode?: number;
}

export interface CShoppingCart_AvailableCoupon {
  couponid?: number;
  gidcoupon?: Long;
  gidlineitem?: Long;
}

export interface CShoppingCart_BundleItem {
  bundleid?: number;
  quantity?: number;
}

export interface CShoppingCart_Contents {
  lineitems?: CShoppingCart_Item[];
  treeview?: CShoppingCart_RelationShip[];
  potentials?: CShoppingCart_Potentials;
}

export interface CShoppingCart_CouponItem {
  couponid?: number;
  gidcoupontarget?: Long;
  packageid?: number;
  gidcoupon?: Long;
}

export interface CShoppingCart_CreateNew_Request {
  steamid_requester?: Long;
  purchase_request_id?: Long;
}

export interface CShoppingCart_CreateNew_Response {
  gidshoppingcart?: Long;
}

export interface CShoppingCart_GetContents_Request {
  gidshoppingcart?: Long;
}

export interface CShoppingCart_GetContents_Response {
  gidshoppingcart?: Long;
  contents?: CShoppingCart_Contents;
  time_created?: number;
  merged_into_account_cart?: boolean;
  steamid_requester?: Long;
  purchase_request_id?: Long;
}

export interface CShoppingCart_Item {
  gidlineitem?: Long;
  package_item?: CShoppingCart_PackageItem;
  wallet_credit_item?: CShoppingCart_WalletCreditItem;
  coupon_item?: CShoppingCart_CouponItem;
  micro_item?: CShoppingCart_MicroTxnAsset;
  bundle_item?: CShoppingCart_BundleItem;
  loyalty_item?: CShoppingCart_LoyaltyRewardItem;
}

export interface CShoppingCart_LoyaltyRewardItem {
  reward_id?: number;
}

export interface CShoppingCart_MicroTxnAsset {
  microtxnappid?: number;
  microtxnassetclassid?: Long;
}

export interface CShoppingCart_PackageItem {
  packageid?: number;
  costwhenadded?: CShoppingCart_Amount;
  is_gift?: boolean;
  gidbundle?: Long;
  quantity?: number;
}

export interface CShoppingCart_Potentials {
  coupons?: CShoppingCart_AvailableCoupon[];
}

export interface CShoppingCart_RelationShip {
  gidparent?: Long;
  children?: CShoppingCart_RelationShip[];
}

export interface CShoppingCart_RemoveLineItems_Request {
  gidshoppingcart?: Long;
  gidlineitems?: Long[];
  browserid?: Long;
}

export interface CShoppingCart_RemoveLineItems_Response {
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_UpdatePackageQuantity_Request {
  gidshoppingcart?: Long;
  gidlineitem?: Long;
  quantity?: number;
}

export interface CShoppingCart_UpdatePackageQuantity_Response {
  gidshoppingcart?: Long;
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_WalletCreditItem {
  walletcredit?: CShoppingCart_Amount;
}

export abstract class ShoppingCartService {
  abstract AddBundle(
    request: CShoppingCart_AddBundle_Request,
  ): Promise<CShoppingCart_AddBundle_Response>;
  abstract AddPackages(
    request: CShoppingCart_AddPackages_Request,
  ): Promise<CShoppingCart_AddPackages_Response>;
  abstract CreateNewShoppingCart(
    request: CShoppingCart_CreateNew_Request,
  ): Promise<CShoppingCart_CreateNew_Response>;
  abstract GetShoppingCartContents(
    request: CShoppingCart_GetContents_Request,
  ): Promise<CShoppingCart_GetContents_Response>;
  abstract RemoveLineItems(
    request: CShoppingCart_RemoveLineItems_Request,
  ): Promise<CShoppingCart_RemoveLineItems_Response>;
  abstract UpdatePackageQuantity(
    request: CShoppingCart_UpdatePackageQuantity_Request,
  ): Promise<CShoppingCart_UpdatePackageQuantity_Response>;
}
