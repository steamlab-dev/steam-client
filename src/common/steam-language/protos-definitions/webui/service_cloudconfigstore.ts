/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CCloudConfigStore_Change_Notification {
  versions?: CCloudConfigStore_NamespaceVersion[];
}

export interface CCloudConfigStore_Download_Request {
  versions?: CCloudConfigStore_NamespaceVersion[];
}

export interface CCloudConfigStore_Download_Response {
  data?: CCloudConfigStore_NamespaceData[];
}

export interface CCloudConfigStore_Entry {
  key?: string;
  is_deleted?: boolean;
  value?: string;
  timestamp?: number;
  version?: bigint;
}

export interface CCloudConfigStore_NamespaceData {
  enamespace?: number;
  version?: bigint;
  entries?: CCloudConfigStore_Entry[];
  horizon?: bigint;
}

export interface CCloudConfigStore_NamespaceVersion {
  enamespace?: number;
  version?: bigint;
}

export interface CCloudConfigStore_Upload_Request {
  data?: CCloudConfigStore_NamespaceData[];
}

export interface CCloudConfigStore_Upload_Response {
  versions?: CCloudConfigStore_NamespaceVersion[];
}

export abstract class CloudConfigStoreService {
  abstract Download(
    request: CCloudConfigStore_Download_Request,
  ): Promise<CCloudConfigStore_Download_Response>;
  abstract Upload(
    request: CCloudConfigStore_Upload_Request,
  ): Promise<CCloudConfigStore_Upload_Response>;
}

export abstract class CloudConfigStoreClientService {
  abstract NotifyChange(request: CCloudConfigStore_Change_Notification): Promise<void>;
}
