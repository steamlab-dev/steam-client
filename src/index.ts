import SteamClientImpl from "./steam-client/steam-client";
import ProtoManager from "./steam-protocol/proto-manager";

export type { SteamProtos, SteamServices } from "./common/steam-language";
export {
  EMsg,
  EResult,
} from "./common/steam-language";
export { EAuthSessionGuardType } from "./common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
export type { ConnectionOptions } from "./connection/types";

export { ProtoManager };
export { SteamClientImpl as SteamClient };
