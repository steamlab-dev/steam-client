/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EDemoCommands = {
  DEM_Stop: 0,
  DEM_FileHeader: 1,
  DEM_FileInfo: 2,
  DEM_SyncTick: 3,
  DEM_SendTables: 4,
  DEM_ClassInfo: 5,
  DEM_StringTables: 6,
  DEM_Packet: 7,
  DEM_SignonPacket: 8,
  DEM_ConsoleCmd: 9,
  DEM_CustomData: 10,
  DEM_CustomDataCallbacks: 11,
  DEM_UserCmd: 12,
  DEM_FullPacket: 13,
  DEM_SaveGame: 14,
  DEM_SpawnGroups: 15,
  DEM_AnimationData: 16,
  DEM_AnimationHeader: 17,
  DEM_Recovery: 18,
  DEM_Max: 19,
  DEM_IsCompressed: 64,
} as const;

export type EDemoCommands = (typeof EDemoCommands)[keyof typeof EDemoCommands];

export interface CDemoFileHeader {
  demo_file_stamp?: string;
  patch_version?: number;
  server_name?: string;
  client_name?: string;
  map_name?: string;
  game_directory?: string;
  fullpackets_version?: number;
  allow_clientside_entities?: boolean;
  allow_clientside_particles?: boolean;
  addons?: string;
  demo_version_name?: string;
  demo_version_guid?: string;
  build_num?: number;
  game?: string;
  server_start_tick?: number;
}

export interface CGameInfo {
  dota?: CGameInfo.CDotaGameInfo;
  cs?: CGameInfo.CCSGameInfo;
}

export namespace CGameInfo {
  export interface CDotaGameInfo {
    match_id?: Long;
    game_mode?: number;
    game_winner?: number;
    leagueid?: number;
    radiant_team_id?: number;
    dire_team_id?: number;
    radiant_team_tag?: string;
    dire_team_tag?: string;
    end_time?: number;
  }

  export namespace CDotaGameInfo {
    export interface CPlayerInfo {
      hero_name?: string;
      player_name?: string;
      is_fake_client?: boolean;
      steamid?: Long;
      game_team?: number;
    }

    export interface CHeroSelectEvent {
      is_pick?: boolean;
      team?: number;
      hero_id?: number;
    }
  }
  export interface CCSGameInfo {
    round_start_ticks?: number[];
  }
}

export interface CDemoFileInfo {
  playback_time?: number;
  playback_ticks?: number;
  playback_frames?: number;
  game_info?: CGameInfo;
}

export interface CDemoPacket {
  data?: Buffer;
}

export interface CDemoFullPacket {
  string_table?: CDemoStringTables;
  packet?: CDemoPacket;
}

export interface CDemoSaveGame {
  data?: Buffer;
  steam_id?: Long;
  signature?: Long;
  version?: number;
}

export type CDemoSyncTick = Record<string, never>;

export interface CDemoConsoleCmd {
  cmdstring?: string;
}

export interface CDemoSendTables {
  data?: Buffer;
}

export interface CDemoClassInfo {
  classes?: CDemoClassInfo.class_t[];
}

export namespace CDemoClassInfo {
  export interface class_t {
    class_id?: number;
    network_name?: string;
    table_name?: string;
  }
}

export interface CDemoCustomData {
  callback_index?: number;
  data?: Buffer;
}

export interface CDemoCustomDataCallbacks {
  save_id?: string[];
}

export interface CDemoAnimationHeader {
  entity_id?: number;
  tick?: number;
  data?: Buffer;
}

export interface CDemoAnimationData {
  entity_id?: number;
  start_tick?: number;
  end_tick?: number;
  data?: Buffer;
  data_checksum?: Long;
}

export interface CDemoStringTables {
  tables?: CDemoStringTables.table_t[];
}

export namespace CDemoStringTables {
  export interface items_t {
    str?: string;
    data?: Buffer;
  }

  export interface table_t {
    table_name?: string;
    items?: CDemoStringTables.items_t[];
    items_clientside?: CDemoStringTables.items_t[];
    table_flags?: number;
  }
}

export type CDemoStop = Record<string, never>;

export interface CDemoUserCmd {
  cmd_number?: number;
  data?: Buffer;
}

export interface CDemoSpawnGroups {
  msgs?: Buffer[];
}

export interface CDemoSpawnGroupsHLTVBroadcast {
  data?: Buffer;
}

export interface CDemoRecovery {
  initial_spawn_group?: CDemoRecovery.DemoInitialSpawnGroupEntry;
  spawn_group_message?: Buffer;
}

export namespace CDemoRecovery {
  export interface DemoInitialSpawnGroupEntry {
    spawngrouphandle?: number;
    was_created?: boolean;
  }
}
