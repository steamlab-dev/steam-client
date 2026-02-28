import { EMsg } from "@/common/steam-language";
import { resolveEResultName } from "@/steam-protocol/error";
import type { ParsedMessage } from "../../types";

const isServiceCallMessage = (message: ParsedMessage) =>
  (message.isProto && message.eMsg === EMsg.k_EMsgServiceMethod) ||
  message.eMsg === EMsg.k_EMsgServiceMethodResponse;
const isRegularProtoMessage = (message: ParsedMessage) =>
  message.isProto && !isServiceCallMessage(message);
const isNonProtoMessage = (message: ParsedMessage) => !message.isProto;

const isKeyOf = <T extends object>(obj: T, key: PropertyKey): key is keyof T => key in obj;

const extractEResult = (
  decodedBody: Record<string, unknown>,
  headerEResult: number | undefined,
): number | undefined => {
  return (decodedBody.eresult as number | undefined) ?? headerEResult;
};

export {
  extractEResult,
  isServiceCallMessage,
  isRegularProtoMessage,
  isNonProtoMessage,
  isKeyOf,
  resolveEResultName,
};
