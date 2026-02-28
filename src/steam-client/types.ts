import type { AuthenticationEvents } from "@/steam-client/services/authentication";
import type { SteamProtocolEvents } from "@/steam-protocol/types";

export type SteamClientEvents = SteamProtocolEvents & AuthenticationEvents;
