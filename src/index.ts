import { isValidRefreshToken } from "./common/utils";
import SteamClientError, { type SteamClientSubsystem } from "./steam-client/error";
import SteamClientImpl from "./steam-client/steam-client";
import {
  SteamProtocolEResultError,
  SteamProtocolError,
  type SteamProtocolSubsystem,
} from "./steam-protocol/error";
import ProtoManager from "./steam-protocol/proto-manager";

export type { SteamProtos, SteamServices } from "./common/steam-language";
export {
  EMsg,
  EResult,
} from "./common/steam-language";
export { EAuthSessionGuardType } from "./common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
export type { ConnectionOptions } from "./connection/types";

export { ProtoManager, isValidRefreshToken };
export { SteamProtocolError, SteamProtocolEResultError };
export type { SteamProtocolSubsystem };
export { SteamClientError };
export type { SteamClientSubsystem };
export { SteamClientImpl as SteamClient };
