/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgVector } from "./networkbasetypes";

export const EBaseGameEvents = {
  GE_VDebugGameSessionIDEvent: 200,
  GE_PlaceDecalEvent: 201,
  GE_ClearWorldDecalsEvent: 202,
  GE_ClearEntityDecalsEvent: 203,
  GE_ClearDecalsForEntityEvent: 204,
  GE_Source1LegacyGameEventList: 205,
  GE_Source1LegacyListenEvents: 206,
  GE_Source1LegacyGameEvent: 207,
  GE_SosStartSoundEvent: 208,
  GE_SosStopSoundEvent: 209,
  GE_SosSetSoundEventParams: 210,
  GE_SosSetLibraryStackFields: 211,
  GE_SosStopSoundEventHash: 212,
} as const;

export type EBaseGameEvents = (typeof EBaseGameEvents)[keyof typeof EBaseGameEvents];

export interface CMsgVDebugGameSessionIDEvent {
  clientid?: number;
  gamesessionid?: string;
}

export interface CMsgPlaceDecalEvent {
  position?: CMsgVector;
  normal?: CMsgVector;
  saxis?: CMsgVector;
  boneindex?: number;
  triangleindex?: number;
  flags?: number;
  color?: number;
  random_seed?: number;
  decal_group_name?: number;
  size_override?: number;
  entityhandle?: number;
  material_id?: Long;
  sequence_name?: number;
}

export interface CMsgClearWorldDecalsEvent {
  flagstoclear?: number;
}

export interface CMsgClearEntityDecalsEvent {
  flagstoclear?: number;
}

export interface CMsgClearDecalsForEntityEvent {
  flagstoclear?: number;
  entityhandle?: number;
}

export interface CMsgSource1LegacyGameEventList {
  descriptors?: CMsgSource1LegacyGameEventList.descriptor_t[];
}

export namespace CMsgSource1LegacyGameEventList {
  export interface key_t {
    type?: number;
    name?: string;
  }

  export interface descriptor_t {
    eventid?: number;
    name?: string;
    keys?: CMsgSource1LegacyGameEventList.key_t[];
  }
}

export interface CMsgSource1LegacyListenEvents {
  playerslot?: number;
  eventarraybits?: number[];
}

export interface CMsgSource1LegacyGameEvent {
  event_name?: string;
  eventid?: number;
  keys?: CMsgSource1LegacyGameEvent.key_t[];
  server_tick?: number;
  passthrough?: number;
}

export namespace CMsgSource1LegacyGameEvent {
  export interface key_t {
    type?: number;
    val_string?: string;
    val_float?: number;
    val_long?: number;
    val_short?: number;
    val_byte?: number;
    val_bool?: boolean;
    val_uint64?: Long;
  }
}

export interface CMsgSosStartSoundEvent {
  soundevent_guid?: number;
  soundevent_hash?: number;
  source_entity_index?: number;
  seed?: number;
  packed_params?: Buffer;
  start_time?: number;
}

export interface CMsgSosStopSoundEvent {
  soundevent_guid?: number;
}

export interface CMsgSosStopSoundEventHash {
  soundevent_hash?: number;
  source_entity_index?: number;
}

export interface CMsgSosSetSoundEventParams {
  soundevent_guid?: number;
  packed_params?: Buffer;
}

export interface CMsgSosSetLibraryStackFields {
  stack_hash?: number;
  packed_fields?: Buffer;
}
