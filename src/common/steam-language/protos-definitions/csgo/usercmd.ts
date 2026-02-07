/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgQAngle } from "./networkbasetypes";

export interface CInButtonStatePB {
  buttonstate1?: Long;
  buttonstate2?: Long;
  buttonstate3?: Long;
}

export interface CSubtickMoveStep {
  button?: Long;
  pressed?: boolean;
  when?: number;
  analog_forward_delta?: number;
  analog_left_delta?: number;
  pitch_delta?: number;
  yaw_delta?: number;
}

export interface CBaseUserCmdExecutionNotes {
  ignored_reason?: string;
}

export interface CBaseUserCmdPB {
  legacy_command_number?: number;
  client_tick?: number;
  prediction_offset_ticks_x256?: number;
  buttons_pb?: CInButtonStatePB;
  viewangles?: CMsgQAngle;
  forwardmove?: number;
  leftmove?: number;
  upmove?: number;
  impulse?: number;
  weaponselect?: number;
  random_seed?: number;
  mousedx?: number;
  mousedy?: number;
  pawn_entity_handle?: number;
  subtick_moves?: CSubtickMoveStep[];
  move_crc?: Buffer;
  consumed_server_angle_changes?: number;
  cmd_flags?: number;
  execution_notes?: CBaseUserCmdExecutionNotes;
}

export interface CUserCmdBasePB {
  base?: CBaseUserCmdPB;
}
