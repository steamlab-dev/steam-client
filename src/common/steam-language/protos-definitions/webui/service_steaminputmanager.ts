/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export interface CControllerAccessibilityString {
  key?: CControllerOriginKey;
  localized_string?: string;
}

export interface CControllerOriginKey {
  controller_type?: number;
  controller_style?: number;
  source?: number;
  input?: number;
}

export interface ControllerGyroEulerAngles {
  pitch?: number;
  yaw?: number;
  roll?: number;
}

export interface ControllerQuaternion {
  w?: number;
  x?: number;
  y?: number;
  z?: number;
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

export type CSteamInputService_ControllerAccessibilityStrings_Request = Record<string, never>;

export interface CSteamInputService_ControllerAccessibilityStrings_Response {
  strings?: CControllerAccessibilityString[];
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
}

export interface CSteamInputService_ControllerDisconnected_Notification {
  controller_index?: number;
}

export interface CSteamInputService_ControllerPairingChanged_Notification {
  controller_index?: number;
}

export interface CSteamInputService_ControllerPowerMenu_Notification {
  idx?: number;
}

export interface CSteamInputService_ControllerStateFlow_Request {
  controller_index?: number;
  flow_mode?: number;
}

export type CSteamInputService_ControllerStateFlow_Response = Record<string, never>;

export interface CSteamInputService_ForgetDonglePairingBond_Request {
  dongle_index?: number;
}

export type CSteamInputService_ForgetDonglePairingBond_Response = Record<string, never>;

export interface CSteamInputService_ForgetTritonPairingBond_Request {
  controller_index?: number;
  slot_index?: number;
}

export type CSteamInputService_ForgetTritonPairingBond_Response = Record<string, never>;

export interface CSteamInputService_GetControllerName_Request {
  serial_number?: string;
}

export interface CSteamInputService_GetControllerName_Response {
  controller_name?: string;
}

export interface CSteamInputService_GetDongles_Request {
  include_bonds?: boolean;
}

export interface CSteamInputService_GetDongles_Response {
  steam_controller_v1?: boolean;
  ibex_internal?: CSteamInputService_GetDongles_Response_Dongle[];
  ibex_external?: CSteamInputService_GetDongles_Response_Dongle[];
}

export interface CSteamInputService_GetDongles_Response_Dongle {
  index?: number;
  dongle_serial_number?: string;
  paired_serial_number?: string;
  paired?: boolean;
}

export interface CSteamInputService_GetTritonPairingInfo_Request {
  controller_index?: number;
}

export interface CSteamInputService_GetTritonPairingInfo_Response {
  slot?: CSteamInputService_GetTritonPairingInfo_Response_Slot[];
  connection_type?: number;
}

export interface CSteamInputService_GetTritonPairingInfo_Response_Slot {
  serial_number?: string;
  active?: boolean;
  type?: number;
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

export interface CSteamInputService_GyroQuaternionChanged_Notification {
  controller_index?: number;
  imu_index?: number;
  gyro_raw_quaternion?: ControllerQuaternion;
  gyro_filtered_quaternion?: ControllerQuaternion;
  imu_sensor_delta_time?: number;
  estimated_packet_rate?: number;
}

export interface CSteamInputService_GyroSoftwareCalibration_Request {
  controller_index?: number;
  side?: number;
}

export type CSteamInputService_GyroSoftwareCalibration_Response = Record<string, never>;

export interface CSteamInputService_GyroSpeedChanged_Notification {
  controller_index?: number;
  imu_index?: number;
  gyro_raw_speed?: ControllerGyroEulerAngles;
  gyro_filtered_speed?: ControllerGyroEulerAngles;
}

export interface CSteamInputService_PairDongleTritonConnected_Request {
  controller_index?: number;
  dongle_index?: number;
  slot?: number;
}

export type CSteamInputService_PairDongleTritonConnected_Response = Record<string, never>;

export interface CSteamInputService_PairDongleTritonDocked_Request {
  docked_puck_index?: number;
  target_dongle_index?: number;
}

export type CSteamInputService_PairDongleTritonDocked_Response = Record<string, never>;

export type CSteamInputService_ShouldTritonPairInOobe_Request = Record<string, never>;

export interface CSteamInputService_ShouldTritonPairInOobe_Response {
  pair_type?: number;
  controller_index?: number;
  dongle_index?: number;
}

export type CSteamInputService_TritonDonglesChanged_Notification = Record<string, never>;

export interface CSteamInputService_TritonUndocked_Notification {
  docked_puck_index?: number;
}

export interface CSteamInputService_UnpairedTritonDocked_Notification {
  docked_puck_index?: number;
}

export interface CSteamInputService_UnpairedTritonPluggedIn_Notification {
  controller_index?: number;
}

export type CSteamInputService_WaitInitialControllerStateEnumerated_Request = Record<string, never>;

export interface CSteamInputService_WaitInitialControllerStateEnumerated_Response {
  controller?: number[];
}

export abstract class SteamInputManagerService {
  abstract CancelGyroSoftwareCalibration(
    request: CSteamInputService_GyroSoftwareCalibration_Request,
  ): Promise<CSteamInputService_GyroSoftwareCalibration_Response>;
  abstract EndControllerStateFlow(
    request: CSteamInputService_ControllerStateFlow_Request,
  ): Promise<CSteamInputService_ControllerStateFlow_Response>;
  abstract ForgetDonglePairingBond(
    request: CSteamInputService_ForgetDonglePairingBond_Request,
  ): Promise<CSteamInputService_ForgetDonglePairingBond_Response>;
  abstract ForgetTritonPairingBond(
    request: CSteamInputService_ForgetTritonPairingBond_Request,
  ): Promise<CSteamInputService_ForgetTritonPairingBond_Response>;
  abstract GetControllerAccessibilityStrings(
    request: CSteamInputService_ControllerAccessibilityStrings_Request,
  ): Promise<CSteamInputService_ControllerAccessibilityStrings_Response>;
  abstract GetControllerName(
    request: CSteamInputService_GetControllerName_Request,
  ): Promise<CSteamInputService_GetControllerName_Response>;
  abstract GetDongles(
    request: CSteamInputService_GetDongles_Request,
  ): Promise<CSteamInputService_GetDongles_Response>;
  abstract GetTritonPairingInfo(
    request: CSteamInputService_GetTritonPairingInfo_Request,
  ): Promise<CSteamInputService_GetTritonPairingInfo_Response>;
  abstract NotifyAxesStateChanged(
    request: CSteamInputService_ControllerAxesStateChange_Notification,
  ): Promise<void>;
  abstract NotifyButtonStateChanged(
    request: CSteamInputService_ControllerButtonStateChanged_Notification,
  ): Promise<void>;
  abstract NotifyControllerDisconnected(
    request: CSteamInputService_ControllerDisconnected_Notification,
  ): Promise<void>;
  abstract NotifyControllerPairingChanged(
    request: CSteamInputService_ControllerPairingChanged_Notification,
  ): Promise<void>;
  abstract NotifyControllerPowerMenu(
    request: CSteamInputService_ControllerPowerMenu_Notification,
  ): Promise<void>;
  abstract NotifyGyroAccelerometerStateChanged(
    request: CSteamInputService_GyroAccelerometerChanged_Notification,
  ): Promise<void>;
  abstract NotifyGyroCalibrationStateChanged(
    request: CSteamInputService_GyroCalibration_Notification,
  ): Promise<void>;
  abstract NotifyGyroQuaternionStateChanged(
    request: CSteamInputService_GyroQuaternionChanged_Notification,
  ): Promise<void>;
  abstract NotifyGyroSpeedStateChanged(
    request: CSteamInputService_GyroSpeedChanged_Notification,
  ): Promise<void>;
  abstract NotifyTritonDonglesChanged(
    request: CSteamInputService_TritonDonglesChanged_Notification,
  ): Promise<void>;
  abstract NotifyTritonUndocked(
    request: CSteamInputService_TritonUndocked_Notification,
  ): Promise<void>;
  abstract NotifyUnpairedTritonDocked(
    request: CSteamInputService_UnpairedTritonDocked_Notification,
  ): Promise<void>;
  abstract NotifyUnpairedTritonPluggedIn(
    request: CSteamInputService_UnpairedTritonPluggedIn_Notification,
  ): Promise<void>;
  abstract PairDongleTritonConnected(
    request: CSteamInputService_PairDongleTritonConnected_Request,
  ): Promise<CSteamInputService_PairDongleTritonConnected_Response>;
  abstract PairDongleTritonDocked(
    request: CSteamInputService_PairDongleTritonDocked_Request,
  ): Promise<CSteamInputService_PairDongleTritonDocked_Response>;
  abstract ShouldTritonPairInOobe(
    request: CSteamInputService_ShouldTritonPairInOobe_Request,
  ): Promise<CSteamInputService_ShouldTritonPairInOobe_Response>;
  abstract StartControllerStateFlow(
    request: CSteamInputService_ControllerStateFlow_Request,
  ): Promise<CSteamInputService_ControllerStateFlow_Response>;
  abstract StartGyroSoftwareCalibration(
    request: CSteamInputService_GyroSoftwareCalibration_Request,
  ): Promise<CSteamInputService_GyroSoftwareCalibration_Response>;
  abstract WaitInitialControllerStateEnumerated(
    request: CSteamInputService_WaitInitialControllerStateEnumerated_Request,
  ): Promise<CSteamInputService_WaitInitialControllerStateEnumerated_Response>;
}
