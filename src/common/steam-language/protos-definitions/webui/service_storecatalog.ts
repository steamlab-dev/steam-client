/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CDeveloperPageLink {
  appid?: number;
  clan_steamid?: Long;
  relation?: number;
  linkname?: string;
  json?: string;
}

export interface CDeveloperPageToApps {
  clan_account_id?: number;
  appid_list?: number[];
}

export interface CStoreCatalog_GetDevPageAllAppsLinked_Request {
  clan_account_ids?: number[];
  ignore_dlc?: boolean;
}

export interface CStoreCatalog_GetDevPageAllAppsLinked_Response {
  results?: CDeveloperPageToApps[];
}

export interface CStoreCatalog_GetDevPageLinks_Request {
  appid?: number;
}

export interface CStoreCatalog_GetDevPageLinks_Response {
  links?: CDeveloperPageLink[];
}

export interface CStoreCatalog_GetDevPagesForPartner_Request {
  partnerid?: number;
}

export interface CStoreCatalog_GetDevPagesForPartner_Response {
  results?: CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo[];
}

export interface CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo {
  clan_accountid?: number;
  linknames?: string[];
}

export interface CStoreCatalog_SetDevPageLink_Request {
  appid?: number;
  link?: CDeveloperPageLink;
  remove?: boolean;
  update_json_only?: boolean;
  skip_clan_permissions?: boolean;
  partner_id?: number;
}

export type CStoreCatalog_SetDevPageLink_Response = Record<string, never>;

export abstract class StoreCatalogService {
  abstract GetDevPageAllAppsLinked(
    request: CStoreCatalog_GetDevPageAllAppsLinked_Request,
  ): Promise<CStoreCatalog_GetDevPageAllAppsLinked_Response>;
  abstract GetDevPageLinks(
    request: CStoreCatalog_GetDevPageLinks_Request,
  ): Promise<CStoreCatalog_GetDevPageLinks_Response>;
  abstract GetDevPagesForPartner(
    request: CStoreCatalog_GetDevPagesForPartner_Request,
  ): Promise<CStoreCatalog_GetDevPagesForPartner_Response>;
  abstract SetDevPageLink(
    request: CStoreCatalog_SetDevPageLink_Request,
  ): Promise<CStoreCatalog_SetDevPageLink_Response>;
}
