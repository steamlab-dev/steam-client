import GenericError from "@/common/generic-error";

export type ConnectionSubsystem =
  | "validator"
  | "connector"
  | "transport"
  | "parser"
  | "sender"
  | "pipeline";

export default class ConnectionError extends GenericError {
  constructor(
    messageOrCause: string | unknown,
    public readonly subsystem: ConnectionSubsystem,
    cause?: unknown,
  ) {
    super(messageOrCause, cause);
  }
}
