/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type {
  CAppOverview,
  CAppOverview_Change,
  CAppOverview_PerClientData,
  CartAmount,
  CartCoupon,
  CartGiftInfo,
  CartGiftMessage,
  CChatPartyBeacon,
  CChatRoleActions,
  CChatRoom_GetChatRoomGroupSummary_Response,
  CChatRoomState,
  CClientMetrics_AppInterfaceCreation,
  CClientMetrics_AppInterfaceMethodCounts,
  CClientMetrics_AppInterfaceStats_Notification,
  CClientMetrics_ClientBootstrap_Notification,
  CClientMetrics_ClientBootstrap_RequestInfo,
  CClientMetrics_ClientBootstrap_Summary,
  CClientMetrics_ClipRange_Notification,
  CClientMetrics_ClipRange_Notification_RelativeRangeEdge,
  CClientMetrics_ClipShare_Notification,
  CClientMetrics_CloudAppSyncStats_Notification,
  CClientMetrics_ContentDownloadResponse_Counts,
  CClientMetrics_ContentDownloadResponse_Counts_Notification,
  CClientMetrics_ContentDownloadResponse_HostCounts,
  CClientMetrics_ContentDownloadResponse_Hosts,
  CClientMetrics_ContentValidation_Notification,
  CClientMetrics_DownloadRates_Notification,
  CClientMetrics_DownloadRates_Notification_StatsInfo,
  CClientMetrics_EndGameRecording_Notification,
  CClientMetrics_GamePerformance_Notification,
  CClientMetrics_GamePerformance_Notification_FrameRate,
  CClientMetrics_IPv6Connectivity_Notification,
  CClientMetrics_IPv6Connectivity_Result,
  CClientMetrics_SteamPipeWorkStats_Notification,
  CClientMetrics_SteamPipeWorkStats_Operation,
  CClientNotificationAchievement,
  CClientNotificationBatteryTemperature,
  CClientNotificationBroadcastAvailableToWatch,
  CClientNotificationCannotReadControllerGuideButton,
  CClientNotificationCloudSyncConflict,
  CClientNotificationCloudSyncFailure,
  CClientNotificationDownloadCompleted,
  CClientNotificationFamilySharingStopPlaying,
  CClientNotificationFriendInGame,
  CClientNotificationFriendInviteRollup,
  CClientNotificationFriendMessage,
  CClientNotificationFriendOnline,
  CClientNotificationGameRecordingError,
  CClientNotificationGameRecordingInstantClip,
  CClientNotificationGameRecordingStart,
  CClientNotificationGameRecordingStop,
  CClientNotificationGameRecordingUserMarkerAdded,
  CClientNotificationGroupChatMessage,
  CClientNotificationHardwareUpdateAvailable,
  CClientNotificationIncomingVoiceChat,
  CClientNotificationItemAnnouncement,
  CClientNotificationLowBattery,
  CClientNotificationLowDiskSpace,
  CClientNotificationPlaytimeWarning,
  CClientNotificationRemoteClientConnection,
  CClientNotificationRemoteClientStartStream,
  CClientNotificationScreenshot,
  CClientNotificationSteamInputActionSetChanged,
  CClientNotificationStreamingClientConnection,
  CClientNotificationSystemUpdate,
  CClientNotificationTimedTrialRemaining,
  CCloud_AppExitSyncDone_Notification,
  CCloud_PendingRemoteOperation,
  CGameNetworkingUI_AppSummary,
  CGameNetworkingUI_ConnectionState,
  CGameNetworkingUI_ConnectionSummary,
  CGameRecording_AudioSessionsChanged_Notification,
  CGameRecording_AudioSessionsChanged_Notification_Session,
  CMsgAchievementChange,
  CMsgAuthTicket,
  CMsgBadgeCraftedNotification,
  CMsgClientAccountInfo,
  CMsgClientAddFriendToGroup,
  CMsgClientAddFriendToGroupResponse,
  CMsgClientAMGetPersonaNameHistory,
  CMsgClientAMGetPersonaNameHistory_IdInstance,
  CMsgClientAMGetPersonaNameHistoryResponse,
  CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance,
  CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance,
  CMsgClientChangeStatus,
  CMsgClientClanState,
  CMsgClientClanState_Event,
  CMsgClientClanState_NameInfo,
  CMsgClientClanState_UserCounts,
  CMsgClientCreateFriendsGroup,
  CMsgClientCreateFriendsGroupResponse,
  CMsgClientDeleteFriendsGroup,
  CMsgClientDeleteFriendsGroupResponse,
  CMsgClientEmoticonList,
  CMsgClientEmoticonList_Effect,
  CMsgClientEmoticonList_Emoticon,
  CMsgClientEmoticonList_Sticker,
  CMsgClientGetClanActivityCounts,
  CMsgClientHeartBeat,
  CMsgClientInviteToGame,
  CMsgClientItemAnnouncements,
  CMsgClientItemAnnouncements_UnseenItem,
  CMsgClientLoggedOff,
  CMsgClientLogon,
  CMsgClientLogonResponse,
  CMsgClientManageFriendsGroup,
  CMsgClientManageFriendsGroupResponse,
  CMsgClientMMSInviteToLobby,
  CMsgClientOfflineMessageNotification,
  CMsgClientPersonaState,
  CMsgClientPersonaState_Friend,
  CMsgClientPersonaState_Friend_ClanData,
  CMsgClientPersonaState_Friend_KV,
  CMsgClientPersonaState_Friend_OtherGameData,
  CMsgClientRemoveFriendFromGroup,
  CMsgClientRemoveFriendFromGroupResponse,
  CMsgClientRequestFriendData,
  CMsgClientSecret,
  CMsgClientServersAvailable,
  CMsgClientServersAvailable_Server_Types_Available,
  CMsgClientServerTimestampRequest,
  CMsgClientServerTimestampResponse,
  CMsgClientSettings,
  CMsgCloudPendingRemoteOperations,
  CMsgControllerActionSetMiscSettings,
  CMsgControllerConfiguration,
  CMsgControllerInput,
  CMsgControllerInputActivator,
  CMsgControllerInputBinding,
  CMsgControllerInputBinding_IconBindingData,
  CMsgControllerInputBinding_KeyBindingData,
  CMsgControllerInputControllerActionBinding,
  CMsgControllerInputControllerActionCameraHorizonReset,
  CMsgControllerInputControllerActionChangePlayerNumberBinding,
  CMsgControllerInputControllerActionDotsPer360CalibrationSpin,
  CMsgControllerInputControllerActionGameActionSetBinding,
  CMsgControllerInputControllerActionLEDColorBinding,
  CMsgControllerInputControllerActionMouseBinding,
  CMsgControllerInputControllerActionTurnToFaceDirection,
  CMsgControllerInputGameActionBinding,
  CMsgControllerInputGamepadButtonBinding,
  CMsgControllerInputKeyBinding,
  CMsgControllerInputModeShiftBinding,
  CMsgControllerInputMouseButtonBinding,
  CMsgControllerInputMouseWheelBinding,
  CMsgControllerMode,
  CMsgControllerSetting,
  CMsgControllerSourceGroup,
  CMsgControllerSources,
  CMsgControllerVirtualMenuPreviewInfo,
  CMsgCREGetUserPublishedItemVoteDetails,
  CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId,
  CMsgCREGetUserPublishedItemVoteDetailsResponse,
  CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail,
  CMsgCREUpdateUserPublishedItemVote,
  CMsgCREUpdateUserPublishedItemVoteResponse,
  CMsgGameAction,
  CMsgGameActionBindingType,
  CMsgGameActionSet,
  CMsgGCRoutingProtoBufHeader,
  CMsgGenerateSystemReportReply,
  CMsgHotkey,
  CMsgIPAddress,
  CMsgMonitorInfo,
  CMsgMonitorInfo_MonitorInfo,
  CMsgMulti,
  CMsgNetworkDeviceConnect,
  CMsgNetworkDeviceConnect_Credentials,
  CMsgNetworkDeviceConnect_CustomAP,
  CMsgNetworkDeviceConnect_KnownAP,
  CMsgNetworkDeviceConnect_Wireless,
  CMsgNetworkDeviceIP4Address,
  CMsgNetworkDeviceIP4Config,
  CMsgNetworkDeviceIP6Address,
  CMsgNetworkDeviceIP6Config,
  CMsgNetworkDeviceSetOptions,
  CMsgNetworkDeviceSetOptions_Wireless,
  CMsgNetworkDevicesData,
  CMsgNetworkDevicesData_Device,
  CMsgNetworkDevicesData_Device_Wired,
  CMsgNetworkDevicesData_Device_Wireless,
  CMsgNetworkDevicesData_Device_Wireless_AP,
  CMsgProtoBufHeader,
  CMsgSelectOSBranchParams,
  CMsgSetControllerActionSet,
  CMsgSetControllerInputActivator,
  CMsgSetControllerInputActivatorEnabled,
  CMsgSetControllerInputBinding,
  CMsgSetControllerSourceMode,
  CMsgSetModeShiftButton,
  CMsgSteamDatagramConnectionQuality,
  CMsgSteamDatagramLinkInstantaneousStats,
  CMsgSteamDatagramLinkLifetimeStats,
  CMsgSteamDatagramP2PRoutingSummary,
  CMsgSteamNetworkingICESessionSummary,
  CMsgSteamNetworkingP2PSDRRoutingSummary,
  CMsgSwapControllerSourceModes,
  CMsgSwapModeInputBindings,
  CMsgSwapModeInputBindings_CModeInputSwap,
  CMsgSystemAudioManagerDevice,
  CMsgSystemAudioManagerLink,
  CMsgSystemAudioManagerNode,
  CMsgSystemAudioManagerObject,
  CMsgSystemAudioManagerPort,
  CMsgSystemAudioManagerState,
  CMsgSystemAudioManagerStateHW,
  CMsgSystemAudioManagerUpdateSomething,
  CMsgSystemAudioVolume,
  CMsgSystemAudioVolume_ChannelEntry,
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
  CMsgSystemPerfLimits,
  CMsgSystemPerfNetworkInterface,
  CMsgSystemPerfSettings,
  CMsgSystemPerfSettingsGlobal,
  CMsgSystemPerfSettingsPerApp,
  CMsgSystemPerfState,
  CMsgSystemPerfUpdateSettings,
  CMsgSystemUpdateApplyParams,
  CMsgSystemUpdateApplyResult,
  CMsgSystemUpdateCheckResult,
  CMsgSystemUpdateProgress,
  CMsgSystemUpdateState,
  CMsgWebUITransportFailure,
  CProductImpressionsFromClient_Notification,
  CProductImpressionsFromClient_Notification_Impression,
  CRemotePlay_SessionStopped_Notification,
  CSteamVR_AudioSettings_ChangeSettings_Request,
  CSteamVR_AudioSettings_Settings,
  CSteamVR_AudioSettings_Settings_Channel,
  CSteamVR_AudioSettings_SettingsChanged_Notification,
  CSteamVR_Header,
  CSteamVR_Settings_SetValue_Request,
  CSteamVR_Vector3,
  CSteamVR_VoiceChat_ConfigureVideo_Request,
  CSteamVR_VoiceChat_ExitRoomChat_Request,
  CSteamVR_VoiceChat_GetAvatarUrl_Request,
  CSteamVR_VoiceChat_GetAvatarUrl_Response,
  CSteamVR_VoiceChat_GroupName_Notification,
  CSteamVR_VoiceChat_InitiateRoomChat_Request,
  CSteamVR_VoiceChat_NewGroupChatMsgAdded_Notification,
  CSteamVR_VoiceChat_PerUserGainValue_Notification,
  CSteamVR_VoiceChat_PerUserVoiceStatus_Notification,
  CSteamVR_VoiceChat_SendGroupChatMessage_Request,
  CSteamVR_VoiceChat_SetDefaultSession_Notification,
  CSteamVR_VoiceChat_SetPerUserMuting_Request,
  CSteamVR_VoiceChat_SetPerUserVideo_Request,
  CSteamVR_VoiceChat_SetSpatialAudioListener_Notification,
  CSteamVR_VoiceChat_SetSpatialAudioSource_Notification,
  CSteamVR_VRGamepadUI_Message,
  CSteamVR_WebRTC_CloseDataChannel_Request,
  CSteamVR_WebRTC_CreateDataChannel_Request,
  CSteamVR_WebRTC_CreateDataChannel_Response,
  CSteamVR_WebRTC_DataChannel_Close_Notification,
  CSteamVR_WebRTC_DataChannel_Error_Notification,
  CSteamVR_WebRTC_DataChannel_Message_Notification,
  CSteamVR_WebRTC_DataChannel_Open_Notification,
  CSteamVR_WebRTC_OnDataChannel_Notification,
  CStoreBrowse_GetItems_Request,
  CStoreBrowse_GetItems_Response,
  CStorePageFilter,
  CStorePageFilter_ContentHubFilter,
  CStorePageFilter_ContentHubFilter_OptInInfo,
  CStorePageFilter_SalePageFilter,
  CStorePageFilter_StoreFilter,
  CStreamingClientConfig,
  CStreamingServerConfig,
  CStreamVideoLimit,
  CStreamVideoMode,
  CTransportValidation_AppendToString_Request,
  CTransportValidation_AppendToString_Response,
  CUserInterface_CuratorData,
  CUserInterface_NavData,
  CVideo_GameRecordingSegmentInfo,
  CVirtualMenuCreateDestroy,
  CVirtualMenuCreateDestroy_TouchMenuKey,
  CVirtualMenuKey,
  CVRGamepadUI_Frame,
  CVRGamepadUI_Frame_FrameControls,
  CVRGamepadUI_Frame_FrameControls_Item,
  CVRGamepadUI_Frame_FrameMenu,
  CVRGamepadUI_Frame_FrameMenu_Item,
  CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions,
  CVRGamepadUI_Message_DashboardActionInvoked_Request,
  CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request,
  CVRGamepadUI_Message_DashboardTabClicked_Request,
  CVRGamepadUI_Message_Error_Response,
  CVRGamepadUI_Message_ExecuteSteamURL_Request,
  CVRGamepadUI_Message_Header,
  CVRGamepadUI_Message_HideDashboardPopup_Request,
  CVRGamepadUI_Message_RemoteVideoStream_Request,
  CVRGamepadUI_Message_SetCurrentLanguage_Request,
  CVRGamepadUI_Message_SetDisplayBrightness_Request,
  CVRGamepadUI_Message_ShowDashboardPopup_Request,
  CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition,
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Position,
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect,
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation,
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale,
  CVRGamepadUI_Message_ShowGame_Request,
  CVRGamepadUI_Message_ShowOverlay_Request,
  CVRGamepadUI_Message_UpdateFrameUIs_Request,
  CVRGamepadUI_Message_UpdateFrameUIs_Response,
  CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult,
  CVRGamepadUIShared_Action,
  CVRGamepadUIShared_DEPRECATED_DashboardActionIcon,
  CVRGamepadUIShared_DEPRECATED_DashboardBarAction,
  CVRGamepadUIShared_DEPRECATED_DashboardTabIcon,
  CVRGamepadUIShared_Icon,
  CVRGamepadUIShared_PathProperty_DashboardBarActions,
  CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton,
  CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem,
  CVRGamepadUIShared_PathProperty_DashboardTabs,
  CVRGamepadUIShared_PathProperty_DashboardTabs_Tab,
  CVRGamepadUIShared_PathProperty_DesktopWindows,
  CVRGamepadUIShared_PathProperty_DesktopWindows_Window,
  CVRGamepadUIShared_PathProperty_HMDSettings,
  CVRGamepadUIShared_PathProperty_PowerOptions,
  CVRGamepadUIShared_PathProperty_VRVersionInfo,
  LoyaltyRewardDefinition,
  LoyaltyRewardDefinition_BadgeData,
  LoyaltyRewardDefinition_CommunityItemData,
  StoreBrowseContext,
  StoreBrowseFilterFailure,
  StoreBrowseItemDataRequest,
  StoreGameRating,
  StoreItem,
  StoreItem_Assets,
  StoreItem_BasicInfo,
  StoreItem_BasicInfo_CreatorHomeLink,
  StoreItem_Categories,
  StoreItem_FreeWeekend,
  StoreItem_IncludedItems,
  StoreItem_Link,
  StoreItem_Platforms,
  StoreItem_Platforms_VRSupport,
  StoreItem_PurchaseOption,
  StoreItem_PurchaseOption_Discount,
  StoreItem_PurchaseOption_RecurrenceInfo,
  StoreItem_RelatedItems,
  StoreItem_ReleaseInfo,
  StoreItem_Reviews,
  StoreItem_Reviews_StoreReviewSummary,
  StoreItem_Screenshots,
  StoreItem_Screenshots_Screenshot,
  StoreItem_SupportedLanguage,
  StoreItem_Tag,
  StoreItem_Trailers,
  StoreItem_Trailers_AdaptiveTrailer,
  StoreItem_Trailers_Trailer,
  StoreItem_Trailers_VideoSource,
  StoreItemID,
  UserContentDescriptorPreferences,
  UserContentDescriptorPreferences_ContentDescriptor,
  UserSystemInformation,
} from "../protos-definitions/webui/common";
import type {
  AccountCartContents,
  AccountCartLineItem,
  AccountCartLineItemFlags,
  AccountCartValidationDetails,
  CAccountCart_AddItemsToCart_Request,
  CAccountCart_AddItemsToCart_Request_ItemToAdd,
  CAccountCart_AddItemsToCart_Response,
  CAccountCart_GetCart_Request,
  CAccountCart_GetCart_Response,
  CAccountCart_GetRelevantCoupons_Request,
  CAccountCart_GetRelevantCoupons_Response,
  CAccountCart_GetRelevantCoupons_Response_LineItemCoupons,
  CAccountCart_MergeShoppingCartContents_Request,
  CAccountCart_MergeShoppingCartContents_Response,
  CAccountCart_ModifyLineItem_Request,
  CAccountCart_ModifyLineItem_Response,
  CAccountCart_RemoveItemFromCart_Request,
  CAccountCart_RemoveItemFromCart_Response,
} from "../protos-definitions/webui/service_accountcart";
import type {
  CAccountLinking_GetLinkedAccountInfo_Request,
  CAccountLinking_GetLinkedAccountInfo_Response,
  CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response,
} from "../protos-definitions/webui/service_accountlinking";
import type {
  CAccountPrivacy_GetCookiePreferences_Response,
  CAccountPrivacyCookiePreferences,
  CAccountPrivacyCookiePreferences_ContentCustomization,
  CAccountPrivacyCookiePreferences_ThirdPartyAnalytics,
  CAccountPrivacyCookiePreferences_ThirdPartyContent,
  CAccountPrivacyCookiePreferences_ValveAnalytics,
} from "../protos-definitions/webui/service_accountprivacy";
import type {
  CAccountPrivateAppList,
  CAccountPrivateApps_GetPrivateAppList_Response,
  CAccountPrivateApps_ToggleAppPrivacy_Request,
  CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification,
} from "../protos-definitions/webui/service_accountprivateapps";
import type {
  CAchievements_GetInfo_Request,
  CAchievements_GetInfo_Response,
  CAchievements_GetInfo_Response_Info,
} from "../protos-definitions/webui/service_achievements";
import type {
  CAssetSet,
  CAssetSetPublishing_AddBranchToAssetSet_Request,
  CAssetSetPublishing_AddBranchToAssetSet_Response,
  CAssetSetPublishing_CreateAssetSet_Request,
  CAssetSetPublishing_CreateAssetSet_Response,
  CAssetSetPublishing_DeleteAssetSet_Request,
  CAssetSetPublishing_GetAllAssetSets_Request,
  CAssetSetPublishing_GetAllAssetSets_Response,
  CAssetSetPublishing_RemoseBranchFromAssetSet_Response,
  CAssetSetPublishing_RemoveBranchFromAssetSet_Request,
  CAssetSetPublishing_SwapAssetSetPriority_Request,
  CAssetSetPublishing_SwapAssetSetPriority_Response,
  CAssetSetPublishing_UpdateAssetSet_Request,
  CAssetSetPublishing_UpdatePublishTime_Request,
  CAssetSetPublishing_UpdatePublishTime_Response,
} from "../protos-definitions/webui/service_assetsetpublishing";
import type {
  CAuction_Bid,
  CAuction_CancelBid_Request,
  CAuction_CancelBid_Response,
  CAuction_GetAllItems_Response,
  CAuction_GetBidsForItem_Request,
  CAuction_GetBidsForItem_Response,
  CAuction_GetBidsForUser_Request,
  CAuction_GetBidsForUser_Response,
  CAuction_GetItemDetails_Request,
  CAuction_GetItemDetails_Response,
  CAuction_GetUserBidForItem_Request,
  CAuction_GetUserBidForItem_Response,
  CAuction_Item,
  CAuction_PlaceBid_Request,
} from "../protos-definitions/webui/service_auction";
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
  CAuthentication_MigrateMobileSession_Request,
  CAuthentication_MigrateMobileSession_Response,
  CAuthentication_NotifyRiskQuizResults_Notification,
  CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults,
  CAuthentication_PollAuthSessionStatus_Request,
  CAuthentication_PollAuthSessionStatus_Response,
  CAuthentication_RefreshToken_Enumerate_Request,
  CAuthentication_RefreshToken_Enumerate_Response,
  CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription,
  CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent,
  CAuthentication_RefreshToken_Revoke_Request,
  CAuthentication_Token_Revoke_Request,
  CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request,
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request,
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response,
} from "../protos-definitions/webui/service_authentication";
import type {
  CAuthenticationSupport_GetTokenHistory_Request,
  CAuthenticationSupport_GetTokenHistory_Response,
  CAuthenticationSupport_MarkTokenCompromised_Request,
  CAuthenticationSupport_QueryRefreshTokenByID_Request,
  CAuthenticationSupport_QueryRefreshTokenByID_Response,
  CAuthenticationSupport_QueryRefreshTokensByAccount_Request,
  CAuthenticationSupport_QueryRefreshTokensByAccount_Response,
  CAuthenticationSupport_RevokeToken_Request,
  CSupportRefreshTokenAudit,
  CSupportRefreshTokenDescription,
  CSupportRefreshTokenDescription_TokenUsageEvent,
} from "../protos-definitions/webui/service_authenticationsupport";
import type { CBilling_GetRecurringSubscriptionsCount_Response } from "../protos-definitions/webui/service_billing";
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
} from "../protos-definitions/webui/service_bluetoothmanager";
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
  CBroadcast_GetBroadcastChatUserNames_Response_PersonaName,
  CBroadcast_GetBroadcastStatus_Request,
  CBroadcast_GetBroadcastStatus_Response,
  CBroadcast_GetBroadcastThumbnail_Request,
  CBroadcast_GetBroadcastThumbnail_Response,
  CBroadcast_GetBroadcastUploadStats_Request,
  CBroadcast_GetBroadcastUploadStats_Response,
  CBroadcast_GetBroadcastUploadStats_Response_UploadStats,
  CBroadcast_GetBroadcastViewerStats_Request,
  CBroadcast_GetBroadcastViewerStats_Response,
  CBroadcast_GetBroadcastViewerStats_Response_CountryStats,
  CBroadcast_GetBroadcastViewerStats_Response_ViewerStats,
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
} from "../protos-definitions/webui/service_broadcast";
import type { CBuildManagement_SetAppBuildLiveConfirmed_Request } from "../protos-definitions/webui/service_buildmanagement";
import type {
  CChatMentions,
  CChatRole,
  CChatRoom_AckChatMessage_Notification,
  CChatRoom_AddRoleToUser_Request,
  CChatRoom_ChatMessageModified_Notification,
  CChatRoom_ChatMessageModified_Notification_ChatMessage,
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
  CChatRoom_DeleteChatMessages_Request_Message,
  CChatRoom_DeleteChatRoom_Request,
  CChatRoom_DeleteInviteLink_Request,
  CChatRoom_DeleteRole_Request,
  CChatRoom_DeleteRoleFromUser_Request,
  CChatRoom_EndMiniGameForChatRoomGroup_Request,
  CChatRoom_GetBanList_Request,
  CChatRoom_GetBanList_Response,
  CChatRoom_GetBanList_Response_BanInfo,
  CChatRoom_GetChatRoomGroupState_Request,
  CChatRoom_GetChatRoomGroupState_Response,
  CChatRoom_GetInviteInfo_Request,
  CChatRoom_GetInviteInfo_Response,
  CChatRoom_GetInviteLinkInfo_Request,
  CChatRoom_GetInviteLinkInfo_Response,
  CChatRoom_GetInviteLinksForGroup_Request,
  CChatRoom_GetInviteLinksForGroup_Response,
  CChatRoom_GetInviteLinksForGroup_Response_LinkInfo,
  CChatRoom_GetInviteList_Request,
  CChatRoom_GetInviteList_Response,
  CChatRoom_GetMessageHistory_Request,
  CChatRoom_GetMessageHistory_Response,
  CChatRoom_GetMessageHistory_Response_ChatMessage,
  CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction,
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
  CChatRoom_SearchMembers_Response_MemberMatch,
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
  CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences,
  CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences,
  CChatRoom_UpdateMemberListView_Notification,
  CChatRoom_UpdateMessageReaction_Request,
  CChatRoom_UpdateMessageReaction_Response,
  CChatRoomClient_MemberListViewUpdated_Notification,
  CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry,
  CChatRoomGroupHeaderState,
  CChatRoomGroupInvite,
  CChatRoomGroupState,
  CChatRoomMember,
  CChatRoomMemberListView,
  CChatRoomMemberSummaryCounts,
  CChatRoomSummaryPair,
  ChatRoomClient_NotifyChatGroupUserStateChanged_Notification,
  ChatRoomClient_NotifyChatRoomDisconnect_Notification,
  CUserChatRoomGroupState,
  CUserChatRoomState,
  ServerMessage,
} from "../protos-definitions/webui/service_chatroom";
import type {
  CChatUsability_ClientUsabilityMetrics_Notification,
  CChatUsability_ClientUsabilityMetrics_Notification_Metrics,
  CChatUsability_ClientUsabilityMetrics_Notification_Settings,
  CChatUsability_ClientUsabilityMetrics_Notification_UIState,
  CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState,
  CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings,
  CChatUsability_RequestClientUsabilityMetrics_Notification,
} from "../protos-definitions/webui/service_chatusability";
import type {
  CCheckout_AddFreeLicense_Request,
  CCheckout_AddFreeLicense_Response,
  CCheckout_GetFriendOwnershipForGifting_Request,
  CCheckout_GetFriendOwnershipForGifting_Response,
  CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership,
  CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo,
  CCheckout_ValidateCart_Request,
  CCheckout_ValidateCart_Response,
  CCheckout_ValidateCart_Response_CartItem,
  CCheckout_ValidateCart_Response_CartItem_Errors,
  CCheckout_ValidateCart_Response_CartItem_Warnings,
  CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub,
  CCheckout_ValidateCart_Response_EstimatedTotals,
} from "../protos-definitions/webui/service_checkout";
import type {
  CClan_GetDraftAndRecentPartnerEventSnippet_Request,
  CClan_GetDraftAndRecentPartnerEventSnippet_Response,
  CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData,
  CClan_GetPartnerEventsByBuildIDRange_Request,
  CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange,
  CClan_GetPartnerEventsByBuildIDRange_Response,
  CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc,
  CClan_RespondToClanInvite_Request,
} from "../protos-definitions/webui/service_clan";
import type {
  CClanChatRooms_GetClanChatRoomInfo_Request,
  CClanChatRooms_GetClanChatRoomInfo_Response,
  CClanChatRooms_SetClanChatRoomPrivate_Request,
  CClanChatRooms_SetClanChatRoomPrivate_Response,
} from "../protos-definitions/webui/service_clanchatrooms";
import type {
  CClanFAQContent,
  CClanFAQS_CheckFAQPermissions_Request,
  CClanFAQS_Create_Request,
  CClanFAQS_Create_Response,
  CClanFAQS_Delete_Request,
  CClanFAQS_GetAllDrafts_Request,
  CClanFAQS_GetAllDrafts_Response,
  CClanFAQS_GetAllFAQsForClan_Request,
  CClanFAQS_GetAllFAQsForClan_Response,
  CClanFAQS_GetAllLatestVersionPublishedFAQS_Request,
  CClanFAQS_GetAllLatestVersionPublishedFAQS_Response,
  CClanFAQS_GetFAQ_Request,
  CClanFAQS_GetFAQ_Response,
  CClanFAQS_GetFAQVersion_Request,
  CClanFAQS_GetFAQVersion_Response,
  CClanFAQS_PreviewDraft_Request,
  CClanFAQS_PreviewDraft_Response,
  CClanFAQS_PublishDraft_Request,
  CClanFAQS_PublishDraft_Response,
  CClanFAQS_SearchFAQs_Request,
  CClanFAQS_SearchFAQs_Response,
  CClanFAQS_SearchFAQs_Response_CFAQSearchResult,
  CClanFAQS_SetVisibility_Request,
  CClanFAQS_UpdateDraft_Request,
  CClanFAQS_UpdateDraft_Response,
  CClanFAQS_UpdateInternalName_Request,
  CClanFAQS_UpdateJsonData_Request,
  CClanFAQSummary,
  CClanFAQSummary_CLanguageInfo,
  CClanFAQs_FetchLocalizationFromCrowdIn_Request,
  CClanFAQs_GetCrowdInMetadata_Request,
  CClanFAQs_GetCrowdInMetadata_Response,
} from "../protos-definitions/webui/service_clanfaqs";
import type {
  CClientComm_ClientData,
  CClientComm_ClientData_RunningGames,
  CClientComm_EnableOrDisableDownloads_Request,
  CClientComm_GetAllClientLogonInfo_Response,
  CClientComm_GetAllClientLogonInfo_Response_Session,
  CClientComm_GetClientAppList_Request,
  CClientComm_GetClientAppList_Response,
  CClientComm_GetClientAppList_Response_AppData,
  CClientComm_GetClientAppList_Response_AppData_DLCData,
  CClientComm_GetClientInfo_Request,
  CClientComm_GetClientInfo_Response,
  CClientComm_GetClientLogonInfo_Request,
  CClientComm_GetClientLogonInfo_Response,
  CClientComm_InstallClientApp_Request,
  CClientComm_LaunchClientApp_Request,
  CClientComm_SetClientAppUpdateState_Request,
  CClientComm_UninstallClientApp_Request,
} from "../protos-definitions/webui/service_clientcomm";
import type {
  CClientMetrics_ReportAccessibilitySettings_Notification,
  CClientMetrics_ReportClientArgs_Notification,
  CClientMetrics_ReportClientError_Notification,
  CClientMetrics_ReportClientError_Notification_Error,
  CClientMetrics_ReportLinuxStats_Notification,
  CClientMetrics_ReportReactUsage_Notification,
  CClientMetrics_ReportReactUsage_Notification_ActionData,
  CClientMetrics_ReportReactUsage_Notification_ComponentData,
  CClientMetrics_ReportReactUsage_Notification_RouteData,
} from "../protos-definitions/webui/service_clientmetrics";
import type {
  CCloud_AppCloudStateChange_Notification,
  CCloud_AppFileInfo,
  CCloud_AppLaunchIntent_Request,
  CCloud_AppLaunchIntent_Response,
  CCloud_AppSessionResume_Request,
  CCloud_AppSessionSuspend_Request,
  CCloud_BeginAppUploadBatch_Request,
  CCloud_BeginAppUploadBatch_Response,
  CCloud_BeginHTTPUpload_Request,
  CCloud_BeginHTTPUpload_Response,
  CCloud_BeginHTTPUpload_Response_HTTPHeaders,
  CCloud_BeginUGCUpload_Request,
  CCloud_BeginUGCUpload_Response,
  CCloud_BeginUGCUpload_Response_HTTPHeaders,
  CCloud_CDNReport_Notification,
  CCloud_ClientBeginFileUpload_Request,
  CCloud_ClientBeginFileUpload_Response,
  CCloud_ClientCommitFileUpload_Request,
  CCloud_ClientCommitFileUpload_Response,
  CCloud_ClientConflictResolution_Notification,
  CCloud_ClientDeleteFile_Request,
  CCloud_ClientFileDownload_Request,
  CCloud_ClientFileDownload_Response,
  CCloud_ClientFileDownload_Response_HTTPHeaders,
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
  ClientCloudFileUploadBlockDetails_HTTPHeaders,
} from "../protos-definitions/webui/service_cloud";
import type {
  CCloudConfigStore_Change_Notification,
  CCloudConfigStore_Download_Request,
  CCloudConfigStore_Download_Response,
  CCloudConfigStore_Entry,
  CCloudConfigStore_NamespaceData,
  CCloudConfigStore_NamespaceVersion,
  CCloudConfigStore_Upload_Request,
  CCloudConfigStore_Upload_Response,
} from "../protos-definitions/webui/service_cloudconfigstore";
import type {
  CCloudGaming_CreateNonce_Request,
  CCloudGaming_CreateNonce_Response,
  CCloudGaming_GetTimeRemaining_Request,
  CCloudGaming_GetTimeRemaining_Response,
  CCloudGaming_TimeRemaining,
} from "../protos-definitions/webui/service_cloudgaming";
import type {
  CAppPriority,
  CCDDBAppDetailCommon,
  CClanEventUserNewsTuple,
  CClanMatchEventByRange,
  CCommunity_ClanLocGroupImage,
  CCommunity_ClearSinglePartnerEventsAppPriority_Request,
  CCommunity_Comment,
  CCommunity_Comment_Reaction,
  CCommunity_DeleteCommentFromThread_Request,
  CCommunity_FetchTranslationFromCrowdIn_Request,
  CCommunity_GetAppRichPresenceLocalization_Request,
  CCommunity_GetAppRichPresenceLocalization_Response,
  CCommunity_GetAppRichPresenceLocalization_Response_Token,
  CCommunity_GetAppRichPresenceLocalization_Response_TokenList,
  CCommunity_GetApps_Request,
  CCommunity_GetApps_Response,
  CCommunity_GetAvatarHistory_Request,
  CCommunity_GetAvatarHistory_Response,
  CCommunity_GetAvatarHistory_Response_AvatarData,
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
  CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent,
  CCommunity_HideAndReportComment_Request,
  CCommunity_MarkPartnerEventsForUser_Request,
  CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking,
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
  CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel,
  CCommunity_VerifyClanMembership_Request,
  CCommunity_VerifyClanMembership_Response,
} from "../protos-definitions/webui/service_community";
import type {
  AdditionalSubjectData,
  AdditionalSubjectData_DataEntry,
  CContentModeration_CancelContentReport_Request,
  CContentModeration_ClaimBatchForModeration_Request,
  CContentModeration_ClaimBatchForModeration_Response,
  CContentModeration_ClaimSubject_Request,
  CContentModeration_CreateContentReport_Request,
  CContentModeration_CreateContentReport_Response,
  CContentModeration_DisputeModerationForReport_Request,
  CContentModeration_DisputeModerationForSubject_Request,
  CContentModeration_EscalateSubject_Request,
  CContentModeration_GetAuditLog_Request,
  CContentModeration_GetAuditLog_Response,
  CContentModeration_GetAuditLog_Response_AuditLogEntry,
  CContentModeration_GetClaimed_Request,
  CContentModeration_GetClaimed_Response,
  CContentModeration_GetContentReportSubject_Request,
  CContentModeration_GetContentReportSubject_Response,
  CContentModeration_GetContentReportSubjectGroup_Request,
  CContentModeration_GetContentReportSubjectGroup_Response,
  CContentModeration_GetModeratorActivity_Request,
  CContentModeration_GetModeratorActivity_Response,
  CContentModeration_GetModeratorActivity_Response_ModerationActivity,
  CContentModeration_GetModeratorPreferences_Request,
  CContentModeration_GetModeratorPreferences_Response,
  CContentModeration_GetReportedSubjectsByOwner_Request,
  CContentModeration_GetReportedSubjectsByOwner_Response,
  CContentModeration_GetReportsSubmittedByUser_Request,
  CContentModeration_GetReportsSubmittedByUser_Response,
  CContentModeration_GetSubjectOverview_Response,
  CContentModeration_GetSubjectOverview_Response_Bucket,
  CContentModeration_ReleaseClaimed_Request,
  CContentModeration_ReleaseSubject_Request,
  CContentModeration_ResolveDisputedSubject_Request,
  CContentModeration_ResolveSubject_Request,
  CContentModeration_ResolveSubjectGroup_Request,
  CContentModeration_SetModeratorPreferences_Request,
  CContentModeration_SetModeratorPreferences_Request_SubjectTypeList,
  CContentModeration_UpdateSubject_Request,
  CContentModeration_WriteToAuditLog_Request,
  ContentReport,
  ContentReportSubject,
  ContentReportSubjectSanction,
} from "../protos-definitions/webui/service_contentmoderation";
import type {
  CContentServerConfig_GetManifestRequestCode_Request,
  CContentServerConfig_GetManifestRequestCode_Response,
} from "../protos-definitions/webui/service_contentserverconfig";
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
} from "../protos-definitions/webui/service_contentserverdirectory";
import type {
  CDailyDeal_CancelDailyDeal_Request,
  CDailyDeal_CreateDailyDeal_Request,
  CDailyDeal_CreateDailyDeal_Response,
  CDailyDeal_DeleteDailyDeal_Request,
  CDailyDeal_GetDailyDeals_Request,
  CDailyDeal_GetDailyDeals_Response,
  CDailyDeal_GetDailyDeals_Response_DailyDealBlockedDate,
  CDailyDeal_GetDailyDeals_Response_DailyDealScheduledSlot,
  CDailyDeal_GetDailyDealsForApps_Request,
  CDailyDeal_GetDailyDealsForApps_Response,
  CDailyDeal_UpdateDailyDeal_Request,
  CDailyDealDetails,
} from "../protos-definitions/webui/service_dailydeal";
import type {
  CDepotContentDetection_GetAllDetectedAppContent_Request,
  CDepotContentDetection_GetAllDetectedAppContent_Response,
  CDepotContentDetection_GetDetectedContentSingleApp_Request,
  CDepotContentDetection_GetDetectedContentSingleApp_Response,
  DetectedAppContent,
} from "../protos-definitions/webui/service_depotcontentdetection";
import type {
  CEcon_Asset,
  CEcon_ClientGetItemShopOverlayAuthURL_Request,
  CEcon_ClientGetItemShopOverlayAuthURL_Response,
  CEcon_GetAssetClassInfo_Request,
  CEcon_GetAssetClassInfo_Response,
  CEcon_GetAssetPropertySchema_Request,
  CEcon_GetAssetPropertySchema_Response,
  CEcon_GetInventoryItemsWithDescriptions_Request,
  CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions,
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
} from "../protos-definitions/webui/service_econ";
import type {
  CEmbeddedClient_AuthorizeCurrentDevice_Request,
  CEmbeddedClient_AuthorizeDevice_Response,
  CEmbeddedClient_Token,
} from "../protos-definitions/webui/service_embedded";
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
  CFamilyGroups_GetChangeLog_Response_Change,
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
  CFamilyGroups_GetPreferredLenders_Response_FamilyMember,
  CFamilyGroups_GetPurchaseRequests_Request,
  CFamilyGroups_GetPurchaseRequests_Response,
  CFamilyGroups_GetSharedLibraryApps_Request,
  CFamilyGroups_GetSharedLibraryApps_Response,
  CFamilyGroups_GetSharedLibraryApps_Response_SharedApp,
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
  CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember,
  CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp,
  FamilyGroupFormerMember,
  FamilyGroupMember,
  FamilyGroupMembership,
  FamilyGroupPendingInvite,
  FamilyGroupPendingInviteForUser,
  PurchaseRequest,
} from "../protos-definitions/webui/service_familygroups";
import type {
  CForums_DeleteModeratedComment_Request,
  CForums_DeleteModeratedTopic_Request,
  CForums_GetForumDetails_Response,
  CForums_GetTopicDetails_Request,
  CForums_GetTopicDetails_Response,
  CForums_ReportPost_Request,
  CForums_ReportPost_Response,
  CForums_ResolveReportedPost_Request,
  CForums_ResolveReportedPosts_Request,
  CForums_ResolveReportedPosts_Response,
  CForums_SetTopicLocked_Request,
  CForums_Topic,
  CForums_Topic_Reaction,
  CForums_UndeleteDisputedComment_Request,
  CForums_UndeleteDisputedTopic_Request,
  CForums_UserBan,
  CForums_UserPermissions,
} from "../protos-definitions/webui/service_forums";
import type {
  CFovasVideo_ClientGetOPFSettings_Request,
  CFovasVideo_ClientGetOPFSettings_Response,
} from "../protos-definitions/webui/service_fovasvideo";
import type {
  CFriendMessages_AckMessage_Notification,
  CFriendMessages_DismissSessionNotice_Notification,
  CFriendMessages_GetRecentMessages_Request,
  CFriendMessages_GetRecentMessages_Response,
  CFriendMessages_GetRecentMessages_Response_FriendMessage,
  CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction,
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
  CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession,
} from "../protos-definitions/webui/service_friendmessages";
import type {
  CFriendsList_FavoritesChanged_Notification,
  CFriendsList_GetCategories_Response,
  CFriendsList_GetFavorites_Response,
  CFriendsList_GetFriendsList_Response,
  CFriendsList_SetFavorites_Request,
  CFriendsListCategory,
  CFriendsListFavoriteEntry,
  CMsgClientFriendsList,
  CMsgClientFriendsList_Friend,
} from "../protos-definitions/webui/service_friendslist";
import type {
  CGameNotes_UploadImage_Request,
  CGameNotes_UploadImage_Response,
} from "../protos-definitions/webui/service_gamenotes";
import type {
  CGamePerformanceStats_GetGameFrameRateStats_Request,
  CGamePerformanceStats_GetGameFrameRateStats_Response,
  CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate,
} from "../protos-definitions/webui/service_gameperformancestats";
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
  CGameRecording_GetAppsWithBackgroundVideo_Response_App,
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
  CGameRecording_GetThumbnails_Response_Thumbnail,
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
  CGameRecording_QueryPhases_Request_Tag,
  CGameRecording_QueryPhases_Response,
  CGameRecording_QueryPhases_Response_Phase,
  CGameRecording_QueryPhases_Response_Phase_BackgroundRecording,
  CGameRecording_RecordingSessionChanged_Notification,
  CGameRecording_SaveClip_Request,
  CGameRecording_SaveClip_Request_Position,
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
  CGameRecordingPhase,
  CGameRecordingPhase_Tag,
  CGameRecordingTimelineEvent,
  CGameRecordingTimelineMetadata,
  CGameRecordingTimelineMetadata_Recording,
  CPhaseAttribute,
  CTimelineEntry,
  CTimelineTag,
} from "../protos-definitions/webui/service_gamerecording";
import type {
  CGameRecording_CreateShareClip_Request,
  CGameRecording_CreateShareClip_Response,
  CGameRecording_DeleteSharedClip_Request,
  CGameRecording_GetSingleSharedClip_Request,
  CGameRecording_GetSingleSharedClip_Response,
  CGameRecordingClip,
  CMsgVideoGameRecordingComponent,
  CMsgVideoGameRecordingDef,
  CMsgVideoGameRecordingRepresentation,
  CVideoManagerClipID,
} from "../protos-definitions/webui/service_gamerecordingclip";
import type {
  CGameRecordingDebug_AddTimelineHighlightMarker_Request,
  CGameRecordingDebug_AddTimelineRangeEnd_Request,
  CGameRecordingDebug_AddTimelineRangeStart_Request,
  CGameRecordingDebug_AddTimelineTimestamp_Request,
  CGameRecordingDebug_SetTimelineGameMode_Request,
} from "../protos-definitions/webui/service_gamerecordingdebug";
import type {
  CGamescope_GetState_Response,
  CGamescope_SetBlurParams_Request,
  CGamescope_SetDisplayPowerState_Request,
  CMsgDisplayInfo,
  CMsgGamescopeState,
} from "../protos-definitions/webui/service_gamescope";
import type {
  CHardwareUpdate_CheckForUpdates_Response,
  CHardwareUpdate_GetState_Response,
  CHardwareUpdate_PrepForUpdate_Request,
  CHardwareUpdate_Update_Request,
  CHardwareUpdate_UpdateProgress_Notification,
  CMsgAvailableHardwareUpdate,
} from "../protos-definitions/webui/service_hardwareupdate";
import type {
  CHelpRequestLogs_GetApplicationLogDemand_Request,
  CHelpRequestLogs_GetApplicationLogDemand_Response,
  CHelpRequestLogs_UploadUserApplicationLog_Request,
  CHelpRequestLogs_UploadUserApplicationLog_Response,
} from "../protos-definitions/webui/service_helprequestlogs";
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
} from "../protos-definitions/webui/service_ledmanager";
import type {
  CLoyaltyRewards_AddReaction_Request,
  CLoyaltyRewards_BatchedQueryRewardItems_Request,
  CLoyaltyRewards_BatchedQueryRewardItems_Response,
  CLoyaltyRewards_BatchedQueryRewardItems_Response_Response,
  CLoyaltyRewards_GetActivePurchaseBonuses_Response,
  CLoyaltyRewards_GetEligibleApps_Response,
  CLoyaltyRewards_GetEligibleApps_Response_EligibleApp,
  CLoyaltyRewards_GetEquippedProfileItems_Request,
  CLoyaltyRewards_GetEquippedProfileItems_Response,
  CLoyaltyRewards_GetPointsForSpend_Request,
  CLoyaltyRewards_GetPointsForSpend_Response,
  CLoyaltyRewards_GetProfileCustomizationsConfig_Response,
  CLoyaltyRewards_GetReactionConfig_Request,
  CLoyaltyRewards_GetReactionConfig_Response,
  CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig,
  CLoyaltyRewards_GetReactions_Request,
  CLoyaltyRewards_GetReactions_Response,
  CLoyaltyRewards_GetReactionsSummaryForUser_Request,
  CLoyaltyRewards_GetReactionsSummaryForUser_Response,
  CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown,
  CLoyaltyRewards_GetSummary_Request,
  CLoyaltyRewards_GetSummary_Response,
  CLoyaltyRewards_GetSummary_Response_Summary,
  CLoyaltyRewards_QueryRewardItems_Request,
  CLoyaltyRewards_QueryRewardItems_Response,
  CLoyaltyRewards_RedeemPoints_Request,
  CLoyaltyRewards_RedeemPoints_Response,
  CLoyaltyRewards_RedeemPointsForBadgeLevel_Request,
  CLoyaltyRewards_RedeemPointsForProfileCustomization_Request,
  CLoyaltyRewards_RedeemPointsForProfileCustomization_Response,
  CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request,
  CLoyaltyRewards_RedeemPointsToUpgradeItem_Request,
  CLoyaltyRewards_RegisterForSteamDeckRewards_Request,
  CLoyaltyRewards_RegisterForSteamDeckRewards_Response,
  LoyaltyRewardPurchaseBonus,
} from "../protos-definitions/webui/service_loyaltyrewards";
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
  CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser,
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
} from "../protos-definitions/webui/service_marketingmessages";
import type {
  CBuildManagement_SetAppBuildSortOrder_Request,
  CMDSAdmin_AppBuildUpdated_Notification,
  CMDSAdmin_AppContentPurge_Request,
  CMDSAdmin_AppContentPurgeStatus_Request,
  CMDSAdmin_AppContentPurgeStatus_Response,
  CMDSAdmin_BeginOriginMigrationJob_Request,
  CMDSAdmin_CSPurgeDepot_Notification,
  CMDSAdmin_DepotDownloadBytesInfo,
  CMDSAdmin_GetDepotDownloadBytes_Request,
  CMDSAdmin_GetDepotDownloadBytes_Response,
  CMDSAdmin_InvalidateDepotMetadata_Notification,
  CMDSAdmin_ManifestAppBranchInfo_Request,
  CMDSAdmin_ManifestAppBranchInfo_Response,
  CMDSAdmin_MDSFlushDepotCache_Notification,
  CMDSAdmin_MDSFlushManifestVersion_Notification,
  CMDSAdmin_NewChunkAnnouncement_Notification,
} from "../protos-definitions/webui/service_mdsadmin";
import type {
  CMobileApp_GetMobileSummary_Request,
  CMobileApp_GetMobileSummary_Response,
} from "../protos-definitions/webui/service_mobileapp";
import type {
  CMobileAuth_MigrateMobileSession_Request,
  CMobileAuth_MigrateMobileSession_Request_DeviceDetails,
  CMobileAuth_MigrateMobileSession_Response,
} from "../protos-definitions/webui/service_mobileauth";
import type {
  CMobileDevice_DeregisterMobileDevice_Notification,
  CMobileDevice_HasMobileDevice_Request,
  CMobileDevice_HasMobileDevice_Response,
  CMobileDevice_RegisterMobileDevice_Request,
  CMobileDevice_RegisterMobileDevice_Response,
} from "../protos-definitions/webui/service_mobiledevice";
import type {
  CMobilePerAccount_GetSettings_Response,
  CMobilePerAccount_SetSettings_Request,
} from "../protos-definitions/webui/service_mobileperaccount";
import type {
  CNews_ConvertHTMLToBBCode_Request,
  CNews_ConvertHTMLToBBCode_Response,
  CNews_GetBatchPublishedPartnerEvent_Request,
  CNews_GetBatchPublishedPartnerEvent_Response,
  CNews_GetNewsFeedByRepublishClan_Request,
  CNews_GetNewsFeedByRepublishClan_Response,
  CNews_PreviewPartnerEvents_Request,
  CNews_PreviewPartnerEvents_Response,
  CNews_PublishPartnerEvent_Request,
  CNews_PublishPartnerEvent_Response,
  CNewsFeedDef,
  CNewsFeedPostDef,
  CNewsPartnerEventPreview,
} from "../protos-definitions/webui/service_news";
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
  ParentalApp,
  ParentalFeatureRequest,
  ParentalPlaytimeDay,
  ParentalPlaytimeRequest,
  ParentalPlaytimeRestrictions,
  ParentalSettings,
  ParentalTemporaryPlaytimeRestrictions,
} from "../protos-definitions/webui/service_parental";
import type {
  CPartnerAppNotes_CreateNotes_Request,
  CPartnerAppNotes_GetMultipleNotes_Request,
  CPartnerAppNotes_GetMultipleNotes_Response,
  CPartnerAppNotes_GetMultipleNotes_Response_Container,
  CPartnerAppNotes_GetNotes_Request,
  CPartnerAppNotes_GetNotes_Response,
  CPartnerAppNotes_UpdateNotes_Request,
} from "../protos-definitions/webui/service_partnerappnotes";
import type {
  CPartnerDeadline,
  CPartnerDeadline_GetDeadlineByTimeRange_Request,
  CPartnerDeadline_GetDeadlineByTimeRange_Response,
  CPartnerDeadline_GetDeadlineByTimeRange_Response_Result,
  CPartnerDeadline_GetDeadlinesForPartner_Request,
  CPartnerDeadline_GetDeadlinesForPartner_Response,
  CPartnerDeadline_GetDeadlinesForPartner_Response_Result,
  CPartnerDeadlineLookUpKey,
} from "../protos-definitions/webui/service_partnerdeadline";
import type {
  CDismissPinData,
  CPartnerDismiss_CreateDismiss_Request,
  CPartnerDismiss_CreateDismiss_Response,
  CPartnerDismiss_DeleteDismiss_Request,
  CPartnerDismiss_GetDismissTimeRange_Request,
  CPartnerDismiss_GetDismissTimeRange_Response,
} from "../protos-definitions/webui/service_partnerdismiss";
import type {
  CParterMeetSteam_TestFireEmails_Request,
  CParterMeetSteam_TestFireEmails_Response,
  CPartnerEmailAndName,
  CPartnerMeetSteam_EmailInvitees_Request,
  CPartnerMeetSteam_EmailInvitees_Response,
  CPartnerMeetSteam_GetAvailability_Request,
  CPartnerMeetSteam_GetAvailability_Response,
  CPartnerMeetSteam_GetAvailability_Response_Session,
  CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request,
  CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response,
  CPartnerMeetSteam_GetRegistrations_Request,
  CPartnerMeetSteam_GetRegistrations_Response,
  CPartnerMeetSteam_GetRegistrations_Response_Registration,
  CPartnerMeetSteam_GetSaleEventOrganizers_Request,
  CPartnerMeetSteam_GetSaleEventOrganizers_Response,
  CPartnerMeetSteam_UpdateRegistration_Request,
  CSaleEventOrganizerInfo,
} from "../protos-definitions/webui/service_partnermeetsteam";
import type {
  CPartnerMembershipInvite_GetInvites_Request,
  CPartnerMembershipInvite_GetInvites_Response,
  MembershipInvite,
} from "../protos-definitions/webui/service_partnermembershipinvite";
import type {
  CPartnerStoreBrowse_GetCountryRestrictions_Request,
  CPartnerStoreBrowse_GetCountryRestrictions_Response,
  CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions,
  CPartnerStoreBrowse_GetItems_Request,
} from "../protos-definitions/webui/service_partnerstorebrowse";
import type {
  CPhone_AddPhoneToAccount_Response,
  CPhone_ConfirmAddPhoneToAccount_Request,
  CPhone_IsAccountWaitingForEmailConfirmation_Response,
  CPhone_SendPhoneVerificationCode_Request,
  CPhone_SetAccountPhoneNumber_Request,
  CPhone_SetAccountPhoneNumber_Response,
  CPhone_VerifyAccountPhoneWithCode_Request,
} from "../protos-definitions/webui/service_phone";
import type {
  CPhysicalGoods_CheckInventoryAvailableByPackage_Request,
  CPhysicalGoods_CheckInventoryAvailableByPackage_Response,
} from "../protos-definitions/webui/service_physicalgoods";
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
  CPlayer_GetAchievementsProgress_Response_AchievementProgress,
  CPlayer_GetAnimatedAvatar_Request,
  CPlayer_GetAnimatedAvatar_Response,
  CPlayer_GetAvatarFrame_Request,
  CPlayer_GetAvatarFrame_Response,
  CPlayer_GetCommunityBadgeProgress_Request,
  CPlayer_GetCommunityBadgeProgress_Response,
  CPlayer_GetCommunityBadgeProgress_Response_Quest,
  CPlayer_GetCommunityPreferences_Response,
  CPlayer_GetDurationControl_Request,
  CPlayer_GetDurationControl_Response,
  CPlayer_GetEmoticonList_Response,
  CPlayer_GetEmoticonList_Response_Emoticon,
  CPlayer_GetFavoriteBadge_Request,
  CPlayer_GetFavoriteBadge_Response,
  CPlayer_GetFriendsGameplayInfo_Request,
  CPlayer_GetFriendsGameplayInfo_Response,
  CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo,
  CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo,
  CPlayer_GetGameAchievements_Request,
  CPlayer_GetGameAchievements_Response,
  CPlayer_GetGameAchievements_Response_Achievement,
  CPlayer_GetGameBadgeLevels_Request,
  CPlayer_GetGameBadgeLevels_Response,
  CPlayer_GetGameBadgeLevels_Response_Badge,
  CPlayer_GetLastPlayedTimes_Request,
  CPlayer_GetLastPlayedTimes_Response,
  CPlayer_GetLastPlayedTimes_Response_Game,
  CPlayer_GetMiniProfileBackground_Request,
  CPlayer_GetMiniProfileBackground_Response,
  CPlayer_GetMutualFriendsForIncomingInvites_Response,
  CPlayer_GetNewSteamAnnouncementState_Request,
  CPlayer_GetNewSteamAnnouncementState_Response,
  CPlayer_GetNicknameList_Response,
  CPlayer_GetNicknameList_Response_PlayerNickname,
  CPlayer_GetOwnedGames_Request,
  CPlayer_GetOwnedGames_Response,
  CPlayer_GetOwnedGames_Response_Game,
  CPlayer_GetPerFriendPreferences_Response,
  CPlayer_GetPlayerLinkDetails_Request,
  CPlayer_GetPlayerLinkDetails_Response,
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails,
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData,
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData,
  CPlayer_GetPlayNext_Request,
  CPlayer_GetPlayNext_Response,
  CPlayer_GetPostedStatus_Request,
  CPlayer_GetPostedStatus_Response,
  CPlayer_GetPrivacySettings_Response,
  CPlayer_GetProfileBackground_Request,
  CPlayer_GetProfileBackground_Response,
  CPlayer_GetProfileCustomization_Request,
  CPlayer_GetProfileCustomization_Response,
  CPlayer_GetProfileCustomization_Response_PurchasedCustomization,
  CPlayer_GetProfileItemsEquipped_Request,
  CPlayer_GetProfileItemsEquipped_Response,
  CPlayer_GetProfileItemsOwned_Request,
  CPlayer_GetProfileItemsOwned_Response,
  CPlayer_GetProfileThemesAvailable_Response,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization,
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization,
  CPlayer_GetPurchasedProfileCustomizations_Request,
  CPlayer_GetPurchasedProfileCustomizations_Response,
  CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization,
  CPlayer_GetRecentPlaytimeSessionsForChild_Request,
  CPlayer_GetRecentPlaytimeSessionsForChild_Response,
  CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession,
  CPlayer_GetSteamDeckKeyboardSkin_Request,
  CPlayer_GetSteamDeckKeyboardSkin_Response,
  CPlayer_GetTextFilterWords_Response,
  CPlayer_GetTimeSSAAccepted_Response,
  CPlayer_GetTopAchievementsForGames_Request,
  CPlayer_GetTopAchievementsForGames_Response,
  CPlayer_GetTopAchievementsForGames_Response_Achievement,
  CPlayer_GetTopAchievementsForGames_Response_Game,
  CPlayer_IgnoreFriend_Request,
  CPlayer_IgnoreFriend_Response,
  CPlayer_IncomingInviteMutualFriendList,
  CPlayer_LastPlayedTimes_Notification,
  CPlayer_NewSteamAnnouncementState_Notification,
  CPlayer_PerFriendPreferencesChanged_Notification,
  CPlayer_PostStatusToFriends_Request,
  CPlayer_PrivacySettingsChanged_Notification,
  CPlayer_RecordDisconnectedPlaytime_Request,
  CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory,
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
  ProfileItem_ProfileColor,
  ProfilePreferences,
  ProfileTheme,
} from "../protos-definitions/webui/service_player";
import type {
  CPlaytest_GetInviteHistory_Request,
  CPlaytest_GetInviteHistory_Response,
  CPlaytest_GetInviteHistory_Response_Invite,
  CPlaytest_GetInviteOptions_Request,
  CPlaytest_GetInviteOptions_Response,
  CPlaytest_GetInvites_Request,
  CPlaytest_GetInvites_Response,
  CPlaytest_GetInvites_Response_Invite,
  CPlaytest_GetUserStatus_Request,
  CPlaytest_GetUserStatus_Response,
  CPlaytest_GetUserStatus_Response_AppStatus,
  CPlaytest_RequestInvite_Request,
  CPlaytest_RequestInvite_Response,
  CPlaytest_UpdateInvites_Request,
  CPlaytest_UpdateInvites_Response,
} from "../protos-definitions/webui/service_playtest";
import type {
  CPromotionEventInvitation,
  CPromotionEventInviteReceive,
  CPromotionEventInvites_AcceptInvite_Request,
  CPromotionEventInvites_AcceptInvite_Response,
  CPromotionEventInvites_CancelInvite_Request,
  CPromotionEventInvites_GetEmailTargets_Request,
  CPromotionEventInvites_GetEmailTargets_Response,
  CPromotionEventInvites_GetInvite_Request,
  CPromotionEventInvites_GetInvite_Response,
  CPromotionEventInvites_ResendEmailInvite_Request,
  CPromotionEventInvites_SetInvite_Request,
  CPromotionEventInvites_SetInvite_Response,
  CPromotionRequirements,
} from "../protos-definitions/webui/service_promotioneventinvites";
import type {
  CPromoAssociation,
  CPromotionNotificationResults,
  CPromotionPlan,
  CPromotionPlan_CreateSalePageForPromo_Request,
  CPromotionPlan_CreateSalePageForPromo_Response,
  CPromotionPlan_GetPromotionPlanSalesDaily_Request,
  CPromotionPlan_GetPromotionPlanSalesDaily_Response,
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales,
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product,
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData,
  CPromotionPlan_SummarySaleResult,
  CPromotionPlanning_CreatePlan_Request,
  CPromotionPlanning_CreatePlan_Response,
  CPromotionPlanning_DeletePlan_Request,
  CPromotionPlanning_GetAdvertisingAppsForPartner_Request,
  CPromotionPlanning_GetAdvertisingAppsForPartner_Response,
  CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app,
  CPromotionPlanning_GetAllActivePlan_Response,
  CPromotionPlanning_GetAllPlansForApps_Request,
  CPromotionPlanning_GetAllPlansForApps_Response,
  CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales,
  CPromotionPlanning_GetAllPlansForPartner_Request,
  CPromotionPlanning_GetAllPlansForPartner_Response,
  CPromotionPlanning_GetPlan_Request,
  CPromotionPlanning_GetPlan_Response,
  CPromotionPlanning_GetPlanByAssociationID_Request,
  CPromotionPlanning_GetPlanByAssociationID_Response,
  CPromotionPlanning_GetPlanByInputAccessKey_Request,
  CPromotionPlanning_GetPlanByInputAccessKey_Response,
  CPromotionPlanning_GetPlanCompletedInDateRange_Request,
  CPromotionPlanning_GetPlanCompletedInDateRange_Response,
  CPromotionPlanning_GetPlansUpdatedSince_Request,
  CPromotionPlanning_GetPlansUpdatedSince_Response,
  CPromotionPlanning_GetPromotionPlanForSalePages_Request,
  CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage,
  CPromotionPlanning_GetPromotionPlanForSalePages_Response,
  CPromotionPlanning_GetSalePageCandidatesForPromo_Request,
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response,
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan,
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage,
  CPromotionPlanning_GetSentNotification_Request,
  CPromotionPlanning_GetSentNotification_Response,
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Request,
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response,
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo,
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo,
  CPromotionPlanning_MarkLocalizationAssetComplete_Request,
  CPromotionPlanning_ResendNotification_Request,
  CPromotionPlanning_SearchPlan_Request,
  CPromotionPlanning_SearchPlan_Response,
  CPromotionPlanning_SendNotification_Request,
  CPromotionPlanning_SetPromotionEmailTarget_Request,
  CPromotionPlanning_UpdatePlan_Request,
} from "../protos-definitions/webui/service_promotionplanning";
import type {
  CPromotionStats_GetOptInDemoStats_Request,
  CPromotionStats_GetOptInDemoStats_Response,
  CPromotionStats_GetOptInDemoStats_Response_PerAppStats,
} from "../protos-definitions/webui/service_promotionstats";
import type {
  CPublishedFile_AddAppRelationship_Request,
  CPublishedFile_AddChild_Request,
  CPublishedFile_AreFilesInSubscriptionList_Request,
  CPublishedFile_AreFilesInSubscriptionList_Response,
  CPublishedFile_AreFilesInSubscriptionList_Response_InList,
  CPublishedFile_CanSubscribe_Request,
  CPublishedFile_CanSubscribe_Response,
  CPublishedFile_Delete_Request,
  CPublishedFile_FileDeleted_Client_Notification,
  CPublishedFile_FileSubscribed_Notification,
  CPublishedFile_FileSubscribed_Notification_RevisionData,
  CPublishedFile_FileUnsubscribed_Notification,
  CPublishedFile_GetAppRelationships_Request,
  CPublishedFile_GetAppRelationships_Response,
  CPublishedFile_GetAppRelationships_Response_AppRelationship,
  CPublishedFile_GetAppRelationshipsBatched_Request,
  CPublishedFile_GetAppRelationshipsBatched_Response,
  CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship,
  CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship,
  CPublishedFile_GetChangeHistory_Request,
  CPublishedFile_GetChangeHistory_Response,
  CPublishedFile_GetChangeHistory_Response_ChangeLog,
  CPublishedFile_GetChangeHistoryEntry_Request,
  CPublishedFile_GetChangeHistoryEntry_Response,
  CPublishedFile_GetContentDescriptors_Request,
  CPublishedFile_GetContentDescriptors_Response,
  CPublishedFile_GetContentDescriptors_Response_ContentDescriptor,
  CPublishedFile_GetDetails_Request,
  CPublishedFile_GetDetails_Response,
  CPublishedFile_GetItemChanges_Request,
  CPublishedFile_GetItemChanges_Response,
  CPublishedFile_GetItemChanges_Response_WorkshopItemInfo,
  CPublishedFile_GetItemInfo_Request,
  CPublishedFile_GetItemInfo_Request_WorkshopItem,
  CPublishedFile_GetItemInfo_Response,
  CPublishedFile_GetItemInfo_Response_WorkshopItemInfo,
  CPublishedFile_GetSubSectionData_Request,
  CPublishedFile_GetSubSectionData_Response,
  CPublishedFile_GetUserFiles_Request,
  CPublishedFile_GetUserFiles_Request_KVTag,
  CPublishedFile_GetUserFiles_Request_TagGroup,
  CPublishedFile_GetUserFiles_Response,
  CPublishedFile_GetUserFiles_Response_App,
  CPublishedFile_GetUserVoteSummary_Request,
  CPublishedFile_GetUserVoteSummary_Response,
  CPublishedFile_GetUserVoteSummary_Response_VoteSummary,
  CPublishedFile_Publish_Request,
  CPublishedFile_Publish_Response,
  CPublishedFile_QueryFiles_Request,
  CPublishedFile_QueryFiles_Request_DateRange,
  CPublishedFile_QueryFiles_Request_KVTag,
  CPublishedFile_QueryFiles_Request_TagGroup,
  CPublishedFile_QueryFiles_Response,
  CPublishedFile_RefreshVotingQueue_Request,
  CPublishedFile_RemoveAppRelationship_Request,
  CPublishedFile_RemoveChild_Request,
  CPublishedFile_SetCollectionChildren_Request,
  CPublishedFile_SetPlaytimeForControllerConfigs_Request,
  CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage,
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
  PublishedFileDetails_Child,
  PublishedFileDetails_ForSaleData,
  PublishedFileDetails_KVTag,
  PublishedFileDetails_PlaytimeStats,
  PublishedFileDetails_Preview,
  PublishedFileDetails_Reaction,
  PublishedFileDetails_Tag,
  PublishedFileDetails_VoteData,
  PublishedFileSubSection,
} from "../protos-definitions/webui/service_publishedfile";
import type {
  COptInDef,
  CPartnerAppOptInData,
  CPartnerAppOptInEmailDef,
  CPartnerAppOptInEmailStats,
  CPartnerOptInEmailTracking,
  CPublishing_CreatePartnerAppOptInEmail_Request,
  CPublishing_CreatePartnerAppOptInEmail_Response,
  CPublishing_GetEstimatePartnerAppOptInEmail_Request,
  CPublishing_GetEstimatePartnerAppOptInEmail_Response,
  CPublishing_GetOptInAppealsSummaryStats_Request,
  CPublishing_GetOptInAppealsSummaryStats_Response,
  CPublishing_GetOptInAppealsSummaryStats_Response_CSummary,
  CPublishing_GetOptInEmailTracking_Request,
  CPublishing_GetOptInEmailTracking_Response,
  CPublishing_GetOptInHistoryInternal_Request,
  CPublishing_GetOptInHistoryInternal_Response,
  CPublishing_GetPartnerAppOptInEmailDefAndStats_Request,
  CPublishing_GetPartnerAppOptInEmailDefAndStats_Response,
  CPublishing_GetPartnerAppOptInsIDs_Request,
  CPublishing_GetPartnerAppOptInsIDs_Response,
  CPublishing_GetPartnerPaidGivenPackageList_Request,
  CPublishing_GetPartnerPaidGivenPackageList_Response,
  CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair,
  CPublishing_GetSinglePartnerAppOptIns_Request,
  CPublishing_GetSinglePartnerAppOptIns_Response,
  CPublishing_SendPartnerAppOptInEmailAndWait_Request,
  CPublishing_SendPartnerAppOptInEmailAndWait_Response,
  CPublishing_SetFeaturingOnPartnerAppOptIn_Request,
  CPublishing_SetFeaturingOnPartnerAppOptIn_Response,
  CPublishing_TestFirePartnerAppOptInEmail_Request,
  CPublishing_UpdatePartnerAppOptInEmail_Request,
} from "../protos-definitions/webui/service_publishing";
import type {
  CQuest_ActivateProfileModifierItem_Request,
  CQuest_CommunityItem,
  CQuest_CommunityItem_Attribute,
  CQuest_GetCommunityInventory_Request,
  CQuest_GetCommunityInventory_Response,
  CQuest_GetCommunityItemDefinitions_Request,
  CQuest_GetCommunityItemDefinitions_Response,
  CQuest_GetCommunityItemDefinitions_Response_ItemDefinition,
  CQuest_GetNumTradingCardsEarned_Request,
  CQuest_GetNumTradingCardsEarned_Response,
  CQuest_SetVirtualItemRewardDefinition_Request,
  CQuest_VirtualItemRewardDefinition_Request,
  CQuest_VirtualItemRewardDefinition_Response,
  CVirtualItemRewardDefinition,
} from "../protos-definitions/webui/service_quest";
import type {
  CRemoteClient_AllocateRelayServer_Request,
  CRemoteClient_AllocateRelayServer_Response,
  CRemoteClient_AllocateSDR_Request,
  CRemoteClient_ClientDetails,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Request,
  CRemoteClient_CreateRemotePlayTogetherInvitation_Response,
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Request,
  CRemoteClient_DeviceDetails,
  CRemoteClient_GetPairingInfo_Request,
  CRemoteClient_GetPairingInfo_Response,
  CRemoteClient_GetRecentClients_Response,
  CRemoteClient_MarkTaskComplete_Request,
  CRemoteClient_Online_Notification,
  CRemoteClient_ReplyPacket_Notification,
  CRemotePlay_SessionStarted_Request,
  CRemotePlay_SessionStarted_Response,
} from "../protos-definitions/webui/service_remote";
import type {
  CRemoteClient_RegisterStatusUpdate_Notification,
  CRemoteClient_RemotePacket_Notification,
  CRemoteClient_SteamBroadcast_Notification,
  CRemoteClient_SteamToSteam_Notification,
  CRemoteClient_Task,
  CRemoteClient_TaskList_Notification,
  CRemoteClient_UnregisterStatusUpdate_Notification,
  CRemotePlayTogether_Notification,
  CRemotePlayTogether_Notification_ControllerSlot,
  CRemotePlayTogether_Notification_ControllerSlot_obsolete,
  CRemotePlayTogether_Notification_GroupUpdated,
  CRemotePlayTogether_Notification_Player,
} from "../protos-definitions/webui/service_remoteclientsteam";
import type {
  CAchievementDetails,
  CFriendSharedYearInView,
  CGameAchievements,
  CGamePlaytimeStats,
  CGameRank,
  CGameRankings,
  CGameSummary,
  CGlobalPercentiles,
  CGlobalPlaytimeDistribution,
  CMonthlyPlaytimeStats,
  CPlaytimeByNumbers,
  CPlaytimeRanks,
  CPlaytimeStats,
  CPlaytimeStreak,
  CPlaytimeStreakGame,
  CPreviousYIRSummaryData,
  CRankingCategory,
  CSaleFeature_GetAllUserActionDataForType_Request,
  CSaleFeature_GetAllUserActionDataForType_Response,
  CSaleFeature_GetAllUserActionDataForType_Response_Entry,
  CSaleFeature_GetFriendsSharedYearInReview_Request,
  CSaleFeature_GetFriendsSharedYearInReview_Response,
  CSaleFeature_GetMultipleUserActionData_Request,
  CSaleFeature_GetMultipleUserActionData_Response,
  CSaleFeature_GetMultipleUserActionData_Response_Entry,
  CSaleFeature_GetUserActionData_Request,
  CSaleFeature_GetUserActionData_Response,
  CSaleFeature_GetUserSharingPermissions_Request,
  CSaleFeature_GetUserSharingPermissions_Response,
  CSaleFeature_GetUserYearAchievements_Request,
  CSaleFeature_GetUserYearAchievements_Response,
  CSaleFeature_GetUserYearInReview_Request,
  CSaleFeature_GetUserYearInReview_Response,
  CSaleFeature_GetUserYearInReviewShareImage_Request,
  CSaleFeature_GetUserYearInReviewShareImage_Response,
  CSaleFeature_GetUserYearInReviewShareImage_Response_Image,
  CSaleFeature_GetUserYearScreenshots_Request,
  CSaleFeature_GetUserYearScreenshots_Response,
  CSaleFeature_GetUserYearScreenshots_Response_Screenshot,
  CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp,
  CSaleFeature_GetYIRCurrentMonthlySummary_Request,
  CSaleFeature_GetYIRCurrentMonthlySummary_Response,
  CSaleFeature_SetUserSharingPermissions_Request,
  CSaleFeature_SetUserSharingPermissions_Response,
  CSimpleGameSummary,
  CUserPlaytimeStats,
  CUserPlaytimeSummaryStats,
  CUserTagStats,
  CUserTagStats_Tag,
  CUserYearInReviewStats,
  CYearInReviewPerformanceStats,
} from "../protos-definitions/webui/service_salefeature";
import type {
  CommunityItemDefinition,
  CSaleItemRewards_CanClaimItem_Request,
  CSaleItemRewards_CanClaimItem_Response,
  CSaleItemRewards_ClaimItem_Request,
  CSaleItemRewards_ClaimItem_Response,
  CSaleItemRewards_GetClaimedSaleRewards_Request,
  CSaleItemRewards_GetClaimedSaleRewards_Response,
  CSaleItemRewards_GetCurrentDefinition_Request,
  CSaleItemRewards_GetCurrentDefinition_Response,
  CSaleItemRewards_GetRewardDefinitions_Request,
  CSaleItemRewards_GetRewardDefinitions_Response,
  CSaleItemRewards_SetRewardDefinitions_Request,
  CSaleItemRewards_SetRewardDefinitions_Response,
  CSteamItemRewardDefinition,
  SaleItemRewardGrant,
  SaleReward_ItemDefinition,
} from "../protos-definitions/webui/service_saleitemrewards";
import type {
  CMsgSteamUIBrowserWindow,
  CSharedJSContext_GetDesiredSteamUIWindows_Response,
} from "../protos-definitions/webui/service_sharedjscontext";
import type {
  CShoppingCart_AddBundle_Request,
  CShoppingCart_AddBundle_Response,
  CShoppingCart_AddPackages_Request,
  CShoppingCart_AddPackages_Response,
  CShoppingCart_Amount,
  CShoppingCart_AvailableCoupon,
  CShoppingCart_BundleItem,
  CShoppingCart_Contents,
  CShoppingCart_CouponItem,
  CShoppingCart_CreateNew_Request,
  CShoppingCart_CreateNew_Response,
  CShoppingCart_GetContents_Request,
  CShoppingCart_GetContents_Response,
  CShoppingCart_Item,
  CShoppingCart_LoyaltyRewardItem,
  CShoppingCart_MicroTxnAsset,
  CShoppingCart_PackageItem,
  CShoppingCart_Potentials,
  CShoppingCart_RelationShip,
  CShoppingCart_RemoveLineItems_Request,
  CShoppingCart_RemoveLineItems_Response,
  CShoppingCart_UpdatePackageQuantity_Request,
  CShoppingCart_UpdatePackageQuantity_Response,
  CShoppingCart_WalletCreditItem,
} from "../protos-definitions/webui/service_shoppingcart";
import type {
  CMsgSleepManagerState,
  CSleepManager_GetState_Response,
  CSleepManager_RequestSuspend_Notification,
  CSleepManager_SwitchToPowerState_Request,
} from "../protos-definitions/webui/service_sleepmanager";
import type {
  CSteamAwards_GetNominationRecommendations_Request,
  CSteamAwards_GetNominationRecommendations_Response,
  CSteamAwards_GetNominationRecommendations_Response_PlayedApps,
  CSteamAwards_GetNominationRecommendations_Response_SuggestedApp,
  CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent,
  CSteamAwards_GetNominationShareLink_Request,
  CSteamAwards_GetNominationShareLink_Response,
  CSteamAwards_GetOtherUserNominations_Request,
  CSteamAwards_GetUserNominations_Response,
  CSteamAwards_Nominate_Request,
  CSteamAwards_Nominate_Response,
  CSteamAwardsNomination,
} from "../protos-definitions/webui/service_steamawards";
import type {
  CSteamCharts_GetBestOfYearPages_Response,
  CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage,
  CSteamCharts_GetGamesByConcurrentPlayers_Request,
  CSteamCharts_GetGamesByConcurrentPlayers_Response,
  CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank,
  CSteamCharts_GetMonthTopAppReleases_Request,
  CSteamCharts_GetMonthTopAppReleases_Response,
  CSteamCharts_GetMostPlayedGames_Request,
  CSteamCharts_GetMostPlayedGames_Response,
  CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank,
  CSteamCharts_GetMostPlayedSteamDeckGames_Request,
  CSteamCharts_GetMostPlayedSteamDeckGames_Response,
  CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank,
  CSteamCharts_GetTopReleasesPages_Response,
  CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage,
  CSteamCharts_GetYearTopAppReleases_Request,
  CSteamCharts_GetYearTopAppReleases_Response,
  CSteamCharts_GetYearTopAppReleases_Response_TopApps,
  CTopAppNewRelease,
} from "../protos-definitions/webui/service_steamcharts";
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
} from "../protos-definitions/webui/service_steamengine";
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
  CSteamInputService_GetDongles_Response_Dongle,
  CSteamInputService_GetTritonPairingInfo_Request,
  CSteamInputService_GetTritonPairingInfo_Response,
  CSteamInputService_GetTritonPairingInfo_Response_Slot,
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
} from "../protos-definitions/webui/service_steaminputmanager";
import type {
  CMsgInferenceIterateBeamSearch,
  CMsgInferenceIterateBeamSearch_CustomItemScalar,
  CMsgSteamLearn_BatchOperation_Request,
  CMsgSteamLearn_BatchOperation_Response,
  CMsgSteamLearn_CacheData_Request,
  CMsgSteamLearn_CacheData_Response,
  CMsgSteamLearn_CreateProject_Request,
  CMsgSteamLearn_CreateProject_Response,
  CMsgSteamLearn_EditProject_Request,
  CMsgSteamLearn_EditProject_Response,
  CMsgSteamLearn_EditProjectConfig_Request,
  CMsgSteamLearn_EditProjectConfig_Response,
  CMsgSteamLearn_GetAccessTokens_Request,
  CMsgSteamLearn_GetAccessTokens_Response,
  CMsgSteamLearn_GetBatchedStatus_Request,
  CMsgSteamLearn_GetBatchedStatus_Response,
  CMsgSteamLearn_GetDataSource_Request,
  CMsgSteamLearn_GetDataSource_Response,
  CMsgSteamLearn_GetEmbeddingValues_Request,
  CMsgSteamLearn_GetEmbeddingValues_Response,
  CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData,
  CMsgSteamLearn_GetFetchStatus_Request,
  CMsgSteamLearn_GetFetchStatus_Response,
  CMsgSteamLearn_GetFetchStatus_Response_Metadata,
  CMsgSteamLearn_GetFetchStatus_Response_Worker,
  CMsgSteamLearn_GetFetchStatusVersions_Request,
  CMsgSteamLearn_GetFetchStatusVersions_Response,
  CMsgSteamLearn_GetLogEvents_Request,
  CMsgSteamLearn_GetLogEvents_Response,
  CMsgSteamLearn_GetNearestEmbedding_Request,
  CMsgSteamLearn_GetNearestEmbedding_Response,
  CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding,
  CMsgSteamLearn_GetProject_Request,
  CMsgSteamLearn_GetProject_Response,
  CMsgSteamLearn_GetProjectConfig_Request,
  CMsgSteamLearn_GetProjectConfig_Response,
  CMsgSteamLearn_GetSnapshotStatus_Request,
  CMsgSteamLearn_GetSnapshotStatus_Response,
  CMsgSteamLearn_GetTrainLogs_Request,
  CMsgSteamLearn_GetTrainLogs_Response,
  CMsgSteamLearn_GetTrainStatus_Request,
  CMsgSteamLearn_GetTrainStatus_Response,
  CMsgSteamLearn_GetTrainStatus_Response_Batch,
  CMsgSteamLearn_GetTrainStatus_Response_Epoch,
  CMsgSteamLearn_GetTrainStatusVersions_Request,
  CMsgSteamLearn_GetTrainStatusVersions_Response,
  CMsgSteamLearn_Inference_Request,
  CMsgSteamLearn_Inference_Response,
  CMsgSteamLearn_InferenceBackend_Request,
  CMsgSteamLearn_InferenceBackend_Response,
  CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput,
  CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput,
  CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput,
  CMsgSteamLearn_InferenceBackend_Response_NamedInferenceOutput,
  CMsgSteamLearn_InferenceBackend_Response_Output,
  CMsgSteamLearn_InferenceBackend_Response_RegressionOutput,
  CMsgSteamLearn_InferenceBackend_Response_Sequence,
  CMsgSteamLearn_InferenceMetadata_Request,
  CMsgSteamLearn_InferenceMetadata_Response,
  CMsgSteamLearn_InferenceMetadata_Response_AppInfo,
  CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry,
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable,
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry,
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry,
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry,
  CMsgSteamLearn_InferenceMetadata_Response_KMeans,
  CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster,
  CMsgSteamLearn_InferenceMetadata_Response_Range,
  CMsgSteamLearn_InferenceMetadata_Response_RowRange,
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable,
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry,
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapMappingsEntry,
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapValuesEntry,
  CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram,
  CMsgSteamLearn_InferenceMetadata_Response_StdDev,
  CMsgSteamLearn_ListDataSources_Response,
  CMsgSteamLearn_ListProjectConfigs_Response,
  CMsgSteamLearn_ListProjectConfigs_Response_ProjectConfigInfo,
  CMsgSteamLearn_ListProjects_Request,
  CMsgSteamLearn_ListProjects_Response,
  CMsgSteamLearn_LogEvent,
  CMsgSteamLearn_LogEvent_Autosnapshot,
  CMsgSteamLearn_LogEvent_TrainEnded,
  CMsgSteamLearn_LogEvent_TrainSetLive,
  CMsgSteamLearn_LogEvent_TrainStarted,
  CMsgSteamLearn_PublishProject_Request,
  CMsgSteamLearn_PublishProject_Response,
  CMsgSteamLearn_RegisterDataSource_Request,
  CMsgSteamLearn_RegisterDataSource_Response,
  CMsgSteamLearn_SetTrainLive_Request,
  CMsgSteamLearn_SetTrainLive_Response,
  CMsgSteamLearn_SnapshotProject_Request,
  CMsgSteamLearn_SnapshotProject_Response,
  CMsgSteamLearn_Train_Request,
  CMsgSteamLearn_Train_Request_Fetch,
  CMsgSteamLearn_Train_Request_Train,
  CMsgSteamLearn_Train_Response,
  CMsgSteamLearnAccessTokens,
  CMsgSteamLearnAccessTokens_CacheDataAccessToken,
  CMsgSteamLearnAccessTokens_InferenceAccessToken,
  CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken,
  CMsgSteamLearnData,
  CMsgSteamLearnDataElement,
  CMsgSteamLearnDataList,
  CMsgSteamLearnDataObject,
  CMsgSteamLearnDataRetentionConfig,
  CMsgSteamLearnDataSource,
  CMsgSteamLearnDataSourceDescElement,
  CMsgSteamLearnDataSourceDescObject,
  CMsgSteamLearnDataSourceElementUsage,
  CMsgSteamLearnFetchInfo,
  CMsgSteamLearnModelNodeBertFinetune,
  CMsgSteamLearnModelNodeBertTokenizer,
  CMsgSteamLearnModelNodeConcatenate,
  CMsgSteamLearnModelNodeConditionalExtract,
  CMsgSteamLearnModelNodeConditionalExtract_FilterInfo,
  CMsgSteamLearnModelNodeConditionalExtract_WeightInfo,
  CMsgSteamLearnModelNodeConv1D,
  CMsgSteamLearnModelNodeDense,
  CMsgSteamLearnModelNodeDenseStack,
  CMsgSteamLearnModelNodeDot,
  CMsgSteamLearnModelNodeDropout,
  CMsgSteamLearnModelNodeEmbedding,
  CMsgSteamLearnModelNodeExternalEmbedding,
  CMsgSteamLearnModelNodeExternalModel,
  CMsgSteamLearnModelNodeExtract,
  CMsgSteamLearnModelNodeInput,
  CMsgSteamLearnModelNodeKMeansCluster,
  CMsgSteamLearnModelNodeLogic,
  CMsgSteamLearnModelNodeMaxPooling1D,
  CMsgSteamLearnModelNodeNamedInference,
  CMsgSteamLearnModelNodeOnehot,
  CMsgSteamLearnModelNodeReshape2D,
  CMsgSteamLearnModelNodeRowExtract,
  CMsgSteamLearnModelNodeSequenceSplit,
  CMsgSteamLearnModelNodeShuffle,
  CMsgSteamLearnModelNodeSyncedShuffle,
  CMsgSteamLearnModelNodeTextVectorization,
  CMsgSteamLearnModelNodeThreshold,
  CMsgSteamLearnModelNodeTimeDistributedDense,
  CMsgSteamLearnModelNodeTokenMask,
  CMsgSteamLearnModelNodeTokenTransformer,
  CMsgSteamLearnModelNodeTrain,
  CMsgSteamLearnModelNodeTransformer,
  CMsgSteamLearnModelNodeWeightedAverage,
  CMsgSteamLearnProject,
  CMsgSteamLearnProjectConfig,
  CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry,
  CMsgSteamLearnProjectNode,
  CMsgSteamLearnProjectNodeConnector,
  CMsgSteamLearnProjectSnapshotConfig,
  CMsgSteamLearnProjectSnapshotConfigAccountIDs,
  CMsgSteamLearnProjectSnapshotConfigAppIDs,
  CMsgSteamLearnProjectSnapshotConfigDataSource,
  CMsgSteamLearnProjectSnapshotConfigOtherProject,
  CMsgSteamLearnProjectSnapshotFilter,
  CMsgSteamLearnProjectSnapshotFilterHistogram,
  CMsgSteamLearnProjectSnapshotFilterRange,
  CMsgSteamLearnRawDataElement,
  CMsgSteamLearnScheduledTrainConfig,
  CMsgSteamLearnSnapshotStorage,
  CMsgSteamLearnSnapshotStorage_MapStorageElementsEntry,
  CMsgSteamLearnSnapshotStorage_StorageElement,
  CMsgSteamLearnTrainConfig,
  CMsgSteamLearnTrainInfo,
} from "../protos-definitions/webui/service_steamlearn";
import type {
  CSteamNotification_GetPreferences_Response,
  CSteamNotification_GetSteamNotifications_Request,
  CSteamNotification_GetSteamNotifications_Response,
  CSteamNotification_HideNotification_Notification,
  CSteamNotification_MarkNotificationsRead_Notification,
  CSteamNotification_MarkNotificationsViewed_Notification,
  CSteamNotification_NotificationsReceived_Notification,
  CSteamNotification_PreferencesUpdated_Notification,
  CSteamNotification_SetPreferences_Request,
  SteamNotificationData,
  SteamNotificationPreference,
} from "../protos-definitions/webui/service_steamnotification";
import type {
  CMsgFactoryResetState,
  CSteamOS_GetUserHasPassword_Response,
  CSteamOS_SetUserPassword_Request,
  CSteamOSManager_FactoryReset_Request,
  CSteamOSManager_GetState_Response,
  CSteamOSManager_PrepareFactoryImageTest_Request,
  CSteamOSManagerState,
} from "../protos-definitions/webui/service_steamosmanager";
import type {
  CSteamOSSLS_GetState_Response,
  CSteamOSSLS_SetEnabled_Request,
  CSteamOSSLS_SetPluginEnabled_Request,
  CSteamOSSLSPlugin,
  CSteamOSSLSState,
} from "../protos-definitions/webui/service_steamossls";
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
  CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster,
  CSteamTV_GetBroadcastChannelClips_Request,
  CSteamTV_GetBroadcastChannelClips_Response,
  CSteamTV_GetBroadcastChannelID_Request,
  CSteamTV_GetBroadcastChannelID_Response,
  CSteamTV_GetBroadcastChannelImages_Request,
  CSteamTV_GetBroadcastChannelImages_Response,
  CSteamTV_GetBroadcastChannelImages_Response_Images,
  CSteamTV_GetBroadcastChannelInteraction_Request,
  CSteamTV_GetBroadcastChannelInteraction_Response,
  CSteamTV_GetBroadcastChannelLinks_Request,
  CSteamTV_GetBroadcastChannelLinks_Response,
  CSteamTV_GetBroadcastChannelLinks_Response_Links,
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
  CSteamTV_SetBroadcastChannelLinkRegions_Request_Links,
  CSteamTV_SetBroadcastChannelProfile_Request,
  CSteamTV_SetSteamTVUserSettings_Request,
  CSteamTV_SubscribeBroadcastChannel_Request,
  CSteamTV_SubscribeBroadcastChannel_Response,
  GameListEntry,
  GetBroadcastChannelEntry,
} from "../protos-definitions/webui/service_steamtv";
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
} from "../protos-definitions/webui/service_storagedevicemanager";
import type {
  CPackageReservationStatus,
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
  CStore_GetLocalizedNameForTags_Response_Tag,
  CStore_GetMostPopularTags_Request,
  CStore_GetMostPopularTags_Response,
  CStore_GetMostPopularTags_Response_Tag,
  CStore_GetRecommendedTagsForUser_Request,
  CStore_GetRecommendedTagsForUser_Response,
  CStore_GetRecommendedTagsForUser_Response_Tag,
  CStore_GetStorePreferences_Request,
  CStore_GetStorePreferences_Response,
  CStore_GetTagList_Request,
  CStore_GetTagList_Response,
  CStore_GetTagList_Response_Tag,
  CStore_GetTrendingAppsAmongFriends_Request,
  CStore_GetTrendingAppsAmongFriends_Response,
  CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData,
  CStore_GetUserGameInterestState_Request,
  CStore_GetUserGameInterestState_Response,
  CStore_GetUserGameInterestState_Response_InQueue,
  CStore_GetWishlistDemoEmailStatus_Request,
  CStore_GetWishlistDemoEmailStatus_Response,
  CStore_MigratePartnerLinkTracking_Notification,
  CStore_PurchaseReceiptInfo,
  CStore_PurchaseReceiptInfo_LineItem,
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
  CStore_UserTagPreferences_Tag,
  CStoreDiscoveryQueueSettings,
} from "../protos-definitions/webui/service_store";
import type {
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request,
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response,
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster,
  CStoreAppSimilarity_PrioritizeAppsForUser_Request,
  CStoreAppSimilarity_PrioritizeAppsForUser_Response,
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem,
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo,
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo,
  StoreAppSimilarityPriorityOptions,
} from "../protos-definitions/webui/service_storeappsimilarity";
import type {
  CHardwarePackageDetails,
  CStoreBrowse_GetContentHubConfig_Request,
  CStoreBrowse_GetContentHubConfig_Response,
  CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig,
  CStoreBrowse_GetDLCForApps_Request,
  CStoreBrowse_GetDLCForApps_Response,
  CStoreBrowse_GetDLCForApps_Response_DLCData,
  CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp,
  CStoreBrowse_GetDLCForAppsSolr_Request,
  CStoreBrowse_GetDLCForAppsSolr_Response,
  CStoreBrowse_GetDLCForAppsSolr_Response_DLCList,
  CStoreBrowse_GetHardwareItems_Request,
  CStoreBrowse_GetHardwareItems_Response,
  CStoreBrowse_GetPriceStops_Request,
  CStoreBrowse_GetPriceStops_Response,
  CStoreBrowse_GetPriceStops_Response_PriceStop,
  CStoreBrowse_GetStoreCategories_Request,
  CStoreBrowse_GetStoreCategories_Response,
  CStoreBrowse_GetStoreCategories_Response_Category,
} from "../protos-definitions/webui/service_storebrowse";
import type {
  CDeveloperPageLink,
  CDeveloperPageToApps,
  CStoreCatalog_GetDevPageAllAppsLinked_Request,
  CStoreCatalog_GetDevPageAllAppsLinked_Response,
  CStoreCatalog_GetDevPageLinks_Request,
  CStoreCatalog_GetDevPageLinks_Response,
  CStoreCatalog_GetDevPagesForPartner_Request,
  CStoreCatalog_GetDevPagesForPartner_Response,
  CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo,
  CStoreCatalog_SetDevPageLink_Request,
} from "../protos-definitions/webui/service_storecatalog";
import type {
  CLocalizationToken,
  CStoreCuration_GetListDetails_Request,
  CStoreCuration_GetListDetails_Response,
  CStoreCuration_GetLists_Request,
  CStoreCuration_GetLists_Response,
  CStoreCuration_ListDetails,
  CStoreCuration_ListDetails_ListItem,
  CStoreCuration_RecommendedApp,
} from "../protos-definitions/webui/service_storecuration";
import type {
  CStoreMarketing_GetFrontPageConfig_Request,
  CStoreMarketing_GetFrontPageConfig_Response,
  CStoreMarketing_GetItemsToFeature_Request,
  CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter,
  CStoreMarketing_GetItemsToFeature_Response,
  CStoreMarketing_GetItemsToFeature_Response_Spotlight,
  CStorePageCluster,
  CStorePageCluster_Asset,
  CStorePageCluster_CapsuleList,
  CStorePageCluster_Field,
  StoreCapsule,
} from "../protos-definitions/webui/service_storemarketing";
import type {
  CStoreQuery_GetItemByUserCombinedTagsPriority_Request,
  CStoreQuery_GetItemByUserCombinedTagsPriority_Response,
  CStoreQuery_GetItemsByUserRecommendedTags_Request,
  CStoreQuery_GetItemsByUserRecommendedTags_Request_Section,
  CStoreQuery_GetItemsByUserRecommendedTags_Response,
  CStoreQuery_GetItemsByUserRecommendedTags_Response_Section,
  CStoreQuery_MoreLikeThis_Request,
  CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions,
  CStoreQuery_MoreLikeThis_Response,
  CStoreQuery_Query_Request,
  CStoreQuery_Query_Response,
  CStoreQuery_SearchSuggestions_Request,
  CStoreQuery_SearchSuggestions_Response,
  CStoreQueryFilters,
  CStoreQueryFilters_PredefinedFilter,
  CStoreQueryFilters_PriceFilters,
  CStoreQueryFilters_TagFilter,
  CStoreQueryFilters_TypeFilters,
  CStoreQueryParams,
  CStoreQueryPerResultMetadata,
  CStoreQueryResultMetadata,
} from "../protos-definitions/webui/service_storequery";
import type {
  CStore_GetUserVotes_Request,
  CStore_GetUserVotes_Response,
  CStore_GetVoteDefinitions_Request,
  CStore_GetVoteDefinitions_Response,
  CStore_SetVote_Request,
  CStore_SetVote_Response,
  CStore_VoteDefinition,
  CStore_VoteDefinition_AppDefinition,
  CStore_VoteDefinition_GroupDefinition,
  CStore_VoteDefinition_Localization,
  SteamAwardsUserVote,
} from "../protos-definitions/webui/service_storesales";
import type {
  CStoreTopSellers_GetCountryList_Request,
  CStoreTopSellers_GetCountryList_Response,
  CStoreTopSellers_GetCountryList_Response_Country,
  CStoreTopSellers_GetWeeklyTopSellers_Request,
  CStoreTopSellers_GetWeeklyTopSellers_Response,
  CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank,
} from "../protos-definitions/webui/service_storetopsellers";
import type { CSystemManager_WriteFile_Request } from "../protos-definitions/webui/service_systemmanager";
import type { CTransportAuth_Authenticate_Request } from "../protos-definitions/webui/service_transportauth";
import type {
  CTransportValidation_AddNumbers_Request,
  CTransportValidation_AddNumbers_Response,
  CTransportValidation_CountOrderedBytes_Request,
  CTransportValidation_CountOrderedBytes_Response,
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
  CTransportValidation_TriggerSyntheticEvents_Request,
  CTransportValidationClient_AddNumbers_Request,
  CTransportValidationClient_AddNumbers_Response,
} from "../protos-definitions/webui/service_transportvalidation";
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
} from "../protos-definitions/webui/service_twofactor";
import type {
  CUser_GetSavedHardwareInfo_Response,
  CUser_SaveHardwareInfo_Request,
  CUser_SaveHardwareInfo_Response,
} from "../protos-definitions/webui/service_user";
import type {
  CUserAccount_CancelLicenseForApp_Request,
  CUserAccount_CreateFriendInviteToken_Request,
  CUserAccount_CreateFriendInviteToken_Response,
  CUserAccount_GetAccountLinkStatus_Response,
  CUserAccount_GetAvailableValveDiscountPromotions_Request,
  CUserAccount_GetAvailableValveDiscountPromotions_Response,
  CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails,
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
} from "../protos-definitions/webui/service_useraccount";
import type {
  CUserGameActivity_Event,
  CUserGameActivity_GetActivity_Request,
  CUserGameActivity_GetActivity_Response,
} from "../protos-definitions/webui/service_usergameactivity";
import type {
  CUserGameNote,
  CUserGameNotes_DeleteNote_Request,
  CUserGameNotes_GetGamesWithNotes_Response,
  CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes,
  CUserGameNotes_GetNotesForGame_Request,
  CUserGameNotes_GetNotesForGame_Response,
  CUserGameNotes_SaveNote_Request,
  CUserGameNotes_SaveNote_Response,
} from "../protos-definitions/webui/service_usergamenotes";
import type {
  CUserNews_Event,
  CUserNews_GetAppDetailsSpotlight_Request,
  CUserNews_GetAppDetailsSpotlight_Response,
  CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent,
  CUserNews_GetUserNews_Request,
  CUserNews_GetUserNews_Response,
  CUserNewsAchievementDisplayData,
  CUserNewsAchievementDisplayData_CAchievement,
} from "../protos-definitions/webui/service_usernews";
import type {
  CUserReviews_BackfillSavedHardware_Request,
  CUserReviews_BackfillSavedHardware_Response,
  CUserReviews_GetFriendsRecommendedApp_Request,
  CUserReviews_GetFriendsRecommendedApp_Response,
  CUserReviews_GetIndividualRecommendations_Request,
  CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest,
  CUserReviews_GetIndividualRecommendations_Response,
  CUserReviews_Recommendation_LoyaltyReaction,
  CUserReviews_Recommendation_Tag,
  CUserReviews_Recommendation_Tag_Range,
  CUserReviews_Update_Request,
  RecommendationDetails,
} from "../protos-definitions/webui/service_userreviews";
import type {
  CUserStoreVisit_GetFrequentlyVisitedPages_Response,
  CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs,
  CUserStoreVisit_GetMostVisitedItemsOnStore_Request,
  CUserStoreVisit_GetMostVisitedItemsOnStore_Response,
  CUserStoreVisitData,
  CUserStoreVisitData_RecentApps,
} from "../protos-definitions/webui/service_userstorevisit";
import type {
  CVideo_ClientGetVideoURL_Request,
  CVideo_ClientGetVideoURL_Response,
  CVideo_GetVideoBookmarks_Request,
  CVideo_GetVideoBookmarks_Response,
  CVideo_SetVideoBookmark_Notification,
  CVideo_UnlockedH264_Notification,
  VideoBookmark,
} from "../protos-definitions/webui/service_video";
import type {
  CVideo_BeginGameRecordingSegmentsUpload_Request,
  CVideo_BeginGameRecordingSegmentsUpload_Response,
  CVideo_CommitGameRecordingSegmentsUpload_Request,
  CVideo_GameRecordingCommitSegmentUploads_Request,
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request,
  CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response,
  CVideo_GameRecordingSegmentUploadInfo,
  CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders,
} from "../protos-definitions/webui/service_videoclip";
import type {
  CVoiceChat_AllMembersStatus_Notification,
  CVoiceChat_AnswerOneOnOneChat_Request,
  CVoiceChat_EndOneOnOneChat_Request,
  CVoiceChat_LeaveOneOnOneChat_Request,
  CVoiceChat_LeaveVoiceChat_Request,
  CVoiceChat_OneOnOneChatRequested_Notification,
  CVoiceChat_OneOnOneChatRequestResponse_Notification,
  CVoiceChat_RequestOneOnOneChat_Request,
  CVoiceChat_RequestOneOnOneChat_Response,
  CVoiceChat_UpdateUserVideoStatus_Request,
  CVoiceChat_UpdateVoiceChatWebRTCData_Request,
  CVoiceChat_UpdateVoiceChatWebRTCData_Response,
  CVoiceChat_UploadClientVoiceChatLogs_Request,
  CVoiceChat_UserJoinedVoiceChat_Notification,
  CVoiceChat_UserLeftVoiceChat_Notification,
  CVoiceChat_UserVoiceStatus_Notification,
  CVoiceChat_VoiceChatEnded_Notification,
} from "../protos-definitions/webui/service_voicechat";
import type {
  CWebRTC_WebRTCSessionConnected_Notification,
  CWebRTC_WebRTCUpdateRemoteDescription_Notification,
  CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping,
  CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request,
  CWebRTCClient_InitiateWebRTCConnection_Request,
  CWebRTCClient_InitiateWebRTCConnection_Response,
  CWebRTCClient_UpdateWebRTCConnection_Request,
  CWebRTCClient_UpdateWebRTCConnection_Response,
} from "../protos-definitions/webui/service_webrtc";
import type {
  CWishlist_AddToWishlist_Request,
  CWishlist_AddToWishlist_Response,
  CWishlist_GetWishlist_Request,
  CWishlist_GetWishlist_Response,
  CWishlist_GetWishlist_Response_WishlistItem,
  CWishlist_GetWishlistItemCount_Request,
  CWishlist_GetWishlistItemCount_Response,
  CWishlist_GetWishlistItemsOnSale_Request,
  CWishlist_GetWishlistItemsOnSale_Response,
  CWishlist_GetWishlistItemsOnSale_Response_WishlistItem,
  CWishlist_GetWishlistSortedFiltered_Request,
  CWishlist_GetWishlistSortedFiltered_Response,
  CWishlist_GetWishlistSortedFiltered_Response_WishlistItem,
  CWishlist_RemoveFromWishlist_Request,
  CWishlist_RemoveFromWishlist_Response,
  CWishlistFilters,
  CWishlistFilters_ExcludeTypeFilters,
  CWishlistFilters_SteamDeckFilters,
} from "../protos-definitions/webui/service_wishlist";

export interface WebuiProtos {
  AccountCartContents: AccountCartContents;
  AccountCartLineItem: AccountCartLineItem;
  AccountCartLineItemFlags: AccountCartLineItemFlags;
  AccountCartValidationDetails: AccountCartValidationDetails;
  AdditionalSubjectData: AdditionalSubjectData;
  AdditionalSubjectData_DataEntry: AdditionalSubjectData_DataEntry;
  CAccountCart_AddItemsToCart_Request: CAccountCart_AddItemsToCart_Request;
  CAccountCart_AddItemsToCart_Request_ItemToAdd: CAccountCart_AddItemsToCart_Request_ItemToAdd;
  CAccountCart_AddItemsToCart_Response: CAccountCart_AddItemsToCart_Response;
  CAccountCart_GetCart_Request: CAccountCart_GetCart_Request;
  CAccountCart_GetCart_Response: CAccountCart_GetCart_Response;
  CAccountCart_GetRelevantCoupons_Request: CAccountCart_GetRelevantCoupons_Request;
  CAccountCart_GetRelevantCoupons_Response: CAccountCart_GetRelevantCoupons_Response;
  CAccountCart_GetRelevantCoupons_Response_LineItemCoupons: CAccountCart_GetRelevantCoupons_Response_LineItemCoupons;
  CAccountCart_MergeShoppingCartContents_Request: CAccountCart_MergeShoppingCartContents_Request;
  CAccountCart_MergeShoppingCartContents_Response: CAccountCart_MergeShoppingCartContents_Response;
  CAccountCart_ModifyLineItem_Request: CAccountCart_ModifyLineItem_Request;
  CAccountCart_ModifyLineItem_Response: CAccountCart_ModifyLineItem_Response;
  CAccountCart_RemoveItemFromCart_Request: CAccountCart_RemoveItemFromCart_Request;
  CAccountCart_RemoveItemFromCart_Response: CAccountCart_RemoveItemFromCart_Response;
  CAccountLinking_GetLinkedAccountInfo_Request: CAccountLinking_GetLinkedAccountInfo_Request;
  CAccountLinking_GetLinkedAccountInfo_Response: CAccountLinking_GetLinkedAccountInfo_Response;
  CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response: CAccountLinking_GetLinkedAccountInfo_Response_CExternalAccountTuple_Response;
  CAccountPrivacy_GetCookiePreferences_Response: CAccountPrivacy_GetCookiePreferences_Response;
  CAccountPrivacyCookiePreferences: CAccountPrivacyCookiePreferences;
  CAccountPrivacyCookiePreferences_ContentCustomization: CAccountPrivacyCookiePreferences_ContentCustomization;
  CAccountPrivacyCookiePreferences_ThirdPartyAnalytics: CAccountPrivacyCookiePreferences_ThirdPartyAnalytics;
  CAccountPrivacyCookiePreferences_ThirdPartyContent: CAccountPrivacyCookiePreferences_ThirdPartyContent;
  CAccountPrivacyCookiePreferences_ValveAnalytics: CAccountPrivacyCookiePreferences_ValveAnalytics;
  CAccountPrivateAppList: CAccountPrivateAppList;
  CAccountPrivateApps_GetPrivateAppList_Response: CAccountPrivateApps_GetPrivateAppList_Response;
  CAccountPrivateApps_ToggleAppPrivacy_Request: CAccountPrivateApps_ToggleAppPrivacy_Request;
  CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification: CAccountPrivateApsClient_NotifyPrivateAppListChanged_Notification;
  CAchievementDetails: CAchievementDetails;
  CAchievements_GetInfo_Request: CAchievements_GetInfo_Request;
  CAchievements_GetInfo_Response: CAchievements_GetInfo_Response;
  CAchievements_GetInfo_Response_Info: CAchievements_GetInfo_Response_Info;
  CAppOverview: CAppOverview;
  CAppOverview_Change: CAppOverview_Change;
  CAppOverview_PerClientData: CAppOverview_PerClientData;
  CAppPriority: CAppPriority;
  CartAmount: CartAmount;
  CartCoupon: CartCoupon;
  CartGiftInfo: CartGiftInfo;
  CartGiftMessage: CartGiftMessage;
  CAssetSet: CAssetSet;
  CAssetSetPublishing_AddBranchToAssetSet_Request: CAssetSetPublishing_AddBranchToAssetSet_Request;
  CAssetSetPublishing_AddBranchToAssetSet_Response: CAssetSetPublishing_AddBranchToAssetSet_Response;
  CAssetSetPublishing_CreateAssetSet_Request: CAssetSetPublishing_CreateAssetSet_Request;
  CAssetSetPublishing_CreateAssetSet_Response: CAssetSetPublishing_CreateAssetSet_Response;
  CAssetSetPublishing_DeleteAssetSet_Request: CAssetSetPublishing_DeleteAssetSet_Request;
  CAssetSetPublishing_GetAllAssetSets_Request: CAssetSetPublishing_GetAllAssetSets_Request;
  CAssetSetPublishing_GetAllAssetSets_Response: CAssetSetPublishing_GetAllAssetSets_Response;
  CAssetSetPublishing_RemoseBranchFromAssetSet_Response: CAssetSetPublishing_RemoseBranchFromAssetSet_Response;
  CAssetSetPublishing_RemoveBranchFromAssetSet_Request: CAssetSetPublishing_RemoveBranchFromAssetSet_Request;
  CAssetSetPublishing_SwapAssetSetPriority_Request: CAssetSetPublishing_SwapAssetSetPriority_Request;
  CAssetSetPublishing_SwapAssetSetPriority_Response: CAssetSetPublishing_SwapAssetSetPriority_Response;
  CAssetSetPublishing_UpdateAssetSet_Request: CAssetSetPublishing_UpdateAssetSet_Request;
  CAssetSetPublishing_UpdatePublishTime_Request: CAssetSetPublishing_UpdatePublishTime_Request;
  CAssetSetPublishing_UpdatePublishTime_Response: CAssetSetPublishing_UpdatePublishTime_Response;
  CAuction_Bid: CAuction_Bid;
  CAuction_CancelBid_Request: CAuction_CancelBid_Request;
  CAuction_CancelBid_Response: CAuction_CancelBid_Response;
  CAuction_GetAllItems_Response: CAuction_GetAllItems_Response;
  CAuction_GetBidsForItem_Request: CAuction_GetBidsForItem_Request;
  CAuction_GetBidsForItem_Response: CAuction_GetBidsForItem_Response;
  CAuction_GetBidsForUser_Request: CAuction_GetBidsForUser_Request;
  CAuction_GetBidsForUser_Response: CAuction_GetBidsForUser_Response;
  CAuction_GetItemDetails_Request: CAuction_GetItemDetails_Request;
  CAuction_GetItemDetails_Response: CAuction_GetItemDetails_Response;
  CAuction_GetUserBidForItem_Request: CAuction_GetUserBidForItem_Request;
  CAuction_GetUserBidForItem_Response: CAuction_GetUserBidForItem_Response;
  CAuction_Item: CAuction_Item;
  CAuction_PlaceBid_Request: CAuction_PlaceBid_Request;
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
  CAuthentication_MigrateMobileSession_Request: CAuthentication_MigrateMobileSession_Request;
  CAuthentication_MigrateMobileSession_Response: CAuthentication_MigrateMobileSession_Response;
  CAuthentication_NotifyRiskQuizResults_Notification: CAuthentication_NotifyRiskQuizResults_Notification;
  CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults: CAuthentication_NotifyRiskQuizResults_Notification_RiskQuizResults;
  CAuthentication_PollAuthSessionStatus_Request: CAuthentication_PollAuthSessionStatus_Request;
  CAuthentication_PollAuthSessionStatus_Response: CAuthentication_PollAuthSessionStatus_Response;
  CAuthentication_RefreshToken_Enumerate_Request: CAuthentication_RefreshToken_Enumerate_Request;
  CAuthentication_RefreshToken_Enumerate_Response: CAuthentication_RefreshToken_Enumerate_Response;
  CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription: CAuthentication_RefreshToken_Enumerate_Response_RefreshTokenDescription;
  CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent: CAuthentication_RefreshToken_Enumerate_Response_TokenUsageEvent;
  CAuthentication_RefreshToken_Revoke_Request: CAuthentication_RefreshToken_Revoke_Request;
  CAuthentication_Token_Revoke_Request: CAuthentication_Token_Revoke_Request;
  CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;
  CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;
  CAuthenticationSupport_GetTokenHistory_Request: CAuthenticationSupport_GetTokenHistory_Request;
  CAuthenticationSupport_GetTokenHistory_Response: CAuthenticationSupport_GetTokenHistory_Response;
  CAuthenticationSupport_MarkTokenCompromised_Request: CAuthenticationSupport_MarkTokenCompromised_Request;
  CAuthenticationSupport_QueryRefreshTokenByID_Request: CAuthenticationSupport_QueryRefreshTokenByID_Request;
  CAuthenticationSupport_QueryRefreshTokenByID_Response: CAuthenticationSupport_QueryRefreshTokenByID_Response;
  CAuthenticationSupport_QueryRefreshTokensByAccount_Request: CAuthenticationSupport_QueryRefreshTokensByAccount_Request;
  CAuthenticationSupport_QueryRefreshTokensByAccount_Response: CAuthenticationSupport_QueryRefreshTokensByAccount_Response;
  CAuthenticationSupport_RevokeToken_Request: CAuthenticationSupport_RevokeToken_Request;
  CBilling_GetRecurringSubscriptionsCount_Response: CBilling_GetRecurringSubscriptionsCount_Response;
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
  CBroadcast_GetBroadcastChatUserNames_Response_PersonaName: CBroadcast_GetBroadcastChatUserNames_Response_PersonaName;
  CBroadcast_GetBroadcastStatus_Request: CBroadcast_GetBroadcastStatus_Request;
  CBroadcast_GetBroadcastStatus_Response: CBroadcast_GetBroadcastStatus_Response;
  CBroadcast_GetBroadcastThumbnail_Request: CBroadcast_GetBroadcastThumbnail_Request;
  CBroadcast_GetBroadcastThumbnail_Response: CBroadcast_GetBroadcastThumbnail_Response;
  CBroadcast_GetBroadcastUploadStats_Request: CBroadcast_GetBroadcastUploadStats_Request;
  CBroadcast_GetBroadcastUploadStats_Response: CBroadcast_GetBroadcastUploadStats_Response;
  CBroadcast_GetBroadcastUploadStats_Response_UploadStats: CBroadcast_GetBroadcastUploadStats_Response_UploadStats;
  CBroadcast_GetBroadcastViewerStats_Request: CBroadcast_GetBroadcastViewerStats_Request;
  CBroadcast_GetBroadcastViewerStats_Response: CBroadcast_GetBroadcastViewerStats_Response;
  CBroadcast_GetBroadcastViewerStats_Response_CountryStats: CBroadcast_GetBroadcastViewerStats_Response_CountryStats;
  CBroadcast_GetBroadcastViewerStats_Response_ViewerStats: CBroadcast_GetBroadcastViewerStats_Response_ViewerStats;
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
  CBuildManagement_SetAppBuildLiveConfirmed_Request: CBuildManagement_SetAppBuildLiveConfirmed_Request;
  CBuildManagement_SetAppBuildSortOrder_Request: CBuildManagement_SetAppBuildSortOrder_Request;
  CCDDBAppDetailCommon: CCDDBAppDetailCommon;
  CChatMentions: CChatMentions;
  CChatPartyBeacon: CChatPartyBeacon;
  CChatRole: CChatRole;
  CChatRoleActions: CChatRoleActions;
  CChatRoom_AckChatMessage_Notification: CChatRoom_AckChatMessage_Notification;
  CChatRoom_AddRoleToUser_Request: CChatRoom_AddRoleToUser_Request;
  CChatRoom_ChatMessageModified_Notification: CChatRoom_ChatMessageModified_Notification;
  CChatRoom_ChatMessageModified_Notification_ChatMessage: CChatRoom_ChatMessageModified_Notification_ChatMessage;
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
  CChatRoom_DeleteChatMessages_Request_Message: CChatRoom_DeleteChatMessages_Request_Message;
  CChatRoom_DeleteChatRoom_Request: CChatRoom_DeleteChatRoom_Request;
  CChatRoom_DeleteInviteLink_Request: CChatRoom_DeleteInviteLink_Request;
  CChatRoom_DeleteRole_Request: CChatRoom_DeleteRole_Request;
  CChatRoom_DeleteRoleFromUser_Request: CChatRoom_DeleteRoleFromUser_Request;
  CChatRoom_EndMiniGameForChatRoomGroup_Request: CChatRoom_EndMiniGameForChatRoomGroup_Request;
  CChatRoom_GetBanList_Request: CChatRoom_GetBanList_Request;
  CChatRoom_GetBanList_Response: CChatRoom_GetBanList_Response;
  CChatRoom_GetBanList_Response_BanInfo: CChatRoom_GetBanList_Response_BanInfo;
  CChatRoom_GetChatRoomGroupState_Request: CChatRoom_GetChatRoomGroupState_Request;
  CChatRoom_GetChatRoomGroupState_Response: CChatRoom_GetChatRoomGroupState_Response;
  CChatRoom_GetChatRoomGroupSummary_Response: CChatRoom_GetChatRoomGroupSummary_Response;
  CChatRoom_GetInviteInfo_Request: CChatRoom_GetInviteInfo_Request;
  CChatRoom_GetInviteInfo_Response: CChatRoom_GetInviteInfo_Response;
  CChatRoom_GetInviteLinkInfo_Request: CChatRoom_GetInviteLinkInfo_Request;
  CChatRoom_GetInviteLinkInfo_Response: CChatRoom_GetInviteLinkInfo_Response;
  CChatRoom_GetInviteLinksForGroup_Request: CChatRoom_GetInviteLinksForGroup_Request;
  CChatRoom_GetInviteLinksForGroup_Response: CChatRoom_GetInviteLinksForGroup_Response;
  CChatRoom_GetInviteLinksForGroup_Response_LinkInfo: CChatRoom_GetInviteLinksForGroup_Response_LinkInfo;
  CChatRoom_GetInviteList_Request: CChatRoom_GetInviteList_Request;
  CChatRoom_GetInviteList_Response: CChatRoom_GetInviteList_Response;
  CChatRoom_GetMessageHistory_Request: CChatRoom_GetMessageHistory_Request;
  CChatRoom_GetMessageHistory_Response: CChatRoom_GetMessageHistory_Response;
  CChatRoom_GetMessageHistory_Response_ChatMessage: CChatRoom_GetMessageHistory_Response_ChatMessage;
  CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction: CChatRoom_GetMessageHistory_Response_ChatMessage_MessageReaction;
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
  CChatRoom_SearchMembers_Response_MemberMatch: CChatRoom_SearchMembers_Response_MemberMatch;
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
  CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences: CChatRoom_SetUserChatGroupPreferences_Request_ChatGroupPreferences;
  CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences: CChatRoom_SetUserChatGroupPreferences_Request_ChatRoomPreferences;
  CChatRoom_UpdateMemberListView_Notification: CChatRoom_UpdateMemberListView_Notification;
  CChatRoom_UpdateMessageReaction_Request: CChatRoom_UpdateMessageReaction_Request;
  CChatRoom_UpdateMessageReaction_Response: CChatRoom_UpdateMessageReaction_Response;
  CChatRoomClient_MemberListViewUpdated_Notification: CChatRoomClient_MemberListViewUpdated_Notification;
  CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry: CChatRoomClient_MemberListViewUpdated_Notification_MemberListViewEntry;
  CChatRoomGroupHeaderState: CChatRoomGroupHeaderState;
  CChatRoomGroupInvite: CChatRoomGroupInvite;
  CChatRoomGroupState: CChatRoomGroupState;
  CChatRoomMember: CChatRoomMember;
  CChatRoomMemberListView: CChatRoomMemberListView;
  CChatRoomMemberSummaryCounts: CChatRoomMemberSummaryCounts;
  CChatRoomState: CChatRoomState;
  CChatRoomSummaryPair: CChatRoomSummaryPair;
  CChatUsability_ClientUsabilityMetrics_Notification: CChatUsability_ClientUsabilityMetrics_Notification;
  CChatUsability_ClientUsabilityMetrics_Notification_Metrics: CChatUsability_ClientUsabilityMetrics_Notification_Metrics;
  CChatUsability_ClientUsabilityMetrics_Notification_Settings: CChatUsability_ClientUsabilityMetrics_Notification_Settings;
  CChatUsability_ClientUsabilityMetrics_Notification_UIState: CChatUsability_ClientUsabilityMetrics_Notification_UIState;
  CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState: CChatUsability_ClientUsabilityMetrics_Notification_UIState_CategoryCollapseState;
  CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings: CChatUsability_ClientUsabilityMetrics_Notification_VoiceSettings;
  CChatUsability_RequestClientUsabilityMetrics_Notification: CChatUsability_RequestClientUsabilityMetrics_Notification;
  CCheckout_AddFreeLicense_Request: CCheckout_AddFreeLicense_Request;
  CCheckout_AddFreeLicense_Response: CCheckout_AddFreeLicense_Response;
  CCheckout_GetFriendOwnershipForGifting_Request: CCheckout_GetFriendOwnershipForGifting_Request;
  CCheckout_GetFriendOwnershipForGifting_Response: CCheckout_GetFriendOwnershipForGifting_Response;
  CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership: CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership;
  CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo: CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo;
  CCheckout_ValidateCart_Request: CCheckout_ValidateCart_Request;
  CCheckout_ValidateCart_Response: CCheckout_ValidateCart_Response;
  CCheckout_ValidateCart_Response_CartItem: CCheckout_ValidateCart_Response_CartItem;
  CCheckout_ValidateCart_Response_CartItem_Errors: CCheckout_ValidateCart_Response_CartItem_Errors;
  CCheckout_ValidateCart_Response_CartItem_Warnings: CCheckout_ValidateCart_Response_CartItem_Warnings;
  CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub: CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub;
  CCheckout_ValidateCart_Response_EstimatedTotals: CCheckout_ValidateCart_Response_EstimatedTotals;
  CClan_GetDraftAndRecentPartnerEventSnippet_Request: CClan_GetDraftAndRecentPartnerEventSnippet_Request;
  CClan_GetDraftAndRecentPartnerEventSnippet_Response: CClan_GetDraftAndRecentPartnerEventSnippet_Response;
  CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData: CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData;
  CClan_GetPartnerEventsByBuildIDRange_Request: CClan_GetPartnerEventsByBuildIDRange_Request;
  CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange: CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange;
  CClan_GetPartnerEventsByBuildIDRange_Response: CClan_GetPartnerEventsByBuildIDRange_Response;
  CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc: CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc;
  CClan_RespondToClanInvite_Request: CClan_RespondToClanInvite_Request;
  CClanChatRooms_GetClanChatRoomInfo_Request: CClanChatRooms_GetClanChatRoomInfo_Request;
  CClanChatRooms_GetClanChatRoomInfo_Response: CClanChatRooms_GetClanChatRoomInfo_Response;
  CClanChatRooms_SetClanChatRoomPrivate_Request: CClanChatRooms_SetClanChatRoomPrivate_Request;
  CClanChatRooms_SetClanChatRoomPrivate_Response: CClanChatRooms_SetClanChatRoomPrivate_Response;
  CClanEventUserNewsTuple: CClanEventUserNewsTuple;
  CClanFAQContent: CClanFAQContent;
  CClanFAQS_CheckFAQPermissions_Request: CClanFAQS_CheckFAQPermissions_Request;
  CClanFAQS_Create_Request: CClanFAQS_Create_Request;
  CClanFAQS_Create_Response: CClanFAQS_Create_Response;
  CClanFAQS_Delete_Request: CClanFAQS_Delete_Request;
  CClanFAQs_FetchLocalizationFromCrowdIn_Request: CClanFAQs_FetchLocalizationFromCrowdIn_Request;
  CClanFAQS_GetAllDrafts_Request: CClanFAQS_GetAllDrafts_Request;
  CClanFAQS_GetAllDrafts_Response: CClanFAQS_GetAllDrafts_Response;
  CClanFAQS_GetAllFAQsForClan_Request: CClanFAQS_GetAllFAQsForClan_Request;
  CClanFAQS_GetAllFAQsForClan_Response: CClanFAQS_GetAllFAQsForClan_Response;
  CClanFAQS_GetAllLatestVersionPublishedFAQS_Request: CClanFAQS_GetAllLatestVersionPublishedFAQS_Request;
  CClanFAQS_GetAllLatestVersionPublishedFAQS_Response: CClanFAQS_GetAllLatestVersionPublishedFAQS_Response;
  CClanFAQs_GetCrowdInMetadata_Request: CClanFAQs_GetCrowdInMetadata_Request;
  CClanFAQs_GetCrowdInMetadata_Response: CClanFAQs_GetCrowdInMetadata_Response;
  CClanFAQS_GetFAQ_Request: CClanFAQS_GetFAQ_Request;
  CClanFAQS_GetFAQ_Response: CClanFAQS_GetFAQ_Response;
  CClanFAQS_GetFAQVersion_Request: CClanFAQS_GetFAQVersion_Request;
  CClanFAQS_GetFAQVersion_Response: CClanFAQS_GetFAQVersion_Response;
  CClanFAQS_PreviewDraft_Request: CClanFAQS_PreviewDraft_Request;
  CClanFAQS_PreviewDraft_Response: CClanFAQS_PreviewDraft_Response;
  CClanFAQS_PublishDraft_Request: CClanFAQS_PublishDraft_Request;
  CClanFAQS_PublishDraft_Response: CClanFAQS_PublishDraft_Response;
  CClanFAQS_SearchFAQs_Request: CClanFAQS_SearchFAQs_Request;
  CClanFAQS_SearchFAQs_Response: CClanFAQS_SearchFAQs_Response;
  CClanFAQS_SearchFAQs_Response_CFAQSearchResult: CClanFAQS_SearchFAQs_Response_CFAQSearchResult;
  CClanFAQS_SetVisibility_Request: CClanFAQS_SetVisibility_Request;
  CClanFAQS_UpdateDraft_Request: CClanFAQS_UpdateDraft_Request;
  CClanFAQS_UpdateDraft_Response: CClanFAQS_UpdateDraft_Response;
  CClanFAQS_UpdateInternalName_Request: CClanFAQS_UpdateInternalName_Request;
  CClanFAQS_UpdateJsonData_Request: CClanFAQS_UpdateJsonData_Request;
  CClanFAQSummary: CClanFAQSummary;
  CClanFAQSummary_CLanguageInfo: CClanFAQSummary_CLanguageInfo;
  CClanMatchEventByRange: CClanMatchEventByRange;
  CClientComm_ClientData: CClientComm_ClientData;
  CClientComm_ClientData_RunningGames: CClientComm_ClientData_RunningGames;
  CClientComm_EnableOrDisableDownloads_Request: CClientComm_EnableOrDisableDownloads_Request;
  CClientComm_GetAllClientLogonInfo_Response: CClientComm_GetAllClientLogonInfo_Response;
  CClientComm_GetAllClientLogonInfo_Response_Session: CClientComm_GetAllClientLogonInfo_Response_Session;
  CClientComm_GetClientAppList_Request: CClientComm_GetClientAppList_Request;
  CClientComm_GetClientAppList_Response: CClientComm_GetClientAppList_Response;
  CClientComm_GetClientAppList_Response_AppData: CClientComm_GetClientAppList_Response_AppData;
  CClientComm_GetClientAppList_Response_AppData_DLCData: CClientComm_GetClientAppList_Response_AppData_DLCData;
  CClientComm_GetClientInfo_Request: CClientComm_GetClientInfo_Request;
  CClientComm_GetClientInfo_Response: CClientComm_GetClientInfo_Response;
  CClientComm_GetClientLogonInfo_Request: CClientComm_GetClientLogonInfo_Request;
  CClientComm_GetClientLogonInfo_Response: CClientComm_GetClientLogonInfo_Response;
  CClientComm_InstallClientApp_Request: CClientComm_InstallClientApp_Request;
  CClientComm_LaunchClientApp_Request: CClientComm_LaunchClientApp_Request;
  CClientComm_SetClientAppUpdateState_Request: CClientComm_SetClientAppUpdateState_Request;
  CClientComm_UninstallClientApp_Request: CClientComm_UninstallClientApp_Request;
  CClientMetrics_AppInterfaceCreation: CClientMetrics_AppInterfaceCreation;
  CClientMetrics_AppInterfaceMethodCounts: CClientMetrics_AppInterfaceMethodCounts;
  CClientMetrics_AppInterfaceStats_Notification: CClientMetrics_AppInterfaceStats_Notification;
  CClientMetrics_ClientBootstrap_Notification: CClientMetrics_ClientBootstrap_Notification;
  CClientMetrics_ClientBootstrap_RequestInfo: CClientMetrics_ClientBootstrap_RequestInfo;
  CClientMetrics_ClientBootstrap_Summary: CClientMetrics_ClientBootstrap_Summary;
  CClientMetrics_ClipRange_Notification: CClientMetrics_ClipRange_Notification;
  CClientMetrics_ClipRange_Notification_RelativeRangeEdge: CClientMetrics_ClipRange_Notification_RelativeRangeEdge;
  CClientMetrics_ClipShare_Notification: CClientMetrics_ClipShare_Notification;
  CClientMetrics_CloudAppSyncStats_Notification: CClientMetrics_CloudAppSyncStats_Notification;
  CClientMetrics_ContentDownloadResponse_Counts: CClientMetrics_ContentDownloadResponse_Counts;
  CClientMetrics_ContentDownloadResponse_Counts_Notification: CClientMetrics_ContentDownloadResponse_Counts_Notification;
  CClientMetrics_ContentDownloadResponse_HostCounts: CClientMetrics_ContentDownloadResponse_HostCounts;
  CClientMetrics_ContentDownloadResponse_Hosts: CClientMetrics_ContentDownloadResponse_Hosts;
  CClientMetrics_ContentValidation_Notification: CClientMetrics_ContentValidation_Notification;
  CClientMetrics_DownloadRates_Notification: CClientMetrics_DownloadRates_Notification;
  CClientMetrics_DownloadRates_Notification_StatsInfo: CClientMetrics_DownloadRates_Notification_StatsInfo;
  CClientMetrics_EndGameRecording_Notification: CClientMetrics_EndGameRecording_Notification;
  CClientMetrics_GamePerformance_Notification: CClientMetrics_GamePerformance_Notification;
  CClientMetrics_GamePerformance_Notification_FrameRate: CClientMetrics_GamePerformance_Notification_FrameRate;
  CClientMetrics_IPv6Connectivity_Notification: CClientMetrics_IPv6Connectivity_Notification;
  CClientMetrics_IPv6Connectivity_Result: CClientMetrics_IPv6Connectivity_Result;
  CClientMetrics_ReportAccessibilitySettings_Notification: CClientMetrics_ReportAccessibilitySettings_Notification;
  CClientMetrics_ReportClientArgs_Notification: CClientMetrics_ReportClientArgs_Notification;
  CClientMetrics_ReportClientError_Notification: CClientMetrics_ReportClientError_Notification;
  CClientMetrics_ReportClientError_Notification_Error: CClientMetrics_ReportClientError_Notification_Error;
  CClientMetrics_ReportLinuxStats_Notification: CClientMetrics_ReportLinuxStats_Notification;
  CClientMetrics_ReportReactUsage_Notification: CClientMetrics_ReportReactUsage_Notification;
  CClientMetrics_ReportReactUsage_Notification_ActionData: CClientMetrics_ReportReactUsage_Notification_ActionData;
  CClientMetrics_ReportReactUsage_Notification_ComponentData: CClientMetrics_ReportReactUsage_Notification_ComponentData;
  CClientMetrics_ReportReactUsage_Notification_RouteData: CClientMetrics_ReportReactUsage_Notification_RouteData;
  CClientMetrics_SteamPipeWorkStats_Notification: CClientMetrics_SteamPipeWorkStats_Notification;
  CClientMetrics_SteamPipeWorkStats_Operation: CClientMetrics_SteamPipeWorkStats_Operation;
  CClientNotificationAchievement: CClientNotificationAchievement;
  CClientNotificationBatteryTemperature: CClientNotificationBatteryTemperature;
  CClientNotificationBroadcastAvailableToWatch: CClientNotificationBroadcastAvailableToWatch;
  CClientNotificationCannotReadControllerGuideButton: CClientNotificationCannotReadControllerGuideButton;
  CClientNotificationCloudSyncConflict: CClientNotificationCloudSyncConflict;
  CClientNotificationCloudSyncFailure: CClientNotificationCloudSyncFailure;
  CClientNotificationDownloadCompleted: CClientNotificationDownloadCompleted;
  CClientNotificationFamilySharingStopPlaying: CClientNotificationFamilySharingStopPlaying;
  CClientNotificationFriendInGame: CClientNotificationFriendInGame;
  CClientNotificationFriendInviteRollup: CClientNotificationFriendInviteRollup;
  CClientNotificationFriendMessage: CClientNotificationFriendMessage;
  CClientNotificationFriendOnline: CClientNotificationFriendOnline;
  CClientNotificationGameRecordingError: CClientNotificationGameRecordingError;
  CClientNotificationGameRecordingInstantClip: CClientNotificationGameRecordingInstantClip;
  CClientNotificationGameRecordingStart: CClientNotificationGameRecordingStart;
  CClientNotificationGameRecordingStop: CClientNotificationGameRecordingStop;
  CClientNotificationGameRecordingUserMarkerAdded: CClientNotificationGameRecordingUserMarkerAdded;
  CClientNotificationGroupChatMessage: CClientNotificationGroupChatMessage;
  CClientNotificationHardwareUpdateAvailable: CClientNotificationHardwareUpdateAvailable;
  CClientNotificationIncomingVoiceChat: CClientNotificationIncomingVoiceChat;
  CClientNotificationItemAnnouncement: CClientNotificationItemAnnouncement;
  CClientNotificationLowBattery: CClientNotificationLowBattery;
  CClientNotificationLowDiskSpace: CClientNotificationLowDiskSpace;
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
  CCloud_BeginHTTPUpload_Response_HTTPHeaders: CCloud_BeginHTTPUpload_Response_HTTPHeaders;
  CCloud_BeginUGCUpload_Request: CCloud_BeginUGCUpload_Request;
  CCloud_BeginUGCUpload_Response: CCloud_BeginUGCUpload_Response;
  CCloud_BeginUGCUpload_Response_HTTPHeaders: CCloud_BeginUGCUpload_Response_HTTPHeaders;
  CCloud_CDNReport_Notification: CCloud_CDNReport_Notification;
  CCloud_ClientBeginFileUpload_Request: CCloud_ClientBeginFileUpload_Request;
  CCloud_ClientBeginFileUpload_Response: CCloud_ClientBeginFileUpload_Response;
  CCloud_ClientCommitFileUpload_Request: CCloud_ClientCommitFileUpload_Request;
  CCloud_ClientCommitFileUpload_Response: CCloud_ClientCommitFileUpload_Response;
  CCloud_ClientConflictResolution_Notification: CCloud_ClientConflictResolution_Notification;
  CCloud_ClientDeleteFile_Request: CCloud_ClientDeleteFile_Request;
  CCloud_ClientFileDownload_Request: CCloud_ClientFileDownload_Request;
  CCloud_ClientFileDownload_Response: CCloud_ClientFileDownload_Response;
  CCloud_ClientFileDownload_Response_HTTPHeaders: CCloud_ClientFileDownload_Response_HTTPHeaders;
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
  CCloudConfigStore_Change_Notification: CCloudConfigStore_Change_Notification;
  CCloudConfigStore_Download_Request: CCloudConfigStore_Download_Request;
  CCloudConfigStore_Download_Response: CCloudConfigStore_Download_Response;
  CCloudConfigStore_Entry: CCloudConfigStore_Entry;
  CCloudConfigStore_NamespaceData: CCloudConfigStore_NamespaceData;
  CCloudConfigStore_NamespaceVersion: CCloudConfigStore_NamespaceVersion;
  CCloudConfigStore_Upload_Request: CCloudConfigStore_Upload_Request;
  CCloudConfigStore_Upload_Response: CCloudConfigStore_Upload_Response;
  CCloudGaming_CreateNonce_Request: CCloudGaming_CreateNonce_Request;
  CCloudGaming_CreateNonce_Response: CCloudGaming_CreateNonce_Response;
  CCloudGaming_GetTimeRemaining_Request: CCloudGaming_GetTimeRemaining_Request;
  CCloudGaming_GetTimeRemaining_Response: CCloudGaming_GetTimeRemaining_Response;
  CCloudGaming_TimeRemaining: CCloudGaming_TimeRemaining;
  CCommunity_ClanLocGroupImage: CCommunity_ClanLocGroupImage;
  CCommunity_ClearSinglePartnerEventsAppPriority_Request: CCommunity_ClearSinglePartnerEventsAppPriority_Request;
  CCommunity_Comment: CCommunity_Comment;
  CCommunity_Comment_Reaction: CCommunity_Comment_Reaction;
  CCommunity_DeleteCommentFromThread_Request: CCommunity_DeleteCommentFromThread_Request;
  CCommunity_FetchTranslationFromCrowdIn_Request: CCommunity_FetchTranslationFromCrowdIn_Request;
  CCommunity_GetAppRichPresenceLocalization_Request: CCommunity_GetAppRichPresenceLocalization_Request;
  CCommunity_GetAppRichPresenceLocalization_Response: CCommunity_GetAppRichPresenceLocalization_Response;
  CCommunity_GetAppRichPresenceLocalization_Response_Token: CCommunity_GetAppRichPresenceLocalization_Response_Token;
  CCommunity_GetAppRichPresenceLocalization_Response_TokenList: CCommunity_GetAppRichPresenceLocalization_Response_TokenList;
  CCommunity_GetApps_Request: CCommunity_GetApps_Request;
  CCommunity_GetApps_Response: CCommunity_GetApps_Response;
  CCommunity_GetAvatarHistory_Request: CCommunity_GetAvatarHistory_Request;
  CCommunity_GetAvatarHistory_Response: CCommunity_GetAvatarHistory_Response;
  CCommunity_GetAvatarHistory_Response_AvatarData: CCommunity_GetAvatarHistory_Response_AvatarData;
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
  CCommunity_GetUserPartnerEventNews_Request: CCommunity_GetUserPartnerEventNews_Request;
  CCommunity_GetUserPartnerEventNews_Response: CCommunity_GetUserPartnerEventNews_Response;
  CCommunity_GetUserPartnerEventsAppPriorities_Response: CCommunity_GetUserPartnerEventsAppPriorities_Response;
  CCommunity_GetUserPartnerEventViewStatus_Request: CCommunity_GetUserPartnerEventViewStatus_Request;
  CCommunity_GetUserPartnerEventViewStatus_Response: CCommunity_GetUserPartnerEventViewStatus_Response;
  CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent: CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent;
  CCommunity_HideAndReportComment_Request: CCommunity_HideAndReportComment_Request;
  CCommunity_MarkPartnerEventsForUser_Request: CCommunity_MarkPartnerEventsForUser_Request;
  CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking: CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking;
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
  CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel: CCommunity_SetRecommendationBotReviewStatus_Request_ReviewLabel;
  CCommunity_VerifyClanMembership_Request: CCommunity_VerifyClanMembership_Request;
  CCommunity_VerifyClanMembership_Response: CCommunity_VerifyClanMembership_Response;
  CContentModeration_CancelContentReport_Request: CContentModeration_CancelContentReport_Request;
  CContentModeration_ClaimBatchForModeration_Request: CContentModeration_ClaimBatchForModeration_Request;
  CContentModeration_ClaimBatchForModeration_Response: CContentModeration_ClaimBatchForModeration_Response;
  CContentModeration_ClaimSubject_Request: CContentModeration_ClaimSubject_Request;
  CContentModeration_CreateContentReport_Request: CContentModeration_CreateContentReport_Request;
  CContentModeration_CreateContentReport_Response: CContentModeration_CreateContentReport_Response;
  CContentModeration_DisputeModerationForReport_Request: CContentModeration_DisputeModerationForReport_Request;
  CContentModeration_DisputeModerationForSubject_Request: CContentModeration_DisputeModerationForSubject_Request;
  CContentModeration_EscalateSubject_Request: CContentModeration_EscalateSubject_Request;
  CContentModeration_GetAuditLog_Request: CContentModeration_GetAuditLog_Request;
  CContentModeration_GetAuditLog_Response: CContentModeration_GetAuditLog_Response;
  CContentModeration_GetAuditLog_Response_AuditLogEntry: CContentModeration_GetAuditLog_Response_AuditLogEntry;
  CContentModeration_GetClaimed_Request: CContentModeration_GetClaimed_Request;
  CContentModeration_GetClaimed_Response: CContentModeration_GetClaimed_Response;
  CContentModeration_GetContentReportSubject_Request: CContentModeration_GetContentReportSubject_Request;
  CContentModeration_GetContentReportSubject_Response: CContentModeration_GetContentReportSubject_Response;
  CContentModeration_GetContentReportSubjectGroup_Request: CContentModeration_GetContentReportSubjectGroup_Request;
  CContentModeration_GetContentReportSubjectGroup_Response: CContentModeration_GetContentReportSubjectGroup_Response;
  CContentModeration_GetModeratorActivity_Request: CContentModeration_GetModeratorActivity_Request;
  CContentModeration_GetModeratorActivity_Response: CContentModeration_GetModeratorActivity_Response;
  CContentModeration_GetModeratorActivity_Response_ModerationActivity: CContentModeration_GetModeratorActivity_Response_ModerationActivity;
  CContentModeration_GetModeratorPreferences_Request: CContentModeration_GetModeratorPreferences_Request;
  CContentModeration_GetModeratorPreferences_Response: CContentModeration_GetModeratorPreferences_Response;
  CContentModeration_GetReportedSubjectsByOwner_Request: CContentModeration_GetReportedSubjectsByOwner_Request;
  CContentModeration_GetReportedSubjectsByOwner_Response: CContentModeration_GetReportedSubjectsByOwner_Response;
  CContentModeration_GetReportsSubmittedByUser_Request: CContentModeration_GetReportsSubmittedByUser_Request;
  CContentModeration_GetReportsSubmittedByUser_Response: CContentModeration_GetReportsSubmittedByUser_Response;
  CContentModeration_GetSubjectOverview_Response: CContentModeration_GetSubjectOverview_Response;
  CContentModeration_GetSubjectOverview_Response_Bucket: CContentModeration_GetSubjectOverview_Response_Bucket;
  CContentModeration_ReleaseClaimed_Request: CContentModeration_ReleaseClaimed_Request;
  CContentModeration_ReleaseSubject_Request: CContentModeration_ReleaseSubject_Request;
  CContentModeration_ResolveDisputedSubject_Request: CContentModeration_ResolveDisputedSubject_Request;
  CContentModeration_ResolveSubject_Request: CContentModeration_ResolveSubject_Request;
  CContentModeration_ResolveSubjectGroup_Request: CContentModeration_ResolveSubjectGroup_Request;
  CContentModeration_SetModeratorPreferences_Request: CContentModeration_SetModeratorPreferences_Request;
  CContentModeration_SetModeratorPreferences_Request_SubjectTypeList: CContentModeration_SetModeratorPreferences_Request_SubjectTypeList;
  CContentModeration_UpdateSubject_Request: CContentModeration_UpdateSubject_Request;
  CContentModeration_WriteToAuditLog_Request: CContentModeration_WriteToAuditLog_Request;
  CContentServerConfig_GetManifestRequestCode_Request: CContentServerConfig_GetManifestRequestCode_Request;
  CContentServerConfig_GetManifestRequestCode_Response: CContentServerConfig_GetManifestRequestCode_Response;
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
  CControllerOriginKey: CControllerOriginKey;
  CDailyDeal_CancelDailyDeal_Request: CDailyDeal_CancelDailyDeal_Request;
  CDailyDeal_CreateDailyDeal_Request: CDailyDeal_CreateDailyDeal_Request;
  CDailyDeal_CreateDailyDeal_Response: CDailyDeal_CreateDailyDeal_Response;
  CDailyDeal_DeleteDailyDeal_Request: CDailyDeal_DeleteDailyDeal_Request;
  CDailyDeal_GetDailyDeals_Request: CDailyDeal_GetDailyDeals_Request;
  CDailyDeal_GetDailyDeals_Response: CDailyDeal_GetDailyDeals_Response;
  CDailyDeal_GetDailyDeals_Response_DailyDealBlockedDate: CDailyDeal_GetDailyDeals_Response_DailyDealBlockedDate;
  CDailyDeal_GetDailyDeals_Response_DailyDealScheduledSlot: CDailyDeal_GetDailyDeals_Response_DailyDealScheduledSlot;
  CDailyDeal_GetDailyDealsForApps_Request: CDailyDeal_GetDailyDealsForApps_Request;
  CDailyDeal_GetDailyDealsForApps_Response: CDailyDeal_GetDailyDealsForApps_Response;
  CDailyDeal_UpdateDailyDeal_Request: CDailyDeal_UpdateDailyDeal_Request;
  CDailyDealDetails: CDailyDealDetails;
  CDepotContentDetection_GetAllDetectedAppContent_Request: CDepotContentDetection_GetAllDetectedAppContent_Request;
  CDepotContentDetection_GetAllDetectedAppContent_Response: CDepotContentDetection_GetAllDetectedAppContent_Response;
  CDepotContentDetection_GetDetectedContentSingleApp_Request: CDepotContentDetection_GetDetectedContentSingleApp_Request;
  CDepotContentDetection_GetDetectedContentSingleApp_Response: CDepotContentDetection_GetDetectedContentSingleApp_Response;
  CDeveloperPageLink: CDeveloperPageLink;
  CDeveloperPageToApps: CDeveloperPageToApps;
  CDismissPinData: CDismissPinData;
  CDisplayMarketingMessage: CDisplayMarketingMessage;
  CEcon_Asset: CEcon_Asset;
  CEcon_ClientGetItemShopOverlayAuthURL_Request: CEcon_ClientGetItemShopOverlayAuthURL_Request;
  CEcon_ClientGetItemShopOverlayAuthURL_Response: CEcon_ClientGetItemShopOverlayAuthURL_Response;
  CEcon_GetAssetClassInfo_Request: CEcon_GetAssetClassInfo_Request;
  CEcon_GetAssetClassInfo_Response: CEcon_GetAssetClassInfo_Response;
  CEcon_GetAssetPropertySchema_Request: CEcon_GetAssetPropertySchema_Request;
  CEcon_GetAssetPropertySchema_Response: CEcon_GetAssetPropertySchema_Response;
  CEcon_GetInventoryItemsWithDescriptions_Request: CEcon_GetInventoryItemsWithDescriptions_Request;
  CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions: CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions;
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
  CFamilyGroups_GetChangeLog_Response_Change: CFamilyGroups_GetChangeLog_Response_Change;
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
  CFamilyGroups_GetPreferredLenders_Response_FamilyMember: CFamilyGroups_GetPreferredLenders_Response_FamilyMember;
  CFamilyGroups_GetPurchaseRequests_Request: CFamilyGroups_GetPurchaseRequests_Request;
  CFamilyGroups_GetPurchaseRequests_Response: CFamilyGroups_GetPurchaseRequests_Response;
  CFamilyGroups_GetSharedLibraryApps_Request: CFamilyGroups_GetSharedLibraryApps_Request;
  CFamilyGroups_GetSharedLibraryApps_Response: CFamilyGroups_GetSharedLibraryApps_Response;
  CFamilyGroups_GetSharedLibraryApps_Response_SharedApp: CFamilyGroups_GetSharedLibraryApps_Response_SharedApp;
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
  CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember: CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember;
  CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp: CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp;
  CForums_DeleteModeratedComment_Request: CForums_DeleteModeratedComment_Request;
  CForums_DeleteModeratedTopic_Request: CForums_DeleteModeratedTopic_Request;
  CForums_GetForumDetails_Response: CForums_GetForumDetails_Response;
  CForums_GetTopicDetails_Request: CForums_GetTopicDetails_Request;
  CForums_GetTopicDetails_Response: CForums_GetTopicDetails_Response;
  CForums_ReportPost_Request: CForums_ReportPost_Request;
  CForums_ReportPost_Response: CForums_ReportPost_Response;
  CForums_ResolveReportedPost_Request: CForums_ResolveReportedPost_Request;
  CForums_ResolveReportedPosts_Request: CForums_ResolveReportedPosts_Request;
  CForums_ResolveReportedPosts_Response: CForums_ResolveReportedPosts_Response;
  CForums_SetTopicLocked_Request: CForums_SetTopicLocked_Request;
  CForums_Topic: CForums_Topic;
  CForums_Topic_Reaction: CForums_Topic_Reaction;
  CForums_UndeleteDisputedComment_Request: CForums_UndeleteDisputedComment_Request;
  CForums_UndeleteDisputedTopic_Request: CForums_UndeleteDisputedTopic_Request;
  CForums_UserBan: CForums_UserBan;
  CForums_UserPermissions: CForums_UserPermissions;
  CFovasVideo_ClientGetOPFSettings_Request: CFovasVideo_ClientGetOPFSettings_Request;
  CFovasVideo_ClientGetOPFSettings_Response: CFovasVideo_ClientGetOPFSettings_Response;
  CFriendMessages_AckMessage_Notification: CFriendMessages_AckMessage_Notification;
  CFriendMessages_DismissSessionNotice_Notification: CFriendMessages_DismissSessionNotice_Notification;
  CFriendMessages_GetRecentMessages_Request: CFriendMessages_GetRecentMessages_Request;
  CFriendMessages_GetRecentMessages_Response: CFriendMessages_GetRecentMessages_Response;
  CFriendMessages_GetRecentMessages_Response_FriendMessage: CFriendMessages_GetRecentMessages_Response_FriendMessage;
  CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction: CFriendMessages_GetRecentMessages_Response_FriendMessage_MessageReaction;
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
  CFriendSharedYearInView: CFriendSharedYearInView;
  CFriendsList_FavoritesChanged_Notification: CFriendsList_FavoritesChanged_Notification;
  CFriendsList_GetCategories_Response: CFriendsList_GetCategories_Response;
  CFriendsList_GetFavorites_Response: CFriendsList_GetFavorites_Response;
  CFriendsList_GetFriendsList_Response: CFriendsList_GetFriendsList_Response;
  CFriendsList_SetFavorites_Request: CFriendsList_SetFavorites_Request;
  CFriendsListCategory: CFriendsListCategory;
  CFriendsListFavoriteEntry: CFriendsListFavoriteEntry;
  CFriendsMessages_GetActiveMessageSessions_Request: CFriendsMessages_GetActiveMessageSessions_Request;
  CFriendsMessages_GetActiveMessageSessions_Response: CFriendsMessages_GetActiveMessageSessions_Response;
  CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession: CFriendsMessages_GetActiveMessageSessions_Response_FriendMessageSession;
  CGameAchievements: CGameAchievements;
  CGameNetworkingUI_AppSummary: CGameNetworkingUI_AppSummary;
  CGameNetworkingUI_ConnectionState: CGameNetworkingUI_ConnectionState;
  CGameNetworkingUI_ConnectionSummary: CGameNetworkingUI_ConnectionSummary;
  CGameNotes_UploadImage_Request: CGameNotes_UploadImage_Request;
  CGameNotes_UploadImage_Response: CGameNotes_UploadImage_Response;
  CGamePerformanceStats_GetGameFrameRateStats_Request: CGamePerformanceStats_GetGameFrameRateStats_Request;
  CGamePerformanceStats_GetGameFrameRateStats_Response: CGamePerformanceStats_GetGameFrameRateStats_Response;
  CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate: CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate;
  CGamePlaytimeStats: CGamePlaytimeStats;
  CGameRank: CGameRank;
  CGameRankings: CGameRankings;
  CGameRecording_AudioSessionsChanged_Notification: CGameRecording_AudioSessionsChanged_Notification;
  CGameRecording_AudioSessionsChanged_Notification_Session: CGameRecording_AudioSessionsChanged_Notification_Session;
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
  CGameRecording_GetAppsWithBackgroundVideo_Response_App: CGameRecording_GetAppsWithBackgroundVideo_Response_App;
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
  CGameRecording_GetThumbnails_Response_Thumbnail: CGameRecording_GetThumbnails_Response_Thumbnail;
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
  CGameRecording_QueryPhases_Request_Tag: CGameRecording_QueryPhases_Request_Tag;
  CGameRecording_QueryPhases_Response: CGameRecording_QueryPhases_Response;
  CGameRecording_QueryPhases_Response_Phase: CGameRecording_QueryPhases_Response_Phase;
  CGameRecording_QueryPhases_Response_Phase_BackgroundRecording: CGameRecording_QueryPhases_Response_Phase_BackgroundRecording;
  CGameRecording_RecordingSessionChanged_Notification: CGameRecording_RecordingSessionChanged_Notification;
  CGameRecording_SaveClip_Request: CGameRecording_SaveClip_Request;
  CGameRecording_SaveClip_Request_Position: CGameRecording_SaveClip_Request_Position;
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
  CGameRecordingDebug_AddTimelineHighlightMarker_Request: CGameRecordingDebug_AddTimelineHighlightMarker_Request;
  CGameRecordingDebug_AddTimelineRangeEnd_Request: CGameRecordingDebug_AddTimelineRangeEnd_Request;
  CGameRecordingDebug_AddTimelineRangeStart_Request: CGameRecordingDebug_AddTimelineRangeStart_Request;
  CGameRecordingDebug_AddTimelineTimestamp_Request: CGameRecordingDebug_AddTimelineTimestamp_Request;
  CGameRecordingDebug_SetTimelineGameMode_Request: CGameRecordingDebug_SetTimelineGameMode_Request;
  CGameRecordingPhase: CGameRecordingPhase;
  CGameRecordingPhase_Tag: CGameRecordingPhase_Tag;
  CGameRecordingTimelineEvent: CGameRecordingTimelineEvent;
  CGameRecordingTimelineMetadata: CGameRecordingTimelineMetadata;
  CGameRecordingTimelineMetadata_Recording: CGameRecordingTimelineMetadata_Recording;
  CGamescope_GetState_Response: CGamescope_GetState_Response;
  CGamescope_SetBlurParams_Request: CGamescope_SetBlurParams_Request;
  CGamescope_SetDisplayPowerState_Request: CGamescope_SetDisplayPowerState_Request;
  CGameSummary: CGameSummary;
  CGlobalPercentiles: CGlobalPercentiles;
  CGlobalPlaytimeDistribution: CGlobalPlaytimeDistribution;
  CHardwarePackageDetails: CHardwarePackageDetails;
  CHardwareUpdate_CheckForUpdates_Response: CHardwareUpdate_CheckForUpdates_Response;
  CHardwareUpdate_GetState_Response: CHardwareUpdate_GetState_Response;
  CHardwareUpdate_PrepForUpdate_Request: CHardwareUpdate_PrepForUpdate_Request;
  CHardwareUpdate_Update_Request: CHardwareUpdate_Update_Request;
  CHardwareUpdate_UpdateProgress_Notification: CHardwareUpdate_UpdateProgress_Notification;
  ChatRoomClient_NotifyChatGroupUserStateChanged_Notification: ChatRoomClient_NotifyChatGroupUserStateChanged_Notification;
  ChatRoomClient_NotifyChatRoomDisconnect_Notification: ChatRoomClient_NotifyChatRoomDisconnect_Notification;
  CHelpRequestLogs_GetApplicationLogDemand_Request: CHelpRequestLogs_GetApplicationLogDemand_Request;
  CHelpRequestLogs_GetApplicationLogDemand_Response: CHelpRequestLogs_GetApplicationLogDemand_Response;
  CHelpRequestLogs_UploadUserApplicationLog_Request: CHelpRequestLogs_UploadUserApplicationLog_Request;
  CHelpRequestLogs_UploadUserApplicationLog_Response: CHelpRequestLogs_UploadUserApplicationLog_Response;
  CLEDManager_GetState_Response: CLEDManager_GetState_Response;
  CLEDManager_SetBrightness_Request: CLEDManager_SetBrightness_Request;
  CLEDManager_SetColor_Request: CLEDManager_SetColor_Request;
  CLEDManager_SetEffect_Request: CLEDManager_SetEffect_Request;
  CLEDManager_SetEnabled_Request: CLEDManager_SetEnabled_Request;
  CLEDManager_SetSpeed_Request: CLEDManager_SetSpeed_Request;
  ClientCloudFileUploadBlockDetails: ClientCloudFileUploadBlockDetails;
  ClientCloudFileUploadBlockDetails_HTTPHeaders: ClientCloudFileUploadBlockDetails_HTTPHeaders;
  CLocalizationToken: CLocalizationToken;
  CLoyaltyRewards_AddReaction_Request: CLoyaltyRewards_AddReaction_Request;
  CLoyaltyRewards_BatchedQueryRewardItems_Request: CLoyaltyRewards_BatchedQueryRewardItems_Request;
  CLoyaltyRewards_BatchedQueryRewardItems_Response: CLoyaltyRewards_BatchedQueryRewardItems_Response;
  CLoyaltyRewards_BatchedQueryRewardItems_Response_Response: CLoyaltyRewards_BatchedQueryRewardItems_Response_Response;
  CLoyaltyRewards_GetActivePurchaseBonuses_Response: CLoyaltyRewards_GetActivePurchaseBonuses_Response;
  CLoyaltyRewards_GetEligibleApps_Response: CLoyaltyRewards_GetEligibleApps_Response;
  CLoyaltyRewards_GetEligibleApps_Response_EligibleApp: CLoyaltyRewards_GetEligibleApps_Response_EligibleApp;
  CLoyaltyRewards_GetEquippedProfileItems_Request: CLoyaltyRewards_GetEquippedProfileItems_Request;
  CLoyaltyRewards_GetEquippedProfileItems_Response: CLoyaltyRewards_GetEquippedProfileItems_Response;
  CLoyaltyRewards_GetPointsForSpend_Request: CLoyaltyRewards_GetPointsForSpend_Request;
  CLoyaltyRewards_GetPointsForSpend_Response: CLoyaltyRewards_GetPointsForSpend_Response;
  CLoyaltyRewards_GetProfileCustomizationsConfig_Response: CLoyaltyRewards_GetProfileCustomizationsConfig_Response;
  CLoyaltyRewards_GetReactionConfig_Request: CLoyaltyRewards_GetReactionConfig_Request;
  CLoyaltyRewards_GetReactionConfig_Response: CLoyaltyRewards_GetReactionConfig_Response;
  CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig: CLoyaltyRewards_GetReactionConfig_Response_ReactionConfig;
  CLoyaltyRewards_GetReactions_Request: CLoyaltyRewards_GetReactions_Request;
  CLoyaltyRewards_GetReactions_Response: CLoyaltyRewards_GetReactions_Response;
  CLoyaltyRewards_GetReactionsSummaryForUser_Request: CLoyaltyRewards_GetReactionsSummaryForUser_Request;
  CLoyaltyRewards_GetReactionsSummaryForUser_Response: CLoyaltyRewards_GetReactionsSummaryForUser_Response;
  CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown: CLoyaltyRewards_GetReactionsSummaryForUser_Response_Breakdown;
  CLoyaltyRewards_GetSummary_Request: CLoyaltyRewards_GetSummary_Request;
  CLoyaltyRewards_GetSummary_Response: CLoyaltyRewards_GetSummary_Response;
  CLoyaltyRewards_GetSummary_Response_Summary: CLoyaltyRewards_GetSummary_Response_Summary;
  CLoyaltyRewards_QueryRewardItems_Request: CLoyaltyRewards_QueryRewardItems_Request;
  CLoyaltyRewards_QueryRewardItems_Response: CLoyaltyRewards_QueryRewardItems_Response;
  CLoyaltyRewards_RedeemPoints_Request: CLoyaltyRewards_RedeemPoints_Request;
  CLoyaltyRewards_RedeemPoints_Response: CLoyaltyRewards_RedeemPoints_Response;
  CLoyaltyRewards_RedeemPointsForBadgeLevel_Request: CLoyaltyRewards_RedeemPointsForBadgeLevel_Request;
  CLoyaltyRewards_RedeemPointsForProfileCustomization_Request: CLoyaltyRewards_RedeemPointsForProfileCustomization_Request;
  CLoyaltyRewards_RedeemPointsForProfileCustomization_Response: CLoyaltyRewards_RedeemPointsForProfileCustomization_Response;
  CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request: CLoyaltyRewards_RedeemPointsForProfileCustomizationUpgrade_Request;
  CLoyaltyRewards_RedeemPointsToUpgradeItem_Request: CLoyaltyRewards_RedeemPointsToUpgradeItem_Request;
  CLoyaltyRewards_RegisterForSteamDeckRewards_Request: CLoyaltyRewards_RegisterForSteamDeckRewards_Request;
  CLoyaltyRewards_RegisterForSteamDeckRewards_Response: CLoyaltyRewards_RegisterForSteamDeckRewards_Response;
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
  CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser: CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser;
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
  CMDSAdmin_AppBuildUpdated_Notification: CMDSAdmin_AppBuildUpdated_Notification;
  CMDSAdmin_AppContentPurge_Request: CMDSAdmin_AppContentPurge_Request;
  CMDSAdmin_AppContentPurgeStatus_Request: CMDSAdmin_AppContentPurgeStatus_Request;
  CMDSAdmin_AppContentPurgeStatus_Response: CMDSAdmin_AppContentPurgeStatus_Response;
  CMDSAdmin_BeginOriginMigrationJob_Request: CMDSAdmin_BeginOriginMigrationJob_Request;
  CMDSAdmin_CSPurgeDepot_Notification: CMDSAdmin_CSPurgeDepot_Notification;
  CMDSAdmin_DepotDownloadBytesInfo: CMDSAdmin_DepotDownloadBytesInfo;
  CMDSAdmin_GetDepotDownloadBytes_Request: CMDSAdmin_GetDepotDownloadBytes_Request;
  CMDSAdmin_GetDepotDownloadBytes_Response: CMDSAdmin_GetDepotDownloadBytes_Response;
  CMDSAdmin_InvalidateDepotMetadata_Notification: CMDSAdmin_InvalidateDepotMetadata_Notification;
  CMDSAdmin_ManifestAppBranchInfo_Request: CMDSAdmin_ManifestAppBranchInfo_Request;
  CMDSAdmin_ManifestAppBranchInfo_Response: CMDSAdmin_ManifestAppBranchInfo_Response;
  CMDSAdmin_MDSFlushDepotCache_Notification: CMDSAdmin_MDSFlushDepotCache_Notification;
  CMDSAdmin_MDSFlushManifestVersion_Notification: CMDSAdmin_MDSFlushManifestVersion_Notification;
  CMDSAdmin_NewChunkAnnouncement_Notification: CMDSAdmin_NewChunkAnnouncement_Notification;
  CMobileApp_GetMobileSummary_Request: CMobileApp_GetMobileSummary_Request;
  CMobileApp_GetMobileSummary_Response: CMobileApp_GetMobileSummary_Response;
  CMobileAuth_MigrateMobileSession_Request: CMobileAuth_MigrateMobileSession_Request;
  CMobileAuth_MigrateMobileSession_Request_DeviceDetails: CMobileAuth_MigrateMobileSession_Request_DeviceDetails;
  CMobileAuth_MigrateMobileSession_Response: CMobileAuth_MigrateMobileSession_Response;
  CMobileDevice_DeregisterMobileDevice_Notification: CMobileDevice_DeregisterMobileDevice_Notification;
  CMobileDevice_HasMobileDevice_Request: CMobileDevice_HasMobileDevice_Request;
  CMobileDevice_HasMobileDevice_Response: CMobileDevice_HasMobileDevice_Response;
  CMobileDevice_RegisterMobileDevice_Request: CMobileDevice_RegisterMobileDevice_Request;
  CMobileDevice_RegisterMobileDevice_Response: CMobileDevice_RegisterMobileDevice_Response;
  CMobilePerAccount_GetSettings_Response: CMobilePerAccount_GetSettings_Response;
  CMobilePerAccount_SetSettings_Request: CMobilePerAccount_SetSettings_Request;
  CMonthlyPlaytimeStats: CMonthlyPlaytimeStats;
  CMsgAchievementChange: CMsgAchievementChange;
  CMsgAuthTicket: CMsgAuthTicket;
  CMsgAvailableHardwareUpdate: CMsgAvailableHardwareUpdate;
  CMsgBadgeCraftedNotification: CMsgBadgeCraftedNotification;
  CMsgBluetoothManagerAdapterDetails: CMsgBluetoothManagerAdapterDetails;
  CMsgBluetoothManagerAdapterInfo: CMsgBluetoothManagerAdapterInfo;
  CMsgBluetoothManagerDeviceDetails: CMsgBluetoothManagerDeviceDetails;
  CMsgBluetoothManagerDeviceInfo: CMsgBluetoothManagerDeviceInfo;
  CMsgClientAccountInfo: CMsgClientAccountInfo;
  CMsgClientAddFriendToGroup: CMsgClientAddFriendToGroup;
  CMsgClientAddFriendToGroupResponse: CMsgClientAddFriendToGroupResponse;
  CMsgClientAMGetPersonaNameHistory: CMsgClientAMGetPersonaNameHistory;
  CMsgClientAMGetPersonaNameHistory_IdInstance: CMsgClientAMGetPersonaNameHistory_IdInstance;
  CMsgClientAMGetPersonaNameHistoryResponse: CMsgClientAMGetPersonaNameHistoryResponse;
  CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance;
  CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance: CMsgClientAMGetPersonaNameHistoryResponse_NameTableInstance_NameInstance;
  CMsgClientChangeStatus: CMsgClientChangeStatus;
  CMsgClientClanState: CMsgClientClanState;
  CMsgClientClanState_Event: CMsgClientClanState_Event;
  CMsgClientClanState_NameInfo: CMsgClientClanState_NameInfo;
  CMsgClientClanState_UserCounts: CMsgClientClanState_UserCounts;
  CMsgClientCreateFriendsGroup: CMsgClientCreateFriendsGroup;
  CMsgClientCreateFriendsGroupResponse: CMsgClientCreateFriendsGroupResponse;
  CMsgClientDeleteFriendsGroup: CMsgClientDeleteFriendsGroup;
  CMsgClientDeleteFriendsGroupResponse: CMsgClientDeleteFriendsGroupResponse;
  CMsgClientEmoticonList: CMsgClientEmoticonList;
  CMsgClientEmoticonList_Effect: CMsgClientEmoticonList_Effect;
  CMsgClientEmoticonList_Emoticon: CMsgClientEmoticonList_Emoticon;
  CMsgClientEmoticonList_Sticker: CMsgClientEmoticonList_Sticker;
  CMsgClientFriendsList: CMsgClientFriendsList;
  CMsgClientFriendsList_Friend: CMsgClientFriendsList_Friend;
  CMsgClientGetClanActivityCounts: CMsgClientGetClanActivityCounts;
  CMsgClientHeartBeat: CMsgClientHeartBeat;
  CMsgClientInviteToGame: CMsgClientInviteToGame;
  CMsgClientItemAnnouncements: CMsgClientItemAnnouncements;
  CMsgClientItemAnnouncements_UnseenItem: CMsgClientItemAnnouncements_UnseenItem;
  CMsgClientLoggedOff: CMsgClientLoggedOff;
  CMsgClientLogon: CMsgClientLogon;
  CMsgClientLogonResponse: CMsgClientLogonResponse;
  CMsgClientManageFriendsGroup: CMsgClientManageFriendsGroup;
  CMsgClientManageFriendsGroupResponse: CMsgClientManageFriendsGroupResponse;
  CMsgClientMMSInviteToLobby: CMsgClientMMSInviteToLobby;
  CMsgClientOfflineMessageNotification: CMsgClientOfflineMessageNotification;
  CMsgClientPersonaState: CMsgClientPersonaState;
  CMsgClientPersonaState_Friend: CMsgClientPersonaState_Friend;
  CMsgClientPersonaState_Friend_ClanData: CMsgClientPersonaState_Friend_ClanData;
  CMsgClientPersonaState_Friend_KV: CMsgClientPersonaState_Friend_KV;
  CMsgClientPersonaState_Friend_OtherGameData: CMsgClientPersonaState_Friend_OtherGameData;
  CMsgClientRemoveFriendFromGroup: CMsgClientRemoveFriendFromGroup;
  CMsgClientRemoveFriendFromGroupResponse: CMsgClientRemoveFriendFromGroupResponse;
  CMsgClientRequestFriendData: CMsgClientRequestFriendData;
  CMsgClientSecret: CMsgClientSecret;
  CMsgClientServersAvailable: CMsgClientServersAvailable;
  CMsgClientServersAvailable_Server_Types_Available: CMsgClientServersAvailable_Server_Types_Available;
  CMsgClientServerTimestampRequest: CMsgClientServerTimestampRequest;
  CMsgClientServerTimestampResponse: CMsgClientServerTimestampResponse;
  CMsgClientSettings: CMsgClientSettings;
  CMsgCloudPendingRemoteOperations: CMsgCloudPendingRemoteOperations;
  CMsgControllerActionSetMiscSettings: CMsgControllerActionSetMiscSettings;
  CMsgControllerConfiguration: CMsgControllerConfiguration;
  CMsgControllerInput: CMsgControllerInput;
  CMsgControllerInputActivator: CMsgControllerInputActivator;
  CMsgControllerInputBinding: CMsgControllerInputBinding;
  CMsgControllerInputBinding_IconBindingData: CMsgControllerInputBinding_IconBindingData;
  CMsgControllerInputBinding_KeyBindingData: CMsgControllerInputBinding_KeyBindingData;
  CMsgControllerInputControllerActionBinding: CMsgControllerInputControllerActionBinding;
  CMsgControllerInputControllerActionCameraHorizonReset: CMsgControllerInputControllerActionCameraHorizonReset;
  CMsgControllerInputControllerActionChangePlayerNumberBinding: CMsgControllerInputControllerActionChangePlayerNumberBinding;
  CMsgControllerInputControllerActionDotsPer360CalibrationSpin: CMsgControllerInputControllerActionDotsPer360CalibrationSpin;
  CMsgControllerInputControllerActionGameActionSetBinding: CMsgControllerInputControllerActionGameActionSetBinding;
  CMsgControllerInputControllerActionLEDColorBinding: CMsgControllerInputControllerActionLEDColorBinding;
  CMsgControllerInputControllerActionMouseBinding: CMsgControllerInputControllerActionMouseBinding;
  CMsgControllerInputControllerActionTurnToFaceDirection: CMsgControllerInputControllerActionTurnToFaceDirection;
  CMsgControllerInputGameActionBinding: CMsgControllerInputGameActionBinding;
  CMsgControllerInputGamepadButtonBinding: CMsgControllerInputGamepadButtonBinding;
  CMsgControllerInputKeyBinding: CMsgControllerInputKeyBinding;
  CMsgControllerInputModeShiftBinding: CMsgControllerInputModeShiftBinding;
  CMsgControllerInputMouseButtonBinding: CMsgControllerInputMouseButtonBinding;
  CMsgControllerInputMouseWheelBinding: CMsgControllerInputMouseWheelBinding;
  CMsgControllerMode: CMsgControllerMode;
  CMsgControllerSetting: CMsgControllerSetting;
  CMsgControllerSourceGroup: CMsgControllerSourceGroup;
  CMsgControllerSources: CMsgControllerSources;
  CMsgControllerVirtualMenuPreviewInfo: CMsgControllerVirtualMenuPreviewInfo;
  CMsgCREGetUserPublishedItemVoteDetails: CMsgCREGetUserPublishedItemVoteDetails;
  CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId: CMsgCREGetUserPublishedItemVoteDetails_PublishedFileId;
  CMsgCREGetUserPublishedItemVoteDetailsResponse: CMsgCREGetUserPublishedItemVoteDetailsResponse;
  CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail: CMsgCREGetUserPublishedItemVoteDetailsResponse_UserItemVoteDetail;
  CMsgCREUpdateUserPublishedItemVote: CMsgCREUpdateUserPublishedItemVote;
  CMsgCREUpdateUserPublishedItemVoteResponse: CMsgCREUpdateUserPublishedItemVoteResponse;
  CMsgDisplayInfo: CMsgDisplayInfo;
  CMsgFactoryResetState: CMsgFactoryResetState;
  CMsgGameAction: CMsgGameAction;
  CMsgGameActionBindingType: CMsgGameActionBindingType;
  CMsgGameActionSet: CMsgGameActionSet;
  CMsgGamescopeState: CMsgGamescopeState;
  CMsgGCRoutingProtoBufHeader: CMsgGCRoutingProtoBufHeader;
  CMsgGenerateSystemReportReply: CMsgGenerateSystemReportReply;
  CMsgHotkey: CMsgHotkey;
  CMsgInferenceIterateBeamSearch: CMsgInferenceIterateBeamSearch;
  CMsgInferenceIterateBeamSearch_CustomItemScalar: CMsgInferenceIterateBeamSearch_CustomItemScalar;
  CMsgIPAddress: CMsgIPAddress;
  CMsgLEDColor: CMsgLEDColor;
  CMsgLEDManagerDevice: CMsgLEDManagerDevice;
  CMsgLEDManagerState: CMsgLEDManagerState;
  CMsgMonitorInfo: CMsgMonitorInfo;
  CMsgMonitorInfo_MonitorInfo: CMsgMonitorInfo_MonitorInfo;
  CMsgMulti: CMsgMulti;
  CMsgNetworkDeviceConnect: CMsgNetworkDeviceConnect;
  CMsgNetworkDeviceConnect_Credentials: CMsgNetworkDeviceConnect_Credentials;
  CMsgNetworkDeviceConnect_CustomAP: CMsgNetworkDeviceConnect_CustomAP;
  CMsgNetworkDeviceConnect_KnownAP: CMsgNetworkDeviceConnect_KnownAP;
  CMsgNetworkDeviceConnect_Wireless: CMsgNetworkDeviceConnect_Wireless;
  CMsgNetworkDeviceIP4Address: CMsgNetworkDeviceIP4Address;
  CMsgNetworkDeviceIP4Config: CMsgNetworkDeviceIP4Config;
  CMsgNetworkDeviceIP6Address: CMsgNetworkDeviceIP6Address;
  CMsgNetworkDeviceIP6Config: CMsgNetworkDeviceIP6Config;
  CMsgNetworkDevicesData: CMsgNetworkDevicesData;
  CMsgNetworkDevicesData_Device: CMsgNetworkDevicesData_Device;
  CMsgNetworkDevicesData_Device_Wired: CMsgNetworkDevicesData_Device_Wired;
  CMsgNetworkDevicesData_Device_Wireless: CMsgNetworkDevicesData_Device_Wireless;
  CMsgNetworkDevicesData_Device_Wireless_AP: CMsgNetworkDevicesData_Device_Wireless_AP;
  CMsgNetworkDeviceSetOptions: CMsgNetworkDeviceSetOptions;
  CMsgNetworkDeviceSetOptions_Wireless: CMsgNetworkDeviceSetOptions_Wireless;
  CMsgProtoBufHeader: CMsgProtoBufHeader;
  CMsgSelectOSBranchParams: CMsgSelectOSBranchParams;
  CMsgSetControllerActionSet: CMsgSetControllerActionSet;
  CMsgSetControllerInputActivator: CMsgSetControllerInputActivator;
  CMsgSetControllerInputActivatorEnabled: CMsgSetControllerInputActivatorEnabled;
  CMsgSetControllerInputBinding: CMsgSetControllerInputBinding;
  CMsgSetControllerSourceMode: CMsgSetControllerSourceMode;
  CMsgSetModeShiftButton: CMsgSetModeShiftButton;
  CMsgSleepManagerState: CMsgSleepManagerState;
  CMsgSteamDatagramConnectionQuality: CMsgSteamDatagramConnectionQuality;
  CMsgSteamDatagramLinkInstantaneousStats: CMsgSteamDatagramLinkInstantaneousStats;
  CMsgSteamDatagramLinkLifetimeStats: CMsgSteamDatagramLinkLifetimeStats;
  CMsgSteamDatagramP2PRoutingSummary: CMsgSteamDatagramP2PRoutingSummary;
  CMsgSteamLearn_BatchOperation_Request: CMsgSteamLearn_BatchOperation_Request;
  CMsgSteamLearn_BatchOperation_Response: CMsgSteamLearn_BatchOperation_Response;
  CMsgSteamLearn_CacheData_Request: CMsgSteamLearn_CacheData_Request;
  CMsgSteamLearn_CacheData_Response: CMsgSteamLearn_CacheData_Response;
  CMsgSteamLearn_CreateProject_Request: CMsgSteamLearn_CreateProject_Request;
  CMsgSteamLearn_CreateProject_Response: CMsgSteamLearn_CreateProject_Response;
  CMsgSteamLearn_EditProject_Request: CMsgSteamLearn_EditProject_Request;
  CMsgSteamLearn_EditProject_Response: CMsgSteamLearn_EditProject_Response;
  CMsgSteamLearn_EditProjectConfig_Request: CMsgSteamLearn_EditProjectConfig_Request;
  CMsgSteamLearn_EditProjectConfig_Response: CMsgSteamLearn_EditProjectConfig_Response;
  CMsgSteamLearn_GetAccessTokens_Request: CMsgSteamLearn_GetAccessTokens_Request;
  CMsgSteamLearn_GetAccessTokens_Response: CMsgSteamLearn_GetAccessTokens_Response;
  CMsgSteamLearn_GetBatchedStatus_Request: CMsgSteamLearn_GetBatchedStatus_Request;
  CMsgSteamLearn_GetBatchedStatus_Response: CMsgSteamLearn_GetBatchedStatus_Response;
  CMsgSteamLearn_GetDataSource_Request: CMsgSteamLearn_GetDataSource_Request;
  CMsgSteamLearn_GetDataSource_Response: CMsgSteamLearn_GetDataSource_Response;
  CMsgSteamLearn_GetEmbeddingValues_Request: CMsgSteamLearn_GetEmbeddingValues_Request;
  CMsgSteamLearn_GetEmbeddingValues_Response: CMsgSteamLearn_GetEmbeddingValues_Response;
  CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData: CMsgSteamLearn_GetEmbeddingValues_Response_EmbeddingData;
  CMsgSteamLearn_GetFetchStatus_Request: CMsgSteamLearn_GetFetchStatus_Request;
  CMsgSteamLearn_GetFetchStatus_Response: CMsgSteamLearn_GetFetchStatus_Response;
  CMsgSteamLearn_GetFetchStatus_Response_Metadata: CMsgSteamLearn_GetFetchStatus_Response_Metadata;
  CMsgSteamLearn_GetFetchStatus_Response_Worker: CMsgSteamLearn_GetFetchStatus_Response_Worker;
  CMsgSteamLearn_GetFetchStatusVersions_Request: CMsgSteamLearn_GetFetchStatusVersions_Request;
  CMsgSteamLearn_GetFetchStatusVersions_Response: CMsgSteamLearn_GetFetchStatusVersions_Response;
  CMsgSteamLearn_GetLogEvents_Request: CMsgSteamLearn_GetLogEvents_Request;
  CMsgSteamLearn_GetLogEvents_Response: CMsgSteamLearn_GetLogEvents_Response;
  CMsgSteamLearn_GetNearestEmbedding_Request: CMsgSteamLearn_GetNearestEmbedding_Request;
  CMsgSteamLearn_GetNearestEmbedding_Response: CMsgSteamLearn_GetNearestEmbedding_Response;
  CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding: CMsgSteamLearn_GetNearestEmbedding_Response_NearEmbedding;
  CMsgSteamLearn_GetProject_Request: CMsgSteamLearn_GetProject_Request;
  CMsgSteamLearn_GetProject_Response: CMsgSteamLearn_GetProject_Response;
  CMsgSteamLearn_GetProjectConfig_Request: CMsgSteamLearn_GetProjectConfig_Request;
  CMsgSteamLearn_GetProjectConfig_Response: CMsgSteamLearn_GetProjectConfig_Response;
  CMsgSteamLearn_GetSnapshotStatus_Request: CMsgSteamLearn_GetSnapshotStatus_Request;
  CMsgSteamLearn_GetSnapshotStatus_Response: CMsgSteamLearn_GetSnapshotStatus_Response;
  CMsgSteamLearn_GetTrainLogs_Request: CMsgSteamLearn_GetTrainLogs_Request;
  CMsgSteamLearn_GetTrainLogs_Response: CMsgSteamLearn_GetTrainLogs_Response;
  CMsgSteamLearn_GetTrainStatus_Request: CMsgSteamLearn_GetTrainStatus_Request;
  CMsgSteamLearn_GetTrainStatus_Response: CMsgSteamLearn_GetTrainStatus_Response;
  CMsgSteamLearn_GetTrainStatus_Response_Batch: CMsgSteamLearn_GetTrainStatus_Response_Batch;
  CMsgSteamLearn_GetTrainStatus_Response_Epoch: CMsgSteamLearn_GetTrainStatus_Response_Epoch;
  CMsgSteamLearn_GetTrainStatusVersions_Request: CMsgSteamLearn_GetTrainStatusVersions_Request;
  CMsgSteamLearn_GetTrainStatusVersions_Response: CMsgSteamLearn_GetTrainStatusVersions_Response;
  CMsgSteamLearn_Inference_Request: CMsgSteamLearn_Inference_Request;
  CMsgSteamLearn_Inference_Response: CMsgSteamLearn_Inference_Response;
  CMsgSteamLearn_InferenceBackend_Request: CMsgSteamLearn_InferenceBackend_Request;
  CMsgSteamLearn_InferenceBackend_Response: CMsgSteamLearn_InferenceBackend_Response;
  CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput: CMsgSteamLearn_InferenceBackend_Response_BinaryCrossEntropyOutput;
  CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput: CMsgSteamLearn_InferenceBackend_Response_CategoricalCrossEntropyOutput;
  CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput: CMsgSteamLearn_InferenceBackend_Response_MutliBinaryCrossEntropyOutput;
  CMsgSteamLearn_InferenceBackend_Response_NamedInferenceOutput: CMsgSteamLearn_InferenceBackend_Response_NamedInferenceOutput;
  CMsgSteamLearn_InferenceBackend_Response_Output: CMsgSteamLearn_InferenceBackend_Response_Output;
  CMsgSteamLearn_InferenceBackend_Response_RegressionOutput: CMsgSteamLearn_InferenceBackend_Response_RegressionOutput;
  CMsgSteamLearn_InferenceBackend_Response_Sequence: CMsgSteamLearn_InferenceBackend_Response_Sequence;
  CMsgSteamLearn_InferenceMetadata_Request: CMsgSteamLearn_InferenceMetadata_Request;
  CMsgSteamLearn_InferenceMetadata_Response: CMsgSteamLearn_InferenceMetadata_Response;
  CMsgSteamLearn_InferenceMetadata_Response_AppInfo: CMsgSteamLearn_InferenceMetadata_Response_AppInfo;
  CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry: CMsgSteamLearn_InferenceMetadata_Response_AppInfoEntry;
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable: CMsgSteamLearn_InferenceMetadata_Response_CompactTable;
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_Entry;
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapMappingsEntry;
  CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry: CMsgSteamLearn_InferenceMetadata_Response_CompactTable_MapValuesEntry;
  CMsgSteamLearn_InferenceMetadata_Response_KMeans: CMsgSteamLearn_InferenceMetadata_Response_KMeans;
  CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster: CMsgSteamLearn_InferenceMetadata_Response_KMeans_Cluster;
  CMsgSteamLearn_InferenceMetadata_Response_Range: CMsgSteamLearn_InferenceMetadata_Response_Range;
  CMsgSteamLearn_InferenceMetadata_Response_RowRange: CMsgSteamLearn_InferenceMetadata_Response_RowRange;
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable;
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_Entry;
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapMappingsEntry: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapMappingsEntry;
  CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapValuesEntry: CMsgSteamLearn_InferenceMetadata_Response_SequenceTable_MapValuesEntry;
  CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram: CMsgSteamLearn_InferenceMetadata_Response_SnapshotHistogram;
  CMsgSteamLearn_InferenceMetadata_Response_StdDev: CMsgSteamLearn_InferenceMetadata_Response_StdDev;
  CMsgSteamLearn_ListDataSources_Response: CMsgSteamLearn_ListDataSources_Response;
  CMsgSteamLearn_ListProjectConfigs_Response: CMsgSteamLearn_ListProjectConfigs_Response;
  CMsgSteamLearn_ListProjectConfigs_Response_ProjectConfigInfo: CMsgSteamLearn_ListProjectConfigs_Response_ProjectConfigInfo;
  CMsgSteamLearn_ListProjects_Request: CMsgSteamLearn_ListProjects_Request;
  CMsgSteamLearn_ListProjects_Response: CMsgSteamLearn_ListProjects_Response;
  CMsgSteamLearn_LogEvent: CMsgSteamLearn_LogEvent;
  CMsgSteamLearn_LogEvent_Autosnapshot: CMsgSteamLearn_LogEvent_Autosnapshot;
  CMsgSteamLearn_LogEvent_TrainEnded: CMsgSteamLearn_LogEvent_TrainEnded;
  CMsgSteamLearn_LogEvent_TrainSetLive: CMsgSteamLearn_LogEvent_TrainSetLive;
  CMsgSteamLearn_LogEvent_TrainStarted: CMsgSteamLearn_LogEvent_TrainStarted;
  CMsgSteamLearn_PublishProject_Request: CMsgSteamLearn_PublishProject_Request;
  CMsgSteamLearn_PublishProject_Response: CMsgSteamLearn_PublishProject_Response;
  CMsgSteamLearn_RegisterDataSource_Request: CMsgSteamLearn_RegisterDataSource_Request;
  CMsgSteamLearn_RegisterDataSource_Response: CMsgSteamLearn_RegisterDataSource_Response;
  CMsgSteamLearn_SetTrainLive_Request: CMsgSteamLearn_SetTrainLive_Request;
  CMsgSteamLearn_SetTrainLive_Response: CMsgSteamLearn_SetTrainLive_Response;
  CMsgSteamLearn_SnapshotProject_Request: CMsgSteamLearn_SnapshotProject_Request;
  CMsgSteamLearn_SnapshotProject_Response: CMsgSteamLearn_SnapshotProject_Response;
  CMsgSteamLearn_Train_Request: CMsgSteamLearn_Train_Request;
  CMsgSteamLearn_Train_Request_Fetch: CMsgSteamLearn_Train_Request_Fetch;
  CMsgSteamLearn_Train_Request_Train: CMsgSteamLearn_Train_Request_Train;
  CMsgSteamLearn_Train_Response: CMsgSteamLearn_Train_Response;
  CMsgSteamLearnAccessTokens: CMsgSteamLearnAccessTokens;
  CMsgSteamLearnAccessTokens_CacheDataAccessToken: CMsgSteamLearnAccessTokens_CacheDataAccessToken;
  CMsgSteamLearnAccessTokens_InferenceAccessToken: CMsgSteamLearnAccessTokens_InferenceAccessToken;
  CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken: CMsgSteamLearnAccessTokens_SnapshotProjectAccessToken;
  CMsgSteamLearnData: CMsgSteamLearnData;
  CMsgSteamLearnDataElement: CMsgSteamLearnDataElement;
  CMsgSteamLearnDataList: CMsgSteamLearnDataList;
  CMsgSteamLearnDataObject: CMsgSteamLearnDataObject;
  CMsgSteamLearnDataRetentionConfig: CMsgSteamLearnDataRetentionConfig;
  CMsgSteamLearnDataSource: CMsgSteamLearnDataSource;
  CMsgSteamLearnDataSourceDescElement: CMsgSteamLearnDataSourceDescElement;
  CMsgSteamLearnDataSourceDescObject: CMsgSteamLearnDataSourceDescObject;
  CMsgSteamLearnDataSourceElementUsage: CMsgSteamLearnDataSourceElementUsage;
  CMsgSteamLearnFetchInfo: CMsgSteamLearnFetchInfo;
  CMsgSteamLearnModelNodeBertFinetune: CMsgSteamLearnModelNodeBertFinetune;
  CMsgSteamLearnModelNodeBertTokenizer: CMsgSteamLearnModelNodeBertTokenizer;
  CMsgSteamLearnModelNodeConcatenate: CMsgSteamLearnModelNodeConcatenate;
  CMsgSteamLearnModelNodeConditionalExtract: CMsgSteamLearnModelNodeConditionalExtract;
  CMsgSteamLearnModelNodeConditionalExtract_FilterInfo: CMsgSteamLearnModelNodeConditionalExtract_FilterInfo;
  CMsgSteamLearnModelNodeConditionalExtract_WeightInfo: CMsgSteamLearnModelNodeConditionalExtract_WeightInfo;
  CMsgSteamLearnModelNodeConv1D: CMsgSteamLearnModelNodeConv1D;
  CMsgSteamLearnModelNodeDense: CMsgSteamLearnModelNodeDense;
  CMsgSteamLearnModelNodeDenseStack: CMsgSteamLearnModelNodeDenseStack;
  CMsgSteamLearnModelNodeDot: CMsgSteamLearnModelNodeDot;
  CMsgSteamLearnModelNodeDropout: CMsgSteamLearnModelNodeDropout;
  CMsgSteamLearnModelNodeEmbedding: CMsgSteamLearnModelNodeEmbedding;
  CMsgSteamLearnModelNodeExternalEmbedding: CMsgSteamLearnModelNodeExternalEmbedding;
  CMsgSteamLearnModelNodeExternalModel: CMsgSteamLearnModelNodeExternalModel;
  CMsgSteamLearnModelNodeExtract: CMsgSteamLearnModelNodeExtract;
  CMsgSteamLearnModelNodeInput: CMsgSteamLearnModelNodeInput;
  CMsgSteamLearnModelNodeKMeansCluster: CMsgSteamLearnModelNodeKMeansCluster;
  CMsgSteamLearnModelNodeLogic: CMsgSteamLearnModelNodeLogic;
  CMsgSteamLearnModelNodeMaxPooling1D: CMsgSteamLearnModelNodeMaxPooling1D;
  CMsgSteamLearnModelNodeNamedInference: CMsgSteamLearnModelNodeNamedInference;
  CMsgSteamLearnModelNodeOnehot: CMsgSteamLearnModelNodeOnehot;
  CMsgSteamLearnModelNodeReshape2D: CMsgSteamLearnModelNodeReshape2D;
  CMsgSteamLearnModelNodeRowExtract: CMsgSteamLearnModelNodeRowExtract;
  CMsgSteamLearnModelNodeSequenceSplit: CMsgSteamLearnModelNodeSequenceSplit;
  CMsgSteamLearnModelNodeShuffle: CMsgSteamLearnModelNodeShuffle;
  CMsgSteamLearnModelNodeSyncedShuffle: CMsgSteamLearnModelNodeSyncedShuffle;
  CMsgSteamLearnModelNodeTextVectorization: CMsgSteamLearnModelNodeTextVectorization;
  CMsgSteamLearnModelNodeThreshold: CMsgSteamLearnModelNodeThreshold;
  CMsgSteamLearnModelNodeTimeDistributedDense: CMsgSteamLearnModelNodeTimeDistributedDense;
  CMsgSteamLearnModelNodeTokenMask: CMsgSteamLearnModelNodeTokenMask;
  CMsgSteamLearnModelNodeTokenTransformer: CMsgSteamLearnModelNodeTokenTransformer;
  CMsgSteamLearnModelNodeTrain: CMsgSteamLearnModelNodeTrain;
  CMsgSteamLearnModelNodeTransformer: CMsgSteamLearnModelNodeTransformer;
  CMsgSteamLearnModelNodeWeightedAverage: CMsgSteamLearnModelNodeWeightedAverage;
  CMsgSteamLearnProject: CMsgSteamLearnProject;
  CMsgSteamLearnProjectConfig: CMsgSteamLearnProjectConfig;
  CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry: CMsgSteamLearnProjectConfig_MapDataElementSqlColumnEntry;
  CMsgSteamLearnProjectNode: CMsgSteamLearnProjectNode;
  CMsgSteamLearnProjectNodeConnector: CMsgSteamLearnProjectNodeConnector;
  CMsgSteamLearnProjectSnapshotConfig: CMsgSteamLearnProjectSnapshotConfig;
  CMsgSteamLearnProjectSnapshotConfigAccountIDs: CMsgSteamLearnProjectSnapshotConfigAccountIDs;
  CMsgSteamLearnProjectSnapshotConfigAppIDs: CMsgSteamLearnProjectSnapshotConfigAppIDs;
  CMsgSteamLearnProjectSnapshotConfigDataSource: CMsgSteamLearnProjectSnapshotConfigDataSource;
  CMsgSteamLearnProjectSnapshotConfigOtherProject: CMsgSteamLearnProjectSnapshotConfigOtherProject;
  CMsgSteamLearnProjectSnapshotFilter: CMsgSteamLearnProjectSnapshotFilter;
  CMsgSteamLearnProjectSnapshotFilterHistogram: CMsgSteamLearnProjectSnapshotFilterHistogram;
  CMsgSteamLearnProjectSnapshotFilterRange: CMsgSteamLearnProjectSnapshotFilterRange;
  CMsgSteamLearnRawDataElement: CMsgSteamLearnRawDataElement;
  CMsgSteamLearnScheduledTrainConfig: CMsgSteamLearnScheduledTrainConfig;
  CMsgSteamLearnSnapshotStorage: CMsgSteamLearnSnapshotStorage;
  CMsgSteamLearnSnapshotStorage_MapStorageElementsEntry: CMsgSteamLearnSnapshotStorage_MapStorageElementsEntry;
  CMsgSteamLearnSnapshotStorage_StorageElement: CMsgSteamLearnSnapshotStorage_StorageElement;
  CMsgSteamLearnTrainConfig: CMsgSteamLearnTrainConfig;
  CMsgSteamLearnTrainInfo: CMsgSteamLearnTrainInfo;
  CMsgSteamNetworkingICESessionSummary: CMsgSteamNetworkingICESessionSummary;
  CMsgSteamNetworkingP2PSDRRoutingSummary: CMsgSteamNetworkingP2PSDRRoutingSummary;
  CMsgSteamUIBrowserWindow: CMsgSteamUIBrowserWindow;
  CMsgSwapControllerSourceModes: CMsgSwapControllerSourceModes;
  CMsgSwapModeInputBindings: CMsgSwapModeInputBindings;
  CMsgSwapModeInputBindings_CModeInputSwap: CMsgSwapModeInputBindings_CModeInputSwap;
  CMsgSystemAudioManagerDevice: CMsgSystemAudioManagerDevice;
  CMsgSystemAudioManagerLink: CMsgSystemAudioManagerLink;
  CMsgSystemAudioManagerNode: CMsgSystemAudioManagerNode;
  CMsgSystemAudioManagerObject: CMsgSystemAudioManagerObject;
  CMsgSystemAudioManagerPort: CMsgSystemAudioManagerPort;
  CMsgSystemAudioManagerState: CMsgSystemAudioManagerState;
  CMsgSystemAudioManagerStateHW: CMsgSystemAudioManagerStateHW;
  CMsgSystemAudioManagerUpdateSomething: CMsgSystemAudioManagerUpdateSomething;
  CMsgSystemAudioVolume: CMsgSystemAudioVolume;
  CMsgSystemAudioVolume_ChannelEntry: CMsgSystemAudioVolume_ChannelEntry;
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
  CMsgSystemPerfLimits: CMsgSystemPerfLimits;
  CMsgSystemPerfNetworkInterface: CMsgSystemPerfNetworkInterface;
  CMsgSystemPerfSettings: CMsgSystemPerfSettings;
  CMsgSystemPerfSettingsGlobal: CMsgSystemPerfSettingsGlobal;
  CMsgSystemPerfSettingsPerApp: CMsgSystemPerfSettingsPerApp;
  CMsgSystemPerfState: CMsgSystemPerfState;
  CMsgSystemPerfUpdateSettings: CMsgSystemPerfUpdateSettings;
  CMsgSystemUpdateApplyParams: CMsgSystemUpdateApplyParams;
  CMsgSystemUpdateApplyResult: CMsgSystemUpdateApplyResult;
  CMsgSystemUpdateCheckResult: CMsgSystemUpdateCheckResult;
  CMsgSystemUpdateProgress: CMsgSystemUpdateProgress;
  CMsgSystemUpdateState: CMsgSystemUpdateState;
  CMsgVideoGameRecordingComponent: CMsgVideoGameRecordingComponent;
  CMsgVideoGameRecordingDef: CMsgVideoGameRecordingDef;
  CMsgVideoGameRecordingRepresentation: CMsgVideoGameRecordingRepresentation;
  CMsgWebUITransportFailure: CMsgWebUITransportFailure;
  CNews_ConvertHTMLToBBCode_Request: CNews_ConvertHTMLToBBCode_Request;
  CNews_ConvertHTMLToBBCode_Response: CNews_ConvertHTMLToBBCode_Response;
  CNews_GetBatchPublishedPartnerEvent_Request: CNews_GetBatchPublishedPartnerEvent_Request;
  CNews_GetBatchPublishedPartnerEvent_Response: CNews_GetBatchPublishedPartnerEvent_Response;
  CNews_GetNewsFeedByRepublishClan_Request: CNews_GetNewsFeedByRepublishClan_Request;
  CNews_GetNewsFeedByRepublishClan_Response: CNews_GetNewsFeedByRepublishClan_Response;
  CNews_PreviewPartnerEvents_Request: CNews_PreviewPartnerEvents_Request;
  CNews_PreviewPartnerEvents_Response: CNews_PreviewPartnerEvents_Response;
  CNews_PublishPartnerEvent_Request: CNews_PublishPartnerEvent_Request;
  CNews_PublishPartnerEvent_Response: CNews_PublishPartnerEvent_Response;
  CNewsFeedDef: CNewsFeedDef;
  CNewsFeedPostDef: CNewsFeedPostDef;
  CNewsPartnerEventPreview: CNewsPartnerEventPreview;
  CommunityItemDefinition: CommunityItemDefinition;
  ContentReport: ContentReport;
  ContentReportSubject: ContentReportSubject;
  ContentReportSubjectSanction: ContentReportSubjectSanction;
  ControllerGyroEulerAngles: ControllerGyroEulerAngles;
  ControllerQuaternion: ControllerQuaternion;
  ControllerVector2: ControllerVector2;
  ControllerVector3: ControllerVector3;
  COptInDef: COptInDef;
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
  CParterMeetSteam_TestFireEmails_Request: CParterMeetSteam_TestFireEmails_Request;
  CParterMeetSteam_TestFireEmails_Response: CParterMeetSteam_TestFireEmails_Response;
  CPartnerAppNotes_CreateNotes_Request: CPartnerAppNotes_CreateNotes_Request;
  CPartnerAppNotes_GetMultipleNotes_Request: CPartnerAppNotes_GetMultipleNotes_Request;
  CPartnerAppNotes_GetMultipleNotes_Response: CPartnerAppNotes_GetMultipleNotes_Response;
  CPartnerAppNotes_GetMultipleNotes_Response_Container: CPartnerAppNotes_GetMultipleNotes_Response_Container;
  CPartnerAppNotes_GetNotes_Request: CPartnerAppNotes_GetNotes_Request;
  CPartnerAppNotes_GetNotes_Response: CPartnerAppNotes_GetNotes_Response;
  CPartnerAppNotes_UpdateNotes_Request: CPartnerAppNotes_UpdateNotes_Request;
  CPartnerAppOptInData: CPartnerAppOptInData;
  CPartnerAppOptInEmailDef: CPartnerAppOptInEmailDef;
  CPartnerAppOptInEmailStats: CPartnerAppOptInEmailStats;
  CPartnerDeadline: CPartnerDeadline;
  CPartnerDeadline_GetDeadlineByTimeRange_Request: CPartnerDeadline_GetDeadlineByTimeRange_Request;
  CPartnerDeadline_GetDeadlineByTimeRange_Response: CPartnerDeadline_GetDeadlineByTimeRange_Response;
  CPartnerDeadline_GetDeadlineByTimeRange_Response_Result: CPartnerDeadline_GetDeadlineByTimeRange_Response_Result;
  CPartnerDeadline_GetDeadlinesForPartner_Request: CPartnerDeadline_GetDeadlinesForPartner_Request;
  CPartnerDeadline_GetDeadlinesForPartner_Response: CPartnerDeadline_GetDeadlinesForPartner_Response;
  CPartnerDeadline_GetDeadlinesForPartner_Response_Result: CPartnerDeadline_GetDeadlinesForPartner_Response_Result;
  CPartnerDeadlineLookUpKey: CPartnerDeadlineLookUpKey;
  CPartnerDismiss_CreateDismiss_Request: CPartnerDismiss_CreateDismiss_Request;
  CPartnerDismiss_CreateDismiss_Response: CPartnerDismiss_CreateDismiss_Response;
  CPartnerDismiss_DeleteDismiss_Request: CPartnerDismiss_DeleteDismiss_Request;
  CPartnerDismiss_GetDismissTimeRange_Request: CPartnerDismiss_GetDismissTimeRange_Request;
  CPartnerDismiss_GetDismissTimeRange_Response: CPartnerDismiss_GetDismissTimeRange_Response;
  CPartnerEmailAndName: CPartnerEmailAndName;
  CPartnerMeetSteam_EmailInvitees_Request: CPartnerMeetSteam_EmailInvitees_Request;
  CPartnerMeetSteam_EmailInvitees_Response: CPartnerMeetSteam_EmailInvitees_Response;
  CPartnerMeetSteam_GetAvailability_Request: CPartnerMeetSteam_GetAvailability_Request;
  CPartnerMeetSteam_GetAvailability_Response: CPartnerMeetSteam_GetAvailability_Response;
  CPartnerMeetSteam_GetAvailability_Response_Session: CPartnerMeetSteam_GetAvailability_Response_Session;
  CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request: CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request;
  CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response: CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response;
  CPartnerMeetSteam_GetRegistrations_Request: CPartnerMeetSteam_GetRegistrations_Request;
  CPartnerMeetSteam_GetRegistrations_Response: CPartnerMeetSteam_GetRegistrations_Response;
  CPartnerMeetSteam_GetRegistrations_Response_Registration: CPartnerMeetSteam_GetRegistrations_Response_Registration;
  CPartnerMeetSteam_GetSaleEventOrganizers_Request: CPartnerMeetSteam_GetSaleEventOrganizers_Request;
  CPartnerMeetSteam_GetSaleEventOrganizers_Response: CPartnerMeetSteam_GetSaleEventOrganizers_Response;
  CPartnerMeetSteam_UpdateRegistration_Request: CPartnerMeetSteam_UpdateRegistration_Request;
  CPartnerMembershipInvite_GetInvites_Request: CPartnerMembershipInvite_GetInvites_Request;
  CPartnerMembershipInvite_GetInvites_Response: CPartnerMembershipInvite_GetInvites_Response;
  CPartnerOptInEmailTracking: CPartnerOptInEmailTracking;
  CPartnerStoreBrowse_GetCountryRestrictions_Request: CPartnerStoreBrowse_GetCountryRestrictions_Request;
  CPartnerStoreBrowse_GetCountryRestrictions_Response: CPartnerStoreBrowse_GetCountryRestrictions_Response;
  CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions: CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions;
  CPartnerStoreBrowse_GetItems_Request: CPartnerStoreBrowse_GetItems_Request;
  CPhaseAttribute: CPhaseAttribute;
  CPhone_AddPhoneToAccount_Response: CPhone_AddPhoneToAccount_Response;
  CPhone_ConfirmAddPhoneToAccount_Request: CPhone_ConfirmAddPhoneToAccount_Request;
  CPhone_IsAccountWaitingForEmailConfirmation_Response: CPhone_IsAccountWaitingForEmailConfirmation_Response;
  CPhone_SendPhoneVerificationCode_Request: CPhone_SendPhoneVerificationCode_Request;
  CPhone_SetAccountPhoneNumber_Request: CPhone_SetAccountPhoneNumber_Request;
  CPhone_SetAccountPhoneNumber_Response: CPhone_SetAccountPhoneNumber_Response;
  CPhone_VerifyAccountPhoneWithCode_Request: CPhone_VerifyAccountPhoneWithCode_Request;
  CPhysicalGoods_CheckInventoryAvailableByPackage_Request: CPhysicalGoods_CheckInventoryAvailableByPackage_Request;
  CPhysicalGoods_CheckInventoryAvailableByPackage_Response: CPhysicalGoods_CheckInventoryAvailableByPackage_Response;
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
  CPlayer_GetAchievementsProgress_Response_AchievementProgress: CPlayer_GetAchievementsProgress_Response_AchievementProgress;
  CPlayer_GetAnimatedAvatar_Request: CPlayer_GetAnimatedAvatar_Request;
  CPlayer_GetAnimatedAvatar_Response: CPlayer_GetAnimatedAvatar_Response;
  CPlayer_GetAvatarFrame_Request: CPlayer_GetAvatarFrame_Request;
  CPlayer_GetAvatarFrame_Response: CPlayer_GetAvatarFrame_Response;
  CPlayer_GetCommunityBadgeProgress_Request: CPlayer_GetCommunityBadgeProgress_Request;
  CPlayer_GetCommunityBadgeProgress_Response: CPlayer_GetCommunityBadgeProgress_Response;
  CPlayer_GetCommunityBadgeProgress_Response_Quest: CPlayer_GetCommunityBadgeProgress_Response_Quest;
  CPlayer_GetCommunityPreferences_Response: CPlayer_GetCommunityPreferences_Response;
  CPlayer_GetDurationControl_Request: CPlayer_GetDurationControl_Request;
  CPlayer_GetDurationControl_Response: CPlayer_GetDurationControl_Response;
  CPlayer_GetEmoticonList_Response: CPlayer_GetEmoticonList_Response;
  CPlayer_GetEmoticonList_Response_Emoticon: CPlayer_GetEmoticonList_Response_Emoticon;
  CPlayer_GetFavoriteBadge_Request: CPlayer_GetFavoriteBadge_Request;
  CPlayer_GetFavoriteBadge_Response: CPlayer_GetFavoriteBadge_Response;
  CPlayer_GetFriendsGameplayInfo_Request: CPlayer_GetFriendsGameplayInfo_Request;
  CPlayer_GetFriendsGameplayInfo_Response: CPlayer_GetFriendsGameplayInfo_Response;
  CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo: CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo;
  CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo: CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo;
  CPlayer_GetGameAchievements_Request: CPlayer_GetGameAchievements_Request;
  CPlayer_GetGameAchievements_Response: CPlayer_GetGameAchievements_Response;
  CPlayer_GetGameAchievements_Response_Achievement: CPlayer_GetGameAchievements_Response_Achievement;
  CPlayer_GetGameBadgeLevels_Request: CPlayer_GetGameBadgeLevels_Request;
  CPlayer_GetGameBadgeLevels_Response: CPlayer_GetGameBadgeLevels_Response;
  CPlayer_GetGameBadgeLevels_Response_Badge: CPlayer_GetGameBadgeLevels_Response_Badge;
  CPlayer_GetLastPlayedTimes_Request: CPlayer_GetLastPlayedTimes_Request;
  CPlayer_GetLastPlayedTimes_Response: CPlayer_GetLastPlayedTimes_Response;
  CPlayer_GetLastPlayedTimes_Response_Game: CPlayer_GetLastPlayedTimes_Response_Game;
  CPlayer_GetMiniProfileBackground_Request: CPlayer_GetMiniProfileBackground_Request;
  CPlayer_GetMiniProfileBackground_Response: CPlayer_GetMiniProfileBackground_Response;
  CPlayer_GetMutualFriendsForIncomingInvites_Response: CPlayer_GetMutualFriendsForIncomingInvites_Response;
  CPlayer_GetNewSteamAnnouncementState_Request: CPlayer_GetNewSteamAnnouncementState_Request;
  CPlayer_GetNewSteamAnnouncementState_Response: CPlayer_GetNewSteamAnnouncementState_Response;
  CPlayer_GetNicknameList_Response: CPlayer_GetNicknameList_Response;
  CPlayer_GetNicknameList_Response_PlayerNickname: CPlayer_GetNicknameList_Response_PlayerNickname;
  CPlayer_GetOwnedGames_Request: CPlayer_GetOwnedGames_Request;
  CPlayer_GetOwnedGames_Response: CPlayer_GetOwnedGames_Response;
  CPlayer_GetOwnedGames_Response_Game: CPlayer_GetOwnedGames_Response_Game;
  CPlayer_GetPerFriendPreferences_Response: CPlayer_GetPerFriendPreferences_Response;
  CPlayer_GetPlayerLinkDetails_Request: CPlayer_GetPlayerLinkDetails_Request;
  CPlayer_GetPlayerLinkDetails_Response: CPlayer_GetPlayerLinkDetails_Response;
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails;
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData;
  CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData: CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData;
  CPlayer_GetPlayNext_Request: CPlayer_GetPlayNext_Request;
  CPlayer_GetPlayNext_Response: CPlayer_GetPlayNext_Response;
  CPlayer_GetPostedStatus_Request: CPlayer_GetPostedStatus_Request;
  CPlayer_GetPostedStatus_Response: CPlayer_GetPostedStatus_Response;
  CPlayer_GetPrivacySettings_Response: CPlayer_GetPrivacySettings_Response;
  CPlayer_GetProfileBackground_Request: CPlayer_GetProfileBackground_Request;
  CPlayer_GetProfileBackground_Response: CPlayer_GetProfileBackground_Response;
  CPlayer_GetProfileCustomization_Request: CPlayer_GetProfileCustomization_Request;
  CPlayer_GetProfileCustomization_Response: CPlayer_GetProfileCustomization_Response;
  CPlayer_GetProfileCustomization_Response_PurchasedCustomization: CPlayer_GetProfileCustomization_Response_PurchasedCustomization;
  CPlayer_GetProfileItemsEquipped_Request: CPlayer_GetProfileItemsEquipped_Request;
  CPlayer_GetProfileItemsEquipped_Response: CPlayer_GetProfileItemsEquipped_Response;
  CPlayer_GetProfileItemsOwned_Request: CPlayer_GetProfileItemsOwned_Request;
  CPlayer_GetProfileItemsOwned_Response: CPlayer_GetProfileItemsOwned_Response;
  CPlayer_GetProfileThemesAvailable_Response: CPlayer_GetProfileThemesAvailable_Response;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization;
  CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization: CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization;
  CPlayer_GetPurchasedProfileCustomizations_Request: CPlayer_GetPurchasedProfileCustomizations_Request;
  CPlayer_GetPurchasedProfileCustomizations_Response: CPlayer_GetPurchasedProfileCustomizations_Response;
  CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization: CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization;
  CPlayer_GetRecentPlaytimeSessionsForChild_Request: CPlayer_GetRecentPlaytimeSessionsForChild_Request;
  CPlayer_GetRecentPlaytimeSessionsForChild_Response: CPlayer_GetRecentPlaytimeSessionsForChild_Response;
  CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession: CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession;
  CPlayer_GetSteamDeckKeyboardSkin_Request: CPlayer_GetSteamDeckKeyboardSkin_Request;
  CPlayer_GetSteamDeckKeyboardSkin_Response: CPlayer_GetSteamDeckKeyboardSkin_Response;
  CPlayer_GetTextFilterWords_Response: CPlayer_GetTextFilterWords_Response;
  CPlayer_GetTimeSSAAccepted_Response: CPlayer_GetTimeSSAAccepted_Response;
  CPlayer_GetTopAchievementsForGames_Request: CPlayer_GetTopAchievementsForGames_Request;
  CPlayer_GetTopAchievementsForGames_Response: CPlayer_GetTopAchievementsForGames_Response;
  CPlayer_GetTopAchievementsForGames_Response_Achievement: CPlayer_GetTopAchievementsForGames_Response_Achievement;
  CPlayer_GetTopAchievementsForGames_Response_Game: CPlayer_GetTopAchievementsForGames_Response_Game;
  CPlayer_IgnoreFriend_Request: CPlayer_IgnoreFriend_Request;
  CPlayer_IgnoreFriend_Response: CPlayer_IgnoreFriend_Response;
  CPlayer_IncomingInviteMutualFriendList: CPlayer_IncomingInviteMutualFriendList;
  CPlayer_LastPlayedTimes_Notification: CPlayer_LastPlayedTimes_Notification;
  CPlayer_NewSteamAnnouncementState_Notification: CPlayer_NewSteamAnnouncementState_Notification;
  CPlayer_PerFriendPreferencesChanged_Notification: CPlayer_PerFriendPreferencesChanged_Notification;
  CPlayer_PostStatusToFriends_Request: CPlayer_PostStatusToFriends_Request;
  CPlayer_PrivacySettingsChanged_Notification: CPlayer_PrivacySettingsChanged_Notification;
  CPlayer_RecordDisconnectedPlaytime_Request: CPlayer_RecordDisconnectedPlaytime_Request;
  CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory: CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory;
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
  CPlaytest_GetInviteHistory_Request: CPlaytest_GetInviteHistory_Request;
  CPlaytest_GetInviteHistory_Response: CPlaytest_GetInviteHistory_Response;
  CPlaytest_GetInviteHistory_Response_Invite: CPlaytest_GetInviteHistory_Response_Invite;
  CPlaytest_GetInviteOptions_Request: CPlaytest_GetInviteOptions_Request;
  CPlaytest_GetInviteOptions_Response: CPlaytest_GetInviteOptions_Response;
  CPlaytest_GetInvites_Request: CPlaytest_GetInvites_Request;
  CPlaytest_GetInvites_Response: CPlaytest_GetInvites_Response;
  CPlaytest_GetInvites_Response_Invite: CPlaytest_GetInvites_Response_Invite;
  CPlaytest_GetUserStatus_Request: CPlaytest_GetUserStatus_Request;
  CPlaytest_GetUserStatus_Response: CPlaytest_GetUserStatus_Response;
  CPlaytest_GetUserStatus_Response_AppStatus: CPlaytest_GetUserStatus_Response_AppStatus;
  CPlaytest_RequestInvite_Request: CPlaytest_RequestInvite_Request;
  CPlaytest_RequestInvite_Response: CPlaytest_RequestInvite_Response;
  CPlaytest_UpdateInvites_Request: CPlaytest_UpdateInvites_Request;
  CPlaytest_UpdateInvites_Response: CPlaytest_UpdateInvites_Response;
  CPlaytimeByNumbers: CPlaytimeByNumbers;
  CPlaytimeRanks: CPlaytimeRanks;
  CPlaytimeStats: CPlaytimeStats;
  CPlaytimeStreak: CPlaytimeStreak;
  CPlaytimeStreakGame: CPlaytimeStreakGame;
  CPreviousYIRSummaryData: CPreviousYIRSummaryData;
  CPrivacySettings: CPrivacySettings;
  CProductImpressionsFromClient_Notification: CProductImpressionsFromClient_Notification;
  CProductImpressionsFromClient_Notification_Impression: CProductImpressionsFromClient_Notification_Impression;
  CPromoAssociation: CPromoAssociation;
  CPromotionEventInvitation: CPromotionEventInvitation;
  CPromotionEventInviteReceive: CPromotionEventInviteReceive;
  CPromotionEventInvites_AcceptInvite_Request: CPromotionEventInvites_AcceptInvite_Request;
  CPromotionEventInvites_AcceptInvite_Response: CPromotionEventInvites_AcceptInvite_Response;
  CPromotionEventInvites_CancelInvite_Request: CPromotionEventInvites_CancelInvite_Request;
  CPromotionEventInvites_GetEmailTargets_Request: CPromotionEventInvites_GetEmailTargets_Request;
  CPromotionEventInvites_GetEmailTargets_Response: CPromotionEventInvites_GetEmailTargets_Response;
  CPromotionEventInvites_GetInvite_Request: CPromotionEventInvites_GetInvite_Request;
  CPromotionEventInvites_GetInvite_Response: CPromotionEventInvites_GetInvite_Response;
  CPromotionEventInvites_ResendEmailInvite_Request: CPromotionEventInvites_ResendEmailInvite_Request;
  CPromotionEventInvites_SetInvite_Request: CPromotionEventInvites_SetInvite_Request;
  CPromotionEventInvites_SetInvite_Response: CPromotionEventInvites_SetInvite_Response;
  CPromotionNotificationResults: CPromotionNotificationResults;
  CPromotionPlan: CPromotionPlan;
  CPromotionPlan_CreateSalePageForPromo_Request: CPromotionPlan_CreateSalePageForPromo_Request;
  CPromotionPlan_CreateSalePageForPromo_Response: CPromotionPlan_CreateSalePageForPromo_Response;
  CPromotionPlan_GetPromotionPlanSalesDaily_Request: CPromotionPlan_GetPromotionPlanSalesDaily_Request;
  CPromotionPlan_GetPromotionPlanSalesDaily_Response: CPromotionPlan_GetPromotionPlanSalesDaily_Response;
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales: CPromotionPlan_GetPromotionPlanSalesDaily_Response_DailyPromotionSales;
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product: CPromotionPlan_GetPromotionPlanSalesDaily_Response_Product;
  CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData: CPromotionPlan_GetPromotionPlanSalesDaily_Response_PromotionSaleData;
  CPromotionPlan_SummarySaleResult: CPromotionPlan_SummarySaleResult;
  CPromotionPlanning_CreatePlan_Request: CPromotionPlanning_CreatePlan_Request;
  CPromotionPlanning_CreatePlan_Response: CPromotionPlanning_CreatePlan_Response;
  CPromotionPlanning_DeletePlan_Request: CPromotionPlanning_DeletePlan_Request;
  CPromotionPlanning_GetAdvertisingAppsForPartner_Request: CPromotionPlanning_GetAdvertisingAppsForPartner_Request;
  CPromotionPlanning_GetAdvertisingAppsForPartner_Response: CPromotionPlanning_GetAdvertisingAppsForPartner_Response;
  CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app: CPromotionPlanning_GetAdvertisingAppsForPartner_Response_advertising_app;
  CPromotionPlanning_GetAllActivePlan_Response: CPromotionPlanning_GetAllActivePlan_Response;
  CPromotionPlanning_GetAllPlansForApps_Request: CPromotionPlanning_GetAllPlansForApps_Request;
  CPromotionPlanning_GetAllPlansForApps_Response: CPromotionPlanning_GetAllPlansForApps_Response;
  CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales: CPromotionPlanning_GetAllPlansForApps_Response_CAppIncludedInSales;
  CPromotionPlanning_GetAllPlansForPartner_Request: CPromotionPlanning_GetAllPlansForPartner_Request;
  CPromotionPlanning_GetAllPlansForPartner_Response: CPromotionPlanning_GetAllPlansForPartner_Response;
  CPromotionPlanning_GetPlan_Request: CPromotionPlanning_GetPlan_Request;
  CPromotionPlanning_GetPlan_Response: CPromotionPlanning_GetPlan_Response;
  CPromotionPlanning_GetPlanByAssociationID_Request: CPromotionPlanning_GetPlanByAssociationID_Request;
  CPromotionPlanning_GetPlanByAssociationID_Response: CPromotionPlanning_GetPlanByAssociationID_Response;
  CPromotionPlanning_GetPlanByInputAccessKey_Request: CPromotionPlanning_GetPlanByInputAccessKey_Request;
  CPromotionPlanning_GetPlanByInputAccessKey_Response: CPromotionPlanning_GetPlanByInputAccessKey_Response;
  CPromotionPlanning_GetPlanCompletedInDateRange_Request: CPromotionPlanning_GetPlanCompletedInDateRange_Request;
  CPromotionPlanning_GetPlanCompletedInDateRange_Response: CPromotionPlanning_GetPlanCompletedInDateRange_Response;
  CPromotionPlanning_GetPlansUpdatedSince_Request: CPromotionPlanning_GetPlansUpdatedSince_Request;
  CPromotionPlanning_GetPlansUpdatedSince_Response: CPromotionPlanning_GetPlansUpdatedSince_Response;
  CPromotionPlanning_GetPromotionPlanForSalePages_Request: CPromotionPlanning_GetPromotionPlanForSalePages_Request;
  CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage: CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage;
  CPromotionPlanning_GetPromotionPlanForSalePages_Response: CPromotionPlanning_GetPromotionPlanForSalePages_Response;
  CPromotionPlanning_GetSalePageCandidatesForPromo_Request: CPromotionPlanning_GetSalePageCandidatesForPromo_Request;
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response: CPromotionPlanning_GetSalePageCandidatesForPromo_Response;
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan: CPromotionPlanning_GetSalePageCandidatesForPromo_Response_clan;
  CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage: CPromotionPlanning_GetSalePageCandidatesForPromo_Response_salepage;
  CPromotionPlanning_GetSentNotification_Request: CPromotionPlanning_GetSentNotification_Request;
  CPromotionPlanning_GetSentNotification_Response: CPromotionPlanning_GetSentNotification_Response;
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Request: CPromotionPlanning_GetUpcomingScheduledDiscounts_Request;
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response: CPromotionPlanning_GetUpcomingScheduledDiscounts_Response;
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo: CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingAppDiscountInfo;
  CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo: CPromotionPlanning_GetUpcomingScheduledDiscounts_Response_CUpcomingPackageDiscountInfo;
  CPromotionPlanning_MarkLocalizationAssetComplete_Request: CPromotionPlanning_MarkLocalizationAssetComplete_Request;
  CPromotionPlanning_ResendNotification_Request: CPromotionPlanning_ResendNotification_Request;
  CPromotionPlanning_SearchPlan_Request: CPromotionPlanning_SearchPlan_Request;
  CPromotionPlanning_SearchPlan_Response: CPromotionPlanning_SearchPlan_Response;
  CPromotionPlanning_SendNotification_Request: CPromotionPlanning_SendNotification_Request;
  CPromotionPlanning_SetPromotionEmailTarget_Request: CPromotionPlanning_SetPromotionEmailTarget_Request;
  CPromotionPlanning_UpdatePlan_Request: CPromotionPlanning_UpdatePlan_Request;
  CPromotionRequirements: CPromotionRequirements;
  CPromotionStats_GetOptInDemoStats_Request: CPromotionStats_GetOptInDemoStats_Request;
  CPromotionStats_GetOptInDemoStats_Response: CPromotionStats_GetOptInDemoStats_Response;
  CPromotionStats_GetOptInDemoStats_Response_PerAppStats: CPromotionStats_GetOptInDemoStats_Response_PerAppStats;
  CPublishedFile_AddAppRelationship_Request: CPublishedFile_AddAppRelationship_Request;
  CPublishedFile_AddChild_Request: CPublishedFile_AddChild_Request;
  CPublishedFile_AreFilesInSubscriptionList_Request: CPublishedFile_AreFilesInSubscriptionList_Request;
  CPublishedFile_AreFilesInSubscriptionList_Response: CPublishedFile_AreFilesInSubscriptionList_Response;
  CPublishedFile_AreFilesInSubscriptionList_Response_InList: CPublishedFile_AreFilesInSubscriptionList_Response_InList;
  CPublishedFile_CanSubscribe_Request: CPublishedFile_CanSubscribe_Request;
  CPublishedFile_CanSubscribe_Response: CPublishedFile_CanSubscribe_Response;
  CPublishedFile_Delete_Request: CPublishedFile_Delete_Request;
  CPublishedFile_FileDeleted_Client_Notification: CPublishedFile_FileDeleted_Client_Notification;
  CPublishedFile_FileSubscribed_Notification: CPublishedFile_FileSubscribed_Notification;
  CPublishedFile_FileSubscribed_Notification_RevisionData: CPublishedFile_FileSubscribed_Notification_RevisionData;
  CPublishedFile_FileUnsubscribed_Notification: CPublishedFile_FileUnsubscribed_Notification;
  CPublishedFile_GetAppRelationships_Request: CPublishedFile_GetAppRelationships_Request;
  CPublishedFile_GetAppRelationships_Response: CPublishedFile_GetAppRelationships_Response;
  CPublishedFile_GetAppRelationships_Response_AppRelationship: CPublishedFile_GetAppRelationships_Response_AppRelationship;
  CPublishedFile_GetAppRelationshipsBatched_Request: CPublishedFile_GetAppRelationshipsBatched_Request;
  CPublishedFile_GetAppRelationshipsBatched_Response: CPublishedFile_GetAppRelationshipsBatched_Response;
  CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship: CPublishedFile_GetAppRelationshipsBatched_Response_AppRelationship;
  CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship: CPublishedFile_GetAppRelationshipsBatched_Response_PublishedFileAppRelationship;
  CPublishedFile_GetChangeHistory_Request: CPublishedFile_GetChangeHistory_Request;
  CPublishedFile_GetChangeHistory_Response: CPublishedFile_GetChangeHistory_Response;
  CPublishedFile_GetChangeHistory_Response_ChangeLog: CPublishedFile_GetChangeHistory_Response_ChangeLog;
  CPublishedFile_GetChangeHistoryEntry_Request: CPublishedFile_GetChangeHistoryEntry_Request;
  CPublishedFile_GetChangeHistoryEntry_Response: CPublishedFile_GetChangeHistoryEntry_Response;
  CPublishedFile_GetContentDescriptors_Request: CPublishedFile_GetContentDescriptors_Request;
  CPublishedFile_GetContentDescriptors_Response: CPublishedFile_GetContentDescriptors_Response;
  CPublishedFile_GetContentDescriptors_Response_ContentDescriptor: CPublishedFile_GetContentDescriptors_Response_ContentDescriptor;
  CPublishedFile_GetDetails_Request: CPublishedFile_GetDetails_Request;
  CPublishedFile_GetDetails_Response: CPublishedFile_GetDetails_Response;
  CPublishedFile_GetItemChanges_Request: CPublishedFile_GetItemChanges_Request;
  CPublishedFile_GetItemChanges_Response: CPublishedFile_GetItemChanges_Response;
  CPublishedFile_GetItemChanges_Response_WorkshopItemInfo: CPublishedFile_GetItemChanges_Response_WorkshopItemInfo;
  CPublishedFile_GetItemInfo_Request: CPublishedFile_GetItemInfo_Request;
  CPublishedFile_GetItemInfo_Request_WorkshopItem: CPublishedFile_GetItemInfo_Request_WorkshopItem;
  CPublishedFile_GetItemInfo_Response: CPublishedFile_GetItemInfo_Response;
  CPublishedFile_GetItemInfo_Response_WorkshopItemInfo: CPublishedFile_GetItemInfo_Response_WorkshopItemInfo;
  CPublishedFile_GetSubSectionData_Request: CPublishedFile_GetSubSectionData_Request;
  CPublishedFile_GetSubSectionData_Response: CPublishedFile_GetSubSectionData_Response;
  CPublishedFile_GetUserFiles_Request: CPublishedFile_GetUserFiles_Request;
  CPublishedFile_GetUserFiles_Request_KVTag: CPublishedFile_GetUserFiles_Request_KVTag;
  CPublishedFile_GetUserFiles_Request_TagGroup: CPublishedFile_GetUserFiles_Request_TagGroup;
  CPublishedFile_GetUserFiles_Response: CPublishedFile_GetUserFiles_Response;
  CPublishedFile_GetUserFiles_Response_App: CPublishedFile_GetUserFiles_Response_App;
  CPublishedFile_GetUserVoteSummary_Request: CPublishedFile_GetUserVoteSummary_Request;
  CPublishedFile_GetUserVoteSummary_Response: CPublishedFile_GetUserVoteSummary_Response;
  CPublishedFile_GetUserVoteSummary_Response_VoteSummary: CPublishedFile_GetUserVoteSummary_Response_VoteSummary;
  CPublishedFile_Publish_Request: CPublishedFile_Publish_Request;
  CPublishedFile_Publish_Response: CPublishedFile_Publish_Response;
  CPublishedFile_QueryFiles_Request: CPublishedFile_QueryFiles_Request;
  CPublishedFile_QueryFiles_Request_DateRange: CPublishedFile_QueryFiles_Request_DateRange;
  CPublishedFile_QueryFiles_Request_KVTag: CPublishedFile_QueryFiles_Request_KVTag;
  CPublishedFile_QueryFiles_Request_TagGroup: CPublishedFile_QueryFiles_Request_TagGroup;
  CPublishedFile_QueryFiles_Response: CPublishedFile_QueryFiles_Response;
  CPublishedFile_RefreshVotingQueue_Request: CPublishedFile_RefreshVotingQueue_Request;
  CPublishedFile_RemoveAppRelationship_Request: CPublishedFile_RemoveAppRelationship_Request;
  CPublishedFile_RemoveChild_Request: CPublishedFile_RemoveChild_Request;
  CPublishedFile_SetCollectionChildren_Request: CPublishedFile_SetCollectionChildren_Request;
  CPublishedFile_SetPlaytimeForControllerConfigs_Request: CPublishedFile_SetPlaytimeForControllerConfigs_Request;
  CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage: CPublishedFile_SetPlaytimeForControllerConfigs_Request_ControllerConfigUsage;
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
  CPublishing_CreatePartnerAppOptInEmail_Request: CPublishing_CreatePartnerAppOptInEmail_Request;
  CPublishing_CreatePartnerAppOptInEmail_Response: CPublishing_CreatePartnerAppOptInEmail_Response;
  CPublishing_GetEstimatePartnerAppOptInEmail_Request: CPublishing_GetEstimatePartnerAppOptInEmail_Request;
  CPublishing_GetEstimatePartnerAppOptInEmail_Response: CPublishing_GetEstimatePartnerAppOptInEmail_Response;
  CPublishing_GetOptInAppealsSummaryStats_Request: CPublishing_GetOptInAppealsSummaryStats_Request;
  CPublishing_GetOptInAppealsSummaryStats_Response: CPublishing_GetOptInAppealsSummaryStats_Response;
  CPublishing_GetOptInAppealsSummaryStats_Response_CSummary: CPublishing_GetOptInAppealsSummaryStats_Response_CSummary;
  CPublishing_GetOptInEmailTracking_Request: CPublishing_GetOptInEmailTracking_Request;
  CPublishing_GetOptInEmailTracking_Response: CPublishing_GetOptInEmailTracking_Response;
  CPublishing_GetOptInHistoryInternal_Request: CPublishing_GetOptInHistoryInternal_Request;
  CPublishing_GetOptInHistoryInternal_Response: CPublishing_GetOptInHistoryInternal_Response;
  CPublishing_GetPartnerAppOptInEmailDefAndStats_Request: CPublishing_GetPartnerAppOptInEmailDefAndStats_Request;
  CPublishing_GetPartnerAppOptInEmailDefAndStats_Response: CPublishing_GetPartnerAppOptInEmailDefAndStats_Response;
  CPublishing_GetPartnerAppOptInsIDs_Request: CPublishing_GetPartnerAppOptInsIDs_Request;
  CPublishing_GetPartnerAppOptInsIDs_Response: CPublishing_GetPartnerAppOptInsIDs_Response;
  CPublishing_GetPartnerPaidGivenPackageList_Request: CPublishing_GetPartnerPaidGivenPackageList_Request;
  CPublishing_GetPartnerPaidGivenPackageList_Response: CPublishing_GetPartnerPaidGivenPackageList_Response;
  CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair: CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair;
  CPublishing_GetSinglePartnerAppOptIns_Request: CPublishing_GetSinglePartnerAppOptIns_Request;
  CPublishing_GetSinglePartnerAppOptIns_Response: CPublishing_GetSinglePartnerAppOptIns_Response;
  CPublishing_SendPartnerAppOptInEmailAndWait_Request: CPublishing_SendPartnerAppOptInEmailAndWait_Request;
  CPublishing_SendPartnerAppOptInEmailAndWait_Response: CPublishing_SendPartnerAppOptInEmailAndWait_Response;
  CPublishing_SetFeaturingOnPartnerAppOptIn_Request: CPublishing_SetFeaturingOnPartnerAppOptIn_Request;
  CPublishing_SetFeaturingOnPartnerAppOptIn_Response: CPublishing_SetFeaturingOnPartnerAppOptIn_Response;
  CPublishing_TestFirePartnerAppOptInEmail_Request: CPublishing_TestFirePartnerAppOptInEmail_Request;
  CPublishing_UpdatePartnerAppOptInEmail_Request: CPublishing_UpdatePartnerAppOptInEmail_Request;
  CQuest_ActivateProfileModifierItem_Request: CQuest_ActivateProfileModifierItem_Request;
  CQuest_CommunityItem: CQuest_CommunityItem;
  CQuest_CommunityItem_Attribute: CQuest_CommunityItem_Attribute;
  CQuest_GetCommunityInventory_Request: CQuest_GetCommunityInventory_Request;
  CQuest_GetCommunityInventory_Response: CQuest_GetCommunityInventory_Response;
  CQuest_GetCommunityItemDefinitions_Request: CQuest_GetCommunityItemDefinitions_Request;
  CQuest_GetCommunityItemDefinitions_Response: CQuest_GetCommunityItemDefinitions_Response;
  CQuest_GetCommunityItemDefinitions_Response_ItemDefinition: CQuest_GetCommunityItemDefinitions_Response_ItemDefinition;
  CQuest_GetNumTradingCardsEarned_Request: CQuest_GetNumTradingCardsEarned_Request;
  CQuest_GetNumTradingCardsEarned_Response: CQuest_GetNumTradingCardsEarned_Response;
  CQuest_SetVirtualItemRewardDefinition_Request: CQuest_SetVirtualItemRewardDefinition_Request;
  CQuest_VirtualItemRewardDefinition_Request: CQuest_VirtualItemRewardDefinition_Request;
  CQuest_VirtualItemRewardDefinition_Response: CQuest_VirtualItemRewardDefinition_Response;
  CRankingCategory: CRankingCategory;
  CRemoteClient_AllocateRelayServer_Request: CRemoteClient_AllocateRelayServer_Request;
  CRemoteClient_AllocateRelayServer_Response: CRemoteClient_AllocateRelayServer_Response;
  CRemoteClient_AllocateSDR_Request: CRemoteClient_AllocateSDR_Request;
  CRemoteClient_ClientDetails: CRemoteClient_ClientDetails;
  CRemoteClient_CreateRemotePlayTogetherInvitation_Request: CRemoteClient_CreateRemotePlayTogetherInvitation_Request;
  CRemoteClient_CreateRemotePlayTogetherInvitation_Response: CRemoteClient_CreateRemotePlayTogetherInvitation_Response;
  CRemoteClient_DeleteRemotePlayTogetherInvitation_Request: CRemoteClient_DeleteRemotePlayTogetherInvitation_Request;
  CRemoteClient_DeviceDetails: CRemoteClient_DeviceDetails;
  CRemoteClient_GetPairingInfo_Request: CRemoteClient_GetPairingInfo_Request;
  CRemoteClient_GetPairingInfo_Response: CRemoteClient_GetPairingInfo_Response;
  CRemoteClient_GetRecentClients_Response: CRemoteClient_GetRecentClients_Response;
  CRemoteClient_MarkTaskComplete_Request: CRemoteClient_MarkTaskComplete_Request;
  CRemoteClient_Online_Notification: CRemoteClient_Online_Notification;
  CRemoteClient_RegisterStatusUpdate_Notification: CRemoteClient_RegisterStatusUpdate_Notification;
  CRemoteClient_RemotePacket_Notification: CRemoteClient_RemotePacket_Notification;
  CRemoteClient_ReplyPacket_Notification: CRemoteClient_ReplyPacket_Notification;
  CRemoteClient_SteamBroadcast_Notification: CRemoteClient_SteamBroadcast_Notification;
  CRemoteClient_SteamToSteam_Notification: CRemoteClient_SteamToSteam_Notification;
  CRemoteClient_Task: CRemoteClient_Task;
  CRemoteClient_TaskList_Notification: CRemoteClient_TaskList_Notification;
  CRemoteClient_UnregisterStatusUpdate_Notification: CRemoteClient_UnregisterStatusUpdate_Notification;
  CRemotePlay_SessionStarted_Request: CRemotePlay_SessionStarted_Request;
  CRemotePlay_SessionStarted_Response: CRemotePlay_SessionStarted_Response;
  CRemotePlay_SessionStopped_Notification: CRemotePlay_SessionStopped_Notification;
  CRemotePlayTogether_Notification: CRemotePlayTogether_Notification;
  CRemotePlayTogether_Notification_ControllerSlot: CRemotePlayTogether_Notification_ControllerSlot;
  CRemotePlayTogether_Notification_ControllerSlot_obsolete: CRemotePlayTogether_Notification_ControllerSlot_obsolete;
  CRemotePlayTogether_Notification_GroupUpdated: CRemotePlayTogether_Notification_GroupUpdated;
  CRemotePlayTogether_Notification_Player: CRemotePlayTogether_Notification_Player;
  CRemoveAuthenticatorViaChallengeContinue_Replacement_Token: CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;
  CReservationPositionMessage: CReservationPositionMessage;
  CSaleEventOrganizerInfo: CSaleEventOrganizerInfo;
  CSaleFeature_GetAllUserActionDataForType_Request: CSaleFeature_GetAllUserActionDataForType_Request;
  CSaleFeature_GetAllUserActionDataForType_Response: CSaleFeature_GetAllUserActionDataForType_Response;
  CSaleFeature_GetAllUserActionDataForType_Response_Entry: CSaleFeature_GetAllUserActionDataForType_Response_Entry;
  CSaleFeature_GetFriendsSharedYearInReview_Request: CSaleFeature_GetFriendsSharedYearInReview_Request;
  CSaleFeature_GetFriendsSharedYearInReview_Response: CSaleFeature_GetFriendsSharedYearInReview_Response;
  CSaleFeature_GetMultipleUserActionData_Request: CSaleFeature_GetMultipleUserActionData_Request;
  CSaleFeature_GetMultipleUserActionData_Response: CSaleFeature_GetMultipleUserActionData_Response;
  CSaleFeature_GetMultipleUserActionData_Response_Entry: CSaleFeature_GetMultipleUserActionData_Response_Entry;
  CSaleFeature_GetUserActionData_Request: CSaleFeature_GetUserActionData_Request;
  CSaleFeature_GetUserActionData_Response: CSaleFeature_GetUserActionData_Response;
  CSaleFeature_GetUserSharingPermissions_Request: CSaleFeature_GetUserSharingPermissions_Request;
  CSaleFeature_GetUserSharingPermissions_Response: CSaleFeature_GetUserSharingPermissions_Response;
  CSaleFeature_GetUserYearAchievements_Request: CSaleFeature_GetUserYearAchievements_Request;
  CSaleFeature_GetUserYearAchievements_Response: CSaleFeature_GetUserYearAchievements_Response;
  CSaleFeature_GetUserYearInReview_Request: CSaleFeature_GetUserYearInReview_Request;
  CSaleFeature_GetUserYearInReview_Response: CSaleFeature_GetUserYearInReview_Response;
  CSaleFeature_GetUserYearInReviewShareImage_Request: CSaleFeature_GetUserYearInReviewShareImage_Request;
  CSaleFeature_GetUserYearInReviewShareImage_Response: CSaleFeature_GetUserYearInReviewShareImage_Response;
  CSaleFeature_GetUserYearInReviewShareImage_Response_Image: CSaleFeature_GetUserYearInReviewShareImage_Response_Image;
  CSaleFeature_GetUserYearScreenshots_Request: CSaleFeature_GetUserYearScreenshots_Request;
  CSaleFeature_GetUserYearScreenshots_Response: CSaleFeature_GetUserYearScreenshots_Response;
  CSaleFeature_GetUserYearScreenshots_Response_Screenshot: CSaleFeature_GetUserYearScreenshots_Response_Screenshot;
  CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp: CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp;
  CSaleFeature_GetYIRCurrentMonthlySummary_Request: CSaleFeature_GetYIRCurrentMonthlySummary_Request;
  CSaleFeature_GetYIRCurrentMonthlySummary_Response: CSaleFeature_GetYIRCurrentMonthlySummary_Response;
  CSaleFeature_SetUserSharingPermissions_Request: CSaleFeature_SetUserSharingPermissions_Request;
  CSaleFeature_SetUserSharingPermissions_Response: CSaleFeature_SetUserSharingPermissions_Response;
  CSaleItemRewards_CanClaimItem_Request: CSaleItemRewards_CanClaimItem_Request;
  CSaleItemRewards_CanClaimItem_Response: CSaleItemRewards_CanClaimItem_Response;
  CSaleItemRewards_ClaimItem_Request: CSaleItemRewards_ClaimItem_Request;
  CSaleItemRewards_ClaimItem_Response: CSaleItemRewards_ClaimItem_Response;
  CSaleItemRewards_GetClaimedSaleRewards_Request: CSaleItemRewards_GetClaimedSaleRewards_Request;
  CSaleItemRewards_GetClaimedSaleRewards_Response: CSaleItemRewards_GetClaimedSaleRewards_Response;
  CSaleItemRewards_GetCurrentDefinition_Request: CSaleItemRewards_GetCurrentDefinition_Request;
  CSaleItemRewards_GetCurrentDefinition_Response: CSaleItemRewards_GetCurrentDefinition_Response;
  CSaleItemRewards_GetRewardDefinitions_Request: CSaleItemRewards_GetRewardDefinitions_Request;
  CSaleItemRewards_GetRewardDefinitions_Response: CSaleItemRewards_GetRewardDefinitions_Response;
  CSaleItemRewards_SetRewardDefinitions_Request: CSaleItemRewards_SetRewardDefinitions_Request;
  CSaleItemRewards_SetRewardDefinitions_Response: CSaleItemRewards_SetRewardDefinitions_Response;
  CSharedJSContext_GetDesiredSteamUIWindows_Response: CSharedJSContext_GetDesiredSteamUIWindows_Response;
  CShoppingCart_AddBundle_Request: CShoppingCart_AddBundle_Request;
  CShoppingCart_AddBundle_Response: CShoppingCart_AddBundle_Response;
  CShoppingCart_AddPackages_Request: CShoppingCart_AddPackages_Request;
  CShoppingCart_AddPackages_Response: CShoppingCart_AddPackages_Response;
  CShoppingCart_Amount: CShoppingCart_Amount;
  CShoppingCart_AvailableCoupon: CShoppingCart_AvailableCoupon;
  CShoppingCart_BundleItem: CShoppingCart_BundleItem;
  CShoppingCart_Contents: CShoppingCart_Contents;
  CShoppingCart_CouponItem: CShoppingCart_CouponItem;
  CShoppingCart_CreateNew_Request: CShoppingCart_CreateNew_Request;
  CShoppingCart_CreateNew_Response: CShoppingCart_CreateNew_Response;
  CShoppingCart_GetContents_Request: CShoppingCart_GetContents_Request;
  CShoppingCart_GetContents_Response: CShoppingCart_GetContents_Response;
  CShoppingCart_Item: CShoppingCart_Item;
  CShoppingCart_LoyaltyRewardItem: CShoppingCart_LoyaltyRewardItem;
  CShoppingCart_MicroTxnAsset: CShoppingCart_MicroTxnAsset;
  CShoppingCart_PackageItem: CShoppingCart_PackageItem;
  CShoppingCart_Potentials: CShoppingCart_Potentials;
  CShoppingCart_RelationShip: CShoppingCart_RelationShip;
  CShoppingCart_RemoveLineItems_Request: CShoppingCart_RemoveLineItems_Request;
  CShoppingCart_RemoveLineItems_Response: CShoppingCart_RemoveLineItems_Response;
  CShoppingCart_UpdatePackageQuantity_Request: CShoppingCart_UpdatePackageQuantity_Request;
  CShoppingCart_UpdatePackageQuantity_Response: CShoppingCart_UpdatePackageQuantity_Response;
  CShoppingCart_WalletCreditItem: CShoppingCart_WalletCreditItem;
  CSimpleGameSummary: CSimpleGameSummary;
  CSleepManager_GetState_Response: CSleepManager_GetState_Response;
  CSleepManager_RequestSuspend_Notification: CSleepManager_RequestSuspend_Notification;
  CSleepManager_SwitchToPowerState_Request: CSleepManager_SwitchToPowerState_Request;
  CSteamAwards_GetNominationRecommendations_Request: CSteamAwards_GetNominationRecommendations_Request;
  CSteamAwards_GetNominationRecommendations_Response: CSteamAwards_GetNominationRecommendations_Response;
  CSteamAwards_GetNominationRecommendations_Response_PlayedApps: CSteamAwards_GetNominationRecommendations_Response_PlayedApps;
  CSteamAwards_GetNominationRecommendations_Response_SuggestedApp: CSteamAwards_GetNominationRecommendations_Response_SuggestedApp;
  CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent: CSteamAwards_GetNominationRecommendations_Response_SuggestedEvent;
  CSteamAwards_GetNominationShareLink_Request: CSteamAwards_GetNominationShareLink_Request;
  CSteamAwards_GetNominationShareLink_Response: CSteamAwards_GetNominationShareLink_Response;
  CSteamAwards_GetOtherUserNominations_Request: CSteamAwards_GetOtherUserNominations_Request;
  CSteamAwards_GetUserNominations_Response: CSteamAwards_GetUserNominations_Response;
  CSteamAwards_Nominate_Request: CSteamAwards_Nominate_Request;
  CSteamAwards_Nominate_Response: CSteamAwards_Nominate_Response;
  CSteamAwardsNomination: CSteamAwardsNomination;
  CSteamCharts_GetBestOfYearPages_Response: CSteamCharts_GetBestOfYearPages_Response;
  CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage: CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage;
  CSteamCharts_GetGamesByConcurrentPlayers_Request: CSteamCharts_GetGamesByConcurrentPlayers_Request;
  CSteamCharts_GetGamesByConcurrentPlayers_Response: CSteamCharts_GetGamesByConcurrentPlayers_Response;
  CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank: CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank;
  CSteamCharts_GetMonthTopAppReleases_Request: CSteamCharts_GetMonthTopAppReleases_Request;
  CSteamCharts_GetMonthTopAppReleases_Response: CSteamCharts_GetMonthTopAppReleases_Response;
  CSteamCharts_GetMostPlayedGames_Request: CSteamCharts_GetMostPlayedGames_Request;
  CSteamCharts_GetMostPlayedGames_Response: CSteamCharts_GetMostPlayedGames_Response;
  CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank: CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank;
  CSteamCharts_GetMostPlayedSteamDeckGames_Request: CSteamCharts_GetMostPlayedSteamDeckGames_Request;
  CSteamCharts_GetMostPlayedSteamDeckGames_Response: CSteamCharts_GetMostPlayedSteamDeckGames_Response;
  CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank: CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank;
  CSteamCharts_GetTopReleasesPages_Response: CSteamCharts_GetTopReleasesPages_Response;
  CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage: CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage;
  CSteamCharts_GetYearTopAppReleases_Request: CSteamCharts_GetYearTopAppReleases_Request;
  CSteamCharts_GetYearTopAppReleases_Response: CSteamCharts_GetYearTopAppReleases_Response;
  CSteamCharts_GetYearTopAppReleases_Response_TopApps: CSteamCharts_GetYearTopAppReleases_Response_TopApps;
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
  CSteamInputService_GetDongles_Response_Dongle: CSteamInputService_GetDongles_Response_Dongle;
  CSteamInputService_GetTritonPairingInfo_Request: CSteamInputService_GetTritonPairingInfo_Request;
  CSteamInputService_GetTritonPairingInfo_Response: CSteamInputService_GetTritonPairingInfo_Response;
  CSteamInputService_GetTritonPairingInfo_Response_Slot: CSteamInputService_GetTritonPairingInfo_Response_Slot;
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
  CSteamItemRewardDefinition: CSteamItemRewardDefinition;
  CSteamNotification_GetPreferences_Response: CSteamNotification_GetPreferences_Response;
  CSteamNotification_GetSteamNotifications_Request: CSteamNotification_GetSteamNotifications_Request;
  CSteamNotification_GetSteamNotifications_Response: CSteamNotification_GetSteamNotifications_Response;
  CSteamNotification_HideNotification_Notification: CSteamNotification_HideNotification_Notification;
  CSteamNotification_MarkNotificationsRead_Notification: CSteamNotification_MarkNotificationsRead_Notification;
  CSteamNotification_MarkNotificationsViewed_Notification: CSteamNotification_MarkNotificationsViewed_Notification;
  CSteamNotification_NotificationsReceived_Notification: CSteamNotification_NotificationsReceived_Notification;
  CSteamNotification_PreferencesUpdated_Notification: CSteamNotification_PreferencesUpdated_Notification;
  CSteamNotification_SetPreferences_Request: CSteamNotification_SetPreferences_Request;
  CSteamOS_GetUserHasPassword_Response: CSteamOS_GetUserHasPassword_Response;
  CSteamOS_SetUserPassword_Request: CSteamOS_SetUserPassword_Request;
  CSteamOSManager_FactoryReset_Request: CSteamOSManager_FactoryReset_Request;
  CSteamOSManager_GetState_Response: CSteamOSManager_GetState_Response;
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
  CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster: CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster;
  CSteamTV_GetBroadcastChannelClips_Request: CSteamTV_GetBroadcastChannelClips_Request;
  CSteamTV_GetBroadcastChannelClips_Response: CSteamTV_GetBroadcastChannelClips_Response;
  CSteamTV_GetBroadcastChannelID_Request: CSteamTV_GetBroadcastChannelID_Request;
  CSteamTV_GetBroadcastChannelID_Response: CSteamTV_GetBroadcastChannelID_Response;
  CSteamTV_GetBroadcastChannelImages_Request: CSteamTV_GetBroadcastChannelImages_Request;
  CSteamTV_GetBroadcastChannelImages_Response: CSteamTV_GetBroadcastChannelImages_Response;
  CSteamTV_GetBroadcastChannelImages_Response_Images: CSteamTV_GetBroadcastChannelImages_Response_Images;
  CSteamTV_GetBroadcastChannelInteraction_Request: CSteamTV_GetBroadcastChannelInteraction_Request;
  CSteamTV_GetBroadcastChannelInteraction_Response: CSteamTV_GetBroadcastChannelInteraction_Response;
  CSteamTV_GetBroadcastChannelLinks_Request: CSteamTV_GetBroadcastChannelLinks_Request;
  CSteamTV_GetBroadcastChannelLinks_Response: CSteamTV_GetBroadcastChannelLinks_Response;
  CSteamTV_GetBroadcastChannelLinks_Response_Links: CSteamTV_GetBroadcastChannelLinks_Response_Links;
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
  CSteamTV_SetBroadcastChannelLinkRegions_Request_Links: CSteamTV_SetBroadcastChannelLinkRegions_Request_Links;
  CSteamTV_SetBroadcastChannelProfile_Request: CSteamTV_SetBroadcastChannelProfile_Request;
  CSteamTV_SetSteamTVUserSettings_Request: CSteamTV_SetSteamTVUserSettings_Request;
  CSteamTV_SubscribeBroadcastChannel_Request: CSteamTV_SubscribeBroadcastChannel_Request;
  CSteamTV_SubscribeBroadcastChannel_Response: CSteamTV_SubscribeBroadcastChannel_Response;
  CSteamVR_AudioSettings_ChangeSettings_Request: CSteamVR_AudioSettings_ChangeSettings_Request;
  CSteamVR_AudioSettings_Settings: CSteamVR_AudioSettings_Settings;
  CSteamVR_AudioSettings_Settings_Channel: CSteamVR_AudioSettings_Settings_Channel;
  CSteamVR_AudioSettings_SettingsChanged_Notification: CSteamVR_AudioSettings_SettingsChanged_Notification;
  CSteamVR_Header: CSteamVR_Header;
  CSteamVR_Settings_SetValue_Request: CSteamVR_Settings_SetValue_Request;
  CSteamVR_Vector3: CSteamVR_Vector3;
  CSteamVR_VoiceChat_ConfigureVideo_Request: CSteamVR_VoiceChat_ConfigureVideo_Request;
  CSteamVR_VoiceChat_ExitRoomChat_Request: CSteamVR_VoiceChat_ExitRoomChat_Request;
  CSteamVR_VoiceChat_GetAvatarUrl_Request: CSteamVR_VoiceChat_GetAvatarUrl_Request;
  CSteamVR_VoiceChat_GetAvatarUrl_Response: CSteamVR_VoiceChat_GetAvatarUrl_Response;
  CSteamVR_VoiceChat_GroupName_Notification: CSteamVR_VoiceChat_GroupName_Notification;
  CSteamVR_VoiceChat_InitiateRoomChat_Request: CSteamVR_VoiceChat_InitiateRoomChat_Request;
  CSteamVR_VoiceChat_NewGroupChatMsgAdded_Notification: CSteamVR_VoiceChat_NewGroupChatMsgAdded_Notification;
  CSteamVR_VoiceChat_PerUserGainValue_Notification: CSteamVR_VoiceChat_PerUserGainValue_Notification;
  CSteamVR_VoiceChat_PerUserVoiceStatus_Notification: CSteamVR_VoiceChat_PerUserVoiceStatus_Notification;
  CSteamVR_VoiceChat_SendGroupChatMessage_Request: CSteamVR_VoiceChat_SendGroupChatMessage_Request;
  CSteamVR_VoiceChat_SetDefaultSession_Notification: CSteamVR_VoiceChat_SetDefaultSession_Notification;
  CSteamVR_VoiceChat_SetPerUserMuting_Request: CSteamVR_VoiceChat_SetPerUserMuting_Request;
  CSteamVR_VoiceChat_SetPerUserVideo_Request: CSteamVR_VoiceChat_SetPerUserVideo_Request;
  CSteamVR_VoiceChat_SetSpatialAudioListener_Notification: CSteamVR_VoiceChat_SetSpatialAudioListener_Notification;
  CSteamVR_VoiceChat_SetSpatialAudioSource_Notification: CSteamVR_VoiceChat_SetSpatialAudioSource_Notification;
  CSteamVR_VRGamepadUI_Message: CSteamVR_VRGamepadUI_Message;
  CSteamVR_WebRTC_CloseDataChannel_Request: CSteamVR_WebRTC_CloseDataChannel_Request;
  CSteamVR_WebRTC_CreateDataChannel_Request: CSteamVR_WebRTC_CreateDataChannel_Request;
  CSteamVR_WebRTC_CreateDataChannel_Response: CSteamVR_WebRTC_CreateDataChannel_Response;
  CSteamVR_WebRTC_DataChannel_Close_Notification: CSteamVR_WebRTC_DataChannel_Close_Notification;
  CSteamVR_WebRTC_DataChannel_Error_Notification: CSteamVR_WebRTC_DataChannel_Error_Notification;
  CSteamVR_WebRTC_DataChannel_Message_Notification: CSteamVR_WebRTC_DataChannel_Message_Notification;
  CSteamVR_WebRTC_DataChannel_Open_Notification: CSteamVR_WebRTC_DataChannel_Open_Notification;
  CSteamVR_WebRTC_OnDataChannel_Notification: CSteamVR_WebRTC_OnDataChannel_Notification;
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
  CStore_GetLocalizedNameForTags_Response_Tag: CStore_GetLocalizedNameForTags_Response_Tag;
  CStore_GetMostPopularTags_Request: CStore_GetMostPopularTags_Request;
  CStore_GetMostPopularTags_Response: CStore_GetMostPopularTags_Response;
  CStore_GetMostPopularTags_Response_Tag: CStore_GetMostPopularTags_Response_Tag;
  CStore_GetRecommendedTagsForUser_Request: CStore_GetRecommendedTagsForUser_Request;
  CStore_GetRecommendedTagsForUser_Response: CStore_GetRecommendedTagsForUser_Response;
  CStore_GetRecommendedTagsForUser_Response_Tag: CStore_GetRecommendedTagsForUser_Response_Tag;
  CStore_GetStorePreferences_Request: CStore_GetStorePreferences_Request;
  CStore_GetStorePreferences_Response: CStore_GetStorePreferences_Response;
  CStore_GetTagList_Request: CStore_GetTagList_Request;
  CStore_GetTagList_Response: CStore_GetTagList_Response;
  CStore_GetTagList_Response_Tag: CStore_GetTagList_Response_Tag;
  CStore_GetTrendingAppsAmongFriends_Request: CStore_GetTrendingAppsAmongFriends_Request;
  CStore_GetTrendingAppsAmongFriends_Response: CStore_GetTrendingAppsAmongFriends_Response;
  CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData: CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData;
  CStore_GetUserGameInterestState_Request: CStore_GetUserGameInterestState_Request;
  CStore_GetUserGameInterestState_Response: CStore_GetUserGameInterestState_Response;
  CStore_GetUserGameInterestState_Response_InQueue: CStore_GetUserGameInterestState_Response_InQueue;
  CStore_GetUserVotes_Request: CStore_GetUserVotes_Request;
  CStore_GetUserVotes_Response: CStore_GetUserVotes_Response;
  CStore_GetVoteDefinitions_Request: CStore_GetVoteDefinitions_Request;
  CStore_GetVoteDefinitions_Response: CStore_GetVoteDefinitions_Response;
  CStore_GetWishlistDemoEmailStatus_Request: CStore_GetWishlistDemoEmailStatus_Request;
  CStore_GetWishlistDemoEmailStatus_Response: CStore_GetWishlistDemoEmailStatus_Response;
  CStore_MigratePartnerLinkTracking_Notification: CStore_MigratePartnerLinkTracking_Notification;
  CStore_PurchaseReceiptInfo: CStore_PurchaseReceiptInfo;
  CStore_PurchaseReceiptInfo_LineItem: CStore_PurchaseReceiptInfo_LineItem;
  CStore_QueueWishlistDemoEmailToFire_Request: CStore_QueueWishlistDemoEmailToFire_Request;
  CStore_RegisterCDKey_Request: CStore_RegisterCDKey_Request;
  CStore_RegisterCDKey_Response: CStore_RegisterCDKey_Response;
  CStore_ReportApp_Request: CStore_ReportApp_Request;
  CStore_SetReservationPositionMessage_Request: CStore_SetReservationPositionMessage_Request;
  CStore_SetVote_Request: CStore_SetVote_Request;
  CStore_SetVote_Response: CStore_SetVote_Response;
  CStore_SkipDiscoveryQueueItem_Request: CStore_SkipDiscoveryQueueItem_Request;
  CStore_StorePreferencesChanged_Notification: CStore_StorePreferencesChanged_Notification;
  CStore_UpdatePackageReservations_Request: CStore_UpdatePackageReservations_Request;
  CStore_UpdatePackageReservations_Response: CStore_UpdatePackageReservations_Response;
  CStore_UserPreferences: CStore_UserPreferences;
  CStore_UserTagPreferences: CStore_UserTagPreferences;
  CStore_UserTagPreferences_Tag: CStore_UserTagPreferences_Tag;
  CStore_VoteDefinition: CStore_VoteDefinition;
  CStore_VoteDefinition_AppDefinition: CStore_VoteDefinition_AppDefinition;
  CStore_VoteDefinition_GroupDefinition: CStore_VoteDefinition_GroupDefinition;
  CStore_VoteDefinition_Localization: CStore_VoteDefinition_Localization;
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request: CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request;
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response: CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response;
  CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster: CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster;
  CStoreAppSimilarity_PrioritizeAppsForUser_Request: CStoreAppSimilarity_PrioritizeAppsForUser_Request;
  CStoreAppSimilarity_PrioritizeAppsForUser_Response: CStoreAppSimilarity_PrioritizeAppsForUser_Response;
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem;
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo;
  CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo: CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo;
  CStoreBrowse_GetContentHubConfig_Request: CStoreBrowse_GetContentHubConfig_Request;
  CStoreBrowse_GetContentHubConfig_Response: CStoreBrowse_GetContentHubConfig_Response;
  CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig: CStoreBrowse_GetContentHubConfig_Response_ContentHubConfig;
  CStoreBrowse_GetDLCForApps_Request: CStoreBrowse_GetDLCForApps_Request;
  CStoreBrowse_GetDLCForApps_Response: CStoreBrowse_GetDLCForApps_Response;
  CStoreBrowse_GetDLCForApps_Response_DLCData: CStoreBrowse_GetDLCForApps_Response_DLCData;
  CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp: CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp;
  CStoreBrowse_GetDLCForAppsSolr_Request: CStoreBrowse_GetDLCForAppsSolr_Request;
  CStoreBrowse_GetDLCForAppsSolr_Response: CStoreBrowse_GetDLCForAppsSolr_Response;
  CStoreBrowse_GetDLCForAppsSolr_Response_DLCList: CStoreBrowse_GetDLCForAppsSolr_Response_DLCList;
  CStoreBrowse_GetHardwareItems_Request: CStoreBrowse_GetHardwareItems_Request;
  CStoreBrowse_GetHardwareItems_Response: CStoreBrowse_GetHardwareItems_Response;
  CStoreBrowse_GetItems_Request: CStoreBrowse_GetItems_Request;
  CStoreBrowse_GetItems_Response: CStoreBrowse_GetItems_Response;
  CStoreBrowse_GetPriceStops_Request: CStoreBrowse_GetPriceStops_Request;
  CStoreBrowse_GetPriceStops_Response: CStoreBrowse_GetPriceStops_Response;
  CStoreBrowse_GetPriceStops_Response_PriceStop: CStoreBrowse_GetPriceStops_Response_PriceStop;
  CStoreBrowse_GetStoreCategories_Request: CStoreBrowse_GetStoreCategories_Request;
  CStoreBrowse_GetStoreCategories_Response: CStoreBrowse_GetStoreCategories_Response;
  CStoreBrowse_GetStoreCategories_Response_Category: CStoreBrowse_GetStoreCategories_Response_Category;
  CStoreCatalog_GetDevPageAllAppsLinked_Request: CStoreCatalog_GetDevPageAllAppsLinked_Request;
  CStoreCatalog_GetDevPageAllAppsLinked_Response: CStoreCatalog_GetDevPageAllAppsLinked_Response;
  CStoreCatalog_GetDevPageLinks_Request: CStoreCatalog_GetDevPageLinks_Request;
  CStoreCatalog_GetDevPageLinks_Response: CStoreCatalog_GetDevPageLinks_Response;
  CStoreCatalog_GetDevPagesForPartner_Request: CStoreCatalog_GetDevPagesForPartner_Request;
  CStoreCatalog_GetDevPagesForPartner_Response: CStoreCatalog_GetDevPagesForPartner_Response;
  CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo: CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo;
  CStoreCatalog_SetDevPageLink_Request: CStoreCatalog_SetDevPageLink_Request;
  CStoreCuration_GetListDetails_Request: CStoreCuration_GetListDetails_Request;
  CStoreCuration_GetListDetails_Response: CStoreCuration_GetListDetails_Response;
  CStoreCuration_GetLists_Request: CStoreCuration_GetLists_Request;
  CStoreCuration_GetLists_Response: CStoreCuration_GetLists_Response;
  CStoreCuration_ListDetails: CStoreCuration_ListDetails;
  CStoreCuration_ListDetails_ListItem: CStoreCuration_ListDetails_ListItem;
  CStoreCuration_RecommendedApp: CStoreCuration_RecommendedApp;
  CStoreDiscoveryQueueSettings: CStoreDiscoveryQueueSettings;
  CStoreMarketing_GetFrontPageConfig_Request: CStoreMarketing_GetFrontPageConfig_Request;
  CStoreMarketing_GetFrontPageConfig_Response: CStoreMarketing_GetFrontPageConfig_Response;
  CStoreMarketing_GetItemsToFeature_Request: CStoreMarketing_GetItemsToFeature_Request;
  CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter: CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter;
  CStoreMarketing_GetItemsToFeature_Response: CStoreMarketing_GetItemsToFeature_Response;
  CStoreMarketing_GetItemsToFeature_Response_Spotlight: CStoreMarketing_GetItemsToFeature_Response_Spotlight;
  CStorePageCluster: CStorePageCluster;
  CStorePageCluster_Asset: CStorePageCluster_Asset;
  CStorePageCluster_CapsuleList: CStorePageCluster_CapsuleList;
  CStorePageCluster_Field: CStorePageCluster_Field;
  CStorePageFilter: CStorePageFilter;
  CStorePageFilter_ContentHubFilter: CStorePageFilter_ContentHubFilter;
  CStorePageFilter_ContentHubFilter_OptInInfo: CStorePageFilter_ContentHubFilter_OptInInfo;
  CStorePageFilter_SalePageFilter: CStorePageFilter_SalePageFilter;
  CStorePageFilter_StoreFilter: CStorePageFilter_StoreFilter;
  CStoreQuery_GetItemByUserCombinedTagsPriority_Request: CStoreQuery_GetItemByUserCombinedTagsPriority_Request;
  CStoreQuery_GetItemByUserCombinedTagsPriority_Response: CStoreQuery_GetItemByUserCombinedTagsPriority_Response;
  CStoreQuery_GetItemsByUserRecommendedTags_Request: CStoreQuery_GetItemsByUserRecommendedTags_Request;
  CStoreQuery_GetItemsByUserRecommendedTags_Request_Section: CStoreQuery_GetItemsByUserRecommendedTags_Request_Section;
  CStoreQuery_GetItemsByUserRecommendedTags_Response: CStoreQuery_GetItemsByUserRecommendedTags_Response;
  CStoreQuery_GetItemsByUserRecommendedTags_Response_Section: CStoreQuery_GetItemsByUserRecommendedTags_Response_Section;
  CStoreQuery_MoreLikeThis_Request: CStoreQuery_MoreLikeThis_Request;
  CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions: CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions;
  CStoreQuery_MoreLikeThis_Response: CStoreQuery_MoreLikeThis_Response;
  CStoreQuery_Query_Request: CStoreQuery_Query_Request;
  CStoreQuery_Query_Response: CStoreQuery_Query_Response;
  CStoreQuery_SearchSuggestions_Request: CStoreQuery_SearchSuggestions_Request;
  CStoreQuery_SearchSuggestions_Response: CStoreQuery_SearchSuggestions_Response;
  CStoreQueryFilters: CStoreQueryFilters;
  CStoreQueryFilters_PredefinedFilter: CStoreQueryFilters_PredefinedFilter;
  CStoreQueryFilters_PriceFilters: CStoreQueryFilters_PriceFilters;
  CStoreQueryFilters_TagFilter: CStoreQueryFilters_TagFilter;
  CStoreQueryFilters_TypeFilters: CStoreQueryFilters_TypeFilters;
  CStoreQueryParams: CStoreQueryParams;
  CStoreQueryPerResultMetadata: CStoreQueryPerResultMetadata;
  CStoreQueryResultMetadata: CStoreQueryResultMetadata;
  CStoreTopSellers_GetCountryList_Request: CStoreTopSellers_GetCountryList_Request;
  CStoreTopSellers_GetCountryList_Response: CStoreTopSellers_GetCountryList_Response;
  CStoreTopSellers_GetCountryList_Response_Country: CStoreTopSellers_GetCountryList_Response_Country;
  CStoreTopSellers_GetWeeklyTopSellers_Request: CStoreTopSellers_GetWeeklyTopSellers_Request;
  CStoreTopSellers_GetWeeklyTopSellers_Response: CStoreTopSellers_GetWeeklyTopSellers_Response;
  CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank: CStoreTopSellers_GetWeeklyTopSellers_Response_TopSellersRank;
  CStreamingClientConfig: CStreamingClientConfig;
  CStreamingServerConfig: CStreamingServerConfig;
  CStreamVideoLimit: CStreamVideoLimit;
  CStreamVideoMode: CStreamVideoMode;
  CSupportRefreshTokenAudit: CSupportRefreshTokenAudit;
  CSupportRefreshTokenDescription: CSupportRefreshTokenDescription;
  CSupportRefreshTokenDescription_TokenUsageEvent: CSupportRefreshTokenDescription_TokenUsageEvent;
  CSystemManager_WriteFile_Request: CSystemManager_WriteFile_Request;
  CTimelineEntry: CTimelineEntry;
  CTimelineTag: CTimelineTag;
  CTopAppNewRelease: CTopAppNewRelease;
  CTransportAuth_Authenticate_Request: CTransportAuth_Authenticate_Request;
  CTransportValidation_AddNumbers_Request: CTransportValidation_AddNumbers_Request;
  CTransportValidation_AddNumbers_Response: CTransportValidation_AddNumbers_Response;
  CTransportValidation_AppendToString_Request: CTransportValidation_AppendToString_Request;
  CTransportValidation_AppendToString_Response: CTransportValidation_AppendToString_Response;
  CTransportValidation_CountOrderedBytes_Request: CTransportValidation_CountOrderedBytes_Request;
  CTransportValidation_CountOrderedBytes_Response: CTransportValidation_CountOrderedBytes_Response;
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
  CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails: CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails;
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
  CUserGameActivity_Event: CUserGameActivity_Event;
  CUserGameActivity_GetActivity_Request: CUserGameActivity_GetActivity_Request;
  CUserGameActivity_GetActivity_Response: CUserGameActivity_GetActivity_Response;
  CUserGameNote: CUserGameNote;
  CUserGameNotes_DeleteNote_Request: CUserGameNotes_DeleteNote_Request;
  CUserGameNotes_GetGamesWithNotes_Response: CUserGameNotes_GetGamesWithNotes_Response;
  CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes: CUserGameNotes_GetGamesWithNotes_Response_GameWithNotes;
  CUserGameNotes_GetNotesForGame_Request: CUserGameNotes_GetNotesForGame_Request;
  CUserGameNotes_GetNotesForGame_Response: CUserGameNotes_GetNotesForGame_Response;
  CUserGameNotes_SaveNote_Request: CUserGameNotes_SaveNote_Request;
  CUserGameNotes_SaveNote_Response: CUserGameNotes_SaveNote_Response;
  CUserInterface_CuratorData: CUserInterface_CuratorData;
  CUserInterface_NavData: CUserInterface_NavData;
  CUserNews_Event: CUserNews_Event;
  CUserNews_GetAppDetailsSpotlight_Request: CUserNews_GetAppDetailsSpotlight_Request;
  CUserNews_GetAppDetailsSpotlight_Response: CUserNews_GetAppDetailsSpotlight_Response;
  CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent: CUserNews_GetAppDetailsSpotlight_Response_FeaturedEvent;
  CUserNews_GetUserNews_Request: CUserNews_GetUserNews_Request;
  CUserNews_GetUserNews_Response: CUserNews_GetUserNews_Response;
  CUserNewsAchievementDisplayData: CUserNewsAchievementDisplayData;
  CUserNewsAchievementDisplayData_CAchievement: CUserNewsAchievementDisplayData_CAchievement;
  CUserPlaytimeStats: CUserPlaytimeStats;
  CUserPlaytimeSummaryStats: CUserPlaytimeSummaryStats;
  CUserReviews_BackfillSavedHardware_Request: CUserReviews_BackfillSavedHardware_Request;
  CUserReviews_BackfillSavedHardware_Response: CUserReviews_BackfillSavedHardware_Response;
  CUserReviews_GetFriendsRecommendedApp_Request: CUserReviews_GetFriendsRecommendedApp_Request;
  CUserReviews_GetFriendsRecommendedApp_Response: CUserReviews_GetFriendsRecommendedApp_Response;
  CUserReviews_GetIndividualRecommendations_Request: CUserReviews_GetIndividualRecommendations_Request;
  CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest: CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest;
  CUserReviews_GetIndividualRecommendations_Response: CUserReviews_GetIndividualRecommendations_Response;
  CUserReviews_Recommendation_LoyaltyReaction: CUserReviews_Recommendation_LoyaltyReaction;
  CUserReviews_Recommendation_Tag: CUserReviews_Recommendation_Tag;
  CUserReviews_Recommendation_Tag_Range: CUserReviews_Recommendation_Tag_Range;
  CUserReviews_Update_Request: CUserReviews_Update_Request;
  CUserStoreVisit_GetFrequentlyVisitedPages_Response: CUserStoreVisit_GetFrequentlyVisitedPages_Response;
  CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs: CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs;
  CUserStoreVisit_GetMostVisitedItemsOnStore_Request: CUserStoreVisit_GetMostVisitedItemsOnStore_Request;
  CUserStoreVisit_GetMostVisitedItemsOnStore_Response: CUserStoreVisit_GetMostVisitedItemsOnStore_Response;
  CUserStoreVisitData: CUserStoreVisitData;
  CUserStoreVisitData_RecentApps: CUserStoreVisitData_RecentApps;
  CUserTagStats: CUserTagStats;
  CUserTagStats_Tag: CUserTagStats_Tag;
  CUserYearInReviewStats: CUserYearInReviewStats;
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
  CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders: CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders;
  CVideo_GetVideoBookmarks_Request: CVideo_GetVideoBookmarks_Request;
  CVideo_GetVideoBookmarks_Response: CVideo_GetVideoBookmarks_Response;
  CVideo_SetVideoBookmark_Notification: CVideo_SetVideoBookmark_Notification;
  CVideo_UnlockedH264_Notification: CVideo_UnlockedH264_Notification;
  CVideoManagerClipID: CVideoManagerClipID;
  CVirtualItemRewardDefinition: CVirtualItemRewardDefinition;
  CVirtualMenuCreateDestroy: CVirtualMenuCreateDestroy;
  CVirtualMenuCreateDestroy_TouchMenuKey: CVirtualMenuCreateDestroy_TouchMenuKey;
  CVirtualMenuKey: CVirtualMenuKey;
  CVoiceChat_AllMembersStatus_Notification: CVoiceChat_AllMembersStatus_Notification;
  CVoiceChat_AnswerOneOnOneChat_Request: CVoiceChat_AnswerOneOnOneChat_Request;
  CVoiceChat_EndOneOnOneChat_Request: CVoiceChat_EndOneOnOneChat_Request;
  CVoiceChat_LeaveOneOnOneChat_Request: CVoiceChat_LeaveOneOnOneChat_Request;
  CVoiceChat_LeaveVoiceChat_Request: CVoiceChat_LeaveVoiceChat_Request;
  CVoiceChat_OneOnOneChatRequested_Notification: CVoiceChat_OneOnOneChatRequested_Notification;
  CVoiceChat_OneOnOneChatRequestResponse_Notification: CVoiceChat_OneOnOneChatRequestResponse_Notification;
  CVoiceChat_RequestOneOnOneChat_Request: CVoiceChat_RequestOneOnOneChat_Request;
  CVoiceChat_RequestOneOnOneChat_Response: CVoiceChat_RequestOneOnOneChat_Response;
  CVoiceChat_UpdateUserVideoStatus_Request: CVoiceChat_UpdateUserVideoStatus_Request;
  CVoiceChat_UpdateVoiceChatWebRTCData_Request: CVoiceChat_UpdateVoiceChatWebRTCData_Request;
  CVoiceChat_UpdateVoiceChatWebRTCData_Response: CVoiceChat_UpdateVoiceChatWebRTCData_Response;
  CVoiceChat_UploadClientVoiceChatLogs_Request: CVoiceChat_UploadClientVoiceChatLogs_Request;
  CVoiceChat_UserJoinedVoiceChat_Notification: CVoiceChat_UserJoinedVoiceChat_Notification;
  CVoiceChat_UserLeftVoiceChat_Notification: CVoiceChat_UserLeftVoiceChat_Notification;
  CVoiceChat_UserVoiceStatus_Notification: CVoiceChat_UserVoiceStatus_Notification;
  CVoiceChat_VoiceChatEnded_Notification: CVoiceChat_VoiceChatEnded_Notification;
  CVRGamepadUI_Frame: CVRGamepadUI_Frame;
  CVRGamepadUI_Frame_FrameControls: CVRGamepadUI_Frame_FrameControls;
  CVRGamepadUI_Frame_FrameControls_Item: CVRGamepadUI_Frame_FrameControls_Item;
  CVRGamepadUI_Frame_FrameMenu: CVRGamepadUI_Frame_FrameMenu;
  CVRGamepadUI_Frame_FrameMenu_Item: CVRGamepadUI_Frame_FrameMenu_Item;
  CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions: CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions;
  CVRGamepadUI_Message_DashboardActionInvoked_Request: CVRGamepadUI_Message_DashboardActionInvoked_Request;
  CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request: CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request;
  CVRGamepadUI_Message_DashboardTabClicked_Request: CVRGamepadUI_Message_DashboardTabClicked_Request;
  CVRGamepadUI_Message_Error_Response: CVRGamepadUI_Message_Error_Response;
  CVRGamepadUI_Message_ExecuteSteamURL_Request: CVRGamepadUI_Message_ExecuteSteamURL_Request;
  CVRGamepadUI_Message_Header: CVRGamepadUI_Message_Header;
  CVRGamepadUI_Message_HideDashboardPopup_Request: CVRGamepadUI_Message_HideDashboardPopup_Request;
  CVRGamepadUI_Message_RemoteVideoStream_Request: CVRGamepadUI_Message_RemoteVideoStream_Request;
  CVRGamepadUI_Message_SetCurrentLanguage_Request: CVRGamepadUI_Message_SetCurrentLanguage_Request;
  CVRGamepadUI_Message_SetDisplayBrightness_Request: CVRGamepadUI_Message_SetDisplayBrightness_Request;
  CVRGamepadUI_Message_ShowDashboardPopup_Request: CVRGamepadUI_Message_ShowDashboardPopup_Request;
  CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition: CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition;
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Position: CVRGamepadUI_Message_ShowDashboardPopup_Request_Position;
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect: CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect;
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation: CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation;
  CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale: CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale;
  CVRGamepadUI_Message_ShowGame_Request: CVRGamepadUI_Message_ShowGame_Request;
  CVRGamepadUI_Message_ShowOverlay_Request: CVRGamepadUI_Message_ShowOverlay_Request;
  CVRGamepadUI_Message_UpdateFrameUIs_Request: CVRGamepadUI_Message_UpdateFrameUIs_Request;
  CVRGamepadUI_Message_UpdateFrameUIs_Response: CVRGamepadUI_Message_UpdateFrameUIs_Response;
  CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult: CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult;
  CVRGamepadUIShared_Action: CVRGamepadUIShared_Action;
  CVRGamepadUIShared_DEPRECATED_DashboardActionIcon: CVRGamepadUIShared_DEPRECATED_DashboardActionIcon;
  CVRGamepadUIShared_DEPRECATED_DashboardBarAction: CVRGamepadUIShared_DEPRECATED_DashboardBarAction;
  CVRGamepadUIShared_DEPRECATED_DashboardTabIcon: CVRGamepadUIShared_DEPRECATED_DashboardTabIcon;
  CVRGamepadUIShared_Icon: CVRGamepadUIShared_Icon;
  CVRGamepadUIShared_PathProperty_DashboardBarActions: CVRGamepadUIShared_PathProperty_DashboardBarActions;
  CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton: CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton;
  CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem: CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem;
  CVRGamepadUIShared_PathProperty_DashboardTabs: CVRGamepadUIShared_PathProperty_DashboardTabs;
  CVRGamepadUIShared_PathProperty_DashboardTabs_Tab: CVRGamepadUIShared_PathProperty_DashboardTabs_Tab;
  CVRGamepadUIShared_PathProperty_DesktopWindows: CVRGamepadUIShared_PathProperty_DesktopWindows;
  CVRGamepadUIShared_PathProperty_DesktopWindows_Window: CVRGamepadUIShared_PathProperty_DesktopWindows_Window;
  CVRGamepadUIShared_PathProperty_HMDSettings: CVRGamepadUIShared_PathProperty_HMDSettings;
  CVRGamepadUIShared_PathProperty_PowerOptions: CVRGamepadUIShared_PathProperty_PowerOptions;
  CVRGamepadUIShared_PathProperty_VRVersionInfo: CVRGamepadUIShared_PathProperty_VRVersionInfo;
  CWebRTC_WebRTCSessionConnected_Notification: CWebRTC_WebRTCSessionConnected_Notification;
  CWebRTC_WebRTCUpdateRemoteDescription_Notification: CWebRTC_WebRTCUpdateRemoteDescription_Notification;
  CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping: CWebRTC_WebRTCUpdateRemoteDescription_Notification_CSSRCToAccountIDMapping;
  CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request: CWebRTCClient_AcknowledgeUpdatedRemoteDescription_Request;
  CWebRTCClient_InitiateWebRTCConnection_Request: CWebRTCClient_InitiateWebRTCConnection_Request;
  CWebRTCClient_InitiateWebRTCConnection_Response: CWebRTCClient_InitiateWebRTCConnection_Response;
  CWebRTCClient_UpdateWebRTCConnection_Request: CWebRTCClient_UpdateWebRTCConnection_Request;
  CWebRTCClient_UpdateWebRTCConnection_Response: CWebRTCClient_UpdateWebRTCConnection_Response;
  CWishlist_AddToWishlist_Request: CWishlist_AddToWishlist_Request;
  CWishlist_AddToWishlist_Response: CWishlist_AddToWishlist_Response;
  CWishlist_GetWishlist_Request: CWishlist_GetWishlist_Request;
  CWishlist_GetWishlist_Response: CWishlist_GetWishlist_Response;
  CWishlist_GetWishlist_Response_WishlistItem: CWishlist_GetWishlist_Response_WishlistItem;
  CWishlist_GetWishlistItemCount_Request: CWishlist_GetWishlistItemCount_Request;
  CWishlist_GetWishlistItemCount_Response: CWishlist_GetWishlistItemCount_Response;
  CWishlist_GetWishlistItemsOnSale_Request: CWishlist_GetWishlistItemsOnSale_Request;
  CWishlist_GetWishlistItemsOnSale_Response: CWishlist_GetWishlistItemsOnSale_Response;
  CWishlist_GetWishlistItemsOnSale_Response_WishlistItem: CWishlist_GetWishlistItemsOnSale_Response_WishlistItem;
  CWishlist_GetWishlistSortedFiltered_Request: CWishlist_GetWishlistSortedFiltered_Request;
  CWishlist_GetWishlistSortedFiltered_Response: CWishlist_GetWishlistSortedFiltered_Response;
  CWishlist_GetWishlistSortedFiltered_Response_WishlistItem: CWishlist_GetWishlistSortedFiltered_Response_WishlistItem;
  CWishlist_RemoveFromWishlist_Request: CWishlist_RemoveFromWishlist_Request;
  CWishlist_RemoveFromWishlist_Response: CWishlist_RemoveFromWishlist_Response;
  CWishlistFilters: CWishlistFilters;
  CWishlistFilters_ExcludeTypeFilters: CWishlistFilters_ExcludeTypeFilters;
  CWishlistFilters_SteamDeckFilters: CWishlistFilters_SteamDeckFilters;
  CYearInReviewPerformanceStats: CYearInReviewPerformanceStats;
  DetectedAppContent: DetectedAppContent;
  FamilyGroupFormerMember: FamilyGroupFormerMember;
  FamilyGroupMember: FamilyGroupMember;
  FamilyGroupMembership: FamilyGroupMembership;
  FamilyGroupPendingInvite: FamilyGroupPendingInvite;
  FamilyGroupPendingInviteForUser: FamilyGroupPendingInviteForUser;
  GameListEntry: GameListEntry;
  GetBroadcastChannelEntry: GetBroadcastChannelEntry;
  LoyaltyRewardDefinition: LoyaltyRewardDefinition;
  LoyaltyRewardDefinition_BadgeData: LoyaltyRewardDefinition_BadgeData;
  LoyaltyRewardDefinition_CommunityItemData: LoyaltyRewardDefinition_CommunityItemData;
  LoyaltyRewardPurchaseBonus: LoyaltyRewardPurchaseBonus;
  MembershipInvite: MembershipInvite;
  ParentalApp: ParentalApp;
  ParentalFeatureRequest: ParentalFeatureRequest;
  ParentalPlaytimeDay: ParentalPlaytimeDay;
  ParentalPlaytimeRequest: ParentalPlaytimeRequest;
  ParentalPlaytimeRestrictions: ParentalPlaytimeRestrictions;
  ParentalSettings: ParentalSettings;
  ParentalTemporaryPlaytimeRestrictions: ParentalTemporaryPlaytimeRestrictions;
  PerFriendPreferences: PerFriendPreferences;
  ProfileCustomization: ProfileCustomization;
  ProfileCustomizationSlot: ProfileCustomizationSlot;
  ProfileItem: ProfileItem;
  ProfileItem_ProfileColor: ProfileItem_ProfileColor;
  ProfilePreferences: ProfilePreferences;
  ProfileTheme: ProfileTheme;
  PublishedFileAuthorSnapshot: PublishedFileAuthorSnapshot;
  PublishedFileDetails: PublishedFileDetails;
  PublishedFileDetails_Child: PublishedFileDetails_Child;
  PublishedFileDetails_ForSaleData: PublishedFileDetails_ForSaleData;
  PublishedFileDetails_KVTag: PublishedFileDetails_KVTag;
  PublishedFileDetails_PlaytimeStats: PublishedFileDetails_PlaytimeStats;
  PublishedFileDetails_Preview: PublishedFileDetails_Preview;
  PublishedFileDetails_Reaction: PublishedFileDetails_Reaction;
  PublishedFileDetails_Tag: PublishedFileDetails_Tag;
  PublishedFileDetails_VoteData: PublishedFileDetails_VoteData;
  PublishedFileSubSection: PublishedFileSubSection;
  PurchaseRequest: PurchaseRequest;
  RecommendationDetails: RecommendationDetails;
  SaleItemRewardGrant: SaleItemRewardGrant;
  SaleReward_ItemDefinition: SaleReward_ItemDefinition;
  ServerMessage: ServerMessage;
  SteamAwardsUserVote: SteamAwardsUserVote;
  SteamNotificationData: SteamNotificationData;
  SteamNotificationPreference: SteamNotificationPreference;
  StoreAppSimilarityPriorityOptions: StoreAppSimilarityPriorityOptions;
  StoreBrowseContext: StoreBrowseContext;
  StoreBrowseFilterFailure: StoreBrowseFilterFailure;
  StoreBrowseItemDataRequest: StoreBrowseItemDataRequest;
  StoreCapsule: StoreCapsule;
  StoreGameRating: StoreGameRating;
  StoreItem: StoreItem;
  StoreItem_Assets: StoreItem_Assets;
  StoreItem_BasicInfo: StoreItem_BasicInfo;
  StoreItem_BasicInfo_CreatorHomeLink: StoreItem_BasicInfo_CreatorHomeLink;
  StoreItem_Categories: StoreItem_Categories;
  StoreItem_FreeWeekend: StoreItem_FreeWeekend;
  StoreItem_IncludedItems: StoreItem_IncludedItems;
  StoreItem_Link: StoreItem_Link;
  StoreItem_Platforms: StoreItem_Platforms;
  StoreItem_Platforms_VRSupport: StoreItem_Platforms_VRSupport;
  StoreItem_PurchaseOption: StoreItem_PurchaseOption;
  StoreItem_PurchaseOption_Discount: StoreItem_PurchaseOption_Discount;
  StoreItem_PurchaseOption_RecurrenceInfo: StoreItem_PurchaseOption_RecurrenceInfo;
  StoreItem_RelatedItems: StoreItem_RelatedItems;
  StoreItem_ReleaseInfo: StoreItem_ReleaseInfo;
  StoreItem_Reviews: StoreItem_Reviews;
  StoreItem_Reviews_StoreReviewSummary: StoreItem_Reviews_StoreReviewSummary;
  StoreItem_Screenshots: StoreItem_Screenshots;
  StoreItem_Screenshots_Screenshot: StoreItem_Screenshots_Screenshot;
  StoreItem_SupportedLanguage: StoreItem_SupportedLanguage;
  StoreItem_Tag: StoreItem_Tag;
  StoreItem_Trailers: StoreItem_Trailers;
  StoreItem_Trailers_AdaptiveTrailer: StoreItem_Trailers_AdaptiveTrailer;
  StoreItem_Trailers_Trailer: StoreItem_Trailers_Trailer;
  StoreItem_Trailers_VideoSource: StoreItem_Trailers_VideoSource;
  StoreItemID: StoreItemID;
  UserContentDescriptorPreferences: UserContentDescriptorPreferences;
  UserContentDescriptorPreferences_ContentDescriptor: UserContentDescriptorPreferences_ContentDescriptor;
  UserSystemInformation: UserSystemInformation;
  VideoBookmark: VideoBookmark;
}
