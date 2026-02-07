/**
 * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!
 */

/**
 * An object mapping EResult names to their numeric values.
 * @see {@link https://partner.steamgames.com/doc/api/steam_api#EResult}
 */
export const EResult = {
  Invalid: 0,
  /** Success. */
  OK: 1,
  /** Generic failure. */
  Fail: 2,
  /** Your Steam client doesn't have a connection to the back-end. */
  NoConnection: 3,
  /** Password/ticket is invalid. */
  InvalidPassword: 5,
  /** The user is logged in elsewhere. */
  LoggedInElsewhere: 6,
  /** Protocol version is incorrect. */
  InvalidProtocolVer: 7,
  /** A parameter is incorrect. */
  InvalidParam: 8,
  /** File was not found. */
  FileNotFound: 9,
  /** Called method is busy - action not taken. */
  Busy: 10,
  /** Called object was in an invalid state. */
  InvalidState: 11,
  /** The name was invalid. */
  InvalidName: 12,
  /** The email was invalid. */
  InvalidEmail: 13,
  /** The name is not unique. */
  DuplicateName: 14,
  /** Access is denied. */
  AccessDenied: 15,
  /** Operation timed out. */
  Timeout: 16,
  /** The user is VAC2 banned. */
  Banned: 17,
  /** Account not found. */
  AccountNotFound: 18,
  /** The Steam ID was invalid. */
  InvalidSteamID: 19,
  /** The requested service is currently unavailable. */
  ServiceUnavailable: 20,
  /** The user is not logged on. */
  NotLoggedOn: 21,
  /** Request is pending, it may be in process or waiting on third party. */
  Pending: 22,
  /** Encryption or Decryption failed. */
  EncryptionFailure: 23,
  /** Insufficient privilege. */
  InsufficientPrivilege: 24,
  /** Too much of a good thing. */
  LimitExceeded: 25,
  /** Access has been revoked (used for revoked guest passes.). */
  Revoked: 26,
  /** License/Guest pass the user is trying to access is expired. */
  Expired: 27,
  /** Guest pass has already been redeemed by account, cannot be used again. */
  AlreadyRedeemed: 28,
  /** The request is a duplicate and the action has already occurred in the past, ignored this time. */
  DuplicateRequest: 29,
  /** All the games in this guest pass redemption request are already owned by the user. */
  AlreadyOwned: 30,
  /** IP address not found. */
  IPNotFound: 31,
  /** Failed to write change to the data store. */
  PersistFailed: 32,
  /** Failed to acquire access lock for this operation. */
  LockingFailed: 33,
  /** The logon session has been replaced. */
  LogonSessionReplaced: 34,
  /** Failed to connect. */
  ConnectFailed: 35,
  /** The authentication handshake has failed. */
  HandshakeFailed: 36,
  /** There has been a generic IO failure. */
  IOFailure: 37,
  /** The remote server has disconnected. */
  RemoteDisconnect: 38,
  /** Failed to find the shopping cart requested. */
  ShoppingCartNotFound: 39,
  /** A user blocked the action. */
  Blocked: 40,
  /** The target is ignoring sender. */
  Ignored: 41,
  /** Nothing matching the request found. */
  NoMatch: 42,
  /** The account is disabled. */
  AccountDisabled: 43,
  /** This service is not accepting content changes right now. */
  ServiceReadOnly: 44,
  /** Account doesn't have value, so this feature isn't available. */
  AccountNotFeatured: 45,
  /** Allowed to take this action, but only because requester is admin. */
  AdministratorOK: 46,
  /** A Version mismatch in content transmitted within the Steam protocol. */
  ContentVersion: 47,
  /** The current CM can't service the user making a request, user should try another. */
  TryAnotherCM: 48,
  /** You are already logged in elsewhere, this cached credential login has failed. */
  PasswordRequiredToKickSession: 49,
  AlreadyLoggedInElsewhere: 50,
  /** Long running operation has suspended/paused. (eg. content download.). */
  Suspended: 51,
  /** Operation has been canceled, typically by user. (eg. a content download.). */
  Cancelled: 52,
  /** Operation canceled because data is ill formed or unrecoverable. */
  DataCorruption: 53,
  /** Operation canceled - not enough disk space. */
  DiskFull: 54,
  /** The remote or IPC call has failed. */
  RemoteCallFailed: 55,
  /** Password could not be verified as it's unset server side. */
  PasswordUnset: 56,
  /** External account (PSN, Facebook...) is not linked to a Steam account. */
  ExternalAccountUnlinked: 57,
  /** PSN ticket was invalid. */
  PSNTicketInvalid: 58,
  /** External account (PSN, Facebook...) is already linked to some other account, must explicitly request to replace/delete the link first. */
  ExternalAccountAlreadyLinked: 59,
  /** The sync cannot resume due to a conflict between the local and remote files. */
  RemoteFileConflict: 60,
  /** The requested new password is not allowed. */
  IllegalPassword: 61,
  /** New value is the same as the old one. This is used for secret question and answer. */
  SameAsPreviousValue: 62,
  /** Account login denied due to 2nd factor authentication failure. */
  AccountLogonDenied: 63,
  /** The requested new password is not legal. */
  CannotUseOldPassword: 64,
  /** Account login denied due to auth code invalid. */
  InvalidLoginAuthCode: 65,
  /** Account login denied due to 2nd factor auth failure - and no mail has been sent. */
  AccountLogonDeniedNoMail: 66,
  /** The users hardware does not support Intel's Identity Protection Technology (IPT). */
  HardwareNotCapableOfIPT: 67,
  /** Intel's Identity Protection Technology (IPT) has failed to initialize. */
  IPTInitError: 68,
  /** Operation failed due to parental control restrictions for current user. */
  ParentalControlRestricted: 69,
  /** Facebook query returned an error. */
  FacebookQueryError: 70,
  /** Account login denied due to an expired auth code. */
  ExpiredLoginAuthCode: 71,
  /** The login failed due to an IP restriction. */
  IPLoginRestrictionFailed: 72,
  /** The current users account is currently locked for use. This is likely due to a hijacking and pending ownership verification. */
  AccountLockedDown: 73,
  /** The logon failed because the accounts email is not verified. */
  AccountLogonDeniedVerifiedEmailRequired: 74,
  /** There is no URL matching the provided values. */
  NoMatchingURL: 75,
  /** Bad Response due to a Parse failure, missing field, etc. */
  BadResponse: 76,
  /** The user cannot complete the action until they re-enter their password. */
  RequirePasswordReEntry: 77,
  /** The value entered is outside the acceptable range. */
  ValueOutOfRange: 78,
  /** Something happened that we didn't expect to ever happen. */
  UnexpectedError: 79,
  /** The requested service has been configured to be unavailable. */
  Disabled: 80,
  /** The files submitted to the CEG server are not valid. */
  InvalidCEGSubmission: 81,
  /** The device being used is not allowed to perform this action. */
  RestrictedDevice: 82,
  /** The action could not be complete because it is region restricted. */
  RegionLocked: 83,
  /** Temporary rate limit exceeded, try again later, different from k_EResultLimitExceeded which may be permanent. */
  RateLimitExceeded: 84,
  /** Need two-factor code to login. */
  AccountLoginDeniedNeedTwoFactor: 85,
  /** The thing we're trying to access has been deleted. */
  ItemDeleted: 86,
  /** Login attempt failed, try to throttle response to possible attacker. */
  AccountLoginDeniedThrottle: 87,
  /** Two factor authentication (Steam Guard) code is incorrect. */
  TwoFactorCodeMismatch: 88,
  /** The activation code for two-factor authentication (Steam Guard) didn't match. */
  TwoFactorActivationCodeMismatch: 89,
  /** The current account has been associated with multiple partners. */
  AccountAssociatedToMultiplePartners: 90,
  /** The data has not been modified. */
  NotModified: 91,
  /** The account does not have a mobile device associated with it. */
  NoMobileDevice: 92,
  /** The time presented is out of range or tolerance. */
  TimeNotSynced: 93,
  SMSCodeFailed: 94,
  /** Too many accounts access this resource. */
  AccountLimitExceeded: 95,
  /** Too many changes to this account. */
  AccountActivityLimitExceeded: 96,
  /** Too many changes to this phone. */
  PhoneActivityLimitExceeded: 97,
  /** Cannot refund to payment method, must use wallet. */
  RefundToWallet: 98,
  /** Cannot send an email. */
  EmailSendFailure: 99,
  /** Can't perform operation until payment has settled. */
  NotSettled: 100,
  /** The user needs to provide a valid captcha. */
  NeedCaptcha: 101,
  /** A game server login token owned by this token's owner has been banned. */
  GSLTDenied: 102,
  /** Game server owner is denied for some other reason such as account locked, community ban, vac ban, missing phone, etc. */
  GSOwnerDenied: 103,
  /** The type of thing we were requested to act on is invalid. */
  InvalidItemType: 104,
  /** The IP address has been banned from taking this action. */
  IPBanned: 105,
  /** This Game Server Login Token (GSLT) has expired from disuse; it can be reset for use. */
  GSLTExpired: 106,
  /** user doesn't have enough wallet funds to complete the action. */
  InsufficientFunds: 107,
  /** There are too many of this thing pending already. */
  TooManyPending: 108,
  NoSiteLicensesFound: 109,
  WGNetworkSendExceeded: 110,
  AccountNotFriends: 111,
  LimitedUserAccount: 112,
  CantRemoveItem: 113,
  AccountDeleted: 114,
  ExistingUserCancelledLicense: 115,
  CommunityCooldown: 116,
  NoLauncherSpecified: 117,
  MustAgreeToSSA: 118,
  LauncherMigrated: 119,
  SteamRealmMismatch: 120,
  InvalidSignature: 121,
  ParseFailure: 122,
  NoVerifiedPhone: 123,
  InsufficientBattery: 124,
  ChargerRequired: 125,
  CachedCredentialInvalid: 126,
  PhoneNumberIsVOIP: 127,
  NotSupported: 128,
  FamilySizeLimitExceeded: 129,
  OfflineAppCacheInvalid: 130,
  TryLater: 131,
} as const;

/**
 * A union type representing all possible numeric values of EResult.
 */
export type EResult = (typeof EResult)[keyof typeof EResult];
