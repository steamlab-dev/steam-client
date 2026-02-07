/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CClientComm_ClientData {
  package_version?: number;
  os?: string;
  machine_name?: string;
  ip_public?: string;
  ip_private?: string;
  bytes_available?: Long;
  running_games?: CClientComm_ClientData_RunningGames[];
  protocol_version?: number;
  clientcomm_version?: number;
  local_users?: number[];
}

export interface CClientComm_ClientData_RunningGames {
  appid?: number;
  extra_info?: string;
  time_running_sec?: number;
}

export interface CClientComm_EnableOrDisableDownloads_Request {
  client_instanceid?: Long;
  enable?: boolean;
}

export type CClientComm_EnableOrDisableDownloads_Response = Record<string, never>;

export type CClientComm_GetAllClientLogonInfo_Request = Record<string, never>;

export interface CClientComm_GetAllClientLogonInfo_Response {
  sessions?: CClientComm_GetAllClientLogonInfo_Response_Session[];
  refetch_interval_sec?: number;
}

export interface CClientComm_GetAllClientLogonInfo_Response_Session {
  client_instanceid?: Long;
  protocol_version?: number;
  os_name?: string;
  machine_name?: string;
  os_type?: number;
  device_type?: number;
  realm?: number;
}

export interface CClientComm_GetClientAppList_Request {
  fields?: string;
  filters?: string;
  client_instanceid?: Long;
  include_client_info?: boolean;
  language?: string;
  filter_appids?: number[];
}

export interface CClientComm_GetClientAppList_Response {
  bytes_available?: Long;
  apps?: CClientComm_GetClientAppList_Response_AppData[];
  client_info?: CClientComm_ClientData;
  refetch_interval_sec_full?: number;
  refetch_interval_sec_changing?: number;
  refetch_interval_sec_updating?: number;
}

export interface CClientComm_GetClientAppList_Response_AppData {
  appid?: number;
  app?: string;
  category?: string;
  app_type?: string;
  num_downloading?: number;
  bytes_download_rate?: number;
  bytes_downloaded?: Long;
  bytes_to_download?: Long;
  dlcs?: CClientComm_GetClientAppList_Response_AppData_DLCData[];
  favorite?: boolean;
  auto_update?: boolean;
  installed?: boolean;
  download_paused?: boolean;
  changing?: boolean;
  available_on_platform?: boolean;
  bytes_staged?: Long;
  bytes_to_stage?: Long;
  bytes_required?: Long;
  source_buildid?: number;
  target_buildid?: number;
  estimated_seconds_remaining?: number;
  queue_position?: number;
  uninstalling?: boolean;
  rt_time_scheduled?: number;
  running?: boolean;
  update_percentage?: number;
}

export interface CClientComm_GetClientAppList_Response_AppData_DLCData {
  appid?: number;
  app?: string;
  installed?: number;
}

export interface CClientComm_GetClientInfo_Request {
  client_instanceid?: Long;
}

export interface CClientComm_GetClientInfo_Response {
  client_info?: CClientComm_ClientData;
}

export interface CClientComm_GetClientLogonInfo_Request {
  client_instanceid?: Long;
}

export interface CClientComm_GetClientLogonInfo_Response {
  protocol_version?: number;
  os?: string;
  machine_name?: string;
}

export interface CClientComm_InstallClientApp_Request {
  appid?: number;
  client_instanceid?: Long;
}

export type CClientComm_InstallClientApp_Response = Record<string, never>;

export interface CClientComm_LaunchClientApp_Request {
  client_instanceid?: Long;
  appid?: number;
  query_params?: string;
}

export type CClientComm_LaunchClientApp_Response = Record<string, never>;

export interface CClientComm_SetClientAppUpdateState_Request {
  appid?: number;
  action?: number;
  client_instanceid?: Long;
}

export type CClientComm_SetClientAppUpdateState_Response = Record<string, never>;

export interface CClientComm_UninstallClientApp_Request {
  appid?: number;
  client_instanceid?: Long;
}

export type CClientComm_UninstallClientApp_Response = Record<string, never>;

export abstract class ClientCommService {
  abstract EnableOrDisableDownloads(
    request: CClientComm_EnableOrDisableDownloads_Request,
  ): Promise<CClientComm_EnableOrDisableDownloads_Response>;
  abstract GetAllClientLogonInfo(
    request: CClientComm_GetAllClientLogonInfo_Request,
  ): Promise<CClientComm_GetAllClientLogonInfo_Response>;
  abstract GetClientAppList(
    request: CClientComm_GetClientAppList_Request,
  ): Promise<CClientComm_GetClientAppList_Response>;
  abstract GetClientInfo(
    request: CClientComm_GetClientInfo_Request,
  ): Promise<CClientComm_GetClientInfo_Response>;
  abstract GetClientLogonInfo(
    request: CClientComm_GetClientLogonInfo_Request,
  ): Promise<CClientComm_GetClientLogonInfo_Response>;
  abstract InstallClientApp(
    request: CClientComm_InstallClientApp_Request,
  ): Promise<CClientComm_InstallClientApp_Response>;
  abstract LaunchClientApp(
    request: CClientComm_LaunchClientApp_Request,
  ): Promise<CClientComm_LaunchClientApp_Response>;
  abstract SetClientAppUpdateState(
    request: CClientComm_SetClientAppUpdateState_Request,
  ): Promise<CClientComm_SetClientAppUpdateState_Response>;
  abstract UninstallClientApp(
    request: CClientComm_UninstallClientApp_Request,
  ): Promise<CClientComm_UninstallClientApp_Response>;
}
