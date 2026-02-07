/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type {
  CMsgRemoteClientBroadcastStatus,
  EStreamTransport,
} from "./steammessages_remoteclient_discovery";

export const ERemoteClientPairWifiAPResult = {
  k_ERemoteClientPairWifiAPOK: 1,
  k_ERemoteClientPairWifiAPFail: 2,
  k_ERemoteClientPairWifiAPNetworkError: 3,
  k_ERemoteClientPairWifiAPUnauthorized: 4,
  k_ERemoteClientPairWifiAPNoDonglePresent: 5,
  k_ERemoteClientPairWifiAPTimeout: 6,
  k_ERemoteClientPairWifiAPCanceled: 7,
} as const;

export type ERemoteClientPairWifiAPResult =
  (typeof ERemoteClientPairWifiAPResult)[keyof typeof ERemoteClientPairWifiAPResult];

export interface CMsgRemoteClientStatus {
  client_id?: Long;
  instance_id?: Long;
  status?: CMsgRemoteClientBroadcastStatus;
}

export interface CMsgRemoteClientAppStatus {
  status_updates?: CMsgRemoteClientAppStatus.AppStatus[];
}

export namespace CMsgRemoteClientAppStatus {
  export interface AppUpdateInfo {
    time_update_start?: number;
    bytes_to_download?: Long;
    bytes_downloaded?: Long;
    bytes_to_process?: Long;
    bytes_processed?: Long;
    estimated_seconds_remaining?: number;
    update_result?: number;
    update_state?: number;
  }

  export interface ShortcutInfo {
    name?: string;
    icon?: string;
    categories?: string[];
    exepath?: string;
  }

  export interface AppStatus {
    app_id?: number;
    app_state?: number;
    update_info?: CMsgRemoteClientAppStatus.AppUpdateInfo;
    shortcut_info?: CMsgRemoteClientAppStatus.ShortcutInfo;
    vr_not_required?: boolean;
  }
}

export interface CMsgRemoteClientStartStream {
  app_id?: number;
  environment?: number;
  gamepad_count?: number;
  launch_option?: number;
  lock_parental_lock?: boolean;
  unlock_parental_lock?: string;
  maximum_resolution_x?: number;
  maximum_resolution_y?: number;
  gamepads?: CMsgRemoteClientStartStream.ReservedGamepad[];
  audio_channel_count?: number;
  supported_transport?: EStreamTransport[];
}

export namespace CMsgRemoteClientStartStream {
  export interface ReservedGamepad {
    controller_type?: number;
    controller_subtype?: number;
  }
}

export interface CMsgRemoteClientStartStreamResponse {
  e_launch_result?: number;
  stream_port?: number;
  launch_options?: number[];
  auth_token?: Buffer;
  transport?: EStreamTransport;
  relay_server?: string;
  launch_task?: string;
  launch_task_detail?: string;
  launch_tasks_done?: number;
  launch_tasks_total?: number;
  vr_connection_params?: string;
}

export type CMsgRemoteClientPing = Record<string, never>;

export type CMsgRemoteClientPingResponse = Record<string, never>;

export interface CMsgRemoteClientAcceptEULA {
  app_id?: number[];
  eula_id?: string[];
  eula_version?: number[];
}

export interface CMsgRemoteClientGetControllerConfig {
  app_id?: number;
  controller_index?: number;
}

export interface CMsgRemoteClientGetControllerConfigResponse {
  eresult?: number;
  config_vdf?: Buffer;
}

export interface CMsgRemoteClientStreamingEnabled {
  enabled?: boolean;
}

export interface CMsgRemoteClientWifiAPStatus {
  ssid?: string;
  password?: string;
  wpa2_deprecated?: boolean;
  is_pairing_capable?: boolean;
  paired_network_hash?: Long;
}

export interface CMsgRemoteClientPairWifiAP {
  ssid?: string;
  password?: string;
}

export interface CMsgRemoteClientPairWifiAPResponse {
  e_pair_result?: number;
  ssid?: string;
  password?: string;
}
