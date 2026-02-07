/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CInventory_GetInventory_Request {
  appid?: number;
  steamid?: Long;
}

export interface CInventory_Response {
  etag?: string;
  removeditemids?: Long[];
  item_json?: string;
  itemdef_json?: string;
  ticket?: Buffer;
  replayed?: boolean;
}

export interface CInventory_ExchangeItem_Request {
  appid?: number;
  steamid?: Long;
  materialsitemid?: Long[];
  materialsquantity?: number[];
  outputitemdefid?: Long;
}

export interface CInventory_GetEligiblePromoItemDefIDs_Request {
  appid?: number;
  steamid?: Long;
}

export interface CInventory_GetEligiblePromoItemDefIDs_Response {
  itemdefids?: Long[];
}

export interface CInventory_AddItem_Request {
  appid?: number;
  itemdefid?: Long[];
  itempropsjson?: string[];
  itemquantity?: number[];
  steamid?: Long;
  notify?: boolean;
  requestid?: Long;
  trade_restriction?: boolean;
  is_purchase?: boolean;
}

export interface CInventory_ModifyItems_Request {
  appid?: number;
  steamid?: Long;
  updates?: CInventory_ModifyItems_Request.ItemPropertyUpdate[];
  timestamp?: number;
}

export namespace CInventory_ModifyItems_Request {
  export interface ItemPropertyUpdate {
    itemid?: Long;
    remove_property?: boolean;
    property_name?: string;
    property_value_bool?: boolean;
    property_value_int?: Long;
    property_value_string?: string;
    property_value_float?: number;
  }
}

export interface CInventory_ConsumePlaytime_Request {
  appid?: number;
  itemdefid?: Long;
}

export interface CInventory_ConsumeItem_Request {
  appid?: number;
  itemid?: Long;
  quantity?: number;
  timestamp?: string;
  steamid?: Long;
  requestid?: Long;
}

export interface CInventory_DevSetNextDrop_Request {
  appid?: number;
  itemdefid?: Long;
  droptime?: string;
}

export interface CInventory_SplitItemStack_Request {
  appid?: number;
  itemid?: Long;
  quantity?: number;
  steamid?: Long;
}

export interface CInventory_CombineItemStacks_Request {
  appid?: number;
  fromitemid?: Long;
  destitemid?: Long;
  quantity?: number;
  steamid?: Long;
}

export interface CInventory_GetItemDefMeta_Request {
  appid?: number;
}

export interface CInventory_GetItemDefMeta_Response {
  modified?: number;
  digest?: string;
}

export type CInventory_GetUserPurchaseInfo_Request = Record<string, never>;

export interface CInventory_GetUserPurchaseInfo_Response {
  ecurrency?: number;
}

export interface CInventory_PurchaseInit_Request {
  appid?: number;
  language?: number;
  line_items?: CInventory_PurchaseInit_Request.LineItem[];
}

export namespace CInventory_PurchaseInit_Request {
  export interface LineItem {
    itemdefid?: Long;
    quantity?: number;
  }
}

export interface CInventory_PurchaseInit_Response {
  orderid?: Long;
  transid?: Long;
}

export interface CInventory_PurchaseFinalize_Request {
  appid?: number;
  language?: number;
  orderid?: Long;
}

export interface CInventory_InspectItem_Request {
  itemdefid?: Long;
  itemid?: Long;
  tags?: string;
}

export interface CInventoryClient_NewItems_Notification {
  appid?: number;
  inventory_response?: CInventory_Response;
}

export abstract class InventoryService {
  abstract GetInventory(request: CInventory_GetInventory_Request): Promise<CInventory_Response>;
  abstract ExchangeItem(request: CInventory_ExchangeItem_Request): Promise<CInventory_Response>;
  abstract GetEligiblePromoItemDefIDs(
    request: CInventory_GetEligiblePromoItemDefIDs_Request,
  ): Promise<CInventory_GetEligiblePromoItemDefIDs_Response>;
  abstract AddPromoItem(request: CInventory_AddItem_Request): Promise<CInventory_Response>;
  abstract SafeModifyItems(request: CInventory_ModifyItems_Request): Promise<CInventory_Response>;
  abstract ConsumePlaytime(
    request: CInventory_ConsumePlaytime_Request,
  ): Promise<CInventory_Response>;
  abstract ConsumeItem(request: CInventory_ConsumeItem_Request): Promise<CInventory_Response>;
  abstract DevGenerateItem(request: CInventory_AddItem_Request): Promise<CInventory_Response>;
  abstract DevSetNextDrop(request: CInventory_DevSetNextDrop_Request): Promise<CInventory_Response>;
  abstract SplitItemStack(request: CInventory_SplitItemStack_Request): Promise<CInventory_Response>;
  abstract CombineItemStacks(
    request: CInventory_CombineItemStacks_Request,
  ): Promise<CInventory_Response>;
  abstract GetItemDefMeta(
    request: CInventory_GetItemDefMeta_Request,
  ): Promise<CInventory_GetItemDefMeta_Response>;
  abstract GetUserPurchaseInfo(
    request: CInventory_GetUserPurchaseInfo_Request,
  ): Promise<CInventory_GetUserPurchaseInfo_Response>;
  abstract PurchaseInit(
    request: CInventory_PurchaseInit_Request,
  ): Promise<CInventory_PurchaseInit_Response>;
  abstract PurchaseFinalize(
    request: CInventory_PurchaseFinalize_Request,
  ): Promise<CInventory_Response>;
  abstract InspectItem(request: CInventory_InspectItem_Request): Promise<CInventory_Response>;
}

export abstract class InventoryClientService {
  abstract NotifyNewItems(request: CInventoryClient_NewItems_Notification): Promise<void>;
}
