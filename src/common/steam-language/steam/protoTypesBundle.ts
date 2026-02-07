/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CClientMetrics_ClientBootstrap_RequestInfo,
  CClientMetrics_ClientBootstrap_Summary,
  CClientMetrics_ContentDownloadResponse_Counts,
  CClientMetrics_ContentDownloadResponse_HostCounts,
  CClientMetrics_ContentDownloadResponse_Hosts,
} from "../protos-definitions/steam/clientmetrics";
import type {
  ContentDeltaChunks,
  ContentManifestMetadata,
  ContentManifestPayload,
  ContentManifestSignature,
} from "../protos-definitions/steam/content_manifest";
import type { CStorePageFilter } from "../protos-definitions/steam/contenthubs";
import type { EncryptedAppTicket } from "../protos-definitions/steam/encrypted_app_ticket";
import type {
  CCookie,
  CHistoryEntry,
  CHTMLHeader,
  CHTMLPageSecurityInfo,
  CMsgAckPIDShuttingDown,
  CMsgAckScreenDPI,
  CMsgAckSharedPaintBuffers,
  CMsgAddHeader,
  CMsgAuthedSteamDomains,
  CMsgBlockedRequest,
  CMsgBringWindowToFront,
  CMsgBrowserCreate,
  CMsgBrowserCreateResponse,
  CMsgBrowserErrorStrings,
  CMsgBrowserFocusChanged,
  CMsgBrowserPosition,
  CMsgBrowserReady,
  CMsgBrowserRemove,
  CMsgBrowserResized,
  CMsgBrowserSetMinSize,
  CMsgBrowserSetName,
  CMsgBrowserSize,
  CMsgBrowserViewPostMessageToParentRequest,
  CMsgBuildID,
  CMsgCanGoBackAndForward,
  CMsgClearAllBrowsingData,
  CMsgClearAllCookies,
  CMsgClearHistory,
  CMsgClose,
  CMsgCloseDevTools,
  CMsgComboNeedsPaint,
  CMsgCopy,
  CMsgCtrlTabPressed,
  CMsgDisableBackgroundThrottling,
  CMsgDisableF5,
  CMsgDraggableRegionsChanged,
  CMsgExecuteJavaScript,
  CMsgExitFullScreen,
  CMsgFavIconURLChanged,
  CMsgFileLoadDialog,
  CMsgFileLoadDialogResponse,
  CMsgFind,
  CMsgFinishedRequest,
  CMsgFocusedNodeText,
  CMsgFocusedNodeTextResponse,
  CMsgForcePopupsToDirectHWND,
  CMsgFullRepaint,
  CMsgGetCookiesForURL,
  CMsgGetCookiesForURLResponse,
  CMsgGetZoom,
  CMsgGetZoomResponse,
  CMsgGoBack,
  CMsgGoForward,
  CMsgHandleContextMenuCommand,
  CMsgHidePopup,
  CMsgHideToolTip,
  CMsgHideWindow,
  CMsgHistoryChanged,
  CMsgHorizontalScrollBarSize,
  CMsgHorizontalScrollBarSizeResponse,
  CMsgImeCancelComposition,
  CMsgImeCommitText,
  CMsgImeCompositionRangeChanged,
  CMsgImeSetComposition,
  CMsgInspectElement,
  CMsgJSAlert,
  CMsgJSConfirm,
  CMsgJSDialogResponse,
  CMsgJSExecuteCallback,
  CMsgJSExecutePromise,
  CMsgJSMethodCall,
  CMsgJSRaiseException,
  CMsgJSRegisterMethod,
  CMsgJSReleaseCallback,
  CMsgJSValue,
  CMsgKeyChar,
  CMsgKeyDown,
  CMsgKeyUp,
  CMsgLinkAtPosition,
  CMsgLinkAtPositionResponse,
  CMsgLoadError,
  CMsgLoadedRequest,
  CMsgLoadingResource,
  CMsgLoadLocalization,
  CMsgMaximizeRestoreWindow,
  CMsgMinimizeWindow,
  CMsgMouseDblClick,
  CMsgMouseDown,
  CMsgMouseLeave,
  CMsgMouseMove,
  CMsgMouseUp,
  CMsgMouseWheel,
  CMsgNeedsPaint,
  CMsgNeedsSharedTexturePaint,
  CMsgNodeHasFocus,
  CMsgNotifyUserActivation,
  CMsgOpenDevTools,
  CMsgOpenNewTab,
  CMsgOpenSteamURL,
  CMsgPageSecurity,
  CMsgPaste,
  CMsgPauseRepaint,
  CMsgPopupCreated,
  CMsgPopupHTMLWindow,
  CMsgPopupHTMLWindowResponse,
  CMsgPostURL,
  CMsgProcessInfoNotification,
  CMsgReload,
  CMsgRenderProcessTerminated,
  CMsgRequestFullScreen,
  CMsgRequestProcessInfo,
  CMsgResizeGripChanged,
  CMsgSavePageToJPEG,
  CMsgSavePageToJPEGResponse,
  CMsgScalePageToValue,
  CMsgScalePageToValueResponse,
  CMsgScreenDPI,
  CMsgScreenInformationChanged,
  CMsgSearchResults,
  CMsgSetAccessibilitySettings,
  CMsgSetCookie,
  CMsgSetCursor,
  CMsgSetFocus,
  CMsgSetForceDeviceScaleFactors,
  CMsgSetForegroundWindow,
  CMsgSetHorizontalScroll,
  CMsgSetHTMLTitle,
  CMsgSetLocalFileRequestMapping,
  CMsgSetNetFakeLocalSystemState,
  CMsgSetPIDShuttingDown,
  CMsgSetProtocolBlockList,
  CMsgSetSharedPaintBuffers,
  CMsgSetSteamBetaName,
  CMsgSetSteamID,
  CMsgSetTargetFrameRate,
  CMsgSetTouchGesturesToCancel,
  CMsgSetUIMode,
  CMsgSetVerticalScroll,
  CMsgSetVRKeyboardVisibility,
  CMsgSetWindowPosition,
  CMsgSetWindowStackingOrder,
  CMsgSetWindowVisibility,
  CMsgSetZoomLevel,
  CMsgShowBrowserContextMenu,
  CMsgShowPopup,
  CMsgShowToolTip,
  CMsgShowWindow,
  CMsgSizePopup,
  CMsgStartDownload,
  CMsgStartRequest,
  CMsgStartRequestResponse,
  CMsgStatusText,
  CMsgSteamAuthCookiesSet,
  CMsgSteamAuthNeeded,
  CMsgStopFind,
  CMsgStopLoad,
  CMsgToggleFindInPageDialog,
  CMsgTouchGesture,
  CMsgUnlockH264,
  CMsgUpdateToolTip,
  CMsgURLChanged,
  CMsgVerticalScrollBarSize,
  CMsgVerticalScrollBarSizeResponse,
  CMsgViewSource,
  CMsgWasHidden,
  CMsgZoomToElementAtPosition,
  CMsgZoomToElementAtPositionResponse,
  CMsgZoomToFocusedElement,
} from "../protos-definitions/steam/htmlmessages";
import type { Offline_Ticket } from "../protos-definitions/steam/offline_ticket";
import type {
  CMsgSteamDatagramCachedCredentialsForApp,
  CMsgSteamDatagramGameCoordinatorServerLogin,
  CMsgSteamDatagramHostedServerAddressPlaintext,
  CMsgSteamDatagramRelayAuthTicket,
  CMsgSteamDatagramSignedGameCoordinatorServerLogin,
  CMsgSteamDatagramSignedRelayAuthTicket,
} from "../protos-definitions/steam/steamdatagram_messages_auth";
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
} from "../protos-definitions/steam/steamdatagram_messages_sdr";
import type {
  CAccountHardware_CompleteSteamControllerRegistration_Request,
  CAccountHardware_DeRegisterSteamController_Request,
  CAccountHardware_GetPersonalizationFile_Request,
  CAccountHardware_GetPersonalizationFile_Response,
  CAccountHardware_GetSavedHardwareList_Request,
  CAccountHardware_GetSavedHardwareList_Response,
  CAccountHardware_GetSteamDeckComponents_Request,
  CAccountHardware_GetSteamDeckComponents_Response,
  CAccountHardware_ManageSavedHardware_Request,
  CAccountHardware_QueryAccountsRegisteredToSerial_Accounts,
  CAccountHardware_QueryAccountsRegisteredToSerial_Request,
  CAccountHardware_QueryAccountsRegisteredToSerial_Response,
  CAccountHardware_RegisterSteamController_Request,
  CAccountHardware_RegisterValveIndexComponent_Request,
  CAccountHardware_SavedHardware_Details,
  CAccountHardware_SaveHardware_Request,
  CAccountHardware_SaveHardware_Response,
  CAccountHardware_SetPersonalizationFile_Request,
  CAccountHardware_SteamControllerGetConfig_ControllerConfig,
  CAccountHardware_SteamControllerGetConfig_Request,
  CAccountHardware_SteamControllerGetConfig_Response,
  CAccountHardware_SteamControllerSetConfig_ControllerConfig,
  CAccountHardware_SteamControllerSetConfig_Request,
  CAccountHardware_UpdateControllerUsageReport_Request,
  CAccountHardware_VRCompatibilityCheck_Request,
  CAccountHardware_VRCompatibilityCheck_Response,
} from "../protos-definitions/steam/steammessages_accounthardware.steamclient";
import type {
  CAppOverview,
  CAppOverview_Change,
  CAppOverview_PerClientData,
} from "../protos-definitions/steam/steammessages_appoverview";
import type {
  CAuthentication_AccessToken_GenerateForApp_Request,
  CAuthentication_AccessToken_GenerateForApp_Response,
  CAuthentication_AllowedConfirmation,
  CAuthentication_BeginAuthSessionViaCredentials_Request,
  CAuthentication_BeginAuthSessionViaCredentials_Response,
  CAuthentication_BeginAuthSessionViaQR_Request,
  CAuthentication_BeginAuthSessionViaQR_Response,
  CAuthentication_DeviceDetails,
  CAuthentication_GetAuthSessionInfo_Request,
  CAuthentication_GetAuthSessionInfo_Response,
  CAuthentication_GetAuthSessionRiskInfo_Request,
  CAuthentication_GetAuthSessionRiskInfo_Response,
  CAuthentication_GetAuthSessionsForAccount_Response,
  CAuthentication_GetPasswordRSAPublicKey_Request,
  CAuthentication_GetPasswordRSAPublicKey_Response,
  CAuthentication_NotifyRiskQuizResults_Notification,
  CAuthentication_PollAuthSessionStatus_Request,
  CAuthentication_PollAuthSessionStatus_Response,
  CAuthentication_RefreshToken_Enumerate_Request,
  CAuthentication_RefreshToken_Enumerate_Response,
  CAuthentication_RefreshToken_Revoke_Request,
  CAuthentication_Token_Revoke_Request,
  CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response,
  CAuthenticationSupport_GetTokenHistory_Request,
  CAuthenticationSupport_GetTokenHistory_Response,
  CAuthenticationSupport_MarkTokenCompromised_Request,
  CAuthenticationSupport_QueryRefreshTokenByID_Request,
  CAuthenticationSupport_QueryRefreshTokenByID_Response,
  CAuthenticationSupport_QueryRefreshTokensByAccount_Request,
  CAuthenticationSupport_QueryRefreshTokensByAccount_Response,
  CAuthenticationSupport_RevokeToken_Request,
  CCloudGaming_CreateNonce_Request,
  CCloudGaming_CreateNonce_Response,
  CCloudGaming_GetTimeRemaining_Request,
  CCloudGaming_GetTimeRemaining_Response,
  CCloudGaming_TimeRemaining,
  CSupportRefreshTokenAudit,
  CSupportRefreshTokenDescription,
} from "../protos-definitions/steam/steammessages_auth.steamclient";
import type {
  CBilling_Address,
  CCDDBAppDetailCommon,
  CClanEventData,
  CClanEventUserNewsTuple,
  CClanMatchEventByRange,
  CCommunity_ClanAnnouncementInfo,
  CCuratorPreferences,
  CLocalizationToken,
  CMsgAppRights,
  CMsgAuthTicket,
  CMsgGCRoutingProtoBufHeader,
  CMsgIPAddress,
  CMsgIPAddressBucket,
  CMsgKeyValuePair,
  CMsgKeyValueSet,
  CMsgKubeRPCPacket,
  CMsgMulti,
  CMsgProtoBufHeader,
  CMsgProtobufWrapped,
  CPackageReservationStatus,
  UserContentDescriptorPreferences,
  UserSystemInformation,
} from "../protos-definitions/steam/steammessages_base";
import type {
  CBroadcast_BeginBroadcastSession_Request,
  CBroadcast_BeginBroadcastSession_Response,
  CBroadcast_BroadcastChannelLive_Notification,
  CBroadcast_BroadcastStatus_Notification,
  CBroadcast_BroadcastUploadStarted_Notification,
  CBroadcast_BroadcastViewerState_Notification,
  CBroadcast_EndBroadcastSession_Request,
  CBroadcast_GetBroadcastChatInfo_Request,
  CBroadcast_GetBroadcastChatInfo_Response,
  CBroadcast_GetBroadcastChatUserNames_Request,
  CBroadcast_GetBroadcastChatUserNames_Response,
  CBroadcast_GetBroadcastStatus_Request,
  CBroadcast_GetBroadcastStatus_Response,
  CBroadcast_GetBroadcastThumbnail_Request,
  CBroadcast_GetBroadcastThumbnail_Response,
  CBroadcast_GetBroadcastUploadStats_Request,
  CBroadcast_GetBroadcastUploadStats_Response,
  CBroadcast_GetBroadcastViewerStats_Request,
  CBroadcast_GetBroadcastViewerStats_Response,
  CBroadcast_GetBuildClipStatus_Request,
  CBroadcast_GetClipDetails_Request,
  CBroadcast_GetClipDetails_Response,
  CBroadcast_GetRTMPInfo_Request,
  CBroadcast_GetRTMPInfo_Response,
  CBroadcast_HeartbeatBroadcast_Notification,
  CBroadcast_InviteToBroadcast_Request,
  CBroadcast_InviteToBroadcast_Response,
  CBroadcast_MuteBroadcastChatUser_Request,
  CBroadcast_NotifyBroadcastSessionHeartbeat_Notification,
  CBroadcast_NotifyBroadcastUploadStop_Notification,
  CBroadcast_PostChatMessage_Request,
  CBroadcast_PostChatMessage_Response,
  CBroadcast_RemoveUserChatText_Request,
  CBroadcast_SendBroadcastStateToServer_Request,
  CBroadcast_SendThumbnailToRelay_Notification,
  CBroadcast_SessionClosed_Notification,
  CBroadcast_SetClipDetails_Request,
  CBroadcast_SetRTMPInfo_Request,
  CBroadcast_StartBroadcastUpload_Request,
  CBroadcast_StartBroadcastUpload_Response,
  CBroadcast_StartBuildClip_Request,
  CBroadcast_StartBuildClip_Response,
  CBroadcast_StopBroadcastUpload_Notification,
  CBroadcast_StopWatchingBroadcast_Notification,
  CBroadcast_UpdateChatMessageFlair_Request,
  CBroadcast_UpdateChatMessageFlair_Response,
  CBroadcast_ViewerBroadcastInvite_Notification,
  CBroadcast_WaitingBroadcastViewer_Notification,
  CBroadcast_WatchBroadcast_Request,
  CBroadcast_WatchBroadcast_Response,
  CBroadcast_WebRTC_Candidate,
  CBroadcast_WebRTCAddHostCandidate_Request,
  CBroadcast_WebRTCAddViewerCandidate_Notification,
  CBroadcast_WebRTCAddViewerCandidate_Request,
  CBroadcast_WebRTCGetHostCandidates_Request,
  CBroadcast_WebRTCGetHostCandidates_Response,
  CBroadcast_WebRTCHaveTURNServer_Notification,
  CBroadcast_WebRTCLookupTURNServer_Request,
  CBroadcast_WebRTCLookupTURNServer_Response,
  CBroadcast_WebRTCNeedTURNServer_Notification,
  CBroadcast_WebRTCSetAnswer_Notification,
  CBroadcast_WebRTCSetAnswer_Request,
  CBroadcast_WebRTCStart_Notification,
  CBroadcast_WebRTCStartResult_Request,
  CBroadcast_WebRTCStopped_Request,
} from "../protos-definitions/steam/steammessages_broadcast.steamclient";
import type {
  CChatMentions,
  CChatPartyBeacon,
  CChatRole,
  CChatRoleActions,
  CChatRoom_AckChatMessage_Notification,
  CChatRoom_AddRoleToUser_Request,
  CChatRoom_ChatMessageModified_Notification,
  CChatRoom_ChatRoomGroupRoomsChange_Notification,
  CChatRoom_ChatRoomHeaderState_Notification,
  CChatRoom_CreateChatRoom_Request,
  CChatRoom_CreateChatRoom_Response,
  CChatRoom_CreateChatRoomGroup_Request,
  CChatRoom_CreateChatRoomGroup_Response,
  CChatRoom_CreateInviteLink_Request,
  CChatRoom_CreateInviteLink_Response,
  CChatRoom_CreateRole_Request,
  CChatRoom_CreateRole_Response,
  CChatRoom_DeleteChatMessages_Request,
  CChatRoom_DeleteChatRoom_Request,
  CChatRoom_DeleteInviteLink_Request,
  CChatRoom_DeleteRole_Request,
  CChatRoom_DeleteRoleFromUser_Request,
  CChatRoom_EndMiniGameForChatRoomGroup_Request,
  CChatRoom_GetBanList_Request,
  CChatRoom_GetBanList_Response,
  CChatRoom_GetChatRoomGroupState_Request,
  CChatRoom_GetChatRoomGroupState_Response,
  CChatRoom_GetChatRoomGroupSummary_Response,
  CChatRoom_GetInviteInfo_Request,
  CChatRoom_GetInviteInfo_Response,
  CChatRoom_GetInviteLinkInfo_Request,
  CChatRoom_GetInviteLinkInfo_Response,
  CChatRoom_GetInviteLinksForGroup_Request,
  CChatRoom_GetInviteLinksForGroup_Response,
  CChatRoom_GetInviteList_Request,
  CChatRoom_GetInviteList_Response,
  CChatRoom_GetMessageHistory_Request,
  CChatRoom_GetMessageHistory_Response,
  CChatRoom_GetMessageReactionReactors_Request,
  CChatRoom_GetMessageReactionReactors_Response,
  CChatRoom_GetMyChatRoomGroups_Response,
  CChatRoom_GetRoleActions_Request,
  CChatRoom_GetRoleActions_Response,
  CChatRoom_GetRoles_Request,
  CChatRoom_GetRoles_Response,
  CChatRoom_GetRolesForUser_Request,
  CChatRoom_GetRolesForUser_Response,
  CChatRoom_IncomingChatMessage_Notification,
  CChatRoom_InviteFriendToChatRoomGroup_Request,
  CChatRoom_JoinChatRoomGroup_Request,
  CChatRoom_JoinChatRoomGroup_Response,
  CChatRoom_JoinMiniGameForChatRoomGroup_Request,
  CChatRoom_JoinMiniGameForChatRoomGroup_Response,
  CChatRoom_JoinVoiceChat_Request,
  CChatRoom_JoinVoiceChat_Response,
  CChatRoom_KickUser_Request,
  CChatRoom_LeaveChatRoomGroup_Request,
  CChatRoom_LeaveVoiceChat_Request,
  CChatRoom_MemberStateChange_Notification,
  CChatRoom_MessageReaction_Notification,
  CChatRoom_MuteUser_Request,
  CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification,
  CChatRoom_RenameChatRoom_Request,
  CChatRoom_RenameChatRoomGroup_Request,
  CChatRoom_RenameChatRoomGroup_Response,
  CChatRoom_RenameRole_Request,
  CChatRoom_ReorderChatRoom_Request,
  CChatRoom_ReorderRole_Request,
  CChatRoom_ReplaceRoleActions_Request,
  CChatRoom_ReportMessage_Request,
  CChatRoom_ResolveReport_Request,
  CChatRoom_RevokeInvite_Request,
  CChatRoom_SaveChatRoomGroup_Request,
  CChatRoom_SearchMembers_Request,
  CChatRoom_SearchMembers_Response,
  CChatRoom_SendChatMessage_Request,
  CChatRoom_SendChatMessage_Response,
  CChatRoom_SetAppChatRoomGroupForceActive_Request,
  CChatRoom_SetAppChatRoomGroupForceActive_Response,
  CChatRoom_SetAppChatRoomGroupStopForceActive_Notification,
  CChatRoom_SetChatRoomGroupAvatar_Request,
  CChatRoom_SetChatRoomGroupTagline_Request,
  CChatRoom_SetChatRoomGroupWatchingBroadcast_Request,
  CChatRoom_SetSessionActiveChatRoomGroups_Request,
  CChatRoom_SetSessionActiveChatRoomGroups_Response,
  CChatRoom_SetUserBanState_Request,
  CChatRoom_SetUserChatGroupPreferences_Request,
  CChatRoom_UpdateMemberListView_Notification,
  CChatRoom_UpdateMessageReaction_Request,
  CChatRoom_UpdateMessageReaction_Response,
  CChatRoomClient_MemberListViewUpdated_Notification,
  CChatRoomGroupHeaderState,
  CChatRoomGroupInvite,
  CChatRoomGroupState,
  CChatRoomMember,
  CChatRoomMemberListView,
  CChatRoomMemberSummaryCounts,
  CChatRoomState,
  CChatRoomSummaryPair,
  CChatUsability_ClientUsabilityMetrics_Notification,
  CChatUsability_RequestClientUsabilityMetrics_Notification,
  CClanChatRooms_GetClanChatRoomInfo_Request,
  CClanChatRooms_GetClanChatRoomInfo_Response,
  CClanChatRooms_SetClanChatRoomPrivate_Request,
  CClanChatRooms_SetClanChatRoomPrivate_Response,
  ChatRoomClient_NotifyChatGroupUserStateChanged_Notification,
  ChatRoomClient_NotifyChatRoomDisconnect_Notification,
  CUserChatRoomGroupState,
  CUserChatRoomState,
  ServerMessage,
} from "../protos-definitions/steam/steammessages_chat.steamclient";
import type {
  CMsgChildProcessQueryGpuTopology,
  CMsgChildProcessQueryResponse,
} from "../protos-definitions/steam/steammessages_childprocessquery";
import type {
  CCloud_PendingRemoteOperation,
  CMsgAchievementChange,
  CMsgBluetoothDevicesData,
  CMsgCellList,
  CMsgClientShaderHitCache,
  CMsgClientShaderHitCacheEntry,
  CMsgCloudPendingRemoteOperations,
  CMsgGenerateSystemReportReply,
  CMsgMonitorInfo,
  CMsgNetworkDeviceConnect,
  CMsgNetworkDeviceIP4Address,
  CMsgNetworkDeviceIP4Config,
  CMsgNetworkDeviceIP6Address,
  CMsgNetworkDeviceIP6Config,
  CMsgNetworkDeviceSetOptions,
  CMsgNetworkDevicesData,
  CMsgSelectOSBranchParams,
  CMsgShortcutAppIds,
  CMsgShortcutInfo,
  CMsgShortcutInfos,
  CMsgStorageDevicesData,
  CMsgSystemAudioManagerDevice,
  CMsgSystemAudioManagerLink,
  CMsgSystemAudioManagerNode,
  CMsgSystemAudioManagerObject,
  CMsgSystemAudioManagerPort,
  CMsgSystemAudioManagerState,
  CMsgSystemAudioManagerStateHW,
  CMsgSystemAudioManagerUpdateSomething,
  CMsgSystemAudioVolume,
  CMsgSystemDisplay,
  CMsgSystemDisplayManagerSetMode,
  CMsgSystemDisplayManagerState,
  CMsgSystemDisplayMode,
  CMsgSystemDockState,
  CMsgSystemDockUpdateFirmware,
  CMsgSystemDockUpdateState,
  CMsgSystemManagerSettings,
  CMsgSystemPerfDiagnosticEntry,
  CMsgSystemPerfDiagnosticInfo,
  CMsgSystemPerfLegacySettingEntry,
  CMsgSystemPerfLegacySettings,
  CMsgSystemPerfLimits,
  CMsgSystemPerfNetworkInterface,
  CMsgSystemPerfSettings,
  CMsgSystemPerfSettingsGlobal,
  CMsgSystemPerfSettingsPerApp,
  CMsgSystemPerfSettingsV1,
  CMsgSystemPerfState,
  CMsgSystemPerfUpdateSettings,
  CMsgSystemUpdateApplyParams,
  CMsgSystemUpdateApplyResult,
  CMsgSystemUpdateCheckResult,
  CMsgSystemUpdateProgress,
  CMsgSystemUpdateState,
  CMsgWebUITransportFailure,
  CMsgWebUITransportInfo,
  SteamMessagesClientIClientForcedEnumDependencies,
} from "../protos-definitions/steam/steammessages_client_objects";
import type {
  CMsgClientLANP2PRequestChunks,
  CMsgClientLANP2PRequestChunksResponse,
  CMsgClientPeerChunkRequest,
  CMsgClientPeerChunkResponse,
} from "../protos-definitions/steam/steammessages_clientlanp2p";
import type {
  CClientMetrics_AppInterfaceCreation,
  CClientMetrics_AppInterfaceMethodCounts,
  CClientMetrics_AppInterfaceStats_Notification,
  CClientMetrics_ClientBootstrap_Notification,
  CClientMetrics_ClipRange_Notification,
  CClientMetrics_ClipShare_Notification,
  CClientMetrics_CloudAppSyncStats_Notification,
  CClientMetrics_ContentDownloadResponse_Counts_Notification,
  CClientMetrics_ContentValidation_Notification,
  CClientMetrics_DownloadRates_Notification,
  CClientMetrics_EndGameRecording_Notification,
  CClientMetrics_GamePerformance_Notification,
  CClientMetrics_IPv6Connectivity_Notification,
  CClientMetrics_IPv6Connectivity_Result,
  CClientMetrics_ReportAccessibilitySettings_Notification,
  CClientMetrics_ReportClientArgs_Notification,
  CClientMetrics_ReportClientError_Notification,
  CClientMetrics_ReportLinuxStats_Notification,
  CClientMetrics_ReportReactUsage_Notification,
  CClientMetrics_SteamPipeWorkStats_Notification,
  CClientMetrics_SteamPipeWorkStats_Operation,
} from "../protos-definitions/steam/steammessages_clientmetrics.steamclient";
import type {
  CClientNotificationAchievement,
  CClientNotificationBatteryTemperature,
  CClientNotificationBroadcastAvailableToWatch,
  CClientNotificationCannotReadControllerGuideButton,
  CClientNotificationCloudSyncConflict,
  CClientNotificationCloudSyncFailure,
  CClientNotificationDownloadCompleted,
  CClientNotificationFamilySharingDeviceAuthorizationChanged,
  CClientNotificationFamilySharingLibraryAvailable,
  CClientNotificationFamilySharingStopPlaying,
  CClientNotificationFriendInGame,
  CClientNotificationFriendInvite,
  CClientNotificationFriendInviteRollup,
  CClientNotificationFriendMessage,
  CClientNotificationFriendOnline,
  CClientNotificationGameRecordingError,
  CClientNotificationGameRecordingInstantClip,
  CClientNotificationGameRecordingStart,
  CClientNotificationGameRecordingStop,
  CClientNotificationGameRecordingUserMarkerAdded,
  CClientNotificationGiftReceived,
  CClientNotificationGroupChatMessage,
  CClientNotificationHardwareUpdateAvailable,
  CClientNotificationIncomingVoiceChat,
  CClientNotificationItemAnnouncement,
  CClientNotificationLowBattery,
  CClientNotificationLowDiskSpace,
  CClientNotificationPeerContentUpload,
  CClientNotificationPlaytimeWarning,
  CClientNotificationRemoteClientConnection,
  CClientNotificationRemoteClientStartStream,
  CClientNotificationScreenshot,
  CClientNotificationSteamInputActionSetChanged,
  CClientNotificationStreamingClientConnection,
  CClientNotificationSystemUpdate,
  CClientNotificationTimedTrialRemaining,
} from "../protos-definitions/steam/steammessages_clientnotificationtypes";
import type {
  CMsgClientAMGetClanOfficers,
  CMsgClientAMGetClanOfficersResponse,
  CMsgClientAMGetPersonaNameHistory,
  CMsgClientAMGetPersonaNameHistoryResponse,
  CMsgClientAuthList,
  CMsgClientAuthListAck,
  CMsgClientChatInvite,
  CMsgClientClanState,
  CMsgClientConnectionStats,
  CMsgClientDeregisterWithServer,
  CMsgClientGameConnectTokens,
  CMsgClientGamesPlayed,
  CMsgClientGetAppOwnershipTicket,
  CMsgClientGetAppOwnershipTicketResponse,
  CMsgClientInviteToGame,
  CMsgClientIsLimitedAccount,
  CMsgClientLicenseList,
  CMsgClientNetworkingCertReply,
  CMsgClientNetworkingCertRequest,
  CMsgClientNetworkingMobileCertReply,
  CMsgClientNetworkingMobileCertRequest,
  CMsgClientP2PConnectionFailInfo,
  CMsgClientP2PConnectionInfo,
  CMsgClientRegisterAuthTicketWithCM,
  CMsgClientReportOverlayDetourFailure,
  CMsgClientRequestEncryptedAppTicket,
  CMsgClientRequestEncryptedAppTicketResponse,
  CMsgClientRequestedClientStats,
  CMsgClientServersAvailable,
  CMsgClientSessionToken,
  CMsgClientStat2,
  CMsgClientTicketAuthComplete,
  CMsgClientWalletInfoUpdate,
  CMsgGameServerPolicyUpdate,
  CMsgGSApprove,
  CMsgGSDeny,
  CMsgGSKick,
} from "../protos-definitions/steam/steammessages_clientserver";
import type {
  CMsgAMUnlockH264,
  CMsgAMUnlockH264Response,
  CMsgBadgeCraftedNotification,
  CMsgClientActivateOEMLicense,
  CMsgClientAuthorizeLocalDevice,
  CMsgClientAuthorizeLocalDeviceNotification,
  CMsgClientAuthorizeLocalDeviceRequest,
  CMsgClientChatGetFriendMessageHistory,
  CMsgClientChatGetFriendMessageHistoryResponse,
  CMsgClientCheckAppBetaPassword,
  CMsgClientCheckAppBetaPasswordResponse,
  CMsgClientCheckFileSignature,
  CMsgClientCheckFileSignatureResponse,
  CMsgClientCommentNotifications,
  CMsgClientDeauthorizeDevice,
  CMsgClientDeauthorizeDeviceRequest,
  CMsgClientDPCheckSpecialSurvey,
  CMsgClientDPCheckSpecialSurveyResponse,
  CMsgClientDPSendSpecialSurveyResponse,
  CMsgClientDPSendSpecialSurveyResponseReply,
  CMsgClientEmailAddrInfo,
  CMsgClientFriendUserStatusPublished,
  CMsgClientFSGetFriendsSteamLevels,
  CMsgClientFSGetFriendsSteamLevelsResponse,
  CMsgClientGetAuthorizedDevicesResponse,
  CMsgClientGetClanActivityCounts,
  CMsgClientGetClanActivityCountsResponse,
  CMsgClientGetDepotDecryptionKey,
  CMsgClientGetDepotDecryptionKeyResponse,
  CMsgClientGetPeerContentInfo,
  CMsgClientGetPeerContentInfoResponse,
  CMsgClientItemAnnouncements,
  CMsgClientKickPlayingSession,
  CMsgClientOfflineMessageNotification,
  CMsgClientOGSReportBug,
  CMsgClientOGSReportString,
  CMsgClientPendingGameLaunch,
  CMsgClientPendingGameLaunchResponse,
  CMsgClientPlayingSessionState,
  CMsgClientPurchaseResponse,
  CMsgClientPurchaseWithMachineID,
  CMsgClientRedeemGuestPass,
  CMsgClientRedeemGuestPassResponse,
  CMsgClientRegisterKey,
  CMsgClientRegisterOEMMachine,
  CMsgClientRegisterOEMMachineResponse,
  CMsgClientRequestForgottenPasswordEmail,
  CMsgClientRequestForgottenPasswordEmailResponse,
  CMsgClientRequestFreeLicense,
  CMsgClientRequestFreeLicenseResponse,
  CMsgClientRichPresenceInfo,
  CMsgClientRichPresenceRequest,
  CMsgClientRichPresenceUpload,
  CMsgClientServiceCall,
  CMsgClientServiceCallResponse,
  CMsgClientServiceMethodLegacy,
  CMsgClientServiceMethodLegacyResponse,
  CMsgClientServiceModule,
  CMsgClientSharedLibraryLockStatus,
  CMsgClientSharedLibraryStopPlaying,
  CMsgClientStartPeerContentServer,
  CMsgClientStartPeerContentServerResponse,
  CMsgClientUGSGetGlobalStats,
  CMsgClientUGSGetGlobalStatsResponse,
  CMsgClientUIMode,
  CMsgClientUpdateUserGameInfo,
  CMsgClientUseLocalDeviceAuthorizations,
  CMsgClientUserNotifications,
  CMsgClientVanityURLChangedNotification,
  CMsgClientVoiceCallPreAuthorize,
  CMsgClientVoiceCallPreAuthorizeResponse,
  CMsgCREGetUserPublishedItemVoteDetails,
  CMsgCREGetUserPublishedItemVoteDetailsResponse,
  CMsgCREItemVoteSummary,
  CMsgCREItemVoteSummaryResponse,
  CMsgCREUpdateUserPublishedItemVote,
  CMsgCREUpdateUserPublishedItemVoteResponse,
  CMsgDPGetNumberOfCurrentPlayers,
  CMsgDPGetNumberOfCurrentPlayersResponse,
  CMsgDRMDownloadRequestWithCrashData,
  CMsgDRMDownloadResponse,
  CMsgDRMFinalResult,
  CMsgFSEnumerateFollowingList,
  CMsgFSEnumerateFollowingListResponse,
  CMsgFSGetFollowerCount,
  CMsgFSGetFollowerCountResponse,
  CMsgFSGetIsFollowing,
  CMsgFSGetIsFollowingResponse,
  CMsgGCClient,
  CMsgTrading_CancelTradeRequest,
  CMsgTrading_InitiateTradeRequest,
  CMsgTrading_InitiateTradeResponse,
  CMsgTrading_StartSession,
} from "../protos-definitions/steam/steammessages_clientserver_2";
import type {
  CMsgClientAppInfoChanges,
  CMsgClientAppInfoRequest,
  CMsgClientAppInfoUpdate,
  CMsgClientPICSAccessTokenRequest,
  CMsgClientPICSAccessTokenResponse,
  CMsgClientPICSChangesSinceRequest,
  CMsgClientPICSChangesSinceResponse,
  CMsgClientPICSPrivateBetaRequest,
  CMsgClientPICSPrivateBetaResponse,
  CMsgClientPICSProductInfoRequest,
  CMsgClientPICSProductInfoResponse,
} from "../protos-definitions/steam/steammessages_clientserver_appinfo";
import type {
  CMsgClientAddFriend,
  CMsgClientAddFriendResponse,
  CMsgClientAddFriendToGroup,
  CMsgClientAddFriendToGroupResponse,
  CMsgClientChangeStatus,
  CMsgClientCreateFriendsGroup,
  CMsgClientCreateFriendsGroupResponse,
  CMsgClientDeleteFriendsGroup,
  CMsgClientDeleteFriendsGroupResponse,
  CMsgClientEmoticonList,
  CMsgClientFriendMsg,
  CMsgClientFriendMsgIncoming,
  CMsgClientFriendProfileInfo,
  CMsgClientFriendProfileInfoResponse,
  CMsgClientFriendsGroupsList,
  CMsgClientFriendsList,
  CMsgClientHideFriend,
  CMsgClientManageFriendsGroup,
  CMsgClientManageFriendsGroupResponse,
  CMsgClientPersonaState,
  CMsgClientPlayerNicknameList,
  CMsgClientRemoveFriend,
  CMsgClientRemoveFriendFromGroup,
  CMsgClientRemoveFriendFromGroupResponse,
  CMsgClientRequestFriendData,
  CMsgClientSetPlayerNickname,
  CMsgClientSetPlayerNicknameResponse,
  CMsgPersonaChangeResponse,
} from "../protos-definitions/steam/steammessages_clientserver_friends";
import type {
  CMsgClientGMSServerQuery,
  CMsgGameServerData,
  CMsgGameServerOutOfDate,
  CMsgGameServerRemove,
  CMsgGMSClientServerQueryResponse,
  CMsgGSAssociateWithClan,
  CMsgGSAssociateWithClanResponse,
  CMsgGSComputeNewPlayerCompatibility,
  CMsgGSComputeNewPlayerCompatibilityResponse,
  CMsgGSDisconnectNotice,
  CMsgGSPlayerList,
  CMsgGSServerType,
  CMsgGSStatusReply,
  CMsgGSUserPlaying,
} from "../protos-definitions/steam/steammessages_clientserver_gameservers";
import type {
  CMsgClientLBSFindOrCreateLB,
  CMsgClientLBSFindOrCreateLBResponse,
  CMsgClientLBSGetLBEntries,
  CMsgClientLBSGetLBEntriesResponse,
  CMsgClientLBSSetScore,
  CMsgClientLBSSetScoreResponse,
  CMsgClientLBSSetUGC,
  CMsgClientLBSSetUGCResponse,
} from "../protos-definitions/steam/steammessages_clientserver_lbs";
import type {
  CMsgClientAccountInfo,
  CMsgClientChallengeRequest,
  CMsgClientChallengeResponse,
  CMsgClientHeartBeat,
  CMsgClientHello,
  CMsgClientLoggedOff,
  CMsgClientLogOnResponse,
  CMsgClientLogon,
  CMsgClientNewLoginKey,
  CMsgClientNewLoginKeyAccepted,
  CMsgClientRequestWebAPIAuthenticateUserNonce,
  CMsgClientRequestWebAPIAuthenticateUserNonceResponse,
  CMsgClientSecret,
  CMsgClientServerTimestampRequest,
  CMsgClientServerTimestampResponse,
} from "../protos-definitions/steam/steammessages_clientserver_login";
import type {
  CMsgClientMMSCreateLobby,
  CMsgClientMMSCreateLobbyResponse,
  CMsgClientMMSGetLobbyData,
  CMsgClientMMSGetLobbyList,
  CMsgClientMMSGetLobbyListResponse,
  CMsgClientMMSGetLobbyStatus,
  CMsgClientMMSGetLobbyStatusResponse,
  CMsgClientMMSInviteToLobby,
  CMsgClientMMSJoinLobby,
  CMsgClientMMSJoinLobbyResponse,
  CMsgClientMMSLeaveLobby,
  CMsgClientMMSLeaveLobbyResponse,
  CMsgClientMMSLobbyChatMsg,
  CMsgClientMMSLobbyData,
  CMsgClientMMSLobbyGameServerSet,
  CMsgClientMMSSendLobbyChatMsg,
  CMsgClientMMSSetLobbyData,
  CMsgClientMMSSetLobbyDataResponse,
  CMsgClientMMSSetLobbyGameServer,
  CMsgClientMMSSetLobbyLinked,
  CMsgClientMMSSetLobbyOwner,
  CMsgClientMMSSetLobbyOwnerResponse,
  CMsgClientMMSSetRatelimitPolicyOnClient,
  CMsgClientMMSUserJoinedLobby,
  CMsgClientMMSUserLeftLobby,
} from "../protos-definitions/steam/steammessages_clientserver_mms";
import type {
  CMsgClientUCMAddScreenshot,
  CMsgClientUCMAddScreenshotResponse,
  CMsgClientUCMDeletePublishedFile,
  CMsgClientUCMDeletePublishedFileResponse,
  CMsgClientUCMDeleteScreenshot,
  CMsgClientUCMDeleteScreenshotResponse,
  CMsgClientUCMEnumeratePublishedFilesByUserAction,
  CMsgClientUCMEnumeratePublishedFilesByUserActionResponse,
  CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates,
  CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse,
  CMsgClientUCMPublishedFileUpdated,
  CMsgClientUCMPublishFile,
  CMsgClientUCMPublishFileResponse,
  CMsgClientUCMSetUserPublishedFileAction,
  CMsgClientUCMSetUserPublishedFileActionResponse,
  CMsgClientUCMUpdatePublishedFile,
  CMsgClientUCMUpdatePublishedFileResponse,
  CMsgClientWorkshopItemChangesRequest,
  CMsgClientWorkshopItemChangesResponse,
} from "../protos-definitions/steam/steammessages_clientserver_ucm";
import type {
  CMsgClientEnableOrDisableDownloads,
  CMsgClientEnableOrDisableDownloadsResponse,
  CMsgClientGetClientAppList,
  CMsgClientGetClientAppListResponse,
  CMsgClientGetClientDetailsResponse,
  CMsgClientInstallClientApp,
  CMsgClientInstallClientAppResponse,
  CMsgClientLaunchClientApp,
  CMsgClientLaunchClientAppResponse,
  CMsgClientSetClientAppUpdateState,
  CMsgClientSetClientAppUpdateStateResponse,
  CMsgClientUDSP2PSessionEnded,
  CMsgClientUDSP2PSessionStarted,
  CMsgClientUninstallClientApp,
  CMsgClientUninstallClientAppResponse,
} from "../protos-definitions/steam/steammessages_clientserver_uds";
import type {
  CMsgClientGetUserStats,
  CMsgClientGetUserStatsResponse,
  CMsgClientStatsUpdated,
  CMsgClientStoreUserStats2,
  CMsgClientStoreUserStatsResponse,
} from "../protos-definitions/steam/steammessages_clientserver_userstats";
import type {
  CMsgVideoGameRecordingComponent,
  CMsgVideoGameRecordingDef,
  CMsgVideoGameRecordingRepresentation,
  CVideo_GameRecordingSegmentInfo,
  CVideo_GameRecordingSegmentUploadInfo,
} from "../protos-definitions/steam/steammessages_clientserver_video";
import type {
  CMsgClientSettings,
  CMsgHotkey,
  CMsgSettingVariant,
} from "../protos-definitions/steam/steammessages_clientsettings";
import type {
  CCloud_AppCloudStateChange_Notification,
  CCloud_AppExitSyncDone_Notification,
  CCloud_AppFileInfo,
  CCloud_AppLaunchIntent_Request,
  CCloud_AppLaunchIntent_Response,
  CCloud_AppSessionResume_Request,
  CCloud_AppSessionSuspend_Request,
  CCloud_BeginAppUploadBatch_Request,
  CCloud_BeginAppUploadBatch_Response,
  CCloud_BeginHTTPUpload_Request,
  CCloud_BeginHTTPUpload_Response,
  CCloud_BeginUGCUpload_Request,
  CCloud_BeginUGCUpload_Response,
  CCloud_CDNReport_Notification,
  CCloud_ClientBeginFileUpload_Request,
  CCloud_ClientBeginFileUpload_Response,
  CCloud_ClientCommitFileUpload_Request,
  CCloud_ClientCommitFileUpload_Response,
  CCloud_ClientConflictResolution_Notification,
  CCloud_ClientDeleteFile_Request,
  CCloud_ClientFileDownload_Request,
  CCloud_ClientFileDownload_Response,
  CCloud_ClientGetAppQuotaUsage_Request,
  CCloud_ClientGetAppQuotaUsage_Response,
  CCloud_ClientLogUploadCheck_Notification,
  CCloud_ClientLogUploadComplete_Notification,
  CCloud_ClientLogUploadRequest_Notification,
  CCloud_CommitHTTPUpload_Request,
  CCloud_CommitHTTPUpload_Response,
  CCloud_CommitUGCUpload_Request,
  CCloud_CommitUGCUpload_Response,
  CCloud_CompleteAppUploadBatch_Notification,
  CCloud_CompleteAppUploadBatch_Request,
  CCloud_Delete_Request,
  CCloud_EnumerateUserFiles_Request,
  CCloud_EnumerateUserFiles_Response,
  CCloud_ExternalStorageTransferReport_Notification,
  CCloud_GetAppFileChangelist_Request,
  CCloud_GetAppFileChangelist_Response,
  CCloud_GetClientEncryptionKey_Response,
  CCloud_GetFileDetails_Request,
  CCloud_GetFileDetails_Response,
  CCloud_GetSingleFileInfo_Request,
  CCloud_GetSingleFileInfo_Response,
  CCloud_ShareFile_Request,
  CCloud_ShareFile_Response,
  CCloud_UserFile,
  ClientCloudFileUploadBlockDetails,
} from "../protos-definitions/steam/steammessages_cloud.steamclient";
import type {
  CAppPriority,
  CCommunity_ClanLocGroupImage,
  CCommunity_ClearSinglePartnerEventsAppPriority_Request,
  CCommunity_Comment,
  CCommunity_DeleteCommentFromThread_Request,
  CCommunity_FetchTranslationFromCrowdIn_Request,
  CCommunity_GetAppRichPresenceLocalization_Request,
  CCommunity_GetAppRichPresenceLocalization_Response,
  CCommunity_GetApps_Request,
  CCommunity_GetApps_Response,
  CCommunity_GetAvatarHistory_Request,
  CCommunity_GetAvatarHistory_Response,
  CCommunity_GetBestEventsForUser_Request,
  CCommunity_GetBestEventsForUser_Response,
  CCommunity_GetClanAnnouncementVoteForUser_Request,
  CCommunity_GetClanAnnouncementVoteForUser_Response,
  CCommunity_GetClanCrowdInMetadata_Request,
  CCommunity_GetClanCrowdInMetadata_Response,
  CCommunity_GetClanEventCrowdInMetadata_Request,
  CCommunity_GetClanEventCrowdInMetadata_Response,
  CCommunity_GetClanLocGroupImages_Request,
  CCommunity_GetClanLocGroupImages_Response,
  CCommunity_GetCommentThread_Request,
  CCommunity_GetCommentThread_Response,
  CCommunity_GetCommentThreadRatings_Request,
  CCommunity_GetCommentThreadRatings_Response,
  CCommunity_GetUserPartnerEventNews_Request,
  CCommunity_GetUserPartnerEventNews_Response,
  CCommunity_GetUserPartnerEventsAppPriorities_Response,
  CCommunity_GetUserPartnerEventViewStatus_Request,
  CCommunity_GetUserPartnerEventViewStatus_Response,
  CCommunity_HideAndReportComment_Request,
  CCommunity_MarkPartnerEventsForUser_Request,
  CCommunity_PartnerEventResult,
  CCommunity_PartnerEventsAppPriority,
  CCommunity_PartnerEventsShowLessForApp_Request,
  CCommunity_PartnerEventsShowMoreForApp_Request,
  CCommunity_PostCommentToThread_Request,
  CCommunity_PostCommentToThread_Response,
  CCommunity_RateClanAnnouncement_Request,
  CCommunity_RateCommentThread_Request,
  CCommunity_RateCommentThread_Response,
  CCommunity_SetRecommendationBotReviewStatus_Request,
  CCommunity_VerifyClanMembership_Request,
  CCommunity_VerifyClanMembership_Response,
} from "../protos-definitions/steam/steammessages_community.steamclient";
import type {
  CContentServerDirectory_ConnectedSteamPipeServerInfo,
  CContentServerDirectory_GetCDNAuthToken_Request,
  CContentServerDirectory_GetCDNAuthToken_Response,
  CContentServerDirectory_GetClientUpdateHosts_Request,
  CContentServerDirectory_GetClientUpdateHosts_Response,
  CContentServerDirectory_GetDepotPatchInfo_Request,
  CContentServerDirectory_GetDepotPatchInfo_Response,
  CContentServerDirectory_GetManifestRequestCode_Request,
  CContentServerDirectory_GetManifestRequestCode_Response,
  CContentServerDirectory_GetPeerContentInfo_Request,
  CContentServerDirectory_GetPeerContentInfo_Response,
  CContentServerDirectory_GetServersForSteamPipe_Request,
  CContentServerDirectory_GetServersForSteamPipe_Response,
  CContentServerDirectory_RequestPeerContentServer_Request,
  CContentServerDirectory_RequestPeerContentServer_Response,
  CContentServerDirectory_ServerInfo,
  CDepotContentDetection_GetAllDetectedAppContent_Request,
  CDepotContentDetection_GetAllDetectedAppContent_Response,
  DetectedAppContent,
} from "../protos-definitions/steam/steammessages_contentsystem.steamclient";
import type {
  CCredentials_GetAccountAuthSecret_Response,
  CCredentials_GetSteamGuardDetails_Request,
  CCredentials_GetSteamGuardDetails_Response,
  CCredentials_LastCredentialChangeTime_Request,
  CCredentials_LastCredentialChangeTime_Response,
  CCredentials_SteamGuardPhishingReport_Request,
  CCredentials_SteamGuardPhishingReport_Response,
  CCredentials_ValidateEmailAddress_Request,
  CCredentials_ValidateEmailAddress_Response,
} from "../protos-definitions/steam/steammessages_credentials.steamclient";
import type {
  CDataPublisher_AddVRDeviceInfo_Request,
  CDataPublisher_AddVRDeviceInfo_Response,
  CDataPublisher_ClientContentCorruptionReport_Notification,
  CDataPublisher_ClientUpdateAppJob_Notification,
  CDataPublisher_GetVRDeviceInfo_Request,
  CDataPublisher_GetVRDeviceInfo_Response,
  CDataPublisher_SetVRDeviceInfoAggregationReference_Request,
  CDataPublisher_SetVRDeviceInfoAggregationReference_Response,
  CValveHWSurvey_GetSurveySchedule_Request,
  CValveHWSurvey_GetSurveySchedule_Response,
} from "../protos-definitions/steam/steammessages_datapublisher.steamclient";
import type {
  CContentBuilder_CommitAppBuild_Request,
  CContentBuilder_CommitAppBuild_Response,
  CContentBuilder_FinishDepotUpload_Request,
  CContentBuilder_FinishDepotUpload_Response,
  CContentBuilder_GetMissingDepotChunks_Request,
  CContentBuilder_GetMissingDepotChunks_Response,
  CContentBuilder_InitDepotBuild_Request,
  CContentBuilder_InitDepotBuild_Response,
  CContentBuilder_SignInstallScript_Request,
  CContentBuilder_SignInstallScript_Response,
  CContentBuilder_StartDepotUpload_Request,
  CContentBuilder_StartDepotUpload_Response,
} from "../protos-definitions/steam/steammessages_depotbuilder.steamclient";
import type {
  CEcon_Asset,
  CEcon_ClientGetItemShopOverlayAuthURL_Request,
  CEcon_ClientGetItemShopOverlayAuthURL_Response,
  CEcon_GetAssetClassInfo_Request,
  CEcon_GetAssetClassInfo_Response,
  CEcon_GetAssetPropertySchema_Request,
  CEcon_GetAssetPropertySchema_Response,
  CEcon_GetInventoryItemsWithDescriptions_Request,
  CEcon_GetInventoryItemsWithDescriptions_Response,
  CEcon_GetTradeOfferAccessToken_Request,
  CEcon_GetTradeOfferAccessToken_Response,
  CEconItem_Action,
  CEconItem_AssetAccessory,
  CEconItem_AssetProperties,
  CEconItem_AssetProperty,
  CEconItem_AssetPropertySchema,
  CEconItem_ClassIdentifiers,
  CEconItem_ContainerProperties,
  CEconItem_Description,
  CEconItem_DescriptionLine,
  CEconItem_Tag,
} from "../protos-definitions/steam/steammessages_econ.steamclient";
import type {
  CFamilyGroups_CancelFamilyGroupInvite_Request,
  CFamilyGroups_ClearCooldownSkip_Request,
  CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
  CFamilyGroups_ConfirmJoinFamilyGroup_Request,
  CFamilyGroups_CreateFamilyGroup_Request,
  CFamilyGroups_CreateFamilyGroup_Response,
  CFamilyGroups_DeleteFamilyGroup_Request,
  CFamilyGroups_ForceAcceptInvite_Request,
  CFamilyGroups_GetChangeLog_Request,
  CFamilyGroups_GetChangeLog_Response,
  CFamilyGroups_GetFamilyGroup_Request,
  CFamilyGroups_GetFamilyGroup_Response,
  CFamilyGroups_GetFamilyGroupForUser_Request,
  CFamilyGroups_GetFamilyGroupForUser_Response,
  CFamilyGroups_GetInviteCheckResults_Request,
  CFamilyGroups_GetInviteCheckResults_Response,
  CFamilyGroups_GetPlaytimeSummary_Request,
  CFamilyGroups_GetPlaytimeSummary_Response,
  CFamilyGroups_GetPreferredLenders_Request,
  CFamilyGroups_GetPreferredLenders_Response,
  CFamilyGroups_GetPurchaseRequests_Request,
  CFamilyGroups_GetPurchaseRequests_Response,
  CFamilyGroups_GetSharedLibraryApps_Request,
  CFamilyGroups_GetSharedLibraryApps_Response,
  CFamilyGroups_GetUsersSharingDevice_Request,
  CFamilyGroups_GetUsersSharingDevice_Response,
  CFamilyGroups_InviteToFamilyGroup_Request,
  CFamilyGroups_InviteToFamilyGroup_Response,
  CFamilyGroups_JoinFamilyGroup_Request,
  CFamilyGroups_JoinFamilyGroup_Response,
  CFamilyGroups_ModifyFamilyGroupDetails_Request,
  CFamilyGroups_PlaytimeEntry,
  CFamilyGroups_RemoveFromFamilyGroup_Request,
  CFamilyGroups_RequestPurchase_Request,
  CFamilyGroups_RequestPurchase_Response,
  CFamilyGroups_ResendInvitationToFamilyGroup_Request,
  CFamilyGroups_RespondToRequestedPurchase_Request,
  CFamilyGroups_RollbackFamilyGroup_Request,
  CFamilyGroups_SetFamilyCooldownOverrides_Request,
  CFamilyGroups_SetPreferredLender_Request,
  CFamilyGroups_UndeleteFamilyGroup_Request,
  CFamilyGroupsClient_GroupChanged_Notification,
  CFamilyGroupsClient_NotifyRunningApps_Notification,
  FamilyGroupFormerMember,
  FamilyGroupMember,
  FamilyGroupMembership,
  FamilyGroupPendingInvite,
  FamilyGroupPendingInviteForUser,
  PurchaseRequest,
} from "../protos-definitions/steam/steammessages_familygroups.steamclient";
import type {
  CFriendMessages_AckMessage_Notification,
  CFriendMessages_DismissSessionNotice_Notification,
  CFriendMessages_GetRecentMessages_Request,
  CFriendMessages_GetRecentMessages_Response,
  CFriendMessages_IncomingMessage_Notification,
  CFriendMessages_IsInFriendsUIBeta_Request,
  CFriendMessages_IsInFriendsUIBeta_Response,
  CFriendMessages_MessageReaction_Notification,
  CFriendMessages_ReportMessage_Request,
  CFriendMessages_ResolveReport_Request,
  CFriendMessages_SendMessage_Request,
  CFriendMessages_SendMessage_Response,
  CFriendMessages_SessionNotice_Notification,
  CFriendMessages_UpdateMessageReaction_Request,
  CFriendMessages_UpdateMessageReaction_Response,
  CFriendsMessages_GetActiveMessageSessions_Request,
  CFriendsMessages_GetActiveMessageSessions_Response,
} from "../protos-definitions/steam/steammessages_friendmessages.steamclient";
import type {
  CGameNetworking_AllocateFakeIP_Request,
  CGameNetworking_AllocateFakeIP_Response,
  CGameNetworking_ReleaseFakeIP_Notification,
} from "../protos-definitions/steam/steammessages_gamenetworking.steamclient";
import type {
  CGameNetworkingUI_AppSummary,
  CGameNetworkingUI_ConnectionState,
  CGameNetworkingUI_ConnectionSummary,
  CGameNetworkingUI_Message,
} from "../protos-definitions/steam/steammessages_gamenetworkingui";
import type {
  CGameNotifications_CreateSession_Request,
  CGameNotifications_CreateSession_Response,
  CGameNotifications_DeleteSession_Request,
  CGameNotifications_EnumerateSessions_Request,
  CGameNotifications_EnumerateSessions_Response,
  CGameNotifications_GetSessionDetails_Request,
  CGameNotifications_GetSessionDetails_Response,
  CGameNotifications_LocalizedText,
  CGameNotifications_OnNotificationsRequested_Notification,
  CGameNotifications_OnUserStatusChanged_Notification,
  CGameNotifications_Session,
  CGameNotifications_UpdateNotificationSettings_Request,
  CGameNotifications_UpdateSession_Request,
  CGameNotifications_UserStatus,
  CGameNotifications_Variable,
  GameNotificationSettings,
} from "../protos-definitions/steam/steammessages_gamenotifications.steamclient";
import type {
  CGameRecording_CreateShareClip_Request,
  CGameRecording_CreateShareClip_Response,
  CGameRecording_DeleteSharedClip_Request,
  CGameRecording_GetSingleSharedClip_Request,
  CGameRecording_GetSingleSharedClip_Response,
  CGameRecordingClip,
  CVideo_BeginGameRecordingSegmentsUpload_Request,
  CVideo_BeginGameRecordingSegmentsUpload_Response,
  CVideo_CommitGameRecordingSegmentsUpload_Request,
  CVideo_GameRecordingCommitSegmentUploads_Request,
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request,
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response,
  CVideoManagerClipID,
} from "../protos-definitions/steam/steammessages_gamerecording.steamclient";
import type { CGameRecording_AudioSessionsChanged_Notification } from "../protos-definitions/steam/steammessages_gamerecording_objects";
import type {
  CGameServers_GameServerQuery_Response,
  CGameServers_GetServerIPsBySteamID_Request,
  CGameServers_GetServerSteamIDsByIP_Request,
  CGameServers_IPsWithSteamIDs_Response,
  CGameServers_QueryByFakeIP_Request,
  CGameServers_ReportServerPingReply_Notification,
  CMsgGameServerPingQueryData,
  CMsgGameServerPlayersQueryData,
  CMsgGameServerRulesQueryData,
  GameServerClient_QueryServerData_Response,
} from "../protos-definitions/steam/steammessages_gameservers.steamclient";
import type {
  CHIDDeviceInfo,
  CHIDDeviceInputReport,
  CHIDMessageFromRemote,
  CHIDMessageToRemote,
} from "../protos-definitions/steam/steammessages_hiddevices";
import type {
  CInventory_AddItem_Request,
  CInventory_CombineItemStacks_Request,
  CInventory_ConsumeItem_Request,
  CInventory_ConsumePlaytime_Request,
  CInventory_DevSetNextDrop_Request,
  CInventory_ExchangeItem_Request,
  CInventory_GetEligiblePromoItemDefIDs_Request,
  CInventory_GetEligiblePromoItemDefIDs_Response,
  CInventory_GetInventory_Request,
  CInventory_GetItemDefMeta_Request,
  CInventory_GetItemDefMeta_Response,
  CInventory_GetUserPurchaseInfo_Response,
  CInventory_InspectItem_Request,
  CInventory_ModifyItems_Request,
  CInventory_PurchaseFinalize_Request,
  CInventory_PurchaseInit_Request,
  CInventory_PurchaseInit_Response,
  CInventory_Response,
  CInventory_SplitItemStack_Request,
  CInventoryClient_NewItems_Notification,
} from "../protos-definitions/steam/steammessages_inventory.steamclient";
import type {
  CCommunity_GetLinkFilterHashes_Request,
  CCommunity_GetLinkFilterHashes_Response,
  CCommunity_GetLinkFilterHashPrefixes_Request,
  CCommunity_GetLinkFilterHashPrefixes_Response,
  CCommunity_GetLinkFilterListVersion_Request,
  CCommunity_GetLinkFilterListVersion_Response,
} from "../protos-definitions/steam/steammessages_linkfilter.steamclient";
import type {
  LobbyMatchmakingLegacy_GetLobbyStatus_Request,
  LobbyMatchmakingLegacy_GetLobbyStatus_Response,
} from "../protos-definitions/steam/steammessages_lobbymatchmaking.steamclient";
import type {
  CEconMarket_IsMarketplaceAllowed_Request,
  CEconMarket_IsMarketplaceAllowed_Response,
} from "../protos-definitions/steam/steammessages_market.steamclient";
import type {
  CDisplayMarketingMessage,
  CMarketingMessage_GetMarketingMessagesForApps_Request,
  CMarketingMessage_GetMarketingMessagesForApps_Response,
  CMarketingMessage_GetMarketingMessagesForPartner_Request,
  CMarketingMessage_GetMarketingMessagesForPartner_Response,
  CMarketingMessageClickedHourlyStats,
  CMarketingMessageHourlyStats,
  CMarketingMessageProto,
  CMarketingMessages_CreateMarketingMessage_Request,
  CMarketingMessages_CreateMarketingMessage_Response,
  CMarketingMessages_DeleteMarketingMessage_Request,
  CMarketingMessages_DoesUserHavePendingMarketingMessages_Request,
  CMarketingMessages_DoesUserHavePendingMarketingMessages_Response,
  CMarketingMessages_FindMarketingMessages_Request,
  CMarketingMessages_FindMarketingMessages_Response,
  CMarketingMessages_GetActiveMarketingMessages_Request,
  CMarketingMessages_GetActiveMarketingMessages_Response,
  CMarketingMessages_GetDisplayMarketingMessage_Request,
  CMarketingMessages_GetDisplayMarketingMessage_Response,
  CMarketingMessages_GetMarketingMessage_Request,
  CMarketingMessages_GetMarketingMessage_Response,
  CMarketingMessages_GetMarketingMessageClickedStats_Request,
  CMarketingMessages_GetMarketingMessageClickedStats_Response,
  CMarketingMessages_GetMarketingMessagesForUser_Request,
  CMarketingMessages_GetMarketingMessagesForUser_Response,
  CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request,
  CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response,
  CMarketingMessages_GetMarketingMessageViewerStats_Request,
  CMarketingMessages_GetMarketingMessageViewerStats_Response,
  CMarketingMessages_GetPartnerMessagePreview_Request,
  CMarketingMessages_GetPartnerMessagePreview_Response,
  CMarketingMessages_GetPartnerReadyToPublishMessages_Request,
  CMarketingMessages_GetPartnerReadyToPublishMessages_Response,
  CMarketingMessages_GetPastMarketingMessages_Request,
  CMarketingMessages_GetPastMarketingMessages_Response,
  CMarketingMessages_MarkMessageClicked_Notification,
  CMarketingMessages_MarkMessageSeen_Notification,
  CMarketingMessages_PartnerPublishMessage_Request,
  CMarketingMessages_UpdateMarketingMessage_Request,
} from "../protos-definitions/steam/steammessages_marketingmessages.steamclient";
import type {
  CSteamNotification_NotificationsReceived_Notification,
  CSteamNotification_PreferencesUpdated_Notification,
  SteamNotificationData,
  SteamNotificationPreference,
} from "../protos-definitions/steam/steammessages_notifications.steamclient";
import type {
  COffline_GetOfflineLogonTicket_Request,
  COffline_GetOfflineLogonTicket_Response,
  COffline_GetUnsignedOfflineLogonTicket_Response,
  COffline_OfflineLogonTicket,
} from "../protos-definitions/steam/steammessages_offline.steamclient";
import type {
  CParental_ApproveFeatureAccess_Request,
  CParental_ApprovePlaytime_Request,
  CParental_DisableParentalSettings_Request,
  CParental_EnableParentalSettings_Request,
  CParental_GetParentalSettings_Request,
  CParental_GetParentalSettings_Response,
  CParental_GetRequests_Request,
  CParental_GetRequests_Response,
  CParental_GetSignedParentalSettings_Request,
  CParental_GetSignedParentalSettings_Response,
  CParental_LockClient_Request,
  CParental_ParentalLock_Notification,
  CParental_ParentalSettingsChange_Notification,
  CParental_ParentalUnlock_Notification,
  CParental_PlaytimeUsed_Notification,
  CParental_ReportPlaytimeAndNotify_Request,
  CParental_RequestFeatureAccess_Request,
  CParental_RequestFeatureAccess_Response,
  CParental_RequestPlaytime_Request,
  CParental_RequestPlaytime_Response,
  CParental_SetParentalSettings_Request,
  CParental_ValidatePassword_Request,
  CParental_ValidatePassword_Response,
  CParental_ValidateToken_Request,
} from "../protos-definitions/steam/steammessages_parental.steamclient";
import type {
  ParentalApp,
  ParentalFeatureRequest,
  ParentalPlaytimeDay,
  ParentalPlaytimeRequest,
  ParentalPlaytimeRestrictions,
  ParentalSettings,
  ParentalTemporaryPlaytimeRestrictions,
} from "../protos-definitions/steam/steammessages_parental_objects";
import type {
  CParties_BeaconLocation,
  CParties_CancelReservation_Request,
  CParties_CancelReservation_Response,
  CParties_ChangeNumOpenSlots_Request,
  CParties_ChangeNumOpenSlots_Response,
  CParties_CreateBeacon_Request,
  CParties_CreateBeacon_Response,
  CParties_DestroyBeacon_Request,
  CParties_DestroyBeacon_Response,
  CParties_JoinParty_Request,
  CParties_JoinParty_Response,
  CParties_OnReservationCompleted_Request,
  CParties_OnReservationCompleted_Response,
} from "../protos-definitions/steam/steammessages_parties.steamclient";
import type {
  CPartnerApps_Download_Request,
  CPartnerApps_Download_Response,
  CPartnerApps_ExistingDRMUpload,
  CPartnerApps_FindDRMUploads_Request,
  CPartnerApps_FindDRMUploads_Response,
  CPartnerApps_FinishUpload_Request,
  CPartnerApps_FinishUploadDepot_Request,
  CPartnerApps_FinishUploadDepot_Response,
  CPartnerApps_FinishUploadKVSign_Response,
  CPartnerApps_FinishUploadLegacyDRM_Request,
  CPartnerApps_FinishUploadLegacyDRM_Response,
  CPartnerApps_GetDepotBuildResult_Request,
  CPartnerApps_GetDepotBuildResult_Response,
  CPartnerApps_RequestUploadToken_Request,
  CPartnerApps_RequestUploadToken_Response,
} from "../protos-definitions/steam/steammessages_partnerapps.steamclient";
import type {
  CPlayer_AcceptSSA_Request,
  CPlayer_AddFriend_Request,
  CPlayer_AddFriend_Response,
  CPlayer_CommunityPreferences,
  CPlayer_CommunityPreferencesChanged_Notification,
  CPlayer_DeletePostedStatus_Request,
  CPlayer_FriendEquippedProfileItemsChanged_Notification,
  CPlayer_FriendNicknameChanged_Notification,
  CPlayer_GetAchievementsProgress_Request,
  CPlayer_GetAchievementsProgress_Response,
  CPlayer_GetAnimatedAvatar_Request,
  CPlayer_GetAnimatedAvatar_Response,
  CPlayer_GetAvatarFrame_Request,
  CPlayer_GetAvatarFrame_Response,
  CPlayer_GetCommunityBadgeProgress_Request,
  CPlayer_GetCommunityBadgeProgress_Response,
  CPlayer_GetCommunityPreferences_Response,
  CPlayer_GetDurationControl_Request,
  CPlayer_GetDurationControl_Response,
  CPlayer_GetEmoticonList_Response,
  CPlayer_GetFavoriteBadge_Request,
  CPlayer_GetFavoriteBadge_Response,
  CPlayer_GetFriendsGameplayInfo_Request,
  CPlayer_GetFriendsGameplayInfo_Response,
  CPlayer_GetGameAchievements_Request,
  CPlayer_GetGameAchievements_Response,
  CPlayer_GetGameBadgeLevels_Request,
  CPlayer_GetGameBadgeLevels_Response,
  CPlayer_GetLastPlayedTimes_Request,
  CPlayer_GetLastPlayedTimes_Response,
  CPlayer_GetMiniProfileBackground_Request,
  CPlayer_GetMiniProfileBackground_Response,
  CPlayer_GetMutualFriendsForIncomingInvites_Response,
  CPlayer_GetNewSteamAnnouncementState_Request,
  CPlayer_GetNewSteamAnnouncementState_Response,
  CPlayer_GetNicknameList_Response,
  CPlayer_GetOwnedGames_Request,
  CPlayer_GetOwnedGames_Response,
  CPlayer_GetPerFriendPreferences_Response,
  CPlayer_GetPlayerLinkDetails_Request,
  CPlayer_GetPlayerLinkDetails_Response,
  CPlayer_GetPlayNext_Request,
  CPlayer_GetPlayNext_Response,
  CPlayer_GetPostedStatus_Request,
  CPlayer_GetPostedStatus_Response,
  CPlayer_GetPrivacySettings_Response,
  CPlayer_GetProfileBackground_Request,
  CPlayer_GetProfileBackground_Response,
  CPlayer_GetProfileCustomization_Request,
  CPlayer_GetProfileCustomization_Response,
  CPlayer_GetProfileItemsEquipped_Request,
  CPlayer_GetProfileItemsEquipped_Response,
  CPlayer_GetProfileItemsOwned_Request,
  CPlayer_GetProfileItemsOwned_Response,
  CPlayer_GetProfileThemesAvailable_Response,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response,
  CPlayer_GetPurchasedProfileCustomizations_Request,
  CPlayer_GetPurchasedProfileCustomizations_Response,
  CPlayer_GetRecentPlaytimeSessionsForChild_Request,
  CPlayer_GetRecentPlaytimeSessionsForChild_Response,
  CPlayer_GetSteamDeckKeyboardSkin_Request,
  CPlayer_GetSteamDeckKeyboardSkin_Response,
  CPlayer_GetTextFilterWords_Response,
  CPlayer_GetTimeSSAAccepted_Response,
  CPlayer_GetTopAchievementsForGames_Request,
  CPlayer_GetTopAchievementsForGames_Response,
  CPlayer_IgnoreFriend_Request,
  CPlayer_IgnoreFriend_Response,
  CPlayer_IncomingInviteMutualFriendList,
  CPlayer_LastPlayedTimes_Notification,
  CPlayer_NewSteamAnnouncementState_Notification,
  CPlayer_PerFriendPreferencesChanged_Notification,
  CPlayer_PostStatusToFriends_Request,
  CPlayer_PrivacySettingsChanged_Notification,
  CPlayer_RecordDisconnectedPlaytime_Request,
  CPlayer_RemoveFriend_Request,
  CPlayer_RemoveFriend_Response,
  CPlayer_SetAnimatedAvatar_Request,
  CPlayer_SetAvatarFrame_Request,
  CPlayer_SetCommunityPreferences_Request,
  CPlayer_SetEquippedProfileItemFlags_Request,
  CPlayer_SetFavoriteBadge_Request,
  CPlayer_SetMiniProfileBackground_Request,
  CPlayer_SetPerFriendPreferences_Request,
  CPlayer_SetProfileBackground_Request,
  CPlayer_SetProfilePreferences_Request,
  CPlayer_SetProfileTheme_Request,
  CPlayer_SetSteamDeckKeyboardSkin_Request,
  CPlayer_TextFilterWords,
  CPlayer_TextFilterWordsChanged_Notification,
  CPlayer_UpdateSteamAnnouncementLastRead_Request,
  CPrivacySettings,
  PerFriendPreferences,
  ProfileCustomization,
  ProfileCustomizationSlot,
  ProfileItem,
  ProfilePreferences,
  ProfileTheme,
} from "../protos-definitions/steam/steammessages_player.steamclient";
import type {
  CPublishedFile_AddAppRelationship_Request,
  CPublishedFile_AddChild_Request,
  CPublishedFile_AreFilesInSubscriptionList_Request,
  CPublishedFile_AreFilesInSubscriptionList_Response,
  CPublishedFile_CanSubscribe_Request,
  CPublishedFile_CanSubscribe_Response,
  CPublishedFile_Delete_Request,
  CPublishedFile_FileDeleted_Client_Notification,
  CPublishedFile_FileSubscribed_Notification,
  CPublishedFile_FileUnsubscribed_Notification,
  CPublishedFile_GetAppRelationships_Request,
  CPublishedFile_GetAppRelationships_Response,
  CPublishedFile_GetAppRelationshipsBatched_Request,
  CPublishedFile_GetAppRelationshipsBatched_Response,
  CPublishedFile_GetChangeHistory_Request,
  CPublishedFile_GetChangeHistory_Response,
  CPublishedFile_GetChangeHistoryEntry_Request,
  CPublishedFile_GetChangeHistoryEntry_Response,
  CPublishedFile_GetContentDescriptors_Request,
  CPublishedFile_GetContentDescriptors_Response,
  CPublishedFile_GetDetails_Request,
  CPublishedFile_GetDetails_Response,
  CPublishedFile_GetItemChanges_Request,
  CPublishedFile_GetItemChanges_Response,
  CPublishedFile_GetItemInfo_Request,
  CPublishedFile_GetItemInfo_Response,
  CPublishedFile_GetSubSectionData_Request,
  CPublishedFile_GetSubSectionData_Response,
  CPublishedFile_GetUserFiles_Request,
  CPublishedFile_GetUserFiles_Response,
  CPublishedFile_GetUserVoteSummary_Request,
  CPublishedFile_GetUserVoteSummary_Response,
  CPublishedFile_Publish_Request,
  CPublishedFile_Publish_Response,
  CPublishedFile_QueryFiles_Request,
  CPublishedFile_QueryFiles_Response,
  CPublishedFile_RefreshVotingQueue_Request,
  CPublishedFile_RemoveAppRelationship_Request,
  CPublishedFile_RemoveChild_Request,
  CPublishedFile_SetCollectionChildren_Request,
  CPublishedFile_SetPlaytimeForControllerConfigs_Request,
  CPublishedFile_SetSubscriptionListFromCollection_Request,
  CPublishedFile_StartPlaytimeTracking_Request,
  CPublishedFile_StopPlaytimeTracking_Request,
  CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request,
  CPublishedFile_Subscribe_Request,
  CPublishedFile_Unsubscribe_Request,
  CPublishedFile_Update_Request,
  CPublishedFile_UpdateContentDescriptors_Request,
  CPublishedFile_UpdateContentDescriptors_Response,
  CPublishedFile_Vote_Request,
  PublishedFileAuthorSnapshot,
  PublishedFileDetails,
  PublishedFileSubSection,
} from "../protos-definitions/steam/steammessages_publishedfile.steamclient";
import type {
  CQueuedMatchmaking_SearchForGame_Request,
  CQueuedMatchmaking_SearchForGame_Response,
  CQueuedMatchmakingGameHost_EndGame_Request,
  CQueuedMatchmakingGameHost_SearchForPlayers_Request,
  CQueuedMatchmakingGameHost_SearchForPlayers_Response,
  CQueuedMatchmakingGameHost_SubmitPlayerResult_Request,
  GameSearchParam,
  PlayerFound,
  PlayerResult,
} from "../protos-definitions/steam/steammessages_qms.steamclient";
import type {
  CMsgRemoteClientAcceptEULA,
  CMsgRemoteClientAppStatus,
  CMsgRemoteClientGetControllerConfig,
  CMsgRemoteClientGetControllerConfigResponse,
  CMsgRemoteClientPairWifiAP,
  CMsgRemoteClientPairWifiAPResponse,
  CMsgRemoteClientStartStream,
  CMsgRemoteClientStartStreamResponse,
  CMsgRemoteClientStatus,
  CMsgRemoteClientStreamingEnabled,
  CMsgRemoteClientWifiAPStatus,
} from "../protos-definitions/steam/steammessages_remoteclient";
import type {
  CMsgRemoteClientBroadcastClientIDDeconflict,
  CMsgRemoteClientBroadcastDiscovery,
  CMsgRemoteClientBroadcastHeader,
  CMsgRemoteClientBroadcastStatus,
  CMsgRemoteDeviceAuthorizationConfirmed,
  CMsgRemoteDeviceAuthorizationRequest,
  CMsgRemoteDeviceAuthorizationResponse,
  CMsgRemoteDeviceProofRequest,
  CMsgRemoteDeviceProofResponse,
  CMsgRemoteDeviceStreamingCancelRequest,
  CMsgRemoteDeviceStreamingProgress,
  CMsgRemoteDeviceStreamingRequest,
  CMsgRemoteDeviceStreamingResponse,
  CMsgRemoteDeviceStreamTransportSignal,
} from "../protos-definitions/steam/steammessages_remoteclient_discovery";
import type {
  CCMRemoteClient_ClientMessage,
  CCMRemoteClient_ServerMessage,
  CRemoteClient_AddClientTask_Request,
  CRemoteClient_AllocateRelayServer_Request,
  CRemoteClient_AllocateRelayServer_Response,
  CRemoteClient_AllocateSDR_Request,
  CRemoteClient_CancelPairing_Request,
  CRemoteClient_ClientDetails,
  CRemoteClient_ClientLogin,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Request,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Response,
  CRemoteClient_CreateSession_Response,
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Request,
  CRemoteClient_DeleteSession_Notification,
  CRemoteClient_DeviceDetails,
  CRemoteClient_GetPairingInfo_Request,
  CRemoteClient_GetPairingInfo_Response,
  CRemoteClient_GetRecentClients_Response,
  CRemoteClient_GetReplies_Request,
  CRemoteClient_GetReplies_Response,
  CRemoteClient_LookupRemotePlayTogetherInvitation_Request,
  CRemoteClient_LookupRemotePlayTogetherInvitation_Response,
  CRemoteClient_MarkTaskComplete_Request,
  CRemoteClient_Offline_Notification,
  CRemoteClient_Online_Notification,
  CRemoteClient_RegisterStatusUpdate_Notification,
  CRemoteClient_RemotePacket_Notification,
  CRemoteClient_ReplyPacket_Notification,
  CRemoteClient_SetPairingInfo_Request,
  CRemoteClient_StartPairing_Request,
  CRemoteClient_StartPairing_Response,
  CRemoteClient_SteamBroadcast_Notification,
  CRemoteClient_SteamToSteam_Notification,
  CRemoteClient_Task,
  CRemoteClient_TaskList_Notification,
  CRemoteClient_UnregisterStatusUpdate_Notification,
  CRemotePlay_SessionStarted_Request,
  CRemotePlay_SessionStarted_Response,
  CRemotePlay_SessionStopped_Notification,
  CRemotePlayTogether_Notification,
} from "../protos-definitions/steam/steammessages_remoteclient_service_messages";
import type {
  CAudioFormat,
  CAuthenticationRequestMsg,
  CAuthenticationResponseMsg,
  CClientHandshakeMsg,
  CControllerConfigMsg,
  CControllerPersonalizationUpdateMsg,
  CDebugDumpMsg,
  CDeleteCursorMsg,
  CDiscoveryPingRequest,
  CDiscoveryPingResponse,
  CFrameEvent,
  CFrameStatAccumulatedValue,
  CFrameStats,
  CFrameStatsListMsg,
  CGetCursorImageMsg,
  CGetTouchConfigDataMsg,
  CGetTouchIconDataMsg,
  CInputKeyDownMsg,
  CInputKeyUpMsg,
  CInputLatencyTestMsg,
  CInputMouseDownMsg,
  CInputMouseMotionMsg,
  CInputMouseUpMsg,
  CInputMouseWheelMsg,
  CInputTextMsg,
  CInputTouchFingerDownMsg,
  CInputTouchFingerMotionMsg,
  CInputTouchFingerUpMsg,
  CLogMsg,
  CLogUploadMsg,
  CNegotiatedConfig,
  CNegotiationInitMsg,
  CNegotiationSetConfigMsg,
  COverlayEnabledMsg,
  CRecordedInput,
  CRecordedInputStream,
  CRemoteHIDMsg,
  CRemotePlayTogetherGroupUpdateMsg,
  CSaveTouchConfigLayoutMsg,
  CServerHandshakeMsg,
  CSetActivityMsg,
  CSetBitrateOverrideMsg,
  CSetCapslockMsg,
  CSetCaptureSizeMsg,
  CSetCursorImageMsg,
  CSetCursorMsg,
  CSetCursorScaleMsg,
  CSetFlashStateMsg,
  CSetGammaRampMsg,
  CSetIconMsg,
  CSetInputTemporarilyDisabledMsg,
  CSetKeymapMsg,
  CSetQoSMsg,
  CSetQualityOverrideMsg,
  CSetSpectatorModeMsg,
  CSetStreamingClientConfig,
  CSetTargetBitrateMsg,
  CSetTargetFramerateMsg,
  CSetTitleMsg,
  CSetTouchConfigDataMsg,
  CSetTouchIconDataMsg,
  CShowCursorMsg,
  CStartAudioDataMsg,
  CStartNetworkTestMsg,
  CStartVideoDataMsg,
  CStreamDataLostMsg,
  CStreamingClientCaps,
  CStreamingClientConfig,
  CStreamingClientHandshakeInfo,
  CStreamingKeymap,
  CStreamingKeymapEntry,
  CStreamingServerConfig,
  CStreamingServerHandshakeInfo,
  CStreamingSessionStats,
  CStreamVideoLimit,
  CStreamVideoMode,
  CTouchActionSetActiveMsg,
  CTouchActionSetLayerAddedMsg,
  CTouchActionSetLayerRemovedMsg,
  CTouchConfigActiveMsg,
  CTransportSignalMsg,
  CVideoDecoderInfoMsg,
  CVideoEncoderInfoMsg,
  CVideoFormat,
  CVirtualHereReadyMsg,
  CVirtualHereRequestMsg,
  CVirtualHereShareDeviceMsg,
  CVRConnectionReady,
} from "../protos-definitions/steam/steammessages_remoteplay";
import type {
  CKeyEscrow_Request,
  CKeyEscrow_Response,
  CKeyEscrow_Ticket,
} from "../protos-definitions/steam/steammessages_secrets.steamclient";
import type {
  CShader_GetBucketManifest_Request,
  CShader_GetBucketManifest_Response,
  CShader_GetShaderReportingCadence_Response,
  CShader_GetStaleBucket_Request,
  CShader_GetStaleBucket_Response,
  CShader_RegisterShader_Request,
  CShader_RegisterShader_Response,
  CShader_ReportExternalBuild_Request,
  CShader_SendShader_Request,
} from "../protos-definitions/steam/steammessages_shader.steamclient";
import type {
  CSiteLicense_ClientGetAvailableSeats_Request,
  CSiteLicense_ClientGetAvailableSeats_Response,
  CSiteLicense_ClientSeatCheckout_Notification,
  CSiteLicense_ClientSeatCheckout_Request,
  CSiteLicense_InitiateAssociation_Request,
  CSiteLicense_InitiateAssociation_Response,
  CSiteLicense_LCSAssociateUser_Request,
  CSiteLicense_LCSAuthenticate_Request,
  CSiteLicense_LCSAuthenticate_Response,
  CSiteManagerClient_IncomingClient_Request,
  CSiteManagerClient_TrackedPayments_Notification,
} from "../protos-definitions/steam/steammessages_site_license.steamclient";
import type {
  CMsgClientSiteInfo,
  CMsgClientSiteLicenseCheckout,
  CMsgClientSiteLicenseCheckoutResponse,
  CMsgClientSiteLicenseGetAvailableSeats,
  CMsgClientSiteLicenseGetAvailableSeatsResponse,
  CMsgClientSiteLicenseGetContentCacheInfoResponse,
} from "../protos-definitions/steam/steammessages_sitelicenseclient";
import type {
  SiteServerUI_CancelLogin_Response,
  SiteServerUI_ClientStatus_Response,
  SiteServerUI_ContentCacheConfig_Request,
  SiteServerUI_ContentCacheStatus_Response,
  SiteServerUI_GetLanguage_Response,
  SiteServerUI_Login_Request,
  SiteServerUI_Login_Response,
  SiteServerUI_LoginStatus_Response,
  SiteServerUI_Logout_Response,
  SiteServerUI_Quit_Request,
  SiteServerUI_SetLanguage_Request,
  SiteServerUI_Status_Response,
} from "../protos-definitions/steam/steammessages_siteserverui";
import type {
  CSteamTV_AddChatBan_Request,
  CSteamTV_AddChatModerator_Request,
  CSteamTV_AddWordBan_Request,
  CSteamTV_AppCheer_Request,
  CSteamTV_AppCheer_Response,
  CSteamTV_AppCheer_SingleCheerType,
  CSteamTV_BroadcastClipInfo,
  CSteamTV_ChatBan,
  CSteamTV_ChatModerator,
  CSteamTV_CreateBroadcastChannel_Request,
  CSteamTV_CreateBroadcastChannel_Response,
  CSteamTV_FollowBroadcastChannel_Request,
  CSteamTV_FollowBroadcastChannel_Response,
  CSteamTV_Game,
  CSteamTV_GetBroadcastChannelBroadcasters_Request,
  CSteamTV_GetBroadcastChannelBroadcasters_Response,
  CSteamTV_GetBroadcastChannelClips_Request,
  CSteamTV_GetBroadcastChannelClips_Response,
  CSteamTV_GetBroadcastChannelID_Request,
  CSteamTV_GetBroadcastChannelID_Response,
  CSteamTV_GetBroadcastChannelImages_Request,
  CSteamTV_GetBroadcastChannelImages_Response,
  CSteamTV_GetBroadcastChannelInteraction_Request,
  CSteamTV_GetBroadcastChannelInteraction_Response,
  CSteamTV_GetBroadcastChannelLinks_Request,
  CSteamTV_GetBroadcastChannelLinks_Response,
  CSteamTV_GetBroadcastChannelProfile_Request,
  CSteamTV_GetBroadcastChannelProfile_Response,
  CSteamTV_GetBroadcastChannelStatus_Request,
  CSteamTV_GetBroadcastChannelStatus_Response,
  CSteamTV_GetChannels_Request,
  CSteamTV_GetChannels_Response,
  CSteamTV_GetChatBans_Request,
  CSteamTV_GetChatBans_Response,
  CSteamTV_GetChatModerators_Request,
  CSteamTV_GetChatModerators_Response,
  CSteamTV_GetFollowedChannels_Response,
  CSteamTV_GetGames_Request,
  CSteamTV_GetGames_Response,
  CSteamTV_GetHomePageContents_Response,
  CSteamTV_GetMyBroadcastChannels_Response,
  CSteamTV_GetSteamTVUserSettings_Response,
  CSteamTV_GetSubscribedChannels_Response,
  CSteamTV_GetWordBans_Request,
  CSteamTV_GetWordBans_Response,
  CSteamTV_HomePageContentRow,
  CSteamTV_HomePageTemplate_ConveyorBelt,
  CSteamTV_HomePageTemplate_Developer,
  CSteamTV_HomePageTemplate_Event,
  CSteamTV_HomePageTemplate_GameList,
  CSteamTV_HomePageTemplate_QuickExplore,
  CSteamTV_HomePageTemplate_SingleGame,
  CSteamTV_HomePageTemplate_Takeover,
  CSteamTV_HomePageTemplate_WatchParty,
  CSteamTV_JoinChat_Request,
  CSteamTV_JoinChat_Response,
  CSteamTV_ReportBroadcastChannel_Request,
  CSteamTV_Search_Request,
  CSteamTV_Search_Response,
  CSteamTV_SetBroadcastChannelImage_Request,
  CSteamTV_SetBroadcastChannelImage_Response,
  CSteamTV_SetBroadcastChannelLinkRegions_Request,
  CSteamTV_SetBroadcastChannelProfile_Request,
  CSteamTV_SetSteamTVUserSettings_Request,
  CSteamTV_SubscribeBroadcastChannel_Request,
  CSteamTV_SubscribeBroadcastChannel_Response,
  GameListEntry,
  GetBroadcastChannelEntry,
} from "../protos-definitions/steam/steammessages_steamtv.steamclient";
import type {
  CReservationPositionMessage,
  CSteamDeckCompatibility_SetFeedback_Request,
  CSteamDeckCompatibility_ShouldPrompt_Request,
  CSteamDeckCompatibility_ShouldPrompt_Response,
  CStore_DeleteReservationPositionMessage_Request,
  CStore_GetAllReservationPositionMessages_Response,
  CStore_GetDiscoveryQueue_Request,
  CStore_GetDiscoveryQueue_Response,
  CStore_GetDiscoveryQueueSettings_Request,
  CStore_GetDiscoveryQueueSettings_Response,
  CStore_GetDiscoveryQueueSkippedApps_Request,
  CStore_GetDiscoveryQueueSkippedApps_Response,
  CStore_GetGamesFollowed_Request,
  CStore_GetGamesFollowed_Response,
  CStore_GetGamesFollowedCount_Request,
  CStore_GetGamesFollowedCount_Response,
  CStore_GetLocalizedNameForTags_Request,
  CStore_GetLocalizedNameForTags_Response,
  CStore_GetMostPopularTags_Request,
  CStore_GetMostPopularTags_Response,
  CStore_GetRecommendedTagsForUser_Request,
  CStore_GetRecommendedTagsForUser_Response,
  CStore_GetStorePreferences_Request,
  CStore_GetStorePreferences_Response,
  CStore_GetTagList_Request,
  CStore_GetTagList_Response,
  CStore_GetTrendingAppsAmongFriends_Request,
  CStore_GetTrendingAppsAmongFriends_Response,
  CStore_GetUserGameInterestState_Request,
  CStore_GetUserGameInterestState_Response,
  CStore_GetWishlistDemoEmailStatus_Request,
  CStore_GetWishlistDemoEmailStatus_Response,
  CStore_MigratePartnerLinkTracking_Notification,
  CStore_PurchaseReceiptInfo,
  CStore_QueueWishlistDemoEmailToFire_Request,
  CStore_RegisterCDKey_Request,
  CStore_RegisterCDKey_Response,
  CStore_ReportApp_Request,
  CStore_SetReservationPositionMessage_Request,
  CStore_SkipDiscoveryQueueItem_Request,
  CStore_StorePreferencesChanged_Notification,
  CStore_UpdatePackageReservations_Request,
  CStore_UpdatePackageReservations_Response,
  CStore_UserPreferences,
  CStore_UserTagPreferences,
  CStoreDiscoveryQueueSettings,
} from "../protos-definitions/steam/steammessages_store.steamclient";
import type {
  CHardwarePackageDetails,
  CStoreBrowse_GetContentHubConfig_Request,
  CStoreBrowse_GetContentHubConfig_Response,
  CStoreBrowse_GetDLCForApps_Request,
  CStoreBrowse_GetDLCForApps_Response,
  CStoreBrowse_GetDLCForAppsSolr_Request,
  CStoreBrowse_GetDLCForAppsSolr_Response,
  CStoreBrowse_GetHardwareItems_Request,
  CStoreBrowse_GetHardwareItems_Response,
  CStoreBrowse_GetItems_Request,
  CStoreBrowse_GetItems_Response,
  CStoreBrowse_GetPriceStops_Request,
  CStoreBrowse_GetPriceStops_Response,
  CStoreBrowse_GetStoreCategories_Request,
  CStoreBrowse_GetStoreCategories_Response,
  StoreBrowseContext,
  StoreBrowseFilterFailure,
  StoreBrowseItemDataRequest,
  StoreGameRating,
  StoreItem,
  StoreItemID,
} from "../protos-definitions/steam/steammessages_storebrowse.steamclient";
import type {
  CTimedTrial_GetTimeRemaining_Request,
  CTimedTrial_GetTimeRemaining_Response,
  CTimedTrial_RecordPlaytime_Request,
  CTimedTrial_RecordPlaytime_Response,
  CTimedTrial_ResetPlaytime_Request,
  CTimedTrial_ResetPlaytime_Response,
} from "../protos-definitions/steam/steammessages_timedtrial.steamclient";
import type {
  CRemoveAuthenticatorViaChallengeContinue_Replacement_Token,
  CTwoFactor_AddAuthenticator_Request,
  CTwoFactor_AddAuthenticator_Response,
  CTwoFactor_FinalizeAddAuthenticator_Request,
  CTwoFactor_FinalizeAddAuthenticator_Response,
  CTwoFactor_RemoveAuthenticator_Request,
  CTwoFactor_RemoveAuthenticator_Response,
  CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request,
  CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response,
  CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response,
  CTwoFactor_Status_Request,
  CTwoFactor_Status_Response,
  CTwoFactor_Time_Request,
  CTwoFactor_Time_Response,
  CTwoFactor_UpdateTokenVersion_Request,
  CTwoFactor_UsageEvent,
} from "../protos-definitions/steam/steammessages_twofactor.steamclient";
import type {
  CMsgTest_CallClient_Response,
  CMsgTest_MessageToClient_Request,
  CMsgTest_MessageToClient_Response,
  CMsgTest_MessageToServer_Request,
  CMsgTest_MessageToServer_Response,
  CMsgTest_NotifyClient_Notification,
  CMsgTest_NotifyServer_Notification,
  CMsgTest_TestClientCall_Request,
  CMsgTest_TestClientCall_Response,
} from "../protos-definitions/steam/steammessages_unified_test.steamclient";
import type {
  CEmbeddedClient_AuthorizeCurrentDevice_Request,
  CEmbeddedClient_AuthorizeDevice_Response,
  CEmbeddedClient_Token,
  CUserAccount_CancelLicenseForApp_Request,
  CUserAccount_CreateFriendInviteToken_Request,
  CUserAccount_CreateFriendInviteToken_Response,
  CUserAccount_GetAccountLinkStatus_Response,
  CUserAccount_GetAvailableValveDiscountPromotions_Request,
  CUserAccount_GetAvailableValveDiscountPromotions_Response,
  CUserAccount_GetClientWalletDetails_Request,
  CUserAccount_GetFriendInviteTokens_Response,
  CUserAccount_GetUserCountry_Request,
  CUserAccount_GetUserCountry_Response,
  CUserAccount_GetWalletDetails_Response,
  CUserAccount_RedeemFriendInviteToken_Request,
  CUserAccount_RegisterCompatTool_Request,
  CUserAccount_RevokeFriendInviteToken_Request,
  CUserAccount_ViewFriendInviteToken_Request,
  CUserAccount_ViewFriendInviteToken_Response,
} from "../protos-definitions/steam/steammessages_useraccount.steamclient";
import type {
  CFileVerification_SignatureCheck_Request,
  CFileVerification_SignatureCheck_Response,
  CFileVerification_SteamServiceCheck_Request,
  CFileVerification_SteamServiceCheck_Response,
} from "../protos-definitions/steam/steammessages_vac.steamclient";
import type {
  CFovasVideo_ClientGetOPFSettings_Request,
  CFovasVideo_ClientGetOPFSettings_Response,
  CVideo_ClientGetVideoURL_Request,
  CVideo_ClientGetVideoURL_Response,
  CVideo_GetVideoBookmarks_Request,
  CVideo_GetVideoBookmarks_Response,
  CVideo_SetVideoBookmark_Notification,
  CVideo_UnlockedH264_Notification,
  VideoBookmark,
} from "../protos-definitions/steam/steammessages_video.steamclient";
import type {
  CVirtualControllerColor,
  CVirtualControllerConfig,
  CVirtualControllerElement,
  CVirtualControllerGlobalConfig,
  CVirtualControllerLayout,
  CVirtualControllerLayoutPackage,
  CVirtualControllerLayouts,
} from "../protos-definitions/steam/steammessages_virtualcontroller";
import type {
  CWorkshop_GetEULAStatus_Request,
  CWorkshop_GetEULAStatus_Response,
} from "../protos-definitions/steam/steammessages_workshop.steamclient";
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
} from "../protos-definitions/steam/steamnetworkingsockets_messages";
import type {
  CMsgSteamDatagramCertificate,
  CMsgSteamDatagramCertificateRequest,
  CMsgSteamDatagramCertificateSigned,
  CMsgSteamNetworkingIdentityLegacyBinary,
} from "../protos-definitions/steam/steamnetworkingsockets_messages_certs";
import type {
  CMsgSteamSockets_UDP_ChallengeReply,
  CMsgSteamSockets_UDP_ChallengeRequest,
  CMsgSteamSockets_UDP_ConnectionClosed,
  CMsgSteamSockets_UDP_ConnectOK,
  CMsgSteamSockets_UDP_ConnectRequest,
  CMsgSteamSockets_UDP_NoConnection,
  CMsgSteamSockets_UDP_Stats,
} from "../protos-definitions/steam/steamnetworkingsockets_messages_udp";
import type {
  CAchievements_GetInfo_Request,
  CAchievements_GetInfo_Response,
} from "../protos-definitions/steam/webuimessages_achievements";
import type {
  CBluetoothManager_CancelPair_Request,
  CBluetoothManager_Connect_Request,
  CBluetoothManager_Disconnect_Request,
  CBluetoothManager_Forget_Request,
  CBluetoothManager_GetAdapterDetails_Request,
  CBluetoothManager_GetAdapterDetails_Response,
  CBluetoothManager_GetDeviceDetails_Request,
  CBluetoothManager_GetDeviceDetails_Response,
  CBluetoothManager_GetState_Response,
  CBluetoothManager_Pair_Request,
  CBluetoothManager_SetDiscovering_Request,
  CBluetoothManager_SetLoginAdvertising_Request,
  CBluetoothManager_SetTrusted_Request,
  CBluetoothManager_SetWakeAllowed_Request,
  CMsgBluetoothManagerAdapterDetails,
  CMsgBluetoothManagerAdapterInfo,
  CMsgBluetoothManagerDeviceDetails,
  CMsgBluetoothManagerDeviceInfo,
} from "../protos-definitions/steam/webuimessages_bluetooth";
import type {
  CGameNotes_UploadImage_Request,
  CGameNotes_UploadImage_Response,
} from "../protos-definitions/steam/webuimessages_gamenotes";
import type {
  CGameRecording_ClipCreated_Notification,
  CGameRecording_ClipDeleted_Notification,
  CGameRecording_ClipSummary,
  CGameRecording_DeleteClip_Request,
  CGameRecording_DeletePerGameSettings_Request,
  CGameRecording_ExportClip_Request,
  CGameRecording_ExportClip_Settings,
  CGameRecording_ExportClipPreview_Request,
  CGameRecording_ExportClipPreview_Response,
  CGameRecording_ExportProgress_Notification,
  CGameRecording_GetAndTrimPostGameHighlights_Request,
  CGameRecording_GetAndTrimPostGameHighlights_Response,
  CGameRecording_GetAppsWithBackgroundVideo_Response,
  CGameRecording_GetAvailableDiskSpace_Response,
  CGameRecording_GetClips_Request,
  CGameRecording_GetClips_Response,
  CGameRecording_GetEnoughDiskSpace_Response,
  CGameRecording_GetPerGameSettings_Response,
  CGameRecording_GetPlatformCapabilities_Response,
  CGameRecording_GetRecordingSize_Request,
  CGameRecording_GetRecordingSize_Response,
  CGameRecording_GetTags_Request,
  CGameRecording_GetTags_Response,
  CGameRecording_GetThumbnails_Request,
  CGameRecording_GetThumbnails_Response,
  CGameRecording_GetTimelinesForApp_Request,
  CGameRecording_GetTimelinesForApp_Response,
  CGameRecording_GetTimelinesForClip_Request,
  CGameRecording_GetTimelinesForClip_Response,
  CGameRecording_GetTotalDiskSpaceUsage_Request,
  CGameRecording_GetTotalDiskSpaceUsage_Response,
  CGameRecording_ManuallyDeleteRecordingsForApps_Request,
  CGameRecording_OpenOverlayToGamePhase_Notification,
  CGameRecording_OpenOverlayToTimelineEvent_Notification,
  CGameRecording_PerGameSettings,
  CGameRecording_PostGameHighlightsChanged_Notification,
  CGameRecording_QueryPhases_Request,
  CGameRecording_QueryPhases_Response,
  CGameRecording_RecordingSessionChanged_Notification,
  CGameRecording_SaveClip_Request,
  CGameRecording_SaveClip_Response,
  CGameRecording_SetPerGameSettings_Request,
  CGameRecording_StartRecording_Request,
  CGameRecording_StopRecording_Request,
  CGameRecording_StopRecording_Response,
  CGameRecording_SwitchBackgroundRecordingGame_Request,
  CGameRecording_TakeScreenshot_Request,
  CGameRecording_TakeScreenshot_Response,
  CGameRecording_TimelineChanged_Notification,
  CGameRecording_TimelineEntryChanged_Notification,
  CGameRecording_TimelineEntryRemoved_Notification,
  CGameRecording_UploadClipToSteam_Request,
  CGameRecording_UploadClipToSteam_Response,
  CGameRecording_UploadProgress_Notification,
  CGameRecording_UserAddTimelineEntry_Request,
  CGameRecording_UserAddTimelineEntry_Response,
  CGameRecording_UserRemoveTimelineEntry_Request,
  CGameRecording_UserUpdateTimelineEntry_Request,
  CGameRecording_ZipClip_Request,
  CGameRecording_ZipClip_Response,
  CTimelineEntry,
} from "../protos-definitions/steam/webuimessages_gamerecording";
import type {
  CGameRecordingClipFile,
  CGameRecordingFile,
  CGameRecordingPhase,
  CGameRecordingPostGameSummary,
  CGameRecordingTag,
  CGameRecordingTagInstance,
  CGameRecordingTimelineEvent,
  CGameRecordingTimelineMetadata,
  CPhaseAttribute,
  CTimelineTag,
} from "../protos-definitions/steam/webuimessages_gamerecordingfiles";
import type {
  CGamescope_GetState_Response,
  CGamescope_SetBlurParams_Request,
  CGamescope_SetDisplayPowerState_Request,
  CMsgDisplayInfo,
  CMsgGamescopeState,
} from "../protos-definitions/steam/webuimessages_gamescope";
import type {
  CHardwareUpdate_CheckForUpdates_Response,
  CHardwareUpdate_GetState_Response,
  CHardwareUpdate_PrepForUpdate_Request,
  CHardwareUpdate_Update_Request,
  CHardwareUpdate_UpdateProgress_Notification,
  CMsgAvailableHardwareUpdate,
} from "../protos-definitions/steam/webuimessages_hardwareupdate";
import type {
  CLEDManager_GetState_Response,
  CLEDManager_SetBrightness_Request,
  CLEDManager_SetColor_Request,
  CLEDManager_SetEffect_Request,
  CLEDManager_SetEnabled_Request,
  CLEDManager_SetSpeed_Request,
  CMsgLEDColor,
  CMsgLEDManagerDevice,
  CMsgLEDManagerState,
} from "../protos-definitions/steam/webuimessages_leds";
import type {
  CMsgSteamUIBrowserWindow,
  CSharedJSContext_GetDesiredSteamUIWindows_Response,
} from "../protos-definitions/steam/webuimessages_sharedjscontext";
import type {
  CMsgSleepManagerState,
  CSleepManager_GetState_Response,
  CSleepManager_RequestSuspend_Notification,
  CSleepManager_SwitchToPowerState_Request,
} from "../protos-definitions/steam/webuimessages_sleep";
import type {
  CSteamEngine_GetGameIDForPID_Request,
  CSteamEngine_GetGameIDForPID_Response,
  CSteamEngine_GetTextFilterDictionary_Request,
  CSteamEngine_GetTextFilterDictionary_Response,
  CSteamEngine_SearchAppDataCacheByStoreKeywords_Request,
  CSteamEngine_SearchAppDataCacheByStoreKeywords_Response,
  CSteamEngine_SetOverlayEscapeKeyHandling_Notification,
  CSteamEngine_TextFilterDictionaryChanged_Notification,
  CSteamEngine_UpdateTextFilterDictionary_Notification,
} from "../protos-definitions/steam/webuimessages_steamengine";
import type {
  CControllerAccessibilityString,
  CControllerOriginKey,
  ControllerGyroEulerAngles,
  ControllerQuaternion,
  ControllerVector2,
  ControllerVector3,
  CSteamInputService_ControllerAccessibilityStrings_Response,
  CSteamInputService_ControllerAxesStateChange_Notification,
  CSteamInputService_ControllerButtonStateChanged_Notification,
  CSteamInputService_ControllerDisconnected_Notification,
  CSteamInputService_ControllerPairingChanged_Notification,
  CSteamInputService_ControllerPowerMenu_Notification,
  CSteamInputService_ControllerStateFlow_Request,
  CSteamInputService_ForgetDonglePairingBond_Request,
  CSteamInputService_ForgetTritonPairingBond_Request,
  CSteamInputService_GetControllerName_Request,
  CSteamInputService_GetControllerName_Response,
  CSteamInputService_GetDongles_Request,
  CSteamInputService_GetDongles_Response,
  CSteamInputService_GetTritonPairingInfo_Request,
  CSteamInputService_GetTritonPairingInfo_Response,
  CSteamInputService_GyroAccelerometerChanged_Notification,
  CSteamInputService_GyroCalibration_Notification,
  CSteamInputService_GyroQuaternionChanged_Notification,
  CSteamInputService_GyroSoftwareCalibration_Request,
  CSteamInputService_GyroSpeedChanged_Notification,
  CSteamInputService_PairDongleTritonConnected_Request,
  CSteamInputService_PairDongleTritonDocked_Request,
  CSteamInputService_ShouldTritonPairInOobe_Response,
  CSteamInputService_TritonUndocked_Notification,
  CSteamInputService_UnpairedTritonDocked_Notification,
  CSteamInputService_UnpairedTritonPluggedIn_Notification,
  CSteamInputService_WaitInitialControllerStateEnumerated_Response,
} from "../protos-definitions/steam/webuimessages_steaminput";
import type {
  CMsgFactoryResetState,
  CSteamOS_GetUserHasPassword_Response,
  CSteamOS_SetUserPassword_Request,
  CSteamOSManager_FactoryReset_Request,
  CSteamOSManager_GetState_Response,
  CSteamOSManager_IsTelemetryHelperAvailable_Request,
  CSteamOSManager_IsTelemetryHelperAvailable_Response,
  CSteamOSManager_PrepareFactoryImageTest_Request,
  CSteamOSManagerState,
  CSteamOSSLS_GetState_Response,
  CSteamOSSLS_SetEnabled_Request,
  CSteamOSSLS_SetPluginEnabled_Request,
  CSteamOSSLSPlugin,
  CSteamOSSLSState,
} from "../protos-definitions/steam/webuimessages_steamos";
import type {
  CStorageDeviceManager_Adopt_Request,
  CStorageDeviceManager_Eject_Request,
  CStorageDeviceManager_Format_Request,
  CStorageDeviceManager_GetState_Response,
  CStorageDeviceManager_IsServiceAvailable_Response,
  CStorageDeviceManager_Unmount_Request,
  CStorageDeviceManagerBlockDevice,
  CStorageDeviceManagerDrive,
  CStorageDeviceManagerState,
} from "../protos-definitions/steam/webuimessages_storagedevicemanager";
import type { CSystemManager_WriteFile_Request } from "../protos-definitions/steam/webuimessages_systemmanager";
import type { CTransportAuth_Authenticate_Request } from "../protos-definitions/steam/webuimessages_transport";
import type {
  CTransportValidation_AddNumbers_Request,
  CTransportValidation_AddNumbers_Response,
  CTransportValidation_AppendToString_Request,
  CTransportValidation_AppendToString_Response,
  CTransportValidation_CountOrderedBytes_Request,
  CTransportValidation_CountOrderedBytes_Response,
  CTransportValidation_DataRequest_Response,
  CTransportValidation_GetLargeResponse_Request,
  CTransportValidation_GetLargeResponse_Response,
  CTransportValidation_GetLastNotifyNumber_Response,
  CTransportValidation_NotifyCount_Notification,
  CTransportValidation_NotifyLarge_Notification,
  CTransportValidation_NotifyNumber_Notification,
  CTransportValidation_NotifySyntheticEvent_Notification,
  CTransportValidation_NotifyText_Notification,
  CTransportValidation_RequestInvalidBool_Response,
  CTransportValidation_RequestLargeNotification_Request,
  CTransportValidation_ThreadedCount_Request,
  CTransportValidation_TriggerDataRequest_Response,
  CTransportValidation_TriggerSyntheticEvents_Request,
  CTransportValidationClient_AddNumbers_Request,
  CTransportValidationClient_AddNumbers_Response,
} from "../protos-definitions/steam/webuimessages_transportvalidation";
import type {
  CUser_GetSavedHardwareInfo_Response,
  CUser_SaveHardwareInfo_Request,
  CUser_SaveHardwareInfo_Response,
} from "../protos-definitions/steam/webuimessages_user";

export interface SteamProtos {
  CAccountHardware_CompleteSteamControllerRegistration_Request: CAccountHardware_CompleteSteamControllerRegistration_Request;
  CAccountHardware_DeRegisterSteamController_Request: CAccountHardware_DeRegisterSteamController_Request;
  CAccountHardware_GetPersonalizationFile_Request: CAccountHardware_GetPersonalizationFile_Request;
  CAccountHardware_GetPersonalizationFile_Response: CAccountHardware_GetPersonalizationFile_Response;
  CAccountHardware_GetSavedHardwareList_Request: CAccountHardware_GetSavedHardwareList_Request;
  CAccountHardware_GetSavedHardwareList_Response: CAccountHardware_GetSavedHardwareList_Response;
  CAccountHardware_GetSteamDeckComponents_Request: CAccountHardware_GetSteamDeckComponents_Request;
  CAccountHardware_GetSteamDeckComponents_Response: CAccountHardware_GetSteamDeckComponents_Response;
  CAccountHardware_ManageSavedHardware_Request: CAccountHardware_ManageSavedHardware_Request;
  CAccountHardware_QueryAccountsRegisteredToSerial_Accounts: CAccountHardware_QueryAccountsRegisteredToSerial_Accounts;
  CAccountHardware_QueryAccountsRegisteredToSerial_Request: CAccountHardware_QueryAccountsRegisteredToSerial_Request;
  CAccountHardware_QueryAccountsRegisteredToSerial_Response: CAccountHardware_QueryAccountsRegisteredToSerial_Response;
  CAccountHardware_RegisterSteamController_Request: CAccountHardware_RegisterSteamController_Request;
  CAccountHardware_RegisterValveIndexComponent_Request: CAccountHardware_RegisterValveIndexComponent_Request;
  CAccountHardware_SavedHardware_Details: CAccountHardware_SavedHardware_Details;
  CAccountHardware_SaveHardware_Request: CAccountHardware_SaveHardware_Request;
  CAccountHardware_SaveHardware_Response: CAccountHardware_SaveHardware_Response;
  CAccountHardware_SetPersonalizationFile_Request: CAccountHardware_SetPersonalizationFile_Request;
  CAccountHardware_SteamControllerGetConfig_ControllerConfig: CAccountHardware_SteamControllerGetConfig_ControllerConfig;
  CAccountHardware_SteamControllerGetConfig_Request: CAccountHardware_SteamControllerGetConfig_Request;
  CAccountHardware_SteamControllerGetConfig_Response: CAccountHardware_SteamControllerGetConfig_Response;
  CAccountHardware_SteamControllerSetConfig_ControllerConfig: CAccountHardware_SteamControllerSetConfig_ControllerConfig;
  CAccountHardware_SteamControllerSetConfig_Request: CAccountHardware_SteamControllerSetConfig_Request;
  CAccountHardware_UpdateControllerUsageReport_Request: CAccountHardware_UpdateControllerUsageReport_Request;
  CAccountHardware_VRCompatibilityCheck_Request: CAccountHardware_VRCompatibilityCheck_Request;
  CAccountHardware_VRCompatibilityCheck_Response: CAccountHardware_VRCompatibilityCheck_Response;
  CAchievements_GetInfo_Request: CAchievements_GetInfo_Request;
  CAchievements_GetInfo_Response: CAchievements_GetInfo_Response;
  CAppOverview: CAppOverview;
  CAppOverview_Change: CAppOverview_Change;
  CAppOverview_PerClientData: CAppOverview_PerClientData;
  CAppPriority: CAppPriority;
  CAudioFormat: CAudioFormat;
  CAuthentication_AccessToken_GenerateForApp_Request: CAuthentication_AccessToken_GenerateForApp_Request;
  CAuthentication_AccessToken_GenerateForApp_Response: CAuthentication_AccessToken_GenerateForApp_Response;
  CAuthentication_AllowedConfirmation: CAuthentication_AllowedConfirmation;
  CAuthentication_BeginAuthSessionViaCredentials_Request: CAuthentication_BeginAuthSessionViaCredentials_Request;
  CAuthentication_BeginAuthSessionViaCredentials_Response: CAuthentication_BeginAuthSessionViaCredentials_Response;
  CAuthentication_BeginAuthSessionViaQR_Request: CAuthentication_BeginAuthSessionViaQR_Request;
  CAuthentication_BeginAuthSessionViaQR_Response: CAuthentication_BeginAuthSessionViaQR_Response;
  CAuthentication_DeviceDetails: CAuthentication_DeviceDetails;
  CAuthentication_GetAuthSessionInfo_Request: CAuthentication_GetAuthSessionInfo_Request;
  CAuthentication_GetAuthSessionInfo_Response: CAuthentication_GetAuthSessionInfo_Response;
  CAuthentication_GetAuthSessionRiskInfo_Request: CAuthentication_GetAuthSessionRiskInfo_Request;
  CAuthentication_GetAuthSessionRiskInfo_Response: CAuthentication_GetAuthSessionRiskInfo_Response;
  CAuthentication_GetAuthSessionsForAccount_Response: CAuthentication_GetAuthSessionsForAccount_Response;
  CAuthentication_GetPasswordRSAPublicKey_Request: CAuthentication_GetPasswordRSAPublicKey_Request;
  CAuthentication_GetPasswordRSAPublicKey_Response: CAuthentication_GetPasswordRSAPublicKey_Response;
  CAuthentication_NotifyRiskQuizResults_Notification: CAuthentication_NotifyRiskQuizResults_Notification;
  CAuthentication_PollAuthSessionStatus_Request: CAuthentication_PollAuthSessionStatus_Request;
  CAuthentication_PollAuthSessionStatus_Response: CAuthentication_PollAuthSessionStatus_Response;
  CAuthentication_RefreshToken_Enumerate_Request: CAuthentication_RefreshToken_Enumerate_Request;
  CAuthentication_RefreshToken_Enumerate_Response: CAuthentication_RefreshToken_Enumerate_Response;
  CAuthentication_RefreshToken_Revoke_Request: CAuthentication_RefreshToken_Revoke_Request;
  CAuthentication_Token_Revoke_Request: CAuthentication_Token_Revoke_Request;
  CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;
  CAuthenticationRequestMsg: CAuthenticationRequestMsg;
  CAuthenticationResponseMsg: CAuthenticationResponseMsg;
  CAuthenticationSupport_GetTokenHistory_Request: CAuthenticationSupport_GetTokenHistory_Request;
  CAuthenticationSupport_GetTokenHistory_Response: CAuthenticationSupport_GetTokenHistory_Response;
  CAuthenticationSupport_MarkTokenCompromised_Request: CAuthenticationSupport_MarkTokenCompromised_Request;
  CAuthenticationSupport_QueryRefreshTokenByID_Request: CAuthenticationSupport_QueryRefreshTokenByID_Request;
  CAuthenticationSupport_QueryRefreshTokenByID_Response: CAuthenticationSupport_QueryRefreshTokenByID_Response;
  CAuthenticationSupport_QueryRefreshTokensByAccount_Request: CAuthenticationSupport_QueryRefreshTokensByAccount_Request;
  CAuthenticationSupport_QueryRefreshTokensByAccount_Response: CAuthenticationSupport_QueryRefreshTokensByAccount_Response;
  CAuthenticationSupport_RevokeToken_Request: CAuthenticationSupport_RevokeToken_Request;
  CBilling_Address: CBilling_Address;
  CBluetoothManager_CancelPair_Request: CBluetoothManager_CancelPair_Request;
  CBluetoothManager_Connect_Request: CBluetoothManager_Connect_Request;
  CBluetoothManager_Disconnect_Request: CBluetoothManager_Disconnect_Request;
  CBluetoothManager_Forget_Request: CBluetoothManager_Forget_Request;
  CBluetoothManager_GetAdapterDetails_Request: CBluetoothManager_GetAdapterDetails_Request;
  CBluetoothManager_GetAdapterDetails_Response: CBluetoothManager_GetAdapterDetails_Response;
  CBluetoothManager_GetDeviceDetails_Request: CBluetoothManager_GetDeviceDetails_Request;
  CBluetoothManager_GetDeviceDetails_Response: CBluetoothManager_GetDeviceDetails_Response;
  CBluetoothManager_GetState_Response: CBluetoothManager_GetState_Response;
  CBluetoothManager_Pair_Request: CBluetoothManager_Pair_Request;
  CBluetoothManager_SetDiscovering_Request: CBluetoothManager_SetDiscovering_Request;
  CBluetoothManager_SetLoginAdvertising_Request: CBluetoothManager_SetLoginAdvertising_Request;
  CBluetoothManager_SetTrusted_Request: CBluetoothManager_SetTrusted_Request;
  CBluetoothManager_SetWakeAllowed_Request: CBluetoothManager_SetWakeAllowed_Request;
  CBroadcast_BeginBroadcastSession_Request: CBroadcast_BeginBroadcastSession_Request;
  CBroadcast_BeginBroadcastSession_Response: CBroadcast_BeginBroadcastSession_Response;
  CBroadcast_BroadcastChannelLive_Notification: CBroadcast_BroadcastChannelLive_Notification;
  CBroadcast_BroadcastStatus_Notification: CBroadcast_BroadcastStatus_Notification;
  CBroadcast_BroadcastUploadStarted_Notification: CBroadcast_BroadcastUploadStarted_Notification;
  CBroadcast_BroadcastViewerState_Notification: CBroadcast_BroadcastViewerState_Notification;
  CBroadcast_EndBroadcastSession_Request: CBroadcast_EndBroadcastSession_Request;
  CBroadcast_GetBroadcastChatInfo_Request: CBroadcast_GetBroadcastChatInfo_Request;
  CBroadcast_GetBroadcastChatInfo_Response: CBroadcast_GetBroadcastChatInfo_Response;
  CBroadcast_GetBroadcastChatUserNames_Request: CBroadcast_GetBroadcastChatUserNames_Request;
  CBroadcast_GetBroadcastChatUserNames_Response: CBroadcast_GetBroadcastChatUserNames_Response;
  CBroadcast_GetBroadcastStatus_Request: CBroadcast_GetBroadcastStatus_Request;
  CBroadcast_GetBroadcastStatus_Response: CBroadcast_GetBroadcastStatus_Response;
  CBroadcast_GetBroadcastThumbnail_Request: CBroadcast_GetBroadcastThumbnail_Request;
  CBroadcast_GetBroadcastThumbnail_Response: CBroadcast_GetBroadcastThumbnail_Response;
  CBroadcast_GetBroadcastUploadStats_Request: CBroadcast_GetBroadcastUploadStats_Request;
  CBroadcast_GetBroadcastUploadStats_Response: CBroadcast_GetBroadcastUploadStats_Response;
  CBroadcast_GetBroadcastViewerStats_Request: CBroadcast_GetBroadcastViewerStats_Request;
  CBroadcast_GetBroadcastViewerStats_Response: CBroadcast_GetBroadcastViewerStats_Response;
  CBroadcast_GetBuildClipStatus_Request: CBroadcast_GetBuildClipStatus_Request;
  CBroadcast_GetClipDetails_Request: CBroadcast_GetClipDetails_Request;
  CBroadcast_GetClipDetails_Response: CBroadcast_GetClipDetails_Response;
  CBroadcast_GetRTMPInfo_Request: CBroadcast_GetRTMPInfo_Request;
  CBroadcast_GetRTMPInfo_Response: CBroadcast_GetRTMPInfo_Response;
  CBroadcast_HeartbeatBroadcast_Notification: CBroadcast_HeartbeatBroadcast_Notification;
  CBroadcast_InviteToBroadcast_Request: CBroadcast_InviteToBroadcast_Request;
  CBroadcast_InviteToBroadcast_Response: CBroadcast_InviteToBroadcast_Response;
  CBroadcast_MuteBroadcastChatUser_Request: CBroadcast_MuteBroadcastChatUser_Request;
  CBroadcast_NotifyBroadcastSessionHeartbeat_Notification: CBroadcast_NotifyBroadcastSessionHeartbeat_Notification;
  CBroadcast_NotifyBroadcastUploadStop_Notification: CBroadcast_NotifyBroadcastUploadStop_Notification;
  CBroadcast_PostChatMessage_Request: CBroadcast_PostChatMessage_Request;
  CBroadcast_PostChatMessage_Response: CBroadcast_PostChatMessage_Response;
  CBroadcast_RemoveUserChatText_Request: CBroadcast_RemoveUserChatText_Request;
  CBroadcast_SendBroadcastStateToServer_Request: CBroadcast_SendBroadcastStateToServer_Request;
  CBroadcast_SendThumbnailToRelay_Notification: CBroadcast_SendThumbnailToRelay_Notification;
  CBroadcast_SessionClosed_Notification: CBroadcast_SessionClosed_Notification;
  CBroadcast_SetClipDetails_Request: CBroadcast_SetClipDetails_Request;
  CBroadcast_SetRTMPInfo_Request: CBroadcast_SetRTMPInfo_Request;
  CBroadcast_StartBroadcastUpload_Request: CBroadcast_StartBroadcastUpload_Request;
  CBroadcast_StartBroadcastUpload_Response: CBroadcast_StartBroadcastUpload_Response;
  CBroadcast_StartBuildClip_Request: CBroadcast_StartBuildClip_Request;
  CBroadcast_StartBuildClip_Response: CBroadcast_StartBuildClip_Response;
  CBroadcast_StopBroadcastUpload_Notification: CBroadcast_StopBroadcastUpload_Notification;
  CBroadcast_StopWatchingBroadcast_Notification: CBroadcast_StopWatchingBroadcast_Notification;
  CBroadcast_UpdateChatMessageFlair_Request: CBroadcast_UpdateChatMessageFlair_Request;
  CBroadcast_UpdateChatMessageFlair_Response: CBroadcast_UpdateChatMessageFlair_Response;
  CBroadcast_ViewerBroadcastInvite_Notification: CBroadcast_ViewerBroadcastInvite_Notification;
  CBroadcast_WaitingBroadcastViewer_Notification: CBroadcast_WaitingBroadcastViewer_Notification;
  CBroadcast_WatchBroadcast_Request: CBroadcast_WatchBroadcast_Request;
  CBroadcast_WatchBroadcast_Response: CBroadcast_WatchBroadcast_Response;
  CBroadcast_WebRTC_Candidate: CBroadcast_WebRTC_Candidate;
  CBroadcast_WebRTCAddHostCandidate_Request: CBroadcast_WebRTCAddHostCandidate_Request;
  CBroadcast_WebRTCAddViewerCandidate_Notification: CBroadcast_WebRTCAddViewerCandidate_Notification;
  CBroadcast_WebRTCAddViewerCandidate_Request: CBroadcast_WebRTCAddViewerCandidate_Request;
  CBroadcast_WebRTCGetHostCandidates_Request: CBroadcast_WebRTCGetHostCandidates_Request;
  CBroadcast_WebRTCGetHostCandidates_Response: CBroadcast_WebRTCGetHostCandidates_Response;
  CBroadcast_WebRTCHaveTURNServer_Notification: CBroadcast_WebRTCHaveTURNServer_Notification;
  CBroadcast_WebRTCLookupTURNServer_Request: CBroadcast_WebRTCLookupTURNServer_Request;
  CBroadcast_WebRTCLookupTURNServer_Response: CBroadcast_WebRTCLookupTURNServer_Response;
  CBroadcast_WebRTCNeedTURNServer_Notification: CBroadcast_WebRTCNeedTURNServer_Notification;
  CBroadcast_WebRTCSetAnswer_Notification: CBroadcast_WebRTCSetAnswer_Notification;
  CBroadcast_WebRTCSetAnswer_Request: CBroadcast_WebRTCSetAnswer_Request;
  CBroadcast_WebRTCStart_Notification: CBroadcast_WebRTCStart_Notification;
  CBroadcast_WebRTCStartResult_Request: CBroadcast_WebRTCStartResult_Request;
  CBroadcast_WebRTCStopped_Request: CBroadcast_WebRTCStopped_Request;
  CCDDBAppDetailCommon: CCDDBAppDetailCommon;
  CChatMentions: CChatMentions;
  CChatPartyBeacon: CChatPartyBeacon;
  CChatRole: CChatRole;
  CChatRoleActions: CChatRoleActions;
  CChatRoom_AckChatMessage_Notification: CChatRoom_AckChatMessage_Notification;
  CChatRoom_AddRoleToUser_Request: CChatRoom_AddRoleToUser_Request;
  CChatRoom_ChatMessageModified_Notification: CChatRoom_ChatMessageModified_Notification;
  CChatRoom_ChatRoomGroupRoomsChange_Notification: CChatRoom_ChatRoomGroupRoomsChange_Notification;
  CChatRoom_ChatRoomHeaderState_Notification: CChatRoom_ChatRoomHeaderState_Notification;
  CChatRoom_CreateChatRoom_Request: CChatRoom_CreateChatRoom_Request;
  CChatRoom_CreateChatRoom_Response: CChatRoom_CreateChatRoom_Response;
  CChatRoom_CreateChatRoomGroup_Request: CChatRoom_CreateChatRoomGroup_Request;
  CChatRoom_CreateChatRoomGroup_Response: CChatRoom_CreateChatRoomGroup_Response;
  CChatRoom_CreateInviteLink_Request: CChatRoom_CreateInviteLink_Request;
  CChatRoom_CreateInviteLink_Response: CChatRoom_CreateInviteLink_Response;
  CChatRoom_CreateRole_Request: CChatRoom_CreateRole_Request;
  CChatRoom_CreateRole_Response: CChatRoom_CreateRole_Response;
  CChatRoom_DeleteChatMessages_Request: CChatRoom_DeleteChatMessages_Request;
  CChatRoom_DeleteChatRoom_Request: CChatRoom_DeleteChatRoom_Request;
  CChatRoom_DeleteInviteLink_Request: CChatRoom_DeleteInviteLink_Request;
  CChatRoom_DeleteRole_Request: CChatRoom_DeleteRole_Request;
  CChatRoom_DeleteRoleFromUser_Request: CChatRoom_DeleteRoleFromUser_Request;
  CChatRoom_EndMiniGameForChatRoomGroup_Request: CChatRoom_EndMiniGameForChatRoomGroup_Request;
  CChatRoom_GetBanList_Request: CChatRoom_GetBanList_Request;
  CChatRoom_GetBanList_Response: CChatRoom_GetBanList_Response;
  CChatRoom_GetChatRoomGroupState_Request: CChatRoom_GetChatRoomGroupState_Request;
  CChatRoom_GetChatRoomGroupState_Response: CChatRoom_GetChatRoomGroupState_Response;
  CChatRoom_GetChatRoomGroupSummary_Response: CChatRoom_GetChatRoomGroupSummary_Response;
  CChatRoom_GetInviteInfo_Request: CChatRoom_GetInviteInfo_Request;
  CChatRoom_GetInviteInfo_Response: CChatRoom_GetInviteInfo_Response;
  CChatRoom_GetInviteLinkInfo_Request: CChatRoom_GetInviteLinkInfo_Request;
  CChatRoom_GetInviteLinkInfo_Response: CChatRoom_GetInviteLinkInfo_Response;
  CChatRoom_GetInviteLinksForGroup_Request: CChatRoom_GetInviteLinksForGroup_Request;
  CChatRoom_GetInviteLinksForGroup_Response: CChatRoom_GetInviteLinksForGroup_Response;
  CChatRoom_GetInviteList_Request: CChatRoom_GetInviteList_Request;
  CChatRoom_GetInviteList_Response: CChatRoom_GetInviteList_Response;
  CChatRoom_GetMessageHistory_Request: CChatRoom_GetMessageHistory_Request;
  CChatRoom_GetMessageHistory_Response: CChatRoom_GetMessageHistory_Response;
  CChatRoom_GetMessageReactionReactors_Request: CChatRoom_GetMessageReactionReactors_Request;
  CChatRoom_GetMessageReactionReactors_Response: CChatRoom_GetMessageReactionReactors_Response;
  CChatRoom_GetMyChatRoomGroups_Response: CChatRoom_GetMyChatRoomGroups_Response;
  CChatRoom_GetRoleActions_Request: CChatRoom_GetRoleActions_Request;
  CChatRoom_GetRoleActions_Response: CChatRoom_GetRoleActions_Response;
  CChatRoom_GetRoles_Request: CChatRoom_GetRoles_Request;
  CChatRoom_GetRoles_Response: CChatRoom_GetRoles_Response;
  CChatRoom_GetRolesForUser_Request: CChatRoom_GetRolesForUser_Request;
  CChatRoom_GetRolesForUser_Response: CChatRoom_GetRolesForUser_Response;
  CChatRoom_IncomingChatMessage_Notification: CChatRoom_IncomingChatMessage_Notification;
  CChatRoom_InviteFriendToChatRoomGroup_Request: CChatRoom_InviteFriendToChatRoomGroup_Request;
  CChatRoom_JoinChatRoomGroup_Request: CChatRoom_JoinChatRoomGroup_Request;
  CChatRoom_JoinChatRoomGroup_Response: CChatRoom_JoinChatRoomGroup_Response;
  CChatRoom_JoinMiniGameForChatRoomGroup_Request: CChatRoom_JoinMiniGameForChatRoomGroup_Request;
  CChatRoom_JoinMiniGameForChatRoomGroup_Response: CChatRoom_JoinMiniGameForChatRoomGroup_Response;
  CChatRoom_JoinVoiceChat_Request: CChatRoom_JoinVoiceChat_Request;
  CChatRoom_JoinVoiceChat_Response: CChatRoom_JoinVoiceChat_Response;
  CChatRoom_KickUser_Request: CChatRoom_KickUser_Request;
  CChatRoom_LeaveChatRoomGroup_Request: CChatRoom_LeaveChatRoomGroup_Request;
  CChatRoom_LeaveVoiceChat_Request: CChatRoom_LeaveVoiceChat_Request;
  CChatRoom_MemberStateChange_Notification: CChatRoom_MemberStateChange_Notification;
  CChatRoom_MessageReaction_Notification: CChatRoom_MessageReaction_Notification;
  CChatRoom_MuteUser_Request: CChatRoom_MuteUser_Request;
  CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification: CChatRoom_NotifyShouldRejoinChatRoomVoiceChat_Notification;
  CChatRoom_RenameChatRoom_Request: CChatRoom_RenameChatRoom_Request;
  CChatRoom_RenameChatRoomGroup_Request: CChatRoom_RenameChatRoomGroup_Request;
  CChatRoom_RenameChatRoomGroup_Response: CChatRoom_RenameChatRoomGroup_Response;
  CChatRoom_RenameRole_Request: CChatRoom_RenameRole_Request;
  CChatRoom_ReorderChatRoom_Request: CChatRoom_ReorderChatRoom_Request;
  CChatRoom_ReorderRole_Request: CChatRoom_ReorderRole_Request;
  CChatRoom_ReplaceRoleActions_Request: CChatRoom_ReplaceRoleActions_Request;
  CChatRoom_ReportMessage_Request: CChatRoom_ReportMessage_Request;
  CChatRoom_ResolveReport_Request: CChatRoom_ResolveReport_Request;
  CChatRoom_RevokeInvite_Request: CChatRoom_RevokeInvite_Request;
  CChatRoom_SaveChatRoomGroup_Request: CChatRoom_SaveChatRoomGroup_Request;
  CChatRoom_SearchMembers_Request: CChatRoom_SearchMembers_Request;
  CChatRoom_SearchMembers_Response: CChatRoom_SearchMembers_Response;
  CChatRoom_SendChatMessage_Request: CChatRoom_SendChatMessage_Request;
  CChatRoom_SendChatMessage_Response: CChatRoom_SendChatMessage_Response;
  CChatRoom_SetAppChatRoomGroupForceActive_Request: CChatRoom_SetAppChatRoomGroupForceActive_Request;
  CChatRoom_SetAppChatRoomGroupForceActive_Response: CChatRoom_SetAppChatRoomGroupForceActive_Response;
  CChatRoom_SetAppChatRoomGroupStopForceActive_Notification: CChatRoom_SetAppChatRoomGroupStopForceActive_Notification;
  CChatRoom_SetChatRoomGroupAvatar_Request: CChatRoom_SetChatRoomGroupAvatar_Request;
  CChatRoom_SetChatRoomGroupTagline_Request: CChatRoom_SetChatRoomGroupTagline_Request;
  CChatRoom_SetChatRoomGroupWatchingBroadcast_Request: CChatRoom_SetChatRoomGroupWatchingBroadcast_Request;
  CChatRoom_SetSessionActiveChatRoomGroups_Request: CChatRoom_SetSessionActiveChatRoomGroups_Request;
  CChatRoom_SetSessionActiveChatRoomGroups_Response: CChatRoom_SetSessionActiveChatRoomGroups_Response;
  CChatRoom_SetUserBanState_Request: CChatRoom_SetUserBanState_Request;
  CChatRoom_SetUserChatGroupPreferences_Request: CChatRoom_SetUserChatGroupPreferences_Request;
  CChatRoom_UpdateMemberListView_Notification: CChatRoom_UpdateMemberListView_Notification;
  CChatRoom_UpdateMessageReaction_Request: CChatRoom_UpdateMessageReaction_Request;
  CChatRoom_UpdateMessageReaction_Response: CChatRoom_UpdateMessageReaction_Response;
  CChatRoomClient_MemberListViewUpdated_Notification: CChatRoomClient_MemberListViewUpdated_Notification;
  CChatRoomGroupHeaderState: CChatRoomGroupHeaderState;
  CChatRoomGroupInvite: CChatRoomGroupInvite;
  CChatRoomGroupState: CChatRoomGroupState;
  CChatRoomMember: CChatRoomMember;
  CChatRoomMemberListView: CChatRoomMemberListView;
  CChatRoomMemberSummaryCounts: CChatRoomMemberSummaryCounts;
  CChatRoomState: CChatRoomState;
  CChatRoomSummaryPair: CChatRoomSummaryPair;
  CChatUsability_ClientUsabilityMetrics_Notification: CChatUsability_ClientUsabilityMetrics_Notification;
  CChatUsability_RequestClientUsabilityMetrics_Notification: CChatUsability_RequestClientUsabilityMetrics_Notification;
  CClanChatRooms_GetClanChatRoomInfo_Request: CClanChatRooms_GetClanChatRoomInfo_Request;
  CClanChatRooms_GetClanChatRoomInfo_Response: CClanChatRooms_GetClanChatRoomInfo_Response;
  CClanChatRooms_SetClanChatRoomPrivate_Request: CClanChatRooms_SetClanChatRoomPrivate_Request;
  CClanChatRooms_SetClanChatRoomPrivate_Response: CClanChatRooms_SetClanChatRoomPrivate_Response;
  CClanEventData: CClanEventData;
  CClanEventUserNewsTuple: CClanEventUserNewsTuple;
  CClanMatchEventByRange: CClanMatchEventByRange;
  CClientHandshakeMsg: CClientHandshakeMsg;
  CClientMetrics_AppInterfaceCreation: CClientMetrics_AppInterfaceCreation;
  CClientMetrics_AppInterfaceMethodCounts: CClientMetrics_AppInterfaceMethodCounts;
  CClientMetrics_AppInterfaceStats_Notification: CClientMetrics_AppInterfaceStats_Notification;
  CClientMetrics_ClientBootstrap_Notification: CClientMetrics_ClientBootstrap_Notification;
  CClientMetrics_ClientBootstrap_RequestInfo: CClientMetrics_ClientBootstrap_RequestInfo;
  CClientMetrics_ClientBootstrap_Summary: CClientMetrics_ClientBootstrap_Summary;
  CClientMetrics_ClipRange_Notification: CClientMetrics_ClipRange_Notification;
  CClientMetrics_ClipShare_Notification: CClientMetrics_ClipShare_Notification;
  CClientMetrics_CloudAppSyncStats_Notification: CClientMetrics_CloudAppSyncStats_Notification;
  CClientMetrics_ContentDownloadResponse_Counts: CClientMetrics_ContentDownloadResponse_Counts;
  CClientMetrics_ContentDownloadResponse_Counts_Notification: CClientMetrics_ContentDownloadResponse_Counts_Notification;
  CClientMetrics_ContentDownloadResponse_HostCounts: CClientMetrics_ContentDownloadResponse_HostCounts;
  CClientMetrics_ContentDownloadResponse_Hosts: CClientMetrics_ContentDownloadResponse_Hosts;
  CClientMetrics_ContentValidation_Notification: CClientMetrics_ContentValidation_Notification;
  CClientMetrics_DownloadRates_Notification: CClientMetrics_DownloadRates_Notification;
  CClientMetrics_EndGameRecording_Notification: CClientMetrics_EndGameRecording_Notification;
  CClientMetrics_GamePerformance_Notification: CClientMetrics_GamePerformance_Notification;
  CClientMetrics_IPv6Connectivity_Notification: CClientMetrics_IPv6Connectivity_Notification;
  CClientMetrics_IPv6Connectivity_Result: CClientMetrics_IPv6Connectivity_Result;
  CClientMetrics_ReportAccessibilitySettings_Notification: CClientMetrics_ReportAccessibilitySettings_Notification;
  CClientMetrics_ReportClientArgs_Notification: CClientMetrics_ReportClientArgs_Notification;
  CClientMetrics_ReportClientError_Notification: CClientMetrics_ReportClientError_Notification;
  CClientMetrics_ReportLinuxStats_Notification: CClientMetrics_ReportLinuxStats_Notification;
  CClientMetrics_ReportReactUsage_Notification: CClientMetrics_ReportReactUsage_Notification;
  CClientMetrics_SteamPipeWorkStats_Notification: CClientMetrics_SteamPipeWorkStats_Notification;
  CClientMetrics_SteamPipeWorkStats_Operation: CClientMetrics_SteamPipeWorkStats_Operation;
  CClientNotificationAchievement: CClientNotificationAchievement;
  CClientNotificationBatteryTemperature: CClientNotificationBatteryTemperature;
  CClientNotificationBroadcastAvailableToWatch: CClientNotificationBroadcastAvailableToWatch;
  CClientNotificationCannotReadControllerGuideButton: CClientNotificationCannotReadControllerGuideButton;
  CClientNotificationCloudSyncConflict: CClientNotificationCloudSyncConflict;
  CClientNotificationCloudSyncFailure: CClientNotificationCloudSyncFailure;
  CClientNotificationDownloadCompleted: CClientNotificationDownloadCompleted;
  CClientNotificationFamilySharingDeviceAuthorizationChanged: CClientNotificationFamilySharingDeviceAuthorizationChanged;
  CClientNotificationFamilySharingLibraryAvailable: CClientNotificationFamilySharingLibraryAvailable;
  CClientNotificationFamilySharingStopPlaying: CClientNotificationFamilySharingStopPlaying;
  CClientNotificationFriendInGame: CClientNotificationFriendInGame;
  CClientNotificationFriendInvite: CClientNotificationFriendInvite;
  CClientNotificationFriendInviteRollup: CClientNotificationFriendInviteRollup;
  CClientNotificationFriendMessage: CClientNotificationFriendMessage;
  CClientNotificationFriendOnline: CClientNotificationFriendOnline;
  CClientNotificationGameRecordingError: CClientNotificationGameRecordingError;
  CClientNotificationGameRecordingInstantClip: CClientNotificationGameRecordingInstantClip;
  CClientNotificationGameRecordingStart: CClientNotificationGameRecordingStart;
  CClientNotificationGameRecordingStop: CClientNotificationGameRecordingStop;
  CClientNotificationGameRecordingUserMarkerAdded: CClientNotificationGameRecordingUserMarkerAdded;
  CClientNotificationGiftReceived: CClientNotificationGiftReceived;
  CClientNotificationGroupChatMessage: CClientNotificationGroupChatMessage;
  CClientNotificationHardwareUpdateAvailable: CClientNotificationHardwareUpdateAvailable;
  CClientNotificationIncomingVoiceChat: CClientNotificationIncomingVoiceChat;
  CClientNotificationItemAnnouncement: CClientNotificationItemAnnouncement;
  CClientNotificationLowBattery: CClientNotificationLowBattery;
  CClientNotificationLowDiskSpace: CClientNotificationLowDiskSpace;
  CClientNotificationPeerContentUpload: CClientNotificationPeerContentUpload;
  CClientNotificationPlaytimeWarning: CClientNotificationPlaytimeWarning;
  CClientNotificationRemoteClientConnection: CClientNotificationRemoteClientConnection;
  CClientNotificationRemoteClientStartStream: CClientNotificationRemoteClientStartStream;
  CClientNotificationScreenshot: CClientNotificationScreenshot;
  CClientNotificationSteamInputActionSetChanged: CClientNotificationSteamInputActionSetChanged;
  CClientNotificationStreamingClientConnection: CClientNotificationStreamingClientConnection;
  CClientNotificationSystemUpdate: CClientNotificationSystemUpdate;
  CClientNotificationTimedTrialRemaining: CClientNotificationTimedTrialRemaining;
  CCloud_AppCloudStateChange_Notification: CCloud_AppCloudStateChange_Notification;
  CCloud_AppExitSyncDone_Notification: CCloud_AppExitSyncDone_Notification;
  CCloud_AppFileInfo: CCloud_AppFileInfo;
  CCloud_AppLaunchIntent_Request: CCloud_AppLaunchIntent_Request;
  CCloud_AppLaunchIntent_Response: CCloud_AppLaunchIntent_Response;
  CCloud_AppSessionResume_Request: CCloud_AppSessionResume_Request;
  CCloud_AppSessionSuspend_Request: CCloud_AppSessionSuspend_Request;
  CCloud_BeginAppUploadBatch_Request: CCloud_BeginAppUploadBatch_Request;
  CCloud_BeginAppUploadBatch_Response: CCloud_BeginAppUploadBatch_Response;
  CCloud_BeginHTTPUpload_Request: CCloud_BeginHTTPUpload_Request;
  CCloud_BeginHTTPUpload_Response: CCloud_BeginHTTPUpload_Response;
  CCloud_BeginUGCUpload_Request: CCloud_BeginUGCUpload_Request;
  CCloud_BeginUGCUpload_Response: CCloud_BeginUGCUpload_Response;
  CCloud_CDNReport_Notification: CCloud_CDNReport_Notification;
  CCloud_ClientBeginFileUpload_Request: CCloud_ClientBeginFileUpload_Request;
  CCloud_ClientBeginFileUpload_Response: CCloud_ClientBeginFileUpload_Response;
  CCloud_ClientCommitFileUpload_Request: CCloud_ClientCommitFileUpload_Request;
  CCloud_ClientCommitFileUpload_Response: CCloud_ClientCommitFileUpload_Response;
  CCloud_ClientConflictResolution_Notification: CCloud_ClientConflictResolution_Notification;
  CCloud_ClientDeleteFile_Request: CCloud_ClientDeleteFile_Request;
  CCloud_ClientFileDownload_Request: CCloud_ClientFileDownload_Request;
  CCloud_ClientFileDownload_Response: CCloud_ClientFileDownload_Response;
  CCloud_ClientGetAppQuotaUsage_Request: CCloud_ClientGetAppQuotaUsage_Request;
  CCloud_ClientGetAppQuotaUsage_Response: CCloud_ClientGetAppQuotaUsage_Response;
  CCloud_ClientLogUploadCheck_Notification: CCloud_ClientLogUploadCheck_Notification;
  CCloud_ClientLogUploadComplete_Notification: CCloud_ClientLogUploadComplete_Notification;
  CCloud_ClientLogUploadRequest_Notification: CCloud_ClientLogUploadRequest_Notification;
  CCloud_CommitHTTPUpload_Request: CCloud_CommitHTTPUpload_Request;
  CCloud_CommitHTTPUpload_Response: CCloud_CommitHTTPUpload_Response;
  CCloud_CommitUGCUpload_Request: CCloud_CommitUGCUpload_Request;
  CCloud_CommitUGCUpload_Response: CCloud_CommitUGCUpload_Response;
  CCloud_CompleteAppUploadBatch_Notification: CCloud_CompleteAppUploadBatch_Notification;
  CCloud_CompleteAppUploadBatch_Request: CCloud_CompleteAppUploadBatch_Request;
  CCloud_Delete_Request: CCloud_Delete_Request;
  CCloud_EnumerateUserFiles_Request: CCloud_EnumerateUserFiles_Request;
  CCloud_EnumerateUserFiles_Response: CCloud_EnumerateUserFiles_Response;
  CCloud_ExternalStorageTransferReport_Notification: CCloud_ExternalStorageTransferReport_Notification;
  CCloud_GetAppFileChangelist_Request: CCloud_GetAppFileChangelist_Request;
  CCloud_GetAppFileChangelist_Response: CCloud_GetAppFileChangelist_Response;
  CCloud_GetClientEncryptionKey_Response: CCloud_GetClientEncryptionKey_Response;
  CCloud_GetFileDetails_Request: CCloud_GetFileDetails_Request;
  CCloud_GetFileDetails_Response: CCloud_GetFileDetails_Response;
  CCloud_GetSingleFileInfo_Request: CCloud_GetSingleFileInfo_Request;
  CCloud_GetSingleFileInfo_Response: CCloud_GetSingleFileInfo_Response;
  CCloud_PendingRemoteOperation: CCloud_PendingRemoteOperation;
  CCloud_ShareFile_Request: CCloud_ShareFile_Request;
  CCloud_ShareFile_Response: CCloud_ShareFile_Response;
  CCloud_UserFile: CCloud_UserFile;
  CCloudGaming_CreateNonce_Request: CCloudGaming_CreateNonce_Request;
  CCloudGaming_CreateNonce_Response: CCloudGaming_CreateNonce_Response;
  CCloudGaming_GetTimeRemaining_Request: CCloudGaming_GetTimeRemaining_Request;
  CCloudGaming_GetTimeRemaining_Response: CCloudGaming_GetTimeRemaining_Response;
  CCloudGaming_TimeRemaining: CCloudGaming_TimeRemaining;
  CCMRemoteClient_ClientMessage: CCMRemoteClient_ClientMessage;
  CCMRemoteClient_ServerMessage: CCMRemoteClient_ServerMessage;
  CCommunity_ClanAnnouncementInfo: CCommunity_ClanAnnouncementInfo;
  CCommunity_ClanLocGroupImage: CCommunity_ClanLocGroupImage;
  CCommunity_ClearSinglePartnerEventsAppPriority_Request: CCommunity_ClearSinglePartnerEventsAppPriority_Request;
  CCommunity_Comment: CCommunity_Comment;
  CCommunity_DeleteCommentFromThread_Request: CCommunity_DeleteCommentFromThread_Request;
  CCommunity_FetchTranslationFromCrowdIn_Request: CCommunity_FetchTranslationFromCrowdIn_Request;
  CCommunity_GetAppRichPresenceLocalization_Request: CCommunity_GetAppRichPresenceLocalization_Request;
  CCommunity_GetAppRichPresenceLocalization_Response: CCommunity_GetAppRichPresenceLocalization_Response;
  CCommunity_GetApps_Request: CCommunity_GetApps_Request;
  CCommunity_GetApps_Response: CCommunity_GetApps_Response;
  CCommunity_GetAvatarHistory_Request: CCommunity_GetAvatarHistory_Request;
  CCommunity_GetAvatarHistory_Response: CCommunity_GetAvatarHistory_Response;
  CCommunity_GetBestEventsForUser_Request: CCommunity_GetBestEventsForUser_Request;
  CCommunity_GetBestEventsForUser_Response: CCommunity_GetBestEventsForUser_Response;
  CCommunity_GetClanAnnouncementVoteForUser_Request: CCommunity_GetClanAnnouncementVoteForUser_Request;
  CCommunity_GetClanAnnouncementVoteForUser_Response: CCommunity_GetClanAnnouncementVoteForUser_Response;
  CCommunity_GetClanCrowdInMetadata_Request: CCommunity_GetClanCrowdInMetadata_Request;
  CCommunity_GetClanCrowdInMetadata_Response: CCommunity_GetClanCrowdInMetadata_Response;
  CCommunity_GetClanEventCrowdInMetadata_Request: CCommunity_GetClanEventCrowdInMetadata_Request;
  CCommunity_GetClanEventCrowdInMetadata_Response: CCommunity_GetClanEventCrowdInMetadata_Response;
  CCommunity_GetClanLocGroupImages_Request: CCommunity_GetClanLocGroupImages_Request;
  CCommunity_GetClanLocGroupImages_Response: CCommunity_GetClanLocGroupImages_Response;
  CCommunity_GetCommentThread_Request: CCommunity_GetCommentThread_Request;
  CCommunity_GetCommentThread_Response: CCommunity_GetCommentThread_Response;
  CCommunity_GetCommentThreadRatings_Request: CCommunity_GetCommentThreadRatings_Request;
  CCommunity_GetCommentThreadRatings_Response: CCommunity_GetCommentThreadRatings_Response;
  CCommunity_GetLinkFilterHashes_Request: CCommunity_GetLinkFilterHashes_Request;
  CCommunity_GetLinkFilterHashes_Response: CCommunity_GetLinkFilterHashes_Response;
  CCommunity_GetLinkFilterHashPrefixes_Request: CCommunity_GetLinkFilterHashPrefixes_Request;
  CCommunity_GetLinkFilterHashPrefixes_Response: CCommunity_GetLinkFilterHashPrefixes_Response;
  CCommunity_GetLinkFilterListVersion_Request: CCommunity_GetLinkFilterListVersion_Request;
  CCommunity_GetLinkFilterListVersion_Response: CCommunity_GetLinkFilterListVersion_Response;
  CCommunity_GetUserPartnerEventNews_Request: CCommunity_GetUserPartnerEventNews_Request;
  CCommunity_GetUserPartnerEventNews_Response: CCommunity_GetUserPartnerEventNews_Response;
  CCommunity_GetUserPartnerEventsAppPriorities_Response: CCommunity_GetUserPartnerEventsAppPriorities_Response;
  CCommunity_GetUserPartnerEventViewStatus_Request: CCommunity_GetUserPartnerEventViewStatus_Request;
  CCommunity_GetUserPartnerEventViewStatus_Response: CCommunity_GetUserPartnerEventViewStatus_Response;
  CCommunity_HideAndReportComment_Request: CCommunity_HideAndReportComment_Request;
  CCommunity_MarkPartnerEventsForUser_Request: CCommunity_MarkPartnerEventsForUser_Request;
  CCommunity_PartnerEventResult: CCommunity_PartnerEventResult;
  CCommunity_PartnerEventsAppPriority: CCommunity_PartnerEventsAppPriority;
  CCommunity_PartnerEventsShowLessForApp_Request: CCommunity_PartnerEventsShowLessForApp_Request;
  CCommunity_PartnerEventsShowMoreForApp_Request: CCommunity_PartnerEventsShowMoreForApp_Request;
  CCommunity_PostCommentToThread_Request: CCommunity_PostCommentToThread_Request;
  CCommunity_PostCommentToThread_Response: CCommunity_PostCommentToThread_Response;
  CCommunity_RateClanAnnouncement_Request: CCommunity_RateClanAnnouncement_Request;
  CCommunity_RateCommentThread_Request: CCommunity_RateCommentThread_Request;
  CCommunity_RateCommentThread_Response: CCommunity_RateCommentThread_Response;
  CCommunity_SetRecommendationBotReviewStatus_Request: CCommunity_SetRecommendationBotReviewStatus_Request;
  CCommunity_VerifyClanMembership_Request: CCommunity_VerifyClanMembership_Request;
  CCommunity_VerifyClanMembership_Response: CCommunity_VerifyClanMembership_Response;
  CContentBuilder_CommitAppBuild_Request: CContentBuilder_CommitAppBuild_Request;
  CContentBuilder_CommitAppBuild_Response: CContentBuilder_CommitAppBuild_Response;
  CContentBuilder_FinishDepotUpload_Request: CContentBuilder_FinishDepotUpload_Request;
  CContentBuilder_FinishDepotUpload_Response: CContentBuilder_FinishDepotUpload_Response;
  CContentBuilder_GetMissingDepotChunks_Request: CContentBuilder_GetMissingDepotChunks_Request;
  CContentBuilder_GetMissingDepotChunks_Response: CContentBuilder_GetMissingDepotChunks_Response;
  CContentBuilder_InitDepotBuild_Request: CContentBuilder_InitDepotBuild_Request;
  CContentBuilder_InitDepotBuild_Response: CContentBuilder_InitDepotBuild_Response;
  CContentBuilder_SignInstallScript_Request: CContentBuilder_SignInstallScript_Request;
  CContentBuilder_SignInstallScript_Response: CContentBuilder_SignInstallScript_Response;
  CContentBuilder_StartDepotUpload_Request: CContentBuilder_StartDepotUpload_Request;
  CContentBuilder_StartDepotUpload_Response: CContentBuilder_StartDepotUpload_Response;
  CContentServerDirectory_ConnectedSteamPipeServerInfo: CContentServerDirectory_ConnectedSteamPipeServerInfo;
  CContentServerDirectory_GetCDNAuthToken_Request: CContentServerDirectory_GetCDNAuthToken_Request;
  CContentServerDirectory_GetCDNAuthToken_Response: CContentServerDirectory_GetCDNAuthToken_Response;
  CContentServerDirectory_GetClientUpdateHosts_Request: CContentServerDirectory_GetClientUpdateHosts_Request;
  CContentServerDirectory_GetClientUpdateHosts_Response: CContentServerDirectory_GetClientUpdateHosts_Response;
  CContentServerDirectory_GetDepotPatchInfo_Request: CContentServerDirectory_GetDepotPatchInfo_Request;
  CContentServerDirectory_GetDepotPatchInfo_Response: CContentServerDirectory_GetDepotPatchInfo_Response;
  CContentServerDirectory_GetManifestRequestCode_Request: CContentServerDirectory_GetManifestRequestCode_Request;
  CContentServerDirectory_GetManifestRequestCode_Response: CContentServerDirectory_GetManifestRequestCode_Response;
  CContentServerDirectory_GetPeerContentInfo_Request: CContentServerDirectory_GetPeerContentInfo_Request;
  CContentServerDirectory_GetPeerContentInfo_Response: CContentServerDirectory_GetPeerContentInfo_Response;
  CContentServerDirectory_GetServersForSteamPipe_Request: CContentServerDirectory_GetServersForSteamPipe_Request;
  CContentServerDirectory_GetServersForSteamPipe_Response: CContentServerDirectory_GetServersForSteamPipe_Response;
  CContentServerDirectory_RequestPeerContentServer_Request: CContentServerDirectory_RequestPeerContentServer_Request;
  CContentServerDirectory_RequestPeerContentServer_Response: CContentServerDirectory_RequestPeerContentServer_Response;
  CContentServerDirectory_ServerInfo: CContentServerDirectory_ServerInfo;
  CControllerAccessibilityString: CControllerAccessibilityString;
  CControllerConfigMsg: CControllerConfigMsg;
  CControllerOriginKey: CControllerOriginKey;
  CControllerPersonalizationUpdateMsg: CControllerPersonalizationUpdateMsg;
  CCookie: CCookie;
  CCredentials_GetAccountAuthSecret_Response: CCredentials_GetAccountAuthSecret_Response;
  CCredentials_GetSteamGuardDetails_Request: CCredentials_GetSteamGuardDetails_Request;
  CCredentials_GetSteamGuardDetails_Response: CCredentials_GetSteamGuardDetails_Response;
  CCredentials_LastCredentialChangeTime_Request: CCredentials_LastCredentialChangeTime_Request;
  CCredentials_LastCredentialChangeTime_Response: CCredentials_LastCredentialChangeTime_Response;
  CCredentials_SteamGuardPhishingReport_Request: CCredentials_SteamGuardPhishingReport_Request;
  CCredentials_SteamGuardPhishingReport_Response: CCredentials_SteamGuardPhishingReport_Response;
  CCredentials_ValidateEmailAddress_Request: CCredentials_ValidateEmailAddress_Request;
  CCredentials_ValidateEmailAddress_Response: CCredentials_ValidateEmailAddress_Response;
  CCuratorPreferences: CCuratorPreferences;
  CDataPublisher_AddVRDeviceInfo_Request: CDataPublisher_AddVRDeviceInfo_Request;
  CDataPublisher_AddVRDeviceInfo_Response: CDataPublisher_AddVRDeviceInfo_Response;
  CDataPublisher_ClientContentCorruptionReport_Notification: CDataPublisher_ClientContentCorruptionReport_Notification;
  CDataPublisher_ClientUpdateAppJob_Notification: CDataPublisher_ClientUpdateAppJob_Notification;
  CDataPublisher_GetVRDeviceInfo_Request: CDataPublisher_GetVRDeviceInfo_Request;
  CDataPublisher_GetVRDeviceInfo_Response: CDataPublisher_GetVRDeviceInfo_Response;
  CDataPublisher_SetVRDeviceInfoAggregationReference_Request: CDataPublisher_SetVRDeviceInfoAggregationReference_Request;
  CDataPublisher_SetVRDeviceInfoAggregationReference_Response: CDataPublisher_SetVRDeviceInfoAggregationReference_Response;
  CDebugDumpMsg: CDebugDumpMsg;
  CDeleteCursorMsg: CDeleteCursorMsg;
  CDepotContentDetection_GetAllDetectedAppContent_Request: CDepotContentDetection_GetAllDetectedAppContent_Request;
  CDepotContentDetection_GetAllDetectedAppContent_Response: CDepotContentDetection_GetAllDetectedAppContent_Response;
  CDiscoveryPingRequest: CDiscoveryPingRequest;
  CDiscoveryPingResponse: CDiscoveryPingResponse;
  CDisplayMarketingMessage: CDisplayMarketingMessage;
  CEcon_Asset: CEcon_Asset;
  CEcon_ClientGetItemShopOverlayAuthURL_Request: CEcon_ClientGetItemShopOverlayAuthURL_Request;
  CEcon_ClientGetItemShopOverlayAuthURL_Response: CEcon_ClientGetItemShopOverlayAuthURL_Response;
  CEcon_GetAssetClassInfo_Request: CEcon_GetAssetClassInfo_Request;
  CEcon_GetAssetClassInfo_Response: CEcon_GetAssetClassInfo_Response;
  CEcon_GetAssetPropertySchema_Request: CEcon_GetAssetPropertySchema_Request;
  CEcon_GetAssetPropertySchema_Response: CEcon_GetAssetPropertySchema_Response;
  CEcon_GetInventoryItemsWithDescriptions_Request: CEcon_GetInventoryItemsWithDescriptions_Request;
  CEcon_GetInventoryItemsWithDescriptions_Response: CEcon_GetInventoryItemsWithDescriptions_Response;
  CEcon_GetTradeOfferAccessToken_Request: CEcon_GetTradeOfferAccessToken_Request;
  CEcon_GetTradeOfferAccessToken_Response: CEcon_GetTradeOfferAccessToken_Response;
  CEconItem_Action: CEconItem_Action;
  CEconItem_AssetAccessory: CEconItem_AssetAccessory;
  CEconItem_AssetProperties: CEconItem_AssetProperties;
  CEconItem_AssetProperty: CEconItem_AssetProperty;
  CEconItem_AssetPropertySchema: CEconItem_AssetPropertySchema;
  CEconItem_ClassIdentifiers: CEconItem_ClassIdentifiers;
  CEconItem_ContainerProperties: CEconItem_ContainerProperties;
  CEconItem_Description: CEconItem_Description;
  CEconItem_DescriptionLine: CEconItem_DescriptionLine;
  CEconItem_Tag: CEconItem_Tag;
  CEconMarket_IsMarketplaceAllowed_Request: CEconMarket_IsMarketplaceAllowed_Request;
  CEconMarket_IsMarketplaceAllowed_Response: CEconMarket_IsMarketplaceAllowed_Response;
  CEmbeddedClient_AuthorizeCurrentDevice_Request: CEmbeddedClient_AuthorizeCurrentDevice_Request;
  CEmbeddedClient_AuthorizeDevice_Response: CEmbeddedClient_AuthorizeDevice_Response;
  CEmbeddedClient_Token: CEmbeddedClient_Token;
  CFamilyGroups_CancelFamilyGroupInvite_Request: CFamilyGroups_CancelFamilyGroupInvite_Request;
  CFamilyGroups_ClearCooldownSkip_Request: CFamilyGroups_ClearCooldownSkip_Request;
  CFamilyGroups_ConfirmInviteToFamilyGroup_Request: CFamilyGroups_ConfirmInviteToFamilyGroup_Request;
  CFamilyGroups_ConfirmJoinFamilyGroup_Request: CFamilyGroups_ConfirmJoinFamilyGroup_Request;
  CFamilyGroups_CreateFamilyGroup_Request: CFamilyGroups_CreateFamilyGroup_Request;
  CFamilyGroups_CreateFamilyGroup_Response: CFamilyGroups_CreateFamilyGroup_Response;
  CFamilyGroups_DeleteFamilyGroup_Request: CFamilyGroups_DeleteFamilyGroup_Request;
  CFamilyGroups_ForceAcceptInvite_Request: CFamilyGroups_ForceAcceptInvite_Request;
  CFamilyGroups_GetChangeLog_Request: CFamilyGroups_GetChangeLog_Request;
  CFamilyGroups_GetChangeLog_Response: CFamilyGroups_GetChangeLog_Response;
  CFamilyGroups_GetFamilyGroup_Request: CFamilyGroups_GetFamilyGroup_Request;
  CFamilyGroups_GetFamilyGroup_Response: CFamilyGroups_GetFamilyGroup_Response;
  CFamilyGroups_GetFamilyGroupForUser_Request: CFamilyGroups_GetFamilyGroupForUser_Request;
  CFamilyGroups_GetFamilyGroupForUser_Response: CFamilyGroups_GetFamilyGroupForUser_Response;
  CFamilyGroups_GetInviteCheckResults_Request: CFamilyGroups_GetInviteCheckResults_Request;
  CFamilyGroups_GetInviteCheckResults_Response: CFamilyGroups_GetInviteCheckResults_Response;
  CFamilyGroups_GetPlaytimeSummary_Request: CFamilyGroups_GetPlaytimeSummary_Request;
  CFamilyGroups_GetPlaytimeSummary_Response: CFamilyGroups_GetPlaytimeSummary_Response;
  CFamilyGroups_GetPreferredLenders_Request: CFamilyGroups_GetPreferredLenders_Request;
  CFamilyGroups_GetPreferredLenders_Response: CFamilyGroups_GetPreferredLenders_Response;
  CFamilyGroups_GetPurchaseRequests_Request: CFamilyGroups_GetPurchaseRequests_Request;
  CFamilyGroups_GetPurchaseRequests_Response: CFamilyGroups_GetPurchaseRequests_Response;
  CFamilyGroups_GetSharedLibraryApps_Request: CFamilyGroups_GetSharedLibraryApps_Request;
  CFamilyGroups_GetSharedLibraryApps_Response: CFamilyGroups_GetSharedLibraryApps_Response;
  CFamilyGroups_GetUsersSharingDevice_Request: CFamilyGroups_GetUsersSharingDevice_Request;
  CFamilyGroups_GetUsersSharingDevice_Response: CFamilyGroups_GetUsersSharingDevice_Response;
  CFamilyGroups_InviteToFamilyGroup_Request: CFamilyGroups_InviteToFamilyGroup_Request;
  CFamilyGroups_InviteToFamilyGroup_Response: CFamilyGroups_InviteToFamilyGroup_Response;
  CFamilyGroups_JoinFamilyGroup_Request: CFamilyGroups_JoinFamilyGroup_Request;
  CFamilyGroups_JoinFamilyGroup_Response: CFamilyGroups_JoinFamilyGroup_Response;
  CFamilyGroups_ModifyFamilyGroupDetails_Request: CFamilyGroups_ModifyFamilyGroupDetails_Request;
  CFamilyGroups_PlaytimeEntry: CFamilyGroups_PlaytimeEntry;
  CFamilyGroups_RemoveFromFamilyGroup_Request: CFamilyGroups_RemoveFromFamilyGroup_Request;
  CFamilyGroups_RequestPurchase_Request: CFamilyGroups_RequestPurchase_Request;
  CFamilyGroups_RequestPurchase_Response: CFamilyGroups_RequestPurchase_Response;
  CFamilyGroups_ResendInvitationToFamilyGroup_Request: CFamilyGroups_ResendInvitationToFamilyGroup_Request;
  CFamilyGroups_RespondToRequestedPurchase_Request: CFamilyGroups_RespondToRequestedPurchase_Request;
  CFamilyGroups_RollbackFamilyGroup_Request: CFamilyGroups_RollbackFamilyGroup_Request;
  CFamilyGroups_SetFamilyCooldownOverrides_Request: CFamilyGroups_SetFamilyCooldownOverrides_Request;
  CFamilyGroups_SetPreferredLender_Request: CFamilyGroups_SetPreferredLender_Request;
  CFamilyGroups_UndeleteFamilyGroup_Request: CFamilyGroups_UndeleteFamilyGroup_Request;
  CFamilyGroupsClient_GroupChanged_Notification: CFamilyGroupsClient_GroupChanged_Notification;
  CFamilyGroupsClient_NotifyRunningApps_Notification: CFamilyGroupsClient_NotifyRunningApps_Notification;
  CFileVerification_SignatureCheck_Request: CFileVerification_SignatureCheck_Request;
  CFileVerification_SignatureCheck_Response: CFileVerification_SignatureCheck_Response;
  CFileVerification_SteamServiceCheck_Request: CFileVerification_SteamServiceCheck_Request;
  CFileVerification_SteamServiceCheck_Response: CFileVerification_SteamServiceCheck_Response;
  CFovasVideo_ClientGetOPFSettings_Request: CFovasVideo_ClientGetOPFSettings_Request;
  CFovasVideo_ClientGetOPFSettings_Response: CFovasVideo_ClientGetOPFSettings_Response;
  CFrameEvent: CFrameEvent;
  CFrameStatAccumulatedValue: CFrameStatAccumulatedValue;
  CFrameStats: CFrameStats;
  CFrameStatsListMsg: CFrameStatsListMsg;
  CFriendMessages_AckMessage_Notification: CFriendMessages_AckMessage_Notification;
  CFriendMessages_DismissSessionNotice_Notification: CFriendMessages_DismissSessionNotice_Notification;
  CFriendMessages_GetRecentMessages_Request: CFriendMessages_GetRecentMessages_Request;
  CFriendMessages_GetRecentMessages_Response: CFriendMessages_GetRecentMessages_Response;
  CFriendMessages_IncomingMessage_Notification: CFriendMessages_IncomingMessage_Notification;
  CFriendMessages_IsInFriendsUIBeta_Request: CFriendMessages_IsInFriendsUIBeta_Request;
  CFriendMessages_IsInFriendsUIBeta_Response: CFriendMessages_IsInFriendsUIBeta_Response;
  CFriendMessages_MessageReaction_Notification: CFriendMessages_MessageReaction_Notification;
  CFriendMessages_ReportMessage_Request: CFriendMessages_ReportMessage_Request;
  CFriendMessages_ResolveReport_Request: CFriendMessages_ResolveReport_Request;
  CFriendMessages_SendMessage_Request: CFriendMessages_SendMessage_Request;
  CFriendMessages_SendMessage_Response: CFriendMessages_SendMessage_Response;
  CFriendMessages_SessionNotice_Notification: CFriendMessages_SessionNotice_Notification;
  CFriendMessages_UpdateMessageReaction_Request: CFriendMessages_UpdateMessageReaction_Request;
  CFriendMessages_UpdateMessageReaction_Response: CFriendMessages_UpdateMessageReaction_Response;
  CFriendsMessages_GetActiveMessageSessions_Request: CFriendsMessages_GetActiveMessageSessions_Request;
  CFriendsMessages_GetActiveMessageSessions_Response: CFriendsMessages_GetActiveMessageSessions_Response;
  CGameNetworking_AllocateFakeIP_Request: CGameNetworking_AllocateFakeIP_Request;
  CGameNetworking_AllocateFakeIP_Response: CGameNetworking_AllocateFakeIP_Response;
  CGameNetworking_ReleaseFakeIP_Notification: CGameNetworking_ReleaseFakeIP_Notification;
  CGameNetworkingUI_AppSummary: CGameNetworkingUI_AppSummary;
  CGameNetworkingUI_ConnectionState: CGameNetworkingUI_ConnectionState;
  CGameNetworkingUI_ConnectionSummary: CGameNetworkingUI_ConnectionSummary;
  CGameNetworkingUI_Message: CGameNetworkingUI_Message;
  CGameNotes_UploadImage_Request: CGameNotes_UploadImage_Request;
  CGameNotes_UploadImage_Response: CGameNotes_UploadImage_Response;
  CGameNotifications_CreateSession_Request: CGameNotifications_CreateSession_Request;
  CGameNotifications_CreateSession_Response: CGameNotifications_CreateSession_Response;
  CGameNotifications_DeleteSession_Request: CGameNotifications_DeleteSession_Request;
  CGameNotifications_EnumerateSessions_Request: CGameNotifications_EnumerateSessions_Request;
  CGameNotifications_EnumerateSessions_Response: CGameNotifications_EnumerateSessions_Response;
  CGameNotifications_GetSessionDetails_Request: CGameNotifications_GetSessionDetails_Request;
  CGameNotifications_GetSessionDetails_Response: CGameNotifications_GetSessionDetails_Response;
  CGameNotifications_LocalizedText: CGameNotifications_LocalizedText;
  CGameNotifications_OnNotificationsRequested_Notification: CGameNotifications_OnNotificationsRequested_Notification;
  CGameNotifications_OnUserStatusChanged_Notification: CGameNotifications_OnUserStatusChanged_Notification;
  CGameNotifications_Session: CGameNotifications_Session;
  CGameNotifications_UpdateNotificationSettings_Request: CGameNotifications_UpdateNotificationSettings_Request;
  CGameNotifications_UpdateSession_Request: CGameNotifications_UpdateSession_Request;
  CGameNotifications_UserStatus: CGameNotifications_UserStatus;
  CGameNotifications_Variable: CGameNotifications_Variable;
  CGameRecording_AudioSessionsChanged_Notification: CGameRecording_AudioSessionsChanged_Notification;
  CGameRecording_ClipCreated_Notification: CGameRecording_ClipCreated_Notification;
  CGameRecording_ClipDeleted_Notification: CGameRecording_ClipDeleted_Notification;
  CGameRecording_ClipSummary: CGameRecording_ClipSummary;
  CGameRecording_CreateShareClip_Request: CGameRecording_CreateShareClip_Request;
  CGameRecording_CreateShareClip_Response: CGameRecording_CreateShareClip_Response;
  CGameRecording_DeleteClip_Request: CGameRecording_DeleteClip_Request;
  CGameRecording_DeletePerGameSettings_Request: CGameRecording_DeletePerGameSettings_Request;
  CGameRecording_DeleteSharedClip_Request: CGameRecording_DeleteSharedClip_Request;
  CGameRecording_ExportClip_Request: CGameRecording_ExportClip_Request;
  CGameRecording_ExportClip_Settings: CGameRecording_ExportClip_Settings;
  CGameRecording_ExportClipPreview_Request: CGameRecording_ExportClipPreview_Request;
  CGameRecording_ExportClipPreview_Response: CGameRecording_ExportClipPreview_Response;
  CGameRecording_ExportProgress_Notification: CGameRecording_ExportProgress_Notification;
  CGameRecording_GetAndTrimPostGameHighlights_Request: CGameRecording_GetAndTrimPostGameHighlights_Request;
  CGameRecording_GetAndTrimPostGameHighlights_Response: CGameRecording_GetAndTrimPostGameHighlights_Response;
  CGameRecording_GetAppsWithBackgroundVideo_Response: CGameRecording_GetAppsWithBackgroundVideo_Response;
  CGameRecording_GetAvailableDiskSpace_Response: CGameRecording_GetAvailableDiskSpace_Response;
  CGameRecording_GetClips_Request: CGameRecording_GetClips_Request;
  CGameRecording_GetClips_Response: CGameRecording_GetClips_Response;
  CGameRecording_GetEnoughDiskSpace_Response: CGameRecording_GetEnoughDiskSpace_Response;
  CGameRecording_GetPerGameSettings_Response: CGameRecording_GetPerGameSettings_Response;
  CGameRecording_GetPlatformCapabilities_Response: CGameRecording_GetPlatformCapabilities_Response;
  CGameRecording_GetRecordingSize_Request: CGameRecording_GetRecordingSize_Request;
  CGameRecording_GetRecordingSize_Response: CGameRecording_GetRecordingSize_Response;
  CGameRecording_GetSingleSharedClip_Request: CGameRecording_GetSingleSharedClip_Request;
  CGameRecording_GetSingleSharedClip_Response: CGameRecording_GetSingleSharedClip_Response;
  CGameRecording_GetTags_Request: CGameRecording_GetTags_Request;
  CGameRecording_GetTags_Response: CGameRecording_GetTags_Response;
  CGameRecording_GetThumbnails_Request: CGameRecording_GetThumbnails_Request;
  CGameRecording_GetThumbnails_Response: CGameRecording_GetThumbnails_Response;
  CGameRecording_GetTimelinesForApp_Request: CGameRecording_GetTimelinesForApp_Request;
  CGameRecording_GetTimelinesForApp_Response: CGameRecording_GetTimelinesForApp_Response;
  CGameRecording_GetTimelinesForClip_Request: CGameRecording_GetTimelinesForClip_Request;
  CGameRecording_GetTimelinesForClip_Response: CGameRecording_GetTimelinesForClip_Response;
  CGameRecording_GetTotalDiskSpaceUsage_Request: CGameRecording_GetTotalDiskSpaceUsage_Request;
  CGameRecording_GetTotalDiskSpaceUsage_Response: CGameRecording_GetTotalDiskSpaceUsage_Response;
  CGameRecording_ManuallyDeleteRecordingsForApps_Request: CGameRecording_ManuallyDeleteRecordingsForApps_Request;
  CGameRecording_OpenOverlayToGamePhase_Notification: CGameRecording_OpenOverlayToGamePhase_Notification;
  CGameRecording_OpenOverlayToTimelineEvent_Notification: CGameRecording_OpenOverlayToTimelineEvent_Notification;
  CGameRecording_PerGameSettings: CGameRecording_PerGameSettings;
  CGameRecording_PostGameHighlightsChanged_Notification: CGameRecording_PostGameHighlightsChanged_Notification;
  CGameRecording_QueryPhases_Request: CGameRecording_QueryPhases_Request;
  CGameRecording_QueryPhases_Response: CGameRecording_QueryPhases_Response;
  CGameRecording_RecordingSessionChanged_Notification: CGameRecording_RecordingSessionChanged_Notification;
  CGameRecording_SaveClip_Request: CGameRecording_SaveClip_Request;
  CGameRecording_SaveClip_Response: CGameRecording_SaveClip_Response;
  CGameRecording_SetPerGameSettings_Request: CGameRecording_SetPerGameSettings_Request;
  CGameRecording_StartRecording_Request: CGameRecording_StartRecording_Request;
  CGameRecording_StopRecording_Request: CGameRecording_StopRecording_Request;
  CGameRecording_StopRecording_Response: CGameRecording_StopRecording_Response;
  CGameRecording_SwitchBackgroundRecordingGame_Request: CGameRecording_SwitchBackgroundRecordingGame_Request;
  CGameRecording_TakeScreenshot_Request: CGameRecording_TakeScreenshot_Request;
  CGameRecording_TakeScreenshot_Response: CGameRecording_TakeScreenshot_Response;
  CGameRecording_TimelineChanged_Notification: CGameRecording_TimelineChanged_Notification;
  CGameRecording_TimelineEntryChanged_Notification: CGameRecording_TimelineEntryChanged_Notification;
  CGameRecording_TimelineEntryRemoved_Notification: CGameRecording_TimelineEntryRemoved_Notification;
  CGameRecording_UploadClipToSteam_Request: CGameRecording_UploadClipToSteam_Request;
  CGameRecording_UploadClipToSteam_Response: CGameRecording_UploadClipToSteam_Response;
  CGameRecording_UploadProgress_Notification: CGameRecording_UploadProgress_Notification;
  CGameRecording_UserAddTimelineEntry_Request: CGameRecording_UserAddTimelineEntry_Request;
  CGameRecording_UserAddTimelineEntry_Response: CGameRecording_UserAddTimelineEntry_Response;
  CGameRecording_UserRemoveTimelineEntry_Request: CGameRecording_UserRemoveTimelineEntry_Request;
  CGameRecording_UserUpdateTimelineEntry_Request: CGameRecording_UserUpdateTimelineEntry_Request;
  CGameRecording_ZipClip_Request: CGameRecording_ZipClip_Request;
  CGameRecording_ZipClip_Response: CGameRecording_ZipClip_Response;
  CGameRecordingClip: CGameRecordingClip;
  CGameRecordingClipFile: CGameRecordingClipFile;
  CGameRecordingFile: CGameRecordingFile;
  CGameRecordingPhase: CGameRecordingPhase;
  CGameRecordingPostGameSummary: CGameRecordingPostGameSummary;
  CGameRecordingTag: CGameRecordingTag;
  CGameRecordingTagInstance: CGameRecordingTagInstance;
  CGameRecordingTimelineEvent: CGameRecordingTimelineEvent;
  CGameRecordingTimelineMetadata: CGameRecordingTimelineMetadata;
  CGamescope_GetState_Response: CGamescope_GetState_Response;
  CGamescope_SetBlurParams_Request: CGamescope_SetBlurParams_Request;
  CGamescope_SetDisplayPowerState_Request: CGamescope_SetDisplayPowerState_Request;
  CGameServers_GameServerQuery_Response: CGameServers_GameServerQuery_Response;
  CGameServers_GetServerIPsBySteamID_Request: CGameServers_GetServerIPsBySteamID_Request;
  CGameServers_GetServerSteamIDsByIP_Request: CGameServers_GetServerSteamIDsByIP_Request;
  CGameServers_IPsWithSteamIDs_Response: CGameServers_IPsWithSteamIDs_Response;
  CGameServers_QueryByFakeIP_Request: CGameServers_QueryByFakeIP_Request;
  CGameServers_ReportServerPingReply_Notification: CGameServers_ReportServerPingReply_Notification;
  CGetCursorImageMsg: CGetCursorImageMsg;
  CGetTouchConfigDataMsg: CGetTouchConfigDataMsg;
  CGetTouchIconDataMsg: CGetTouchIconDataMsg;
  CHardwarePackageDetails: CHardwarePackageDetails;
  CHardwareUpdate_CheckForUpdates_Response: CHardwareUpdate_CheckForUpdates_Response;
  CHardwareUpdate_GetState_Response: CHardwareUpdate_GetState_Response;
  CHardwareUpdate_PrepForUpdate_Request: CHardwareUpdate_PrepForUpdate_Request;
  CHardwareUpdate_Update_Request: CHardwareUpdate_Update_Request;
  CHardwareUpdate_UpdateProgress_Notification: CHardwareUpdate_UpdateProgress_Notification;
  ChatRoomClient_NotifyChatGroupUserStateChanged_Notification: ChatRoomClient_NotifyChatGroupUserStateChanged_Notification;
  ChatRoomClient_NotifyChatRoomDisconnect_Notification: ChatRoomClient_NotifyChatRoomDisconnect_Notification;
  CHIDDeviceInfo: CHIDDeviceInfo;
  CHIDDeviceInputReport: CHIDDeviceInputReport;
  CHIDMessageFromRemote: CHIDMessageFromRemote;
  CHIDMessageToRemote: CHIDMessageToRemote;
  CHistoryEntry: CHistoryEntry;
  CHTMLHeader: CHTMLHeader;
  CHTMLPageSecurityInfo: CHTMLPageSecurityInfo;
  CInputKeyDownMsg: CInputKeyDownMsg;
  CInputKeyUpMsg: CInputKeyUpMsg;
  CInputLatencyTestMsg: CInputLatencyTestMsg;
  CInputMouseDownMsg: CInputMouseDownMsg;
  CInputMouseMotionMsg: CInputMouseMotionMsg;
  CInputMouseUpMsg: CInputMouseUpMsg;
  CInputMouseWheelMsg: CInputMouseWheelMsg;
  CInputTextMsg: CInputTextMsg;
  CInputTouchFingerDownMsg: CInputTouchFingerDownMsg;
  CInputTouchFingerMotionMsg: CInputTouchFingerMotionMsg;
  CInputTouchFingerUpMsg: CInputTouchFingerUpMsg;
  CInventory_AddItem_Request: CInventory_AddItem_Request;
  CInventory_CombineItemStacks_Request: CInventory_CombineItemStacks_Request;
  CInventory_ConsumeItem_Request: CInventory_ConsumeItem_Request;
  CInventory_ConsumePlaytime_Request: CInventory_ConsumePlaytime_Request;
  CInventory_DevSetNextDrop_Request: CInventory_DevSetNextDrop_Request;
  CInventory_ExchangeItem_Request: CInventory_ExchangeItem_Request;
  CInventory_GetEligiblePromoItemDefIDs_Request: CInventory_GetEligiblePromoItemDefIDs_Request;
  CInventory_GetEligiblePromoItemDefIDs_Response: CInventory_GetEligiblePromoItemDefIDs_Response;
  CInventory_GetInventory_Request: CInventory_GetInventory_Request;
  CInventory_GetItemDefMeta_Request: CInventory_GetItemDefMeta_Request;
  CInventory_GetItemDefMeta_Response: CInventory_GetItemDefMeta_Response;
  CInventory_GetUserPurchaseInfo_Response: CInventory_GetUserPurchaseInfo_Response;
  CInventory_InspectItem_Request: CInventory_InspectItem_Request;
  CInventory_ModifyItems_Request: CInventory_ModifyItems_Request;
  CInventory_PurchaseFinalize_Request: CInventory_PurchaseFinalize_Request;
  CInventory_PurchaseInit_Request: CInventory_PurchaseInit_Request;
  CInventory_PurchaseInit_Response: CInventory_PurchaseInit_Response;
  CInventory_Response: CInventory_Response;
  CInventory_SplitItemStack_Request: CInventory_SplitItemStack_Request;
  CInventoryClient_NewItems_Notification: CInventoryClient_NewItems_Notification;
  CKeyEscrow_Request: CKeyEscrow_Request;
  CKeyEscrow_Response: CKeyEscrow_Response;
  CKeyEscrow_Ticket: CKeyEscrow_Ticket;
  CLEDManager_GetState_Response: CLEDManager_GetState_Response;
  CLEDManager_SetBrightness_Request: CLEDManager_SetBrightness_Request;
  CLEDManager_SetColor_Request: CLEDManager_SetColor_Request;
  CLEDManager_SetEffect_Request: CLEDManager_SetEffect_Request;
  CLEDManager_SetEnabled_Request: CLEDManager_SetEnabled_Request;
  CLEDManager_SetSpeed_Request: CLEDManager_SetSpeed_Request;
  ClientCloudFileUploadBlockDetails: ClientCloudFileUploadBlockDetails;
  CLocalizationToken: CLocalizationToken;
  CLogMsg: CLogMsg;
  CLogUploadMsg: CLogUploadMsg;
  CMarketingMessage_GetMarketingMessagesForApps_Request: CMarketingMessage_GetMarketingMessagesForApps_Request;
  CMarketingMessage_GetMarketingMessagesForApps_Response: CMarketingMessage_GetMarketingMessagesForApps_Response;
  CMarketingMessage_GetMarketingMessagesForPartner_Request: CMarketingMessage_GetMarketingMessagesForPartner_Request;
  CMarketingMessage_GetMarketingMessagesForPartner_Response: CMarketingMessage_GetMarketingMessagesForPartner_Response;
  CMarketingMessageClickedHourlyStats: CMarketingMessageClickedHourlyStats;
  CMarketingMessageHourlyStats: CMarketingMessageHourlyStats;
  CMarketingMessageProto: CMarketingMessageProto;
  CMarketingMessages_CreateMarketingMessage_Request: CMarketingMessages_CreateMarketingMessage_Request;
  CMarketingMessages_CreateMarketingMessage_Response: CMarketingMessages_CreateMarketingMessage_Response;
  CMarketingMessages_DeleteMarketingMessage_Request: CMarketingMessages_DeleteMarketingMessage_Request;
  CMarketingMessages_DoesUserHavePendingMarketingMessages_Request: CMarketingMessages_DoesUserHavePendingMarketingMessages_Request;
  CMarketingMessages_DoesUserHavePendingMarketingMessages_Response: CMarketingMessages_DoesUserHavePendingMarketingMessages_Response;
  CMarketingMessages_FindMarketingMessages_Request: CMarketingMessages_FindMarketingMessages_Request;
  CMarketingMessages_FindMarketingMessages_Response: CMarketingMessages_FindMarketingMessages_Response;
  CMarketingMessages_GetActiveMarketingMessages_Request: CMarketingMessages_GetActiveMarketingMessages_Request;
  CMarketingMessages_GetActiveMarketingMessages_Response: CMarketingMessages_GetActiveMarketingMessages_Response;
  CMarketingMessages_GetDisplayMarketingMessage_Request: CMarketingMessages_GetDisplayMarketingMessage_Request;
  CMarketingMessages_GetDisplayMarketingMessage_Response: CMarketingMessages_GetDisplayMarketingMessage_Response;
  CMarketingMessages_GetMarketingMessage_Request: CMarketingMessages_GetMarketingMessage_Request;
  CMarketingMessages_GetMarketingMessage_Response: CMarketingMessages_GetMarketingMessage_Response;
  CMarketingMessages_GetMarketingMessageClickedStats_Request: CMarketingMessages_GetMarketingMessageClickedStats_Request;
  CMarketingMessages_GetMarketingMessageClickedStats_Response: CMarketingMessages_GetMarketingMessageClickedStats_Response;
  CMarketingMessages_GetMarketingMessagesForUser_Request: CMarketingMessages_GetMarketingMessagesForUser_Request;
  CMarketingMessages_GetMarketingMessagesForUser_Response: CMarketingMessages_GetMarketingMessagesForUser_Response;
  CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request: CMarketingMessages_GetMarketingMessagesViewerRangeStats_Request;
  CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response: CMarketingMessages_GetMarketingMessagesViewerRangeStats_Response;
  CMarketingMessages_GetMarketingMessageViewerStats_Request: CMarketingMessages_GetMarketingMessageViewerStats_Request;
  CMarketingMessages_GetMarketingMessageViewerStats_Response: CMarketingMessages_GetMarketingMessageViewerStats_Response;
  CMarketingMessages_GetPartnerMessagePreview_Request: CMarketingMessages_GetPartnerMessagePreview_Request;
  CMarketingMessages_GetPartnerMessagePreview_Response: CMarketingMessages_GetPartnerMessagePreview_Response;
  CMarketingMessages_GetPartnerReadyToPublishMessages_Request: CMarketingMessages_GetPartnerReadyToPublishMessages_Request;
  CMarketingMessages_GetPartnerReadyToPublishMessages_Response: CMarketingMessages_GetPartnerReadyToPublishMessages_Response;
  CMarketingMessages_GetPastMarketingMessages_Request: CMarketingMessages_GetPastMarketingMessages_Request;
  CMarketingMessages_GetPastMarketingMessages_Response: CMarketingMessages_GetPastMarketingMessages_Response;
  CMarketingMessages_MarkMessageClicked_Notification: CMarketingMessages_MarkMessageClicked_Notification;
  CMarketingMessages_MarkMessageSeen_Notification: CMarketingMessages_MarkMessageSeen_Notification;
  CMarketingMessages_PartnerPublishMessage_Request: CMarketingMessages_PartnerPublishMessage_Request;
  CMarketingMessages_UpdateMarketingMessage_Request: CMarketingMessages_UpdateMarketingMessage_Request;
  CMsgAchievementChange: CMsgAchievementChange;
  CMsgAckPIDShuttingDown: CMsgAckPIDShuttingDown;
  CMsgAckScreenDPI: CMsgAckScreenDPI;
  CMsgAckSharedPaintBuffers: CMsgAckSharedPaintBuffers;
  CMsgAddHeader: CMsgAddHeader;
  CMsgAMUnlockH264: CMsgAMUnlockH264;
  CMsgAMUnlockH264Response: CMsgAMUnlockH264Response;
  CMsgAppRights: CMsgAppRights;
  CMsgAuthedSteamDomains: CMsgAuthedSteamDomains;
  CMsgAuthTicket: CMsgAuthTicket;
  CMsgAvailableHardwareUpdate: CMsgAvailableHardwareUpdate;
  CMsgBadgeCraftedNotification: CMsgBadgeCraftedNotification;
  CMsgBlockedRequest: CMsgBlockedRequest;
  CMsgBluetoothDevicesData: CMsgBluetoothDevicesData;
  CMsgBluetoothManagerAdapterDetails: CMsgBluetoothManagerAdapterDetails;
  CMsgBluetoothManagerAdapterInfo: CMsgBluetoothManagerAdapterInfo;
  CMsgBluetoothManagerDeviceDetails: CMsgBluetoothManagerDeviceDetails;
  CMsgBluetoothManagerDeviceInfo: CMsgBluetoothManagerDeviceInfo;
  CMsgBringWindowToFront: CMsgBringWindowToFront;
  CMsgBrowserCreate: CMsgBrowserCreate;
  CMsgBrowserCreateResponse: CMsgBrowserCreateResponse;
  CMsgBrowserErrorStrings: CMsgBrowserErrorStrings;
  CMsgBrowserFocusChanged: CMsgBrowserFocusChanged;
  CMsgBrowserPosition: CMsgBrowserPosition;
  CMsgBrowserReady: CMsgBrowserReady;
  CMsgBrowserRemove: CMsgBrowserRemove;
  CMsgBrowserResized: CMsgBrowserResized;
  CMsgBrowserSetMinSize: CMsgBrowserSetMinSize;
  CMsgBrowserSetName: CMsgBrowserSetName;
  CMsgBrowserSize: CMsgBrowserSize;
  CMsgBrowserViewPostMessageToParentRequest: CMsgBrowserViewPostMessageToParentRequest;
  CMsgBuildID: CMsgBuildID;
  CMsgCanGoBackAndForward: CMsgCanGoBackAndForward;
  CMsgCellList: CMsgCellList;
  CMsgChildProcessQueryGpuTopology: CMsgChildProcessQueryGpuTopology;
  CMsgChildProcessQueryResponse: CMsgChildProcessQueryResponse;
  CMsgClearAllBrowsingData: CMsgClearAllBrowsingData;
  CMsgClearAllCookies: CMsgClearAllCookies;
  CMsgClearHistory: CMsgClearHistory;
  CMsgClientAccountInfo: CMsgClientAccountInfo;
  CMsgClientActivateOEMLicense: CMsgClientActivateOEMLicense;
  CMsgClientAddFriend: CMsgClientAddFriend;
  CMsgClientAddFriendResponse: CMsgClientAddFriendResponse;
  CMsgClientAddFriendToGroup: CMsgClientAddFriendToGroup;
  CMsgClientAddFriendToGroupResponse: CMsgClientAddFriendToGroupResponse;
  CMsgClientAMGetClanOfficers: CMsgClientAMGetClanOfficers;
  CMsgClientAMGetClanOfficersResponse: CMsgClientAMGetClanOfficersResponse;
  CMsgClientAMGetPersonaNameHistory: CMsgClientAMGetPersonaNameHistory;
  CMsgClientAMGetPersonaNameHistoryResponse: CMsgClientAMGetPersonaNameHistoryResponse;
  CMsgClientAppInfoChanges: CMsgClientAppInfoChanges;
  CMsgClientAppInfoRequest: CMsgClientAppInfoRequest;
  CMsgClientAppInfoUpdate: CMsgClientAppInfoUpdate;
  CMsgClientAuthList: CMsgClientAuthList;
  CMsgClientAuthListAck: CMsgClientAuthListAck;
  CMsgClientAuthorizeLocalDevice: CMsgClientAuthorizeLocalDevice;
  CMsgClientAuthorizeLocalDeviceNotification: CMsgClientAuthorizeLocalDeviceNotification;
  CMsgClientAuthorizeLocalDeviceRequest: CMsgClientAuthorizeLocalDeviceRequest;
  CMsgClientChallengeRequest: CMsgClientChallengeRequest;
  CMsgClientChallengeResponse: CMsgClientChallengeResponse;
  CMsgClientChangeStatus: CMsgClientChangeStatus;
  CMsgClientChatGetFriendMessageHistory: CMsgClientChatGetFriendMessageHistory;
  CMsgClientChatGetFriendMessageHistoryResponse: CMsgClientChatGetFriendMessageHistoryResponse;
  CMsgClientChatInvite: CMsgClientChatInvite;
  CMsgClientCheckAppBetaPassword: CMsgClientCheckAppBetaPassword;
  CMsgClientCheckAppBetaPasswordResponse: CMsgClientCheckAppBetaPasswordResponse;
  CMsgClientCheckFileSignature: CMsgClientCheckFileSignature;
  CMsgClientCheckFileSignatureResponse: CMsgClientCheckFileSignatureResponse;
  CMsgClientClanState: CMsgClientClanState;
  CMsgClientCommentNotifications: CMsgClientCommentNotifications;
  CMsgClientConnectionStats: CMsgClientConnectionStats;
  CMsgClientCreateFriendsGroup: CMsgClientCreateFriendsGroup;
  CMsgClientCreateFriendsGroupResponse: CMsgClientCreateFriendsGroupResponse;
  CMsgClientDeauthorizeDevice: CMsgClientDeauthorizeDevice;
  CMsgClientDeauthorizeDeviceRequest: CMsgClientDeauthorizeDeviceRequest;
  CMsgClientDeleteFriendsGroup: CMsgClientDeleteFriendsGroup;
  CMsgClientDeleteFriendsGroupResponse: CMsgClientDeleteFriendsGroupResponse;
  CMsgClientDeregisterWithServer: CMsgClientDeregisterWithServer;
  CMsgClientDPCheckSpecialSurvey: CMsgClientDPCheckSpecialSurvey;
  CMsgClientDPCheckSpecialSurveyResponse: CMsgClientDPCheckSpecialSurveyResponse;
  CMsgClientDPSendSpecialSurveyResponse: CMsgClientDPSendSpecialSurveyResponse;
  CMsgClientDPSendSpecialSurveyResponseReply: CMsgClientDPSendSpecialSurveyResponseReply;
  CMsgClientEmailAddrInfo: CMsgClientEmailAddrInfo;
  CMsgClientEmoticonList: CMsgClientEmoticonList;
  CMsgClientEnableOrDisableDownloads: CMsgClientEnableOrDisableDownloads;
  CMsgClientEnableOrDisableDownloadsResponse: CMsgClientEnableOrDisableDownloadsResponse;
  CMsgClientFriendMsg: CMsgClientFriendMsg;
  CMsgClientFriendMsgIncoming: CMsgClientFriendMsgIncoming;
  CMsgClientFriendProfileInfo: CMsgClientFriendProfileInfo;
  CMsgClientFriendProfileInfoResponse: CMsgClientFriendProfileInfoResponse;
  CMsgClientFriendsGroupsList: CMsgClientFriendsGroupsList;
  CMsgClientFriendsList: CMsgClientFriendsList;
  CMsgClientFriendUserStatusPublished: CMsgClientFriendUserStatusPublished;
  CMsgClientFSGetFriendsSteamLevels: CMsgClientFSGetFriendsSteamLevels;
  CMsgClientFSGetFriendsSteamLevelsResponse: CMsgClientFSGetFriendsSteamLevelsResponse;
  CMsgClientGameConnectTokens: CMsgClientGameConnectTokens;
  CMsgClientGamesPlayed: CMsgClientGamesPlayed;
  CMsgClientGetAppOwnershipTicket: CMsgClientGetAppOwnershipTicket;
  CMsgClientGetAppOwnershipTicketResponse: CMsgClientGetAppOwnershipTicketResponse;
  CMsgClientGetAuthorizedDevicesResponse: CMsgClientGetAuthorizedDevicesResponse;
  CMsgClientGetClanActivityCounts: CMsgClientGetClanActivityCounts;
  CMsgClientGetClanActivityCountsResponse: CMsgClientGetClanActivityCountsResponse;
  CMsgClientGetClientAppList: CMsgClientGetClientAppList;
  CMsgClientGetClientAppListResponse: CMsgClientGetClientAppListResponse;
  CMsgClientGetClientDetailsResponse: CMsgClientGetClientDetailsResponse;
  CMsgClientGetDepotDecryptionKey: CMsgClientGetDepotDecryptionKey;
  CMsgClientGetDepotDecryptionKeyResponse: CMsgClientGetDepotDecryptionKeyResponse;
  CMsgClientGetPeerContentInfo: CMsgClientGetPeerContentInfo;
  CMsgClientGetPeerContentInfoResponse: CMsgClientGetPeerContentInfoResponse;
  CMsgClientGetUserStats: CMsgClientGetUserStats;
  CMsgClientGetUserStatsResponse: CMsgClientGetUserStatsResponse;
  CMsgClientGMSServerQuery: CMsgClientGMSServerQuery;
  CMsgClientHeartBeat: CMsgClientHeartBeat;
  CMsgClientHello: CMsgClientHello;
  CMsgClientHideFriend: CMsgClientHideFriend;
  CMsgClientInstallClientApp: CMsgClientInstallClientApp;
  CMsgClientInstallClientAppResponse: CMsgClientInstallClientAppResponse;
  CMsgClientInviteToGame: CMsgClientInviteToGame;
  CMsgClientIsLimitedAccount: CMsgClientIsLimitedAccount;
  CMsgClientItemAnnouncements: CMsgClientItemAnnouncements;
  CMsgClientKickPlayingSession: CMsgClientKickPlayingSession;
  CMsgClientLANP2PRequestChunks: CMsgClientLANP2PRequestChunks;
  CMsgClientLANP2PRequestChunksResponse: CMsgClientLANP2PRequestChunksResponse;
  CMsgClientLaunchClientApp: CMsgClientLaunchClientApp;
  CMsgClientLaunchClientAppResponse: CMsgClientLaunchClientAppResponse;
  CMsgClientLBSFindOrCreateLB: CMsgClientLBSFindOrCreateLB;
  CMsgClientLBSFindOrCreateLBResponse: CMsgClientLBSFindOrCreateLBResponse;
  CMsgClientLBSGetLBEntries: CMsgClientLBSGetLBEntries;
  CMsgClientLBSGetLBEntriesResponse: CMsgClientLBSGetLBEntriesResponse;
  CMsgClientLBSSetScore: CMsgClientLBSSetScore;
  CMsgClientLBSSetScoreResponse: CMsgClientLBSSetScoreResponse;
  CMsgClientLBSSetUGC: CMsgClientLBSSetUGC;
  CMsgClientLBSSetUGCResponse: CMsgClientLBSSetUGCResponse;
  CMsgClientLicenseList: CMsgClientLicenseList;
  CMsgClientLoggedOff: CMsgClientLoggedOff;
  CMsgClientLogon: CMsgClientLogon;
  CMsgClientLogOnResponse: CMsgClientLogOnResponse;
  CMsgClientManageFriendsGroup: CMsgClientManageFriendsGroup;
  CMsgClientManageFriendsGroupResponse: CMsgClientManageFriendsGroupResponse;
  CMsgClientMMSCreateLobby: CMsgClientMMSCreateLobby;
  CMsgClientMMSCreateLobbyResponse: CMsgClientMMSCreateLobbyResponse;
  CMsgClientMMSGetLobbyData: CMsgClientMMSGetLobbyData;
  CMsgClientMMSGetLobbyList: CMsgClientMMSGetLobbyList;
  CMsgClientMMSGetLobbyListResponse: CMsgClientMMSGetLobbyListResponse;
  CMsgClientMMSGetLobbyStatus: CMsgClientMMSGetLobbyStatus;
  CMsgClientMMSGetLobbyStatusResponse: CMsgClientMMSGetLobbyStatusResponse;
  CMsgClientMMSInviteToLobby: CMsgClientMMSInviteToLobby;
  CMsgClientMMSJoinLobby: CMsgClientMMSJoinLobby;
  CMsgClientMMSJoinLobbyResponse: CMsgClientMMSJoinLobbyResponse;
  CMsgClientMMSLeaveLobby: CMsgClientMMSLeaveLobby;
  CMsgClientMMSLeaveLobbyResponse: CMsgClientMMSLeaveLobbyResponse;
  CMsgClientMMSLobbyChatMsg: CMsgClientMMSLobbyChatMsg;
  CMsgClientMMSLobbyData: CMsgClientMMSLobbyData;
  CMsgClientMMSLobbyGameServerSet: CMsgClientMMSLobbyGameServerSet;
  CMsgClientMMSSendLobbyChatMsg: CMsgClientMMSSendLobbyChatMsg;
  CMsgClientMMSSetLobbyData: CMsgClientMMSSetLobbyData;
  CMsgClientMMSSetLobbyDataResponse: CMsgClientMMSSetLobbyDataResponse;
  CMsgClientMMSSetLobbyGameServer: CMsgClientMMSSetLobbyGameServer;
  CMsgClientMMSSetLobbyLinked: CMsgClientMMSSetLobbyLinked;
  CMsgClientMMSSetLobbyOwner: CMsgClientMMSSetLobbyOwner;
  CMsgClientMMSSetLobbyOwnerResponse: CMsgClientMMSSetLobbyOwnerResponse;
  CMsgClientMMSSetRatelimitPolicyOnClient: CMsgClientMMSSetRatelimitPolicyOnClient;
  CMsgClientMMSUserJoinedLobby: CMsgClientMMSUserJoinedLobby;
  CMsgClientMMSUserLeftLobby: CMsgClientMMSUserLeftLobby;
  CMsgClientNetworkingCertReply: CMsgClientNetworkingCertReply;
  CMsgClientNetworkingCertRequest: CMsgClientNetworkingCertRequest;
  CMsgClientNetworkingMobileCertReply: CMsgClientNetworkingMobileCertReply;
  CMsgClientNetworkingMobileCertRequest: CMsgClientNetworkingMobileCertRequest;
  CMsgClientNewLoginKey: CMsgClientNewLoginKey;
  CMsgClientNewLoginKeyAccepted: CMsgClientNewLoginKeyAccepted;
  CMsgClientOfflineMessageNotification: CMsgClientOfflineMessageNotification;
  CMsgClientOGSReportBug: CMsgClientOGSReportBug;
  CMsgClientOGSReportString: CMsgClientOGSReportString;
  CMsgClientP2PConnectionFailInfo: CMsgClientP2PConnectionFailInfo;
  CMsgClientP2PConnectionInfo: CMsgClientP2PConnectionInfo;
  CMsgClientPeerChunkRequest: CMsgClientPeerChunkRequest;
  CMsgClientPeerChunkResponse: CMsgClientPeerChunkResponse;
  CMsgClientPendingGameLaunch: CMsgClientPendingGameLaunch;
  CMsgClientPendingGameLaunchResponse: CMsgClientPendingGameLaunchResponse;
  CMsgClientPersonaState: CMsgClientPersonaState;
  CMsgClientPICSAccessTokenRequest: CMsgClientPICSAccessTokenRequest;
  CMsgClientPICSAccessTokenResponse: CMsgClientPICSAccessTokenResponse;
  CMsgClientPICSChangesSinceRequest: CMsgClientPICSChangesSinceRequest;
  CMsgClientPICSChangesSinceResponse: CMsgClientPICSChangesSinceResponse;
  CMsgClientPICSPrivateBetaRequest: CMsgClientPICSPrivateBetaRequest;
  CMsgClientPICSPrivateBetaResponse: CMsgClientPICSPrivateBetaResponse;
  CMsgClientPICSProductInfoRequest: CMsgClientPICSProductInfoRequest;
  CMsgClientPICSProductInfoResponse: CMsgClientPICSProductInfoResponse;
  CMsgClientPlayerNicknameList: CMsgClientPlayerNicknameList;
  CMsgClientPlayingSessionState: CMsgClientPlayingSessionState;
  CMsgClientPurchaseResponse: CMsgClientPurchaseResponse;
  CMsgClientPurchaseWithMachineID: CMsgClientPurchaseWithMachineID;
  CMsgClientRedeemGuestPass: CMsgClientRedeemGuestPass;
  CMsgClientRedeemGuestPassResponse: CMsgClientRedeemGuestPassResponse;
  CMsgClientRegisterAuthTicketWithCM: CMsgClientRegisterAuthTicketWithCM;
  CMsgClientRegisterKey: CMsgClientRegisterKey;
  CMsgClientRegisterOEMMachine: CMsgClientRegisterOEMMachine;
  CMsgClientRegisterOEMMachineResponse: CMsgClientRegisterOEMMachineResponse;
  CMsgClientRemoveFriend: CMsgClientRemoveFriend;
  CMsgClientRemoveFriendFromGroup: CMsgClientRemoveFriendFromGroup;
  CMsgClientRemoveFriendFromGroupResponse: CMsgClientRemoveFriendFromGroupResponse;
  CMsgClientReportOverlayDetourFailure: CMsgClientReportOverlayDetourFailure;
  CMsgClientRequestedClientStats: CMsgClientRequestedClientStats;
  CMsgClientRequestEncryptedAppTicket: CMsgClientRequestEncryptedAppTicket;
  CMsgClientRequestEncryptedAppTicketResponse: CMsgClientRequestEncryptedAppTicketResponse;
  CMsgClientRequestForgottenPasswordEmail: CMsgClientRequestForgottenPasswordEmail;
  CMsgClientRequestForgottenPasswordEmailResponse: CMsgClientRequestForgottenPasswordEmailResponse;
  CMsgClientRequestFreeLicense: CMsgClientRequestFreeLicense;
  CMsgClientRequestFreeLicenseResponse: CMsgClientRequestFreeLicenseResponse;
  CMsgClientRequestFriendData: CMsgClientRequestFriendData;
  CMsgClientRequestWebAPIAuthenticateUserNonce: CMsgClientRequestWebAPIAuthenticateUserNonce;
  CMsgClientRequestWebAPIAuthenticateUserNonceResponse: CMsgClientRequestWebAPIAuthenticateUserNonceResponse;
  CMsgClientRichPresenceInfo: CMsgClientRichPresenceInfo;
  CMsgClientRichPresenceRequest: CMsgClientRichPresenceRequest;
  CMsgClientRichPresenceUpload: CMsgClientRichPresenceUpload;
  CMsgClientSecret: CMsgClientSecret;
  CMsgClientServersAvailable: CMsgClientServersAvailable;
  CMsgClientServerTimestampRequest: CMsgClientServerTimestampRequest;
  CMsgClientServerTimestampResponse: CMsgClientServerTimestampResponse;
  CMsgClientServiceCall: CMsgClientServiceCall;
  CMsgClientServiceCallResponse: CMsgClientServiceCallResponse;
  CMsgClientServiceMethodLegacy: CMsgClientServiceMethodLegacy;
  CMsgClientServiceMethodLegacyResponse: CMsgClientServiceMethodLegacyResponse;
  CMsgClientServiceModule: CMsgClientServiceModule;
  CMsgClientSessionToken: CMsgClientSessionToken;
  CMsgClientSetClientAppUpdateState: CMsgClientSetClientAppUpdateState;
  CMsgClientSetClientAppUpdateStateResponse: CMsgClientSetClientAppUpdateStateResponse;
  CMsgClientSetPlayerNickname: CMsgClientSetPlayerNickname;
  CMsgClientSetPlayerNicknameResponse: CMsgClientSetPlayerNicknameResponse;
  CMsgClientSettings: CMsgClientSettings;
  CMsgClientShaderHitCache: CMsgClientShaderHitCache;
  CMsgClientShaderHitCacheEntry: CMsgClientShaderHitCacheEntry;
  CMsgClientSharedLibraryLockStatus: CMsgClientSharedLibraryLockStatus;
  CMsgClientSharedLibraryStopPlaying: CMsgClientSharedLibraryStopPlaying;
  CMsgClientSiteInfo: CMsgClientSiteInfo;
  CMsgClientSiteLicenseCheckout: CMsgClientSiteLicenseCheckout;
  CMsgClientSiteLicenseCheckoutResponse: CMsgClientSiteLicenseCheckoutResponse;
  CMsgClientSiteLicenseGetAvailableSeats: CMsgClientSiteLicenseGetAvailableSeats;
  CMsgClientSiteLicenseGetAvailableSeatsResponse: CMsgClientSiteLicenseGetAvailableSeatsResponse;
  CMsgClientSiteLicenseGetContentCacheInfoResponse: CMsgClientSiteLicenseGetContentCacheInfoResponse;
  CMsgClientStartPeerContentServer: CMsgClientStartPeerContentServer;
  CMsgClientStartPeerContentServerResponse: CMsgClientStartPeerContentServerResponse;
  CMsgClientStat2: CMsgClientStat2;
  CMsgClientStatsUpdated: CMsgClientStatsUpdated;
  CMsgClientStoreUserStats2: CMsgClientStoreUserStats2;
  CMsgClientStoreUserStatsResponse: CMsgClientStoreUserStatsResponse;
  CMsgClientTicketAuthComplete: CMsgClientTicketAuthComplete;
  CMsgClientUCMAddScreenshot: CMsgClientUCMAddScreenshot;
  CMsgClientUCMAddScreenshotResponse: CMsgClientUCMAddScreenshotResponse;
  CMsgClientUCMDeletePublishedFile: CMsgClientUCMDeletePublishedFile;
  CMsgClientUCMDeletePublishedFileResponse: CMsgClientUCMDeletePublishedFileResponse;
  CMsgClientUCMDeleteScreenshot: CMsgClientUCMDeleteScreenshot;
  CMsgClientUCMDeleteScreenshotResponse: CMsgClientUCMDeleteScreenshotResponse;
  CMsgClientUCMEnumeratePublishedFilesByUserAction: CMsgClientUCMEnumeratePublishedFilesByUserAction;
  CMsgClientUCMEnumeratePublishedFilesByUserActionResponse: CMsgClientUCMEnumeratePublishedFilesByUserActionResponse;
  CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdates;
  CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse: CMsgClientUCMEnumerateUserSubscribedFilesWithUpdatesResponse;
  CMsgClientUCMPublishedFileUpdated: CMsgClientUCMPublishedFileUpdated;
  CMsgClientUCMPublishFile: CMsgClientUCMPublishFile;
  CMsgClientUCMPublishFileResponse: CMsgClientUCMPublishFileResponse;
  CMsgClientUCMSetUserPublishedFileAction: CMsgClientUCMSetUserPublishedFileAction;
  CMsgClientUCMSetUserPublishedFileActionResponse: CMsgClientUCMSetUserPublishedFileActionResponse;
  CMsgClientUCMUpdatePublishedFile: CMsgClientUCMUpdatePublishedFile;
  CMsgClientUCMUpdatePublishedFileResponse: CMsgClientUCMUpdatePublishedFileResponse;
  CMsgClientUDSP2PSessionEnded: CMsgClientUDSP2PSessionEnded;
  CMsgClientUDSP2PSessionStarted: CMsgClientUDSP2PSessionStarted;
  CMsgClientUGSGetGlobalStats: CMsgClientUGSGetGlobalStats;
  CMsgClientUGSGetGlobalStatsResponse: CMsgClientUGSGetGlobalStatsResponse;
  CMsgClientUIMode: CMsgClientUIMode;
  CMsgClientUninstallClientApp: CMsgClientUninstallClientApp;
  CMsgClientUninstallClientAppResponse: CMsgClientUninstallClientAppResponse;
  CMsgClientUpdateUserGameInfo: CMsgClientUpdateUserGameInfo;
  CMsgClientUseLocalDeviceAuthorizations: CMsgClientUseLocalDeviceAuthorizations;
  CMsgClientUserNotifications: CMsgClientUserNotifications;
  CMsgClientVanityURLChangedNotification: CMsgClientVanityURLChangedNotification;
  CMsgClientVoiceCallPreAuthorize: CMsgClientVoiceCallPreAuthorize;
  CMsgClientVoiceCallPreAuthorizeResponse: CMsgClientVoiceCallPreAuthorizeResponse;
  CMsgClientWalletInfoUpdate: CMsgClientWalletInfoUpdate;
  CMsgClientWorkshopItemChangesRequest: CMsgClientWorkshopItemChangesRequest;
  CMsgClientWorkshopItemChangesResponse: CMsgClientWorkshopItemChangesResponse;
  CMsgClose: CMsgClose;
  CMsgCloseDevTools: CMsgCloseDevTools;
  CMsgCloudPendingRemoteOperations: CMsgCloudPendingRemoteOperations;
  CMsgComboNeedsPaint: CMsgComboNeedsPaint;
  CMsgCopy: CMsgCopy;
  CMsgCREGetUserPublishedItemVoteDetails: CMsgCREGetUserPublishedItemVoteDetails;
  CMsgCREGetUserPublishedItemVoteDetailsResponse: CMsgCREGetUserPublishedItemVoteDetailsResponse;
  CMsgCREItemVoteSummary: CMsgCREItemVoteSummary;
  CMsgCREItemVoteSummaryResponse: CMsgCREItemVoteSummaryResponse;
  CMsgCREUpdateUserPublishedItemVote: CMsgCREUpdateUserPublishedItemVote;
  CMsgCREUpdateUserPublishedItemVoteResponse: CMsgCREUpdateUserPublishedItemVoteResponse;
  CMsgCtrlTabPressed: CMsgCtrlTabPressed;
  CMsgDisableBackgroundThrottling: CMsgDisableBackgroundThrottling;
  CMsgDisableF5: CMsgDisableF5;
  CMsgDisplayInfo: CMsgDisplayInfo;
  CMsgDPGetNumberOfCurrentPlayers: CMsgDPGetNumberOfCurrentPlayers;
  CMsgDPGetNumberOfCurrentPlayersResponse: CMsgDPGetNumberOfCurrentPlayersResponse;
  CMsgDraggableRegionsChanged: CMsgDraggableRegionsChanged;
  CMsgDRMDownloadRequestWithCrashData: CMsgDRMDownloadRequestWithCrashData;
  CMsgDRMDownloadResponse: CMsgDRMDownloadResponse;
  CMsgDRMFinalResult: CMsgDRMFinalResult;
  CMsgExecuteJavaScript: CMsgExecuteJavaScript;
  CMsgExitFullScreen: CMsgExitFullScreen;
  CMsgFactoryResetState: CMsgFactoryResetState;
  CMsgFavIconURLChanged: CMsgFavIconURLChanged;
  CMsgFileLoadDialog: CMsgFileLoadDialog;
  CMsgFileLoadDialogResponse: CMsgFileLoadDialogResponse;
  CMsgFind: CMsgFind;
  CMsgFinishedRequest: CMsgFinishedRequest;
  CMsgFocusedNodeText: CMsgFocusedNodeText;
  CMsgFocusedNodeTextResponse: CMsgFocusedNodeTextResponse;
  CMsgForcePopupsToDirectHWND: CMsgForcePopupsToDirectHWND;
  CMsgFSEnumerateFollowingList: CMsgFSEnumerateFollowingList;
  CMsgFSEnumerateFollowingListResponse: CMsgFSEnumerateFollowingListResponse;
  CMsgFSGetFollowerCount: CMsgFSGetFollowerCount;
  CMsgFSGetFollowerCountResponse: CMsgFSGetFollowerCountResponse;
  CMsgFSGetIsFollowing: CMsgFSGetIsFollowing;
  CMsgFSGetIsFollowingResponse: CMsgFSGetIsFollowingResponse;
  CMsgFullRepaint: CMsgFullRepaint;
  CMsgGamescopeState: CMsgGamescopeState;
  CMsgGameServerData: CMsgGameServerData;
  CMsgGameServerOutOfDate: CMsgGameServerOutOfDate;
  CMsgGameServerPingQueryData: CMsgGameServerPingQueryData;
  CMsgGameServerPlayersQueryData: CMsgGameServerPlayersQueryData;
  CMsgGameServerPolicyUpdate: CMsgGameServerPolicyUpdate;
  CMsgGameServerRemove: CMsgGameServerRemove;
  CMsgGameServerRulesQueryData: CMsgGameServerRulesQueryData;
  CMsgGCClient: CMsgGCClient;
  CMsgGCRoutingProtoBufHeader: CMsgGCRoutingProtoBufHeader;
  CMsgGenerateSystemReportReply: CMsgGenerateSystemReportReply;
  CMsgGetCookiesForURL: CMsgGetCookiesForURL;
  CMsgGetCookiesForURLResponse: CMsgGetCookiesForURLResponse;
  CMsgGetZoom: CMsgGetZoom;
  CMsgGetZoomResponse: CMsgGetZoomResponse;
  CMsgGMSClientServerQueryResponse: CMsgGMSClientServerQueryResponse;
  CMsgGoBack: CMsgGoBack;
  CMsgGoForward: CMsgGoForward;
  CMsgGSApprove: CMsgGSApprove;
  CMsgGSAssociateWithClan: CMsgGSAssociateWithClan;
  CMsgGSAssociateWithClanResponse: CMsgGSAssociateWithClanResponse;
  CMsgGSComputeNewPlayerCompatibility: CMsgGSComputeNewPlayerCompatibility;
  CMsgGSComputeNewPlayerCompatibilityResponse: CMsgGSComputeNewPlayerCompatibilityResponse;
  CMsgGSDeny: CMsgGSDeny;
  CMsgGSDisconnectNotice: CMsgGSDisconnectNotice;
  CMsgGSKick: CMsgGSKick;
  CMsgGSPlayerList: CMsgGSPlayerList;
  CMsgGSServerType: CMsgGSServerType;
  CMsgGSStatusReply: CMsgGSStatusReply;
  CMsgGSUserPlaying: CMsgGSUserPlaying;
  CMsgHandleContextMenuCommand: CMsgHandleContextMenuCommand;
  CMsgHidePopup: CMsgHidePopup;
  CMsgHideToolTip: CMsgHideToolTip;
  CMsgHideWindow: CMsgHideWindow;
  CMsgHistoryChanged: CMsgHistoryChanged;
  CMsgHorizontalScrollBarSize: CMsgHorizontalScrollBarSize;
  CMsgHorizontalScrollBarSizeResponse: CMsgHorizontalScrollBarSizeResponse;
  CMsgHotkey: CMsgHotkey;
  CMsgICECandidate: CMsgICECandidate;
  CMsgICERendezvous: CMsgICERendezvous;
  CMsgImeCancelComposition: CMsgImeCancelComposition;
  CMsgImeCommitText: CMsgImeCommitText;
  CMsgImeCompositionRangeChanged: CMsgImeCompositionRangeChanged;
  CMsgImeSetComposition: CMsgImeSetComposition;
  CMsgInspectElement: CMsgInspectElement;
  CMsgIPAddress: CMsgIPAddress;
  CMsgIPAddressBucket: CMsgIPAddressBucket;
  CMsgJSAlert: CMsgJSAlert;
  CMsgJSConfirm: CMsgJSConfirm;
  CMsgJSDialogResponse: CMsgJSDialogResponse;
  CMsgJSExecuteCallback: CMsgJSExecuteCallback;
  CMsgJSExecutePromise: CMsgJSExecutePromise;
  CMsgJSMethodCall: CMsgJSMethodCall;
  CMsgJSRaiseException: CMsgJSRaiseException;
  CMsgJSRegisterMethod: CMsgJSRegisterMethod;
  CMsgJSReleaseCallback: CMsgJSReleaseCallback;
  CMsgJSValue: CMsgJSValue;
  CMsgKeyChar: CMsgKeyChar;
  CMsgKeyDown: CMsgKeyDown;
  CMsgKeyUp: CMsgKeyUp;
  CMsgKeyValuePair: CMsgKeyValuePair;
  CMsgKeyValueSet: CMsgKeyValueSet;
  CMsgKubeRPCPacket: CMsgKubeRPCPacket;
  CMsgLEDColor: CMsgLEDColor;
  CMsgLEDManagerDevice: CMsgLEDManagerDevice;
  CMsgLEDManagerState: CMsgLEDManagerState;
  CMsgLinkAtPosition: CMsgLinkAtPosition;
  CMsgLinkAtPositionResponse: CMsgLinkAtPositionResponse;
  CMsgLoadedRequest: CMsgLoadedRequest;
  CMsgLoadError: CMsgLoadError;
  CMsgLoadingResource: CMsgLoadingResource;
  CMsgLoadLocalization: CMsgLoadLocalization;
  CMsgMaximizeRestoreWindow: CMsgMaximizeRestoreWindow;
  CMsgMinimizeWindow: CMsgMinimizeWindow;
  CMsgMonitorInfo: CMsgMonitorInfo;
  CMsgMouseDblClick: CMsgMouseDblClick;
  CMsgMouseDown: CMsgMouseDown;
  CMsgMouseLeave: CMsgMouseLeave;
  CMsgMouseMove: CMsgMouseMove;
  CMsgMouseUp: CMsgMouseUp;
  CMsgMouseWheel: CMsgMouseWheel;
  CMsgMulti: CMsgMulti;
  CMsgNeedsPaint: CMsgNeedsPaint;
  CMsgNeedsSharedTexturePaint: CMsgNeedsSharedTexturePaint;
  CMsgNetworkDeviceConnect: CMsgNetworkDeviceConnect;
  CMsgNetworkDeviceIP4Address: CMsgNetworkDeviceIP4Address;
  CMsgNetworkDeviceIP4Config: CMsgNetworkDeviceIP4Config;
  CMsgNetworkDeviceIP6Address: CMsgNetworkDeviceIP6Address;
  CMsgNetworkDeviceIP6Config: CMsgNetworkDeviceIP6Config;
  CMsgNetworkDevicesData: CMsgNetworkDevicesData;
  CMsgNetworkDeviceSetOptions: CMsgNetworkDeviceSetOptions;
  CMsgNodeHasFocus: CMsgNodeHasFocus;
  CMsgNotifyUserActivation: CMsgNotifyUserActivation;
  CMsgOpenDevTools: CMsgOpenDevTools;
  CMsgOpenNewTab: CMsgOpenNewTab;
  CMsgOpenSteamURL: CMsgOpenSteamURL;
  CMsgPageSecurity: CMsgPageSecurity;
  CMsgPaste: CMsgPaste;
  CMsgPauseRepaint: CMsgPauseRepaint;
  CMsgPersonaChangeResponse: CMsgPersonaChangeResponse;
  CMsgPopupCreated: CMsgPopupCreated;
  CMsgPopupHTMLWindow: CMsgPopupHTMLWindow;
  CMsgPopupHTMLWindowResponse: CMsgPopupHTMLWindowResponse;
  CMsgPostURL: CMsgPostURL;
  CMsgProcessInfoNotification: CMsgProcessInfoNotification;
  CMsgProtoBufHeader: CMsgProtoBufHeader;
  CMsgProtobufWrapped: CMsgProtobufWrapped;
  CMsgReload: CMsgReload;
  CMsgRemoteClientAcceptEULA: CMsgRemoteClientAcceptEULA;
  CMsgRemoteClientAppStatus: CMsgRemoteClientAppStatus;
  CMsgRemoteClientBroadcastClientIDDeconflict: CMsgRemoteClientBroadcastClientIDDeconflict;
  CMsgRemoteClientBroadcastDiscovery: CMsgRemoteClientBroadcastDiscovery;
  CMsgRemoteClientBroadcastHeader: CMsgRemoteClientBroadcastHeader;
  CMsgRemoteClientBroadcastStatus: CMsgRemoteClientBroadcastStatus;
  CMsgRemoteClientGetControllerConfig: CMsgRemoteClientGetControllerConfig;
  CMsgRemoteClientGetControllerConfigResponse: CMsgRemoteClientGetControllerConfigResponse;
  CMsgRemoteClientPairWifiAP: CMsgRemoteClientPairWifiAP;
  CMsgRemoteClientPairWifiAPResponse: CMsgRemoteClientPairWifiAPResponse;
  CMsgRemoteClientStartStream: CMsgRemoteClientStartStream;
  CMsgRemoteClientStartStreamResponse: CMsgRemoteClientStartStreamResponse;
  CMsgRemoteClientStatus: CMsgRemoteClientStatus;
  CMsgRemoteClientStreamingEnabled: CMsgRemoteClientStreamingEnabled;
  CMsgRemoteClientWifiAPStatus: CMsgRemoteClientWifiAPStatus;
  CMsgRemoteDeviceAuthorizationConfirmed: CMsgRemoteDeviceAuthorizationConfirmed;
  CMsgRemoteDeviceAuthorizationRequest: CMsgRemoteDeviceAuthorizationRequest;
  CMsgRemoteDeviceAuthorizationResponse: CMsgRemoteDeviceAuthorizationResponse;
  CMsgRemoteDeviceProofRequest: CMsgRemoteDeviceProofRequest;
  CMsgRemoteDeviceProofResponse: CMsgRemoteDeviceProofResponse;
  CMsgRemoteDeviceStreamingCancelRequest: CMsgRemoteDeviceStreamingCancelRequest;
  CMsgRemoteDeviceStreamingProgress: CMsgRemoteDeviceStreamingProgress;
  CMsgRemoteDeviceStreamingRequest: CMsgRemoteDeviceStreamingRequest;
  CMsgRemoteDeviceStreamingResponse: CMsgRemoteDeviceStreamingResponse;
  CMsgRemoteDeviceStreamTransportSignal: CMsgRemoteDeviceStreamTransportSignal;
  CMsgRenderProcessTerminated: CMsgRenderProcessTerminated;
  CMsgRequestFullScreen: CMsgRequestFullScreen;
  CMsgRequestProcessInfo: CMsgRequestProcessInfo;
  CMsgResizeGripChanged: CMsgResizeGripChanged;
  CMsgSavePageToJPEG: CMsgSavePageToJPEG;
  CMsgSavePageToJPEGResponse: CMsgSavePageToJPEGResponse;
  CMsgScalePageToValue: CMsgScalePageToValue;
  CMsgScalePageToValueResponse: CMsgScalePageToValueResponse;
  CMsgScreenDPI: CMsgScreenDPI;
  CMsgScreenInformationChanged: CMsgScreenInformationChanged;
  CMsgSearchResults: CMsgSearchResults;
  CMsgSelectOSBranchParams: CMsgSelectOSBranchParams;
  CMsgSetAccessibilitySettings: CMsgSetAccessibilitySettings;
  CMsgSetCookie: CMsgSetCookie;
  CMsgSetCursor: CMsgSetCursor;
  CMsgSetFocus: CMsgSetFocus;
  CMsgSetForceDeviceScaleFactors: CMsgSetForceDeviceScaleFactors;
  CMsgSetForegroundWindow: CMsgSetForegroundWindow;
  CMsgSetHorizontalScroll: CMsgSetHorizontalScroll;
  CMsgSetHTMLTitle: CMsgSetHTMLTitle;
  CMsgSetLocalFileRequestMapping: CMsgSetLocalFileRequestMapping;
  CMsgSetNetFakeLocalSystemState: CMsgSetNetFakeLocalSystemState;
  CMsgSetPIDShuttingDown: CMsgSetPIDShuttingDown;
  CMsgSetProtocolBlockList: CMsgSetProtocolBlockList;
  CMsgSetSharedPaintBuffers: CMsgSetSharedPaintBuffers;
  CMsgSetSteamBetaName: CMsgSetSteamBetaName;
  CMsgSetSteamID: CMsgSetSteamID;
  CMsgSetTargetFrameRate: CMsgSetTargetFrameRate;
  CMsgSettingVariant: CMsgSettingVariant;
  CMsgSetTouchGesturesToCancel: CMsgSetTouchGesturesToCancel;
  CMsgSetUIMode: CMsgSetUIMode;
  CMsgSetVerticalScroll: CMsgSetVerticalScroll;
  CMsgSetVRKeyboardVisibility: CMsgSetVRKeyboardVisibility;
  CMsgSetWindowPosition: CMsgSetWindowPosition;
  CMsgSetWindowStackingOrder: CMsgSetWindowStackingOrder;
  CMsgSetWindowVisibility: CMsgSetWindowVisibility;
  CMsgSetZoomLevel: CMsgSetZoomLevel;
  CMsgShortcutAppIds: CMsgShortcutAppIds;
  CMsgShortcutInfo: CMsgShortcutInfo;
  CMsgShortcutInfos: CMsgShortcutInfos;
  CMsgShowBrowserContextMenu: CMsgShowBrowserContextMenu;
  CMsgShowPopup: CMsgShowPopup;
  CMsgShowToolTip: CMsgShowToolTip;
  CMsgShowWindow: CMsgShowWindow;
  CMsgSizePopup: CMsgSizePopup;
  CMsgSleepManagerState: CMsgSleepManagerState;
  CMsgStartDownload: CMsgStartDownload;
  CMsgStartRequest: CMsgStartRequest;
  CMsgStartRequestResponse: CMsgStartRequestResponse;
  CMsgStatusText: CMsgStatusText;
  CMsgSteamAuthCookiesSet: CMsgSteamAuthCookiesSet;
  CMsgSteamAuthNeeded: CMsgSteamAuthNeeded;
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
  CMsgSteamUIBrowserWindow: CMsgSteamUIBrowserWindow;
  CMsgStopFind: CMsgStopFind;
  CMsgStopLoad: CMsgStopLoad;
  CMsgStorageDevicesData: CMsgStorageDevicesData;
  CMsgSystemAudioManagerDevice: CMsgSystemAudioManagerDevice;
  CMsgSystemAudioManagerLink: CMsgSystemAudioManagerLink;
  CMsgSystemAudioManagerNode: CMsgSystemAudioManagerNode;
  CMsgSystemAudioManagerObject: CMsgSystemAudioManagerObject;
  CMsgSystemAudioManagerPort: CMsgSystemAudioManagerPort;
  CMsgSystemAudioManagerState: CMsgSystemAudioManagerState;
  CMsgSystemAudioManagerStateHW: CMsgSystemAudioManagerStateHW;
  CMsgSystemAudioManagerUpdateSomething: CMsgSystemAudioManagerUpdateSomething;
  CMsgSystemAudioVolume: CMsgSystemAudioVolume;
  CMsgSystemDisplay: CMsgSystemDisplay;
  CMsgSystemDisplayManagerSetMode: CMsgSystemDisplayManagerSetMode;
  CMsgSystemDisplayManagerState: CMsgSystemDisplayManagerState;
  CMsgSystemDisplayMode: CMsgSystemDisplayMode;
  CMsgSystemDockState: CMsgSystemDockState;
  CMsgSystemDockUpdateFirmware: CMsgSystemDockUpdateFirmware;
  CMsgSystemDockUpdateState: CMsgSystemDockUpdateState;
  CMsgSystemManagerSettings: CMsgSystemManagerSettings;
  CMsgSystemPerfDiagnosticEntry: CMsgSystemPerfDiagnosticEntry;
  CMsgSystemPerfDiagnosticInfo: CMsgSystemPerfDiagnosticInfo;
  CMsgSystemPerfLegacySettingEntry: CMsgSystemPerfLegacySettingEntry;
  CMsgSystemPerfLegacySettings: CMsgSystemPerfLegacySettings;
  CMsgSystemPerfLimits: CMsgSystemPerfLimits;
  CMsgSystemPerfNetworkInterface: CMsgSystemPerfNetworkInterface;
  CMsgSystemPerfSettings: CMsgSystemPerfSettings;
  CMsgSystemPerfSettingsGlobal: CMsgSystemPerfSettingsGlobal;
  CMsgSystemPerfSettingsPerApp: CMsgSystemPerfSettingsPerApp;
  CMsgSystemPerfSettingsV1: CMsgSystemPerfSettingsV1;
  CMsgSystemPerfState: CMsgSystemPerfState;
  CMsgSystemPerfUpdateSettings: CMsgSystemPerfUpdateSettings;
  CMsgSystemUpdateApplyParams: CMsgSystemUpdateApplyParams;
  CMsgSystemUpdateApplyResult: CMsgSystemUpdateApplyResult;
  CMsgSystemUpdateCheckResult: CMsgSystemUpdateCheckResult;
  CMsgSystemUpdateProgress: CMsgSystemUpdateProgress;
  CMsgSystemUpdateState: CMsgSystemUpdateState;
  CMsgTest_CallClient_Response: CMsgTest_CallClient_Response;
  CMsgTest_MessageToClient_Request: CMsgTest_MessageToClient_Request;
  CMsgTest_MessageToClient_Response: CMsgTest_MessageToClient_Response;
  CMsgTest_MessageToServer_Request: CMsgTest_MessageToServer_Request;
  CMsgTest_MessageToServer_Response: CMsgTest_MessageToServer_Response;
  CMsgTest_NotifyClient_Notification: CMsgTest_NotifyClient_Notification;
  CMsgTest_NotifyServer_Notification: CMsgTest_NotifyServer_Notification;
  CMsgTest_TestClientCall_Request: CMsgTest_TestClientCall_Request;
  CMsgTest_TestClientCall_Response: CMsgTest_TestClientCall_Response;
  CMsgToggleFindInPageDialog: CMsgToggleFindInPageDialog;
  CMsgTOSTreatment: CMsgTOSTreatment;
  CMsgTouchGesture: CMsgTouchGesture;
  CMsgTrading_CancelTradeRequest: CMsgTrading_CancelTradeRequest;
  CMsgTrading_InitiateTradeRequest: CMsgTrading_InitiateTradeRequest;
  CMsgTrading_InitiateTradeResponse: CMsgTrading_InitiateTradeResponse;
  CMsgTrading_StartSession: CMsgTrading_StartSession;
  CMsgUnlockH264: CMsgUnlockH264;
  CMsgUpdateToolTip: CMsgUpdateToolTip;
  CMsgURLChanged: CMsgURLChanged;
  CMsgVerticalScrollBarSize: CMsgVerticalScrollBarSize;
  CMsgVerticalScrollBarSizeResponse: CMsgVerticalScrollBarSizeResponse;
  CMsgVideoGameRecordingComponent: CMsgVideoGameRecordingComponent;
  CMsgVideoGameRecordingDef: CMsgVideoGameRecordingDef;
  CMsgVideoGameRecordingRepresentation: CMsgVideoGameRecordingRepresentation;
  CMsgViewSource: CMsgViewSource;
  CMsgWasHidden: CMsgWasHidden;
  CMsgWebUITransportFailure: CMsgWebUITransportFailure;
  CMsgWebUITransportInfo: CMsgWebUITransportInfo;
  CMsgZoomToElementAtPosition: CMsgZoomToElementAtPosition;
  CMsgZoomToElementAtPositionResponse: CMsgZoomToElementAtPositionResponse;
  CMsgZoomToFocusedElement: CMsgZoomToFocusedElement;
  CNegotiatedConfig: CNegotiatedConfig;
  CNegotiationInitMsg: CNegotiationInitMsg;
  CNegotiationSetConfigMsg: CNegotiationSetConfigMsg;
  COffline_GetOfflineLogonTicket_Request: COffline_GetOfflineLogonTicket_Request;
  COffline_GetOfflineLogonTicket_Response: COffline_GetOfflineLogonTicket_Response;
  COffline_GetUnsignedOfflineLogonTicket_Response: COffline_GetUnsignedOfflineLogonTicket_Response;
  COffline_OfflineLogonTicket: COffline_OfflineLogonTicket;
  ContentDeltaChunks: ContentDeltaChunks;
  ContentManifestMetadata: ContentManifestMetadata;
  ContentManifestPayload: ContentManifestPayload;
  ContentManifestSignature: ContentManifestSignature;
  ControllerGyroEulerAngles: ControllerGyroEulerAngles;
  ControllerQuaternion: ControllerQuaternion;
  ControllerVector2: ControllerVector2;
  ControllerVector3: ControllerVector3;
  COverlayEnabledMsg: COverlayEnabledMsg;
  CPackageReservationStatus: CPackageReservationStatus;
  CParental_ApproveFeatureAccess_Request: CParental_ApproveFeatureAccess_Request;
  CParental_ApprovePlaytime_Request: CParental_ApprovePlaytime_Request;
  CParental_DisableParentalSettings_Request: CParental_DisableParentalSettings_Request;
  CParental_EnableParentalSettings_Request: CParental_EnableParentalSettings_Request;
  CParental_GetParentalSettings_Request: CParental_GetParentalSettings_Request;
  CParental_GetParentalSettings_Response: CParental_GetParentalSettings_Response;
  CParental_GetRequests_Request: CParental_GetRequests_Request;
  CParental_GetRequests_Response: CParental_GetRequests_Response;
  CParental_GetSignedParentalSettings_Request: CParental_GetSignedParentalSettings_Request;
  CParental_GetSignedParentalSettings_Response: CParental_GetSignedParentalSettings_Response;
  CParental_LockClient_Request: CParental_LockClient_Request;
  CParental_ParentalLock_Notification: CParental_ParentalLock_Notification;
  CParental_ParentalSettingsChange_Notification: CParental_ParentalSettingsChange_Notification;
  CParental_ParentalUnlock_Notification: CParental_ParentalUnlock_Notification;
  CParental_PlaytimeUsed_Notification: CParental_PlaytimeUsed_Notification;
  CParental_ReportPlaytimeAndNotify_Request: CParental_ReportPlaytimeAndNotify_Request;
  CParental_RequestFeatureAccess_Request: CParental_RequestFeatureAccess_Request;
  CParental_RequestFeatureAccess_Response: CParental_RequestFeatureAccess_Response;
  CParental_RequestPlaytime_Request: CParental_RequestPlaytime_Request;
  CParental_RequestPlaytime_Response: CParental_RequestPlaytime_Response;
  CParental_SetParentalSettings_Request: CParental_SetParentalSettings_Request;
  CParental_ValidatePassword_Request: CParental_ValidatePassword_Request;
  CParental_ValidatePassword_Response: CParental_ValidatePassword_Response;
  CParental_ValidateToken_Request: CParental_ValidateToken_Request;
  CParties_BeaconLocation: CParties_BeaconLocation;
  CParties_CancelReservation_Request: CParties_CancelReservation_Request;
  CParties_CancelReservation_Response: CParties_CancelReservation_Response;
  CParties_ChangeNumOpenSlots_Request: CParties_ChangeNumOpenSlots_Request;
  CParties_ChangeNumOpenSlots_Response: CParties_ChangeNumOpenSlots_Response;
  CParties_CreateBeacon_Request: CParties_CreateBeacon_Request;
  CParties_CreateBeacon_Response: CParties_CreateBeacon_Response;
  CParties_DestroyBeacon_Request: CParties_DestroyBeacon_Request;
  CParties_DestroyBeacon_Response: CParties_DestroyBeacon_Response;
  CParties_JoinParty_Request: CParties_JoinParty_Request;
  CParties_JoinParty_Response: CParties_JoinParty_Response;
  CParties_OnReservationCompleted_Request: CParties_OnReservationCompleted_Request;
  CParties_OnReservationCompleted_Response: CParties_OnReservationCompleted_Response;
  CPartnerApps_Download_Request: CPartnerApps_Download_Request;
  CPartnerApps_Download_Response: CPartnerApps_Download_Response;
  CPartnerApps_ExistingDRMUpload: CPartnerApps_ExistingDRMUpload;
  CPartnerApps_FindDRMUploads_Request: CPartnerApps_FindDRMUploads_Request;
  CPartnerApps_FindDRMUploads_Response: CPartnerApps_FindDRMUploads_Response;
  CPartnerApps_FinishUpload_Request: CPartnerApps_FinishUpload_Request;
  CPartnerApps_FinishUploadDepot_Request: CPartnerApps_FinishUploadDepot_Request;
  CPartnerApps_FinishUploadDepot_Response: CPartnerApps_FinishUploadDepot_Response;
  CPartnerApps_FinishUploadKVSign_Response: CPartnerApps_FinishUploadKVSign_Response;
  CPartnerApps_FinishUploadLegacyDRM_Request: CPartnerApps_FinishUploadLegacyDRM_Request;
  CPartnerApps_FinishUploadLegacyDRM_Response: CPartnerApps_FinishUploadLegacyDRM_Response;
  CPartnerApps_GetDepotBuildResult_Request: CPartnerApps_GetDepotBuildResult_Request;
  CPartnerApps_GetDepotBuildResult_Response: CPartnerApps_GetDepotBuildResult_Response;
  CPartnerApps_RequestUploadToken_Request: CPartnerApps_RequestUploadToken_Request;
  CPartnerApps_RequestUploadToken_Response: CPartnerApps_RequestUploadToken_Response;
  CPhaseAttribute: CPhaseAttribute;
  CPlayer_AcceptSSA_Request: CPlayer_AcceptSSA_Request;
  CPlayer_AddFriend_Request: CPlayer_AddFriend_Request;
  CPlayer_AddFriend_Response: CPlayer_AddFriend_Response;
  CPlayer_CommunityPreferences: CPlayer_CommunityPreferences;
  CPlayer_CommunityPreferencesChanged_Notification: CPlayer_CommunityPreferencesChanged_Notification;
  CPlayer_DeletePostedStatus_Request: CPlayer_DeletePostedStatus_Request;
  CPlayer_FriendEquippedProfileItemsChanged_Notification: CPlayer_FriendEquippedProfileItemsChanged_Notification;
  CPlayer_FriendNicknameChanged_Notification: CPlayer_FriendNicknameChanged_Notification;
  CPlayer_GetAchievementsProgress_Request: CPlayer_GetAchievementsProgress_Request;
  CPlayer_GetAchievementsProgress_Response: CPlayer_GetAchievementsProgress_Response;
  CPlayer_GetAnimatedAvatar_Request: CPlayer_GetAnimatedAvatar_Request;
  CPlayer_GetAnimatedAvatar_Response: CPlayer_GetAnimatedAvatar_Response;
  CPlayer_GetAvatarFrame_Request: CPlayer_GetAvatarFrame_Request;
  CPlayer_GetAvatarFrame_Response: CPlayer_GetAvatarFrame_Response;
  CPlayer_GetCommunityBadgeProgress_Request: CPlayer_GetCommunityBadgeProgress_Request;
  CPlayer_GetCommunityBadgeProgress_Response: CPlayer_GetCommunityBadgeProgress_Response;
  CPlayer_GetCommunityPreferences_Response: CPlayer_GetCommunityPreferences_Response;
  CPlayer_GetDurationControl_Request: CPlayer_GetDurationControl_Request;
  CPlayer_GetDurationControl_Response: CPlayer_GetDurationControl_Response;
  CPlayer_GetEmoticonList_Response: CPlayer_GetEmoticonList_Response;
  CPlayer_GetFavoriteBadge_Request: CPlayer_GetFavoriteBadge_Request;
  CPlayer_GetFavoriteBadge_Response: CPlayer_GetFavoriteBadge_Response;
  CPlayer_GetFriendsGameplayInfo_Request: CPlayer_GetFriendsGameplayInfo_Request;
  CPlayer_GetFriendsGameplayInfo_Response: CPlayer_GetFriendsGameplayInfo_Response;
  CPlayer_GetGameAchievements_Request: CPlayer_GetGameAchievements_Request;
  CPlayer_GetGameAchievements_Response: CPlayer_GetGameAchievements_Response;
  CPlayer_GetGameBadgeLevels_Request: CPlayer_GetGameBadgeLevels_Request;
  CPlayer_GetGameBadgeLevels_Response: CPlayer_GetGameBadgeLevels_Response;
  CPlayer_GetLastPlayedTimes_Request: CPlayer_GetLastPlayedTimes_Request;
  CPlayer_GetLastPlayedTimes_Response: CPlayer_GetLastPlayedTimes_Response;
  CPlayer_GetMiniProfileBackground_Request: CPlayer_GetMiniProfileBackground_Request;
  CPlayer_GetMiniProfileBackground_Response: CPlayer_GetMiniProfileBackground_Response;
  CPlayer_GetMutualFriendsForIncomingInvites_Response: CPlayer_GetMutualFriendsForIncomingInvites_Response;
  CPlayer_GetNewSteamAnnouncementState_Request: CPlayer_GetNewSteamAnnouncementState_Request;
  CPlayer_GetNewSteamAnnouncementState_Response: CPlayer_GetNewSteamAnnouncementState_Response;
  CPlayer_GetNicknameList_Response: CPlayer_GetNicknameList_Response;
  CPlayer_GetOwnedGames_Request: CPlayer_GetOwnedGames_Request;
  CPlayer_GetOwnedGames_Response: CPlayer_GetOwnedGames_Response;
  CPlayer_GetPerFriendPreferences_Response: CPlayer_GetPerFriendPreferences_Response;
  CPlayer_GetPlayerLinkDetails_Request: CPlayer_GetPlayerLinkDetails_Request;
  CPlayer_GetPlayerLinkDetails_Response: CPlayer_GetPlayerLinkDetails_Response;
  CPlayer_GetPlayNext_Request: CPlayer_GetPlayNext_Request;
  CPlayer_GetPlayNext_Response: CPlayer_GetPlayNext_Response;
  CPlayer_GetPostedStatus_Request: CPlayer_GetPostedStatus_Request;
  CPlayer_GetPostedStatus_Response: CPlayer_GetPostedStatus_Response;
  CPlayer_GetPrivacySettings_Response: CPlayer_GetPrivacySettings_Response;
  CPlayer_GetProfileBackground_Request: CPlayer_GetProfileBackground_Request;
  CPlayer_GetProfileBackground_Response: CPlayer_GetProfileBackground_Response;
  CPlayer_GetProfileCustomization_Request: CPlayer_GetProfileCustomization_Request;
  CPlayer_GetProfileCustomization_Response: CPlayer_GetProfileCustomization_Response;
  CPlayer_GetProfileItemsEquipped_Request: CPlayer_GetProfileItemsEquipped_Request;
  CPlayer_GetProfileItemsEquipped_Response: CPlayer_GetProfileItemsEquipped_Response;
  CPlayer_GetProfileItemsOwned_Request: CPlayer_GetProfileItemsOwned_Request;
  CPlayer_GetProfileItemsOwned_Response: CPlayer_GetProfileItemsOwned_Response;
  CPlayer_GetProfileThemesAvailable_Response: CPlayer_GetProfileThemesAvailable_Response;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response;
  CPlayer_GetPurchasedProfileCustomizations_Request: CPlayer_GetPurchasedProfileCustomizations_Request;
  CPlayer_GetPurchasedProfileCustomizations_Response: CPlayer_GetPurchasedProfileCustomizations_Response;
  CPlayer_GetRecentPlaytimeSessionsForChild_Request: CPlayer_GetRecentPlaytimeSessionsForChild_Request;
  CPlayer_GetRecentPlaytimeSessionsForChild_Response: CPlayer_GetRecentPlaytimeSessionsForChild_Response;
  CPlayer_GetSteamDeckKeyboardSkin_Request: CPlayer_GetSteamDeckKeyboardSkin_Request;
  CPlayer_GetSteamDeckKeyboardSkin_Response: CPlayer_GetSteamDeckKeyboardSkin_Response;
  CPlayer_GetTextFilterWords_Response: CPlayer_GetTextFilterWords_Response;
  CPlayer_GetTimeSSAAccepted_Response: CPlayer_GetTimeSSAAccepted_Response;
  CPlayer_GetTopAchievementsForGames_Request: CPlayer_GetTopAchievementsForGames_Request;
  CPlayer_GetTopAchievementsForGames_Response: CPlayer_GetTopAchievementsForGames_Response;
  CPlayer_IgnoreFriend_Request: CPlayer_IgnoreFriend_Request;
  CPlayer_IgnoreFriend_Response: CPlayer_IgnoreFriend_Response;
  CPlayer_IncomingInviteMutualFriendList: CPlayer_IncomingInviteMutualFriendList;
  CPlayer_LastPlayedTimes_Notification: CPlayer_LastPlayedTimes_Notification;
  CPlayer_NewSteamAnnouncementState_Notification: CPlayer_NewSteamAnnouncementState_Notification;
  CPlayer_PerFriendPreferencesChanged_Notification: CPlayer_PerFriendPreferencesChanged_Notification;
  CPlayer_PostStatusToFriends_Request: CPlayer_PostStatusToFriends_Request;
  CPlayer_PrivacySettingsChanged_Notification: CPlayer_PrivacySettingsChanged_Notification;
  CPlayer_RecordDisconnectedPlaytime_Request: CPlayer_RecordDisconnectedPlaytime_Request;
  CPlayer_RemoveFriend_Request: CPlayer_RemoveFriend_Request;
  CPlayer_RemoveFriend_Response: CPlayer_RemoveFriend_Response;
  CPlayer_SetAnimatedAvatar_Request: CPlayer_SetAnimatedAvatar_Request;
  CPlayer_SetAvatarFrame_Request: CPlayer_SetAvatarFrame_Request;
  CPlayer_SetCommunityPreferences_Request: CPlayer_SetCommunityPreferences_Request;
  CPlayer_SetEquippedProfileItemFlags_Request: CPlayer_SetEquippedProfileItemFlags_Request;
  CPlayer_SetFavoriteBadge_Request: CPlayer_SetFavoriteBadge_Request;
  CPlayer_SetMiniProfileBackground_Request: CPlayer_SetMiniProfileBackground_Request;
  CPlayer_SetPerFriendPreferences_Request: CPlayer_SetPerFriendPreferences_Request;
  CPlayer_SetProfileBackground_Request: CPlayer_SetProfileBackground_Request;
  CPlayer_SetProfilePreferences_Request: CPlayer_SetProfilePreferences_Request;
  CPlayer_SetProfileTheme_Request: CPlayer_SetProfileTheme_Request;
  CPlayer_SetSteamDeckKeyboardSkin_Request: CPlayer_SetSteamDeckKeyboardSkin_Request;
  CPlayer_TextFilterWords: CPlayer_TextFilterWords;
  CPlayer_TextFilterWordsChanged_Notification: CPlayer_TextFilterWordsChanged_Notification;
  CPlayer_UpdateSteamAnnouncementLastRead_Request: CPlayer_UpdateSteamAnnouncementLastRead_Request;
  CPrivacySettings: CPrivacySettings;
  CPublishedFile_AddAppRelationship_Request: CPublishedFile_AddAppRelationship_Request;
  CPublishedFile_AddChild_Request: CPublishedFile_AddChild_Request;
  CPublishedFile_AreFilesInSubscriptionList_Request: CPublishedFile_AreFilesInSubscriptionList_Request;
  CPublishedFile_AreFilesInSubscriptionList_Response: CPublishedFile_AreFilesInSubscriptionList_Response;
  CPublishedFile_CanSubscribe_Request: CPublishedFile_CanSubscribe_Request;
  CPublishedFile_CanSubscribe_Response: CPublishedFile_CanSubscribe_Response;
  CPublishedFile_Delete_Request: CPublishedFile_Delete_Request;
  CPublishedFile_FileDeleted_Client_Notification: CPublishedFile_FileDeleted_Client_Notification;
  CPublishedFile_FileSubscribed_Notification: CPublishedFile_FileSubscribed_Notification;
  CPublishedFile_FileUnsubscribed_Notification: CPublishedFile_FileUnsubscribed_Notification;
  CPublishedFile_GetAppRelationships_Request: CPublishedFile_GetAppRelationships_Request;
  CPublishedFile_GetAppRelationships_Response: CPublishedFile_GetAppRelationships_Response;
  CPublishedFile_GetAppRelationshipsBatched_Request: CPublishedFile_GetAppRelationshipsBatched_Request;
  CPublishedFile_GetAppRelationshipsBatched_Response: CPublishedFile_GetAppRelationshipsBatched_Response;
  CPublishedFile_GetChangeHistory_Request: CPublishedFile_GetChangeHistory_Request;
  CPublishedFile_GetChangeHistory_Response: CPublishedFile_GetChangeHistory_Response;
  CPublishedFile_GetChangeHistoryEntry_Request: CPublishedFile_GetChangeHistoryEntry_Request;
  CPublishedFile_GetChangeHistoryEntry_Response: CPublishedFile_GetChangeHistoryEntry_Response;
  CPublishedFile_GetContentDescriptors_Request: CPublishedFile_GetContentDescriptors_Request;
  CPublishedFile_GetContentDescriptors_Response: CPublishedFile_GetContentDescriptors_Response;
  CPublishedFile_GetDetails_Request: CPublishedFile_GetDetails_Request;
  CPublishedFile_GetDetails_Response: CPublishedFile_GetDetails_Response;
  CPublishedFile_GetItemChanges_Request: CPublishedFile_GetItemChanges_Request;
  CPublishedFile_GetItemChanges_Response: CPublishedFile_GetItemChanges_Response;
  CPublishedFile_GetItemInfo_Request: CPublishedFile_GetItemInfo_Request;
  CPublishedFile_GetItemInfo_Response: CPublishedFile_GetItemInfo_Response;
  CPublishedFile_GetSubSectionData_Request: CPublishedFile_GetSubSectionData_Request;
  CPublishedFile_GetSubSectionData_Response: CPublishedFile_GetSubSectionData_Response;
  CPublishedFile_GetUserFiles_Request: CPublishedFile_GetUserFiles_Request;
  CPublishedFile_GetUserFiles_Response: CPublishedFile_GetUserFiles_Response;
  CPublishedFile_GetUserVoteSummary_Request: CPublishedFile_GetUserVoteSummary_Request;
  CPublishedFile_GetUserVoteSummary_Response: CPublishedFile_GetUserVoteSummary_Response;
  CPublishedFile_Publish_Request: CPublishedFile_Publish_Request;
  CPublishedFile_Publish_Response: CPublishedFile_Publish_Response;
  CPublishedFile_QueryFiles_Request: CPublishedFile_QueryFiles_Request;
  CPublishedFile_QueryFiles_Response: CPublishedFile_QueryFiles_Response;
  CPublishedFile_RefreshVotingQueue_Request: CPublishedFile_RefreshVotingQueue_Request;
  CPublishedFile_RemoveAppRelationship_Request: CPublishedFile_RemoveAppRelationship_Request;
  CPublishedFile_RemoveChild_Request: CPublishedFile_RemoveChild_Request;
  CPublishedFile_SetCollectionChildren_Request: CPublishedFile_SetCollectionChildren_Request;
  CPublishedFile_SetPlaytimeForControllerConfigs_Request: CPublishedFile_SetPlaytimeForControllerConfigs_Request;
  CPublishedFile_SetSubscriptionListFromCollection_Request: CPublishedFile_SetSubscriptionListFromCollection_Request;
  CPublishedFile_StartPlaytimeTracking_Request: CPublishedFile_StartPlaytimeTracking_Request;
  CPublishedFile_StopPlaytimeTracking_Request: CPublishedFile_StopPlaytimeTracking_Request;
  CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request: CPublishedFile_StopPlaytimeTrackingForAllAppItems_Request;
  CPublishedFile_Subscribe_Request: CPublishedFile_Subscribe_Request;
  CPublishedFile_Unsubscribe_Request: CPublishedFile_Unsubscribe_Request;
  CPublishedFile_Update_Request: CPublishedFile_Update_Request;
  CPublishedFile_UpdateContentDescriptors_Request: CPublishedFile_UpdateContentDescriptors_Request;
  CPublishedFile_UpdateContentDescriptors_Response: CPublishedFile_UpdateContentDescriptors_Response;
  CPublishedFile_Vote_Request: CPublishedFile_Vote_Request;
  CQueuedMatchmaking_SearchForGame_Request: CQueuedMatchmaking_SearchForGame_Request;
  CQueuedMatchmaking_SearchForGame_Response: CQueuedMatchmaking_SearchForGame_Response;
  CQueuedMatchmakingGameHost_EndGame_Request: CQueuedMatchmakingGameHost_EndGame_Request;
  CQueuedMatchmakingGameHost_SearchForPlayers_Request: CQueuedMatchmakingGameHost_SearchForPlayers_Request;
  CQueuedMatchmakingGameHost_SearchForPlayers_Response: CQueuedMatchmakingGameHost_SearchForPlayers_Response;
  CQueuedMatchmakingGameHost_SubmitPlayerResult_Request: CQueuedMatchmakingGameHost_SubmitPlayerResult_Request;
  CRecordedInput: CRecordedInput;
  CRecordedInputStream: CRecordedInputStream;
  CRemoteClient_AddClientTask_Request: CRemoteClient_AddClientTask_Request;
  CRemoteClient_AllocateRelayServer_Request: CRemoteClient_AllocateRelayServer_Request;
  CRemoteClient_AllocateRelayServer_Response: CRemoteClient_AllocateRelayServer_Response;
  CRemoteClient_AllocateSDR_Request: CRemoteClient_AllocateSDR_Request;
  CRemoteClient_CancelPairing_Request: CRemoteClient_CancelPairing_Request;
  CRemoteClient_ClientDetails: CRemoteClient_ClientDetails;
  CRemoteClient_ClientLogin: CRemoteClient_ClientLogin;
  CRemoteClient_CreateRemotePlayTogetherInvitation_Request: CRemoteClient_CreateRemotePlayTogetherInvitation_Request;
  CRemoteClient_CreateRemotePlayTogetherInvitation_Response: CRemoteClient_CreateRemotePlayTogetherInvitation_Response;
  CRemoteClient_CreateSession_Response: CRemoteClient_CreateSession_Response;
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Request: CRemoteClient_DeleteRemotePlayTogetherInvitation_Request;
  CRemoteClient_DeleteSession_Notification: CRemoteClient_DeleteSession_Notification;
  CRemoteClient_DeviceDetails: CRemoteClient_DeviceDetails;
  CRemoteClient_GetPairingInfo_Request: CRemoteClient_GetPairingInfo_Request;
  CRemoteClient_GetPairingInfo_Response: CRemoteClient_GetPairingInfo_Response;
  CRemoteClient_GetRecentClients_Response: CRemoteClient_GetRecentClients_Response;
  CRemoteClient_GetReplies_Request: CRemoteClient_GetReplies_Request;
  CRemoteClient_GetReplies_Response: CRemoteClient_GetReplies_Response;
  CRemoteClient_LookupRemotePlayTogetherInvitation_Request: CRemoteClient_LookupRemotePlayTogetherInvitation_Request;
  CRemoteClient_LookupRemotePlayTogetherInvitation_Response: CRemoteClient_LookupRemotePlayTogetherInvitation_Response;
  CRemoteClient_MarkTaskComplete_Request: CRemoteClient_MarkTaskComplete_Request;
  CRemoteClient_Offline_Notification: CRemoteClient_Offline_Notification;
  CRemoteClient_Online_Notification: CRemoteClient_Online_Notification;
  CRemoteClient_RegisterStatusUpdate_Notification: CRemoteClient_RegisterStatusUpdate_Notification;
  CRemoteClient_RemotePacket_Notification: CRemoteClient_RemotePacket_Notification;
  CRemoteClient_ReplyPacket_Notification: CRemoteClient_ReplyPacket_Notification;
  CRemoteClient_SetPairingInfo_Request: CRemoteClient_SetPairingInfo_Request;
  CRemoteClient_StartPairing_Request: CRemoteClient_StartPairing_Request;
  CRemoteClient_StartPairing_Response: CRemoteClient_StartPairing_Response;
  CRemoteClient_SteamBroadcast_Notification: CRemoteClient_SteamBroadcast_Notification;
  CRemoteClient_SteamToSteam_Notification: CRemoteClient_SteamToSteam_Notification;
  CRemoteClient_Task: CRemoteClient_Task;
  CRemoteClient_TaskList_Notification: CRemoteClient_TaskList_Notification;
  CRemoteClient_UnregisterStatusUpdate_Notification: CRemoteClient_UnregisterStatusUpdate_Notification;
  CRemoteHIDMsg: CRemoteHIDMsg;
  CRemotePlay_SessionStarted_Request: CRemotePlay_SessionStarted_Request;
  CRemotePlay_SessionStarted_Response: CRemotePlay_SessionStarted_Response;
  CRemotePlay_SessionStopped_Notification: CRemotePlay_SessionStopped_Notification;
  CRemotePlayTogether_Notification: CRemotePlayTogether_Notification;
  CRemotePlayTogetherGroupUpdateMsg: CRemotePlayTogetherGroupUpdateMsg;
  CRemoveAuthenticatorViaChallengeContinue_Replacement_Token: CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;
  CReservationPositionMessage: CReservationPositionMessage;
  CSaveTouchConfigLayoutMsg: CSaveTouchConfigLayoutMsg;
  CServerHandshakeMsg: CServerHandshakeMsg;
  CSetActivityMsg: CSetActivityMsg;
  CSetBitrateOverrideMsg: CSetBitrateOverrideMsg;
  CSetCapslockMsg: CSetCapslockMsg;
  CSetCaptureSizeMsg: CSetCaptureSizeMsg;
  CSetCursorImageMsg: CSetCursorImageMsg;
  CSetCursorMsg: CSetCursorMsg;
  CSetCursorScaleMsg: CSetCursorScaleMsg;
  CSetFlashStateMsg: CSetFlashStateMsg;
  CSetGammaRampMsg: CSetGammaRampMsg;
  CSetIconMsg: CSetIconMsg;
  CSetInputTemporarilyDisabledMsg: CSetInputTemporarilyDisabledMsg;
  CSetKeymapMsg: CSetKeymapMsg;
  CSetQoSMsg: CSetQoSMsg;
  CSetQualityOverrideMsg: CSetQualityOverrideMsg;
  CSetSpectatorModeMsg: CSetSpectatorModeMsg;
  CSetStreamingClientConfig: CSetStreamingClientConfig;
  CSetTargetBitrateMsg: CSetTargetBitrateMsg;
  CSetTargetFramerateMsg: CSetTargetFramerateMsg;
  CSetTitleMsg: CSetTitleMsg;
  CSetTouchConfigDataMsg: CSetTouchConfigDataMsg;
  CSetTouchIconDataMsg: CSetTouchIconDataMsg;
  CShader_GetBucketManifest_Request: CShader_GetBucketManifest_Request;
  CShader_GetBucketManifest_Response: CShader_GetBucketManifest_Response;
  CShader_GetShaderReportingCadence_Response: CShader_GetShaderReportingCadence_Response;
  CShader_GetStaleBucket_Request: CShader_GetStaleBucket_Request;
  CShader_GetStaleBucket_Response: CShader_GetStaleBucket_Response;
  CShader_RegisterShader_Request: CShader_RegisterShader_Request;
  CShader_RegisterShader_Response: CShader_RegisterShader_Response;
  CShader_ReportExternalBuild_Request: CShader_ReportExternalBuild_Request;
  CShader_SendShader_Request: CShader_SendShader_Request;
  CSharedJSContext_GetDesiredSteamUIWindows_Response: CSharedJSContext_GetDesiredSteamUIWindows_Response;
  CShowCursorMsg: CShowCursorMsg;
  CSiteLicense_ClientGetAvailableSeats_Request: CSiteLicense_ClientGetAvailableSeats_Request;
  CSiteLicense_ClientGetAvailableSeats_Response: CSiteLicense_ClientGetAvailableSeats_Response;
  CSiteLicense_ClientSeatCheckout_Notification: CSiteLicense_ClientSeatCheckout_Notification;
  CSiteLicense_ClientSeatCheckout_Request: CSiteLicense_ClientSeatCheckout_Request;
  CSiteLicense_InitiateAssociation_Request: CSiteLicense_InitiateAssociation_Request;
  CSiteLicense_InitiateAssociation_Response: CSiteLicense_InitiateAssociation_Response;
  CSiteLicense_LCSAssociateUser_Request: CSiteLicense_LCSAssociateUser_Request;
  CSiteLicense_LCSAuthenticate_Request: CSiteLicense_LCSAuthenticate_Request;
  CSiteLicense_LCSAuthenticate_Response: CSiteLicense_LCSAuthenticate_Response;
  CSiteManagerClient_IncomingClient_Request: CSiteManagerClient_IncomingClient_Request;
  CSiteManagerClient_TrackedPayments_Notification: CSiteManagerClient_TrackedPayments_Notification;
  CSleepManager_GetState_Response: CSleepManager_GetState_Response;
  CSleepManager_RequestSuspend_Notification: CSleepManager_RequestSuspend_Notification;
  CSleepManager_SwitchToPowerState_Request: CSleepManager_SwitchToPowerState_Request;
  CStartAudioDataMsg: CStartAudioDataMsg;
  CStartNetworkTestMsg: CStartNetworkTestMsg;
  CStartVideoDataMsg: CStartVideoDataMsg;
  CSteamDeckCompatibility_SetFeedback_Request: CSteamDeckCompatibility_SetFeedback_Request;
  CSteamDeckCompatibility_ShouldPrompt_Request: CSteamDeckCompatibility_ShouldPrompt_Request;
  CSteamDeckCompatibility_ShouldPrompt_Response: CSteamDeckCompatibility_ShouldPrompt_Response;
  CSteamEngine_GetGameIDForPID_Request: CSteamEngine_GetGameIDForPID_Request;
  CSteamEngine_GetGameIDForPID_Response: CSteamEngine_GetGameIDForPID_Response;
  CSteamEngine_GetTextFilterDictionary_Request: CSteamEngine_GetTextFilterDictionary_Request;
  CSteamEngine_GetTextFilterDictionary_Response: CSteamEngine_GetTextFilterDictionary_Response;
  CSteamEngine_SearchAppDataCacheByStoreKeywords_Request: CSteamEngine_SearchAppDataCacheByStoreKeywords_Request;
  CSteamEngine_SearchAppDataCacheByStoreKeywords_Response: CSteamEngine_SearchAppDataCacheByStoreKeywords_Response;
  CSteamEngine_SetOverlayEscapeKeyHandling_Notification: CSteamEngine_SetOverlayEscapeKeyHandling_Notification;
  CSteamEngine_TextFilterDictionaryChanged_Notification: CSteamEngine_TextFilterDictionaryChanged_Notification;
  CSteamEngine_UpdateTextFilterDictionary_Notification: CSteamEngine_UpdateTextFilterDictionary_Notification;
  CSteamInputService_ControllerAccessibilityStrings_Response: CSteamInputService_ControllerAccessibilityStrings_Response;
  CSteamInputService_ControllerAxesStateChange_Notification: CSteamInputService_ControllerAxesStateChange_Notification;
  CSteamInputService_ControllerButtonStateChanged_Notification: CSteamInputService_ControllerButtonStateChanged_Notification;
  CSteamInputService_ControllerDisconnected_Notification: CSteamInputService_ControllerDisconnected_Notification;
  CSteamInputService_ControllerPairingChanged_Notification: CSteamInputService_ControllerPairingChanged_Notification;
  CSteamInputService_ControllerPowerMenu_Notification: CSteamInputService_ControllerPowerMenu_Notification;
  CSteamInputService_ControllerStateFlow_Request: CSteamInputService_ControllerStateFlow_Request;
  CSteamInputService_ForgetDonglePairingBond_Request: CSteamInputService_ForgetDonglePairingBond_Request;
  CSteamInputService_ForgetTritonPairingBond_Request: CSteamInputService_ForgetTritonPairingBond_Request;
  CSteamInputService_GetControllerName_Request: CSteamInputService_GetControllerName_Request;
  CSteamInputService_GetControllerName_Response: CSteamInputService_GetControllerName_Response;
  CSteamInputService_GetDongles_Request: CSteamInputService_GetDongles_Request;
  CSteamInputService_GetDongles_Response: CSteamInputService_GetDongles_Response;
  CSteamInputService_GetTritonPairingInfo_Request: CSteamInputService_GetTritonPairingInfo_Request;
  CSteamInputService_GetTritonPairingInfo_Response: CSteamInputService_GetTritonPairingInfo_Response;
  CSteamInputService_GyroAccelerometerChanged_Notification: CSteamInputService_GyroAccelerometerChanged_Notification;
  CSteamInputService_GyroCalibration_Notification: CSteamInputService_GyroCalibration_Notification;
  CSteamInputService_GyroQuaternionChanged_Notification: CSteamInputService_GyroQuaternionChanged_Notification;
  CSteamInputService_GyroSoftwareCalibration_Request: CSteamInputService_GyroSoftwareCalibration_Request;
  CSteamInputService_GyroSpeedChanged_Notification: CSteamInputService_GyroSpeedChanged_Notification;
  CSteamInputService_PairDongleTritonConnected_Request: CSteamInputService_PairDongleTritonConnected_Request;
  CSteamInputService_PairDongleTritonDocked_Request: CSteamInputService_PairDongleTritonDocked_Request;
  CSteamInputService_ShouldTritonPairInOobe_Response: CSteamInputService_ShouldTritonPairInOobe_Response;
  CSteamInputService_TritonUndocked_Notification: CSteamInputService_TritonUndocked_Notification;
  CSteamInputService_UnpairedTritonDocked_Notification: CSteamInputService_UnpairedTritonDocked_Notification;
  CSteamInputService_UnpairedTritonPluggedIn_Notification: CSteamInputService_UnpairedTritonPluggedIn_Notification;
  CSteamInputService_WaitInitialControllerStateEnumerated_Response: CSteamInputService_WaitInitialControllerStateEnumerated_Response;
  CSteamNotification_NotificationsReceived_Notification: CSteamNotification_NotificationsReceived_Notification;
  CSteamNotification_PreferencesUpdated_Notification: CSteamNotification_PreferencesUpdated_Notification;
  CSteamOS_GetUserHasPassword_Response: CSteamOS_GetUserHasPassword_Response;
  CSteamOS_SetUserPassword_Request: CSteamOS_SetUserPassword_Request;
  CSteamOSManager_FactoryReset_Request: CSteamOSManager_FactoryReset_Request;
  CSteamOSManager_GetState_Response: CSteamOSManager_GetState_Response;
  CSteamOSManager_IsTelemetryHelperAvailable_Request: CSteamOSManager_IsTelemetryHelperAvailable_Request;
  CSteamOSManager_IsTelemetryHelperAvailable_Response: CSteamOSManager_IsTelemetryHelperAvailable_Response;
  CSteamOSManager_PrepareFactoryImageTest_Request: CSteamOSManager_PrepareFactoryImageTest_Request;
  CSteamOSManagerState: CSteamOSManagerState;
  CSteamOSSLS_GetState_Response: CSteamOSSLS_GetState_Response;
  CSteamOSSLS_SetEnabled_Request: CSteamOSSLS_SetEnabled_Request;
  CSteamOSSLS_SetPluginEnabled_Request: CSteamOSSLS_SetPluginEnabled_Request;
  CSteamOSSLSPlugin: CSteamOSSLSPlugin;
  CSteamOSSLSState: CSteamOSSLSState;
  CSteamTV_AddChatBan_Request: CSteamTV_AddChatBan_Request;
  CSteamTV_AddChatModerator_Request: CSteamTV_AddChatModerator_Request;
  CSteamTV_AddWordBan_Request: CSteamTV_AddWordBan_Request;
  CSteamTV_AppCheer_Request: CSteamTV_AppCheer_Request;
  CSteamTV_AppCheer_Response: CSteamTV_AppCheer_Response;
  CSteamTV_AppCheer_SingleCheerType: CSteamTV_AppCheer_SingleCheerType;
  CSteamTV_BroadcastClipInfo: CSteamTV_BroadcastClipInfo;
  CSteamTV_ChatBan: CSteamTV_ChatBan;
  CSteamTV_ChatModerator: CSteamTV_ChatModerator;
  CSteamTV_CreateBroadcastChannel_Request: CSteamTV_CreateBroadcastChannel_Request;
  CSteamTV_CreateBroadcastChannel_Response: CSteamTV_CreateBroadcastChannel_Response;
  CSteamTV_FollowBroadcastChannel_Request: CSteamTV_FollowBroadcastChannel_Request;
  CSteamTV_FollowBroadcastChannel_Response: CSteamTV_FollowBroadcastChannel_Response;
  CSteamTV_Game: CSteamTV_Game;
  CSteamTV_GetBroadcastChannelBroadcasters_Request: CSteamTV_GetBroadcastChannelBroadcasters_Request;
  CSteamTV_GetBroadcastChannelBroadcasters_Response: CSteamTV_GetBroadcastChannelBroadcasters_Response;
  CSteamTV_GetBroadcastChannelClips_Request: CSteamTV_GetBroadcastChannelClips_Request;
  CSteamTV_GetBroadcastChannelClips_Response: CSteamTV_GetBroadcastChannelClips_Response;
  CSteamTV_GetBroadcastChannelID_Request: CSteamTV_GetBroadcastChannelID_Request;
  CSteamTV_GetBroadcastChannelID_Response: CSteamTV_GetBroadcastChannelID_Response;
  CSteamTV_GetBroadcastChannelImages_Request: CSteamTV_GetBroadcastChannelImages_Request;
  CSteamTV_GetBroadcastChannelImages_Response: CSteamTV_GetBroadcastChannelImages_Response;
  CSteamTV_GetBroadcastChannelInteraction_Request: CSteamTV_GetBroadcastChannelInteraction_Request;
  CSteamTV_GetBroadcastChannelInteraction_Response: CSteamTV_GetBroadcastChannelInteraction_Response;
  CSteamTV_GetBroadcastChannelLinks_Request: CSteamTV_GetBroadcastChannelLinks_Request;
  CSteamTV_GetBroadcastChannelLinks_Response: CSteamTV_GetBroadcastChannelLinks_Response;
  CSteamTV_GetBroadcastChannelProfile_Request: CSteamTV_GetBroadcastChannelProfile_Request;
  CSteamTV_GetBroadcastChannelProfile_Response: CSteamTV_GetBroadcastChannelProfile_Response;
  CSteamTV_GetBroadcastChannelStatus_Request: CSteamTV_GetBroadcastChannelStatus_Request;
  CSteamTV_GetBroadcastChannelStatus_Response: CSteamTV_GetBroadcastChannelStatus_Response;
  CSteamTV_GetChannels_Request: CSteamTV_GetChannels_Request;
  CSteamTV_GetChannels_Response: CSteamTV_GetChannels_Response;
  CSteamTV_GetChatBans_Request: CSteamTV_GetChatBans_Request;
  CSteamTV_GetChatBans_Response: CSteamTV_GetChatBans_Response;
  CSteamTV_GetChatModerators_Request: CSteamTV_GetChatModerators_Request;
  CSteamTV_GetChatModerators_Response: CSteamTV_GetChatModerators_Response;
  CSteamTV_GetFollowedChannels_Response: CSteamTV_GetFollowedChannels_Response;
  CSteamTV_GetGames_Request: CSteamTV_GetGames_Request;
  CSteamTV_GetGames_Response: CSteamTV_GetGames_Response;
  CSteamTV_GetHomePageContents_Response: CSteamTV_GetHomePageContents_Response;
  CSteamTV_GetMyBroadcastChannels_Response: CSteamTV_GetMyBroadcastChannels_Response;
  CSteamTV_GetSteamTVUserSettings_Response: CSteamTV_GetSteamTVUserSettings_Response;
  CSteamTV_GetSubscribedChannels_Response: CSteamTV_GetSubscribedChannels_Response;
  CSteamTV_GetWordBans_Request: CSteamTV_GetWordBans_Request;
  CSteamTV_GetWordBans_Response: CSteamTV_GetWordBans_Response;
  CSteamTV_HomePageContentRow: CSteamTV_HomePageContentRow;
  CSteamTV_HomePageTemplate_ConveyorBelt: CSteamTV_HomePageTemplate_ConveyorBelt;
  CSteamTV_HomePageTemplate_Developer: CSteamTV_HomePageTemplate_Developer;
  CSteamTV_HomePageTemplate_Event: CSteamTV_HomePageTemplate_Event;
  CSteamTV_HomePageTemplate_GameList: CSteamTV_HomePageTemplate_GameList;
  CSteamTV_HomePageTemplate_QuickExplore: CSteamTV_HomePageTemplate_QuickExplore;
  CSteamTV_HomePageTemplate_SingleGame: CSteamTV_HomePageTemplate_SingleGame;
  CSteamTV_HomePageTemplate_Takeover: CSteamTV_HomePageTemplate_Takeover;
  CSteamTV_HomePageTemplate_WatchParty: CSteamTV_HomePageTemplate_WatchParty;
  CSteamTV_JoinChat_Request: CSteamTV_JoinChat_Request;
  CSteamTV_JoinChat_Response: CSteamTV_JoinChat_Response;
  CSteamTV_ReportBroadcastChannel_Request: CSteamTV_ReportBroadcastChannel_Request;
  CSteamTV_Search_Request: CSteamTV_Search_Request;
  CSteamTV_Search_Response: CSteamTV_Search_Response;
  CSteamTV_SetBroadcastChannelImage_Request: CSteamTV_SetBroadcastChannelImage_Request;
  CSteamTV_SetBroadcastChannelImage_Response: CSteamTV_SetBroadcastChannelImage_Response;
  CSteamTV_SetBroadcastChannelLinkRegions_Request: CSteamTV_SetBroadcastChannelLinkRegions_Request;
  CSteamTV_SetBroadcastChannelProfile_Request: CSteamTV_SetBroadcastChannelProfile_Request;
  CSteamTV_SetSteamTVUserSettings_Request: CSteamTV_SetSteamTVUserSettings_Request;
  CSteamTV_SubscribeBroadcastChannel_Request: CSteamTV_SubscribeBroadcastChannel_Request;
  CSteamTV_SubscribeBroadcastChannel_Response: CSteamTV_SubscribeBroadcastChannel_Response;
  CStorageDeviceManager_Adopt_Request: CStorageDeviceManager_Adopt_Request;
  CStorageDeviceManager_Eject_Request: CStorageDeviceManager_Eject_Request;
  CStorageDeviceManager_Format_Request: CStorageDeviceManager_Format_Request;
  CStorageDeviceManager_GetState_Response: CStorageDeviceManager_GetState_Response;
  CStorageDeviceManager_IsServiceAvailable_Response: CStorageDeviceManager_IsServiceAvailable_Response;
  CStorageDeviceManager_Unmount_Request: CStorageDeviceManager_Unmount_Request;
  CStorageDeviceManagerBlockDevice: CStorageDeviceManagerBlockDevice;
  CStorageDeviceManagerDrive: CStorageDeviceManagerDrive;
  CStorageDeviceManagerState: CStorageDeviceManagerState;
  CStore_DeleteReservationPositionMessage_Request: CStore_DeleteReservationPositionMessage_Request;
  CStore_GetAllReservationPositionMessages_Response: CStore_GetAllReservationPositionMessages_Response;
  CStore_GetDiscoveryQueue_Request: CStore_GetDiscoveryQueue_Request;
  CStore_GetDiscoveryQueue_Response: CStore_GetDiscoveryQueue_Response;
  CStore_GetDiscoveryQueueSettings_Request: CStore_GetDiscoveryQueueSettings_Request;
  CStore_GetDiscoveryQueueSettings_Response: CStore_GetDiscoveryQueueSettings_Response;
  CStore_GetDiscoveryQueueSkippedApps_Request: CStore_GetDiscoveryQueueSkippedApps_Request;
  CStore_GetDiscoveryQueueSkippedApps_Response: CStore_GetDiscoveryQueueSkippedApps_Response;
  CStore_GetGamesFollowed_Request: CStore_GetGamesFollowed_Request;
  CStore_GetGamesFollowed_Response: CStore_GetGamesFollowed_Response;
  CStore_GetGamesFollowedCount_Request: CStore_GetGamesFollowedCount_Request;
  CStore_GetGamesFollowedCount_Response: CStore_GetGamesFollowedCount_Response;
  CStore_GetLocalizedNameForTags_Request: CStore_GetLocalizedNameForTags_Request;
  CStore_GetLocalizedNameForTags_Response: CStore_GetLocalizedNameForTags_Response;
  CStore_GetMostPopularTags_Request: CStore_GetMostPopularTags_Request;
  CStore_GetMostPopularTags_Response: CStore_GetMostPopularTags_Response;
  CStore_GetRecommendedTagsForUser_Request: CStore_GetRecommendedTagsForUser_Request;
  CStore_GetRecommendedTagsForUser_Response: CStore_GetRecommendedTagsForUser_Response;
  CStore_GetStorePreferences_Request: CStore_GetStorePreferences_Request;
  CStore_GetStorePreferences_Response: CStore_GetStorePreferences_Response;
  CStore_GetTagList_Request: CStore_GetTagList_Request;
  CStore_GetTagList_Response: CStore_GetTagList_Response;
  CStore_GetTrendingAppsAmongFriends_Request: CStore_GetTrendingAppsAmongFriends_Request;
  CStore_GetTrendingAppsAmongFriends_Response: CStore_GetTrendingAppsAmongFriends_Response;
  CStore_GetUserGameInterestState_Request: CStore_GetUserGameInterestState_Request;
  CStore_GetUserGameInterestState_Response: CStore_GetUserGameInterestState_Response;
  CStore_GetWishlistDemoEmailStatus_Request: CStore_GetWishlistDemoEmailStatus_Request;
  CStore_GetWishlistDemoEmailStatus_Response: CStore_GetWishlistDemoEmailStatus_Response;
  CStore_MigratePartnerLinkTracking_Notification: CStore_MigratePartnerLinkTracking_Notification;
  CStore_PurchaseReceiptInfo: CStore_PurchaseReceiptInfo;
  CStore_QueueWishlistDemoEmailToFire_Request: CStore_QueueWishlistDemoEmailToFire_Request;
  CStore_RegisterCDKey_Request: CStore_RegisterCDKey_Request;
  CStore_RegisterCDKey_Response: CStore_RegisterCDKey_Response;
  CStore_ReportApp_Request: CStore_ReportApp_Request;
  CStore_SetReservationPositionMessage_Request: CStore_SetReservationPositionMessage_Request;
  CStore_SkipDiscoveryQueueItem_Request: CStore_SkipDiscoveryQueueItem_Request;
  CStore_StorePreferencesChanged_Notification: CStore_StorePreferencesChanged_Notification;
  CStore_UpdatePackageReservations_Request: CStore_UpdatePackageReservations_Request;
  CStore_UpdatePackageReservations_Response: CStore_UpdatePackageReservations_Response;
  CStore_UserPreferences: CStore_UserPreferences;
  CStore_UserTagPreferences: CStore_UserTagPreferences;
  CStoreBrowse_GetContentHubConfig_Request: CStoreBrowse_GetContentHubConfig_Request;
  CStoreBrowse_GetContentHubConfig_Response: CStoreBrowse_GetContentHubConfig_Response;
  CStoreBrowse_GetDLCForApps_Request: CStoreBrowse_GetDLCForApps_Request;
  CStoreBrowse_GetDLCForApps_Response: CStoreBrowse_GetDLCForApps_Response;
  CStoreBrowse_GetDLCForAppsSolr_Request: CStoreBrowse_GetDLCForAppsSolr_Request;
  CStoreBrowse_GetDLCForAppsSolr_Response: CStoreBrowse_GetDLCForAppsSolr_Response;
  CStoreBrowse_GetHardwareItems_Request: CStoreBrowse_GetHardwareItems_Request;
  CStoreBrowse_GetHardwareItems_Response: CStoreBrowse_GetHardwareItems_Response;
  CStoreBrowse_GetItems_Request: CStoreBrowse_GetItems_Request;
  CStoreBrowse_GetItems_Response: CStoreBrowse_GetItems_Response;
  CStoreBrowse_GetPriceStops_Request: CStoreBrowse_GetPriceStops_Request;
  CStoreBrowse_GetPriceStops_Response: CStoreBrowse_GetPriceStops_Response;
  CStoreBrowse_GetStoreCategories_Request: CStoreBrowse_GetStoreCategories_Request;
  CStoreBrowse_GetStoreCategories_Response: CStoreBrowse_GetStoreCategories_Response;
  CStoreDiscoveryQueueSettings: CStoreDiscoveryQueueSettings;
  CStorePageFilter: CStorePageFilter;
  CStreamDataLostMsg: CStreamDataLostMsg;
  CStreamingClientCaps: CStreamingClientCaps;
  CStreamingClientConfig: CStreamingClientConfig;
  CStreamingClientHandshakeInfo: CStreamingClientHandshakeInfo;
  CStreamingKeymap: CStreamingKeymap;
  CStreamingKeymapEntry: CStreamingKeymapEntry;
  CStreamingServerConfig: CStreamingServerConfig;
  CStreamingServerHandshakeInfo: CStreamingServerHandshakeInfo;
  CStreamingSessionStats: CStreamingSessionStats;
  CStreamVideoLimit: CStreamVideoLimit;
  CStreamVideoMode: CStreamVideoMode;
  CSupportRefreshTokenAudit: CSupportRefreshTokenAudit;
  CSupportRefreshTokenDescription: CSupportRefreshTokenDescription;
  CSystemManager_WriteFile_Request: CSystemManager_WriteFile_Request;
  CTimedTrial_GetTimeRemaining_Request: CTimedTrial_GetTimeRemaining_Request;
  CTimedTrial_GetTimeRemaining_Response: CTimedTrial_GetTimeRemaining_Response;
  CTimedTrial_RecordPlaytime_Request: CTimedTrial_RecordPlaytime_Request;
  CTimedTrial_RecordPlaytime_Response: CTimedTrial_RecordPlaytime_Response;
  CTimedTrial_ResetPlaytime_Request: CTimedTrial_ResetPlaytime_Request;
  CTimedTrial_ResetPlaytime_Response: CTimedTrial_ResetPlaytime_Response;
  CTimelineEntry: CTimelineEntry;
  CTimelineTag: CTimelineTag;
  CTouchActionSetActiveMsg: CTouchActionSetActiveMsg;
  CTouchActionSetLayerAddedMsg: CTouchActionSetLayerAddedMsg;
  CTouchActionSetLayerRemovedMsg: CTouchActionSetLayerRemovedMsg;
  CTouchConfigActiveMsg: CTouchConfigActiveMsg;
  CTransportAuth_Authenticate_Request: CTransportAuth_Authenticate_Request;
  CTransportSignalMsg: CTransportSignalMsg;
  CTransportValidation_AddNumbers_Request: CTransportValidation_AddNumbers_Request;
  CTransportValidation_AddNumbers_Response: CTransportValidation_AddNumbers_Response;
  CTransportValidation_AppendToString_Request: CTransportValidation_AppendToString_Request;
  CTransportValidation_AppendToString_Response: CTransportValidation_AppendToString_Response;
  CTransportValidation_CountOrderedBytes_Request: CTransportValidation_CountOrderedBytes_Request;
  CTransportValidation_CountOrderedBytes_Response: CTransportValidation_CountOrderedBytes_Response;
  CTransportValidation_DataRequest_Response: CTransportValidation_DataRequest_Response;
  CTransportValidation_GetLargeResponse_Request: CTransportValidation_GetLargeResponse_Request;
  CTransportValidation_GetLargeResponse_Response: CTransportValidation_GetLargeResponse_Response;
  CTransportValidation_GetLastNotifyNumber_Response: CTransportValidation_GetLastNotifyNumber_Response;
  CTransportValidation_NotifyCount_Notification: CTransportValidation_NotifyCount_Notification;
  CTransportValidation_NotifyLarge_Notification: CTransportValidation_NotifyLarge_Notification;
  CTransportValidation_NotifyNumber_Notification: CTransportValidation_NotifyNumber_Notification;
  CTransportValidation_NotifySyntheticEvent_Notification: CTransportValidation_NotifySyntheticEvent_Notification;
  CTransportValidation_NotifyText_Notification: CTransportValidation_NotifyText_Notification;
  CTransportValidation_RequestInvalidBool_Response: CTransportValidation_RequestInvalidBool_Response;
  CTransportValidation_RequestLargeNotification_Request: CTransportValidation_RequestLargeNotification_Request;
  CTransportValidation_ThreadedCount_Request: CTransportValidation_ThreadedCount_Request;
  CTransportValidation_TriggerDataRequest_Response: CTransportValidation_TriggerDataRequest_Response;
  CTransportValidation_TriggerSyntheticEvents_Request: CTransportValidation_TriggerSyntheticEvents_Request;
  CTransportValidationClient_AddNumbers_Request: CTransportValidationClient_AddNumbers_Request;
  CTransportValidationClient_AddNumbers_Response: CTransportValidationClient_AddNumbers_Response;
  CTwoFactor_AddAuthenticator_Request: CTwoFactor_AddAuthenticator_Request;
  CTwoFactor_AddAuthenticator_Response: CTwoFactor_AddAuthenticator_Response;
  CTwoFactor_FinalizeAddAuthenticator_Request: CTwoFactor_FinalizeAddAuthenticator_Request;
  CTwoFactor_FinalizeAddAuthenticator_Response: CTwoFactor_FinalizeAddAuthenticator_Response;
  CTwoFactor_RemoveAuthenticator_Request: CTwoFactor_RemoveAuthenticator_Request;
  CTwoFactor_RemoveAuthenticator_Response: CTwoFactor_RemoveAuthenticator_Response;
  CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;
  CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;
  CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response: CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;
  CTwoFactor_Status_Request: CTwoFactor_Status_Request;
  CTwoFactor_Status_Response: CTwoFactor_Status_Response;
  CTwoFactor_Time_Request: CTwoFactor_Time_Request;
  CTwoFactor_Time_Response: CTwoFactor_Time_Response;
  CTwoFactor_UpdateTokenVersion_Request: CTwoFactor_UpdateTokenVersion_Request;
  CTwoFactor_UsageEvent: CTwoFactor_UsageEvent;
  CUser_GetSavedHardwareInfo_Response: CUser_GetSavedHardwareInfo_Response;
  CUser_SaveHardwareInfo_Request: CUser_SaveHardwareInfo_Request;
  CUser_SaveHardwareInfo_Response: CUser_SaveHardwareInfo_Response;
  CUserAccount_CancelLicenseForApp_Request: CUserAccount_CancelLicenseForApp_Request;
  CUserAccount_CreateFriendInviteToken_Request: CUserAccount_CreateFriendInviteToken_Request;
  CUserAccount_CreateFriendInviteToken_Response: CUserAccount_CreateFriendInviteToken_Response;
  CUserAccount_GetAccountLinkStatus_Response: CUserAccount_GetAccountLinkStatus_Response;
  CUserAccount_GetAvailableValveDiscountPromotions_Request: CUserAccount_GetAvailableValveDiscountPromotions_Request;
  CUserAccount_GetAvailableValveDiscountPromotions_Response: CUserAccount_GetAvailableValveDiscountPromotions_Response;
  CUserAccount_GetClientWalletDetails_Request: CUserAccount_GetClientWalletDetails_Request;
  CUserAccount_GetFriendInviteTokens_Response: CUserAccount_GetFriendInviteTokens_Response;
  CUserAccount_GetUserCountry_Request: CUserAccount_GetUserCountry_Request;
  CUserAccount_GetUserCountry_Response: CUserAccount_GetUserCountry_Response;
  CUserAccount_GetWalletDetails_Response: CUserAccount_GetWalletDetails_Response;
  CUserAccount_RedeemFriendInviteToken_Request: CUserAccount_RedeemFriendInviteToken_Request;
  CUserAccount_RegisterCompatTool_Request: CUserAccount_RegisterCompatTool_Request;
  CUserAccount_RevokeFriendInviteToken_Request: CUserAccount_RevokeFriendInviteToken_Request;
  CUserAccount_ViewFriendInviteToken_Request: CUserAccount_ViewFriendInviteToken_Request;
  CUserAccount_ViewFriendInviteToken_Response: CUserAccount_ViewFriendInviteToken_Response;
  CUserChatRoomGroupState: CUserChatRoomGroupState;
  CUserChatRoomState: CUserChatRoomState;
  CValveHWSurvey_GetSurveySchedule_Request: CValveHWSurvey_GetSurveySchedule_Request;
  CValveHWSurvey_GetSurveySchedule_Response: CValveHWSurvey_GetSurveySchedule_Response;
  CVideo_BeginGameRecordingSegmentsUpload_Request: CVideo_BeginGameRecordingSegmentsUpload_Request;
  CVideo_BeginGameRecordingSegmentsUpload_Response: CVideo_BeginGameRecordingSegmentsUpload_Response;
  CVideo_ClientGetVideoURL_Request: CVideo_ClientGetVideoURL_Request;
  CVideo_ClientGetVideoURL_Response: CVideo_ClientGetVideoURL_Response;
  CVideo_CommitGameRecordingSegmentsUpload_Request: CVideo_CommitGameRecordingSegmentsUpload_Request;
  CVideo_GameRecordingCommitSegmentUploads_Request: CVideo_GameRecordingCommitSegmentUploads_Request;
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request: CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request;
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response: CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response;
  CVideo_GameRecordingSegmentInfo: CVideo_GameRecordingSegmentInfo;
  CVideo_GameRecordingSegmentUploadInfo: CVideo_GameRecordingSegmentUploadInfo;
  CVideo_GetVideoBookmarks_Request: CVideo_GetVideoBookmarks_Request;
  CVideo_GetVideoBookmarks_Response: CVideo_GetVideoBookmarks_Response;
  CVideo_SetVideoBookmark_Notification: CVideo_SetVideoBookmark_Notification;
  CVideo_UnlockedH264_Notification: CVideo_UnlockedH264_Notification;
  CVideoDecoderInfoMsg: CVideoDecoderInfoMsg;
  CVideoEncoderInfoMsg: CVideoEncoderInfoMsg;
  CVideoFormat: CVideoFormat;
  CVideoManagerClipID: CVideoManagerClipID;
  CVirtualControllerColor: CVirtualControllerColor;
  CVirtualControllerConfig: CVirtualControllerConfig;
  CVirtualControllerElement: CVirtualControllerElement;
  CVirtualControllerGlobalConfig: CVirtualControllerGlobalConfig;
  CVirtualControllerLayout: CVirtualControllerLayout;
  CVirtualControllerLayoutPackage: CVirtualControllerLayoutPackage;
  CVirtualControllerLayouts: CVirtualControllerLayouts;
  CVirtualHereReadyMsg: CVirtualHereReadyMsg;
  CVirtualHereRequestMsg: CVirtualHereRequestMsg;
  CVirtualHereShareDeviceMsg: CVirtualHereShareDeviceMsg;
  CVRConnectionReady: CVRConnectionReady;
  CWorkshop_GetEULAStatus_Request: CWorkshop_GetEULAStatus_Request;
  CWorkshop_GetEULAStatus_Response: CWorkshop_GetEULAStatus_Response;
  DetectedAppContent: DetectedAppContent;
  EncryptedAppTicket: EncryptedAppTicket;
  FamilyGroupFormerMember: FamilyGroupFormerMember;
  FamilyGroupMember: FamilyGroupMember;
  FamilyGroupMembership: FamilyGroupMembership;
  FamilyGroupPendingInvite: FamilyGroupPendingInvite;
  FamilyGroupPendingInviteForUser: FamilyGroupPendingInviteForUser;
  GameListEntry: GameListEntry;
  GameNotificationSettings: GameNotificationSettings;
  GameSearchParam: GameSearchParam;
  GameServerClient_QueryServerData_Response: GameServerClient_QueryServerData_Response;
  GetBroadcastChannelEntry: GetBroadcastChannelEntry;
  LobbyMatchmakingLegacy_GetLobbyStatus_Request: LobbyMatchmakingLegacy_GetLobbyStatus_Request;
  LobbyMatchmakingLegacy_GetLobbyStatus_Response: LobbyMatchmakingLegacy_GetLobbyStatus_Response;
  Offline_Ticket: Offline_Ticket;
  ParentalApp: ParentalApp;
  ParentalFeatureRequest: ParentalFeatureRequest;
  ParentalPlaytimeDay: ParentalPlaytimeDay;
  ParentalPlaytimeRequest: ParentalPlaytimeRequest;
  ParentalPlaytimeRestrictions: ParentalPlaytimeRestrictions;
  ParentalSettings: ParentalSettings;
  ParentalTemporaryPlaytimeRestrictions: ParentalTemporaryPlaytimeRestrictions;
  PerFriendPreferences: PerFriendPreferences;
  PlayerFound: PlayerFound;
  PlayerResult: PlayerResult;
  ProfileCustomization: ProfileCustomization;
  ProfileCustomizationSlot: ProfileCustomizationSlot;
  ProfileItem: ProfileItem;
  ProfilePreferences: ProfilePreferences;
  ProfileTheme: ProfileTheme;
  PublishedFileAuthorSnapshot: PublishedFileAuthorSnapshot;
  PublishedFileDetails: PublishedFileDetails;
  PublishedFileSubSection: PublishedFileSubSection;
  PurchaseRequest: PurchaseRequest;
  ServerMessage: ServerMessage;
  SiteServerUI_CancelLogin_Response: SiteServerUI_CancelLogin_Response;
  SiteServerUI_ClientStatus_Response: SiteServerUI_ClientStatus_Response;
  SiteServerUI_ContentCacheConfig_Request: SiteServerUI_ContentCacheConfig_Request;
  SiteServerUI_ContentCacheStatus_Response: SiteServerUI_ContentCacheStatus_Response;
  SiteServerUI_GetLanguage_Response: SiteServerUI_GetLanguage_Response;
  SiteServerUI_Login_Request: SiteServerUI_Login_Request;
  SiteServerUI_Login_Response: SiteServerUI_Login_Response;
  SiteServerUI_LoginStatus_Response: SiteServerUI_LoginStatus_Response;
  SiteServerUI_Logout_Response: SiteServerUI_Logout_Response;
  SiteServerUI_Quit_Request: SiteServerUI_Quit_Request;
  SiteServerUI_SetLanguage_Request: SiteServerUI_SetLanguage_Request;
  SiteServerUI_Status_Response: SiteServerUI_Status_Response;
  SteamMessagesClientIClientForcedEnumDependencies: SteamMessagesClientIClientForcedEnumDependencies;
  SteamNotificationData: SteamNotificationData;
  SteamNotificationPreference: SteamNotificationPreference;
  StoreBrowseContext: StoreBrowseContext;
  StoreBrowseFilterFailure: StoreBrowseFilterFailure;
  StoreBrowseItemDataRequest: StoreBrowseItemDataRequest;
  StoreGameRating: StoreGameRating;
  StoreItem: StoreItem;
  StoreItemID: StoreItemID;
  UserContentDescriptorPreferences: UserContentDescriptorPreferences;
  UserSystemInformation: UserSystemInformation;
  VideoBookmark: VideoBookmark;
}
