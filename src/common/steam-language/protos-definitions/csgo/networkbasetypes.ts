/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const SignonState_t = {
  SIGNONSTATE_NONE: 0,
  SIGNONSTATE_CHALLENGE: 1,
  SIGNONSTATE_CONNECTED: 2,
  SIGNONSTATE_NEW: 3,
  SIGNONSTATE_PRESPAWN: 4,
  SIGNONSTATE_SPAWN: 5,
  SIGNONSTATE_FULL: 6,
  SIGNONSTATE_CHANGELEVEL: 7,
} as const;

export type SignonState_t = (typeof SignonState_t)[keyof typeof SignonState_t];

export const NET_Messages = {
  net_NOP: 0,
  net_Disconnect_Legacy: 1,
  net_SplitScreenUser: 3,
  net_Tick: 4,
  net_StringCmd: 5,
  net_SetConVar: 6,
  net_SignonState: 7,
  net_SpawnGroup_Load: 8,
  net_SpawnGroup_ManifestUpdate: 9,
  net_SpawnGroup_SetCreationTick: 11,
  net_SpawnGroup_Unload: 12,
  net_SpawnGroup_LoadCompleted: 13,
  net_DebugOverlay: 15,
} as const;

export type NET_Messages = (typeof NET_Messages)[keyof typeof NET_Messages];

export const SpawnGroupFlags_t = {
  SPAWN_GROUP_LOAD_ENTITIES_FROM_SAVE: 1,
  SPAWN_GROUP_DONT_SPAWN_ENTITIES: 2,
  SPAWN_GROUP_SYNCHRONOUS_SPAWN: 4,
  SPAWN_GROUP_IS_INITIAL_SPAWN_GROUP: 8,
  SPAWN_GROUP_CREATE_CLIENT_ONLY_ENTITIES: 16,
  SPAWN_GROUP_BLOCK_UNTIL_LOADED: 64,
  SPAWN_GROUP_LOAD_STREAMING_DATA: 128,
  SPAWN_GROUP_CREATE_NEW_SCENE_WORLD: 256,
} as const;

export type SpawnGroupFlags_t = (typeof SpawnGroupFlags_t)[keyof typeof SpawnGroupFlags_t];

export interface CMsgVector {
  x?: number;
  y?: number;
  z?: number;
  w?: number;
}

export interface CMsgVector2D {
  x?: number;
  y?: number;
}

export interface CMsgQAngle {
  x?: number;
  y?: number;
  z?: number;
}

export interface CMsgQuaternion {
  x?: number;
  y?: number;
  z?: number;
  w?: number;
}

export interface CMsgTransform {
  position?: CMsgVector;
  scale?: number;
  orientation?: CMsgQuaternion;
}

export interface CMsgRGBA {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
}

export interface CMsgPlayerInfo {
  name?: string;
  xuid?: Long;
  userid?: number;
  steamid?: Long;
  fakeplayer?: boolean;
  ishltv?: boolean;
}

export interface CEntityMsg {
  target_entity?: number;
}

export interface CMsg_CVars {
  cvars?: CMsg_CVars.CVar[];
}

export namespace CMsg_CVars {
  export interface CVar {
    name?: string;
    value?: string;
  }
}

export type CNETMsg_NOP = Record<string, never>;

export interface CNETMsg_SplitScreenUser {
  slot?: number;
}

export interface CNETMsg_Tick {
  tick?: number;
  host_computationtime?: number;
  host_computationtime_std_deviation?: number;
  legacy_host_loss?: number;
  host_unfiltered_frametime?: number;
  hltv_replay_flags?: number;
  expected_long_tick?: number;
  expected_long_tick_reason?: string;
  host_frame_dropped_pct_x10?: number;
  host_frame_irregular_arrival_pct_x10?: number;
}

export interface CNETMsg_StringCmd {
  command?: string;
  prediction_sync?: number;
}

export interface CNETMsg_SetConVar {
  convars?: CMsg_CVars;
}

export interface CNETMsg_SignonState {
  signon_state?: SignonState_t;
  spawn_count?: number;
  num_server_players?: number;
  players_networkids?: string[];
  map_name?: string;
  addons?: string;
}

export interface CSVCMsg_GameEvent {
  event_name?: string;
  eventid?: number;
  keys?: CSVCMsg_GameEvent.key_t[];
}

export namespace CSVCMsg_GameEvent {
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

export interface CSVCMsgList_GameEvents {
  events?: CSVCMsgList_GameEvents.event_t[];
}

export namespace CSVCMsgList_GameEvents {
  export interface event_t {
    tick?: number;
    event?: CSVCMsg_GameEvent;
  }
}

export interface CNETMsg_SpawnGroup_Load {
  worldname?: string;
  entitylumpname?: string;
  entityfiltername?: string;
  spawngrouphandle?: number;
  spawngroupownerhandle?: number;
  world_offset_pos?: CMsgVector;
  world_offset_angle?: CMsgQAngle;
  spawngroupmanifest?: Buffer;
  flags?: number;
  tickcount?: number;
  manifestincomplete?: boolean;
  localnamefixup?: string;
  parentnamefixup?: string;
  manifestloadpriority?: number;
  worldgroupid?: number;
  creationsequence?: number;
  savegamefilename?: string;
  spawngroupparenthandle?: number;
  leveltransition?: boolean;
  worldgroupname?: string;
}

export interface CNETMsg_SpawnGroup_ManifestUpdate {
  spawngrouphandle?: number;
  spawngroupmanifest?: Buffer;
  manifestincomplete?: boolean;
}

export interface CNETMsg_SpawnGroup_SetCreationTick {
  spawngrouphandle?: number;
  tickcount?: number;
  creationsequence?: number;
}

export interface CNETMsg_SpawnGroup_Unload {
  spawngrouphandle?: number;
  flags?: number;
  tickcount?: number;
}

export interface CNETMsg_SpawnGroup_LoadCompleted {
  spawngrouphandle?: number;
}

export interface CSVCMsg_GameSessionConfiguration {
  is_multiplayer?: boolean;
  is_loadsavegame?: boolean;
  is_background_map?: boolean;
  is_headless?: boolean;
  min_client_limit?: number;
  max_client_limit?: number;
  max_clients?: number;
  tick_interval?: number;
  hostname?: string;
  savegamename?: string;
  s1_mapname?: string;
  gamemode?: string;
  server_ip_address?: string;
  data?: Buffer;
  is_localonly?: boolean;
  no_steam_server?: boolean;
  is_transition?: boolean;
  previouslevel?: string;
  landmarkname?: string;
}

export interface CNETMsg_DebugOverlay {
  etype?: number;
  vectors?: CMsgVector[];
  colors?: CMsgRGBA[];
  dimensions?: number[];
  times?: number[];
  bools?: boolean[];
  uint64s?: Long[];
  strings?: string[];
}
