/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  EStorageBlockContentType,
  EStorageBlockFileSystemType,
  EStorageDriveMediaType,
  EStorageFormatStage,
} from "./enums";
import type { WebUINoResponse } from "./webuimessages_base";

export type CStorageDeviceManager_IsServiceAvailable_Request = Record<string, never>;

export interface CStorageDeviceManager_IsServiceAvailable_Response {
  is_available?: boolean;
}

export interface CStorageDeviceManagerDrive {
  id?: number;
  model?: string;
  vendor?: string;
  serial?: string;
  is_ejectable?: boolean;
  size_bytes?: Long;
  media_type?: EStorageDriveMediaType;
  is_unformatted?: boolean;
  adopt_stage?: EStorageFormatStage;
  is_formattable?: boolean;
  is_media_available?: boolean;
}

export interface CStorageDeviceManagerBlockDevice {
  id?: number;
  drive_id?: number;
  path?: string;
  friendly_path?: string;
  label?: string;
  size_bytes?: Long;
  is_formattable?: boolean;
  is_read_only?: boolean;
  is_root_device?: boolean;
  content_type?: EStorageBlockContentType;
  filesystem_type?: EStorageBlockFileSystemType;
  mount_paths?: string[];
  is_unmounting?: boolean;
  has_steam_library?: boolean;
}

export interface CStorageDeviceManagerState {
  drives?: CStorageDeviceManagerDrive[];
  block_devices?: CStorageDeviceManagerBlockDevice[];
  is_unmount_supported?: boolean;
  is_trim_supported?: boolean;
  is_trim_running?: boolean;
  is_adopt_supported?: boolean;
}

export type CStorageDeviceManager_GetState_Request = Record<string, never>;

export interface CStorageDeviceManager_GetState_Response {
  state?: CStorageDeviceManagerState;
}

export type CStorageDeviceManager_StateChanged_Notification = Record<string, never>;

export interface CStorageDeviceManager_Eject_Request {
  drive_id?: number;
}

export type CStorageDeviceManager_Eject_Response = Record<string, never>;

export interface CStorageDeviceManager_Adopt_Request {
  drive_id?: number;
  label?: string;
  validate?: boolean;
}

export type CStorageDeviceManager_Adopt_Response = Record<string, never>;

export interface CStorageDeviceManager_Format_Request {
  block_device_id?: number;
}

export type CStorageDeviceManager_Format_Response = Record<string, never>;

export interface CStorageDeviceManager_Unmount_Request {
  block_device_id?: number;
}

export type CStorageDeviceManager_Unmount_Response = Record<string, never>;

export type CStorageDeviceManager_TrimAll_Request = Record<string, never>;

export type CStorageDeviceManager_TrimAll_Response = Record<string, never>;

export abstract class StorageDeviceManagerService {
  abstract IsServiceAvailable(
    request: CStorageDeviceManager_IsServiceAvailable_Request,
  ): Promise<CStorageDeviceManager_IsServiceAvailable_Response>;
  abstract GetState(
    request: CStorageDeviceManager_GetState_Request,
  ): Promise<CStorageDeviceManager_GetState_Response>;
  abstract NotifyStateChanged(
    request: CStorageDeviceManager_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract Adopt(
    request: CStorageDeviceManager_Adopt_Request,
  ): Promise<CStorageDeviceManager_Adopt_Response>;
  abstract Eject(
    request: CStorageDeviceManager_Eject_Request,
  ): Promise<CStorageDeviceManager_Eject_Response>;
  abstract Format(
    request: CStorageDeviceManager_Format_Request,
  ): Promise<CStorageDeviceManager_Format_Response>;
  abstract Unmount(
    request: CStorageDeviceManager_Unmount_Request,
  ): Promise<CStorageDeviceManager_Unmount_Response>;
  abstract TrimAll(
    request: CStorageDeviceManager_TrimAll_Request,
  ): Promise<CStorageDeviceManager_TrimAll_Response>;
}
