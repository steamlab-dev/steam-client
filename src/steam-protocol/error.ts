import GenericError from "@/common/generic-error";
import { EResult } from "@/common/steam-language";

export type SteamProtocolSubsystem =
  | "context"
  | "parser"
  | "handler"
  | "proto-messenger"
  | "service-call-messenger"
  | "pending-request"
  | "heartbeat"
  | "protocol"
  | "eresult";

export class SteamProtocolError extends GenericError {
  constructor(
    messageOrCause: string | unknown,
    public readonly subsystem: SteamProtocolSubsystem,
    cause?: unknown,
  ) {
    super(messageOrCause, cause);
  }
}

export const resolveEResultName = (code: number): string => {
  for (const [name, value] of Object.entries(EResult)) {
    if (value === code) {
      return name;
    }
  }

  return "Unknown";
};

type SteamProtocolEResultErrorParams = {
  protoName: string;
  eresultCode: number;
  eMsg?: number;
  jobIdTarget?: string;
  cause?: unknown;
};

export class SteamProtocolEResultError extends SteamProtocolError {
  public readonly eresultCode: number;
  public readonly eresultName: string;
  public readonly protoName: string;
  public readonly eMsg?: number;
  public readonly jobIdTarget?: string;

  constructor({
    protoName,
    eresultCode,
    eMsg,
    jobIdTarget,
    cause,
  }: SteamProtocolEResultErrorParams) {
    const eresultName = resolveEResultName(eresultCode);
    super(`${protoName} failed (EResult.${eresultName}=${eresultCode})`, "eresult", cause);
    this.eresultCode = eresultCode;
    this.eresultName = eresultName;
    this.protoName = protoName;
    this.eMsg = eMsg;
    this.jobIdTarget = jobIdTarget;
  }
}
