/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { ECloudStoragePersistState, EPublishedFileStorageSystem } from "./enums";
import type { CCloud_PendingRemoteOperation } from "./steammessages_client_objects";

export interface CCloud_ClientLogUploadCheck_Notification {
  client_id?: Long;
}

export interface CCloud_ClientLogUploadComplete_Notification {
  client_id?: Long;
  request_id?: Long;
}

export interface CCloud_BeginHTTPUpload_Request {
  appid?: number;
  file_size?: number;
  filename?: string;
  file_sha?: string;
  is_public?: boolean;
  platforms_to_sync?: string[];
  request_headers_names?: string[];
  request_headers_values?: string[];
  upload_batch_id?: Long;
}

export interface CCloud_BeginHTTPUpload_Response {
  ugcid?: Long;
  timestamp?: number;
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  request_headers?: CCloud_BeginHTTPUpload_Response.HTTPHeaders[];
}

export namespace CCloud_BeginHTTPUpload_Response {
  export interface HTTPHeaders {
    name?: string;
    value?: string;
  }
}

export interface CCloud_CommitHTTPUpload_Request {
  transfer_succeeded?: boolean;
  appid?: number;
  file_sha?: string;
  filename?: string;
}

export interface CCloud_CommitHTTPUpload_Response {
  file_committed?: boolean;
}

export interface CCloud_BeginUGCUpload_Request {
  appid?: number;
  file_size?: number;
  filename?: string;
  file_sha?: string;
  content_type?: string;
}

export interface CCloud_BeginUGCUpload_Response {
  storage_system?: EPublishedFileStorageSystem;
  ugcid?: Long;
  timestamp?: number;
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  request_headers?: CCloud_BeginUGCUpload_Response.HTTPHeaders[];
}

export namespace CCloud_BeginUGCUpload_Response {
  export interface HTTPHeaders {
    name?: string;
    value?: string;
  }
}

export interface CCloud_CommitUGCUpload_Request {
  transfer_succeeded?: boolean;
  appid?: number;
  ugcid?: Long;
}

export interface CCloud_CommitUGCUpload_Response {
  file_committed?: boolean;
}

export interface CCloud_GetFileDetails_Request {
  ugcid?: Long;
  appid?: number;
}

export interface CCloud_UserFile {
  appid?: number;
  ugcid?: Long;
  filename?: string;
  timestamp?: Long;
  file_size?: number;
  url?: string;
  steamid_creator?: Long;
  flags?: number;
  platforms_to_sync?: string[];
  file_sha?: string;
  compressed_file_size?: number;
}

export interface CCloud_GetFileDetails_Response {
  details?: CCloud_UserFile;
  rangecheck_host?: string;
}

export interface CCloud_GetSingleFileInfo_Request {
  app_id?: number;
  file_name?: string;
}

export interface CCloud_GetSingleFileInfo_Response {
  app_id?: number;
  file_name?: string;
  sha_file?: Buffer;
  time_stamp?: Long;
  raw_file_size?: number;
  is_explicit_delete?: boolean;
}

export interface CCloud_ShareFile_Request {
  app_id?: number;
  file_name?: string;
}

export interface CCloud_ShareFile_Response {
  hcontent?: Long;
}

export interface CCloud_EnumerateUserFiles_Request {
  appid?: number;
  extended_details?: boolean;
  count?: number;
  start_index?: number;
}

export interface CCloud_EnumerateUserFiles_Response {
  files?: CCloud_UserFile[];
  total_files?: number;
}

export interface CCloud_Delete_Request {
  filename?: string;
  appid?: number;
  upload_batch_id?: Long;
}

export type CCloud_Delete_Response = Record<string, never>;

export type CCloud_GetClientEncryptionKey_Request = Record<string, never>;

export interface CCloud_GetClientEncryptionKey_Response {
  key?: Buffer;
  crc?: number;
}

export interface CCloud_CDNReport_Notification {
  steamid?: Long;
  url?: string;
  success?: boolean;
  http_status_code?: number;
  expected_bytes?: Long;
  received_bytes?: Long;
  duration?: number;
}

export interface CCloud_ExternalStorageTransferReport_Notification {
  host?: string;
  path?: string;
  is_upload?: boolean;
  success?: boolean;
  http_status_code?: number;
  bytes_expected?: Long;
  bytes_actual?: Long;
  duration_ms?: number;
  cellid?: number;
  proxied?: boolean;
  ipv6_local?: boolean;
  ipv6_remote?: boolean;
  time_to_connect_ms?: number;
  time_to_send_req_ms?: number;
  time_to_first_byte_ms?: number;
  time_to_last_byte_ms?: number;
}

export interface CCloud_BeginAppUploadBatch_Request {
  appid?: number;
  machine_name?: string;
  files_to_upload?: string[];
  files_to_delete?: string[];
  client_id?: Long;
  app_build_id?: Long;
}

export interface CCloud_BeginAppUploadBatch_Response {
  batch_id?: Long;
  app_change_number?: Long;
}

export interface CCloud_CompleteAppUploadBatch_Notification {
  appid?: number;
  batch_id?: Long;
  batch_eresult?: number;
}

export interface CCloud_CompleteAppUploadBatch_Request {
  appid?: number;
  batch_id?: Long;
  batch_eresult?: number;
}

export type CCloud_CompleteAppUploadBatch_Response = Record<string, never>;

export interface CCloud_ClientBeginFileUpload_Request {
  appid?: number;
  file_size?: number;
  raw_file_size?: number;
  file_sha?: Buffer;
  time_stamp?: Long;
  filename?: string;
  platforms_to_sync?: number;
  cell_id?: number;
  can_encrypt?: boolean;
  is_shared_file?: boolean;
  deprecated_realm?: number;
  upload_batch_id?: Long;
}

export interface ClientCloudFileUploadBlockDetails {
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  http_method?: number;
  request_headers?: ClientCloudFileUploadBlockDetails.HTTPHeaders[];
  block_offset?: Long;
  block_length?: number;
  explicit_body_data?: Buffer;
  may_parallelize?: boolean;
}

export namespace ClientCloudFileUploadBlockDetails {
  export interface HTTPHeaders {
    name?: string;
    value?: string;
  }
}

export interface CCloud_ClientBeginFileUpload_Response {
  encrypt_file?: boolean;
  block_requests?: ClientCloudFileUploadBlockDetails[];
}

export interface CCloud_ClientCommitFileUpload_Request {
  transfer_succeeded?: boolean;
  appid?: number;
  file_sha?: Buffer;
  filename?: string;
}

export interface CCloud_ClientCommitFileUpload_Response {
  file_committed?: boolean;
}

export interface CCloud_ClientFileDownload_Request {
  appid?: number;
  filename?: string;
  realm?: number;
  force_proxy?: boolean;
}

export interface CCloud_ClientFileDownload_Response {
  appid?: number;
  file_size?: number;
  raw_file_size?: number;
  sha_file?: Buffer;
  time_stamp?: Long;
  is_explicit_delete?: boolean;
  url_host?: string;
  url_path?: string;
  use_https?: boolean;
  request_headers?: CCloud_ClientFileDownload_Response.HTTPHeaders[];
  encrypted?: boolean;
}

export namespace CCloud_ClientFileDownload_Response {
  export interface HTTPHeaders {
    name?: string;
    value?: string;
  }
}

export interface CCloud_ClientDeleteFile_Request {
  appid?: number;
  filename?: string;
  is_explicit_delete?: boolean;
  upload_batch_id?: Long;
}

export type CCloud_ClientDeleteFile_Response = Record<string, never>;

export interface CCloud_ClientConflictResolution_Notification {
  appid?: number;
  chose_local_files?: boolean;
}

export interface CCloud_GetAppFileChangelist_Request {
  appid?: number;
  synced_change_number?: Long;
}

export interface CCloud_AppFileInfo {
  file_name?: string;
  sha_file?: Buffer;
  time_stamp?: Long;
  raw_file_size?: number;
  persist_state?: ECloudStoragePersistState;
  platforms_to_sync?: number;
  path_prefix_index?: number;
  machine_name_index?: number;
}

export interface CCloud_GetAppFileChangelist_Response {
  current_change_number?: Long;
  files?: CCloud_AppFileInfo[];
  is_only_delta?: boolean;
  path_prefixes?: string[];
  machine_names?: string[];
  app_buildid_hwm?: Long;
}

export interface CCloud_AppSessionSuspend_Request {
  appid?: number;
  client_id?: Long;
  machine_name?: string;
  cloud_sync_completed?: boolean;
}

export type CCloud_AppSessionSuspend_Response = Record<string, never>;

export interface CCloud_AppSessionResume_Request {
  appid?: number;
  client_id?: Long;
}

export type CCloud_AppSessionResume_Response = Record<string, never>;

export interface CCloud_AppLaunchIntent_Request {
  appid?: number;
  client_id?: Long;
  machine_name?: string;
  ignore_pending_operations?: boolean;
  os_type?: number;
  device_type?: number;
}

export interface CCloud_AppLaunchIntent_Response {
  pending_remote_operations?: CCloud_PendingRemoteOperation[];
}

export interface CCloud_AppExitSyncDone_Notification {
  appid?: number;
  client_id?: Long;
  uploads_completed?: boolean;
  uploads_required?: boolean;
}

export interface CCloud_ClientGetAppQuotaUsage_Request {
  appid?: number;
}

export interface CCloud_ClientGetAppQuotaUsage_Response {
  existing_files?: number;
  existing_bytes?: Long;
  max_num_files?: number;
  max_num_bytes?: Long;
}

export interface CCloud_AppCloudStateChange_Notification {
  appid?: number;
  app_change_number?: Long;
}

export interface CCloud_ClientLogUploadRequest_Notification {
  request_id?: Long;
}

export abstract class CloudService {
  abstract ClientLogUploadCheck(request: CCloud_ClientLogUploadCheck_Notification): Promise<void>;
  abstract ClientLogUploadComplete(
    request: CCloud_ClientLogUploadComplete_Notification,
  ): Promise<void>;
  abstract BeginHTTPUpload(
    request: CCloud_BeginHTTPUpload_Request,
  ): Promise<CCloud_BeginHTTPUpload_Response>;
  abstract CommitHTTPUpload(
    request: CCloud_CommitHTTPUpload_Request,
  ): Promise<CCloud_CommitHTTPUpload_Response>;
  abstract BeginUGCUpload(
    request: CCloud_BeginUGCUpload_Request,
  ): Promise<CCloud_BeginUGCUpload_Response>;
  abstract CommitUGCUpload(
    request: CCloud_CommitUGCUpload_Request,
  ): Promise<CCloud_CommitUGCUpload_Response>;
  abstract GetFileDetails(
    request: CCloud_GetFileDetails_Request,
  ): Promise<CCloud_GetFileDetails_Response>;
  abstract GetSingleFileInfo(
    request: CCloud_GetSingleFileInfo_Request,
  ): Promise<CCloud_GetSingleFileInfo_Response>;
  abstract ShareFile(request: CCloud_ShareFile_Request): Promise<CCloud_ShareFile_Response>;
  abstract EnumerateUserFiles(
    request: CCloud_EnumerateUserFiles_Request,
  ): Promise<CCloud_EnumerateUserFiles_Response>;
  abstract Delete(request: CCloud_Delete_Request): Promise<CCloud_Delete_Response>;
  abstract GetClientEncryptionKey(
    request: CCloud_GetClientEncryptionKey_Request,
  ): Promise<CCloud_GetClientEncryptionKey_Response>;
  abstract CDNReport(request: CCloud_CDNReport_Notification): Promise<void>;
  abstract ExternalStorageTransferReport(
    request: CCloud_ExternalStorageTransferReport_Notification,
  ): Promise<void>;
  abstract BeginAppUploadBatch(
    request: CCloud_BeginAppUploadBatch_Request,
  ): Promise<CCloud_BeginAppUploadBatch_Response>;
  abstract CompleteAppUploadBatch(
    request: CCloud_CompleteAppUploadBatch_Notification,
  ): Promise<void>;
  abstract CompleteAppUploadBatchBlocking(
    request: CCloud_CompleteAppUploadBatch_Request,
  ): Promise<CCloud_CompleteAppUploadBatch_Response>;
  abstract ClientBeginFileUpload(
    request: CCloud_ClientBeginFileUpload_Request,
  ): Promise<CCloud_ClientBeginFileUpload_Response>;
  abstract ClientCommitFileUpload(
    request: CCloud_ClientCommitFileUpload_Request,
  ): Promise<CCloud_ClientCommitFileUpload_Response>;
  abstract ClientFileDownload(
    request: CCloud_ClientFileDownload_Request,
  ): Promise<CCloud_ClientFileDownload_Response>;
  abstract ClientDeleteFile(
    request: CCloud_ClientDeleteFile_Request,
  ): Promise<CCloud_ClientDeleteFile_Response>;
  abstract ClientConflictResolution(
    request: CCloud_ClientConflictResolution_Notification,
  ): Promise<void>;
  abstract GetAppFileChangelist(
    request: CCloud_GetAppFileChangelist_Request,
  ): Promise<CCloud_GetAppFileChangelist_Response>;
  abstract SuspendAppSession(
    request: CCloud_AppSessionSuspend_Request,
  ): Promise<CCloud_AppSessionSuspend_Response>;
  abstract ResumeAppSession(
    request: CCloud_AppSessionResume_Request,
  ): Promise<CCloud_AppSessionResume_Response>;
  abstract SignalAppLaunchIntent(
    request: CCloud_AppLaunchIntent_Request,
  ): Promise<CCloud_AppLaunchIntent_Response>;
  abstract SignalAppExitSyncDone(request: CCloud_AppExitSyncDone_Notification): Promise<void>;
  abstract ClientGetAppQuotaUsage(
    request: CCloud_ClientGetAppQuotaUsage_Request,
  ): Promise<CCloud_ClientGetAppQuotaUsage_Response>;
}

export abstract class CloudClientService {
  abstract NotifyAppStateChange(request: CCloud_AppCloudStateChange_Notification): Promise<void>;
  abstract ClientLogUploadRequest(
    request: CCloud_ClientLogUploadRequest_Notification,
  ): Promise<void>;
}
