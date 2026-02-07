/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

export const EHIDDeviceLocation = {
  k_EDeviceLocationLocal: 0,
  k_EDeviceLocationRemote: 2,
  k_EDeviceLocationAny: 3,
} as const;

export type EHIDDeviceLocation = (typeof EHIDDeviceLocation)[keyof typeof EHIDDeviceLocation];

export const EHIDDeviceDisconnectMethod = {
  k_EDeviceDisconnectMethodUnknown: 0,
  k_EDeviceDisconnectMethodBluetooth: 1,
  k_EDeviceDisconnectMethodFeatureReport: 2,
  k_EDeviceDisconnectMethodOutputReport: 3,
} as const;

export type EHIDDeviceDisconnectMethod =
  (typeof EHIDDeviceDisconnectMethod)[keyof typeof EHIDDeviceDisconnectMethod];

export interface CHIDDeviceInfo {
  location?: EHIDDeviceLocation;
  path?: string;
  vendor_id?: number;
  product_id?: number;
  serial_number?: string;
  release_number?: number;
  manufacturer_string?: string;
  product_string?: string;
  usage_page?: number;
  usage?: number;
  interface_number?: number;
  ostype?: number;
  is_generic_gamepad?: boolean;
  is_generic_joystick?: boolean;
  caps_bits?: number;
  session_id?: number;
  eControllerType_OBSOLETE?: number;
  is_xinput_device_OBSOLETE?: boolean;
  session_remote_play_together_appid?: number;
  is_steamvr_device?: boolean;
  caps_bits2?: number;
}

export interface CHIDDeviceInputReport {
  full_report?: Buffer;
  delta_report?: Buffer;
  delta_report_size?: number;
  delta_report_crc?: number;
}

export interface CHIDMessageToRemote {
  request_id?: number;
  command?:
    | { device_open: CHIDMessageToRemote.DeviceOpen }
    | { device_close: CHIDMessageToRemote.DeviceClose }
    | { device_write: CHIDMessageToRemote.DeviceWrite }
    | { device_read: CHIDMessageToRemote.DeviceRead }
    | { device_send_feature_report: CHIDMessageToRemote.DeviceSendFeatureReport }
    | { device_get_feature_report: CHIDMessageToRemote.DeviceGetFeatureReport }
    | { device_get_vendor_string: CHIDMessageToRemote.DeviceGetVendorString }
    | { device_get_product_string: CHIDMessageToRemote.DeviceGetProductString }
    | { device_get_serial_number_string: CHIDMessageToRemote.DeviceGetSerialNumberString }
    | { device_start_input_reports: CHIDMessageToRemote.DeviceStartInputReports }
    | { device_request_full_report: CHIDMessageToRemote.DeviceRequestFullReport }
    | { device_disconnect: CHIDMessageToRemote.DeviceDisconnect };
}

export namespace CHIDMessageToRemote {
  export interface DeviceOpen {
    info?: CHIDDeviceInfo;
  }

  export interface DeviceClose {
    device?: number;
  }

  export interface DeviceWrite {
    device?: number;
    data?: Buffer;
  }

  export interface DeviceRead {
    device?: number;
    length?: number;
    timeout_ms?: number;
  }

  export interface DeviceSendFeatureReport {
    device?: number;
    data?: Buffer;
  }

  export interface DeviceGetFeatureReport {
    device?: number;
    report_number?: Buffer;
    length?: number;
  }

  export interface DeviceGetVendorString {
    device?: number;
  }

  export interface DeviceGetProductString {
    device?: number;
  }

  export interface DeviceGetSerialNumberString {
    device?: number;
  }

  export interface DeviceStartInputReports {
    device?: number;
    length?: number;
  }

  export interface DeviceRequestFullReport {
    device?: number;
  }

  export interface DeviceDisconnect {
    device?: number;
    disconnectMethod?: EHIDDeviceDisconnectMethod;
    data?: Buffer;
  }
}

export interface CHIDMessageFromRemote {
  command?:
    | { update_device_list: CHIDMessageFromRemote.UpdateDeviceList }
    | { response: CHIDMessageFromRemote.RequestResponse }
    | { reports: CHIDMessageFromRemote.DeviceInputReports }
    | { close_device: CHIDMessageFromRemote.CloseDevice }
    | { close_all_devices: CHIDMessageFromRemote.CloseAllDevices };
}

export namespace CHIDMessageFromRemote {
  export interface UpdateDeviceList {
    devices?: CHIDDeviceInfo[];
  }

  export interface RequestResponse {
    request_id?: number;
    result?: number;
    data?: Buffer;
  }

  export type DeviceInputReports = Record<string, never>;

  export namespace DeviceInputReports {
    export interface DeviceInputReport {
      device?: number;
      reports?: CHIDDeviceInputReport[];
    }
  }
  export interface CloseDevice {
    device?: number;
  }

  export type CloseAllDevices = Record<string, never>;
}
