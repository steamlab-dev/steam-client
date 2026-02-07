/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CUserAccount_GetAvailableValveDiscountPromotions_Request {
  country_code?: string;
}

export interface CUserAccount_GetAvailableValveDiscountPromotions_Response {
  promotions?: CUserAccount_GetAvailableValveDiscountPromotions_Response.ValveDiscountPromotionDetails[];
}

export namespace CUserAccount_GetAvailableValveDiscountPromotions_Response {
  export interface ValveDiscountPromotionDetails {
    promotionid?: number;
    promotion_description?: string;
    minimum_cart_amount?: Long;
    minimum_cart_amount_for_display?: Long;
    discount_amount?: Long;
    currency_code?: number;
    available_use_count?: number;
    promotional_discount_type?: number;
    loyalty_reward_id?: number;
    localized_name_token?: string;
    max_use_count?: number;
  }
}

export interface CUserAccount_GetClientWalletDetails_Request {
  include_balance_in_usd?: boolean;
  wallet_region?: number;
  include_formatted_balance?: boolean;
}

export interface CUserAccount_GetWalletDetails_Response {
  has_wallet?: boolean;
  user_country_code?: string;
  wallet_country_code?: string;
  wallet_state?: string;
  balance?: Long;
  delayed_balance?: Long;
  currency_code?: number;
  time_most_recent_txn?: number;
  most_recent_txnid?: Long;
  balance_in_usd?: Long;
  delayed_balance_in_usd?: Long;
  has_wallet_in_other_regions?: boolean;
  other_regions?: number[];
  formatted_balance?: string;
  formatted_delayed_balance?: string;
  delayed_balance_available_min_time?: number;
  delayed_balance_available_max_time?: number;
  delayed_balance_newest_source?: number;
}

export type CUserAccount_GetAccountLinkStatus_Request = Record<string, never>;

export interface CUserAccount_GetAccountLinkStatus_Response {
  pwid?: number;
  identity_verification?: number;
  performed_age_verification?: boolean;
}

export interface CUserAccount_CancelLicenseForApp_Request {
  appid?: number;
}

export type CUserAccount_CancelLicenseForApp_Response = Record<string, never>;

export interface CUserAccount_GetUserCountry_Request {
  steamid?: Long;
}

export interface CUserAccount_GetUserCountry_Response {
  country?: string;
}

export interface CUserAccount_CreateFriendInviteToken_Request {
  invite_limit?: number;
  invite_duration?: number;
  invite_note?: string;
}

export interface CUserAccount_CreateFriendInviteToken_Response {
  invite_token?: string;
  invite_limit?: Long;
  invite_duration?: Long;
  time_created?: number;
  valid?: boolean;
}

export type CUserAccount_GetFriendInviteTokens_Request = Record<string, never>;

export interface CUserAccount_GetFriendInviteTokens_Response {
  tokens?: CUserAccount_CreateFriendInviteToken_Response[];
}

export interface CUserAccount_ViewFriendInviteToken_Request {
  steamid?: Long;
  invite_token?: string;
}

export interface CUserAccount_ViewFriendInviteToken_Response {
  valid?: boolean;
  steamid?: Long;
  invite_duration?: Long;
}

export interface CUserAccount_RedeemFriendInviteToken_Request {
  steamid?: Long;
  invite_token?: string;
}

export type CUserAccount_RedeemFriendInviteToken_Response = Record<string, never>;

export interface CUserAccount_RevokeFriendInviteToken_Request {
  invite_token?: string;
}

export type CUserAccount_RevokeFriendInviteToken_Response = Record<string, never>;

export interface CUserAccount_RegisterCompatTool_Request {
  compat_tool?: number;
}

export type CUserAccount_RegisterCompatTool_Response = Record<string, never>;

export interface CEmbeddedClient_AuthorizeCurrentDevice_Request {
  steamid?: Long;
  appid?: number;
  device_info?: string;
  deviceid?: number;
}

export interface CEmbeddedClient_Token {
  steamid?: Long;
  client_token?: Buffer;
  expiry?: number;
  deviceid?: number;
}

export interface CEmbeddedClient_AuthorizeDevice_Response {
  result?: number;
  token?: CEmbeddedClient_Token;
}

export abstract class UserAccountService {
  abstract GetAvailableValveDiscountPromotions(
    request: CUserAccount_GetAvailableValveDiscountPromotions_Request,
  ): Promise<CUserAccount_GetAvailableValveDiscountPromotions_Response>;
  abstract GetClientWalletDetails(
    request: CUserAccount_GetClientWalletDetails_Request,
  ): Promise<CUserAccount_GetWalletDetails_Response>;
  abstract GetAccountLinkStatus(
    request: CUserAccount_GetAccountLinkStatus_Request,
  ): Promise<CUserAccount_GetAccountLinkStatus_Response>;
  abstract CancelLicenseForApp(
    request: CUserAccount_CancelLicenseForApp_Request,
  ): Promise<CUserAccount_CancelLicenseForApp_Response>;
  abstract GetUserCountry(
    request: CUserAccount_GetUserCountry_Request,
  ): Promise<CUserAccount_GetUserCountry_Response>;
  abstract CreateFriendInviteToken(
    request: CUserAccount_CreateFriendInviteToken_Request,
  ): Promise<CUserAccount_CreateFriendInviteToken_Response>;
  abstract GetFriendInviteTokens(
    request: CUserAccount_GetFriendInviteTokens_Request,
  ): Promise<CUserAccount_GetFriendInviteTokens_Response>;
  abstract ViewFriendInviteToken(
    request: CUserAccount_ViewFriendInviteToken_Request,
  ): Promise<CUserAccount_ViewFriendInviteToken_Response>;
  abstract RedeemFriendInviteToken(
    request: CUserAccount_RedeemFriendInviteToken_Request,
  ): Promise<CUserAccount_RedeemFriendInviteToken_Response>;
  abstract RevokeFriendInviteToken(
    request: CUserAccount_RevokeFriendInviteToken_Request,
  ): Promise<CUserAccount_RevokeFriendInviteToken_Response>;
  abstract RegisterCompatTool(
    request: CUserAccount_RegisterCompatTool_Request,
  ): Promise<CUserAccount_RegisterCompatTool_Response>;
}

export abstract class EmbeddedClientService {
  abstract AuthorizeCurrentDevice(
    request: CEmbeddedClient_AuthorizeCurrentDevice_Request,
  ): Promise<CEmbeddedClient_AuthorizeDevice_Response>;
}
