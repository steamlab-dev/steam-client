import { extractInterfaceProperties, writeFileSync } from "./common/util";

const SteamProtosPath = "./src/common/steam-language/steam/protoTypesBundle.ts";

const SUFFIXES = {
  request: ["request"],
  response: ["response", "reply", "ack"],
};

const EMSG_RESPONSE_SUFFIXES = ["Response", "Reply", "Ack"] as const;

const fileHeader = "/**\n * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!\n */";

export default async function main(): Promise<void> {
  const { EMsg } = await import(
    "../src/common/steam-language/protos-definitions/steam/enums_clientserver"
  );
  const protoNames = extractInterfaceProperties(SteamProtosPath, "SteamProtos");
  const dedupedEMsg = removeDuplicateValues(EMsg);
  const protoNameLookup = createCaseInsensitiveLookup(protoNames);
  const eMsgKeySet = new Set(Object.keys(dedupedEMsg));

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

  const EMsgMapToProtoName: string[] = [];
  for (const [eMsgKey, protoName] of eMsgToProtoName) {
    EMsgMapToProtoName.push(`[EMsg.${eMsgKey}]: '${protoName}'`);
  }

  const EMsgMapToResponse: string[] = [];
  for (const [eMsgKey, eMsgRes] of eMsgReqToEMsgRes) {
    EMsgMapToResponse.push(`[EMsg.${eMsgKey}]: EMsg.${eMsgRes}`);
  }

  const fileContent = [
    fileHeader,
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
    EMsgMapToProtoName.join(","),
    "} as const;",
    "",
    "export const EMsgMapFromProtoName = invertRecord(EMsgMapToProtoName)",
    "",
    "export const EMsgMapToResponse = {",
    EMsgMapToResponse.join(","),
    "} as const;",
    "",
    "export type EMsgMapToPayload = {",
    "  [K in keyof typeof EMsgMapToProtoName]: SteamProtos[(typeof EMsgMapToProtoName)[K]];",
    "}",
  ];

  writeFileSync("./src/common/steam-language/steam/EMsgMapping.ts", fileContent.join("\n"));
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
