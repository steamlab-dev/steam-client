/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CMsgQAngle } from "./networkbasetypes";

export const ECSPredictionEvents = {
  CSPE_DamageTag: 1,
  CSPE_AddAimPunch: 3,
} as const;

export type ECSPredictionEvents = (typeof ECSPredictionEvents)[keyof typeof ECSPredictionEvents];

export interface CCSPredictionEvent_DamageTag {
  flinch_mod_small?: number;
  flinch_mod_large?: number;
  friendly_fire_damage_reduction_ratio?: number;
}

export interface CCSPredictionEvent_AddAimPunch {
  punch_angle?: CMsgQAngle;
  when_tick?: number;
  when_tick_frac?: number;
}
