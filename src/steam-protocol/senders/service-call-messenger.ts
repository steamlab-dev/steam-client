import Long from "long";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import type Connection from "@/connection/connection";
import { SteamProtocolError } from "../error";
import type SteamProtoManager from "../proto-manager";
import type SessionManager from "../session-manager";
import PendingRequestMap from "./common/pending-request-map";
import type ProtoHeaderBuilder from "./common/proto-header-builder";
import type {
  Messenger,
  ServiceCallNamesWithResponse,
  ServiceCallRequest,
  ServiceCallRequestWithResponse,
  ServiceCallResponsePayload,
} from "./types";

export class ServiceCallMessengerError extends SteamProtocolError {
  constructor(messageOrCause: string | unknown, cause?: unknown) {
    super(messageOrCause, "service-call-messenger", cause);
  }
}

const PENDING_REQUEST_TIMEOUT_MS = 30_000;
const CLEANUP_ERROR_MESSAGE = "Cancelled by ServiceCallSender";

export default class ServiceCallMessenger implements Messenger {
  private lastGeneratedId: Long = Long.UZERO;

  constructor(
    private readonly protos: SteamProtoManager,
    private readonly connection: Connection,
    private readonly session: SessionManager,
    private readonly headerBuilder: ProtoHeaderBuilder,

    private readonly pendingRequest: PendingRequestMap<string, unknown> = new PendingRequestMap(
      PENDING_REQUEST_TIMEOUT_MS,
    ),
  ) {}

  public async sendWithResponse<K extends ServiceCallNamesWithResponse>(
    req: ServiceCallRequestWithResponse<K>,
  ): Promise<ServiceCallResponsePayload<K>> {
    const targetJobName = this.buildTargetJobName(req.message);
    const jobIdSource = this.genUniqueJobIdSource();
    const eMsg = this.resolveCallEMsg();

    const promise = this.pendingRequest.add(jobIdSource.toString()) as Promise<
      ServiceCallResponsePayload<K>
    >;

    const header = this.headerBuilder.build(eMsg, {
      target_job_name: targetJobName,
      jobid_source: jobIdSource,
    });
    const buffer = this.protos.encode(req.message, req.payload as Record<string, unknown>);
    this.connection.send(Buffer.concat([header, buffer]));

    return promise;
  }

  public send(_req: ServiceCallRequest): void {
    // TODO
  }

  public resolveRequest(
    jobIdTarget: SteamProtos["CMsgProtoBufHeader"]["jobid_target"],
    body: unknown,
  ): boolean {
    if (!jobIdTarget) {
      return false;
    }

    const key = jobIdTarget.toString();
    return this.pendingRequest.resolve(key, body);
  }

  public rejectRequest(
    jobIdTarget: SteamProtos["CMsgProtoBufHeader"]["jobid_target"],
    error: Error,
  ): boolean {
    if (!jobIdTarget) {
      return false;
    }

    const key = jobIdTarget.toString();
    return this.pendingRequest.reject(key, error);
  }

  public cleanUp(): void {
    this.pendingRequest.cleanUp(new ServiceCallMessengerError(CLEANUP_ERROR_MESSAGE));
  }

  private splitServiceAndMethod(input: string): { service: string; method: string } {
    const match = /^C([A-Za-z0-9]+)_([A-Za-z0-9]+)_Request$/.exec(input);
    if (!match) {
      throw new ServiceCallMessengerError(`Invalid proto message format: '${input}'`);
    }
    const [, service, method] = match;
    if (!service || !method) {
      throw new ServiceCallMessengerError(`Invalid proto message format: '${input}'`);
    }
    return { service, method };
  }

  private buildTargetJobName(protoMessageName: string): string {
    const { service, method } = this.splitServiceAndMethod(protoMessageName);
    return `${service}.${method}#1`;
  }

  private resolveCallEMsg(): EMsg {
    return this.session.isLoggedIn()
      ? EMsg.k_EMsgServiceMethodCallFromClient
      : EMsg.k_EMsgServiceMethodCallFromClientNonAuthed;
  }

  private genUniqueJobIdSource(): Long {
    this.lastGeneratedId = this.lastGeneratedId.add(1);
    return this.lastGeneratedId;
  }
}
