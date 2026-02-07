/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CMsgQAngle, CMsgVector, CSVCMsg_GameSessionConfiguration } from "./networkbasetypes";
import type {
  CMsgSource2NetworkFlowQuality,
  CMsgSource2PerfIntervalSample,
  CMsgSource2SystemSpecs,
  CMsgSource2VProfLiteReport,
} from "./source2_steam_stats";

export const CLC_Messages = {
  clc_ClientInfo: 20,
  clc_Move: 21,
  clc_VoiceData: 22,
  clc_BaselineAck: 23,
  clc_RespondCvarValue: 25,
  clc_LoadingProgress: 27,
  clc_SplitPlayerConnect: 28,
  clc_SplitPlayerDisconnect: 30,
  clc_ServerStatus: 31,
  clc_RequestPause: 33,
  clc_CmdKeyValues: 34,
  clc_RconServerDetails: 35,
  clc_HltvReplay: 36,
  clc_Diagnostic: 37,
} as const;

export type CLC_Messages = (typeof CLC_Messages)[keyof typeof CLC_Messages];

export const SVC_Messages = {
  svc_ServerInfo: 40,
  svc_FlattenedSerializer: 41,
  svc_ClassInfo: 42,
  svc_SetPause: 43,
  svc_CreateStringTable: 44,
  svc_UpdateStringTable: 45,
  svc_VoiceInit: 46,
  svc_VoiceData: 47,
  svc_Print: 48,
  svc_Sounds: 49,
  svc_SetView: 50,
  svc_ClearAllStringTables: 51,
  svc_CmdKeyValues: 52,
  svc_BSPDecal: 53,
  svc_SplitScreen: 54,
  svc_PacketEntities: 55,
  svc_Prefetch: 56,
  svc_Menu: 57,
  svc_GetCvarValue: 58,
  svc_StopSound: 59,
  svc_PeerList: 60,
  svc_PacketReliable: 61,
  svc_HLTVStatus: 62,
  svc_ServerSteamID: 63,
  svc_FullFrameSplit: 70,
  svc_RconServerDetails: 71,
  svc_UserMessage: 72,
  svc_Broadcast_Command: 74,
  svc_HltvFixupOperatorStatus: 75,
  svc_UserCmds: 76,
  svc_NextMsgPredicted: 77,
} as const;

export type SVC_Messages = (typeof SVC_Messages)[keyof typeof SVC_Messages];

export const VoiceDataFormat_t = {
  VOICEDATA_FORMAT_STEAM: 0,
  VOICEDATA_FORMAT_ENGINE: 1,
  VOICEDATA_FORMAT_OPUS: 2,
} as const;

export type VoiceDataFormat_t = (typeof VoiceDataFormat_t)[keyof typeof VoiceDataFormat_t];

export const RequestPause_t = {
  RP_PAUSE: 0,
  RP_UNPAUSE: 1,
  RP_TOGGLEPAUSE: 2,
} as const;

export type RequestPause_t = (typeof RequestPause_t)[keyof typeof RequestPause_t];

export const PrefetchType = {
  PFT_SOUND: 0,
} as const;

export type PrefetchType = (typeof PrefetchType)[keyof typeof PrefetchType];

export const ESplitScreenMessageType = {
  MSG_SPLITSCREEN_ADDUSER: 0,
  MSG_SPLITSCREEN_REMOVEUSER: 1,
} as const;

export type ESplitScreenMessageType =
  (typeof ESplitScreenMessageType)[keyof typeof ESplitScreenMessageType];

export const EQueryCvarValueStatus = {
  eQueryCvarValueStatus_ValueIntact: 0,
  eQueryCvarValueStatus_CvarNotFound: 1,
  eQueryCvarValueStatus_NotACvar: 2,
  eQueryCvarValueStatus_CvarProtected: 3,
} as const;

export type EQueryCvarValueStatus =
  (typeof EQueryCvarValueStatus)[keyof typeof EQueryCvarValueStatus];

export const DIALOG_TYPE = {
  DIALOG_MSG: 0,
  DIALOG_MENU: 1,
  DIALOG_TEXT: 2,
  DIALOG_ENTRY: 3,
  DIALOG_ASKCONNECT: 4,
} as const;

export type DIALOG_TYPE = (typeof DIALOG_TYPE)[keyof typeof DIALOG_TYPE];

export const SVC_Messages_LowFrequency = {
  svc_dummy: 600,
} as const;

export type SVC_Messages_LowFrequency =
  (typeof SVC_Messages_LowFrequency)[keyof typeof SVC_Messages_LowFrequency];

export const Bidirectional_Messages = {
  bi_RebroadcastGameEvent: 16,
  bi_RebroadcastSource: 17,
  bi_GameEvent: 18,
  bi_PredictionEvent: 19,
} as const;

export type Bidirectional_Messages =
  (typeof Bidirectional_Messages)[keyof typeof Bidirectional_Messages];

export const Bidirectional_Messages_LowFrequency = {
  bi_RelayInfo: 700,
  bi_RelayPacket: 701,
} as const;

export type Bidirectional_Messages_LowFrequency =
  (typeof Bidirectional_Messages_LowFrequency)[keyof typeof Bidirectional_Messages_LowFrequency];

export const ReplayEventType_t = {
  REPLAY_EVENT_CANCEL: 0,
  REPLAY_EVENT_DEATH: 1,
  REPLAY_EVENT_GENERIC: 2,
  REPLAY_EVENT_STUCK_NEED_FULL_UPDATE: 3,
  REPLAY_EVENT_VICTORY: 4,
} as const;

export type ReplayEventType_t = (typeof ReplayEventType_t)[keyof typeof ReplayEventType_t];

export interface CCLCMsg_ClientInfo {
  send_table_crc?: number;
  server_count?: number;
  is_hltv?: boolean;
  friends_id?: number;
  friends_name?: string;
}

export interface CCLCMsg_Move {
  data?: Buffer;
  last_command_number?: number;
}

export interface CMsgVoiceAudio {
  format?: VoiceDataFormat_t;
  voice_data?: Buffer;
  sequence_bytes?: number;
  section_number?: number;
  sample_rate?: number;
  uncompressed_sample_offset?: number;
  num_packets?: number;
  packet_offsets?: number[];
  voice_level?: number;
}

export interface CCLCMsg_VoiceData {
  audio?: CMsgVoiceAudio;
  xuid?: Long;
  tick?: number;
}

export interface CCLCMsg_BaselineAck {
  baseline_tick?: number;
  baseline_nr?: number;
}

export interface CCLCMsg_ListenEvents {
  event_mask?: number[];
}

export interface CCLCMsg_RespondCvarValue {
  cookie?: number;
  status_code?: number;
  name?: string;
  value?: string;
}

export interface CCLCMsg_LoadingProgress {
  progress?: number;
}

export interface CCLCMsg_SplitPlayerConnect {
  playername?: string;
}

export interface CCLCMsg_SplitPlayerDisconnect {
  slot?: number;
}

export interface CCLCMsg_ServerStatus {
  simplified?: boolean;
}

export interface CCLCMsg_RequestPause {
  pause_type?: RequestPause_t;
  pause_group?: number;
}

export interface CCLCMsg_CmdKeyValues {
  data?: Buffer;
}

export interface CCLCMsg_RconServerDetails {
  token?: Buffer;
}

export interface CCLCMsg_Diagnostic {
  system_specs?: CMsgSource2SystemSpecs;
  vprof_report?: CMsgSource2VProfLiteReport;
  downstream_flow?: CMsgSource2NetworkFlowQuality;
  upstream_flow?: CMsgSource2NetworkFlowQuality;
  perf_samples?: CMsgSource2PerfIntervalSample[];
}

export interface CSVCMsg_ServerInfo {
  protocol?: number;
  server_count?: number;
  is_dedicated?: boolean;
  is_hltv?: boolean;
  c_os?: number;
  max_clients?: number;
  max_classes?: number;
  player_slot?: number;
  tick_interval?: number;
  game_dir?: string;
  map_name?: string;
  sky_name?: string;
  host_name?: string;
  addon_name?: string;
  game_session_config?: CSVCMsg_GameSessionConfiguration;
  game_session_manifest?: Buffer;
}

export interface CSVCMsg_ClassInfo {
  create_on_client?: boolean;
  classes?: CSVCMsg_ClassInfo.class_t[];
}

export namespace CSVCMsg_ClassInfo {
  export interface class_t {
    class_id?: number;
    class_name?: string;
  }
}

export interface CSVCMsg_SetPause {
  paused?: boolean;
}

export interface CSVCMsg_VoiceInit {
  quality?: number;
  codec?: string;
  version?: number;
}

export interface CSVCMsg_Print {
  text?: string;
}

export interface CSVCMsg_Sounds {
  reliable_sound?: boolean;
  sounds?: CSVCMsg_Sounds.sounddata_t[];
}

export namespace CSVCMsg_Sounds {
  export interface sounddata_t {
    origin_x?: number;
    origin_y?: number;
    origin_z?: number;
    volume?: number;
    delay_value?: number;
    sequence_number?: number;
    entity_index?: number;
    channel?: number;
    pitch?: number;
    flags?: number;
    sound_num?: number;
    sound_num_handle?: number;
    speaker_entity?: number;
    random_seed?: number;
    sound_level?: number;
    is_sentence?: boolean;
    is_ambient?: boolean;
    guid?: number;
    sound_resource_id?: Long;
  }
}

export interface CSVCMsg_Prefetch {
  sound_index?: number;
  resource_type?: PrefetchType;
}

export interface CSVCMsg_SetView {
  entity_index?: number;
  slot?: number;
}

export interface CSVCMsg_FixAngle {
  relative?: boolean;
  angle?: CMsgQAngle;
}

export interface CSVCMsg_CrosshairAngle {
  angle?: CMsgQAngle;
}

export interface CSVCMsg_BSPDecal {
  pos?: CMsgVector;
  decal_texture_index?: number;
  entity_index?: number;
  model_index?: number;
  low_priority?: boolean;
}

export interface CSVCMsg_SplitScreen {
  type?: ESplitScreenMessageType;
  slot?: number;
  player_index?: number;
}

export interface CSVCMsg_GetCvarValue {
  cookie?: number;
  cvar_name?: string;
}

export interface CSVCMsg_Menu {
  dialog_type?: number;
  menu_key_values?: Buffer;
}

export interface CSVCMsg_UserMessage {
  msg_type?: number;
  msg_data?: Buffer;
  passthrough?: number;
}

export interface CSVCMsg_SendTable {
  is_end?: boolean;
  net_table_name?: string;
  needs_decoder?: boolean;
  props?: CSVCMsg_SendTable.sendprop_t[];
}

export namespace CSVCMsg_SendTable {
  export interface sendprop_t {
    type?: number;
    var_name?: string;
    flags?: number;
    priority?: number;
    dt_name?: string;
    num_elements?: number;
    low_value?: number;
    high_value?: number;
    num_bits?: number;
  }
}

export interface CSVCMsg_GameEventList {
  descriptors?: CSVCMsg_GameEventList.descriptor_t[];
}

export namespace CSVCMsg_GameEventList {
  export interface key_t {
    type?: number;
    name?: string;
  }

  export interface descriptor_t {
    eventid?: number;
    name?: string;
    keys?: CSVCMsg_GameEventList.key_t[];
  }
}

export interface CSVCMsg_PacketEntities {
  max_entries?: number;
  updated_entries?: number;
  legacy_is_delta?: boolean;
  update_baseline?: boolean;
  baseline?: number;
  delta_from?: number;
  entity_data?: Buffer;
  pending_full_frame?: boolean;
  active_spawngroup_handle?: number;
  max_spawngroup_creationsequence?: number;
  last_cmd_number_executed?: number;
  last_cmd_number_recv_delta?: number;
  server_tick?: number;
  serialized_entities?: Buffer;
  alternate_baselines?: CSVCMsg_PacketEntities.alternate_baseline_t[];
  has_pvs_vis_bits_deprecated?: number;
  cmd_recv_status?: number[];
  non_transmitted_entities?: CSVCMsg_PacketEntities.non_transmitted_entities_t;
  cq_starved_command_ticks?: number;
  cq_discarded_command_ticks?: number;
  outofpvs_entity_updates?: CSVCMsg_PacketEntities.outofpvs_entity_updates_t;
  dev_padding?: Buffer;
}

export namespace CSVCMsg_PacketEntities {
  export interface alternate_baseline_t {
    entity_index?: number;
    baseline_index?: number;
  }

  export interface non_transmitted_entities_t {
    header_count?: number;
    data?: Buffer;
  }

  export interface outofpvs_entity_updates_t {
    count?: number;
    data?: Buffer;
  }
}

export interface CSVCMsg_TempEntities {
  reliable?: boolean;
  num_entries?: number;
  entity_data?: Buffer;
}

export interface CSVCMsg_CreateStringTable {
  name?: string;
  num_entries?: number;
  user_data_fixed_size?: boolean;
  user_data_size?: number;
  user_data_size_bits?: number;
  flags?: number;
  string_data?: Buffer;
  uncompressed_size?: number;
  data_compressed?: boolean;
  using_varint_bitcounts?: boolean;
}

export interface CSVCMsg_UpdateStringTable {
  table_id?: number;
  num_changed_entries?: number;
  string_data?: Buffer;
}

export interface CSVCMsg_VoiceData {
  audio?: CMsgVoiceAudio;
  client?: number;
  proximity?: boolean;
  xuid?: Long;
  audible_mask?: number;
  tick?: number;
  passthrough?: number;
}

export interface CSVCMsg_PacketReliable {
  tick?: number;
  messagessize?: number;
  state?: boolean;
}

export interface CSVCMsg_FullFrameSplit {
  tick?: number;
  section?: number;
  total?: number;
  data?: Buffer;
}

export interface CSVCMsg_HLTVStatus {
  master?: string;
  clients?: number;
  slots?: number;
  proxies?: number;
}

export interface CSVCMsg_ServerSteamID {
  steam_id?: Long;
}

export interface CSVCMsg_CmdKeyValues {
  data?: Buffer;
}

export interface CSVCMsg_RconServerDetails {
  token?: Buffer;
  details?: string;
}

export interface CMsgIPCAddress {
  computer_guid?: Long;
  process_id?: number;
}

export interface CMsgServerPeer {
  player_slot?: number;
  steamid?: Long;
  ipc?: CMsgIPCAddress;
  they_hear_you?: boolean;
  you_hear_them?: boolean;
  is_listenserver_host?: boolean;
}

export interface CSVCMsg_PeerList {
  peer?: CMsgServerPeer[];
}

export interface CSVCMsg_ClearAllStringTables {
  mapname?: string;
  create_tables_skipped?: boolean;
}

export interface ProtoFlattenedSerializerField_t {
  var_type_sym?: number;
  var_name_sym?: number;
  bit_count?: number;
  low_value?: number;
  high_value?: number;
  encode_flags?: number;
  field_serializer_name_sym?: number;
  field_serializer_version?: number;
  send_node_sym?: number;
  var_encoder_sym?: number;
  polymorphic_types?: ProtoFlattenedSerializerField_t.polymorphic_field_t[];
  var_serializer_sym?: number;
}

export namespace ProtoFlattenedSerializerField_t {
  export interface polymorphic_field_t {
    polymorphic_field_serializer_name_sym?: number;
    polymorphic_field_serializer_version?: number;
  }
}

export interface ProtoFlattenedSerializer_t {
  serializer_name_sym?: number;
  serializer_version?: number;
  fields_index?: number[];
}

export interface CSVCMsg_FlattenedSerializer {
  serializers?: ProtoFlattenedSerializer_t[];
  symbols?: string[];
  fields?: ProtoFlattenedSerializerField_t[];
}

export interface CSVCMsg_StopSound {
  guid?: number;
}

export interface CBidirMsg_RebroadcastGameEvent {
  posttoserver?: boolean;
  buftype?: number;
  clientbitcount?: number;
  receivingclients?: Long;
}

export interface CBidirMsg_RebroadcastSource {
  eventsource?: number;
}

export interface CBidirMsg_PredictionEvent {
  event_id?: number;
  event_data?: Buffer;
  sync_type?: number;
  sync_val_uint32?: number;
}

export namespace CBidirMsg_PredictionEvent {
  export const ESyncType = {
    ST_Tick: 0,
    ST_UserCmdNum: 1,
  } as const;

  export type ESyncType = (typeof ESyncType)[keyof typeof ESyncType];
}

export interface CMsgServerNetworkStats {
  dedicated?: boolean;
  cpu_usage?: number;
  memory_used_mb?: number;
  memory_free_mb?: number;
  uptime?: number;
  spawn_count?: number;
  num_clients?: number;
  num_bots?: number;
  num_spectators?: number;
  num_tv_relays?: number;
  fps?: number;
  ports?: CMsgServerNetworkStats.Port[];
  avg_ping_ms?: number;
  avg_engine_latency_out?: number;
  avg_packets_out?: number;
  avg_packets_in?: number;
  avg_loss_out?: number;
  avg_loss_in?: number;
  avg_data_out?: number;
  avg_data_in?: number;
  total_data_in?: Long;
  total_packets_in?: Long;
  total_data_out?: Long;
  total_packets_out?: Long;
  players?: CMsgServerNetworkStats.Player[];
}

export namespace CMsgServerNetworkStats {
  export interface Port {
    port?: number;
    name?: string;
  }

  export interface Player {
    steamid?: Long;
    remote_addr?: string;
    ping_avg_ms?: number;
    packet_loss_pct?: number;
    is_bot?: boolean;
    loss_in?: number;
    loss_out?: number;
    engine_latency_ms?: number;
  }
}

export interface CSVCMsg_HltvReplay {
  delay?: number;
  primary_target?: number;
  replay_stop_at?: number;
  replay_start_at?: number;
  replay_slowdown_begin?: number;
  replay_slowdown_end?: number;
  replay_slowdown_rate?: number;
  reason?: number;
}

export interface CCLCMsg_HltvReplay {
  request?: number;
  slowdown_length?: number;
  slowdown_rate?: number;
  primary_target?: number;
  event_time?: number;
}

export interface CSVCMsg_Broadcast_Command {
  cmd?: string;
}

export interface CCLCMsg_HltvFixupOperatorTick {
  tick?: number;
  props_data?: Buffer;
  origin?: CMsgVector;
  eye_angles?: CMsgQAngle;
  observer_mode?: number;
  cameraman_scoreboard?: boolean;
  observer_target?: number;
  view_offset?: CMsgVector;
}

export interface CSVCMsg_HltvFixupOperatorStatus {
  mode?: number;
  override_operator_name?: string;
}

export interface CMsgServerUserCmd {
  data?: Buffer;
  cmd_number?: number;
  player_slot?: number;
  server_tick_executed?: number;
  client_tick?: number;
}

export interface CSVCMsg_UserCommands {
  commands?: CMsgServerUserCmd[];
}

export interface CSVCMsg_NextMsgPredicted {
  predicted_by_player_slot?: number;
  message_type_id?: number;
}
