/**
 * Builds the generated EMsg-to-protobuf mapping used by the Steam client.
 *
 * The script reads the generated `SteamProtos` interface and the Steam `EMsg`
 * enum, matches message names to protobuf payload types, infers request to
 * response relationships, and writes the resulting lookup tables to
 * `src/common/steam-language/steam/EMsgMapping.ts`.
 */

import { extractInterfaceProperties, writeFileSync } from "./common/util";

const STEAM_PROTOS_PATH = "./src/common/steam-language/steam/protoTypesBundle.ts";
const EMSG_MAPPING_OUTPUT_PATH = "./src/common/steam-language/steam/EMsgMapping.ts";
const EMSG_ENUM_MODULE_PATH =
  "../../src/common/steam-language/protos-definitions/steam/enums_clientserver";

const SUFFIXES = {
  request: ["request"],
  response: ["response", "reply", "ack"],
};

const EMSG_RESPONSE_SUFFIXES = ["Response", "Reply", "Ack"] as const;

const GENERATED_FILE_HEADER = "/**\n * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!\n */";

export default async function main(): Promise<void> {
  const { EMsg } = await import(EMSG_ENUM_MODULE_PATH);
  const protoNames = extractInterfaceProperties(STEAM_PROTOS_PATH, "SteamProtos");
  const dedupedEMsg = removeDuplicateValues(EMsg);
  const eMsgToProtoName = buildEMsgToProtoNameMap(dedupedEMsg, protoNames);
  const eMsgReqToEMsgRes = buildEMsgRequestToResponseMap(eMsgToProtoName, dedupedEMsg, protoNames);
  const fileContent = createGeneratedFileContent(eMsgToProtoName, eMsgReqToEMsgRes);

  writeFileSync(EMSG_MAPPING_OUTPUT_PATH, fileContent.join("\n"));
}

function buildEMsgToProtoNameMap(
  dedupedEMsg: Record<string, number>,
  protoNames: string[],
): Map<string, string> {
  const protoNameLookup = createCaseInsensitiveLookup(protoNames);
  const eMsgToProtoName = new Map<string, string>();
  const protoNameToEMsg = new Map<string, string>();

  // Build proto-backed EMsg relationships first.
  for (const key of Object.keys(dedupedEMsg)) {
    const resolvedProto = resolveProtoNameForEMsgKey(key, protoNameLookup);
    if (!resolvedProto) {
      continue;
    }

    eMsgToProtoName.set(key, resolvedProto.protoName);

    // Prefer direct EMsg->proto matches when both direct and fallback mappings exist.
    const existing = protoNameToEMsg.get(resolvedProto.protoName);
    if (!existing || resolvedProto.isDirect) {
      protoNameToEMsg.set(resolvedProto.protoName, key);
    }
  }

  return eMsgToProtoName;
}

function buildEMsgRequestToResponseMap(
  eMsgToProtoName: Map<string, string>,
  dedupedEMsg: Record<string, number>,
  protoNames: string[],
): Map<string, string> {
  const protoNameToEMsg = createProtoNameToEMsgMap(dedupedEMsg, protoNames);
  const eMsgKeySet = new Set(Object.keys(dedupedEMsg));

  // Build request->response pairs from detected proto relationships.
  const eMsgReqToEMsgRes = new Map<string, string>();

  for (const [eMsgKey, protoName] of eMsgToProtoName) {
    if (isResponseLikeProtoName(protoName)) {
      continue;
    }

    const protoNameRes = findProtoResponse(protoName, protoNames);
    if (!protoNameRes) {
      continue;
    }

    const eMsgRes =
      protoNameToEMsg.get(protoNameRes) ?? findResponseEMsgFallback(eMsgKey, eMsgKeySet);
    if (!eMsgRes || eMsgRes === eMsgKey) {
      continue;
    }

    eMsgReqToEMsgRes.set(eMsgKey, eMsgRes);
  }

  return eMsgReqToEMsgRes;
}

function createProtoNameToEMsgMap(
  dedupedEMsg: Record<string, number>,
  protoNames: string[],
): Map<string, string> {
  const protoNameLookup = createCaseInsensitiveLookup(protoNames);
  const protoNameToEMsg = new Map<string, string>();

  for (const key of Object.keys(dedupedEMsg)) {
    const resolvedProto = resolveProtoNameForEMsgKey(key, protoNameLookup);
    if (!resolvedProto) {
      continue;
    }

    const existing = protoNameToEMsg.get(resolvedProto.protoName);
    if (!existing || resolvedProto.isDirect) {
      protoNameToEMsg.set(resolvedProto.protoName, key);
    }
  }

  return protoNameToEMsg;
}

function createGeneratedFileContent(
  eMsgToProtoName: Map<string, string>,
  eMsgReqToEMsgRes: Map<string, string>,
): string[] {
  const eMsgMapToProtoNameEntries = Array.from(
    eMsgToProtoName,
    ([eMsgKey, protoName]) => `[EMsg.${eMsgKey}]: '${protoName}'`,
  );

  const eMsgMapToResponseEntries = Array.from(
    eMsgReqToEMsgRes,
    ([eMsgKey, eMsgRes]) => `[EMsg.${eMsgKey}]: EMsg.${eMsgRes}`,
  );

  return [
    GENERATED_FILE_HEADER,
    "",
    "import type { SteamProtos } from './protoTypesBundle'",
    'import { EMsg } from "../protos-definitions/steam/enums_clientserver";',
    "",
    "function invertRecord<const T extends Record<number, string>>(record: T) {",
    "  return Object.fromEntries(",
    "    Object.entries(record).map(([key, value]) => [value, Number(key)]),",
    "  ) as { [K in keyof T as Extract<T[K], string>]: K };",
    "}",
    "",
    "export const EMsgMapToProtoName = {",
    eMsgMapToProtoNameEntries.join(","),
    "} as const;",
    "",
    "export const EMsgMapFromProtoName = invertRecord(EMsgMapToProtoName)",
    "",
    "export const EMsgMapToResponse = {",
    eMsgMapToResponseEntries.join(","),
    "} as const;",
    "",
    "export type EMsgMapToPayload = {",
    "  [K in keyof typeof EMsgMapToProtoName]: SteamProtos[(typeof EMsgMapToProtoName)[K]];",
    "}",
    "",
    "export type EMsgMapRequestPayloadByEMsg<K extends EMsg> =",
    "  K extends keyof EMsgMapToPayload ? EMsgMapToPayload[K] : never;",
    "",
    "export type EMsgMapResponseEMsgByRequestEMsg<K extends EMsg> =",
    "  K extends keyof typeof EMsgMapToResponse ? (typeof EMsgMapToResponse)[K] : never;",
    "",
    "export type EMsgMapResponsePayloadByRequestEMsg<K extends EMsg> =",
    "  EMsgMapResponseEMsgByRequestEMsg<K> extends keyof EMsgMapToPayload",
    "    ? EMsgMapToPayload[EMsgMapResponseEMsgByRequestEMsg<K>]",
    "    : never;",
  ];
}

function removeDuplicateValues(obj: Record<string, number>): Record<string, number> {
  const valueToKey = new Map<number, string>();
  const result: Record<string, number> = {};

  // First pass: iterate through the object to find the last occurrence of each value
  for (const [key, value] of Object.entries(obj)) {
    valueToKey.set(value, key);
  }

  // Second pass: build the result object with only the last occurrence of each value
  for (const [value, key] of valueToKey) {
    result[key] = value;
  }

  return result;
}

function createCaseInsensitiveLookup(allNames: string[]): Record<string, string> {
  const lookup: Record<string, string> = {};
  for (const name of allNames) {
    lookup[name.toLowerCase()] = name;
  }
  return lookup;
}

function isResponseLikeProtoName(protoName: string): boolean {
  const lowerProtoName = protoName.toLowerCase();
  return SUFFIXES.response.some((suffix) => lowerProtoName.endsWith(suffix));
}

function findProtoResponse(protoNameRequest: string, allProtoNames: string[]): string | undefined {
  const lowerToOriginal = createCaseInsensitiveLookup(allProtoNames);
  const lowerRequest = protoNameRequest.toLowerCase();

  let baseName = lowerRequest;
  for (const reqSuffix of SUFFIXES.request) {
    if (lowerRequest.endsWith(reqSuffix)) {
      baseName = lowerRequest.slice(0, -reqSuffix.length);
      break;
    }
  }

  for (const resSuffix of SUFFIXES.response) {
    const potentialResponse = baseName + resSuffix;
    const resolvedResponse = lowerToOriginal[potentialResponse];
    if (resolvedResponse) {
      return resolvedResponse;
    }
  }

  return undefined;
}

function findResponseEMsgFallback(
  requestEMsgKey: string,
  eMsgKeySet: Set<string>,
): string | undefined {
  const requestWithoutRequest = requestEMsgKey.endsWith("Request")
    ? requestEMsgKey.slice(0, -"Request".length)
    : requestEMsgKey;

  const candidateEMsgs = [
    ...EMSG_RESPONSE_SUFFIXES.map((suffix) => `${requestEMsgKey}${suffix}`),
    ...EMSG_RESPONSE_SUFFIXES.map((suffix) => `${requestWithoutRequest}${suffix}`),
  ];

  for (const candidate of candidateEMsgs) {
    if (candidate !== requestEMsgKey && eMsgKeySet.has(candidate)) {
      return candidate;
    }
  }

  return undefined;
}

function resolveProtoNameForEMsgKey(
  eMsgKey: string,
  protoNameLookup: Record<string, string>,
): { protoName: string; isDirect: boolean } | undefined {
  const directProtoName = eMsgKey.replace("k_EMsg", "CMsg");
  const directResolved = protoNameLookup[directProtoName.toLowerCase()];
  if (directResolved) {
    return { protoName: directResolved, isDirect: true };
  }

  const fallbackProtoNames = getProtoFallbackCandidatesForEMsgKey(eMsgKey);
  for (const fallbackProtoName of fallbackProtoNames) {
    const resolvedFallback = protoNameLookup[fallbackProtoName.toLowerCase()];
    if (resolvedFallback) {
      return { protoName: resolvedFallback, isDirect: false };
    }
  }

  return undefined;
}

function getProtoFallbackCandidatesForEMsgKey(eMsgKey: string): string[] {
  const eMsgBaseName = eMsgKey.replace("k_EMsg", "");
  const candidates: string[] = [];

  if (eMsgBaseName.endsWith("RequestResponse")) {
    const requestBaseName = eMsgBaseName.slice(0, -"RequestResponse".length);
    candidates.push(`CMsg${requestBaseName}Reply`);
    candidates.push(`CMsg${requestBaseName}Response`);
    candidates.push(`CMsg${requestBaseName}Ack`);
  }

  if (eMsgBaseName.endsWith("Response")) {
    const responseBaseName = eMsgBaseName.slice(0, -"Response".length);
    candidates.push(`CMsg${responseBaseName}Reply`);
  }

  if (eMsgBaseName.endsWith("Reply")) {
    const replyBaseName = eMsgBaseName.slice(0, -"Reply".length);
    candidates.push(`CMsg${replyBaseName}Response`);
  }

  if (eMsgBaseName.endsWith("Ack")) {
    const ackBaseName = eMsgBaseName.slice(0, -"Ack".length);
    candidates.push(`CMsg${ackBaseName}Response`);
    candidates.push(`CMsg${ackBaseName}Reply`);
  }

  return [...new Set(candidates)];
}
