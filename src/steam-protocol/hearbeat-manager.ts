import { EMsg, type SteamProtos } from "@/common/steam-language";
import type ProtoMessenger from "./messengers/proto-messenger";

/**
 * Manages sending periodic heartbeat messages to the Steam servers to keep a session alive.
 */
export default class HeartBeatManager {
  private interval?: NodeJS.Timeout;

  /**
   * Creates an instance of HeartbeatManager.
   * @param protoSender The sender instance used to dispatch heartbeat messages.
   */
  constructor(private readonly protoMessenger: ProtoMessenger) {}

  /**
   * Starts sending heartbeats at a specified interval. If a heartbeat process is
   * already running, it will be stopped and replaced by the new one.
   * @param delay The interval in seconds between heartbeats. Must be between 10 and 30.
   * @throws {Error} If the provided delay is outside the acceptable range.
   */
  public start(delay: SteamProtos["CMsgClientLogOnResponse"]["heartbeat_seconds"] = 10): void {
    if (delay < 10 || delay > 30) {
      throw new Error("Delay must be between 10 and 30 seconds");
    }

    this.stop();
    this.interval = setInterval(() => {
      this.protoMessenger.send({
        eMsg: EMsg.k_EMsgClientHeartBeat,
        payload: {},
      });
    }, delay * 1000);
  }

  /**
   * Stops the currently running heartbeat interval, if one exists.
   */
  public stop(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}
