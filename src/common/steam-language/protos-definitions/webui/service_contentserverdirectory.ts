/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CContentServerDirectory_ConnectedSteamPipeServerInfo {
  type?: string;
  source_id?: number;
  hostname?: string;
}

export interface CContentServerDirectory_GetCDNAuthToken_Request {
  depot_id?: number;
  host_name?: string;
  app_id?: number;
}

export interface CContentServerDirectory_GetCDNAuthToken_Response {
  token?: string;
  expiration_time?: number;
}

export interface CContentServerDirectory_GetClientUpdateHosts_Request {
  cached_signature?: string;
}

export interface CContentServerDirectory_GetClientUpdateHosts_Response {
  hosts_kv?: string;
  valid_until_time?: Long;
  ip_country?: string;
}

export interface CContentServerDirectory_GetDepotPatchInfo_Request {
  appid?: number;
  depotid?: number;
  source_manifestid?: Long;
  target_manifestid?: Long;
}

export interface CContentServerDirectory_GetDepotPatchInfo_Response {
  is_available?: boolean;
  patch_size?: Long;
  patched_chunks_size?: Long;
}

export interface CContentServerDirectory_GetManifestRequestCode_Request {
  app_id?: number;
  depot_id?: number;
  manifest_id?: Long;
  app_branch?: string;
  branch_password_hash?: string;
}

export interface CContentServerDirectory_GetManifestRequestCode_Response {
  manifest_request_code?: Long;
}

export interface CContentServerDirectory_GetPeerContentInfo_Request {
  remote_client_id?: Long;
  steamid?: Long;
  server_remote_client_id?: Long;
}

export interface CContentServerDirectory_GetPeerContentInfo_Response {
  appids?: number[];
  ip_public?: string;
}

export interface CContentServerDirectory_GetServersForSteamPipe_Request {
  cell_id?: number;
  max_servers?: number;
  ip_override?: string;
  launcher_type?: number;
  ipv6_public?: string;
  current_connections?: CContentServerDirectory_ConnectedSteamPipeServerInfo[];
}

export interface CContentServerDirectory_GetServersForSteamPipe_Response {
  servers?: CContentServerDirectory_ServerInfo[];
  no_change?: boolean;
}

export interface CContentServerDirectory_RequestPeerContentServer_Request {
  remote_client_id?: Long;
  steamid?: Long;
  server_remote_client_id?: Long;
  app_id?: number;
  current_build_id?: number;
}

export interface CContentServerDirectory_RequestPeerContentServer_Response {
  server_port?: number;
  installed_depots?: number[];
  access_token?: Long;
}

export interface CContentServerDirectory_ServerInfo {
  type?: string;
  source_id?: number;
  cell_id?: number;
  load?: number;
  weighted_load?: number;
  num_entries_in_client_list?: number;
  steam_china_only?: boolean;
  host?: string;
  vhost?: string;
  use_as_proxy?: boolean;
  proxy_request_path_template?: string;
  https_support?: string;
  allowed_app_ids?: number[];
  priority_class?: number;
  bypass_proxies_of_type?: string[];
}

export abstract class ContentServerDirectoryService {
  abstract GetCDNAuthToken(
    request: CContentServerDirectory_GetCDNAuthToken_Request,
  ): Promise<CContentServerDirectory_GetCDNAuthToken_Response>;
  abstract GetClientUpdateHosts(
    request: CContentServerDirectory_GetClientUpdateHosts_Request,
  ): Promise<CContentServerDirectory_GetClientUpdateHosts_Response>;
  abstract GetDepotPatchInfo(
    request: CContentServerDirectory_GetDepotPatchInfo_Request,
  ): Promise<CContentServerDirectory_GetDepotPatchInfo_Response>;
  abstract GetManifestRequestCode(
    request: CContentServerDirectory_GetManifestRequestCode_Request,
  ): Promise<CContentServerDirectory_GetManifestRequestCode_Response>;
  abstract GetPeerContentInfo(
    request: CContentServerDirectory_GetPeerContentInfo_Request,
  ): Promise<CContentServerDirectory_GetPeerContentInfo_Response>;
  abstract GetServersForSteamPipe(
    request: CContentServerDirectory_GetServersForSteamPipe_Request,
  ): Promise<CContentServerDirectory_GetServersForSteamPipe_Response>;
  abstract RequestPeerContentServer(
    request: CContentServerDirectory_RequestPeerContentServer_Request,
  ): Promise<CContentServerDirectory_RequestPeerContentServer_Response>;
}
