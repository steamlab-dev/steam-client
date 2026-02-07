import fs from "node:fs";
import ts from "typescript";
import { extractInterfaceProperties, writeFileSync } from "./common/util";

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
function parseServiceMappings(
  filePath: string,
  interfaceName: string,
): { mappings: Record<string, string>; requestsWithoutResponse: string[] } {
  const program = createTypeScriptProgram(filePath);
  const checker = program.getTypeChecker();
  const sourceFile = program.getSourceFile(filePath);

  if (!sourceFile) {
    throw new Error(`Could not load source file: ${filePath}`);
  }

  const mappings: Record<string, string> = {};
  const requestsWithoutResponse: string[] = [];

  extractInterfaceProperties(filePath, interfaceName);

  let targetInterface: ts.InterfaceDeclaration | undefined;

  function findInterface(node: ts.Node): void {
    if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
      targetInterface = node;
      return;
    }
    ts.forEachChild(node, findInterface);
  }

  findInterface(sourceFile);

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

/**
 * Extracts method mappings from a service type using the type checker
 */
function extractMethodMappingsFromType(
  serviceType: ts.Type,
  checker: ts.TypeChecker,
): { mappings: Record<string, string>; requestsWithoutResponse: string[] } {
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

/**
 * Main function that processes the Steam services interface
 * and writes the extracted mappings to a TypeScript file
 */
export default function main(): void {
  const inputPath = "./src/common/steam-language/steam/serviceInterfaceBundle.ts";
  const outputPath = "./src/common/steam-language/steam/ServiceReqtoResMap.ts";
  const interfaceName = "SteamServices";

  if (!fs.existsSync(inputPath)) {
    throw new Error(`File not found: ${inputPath}`);
  }

  const { mappings, requestsWithoutResponse } = parseServiceMappings(inputPath, interfaceName);

  if (Object.keys(mappings).length === 0 && requestsWithoutResponse.length === 0) {
    return;
  }

  const content = [
    "/**\n * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!\n */",
    "",
    "export const ServiceCallToResMap = {",
    `${Object.entries(mappings)
      .map(([request, response]) => `  "${request}": "${response}",`)
      .join("\n")}`,
    "} as const;",
    "",
    `export type ServiceCallsWithOutRes = ${requestsWithoutResponse
      .map((r) => `'${r}'`)
      .join(" | ")}`,
    "",
  ];

  writeFileSync(outputPath, content.join("\n"));
}
