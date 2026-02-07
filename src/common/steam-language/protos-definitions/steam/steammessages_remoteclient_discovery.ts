/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const ERemoteClientBroadcastMsg = {
  k_ERemoteClientBroadcastMsgDiscovery: 0,
  k_ERemoteClientBroadcastMsgStatus: 1,
  k_ERemoteClientBroadcastMsgOffline: 2,
  k_ERemoteDeviceAuthorizationRequest: 3,
  k_ERemoteDeviceAuthorizationResponse: 4,
  k_ERemoteDeviceStreamingRequest: 5,
  k_ERemoteDeviceStreamingResponse: 6,
  k_ERemoteDeviceProofRequest: 7,
  k_ERemoteDeviceProofResponse: 8,
  k_ERemoteDeviceAuthorizationCancelRequest: 9,
  k_ERemoteDeviceStreamingCancelRequest: 10,
  k_ERemoteClientBroadcastMsgClientIDDeconflict: 11,
  k_ERemoteDeviceStreamTransportSignal: 12,
  k_ERemoteDeviceStreamingProgress: 13,
  k_ERemoteDeviceAuthorizationConfirmed: 14,
} as const;

export type ERemoteClientBroadcastMsg =
  (typeof ERemoteClientBroadcastMsg)[keyof typeof ERemoteClientBroadcastMsg];

export const ERemoteClientService = {
  k_ERemoteClientServiceNone: 0,
  k_ERemoteClientServiceRemoteControl: 1,
  k_ERemoteClientServiceGameStreaming: 2,
  k_ERemoteClientServiceSiteLicense: 4,
  k_ERemoteClientServiceContentCache: 8,
  k_ERemoteClientServiceContentServer: 16,
} as const;

export type ERemoteClientService = (typeof ERemoteClientService)[keyof typeof ERemoteClientService];

export const EVRLinkCaps = {
  k_EVRLinkCapsUnknown: 0,
  k_EVRLinkCapsAvailable: 1,
  k_EVRLinkCapsUnimplemented: 2,
  k_EVRLinkCapsMissingHardwareEncoding: 3,
} as const;

export type EVRLinkCaps = (typeof EVRLinkCaps)[keyof typeof EVRLinkCaps];

export const ERemoteDeviceAuthorizationResult = {
  k_ERemoteDeviceAuthorizationSuccess: 0,
  k_ERemoteDeviceAuthorizationDenied: 1,
  k_ERemoteDeviceAuthorizationNotLoggedIn: 2,
  k_ERemoteDeviceAuthorizationOffline: 3,
  k_ERemoteDeviceAuthorizationBusy: 4,
  k_ERemoteDeviceAuthorizationInProgress: 5,
  k_ERemoteDeviceAuthorizationTimedOut: 6,
  k_ERemoteDeviceAuthorizationFailed: 7,
  k_ERemoteDeviceAuthorizationCanceled: 8,
} as const;

export type ERemoteDeviceAuthorizationResult =
  (typeof ERemoteDeviceAuthorizationResult)[keyof typeof ERemoteDeviceAuthorizationResult];

export const EStreamDeviceFormFactor = {
  k_EStreamDeviceFormFactorUnknown: 0,
  k_EStreamDeviceFormFactorPhone: 1,
  k_EStreamDeviceFormFactorTablet: 2,
  k_EStreamDeviceFormFactorComputer: 3,
  k_EStreamDeviceFormFactorTV: 4,
  k_EStreamDeviceFormFactorVRHeadset: 5,
} as const;

export type EStreamDeviceFormFactor =
  (typeof EStreamDeviceFormFactor)[keyof typeof EStreamDeviceFormFactor];

export const EStreamTransport = {
  k_EStreamTransportNone: 0,
  k_EStreamTransportUDP: 1,
  k_EStreamTransportUDPRelay: 2,
  k_EStreamTransportWebRTC_OBSOLETE: 3,
  k_EStreamTransportSDR: 4,
  k_EStreamTransportUDP_SNS: 5,
  k_EStreamTransportUDPRelay_SNS: 6,
} as const;

export type EStreamTransport = (typeof EStreamTransport)[keyof typeof EStreamTransport];

export const EStreamInterface = {
  k_EStreamInterfaceDefault: 0,
  k_EStreamInterfaceRecentGames: 1,
  k_EStreamInterfaceBigPicture: 2,
  k_EStreamInterfaceDesktop: 3,
  k_EStreamInterfaceSteamVR: 4,
} as const;

export type EStreamInterface = (typeof EStreamInterface)[keyof typeof EStreamInterface];

export const ERemoteDeviceStreamingResult = {
  k_ERemoteDeviceStreamingSuccess: 0,
  k_ERemoteDeviceStreamingUnauthorized: 1,
  k_ERemoteDeviceStreamingScreenLocked: 2,
  k_ERemoteDeviceStreamingFailed: 3,
  k_ERemoteDeviceStreamingBusy: 4,
  k_ERemoteDeviceStreamingInProgress: 5,
  k_ERemoteDeviceStreamingCanceled: 6,
  k_ERemoteDeviceStreamingDriversNotInstalled: 7,
  k_ERemoteDeviceStreamingDisabled: 8,
  k_ERemoteDeviceStreamingBroadcastingActive: 9,
  k_ERemoteDeviceStreamingVRActive: 10,
  k_ERemoteDeviceStreamingPINRequired: 11,
  k_ERemoteDeviceStreamingTransportUnavailable: 12,
  k_ERemoteDeviceStreamingInvisible: 13,
  k_ERemoteDeviceStreamingGameLaunchFailed: 14,
  k_ERemoteDeviceStreamingSteamVRNotInstalled: 15,
} as const;

export type ERemoteDeviceStreamingResult =
  (typeof ERemoteDeviceStreamingResult)[keyof typeof ERemoteDeviceStreamingResult];

export interface CMsgRemoteClientBroadcastHeader {
  client_id?: Long;
  msg_type?: ERemoteClientBroadcastMsg;
  instance_id?: Long;
  device_id_OBSOLETE?: Long;
  device_token?: Buffer;
}

export interface CMsgRemoteClientBroadcastStatus {
  version?: number;
  min_version?: number;
  connect_port?: number;
  hostname?: string;
  enabled_services?: number;
  ostype?: number;
  is64bit?: boolean;
  users?: CMsgRemoteClientBroadcastStatus.User[];
  euniverse?: number;
  timestamp?: number;
  screen_locked?: boolean;
  games_running?: boolean;
  mac_addresses?: string[];
  download_lan_peer_group?: number;
  broadcasting_active?: boolean;
  vr_active?: boolean;
  content_cache_port?: number;
  ip_addresses?: string[];
  public_ip_address?: string;
  remoteplay_active?: boolean;
  supported_services?: number;
  steam_deck?: boolean;
  steam_version?: Long;
  vr_link_caps?: EVRLinkCaps;
  vr_link_invite_client_id?: Long;
  connected_paired_network_hash?: Long;
  wifi_dongle_present?: boolean;
}

export namespace CMsgRemoteClientBroadcastStatus {
  export interface User {
    steamid?: Long;
    auth_key_id?: number;
  }
}

export interface CMsgRemoteClientBroadcastDiscovery {
  seq_num?: number;
  client_ids?: Long[];
}

export interface CMsgRemoteClientBroadcastClientIDDeconflict {
  client_ids?: Long[];
}

export interface CMsgRemoteDeviceAuthorizationRequest {
  device_token?: Buffer;
  device_name?: string;
  encrypted_request?: Buffer;
  auth_key?: Buffer;
  request_id?: number;
}

export namespace CMsgRemoteDeviceAuthorizationRequest {
  export interface CKeyEscrow_Ticket {
    password?: Buffer;
    identifier?: Long;
    payload?: Buffer;
    timestamp?: number;
    usage?: CMsgRemoteDeviceAuthorizationRequest.EKeyEscrowUsage;
    device_name?: string;
    device_model?: string;
    device_serial?: string;
    device_provisioning_id?: number;
  }

  export const EKeyEscrowUsage = {
    k_EKeyEscrowUsageStreamingDevice: 0,
  } as const;

  export type EKeyEscrowUsage = (typeof EKeyEscrowUsage)[keyof typeof EKeyEscrowUsage];
}

export type CMsgRemoteDeviceAuthorizationCancelRequest = Record<string, never>;

export interface CMsgRemoteDeviceAuthorizationResponse {
  result?: ERemoteDeviceAuthorizationResult;
  steamid?: Long;
  auth_key?: Buffer;
  device_token?: Buffer;
}

export interface CMsgRemoteDeviceAuthorizationConfirmed {
  result?: ERemoteDeviceAuthorizationResult;
}

export interface CMsgRemoteDeviceStreamingRequest {
  request_id?: number;
  maximum_resolution_x?: number;
  maximum_resolution_y?: number;
  audio_channel_count?: number;
  device_version?: string;
  stream_desktop?: boolean;
  device_token?: Buffer;
  pin?: Buffer;
  enable_video_streaming?: boolean;
  enable_audio_streaming?: boolean;
  enable_input_streaming?: boolean;
  network_test?: boolean;
  client_id?: Long;
  supported_transport?: EStreamTransport[];
  restricted?: boolean;
  form_factor?: EStreamDeviceFormFactor;
  gamepad_count?: number;
  gamepads?: CMsgRemoteDeviceStreamingRequest.ReservedGamepad[];
  gameid?: Long;
  stream_interface?: EStreamInterface;
}

export namespace CMsgRemoteDeviceStreamingRequest {
  export interface ReservedGamepad {
    controller_type?: number;
    controller_subtype?: number;
  }
}

export interface CMsgRemoteDeviceStreamingCancelRequest {
  request_id?: number;
}

export interface CMsgRemoteDeviceStreamingProgress {
  request_id?: number;
  progress?: number;
}

export interface CMsgRemoteDeviceStreamingResponse {
  request_id?: number;
  result?: ERemoteDeviceStreamingResult;
  port?: number;
  encrypted_session_key?: Buffer;
  transport?: EStreamTransport;
  relay_server?: string;
  cert?: string;
}

export interface CMsgRemoteDeviceProofRequest {
  challenge?: Buffer;
  request_id?: number;
  update_secret?: boolean;
}

export interface CMsgRemoteDeviceProofResponse {
  response?: Buffer;
  request_id?: number;
  updated_secret?: boolean;
}

export interface CMsgRemoteDeviceStreamTransportSignal {
  token?: Buffer;
  payload?: Buffer;
}
