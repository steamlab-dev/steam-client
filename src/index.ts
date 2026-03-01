import { isValidRefreshToken } from "./common/utils";
import type { DisconnectMsg } from "./connection/event-manager";
import SteamClientError, { type SteamClientSubsystem } from "./steam-client/error";
import SteamClientImpl from "./steam-client/steam-client";
import {
  SteamProtocolEResultError,
  SteamProtocolError,
  type SteamProtocolSubsystem,
} from "./steam-protocol/error";
import type { SteamMessage } from "./steam-protocol/message-handler/types";
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
export type { DisconnectMsg };
export type { SteamMessage };
