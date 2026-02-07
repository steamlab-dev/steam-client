/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CEcon_Asset {
  appid?: number;
  contextid?: Long;
  assetid?: Long;
  classid?: Long;
  instanceid?: Long;
  currencyid?: number;
  amount?: Long;
  missing?: boolean;
  est_usd?: Long;
}

export interface CEcon_ClientGetItemShopOverlayAuthURL_Request {
  return_url?: string;
}

export interface CEcon_ClientGetItemShopOverlayAuthURL_Response {
  url?: string;
}

export interface CEcon_GetAssetClassInfo_Request {
  language?: string;
  appid?: number;
  classes?: CEconItem_ClassIdentifiers[];
  high_pri?: boolean;
}

export interface CEcon_GetAssetClassInfo_Response {
  descriptions?: CEconItem_Description[];
}

export interface CEcon_GetAssetPropertySchema_Request {
  appid?: number;
  language?: string;
}

export interface CEcon_GetAssetPropertySchema_Response {
  property_schemas?: CEconItem_AssetPropertySchema[];
}

export interface CEcon_GetInventoryItemsWithDescriptions_Request {
  steamid?: Long;
  appid?: number;
  contextid?: Long;
  get_descriptions?: boolean;
  language?: string;
  filters?: CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions;
  start_assetid?: Long;
  count?: number;
  for_trade_offer_verification?: boolean;
  get_asset_properties?: boolean;
}

export interface CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions {
  assetids?: Long[];
  currencyids?: number[];
  tradable_only?: boolean;
  marketable_only?: boolean;
}

export interface CEcon_GetInventoryItemsWithDescriptions_Response {
  assets?: CEcon_Asset[];
  descriptions?: CEconItem_Description[];
  missing_assets?: CEcon_Asset[];
  more_items?: boolean;
  last_assetid?: Long;
  total_inventory_count?: number;
  asset_properties?: CEconItem_AssetProperties[];
}

export interface CEcon_GetTradeOfferAccessToken_Request {
  generate_new_token?: boolean;
}

export interface CEcon_GetTradeOfferAccessToken_Response {
  trade_offer_access_token?: string;
}

export interface CEconItem_Action {
  link?: string;
  name?: string;
}

export interface CEconItem_AssetAccessory {
  classid?: Long;
  instanceid?: Long;
  standalone_properties?: CEconItem_AssetProperty[];
  parent_relationship_properties?: CEconItem_AssetProperty[];
  nested_accessories?: CEconItem_AssetAccessory[];
}

export interface CEconItem_AssetProperties {
  appid?: number;
  contextid?: Long;
  assetid?: Long;
  asset_properties?: CEconItem_AssetProperty[];
  asset_accessories?: CEconItem_AssetAccessory[];
}

export interface CEconItem_AssetProperty {
  propertyid?: number;
  int_value?: Long;
  float_value?: number;
  string_value?: string;
}

export interface CEconItem_AssetPropertySchema {
  id?: number;
  name?: string;
  type?: number;
  float_min?: number;
  float_max?: number;
  int_min?: Long;
  int_max?: Long;
  localized_label?: string;
  hide_from_description?: boolean;
}

export interface CEconItem_ClassIdentifiers {
  classid?: Long;
  instanceid?: Long;
}

export interface CEconItem_ContainerProperties {
  contained_items?: CEconItem_ClassIdentifiers[];
  search_tags?: CEconItem_Tag[];
}

export interface CEconItem_Description {
  appid?: number;
  classid?: Long;
  instanceid?: Long;
  currency?: boolean;
  background_color?: string;
  icon_url?: string;
  icon_url_large?: string;
  descriptions?: CEconItem_DescriptionLine[];
  tradable?: boolean;
  actions?: CEconItem_Action[];
  owner_descriptions?: CEconItem_DescriptionLine[];
  owner_actions?: CEconItem_Action[];
  fraudwarnings?: string[];
  name?: string;
  name_color?: string;
  type?: string;
  market_name?: string;
  market_hash_name?: string;
  market_fee?: string;
  contained_item?: CEconItem_Description;
  market_actions?: CEconItem_Action[];
  commodity?: boolean;
  market_tradable_restriction?: number;
  market_marketable_restriction?: number;
  marketable?: boolean;
  tags?: CEconItem_Tag[];
  item_expiration?: string;
  market_fee_app?: number;
  market_buy_country_restriction?: string;
  market_sell_country_restriction?: string;
  sealed?: boolean;
  container_properties?: CEconItem_ContainerProperties;
  market_bucket_group_name?: string;
  market_bucket_group_id?: string;
  sealed_type?: number;
}

export interface CEconItem_DescriptionLine {
  type?: string;
  value?: string;
  color?: string;
  label?: string;
  name?: string;
}

export interface CEconItem_Tag {
  appid?: number;
  category?: string;
  internal_name?: string;
  localized_category_name?: string;
  localized_tag_name?: string;
  color?: string;
}

export abstract class EconService {
  abstract ClientGetItemShopOverlayAuthURL(
    request: CEcon_ClientGetItemShopOverlayAuthURL_Request,
  ): Promise<CEcon_ClientGetItemShopOverlayAuthURL_Response>;
  abstract GetAssetClassInfo(
    request: CEcon_GetAssetClassInfo_Request,
  ): Promise<CEcon_GetAssetClassInfo_Response>;
  abstract GetAssetPropertySchema(
    request: CEcon_GetAssetPropertySchema_Request,
  ): Promise<CEcon_GetAssetPropertySchema_Response>;
  abstract GetInventoryItemsWithDescriptions(
    request: CEcon_GetInventoryItemsWithDescriptions_Request,
  ): Promise<CEcon_GetInventoryItemsWithDescriptions_Response>;
  abstract GetTradeOfferAccessToken(
    request: CEcon_GetTradeOfferAccessToken_Request,
  ): Promise<CEcon_GetTradeOfferAccessToken_Response>;
}
