import Long from "long";
import type { CMsgClientGamesPlayed } from "@/common/steam-language/protos-definitions/steam/steammessages_clientserver";

type gameId = string;

class GamesPlayedTracker {
  private gamesPlayedTracker = new Map<gameId, CMsgClientGamesPlayed.GamePlayed>();
  private processIdCounter: number;
  private readonly steamProcessId: number;

  constructor() {
    this.steamProcessId = this.generateRandomProcessId();
    this.processIdCounter = this.steamProcessId;
  }

  track(
    gameId: Long | number | string | (Long | number | string)[],
    steamId: Long,
  ): CMsgClientGamesPlayed.GamePlayed[] {
    const gameIds = Array.isArray(gameId) ? gameId : [gameId];

    for (const id of gameIds) {
      const gameIdAsLong = this.getGameIdAsLong(id);
      const keyString = gameIdAsLong.toString();

      // 1. Check if game is already being played
      if (this.isPlaying(keyString)) {
        throw new Error(`Game ${keyString} is already being tracked as playing`);
      }

      // 2. Add to tracker
      this.addToTracker(gameIdAsLong, steamId);
    }

    // 3. Return full gamesPlayed array
    return this.getCurrentlyPlayingGames();
  }

  untrack(
    gameId: Long | number | string | (Long | number | string)[],
  ): CMsgClientGamesPlayed.GamePlayed[] {
    const gameIds = Array.isArray(gameId) ? gameId : [gameId];

    for (const id of gameIds) {
      const gameIdAsLong = this.getGameIdAsLong(id);
      const keyString = gameIdAsLong.toString();

      // 1. Check if game is currently being played
      if (!this.isPlaying(keyString)) {
        throw new Error(`Game ${keyString} is not currently being tracked as playing`);
      }

      // 2. Remove from tracker
      this.gamesPlayedTracker.delete(keyString);
    }

    // 3. Return full gamesPlayed array
    return this.getCurrentlyPlayingGames();
  }

  isPlaying(gameId: Long | number | string): boolean {
    const gameIdAsLong = this.getGameIdAsLong(gameId);
    const keyString = gameIdAsLong.toString();
    return this.gamesPlayedTracker.has(keyString);
  }

  getCurrentlyPlayingGames(): CMsgClientGamesPlayed.GamePlayed[] {
    return [...this.gamesPlayedTracker.values()];
  }

  getGameCount(): number {
    return this.gamesPlayedTracker.size;
  }

  private addToTracker(game_id: Long, steamId: Long) {
    const process_id = this.getNextProcessId();

    const process_id_list: CMsgClientGamesPlayed.ProcessInfo[] = [
      {
        process_id,
        process_id_parent: this.steamProcessId,
        parent_is_steam: true,
      },
    ];

    const gamePlayed: CMsgClientGamesPlayed.GamePlayed = {
      game_id,
      owner_id: this.steamId64ToSteamId32(steamId),
      process_id_list,
    };

    this.gamesPlayedTracker.set(game_id.toString(), gamePlayed);
  }

  private getNextProcessId() {
    this.processIdCounter += 4;
    return this.processIdCounter;
  }

  private generateRandomProcessId(): number {
    const min = 1000;
    const max = 2000;

    // Generate random number in range
    const randomPid = Math.floor(Math.random() * (max - min + 1)) + min;

    // Ensures the result is a multiple of 4 (like Windows PIDs)
    return Math.floor(randomPid / 4) * 4;
  }

  private getGameIdAsLong(gameId: Long | number | string): Long {
    try {
      let longGameId: Long;

      if (Long.isLong(gameId)) {
        longGameId = gameId;
      } else if (typeof gameId === "number") {
        if (!Number.isInteger(gameId) || gameId < 0 || gameId > Number.MAX_SAFE_INTEGER) {
          throw new Error("gameId must be a positive integer within safe range");
        }
        longGameId = Long.fromNumber(gameId);
      } else if (typeof gameId === "string") {
        const trimmed = gameId.trim();
        if (!trimmed || !/^\d+$/.test(trimmed)) {
          throw new Error("gameId string must contain only digits");
        }
        longGameId = Long.fromString(trimmed);
      } else {
        throw new Error("Invalid gameId type - must be Long, number, or string");
      }

      if (longGameId.isZero() || longGameId.isNegative()) {
        throw new Error("gameId must be positive");
      }

      return longGameId;
    } catch (error) {
      if (error instanceof Error && error.message.startsWith("gameId")) {
        throw error;
      }
      throw new Error(
        `Invalid gameId: ${gameId} - ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    }
  }

  private steamId64ToSteamId32(steamId64: Long): number {
    // Magic number used for SteamID conversion
    const STEAM_ID_BASE = Long.fromString("76561197960265728");

    // Validate input
    if (!Long.isLong(steamId64)) {
      throw new Error("Input must be a Long");
    }

    if (steamId64.lessThan(STEAM_ID_BASE)) {
      throw new Error("Invalid SteamID64: too small");
    }

    // Perform the conversion
    const steamId32Long = steamId64.subtract(STEAM_ID_BASE);

    // Convert to number and validate it's within safe integer range
    if (steamId32Long.greaterThan(Number.MAX_SAFE_INTEGER)) {
      throw new Error("Resulting SteamID32 exceeds MAX_SAFE_INTEGER");
    }

    if (steamId32Long.lessThan(0)) {
      throw new Error("Resulting SteamID32 is negative");
    }

    return steamId32Long.toNumber();
  }
}

export default GamesPlayedTracker;
