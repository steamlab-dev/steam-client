/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */
import type { AccountHardwareService } from "../protos-definitions/steam/steammessages_accounthardware.steamclient";
import type {
  AuthenticationService,
  AuthenticationSupportService,
  CloudGamingService,
} from "../protos-definitions/steam/steammessages_auth.steamclient";
import type {
  BroadcastClientService,
  BroadcastService,
} from "../protos-definitions/steam/steammessages_broadcast.steamclient";
import type {
  ChatRoomClientService,
  ChatRoomService,
  ChatService,
  ChatUsabilityClientService,
  ChatUsabilityService,
  ClanChatRoomsService,
} from "../protos-definitions/steam/steammessages_chat.steamclient";
import type { ClientMetricsService } from "../protos-definitions/steam/steammessages_clientmetrics.steamclient";
import type {
  CloudClientService,
  CloudService,
} from "../protos-definitions/steam/steammessages_cloud.steamclient";
import type { CommunityService } from "../protos-definitions/steam/steammessages_community.steamclient";
import type {
  ContentServerDirectoryService,
  DepotContentDetectionService,
} from "../protos-definitions/steam/steammessages_contentsystem.steamclient";
import type { CredentialsService } from "../protos-definitions/steam/steammessages_credentials.steamclient";
import type {
  DataPublisherService,
  ValveHWSurveyService,
} from "../protos-definitions/steam/steammessages_datapublisher.steamclient";
import type { ContentBuilderService } from "../protos-definitions/steam/steammessages_depotbuilder.steamclient";
import type { EconService } from "../protos-definitions/steam/steammessages_econ.steamclient";
import type {
  FamilyGroupsClientService,
  FamilyGroupsService,
} from "../protos-definitions/steam/steammessages_familygroups.steamclient";
import type {
  FriendMessagesClientService,
  FriendMessagesService,
} from "../protos-definitions/steam/steammessages_friendmessages.steamclient";
import type { GameNetworkingService } from "../protos-definitions/steam/steammessages_gamenetworking.steamclient";
import type {
  GameNotificationsClientService,
  GameNotificationsService,
} from "../protos-definitions/steam/steammessages_gamenotifications.steamclient";
import type {
  GameRecordingClipService,
  VideoClipService,
} from "../protos-definitions/steam/steammessages_gamerecording.steamclient";
import type {
  GameServerClientService,
  GameServersService,
} from "../protos-definitions/steam/steammessages_gameservers.steamclient";
import type {
  InventoryClientService,
  InventoryService,
} from "../protos-definitions/steam/steammessages_inventory.steamclient";
import type { CommunityLinkFilterService } from "../protos-definitions/steam/steammessages_linkfilter.steamclient";
import type { LobbyMatchmakingLegacyService } from "../protos-definitions/steam/steammessages_lobbymatchmaking.steamclient";
import type { EconMarketService } from "../protos-definitions/steam/steammessages_market.steamclient";
import type { MarketingMessagesService } from "../protos-definitions/steam/steammessages_marketingmessages.steamclient";
import type { SteamNotificationClientService } from "../protos-definitions/steam/steammessages_notifications.steamclient";
import type { OfflineService } from "../protos-definitions/steam/steammessages_offline.steamclient";
import type {
  ParentalClientService,
  ParentalService,
} from "../protos-definitions/steam/steammessages_parental.steamclient";
import type { PartiesService } from "../protos-definitions/steam/steammessages_parties.steamclient";
import type { PartnerAppsService } from "../protos-definitions/steam/steammessages_partnerapps.steamclient";
import type {
  PlayerClientService,
  PlayerService,
} from "../protos-definitions/steam/steammessages_player.steamclient";
import type {
  PublishedFileClientService,
  PublishedFileService,
} from "../protos-definitions/steam/steammessages_publishedfile.steamclient";
import type {
  QueuedMatchmakingGameHostService,
  QueuedMatchmakingService,
} from "../protos-definitions/steam/steammessages_qms.steamclient";
import type {
  RemoteClientService,
  RemoteClientSteamClientService,
} from "../protos-definitions/steam/steammessages_remoteclient_service.steamclient";
import type { SecretsService } from "../protos-definitions/steam/steammessages_secrets.steamclient";
import type { ShaderService } from "../protos-definitions/steam/steammessages_shader.steamclient";
import type {
  SiteLicenseService,
  SiteManagerClientService,
} from "../protos-definitions/steam/steammessages_site_license.steamclient";
import type { SteamTVService } from "../protos-definitions/steam/steammessages_steamtv.steamclient";
import type {
  StoreClientService,
  StoreService,
} from "../protos-definitions/steam/steammessages_store.steamclient";
import type { StoreBrowseService } from "../protos-definitions/steam/steammessages_storebrowse.steamclient";
import type { TimedTrialService } from "../protos-definitions/steam/steammessages_timedtrial.steamclient";
import type { TwoFactorService } from "../protos-definitions/steam/steammessages_twofactor.steamclient";
import type {
  TestExternalPrivilegeService,
  TestServerFromClientService,
  TestSteamClientService,
} from "../protos-definitions/steam/steammessages_unified_test.steamclient";
import type {
  EmbeddedClientService,
  UserAccountService,
} from "../protos-definitions/steam/steammessages_useraccount.steamclient";
import type { FileVerificationService } from "../protos-definitions/steam/steammessages_vac.steamclient";
import type {
  FovasVideoService,
  VideoClientService,
  VideoService,
} from "../protos-definitions/steam/steammessages_video.steamclient";
import type { WorkshopService } from "../protos-definitions/steam/steammessages_workshop.steamclient";
import type { AchievementsService } from "../protos-definitions/steam/webuimessages_achievements";
import type { BluetoothManagerService } from "../protos-definitions/steam/webuimessages_bluetooth";
import type { GameNotesService } from "../protos-definitions/steam/webuimessages_gamenotes";
import type { GameRecordingService } from "../protos-definitions/steam/webuimessages_gamerecording";
import type { GamescopeService } from "../protos-definitions/steam/webuimessages_gamescope";
import type { HardwareUpdateService } from "../protos-definitions/steam/webuimessages_hardwareupdate";
import type { LEDManagerService } from "../protos-definitions/steam/webuimessages_leds";
import type { SharedJSContextService } from "../protos-definitions/steam/webuimessages_sharedjscontext";
import type { SleepManagerService } from "../protos-definitions/steam/webuimessages_sleep";
import type { SteamEngineService } from "../protos-definitions/steam/webuimessages_steamengine";
import type { SteamInputManagerService } from "../protos-definitions/steam/webuimessages_steaminput";
import type {
  SteamOSManagerService,
  SteamOSSLSService,
} from "../protos-definitions/steam/webuimessages_steamos";
import type { StorageDeviceManagerService } from "../protos-definitions/steam/webuimessages_storagedevicemanager";
import type { SystemManagerService } from "../protos-definitions/steam/webuimessages_systemmanager";
import type { TransportAuthService } from "../protos-definitions/steam/webuimessages_transport";
import type {
  TransportValidationClientService,
  TransportValidationService,
} from "../protos-definitions/steam/webuimessages_transportvalidation";
import type { UserService } from "../protos-definitions/steam/webuimessages_user";

export interface SteamServices {
  AccountHardwareService: AccountHardwareService;
  AchievementsService: AchievementsService;
  AuthenticationService: AuthenticationService;
  AuthenticationSupportService: AuthenticationSupportService;
  BluetoothManagerService: BluetoothManagerService;
  BroadcastClientService: BroadcastClientService;
  BroadcastService: BroadcastService;
  ChatRoomClientService: ChatRoomClientService;
  ChatRoomService: ChatRoomService;
  ChatService: ChatService;
  ChatUsabilityClientService: ChatUsabilityClientService;
  ChatUsabilityService: ChatUsabilityService;
  ClanChatRoomsService: ClanChatRoomsService;
  ClientMetricsService: ClientMetricsService;
  CloudClientService: CloudClientService;
  CloudGamingService: CloudGamingService;
  CloudService: CloudService;
  CommunityLinkFilterService: CommunityLinkFilterService;
  CommunityService: CommunityService;
  ContentBuilderService: ContentBuilderService;
  ContentServerDirectoryService: ContentServerDirectoryService;
  CredentialsService: CredentialsService;
  DataPublisherService: DataPublisherService;
  DepotContentDetectionService: DepotContentDetectionService;
  EconMarketService: EconMarketService;
  EconService: EconService;
  EmbeddedClientService: EmbeddedClientService;
  FamilyGroupsClientService: FamilyGroupsClientService;
  FamilyGroupsService: FamilyGroupsService;
  FileVerificationService: FileVerificationService;
  FovasVideoService: FovasVideoService;
  FriendMessagesClientService: FriendMessagesClientService;
  FriendMessagesService: FriendMessagesService;
  GameNetworkingService: GameNetworkingService;
  GameNotesService: GameNotesService;
  GameNotificationsClientService: GameNotificationsClientService;
  GameNotificationsService: GameNotificationsService;
  GameRecordingClipService: GameRecordingClipService;
  GameRecordingService: GameRecordingService;
  GamescopeService: GamescopeService;
  GameServerClientService: GameServerClientService;
  GameServersService: GameServersService;
  HardwareUpdateService: HardwareUpdateService;
  InventoryClientService: InventoryClientService;
  InventoryService: InventoryService;
  LEDManagerService: LEDManagerService;
  LobbyMatchmakingLegacyService: LobbyMatchmakingLegacyService;
  MarketingMessagesService: MarketingMessagesService;
  OfflineService: OfflineService;
  ParentalClientService: ParentalClientService;
  ParentalService: ParentalService;
  PartiesService: PartiesService;
  PartnerAppsService: PartnerAppsService;
  PlayerClientService: PlayerClientService;
  PlayerService: PlayerService;
  PublishedFileClientService: PublishedFileClientService;
  PublishedFileService: PublishedFileService;
  QueuedMatchmakingGameHostService: QueuedMatchmakingGameHostService;
  QueuedMatchmakingService: QueuedMatchmakingService;
  RemoteClientService: RemoteClientService;
  RemoteClientSteamClientService: RemoteClientSteamClientService;
  SecretsService: SecretsService;
  ShaderService: ShaderService;
  SharedJSContextService: SharedJSContextService;
  SiteLicenseService: SiteLicenseService;
  SiteManagerClientService: SiteManagerClientService;
  SleepManagerService: SleepManagerService;
  SteamEngineService: SteamEngineService;
  SteamInputManagerService: SteamInputManagerService;
  SteamNotificationClientService: SteamNotificationClientService;
  SteamOSManagerService: SteamOSManagerService;
  SteamOSSLSService: SteamOSSLSService;
  SteamTVService: SteamTVService;
  StorageDeviceManagerService: StorageDeviceManagerService;
  StoreBrowseService: StoreBrowseService;
  StoreClientService: StoreClientService;
  StoreService: StoreService;
  SystemManagerService: SystemManagerService;
  TestExternalPrivilegeService: TestExternalPrivilegeService;
  TestServerFromClientService: TestServerFromClientService;
  TestSteamClientService: TestSteamClientService;
  TimedTrialService: TimedTrialService;
  TransportAuthService: TransportAuthService;
  TransportValidationClientService: TransportValidationClientService;
  TransportValidationService: TransportValidationService;
  TwoFactorService: TwoFactorService;
  UserAccountService: UserAccountService;
  UserService: UserService;
  ValveHWSurveyService: ValveHWSurveyService;
  VideoClientService: VideoClientService;
  VideoClipService: VideoClipService;
  VideoService: VideoService;
  WorkshopService: WorkshopService;
}
