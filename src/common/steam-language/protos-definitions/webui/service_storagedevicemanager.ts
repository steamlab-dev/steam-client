/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CStorageDeviceManager_Adopt_Request {
  drive_id?: number;
  label?: string;
  validate?: boolean;
}

export type CStorageDeviceManager_Adopt_Response = Record<string, never>;

export interface CStorageDeviceManager_Eject_Request {
  drive_id?: number;
}

export type CStorageDeviceManager_Eject_Response = Record<string, never>;

export interface CStorageDeviceManager_Format_Request {
  block_device_id?: number;
}

export type CStorageDeviceManager_Format_Response = Record<string, never>;

export type CStorageDeviceManager_GetState_Request = Record<string, never>;

export interface CStorageDeviceManager_GetState_Response {
  state?: CStorageDeviceManagerState;
}

export type CStorageDeviceManager_IsServiceAvailable_Request = Record<string, never>;

export interface CStorageDeviceManager_IsServiceAvailable_Response {
  is_available?: boolean;
}

export type CStorageDeviceManager_StateChanged_Notification = Record<string, never>;

export type CStorageDeviceManager_TrimAll_Request = Record<string, never>;

export type CStorageDeviceManager_TrimAll_Response = Record<string, never>;

export interface CStorageDeviceManager_Unmount_Request {
  block_device_id?: number;
}

export type CStorageDeviceManager_Unmount_Response = Record<string, never>;

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
  content_type?: number;
  filesystem_type?: number;
  mount_paths?: string[];
  is_unmounting?: boolean;
  has_steam_library?: boolean;
}

export interface CStorageDeviceManagerDrive {
  id?: number;
  model?: string;
  vendor?: string;
  serial?: string;
  is_ejectable?: boolean;
  size_bytes?: Long;
  media_type?: number;
  is_unformatted?: boolean;
  adopt_stage?: number;
  is_formattable?: boolean;
  is_media_available?: boolean;
}

export interface CStorageDeviceManagerState {
  drives?: CStorageDeviceManagerDrive[];
  block_devices?: CStorageDeviceManagerBlockDevice[];
  is_unmount_supported?: boolean;
  is_trim_supported?: boolean;
  is_trim_running?: boolean;
  is_adopt_supported?: boolean;
}

export abstract class StorageDeviceManagerService {
  abstract Adopt(
    request: CStorageDeviceManager_Adopt_Request,
  ): Promise<CStorageDeviceManager_Adopt_Response>;
  abstract Eject(
    request: CStorageDeviceManager_Eject_Request,
  ): Promise<CStorageDeviceManager_Eject_Response>;
  abstract Format(
    request: CStorageDeviceManager_Format_Request,
  ): Promise<CStorageDeviceManager_Format_Response>;
  abstract GetState(
    request: CStorageDeviceManager_GetState_Request,
  ): Promise<CStorageDeviceManager_GetState_Response>;
  abstract IsServiceAvailable(
    request: CStorageDeviceManager_IsServiceAvailable_Request,
  ): Promise<CStorageDeviceManager_IsServiceAvailable_Response>;
  abstract NotifyStateChanged(
    request: CStorageDeviceManager_StateChanged_Notification,
  ): Promise<void>;
  abstract TrimAll(
    request: CStorageDeviceManager_TrimAll_Request,
  ): Promise<CStorageDeviceManager_TrimAll_Response>;
  abstract Unmount(
    request: CStorageDeviceManager_Unmount_Request,
  ): Promise<CStorageDeviceManager_Unmount_Response>;
}
