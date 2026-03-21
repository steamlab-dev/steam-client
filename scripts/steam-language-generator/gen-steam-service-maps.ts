/**
 * Builds the generated service request-to-response mapping used by the Steam client.
 *
 * The script loads the generated `SteamServices` interface, uses the TypeScript
 * type checker to inspect each service method signature, extracts request and
 * response payload type pairs, and writes the result to
 * `src/common/steam-language/steam/ServiceReqtoResMap.ts`.
 */

import fs from "node:fs";
import ts from "typescript";
import { writeFileSync } from "./common/util";

const SERVICE_INTERFACE_BUNDLE_PATH = "./src/common/steam-language/steam/serviceInterfaceBundle.ts";
const SERVICE_MAPPING_OUTPUT_PATH = "./src/common/steam-language/steam/ServiceReqtoResMap.ts";
const SERVICE_INTERFACE_NAME = "SteamServices";
const GENERATED_FILE_HEADER = "/**\n * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!\n */";

type ServiceMappingsResult = {
  mappings: Record<string, string>;
  requestsWithoutResponse: string[];
};

/**
 * Creates a TypeScript program with proper module resolution
 */
function createTypeScriptProgram(filePath: string): ts.Program {
  const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.Latest,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.NodeJs,
    allowJs: true,
    declaration: true,
    esModuleInterop: true,
    skipLibCheck: true,
    strict: false,
  };

  const program = ts.createProgram([filePath], compilerOptions);
  return program;
}

/**
 * Extracts request-response mappings using TypeScript's type checker
 */
function parseServiceMappings(filePath: string, interfaceName: string): ServiceMappingsResult {
  const program = createTypeScriptProgram(filePath);
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(filePath);

  if (!sourceFile) {
    throw new Error(`Could not load source file: ${filePath}`);
  }

  const mappings: Record<string, string> = {};
  const requestsWithoutResponse: string[] = [];

  const targetInterface = findInterfaceDeclaration(sourceFile, interfaceName);

  if (!targetInterface) {
    throw new Error(`Interface ${interfaceName} not found`);
  }

  targetInterface.members.forEach((member) => {
    if (ts.isPropertySignature(member) && member.name && member.type) {
      const serviceType = checker.getTypeAtLocation(member.type);
      const { mappings: methodMappings, requestsWithoutResponse: newRequests } =
        extractMethodMappingsFromType(serviceType, checker);
      Object.assign(mappings, methodMappings);
      requestsWithoutResponse.push(...newRequests);
    }
  });

  return { mappings, requestsWithoutResponse };
}

function findInterfaceDeclaration(
  sourceFile: ts.SourceFile,
  interfaceName: string,
): ts.InterfaceDeclaration | undefined {
  let targetInterface: ts.InterfaceDeclaration | undefined;

  function visit(node: ts.Node): void {
    if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
      targetInterface = node;
      return;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return targetInterface;
}

/**
 * Extracts method mappings from a service type using the type checker
 */
function extractMethodMappingsFromType(
  serviceType: ts.Type,
  checker: ts.TypeChecker,
): ServiceMappingsResult {
  const mappings: Record<string, string> = {};
  const requestsWithoutResponse: string[] = [];

  const symbols = checker.getPropertiesOfType(serviceType);

  symbols.forEach((symbol) => {
    if (!symbol.valueDeclaration) {
      return;
    }
    const methodType = checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration);
    const callSignatures = methodType.getCallSignatures();

    callSignatures.forEach((signature) => {
      const parameters = signature.getParameters();
      if (parameters.length === 0) {
        return;
      }

      const requestParam = parameters[0];
      if (!requestParam || !requestParam.valueDeclaration) {
        return;
      }
      const requestType = checker.getTypeOfSymbolAtLocation(
        requestParam,
        requestParam.valueDeclaration,
      );
      const requestTypeName = checker.typeToString(requestType);
      const returnType = signature.getReturnType();

      if (returnType.symbol && returnType.symbol.name === "Promise") {
        const typeArgs = checker.getTypeArguments(returnType as ts.TypeReference);
        if (typeArgs && typeArgs.length > 0) {
          const responseType = typeArgs[0];
          if (!responseType) {
            requestsWithoutResponse.push(requestTypeName);
            return;
          }
          const responseTypeName = checker.typeToString(responseType);

          if (requestTypeName.includes("_") && responseTypeName.includes("_")) {
            mappings[requestTypeName] = responseTypeName;
          } else {
            requestsWithoutResponse.push(requestTypeName);
          }
        } else {
          requestsWithoutResponse.push(requestTypeName);
        }
      } else {
        requestsWithoutResponse.push(requestTypeName);
      }
    });
  });

  return { mappings, requestsWithoutResponse };
}

function buildGeneratedContent({
  mappings,
  requestsWithoutResponse,
}: ServiceMappingsResult): string {
  const mappingEntries = Object.entries(mappings)
    .map(([request, response]) => `  "${request}": "${response}",`)
    .join("\n");

  const requestsWithoutResponseUnion = requestsWithoutResponse
    .map((name) => `'${name}'`)
    .join(" | ");

  return [
    GENERATED_FILE_HEADER,
    "",
    "export const ServiceCallToResMap = {",
    mappingEntries,
    "} as const;",
    "",
    `export type ServiceCallsWithOutRes = ${requestsWithoutResponseUnion}`,
    "",
  ].join("\n");
}

/**
 * Main function that processes the Steam services interface
 * and writes the extracted mappings to a TypeScript file
 */
export default function main(): void {
  if (!fs.existsSync(SERVICE_INTERFACE_BUNDLE_PATH)) {
    throw new Error(`File not found: ${SERVICE_INTERFACE_BUNDLE_PATH}`);
  }

  const result = parseServiceMappings(SERVICE_INTERFACE_BUNDLE_PATH, SERVICE_INTERFACE_NAME);

  if (Object.keys(result.mappings).length === 0 && result.requestsWithoutResponse.length === 0) {
    return;
  }

  writeFileSync(SERVICE_MAPPING_OUTPUT_PATH, buildGeneratedContent(result));
}
