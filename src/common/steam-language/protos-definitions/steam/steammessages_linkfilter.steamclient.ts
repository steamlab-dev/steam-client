/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CCommunity_GetLinkFilterHashPrefixes_Request {
  hit_type?: number;
  count?: number;
  start?: Long;
}

export interface CCommunity_GetLinkFilterHashPrefixes_Response {
  hash_prefixes?: number[];
}

export interface CCommunity_GetLinkFilterHashes_Request {
  hit_type?: number;
  count?: number;
  start?: Long;
}

export interface CCommunity_GetLinkFilterHashes_Response {
  hashes?: Buffer[];
}

export interface CCommunity_GetLinkFilterListVersion_Request {
  hit_type?: number;
}

export interface CCommunity_GetLinkFilterListVersion_Response {
  version?: string;
  count?: Long;
}

export abstract class CommunityLinkFilterService {
  abstract GetLinkFilterHashPrefixes(
    request: CCommunity_GetLinkFilterHashPrefixes_Request,
  ): Promise<CCommunity_GetLinkFilterHashPrefixes_Response>;
  abstract GetLinkFilterHashes(
    request: CCommunity_GetLinkFilterHashes_Request,
  ): Promise<CCommunity_GetLinkFilterHashes_Response>;
  abstract GetLinkFilterListVersion(
    request: CCommunity_GetLinkFilterListVersion_Request,
  ): Promise<CCommunity_GetLinkFilterListVersion_Response>;
}
