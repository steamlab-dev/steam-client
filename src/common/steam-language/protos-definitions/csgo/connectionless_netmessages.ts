/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CCLCMsg_SplitPlayerConnect } from "./netmessages";

export interface C2S_CONNECT_SameProcessCheck {
  localhost_process_id?: Long;
  key?: Long;
}

export interface C2S_CONNECT_Message {
  host_version?: number;
  auth_protocol?: number;
  challenge_number?: number;
  reservation_cookie?: Long;
  low_violence?: boolean;
  encrypted_password?: Buffer;
  splitplayers?: CCLCMsg_SplitPlayerConnect[];
  auth_steam?: Buffer;
  challenge_context?: string;
  localhost_same_process_check?: C2S_CONNECT_SameProcessCheck;
}

export interface C2S_CONNECTION_Message {
  addon_name?: string;
  localhost_same_process_check?: C2S_CONNECT_SameProcessCheck;
}
