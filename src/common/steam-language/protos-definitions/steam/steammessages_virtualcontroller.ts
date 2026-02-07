/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EInputMode = {
  k_EInputModeUnknown: 0,
  k_EInputModeMouse: 1,
  k_EInputModeController: 2,
  k_EInputModeMouseAndController: 3,
} as const;

export type EInputMode = (typeof EInputMode)[keyof typeof EInputMode];

export const EMouseMode = {
  k_EMouseModeUnknown: 0,
  k_EMouseModeRelativeCursor_OBSOLETE: 1,
  k_EMouseModeAbsoluteCursor: 2,
  k_EMouseModeTouch: 3,
  k_EMouseModeRelative: 4,
} as const;

export type EMouseMode = (typeof EMouseMode)[keyof typeof EMouseMode];

export const EControllerElementType = {
  k_EControllerElementTypeThumb: 0,
  k_EControllerElementTypeButtonSteam: 1,
  k_EControllerElementTypeJoystickLeft: 2,
  k_EControllerElementTypeButtonJoystickLeft: 3,
  k_EControllerElementTypeJoystickRight: 4,
  k_EControllerElementTypeButtonJoystickRight: 5,
  k_EControllerElementTypeDPad: 6,
  k_EControllerElementTypeButtonA: 7,
  k_EControllerElementTypeButtonB: 8,
  k_EControllerElementTypeButtonX: 9,
  k_EControllerElementTypeButtonY: 10,
  k_EControllerElementTypeButtonSelect: 11,
  k_EControllerElementTypeButtonStart: 12,
  k_EControllerElementTypeButtonTriggerLeft: 13,
  k_EControllerElementTypeButtonTriggerRight: 14,
  k_EControllerElementTypeButtonBumperLeft: 15,
  k_EControllerElementTypeButtonBumperRight: 16,
  k_EControllerElementTypeButtonMacro0: 17,
  k_EControllerElementTypeButtonMacro1: 18,
  k_EControllerElementTypeButtonMacro2: 19,
  k_EControllerElementTypeButtonMacro3: 20,
  k_EControllerElementTypeButtonMacro4: 21,
  k_EControllerElementTypeButtonMacro5: 22,
  k_EControllerElementTypeButtonMacro6: 23,
  k_EControllerElementTypeButtonMacro7: 24,
  k_EControllerElementTypeTrackpadCenter: 25,
  k_EControllerElementTypeTrackpadLeft: 26,
  k_EControllerElementTypeTrackpadRight: 27,
  k_EControllerElementTypeKeyboard: 28,
  k_EControllerElementTypeMagnifyingGlass: 29,
  k_EControllerElementTypeButtonMacro1Finger: 30,
  k_EControllerElementTypeButtonMacro2Finger: 31,
  k_EControllerElementTypeRecordInput: 32,
  k_EControllerElementTypePlaybackInput: 33,
  k_EControllerElementTypePaste: 34,
  k_EControllerElementTypeMax: 35,
} as const;

export type EControllerElementType =
  (typeof EControllerElementType)[keyof typeof EControllerElementType];

export interface CVirtualControllerElement {
  type?: EControllerElementType;
  visible?: boolean;
  x_position?: number;
  y_position?: number;
  x_scale?: number;
  y_scale?: number;
}

export interface CVirtualControllerColor {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export interface CVirtualControllerLayout {
  layout_version?: number;
  actionset_id?: number;
  elements?: CVirtualControllerElement[];
  color?: CVirtualControllerColor;
}

export interface CVirtualControllerLayouts {
  layouts?: CVirtualControllerLayout[];
  input_mode?: EInputMode;
  mouse_mode?: EMouseMode;
  trackpad_sensitivity?: number;
  pinch_zoom_enabled?: boolean;
  pinch_zoom_x?: number;
  pinch_zoom_y?: number;
  pinch_zoom_scale?: number;
  shaken?: boolean;
  mouse_offscreen?: boolean;
}

export interface CVirtualControllerConfig {
  name?: string;
  actionsets?: CVirtualControllerConfig.ActionSet[];
  default_mouse_mode?: EMouseMode;
}

export namespace CVirtualControllerConfig {
  export interface Control {
    name?: string;
    icon?: string;
    input_source?: number;
    input_mode?: number;
    input_element?: number;
    output_gamepad?: number;
    output_keyboard?: number;
    output_mouse?: number;
    icon_foreground?: string;
    icon_background?: string;
    input_toggle?: boolean;
    input_activate_stick_or_trackpad?: number;
    activation_type?: number;
    long_press_ms?: number;
    double_press_ms?: number;
  }

  export interface ActionSet {
    id?: number;
    parent_id?: number;
    name?: string;
    controls?: CVirtualControllerConfig.Control[];
  }
}

export interface CVirtualControllerLayoutPackage {
  appid?: number;
  creator?: Long;
  initial_revision?: number;
  saved_revision?: number;
  config?: CVirtualControllerConfig;
  layouts?: CVirtualControllerLayouts;
}

export interface CVirtualControllerGlobalConfig {
  feedback_enabled?: boolean;
  gyroscope_enabled?: boolean;
  auto_fade_enabled?: boolean;
  rumble_enabled?: boolean;
  shake_fade_enabled?: boolean;
}
