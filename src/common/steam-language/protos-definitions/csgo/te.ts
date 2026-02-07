/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgQAngle, CMsgVector } from "./networkbasetypes";

export const ETEProtobufIds = {
  TE_EffectDispatchId: 400,
  TE_ArmorRicochetId: 401,
  TE_BeamEntPointId: 402,
  TE_BeamEntsId: 403,
  TE_BeamPointsId: 404,
  TE_BeamRingId: 405,
  TE_BubblesId: 408,
  TE_BubbleTrailId: 409,
  TE_DecalId: 410,
  TE_WorldDecalId: 411,
  TE_EnergySplashId: 412,
  TE_FizzId: 413,
  TE_ShatterSurfaceId: 414,
  TE_GlowSpriteId: 415,
  TE_ImpactId: 416,
  TE_MuzzleFlashId: 417,
  TE_BloodStreamId: 418,
  TE_ExplosionId: 419,
  TE_DustId: 420,
  TE_LargeFunnelId: 421,
  TE_SparksId: 422,
  TE_PhysicsPropId: 423,
  TE_SmokeId: 426,
} as const;

export type ETEProtobufIds = (typeof ETEProtobufIds)[keyof typeof ETEProtobufIds];

export interface CMsgTEArmorRicochet {
  pos?: CMsgVector;
  dir?: CMsgVector;
}

export interface CMsgTEBaseBeam {
  modelindex?: Long;
  haloindex?: Long;
  startframe?: number;
  framerate?: number;
  life?: number;
  width?: number;
  endwidth?: number;
  fadelength?: number;
  amplitude?: number;
  color?: number;
  speed?: number;
  flags?: number;
}

export interface CMsgTEBeamEntPoint {
  base?: CMsgTEBaseBeam;
  startentity?: number;
  endentity?: number;
  start?: CMsgVector;
  end?: CMsgVector;
}

export interface CMsgTEBeamEnts {
  base?: CMsgTEBaseBeam;
  startentity?: number;
  endentity?: number;
}

export interface CMsgTEBeamPoints {
  base?: CMsgTEBaseBeam;
  start?: CMsgVector;
  end?: CMsgVector;
}

export interface CMsgTEBeamRing {
  base?: CMsgTEBaseBeam;
  startentity?: number;
  endentity?: number;
}

export interface CMsgTEBubbles {
  mins?: CMsgVector;
  maxs?: CMsgVector;
  height?: number;
  count?: number;
  speed?: number;
}

export interface CMsgTEBubbleTrail {
  mins?: CMsgVector;
  maxs?: CMsgVector;
  waterz?: number;
  count?: number;
  speed?: number;
}

export interface CMsgTEDecal {
  origin?: CMsgVector;
  start?: CMsgVector;
  entity?: number;
  hitbox?: number;
  index?: number;
}

export interface CMsgEffectData {
  origin?: CMsgVector;
  start?: CMsgVector;
  normal?: CMsgVector;
  angles?: CMsgQAngle;
  entity?: number;
  otherentity?: number;
  scale?: number;
  magnitude?: number;
  radius?: number;
  surfaceprop?: number;
  effectindex?: Long;
  damagetype?: number;
  material?: number;
  hitbox?: number;
  color?: number;
  flags?: number;
  attachmentindex?: number;
  effectname?: number;
  attachmentname?: number;
}

export interface CMsgTEEffectDispatch {
  effectdata?: CMsgEffectData;
}

export interface CMsgTEEnergySplash {
  pos?: CMsgVector;
  dir?: CMsgVector;
  explosive?: boolean;
}

export interface CMsgTEFizz {
  entity?: number;
  density?: number;
  current?: number;
}

export interface CMsgTEShatterSurface {
  origin?: CMsgVector;
  angles?: CMsgQAngle;
  force?: CMsgVector;
  forcepos?: CMsgVector;
  width?: number;
  height?: number;
  shardsize?: number;
  surfacetype?: number;
  frontcolor?: number;
  backcolor?: number;
}

export interface CMsgTEGlowSprite {
  origin?: CMsgVector;
  scale?: number;
  life?: number;
  brightness?: number;
}

export interface CMsgTEImpact {
  origin?: CMsgVector;
  normal?: CMsgVector;
  type?: number;
}

export interface CMsgTEMuzzleFlash {
  origin?: CMsgVector;
  angles?: CMsgQAngle;
  scale?: number;
  type?: number;
}

export interface CMsgTEBloodStream {
  origin?: CMsgVector;
  direction?: CMsgVector;
  color?: number;
  amount?: number;
}

export interface CMsgTEExplosion {
  origin?: CMsgVector;
  flags?: number;
  normal?: CMsgVector;
  radius?: number;
  magnitude?: number;
  affect_ragdolls?: boolean;
  sound_name?: string;
  explosion_type?: number;
  create_debris?: boolean;
  debris_origin?: CMsgVector;
  debris_surfaceprop?: number;
}

export interface CMsgTEDust {
  origin?: CMsgVector;
  size?: number;
  speed?: number;
  direction?: CMsgVector;
}

export interface CMsgTELargeFunnel {
  origin?: CMsgVector;
  reversed?: number;
}

export interface CMsgTESparks {
  origin?: CMsgVector;
  magnitude?: number;
  length?: number;
  direction?: CMsgVector;
}

export interface CMsgTEPhysicsProp {
  origin?: CMsgVector;
  velocity?: CMsgVector;
  angles?: CMsgQAngle;
  skin?: number;
  flags?: number;
  effects?: number;
  color?: number;
  modelindex?: Long;
  unused_breakmodelsnottomake?: number;
  scale?: number;
  dmgpos?: CMsgVector;
  dmgdir?: CMsgVector;
  dmgtype?: number;
}

export interface CMsgTESmoke {
  origin?: CMsgVector;
  scale?: number;
}

export interface CMsgTEWorldDecal {
  origin?: CMsgVector;
  normal?: CMsgVector;
  index?: number;
}
