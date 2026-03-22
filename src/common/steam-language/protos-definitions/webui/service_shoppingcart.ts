/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CShoppingCart_AddBundle_Request {
  gidshoppingcart?: bigint;
  bundleid?: number;
  browserid?: bigint;
  store_country?: string;
  quantity?: number;
  beta_mode?: boolean;
}

export interface CShoppingCart_AddBundle_Response {
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_AddPackages_Request {
  gidshoppingcart?: bigint;
  browserid?: bigint;
  cart_items?: CShoppingCart_PackageItem[];
  store_country_code?: string;
  beta_mode?: boolean;
}

export interface CShoppingCart_AddPackages_Response {
  gidshoppingcart?: bigint;
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_Amount {
  amount?: bigint;
  currencycode?: number;
}

export interface CShoppingCart_AvailableCoupon {
  couponid?: number;
  gidcoupon?: bigint;
  gidlineitem?: bigint;
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
  gidcoupontarget?: bigint;
  packageid?: number;
  gidcoupon?: bigint;
}

export interface CShoppingCart_CreateNew_Request {
  steamid_requester?: bigint;
  purchase_request_id?: bigint;
}

export interface CShoppingCart_CreateNew_Response {
  gidshoppingcart?: bigint;
}

export interface CShoppingCart_GetContents_Request {
  gidshoppingcart?: bigint;
}

export interface CShoppingCart_GetContents_Response {
  gidshoppingcart?: bigint;
  contents?: CShoppingCart_Contents;
  time_created?: number;
  merged_into_account_cart?: boolean;
  steamid_requester?: bigint;
  purchase_request_id?: bigint;
}

export interface CShoppingCart_Item {
  gidlineitem?: bigint;
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
  microtxnassetclassid?: bigint;
}

export interface CShoppingCart_PackageItem {
  packageid?: number;
  costwhenadded?: CShoppingCart_Amount;
  is_gift?: boolean;
  gidbundle?: bigint;
  quantity?: number;
}

export interface CShoppingCart_Potentials {
  coupons?: CShoppingCart_AvailableCoupon[];
}

export interface CShoppingCart_RelationShip {
  gidparent?: bigint;
  children?: CShoppingCart_RelationShip[];
}

export interface CShoppingCart_RemoveLineItems_Request {
  gidshoppingcart?: bigint;
  gidlineitems?: bigint[];
  browserid?: bigint;
}

export interface CShoppingCart_RemoveLineItems_Response {
  contents?: CShoppingCart_Contents;
  result_details?: number[];
}

export interface CShoppingCart_UpdatePackageQuantity_Request {
  gidshoppingcart?: bigint;
  gidlineitem?: bigint;
  quantity?: number;
}

export interface CShoppingCart_UpdatePackageQuantity_Response {
  gidshoppingcart?: bigint;
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
