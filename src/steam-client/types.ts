import type {
  AuthenticationEvents,
  LoginViaCredentialsReq,
  SteamAuthTokens,
} from "@/steam-client/services/authentication";
import type { SteamProtocolEvents } from "@/steam-protocol/types";

export type { AuthenticationEvents, LoginViaCredentialsReq, SteamAuthTokens };
export type SteamClientEvents = SteamProtocolEvents & AuthenticationEvents;
