import GenericError from "./common/generic-error";
import { TypedEventEmitter } from "./common/typed-event-emitter";
import { isValidRefreshToken } from "./common/utils";
import ConnectionError, { type ConnectionSubsystem } from "./connection/error";
import SteamClientError, { type SteamClientSubsystem } from "./steam-client/error";
import SteamClientImpl from "./steam-client/steam-client";
import {
  SteamProtocolEResultError,
  SteamProtocolError,
  type SteamProtocolSubsystem,
} from "./steam-protocol/error";
import ProtoManager from "./steam-protocol/proto-manager";

// Barrel surfaces (consumer-facing)
export * from "./common/steam-language";
export { steamEnums as SteamEnums } from "./common/steam-language";
export * from "./connection/types";
export * from "./steam-client/types";
export * from "./steam-protocol/types";
export type { ConnectionSubsystem, SteamClientSubsystem, SteamProtocolSubsystem };
// Main client API
// Errors
// Advanced and utility exports
export {
  ConnectionError,
  GenericError,
  isValidRefreshToken,
  ProtoManager,
  SteamClientError,
  SteamClientImpl as SteamClient,
  SteamProtocolEResultError,
  SteamProtocolError,
  TypedEventEmitter,
};
