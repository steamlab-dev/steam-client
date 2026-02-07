/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CPartnerApps_RequestUploadToken_Request {
  filename?: string;
  appid?: number;
}

export interface CPartnerApps_RequestUploadToken_Response {
  upload_token?: Long;
  location?: string;
  routing_id?: Long;
}

export interface CPartnerApps_FinishUpload_Request {
  upload_token?: Long;
  routing_id?: Long;
  app_id?: number;
}

export interface CPartnerApps_FinishUploadKVSign_Response {
  signed_installscript?: string;
}

export interface CPartnerApps_FinishUploadLegacyDRM_Request {
  upload_token?: Long;
  routing_id?: Long;
  app_id?: number;
  flags?: number;
  tool_name?: string;
  use_cloud?: boolean;
}

export interface CPartnerApps_FinishUploadLegacyDRM_Response {
  file_id?: string;
}

export type CPartnerApps_FinishUpload_Response = Record<string, never>;

export interface CPartnerApps_FinishUploadDepot_Request {
  upload_token?: Long;
  routing_id?: Long;
  app_id?: number;
  depot_id?: number;
  build_flags?: number;
}

export interface CPartnerApps_FinishUploadDepot_Response {
  build_routing_id?: Long;
}

export interface CPartnerApps_GetDepotBuildResult_Request {
  upload_token?: Long;
  routing_id?: Long;
}

export interface CPartnerApps_GetDepotBuildResult_Response {
  manifest_id?: Long;
  error_msg?: string;
}

export interface CPartnerApps_FindDRMUploads_Request {
  app_id?: number;
}

export interface CPartnerApps_ExistingDRMUpload {
  file_id?: string;
  app_id?: number;
  actor_id?: number;
  supplied_name?: string;
  flags?: number;
  mod_type?: string;
  timestamp?: number;
  orig_file_id?: string;
}

export interface CPartnerApps_FindDRMUploads_Response {
  uploads?: CPartnerApps_ExistingDRMUpload[];
}

export interface CPartnerApps_Download_Request {
  file_id?: string;
  app_id?: number;
}

export interface CPartnerApps_Download_Response {
  download_url?: string;
  app_id?: number;
}

export abstract class PartnerAppsService {
  abstract RequestKVSignUploadToken(
    request: CPartnerApps_RequestUploadToken_Request,
  ): Promise<CPartnerApps_RequestUploadToken_Response>;
  abstract RequestDRMUploadToken(
    request: CPartnerApps_RequestUploadToken_Request,
  ): Promise<CPartnerApps_RequestUploadToken_Response>;
  abstract RequestCEGUploadToken(
    request: CPartnerApps_RequestUploadToken_Request,
  ): Promise<CPartnerApps_RequestUploadToken_Response>;
  abstract RequestDepotUploadToken(
    request: CPartnerApps_RequestUploadToken_Request,
  ): Promise<CPartnerApps_RequestUploadToken_Response>;
  abstract FinishUploadKVSign(
    request: CPartnerApps_FinishUpload_Request,
  ): Promise<CPartnerApps_FinishUploadKVSign_Response>;
  abstract FinishUploadDRMUpload(
    request: CPartnerApps_FinishUploadLegacyDRM_Request,
  ): Promise<CPartnerApps_FinishUploadLegacyDRM_Response>;
  abstract FinishUploadCEGUpload(
    request: CPartnerApps_FinishUpload_Request,
  ): Promise<CPartnerApps_FinishUpload_Response>;
  abstract FinishUploadDepotUpload(
    request: CPartnerApps_FinishUploadDepot_Request,
  ): Promise<CPartnerApps_FinishUploadDepot_Response>;
  abstract GetDepotBuildResult(
    request: CPartnerApps_GetDepotBuildResult_Request,
  ): Promise<CPartnerApps_GetDepotBuildResult_Response>;
  abstract FindDRMUploads(
    request: CPartnerApps_FindDRMUploads_Request,
  ): Promise<CPartnerApps_FindDRMUploads_Response>;
  abstract Download(
    request: CPartnerApps_Download_Request,
  ): Promise<CPartnerApps_Download_Response>;
}
