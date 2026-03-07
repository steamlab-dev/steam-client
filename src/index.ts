import GenericError from "./common/generic-error";
import { TypedEventEmitter } from "./common/typed-event-emitter";
import { isValidRefreshToken } from "./common/utils";
import ConnectionError, { type ConnectionSubsystem } from "./connection/error";
import type { DisconnectMsg } from "./connection/event-manager";
import SteamClientError, { type SteamClientSubsystem } from "./steam-client/error";
import type {
  AuthenticationEvents,
  LoginViaCredentialsReq,
  SteamAuthTokens,
} from "./steam-client/services/authentication";
import SteamClientImpl from "./steam-client/steam-client";
import type { SteamClientEvents } from "./steam-client/types";
import {
  SteamProtocolEResultError,
  SteamProtocolError,
  type SteamProtocolSubsystem,
} from "./steam-protocol/error";
import type { MsgHandler, SteamMessage } from "./steam-protocol/message-handler/types";
import ProtoManager from "./steam-protocol/proto-manager";

// Steam language primitives
export type { SteamProtos, SteamServices } from "./common/steam-language";
export {
  EMsg,
  EResult,
  steamEnums as SteamEnums,
} from "./common/steam-language";

// Main client API
export { SteamClientImpl as SteamClient };
export type { ConnectionOptions } from "./connection/types";
export type { SteamClientEvents, AuthenticationEvents, LoginViaCredentialsReq, SteamAuthTokens };
export type { DisconnectMsg, SteamMessage, MsgHandler };

// Errors
export { SteamClientError };
export type { SteamClientSubsystem };
export { SteamProtocolError, SteamProtocolEResultError };
export type { SteamProtocolSubsystem };
export { ConnectionError };
export type { ConnectionSubsystem };
export { GenericError };

// Advanced and utility exports
export { ProtoManager, TypedEventEmitter, isValidRefreshToken };
