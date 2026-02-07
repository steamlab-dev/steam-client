import { extractInterfaceProperties, writeFileSync } from "./common/util";

const SteamProtosPath = "./src/common/steam-language/steam/protoTypesBundle.ts";

const SUFFIXES = {
  request: ["request"],
  response: ["response", "reply", "ack"],
};

const fileHeader = "/**\n * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!\n */";

export default async function main(): Promise<void> {
  const { EMsg } = await import(
    "../src/common/steam-language/protos-definitions/steam/enums_clientserver"
  );
  const ProtoNames = extractInterfaceProperties(SteamProtosPath, "SteamProtos");
  const dedupedEMsg = removeDuplicateValues(EMsg);

  const EMsgToProtoName: string[] = [];
  const EMsgFromProtoName: string[] = [];

  const EMsgToProtoNameRes: string[] = [];
  const EMsgReqToEMsgRes: string[] = [];

  const EMsgReqWithRes: string[] = [];
  const EMsgReqWithoutRes: string[] = [];

  const InterfaceEMsgToProto: string[] = [];

  // helpers to create EMsgReqToEMsgRes
  const EMsgReqToProtoNameRes = new Map<string, string | undefined>();
  const ProtoNameToEMsg = new Map<string, string>();

  // loop through all key:pair in EMsg
  for (const [key, _value] of Object.entries(dedupedEMsg)) {
    const protoName = key.replace("k_EMsg", "CMsg");

    const protoExists = ProtoNames.includes(protoName);
    if (!protoExists) {
      continue;
    }

    EMsgToProtoName.push(`[EMsg.${key}]: ${protoExists ? `'${protoName}'` : "'DoesNotExist'"}`);
    EMsgFromProtoName.push(
      `"${protoExists ? `${protoName}` : `DoesNotExist_${protoName}`}": EMsg.${key}`,
    );
    InterfaceEMsgToProto.push(`[EMsg.${key}]: SteamProtos['${protoName}']`);

    // helper to create EMsgReqToEMsgRes
    ProtoNameToEMsg.set(protoName, key);

    const isProtoNameReq = !SUFFIXES.response.some((s) => protoName.toLowerCase().endsWith(s));
    if (!isProtoNameReq) {
      continue;
    }

    // find protoName resonse
    const protoNameRes = findProtoResponse(protoName, ProtoNames);

    if (protoNameRes) {
      EMsgToProtoNameRes.push(
        `[EMsg.${key}]: ${protoNameRes ? `'${protoNameRes}'` : "'NoResponse'"}`,
      );
    }

    // helper to create EMsgReqToEMsgRes
    EMsgReqToProtoNameRes.set(key, protoNameRes);
  }

  // create EMsgReqToEMsgRes const
  for (const [EMsgKey, protoNameRes] of EMsgReqToProtoNameRes) {
    if (!protoNameRes) {
      //EMsgReqToEMsgRes.push(`${EMsgKey}: "NoResponse"`)
      EMsgReqWithoutRes.push(`EMsgType['${EMsgKey}']`);
      continue;
    }

    const EMsgRes = ProtoNameToEMsg.get(protoNameRes);

    if (!EMsgRes) {
      continue;
    }

    EMsgReqToEMsgRes.push(`[EMsg.${EMsgKey}]: ${EMsgRes ? `EMsg.${EMsgRes}` : "'NoResponse'"}`);
    EMsgReqWithRes.push(`EMsgType['${EMsgKey}']`);
  }

  const fileContent = [
    fileHeader,
    "",
    "import type { SteamProtos } from './protoTypesBundle'",
    'import { EMsg } from "../protos-definitions/steam/enums_clientserver";',
    "type EMsgType = typeof EMsg",
    "",
    "export const EMsgToProtoName = {",
    EMsgToProtoName.join(","),
    "} as const;",
    "",
    "export const EMsgFromProtoName = {",
    EMsgFromProtoName.join(","),
    "} as const;",
    "",
    "export const EMsgToProtoNameRes = {",
    EMsgToProtoNameRes.join(","),
    "} as const;",
    "",
    "export const EMsgReqToEMsgRes = {",
    EMsgReqToEMsgRes.join(","),
    "} as const;",
    "",
    "export interface EMsgToProto {",
    InterfaceEMsgToProto.join(";"),
    "}",
    `export type EMsgReqWithOutRes = ${EMsgReqWithoutRes.join(" | ")}`,
    "",
    `export type EMsgReqWithRes = ${EMsgReqWithRes.join(" | ")}`,
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

function findProtoResponse(protoNameRequest: string, allProtoNames: string[]): string | undefined {
  // 1. Create a map for fast, case-insensitive lookups while preserving original casing.
  const lowerToOriginal: Record<string, string> = {};
  for (const name of allProtoNames) {
    lowerToOriginal[name.toLowerCase()] = name;
  }

  const lowerRequest = protoNameRequest.toLowerCase();

  // 2. Strategy B: Determine the "base name" of the request.
  let baseName: string | null = null;

  // Try stripping a known request suffix to find the base name.
  // Example: "CMsgClientServerTimestampRequest" -> "CMsgClientServerTimestamp"
  for (const reqSuffix of SUFFIXES.request) {
    if (lowerRequest.endsWith(reqSuffix)) {
      baseName = lowerRequest.slice(0, -reqSuffix.length);
      break;
    }
  }

  // If no request suffix was found, assume the entire name is the base.
  // Example: "CMsgClientLogon" -> "cmsgclientlogon"
  if (baseName === null) {
    baseName = lowerRequest;
  }

  // 4. Strategy C: Attempt to find a response by adding common response suffixes to the base name.
  for (const resSuffix of SUFFIXES.response) {
    const potentialResponse = baseName + resSuffix;
    // Check if this constructed response name exists in our case-insensitive map.
    if (lowerToOriginal[potentialResponse]) {
      // If it exists, return the original, correctly-cased name.
      return lowerToOriginal[potentialResponse];
    }
  }

  // 5. If no strategies yielded a match, return undefined.
  return undefined;
}
