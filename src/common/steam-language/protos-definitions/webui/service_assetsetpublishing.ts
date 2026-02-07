/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CAssetSet {
  appid?: number;
  assetset_id?: Long;
  name?: string;
  desc?: string;
  branches?: string[];
  last_update_rtime?: number;
  priority?: number;
  last_publish_rtime?: number;
}

export interface CAssetSetPublishing_AddBranchToAssetSet_Request {
  appid?: number;
  assetset_id?: Long;
  branch?: string;
}

export interface CAssetSetPublishing_AddBranchToAssetSet_Response {
  updated?: CAssetSet;
}

export interface CAssetSetPublishing_CreateAssetSet_Request {
  appid?: number;
  assetset?: CAssetSet;
}

export interface CAssetSetPublishing_CreateAssetSet_Response {
  assetset?: CAssetSet;
}

export interface CAssetSetPublishing_DeleteAssetSet_Request {
  appid?: number;
  assetset_id?: Long;
}

export type CAssetSetPublishing_DeleteAssetSet_Response = Record<string, never>;

export interface CAssetSetPublishing_GetAllAssetSets_Request {
  appid?: number;
}

export interface CAssetSetPublishing_GetAllAssetSets_Response {
  assetset?: CAssetSet[];
}

export interface CAssetSetPublishing_RemoseBranchFromAssetSet_Response {
  updated?: CAssetSet;
}

export interface CAssetSetPublishing_RemoveBranchFromAssetSet_Request {
  appid?: number;
  assetset_id?: Long;
  branch?: string;
}

export interface CAssetSetPublishing_SwapAssetSetPriority_Request {
  appid?: number;
  first_assetset_id?: Long;
  second_assetset_id?: Long;
}

export interface CAssetSetPublishing_SwapAssetSetPriority_Response {
  updated_first?: CAssetSet;
  updated_second?: CAssetSet;
}

export interface CAssetSetPublishing_UpdateAssetSet_Request {
  appid?: number;
  assetset?: CAssetSet;
}

export type CAssetSetPublishing_UpdateAssetSet_Response = Record<string, never>;

export interface CAssetSetPublishing_UpdatePublishTime_Request {
  appid?: number;
  assetset_id?: Long;
}

export interface CAssetSetPublishing_UpdatePublishTime_Response {
  updated?: CAssetSet;
}

export abstract class AssetSetPublishingService {
  abstract AddBranchToAssetSet(
    request: CAssetSetPublishing_AddBranchToAssetSet_Request,
  ): Promise<CAssetSetPublishing_AddBranchToAssetSet_Response>;
  abstract CreateAssetSet(
    request: CAssetSetPublishing_CreateAssetSet_Request,
  ): Promise<CAssetSetPublishing_CreateAssetSet_Response>;
  abstract DeleteAssetSet(
    request: CAssetSetPublishing_DeleteAssetSet_Request,
  ): Promise<CAssetSetPublishing_DeleteAssetSet_Response>;
  abstract GetAllAssetSets(
    request: CAssetSetPublishing_GetAllAssetSets_Request,
  ): Promise<CAssetSetPublishing_GetAllAssetSets_Response>;
  abstract RemoveBranchFromAssetSet(
    request: CAssetSetPublishing_RemoveBranchFromAssetSet_Request,
  ): Promise<CAssetSetPublishing_RemoseBranchFromAssetSet_Response>;
  abstract SwapAssetSetPriority(
    request: CAssetSetPublishing_SwapAssetSetPriority_Request,
  ): Promise<CAssetSetPublishing_SwapAssetSetPriority_Response>;
  abstract UpdateAssetSet(
    request: CAssetSetPublishing_UpdateAssetSet_Request,
  ): Promise<CAssetSetPublishing_UpdateAssetSet_Response>;
  abstract UpdatePublishTime(
    request: CAssetSetPublishing_UpdatePublishTime_Request,
  ): Promise<CAssetSetPublishing_UpdatePublishTime_Response>;
}
