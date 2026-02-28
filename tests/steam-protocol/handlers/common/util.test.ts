import { describe, expect, it } from "vitest";
import { EMsg } from "@/common/steam-language";
import {
  extractEResult,
  isKeyOf,
  isNonProtoMessage,
  isRegularProtoMessage,
  isServiceCallMessage,
} from "@/steam-protocol/message-handler/handlers/common/util";

describe("message-handler common util", () => {
  it("detects service call messages", () => {
    expect(
      isServiceCallMessage({
        isProto: true,
        eMsg: EMsg.k_EMsgServiceMethod,
      } as never),
    ).toBe(true);
    expect(
      isServiceCallMessage({
        isProto: false,
        eMsg: EMsg.k_EMsgServiceMethodResponse,
      } as never),
    ).toBe(true);
    expect(
      isServiceCallMessage({
        isProto: true,
        eMsg: EMsg.k_EMsgClientLogOnResponse,
      } as never),
    ).toBe(false);
  });

  it("detects regular proto and non-proto messages", () => {
    expect(
      isRegularProtoMessage({
        isProto: true,
        eMsg: EMsg.k_EMsgClientLogOnResponse,
      } as never),
    ).toBe(true);
    expect(
      isRegularProtoMessage({
        isProto: true,
        eMsg: EMsg.k_EMsgServiceMethod,
      } as never),
    ).toBe(false);
    expect(
      isNonProtoMessage({
        isProto: false,
        eMsg: EMsg.k_EMsgClientLogon,
      } as never),
    ).toBe(true);
    expect(
      isNonProtoMessage({
        isProto: true,
        eMsg: EMsg.k_EMsgClientLogon,
      } as never),
    ).toBe(false);
  });

  it("extracts eresult from body first, then header fallback", () => {
    expect(extractEResult({ eresult: 5 }, 1)).toBe(5);
    expect(extractEResult({}, 9)).toBe(9);
  });

  it("checks object keys safely", () => {
    const obj = { a: 1, b: 2 };
    expect(isKeyOf(obj, "a")).toBe(true);
    expect(isKeyOf(obj, "c")).toBe(false);
  });
});
