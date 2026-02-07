/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EStreamChannel = {
  k_EStreamChannelDiscovery: 0,
  k_EStreamChannelControl: 1,
  k_EStreamChannelStats: 2,
  k_EStreamChannelDataChannelStart: 3,
} as const;

export type EStreamChannel = (typeof EStreamChannel)[keyof typeof EStreamChannel];

export const EStreamDiscoveryMessage = {
  k_EStreamDiscoveryPingRequest: 1,
  k_EStreamDiscoveryPingResponse: 2,
} as const;

export type EStreamDiscoveryMessage =
  (typeof EStreamDiscoveryMessage)[keyof typeof EStreamDiscoveryMessage];

export const EStreamControlMessage = {
  k_EStreamControlAuthenticationRequest: 1,
  k_EStreamControlAuthenticationResponse: 2,
  k_EStreamControlNegotiationInit: 3,
  k_EStreamControlNegotiationSetConfig: 4,
  k_EStreamControlNegotiationComplete: 5,
  k_EStreamControlClientHandshake: 6,
  k_EStreamControlServerHandshake: 7,
  k_EStreamControlStartNetworkTest: 8,
  k_EStreamControlKeepAlive: 9,
  k_EStreamControl_LAST_SETUP_MESSAGE: 15,
  k_EStreamControlStartAudioData: 50,
  k_EStreamControlStopAudioData: 51,
  k_EStreamControlStartVideoData: 52,
  k_EStreamControlStopVideoData: 53,
  k_EStreamControlInputMouseMotion: 54,
  k_EStreamControlInputMouseWheel: 55,
  k_EStreamControlInputMouseDown: 56,
  k_EStreamControlInputMouseUp: 57,
  k_EStreamControlInputKeyDown: 58,
  k_EStreamControlInputKeyUp: 59,
  k_EStreamControlInputGamepadAttached_OBSOLETE: 60,
  k_EStreamControlInputGamepadEvent_OBSOLETE: 61,
  k_EStreamControlInputGamepadDetached_OBSOLETE: 62,
  k_EStreamControlShowCursor: 63,
  k_EStreamControlHideCursor: 64,
  k_EStreamControlSetCursor: 65,
  k_EStreamControlGetCursorImage: 66,
  k_EStreamControlSetCursorImage: 67,
  k_EStreamControlDeleteCursor: 68,
  k_EStreamControlSetTargetFramerate: 69,
  k_EStreamControlInputLatencyTest: 70,
  k_EStreamControlGamepadRumble_OBSOLETE: 71,
  k_EStreamControlOverlayEnabled: 74,
  k_EStreamControlInputControllerAttached_OBSOLETE: 75,
  k_EStreamControlInputControllerState_OBSOLETE: 76,
  k_EStreamControlTriggerHapticPulse_OBSOLETE: 77,
  k_EStreamControlInputControllerDetached_OBSOLETE: 78,
  k_EStreamControlVideoDecoderInfo: 80,
  k_EStreamControlSetTitle: 81,
  k_EStreamControlSetIcon: 82,
  k_EStreamControlQuitRequest: 83,
  k_EStreamControlSetQoS: 87,
  k_EStreamControlInputControllerWirelessPresence_OBSOLETE: 88,
  k_EStreamControlSetGammaRamp: 89,
  k_EStreamControlVideoEncoderInfo: 90,
  k_EStreamControlInputControllerStateHID_OBSOLETE: 93,
  k_EStreamControlSetTargetBitrate: 94,
  k_EStreamControlSetControllerPairingEnabled_OBSOLETE: 95,
  k_EStreamControlSetControllerPairingResult_OBSOLETE: 96,
  k_EStreamControlTriggerControllerDisconnect_OBSOLETE: 97,
  k_EStreamControlSetActivity: 98,
  k_EStreamControlSetStreamingClientConfig: 99,
  k_EStreamControlSystemSuspend: 100,
  k_EStreamControlSetControllerSettings_OBSOLETE: 101,
  k_EStreamControlVirtualHereRequest: 102,
  k_EStreamControlVirtualHereReady: 103,
  k_EStreamControlVirtualHereShareDevice: 104,
  k_EStreamControlSetSpectatorMode: 105,
  k_EStreamControlRemoteHID: 106,
  k_EStreamControlStartMicrophoneData: 107,
  k_EStreamControlStopMicrophoneData: 108,
  k_EStreamControlInputText: 109,
  k_EStreamControlTouchConfigActive: 110,
  k_EStreamControlGetTouchConfigData: 111,
  k_EStreamControlSetTouchConfigData: 112,
  k_EStreamControlSaveTouchConfigLayout: 113,
  k_EStreamControlTouchActionSetActive: 114,
  k_EStreamControlGetTouchIconData: 115,
  k_EStreamControlSetTouchIconData: 116,
  k_EStreamControlInputTouchFingerDown: 117,
  k_EStreamControlInputTouchFingerMotion: 118,
  k_EStreamControlInputTouchFingerUp: 119,
  k_EStreamControlSetCaptureSize: 120,
  k_EStreamControlSetFlashState: 121,
  k_EStreamControlPause: 122,
  k_EStreamControlResume: 123,
  k_EStreamControlEnableHighResCapture: 124,
  k_EStreamControlDisableHighResCapture: 125,
  k_EStreamControlToggleMagnification: 126,
  k_EStreamControlSetCapslock: 127,
  k_EStreamControlSetKeymap: 128,
  k_EStreamControlStopRequest: 129,
  k_EStreamControlTouchActionSetLayerAdded: 130,
  k_EStreamControlTouchActionSetLayerRemoved: 131,
  k_EStreamControlRemotePlayTogetherGroupUpdate: 132,
  k_EStreamControlSetInputTemporarilyDisabled: 133,
  k_EStreamControlSetQualityOverride: 134,
  k_EStreamControlSetBitrateOverride: 135,
  k_EStreamControlShowOnScreenKeyboard: 136,
  k_EStreamControlControllerConfigMsg: 137,
  k_EStreamControlControllerPersonalizationUpdate: 138,
  k_EStreamControlEnableNeptuneData_OBSOLETE: 139,
  k_EStreamControlDisableNeptuneData_OBSOLETE: 140,
  k_EStreamControlStartNeptuneData_OBSOLETE: 141,
  k_EStreamControlStopNeptuneData_OBSOLETE: 142,
  k_EStreamControlPauseControllerInput: 143,
  k_EStreamControlResumeControllerInput: 144,
  k_EStreamControlVRConnectionReady: 145,
  k_EStreamControlSetCursorScale: 146,
} as const;

export type EStreamControlMessage =
  (typeof EStreamControlMessage)[keyof typeof EStreamControlMessage];

export const EStreamVersion = {
  k_EStreamVersionNone: 0,
  k_EStreamVersionCurrent: 1,
} as const;

export type EStreamVersion = (typeof EStreamVersion)[keyof typeof EStreamVersion];

export const EStreamAudioCodec = {
  k_EStreamAudioCodecNone: 0,
  k_EStreamAudioCodecRaw: 1,
  k_EStreamAudioCodecVorbis: 2,
  k_EStreamAudioCodecOpus: 3,
  k_EStreamAudioCodecMP3: 4,
  k_EStreamAudioCodecAAC: 5,
} as const;

export type EStreamAudioCodec = (typeof EStreamAudioCodec)[keyof typeof EStreamAudioCodec];

export const EStreamVideoCodec = {
  k_EStreamVideoCodecNone: 0,
  k_EStreamVideoCodecRaw: 1,
  k_EStreamVideoCodecVP8: 2,
  k_EStreamVideoCodecVP9: 3,
  k_EStreamVideoCodecH264: 4,
  k_EStreamVideoCodecHEVC: 5,
  k_EStreamVideoCodecORBX1: 6,
  k_EStreamVideoCodecORBX2: 7,
  k_EStreamVideoCodecAV1: 8,
} as const;

export type EStreamVideoCodec = (typeof EStreamVideoCodec)[keyof typeof EStreamVideoCodec];

export const EStreamQualityPreference = {
  k_EStreamQualityFast: 1,
  k_EStreamQualityBalanced: 2,
  k_EStreamQualityBeautiful: 3,
} as const;

export type EStreamQualityPreference =
  (typeof EStreamQualityPreference)[keyof typeof EStreamQualityPreference];

export const EStreamBitrate = {
  k_EStreamBitrateUnlimited: 0,
} as const;

export type EStreamBitrate = (typeof EStreamBitrate)[keyof typeof EStreamBitrate];

export const EStreamColorspace = {
  k_EStreamColorspace_Unknown: 0,
  k_EStreamColorspace_BT601: 1,
  k_EStreamColorspace_BT601_Full: 2,
  k_EStreamColorspace_BT709: 3,
  k_EStreamColorspace_BT709_Full: 4,
  k_EStreamColorspace_HDR10: 5,
} as const;

export type EStreamColorspace = (typeof EStreamColorspace)[keyof typeof EStreamColorspace];

export const EStreamP2PScope = {
  k_EStreamP2PScopeAutomatic: 0,
  k_EStreamP2PScopeDisabled: 1,
  k_EStreamP2PScopeOnlyMe: 2,
  k_EStreamP2PScopeFriends: 3,
  k_EStreamP2PScopeEveryone: 4,
} as const;

export type EStreamP2PScope = (typeof EStreamP2PScope)[keyof typeof EStreamP2PScope];

export const EStreamHostPlayAudioPreference = {
  k_EStreamHostPlayAudioDefault: 0,
  k_EStreamHostPlayAudioAlways: 1,
} as const;

export type EStreamHostPlayAudioPreference =
  (typeof EStreamHostPlayAudioPreference)[keyof typeof EStreamHostPlayAudioPreference];

export const EStreamingDataType = {
  k_EStreamingAudioData: 0,
  k_EStreamingVideoData: 1,
  k_EStreamingMicrophoneData: 2,
  k_EStreamingNeptuneData_OBSOLETE: 3,
} as const;

export type EStreamingDataType = (typeof EStreamingDataType)[keyof typeof EStreamingDataType];

export const EStreamMouseButton = {
  k_EStreamMouseButtonLeft: 1,
  k_EStreamMouseButtonRight: 2,
  k_EStreamMouseButtonMiddle: 16,
  k_EStreamMouseButtonX1: 32,
  k_EStreamMouseButtonX2: 64,
  k_EStreamMouseButtonUnknown: 4096,
} as const;

export type EStreamMouseButton = (typeof EStreamMouseButton)[keyof typeof EStreamMouseButton];

export const EStreamMouseWheelDirection = {
  k_EStreamMouseWheelUp: 120,
  k_EStreamMouseWheelLeft: 3,
  k_EStreamMouseWheelRight: 4,
} as const;

export type EStreamMouseWheelDirection =
  (typeof EStreamMouseWheelDirection)[keyof typeof EStreamMouseWheelDirection];

export const EStreamFramerateLimiter = {
  k_EStreamFramerateSlowCapture: 1,
  k_EStreamFramerateSlowConvert: 2,
  k_EStreamFramerateSlowEncode: 4,
  k_EStreamFramerateSlowNetwork: 8,
  k_EStreamFramerateSlowDecode: 16,
  k_EStreamFramerateSlowGame: 32,
  k_EStreamFramerateSlowDisplay: 64,
} as const;

export type EStreamFramerateLimiter =
  (typeof EStreamFramerateLimiter)[keyof typeof EStreamFramerateLimiter];

export const EStreamActivity = {
  k_EStreamActivityIdle: 1,
  k_EStreamActivityGame: 2,
  k_EStreamActivityDesktop: 3,
  k_EStreamActivitySecureDesktop: 4,
  k_EStreamActivityMusic: 5,
} as const;

export type EStreamActivity = (typeof EStreamActivity)[keyof typeof EStreamActivity];

export const EStreamDataMessage = {
  k_EStreamDataPacket: 1,
  k_EStreamDataLost: 2,
} as const;

export type EStreamDataMessage = (typeof EStreamDataMessage)[keyof typeof EStreamDataMessage];

export const EAudioFormat = {
  k_EAudioFormatNone: 0,
  k_EAudioFormat16BitLittleEndian: 1,
  k_EAudioFormatFloat: 2,
} as const;

export type EAudioFormat = (typeof EAudioFormat)[keyof typeof EAudioFormat];

export const EVideoFormat = {
  k_EVideoFormatNone: 0,
  k_EVideoFormatYV12: 1,
  k_EVideoFormatAccel: 2,
} as const;

export type EVideoFormat = (typeof EVideoFormat)[keyof typeof EVideoFormat];

export const EStreamStatsMessage = {
  k_EStreamStatsFrameEvents: 1,
  k_EStreamStatsDebugDump: 2,
  k_EStreamStatsLogMessage: 3,
  k_EStreamStatsLogUploadBegin: 4,
  k_EStreamStatsLogUploadData: 5,
  k_EStreamStatsLogUploadComplete: 6,
} as const;

export type EStreamStatsMessage = (typeof EStreamStatsMessage)[keyof typeof EStreamStatsMessage];

export const EStreamFrameEvent = {
  k_EStreamInputEventStart: 0,
  k_EStreamInputEventSend: 1,
  k_EStreamInputEventRecv: 2,
  k_EStreamInputEventQueued: 3,
  k_EStreamInputEventHandled: 4,
  k_EStreamFrameEventStart: 5,
  k_EStreamFrameEventCaptureBegin: 6,
  k_EStreamFrameEventCaptureEnd: 7,
  k_EStreamFrameEventConvertBegin: 8,
  k_EStreamFrameEventConvertEnd: 9,
  k_EStreamFrameEventEncodeBegin: 10,
  k_EStreamFrameEventEncodeEnd: 11,
  k_EStreamFrameEventSend: 12,
  k_EStreamFrameEventRecv: 13,
  k_EStreamFrameEventDecodeBegin: 14,
  k_EStreamFrameEventDecodeEnd: 15,
  k_EStreamFrameEventUploadBegin: 16,
  k_EStreamFrameEventUploadEnd: 17,
  k_EStreamFrameEventComplete: 18,
} as const;

export type EStreamFrameEvent = (typeof EStreamFrameEvent)[keyof typeof EStreamFrameEvent];

export const EStreamFrameResult = {
  k_EStreamFrameResultPending: 0,
  k_EStreamFrameResultDisplayed: 1,
  k_EStreamFrameResultDroppedNetworkSlow: 2,
  k_EStreamFrameResultDroppedNetworkLost: 3,
  k_EStreamFrameResultDroppedDecodeSlow: 4,
  k_EStreamFrameResultDroppedDecodeCorrupt: 5,
  k_EStreamFrameResultDroppedLate: 6,
  k_EStreamFrameResultDroppedReset: 7,
} as const;

export type EStreamFrameResult = (typeof EStreamFrameResult)[keyof typeof EStreamFrameResult];

export const EFrameAccumulatedStat = {
  k_EFrameStatFPS: 0,
  k_EFrameStatCaptureDurationMS: 1,
  k_EFrameStatConvertDurationMS: 2,
  k_EFrameStatEncodeDurationMS: 3,
  k_EFrameStatSteamDurationMS: 4,
  k_EFrameStatServerDurationMS: 5,
  k_EFrameStatNetworkDurationMS: 6,
  k_EFrameStatDecodeDurationMS: 7,
  k_EFrameStatDisplayDurationMS: 8,
  k_EFrameStatClientDurationMS: 9,
  k_EFrameStatFrameDurationMS: 10,
  k_EFrameStatInputLatencyMS: 11,
  k_EFrameStatGameLatencyMS: 12,
  k_EFrameStatRoundTripLatencyMS: 13,
  k_EFrameStatPingTimeMS: 14,
  k_EFrameStatServerBitrateKbitPerSec: 15,
  k_EFrameStatClientBitrateKbitPerSec: 16,
  k_EFrameStatLinkBandwidthKbitPerSec: 17,
  k_EFrameStatPacketLossPercentage: 18,
} as const;

export type EFrameAccumulatedStat =
  (typeof EFrameAccumulatedStat)[keyof typeof EFrameAccumulatedStat];

export const ELogFileType = {
  k_ELogFileSystemBoot: 0,
  k_ELogFileSystemReset: 1,
  k_ELogFileSystemDebug: 2,
} as const;

export type ELogFileType = (typeof ELogFileType)[keyof typeof ELogFileType];

export const EStreamControllerConfigMsg = {
  k_EStreamControllerConfigMsg_RequestConfigsForApp: 0,
  k_EStreamControllerConfigMsg_ConfigResponse: 1,
  k_EStreamControllerConfigMsg_PersonalizationResponse: 2,
  k_EStreamControllerConfigMsg_ActiveConfigChange: 3,
  k_EStreamControllerConfigMsg_RequestActiveConfig: 4,
} as const;

export type EStreamControllerConfigMsg =
  (typeof EStreamControllerConfigMsg)[keyof typeof EStreamControllerConfigMsg];

export interface CDiscoveryPingRequest {
  sequence?: number;
  packet_size_requested?: number;
}

export interface CDiscoveryPingResponse {
  sequence?: number;
  packet_size_received?: number;
}

export interface CStreamingClientHandshakeInfo {
  network_test?: number;
}

export interface CClientHandshakeMsg {
  info?: CStreamingClientHandshakeInfo;
}

export interface CStreamingServerHandshakeInfo {
  mtu?: number;
}

export interface CServerHandshakeMsg {
  info?: CStreamingServerHandshakeInfo;
}

export interface CAuthenticationRequestMsg {
  token?: Buffer;
  version?: EStreamVersion;
  steamid?: Long;
}

export interface CAuthenticationResponseMsg {
  result?: CAuthenticationResponseMsg.AuthenticationResult;
  version?: EStreamVersion;
}

export namespace CAuthenticationResponseMsg {
  export const AuthenticationResult = {
    SUCCEEDED: 0,
    FAILED: 1,
  } as const;

  export type AuthenticationResult =
    (typeof AuthenticationResult)[keyof typeof AuthenticationResult];
}

export type CKeepAliveMsg = Record<string, never>;

export interface CStartNetworkTestMsg {
  frames?: number;
  framerate?: number;
  bitrate_kbps?: number;
  burst_bitrate_kbps?: number;
  bandwidth_test?: boolean;
}

export interface CStreamVideoMode {
  width?: number;
  height?: number;
  refresh_rate?: number;
  refresh_rate_numerator?: number;
  refresh_rate_denominator?: number;
}

export interface CStreamVideoLimit {
  codec?: EStreamVideoCodec;
  mode?: CStreamVideoMode;
  bitrate_kbps?: number;
  burst_bitrate_kbps?: number;
}

export interface CStreamingClientCaps {
  system_info?: string;
  system_can_suspend?: boolean;
  maximum_decode_bitrate_kbps?: number;
  maximum_burst_bitrate_kbps?: number;
  supports_video_hevc_OBSOLETE?: boolean;
  disable_steam_store?: boolean;
  disable_client_cursor?: boolean;
  disable_intel_hardware_encoding?: boolean;
  disable_amd_hardware_encoding?: boolean;
  disable_nvidia_hardware_encoding?: boolean;
  form_factor?: number;
  has_on_screen_keyboard?: boolean;
  supported_colorspaces?: EStreamColorspace[];
  supported_audio_codecs?: EStreamAudioCodec[];
  supported_video_codecs?: EStreamVideoCodec[];
}

export interface CStreamingClientConfig {
  quality?: EStreamQualityPreference;
  desired_resolution_x?: number;
  desired_resolution_y?: number;
  desired_framerate_numerator?: number;
  desired_framerate_denominator?: number;
  desired_bitrate_kbps?: number;
  enable_hardware_decoding?: boolean;
  enable_performance_overlay?: boolean;
  enable_video_streaming?: boolean;
  enable_audio_streaming?: boolean;
  enable_input_streaming?: boolean;
  audio_channels?: number;
  enable_video_hevc?: boolean;
  enable_performance_icons?: boolean;
  enable_microphone_streaming?: boolean;
  controller_overlay_hotkey?: string;
  enable_touch_controller_OBSOLETE?: boolean;
  p2p_scope?: EStreamP2PScope;
  enable_audio_uncompressed?: boolean;
  display_limit?: CStreamVideoLimit;
  quality_limit?: CStreamVideoLimit;
  runtime_limit?: CStreamVideoLimit;
  decoder_limit?: CStreamVideoLimit[];
  enable_unreliable_fec?: boolean;
  enable_video_av1?: boolean;
}

export interface CStreamingServerConfig {
  change_desktop_resolution?: boolean;
  dynamically_adjust_resolution_OBSOLETE?: boolean;
  enable_capture_nvfbc?: boolean;
  enable_hardware_encoding_nvidia_OBSOLETE?: boolean;
  enable_hardware_encoding_amd_OBSOLETE?: boolean;
  enable_hardware_encoding_intel_OBSOLETE?: boolean;
  software_encoding_threads?: number;
  enable_traffic_priority?: boolean;
  host_play_audio?: EStreamHostPlayAudioPreference;
  enable_hardware_encoding?: boolean;
}

export interface CNegotiatedConfig {
  reliable_data?: boolean;
  selected_audio_codec?: EStreamAudioCodec;
  selected_video_codec?: EStreamVideoCodec;
  available_video_modes_OBSOLETE?: CStreamVideoMode[];
  enable_remote_hid?: boolean;
  enable_touch_input?: boolean;
  disable_client_cursor?: boolean;
}

export interface CNegotiationInitMsg {
  reliable_data?: boolean;
  supported_audio_codecs?: EStreamAudioCodec[];
  supported_video_codecs?: EStreamVideoCodec[];
  supports_remote_hid?: boolean;
  supports_touch_input?: boolean;
  os_type?: number;
  gaming_device_type?: number;
}

export interface CNegotiationSetConfigMsg {
  config?: CNegotiatedConfig;
  streaming_client_config?: CStreamingClientConfig;
  streaming_client_caps?: CStreamingClientCaps;
}

export type CNegotiationCompleteMsg = Record<string, never>;

export interface CStartAudioDataMsg {
  channel?: number;
  codec?: EStreamAudioCodec;
  codec_data?: Buffer;
  frequency?: number;
  channels?: number;
}

export type CStopAudioDataMsg = Record<string, never>;

export interface CStartVideoDataMsg {
  channel?: number;
  codec?: EStreamVideoCodec;
  codec_data?: Buffer;
  width?: number;
  height?: number;
}

export type CStopVideoDataMsg = Record<string, never>;

export interface CRecordedInput {
  type?: EStreamControlMessage;
  timestamp?: number;
  data?:
    | { finger_down: CInputTouchFingerDownMsg }
    | { finger_motion: CInputTouchFingerMotionMsg }
    | { finger_up: CInputTouchFingerUpMsg }
    | { mouse_motion: CInputMouseMotionMsg }
    | { mouse_wheel: CInputMouseWheelMsg }
    | { mouse_down: CInputMouseDownMsg }
    | { mouse_up: CInputMouseUpMsg }
    | { key_down: CInputKeyDownMsg }
    | { key_up: CInputKeyUpMsg }
    | { text: CInputTextMsg }
    | { hid: CRemoteHIDMsg };
}

export interface CRecordedInputStream {
  entries?: CRecordedInput[];
}

export interface CInputLatencyTestMsg {
  input_mark?: number;
  color?: number;
}

export interface CInputTouchFingerDownMsg {
  input_mark?: number;
  fingerid?: Long;
  x_normalized?: number;
  y_normalized?: number;
}

export interface CInputTouchFingerMotionMsg {
  input_mark?: number;
  fingerid?: Long;
  x_normalized?: number;
  y_normalized?: number;
}

export interface CInputTouchFingerUpMsg {
  input_mark?: number;
  fingerid?: Long;
  x_normalized?: number;
  y_normalized?: number;
  canceled?: boolean;
}

export interface CInputMouseMotionMsg {
  input_mark?: number;
  x_normalized?: number;
  y_normalized?: number;
  dx?: number;
  dy?: number;
}

export interface CInputMouseWheelMsg {
  input_mark?: number;
  direction?: EStreamMouseWheelDirection;
  amount?: number;
}

export interface CInputMouseDownMsg {
  input_mark?: number;
  button?: EStreamMouseButton;
}

export interface CInputMouseUpMsg {
  input_mark?: number;
  button?: EStreamMouseButton;
}

export interface CInputKeyDownMsg {
  input_mark?: number;
  scancode?: number;
  modifiers?: number;
  keycode?: number;
}

export interface CInputKeyUpMsg {
  input_mark?: number;
  scancode?: number;
  modifiers?: number;
  keycode?: number;
}

export interface CInputTextMsg {
  input_mark?: number;
  text_utf8?: string;
}

export interface CSetTitleMsg {
  text?: string;
}

export interface CSetCaptureSizeMsg {
  width?: number;
  height?: number;
}

export interface CSetIconMsg {
  width?: number;
  height?: number;
  image?: Buffer;
}

export interface CSetFlashStateMsg {
  flags?: number;
  count?: number;
  timeout_ms?: number;
}

export interface CShowCursorMsg {
  x_normalized?: number;
  y_normalized?: number;
  locked?: boolean;
}

export type CHideCursorMsg = Record<string, never>;

export interface CSetCursorMsg {
  cursor_id?: Long;
}

export interface CGetCursorImageMsg {
  cursor_id?: Long;
}

export interface CSetCursorImageMsg {
  cursor_id?: Long;
  width?: number;
  height?: number;
  hot_x?: number;
  hot_y?: number;
  image?: Buffer;
}

export interface CSetCursorScaleMsg {
  scale?: number;
}

export interface CVideoDecoderInfoMsg {
  info?: string;
  threads?: number;
}

export interface CVideoEncoderInfoMsg {
  info?: string;
}

export type CPauseMsg = Record<string, never>;

export type CResumeMsg = Record<string, never>;

export type CEnableHighResCaptureMsg = Record<string, never>;

export type CDisableHighResCaptureMsg = Record<string, never>;

export type CPauseControllerInputMsg = Record<string, never>;

export type CResumeControllerInputMsg = Record<string, never>;

export type CToggleMagnificationMsg = Record<string, never>;

export interface CSetCapslockMsg {
  pressed?: boolean;
}

export interface CStreamingKeymapEntry {
  scancode?: number;
  normal_keycode?: number;
  shift_keycode?: number;
  capslock_keycode?: number;
  shift_capslock_keycode?: number;
  altgr_keycode?: number;
  altgr_shift_keycode?: number;
  altgr_capslock_keycode?: number;
  altgr_shift_capslock_keycode?: number;
}

export interface CStreamingKeymap {
  entries?: CStreamingKeymapEntry[];
}

export interface CSetKeymapMsg {
  keymap?: CStreamingKeymap;
}

export type CStopRequest = Record<string, never>;

export type CQuitRequest = Record<string, never>;

export interface CDeleteCursorMsg {
  cursor_id?: Long;
}

export interface CSetStreamingClientConfig {
  config?: CStreamingClientConfig;
}

export interface CSetQoSMsg {
  use_qos?: boolean;
}

export interface CSetTargetFramerateMsg {
  framerate?: number;
  reasons?: number;
  framerate_numerator?: number;
  framerate_denominator?: number;
}

export interface CSetTargetBitrateMsg {
  bitrate?: number;
}

export interface COverlayEnabledMsg {
  enabled?: boolean;
}

export interface CSetGammaRampMsg {
  gamma_ramp?: Buffer;
}

export interface CSetActivityMsg {
  activity?: EStreamActivity;
  appid?: number;
  gameid?: Long;
  game_name?: string;
}

export type CSystemSuspendMsg = Record<string, never>;

export interface CVirtualHereRequestMsg {
  hostname?: string;
}

export interface CVirtualHereReadyMsg {
  licensed_device_count?: number;
}

export interface CVirtualHereShareDeviceMsg {
  device_address?: string;
}

export interface CSetSpectatorModeMsg {
  enabled?: boolean;
}

export interface CRemoteHIDMsg {
  data?: Buffer;
  active_input?: boolean;
}

export interface CTouchConfigActiveMsg {
  appid?: number;
  revision?: number;
  creator?: Long;
}

export interface CGetTouchConfigDataMsg {
  appid?: number;
}

export interface CSetTouchConfigDataMsg {
  appid?: number;
  revision?: number;
  data?: Buffer;
  layout?: Buffer;
  creator?: Long;
}

export interface CSaveTouchConfigLayoutMsg {
  appid?: number;
  layout?: Buffer;
}

export interface CTouchActionSetActiveMsg {
  appid?: number;
  actionset_id?: number;
}

export interface CTouchActionSetLayerAddedMsg {
  appid?: number;
  actionset_id?: number;
}

export interface CTouchActionSetLayerRemovedMsg {
  appid?: number;
  actionset_id?: number;
}

export interface CGetTouchIconDataMsg {
  appid?: number;
  icon?: string;
}

export interface CSetTouchIconDataMsg {
  appid?: number;
  icon?: string;
  data?: Buffer;
}

export interface CRemotePlayTogetherGroupUpdateMsg {
  players?: CRemotePlayTogetherGroupUpdateMsg.Player[];
  player_index?: number;
  miniprofile_location?: string;
  game_name?: string;
  avatar_location?: string;
  direct_input?: boolean;
}

export namespace CRemotePlayTogetherGroupUpdateMsg {
  export interface Player {
    accountid?: number;
    guestid?: number;
    keyboard_enabled?: boolean;
    mouse_enabled?: boolean;
    controller_enabled?: boolean;
    controller_slots?: number[];
    avatar_hash?: Buffer;
  }
}

export interface CSetInputTemporarilyDisabledMsg {
  disabled?: boolean;
}

export interface CSetQualityOverrideMsg {
  value?: number;
}

export interface CSetBitrateOverrideMsg {
  value?: number;
}

export type CShowOnScreenKeyboardMsg = Record<string, never>;

export interface CControllerPersonalizationUpdateMsg {
  controller_path?: string;
  controller_name?: string;
  reverse_diamond_button_layout?: boolean;
}

export interface CVRConnectionReady {
  connect_params?: string;
}

export interface CStreamDataLostMsg {
  packets?: number[];
}

export interface CAudioFormat {
  format?: EAudioFormat;
  frequency?: number;
  channels?: number;
}

export interface CVideoFormat {
  format?: EVideoFormat;
  width?: number;
  height?: number;
}

export interface CFrameEvent {
  event_id?: EStreamFrameEvent;
  timestamp?: number;
}

export interface CFrameStats {
  frame_id?: number;
  input_mark?: number;
  events?: CFrameEvent[];
  result?: EStreamFrameResult;
  frame_start_delta?: number;
  frame_display_delta?: number;
  ping_time?: number;
  server_bitrate?: number;
  client_bitrate?: number;
  link_bandwidth?: number;
  packet_loss?: number;
  frame_size?: number;
}

export interface CFrameStatAccumulatedValue {
  stat_type?: EFrameAccumulatedStat;
  count?: number;
  average?: number;
  stddev?: number;
}

export interface CFrameStatsListMsg {
  data_type?: EStreamingDataType;
  stats?: CFrameStats[];
  accumulated_stats?: CFrameStatAccumulatedValue[];
  latest_frame_id?: number;
}

export interface CStreamingSessionStats {
  frame_loss_percentage?: number;
  average_network_time_ms?: number;
  stddev_network_time_ms?: number;
  test_data?: string;
}

export interface CDebugDumpMsg {
  screenshot?: Buffer;
}

export interface CLogMsg {
  type?: number;
  message?: string;
}

export interface CLogUploadMsg {
  type?: ELogFileType;
  data?: Buffer;
}

export interface CTransportSignalMsg {
  webrtc?: CTransportSignalMsg.WebRTCMessage;
  sdr?: Buffer[];
}

export namespace CTransportSignalMsg {
  export interface WebRTCMessage {
    msg?:
      | { greeting: boolean }
      | { offer: string }
      | { answer: string }
      | { candidate: CTransportSignalMsg.WebRTCMessage.Candidate };
  }

  export namespace WebRTCMessage {
    export interface Candidate {
      sdp_mid?: string;
      sdp_mline_index?: number;
      candidate?: string;
    }
  }
}

export interface CControllerConfigMsg {
  type?: EStreamControllerConfigMsg;
  controllerPath?: string;
  appid?: number;
  personalizationResponse?: CControllerConfigMsg.ControllerPersonalizationResponse;
  configResponse?: CControllerConfigMsg.ControllerConfigResponse[];
  activeConfigChangeMsg?: CControllerConfigMsg.ControllerActiveConfigMsg;
}

export namespace CControllerConfigMsg {
  export interface ControllerConfigResponse {
    appid?: number;
    configURL?: string;
    controllerType?: number;
    controllerData?: string;
    selectionOrder?: number;
    actionBlock?: boolean;
  }

  export interface ControllerPersonalizationResponse {
    personalizationData?: string;
  }

  export interface ControllerActiveConfigChangeResponse {
    configURL?: string;
    controllerType?: number;
    controllerData?: string;
    selectionOrder?: number;
  }

  export interface ControllerActiveConfigMsg {
    appid?: number;
    configURL?: string;
    controllerType?: number;
    controllerData?: string;
  }
}
