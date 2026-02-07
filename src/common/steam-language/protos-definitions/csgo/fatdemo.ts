/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export const EHitGroup = {
  EHG_Generic: 0,
  EHG_Head: 1,
  EHG_Chest: 2,
  EHG_Stomach: 3,
  EHG_LeftArm: 4,
  EHG_RightArm: 5,
  EHG_LeftLeg: 6,
  EHG_RightLeg: 7,
  EHG_Gear: 8,
  EHG_Miss: 9,
} as const;

export type EHitGroup = (typeof EHitGroup)[keyof typeof EHitGroup];

export const ETeam = {
  ET_Unknown: 0,
  ET_Spectator: 1,
  ET_Terrorist: 2,
  ET_CT: 3,
} as const;

export type ETeam = (typeof ETeam)[keyof typeof ETeam];

export const EWeaponType = {
  EWT_Knife: 0,
  EWT_Pistol: 1,
  EWT_SubMachineGun: 2,
  EWT_Rifle: 3,
  EWT_Shotgun: 4,
  EWT_SniperRifle: 5,
  EWT_MachineGun: 6,
  EWT_C4: 7,
  EWT_Grenade: 8,
  EWT_Equipment: 9,
  EWT_StackableItem: 10,
  EWT_Unknown: 11,
} as const;

export type EWeaponType = (typeof EWeaponType)[keyof typeof EWeaponType];

export interface MLDict {
  key?: string;
  val_string?: string;
  val_int?: number;
  val_float?: number;
}

export interface MLEvent {
  event_name?: string;
  data?: MLDict[];
}

export interface MLMatchState {
  game_mode?: string;
  phase?: string;
  round?: number;
  score_ct?: number;
  score_t?: number;
}

export interface MLRoundState {
  phase?: string;
  win_team?: ETeam;
  bomb_state?: string;
}

export interface MLWeaponState {
  index?: number;
  name?: string;
  type?: EWeaponType;
  ammo_clip?: number;
  ammo_clip_max?: number;
  ammo_reserve?: number;
  state?: string;
  recoil_index?: number;
}

export interface MLPlayerState {
  account_id?: number;
  player_slot?: number;
  entindex?: number;
  name?: string;
  clan?: string;
  team?: ETeam;
  abspos?: CMsgVector;
  eyeangle?: CMsgQAngle;
  eyeangle_fwd?: CMsgVector;
  health?: number;
  armor?: number;
  flashed?: number;
  smoked?: number;
  money?: number;
  round_kills?: number;
  round_killhs?: number;
  burning?: number;
  helmet?: boolean;
  defuse_kit?: boolean;
  weapons?: MLWeaponState[];
}

export interface MLGameState {
  match?: MLMatchState;
  round?: MLRoundState;
  players?: MLPlayerState[];
}

export interface MLDemoHeader {
  map_name?: string;
  tick_rate?: number;
  version?: number;
  steam_universe?: number;
}

export interface MLTick {
  tick_count?: number;
  state?: MLGameState;
  events?: MLEvent[];
}

export interface VacNetShot {
  steamid_player?: Long;
  round_number?: number;
  hit_type?: number;
  weapon_type?: number;
  distance_to_hurt_target?: number;
  delta_yaw_window?: number[];
  delta_pitch_window?: number[];
}
