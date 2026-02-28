import GenericError from "@/common/generic-error";

export type SteamClientSubsystem = "client" | "session" | "gameplay" | "validation" | "protocol";

export default class SteamClientError extends GenericError {
  constructor(
    messageOrCause: string | unknown,
    public readonly subsystem: SteamClientSubsystem,
    cause?: unknown,
  ) {
    super(messageOrCause, cause);
  }
}
