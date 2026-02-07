/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { AccountCartService } from "../protos-definitions/webui/service_accountcart";
import type { AccountLinkingService } from "../protos-definitions/webui/service_accountlinking";
import type { AccountPrivacyService } from "../protos-definitions/webui/service_accountprivacy";
import type {
  AccountPrivateAppsClientService,
  AccountPrivateAppsService,
} from "../protos-definitions/webui/service_accountprivateapps";
import type { AchievementsService } from "../protos-definitions/webui/service_achievements";
import type { AssetSetPublishingService } from "../protos-definitions/webui/service_assetsetpublishing";
import type { AuctionService } from "../protos-definitions/webui/service_auction";
import type { AuthenticationService } from "../protos-definitions/webui/service_authentication";
import type { AuthenticationSupportService } from "../protos-definitions/webui/service_authenticationsupport";
import type { BillingService } from "../protos-definitions/webui/service_billing";
import type { BluetoothManagerService } from "../protos-definitions/webui/service_bluetoothmanager";
import type {
  BroadcastClientService,
  BroadcastService,
} from "../protos-definitions/webui/service_broadcast";
import type { BuildManagementService } from "../protos-definitions/webui/service_buildmanagement";
import type { ChatService } from "../protos-definitions/webui/service_chat";
import type {
  ChatRoomClientService,
  ChatRoomService,
} from "../protos-definitions/webui/service_chatroom";
import type {
  ChatUsabilityClientService,
  ChatUsabilityService,
} from "../protos-definitions/webui/service_chatusability";
import type { CheckoutService } from "../protos-definitions/webui/service_checkout";
import type { ClanService } from "../protos-definitions/webui/service_clan";
import type { ClanChatRoomsService } from "../protos-definitions/webui/service_clanchatrooms";
import type { ClanFAQSService } from "../protos-definitions/webui/service_clanfaqs";
import type { ClientCommService } from "../protos-definitions/webui/service_clientcomm";
import type { ClientMetricsService } from "../protos-definitions/webui/service_clientmetrics";
import type { CloudClientService, CloudService } from "../protos-definitions/webui/service_cloud";
import type {
  CloudConfigStoreClientService,
  CloudConfigStoreService,
} from "../protos-definitions/webui/service_cloudconfigstore";
import type { CloudGamingService } from "../protos-definitions/webui/service_cloudgaming";
import type { CommunityService } from "../protos-definitions/webui/service_community";
import type { ContentModerationService } from "../protos-definitions/webui/service_contentmoderation";
import type { ContentServerConfigService } from "../protos-definitions/webui/service_contentserverconfig";
import type { ContentServerDirectoryService } from "../protos-definitions/webui/service_contentserverdirectory";
import type { DailyDealService } from "../protos-definitions/webui/service_dailydeal";
import type { DepotContentDetectionService } from "../protos-definitions/webui/service_depotcontentdetection";
import type { EconService } from "../protos-definitions/webui/service_econ";
import type { EmbeddedClientService } from "../protos-definitions/webui/service_embedded";
import type { ExperimentServiceService } from "../protos-definitions/webui/service_experimentservice";
import type {
  FamilyGroupsClientService,
  FamilyGroupsService,
} from "../protos-definitions/webui/service_familygroups";
import type { ForumsService } from "../protos-definitions/webui/service_forums";
import type { FovasVideoService } from "../protos-definitions/webui/service_fovasvideo";
import type {
  FriendMessagesClientService,
  FriendMessagesService,
} from "../protos-definitions/webui/service_friendmessages";
import type {
  FriendsListClientService,
  FriendsListService,
} from "../protos-definitions/webui/service_friendslist";
import type { GameNotesService } from "../protos-definitions/webui/service_gamenotes";
import type { GamePerformanceStatsService } from "../protos-definitions/webui/service_gameperformancestats";
import type { GameRecordingService } from "../protos-definitions/webui/service_gamerecording";
import type { GameRecordingClipService } from "../protos-definitions/webui/service_gamerecordingclip";
import type { GameRecordingDebugService } from "../protos-definitions/webui/service_gamerecordingdebug";
import type { GamescopeService } from "../protos-definitions/webui/service_gamescope";
import type { HardwareUpdateService } from "../protos-definitions/webui/service_hardwareupdate";
import type { HelpRequestLogsService } from "../protos-definitions/webui/service_helprequestlogs";
import type { LEDManagerService } from "../protos-definitions/webui/service_ledmanager";
import type { LoyaltyRewardsService } from "../protos-definitions/webui/service_loyaltyrewards";
import type { MarketingMessagesService } from "../protos-definitions/webui/service_marketingmessages";
import type { MDSAdminService } from "../protos-definitions/webui/service_mdsadmin";
import type { MobileAppService } from "../protos-definitions/webui/service_mobileapp";
import type { MobileAuthService } from "../protos-definitions/webui/service_mobileauth";
import type { MobileDeviceService } from "../protos-definitions/webui/service_mobiledevice";
import type { MobilePerAccountService } from "../protos-definitions/webui/service_mobileperaccount";
import type { NewsService } from "../protos-definitions/webui/service_news";
import type {
  ParentalClientService,
  ParentalService,
} from "../protos-definitions/webui/service_parental";
import type { PartnerAppNotesService } from "../protos-definitions/webui/service_partnerappnotes";
import type { PartnerDeadlineService } from "../protos-definitions/webui/service_partnerdeadline";
import type { PartnerDismissService } from "../protos-definitions/webui/service_partnerdismiss";
import type { PartnerMeetSteamService } from "../protos-definitions/webui/service_partnermeetsteam";
import type { PartnerMembershipInviteService } from "../protos-definitions/webui/service_partnermembershipinvite";
import type { PartnerStoreBrowseService } from "../protos-definitions/webui/service_partnerstorebrowse";
import type { PhoneService } from "../protos-definitions/webui/service_phone";
import type { PhysicalGoodsService } from "../protos-definitions/webui/service_physicalgoods";
import type {
  PlayerClientService,
  PlayerService,
} from "../protos-definitions/webui/service_player";
import type { PlaytestService } from "../protos-definitions/webui/service_playtest";
import type { PromotionEventInvitesService } from "../protos-definitions/webui/service_promotioneventinvites";
import type { PromotionPlanningService } from "../protos-definitions/webui/service_promotionplanning";
import type { PromotionStatsService } from "../protos-definitions/webui/service_promotionstats";
import type {
  PublishedFileClientService,
  PublishedFileService,
} from "../protos-definitions/webui/service_publishedfile";
import type { PublishingService } from "../protos-definitions/webui/service_publishing";
import type { QuestService } from "../protos-definitions/webui/service_quest";
import type { RemoteClientService } from "../protos-definitions/webui/service_remote";
import type { RemoteClientSteamClientService } from "../protos-definitions/webui/service_remoteclientsteam";
import type { SaleFeatureService } from "../protos-definitions/webui/service_salefeature";
import type { SaleItemRewardsService } from "../protos-definitions/webui/service_saleitemrewards";
import type { SharedJSContextService } from "../protos-definitions/webui/service_sharedjscontext";
import type { ShoppingCartService } from "../protos-definitions/webui/service_shoppingcart";
import type { SleepManagerService } from "../protos-definitions/webui/service_sleepmanager";
import type { SteamAwardsService } from "../protos-definitions/webui/service_steamawards";
import type { SteamChartsService } from "../protos-definitions/webui/service_steamcharts";
import type { SteamEngineService } from "../protos-definitions/webui/service_steamengine";
import type { SteamInputManagerService } from "../protos-definitions/webui/service_steaminputmanager";
import type { SteamLearnService } from "../protos-definitions/webui/service_steamlearn";
import type {
  SteamNotificationClientService,
  SteamNotificationService,
} from "../protos-definitions/webui/service_steamnotification";
import type { SteamOSManagerService } from "../protos-definitions/webui/service_steamosmanager";
import type { SteamOSSLSService } from "../protos-definitions/webui/service_steamossls";
import type { SteamTVService } from "../protos-definitions/webui/service_steamtv";
import type { StorageDeviceManagerService } from "../protos-definitions/webui/service_storagedevicemanager";
import type { StoreClientService, StoreService } from "../protos-definitions/webui/service_store";
import type { StoreAppSimilarityService } from "../protos-definitions/webui/service_storeappsimilarity";
import type { StoreBrowseService } from "../protos-definitions/webui/service_storebrowse";
import type { StoreCatalogService } from "../protos-definitions/webui/service_storecatalog";
import type { StoreCurationService } from "../protos-definitions/webui/service_storecuration";
import type { StoreMarketingService } from "../protos-definitions/webui/service_storemarketing";
import type { StoreQueryService } from "../protos-definitions/webui/service_storequery";
import type { StoreSalesService } from "../protos-definitions/webui/service_storesales";
import type { StoreTopSellersService } from "../protos-definitions/webui/service_storetopsellers";
import type { SystemManagerService } from "../protos-definitions/webui/service_systemmanager";
import type { Test_TransportErrorService } from "../protos-definitions/webui/service_test_transporterror";
import type { TransportAuthService } from "../protos-definitions/webui/service_transportauth";
import type {
  TransportValidationClientService,
  TransportValidationService,
} from "../protos-definitions/webui/service_transportvalidation";
import type { TwoFactorService } from "../protos-definitions/webui/service_twofactor";
import type { UserService } from "../protos-definitions/webui/service_user";
import type { UserAccountService } from "../protos-definitions/webui/service_useraccount";
import type { UserGameActivityService } from "../protos-definitions/webui/service_usergameactivity";
import type { UserGameNotesService } from "../protos-definitions/webui/service_usergamenotes";
import type { UserNewsService } from "../protos-definitions/webui/service_usernews";
import type { UserReviewsService } from "../protos-definitions/webui/service_userreviews";
import type { UserStoreVisitService } from "../protos-definitions/webui/service_userstorevisit";
import type { VideoClientService, VideoService } from "../protos-definitions/webui/service_video";
import type { VideoClipService } from "../protos-definitions/webui/service_videoclip";
import type {
  VoiceChatClientService,
  VoiceChatService,
} from "../protos-definitions/webui/service_voicechat";
import type {
  WebRTCClientNotificationsService,
  WebRTCClientService,
} from "../protos-definitions/webui/service_webrtc";
import type { WishlistService } from "../protos-definitions/webui/service_wishlist";

export interface WebuiServices {
  AccountCartService: AccountCartService;
  AccountLinkingService: AccountLinkingService;
  AccountPrivacyService: AccountPrivacyService;
  AccountPrivateAppsClientService: AccountPrivateAppsClientService;
  AccountPrivateAppsService: AccountPrivateAppsService;
  AchievementsService: AchievementsService;
  AssetSetPublishingService: AssetSetPublishingService;
  AuctionService: AuctionService;
  AuthenticationService: AuthenticationService;
  AuthenticationSupportService: AuthenticationSupportService;
  BillingService: BillingService;
  BluetoothManagerService: BluetoothManagerService;
  BroadcastClientService: BroadcastClientService;
  BroadcastService: BroadcastService;
  BuildManagementService: BuildManagementService;
  ChatRoomClientService: ChatRoomClientService;
  ChatRoomService: ChatRoomService;
  ChatService: ChatService;
  ChatUsabilityClientService: ChatUsabilityClientService;
  ChatUsabilityService: ChatUsabilityService;
  CheckoutService: CheckoutService;
  ClanChatRoomsService: ClanChatRoomsService;
  ClanFAQSService: ClanFAQSService;
  ClanService: ClanService;
  ClientCommService: ClientCommService;
  ClientMetricsService: ClientMetricsService;
  CloudClientService: CloudClientService;
  CloudConfigStoreClientService: CloudConfigStoreClientService;
  CloudConfigStoreService: CloudConfigStoreService;
  CloudGamingService: CloudGamingService;
  CloudService: CloudService;
  CommunityService: CommunityService;
  ContentModerationService: ContentModerationService;
  ContentServerConfigService: ContentServerConfigService;
  ContentServerDirectoryService: ContentServerDirectoryService;
  DailyDealService: DailyDealService;
  DepotContentDetectionService: DepotContentDetectionService;
  EconService: EconService;
  EmbeddedClientService: EmbeddedClientService;
  ExperimentServiceService: ExperimentServiceService;
  FamilyGroupsClientService: FamilyGroupsClientService;
  FamilyGroupsService: FamilyGroupsService;
  ForumsService: ForumsService;
  FovasVideoService: FovasVideoService;
  FriendMessagesClientService: FriendMessagesClientService;
  FriendMessagesService: FriendMessagesService;
  FriendsListClientService: FriendsListClientService;
  FriendsListService: FriendsListService;
  GameNotesService: GameNotesService;
  GamePerformanceStatsService: GamePerformanceStatsService;
  GameRecordingClipService: GameRecordingClipService;
  GameRecordingDebugService: GameRecordingDebugService;
  GameRecordingService: GameRecordingService;
  GamescopeService: GamescopeService;
  HardwareUpdateService: HardwareUpdateService;
  HelpRequestLogsService: HelpRequestLogsService;
  LEDManagerService: LEDManagerService;
  LoyaltyRewardsService: LoyaltyRewardsService;
  MarketingMessagesService: MarketingMessagesService;
  MDSAdminService: MDSAdminService;
  MobileAppService: MobileAppService;
  MobileAuthService: MobileAuthService;
  MobileDeviceService: MobileDeviceService;
  MobilePerAccountService: MobilePerAccountService;
  NewsService: NewsService;
  ParentalClientService: ParentalClientService;
  ParentalService: ParentalService;
  PartnerAppNotesService: PartnerAppNotesService;
  PartnerDeadlineService: PartnerDeadlineService;
  PartnerDismissService: PartnerDismissService;
  PartnerMeetSteamService: PartnerMeetSteamService;
  PartnerMembershipInviteService: PartnerMembershipInviteService;
  PartnerStoreBrowseService: PartnerStoreBrowseService;
  PhoneService: PhoneService;
  PhysicalGoodsService: PhysicalGoodsService;
  PlayerClientService: PlayerClientService;
  PlayerService: PlayerService;
  PlaytestService: PlaytestService;
  PromotionEventInvitesService: PromotionEventInvitesService;
  PromotionPlanningService: PromotionPlanningService;
  PromotionStatsService: PromotionStatsService;
  PublishedFileClientService: PublishedFileClientService;
  PublishedFileService: PublishedFileService;
  PublishingService: PublishingService;
  QuestService: QuestService;
  RemoteClientService: RemoteClientService;
  RemoteClientSteamClientService: RemoteClientSteamClientService;
  SaleFeatureService: SaleFeatureService;
  SaleItemRewardsService: SaleItemRewardsService;
  SharedJSContextService: SharedJSContextService;
  ShoppingCartService: ShoppingCartService;
  SleepManagerService: SleepManagerService;
  SteamAwardsService: SteamAwardsService;
  SteamChartsService: SteamChartsService;
  SteamEngineService: SteamEngineService;
  SteamInputManagerService: SteamInputManagerService;
  SteamLearnService: SteamLearnService;
  SteamNotificationClientService: SteamNotificationClientService;
  SteamNotificationService: SteamNotificationService;
  SteamOSManagerService: SteamOSManagerService;
  SteamOSSLSService: SteamOSSLSService;
  SteamTVService: SteamTVService;
  StorageDeviceManagerService: StorageDeviceManagerService;
  StoreAppSimilarityService: StoreAppSimilarityService;
  StoreBrowseService: StoreBrowseService;
  StoreCatalogService: StoreCatalogService;
  StoreClientService: StoreClientService;
  StoreCurationService: StoreCurationService;
  StoreMarketingService: StoreMarketingService;
  StoreQueryService: StoreQueryService;
  StoreSalesService: StoreSalesService;
  StoreService: StoreService;
  StoreTopSellersService: StoreTopSellersService;
  SystemManagerService: SystemManagerService;
  Test_TransportErrorService: Test_TransportErrorService;
  TransportAuthService: TransportAuthService;
  TransportValidationClientService: TransportValidationClientService;
  TransportValidationService: TransportValidationService;
  TwoFactorService: TwoFactorService;
  UserAccountService: UserAccountService;
  UserGameActivityService: UserGameActivityService;
  UserGameNotesService: UserGameNotesService;
  UserNewsService: UserNewsService;
  UserReviewsService: UserReviewsService;
  UserService: UserService;
  UserStoreVisitService: UserStoreVisitService;
  VideoClientService: VideoClientService;
  VideoClipService: VideoClipService;
  VideoService: VideoService;
  VoiceChatClientService: VoiceChatClientService;
  VoiceChatService: VoiceChatService;
  WebRTCClientNotificationsService: WebRTCClientNotificationsService;
  WebRTCClientService: WebRTCClientService;
  WishlistService: WishlistService;
}
