import Long from "long";
import { describe, expect, it } from "vitest";
import GamesPlayedTracker from "@/steam-client/games-played-tracker";

const STEAM_ID_64 = Long.fromString("76561197960265729", true);

describe("GamesPlayedTracker", () => {
  it("tracks and untracks games across supported input types", () => {
    const tracker = new GamesPlayedTracker();

    const tracked = tracker.track([730, "570", Long.fromNumber(440)], STEAM_ID_64);
    expect(tracked).toHaveLength(3);
    expect(tracker.getGameCount()).toBe(3);
    expect(tracker.isPlaying(730)).toBe(true);
    expect(tracker.isPlaying("570")).toBe(true);
    expect(tracker.isPlaying(Long.fromNumber(440))).toBe(true);

    const remaining = tracker.untrack(["570", Long.fromNumber(440)]);
    expect(remaining).toHaveLength(1);
    expect(tracker.isPlaying(730)).toBe(true);
    expect(tracker.isPlaying("570")).toBe(false);
  });

  it("throws for duplicate tracking and missing untrack", () => {
    const tracker = new GamesPlayedTracker();
    tracker.track(730, STEAM_ID_64);

    expect(() => tracker.track(730, STEAM_ID_64)).toThrow(
      "Game 730 is already being tracked as playing",
    );
    expect(() => tracker.untrack(570)).toThrow(
      "Game 570 is not currently being tracked as playing",
    );
  });

  it("validates numeric and string game IDs", () => {
    const tracker = new GamesPlayedTracker();

    expect(() => tracker.track(0, STEAM_ID_64)).toThrow("gameId must be positive");
    expect(() => tracker.track(-1, STEAM_ID_64)).toThrow("gameId must be a positive integer");
    expect(() => tracker.track(Number.MAX_SAFE_INTEGER + 1, STEAM_ID_64)).toThrow(
      "gameId must be a positive integer within safe range",
    );
    expect(() => tracker.track("  ", STEAM_ID_64)).toThrow(
      "gameId string must contain only digits",
    );
    expect(() => tracker.track("abc", STEAM_ID_64)).toThrow(
      "gameId string must contain only digits",
    );
  });

  it("wraps non-gameId errors from invalid input types", () => {
    const tracker = new GamesPlayedTracker();

    expect(() => tracker.track({} as never, STEAM_ID_64)).toThrow("Invalid gameId:");
    expect(() => tracker.track({} as never, STEAM_ID_64)).toThrow("Invalid gameId type");
  });

  it("validates SteamID input boundaries", () => {
    const tracker = new GamesPlayedTracker();
    const belowBase = Long.fromString("76561197960265727", true);
    const tooLarge = Long.fromString("76561197960265728", true).add(
      Long.fromNumber(Number.MAX_SAFE_INTEGER + 1),
    );

    expect(() => tracker.track(730, belowBase)).toThrow("Invalid SteamID64: too small");
    expect(() => tracker.track(730, tooLarge)).toThrow(
      "Resulting SteamID32 exceeds MAX_SAFE_INTEGER",
    );
    expect(() => tracker.track(730, "not-a-long" as never)).toThrow("Input must be a Long");
  });
});
