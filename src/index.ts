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

// Main client API
export { SteamClientImpl as SteamClient };

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
