/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CGCStorePurchaseInit_LineItem,
  CMsgAcknowledgeRentalExpiration,
  CMsgAdjustEquipSlot,
  CMsgAdjustEquipSlots,
  CMsgApplyEggEssence,
  CMsgApplyPennantUpgrade,
  CMsgApplyStatTrakSwap,
  CMsgApplySticker,
  CMsgApplyStrangePart,
  CMsgConsumableExhausted,
  CMsgConVarValue,
  CMsgDevNewItemRequest,
  CMsgGameServerInfo,
  CMsgGCBannedWord,
  CMsgGCBannedWordListRequest,
  CMsgGCBannedWordListResponse,
  CMsgGCClientDisplayNotification,
  CMsgGCClientVersionUpdated,
  CMsgGCCollectItem,
  CMsgGCError,
  CMsgGCIncrementKillCountResponse,
  CMsgGCItemPreviewItemBoughtNotification,
  CMsgGCNameItemNotification,
  CMsgGCReportAbuse,
  CMsgGCReportAbuseResponse,
  CMsgGCRequestAnnouncementsResponse,
  CMsgGCServerVersionUpdated,
  CMsgGCShowItemsPickedUp,
  CMsgGCStorePurchaseCancel,
  CMsgGCStorePurchaseCancelResponse,
  CMsgGCStorePurchaseFinalize,
  CMsgGCStorePurchaseFinalizeResponse,
  CMsgGCStorePurchaseInit,
  CMsgGCStorePurchaseInitResponse,
  CMsgGCToGCBannedWordListBroadcast,
  CMsgGCToGCBannedWordListUpdated,
  CMsgGCToGCBroadcastConsoleCommand,
  CMsgGCToGCDirtyMultipleSDOCache,
  CMsgGCToGCDirtySDOCache,
  CMsgGCToGCIsTrustedServer,
  CMsgGCToGCIsTrustedServerResponse,
  CMsgGCToGCRequestPassportItemGrant,
  CMsgGCToGCUpdateSQLKeyValue,
  CMsgIncrementKillCountAttribute,
  CMsgInvitationCreated,
  CMsgInviteToParty,
  CMsgItemAcknowledged__DEPRECATED,
  CMsgKickFromParty,
  CMsgLANServerAvailable,
  CMsgModifyItemAttribute,
  CMsgOpenCrate,
  CMsgPartyInviteResponse,
  CMsgReplayUploadedToYouTube,
  CMsgReplicateConVars,
  CMsgSetItemPositions,
  CMsgSortItems,
  CMsgStoreGetUserData,
  CMsgStoreGetUserDataResponse,
  CMsgSystemBroadcast,
  CMsgUpdateItemSchema,
  CMsgUseItem,
  CSOEconClaimCode,
  CSOEconEquipSlot,
  CSOEconGameAccountClient,
  CSOEconItem,
  CSOEconItemAttribute,
  CSOEconItemDropRateBonus,
  CSOEconItemEquipped,
  CSOEconItemEventTicket,
  CSOEconItemLeagueViewPass,
  CSOEconRentalHistory,
  CSOItemCriteria,
  CSOItemCriteriaCondition,
  CSOItemRecipe,
  CSOLobbyInvite,
  CSOPartyInvite,
} from "../protos-definitions/csgo/base_gcmessages";
import type {
  CP2P_Ping,
  CP2P_TextMessage,
  CP2P_Voice,
  CP2P_VRAvatarPosition,
  CP2P_WatchSynchronization,
  CSteam_Voice_Encoding,
} from "../protos-definitions/csgo/c_peer2peer_netmessages";
import type {
  CClientMsg_ClientUIEvent,
  CClientMsg_CustomGameEvent,
  CClientMsg_CustomGameEventBounce,
  CClientMsg_DevPaletteVisibilityChangedEvent,
  CClientMsg_ListenForResponseFound,
  CClientMsg_RotateAnchor,
  CClientMsg_WorldUIControllerHasPanelChangedEvent,
} from "../protos-definitions/csgo/clientmessages";
import type {
  C2S_CONNECT_Message,
  C2S_CONNECT_SameProcessCheck,
  C2S_CONNECTION_Message,
} from "../protos-definitions/csgo/connectionless_netmessages";
import type {
  CMsgPlayerBulletHit,
  CMsgTEFireBullets,
  CMsgTEPlayerAnimEvent,
  CMsgTERadioIcon,
} from "../protos-definitions/csgo/cs_gameevents";
import type {
  CCSPredictionEvent_AddAimPunch,
  CCSPredictionEvent_DamageTag,
} from "../protos-definitions/csgo/cs_prediction_events";
import type {
  CSGOInputHistoryEntryPB,
  CSGOInterpolationInfoPB,
  CSGOInterpolationInfoPB_CL,
  CSGOUserCmdPB,
} from "../protos-definitions/csgo/cs_usercmd";
import type {
  AccountActivity,
  CAttribute_String,
  CClientHeaderOverwatchEvidence,
  CDataGCCStrike15_v2_MatchInfo,
  CDataGCCStrike15_v2_TournamentGroup,
  CDataGCCStrike15_v2_TournamentGroupTeam,
  CDataGCCStrike15_v2_TournamentInfo,
  CDataGCCStrike15_v2_TournamentMatchDraft,
  CDataGCCStrike15_v2_TournamentSection,
  CEconItemPreviewDataBlock,
  CMsgCStrike15Welcome,
  CMsgCsgoSteamUserStatChange,
  CMsgGC_GlobalGame_Play,
  CMsgGC_GlobalGame_Subscribe,
  CMsgGC_GlobalGame_Unsubscribe,
  CMsgGC_ServerQuestUpdateData,
  CMsgGCCStrike15_ClientDeepStats,
  CMsgGCCStrike15_GotvSyncPacket,
  CMsgGCCStrike15_v2_Account_RequestCoPlays,
  CMsgGCCStrike15_v2_AccountPrivacySettings,
  CMsgGCCStrike15_v2_AcknowledgePenalty,
  CMsgGCCStrike15_v2_BetaEnrollment,
  CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest,
  CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse,
  CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin,
  CMsgGCCStrike15_v2_Client2GCStreamUnlock,
  CMsgGCCStrike15_v2_Client2GCTextMsg,
  CMsgGCCStrike15_v2_ClientAccountBalance,
  CMsgGCCStrike15_v2_ClientAuthKeyCode,
  CMsgGCCStrike15_v2_ClientCommendPlayer,
  CMsgGCCStrike15_v2_ClientGCRankUpdate,
  CMsgGCCStrike15_v2_ClientLogonFatalError,
  CMsgGCCStrike15_v2_ClientNetworkConfig,
  CMsgGCCStrike15_v2_ClientPartyJoinRelay,
  CMsgGCCStrike15_v2_ClientPartyWarning,
  CMsgGCCStrike15_v2_ClientPerfReport,
  CMsgGCCStrike15_v2_ClientPlayerDecalSign,
  CMsgGCCStrike15_v2_ClientPollState,
  CMsgGCCStrike15_v2_ClientReportPlayer,
  CMsgGCCStrike15_v2_ClientReportResponse,
  CMsgGCCStrike15_v2_ClientReportServer,
  CMsgGCCStrike15_v2_ClientReportValidation,
  CMsgGCCStrike15_v2_ClientRequestJoinFriendData,
  CMsgGCCStrike15_v2_ClientRequestJoinServerData,
  CMsgGCCStrike15_v2_ClientRequestPlayersProfile,
  CMsgGCCStrike15_v2_ClientRequestSouvenir,
  CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends,
  CMsgGCCStrike15_v2_ClientSubmitSurveyVote,
  CMsgGCCStrike15_v2_ClientToGCChat,
  CMsgGCCStrike15_v2_ClientToGCRequestElevate,
  CMsgGCCStrike15_v2_ClientToGCRequestTicket,
  CMsgGCCStrike15_v2_ClientVarValueNotificationInfo,
  CMsgGCCStrike15_v2_Fantasy,
  CMsgGCCStrike15_v2_GC2ClientInitSystem,
  CMsgGCCStrike15_v2_GC2ClientInitSystem_Response,
  CMsgGCCStrike15_v2_GC2ClientNotifyXPShop,
  CMsgGCCStrike15_v2_GC2ClientRefuseSecureMode,
  CMsgGCCStrike15_v2_GC2ClientRequestValidation,
  CMsgGCCStrike15_v2_GC2ClientTextMsg,
  CMsgGCCStrike15_v2_GC2ClientTournamentInfo,
  CMsgGCCStrike15_v2_GC2ServerReservationUpdate,
  CMsgGCCStrike15_v2_GCToClientChat,
  CMsgGCCStrike15_v2_GetEventFavorites_Request,
  CMsgGCCStrike15_v2_GetEventFavorites_Response,
  CMsgGCCStrike15_v2_GiftsLeaderboardResponse,
  CMsgGCCStrike15_v2_MatchEndRewardDropsNotification,
  CMsgGCCStrike15_v2_MatchEndRunRewardDrops,
  CMsgGCCStrike15_v2_MatchList,
  CMsgGCCStrike15_v2_MatchListRequestFullGameInfo,
  CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser,
  CMsgGCCStrike15_v2_MatchListRequestRecentUserGames,
  CMsgGCCStrike15_v2_MatchListRequestTournamentGames,
  CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt,
  CMsgGCCStrike15_v2_MatchmakingClient2ServerPing,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientHello,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate,
  CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note,
  CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm,
  CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve,
  CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate,
  CMsgGCCStrike15_v2_MatchmakingServerReservationResponse,
  CMsgGCCStrike15_v2_MatchmakingServerRoundStats,
  CMsgGCCStrike15_v2_MatchmakingStart,
  CMsgGCCStrike15_v2_MatchmakingStop,
  CMsgGCCStrike15_v2_Party_Invite,
  CMsgGCCStrike15_v2_Party_Register,
  CMsgGCCStrike15_v2_Party_Search,
  CMsgGCCStrike15_v2_Party_SearchResults,
  CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment,
  CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus,
  CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate,
  CMsgGCCStrike15_v2_PlayersProfile,
  CMsgGCCStrike15_v2_Predictions,
  CMsgGCCStrike15_v2_PremierSeasonSummary,
  CMsgGCCStrike15_v2_Server2GCClientValidate,
  CMsgGCCStrike15_v2_ServerNotificationForUserPenalty,
  CMsgGCCStrike15_v2_ServerVarValueNotificationInfo,
  CMsgGCCStrike15_v2_SetEventFavorite,
  CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName,
  CMsgGCCStrike15_v2_WatchInfoUsers,
  CMsgGCCstrike15_v2_ClientRedeemFreeReward,
  CMsgGCCstrike15_v2_ClientRedeemMissionReward,
  CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded,
  CMsgGCToClientSteamDatagramTicket,
  CMsgItemAcknowledged,
  CMsgLegacySource1ClientWelcome,
  CMsgRecurringMissionSchema,
  CPreMatchInfoData,
  CSOAccountItemPersonalStore,
  CSOAccountKeychainRemoveToolCharges,
  CSOAccountRecurringMission,
  CSOAccountRecurringSubscription,
  CSOAccountSeasonalOperation,
  CSOAccountXpShop,
  CSOAccountXpShopBids,
  CSOEconCoupon,
  CSOGameAccountSteamChina,
  CSOPersonaDataPublic,
  CSOQuestProgress,
  CSOVolatileItemClaimedRewards,
  CSOVolatileItemOffer,
  CVDiagnostic,
  DataCenterPing,
  DeepPlayerMatchEvent,
  DeepPlayerStatsEntry,
  DetailedSearchStatistic,
  GameServerPing,
  GlobalStatistics,
  IpAddressMask,
  MatchEndItemUpdates,
  OperationalStatisticDescription,
  OperationalStatisticElement,
  OperationalStatisticsPacket,
  OperationalVarValue,
  PlayerCommendationInfo,
  PlayerDecalDigitalSignature,
  PlayerMedalsInfo,
  PlayerQuestData,
  PlayerRankingInfo,
  ScoreLeaderboardData,
  ServerHltvInfo,
  TournamentEvent,
  TournamentMatchSetup,
  TournamentPlayer,
  TournamentTeam,
  WatchableMatchInfo,
  XpProgressData,
} from "../protos-definitions/csgo/cstrike15_gcmessages";
import type {
  CCSUsrMsg_AchievementEvent,
  CCSUsrMsg_AdjustMoney,
  CCSUsrMsg_AmmoDenied,
  CCSUsrMsg_BarTime,
  CCSUsrMsg_CallVoteFailed,
  CCSUsrMsg_ClientInfo,
  CCSUsrMsg_CloseCaption,
  CCSUsrMsg_CloseCaptionDirect,
  CCSUsrMsg_CounterStrafe,
  CCSUsrMsg_CurrentRoundOdds,
  CCSUsrMsg_CurrentTimescale,
  CCSUsrMsg_Damage,
  CCSUsrMsg_DamagePrediction,
  CCSUsrMsg_DeepStats,
  CCSUsrMsg_DesiredTimescale,
  CCSUsrMsg_DisconnectToLobby,
  CCSUsrMsg_EndOfMatchAllPlayersData,
  CCSUsrMsg_EntityOutlineHighlight,
  CCSUsrMsg_Fade,
  CCSUsrMsg_GameTitle,
  CCSUsrMsg_Geiger,
  CCSUsrMsg_HintText,
  CCSUsrMsg_HudMsg,
  CCSUsrMsg_HudText,
  CCSUsrMsg_ItemDrop,
  CCSUsrMsg_ItemPickup,
  CCSUsrMsg_KeyHintText,
  CCSUsrMsg_KillCam,
  CCSUsrMsg_MarkAchievement,
  CCSUsrMsg_MatchEndConditions,
  CCSUsrMsg_MatchStatsUpdate,
  CCSUsrMsg_PlayerDecalDigitalSignature,
  CCSUsrMsg_PlayerStatsUpdate,
  CCSUsrMsg_PostRoundDamageReport,
  CCSUsrMsg_ProcessSpottedEntityUpdate,
  CCSUsrMsg_QuestProgress,
  CCSUsrMsg_RadioText,
  CCSUsrMsg_RawAudio,
  CCSUsrMsg_RecurringMissionSchema,
  CCSUsrMsg_ReloadEffect,
  CCSUsrMsg_ReportHit,
  CCSUsrMsg_RequestState,
  CCSUsrMsg_ResetHud,
  CCSUsrMsg_RoundBackupFilenames,
  CCSUsrMsg_RoundEndReportData,
  CCSUsrMsg_Rumble,
  CCSUsrMsg_ScoreLeaderboardData,
  CCSUsrMsg_SendAudio,
  CCSUsrMsg_SendLastKillerDamageToClient,
  CCSUsrMsg_SendPlayerItemDrops,
  CCSUsrMsg_SendPlayerItemFound,
  CCSUsrMsg_SendPlayerLoadout,
  CCSUsrMsg_ServerRankRevealAll,
  CCSUsrMsg_ServerRankUpdate,
  CCSUsrMsg_Shake,
  CCSUsrMsg_ShootInfo,
  CCSUsrMsg_ShowMenu,
  CCSUsrMsg_SSUI,
  CCSUsrMsg_StopSpectatorMode,
  CCSUsrMsg_SurvivalStats,
  CCSUsrMsg_Train,
  CCSUsrMsg_UpdateScreenHealthBar,
  CCSUsrMsg_VGUIMenu,
  CCSUsrMsg_VoiceMask,
  CCSUsrMsg_VoteFailed,
  CCSUsrMsg_VotePass,
  CCSUsrMsg_VoteSetup,
  CCSUsrMsg_VoteStart,
  CCSUsrMsg_WeaponSound,
  CCSUsrMsg_XpUpdate,
  CCSUsrMsg_XRankGet,
  CCSUsrMsg_XRankUpd,
  CCSUsrMsgPreMatchSayText,
} from "../protos-definitions/csgo/cstrike15_usermessages";
import type {
  CDemoAnimationData,
  CDemoAnimationHeader,
  CDemoClassInfo,
  CDemoConsoleCmd,
  CDemoCustomData,
  CDemoCustomDataCallbacks,
  CDemoFileHeader,
  CDemoFileInfo,
  CDemoFullPacket,
  CDemoPacket,
  CDemoRecovery,
  CDemoSaveGame,
  CDemoSendTables,
  CDemoSpawnGroups,
  CDemoSpawnGroupsHLTVBroadcast,
  CDemoStringTables,
  CDemoUserCmd,
  CGameInfo,
} from "../protos-definitions/csgo/demo";
import type {
  CMsgCasketItem,
  CMsgGCDev_SchemaReservationRequest,
  CMsgGCGiftedItems,
  CMsgGCItemCustomizationNotification,
  CMsgGCUserTrackTimePlayedConsecutively,
} from "../protos-definitions/csgo/econ_gcmessages";
import type { CEngineGotvSyncPacket } from "../protos-definitions/csgo/engine_gcmessages";
import type {
  MLDemoHeader,
  MLDict,
  MLEvent,
  MLGameState,
  MLMatchState,
  MLPlayerState,
  MLRoundState,
  MLTick,
  MLWeaponState,
  VacNetShot,
} from "../protos-definitions/csgo/fatdemo";
import type {
  CMsgClearDecalsForEntityEvent,
  CMsgClearEntityDecalsEvent,
  CMsgClearWorldDecalsEvent,
  CMsgPlaceDecalEvent,
  CMsgSosSetLibraryStackFields,
  CMsgSosSetSoundEventParams,
  CMsgSosStartSoundEvent,
  CMsgSosStopSoundEvent,
  CMsgSosStopSoundEventHash,
  CMsgSource1LegacyGameEvent,
  CMsgSource1LegacyGameEventList,
  CMsgSource1LegacyListenEvents,
  CMsgVDebugGameSessionIDEvent,
} from "../protos-definitions/csgo/gameevents";
import type {
  CGameServers_AggregationQuery_Request,
  CGameServers_AggregationQuery_Response,
  CGCToGCMsgMasterAck,
  CGCToGCMsgMasterAck_Response,
  CGCToGCMsgRouted,
  CGCToGCMsgRoutedReply,
  CMsgAccountDetails,
  CMsgClientHello,
  CMsgClientWelcome,
  CMsgConnectionStatus,
  CMsgGCMultiplexMessage,
  CMsgGCMultiplexMessage_Response,
  CMsgGCRequestSessionIP,
  CMsgGCRequestSessionIPResponse,
  CMsgGCUpdateSessionIP,
  CMsgSerializedSOCache,
  CMsgServerHello,
  CMsgSOCacheHaveVersion,
  CMsgSOCacheSubscribed,
  CMsgSOCacheSubscriptionCheck,
  CMsgSOCacheSubscriptionRefresh,
  CMsgSOCacheUnsubscribed,
  CMsgSOCacheVersion,
  CMsgSOIDOwner,
  CMsgSOMultipleObjects,
  CMsgSOSingleObject,
  CProductInfo_SetRichPresenceLocalization_Request,
  CWorkshop_AddSpecialPayment_Request,
  CWorkshop_GetContributors_Request,
  CWorkshop_GetContributors_Response,
  CWorkshop_PopulateItemDescriptions_Request,
  CWorkshop_SetItemPaymentRules_Request,
} from "../protos-definitions/csgo/gcsdk_gcmessages";
import type {
  CCommunity_GamePersonalDataCategoryInfo,
  CCommunity_GetGamePersonalDataCategories_Request,
  CCommunity_GetGamePersonalDataCategories_Response,
  CCommunity_GetGamePersonalDataEntries_Request,
  CCommunity_GetGamePersonalDataEntries_Response,
  CCommunity_TerminateGamePersonalDataEntries_Request,
  CCommunity_TerminateGamePersonalDataEntries_Response,
  CMsgGCHAccountPhoneNumberChange,
  CMsgGCHInviteUserToLobby,
  CMsgGCHRecurringSubscriptionStatusChange,
  CMsgGCHVacVerificationChange,
  CQuest_PublisherAddCommunityItemsToPlayer_Request,
  CQuest_PublisherAddCommunityItemsToPlayer_Response,
} from "../protos-definitions/csgo/gcsystemmsgs";
import type {
  CBidirMsg_PredictionEvent,
  CBidirMsg_RebroadcastGameEvent,
  CBidirMsg_RebroadcastSource,
  CCLCMsg_BaselineAck,
  CCLCMsg_ClientInfo,
  CCLCMsg_CmdKeyValues,
  CCLCMsg_Diagnostic,
  CCLCMsg_HltvFixupOperatorTick,
  CCLCMsg_HltvReplay,
  CCLCMsg_ListenEvents,
  CCLCMsg_LoadingProgress,
  CCLCMsg_Move,
  CCLCMsg_RconServerDetails,
  CCLCMsg_RequestPause,
  CCLCMsg_RespondCvarValue,
  CCLCMsg_ServerStatus,
  CCLCMsg_SplitPlayerConnect,
  CCLCMsg_SplitPlayerDisconnect,
  CCLCMsg_VoiceData,
  CMsgIPCAddress,
  CMsgServerNetworkStats,
  CMsgServerPeer,
  CMsgServerUserCmd,
  CMsgVoiceAudio,
  CSVCMsg_Broadcast_Command,
  CSVCMsg_BSPDecal,
  CSVCMsg_ClassInfo,
  CSVCMsg_ClearAllStringTables,
  CSVCMsg_CmdKeyValues,
  CSVCMsg_CreateStringTable,
  CSVCMsg_CrosshairAngle,
  CSVCMsg_FixAngle,
  CSVCMsg_FlattenedSerializer,
  CSVCMsg_FullFrameSplit,
  CSVCMsg_GameEventList,
  CSVCMsg_GetCvarValue,
  CSVCMsg_HLTVStatus,
  CSVCMsg_HltvFixupOperatorStatus,
  CSVCMsg_HltvReplay,
  CSVCMsg_Menu,
  CSVCMsg_NextMsgPredicted,
  CSVCMsg_PacketEntities,
  CSVCMsg_PacketReliable,
  CSVCMsg_PeerList,
  CSVCMsg_Prefetch,
  CSVCMsg_Print,
  CSVCMsg_RconServerDetails,
  CSVCMsg_SendTable,
  CSVCMsg_ServerInfo,
  CSVCMsg_ServerSteamID,
  CSVCMsg_SetPause,
  CSVCMsg_SetView,
  CSVCMsg_Sounds,
  CSVCMsg_SplitScreen,
  CSVCMsg_StopSound,
  CSVCMsg_TempEntities,
  CSVCMsg_UpdateStringTable,
  CSVCMsg_UserCommands,
  CSVCMsg_UserMessage,
  CSVCMsg_VoiceData,
  CSVCMsg_VoiceInit,
  ProtoFlattenedSerializer_t,
  ProtoFlattenedSerializerField_t,
} from "../protos-definitions/csgo/netmessages";
import type {
  CEntityMsg,
  CMsg_CVars,
  CMsgPlayerInfo,
  CMsgQAngle,
  CMsgQuaternion,
  CMsgRGBA,
  CMsgTransform,
  CMsgVector,
  CMsgVector2D,
  CNETMsg_DebugOverlay,
  CNETMsg_SetConVar,
  CNETMsg_SignonState,
  CNETMsg_SpawnGroup_Load,
  CNETMsg_SpawnGroup_LoadCompleted,
  CNETMsg_SpawnGroup_ManifestUpdate,
  CNETMsg_SpawnGroup_SetCreationTick,
  CNETMsg_SpawnGroup_Unload,
  CNETMsg_SplitScreenUser,
  CNETMsg_StringCmd,
  CNETMsg_Tick,
  CSVCMsg_GameEvent,
  CSVCMsg_GameSessionConfiguration,
  CSVCMsgList_GameEvents,
} from "../protos-definitions/csgo/networkbasetypes";
import type {
  NetMessageConnectionClosed,
  NetMessageConnectionCrashed,
  NetMessageSplitscreenUserChanged,
} from "../protos-definitions/csgo/networksystem_protomessages";
import type {
  CPredictionEvent_Diagnostic,
  CPredictionEvent_StringCommand,
  CPredictionEvent_Teleport,
} from "../protos-definitions/csgo/prediction_events";
import type {
  CMsgSource2NetworkFlowQuality,
  CMsgSource2PerfIntervalSample,
  CMsgSource2PlayStatsPackedRecordList,
  CMsgSource2SystemSpecs,
  CMsgSource2VProfLiteReport,
  CMsgSource2VProfLiteReportItem,
  CSource2Metrics_MatchPerfSummary_Notification,
  CSource2Metrics_RecordPlayStats_Notification,
} from "../protos-definitions/csgo/source2_steam_stats";
import type {
  CMsgSteamDatagramCachedCredentialsForApp,
  CMsgSteamDatagramGameCoordinatorServerLogin,
  CMsgSteamDatagramHostedServerAddressPlaintext,
  CMsgSteamDatagramRelayAuthTicket,
  CMsgSteamDatagramSignedGameCoordinatorServerLogin,
  CMsgSteamDatagramSignedRelayAuthTicket,
} from "../protos-definitions/csgo/steamdatagram_messages_auth";
import type {
  CMsgSteamDatagramClientPingSampleReply,
  CMsgSteamDatagramClientPingSampleRequest,
  CMsgSteamDatagramClientSwitchedPrimary,
  CMsgSteamDatagramConnectionClosed,
  CMsgSteamDatagramConnectionStatsClientToRouter,
  CMsgSteamDatagramConnectionStatsP2PClientToRouter,
  CMsgSteamDatagramConnectionStatsP2PRouterToClient,
  CMsgSteamDatagramConnectionStatsRouterToClient,
  CMsgSteamDatagramConnectionStatsRouterToServer,
  CMsgSteamDatagramConnectionStatsServerToRouter,
  CMsgSteamDatagramConnectOK,
  CMsgSteamDatagramConnectRequest,
  CMsgSteamDatagramGameserverPingReplyData,
  CMsgSteamDatagramGameserverPingRequestBody,
  CMsgSteamDatagramGameserverPingRequestEnvelope,
  CMsgSteamDatagramGameserverSessionEstablished,
  CMsgSteamDatagramGameserverSessionRequest,
  CMsgSteamDatagramNoConnection,
  CMsgSteamDatagramNoSessionRelayToClient,
  CMsgSteamDatagramNoSessionRelayToPeer,
  CMsgSteamDatagramP2PBadRouteRouterToClient,
  CMsgSteamDatagramP2PRoutes,
  CMsgSteamDatagramP2PRoutingSummary,
  CMsgSteamDatagramP2PSessionEstablished,
  CMsgSteamDatagramP2PSessionRequest,
  CMsgSteamDatagramP2PSessionRequestBody,
  CMsgSteamDatagramRouterPingReply,
  CMsgSteamDatagramSetSecondaryAddressRequest,
  CMsgSteamDatagramSetSecondaryAddressResult,
  CMsgSteamDatagramSignedMessageGeneric,
  CMsgSteamNetworkingIPAddress,
  CMsgSteamNetworkingP2PSDRRoutingSummary,
  CMsgTOSTreatment,
} from "../protos-definitions/csgo/steamdatagram_messages_sdr";
import type {
  CChinaAgreementSessions_StartAgreementSessionInGame_Request,
  CChinaAgreementSessions_StartAgreementSessionInGame_Response,
  CMsgProtoBufHeader,
} from "../protos-definitions/csgo/steammessages";
import type {
  CCloud_Delete_Request,
  CCloud_EnumerateUserFiles_Request,
  CCloud_EnumerateUserFiles_Response,
  CCloud_GetFileDetails_Request,
  CCloud_GetFileDetails_Response,
  CCloud_GetUploadServerInfo_Request,
  CCloud_GetUploadServerInfo_Response,
  CCloud_UserFile,
} from "../protos-definitions/csgo/steammessages_cloud.steamworkssdk";
import type {
  CGameNetworkingUI_AppSummary,
  CGameNetworkingUI_ConnectionState,
  CGameNetworkingUI_ConnectionSummary,
  CGameNetworkingUI_Message,
} from "../protos-definitions/csgo/steammessages_gamenetworkingui";
import type {
  CHelpRequestLogs_UploadUserApplicationLog_Request,
  CHelpRequestLogs_UploadUserApplicationLog_Response,
} from "../protos-definitions/csgo/steammessages_helprequest.steamworkssdk";
import type {
  COAuthToken_ImplicitGrantNoPrompt_Request,
  COAuthToken_ImplicitGrantNoPrompt_Response,
} from "../protos-definitions/csgo/steammessages_oauth.steamworkssdk";
import type {
  CPlayer_AddFriend_Request,
  CPlayer_AddFriend_Response,
  CPlayer_CommunityPreferences,
  CPlayer_GetCommunityPreferences_Response,
  CPlayer_GetFriendsGameplayInfo_Request,
  CPlayer_GetFriendsGameplayInfo_Response,
  CPlayer_GetGameBadgeLevels_Request,
  CPlayer_GetGameBadgeLevels_Response,
  CPlayer_GetLastPlayedTimes_Request,
  CPlayer_GetLastPlayedTimes_Response,
  CPlayer_GetMutualFriendsForIncomingInvites_Response,
  CPlayer_GetNewSteamAnnouncementState_Request,
  CPlayer_GetNewSteamAnnouncementState_Response,
  CPlayer_GetNicknameList_Response,
  CPlayer_GetPerFriendPreferences_Response,
  CPlayer_IgnoreFriend_Request,
  CPlayer_IgnoreFriend_Response,
  CPlayer_IncomingInviteMutualFriendList,
  CPlayer_RemoveFriend_Request,
  CPlayer_RemoveFriend_Response,
  CPlayer_SetCommunityPreferences_Request,
  CPlayer_SetPerFriendPreferences_Request,
  CPlayer_UpdateSteamAnnouncementLastRead_Request,
  PerFriendPreferences,
} from "../protos-definitions/csgo/steammessages_player.steamworkssdk";
import type {
  CPublishedFile_GetDetails_Request,
  CPublishedFile_GetDetails_Response,
  CPublishedFile_GetUserFiles_Request,
  CPublishedFile_GetUserFiles_Response,
  CPublishedFile_Publish_Request,
  CPublishedFile_Publish_Response,
  CPublishedFile_RefreshVotingQueue_Request,
  CPublishedFile_Subscribe_Request,
  CPublishedFile_Unsubscribe_Request,
  CPublishedFile_Update_Request,
  PublishedFileDetails,
} from "../protos-definitions/csgo/steammessages_publishedfile.steamworkssdk";
import type {
  CMsgICECandidate,
  CMsgICERendezvous,
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramDiagnostic,
  CMsgSteamDatagramLinkInstantaneousStats,
  CMsgSteamDatagramLinkLifetimeStats,
  CMsgSteamDatagramSessionCryptInfo,
  CMsgSteamDatagramSessionCryptInfoSigned,
  CMsgSteamNetworkingICESessionSummary,
  CMsgSteamNetworkingP2PRendezvous,
} from "../protos-definitions/csgo/steamnetworkingsockets_messages";
import type {
  CMsgSteamDatagramCertificate,
  CMsgSteamDatagramCertificateRequest,
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "../protos-definitions/csgo/steamnetworkingsockets_messages_certs";
import type {
  CMsgSteamSockets_UDP_ChallengeReply,
  CMsgSteamSockets_UDP_ChallengeRequest,
  CMsgSteamSockets_UDP_ConnectionClosed,
  CMsgSteamSockets_UDP_ConnectOK,
  CMsgSteamSockets_UDP_ConnectRequest,
  CMsgSteamSockets_UDP_NoConnection,
  CMsgSteamSockets_UDP_Stats,
} from "../protos-definitions/csgo/steamnetworkingsockets_messages_udp";
import type {
  CMsgEffectData,
  CMsgTEArmorRicochet,
  CMsgTEBaseBeam,
  CMsgTEBeamEntPoint,
  CMsgTEBeamEnts,
  CMsgTEBeamPoints,
  CMsgTEBeamRing,
  CMsgTEBloodStream,
  CMsgTEBubbles,
  CMsgTEBubbleTrail,
  CMsgTEDecal,
  CMsgTEDust,
  CMsgTEEffectDispatch,
  CMsgTEEnergySplash,
  CMsgTEExplosion,
  CMsgTEFizz,
  CMsgTEGlowSprite,
  CMsgTEImpact,
  CMsgTELargeFunnel,
  CMsgTEMuzzleFlash,
  CMsgTEPhysicsProp,
  CMsgTEShatterSurface,
  CMsgTESmoke,
  CMsgTESparks,
  CMsgTEWorldDecal,
} from "../protos-definitions/csgo/te";
import type {
  CUIFontFilePackagePB,
  CUIFontFilePB,
} from "../protos-definitions/csgo/uifontfile_format";
import type {
  CBaseUserCmdExecutionNotes,
  CBaseUserCmdPB,
  CInButtonStatePB,
  CSubtickMoveStep,
  CUserCmdBasePB,
} from "../protos-definitions/csgo/usercmd";
import type {
  CEntityMessageDoSpark,
  CEntityMessageFixAngle,
  CEntityMessagePlayJingle,
  CEntityMessagePropagateForce,
  CEntityMessageRemoveAllDecals,
  CEntityMessageScreenOverlay,
  CUserMessage_Diagnostic_Response,
  CUserMessage_DllStatus,
  CUserMessage_ExtraUserData,
  CUserMessage_Inventory_Response,
  CUserMessage_NotifyResponseFound,
  CUserMessage_PlayResponseConditional,
  CUserMessage_UtilMsg_Response,
  CUserMessageAchievementEvent,
  CUserMessageAmmoDenied,
  CUserMessageAnimStateGraphState,
  CUserMessageAudioParameter,
  CUserMessageCameraTransition,
  CUserMessageCloseCaption,
  CUserMessageCloseCaptionDirect,
  CUserMessageCloseCaptionPlaceholder,
  CUserMessageColoredText,
  CUserMessageCreditsMsg,
  CUserMessageCurrentTimescale,
  CUserMessageDesiredTimescale,
  CUserMessageFade,
  CUserMessageHapticsManagerEffect,
  CUserMessageHapticsManagerPulse,
  CUserMessageHudMsg,
  CUserMessageHudText,
  CUserMessageItemPickup,
  CUserMessageLagCompensationError,
  CUserMessageRequestDiagnostic,
  CUserMessageRequestDllStatus,
  CUserMessageRequestInventory,
  CUserMessageRequestUtilAction,
  CUserMessageRumble,
  CUserMessageSayText,
  CUserMessageSayText2,
  CUserMessageSayTextChannel,
  CUserMessageScreenTilt,
  CUserMessageSendAudio,
  CUserMessageServerFrameTime,
  CUserMessageShake,
  CUserMessageShakeDir,
  CUserMessageShowMenu,
  CUserMessageTextMsg,
  CUserMessageUpdateCssClasses,
  CUserMessageVoiceMask,
  CUserMessageWaterShake,
  CUserMsg_CustomGameEvent,
  CUserMsg_HudError,
  CUserMsg_ParticleManager,
} from "../protos-definitions/csgo/usermessages";

export interface CsgoProtos {
  AccountActivity: AccountActivity;
  C2S_CONNECT_Message: C2S_CONNECT_Message;
  C2S_CONNECT_SameProcessCheck: C2S_CONNECT_SameProcessCheck;
  C2S_CONNECTION_Message: C2S_CONNECTION_Message;
  CAttribute_String: CAttribute_String;
  CBaseUserCmdExecutionNotes: CBaseUserCmdExecutionNotes;
  CBaseUserCmdPB: CBaseUserCmdPB;
  CBidirMsg_PredictionEvent: CBidirMsg_PredictionEvent;
  CBidirMsg_RebroadcastGameEvent: CBidirMsg_RebroadcastGameEvent;
  CBidirMsg_RebroadcastSource: CBidirMsg_RebroadcastSource;
  CChinaAgreementSessions_StartAgreementSessionInGame_Request: CChinaAgreementSessions_StartAgreementSessionInGame_Request;
  CChinaAgreementSessions_StartAgreementSessionInGame_Response: CChinaAgreementSessions_StartAgreementSessionInGame_Response;
  CCLCMsg_BaselineAck: CCLCMsg_BaselineAck;
  CCLCMsg_ClientInfo: CCLCMsg_ClientInfo;
  CCLCMsg_CmdKeyValues: CCLCMsg_CmdKeyValues;
  CCLCMsg_Diagnostic: CCLCMsg_Diagnostic;
  CCLCMsg_HltvFixupOperatorTick: CCLCMsg_HltvFixupOperatorTick;
  CCLCMsg_HltvReplay: CCLCMsg_HltvReplay;
  CCLCMsg_ListenEvents: CCLCMsg_ListenEvents;
  CCLCMsg_LoadingProgress: CCLCMsg_LoadingProgress;
  CCLCMsg_Move: CCLCMsg_Move;
  CCLCMsg_RconServerDetails: CCLCMsg_RconServerDetails;
  CCLCMsg_RequestPause: CCLCMsg_RequestPause;
  CCLCMsg_RespondCvarValue: CCLCMsg_RespondCvarValue;
  CCLCMsg_ServerStatus: CCLCMsg_ServerStatus;
  CCLCMsg_SplitPlayerConnect: CCLCMsg_SplitPlayerConnect;
  CCLCMsg_SplitPlayerDisconnect: CCLCMsg_SplitPlayerDisconnect;
  CCLCMsg_VoiceData: CCLCMsg_VoiceData;
  CClientHeaderOverwatchEvidence: CClientHeaderOverwatchEvidence;
  CClientMsg_ClientUIEvent: CClientMsg_ClientUIEvent;
  CClientMsg_CustomGameEvent: CClientMsg_CustomGameEvent;
  CClientMsg_CustomGameEventBounce: CClientMsg_CustomGameEventBounce;
  CClientMsg_DevPaletteVisibilityChangedEvent: CClientMsg_DevPaletteVisibilityChangedEvent;
  CClientMsg_ListenForResponseFound: CClientMsg_ListenForResponseFound;
  CClientMsg_RotateAnchor: CClientMsg_RotateAnchor;
  CClientMsg_WorldUIControllerHasPanelChangedEvent: CClientMsg_WorldUIControllerHasPanelChangedEvent;
  CCloud_Delete_Request: CCloud_Delete_Request;
  CCloud_EnumerateUserFiles_Request: CCloud_EnumerateUserFiles_Request;
  CCloud_EnumerateUserFiles_Response: CCloud_EnumerateUserFiles_Response;
  CCloud_GetFileDetails_Request: CCloud_GetFileDetails_Request;
  CCloud_GetFileDetails_Response: CCloud_GetFileDetails_Response;
  CCloud_GetUploadServerInfo_Request: CCloud_GetUploadServerInfo_Request;
  CCloud_GetUploadServerInfo_Response: CCloud_GetUploadServerInfo_Response;
  CCloud_UserFile: CCloud_UserFile;
  CCommunity_GamePersonalDataCategoryInfo: CCommunity_GamePersonalDataCategoryInfo;
  CCommunity_GetGamePersonalDataCategories_Request: CCommunity_GetGamePersonalDataCategories_Request;
  CCommunity_GetGamePersonalDataCategories_Response: CCommunity_GetGamePersonalDataCategories_Response;
  CCommunity_GetGamePersonalDataEntries_Request: CCommunity_GetGamePersonalDataEntries_Request;
  CCommunity_GetGamePersonalDataEntries_Response: CCommunity_GetGamePersonalDataEntries_Response;
  CCommunity_TerminateGamePersonalDataEntries_Request: CCommunity_TerminateGamePersonalDataEntries_Request;
  CCommunity_TerminateGamePersonalDataEntries_Response: CCommunity_TerminateGamePersonalDataEntries_Response;
  CCSPredictionEvent_AddAimPunch: CCSPredictionEvent_AddAimPunch;
  CCSPredictionEvent_DamageTag: CCSPredictionEvent_DamageTag;
  CCSUsrMsg_AchievementEvent: CCSUsrMsg_AchievementEvent;
  CCSUsrMsg_AdjustMoney: CCSUsrMsg_AdjustMoney;
  CCSUsrMsg_AmmoDenied: CCSUsrMsg_AmmoDenied;
  CCSUsrMsg_BarTime: CCSUsrMsg_BarTime;
  CCSUsrMsg_CallVoteFailed: CCSUsrMsg_CallVoteFailed;
  CCSUsrMsg_ClientInfo: CCSUsrMsg_ClientInfo;
  CCSUsrMsg_CloseCaption: CCSUsrMsg_CloseCaption;
  CCSUsrMsg_CloseCaptionDirect: CCSUsrMsg_CloseCaptionDirect;
  CCSUsrMsg_CounterStrafe: CCSUsrMsg_CounterStrafe;
  CCSUsrMsg_CurrentRoundOdds: CCSUsrMsg_CurrentRoundOdds;
  CCSUsrMsg_CurrentTimescale: CCSUsrMsg_CurrentTimescale;
  CCSUsrMsg_Damage: CCSUsrMsg_Damage;
  CCSUsrMsg_DamagePrediction: CCSUsrMsg_DamagePrediction;
  CCSUsrMsg_DeepStats: CCSUsrMsg_DeepStats;
  CCSUsrMsg_DesiredTimescale: CCSUsrMsg_DesiredTimescale;
  CCSUsrMsg_DisconnectToLobby: CCSUsrMsg_DisconnectToLobby;
  CCSUsrMsg_EndOfMatchAllPlayersData: CCSUsrMsg_EndOfMatchAllPlayersData;
  CCSUsrMsg_EntityOutlineHighlight: CCSUsrMsg_EntityOutlineHighlight;
  CCSUsrMsg_Fade: CCSUsrMsg_Fade;
  CCSUsrMsg_GameTitle: CCSUsrMsg_GameTitle;
  CCSUsrMsg_Geiger: CCSUsrMsg_Geiger;
  CCSUsrMsg_HintText: CCSUsrMsg_HintText;
  CCSUsrMsg_HudMsg: CCSUsrMsg_HudMsg;
  CCSUsrMsg_HudText: CCSUsrMsg_HudText;
  CCSUsrMsg_ItemDrop: CCSUsrMsg_ItemDrop;
  CCSUsrMsg_ItemPickup: CCSUsrMsg_ItemPickup;
  CCSUsrMsg_KeyHintText: CCSUsrMsg_KeyHintText;
  CCSUsrMsg_KillCam: CCSUsrMsg_KillCam;
  CCSUsrMsg_MarkAchievement: CCSUsrMsg_MarkAchievement;
  CCSUsrMsg_MatchEndConditions: CCSUsrMsg_MatchEndConditions;
  CCSUsrMsg_MatchStatsUpdate: CCSUsrMsg_MatchStatsUpdate;
  CCSUsrMsg_PlayerDecalDigitalSignature: CCSUsrMsg_PlayerDecalDigitalSignature;
  CCSUsrMsg_PlayerStatsUpdate: CCSUsrMsg_PlayerStatsUpdate;
  CCSUsrMsg_PostRoundDamageReport: CCSUsrMsg_PostRoundDamageReport;
  CCSUsrMsg_ProcessSpottedEntityUpdate: CCSUsrMsg_ProcessSpottedEntityUpdate;
  CCSUsrMsg_QuestProgress: CCSUsrMsg_QuestProgress;
  CCSUsrMsg_RadioText: CCSUsrMsg_RadioText;
  CCSUsrMsg_RawAudio: CCSUsrMsg_RawAudio;
  CCSUsrMsg_RecurringMissionSchema: CCSUsrMsg_RecurringMissionSchema;
  CCSUsrMsg_ReloadEffect: CCSUsrMsg_ReloadEffect;
  CCSUsrMsg_ReportHit: CCSUsrMsg_ReportHit;
  CCSUsrMsg_RequestState: CCSUsrMsg_RequestState;
  CCSUsrMsg_ResetHud: CCSUsrMsg_ResetHud;
  CCSUsrMsg_RoundBackupFilenames: CCSUsrMsg_RoundBackupFilenames;
  CCSUsrMsg_RoundEndReportData: CCSUsrMsg_RoundEndReportData;
  CCSUsrMsg_Rumble: CCSUsrMsg_Rumble;
  CCSUsrMsg_ScoreLeaderboardData: CCSUsrMsg_ScoreLeaderboardData;
  CCSUsrMsg_SendAudio: CCSUsrMsg_SendAudio;
  CCSUsrMsg_SendLastKillerDamageToClient: CCSUsrMsg_SendLastKillerDamageToClient;
  CCSUsrMsg_SendPlayerItemDrops: CCSUsrMsg_SendPlayerItemDrops;
  CCSUsrMsg_SendPlayerItemFound: CCSUsrMsg_SendPlayerItemFound;
  CCSUsrMsg_SendPlayerLoadout: CCSUsrMsg_SendPlayerLoadout;
  CCSUsrMsg_ServerRankRevealAll: CCSUsrMsg_ServerRankRevealAll;
  CCSUsrMsg_ServerRankUpdate: CCSUsrMsg_ServerRankUpdate;
  CCSUsrMsg_Shake: CCSUsrMsg_Shake;
  CCSUsrMsg_ShootInfo: CCSUsrMsg_ShootInfo;
  CCSUsrMsg_ShowMenu: CCSUsrMsg_ShowMenu;
  CCSUsrMsg_SSUI: CCSUsrMsg_SSUI;
  CCSUsrMsg_StopSpectatorMode: CCSUsrMsg_StopSpectatorMode;
  CCSUsrMsg_SurvivalStats: CCSUsrMsg_SurvivalStats;
  CCSUsrMsg_Train: CCSUsrMsg_Train;
  CCSUsrMsg_UpdateScreenHealthBar: CCSUsrMsg_UpdateScreenHealthBar;
  CCSUsrMsg_VGUIMenu: CCSUsrMsg_VGUIMenu;
  CCSUsrMsg_VoiceMask: CCSUsrMsg_VoiceMask;
  CCSUsrMsg_VoteFailed: CCSUsrMsg_VoteFailed;
  CCSUsrMsg_VotePass: CCSUsrMsg_VotePass;
  CCSUsrMsg_VoteSetup: CCSUsrMsg_VoteSetup;
  CCSUsrMsg_VoteStart: CCSUsrMsg_VoteStart;
  CCSUsrMsg_WeaponSound: CCSUsrMsg_WeaponSound;
  CCSUsrMsg_XpUpdate: CCSUsrMsg_XpUpdate;
  CCSUsrMsg_XRankGet: CCSUsrMsg_XRankGet;
  CCSUsrMsg_XRankUpd: CCSUsrMsg_XRankUpd;
  CCSUsrMsgPreMatchSayText: CCSUsrMsgPreMatchSayText;
  CDataGCCStrike15_v2_MatchInfo: CDataGCCStrike15_v2_MatchInfo;
  CDataGCCStrike15_v2_TournamentGroup: CDataGCCStrike15_v2_TournamentGroup;
  CDataGCCStrike15_v2_TournamentGroupTeam: CDataGCCStrike15_v2_TournamentGroupTeam;
  CDataGCCStrike15_v2_TournamentInfo: CDataGCCStrike15_v2_TournamentInfo;
  CDataGCCStrike15_v2_TournamentMatchDraft: CDataGCCStrike15_v2_TournamentMatchDraft;
  CDataGCCStrike15_v2_TournamentSection: CDataGCCStrike15_v2_TournamentSection;
  CDemoAnimationData: CDemoAnimationData;
  CDemoAnimationHeader: CDemoAnimationHeader;
  CDemoClassInfo: CDemoClassInfo;
  CDemoConsoleCmd: CDemoConsoleCmd;
  CDemoCustomData: CDemoCustomData;
  CDemoCustomDataCallbacks: CDemoCustomDataCallbacks;
  CDemoFileHeader: CDemoFileHeader;
  CDemoFileInfo: CDemoFileInfo;
  CDemoFullPacket: CDemoFullPacket;
  CDemoPacket: CDemoPacket;
  CDemoRecovery: CDemoRecovery;
  CDemoSaveGame: CDemoSaveGame;
  CDemoSendTables: CDemoSendTables;
  CDemoSpawnGroups: CDemoSpawnGroups;
  CDemoSpawnGroupsHLTVBroadcast: CDemoSpawnGroupsHLTVBroadcast;
  CDemoStringTables: CDemoStringTables;
  CDemoUserCmd: CDemoUserCmd;
  CEconItemPreviewDataBlock: CEconItemPreviewDataBlock;
  CEngineGotvSyncPacket: CEngineGotvSyncPacket;
  CEntityMessageDoSpark: CEntityMessageDoSpark;
  CEntityMessageFixAngle: CEntityMessageFixAngle;
  CEntityMessagePlayJingle: CEntityMessagePlayJingle;
  CEntityMessagePropagateForce: CEntityMessagePropagateForce;
  CEntityMessageRemoveAllDecals: CEntityMessageRemoveAllDecals;
  CEntityMessageScreenOverlay: CEntityMessageScreenOverlay;
  CEntityMsg: CEntityMsg;
  CGameInfo: CGameInfo;
  CGameNetworkingUI_AppSummary: CGameNetworkingUI_AppSummary;
  CGameNetworkingUI_ConnectionState: CGameNetworkingUI_ConnectionState;
  CGameNetworkingUI_ConnectionSummary: CGameNetworkingUI_ConnectionSummary;
  CGameNetworkingUI_Message: CGameNetworkingUI_Message;
  CGameServers_AggregationQuery_Request: CGameServers_AggregationQuery_Request;
  CGameServers_AggregationQuery_Response: CGameServers_AggregationQuery_Response;
  CGCStorePurchaseInit_LineItem: CGCStorePurchaseInit_LineItem;
  CGCToGCMsgMasterAck: CGCToGCMsgMasterAck;
  CGCToGCMsgMasterAck_Response: CGCToGCMsgMasterAck_Response;
  CGCToGCMsgRouted: CGCToGCMsgRouted;
  CGCToGCMsgRoutedReply: CGCToGCMsgRoutedReply;
  CHelpRequestLogs_UploadUserApplicationLog_Request: CHelpRequestLogs_UploadUserApplicationLog_Request;
  CHelpRequestLogs_UploadUserApplicationLog_Response: CHelpRequestLogs_UploadUserApplicationLog_Response;
  CInButtonStatePB: CInButtonStatePB;
  CMsg_CVars: CMsg_CVars;
  CMsgAccountDetails: CMsgAccountDetails;
  CMsgAcknowledgeRentalExpiration: CMsgAcknowledgeRentalExpiration;
  CMsgAdjustEquipSlot: CMsgAdjustEquipSlot;
  CMsgAdjustEquipSlots: CMsgAdjustEquipSlots;
  CMsgApplyEggEssence: CMsgApplyEggEssence;
  CMsgApplyPennantUpgrade: CMsgApplyPennantUpgrade;
  CMsgApplyStatTrakSwap: CMsgApplyStatTrakSwap;
  CMsgApplySticker: CMsgApplySticker;
  CMsgApplyStrangePart: CMsgApplyStrangePart;
  CMsgCasketItem: CMsgCasketItem;
  CMsgClearDecalsForEntityEvent: CMsgClearDecalsForEntityEvent;
  CMsgClearEntityDecalsEvent: CMsgClearEntityDecalsEvent;
  CMsgClearWorldDecalsEvent: CMsgClearWorldDecalsEvent;
  CMsgClientHello: CMsgClientHello;
  CMsgClientWelcome: CMsgClientWelcome;
  CMsgConnectionStatus: CMsgConnectionStatus;
  CMsgConsumableExhausted: CMsgConsumableExhausted;
  CMsgConVarValue: CMsgConVarValue;
  CMsgCsgoSteamUserStatChange: CMsgCsgoSteamUserStatChange;
  CMsgCStrike15Welcome: CMsgCStrike15Welcome;
  CMsgDevNewItemRequest: CMsgDevNewItemRequest;
  CMsgEffectData: CMsgEffectData;
  CMsgGameServerInfo: CMsgGameServerInfo;
  CMsgGC_GlobalGame_Play: CMsgGC_GlobalGame_Play;
  CMsgGC_GlobalGame_Subscribe: CMsgGC_GlobalGame_Subscribe;
  CMsgGC_GlobalGame_Unsubscribe: CMsgGC_GlobalGame_Unsubscribe;
  CMsgGC_ServerQuestUpdateData: CMsgGC_ServerQuestUpdateData;
  CMsgGCBannedWord: CMsgGCBannedWord;
  CMsgGCBannedWordListRequest: CMsgGCBannedWordListRequest;
  CMsgGCBannedWordListResponse: CMsgGCBannedWordListResponse;
  CMsgGCClientDisplayNotification: CMsgGCClientDisplayNotification;
  CMsgGCClientVersionUpdated: CMsgGCClientVersionUpdated;
  CMsgGCCollectItem: CMsgGCCollectItem;
  CMsgGCCStrike15_ClientDeepStats: CMsgGCCStrike15_ClientDeepStats;
  CMsgGCCStrike15_GotvSyncPacket: CMsgGCCStrike15_GotvSyncPacket;
  CMsgGCCStrike15_v2_Account_RequestCoPlays: CMsgGCCStrike15_v2_Account_RequestCoPlays;
  CMsgGCCStrike15_v2_AccountPrivacySettings: CMsgGCCStrike15_v2_AccountPrivacySettings;
  CMsgGCCStrike15_v2_AcknowledgePenalty: CMsgGCCStrike15_v2_AcknowledgePenalty;
  CMsgGCCStrike15_v2_BetaEnrollment: CMsgGCCStrike15_v2_BetaEnrollment;
  CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest: CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockRequest;
  CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse: CMsgGCCStrike15_v2_Client2GCEconPreviewDataBlockResponse;
  CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin: CMsgGCCStrike15_v2_Client2GCRequestPrestigeCoin;
  CMsgGCCStrike15_v2_Client2GCStreamUnlock: CMsgGCCStrike15_v2_Client2GCStreamUnlock;
  CMsgGCCStrike15_v2_Client2GCTextMsg: CMsgGCCStrike15_v2_Client2GCTextMsg;
  CMsgGCCStrike15_v2_ClientAccountBalance: CMsgGCCStrike15_v2_ClientAccountBalance;
  CMsgGCCStrike15_v2_ClientAuthKeyCode: CMsgGCCStrike15_v2_ClientAuthKeyCode;
  CMsgGCCStrike15_v2_ClientCommendPlayer: CMsgGCCStrike15_v2_ClientCommendPlayer;
  CMsgGCCStrike15_v2_ClientGCRankUpdate: CMsgGCCStrike15_v2_ClientGCRankUpdate;
  CMsgGCCStrike15_v2_ClientLogonFatalError: CMsgGCCStrike15_v2_ClientLogonFatalError;
  CMsgGCCStrike15_v2_ClientNetworkConfig: CMsgGCCStrike15_v2_ClientNetworkConfig;
  CMsgGCCStrike15_v2_ClientPartyJoinRelay: CMsgGCCStrike15_v2_ClientPartyJoinRelay;
  CMsgGCCStrike15_v2_ClientPartyWarning: CMsgGCCStrike15_v2_ClientPartyWarning;
  CMsgGCCStrike15_v2_ClientPerfReport: CMsgGCCStrike15_v2_ClientPerfReport;
  CMsgGCCStrike15_v2_ClientPlayerDecalSign: CMsgGCCStrike15_v2_ClientPlayerDecalSign;
  CMsgGCCStrike15_v2_ClientPollState: CMsgGCCStrike15_v2_ClientPollState;
  CMsgGCCstrike15_v2_ClientRedeemFreeReward: CMsgGCCstrike15_v2_ClientRedeemFreeReward;
  CMsgGCCstrike15_v2_ClientRedeemMissionReward: CMsgGCCstrike15_v2_ClientRedeemMissionReward;
  CMsgGCCStrike15_v2_ClientReportPlayer: CMsgGCCStrike15_v2_ClientReportPlayer;
  CMsgGCCStrike15_v2_ClientReportResponse: CMsgGCCStrike15_v2_ClientReportResponse;
  CMsgGCCStrike15_v2_ClientReportServer: CMsgGCCStrike15_v2_ClientReportServer;
  CMsgGCCStrike15_v2_ClientReportValidation: CMsgGCCStrike15_v2_ClientReportValidation;
  CMsgGCCStrike15_v2_ClientRequestJoinFriendData: CMsgGCCStrike15_v2_ClientRequestJoinFriendData;
  CMsgGCCStrike15_v2_ClientRequestJoinServerData: CMsgGCCStrike15_v2_ClientRequestJoinServerData;
  CMsgGCCStrike15_v2_ClientRequestPlayersProfile: CMsgGCCStrike15_v2_ClientRequestPlayersProfile;
  CMsgGCCStrike15_v2_ClientRequestSouvenir: CMsgGCCStrike15_v2_ClientRequestSouvenir;
  CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends: CMsgGCCStrike15_v2_ClientRequestWatchInfoFriends;
  CMsgGCCStrike15_v2_ClientSubmitSurveyVote: CMsgGCCStrike15_v2_ClientSubmitSurveyVote;
  CMsgGCCStrike15_v2_ClientToGCChat: CMsgGCCStrike15_v2_ClientToGCChat;
  CMsgGCCStrike15_v2_ClientToGCRequestElevate: CMsgGCCStrike15_v2_ClientToGCRequestElevate;
  CMsgGCCStrike15_v2_ClientToGCRequestTicket: CMsgGCCStrike15_v2_ClientToGCRequestTicket;
  CMsgGCCStrike15_v2_ClientVarValueNotificationInfo: CMsgGCCStrike15_v2_ClientVarValueNotificationInfo;
  CMsgGCCStrike15_v2_Fantasy: CMsgGCCStrike15_v2_Fantasy;
  CMsgGCCStrike15_v2_GC2ClientInitSystem: CMsgGCCStrike15_v2_GC2ClientInitSystem;
  CMsgGCCStrike15_v2_GC2ClientInitSystem_Response: CMsgGCCStrike15_v2_GC2ClientInitSystem_Response;
  CMsgGCCStrike15_v2_GC2ClientNotifyXPShop: CMsgGCCStrike15_v2_GC2ClientNotifyXPShop;
  CMsgGCCStrike15_v2_GC2ClientRefuseSecureMode: CMsgGCCStrike15_v2_GC2ClientRefuseSecureMode;
  CMsgGCCStrike15_v2_GC2ClientRequestValidation: CMsgGCCStrike15_v2_GC2ClientRequestValidation;
  CMsgGCCStrike15_v2_GC2ClientTextMsg: CMsgGCCStrike15_v2_GC2ClientTextMsg;
  CMsgGCCStrike15_v2_GC2ClientTournamentInfo: CMsgGCCStrike15_v2_GC2ClientTournamentInfo;
  CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded: CMsgGCCstrike15_v2_GC2ServerNotifyXPRewarded;
  CMsgGCCStrike15_v2_GC2ServerReservationUpdate: CMsgGCCStrike15_v2_GC2ServerReservationUpdate;
  CMsgGCCStrike15_v2_GCToClientChat: CMsgGCCStrike15_v2_GCToClientChat;
  CMsgGCCStrike15_v2_GetEventFavorites_Request: CMsgGCCStrike15_v2_GetEventFavorites_Request;
  CMsgGCCStrike15_v2_GetEventFavorites_Response: CMsgGCCStrike15_v2_GetEventFavorites_Response;
  CMsgGCCStrike15_v2_GiftsLeaderboardResponse: CMsgGCCStrike15_v2_GiftsLeaderboardResponse;
  CMsgGCCStrike15_v2_MatchEndRewardDropsNotification: CMsgGCCStrike15_v2_MatchEndRewardDropsNotification;
  CMsgGCCStrike15_v2_MatchEndRunRewardDrops: CMsgGCCStrike15_v2_MatchEndRunRewardDrops;
  CMsgGCCStrike15_v2_MatchList: CMsgGCCStrike15_v2_MatchList;
  CMsgGCCStrike15_v2_MatchListRequestFullGameInfo: CMsgGCCStrike15_v2_MatchListRequestFullGameInfo;
  CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser: CMsgGCCStrike15_v2_MatchListRequestLiveGameForUser;
  CMsgGCCStrike15_v2_MatchListRequestRecentUserGames: CMsgGCCStrike15_v2_MatchListRequestRecentUserGames;
  CMsgGCCStrike15_v2_MatchListRequestTournamentGames: CMsgGCCStrike15_v2_MatchListRequestTournamentGames;
  CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt: CMsgGCCStrike15_v2_MatchListTournamentOperatorMgmt;
  CMsgGCCStrike15_v2_MatchmakingClient2ServerPing: CMsgGCCStrike15_v2_MatchmakingClient2ServerPing;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon: CMsgGCCStrike15_v2_MatchmakingGC2ClientAbandon;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientHello: CMsgGCCStrike15_v2_MatchmakingGC2ClientHello;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve: CMsgGCCStrike15_v2_MatchmakingGC2ClientReserve;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats: CMsgGCCStrike15_v2_MatchmakingGC2ClientSearchStats;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate;
  CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note;
  CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm: CMsgGCCStrike15_v2_MatchmakingGC2ServerConfirm;
  CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve: CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve;
  CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate: CMsgGCCStrike15_v2_MatchmakingOperator2GCBlogUpdate;
  CMsgGCCStrike15_v2_MatchmakingServerReservationResponse: CMsgGCCStrike15_v2_MatchmakingServerReservationResponse;
  CMsgGCCStrike15_v2_MatchmakingServerRoundStats: CMsgGCCStrike15_v2_MatchmakingServerRoundStats;
  CMsgGCCStrike15_v2_MatchmakingStart: CMsgGCCStrike15_v2_MatchmakingStart;
  CMsgGCCStrike15_v2_MatchmakingStop: CMsgGCCStrike15_v2_MatchmakingStop;
  CMsgGCCStrike15_v2_Party_Invite: CMsgGCCStrike15_v2_Party_Invite;
  CMsgGCCStrike15_v2_Party_Register: CMsgGCCStrike15_v2_Party_Register;
  CMsgGCCStrike15_v2_Party_Search: CMsgGCCStrike15_v2_Party_Search;
  CMsgGCCStrike15_v2_Party_SearchResults: CMsgGCCStrike15_v2_Party_SearchResults;
  CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment: CMsgGCCStrike15_v2_PlayerOverwatchCaseAssignment;
  CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus: CMsgGCCStrike15_v2_PlayerOverwatchCaseStatus;
  CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate: CMsgGCCStrike15_v2_PlayerOverwatchCaseUpdate;
  CMsgGCCStrike15_v2_PlayersProfile: CMsgGCCStrike15_v2_PlayersProfile;
  CMsgGCCStrike15_v2_Predictions: CMsgGCCStrike15_v2_Predictions;
  CMsgGCCStrike15_v2_PremierSeasonSummary: CMsgGCCStrike15_v2_PremierSeasonSummary;
  CMsgGCCStrike15_v2_Server2GCClientValidate: CMsgGCCStrike15_v2_Server2GCClientValidate;
  CMsgGCCStrike15_v2_ServerNotificationForUserPenalty: CMsgGCCStrike15_v2_ServerNotificationForUserPenalty;
  CMsgGCCStrike15_v2_ServerVarValueNotificationInfo: CMsgGCCStrike15_v2_ServerVarValueNotificationInfo;
  CMsgGCCStrike15_v2_SetEventFavorite: CMsgGCCStrike15_v2_SetEventFavorite;
  CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName: CMsgGCCStrike15_v2_SetPlayerLeaderboardSafeName;
  CMsgGCCStrike15_v2_WatchInfoUsers: CMsgGCCStrike15_v2_WatchInfoUsers;
  CMsgGCDev_SchemaReservationRequest: CMsgGCDev_SchemaReservationRequest;
  CMsgGCError: CMsgGCError;
  CMsgGCGiftedItems: CMsgGCGiftedItems;
  CMsgGCHAccountPhoneNumberChange: CMsgGCHAccountPhoneNumberChange;
  CMsgGCHInviteUserToLobby: CMsgGCHInviteUserToLobby;
  CMsgGCHRecurringSubscriptionStatusChange: CMsgGCHRecurringSubscriptionStatusChange;
  CMsgGCHVacVerificationChange: CMsgGCHVacVerificationChange;
  CMsgGCIncrementKillCountResponse: CMsgGCIncrementKillCountResponse;
  CMsgGCItemCustomizationNotification: CMsgGCItemCustomizationNotification;
  CMsgGCItemPreviewItemBoughtNotification: CMsgGCItemPreviewItemBoughtNotification;
  CMsgGCMultiplexMessage: CMsgGCMultiplexMessage;
  CMsgGCMultiplexMessage_Response: CMsgGCMultiplexMessage_Response;
  CMsgGCNameItemNotification: CMsgGCNameItemNotification;
  CMsgGCReportAbuse: CMsgGCReportAbuse;
  CMsgGCReportAbuseResponse: CMsgGCReportAbuseResponse;
  CMsgGCRequestAnnouncementsResponse: CMsgGCRequestAnnouncementsResponse;
  CMsgGCRequestSessionIP: CMsgGCRequestSessionIP;
  CMsgGCRequestSessionIPResponse: CMsgGCRequestSessionIPResponse;
  CMsgGCServerVersionUpdated: CMsgGCServerVersionUpdated;
  CMsgGCShowItemsPickedUp: CMsgGCShowItemsPickedUp;
  CMsgGCStorePurchaseCancel: CMsgGCStorePurchaseCancel;
  CMsgGCStorePurchaseCancelResponse: CMsgGCStorePurchaseCancelResponse;
  CMsgGCStorePurchaseFinalize: CMsgGCStorePurchaseFinalize;
  CMsgGCStorePurchaseFinalizeResponse: CMsgGCStorePurchaseFinalizeResponse;
  CMsgGCStorePurchaseInit: CMsgGCStorePurchaseInit;
  CMsgGCStorePurchaseInitResponse: CMsgGCStorePurchaseInitResponse;
  CMsgGCToClientSteamDatagramTicket: CMsgGCToClientSteamDatagramTicket;
  CMsgGCToGCBannedWordListBroadcast: CMsgGCToGCBannedWordListBroadcast;
  CMsgGCToGCBannedWordListUpdated: CMsgGCToGCBannedWordListUpdated;
  CMsgGCToGCBroadcastConsoleCommand: CMsgGCToGCBroadcastConsoleCommand;
  CMsgGCToGCDirtyMultipleSDOCache: CMsgGCToGCDirtyMultipleSDOCache;
  CMsgGCToGCDirtySDOCache: CMsgGCToGCDirtySDOCache;
  CMsgGCToGCIsTrustedServer: CMsgGCToGCIsTrustedServer;
  CMsgGCToGCIsTrustedServerResponse: CMsgGCToGCIsTrustedServerResponse;
  CMsgGCToGCRequestPassportItemGrant: CMsgGCToGCRequestPassportItemGrant;
  CMsgGCToGCUpdateSQLKeyValue: CMsgGCToGCUpdateSQLKeyValue;
  CMsgGCUpdateSessionIP: CMsgGCUpdateSessionIP;
  CMsgGCUserTrackTimePlayedConsecutively: CMsgGCUserTrackTimePlayedConsecutively;
  CMsgICECandidate: CMsgICECandidate;
  CMsgICERendezvous: CMsgICERendezvous;
  CMsgIncrementKillCountAttribute: CMsgIncrementKillCountAttribute;
  CMsgInvitationCreated: CMsgInvitationCreated;
  CMsgInviteToParty: CMsgInviteToParty;
  CMsgIPCAddress: CMsgIPCAddress;
  CMsgItemAcknowledged: CMsgItemAcknowledged;
  CMsgItemAcknowledged__DEPRECATED: CMsgItemAcknowledged__DEPRECATED;
  CMsgKickFromParty: CMsgKickFromParty;
  CMsgLANServerAvailable: CMsgLANServerAvailable;
  CMsgLegacySource1ClientWelcome: CMsgLegacySource1ClientWelcome;
  CMsgModifyItemAttribute: CMsgModifyItemAttribute;
  CMsgOpenCrate: CMsgOpenCrate;
  CMsgPartyInviteResponse: CMsgPartyInviteResponse;
  CMsgPlaceDecalEvent: CMsgPlaceDecalEvent;
  CMsgPlayerBulletHit: CMsgPlayerBulletHit;
  CMsgPlayerInfo: CMsgPlayerInfo;
  CMsgProtoBufHeader: CMsgProtoBufHeader;
  CMsgQAngle: CMsgQAngle;
  CMsgQuaternion: CMsgQuaternion;
  CMsgRecurringMissionSchema: CMsgRecurringMissionSchema;
  CMsgReplayUploadedToYouTube: CMsgReplayUploadedToYouTube;
  CMsgReplicateConVars: CMsgReplicateConVars;
  CMsgRGBA: CMsgRGBA;
  CMsgSerializedSOCache: CMsgSerializedSOCache;
  CMsgServerHello: CMsgServerHello;
  CMsgServerNetworkStats: CMsgServerNetworkStats;
  CMsgServerPeer: CMsgServerPeer;
  CMsgServerUserCmd: CMsgServerUserCmd;
  CMsgSetItemPositions: CMsgSetItemPositions;
  CMsgSOCacheHaveVersion: CMsgSOCacheHaveVersion;
  CMsgSOCacheSubscribed: CMsgSOCacheSubscribed;
  CMsgSOCacheSubscriptionCheck: CMsgSOCacheSubscriptionCheck;
  CMsgSOCacheSubscriptionRefresh: CMsgSOCacheSubscriptionRefresh;
  CMsgSOCacheUnsubscribed: CMsgSOCacheUnsubscribed;
  CMsgSOCacheVersion: CMsgSOCacheVersion;
  CMsgSOIDOwner: CMsgSOIDOwner;
  CMsgSOMultipleObjects: CMsgSOMultipleObjects;
  CMsgSortItems: CMsgSortItems;
  CMsgSOSingleObject: CMsgSOSingleObject;
  CMsgSosSetLibraryStackFields: CMsgSosSetLibraryStackFields;
  CMsgSosSetSoundEventParams: CMsgSosSetSoundEventParams;
  CMsgSosStartSoundEvent: CMsgSosStartSoundEvent;
  CMsgSosStopSoundEvent: CMsgSosStopSoundEvent;
  CMsgSosStopSoundEventHash: CMsgSosStopSoundEventHash;
  CMsgSource1LegacyGameEvent: CMsgSource1LegacyGameEvent;
  CMsgSource1LegacyGameEventList: CMsgSource1LegacyGameEventList;
  CMsgSource1LegacyListenEvents: CMsgSource1LegacyListenEvents;
  CMsgSource2NetworkFlowQuality: CMsgSource2NetworkFlowQuality;
  CMsgSource2PerfIntervalSample: CMsgSource2PerfIntervalSample;
  CMsgSource2PlayStatsPackedRecordList: CMsgSource2PlayStatsPackedRecordList;
  CMsgSource2SystemSpecs: CMsgSource2SystemSpecs;
  CMsgSource2VProfLiteReport: CMsgSource2VProfLiteReport;
  CMsgSource2VProfLiteReportItem: CMsgSource2VProfLiteReportItem;
  CMsgSteamDatagramCachedCredentialsForApp: CMsgSteamDatagramCachedCredentialsForApp;
  CMsgSteamDatagramCertificate: CMsgSteamDatagramCertificate;
  CMsgSteamDatagramCertificateRequest: CMsgSteamDatagramCertificateRequest;
  CMsgSteamDatagramCertificateSigned: CMsgSteamDatagramCertificateSigned;
  CMsgSteamDatagramClientPingSampleReply: CMsgSteamDatagramClientPingSampleReply;
  CMsgSteamDatagramClientPingSampleRequest: CMsgSteamDatagramClientPingSampleRequest;
  CMsgSteamDatagramClientSwitchedPrimary: CMsgSteamDatagramClientSwitchedPrimary;
  CMsgSteamDatagramConnectionClosed: CMsgSteamDatagramConnectionClosed;
  CMsgSteamDatagramConnectionQuality: CMsgSteamDatagramConnectionQuality;
  CMsgSteamDatagramConnectionStatsClientToRouter: CMsgSteamDatagramConnectionStatsClientToRouter;
  CMsgSteamDatagramConnectionStatsP2PClientToRouter: CMsgSteamDatagramConnectionStatsP2PClientToRouter;
  CMsgSteamDatagramConnectionStatsP2PRouterToClient: CMsgSteamDatagramConnectionStatsP2PRouterToClient;
  CMsgSteamDatagramConnectionStatsRouterToClient: CMsgSteamDatagramConnectionStatsRouterToClient;
  CMsgSteamDatagramConnectionStatsRouterToServer: CMsgSteamDatagramConnectionStatsRouterToServer;
  CMsgSteamDatagramConnectionStatsServerToRouter: CMsgSteamDatagramConnectionStatsServerToRouter;
  CMsgSteamDatagramConnectOK: CMsgSteamDatagramConnectOK;
  CMsgSteamDatagramConnectRequest: CMsgSteamDatagramConnectRequest;
  CMsgSteamDatagramDiagnostic: CMsgSteamDatagramDiagnostic;
  CMsgSteamDatagramGameCoordinatorServerLogin: CMsgSteamDatagramGameCoordinatorServerLogin;
  CMsgSteamDatagramGameserverPingReplyData: CMsgSteamDatagramGameserverPingReplyData;
  CMsgSteamDatagramGameserverPingRequestBody: CMsgSteamDatagramGameserverPingRequestBody;
  CMsgSteamDatagramGameserverPingRequestEnvelope: CMsgSteamDatagramGameserverPingRequestEnvelope;
  CMsgSteamDatagramGameserverSessionEstablished: CMsgSteamDatagramGameserverSessionEstablished;
  CMsgSteamDatagramGameserverSessionRequest: CMsgSteamDatagramGameserverSessionRequest;
  CMsgSteamDatagramHostedServerAddressPlaintext: CMsgSteamDatagramHostedServerAddressPlaintext;
  CMsgSteamDatagramLinkInstantaneousStats: CMsgSteamDatagramLinkInstantaneousStats;
  CMsgSteamDatagramLinkLifetimeStats: CMsgSteamDatagramLinkLifetimeStats;
  CMsgSteamDatagramNoConnection: CMsgSteamDatagramNoConnection;
  CMsgSteamDatagramNoSessionRelayToClient: CMsgSteamDatagramNoSessionRelayToClient;
  CMsgSteamDatagramNoSessionRelayToPeer: CMsgSteamDatagramNoSessionRelayToPeer;
  CMsgSteamDatagramP2PBadRouteRouterToClient: CMsgSteamDatagramP2PBadRouteRouterToClient;
  CMsgSteamDatagramP2PRoutes: CMsgSteamDatagramP2PRoutes;
  CMsgSteamDatagramP2PRoutingSummary: CMsgSteamDatagramP2PRoutingSummary;
  CMsgSteamDatagramP2PSessionEstablished: CMsgSteamDatagramP2PSessionEstablished;
  CMsgSteamDatagramP2PSessionRequest: CMsgSteamDatagramP2PSessionRequest;
  CMsgSteamDatagramP2PSessionRequestBody: CMsgSteamDatagramP2PSessionRequestBody;
  CMsgSteamDatagramRelayAuthTicket: CMsgSteamDatagramRelayAuthTicket;
  CMsgSteamDatagramRouterPingReply: CMsgSteamDatagramRouterPingReply;
  CMsgSteamDatagramSessionCryptInfo: CMsgSteamDatagramSessionCryptInfo;
  CMsgSteamDatagramSessionCryptInfoSigned: CMsgSteamDatagramSessionCryptInfoSigned;
  CMsgSteamDatagramSetSecondaryAddressRequest: CMsgSteamDatagramSetSecondaryAddressRequest;
  CMsgSteamDatagramSetSecondaryAddressResult: CMsgSteamDatagramSetSecondaryAddressResult;
  CMsgSteamDatagramSignedGameCoordinatorServerLogin: CMsgSteamDatagramSignedGameCoordinatorServerLogin;
  CMsgSteamDatagramSignedMessageGeneric: CMsgSteamDatagramSignedMessageGeneric;
  CMsgSteamDatagramSignedRelayAuthTicket: CMsgSteamDatagramSignedRelayAuthTicket;
  CMsgSteamNetworkingICESessionSummary: CMsgSteamNetworkingICESessionSummary;
  CMsgSteamNetworkingIdentityLegacyBinary: CMsgSteamNetworkingIdentityLegacyBinary;
  CMsgSteamNetworkingIPAddress: CMsgSteamNetworkingIPAddress;
  CMsgSteamNetworkingP2PRendezvous: CMsgSteamNetworkingP2PRendezvous;
  CMsgSteamNetworkingP2PSDRRoutingSummary: CMsgSteamNetworkingP2PSDRRoutingSummary;
  CMsgSteamSockets_UDP_ChallengeReply: CMsgSteamSockets_UDP_ChallengeReply;
  CMsgSteamSockets_UDP_ChallengeRequest: CMsgSteamSockets_UDP_ChallengeRequest;
  CMsgSteamSockets_UDP_ConnectionClosed: CMsgSteamSockets_UDP_ConnectionClosed;
  CMsgSteamSockets_UDP_ConnectOK: CMsgSteamSockets_UDP_ConnectOK;
  CMsgSteamSockets_UDP_ConnectRequest: CMsgSteamSockets_UDP_ConnectRequest;
  CMsgSteamSockets_UDP_NoConnection: CMsgSteamSockets_UDP_NoConnection;
  CMsgSteamSockets_UDP_Stats: CMsgSteamSockets_UDP_Stats;
  CMsgStoreGetUserData: CMsgStoreGetUserData;
  CMsgStoreGetUserDataResponse: CMsgStoreGetUserDataResponse;
  CMsgSystemBroadcast: CMsgSystemBroadcast;
  CMsgTEArmorRicochet: CMsgTEArmorRicochet;
  CMsgTEBaseBeam: CMsgTEBaseBeam;
  CMsgTEBeamEntPoint: CMsgTEBeamEntPoint;
  CMsgTEBeamEnts: CMsgTEBeamEnts;
  CMsgTEBeamPoints: CMsgTEBeamPoints;
  CMsgTEBeamRing: CMsgTEBeamRing;
  CMsgTEBloodStream: CMsgTEBloodStream;
  CMsgTEBubbles: CMsgTEBubbles;
  CMsgTEBubbleTrail: CMsgTEBubbleTrail;
  CMsgTEDecal: CMsgTEDecal;
  CMsgTEDust: CMsgTEDust;
  CMsgTEEffectDispatch: CMsgTEEffectDispatch;
  CMsgTEEnergySplash: CMsgTEEnergySplash;
  CMsgTEExplosion: CMsgTEExplosion;
  CMsgTEFireBullets: CMsgTEFireBullets;
  CMsgTEFizz: CMsgTEFizz;
  CMsgTEGlowSprite: CMsgTEGlowSprite;
  CMsgTEImpact: CMsgTEImpact;
  CMsgTELargeFunnel: CMsgTELargeFunnel;
  CMsgTEMuzzleFlash: CMsgTEMuzzleFlash;
  CMsgTEPhysicsProp: CMsgTEPhysicsProp;
  CMsgTEPlayerAnimEvent: CMsgTEPlayerAnimEvent;
  CMsgTERadioIcon: CMsgTERadioIcon;
  CMsgTEShatterSurface: CMsgTEShatterSurface;
  CMsgTESmoke: CMsgTESmoke;
  CMsgTESparks: CMsgTESparks;
  CMsgTEWorldDecal: CMsgTEWorldDecal;
  CMsgTOSTreatment: CMsgTOSTreatment;
  CMsgTransform: CMsgTransform;
  CMsgUpdateItemSchema: CMsgUpdateItemSchema;
  CMsgUseItem: CMsgUseItem;
  CMsgVDebugGameSessionIDEvent: CMsgVDebugGameSessionIDEvent;
  CMsgVector: CMsgVector;
  CMsgVector2D: CMsgVector2D;
  CMsgVoiceAudio: CMsgVoiceAudio;
  CNETMsg_DebugOverlay: CNETMsg_DebugOverlay;
  CNETMsg_SetConVar: CNETMsg_SetConVar;
  CNETMsg_SignonState: CNETMsg_SignonState;
  CNETMsg_SpawnGroup_Load: CNETMsg_SpawnGroup_Load;
  CNETMsg_SpawnGroup_LoadCompleted: CNETMsg_SpawnGroup_LoadCompleted;
  CNETMsg_SpawnGroup_ManifestUpdate: CNETMsg_SpawnGroup_ManifestUpdate;
  CNETMsg_SpawnGroup_SetCreationTick: CNETMsg_SpawnGroup_SetCreationTick;
  CNETMsg_SpawnGroup_Unload: CNETMsg_SpawnGroup_Unload;
  CNETMsg_SplitScreenUser: CNETMsg_SplitScreenUser;
  CNETMsg_StringCmd: CNETMsg_StringCmd;
  CNETMsg_Tick: CNETMsg_Tick;
  COAuthToken_ImplicitGrantNoPrompt_Request: COAuthToken_ImplicitGrantNoPrompt_Request;
  COAuthToken_ImplicitGrantNoPrompt_Response: COAuthToken_ImplicitGrantNoPrompt_Response;
  CP2P_Ping: CP2P_Ping;
  CP2P_TextMessage: CP2P_TextMessage;
  CP2P_Voice: CP2P_Voice;
  CP2P_VRAvatarPosition: CP2P_VRAvatarPosition;
  CP2P_WatchSynchronization: CP2P_WatchSynchronization;
  CPlayer_AddFriend_Request: CPlayer_AddFriend_Request;
  CPlayer_AddFriend_Response: CPlayer_AddFriend_Response;
  CPlayer_CommunityPreferences: CPlayer_CommunityPreferences;
  CPlayer_GetCommunityPreferences_Response: CPlayer_GetCommunityPreferences_Response;
  CPlayer_GetFriendsGameplayInfo_Request: CPlayer_GetFriendsGameplayInfo_Request;
  CPlayer_GetFriendsGameplayInfo_Response: CPlayer_GetFriendsGameplayInfo_Response;
  CPlayer_GetGameBadgeLevels_Request: CPlayer_GetGameBadgeLevels_Request;
  CPlayer_GetGameBadgeLevels_Response: CPlayer_GetGameBadgeLevels_Response;
  CPlayer_GetLastPlayedTimes_Request: CPlayer_GetLastPlayedTimes_Request;
  CPlayer_GetLastPlayedTimes_Response: CPlayer_GetLastPlayedTimes_Response;
  CPlayer_GetMutualFriendsForIncomingInvites_Response: CPlayer_GetMutualFriendsForIncomingInvites_Response;
  CPlayer_GetNewSteamAnnouncementState_Request: CPlayer_GetNewSteamAnnouncementState_Request;
  CPlayer_GetNewSteamAnnouncementState_Response: CPlayer_GetNewSteamAnnouncementState_Response;
  CPlayer_GetNicknameList_Response: CPlayer_GetNicknameList_Response;
  CPlayer_GetPerFriendPreferences_Response: CPlayer_GetPerFriendPreferences_Response;
  CPlayer_IgnoreFriend_Request: CPlayer_IgnoreFriend_Request;
  CPlayer_IgnoreFriend_Response: CPlayer_IgnoreFriend_Response;
  CPlayer_IncomingInviteMutualFriendList: CPlayer_IncomingInviteMutualFriendList;
  CPlayer_RemoveFriend_Request: CPlayer_RemoveFriend_Request;
  CPlayer_RemoveFriend_Response: CPlayer_RemoveFriend_Response;
  CPlayer_SetCommunityPreferences_Request: CPlayer_SetCommunityPreferences_Request;
  CPlayer_SetPerFriendPreferences_Request: CPlayer_SetPerFriendPreferences_Request;
  CPlayer_UpdateSteamAnnouncementLastRead_Request: CPlayer_UpdateSteamAnnouncementLastRead_Request;
  CPredictionEvent_Diagnostic: CPredictionEvent_Diagnostic;
  CPredictionEvent_StringCommand: CPredictionEvent_StringCommand;
  CPredictionEvent_Teleport: CPredictionEvent_Teleport;
  CPreMatchInfoData: CPreMatchInfoData;
  CProductInfo_SetRichPresenceLocalization_Request: CProductInfo_SetRichPresenceLocalization_Request;
  CPublishedFile_GetDetails_Request: CPublishedFile_GetDetails_Request;
  CPublishedFile_GetDetails_Response: CPublishedFile_GetDetails_Response;
  CPublishedFile_GetUserFiles_Request: CPublishedFile_GetUserFiles_Request;
  CPublishedFile_GetUserFiles_Response: CPublishedFile_GetUserFiles_Response;
  CPublishedFile_Publish_Request: CPublishedFile_Publish_Request;
  CPublishedFile_Publish_Response: CPublishedFile_Publish_Response;
  CPublishedFile_RefreshVotingQueue_Request: CPublishedFile_RefreshVotingQueue_Request;
  CPublishedFile_Subscribe_Request: CPublishedFile_Subscribe_Request;
  CPublishedFile_Unsubscribe_Request: CPublishedFile_Unsubscribe_Request;
  CPublishedFile_Update_Request: CPublishedFile_Update_Request;
  CQuest_PublisherAddCommunityItemsToPlayer_Request: CQuest_PublisherAddCommunityItemsToPlayer_Request;
  CQuest_PublisherAddCommunityItemsToPlayer_Response: CQuest_PublisherAddCommunityItemsToPlayer_Response;
  CSGOInputHistoryEntryPB: CSGOInputHistoryEntryPB;
  CSGOInterpolationInfoPB: CSGOInterpolationInfoPB;
  CSGOInterpolationInfoPB_CL: CSGOInterpolationInfoPB_CL;
  CSGOUserCmdPB: CSGOUserCmdPB;
  CSOAccountItemPersonalStore: CSOAccountItemPersonalStore;
  CSOAccountKeychainRemoveToolCharges: CSOAccountKeychainRemoveToolCharges;
  CSOAccountRecurringMission: CSOAccountRecurringMission;
  CSOAccountRecurringSubscription: CSOAccountRecurringSubscription;
  CSOAccountSeasonalOperation: CSOAccountSeasonalOperation;
  CSOAccountXpShop: CSOAccountXpShop;
  CSOAccountXpShopBids: CSOAccountXpShopBids;
  CSOEconClaimCode: CSOEconClaimCode;
  CSOEconCoupon: CSOEconCoupon;
  CSOEconEquipSlot: CSOEconEquipSlot;
  CSOEconGameAccountClient: CSOEconGameAccountClient;
  CSOEconItem: CSOEconItem;
  CSOEconItemAttribute: CSOEconItemAttribute;
  CSOEconItemDropRateBonus: CSOEconItemDropRateBonus;
  CSOEconItemEquipped: CSOEconItemEquipped;
  CSOEconItemEventTicket: CSOEconItemEventTicket;
  CSOEconItemLeagueViewPass: CSOEconItemLeagueViewPass;
  CSOEconRentalHistory: CSOEconRentalHistory;
  CSOGameAccountSteamChina: CSOGameAccountSteamChina;
  CSOItemCriteria: CSOItemCriteria;
  CSOItemCriteriaCondition: CSOItemCriteriaCondition;
  CSOItemRecipe: CSOItemRecipe;
  CSOLobbyInvite: CSOLobbyInvite;
  CSOPartyInvite: CSOPartyInvite;
  CSOPersonaDataPublic: CSOPersonaDataPublic;
  CSOQuestProgress: CSOQuestProgress;
  CSource2Metrics_MatchPerfSummary_Notification: CSource2Metrics_MatchPerfSummary_Notification;
  CSource2Metrics_RecordPlayStats_Notification: CSource2Metrics_RecordPlayStats_Notification;
  CSOVolatileItemClaimedRewards: CSOVolatileItemClaimedRewards;
  CSOVolatileItemOffer: CSOVolatileItemOffer;
  CSteam_Voice_Encoding: CSteam_Voice_Encoding;
  CSubtickMoveStep: CSubtickMoveStep;
  CSVCMsg_Broadcast_Command: CSVCMsg_Broadcast_Command;
  CSVCMsg_BSPDecal: CSVCMsg_BSPDecal;
  CSVCMsg_ClassInfo: CSVCMsg_ClassInfo;
  CSVCMsg_ClearAllStringTables: CSVCMsg_ClearAllStringTables;
  CSVCMsg_CmdKeyValues: CSVCMsg_CmdKeyValues;
  CSVCMsg_CreateStringTable: CSVCMsg_CreateStringTable;
  CSVCMsg_CrosshairAngle: CSVCMsg_CrosshairAngle;
  CSVCMsg_FixAngle: CSVCMsg_FixAngle;
  CSVCMsg_FlattenedSerializer: CSVCMsg_FlattenedSerializer;
  CSVCMsg_FullFrameSplit: CSVCMsg_FullFrameSplit;
  CSVCMsg_GameEvent: CSVCMsg_GameEvent;
  CSVCMsg_GameEventList: CSVCMsg_GameEventList;
  CSVCMsg_GameSessionConfiguration: CSVCMsg_GameSessionConfiguration;
  CSVCMsg_GetCvarValue: CSVCMsg_GetCvarValue;
  CSVCMsg_HltvFixupOperatorStatus: CSVCMsg_HltvFixupOperatorStatus;
  CSVCMsg_HltvReplay: CSVCMsg_HltvReplay;
  CSVCMsg_HLTVStatus: CSVCMsg_HLTVStatus;
  CSVCMsg_Menu: CSVCMsg_Menu;
  CSVCMsg_NextMsgPredicted: CSVCMsg_NextMsgPredicted;
  CSVCMsg_PacketEntities: CSVCMsg_PacketEntities;
  CSVCMsg_PacketReliable: CSVCMsg_PacketReliable;
  CSVCMsg_PeerList: CSVCMsg_PeerList;
  CSVCMsg_Prefetch: CSVCMsg_Prefetch;
  CSVCMsg_Print: CSVCMsg_Print;
  CSVCMsg_RconServerDetails: CSVCMsg_RconServerDetails;
  CSVCMsg_SendTable: CSVCMsg_SendTable;
  CSVCMsg_ServerInfo: CSVCMsg_ServerInfo;
  CSVCMsg_ServerSteamID: CSVCMsg_ServerSteamID;
  CSVCMsg_SetPause: CSVCMsg_SetPause;
  CSVCMsg_SetView: CSVCMsg_SetView;
  CSVCMsg_Sounds: CSVCMsg_Sounds;
  CSVCMsg_SplitScreen: CSVCMsg_SplitScreen;
  CSVCMsg_StopSound: CSVCMsg_StopSound;
  CSVCMsg_TempEntities: CSVCMsg_TempEntities;
  CSVCMsg_UpdateStringTable: CSVCMsg_UpdateStringTable;
  CSVCMsg_UserCommands: CSVCMsg_UserCommands;
  CSVCMsg_UserMessage: CSVCMsg_UserMessage;
  CSVCMsg_VoiceData: CSVCMsg_VoiceData;
  CSVCMsg_VoiceInit: CSVCMsg_VoiceInit;
  CSVCMsgList_GameEvents: CSVCMsgList_GameEvents;
  CUIFontFilePackagePB: CUIFontFilePackagePB;
  CUIFontFilePB: CUIFontFilePB;
  CUserCmdBasePB: CUserCmdBasePB;
  CUserMessage_Diagnostic_Response: CUserMessage_Diagnostic_Response;
  CUserMessage_DllStatus: CUserMessage_DllStatus;
  CUserMessage_ExtraUserData: CUserMessage_ExtraUserData;
  CUserMessage_Inventory_Response: CUserMessage_Inventory_Response;
  CUserMessage_NotifyResponseFound: CUserMessage_NotifyResponseFound;
  CUserMessage_PlayResponseConditional: CUserMessage_PlayResponseConditional;
  CUserMessage_UtilMsg_Response: CUserMessage_UtilMsg_Response;
  CUserMessageAchievementEvent: CUserMessageAchievementEvent;
  CUserMessageAmmoDenied: CUserMessageAmmoDenied;
  CUserMessageAnimStateGraphState: CUserMessageAnimStateGraphState;
  CUserMessageAudioParameter: CUserMessageAudioParameter;
  CUserMessageCameraTransition: CUserMessageCameraTransition;
  CUserMessageCloseCaption: CUserMessageCloseCaption;
  CUserMessageCloseCaptionDirect: CUserMessageCloseCaptionDirect;
  CUserMessageCloseCaptionPlaceholder: CUserMessageCloseCaptionPlaceholder;
  CUserMessageColoredText: CUserMessageColoredText;
  CUserMessageCreditsMsg: CUserMessageCreditsMsg;
  CUserMessageCurrentTimescale: CUserMessageCurrentTimescale;
  CUserMessageDesiredTimescale: CUserMessageDesiredTimescale;
  CUserMessageFade: CUserMessageFade;
  CUserMessageHapticsManagerEffect: CUserMessageHapticsManagerEffect;
  CUserMessageHapticsManagerPulse: CUserMessageHapticsManagerPulse;
  CUserMessageHudMsg: CUserMessageHudMsg;
  CUserMessageHudText: CUserMessageHudText;
  CUserMessageItemPickup: CUserMessageItemPickup;
  CUserMessageLagCompensationError: CUserMessageLagCompensationError;
  CUserMessageRequestDiagnostic: CUserMessageRequestDiagnostic;
  CUserMessageRequestDllStatus: CUserMessageRequestDllStatus;
  CUserMessageRequestInventory: CUserMessageRequestInventory;
  CUserMessageRequestUtilAction: CUserMessageRequestUtilAction;
  CUserMessageRumble: CUserMessageRumble;
  CUserMessageSayText: CUserMessageSayText;
  CUserMessageSayText2: CUserMessageSayText2;
  CUserMessageSayTextChannel: CUserMessageSayTextChannel;
  CUserMessageScreenTilt: CUserMessageScreenTilt;
  CUserMessageSendAudio: CUserMessageSendAudio;
  CUserMessageServerFrameTime: CUserMessageServerFrameTime;
  CUserMessageShake: CUserMessageShake;
  CUserMessageShakeDir: CUserMessageShakeDir;
  CUserMessageShowMenu: CUserMessageShowMenu;
  CUserMessageTextMsg: CUserMessageTextMsg;
  CUserMessageUpdateCssClasses: CUserMessageUpdateCssClasses;
  CUserMessageVoiceMask: CUserMessageVoiceMask;
  CUserMessageWaterShake: CUserMessageWaterShake;
  CUserMsg_CustomGameEvent: CUserMsg_CustomGameEvent;
  CUserMsg_HudError: CUserMsg_HudError;
  CUserMsg_ParticleManager: CUserMsg_ParticleManager;
  CVDiagnostic: CVDiagnostic;
  CWorkshop_AddSpecialPayment_Request: CWorkshop_AddSpecialPayment_Request;
  CWorkshop_GetContributors_Request: CWorkshop_GetContributors_Request;
  CWorkshop_GetContributors_Response: CWorkshop_GetContributors_Response;
  CWorkshop_PopulateItemDescriptions_Request: CWorkshop_PopulateItemDescriptions_Request;
  CWorkshop_SetItemPaymentRules_Request: CWorkshop_SetItemPaymentRules_Request;
  DataCenterPing: DataCenterPing;
  DeepPlayerMatchEvent: DeepPlayerMatchEvent;
  DeepPlayerStatsEntry: DeepPlayerStatsEntry;
  DetailedSearchStatistic: DetailedSearchStatistic;
  GameServerPing: GameServerPing;
  GlobalStatistics: GlobalStatistics;
  IpAddressMask: IpAddressMask;
  MatchEndItemUpdates: MatchEndItemUpdates;
  MLDemoHeader: MLDemoHeader;
  MLDict: MLDict;
  MLEvent: MLEvent;
  MLGameState: MLGameState;
  MLMatchState: MLMatchState;
  MLPlayerState: MLPlayerState;
  MLRoundState: MLRoundState;
  MLTick: MLTick;
  MLWeaponState: MLWeaponState;
  NetMessageConnectionClosed: NetMessageConnectionClosed;
  NetMessageConnectionCrashed: NetMessageConnectionCrashed;
  NetMessageSplitscreenUserChanged: NetMessageSplitscreenUserChanged;
  OperationalStatisticDescription: OperationalStatisticDescription;
  OperationalStatisticElement: OperationalStatisticElement;
  OperationalStatisticsPacket: OperationalStatisticsPacket;
  OperationalVarValue: OperationalVarValue;
  PerFriendPreferences: PerFriendPreferences;
  PlayerCommendationInfo: PlayerCommendationInfo;
  PlayerDecalDigitalSignature: PlayerDecalDigitalSignature;
  PlayerMedalsInfo: PlayerMedalsInfo;
  PlayerQuestData: PlayerQuestData;
  PlayerRankingInfo: PlayerRankingInfo;
  ProtoFlattenedSerializer_t: ProtoFlattenedSerializer_t;
  ProtoFlattenedSerializerField_t: ProtoFlattenedSerializerField_t;
  PublishedFileDetails: PublishedFileDetails;
  ScoreLeaderboardData: ScoreLeaderboardData;
  ServerHltvInfo: ServerHltvInfo;
  TournamentEvent: TournamentEvent;
  TournamentMatchSetup: TournamentMatchSetup;
  TournamentPlayer: TournamentPlayer;
  TournamentTeam: TournamentTeam;
  VacNetShot: VacNetShot;
  WatchableMatchInfo: WatchableMatchInfo;
  XpProgressData: XpProgressData;
}
