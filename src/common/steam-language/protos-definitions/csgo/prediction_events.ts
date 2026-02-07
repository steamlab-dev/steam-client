/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export const EBasePredictionEvents = {
  BPE_StringCommand: 128,
  BPE_Teleport: 130,
  BPE_Diagnostic: 16384,
} as const;

export type EBasePredictionEvents =
  (typeof EBasePredictionEvents)[keyof typeof EBasePredictionEvents];

export interface CPredictionEvent_Teleport {
  origin?: CMsgVector;
  angles?: CMsgQAngle;
  drop_to_ground_range?: number;
}

export interface CPredictionEvent_StringCommand {
  command?: string;
}

export interface CPredictionEvent_Diagnostic {
  id?: number;
  requested_sync?: number;
  requested_player_index?: number;
  execution_sync?: number[];
}
