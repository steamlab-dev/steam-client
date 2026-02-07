/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type Long from "long";

export const EGCSystemMsg = {
  k_EGCMsgInvalid: 0,
  k_EGCMsgMulti: 1,
  k_EGCMsgGenericReply: 10,
  k_EGCMsgSystemBase: 50,
  k_EGCMsgAchievementAwarded: 51,
  k_EGCMsgConCommand: 52,
  k_EGCMsgStartPlaying: 53,
  k_EGCMsgStopPlaying: 54,
  k_EGCMsgStartGameserver: 55,
  k_EGCMsgStopGameserver: 56,
  k_EGCMsgWGRequest: 57,
  k_EGCMsgWGResponse: 58,
  k_EGCMsgGetUserGameStatsSchema: 59,
  k_EGCMsgGetUserGameStatsSchemaResponse: 60,
  k_EGCMsgGetUserStatsDEPRECATED: 61,
  k_EGCMsgGetUserStatsResponse: 62,
  k_EGCMsgAppInfoUpdated: 63,
  k_EGCMsgValidateSession: 64,
  k_EGCMsgValidateSessionResponse: 65,
  k_EGCMsgLookupAccountFromInput: 66,
  k_EGCMsgSendHTTPRequest: 67,
  k_EGCMsgSendHTTPRequestResponse: 68,
  k_EGCMsgPreTestSetup: 69,
  k_EGCMsgRecordSupportAction: 70,
  k_EGCMsgGetAccountDetails_DEPRECATED: 71,
  k_EGCMsgReceiveInterAppMessage: 73,
  k_EGCMsgFindAccounts: 74,
  k_EGCMsgPostAlert: 75,
  k_EGCMsgGetLicenses: 76,
  k_EGCMsgGetUserStats: 77,
  k_EGCMsgGetCommands: 78,
  k_EGCMsgGetCommandsResponse: 79,
  k_EGCMsgAddFreeLicense: 80,
  k_EGCMsgAddFreeLicenseResponse: 81,
  k_EGCMsgGetIPLocation: 82,
  k_EGCMsgGetIPLocationResponse: 83,
  k_EGCMsgSystemStatsSchema: 84,
  k_EGCMsgGetSystemStats: 85,
  k_EGCMsgGetSystemStatsResponse: 86,
  k_EGCMsgSendEmail: 87,
  k_EGCMsgSendEmailResponse: 88,
  k_EGCMsgGetEmailTemplate: 89,
  k_EGCMsgGetEmailTemplateResponse: 90,
  k_EGCMsgGrantGuestPass: 91,
  k_EGCMsgGrantGuestPassResponse: 92,
  k_EGCMsgGetAccountDetails: 93,
  k_EGCMsgGetAccountDetailsResponse: 94,
  k_EGCMsgGetPersonaNames: 95,
  k_EGCMsgGetPersonaNamesResponse: 96,
  k_EGCMsgMultiplexMsg: 97,
  k_EGCMsgMultiplexMsgResponse: 98,
  k_EGCMsgWebAPIRegisterInterfaces: 101,
  k_EGCMsgWebAPIJobRequest: 102,
  k_EGCMsgWebAPIJobRequestHttpResponse: 104,
  k_EGCMsgWebAPIJobRequestForwardResponse: 105,
  k_EGCMsgMemCachedGet: 200,
  k_EGCMsgMemCachedGetResponse: 201,
  k_EGCMsgMemCachedSet: 202,
  k_EGCMsgMemCachedDelete: 203,
  k_EGCMsgMemCachedStats: 204,
  k_EGCMsgMemCachedStatsResponse: 205,
  k_EGCMsgMasterSetDirectory: 220,
  k_EGCMsgMasterSetDirectoryResponse: 221,
  k_EGCMsgMasterSetWebAPIRouting: 222,
  k_EGCMsgMasterSetWebAPIRoutingResponse: 223,
  k_EGCMsgMasterSetClientMsgRouting: 224,
  k_EGCMsgMasterSetClientMsgRoutingResponse: 225,
  k_EGCMsgSetOptions: 226,
  k_EGCMsgSetOptionsResponse: 227,
  k_EGCMsgSystemBase2: 500,
  k_EGCMsgGetPurchaseTrustStatus: 501,
  k_EGCMsgGetPurchaseTrustStatusResponse: 502,
  k_EGCMsgUpdateSession: 503,
  k_EGCMsgGCAccountVacStatusChange: 504,
  k_EGCMsgCheckFriendship: 505,
  k_EGCMsgCheckFriendshipResponse: 506,
  k_EGCMsgGetPartnerAccountLink: 507,
  k_EGCMsgGetPartnerAccountLinkResponse: 508,
  k_EGCMsgDPPartnerMicroTxns: 512,
  k_EGCMsgDPPartnerMicroTxnsResponse: 513,
  k_EGCMsgVacVerificationChange: 518,
  k_EGCMsgAccountPhoneNumberChange: 519,
  k_EGCMsgInviteUserToLobby: 523,
  k_EGCMsgGetGamePersonalDataCategoriesRequest: 524,
  k_EGCMsgGetGamePersonalDataCategoriesResponse: 525,
  k_EGCMsgGetGamePersonalDataEntriesRequest: 526,
  k_EGCMsgGetGamePersonalDataEntriesResponse: 527,
  k_EGCMsgTerminateGamePersonalDataEntriesRequest: 528,
  k_EGCMsgTerminateGamePersonalDataEntriesResponse: 529,
  k_EGCMsgRecurringSubscriptionStatusChange: 530,
  k_EGCMsgDirectServiceMethod: 531,
  k_EGCMsgDirectServiceMethodResponse: 532,
} as const;

export type EGCSystemMsg = (typeof EGCSystemMsg)[keyof typeof EGCSystemMsg];

export const ESOMsg = {
  k_ESOMsg_Create: 21,
  k_ESOMsg_Update: 22,
  k_ESOMsg_Destroy: 23,
  k_ESOMsg_CacheSubscribed: 24,
  k_ESOMsg_CacheUnsubscribed: 25,
  k_ESOMsg_UpdateMultiple: 26,
  k_ESOMsg_CacheSubscriptionCheck: 27,
  k_ESOMsg_CacheSubscriptionRefresh: 28,
} as const;

export type ESOMsg = (typeof ESOMsg)[keyof typeof ESOMsg];

export const EGCBaseClientMsg = {
  k_EMsgGCClientWelcome: 4004,
  k_EMsgGCServerWelcome: 4005,
  k_EMsgGCClientHello: 4006,
  k_EMsgGCServerHello: 4007,
  k_EMsgGCClientConnectionStatus: 4009,
  k_EMsgGCServerConnectionStatus: 4010,
  k_EMsgGCClientHelloPartner: 4011,
  k_EMsgGCClientHelloPW: 4012,
  k_EMsgGCClientHelloR2: 4013,
  k_EMsgGCClientHelloR3: 4014,
  k_EMsgGCClientHelloR4: 4015,
} as const;

export type EGCBaseClientMsg = (typeof EGCBaseClientMsg)[keyof typeof EGCBaseClientMsg];

export const EGCToGCMsg = {
  k_EGCToGCMsgMasterAck: 150,
  k_EGCToGCMsgMasterAckResponse: 151,
  k_EGCToGCMsgRouted: 152,
  k_EGCToGCMsgRoutedReply: 153,
  k_EMsgUpdateSessionIP: 154,
  k_EMsgRequestSessionIP: 155,
  k_EMsgRequestSessionIPResponse: 156,
  k_EGCToGCMsgMasterStartupComplete: 157,
} as const;

export type EGCToGCMsg = (typeof EGCToGCMsg)[keyof typeof EGCToGCMsg];

export const ECommunityItemClass = {
  k_ECommunityItemClass_Invalid: 0,
  k_ECommunityItemClass_Badge: 1,
  k_ECommunityItemClass_GameCard: 2,
  k_ECommunityItemClass_ProfileBackground: 3,
  k_ECommunityItemClass_Emoticon: 4,
  k_ECommunityItemClass_BoosterPack: 5,
  k_ECommunityItemClass_Consumable: 6,
  k_ECommunityItemClass_GameGoo: 7,
  k_ECommunityItemClass_ProfileModifier: 8,
  k_ECommunityItemClass_Scene: 9,
  k_ECommunityItemClass_SalienItem: 10,
} as const;

export type ECommunityItemClass = (typeof ECommunityItemClass)[keyof typeof ECommunityItemClass];

export const ECommunityItemAttribute = {
  k_ECommunityItemAttribute_Invalid: 0,
  k_ECommunityItemAttribute_CardBorder: 1,
  k_ECommunityItemAttribute_Level: 2,
  k_ECommunityItemAttribute_IssueNumber: 3,
  k_ECommunityItemAttribute_TradableTime: 4,
  k_ECommunityItemAttribute_StorePackageID: 5,
  k_ECommunityItemAttribute_CommunityItemAppID: 6,
  k_ECommunityItemAttribute_CommunityItemType: 7,
  k_ECommunityItemAttribute_ProfileModiferEnabled: 8,
  k_ECommunityItemAttribute_ExpiryTime: 9,
} as const;

export type ECommunityItemAttribute =
  (typeof ECommunityItemAttribute)[keyof typeof ECommunityItemAttribute];

export interface CMsgGCHVacVerificationChange {
  steamid?: Long;
  appid?: number;
  is_verified?: boolean;
}

export interface CMsgGCHAccountPhoneNumberChange {
  steamid?: Long;
  appid?: number;
  phone_id?: Long;
  is_verified?: boolean;
  is_identifying?: boolean;
}

export interface CMsgGCHInviteUserToLobby {
  steamid?: Long;
  appid?: number;
  steamid_invited?: Long;
  steamid_lobby?: Long;
}

export interface CMsgGCHRecurringSubscriptionStatusChange {
  steamid?: Long;
  appid?: number;
  agreementid?: Long;
  active?: boolean;
}

export interface CQuest_PublisherAddCommunityItemsToPlayer_Request {
  steamid?: Long;
  appid?: number;
  match_item_type?: number;
  match_item_class?: number;
  prefix_item_name?: string;
  attributes?: CQuest_PublisherAddCommunityItemsToPlayer_Request.Attribute[];
  note?: string;
}

export namespace CQuest_PublisherAddCommunityItemsToPlayer_Request {
  export interface Attribute {
    attribute?: number;
    value?: Long;
  }
}

export interface CQuest_PublisherAddCommunityItemsToPlayer_Response {
  items_matched?: number;
  items_granted?: number;
}

export interface CCommunity_GamePersonalDataCategoryInfo {
  type?: string;
  localization_token?: string;
  template_file?: string;
}

export interface CCommunity_GetGamePersonalDataCategories_Request {
  appid?: number;
}

export interface CCommunity_GetGamePersonalDataCategories_Response {
  categories?: CCommunity_GamePersonalDataCategoryInfo[];
  app_assets_basename?: string;
}

export interface CCommunity_GetGamePersonalDataEntries_Request {
  appid?: number;
  steamid?: Long;
  type?: string;
  continue_token?: string;
}

export interface CCommunity_GetGamePersonalDataEntries_Response {
  gceresult?: number;
  entries?: string[];
  continue_token?: string;
  continue_text?: string;
}

export interface CCommunity_TerminateGamePersonalDataEntries_Request {
  appid?: number;
  steamid?: Long;
}

export interface CCommunity_TerminateGamePersonalDataEntries_Response {
  gceresult?: number;
}
