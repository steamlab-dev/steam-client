/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export interface CMsgClientUDSP2PSessionStarted {
  steamid_remote?: Long;
  appid?: number;
}

export interface CMsgClientUDSP2PSessionEnded {
  steamid_remote?: Long;
  appid?: number;
  session_length_sec?: number;
  session_error?: number;
  nattype?: number;
  bytes_recv?: number;
  bytes_sent?: number;
  bytes_sent_relay?: number;
  bytes_recv_relay?: number;
  time_to_connect_ms?: number;
}

export type CMsgClientGetClientDetails = Record<string, never>;

export interface CMsgClientGetClientDetailsResponse {
  package_version?: number;
  os?: string;
  machine_name?: string;
  ip_public?: string;
  ip_private?: string;
  games_running?: CMsgClientGetClientDetailsResponse.Game[];
  bytes_available?: Long;
  protocol_version?: number;
  clientcomm_version?: number;
  local_users?: number[];
}

export namespace CMsgClientGetClientDetailsResponse {
  export interface Game {
    appid?: number;
    extra_info?: string;
    time_running_sec?: number;
  }
}

export interface CMsgClientGetClientAppList {
  media?: boolean;
  tools?: boolean;
  games?: boolean;
  only_installed?: boolean;
  only_changing?: boolean;
  comics?: boolean;
  include_client_info?: boolean;
  filter_appids?: number[];
}

export interface CMsgClientGetClientAppListResponse {
  apps?: CMsgClientGetClientAppListResponse.App[];
  bytes_available?: Long;
  client_info?: CMsgClientGetClientDetailsResponse;
}

export namespace CMsgClientGetClientAppListResponse {
  export interface App {
    appid?: number;
    category?: string;
    app_type?: string;
    favorite?: boolean;
    installed?: boolean;
    auto_update?: boolean;
    bytes_downloaded?: Long;
    bytes_to_download?: Long;
    bytes_download_rate?: number;
    download_paused?: boolean;
    num_downloading?: number;
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

  export namespace App {
    export interface DLC {
      appid?: number;
      installed?: boolean;
    }
  }
}

export interface CMsgClientInstallClientApp {
  appid?: number;
}

export interface CMsgClientInstallClientAppResponse {
  result?: number;
}

export interface CMsgClientUninstallClientApp {
  appid?: number;
}

export interface CMsgClientUninstallClientAppResponse {
  result?: number;
}

export interface CMsgClientSetClientAppUpdateState {
  appid?: number;
  update?: boolean;
}

export interface CMsgClientSetClientAppUpdateStateResponse {
  result?: number;
}

export interface CMsgClientLaunchClientApp {
  appid?: number;
  language?: number;
  launch_option_type?: number;
  launch_option?: number;
  launch_source?: number;
  args?: string;
  query_params?: string;
}

export interface CMsgClientLaunchClientAppResponse {
  result?: number;
}

export interface CMsgClientEnableOrDisableDownloads {
  enable?: boolean;
}

export interface CMsgClientEnableOrDisableDownloadsResponse {
  result?: number;
}
