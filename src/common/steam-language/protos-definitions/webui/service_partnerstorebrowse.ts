/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CStoreBrowse_GetItems_Request,
  CStoreBrowse_GetItems_Response,
  StoreItemID,
} from "./common";

export interface CPartnerStoreBrowse_GetCountryRestrictions_Request {
  ids?: StoreItemID[];
}

export interface CPartnerStoreBrowse_GetCountryRestrictions_Response {
  results?: CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions[];
  no_info?: StoreItemID[];
}

export interface CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions {
  id?: StoreItemID;
  no_restrictions?: boolean;
  allowed_countries?: string[];
  restricted_countries?: string[];
}

export interface CPartnerStoreBrowse_GetItems_Request {
  getitems_request?: CStoreBrowse_GetItems_Request;
  include_unpublished?: boolean;
}

export abstract class PartnerStoreBrowseService {
  abstract GetCountryRestrictions(
    request: CPartnerStoreBrowse_GetCountryRestrictions_Request,
  ): Promise<CPartnerStoreBrowse_GetCountryRestrictions_Response>;
  abstract GetItems(
    request: CPartnerStoreBrowse_GetItems_Request,
  ): Promise<CStoreBrowse_GetItems_Response>;
}
