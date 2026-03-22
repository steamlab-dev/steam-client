import { describe, expect, it, vi } from "vitest";
import { EMsg, EResult } from "@/common/steam-language";
import { SteamProtocolEResultError } from "@/steam-protocol/error";
import ServiceMethodResponseHandler from "@/steam-protocol/message-handler/handlers/service-call-handler";

describe("ServiceMethodResponseHandler", () => {
  it("derives response proto name and resolves pending service call by jobid_target", () => {
    const protos = { decode: vi.fn().mockReturnValue({ eresult: EResult.OK, ok: true }) };
    const serviceCallMessenger = {
      resolveRequest: vi.fn(),
      rejectRequest: vi.fn(),
    };

    const handler = new ServiceMethodResponseHandler(
      protos as never,
      serviceCallMessenger as never,
    );
    const jobIdTarget = 42n;
    const message = {
      eMsg: EMsg.k_EMsgServiceMethodResponse,
      isProto: true,
      msgName: "ServiceMethodResponse",
      rawBody: Buffer.from([1]),
      header: {
        target_job_name: "Authentication.BeginAuthSessionViaQR#1",
        jobid_target: jobIdTarget,
        eresult: EResult.OK,
      },
    };

    handler.handle(message as never);

    expect(protos.decode).toHaveBeenCalledWith(
      "CAuthentication_BeginAuthSessionViaQR_Response",
      Buffer.from([1]),
    );
    expect(serviceCallMessenger.resolveRequest).toHaveBeenCalledWith(jobIdTarget, {
      eresult: EResult.OK,
      ok: true,
    });
    expect(serviceCallMessenger.rejectRequest).not.toHaveBeenCalled();
  });

  it("rejects service call when eresult is non-OK", () => {
    const protos = { decode: vi.fn().mockReturnValue({ eresult: EResult.Fail }) };
    const serviceCallMessenger = {
      resolveRequest: vi.fn(),
      rejectRequest: vi.fn(),
    };

    const handler = new ServiceMethodResponseHandler(
      protos as never,
      serviceCallMessenger as never,
    );
    const message = {
      eMsg: EMsg.k_EMsgServiceMethodResponse,
      isProto: true,
      msgName: "ServiceMethodResponse",
      rawBody: Buffer.from([1]),
      header: {
        target_job_name: "Authentication.BeginAuthSessionViaQR#1",
        jobid_target: 7n,
        eresult: EResult.OK,
      },
    };

    handler.handle(message as never);

    expect(serviceCallMessenger.rejectRequest).toHaveBeenCalledWith(
      message.header.jobid_target,
      expect.any(SteamProtocolEResultError),
    );
    const rejectedError = serviceCallMessenger.rejectRequest.mock.calls[0]?.[1];
    expect(rejectedError).toBeInstanceOf(SteamProtocolEResultError);
    expect(rejectedError).toMatchObject({
      subsystem: "eresult",
      protoName: "CAuthentication_BeginAuthSessionViaQR_Response",
      eresultCode: EResult.Fail,
      eresultName: "Fail",
      jobIdTarget: "7",
    });
    expect((rejectedError as Error).message).toContain("EResult.Fail=2");
    expect(serviceCallMessenger.resolveRequest).not.toHaveBeenCalled();
  });
});
