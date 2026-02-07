/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

import type Long from "long";
import type { CEntityMsg, CMsgQAngle, CMsgQuaternion, CMsgVector } from "./networkbasetypes";

export const EBaseUserMessages = {
  UM_AchievementEvent: 101,
  UM_CloseCaption: 102,
  UM_CloseCaptionDirect: 103,
  UM_CurrentTimescale: 104,
  UM_DesiredTimescale: 105,
  UM_Fade: 106,
  UM_GameTitle: 107,
  UM_HudMsg: 110,
  UM_HudText: 111,
  UM_ColoredText: 113,
  UM_RequestState: 114,
  UM_ResetHUD: 115,
  UM_Rumble: 116,
  UM_SayText: 117,
  UM_SayText2: 118,
  UM_SayTextChannel: 119,
  UM_Shake: 120,
  UM_ShakeDir: 121,
  UM_WaterShake: 122,
  UM_TextMsg: 124,
  UM_ScreenTilt: 125,
  UM_VoiceMask: 128,
  UM_SendAudio: 130,
  UM_ItemPickup: 131,
  UM_AmmoDenied: 132,
  UM_ShowMenu: 134,
  UM_CreditsMsg: 135,
  UM_CloseCaptionPlaceholder: 142,
  UM_CameraTransition: 143,
  UM_AudioParameter: 144,
  UM_ParticleManager: 145,
  UM_HudError: 146,
  UM_CustomGameEvent: 148,
  UM_AnimGraphUpdate: 149,
  UM_HapticsManagerPulse: 150,
  UM_HapticsManagerEffect: 151,
  UM_UpdateCssClasses: 153,
  UM_ServerFrameTime: 154,
  UM_LagCompensationError: 155,
  UM_RequestDllStatus: 156,
  UM_RequestUtilAction: 157,
  UM_UtilActionResponse: 158,
  UM_DllStatusResponse: 159,
  UM_RequestInventory: 160,
  UM_InventoryResponse: 161,
  UM_RequestDiagnostic: 162,
  UM_DiagnosticResponse: 163,
  UM_ExtraUserData: 164,
  UM_NotifyResponseFound: 165,
  UM_PlayResponseConditional: 166,
  UM_MAX_BASE: 200,
} as const;

export type EBaseUserMessages = (typeof EBaseUserMessages)[keyof typeof EBaseUserMessages];

export const EBaseEntityMessages = {
  EM_PlayJingle: 136,
  EM_ScreenOverlay: 137,
  EM_RemoveAllDecals: 138,
  EM_PropagateForce: 139,
  EM_DoSpark: 140,
  EM_FixAngle: 141,
} as const;

export type EBaseEntityMessages = (typeof EBaseEntityMessages)[keyof typeof EBaseEntityMessages];

export const eRollType = {
  ROLL_STATS: 0,
  ROLL_CREDITS: 1,
  ROLL_LATE_JOIN_LOGO: 2,
  ROLL_OUTTRO: 3,
} as const;

export type eRollType = (typeof eRollType)[keyof typeof eRollType];

export const PARTICLE_MESSAGE = {
  GAME_PARTICLE_MANAGER_EVENT_CREATE: 0,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE: 1,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_FORWARD: 2,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ORIENTATION: 3,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_FALLBACK: 4,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENT: 5,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_OFFSET: 6,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY: 7,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY_INVOLVING: 8,
  GAME_PARTICLE_MANAGER_EVENT_RELEASE: 9,
  GAME_PARTICLE_MANAGER_EVENT_LATENCY: 10,
  GAME_PARTICLE_MANAGER_EVENT_SHOULD_DRAW: 11,
  GAME_PARTICLE_MANAGER_EVENT_FROZEN: 12,
  GAME_PARTICLE_MANAGER_EVENT_CHANGE_CONTROL_POINT_ATTACHMENT: 13,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_ENTITY_POSITION: 14,
  GAME_PARTICLE_MANAGER_EVENT_SET_FOW_PROPERTIES: 15,
  GAME_PARTICLE_MANAGER_EVENT_SET_TEXT: 16,
  GAME_PARTICLE_MANAGER_EVENT_SET_SHOULD_CHECK_FOW: 17,
  GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_MODEL: 18,
  GAME_PARTICLE_MANAGER_EVENT_SET_CONTROL_POINT_SNAPSHOT: 19,
  GAME_PARTICLE_MANAGER_EVENT_SET_TEXTURE_ATTRIBUTE: 20,
  GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_GENERIC_FLAG: 21,
  GAME_PARTICLE_MANAGER_EVENT_SET_SCENE_OBJECT_TINT_AND_DESAT: 22,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY_NAMED: 23,
  GAME_PARTICLE_MANAGER_EVENT_SKIP_TO_TIME: 24,
  GAME_PARTICLE_MANAGER_EVENT_CAN_FREEZE: 25,
  GAME_PARTICLE_MANAGER_EVENT_SET_NAMED_VALUE_CONTEXT: 26,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_TRANSFORM: 27,
  GAME_PARTICLE_MANAGER_EVENT_FREEZE_TRANSITION_OVERRIDE: 28,
  GAME_PARTICLE_MANAGER_EVENT_FREEZE_INVOLVING: 29,
  GAME_PARTICLE_MANAGER_EVENT_ADD_MODELLIST_OVERRIDE_ELEMENT: 30,
  GAME_PARTICLE_MANAGER_EVENT_CLEAR_MODELLIST_OVERRIDE: 31,
  GAME_PARTICLE_MANAGER_EVENT_CREATE_PHYSICS_SIM: 32,
  GAME_PARTICLE_MANAGER_EVENT_DESTROY_PHYSICS_SIM: 33,
  GAME_PARTICLE_MANAGER_EVENT_SET_VDATA: 34,
  GAME_PARTICLE_MANAGER_EVENT_SET_MATERIAL_OVERRIDE: 35,
  GAME_PARTICLE_MANAGER_EVENT_ADD_FAN: 36,
  GAME_PARTICLE_MANAGER_EVENT_UPDATE_FAN: 37,
  GAME_PARTICLE_MANAGER_EVENT_SET_CLUSTER_GROWTH: 38,
  GAME_PARTICLE_MANAGER_EVENT_REMOVE_FAN: 39,
} as const;

export type PARTICLE_MESSAGE = (typeof PARTICLE_MESSAGE)[keyof typeof PARTICLE_MESSAGE];

export const EHapticPulseType = {
  VR_HAND_HAPTIC_PULSE_LIGHT: 0,
  VR_HAND_HAPTIC_PULSE_MEDIUM: 1,
  VR_HAND_HAPTIC_PULSE_STRONG: 2,
} as const;

export type EHapticPulseType = (typeof EHapticPulseType)[keyof typeof EHapticPulseType];

export interface CUserMessageAchievementEvent {
  achievement?: number;
}

export interface CUserMessageCloseCaption {
  hash?: number;
  duration?: number;
  from_player?: boolean;
  ent_index?: number;
}

export interface CUserMessageCloseCaptionDirect {
  hash?: number;
  duration?: number;
  from_player?: boolean;
  ent_index?: number;
}

export interface CUserMessageCloseCaptionPlaceholder {
  string?: string;
  duration?: number;
  from_player?: boolean;
  ent_index?: number;
}

export interface CUserMessageCurrentTimescale {
  current?: number;
}

export interface CUserMessageDesiredTimescale {
  desired?: number;
  acceleration?: number;
  minblendrate?: number;
  blenddeltamultiplier?: number;
}

export interface CUserMessageFade {
  duration?: number;
  hold_time?: number;
  flags?: number;
  color?: number;
}

export interface CUserMessageShake {
  command?: number;
  amplitude?: number;
  frequency?: number;
  duration?: number;
}

export interface CUserMessageShakeDir {
  shake?: CUserMessageShake;
  direction?: CMsgVector;
}

export interface CUserMessageWaterShake {
  command?: number;
  amplitude?: number;
  frequency?: number;
  duration?: number;
}

export interface CUserMessageScreenTilt {
  command?: number;
  ease_in_out?: boolean;
  angle?: CMsgVector;
  duration?: number;
  time?: number;
}

export interface CUserMessageSayText {
  playerindex?: number;
  text?: string;
  chat?: boolean;
}

export interface CUserMessageSayText2 {
  entityindex?: number;
  chat?: boolean;
  messagename?: string;
  param1?: string;
  param2?: string;
  param3?: string;
  param4?: string;
}

export interface CUserMessageHudMsg {
  channel?: number;
  x?: number;
  y?: number;
  color1?: number;
  color2?: number;
  effect?: number;
  message?: string;
}

export interface CUserMessageHudText {
  message?: string;
}

export interface CUserMessageTextMsg {
  dest?: number;
  param?: string[];
}

export type CUserMessageGameTitle = Record<string, never>;

export type CUserMessageResetHUD = Record<string, never>;

export interface CUserMessageSendAudio {
  soundname?: string;
  stop?: boolean;
}

export interface CUserMessageAudioParameter {
  parameter_type?: number;
  name_hash_code?: number;
  value?: number;
  int_value?: number;
}

export interface CUserMessageVoiceMask {
  gamerules_masks?: number[];
  ban_masks?: number[];
  mod_enable?: boolean;
}

export type CUserMessageRequestState = Record<string, never>;

export interface CUserMessageRumble {
  index?: number;
  data?: number;
  flags?: number;
}

export interface CUserMessageSayTextChannel {
  player?: number;
  channel?: number;
  text?: string;
}

export interface CUserMessageColoredText {
  color?: number;
  text?: string;
  reset?: boolean;
  context_player_slot?: number;
  context_value?: number;
  context_team_id?: number;
}

export interface CUserMessageItemPickup {
  itemname?: string;
}

export interface CUserMessageAmmoDenied {
  ammo_id?: number;
}

export interface CUserMessageShowMenu {
  validslots?: number;
  displaytime?: number;
  needmore?: boolean;
  menustring?: string;
}

export interface CUserMessageCreditsMsg {
  rolltype?: eRollType;
  logo_length?: number;
}

export interface CEntityMessagePlayJingle {
  entity_msg?: CEntityMsg;
}

export interface CEntityMessageScreenOverlay {
  start_effect?: boolean;
  entity_msg?: CEntityMsg;
}

export interface CEntityMessageRemoveAllDecals {
  remove_decals?: boolean;
  entity_msg?: CEntityMsg;
}

export interface CEntityMessagePropagateForce {
  impulse?: CMsgVector;
  entity_msg?: CEntityMsg;
}

export interface CEntityMessageDoSpark {
  origin?: CMsgVector;
  entityindex?: number;
  radius?: number;
  color?: number;
  beams?: number;
  thick?: number;
  duration?: number;
  entity_msg?: CEntityMsg;
}

export interface CEntityMessageFixAngle {
  relative?: boolean;
  angle?: CMsgQAngle;
  entity_msg?: CEntityMsg;
}

export interface CUserMessageCameraTransition {
  camera_type?: number;
  duration?: number;
  params_data_driven?: CUserMessageCameraTransition.Transition_DataDriven;
}

export namespace CUserMessageCameraTransition {
  export interface Transition_DataDriven {
    filename?: string;
    attach_ent_index?: number;
    duration?: number;
  }
}

export interface CUserMsg_ParticleManager {
  type?: PARTICLE_MESSAGE;
  index?: number;
  release_particle_index?: CUserMsg_ParticleManager.ReleaseParticleIndex;
  create_particle?: CUserMsg_ParticleManager.CreateParticle;
  destroy_particle?: CUserMsg_ParticleManager.DestroyParticle;
  destroy_particle_involving?: CUserMsg_ParticleManager.DestroyParticleInvolving;
  update_particle?: CUserMsg_ParticleManager.UpdateParticle_OBSOLETE;
  update_particle_fwd?: CUserMsg_ParticleManager.UpdateParticleFwd_OBSOLETE;
  update_particle_orient?: CUserMsg_ParticleManager.UpdateParticleOrient_OBSOLETE;
  update_particle_fallback?: CUserMsg_ParticleManager.UpdateParticleFallback;
  update_particle_offset?: CUserMsg_ParticleManager.UpdateParticleOffset;
  update_particle_ent?: CUserMsg_ParticleManager.UpdateParticleEnt;
  update_particle_should_draw?: CUserMsg_ParticleManager.UpdateParticleShouldDraw;
  update_particle_set_frozen?: CUserMsg_ParticleManager.UpdateParticleSetFrozen;
  change_control_point_attachment?: CUserMsg_ParticleManager.ChangeControlPointAttachment;
  update_entity_position?: CUserMsg_ParticleManager.UpdateEntityPosition;
  set_particle_fow_properties?: CUserMsg_ParticleManager.SetParticleFoWProperties;
  set_particle_text?: CUserMsg_ParticleManager.SetParticleText;
  set_particle_should_check_fow?: CUserMsg_ParticleManager.SetParticleShouldCheckFoW;
  set_control_point_model?: CUserMsg_ParticleManager.SetControlPointModel;
  set_control_point_snapshot?: CUserMsg_ParticleManager.SetControlPointSnapshot;
  set_texture_attribute?: CUserMsg_ParticleManager.SetTextureAttribute;
  set_scene_object_generic_flag?: CUserMsg_ParticleManager.SetSceneObjectGenericFlag;
  set_scene_object_tint_and_desat?: CUserMsg_ParticleManager.SetSceneObjectTintAndDesat;
  destroy_particle_named?: CUserMsg_ParticleManager.DestroyParticleNamed;
  particle_skip_to_time?: CUserMsg_ParticleManager.ParticleSkipToTime;
  particle_can_freeze?: CUserMsg_ParticleManager.ParticleCanFreeze;
  set_named_value_context?: CUserMsg_ParticleManager.SetParticleNamedValueContext;
  update_particle_transform?: CUserMsg_ParticleManager.UpdateParticleTransform;
  particle_freeze_transition_override?: CUserMsg_ParticleManager.ParticleFreezeTransitionOverride;
  freeze_particle_involving?: CUserMsg_ParticleManager.FreezeParticleInvolving;
  add_modellist_override_element?: CUserMsg_ParticleManager.AddModellistOverrideElement;
  clear_modellist_override?: CUserMsg_ParticleManager.ClearModellistOverride;
  create_physics_sim?: CUserMsg_ParticleManager.CreatePhysicsSim;
  destroy_physics_sim?: CUserMsg_ParticleManager.DestroyPhysicsSim;
  set_vdata?: CUserMsg_ParticleManager.SetVData;
  set_material_override?: CUserMsg_ParticleManager.SetMaterialOverride;
  add_fan?: CUserMsg_ParticleManager.AddFan;
  update_fan?: CUserMsg_ParticleManager.UpdateFan;
  set_particle_cluster_growth?: CUserMsg_ParticleManager.SetParticleClusterGrowth;
  remove_fan?: CUserMsg_ParticleManager.RemoveFan;
}

export namespace CUserMsg_ParticleManager {
  export type ReleaseParticleIndex = Record<string, never>;

  export interface CreateParticle {
    particle_name_index?: Long;
    attach_type?: number;
    entity_handle?: number;
    entity_handle_for_modifiers?: number;
    apply_voice_ban_rules?: boolean;
    team_behavior?: number;
    control_point_configuration?: string;
    cluster?: boolean;
    endcap_time?: number;
    aggregation_position?: CMsgVector;
  }

  export interface DestroyParticle {
    destroy_immediately?: boolean;
  }

  export interface DestroyParticleInvolving {
    destroy_immediately?: boolean;
    entity_handle?: number;
  }

  export interface DestroyParticleNamed {
    particle_name_index?: Long;
    entity_handle?: number;
    destroy_immediately?: boolean;
    play_endcap?: boolean;
  }

  export interface UpdateParticle_OBSOLETE {
    control_point?: number;
    position?: CMsgVector;
  }

  export interface UpdateParticleFwd_OBSOLETE {
    control_point?: number;
    forward?: CMsgVector;
  }

  export interface UpdateParticleOrient_OBSOLETE {
    control_point?: number;
    forward?: CMsgVector;
    deprecated_right?: CMsgVector;
    up?: CMsgVector;
    left?: CMsgVector;
  }

  export interface UpdateParticleTransform {
    control_point?: number;
    position?: CMsgVector;
    orientation?: CMsgQuaternion;
    interpolation_interval?: number;
  }

  export interface UpdateParticleFallback {
    control_point?: number;
    position?: CMsgVector;
  }

  export interface UpdateParticleOffset {
    control_point?: number;
    origin_offset?: CMsgVector;
    angle_offset?: CMsgQAngle;
  }

  export interface UpdateParticleEnt {
    control_point?: number;
    entity_handle?: number;
    attach_type?: number;
    attachment?: number;
    fallback_position?: CMsgVector;
    include_wearables?: boolean;
    offset_position?: CMsgVector;
    offset_angles?: CMsgQAngle;
  }

  export interface UpdateParticleSetFrozen {
    set_frozen?: boolean;
    transition_duration?: number;
  }

  export interface UpdateParticleShouldDraw {
    should_draw?: boolean;
  }

  export interface ChangeControlPointAttachment {
    attachment_old?: number;
    attachment_new?: number;
    entity_handle?: number;
  }

  export interface UpdateEntityPosition {
    entity_handle?: number;
    position?: CMsgVector;
  }

  export interface SetParticleFoWProperties {
    fow_control_point?: number;
    fow_control_point2?: number;
    fow_radius?: number;
  }

  export interface SetParticleShouldCheckFoW {
    check_fow?: boolean;
  }

  export interface SetControlPointModel {
    control_point?: number;
    model_name?: string;
  }

  export interface SetControlPointSnapshot {
    control_point?: number;
    snapshot_name?: string;
  }

  export interface SetParticleText {
    text?: string;
  }

  export interface SetTextureAttribute {
    attribute_name?: string;
    texture_name?: string;
  }

  export interface SetSceneObjectGenericFlag {
    flag_value?: boolean;
  }

  export interface SetSceneObjectTintAndDesat {
    tint?: number;
    desat?: number;
  }

  export interface ParticleSkipToTime {
    skip_to_time?: number;
  }

  export interface ParticleCanFreeze {
    can_freeze?: boolean;
  }

  export interface ParticleFreezeTransitionOverride {
    freeze_transition_override?: number;
  }

  export interface FreezeParticleInvolving {
    set_frozen?: boolean;
    transition_duration?: number;
    entity_handle?: number;
  }

  export interface AddModellistOverrideElement {
    model_name?: string;
    spawn_probability?: number;
    groupid?: number;
  }

  export interface ClearModellistOverride {
    groupid?: number;
  }

  export type SetParticleNamedValueContext = Record<string, never>;

  export namespace SetParticleNamedValueContext {
    export interface FloatContextValue {
      value_name_hash?: number;
      value?: number;
    }

    export interface VectorContextValue {
      value_name_hash?: number;
      value?: CMsgVector;
    }

    export interface TransformContextValue {
      value_name_hash?: number;
      angles?: CMsgQAngle;
      translation?: CMsgVector;
    }

    export interface EHandleContext {
      value_name_hash?: number;
      ent_index?: number;
    }
  }
  export interface CreatePhysicsSim {
    prop_group_name?: string;
    use_high_quality_simulation?: boolean;
    max_particle_count?: number;
  }

  export type DestroyPhysicsSim = Record<string, never>;

  export interface SetVData {
    vdata_name?: string;
  }

  export interface SetMaterialOverride {
    material_name?: string;
    include_children?: boolean;
  }

  export interface AddFan {
    active?: boolean;
    bounds_mins?: CMsgVector;
    bounds_maxs?: CMsgVector;
    fan_origin?: CMsgVector;
    fan_origin_offset?: CMsgVector;
    fan_direction?: CMsgVector;
    force?: number;
    fan_force_curve?: string;
    falloff?: boolean;
    pull_towards_point?: boolean;
    curve_min_dist?: number;
    curve_max_dist?: number;
    fan_type?: number;
    cone_start_radius?: number;
    cone_end_radius?: number;
    cone_length?: number;
    entity_handle?: number;
    attachment_name?: string;
  }

  export interface UpdateFan {
    active?: boolean;
    fan_origin?: CMsgVector;
    fan_origin_offset?: CMsgVector;
    fan_direction?: CMsgVector;
    fan_ramp_ratio?: number;
    bounds_mins?: CMsgVector;
    bounds_maxs?: CMsgVector;
  }

  export type RemoveFan = Record<string, never>;

  export interface SetParticleClusterGrowth {
    duration?: number;
    origin?: CMsgVector;
  }
}

export interface CUserMsg_HudError {
  order_id?: number;
}

export interface CUserMsg_CustomGameEvent {
  event_name?: string;
  data?: Buffer;
}

export interface CUserMessageHapticsManagerPulse {
  hand_id?: number;
  effect_amplitude?: number;
  effect_frequency?: number;
  effect_duration?: number;
}

export interface CUserMessageHapticsManagerEffect {
  hand_id?: number;
  effect_name_hash_code?: number;
  effect_scale?: number;
}

export interface CUserMessageAnimStateGraphState {
  entity_index?: number;
  data?: Buffer;
}

export interface CUserMessageUpdateCssClasses {
  target_world_panel?: number;
  css_classes?: string;
  is_add?: boolean;
}

export interface CUserMessageServerFrameTime {
  frame_time?: number;
}

export interface CUserMessageLagCompensationError {
  distance?: number;
}

export interface CUserMessageRequestDllStatus {
  dll_action?: string;
  full_report?: boolean;
}

export interface CUserMessageRequestUtilAction {
  util1?: number;
  util2?: number;
  util3?: number;
  util4?: number;
  util5?: number;
}

export interface CUserMessage_UtilMsg_Response {
  crc?: number;
  item_count?: number;
  crc2?: number;
  item_count2?: number;
  crc_part?: number[];
  crc_part2?: number[];
  client_timestamp?: number;
  platform?: number;
  itemdetails?: CUserMessage_UtilMsg_Response.ItemDetail[];
  itemgroup?: number;
  total_count?: number;
  total_count2?: number;
}

export namespace CUserMessage_UtilMsg_Response {
  export interface ItemDetail {
    index?: number;
    hash?: number;
    crc?: number;
    name?: string;
  }
}

export interface CUserMessage_DllStatus {
  file_report?: string;
  command_line?: string;
  total_files?: number;
  process_id?: number;
  osversion?: number;
  client_time?: Long;
  diagnostics?: CUserMessage_DllStatus.CVDiagnostic[];
  modules?: CUserMessage_DllStatus.CModule[];
}

export namespace CUserMessage_DllStatus {
  export interface CVDiagnostic {
    id?: number;
    extended?: number;
    value?: Long;
    string_value?: string;
  }

  export interface CModule {
    base_addr?: Long;
    name?: string;
    size?: number;
    timestamp?: number;
  }
}

export interface CUserMessageRequestInventory {
  inventory?: number;
  offset?: number;
  options?: number;
}

export interface CUserMessage_Inventory_Response {
  crc?: number;
  item_count?: number;
  osversion?: number;
  perf_time?: number;
  client_timestamp?: number;
  platform?: number;
  inventories?: CUserMessage_Inventory_Response.InventoryDetail[];
  inventories2?: CUserMessage_Inventory_Response.InventoryDetail[];
  inventories3?: CUserMessage_Inventory_Response.InventoryDetail[];
  inv_type?: number;
  build_version?: number;
  instance?: number;
  start_time?: Long;
}

export namespace CUserMessage_Inventory_Response {
  export interface InventoryDetail {
    index?: number;
    primary?: Long;
    offset?: Long;
    first?: Long;
    base?: Long;
    name?: string;
    base_name?: string;
    base_detail?: number;
    base_time?: number;
    base_hash?: number;
  }
}

export interface CUserMessageRequestDiagnostic {
  diagnostics?: CUserMessageRequestDiagnostic.Diagnostic[];
}

export namespace CUserMessageRequestDiagnostic {
  export interface Diagnostic {
    index?: number;
    offset?: Long;
    param?: number;
    length?: number;
    type?: number;
    base?: Long;
    range?: Long;
    extent?: Long;
    detail?: Long;
    name?: string;
    alias?: string;
    vardetail?: Buffer;
    context?: number;
  }
}

export interface CUserMessage_Diagnostic_Response {
  diagnostics?: CUserMessage_Diagnostic_Response.Diagnostic[];
  build_version?: number;
  instance?: number;
  start_time?: Long;
  osversion?: number;
  platform?: number;
}

export namespace CUserMessage_Diagnostic_Response {
  export interface Diagnostic {
    index?: number;
    offset?: Long;
    param?: number;
    length?: number;
    detail?: Buffer;
    base?: Long;
    range?: Long;
    type?: number;
    name?: string;
    alias?: string;
    backup?: Buffer;
    context?: number;
    control?: Long;
    augment?: Long;
    placebo?: Long;
  }
}

export interface CUserMessage_ExtraUserData {
  item?: number;
  value1?: Long;
  value2?: Long;
  detail1?: Buffer[];
  detail2?: Buffer[];
}

export interface CUserMessage_NotifyResponseFound {
  ent_index?: number;
  rule_name?: string;
  response_value?: string;
  response_concept?: string;
  criteria?: CUserMessage_NotifyResponseFound.Criteria[];
  int_criteria_names?: number[];
  int_criteria_values?: number[];
  float_criteria_names?: number[];
  float_criteria_values?: number[];
  symbol_criteria_names?: number[];
  symbol_criteria_values?: number[];
  speak_result?: number;
}

export namespace CUserMessage_NotifyResponseFound {
  export interface Criteria {
    name_symbol?: number;
    value?: string;
  }
}

export interface CUserMessage_PlayResponseConditional {
  ent_index?: number;
  player_slots?: number[];
  response?: string;
  ent_origin?: CMsgVector;
  pre_delay?: number;
  mix_priority?: number;
}
