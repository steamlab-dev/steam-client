/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CBuildManagement_SetAppBuildSortOrder_Request {
  appid?: number;
  betakeys?: string[];
}

export type CBuildManagement_SetAppBuildSortOrder_Response = Record<string, never>;

export interface CMDSAdmin_AppBuildUpdated_Notification {
  appid?: number;
  buildid?: number;
}

export interface CMDSAdmin_AppContentPurge_Request {
  app_id?: number;
}

export type CMDSAdmin_AppContentPurge_Response = Record<string, never>;

export interface CMDSAdmin_AppContentPurgeStatus_Request {
  app_id?: number;
}

export interface CMDSAdmin_AppContentPurgeStatus_Response {
  app_id?: number;
  status?: number;
  accountid_requester?: number;
  accountid_confirmer?: number;
  time_requested?: Long;
  time_confirmed?: Long;
  time_ended?: Long;
}

export interface CMDSAdmin_BeginOriginMigrationJob_Request {
  depot_id?: number;
  allow_creating_new_migration?: boolean;
  restart_migration?: boolean;
}

export type CMDSAdmin_BeginOriginMigrationJob_Response = Record<string, never>;

export interface CMDSAdmin_CSPurgeDepot_Notification {
  depot_id?: number;
}

export interface CMDSAdmin_DepotDownloadBytesInfo {
  depotid?: number;
  parentappid?: number;
  oslist?: string;
}

export interface CMDSAdmin_GetDepotDownloadBytes_Request {
  depots?: CMDSAdmin_DepotDownloadBytesInfo[];
}

export interface CMDSAdmin_GetDepotDownloadBytes_Response {
  windows?: Long;
  macos?: Long;
  linux?: Long;
}

export interface CMDSAdmin_InvalidateDepotMetadata_Notification {
  depotid?: number;
  sysid_sender?: number;
  manifestid?: Long;
}

export interface CMDSAdmin_ManifestAppBranchInfo_Request {
  appid?: number;
  depot_id?: number;
  manifest_id?: Long;
  branch?: string;
}

export interface CMDSAdmin_ManifestAppBranchInfo_Response {
  manifest_part_of_app_branch?: boolean;
  app_was_released_or_is_current_build?: boolean;
  time_most_recent_release?: Long;
}

export interface CMDSAdmin_MDSFlushDepotCache_Notification {
  depot_id?: number;
}

export interface CMDSAdmin_MDSFlushManifestVersion_Notification {
  depot_id?: number;
  manifestid?: Long;
}

export interface CMDSAdmin_NewChunkAnnouncement_Notification {
  depot_id?: number;
  sha?: Buffer;
}

export type CMDSAdmin_ReloadOriginStorageInfo_Notification = Record<string, never>;

export abstract class MDSAdminService {
  abstract AppBuildUpdated(request: CMDSAdmin_AppBuildUpdated_Notification): Promise<void>;
  abstract BeginOriginMigrationJob(
    request: CMDSAdmin_BeginOriginMigrationJob_Request,
  ): Promise<CMDSAdmin_BeginOriginMigrationJob_Response>;
  abstract CSPurgeDepot(request: CMDSAdmin_CSPurgeDepot_Notification): Promise<void>;
  abstract GetAppContentPurgeStatus(
    request: CMDSAdmin_AppContentPurgeStatus_Request,
  ): Promise<CMDSAdmin_AppContentPurgeStatus_Response>;
  abstract GetDepotDownloadBytes(
    request: CMDSAdmin_GetDepotDownloadBytes_Request,
  ): Promise<CMDSAdmin_GetDepotDownloadBytes_Response>;
  abstract GetManifestAppBranchInfo(
    request: CMDSAdmin_ManifestAppBranchInfo_Request,
  ): Promise<CMDSAdmin_ManifestAppBranchInfo_Response>;
  abstract InvalidateDepotMetadata(
    request: CMDSAdmin_InvalidateDepotMetadata_Notification,
  ): Promise<void>;
  abstract MDSFlushDepotCache(request: CMDSAdmin_MDSFlushDepotCache_Notification): Promise<void>;
  abstract MDSFlushManifestVersion(
    request: CMDSAdmin_MDSFlushManifestVersion_Notification,
  ): Promise<void>;
  abstract NewChunkAnnouncement(
    request: CMDSAdmin_NewChunkAnnouncement_Notification,
  ): Promise<void>;
  abstract ReloadOriginStorageInfo(
    request: CMDSAdmin_ReloadOriginStorageInfo_Notification,
  ): Promise<void>;
  abstract RequestAppContentPurge(
    request: CMDSAdmin_AppContentPurge_Request,
  ): Promise<CMDSAdmin_AppContentPurge_Response>;
  abstract SetAppBuildSortOrder(
    request: CBuildManagement_SetAppBuildSortOrder_Request,
  ): Promise<CBuildManagement_SetAppBuildSortOrder_Response>;
}
