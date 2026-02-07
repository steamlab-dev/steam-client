import type { TypedEventEmitter } from "@/common/typed-event-emitter";
import type SteamProtocol from "@/steam-protocol/steam-protocol";
import Authentication from "./authentication";
import PlayerService from "./player";

export interface Services {
  authentication: Authentication;
  player: PlayerService;
}

const initiateServices = (
  steamProtocol: SteamProtocol,
  emitter: TypedEventEmitter<unknown>,
): Services => {
  return {
    authentication: new Authentication(steamProtocol, emitter),
    player: new PlayerService(steamProtocol),
  };
};

export default initiateServices;
