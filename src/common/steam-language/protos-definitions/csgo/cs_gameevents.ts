/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export const ECsgoGameEvents = {
  GE_PlayerAnimEventId: 450,
  GE_RadioIconEventId: 451,
  GE_FireBulletsId: 452,
  GE_PlayerBulletHitId: 453,
} as const;

export type ECsgoGameEvents = (typeof ECsgoGameEvents)[keyof typeof ECsgoGameEvents];

export interface CMsgTEPlayerAnimEvent {
  player?: number;
  event?: number;
  data?: number;
}

export interface CMsgTERadioIcon {
  player?: number;
}

export interface CMsgTEFireBullets {
  origin?: CMsgVector;
  angles?: CMsgQAngle;
  weapon_id?: number;
  mode?: number;
  seed?: number;
  player?: number;
  inaccuracy?: number;
  recoil_index?: number;
  spread?: number;
  sound_type?: number;
  item_def_index?: number;
  sound_dsp_effect?: number;
  ent_origin?: CMsgVector;
  num_bullets_remaining?: number;
  attack_type?: number;
  player_inair?: boolean;
  player_scoped?: boolean;
  tick?: number;
  extra?: CMsgTEFireBullets.Extra;
}

export namespace CMsgTEFireBullets {
  export interface Extra {
    aim_punch?: CMsgQAngle;
    attack_tick_count?: number;
    attack_tick_frac?: number;
    render_tick_count?: number;
    render_tick_frac?: number;
    inaccuracy_move?: number;
    inaccuracy_air?: number;
    type?: number;
  }
}

export interface CMsgPlayerBulletHit {
  attacker_slot?: number;
  victim_slot?: number;
  victim_pos?: CMsgVector;
  hit_group?: number;
  damage?: number;
  penetration_count?: number;
  is_kill?: boolean;
}
