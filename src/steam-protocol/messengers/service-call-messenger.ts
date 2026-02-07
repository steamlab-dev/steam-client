import Long from "long";
import { EMsg, type SteamProtos } from "@/common/steam-language";
import type Connection from "@/connection/connection";
import type SteamProtoManager from "../proto-manager";
import type SessionManager from "../session-manager";
import PendingRequestMap from "./common/pending-request-map";
import type ProtoHeaderBuilder from "./common/proto-header-builder";
import type {
  Messenger,
  ServiceCallMessage,
  ServiceCallMessageWithRes,
  ServiceCallResponse,
  ServiceCallsWithRes,
} from "./types";

export default class ServiceCallMessenger implements Messenger {
  private lastGeneratedId: Long = Long.UZERO;

  constructor(
    private readonly protos: SteamProtoManager,
    private readonly connection: Connection,
    private readonly session: SessionManager,
    private readonly headerBuilder: ProtoHeaderBuilder,

    private readonly pendingRequest: PendingRequestMap<string, unknown> = new PendingRequestMap(
      30_000,
    ),
  ) {}

  public async sendWithResponse<K extends ServiceCallsWithRes>(
    req: ServiceCallMessageWithRes<K>,
  ): Promise<ServiceCallResponse<K>> {
    const { service, method } = this.splitServiceAndMethod(req.message);
    const targetJobName = `${service}.${method}#1`;
    const jobIdSource = this.genUniquejobIdSource();

    const eMsg = this.session.isLoggedIn()
      ? EMsg.k_EMsgServiceMethodCallFromClient
      : EMsg.k_EMsgServiceMethodCallFromClientNonAuthed;

    const promise = this.pendingRequest.add(jobIdSource.toString()) as ServiceCallResponse<K>;

    const header = this.headerBuilder.build(eMsg, {
      target_job_name: targetJobName,
      jobid_source: jobIdSource,
    });
    const buffer = this.protos.encode(req.message, req.payload as Record<string, unknown>);
    this.connection.send(Buffer.concat([header, buffer]));

    return promise;
  }

  public send(_req: ServiceCallMessage): void {
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
    this.pendingRequest.cleanUp(new Error("Cancelled by ServiceCallSender"));
  }

  private splitServiceAndMethod(input: string) {
    const match = /^C([A-Za-z0-9]+)_([A-Za-z0-9]+)_Request$/.exec(input);
    if (!match) {
      throw new Error(`Invalid proto message format: '${input}'`);
    }
    const [, service, method] = match;
    return { service, method };
  }

  private genUniquejobIdSource(): Long {
    this.lastGeneratedId = this.lastGeneratedId.add(1);
    return this.lastGeneratedId;
  }
}
