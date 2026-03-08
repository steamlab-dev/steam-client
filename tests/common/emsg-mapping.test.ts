import { describe, expect, it } from "vitest";
import { EMsg, EMsgMapToProtoName, EMsgMapToResponse } from "@/common/steam-language";

describe("EMsgMapping generation", () => {
  it("maps standard request/response pairs", () => {
    expect(EMsgMapToResponse[EMsg.k_EMsgClientLogon as keyof typeof EMsgMapToResponse]).toBe(
      EMsg.k_EMsgClientLogOnResponse,
    );
  });

  it("maps RequestResponse enum keys to reply protos and request/response pairs", () => {
    expect(
      EMsgMapToResponse[EMsg.k_EMsgClientNetworkingCertRequest as keyof typeof EMsgMapToResponse],
    ).toBe(EMsg.k_EMsgClientNetworkingCertRequestResponse);
    expect(
      EMsgMapToResponse[
        EMsg.k_EMsgClientNetworkingMobileCertRequest as keyof typeof EMsgMapToResponse
      ],
    ).toBe(EMsg.k_EMsgClientNetworkingMobileCertRequestResponse);

    expect(
      EMsgMapToProtoName[
        EMsg.k_EMsgClientNetworkingCertRequestResponse as keyof typeof EMsgMapToProtoName
      ],
    ).toBe("CMsgClientNetworkingCertReply");
    expect(
      EMsgMapToProtoName[
        EMsg.k_EMsgClientNetworkingMobileCertRequestResponse as keyof typeof EMsgMapToProtoName
      ],
    ).toBe("CMsgClientNetworkingMobileCertReply");
  });

  it("leaves unpaired request-like messages unmapped", () => {
    expect(
      EMsgMapToResponse[EMsg.k_EMsgClientRichPresenceRequest as keyof typeof EMsgMapToResponse],
    ).toBeUndefined();
  });

  it("includes empty-message proto mappings", () => {
    expect(
      EMsgMapToProtoName[
        EMsg.k_EMsgClientSiteLicenseGetContentCacheInfo as keyof typeof EMsgMapToProtoName
      ],
    ).toBe("CMsgClientSiteLicenseGetContentCacheInfo");
  });
});
