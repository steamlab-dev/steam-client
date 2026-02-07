/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { EBluetoothDeviceType } from "./enums";
import type { WebUINoResponse } from "./webuimessages_base";

export type CBluetoothManager_GetState_Request = Record<string, never>;

export interface CMsgBluetoothManagerAdapterInfo {
  id?: number;
}

export interface CMsgBluetoothManagerDeviceInfo {
  id?: number;
  should_hide_hint?: boolean;
  etype?: EBluetoothDeviceType;
  is_connected?: boolean;
  is_paired?: boolean;
  strength_raw?: number;
}

export interface CBluetoothManager_GetState_Response {
  is_service_available?: boolean;
  is_enabled?: boolean;
  is_discovering?: boolean;
  adapters?: CMsgBluetoothManagerAdapterInfo[];
  devices?: CMsgBluetoothManagerDeviceInfo[];
}

export interface CBluetoothManager_GetAdapterDetails_Request {
  id?: number;
}

export interface CMsgBluetoothManagerAdapterDetails {
  id?: number;
  mac?: string;
  name?: string;
  is_enabled?: boolean;
  is_discovering?: boolean;
}

export interface CBluetoothManager_GetAdapterDetails_Response {
  adapter?: CMsgBluetoothManagerAdapterDetails;
}

export interface CBluetoothManager_GetDeviceDetails_Request {
  id?: number;
}

export interface CMsgBluetoothManagerDeviceDetails {
  id?: number;
  adapter_id?: number;
  etype?: EBluetoothDeviceType;
  mac?: string;
  name?: string;
  is_connected?: boolean;
  is_paired?: boolean;
  is_pairing?: boolean;
  wake_allowed?: boolean;
  wake_allowed_supported?: boolean;
  battery_percent?: number;
  operation_in_progress?: boolean;
  is_trusted?: boolean;
}

export interface CBluetoothManager_GetDeviceDetails_Response {
  device?: CMsgBluetoothManagerDeviceDetails;
}

export type CBluetoothManager_StateChanged_Notification = Record<string, never>;

export interface CBluetoothManager_SetDiscovering_Request {
  enabled?: boolean;
}

export type CBluetoothManager_SetDiscovering_Response = Record<string, never>;

export interface CBluetoothManager_SetLoginAdvertising_Request {
  enabled?: boolean;
  client_id?: Long;
  device_id?: number;
}

export type CBluetoothManager_SetLoginAdvertising_Response = Record<string, never>;

export interface CBluetoothManager_Pair_Request {
  device?: number;
}

export type CBluetoothManager_Pair_Response = Record<string, never>;

export interface CBluetoothManager_CancelPair_Request {
  device?: number;
}

export type CBluetoothManager_CancelPair_Response = Record<string, never>;

export interface CBluetoothManager_Forget_Request {
  device?: number;
}

export type CBluetoothManager_Forget_Response = Record<string, never>;

export interface CBluetoothManager_Connect_Request {
  device?: number;
}

export type CBluetoothManager_Connect_Response = Record<string, never>;

export interface CBluetoothManager_Disconnect_Request {
  device?: number;
}

export type CBluetoothManager_Disconnect_Response = Record<string, never>;

export interface CBluetoothManager_SetWakeAllowed_Request {
  device?: number;
  allowed?: boolean;
}

export type CBluetoothManager_SetWakeAllowed_Response = Record<string, never>;

export interface CBluetoothManager_SetTrusted_Request {
  device?: number;
  trusted?: boolean;
}

export type CBluetoothManager_SetTrusted_Response = Record<string, never>;

export abstract class BluetoothManagerService {
  abstract GetState(
    request: CBluetoothManager_GetState_Request,
  ): Promise<CBluetoothManager_GetState_Response>;
  abstract GetAdapterDetails(
    request: CBluetoothManager_GetAdapterDetails_Request,
  ): Promise<CBluetoothManager_GetAdapterDetails_Response>;
  abstract GetDeviceDetails(
    request: CBluetoothManager_GetDeviceDetails_Request,
  ): Promise<CBluetoothManager_GetDeviceDetails_Response>;
  abstract NotifyStateChanged(
    request: CBluetoothManager_StateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract SetDiscovering(
    request: CBluetoothManager_SetDiscovering_Request,
  ): Promise<CBluetoothManager_SetDiscovering_Response>;
  abstract SetLoginAdvertising(
    request: CBluetoothManager_SetLoginAdvertising_Request,
  ): Promise<CBluetoothManager_SetLoginAdvertising_Response>;
  abstract Pair(request: CBluetoothManager_Pair_Request): Promise<CBluetoothManager_Pair_Response>;
  abstract CancelPair(
    request: CBluetoothManager_CancelPair_Request,
  ): Promise<CBluetoothManager_CancelPair_Response>;
  abstract Forget(
    request: CBluetoothManager_Forget_Request,
  ): Promise<CBluetoothManager_Forget_Response>;
  abstract Connect(
    request: CBluetoothManager_Connect_Request,
  ): Promise<CBluetoothManager_Connect_Response>;
  abstract Disconnect(
    request: CBluetoothManager_Disconnect_Request,
  ): Promise<CBluetoothManager_Disconnect_Response>;
  abstract SetWakeAllowed(
    request: CBluetoothManager_SetWakeAllowed_Request,
  ): Promise<CBluetoothManager_SetWakeAllowed_Response>;
  abstract SetTrusted(
    request: CBluetoothManager_SetTrusted_Request,
  ): Promise<CBluetoothManager_SetTrusted_Response>;
}
