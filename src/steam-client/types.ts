import type { AuthenticationEvents } from "@/services/authentication";
import type { SteamProtocolEvents } from "@/steam-protocol/types";

export type SteamClientEvents = SteamProtocolEvents & AuthenticationEvents;
