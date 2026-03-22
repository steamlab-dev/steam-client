/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { WebUINoResponse } from "./webuimessages_base";

export const ETritonPairType = {
  k_ETritonPairType_Unknown: 0,
  k_ETritonPairType_None: 1,
  k_ETritonPairType_RePairToSteamMachineWired: 2,
  k_ETritonPairType_RePairToSteamMachineDocked: 3,
  k_ETritonPairType_RePairToSteamMachineWireless: 4,
  k_ETritonPairType_PairToPuckWired: 5,
  k_ETritonPairType_PairToPuckDocked: 6,
} as const;

export type ETritonPairType = (typeof ETritonPairType)[keyof typeof ETritonPairType];

export const ETritonConnectionType = {
  k_ETritonConnectionType_Unknown: 0,
  k_ETritonConnectionType_Puck: 1,
  k_ETritonConnectionType_Machine: 2,
  k_ETritonConnectionType_USB: 3,
  k_ETritonConnectionType_BT: 4,
} as const;

export type ETritonConnectionType =
  (typeof ETritonConnectionType)[keyof typeof ETritonConnectionType];

export interface CSteamInputService_ControllerButtonStateChanged_Notification {
  controller_index?: number;
  dpad_up?: boolean;
  dpad_down?: boolean;
  dpad_left?: boolean;
  dpad_right?: boolean;
  button_south?: boolean;
  button_east?: boolean;
  button_west?: boolean;
  button_north?: boolean;
  button_back_view?: boolean;
  button_start_options?: boolean;
  button_steam?: boolean;
  button_quick_access?: boolean;
  button_mute_capture?: boolean;
  left_stick_click?: boolean;
  left_stick_touch?: boolean;
  left_stick_deflect?: boolean;
  right_stick_click?: boolean;
  right_stick_touch?: boolean;
  right_stick_deflect?: boolean;
  center_trackpad_touch?: boolean;
  center_trackpad_click?: boolean;
  left_trackpad_touch?: boolean;
  left_trackpad_click?: boolean;
  right_trackpad_touch?: boolean;
  right_trackpad_click?: boolean;
  left_bumper?: boolean;
  left_trigger?: boolean;
  l4?: boolean;
  l5?: boolean;
  left_aux?: boolean;
  right_bumper?: boolean;
  right_trigger?: boolean;
  r4?: boolean;
  r5?: boolean;
  right_aux?: boolean;
  button_state_bits?: bigint;
}

export interface ControllerVector2 {
  x?: number;
  y?: number;
}

export interface ControllerVector3 {
  x?: number;
  y?: number;
  z?: number;
}

export interface ControllerQuaternion {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
}

export interface ControllerGyroEulerAngles {
  pitch?: number;
  yaw?: number;
  roll?: number;
}

export interface CSteamInputService_ControllerAxesStateChange_Notification {
  controller_index?: number;
  joystick_left?: ControllerVector2;
  joystick_right?: ControllerVector2;
  trackpad_left?: ControllerVector2;
  trackpad_right?: ControllerVector2;
  trackpad_center?: ControllerVector2;
  trackpad_pressure_left?: number;
  trackpad_pressure_right?: number;
  trigger_left?: number;
  trigger_right?: number;
}

export interface CSteamInputService_GyroQuaternionChanged_Notification {
  controller_index?: number;
  imu_index?: number;
  gyro_raw_quaternion?: ControllerQuaternion;
  gyro_filtered_quaternion?: ControllerQuaternion;
  imu_sensor_delta_time?: number;
  estimated_packet_rate?: number;
}

export interface CSteamInputService_GyroSpeedChanged_Notification {
  controller_index?: number;
  imu_index?: number;
  gyro_raw_speed?: ControllerGyroEulerAngles;
  gyro_filtered_speed?: ControllerGyroEulerAngles;
}

export interface CSteamInputService_GyroAccelerometerChanged_Notification {
  controller_index?: number;
  imu_index?: number;
  acceleromter_1g?: ControllerVector3;
  trusted_gravity_1g?: ControllerVector3;
}

export interface CSteamInputService_GyroCalibration_Notification {
  controller_index?: number;
  imu_index?: number;
  acceleromter_noise?: number;
  gyroscope_noise?: number;
  calibration_progress?: number;
  calibration_state?: number;
  gyroscope_noise_tolerance?: number;
  accelerometer_noise_tolerance?: number;
}

export interface CSteamInputService_ControllerStateFlow_Request {
  controller_index?: number;
  flow_mode?: number;
}

export type CSteamInputService_ControllerStateFlow_Response = Record<string, never>;

export interface CSteamInputService_GyroSoftwareCalibration_Request {
  controller_index?: number;
  side?: number;
}

export type CSteamInputService_GyroSoftwareCalibration_Response = Record<string, never>;

export interface CSteamInputService_PairDongleTritonConnected_Request {
  controller_index?: number;
  dongle_index?: number;
  slot?: number;
}

export type CSteamInputService_PairDongleTritonConnected_Response = Record<string, never>;

export type CSteamInputService_TritonDonglesChanged_Notification = Record<string, never>;

export interface CSteamInputService_UnpairedTritonPluggedIn_Notification {
  controller_index?: number;
}

export interface CSteamInputService_UnpairedTritonDocked_Notification {
  docked_puck_index?: number;
}

export interface CSteamInputService_TritonUndocked_Notification {
  docked_puck_index?: number;
}

export interface CSteamInputService_ControllerPairingChanged_Notification {
  controller_index?: number;
}

export interface CSteamInputService_PairDongleTritonDocked_Request {
  docked_puck_index?: number;
  target_dongle_index?: number;
}

export type CSteamInputService_PairDongleTritonDocked_Response = Record<string, never>;

export interface CSteamInputService_GetDongles_Request {
  include_bonds?: boolean;
}

export interface CSteamInputService_GetDongles_Response {
  steam_controller_v1?: boolean;
  ibex_internal?: CSteamInputService_GetDongles_Response.Dongle[];
  ibex_external?: CSteamInputService_GetDongles_Response.Dongle[];
}

export namespace CSteamInputService_GetDongles_Response {
  export interface Dongle {
    index?: number;
    dongle_serial_number?: string;
    paired_serial_number?: string;
    paired?: boolean;
    docked?: boolean;
  }
}

export type CSteamInputService_ShouldTritonPairInOobe_Request = Record<string, never>;

export type CSteamInputService_WaitInitialControllerStateEnumerated_Request = Record<string, never>;

export type CSteamInputService_WaitInitialControllerStateEnumerated_Response = Record<
  string,
  never
>;

export interface CSteamInputService_ShouldTritonPairInOobe_Response {
  pair_type?: ETritonPairType;
  controller_index?: number;
  dongle_index?: number;
}

export interface CControllerOriginKey {
  controller_type?: number;
  controller_style?: number;
  source?: number;
  input?: number;
}

export interface CControllerAccessibilityString {
  key?: CControllerOriginKey;
  localized_string?: string;
}

export type CSteamInputService_ControllerAccessibilityStrings_Request = Record<string, never>;

export interface CSteamInputService_ControllerAccessibilityStrings_Response {
  strings?: CControllerAccessibilityString[];
}

export interface CSteamInputService_ControllerPowerMenu_Notification {
  idx?: number;
}

export interface CSteamInputService_ControllerDisconnected_Notification {
  controller_index?: number;
}

export interface CSteamInputService_GetTritonPairingInfo_Request {
  controller_index?: number;
}

export interface CSteamInputService_GetTritonPairingInfo_Response {
  slot?: CSteamInputService_GetTritonPairingInfo_Response.Slot[];
  connection_type?: ETritonConnectionType;
}

export namespace CSteamInputService_GetTritonPairingInfo_Response {
  export interface Slot {
    serial_number?: string;
    active?: boolean;
    type?: ETritonConnectionType;
  }
}

export interface CSteamInputService_ForgetTritonPairingBond_Request {
  controller_index?: number;
  slot_index?: number;
}

export type CSteamInputService_ForgetTritonPairingBond_Response = Record<string, never>;

export interface CSteamInputService_ForgetDonglePairingBond_Request {
  dongle_index?: number;
}

export type CSteamInputService_ForgetDonglePairingBond_Response = Record<string, never>;

export interface CSteamInputService_GetControllerName_Request {
  serial_number?: string;
}

export interface CSteamInputService_GetControllerName_Response {
  controller_name?: string;
}

export interface CSteamInputService_EnableDockedInput_Request {
  controller_index?: number;
  enable?: boolean;
}

export type CSteamInputService_EnableDockedInput_Response = Record<string, never>;

export interface CSteamInputService_RawControllerDetailItem {
  controller_index?: number;
  initialized?: boolean;
  controller_type?: number;
  controller_style?: number;
  xinput_index?: number;
  is_wireless_steam_dongle?: boolean;
  vendor_id?: number;
  product_id?: number;
  capabilities?: bigint;
  firmware_version?: number;
  firmware_build_time?: string;
  serial_number?: string;
  cpu_id?: string;
  name?: string;
  is_remote_device?: boolean;
  is_bluetooth?: boolean;
  has_touchscreen?: boolean;
  mac_addr?: string[];
  battery_level?: number;
  is_charging?: boolean;
  led_brightness?: number;
  led_saturation?: number;
  turn_on_sound?: number;
  turn_off_sound?: number;
  led_red?: number;
  led_green?: number;
  led_blue?: number;
  deadzone_left_stick?: number;
  deadzone_right_stick?: number;
  haptics_enabled?: boolean;
  gyro_sw_antidrift_enabled?: boolean;
  gyro_one_euro_filter_enabled?: boolean;
  haptic_strength_left?: number;
  haptic_strength_right?: number;
  pad_pressure_curve_left?: number;
  pad_pressure_curve_right?: number;
  left_stick_touch_disable_lpad?: boolean;
  right_stick_touch_disable_rpad?: boolean;
  player_slot_led_setting?: number;
  has_nintendo_layout?: boolean;
  has_reversed_layout?: boolean;
  has_universal_face_button_glyphs?: boolean;
  gyro_stationary_tolerance?: number;
  accel_stationary_tolerance?: number;
  aux_capsense_threshold?: number;
  aux_capsense_hysterisis?: number;
  rumble_setting?: number;
}

export type CSteamInputService_ControllerListChanged_Notification = Record<string, never>;

export type CSteamInputService_InitControllerList_Request = Record<string, never>;

export type CSteamInputService_InitControllerList_Response = Record<string, never>;

export type CSteamInputService_GetControllerList_Request = Record<string, never>;

export interface CSteamInputService_GetControllerList_Response {
  controllers?: CSteamInputService_RawControllerDetailItem[];
}

export type CSteamInputService_FirstSteamControllerConnection_Notification = Record<string, never>;

export interface CTritonQosStatus {
  period_ms?: number;
  packets_sent?: number;
  packet_retransmissions?: number;
  interval_max_ms?: number;
  rssi_measure?: number;
  reason?: number;
  rf_channel?: number;
  backup_channel?: number;
}

export interface CSteamInputService_TritonQos_Notification {
  controller_index?: number;
  status?: CTritonQosStatus;
}

export interface CSteamInputService_EnableQosStatus_Request {
  controller_index?: number;
  enable?: boolean;
}

export type CSteamInputService_EnableQosStatus_Response = Record<string, never>;

export abstract class SteamInputManagerService {
  abstract NotifyButtonStateChanged(
    request: CSteamInputService_ControllerButtonStateChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyAxesStateChanged(
    request: CSteamInputService_ControllerAxesStateChange_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyGyroQuaternionStateChanged(
    request: CSteamInputService_GyroQuaternionChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyGyroSpeedStateChanged(
    request: CSteamInputService_GyroSpeedChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyGyroAccelerometerStateChanged(
    request: CSteamInputService_GyroAccelerometerChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyGyroCalibrationStateChanged(
    request: CSteamInputService_GyroCalibration_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyControllerPowerMenu(
    request: CSteamInputService_ControllerPowerMenu_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyUnpairedTritonPluggedIn(
    request: CSteamInputService_UnpairedTritonPluggedIn_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyUnpairedTritonDocked(
    request: CSteamInputService_UnpairedTritonDocked_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyTritonUndocked(
    request: CSteamInputService_TritonUndocked_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyTritonDonglesChanged(
    request: CSteamInputService_TritonDonglesChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyControllerDisconnected(
    request: CSteamInputService_ControllerDisconnected_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyControllerPairingChanged(
    request: CSteamInputService_ControllerPairingChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyControllerListChanged(
    request: CSteamInputService_ControllerListChanged_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyFirstSteamControllerConnection(
    request: CSteamInputService_FirstSteamControllerConnection_Notification,
  ): Promise<WebUINoResponse>;
  abstract NotifyTritonQos(
    request: CSteamInputService_TritonQos_Notification,
  ): Promise<WebUINoResponse>;
  abstract StartControllerStateFlow(
    request: CSteamInputService_ControllerStateFlow_Request,
  ): Promise<CSteamInputService_ControllerStateFlow_Response>;
  abstract EndControllerStateFlow(
    request: CSteamInputService_ControllerStateFlow_Request,
  ): Promise<CSteamInputService_ControllerStateFlow_Response>;
  abstract GetControllerAccessibilityStrings(
    request: CSteamInputService_ControllerAccessibilityStrings_Request,
  ): Promise<CSteamInputService_ControllerAccessibilityStrings_Response>;
  abstract StartGyroSoftwareCalibration(
    request: CSteamInputService_GyroSoftwareCalibration_Request,
  ): Promise<CSteamInputService_GyroSoftwareCalibration_Response>;
  abstract CancelGyroSoftwareCalibration(
    request: CSteamInputService_GyroSoftwareCalibration_Request,
  ): Promise<CSteamInputService_GyroSoftwareCalibration_Response>;
  abstract PairDongleTritonConnected(
    request: CSteamInputService_PairDongleTritonConnected_Request,
  ): Promise<CSteamInputService_PairDongleTritonConnected_Response>;
  abstract PairDongleTritonDocked(
    request: CSteamInputService_PairDongleTritonDocked_Request,
  ): Promise<CSteamInputService_PairDongleTritonDocked_Response>;
  abstract GetDongles(
    request: CSteamInputService_GetDongles_Request,
  ): Promise<CSteamInputService_GetDongles_Response>;
  abstract ShouldTritonPairInOobe(
    request: CSteamInputService_ShouldTritonPairInOobe_Request,
  ): Promise<CSteamInputService_ShouldTritonPairInOobe_Response>;
  abstract WaitInitialControllerStateEnumerated(
    request: CSteamInputService_WaitInitialControllerStateEnumerated_Request,
  ): Promise<CSteamInputService_WaitInitialControllerStateEnumerated_Response>;
  abstract GetTritonPairingInfo(
    request: CSteamInputService_GetTritonPairingInfo_Request,
  ): Promise<CSteamInputService_GetTritonPairingInfo_Response>;
  abstract ForgetTritonPairingBond(
    request: CSteamInputService_ForgetTritonPairingBond_Request,
  ): Promise<CSteamInputService_ForgetTritonPairingBond_Response>;
  abstract ForgetDonglePairingBond(
    request: CSteamInputService_ForgetDonglePairingBond_Request,
  ): Promise<CSteamInputService_ForgetDonglePairingBond_Response>;
  abstract GetControllerName(
    request: CSteamInputService_GetControllerName_Request,
  ): Promise<CSteamInputService_GetControllerName_Response>;
  abstract GetControllerList(
    request: CSteamInputService_GetControllerList_Request,
  ): Promise<CSteamInputService_GetControllerList_Response>;
  abstract EnableDockedInput(
    request: CSteamInputService_EnableDockedInput_Request,
  ): Promise<CSteamInputService_EnableDockedInput_Response>;
  abstract EnableQosStatus(
    request: CSteamInputService_EnableQosStatus_Request,
  ): Promise<CSteamInputService_EnableQosStatus_Response>;
}
