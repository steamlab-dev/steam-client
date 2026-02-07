/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import {
  EGCBaseMsg,
  EGCBaseProtoObjectTypes,
  GC_BannedWordType,
} from "../protos-definitions/csgo/base_gcmessages";
import { P2P_Messages } from "../protos-definitions/csgo/c_peer2peer_netmessages";
import { EBaseClientMessages, EClientUIEvent } from "../protos-definitions/csgo/clientmessages";
import { ECsgoGameEvents } from "../protos-definitions/csgo/cs_gameevents";
import { ECSPredictionEvents } from "../protos-definitions/csgo/cs_prediction_events";
import {
  EClientReportingVersion,
  ECsgoGCMsg,
  ECsgoSteamUserStat,
  EInitSystemResult,
  QuestType,
} from "../protos-definitions/csgo/cstrike15_gcmessages";
import {
  ECSUsrMsg_DisconnectToLobby_Action,
  ECstrike15UserMessages,
} from "../protos-definitions/csgo/cstrike15_usermessages";
import { EDemoCommands } from "../protos-definitions/csgo/demo";
import {
  EGCItemCustomizationNotification,
  EGCItemMsg,
  EGCMsgResponse,
  EUnlockStyle,
} from "../protos-definitions/csgo/econ_gcmessages";
import {
  EClientPersonaStateFlag,
  ECodecUsagePlatform,
  ECodecUsageReason,
  EMsg,
  EMsgClanAccountFlags,
  ESteamReviewScore,
} from "../protos-definitions/csgo/enums_clientserver";
import { EHitGroup, ETeam, EWeaponType } from "../protos-definitions/csgo/fatdemo";
import { EBaseGameEvents } from "../protos-definitions/csgo/gameevents";
import {
  GCClientLauncherType,
  GCConnectionStatus,
} from "../protos-definitions/csgo/gcsdk_gcmessages";
import {
  ECommunityItemAttribute,
  ECommunityItemClass,
  EGCBaseClientMsg,
  EGCSystemMsg,
  EGCToGCMsg,
  ESOMsg,
} from "../protos-definitions/csgo/gcsystemmsgs";
import {
  Bidirectional_Messages,
  Bidirectional_Messages_LowFrequency,
  CLC_Messages,
  DIALOG_TYPE,
  EQueryCvarValueStatus,
  ESplitScreenMessageType,
  PrefetchType,
  ReplayEventType_t,
  RequestPause_t,
  SVC_Messages,
  SVC_Messages_LowFrequency,
  VoiceDataFormat_t,
} from "../protos-definitions/csgo/netmessages";
import { ENetworkDisconnectionReason } from "../protos-definitions/csgo/network_connection";
import {
  NET_Messages,
  SignonState_t,
  SpawnGroupFlags_t,
} from "../protos-definitions/csgo/networkbasetypes";
import { EBasePredictionEvents } from "../protos-definitions/csgo/prediction_events";
import { ESource2PlayStatsFieldType } from "../protos-definitions/csgo/source2_steam_stats";
import { ESteamDatagramMsgID } from "../protos-definitions/csgo/steamdatagram_messages_sdr";
import { GCProtoBufMsgSrc } from "../protos-definitions/csgo/steammessages";
import { ENotificationSetting } from "../protos-definitions/csgo/steammessages_player.steamworkssdk";
import { EProtoExecutionSite } from "../protos-definitions/csgo/steammessages_unified_base.steamworkssdk";
import { ESteamNetworkingSocketsCipher } from "../protos-definitions/csgo/steamnetworkingsockets_messages";
import { ESteamNetworkingUDPMsgID } from "../protos-definitions/csgo/steamnetworkingsockets_messages_udp";
import { ETEProtobufIds } from "../protos-definitions/csgo/te";
import {
  EBaseEntityMessages,
  EBaseUserMessages,
  EHapticPulseType,
  eRollType,
  PARTICLE_MESSAGE,
} from "../protos-definitions/csgo/usermessages";
import { EProtoDebugVisiblity } from "../protos-definitions/csgo/valveextensions";

export const csgoEnums = {
  Bidirectional_Messages: Bidirectional_Messages,
  Bidirectional_Messages_LowFrequency: Bidirectional_Messages_LowFrequency,
  CLC_Messages: CLC_Messages,
  DIALOG_TYPE: DIALOG_TYPE,
  EBaseClientMessages: EBaseClientMessages,
  EBaseEntityMessages: EBaseEntityMessages,
  EBaseGameEvents: EBaseGameEvents,
  EBasePredictionEvents: EBasePredictionEvents,
  EBaseUserMessages: EBaseUserMessages,
  ECSPredictionEvents: ECSPredictionEvents,
  ECSUsrMsg_DisconnectToLobby_Action: ECSUsrMsg_DisconnectToLobby_Action,
  EClientPersonaStateFlag: EClientPersonaStateFlag,
  EClientReportingVersion: EClientReportingVersion,
  EClientUIEvent: EClientUIEvent,
  ECodecUsagePlatform: ECodecUsagePlatform,
  ECodecUsageReason: ECodecUsageReason,
  ECommunityItemAttribute: ECommunityItemAttribute,
  ECommunityItemClass: ECommunityItemClass,
  ECsgoGCMsg: ECsgoGCMsg,
  ECsgoGameEvents: ECsgoGameEvents,
  ECsgoSteamUserStat: ECsgoSteamUserStat,
  ECstrike15UserMessages: ECstrike15UserMessages,
  EDemoCommands: EDemoCommands,
  EGCBaseClientMsg: EGCBaseClientMsg,
  EGCBaseMsg: EGCBaseMsg,
  EGCBaseProtoObjectTypes: EGCBaseProtoObjectTypes,
  EGCItemCustomizationNotification: EGCItemCustomizationNotification,
  EGCItemMsg: EGCItemMsg,
  EGCMsgResponse: EGCMsgResponse,
  EGCSystemMsg: EGCSystemMsg,
  EGCToGCMsg: EGCToGCMsg,
  EHapticPulseType: EHapticPulseType,
  EHitGroup: EHitGroup,
  EInitSystemResult: EInitSystemResult,
  EMsg: EMsg,
  EMsgClanAccountFlags: EMsgClanAccountFlags,
  ENetworkDisconnectionReason: ENetworkDisconnectionReason,
  ENotificationSetting: ENotificationSetting,
  EProtoDebugVisiblity: EProtoDebugVisiblity,
  EProtoExecutionSite: EProtoExecutionSite,
  EQueryCvarValueStatus: EQueryCvarValueStatus,
  ESOMsg: ESOMsg,
  ESource2PlayStatsFieldType: ESource2PlayStatsFieldType,
  ESplitScreenMessageType: ESplitScreenMessageType,
  ESteamDatagramMsgID: ESteamDatagramMsgID,
  ESteamNetworkingSocketsCipher: ESteamNetworkingSocketsCipher,
  ESteamNetworkingUDPMsgID: ESteamNetworkingUDPMsgID,
  ESteamReviewScore: ESteamReviewScore,
  ETEProtobufIds: ETEProtobufIds,
  ETeam: ETeam,
  EUnlockStyle: EUnlockStyle,
  EWeaponType: EWeaponType,
  GCClientLauncherType: GCClientLauncherType,
  GCConnectionStatus: GCConnectionStatus,
  GCProtoBufMsgSrc: GCProtoBufMsgSrc,
  GC_BannedWordType: GC_BannedWordType,
  NET_Messages: NET_Messages,
  P2P_Messages: P2P_Messages,
  PARTICLE_MESSAGE: PARTICLE_MESSAGE,
  PrefetchType: PrefetchType,
  QuestType: QuestType,
  ReplayEventType_t: ReplayEventType_t,
  RequestPause_t: RequestPause_t,
  SVC_Messages: SVC_Messages,
  SVC_Messages_LowFrequency: SVC_Messages_LowFrequency,
  SignonState_t: SignonState_t,
  SpawnGroupFlags_t: SpawnGroupFlags_t,
  VoiceDataFormat_t: VoiceDataFormat_t,
  eRollType: eRollType,
} as const;
