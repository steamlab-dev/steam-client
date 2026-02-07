/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CContentBuilder_InitDepotBuild_Request {
  appid?: number;
  depotid?: number;
  workshop_itemid?: Long;
  for_local_cs?: boolean;
  target_branch?: string;
  shader_depot?: boolean;
  baseline_manifest_id?: Long;
}

export interface CContentBuilder_InitDepotBuild_Response {
  baseline_manifestid?: Long;
  chunk_size?: number;
  aes_key?: Buffer;
  rsa_key?: Buffer;
  deprecated_url_host?: string;
  offset_detection_enabled?: boolean;
  offset_detection_min_clean_chunk?: number;
  offset_detection_blast_radius_pre?: number;
  offset_detection_blast_radius_post?: number;
  offset_detection_max_distance_pre?: number;
  offset_detection_max_distance_post?: number;
  compression_method?: number;
  download_host?: string;
  manifest_request_code?: Long;
  chunk_upload_host?: string;
  manifest_upload_host?: string;
}

export interface CContentBuilder_StartDepotUpload_Request {
  appid?: number;
  depotid?: number;
  workshop_itemid?: Long;
  for_local_cs?: boolean;
  baseline_manifestid?: Long;
  manifest_size?: number;
}

export interface CContentBuilder_StartDepotUpload_Response {
  depot_build_handle?: Long;
}

export interface CContentBuilder_GetMissingDepotChunks_Request {
  appid?: number;
  depot_build_handle?: Long;
}

export interface CContentBuilder_GetMissingDepotChunks_Response {
  missing_chunks?: CContentBuilder_GetMissingDepotChunks_Response.Chunks[];
  total_missing_chunks?: number;
  total_missing_bytes?: Long;
}

export namespace CContentBuilder_GetMissingDepotChunks_Response {
  export interface Chunks {
    sha?: Buffer;
  }
}

export interface CContentBuilder_FinishDepotUpload_Request {
  appid?: number;
  depot_build_handle?: Long;
}

export interface CContentBuilder_FinishDepotUpload_Response {
  manifestid?: Long;
  prev_reused?: boolean;
  manifest_request_code?: Long;
}

export interface CContentBuilder_CommitAppBuild_Request {
  appid?: number;
  depot_manifests?: CContentBuilder_CommitAppBuild_Request.Depots[];
  build_notes?: string;
  live_branch?: string;
  for_local_cs?: boolean;
  web_upload?: boolean;
}

export namespace CContentBuilder_CommitAppBuild_Request {
  export interface Depots {
    depotid?: number;
    manifestid?: Long;
  }
}

export interface CContentBuilder_CommitAppBuild_Response {
  buildid?: number;
}

export interface CContentBuilder_SignInstallScript_Request {
  appid?: number;
  depotid?: number;
  install_script?: string;
}

export interface CContentBuilder_SignInstallScript_Response {
  signed_install_script?: string;
}

export abstract class ContentBuilderService {
  abstract InitDepotBuild(
    request: CContentBuilder_InitDepotBuild_Request,
  ): Promise<CContentBuilder_InitDepotBuild_Response>;
  abstract StartDepotUpload(
    request: CContentBuilder_StartDepotUpload_Request,
  ): Promise<CContentBuilder_StartDepotUpload_Response>;
  abstract GetMissingDepotChunks(
    request: CContentBuilder_GetMissingDepotChunks_Request,
  ): Promise<CContentBuilder_GetMissingDepotChunks_Response>;
  abstract FinishDepotUpload(
    request: CContentBuilder_FinishDepotUpload_Request,
  ): Promise<CContentBuilder_FinishDepotUpload_Response>;
  abstract CommitAppBuild(
    request: CContentBuilder_CommitAppBuild_Request,
  ): Promise<CContentBuilder_CommitAppBuild_Response>;
  abstract SignInstallScript(
    request: CContentBuilder_SignInstallScript_Request,
  ): Promise<CContentBuilder_SignInstallScript_Response>;
}
