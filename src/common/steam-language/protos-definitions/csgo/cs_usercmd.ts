/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";
import type { CBaseUserCmdPB } from "./usercmd";

export interface CSGOInterpolationInfoPB {
  src_tick?: number;
  dst_tick?: number;
  frac?: number;
}

export interface CSGOInterpolationInfoPB_CL {
  frac?: number;
}

export interface CSGOInputHistoryEntryPB {
  view_angles?: CMsgQAngle;
  render_tick_count?: number;
  render_tick_fraction?: number;
  player_tick_count?: number;
  player_tick_fraction?: number;
  cl_interp?: CSGOInterpolationInfoPB_CL;
  sv_interp0?: CSGOInterpolationInfoPB;
  sv_interp1?: CSGOInterpolationInfoPB;
  player_interp?: CSGOInterpolationInfoPB;
  frame_number?: number;
  target_ent_index?: number;
  shoot_position?: CMsgVector;
  target_head_pos_check?: CMsgVector;
  target_abs_pos_check?: CMsgVector;
  target_abs_ang_check?: CMsgQAngle;
}

export interface CSGOUserCmdPB {
  base?: CBaseUserCmdPB;
  input_history?: CSGOInputHistoryEntryPB[];
  attack1_start_history_index?: number;
  attack2_start_history_index?: number;
  left_hand_desired?: boolean;
  is_predicting_body_shot_fx?: boolean;
  is_predicting_head_shot_fx?: boolean;
  is_predicting_kill_ragdolls?: boolean;
}
