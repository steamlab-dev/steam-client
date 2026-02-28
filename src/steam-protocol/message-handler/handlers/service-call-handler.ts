import { EResult, type SteamProtos } from "@/common/steam-language";
import { SteamProtocolEResultError } from "@/steam-protocol/error";
import type ServiceCallMessenger from "@/steam-protocol/messengers/service-call-messenger";
import type ProtoManager from "@/steam-protocol/proto-manager";
import type { DecodedProtoMessage, MsgHandler, ParsedMessage, ProtoMessage } from "../types";
import { extractEResult, isServiceCallMessage } from "./common/util";
/**
 * Handler that filters out service method calls
 */
export default class ServiceMethodResponseHandler implements MsgHandler {
  constructor(
    private readonly protos: ProtoManager,
    private readonly serviceCallMessenger: ServiceCallMessenger,
  ) {}

  canHandle(message: ParsedMessage): boolean {
    return isServiceCallMessage(message);
  }

  handle(message: ProtoMessage): DecodedProtoMessage {
    const protoName = this.getProtoName(message.header?.target_job_name);

    const decodedMessage: DecodedProtoMessage = {
      ...message,
      body: this.protos.decode(protoName, message.rawBody),
    };

    const bodyRecord = decodedMessage.body as Record<string, unknown>;
    const eresult = extractEResult(bodyRecord, decodedMessage.header.eresult);

    if (eresult !== undefined && eresult !== EResult.OK) {
      this.serviceCallMessenger.rejectRequest(
        message.header.jobid_target,
        new SteamProtocolEResultError({
          protoName,
          eresultCode: eresult,
          eMsg: message.eMsg,
          jobIdTarget: message.header.jobid_target?.toString(),
        }),
      );
      return decodedMessage;
    }

    this.serviceCallMessenger.resolveRequest(message.header?.jobid_target, decodedMessage.body);
    return decodedMessage;
  }

  private getProtoName(
    targetJobName: SteamProtos["CMsgProtoBufHeader"]["target_job_name"],
  ): string {
    return `C${targetJobName?.replace(".", "_").replace("#1", "_Response")}`;
  }
}
