/**
 * This script automates the conversion of Protobuf (.proto) files into TypeScript
 * type definition files (.ts). It is designed to parse the structure of proto
 * files, including messages, enums, services, and oneof blocks, and generate
 * corresponding TypeScript interfaces, const objects (for enums), and abstract service classes.
 */

import fs from "node:fs/promises"; // fs is still needed for readFileLines
import path from "node:path";
import ts from "typescript";
import { findFilesRecursive, writeFileAsync } from "./common/util";

const config = {
  protoRootDir: path.resolve("protos"),
  outputRootDir: path.resolve("src/common/steam-language/protos-definitions"),
  header: ["/**", " * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!", " */"],
};

type ProtoType = "message" | "enum" | "service";

interface ParsedProtoType {
  parsedType: string[];
  endIndex: number;
}

interface ProtoTypeResult {
  type: "enum" | "interface";
  found: boolean;
}

const protoToTsTypeMap: Record<string, string> = {
  float: "number",
  double: "number",
  int32: "number",
  uint32: "number",
  sint32: "number",
  fixed32: "number",
  sfixed32: "number",
  int64: "Long",
  uint64: "Long",
  sint64: "Long",
  fixed64: "Long",
  sfixed64: "Long",
  bool: "boolean",
  string: "string",
  bytes: "Buffer",
};

const mapProtobufTypeToTypeScript = (type: string): string => protoToTsTypeMap[type] || type;

const detectProtoType = (line: string): ProtoType | null => {
  const trimmed = line.trim();
  if (!trimmed.length) {
    return null;
  }
  if (trimmed.startsWith("message ")) {
    return "message";
  }
  if (trimmed.startsWith("enum ")) {
    return "enum";
  }
  if (trimmed.startsWith("service ")) {
    return "service";
  }
  return null;
};

const extractImportProtoFile = (line: string): string | null => {
  const match = line.match(/import\s+"([^"]+\.proto)"/);
  const proto = match?.[1];
  if (!proto || proto.includes("google")) {
    return null;
  }
  return proto;
};

const readFileLines = async (filePath: string): Promise<string[]> => {
  const content = await fs.readFile(filePath, "utf-8");
  return content.split(/\r?\n/);
};

const getOutputFilePath = (filePath: string, root: string) => {
  const parsed = path.parse(filePath);
  const parentDir = path.basename(parsed.dir);
  const fileName = `${parsed.name}.ts`;
  return path.join(root, parentDir, fileName);
};

const findBlockEndIndex = (lines: string[], startIndex: number): number => {
  let depth = 0;
  for (let i = startIndex; i < lines.length; i++) {
    const line = lines[i] ?? "";
    const opens = (line.match(/{/g) || []).length;
    const closes = (line.match(/}/g) || []).length;
    depth += opens - closes;
    if (depth === 0 && i > startIndex) {
      return i;
    }
  }

  throw new Error(`Unclosed block starting at line ${startIndex + 1}`);
};

function parseEnumBlock(start: number, lines: string[]): ParsedProtoType {
  const headerLine = lines[start];
  if (!headerLine) {
    throw new Error(`Invalid enum definition at line ${start + 1}`);
  }
  const header = headerLine.trim();
  const match = header.match(/^enum\s+(\w+)/);
  if (!match) {
    throw new Error(`Invalid enum definition at line ${start + 1}`);
  }

  const enumName = match[1];
  if (!enumName) {
    throw new Error(`Invalid enum definition at line ${start + 1}`);
  }
  const tsLines = [`export const ${enumName} = {`];
  let i = start + 1;
  const entries: string[] = [];

  while (i < lines.length) {
    const lineRaw = lines[i];
    if (lineRaw === undefined) {
      break;
    }
    const line = lineRaw.trim();
    if (line.startsWith("}")) {
      break;
    }

    const entryMatch = line.match(/^(\w+)\s*=\s*(\d+);/);
    if (entryMatch) {
      const [, key, value] = entryMatch;
      if (!key || !value) {
        throw new Error(`Invalid enum entry at line ${i + 1}`);
      }
      entries.push(`  ${key}: ${value}`);
    }
    i++;
  }

  // Add all entries without trailing commas, then close with "} as const"
  tsLines.push(
    ...entries.map((entry, index) => (index === entries.length - 1 ? entry : `${entry},`)),
  );
  tsLines.push("} as const;", "");

  // Add type export for the enum values
  tsLines.push(`export type ${enumName} = typeof ${enumName}[keyof typeof ${enumName}];`, "");

  return { parsedType: tsLines, endIndex: i };
}

function parseServiceBlock(start: number, lines: string[]): ParsedProtoType {
  const headerLine = lines[start];
  if (!headerLine) {
    throw new Error(`Invalid service declaration at line ${start + 1}`);
  }
  const match = headerLine.match(/service\s+(\w+)\s*{/);
  if (!match) {
    throw new Error(`Invalid service declaration at line ${start + 1}`);
  }

  const serviceName = match[1];
  if (!serviceName) {
    throw new Error(`Invalid service declaration at line ${start + 1}`);
  }
  const tsLines = [`export abstract class ${serviceName}Service {`];
  let i = start + 1;
  let braceDepth = 1;

  while (i < lines.length && braceDepth > 0) {
    const lineRaw = lines[i];
    if (lineRaw === undefined) {
      break;
    }
    const line = lineRaw.trim();

    if (line.includes("{")) {
      braceDepth++;
    }
    if (line.includes("}")) {
      braceDepth--;
    }
    if (braceDepth === 0) {
      break;
    }

    if (line.startsWith("rpc ")) {
      const rpcMatch = line.match(
        /rpc\s+(\w+)\s*\(\s*([.\w]+)\s*\)\s+returns\s*\(\s*([.\w]+)\s*\)/,
      );
      if (rpcMatch) {
        const [, methodName, inputType, outputType] = rpcMatch;
        if (!methodName || !inputType || !outputType) {
          throw new Error(`Invalid rpc declaration at line ${i + 1}`);
        }
        const input = inputType.replace(/^\./, "");
        const output = outputType.replace(/^\./, "");
        const returnType = output === "NoResponse" ? "void" : output;
        tsLines.push(`  abstract ${methodName}(request: ${input}): Promise<${returnType}>;`);
      }
    }
    i++;
  }

  tsLines.push("}", "");
  return { parsedType: tsLines, endIndex: i };
}

function parseOneOfBlock(start: number, lines: string[]): ParsedProtoType {
  const headerLine = lines[start];
  if (!headerLine) {
    throw new Error(`Invalid oneof definition at line ${start + 1}`);
  }
  const header = headerLine.trim();
  const match = header.match(/^oneof\s+(\w+)\s*\{/);
  if (!match) {
    throw new Error(`Invalid oneof definition at line ${start + 1}`);
  }

  const oneofName = match[1];
  if (!oneofName) {
    throw new Error(`Invalid oneof definition at line ${start + 1}`);
  }
  let i = start + 1;
  const fieldTypes: string[] = [];

  while (i < lines.length) {
    const lineRaw = lines[i];
    if (lineRaw === undefined) {
      throw new Error(`Invalid oneof definition at line ${i + 1}`);
    }
    const line = lineRaw.trim();
    if (line.startsWith("}")) {
      break;
    }
    if (!line || line.startsWith("//")) {
      i++;
      continue;
    }

    const fieldMatch = line.match(/^(\.?\w+(?:\.\w+)*)\s+(\w+)\s*=\s*\d+;/);
    if (fieldMatch) {
      const [, type, fieldName] = fieldMatch;
      if (!type || !fieldName) {
        throw new Error(`Invalid field definition in oneof at line ${i + 1}: ${line}`);
      }
      const cleanType = type.startsWith(".") ? type.substring(1) : type;
      const tsType = mapProtobufTypeToTypeScript(cleanType);
      fieldTypes.push(`{ ${fieldName}: ${tsType} }`);
    } else {
      throw new Error(`Invalid field definition in oneof at line ${i + 1}: ${line}`);
    }
    i++;
  }

  if (i >= lines.length) {
    throw new Error(`Unclosed oneof block starting at line ${start + 1}`);
  }
  if (fieldTypes.length === 0) {
    throw new Error(`Empty oneof block at line ${start + 1}`);
  }

  const fieldType = fieldTypes.join(" | ");
  const fieldDefinition = `${oneofName}?: ${fieldType};`;
  return { parsedType: [fieldDefinition], endIndex: i };
}

function parseMessageBlock(lines: string[], startIndex: number): ParsedProtoType {
  const lineRaw = lines[startIndex];
  if (lineRaw === undefined) {
    throw new Error(`Expected message declaration at line ${startIndex}`);
  }
  const line = lineRaw.trim();
  const messageMatch = line.match(/^message\s+(\w+)\s*\{/);
  if (!messageMatch) {
    throw new Error(`Expected message declaration at line ${startIndex}`);
  }

  const messageName = messageMatch[1];
  if (!messageName) {
    throw new Error(`Expected message declaration at line ${startIndex}`);
  }
  const endIndex = findBlockEndIndex(lines, startIndex);
  let currentIndex = startIndex + 1;
  const fields: string[] = [];
  const nestedDefinitions: string[] = [];

  while (currentIndex < lines.length && currentIndex < endIndex) {
    const currentLineRaw = lines[currentIndex];
    if (currentLineRaw === undefined) {
      break;
    }
    const currentLine = currentLineRaw.trim();

    if (currentLine === "}") {
      currentIndex++;
      continue;
    }

    if (!currentLine || currentLine.startsWith("//")) {
      currentIndex++;
      continue;
    }

    if (/^enum\s+/.test(currentLine) && currentLine.includes("{")) {
      const enumResult = parseEnumBlock(currentIndex, lines);
      nestedDefinitions.push(...enumResult.parsedType);
      currentIndex = enumResult.endIndex + 1;
      continue;
    }

    if (/^oneof\s+/.test(currentLine) && currentLine.includes("{")) {
      const oneofResult = parseOneOfBlock(currentIndex, lines);
      fields.push(...oneofResult.parsedType.map((line) => `  ${line}`));
      currentIndex = oneofResult.endIndex + 1;
      continue;
    }

    if (/^message\s+/.test(currentLine) && currentLine.includes("{")) {
      const nestedResult = parseMessageBlock(lines, currentIndex);
      nestedDefinitions.push(...nestedResult.parsedType);
      currentIndex = nestedResult.endIndex + 1;
      continue;
    }

    if (currentLine.includes("{")) {
      currentIndex++;
      let nestedBraces = 1;
      while (currentIndex < lines.length && nestedBraces > 0) {
        const nestedLineRaw = lines[currentIndex];
        if (nestedLineRaw === undefined) {
          break;
        }
        const nestedLine = nestedLineRaw.trim();
        if (nestedLine.includes("{")) {
          nestedBraces++;
        }
        if (nestedLine === "}") {
          nestedBraces--;
        }
        currentIndex++;
      }
      continue;
    }

    // Process regular fields - handle all field types consistently
    const namespacedMatch = currentLine.match(
      /^(required|optional|repeated)?\s*\.(\w+)\.(\w+)\s+(\w+)\s*=\s*\d+(?:\s*\[.*?\])?;/,
    );
    const topLevelMatch = currentLine.match(
      /^(required|optional|repeated)?\s*\.(\w+)\s+(\w+)\s*=\s*\d+(?:\s*\[.*?\])?;/,
    );
    const regularMatch = currentLine.match(
      /^(required|optional|repeated)?\s*(\w+)\s+(\w+)\s*=\s*\d+(?:\s*\[.*?\])?;/,
    );

    if (namespacedMatch) {
      const [, modifier, parentType, nestedType, fieldName] = namespacedMatch;
      if (!parentType || !nestedType || !fieldName) {
        throw new Error(`Invalid field definition at line ${currentIndex + 1}`);
      }
      const isArray = modifier === "repeated";
      const finalType = isArray ? `${parentType}.${nestedType}[]` : `${parentType}.${nestedType}`;
      const optionalMarker = "?";
      fields.push(`  ${fieldName}${optionalMarker}: ${finalType};`);
    } else if (topLevelMatch) {
      const [, modifier, type, fieldName] = topLevelMatch;
      if (!type || !fieldName) {
        throw new Error(`Invalid field definition at line ${currentIndex + 1}`);
      }
      const isArray = modifier === "repeated";
      const finalType = isArray ? `${type}[]` : type;
      const optionalMarker = "?";
      fields.push(`  ${fieldName}${optionalMarker}: ${finalType};`);
    } else if (regularMatch) {
      const [, modifier, type, fieldName] = regularMatch;
      if (!type || !fieldName) {
        throw new Error(`Invalid field definition at line ${currentIndex + 1}`);
      }
      const tsType = mapProtobufTypeToTypeScript(type);
      const isArray = modifier === "repeated";
      const finalType = isArray ? `${tsType}[]` : tsType;
      const optionalMarker = "?";
      fields.push(`  ${fieldName}${optionalMarker}: ${finalType};`);
    }

    currentIndex++;
  }

  if (nestedDefinitions.length > 0) {
    const interfaceLines = [];

    // If the message itself is empty, use Record<string, never> instead of empty interface
    if (fields.length === 0) {
      interfaceLines.push(`export type ${messageName} = Record<string, never>;`, "");
    } else {
      interfaceLines.push(`export interface ${messageName} {`, ...fields, "}", "");
    }

    interfaceLines.push(`export namespace ${messageName} {`);
    nestedDefinitions.forEach((line) => {
      interfaceLines.push(line.startsWith("export ") ? `  ${line}` : `  ${line}`);
    });
    interfaceLines.push("}");

    return { parsedType: interfaceLines, endIndex: currentIndex };
  }

  // If empty message, use Record<string, never> instead of {}
  if (fields.length === 0) {
    return {
      parsedType: [`export type ${messageName} = Record<string, never>;`, ""],
      endIndex: currentIndex,
    };
  }

  return {
    parsedType: [`export interface ${messageName} {`, ...fields, "}", ""],
    endIndex: currentIndex,
  };
}

function consolidateImports(importStatements: string[]): string[] {
  const moduleMap = new Map<string, Set<string>>();
  const defaultImports = new Map<string, string>();

  importStatements.forEach((statement) => {
    // Named imports: import { A, B } from 'module';
    const namedMatch = statement.match(/^import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"];?$/);
    if (namedMatch) {
      const [, imports, moduleName] = namedMatch;
      if (!imports || !moduleName) {
        return;
      }
      const importNames = imports.split(",").map((name) => name.trim());

      if (!moduleMap.has(moduleName)) {
        moduleMap.set(moduleName, new Set());
      }
      const moduleSet = moduleMap.get(moduleName);
      if (moduleSet) {
        importNames.forEach((name) => {
          moduleSet.add(name);
        });
      }
      return;
    }

    // Default imports: import Foo from 'module';
    const defaultMatch = statement.match(/^import\s+([A-Za-z0-9_$]+)\s+from\s+['"]([^'"]+)['"];?$/);
    if (defaultMatch) {
      const [, defaultName, moduleName] = defaultMatch;
      if (!defaultName || !moduleName) {
        return;
      }
      if (!defaultImports.has(moduleName)) {
        defaultImports.set(moduleName, defaultName);
      }
      return;
    }
  });

  const consolidatedImports: string[] = [];

  // Merge defaults and named imports per module
  const modules = new Set<string>([...moduleMap.keys(), ...defaultImports.keys()]);
  const sortedModules = Array.from(modules).sort();
  for (const moduleName of sortedModules) {
    const defaultName = defaultImports.get(moduleName);
    const importSet = moduleMap.get(moduleName);

    if (defaultName && importSet && importSet.size > 0) {
      const sortedImports = Array.from(importSet).sort();
      consolidatedImports.push(
        `import ${defaultName}, { ${sortedImports.join(", ")} } from '${moduleName}';`,
      );
      continue;
    }

    if (defaultName) {
      consolidatedImports.push(`import ${defaultName} from '${moduleName}';`);
      continue;
    }

    if (importSet && importSet.size > 0) {
      const sortedImports = Array.from(importSet).sort();
      if (sortedImports.length === 1) {
        consolidatedImports.push(`import type { ${sortedImports[0]} } from '${moduleName}';`);
      } else {
        const importsString = sortedImports.join(",\n  ");
        consolidatedImports.push(`import type {\n  ${importsString}\n} from '${moduleName}';`);
      }
    }
  }

  return consolidatedImports;
}

function findUnresolvedTypesFromLines(lines: string[]): string[] {
  const content = lines.join("\n");
  const knownTypes = new Set(["Promise", "Record"]);
  const unresolved = new Set<string>();

  // Direct check for commonly used types that need imports
  if (/:\s*Long[;[\]?]/.test(content)) {
    unresolved.add("Long");
  }
  if (/:\s*Buffer[;[\]?]/.test(content)) {
    unresolved.add("Buffer");
  }

  const sourceFile = ts.createSourceFile("temp.ts", content, ts.ScriptTarget.ESNext, true);

  const compilerHost: ts.CompilerHost = {
    getSourceFile: (fileName) => (fileName === "temp.ts" ? sourceFile : undefined),
    getDefaultLibFileName: () => "lib.d.ts",
    writeFile: () => {},
    getCurrentDirectory: () => "",
    getCanonicalFileName: (fileName) => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => "\n",
    fileExists: (fileName) => fileName === "temp.ts",
    readFile: () => undefined,
  };

  const options: ts.CompilerOptions = {
    noResolve: true,
    skipLibCheck: true,
    suppressImplicitAnyIndexErrors: true,
  };

  const program = ts.createProgram(["temp.ts"], options, compilerHost);
  const allDiagnostics = [
    ...program.getSyntacticDiagnostics(sourceFile),
    ...program.getSemanticDiagnostics(sourceFile),
  ];

  allDiagnostics.forEach((diagnostic) => {
    const messageText =
      typeof diagnostic.messageText === "string"
        ? diagnostic.messageText
        : diagnostic.messageText.messageText;

    const patterns = [
      /Cannot find name '([^']+)'/,
      /Cannot find namespace '([^']+)'/,
      /'([^']+)' refers to a type, but is being used as a value/,
    ];

    for (const pattern of patterns) {
      const match = messageText.match(pattern);
      const missingType = match?.[1];
      if (missingType && !knownTypes.has(missingType)) {
        unresolved.add(missingType);
        break;
      }
    }
  });

  return Array.from(unresolved).sort();
}

async function isProtoTypeInFile(filePath: string, typeName: string): Promise<ProtoTypeResult> {
  try {
    const protoContent = await fs.readFile(filePath, "utf-8");
    const lines = protoContent.split("\n");

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (
        !trimmedLine ||
        trimmedLine.startsWith("//") ||
        trimmedLine.startsWith("*") ||
        trimmedLine.startsWith("/*")
      ) {
        continue;
      }

      const enumMatch = trimmedLine.match(/^enum\s+(\w+)\s*\{/);
      if (enumMatch?.[1] && enumMatch[1] === typeName) {
        return { type: "enum", found: true };
      }

      const messageMatch = trimmedLine.match(/^message\s+(\w+)\s*\{/);
      if (messageMatch?.[1] && messageMatch[1] === typeName) {
        return { type: "interface", found: true };
      }
    }

    return { type: "interface", found: false };
  } catch (_error) {
    throw new Error(`Proto file not found: ${filePath}}`);
  }
}

const resolveImportedProtoPaths = (filePath: string, importedProtos: string[]): string[] => {
  const dir = path.dirname(filePath);
  return importedProtos.map((proto) => path.resolve(dir, proto));
};

async function getMissingImportLines(
  currentProtoFilePath: string,
  parsedFile: string[],
  importedProtoFiles: string[],
): Promise<string[]> {
  const missingImportLines: string[] = [];

  let missingImports = findUnresolvedTypesFromLines(parsedFile);
  if (missingImports.length) {
    const hasLong = missingImports.includes("Long");
    if (hasLong) {
      missingImports = missingImports.filter((item) => item !== "Long");
      // Use a value import for Long so generated files can reference the type in all TS configs
      missingImportLines.push("import Long from 'long'");
    }

    const hasBuffer = missingImports.includes("Buffer");
    if (hasBuffer) {
      missingImports = missingImports.filter((item) => item !== "Buffer");
      missingImportLines.push("import type { Buffer } from 'node:buffer'");
    }

    if (!importedProtoFiles.length) {
      // If there are no imported proto files but we still have missing imports,
      // they must be from other proto files that weren't imported, which is an error
      if (missingImports.length > 0) {
        console.error(`${currentProtoFilePath} needs import ${missingImports.join(", ")}`);
        console.error("Could not resolve imports - no proto files imported");
        throw new Error();
      }
    } else {
      const importedProtoPaths = resolveImportedProtoPaths(
        currentProtoFilePath,
        importedProtoFiles,
      );

      for (const missingImport of missingImports) {
        let importLine = "";

        for (const filePath of importedProtoPaths) {
          const { found } = await isProtoTypeInFile(filePath, missingImport);
          if (found) {
            importLine = `import { ${missingImport} } from './${path.parse(filePath).name}'`;
            break;
          }
        }

        if (!importLine) {
          console.error(`${currentProtoFilePath} needs import ${missingImport}`);
          console.error(`Could not resolve import for proto type ${missingImport}`);
          throw new Error();
        }

        missingImportLines.push(importLine);
      }
    }
  }

  return consolidateImports(missingImportLines);
}

export default async function generateAllTypesFromProtos(
  rootDir: string = config.protoRootDir,
): Promise<void> {
  console.log(" Starting Steam proto type generation...");
  // Use the new utility function to find .proto files, excluding the 'google' directory.
  const protoFiles = await findFilesRecursive(rootDir, "proto", ["google"]);
  console.log(`  - Found ${protoFiles.length} .proto files`);

  let totalMessages = 0;
  let totalEnums = 0;
  let totalServices = 0;

  for (const filePath of protoFiles) {
    const lines = await readFileLines(filePath);
    const tsContent: string[] = [];
    const importedProtos: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) {
        continue;
      }
      const proto = extractImportProtoFile(line);
      if (proto) {
        importedProtos.push(proto);
        continue;
      }

      const protoType = detectProtoType(line);
      if (!protoType) {
        continue;
      }

      let parsedType: ParsedProtoType | undefined;

      switch (protoType) {
        case "message":
          parsedType = parseMessageBlock(lines, i);
          totalMessages++;
          break;
        case "enum":
          parsedType = parseEnumBlock(i, lines);
          totalEnums++;
          break;
        case "service":
          parsedType = parseServiceBlock(i, lines);
          totalServices++;
          break;
      }

      if (!parsedType) {
        throw new Error(`could not parse file ${filePath} near line ${i}`);
      }

      tsContent.push("", ...parsedType.parsedType);
      i = parsedType.endIndex;
    }

    const importLines = await getMissingImportLines(filePath, tsContent, importedProtos);
    const finishedFile = [...config.header, ...importLines, "", ...tsContent];
    const tsFilePath = getOutputFilePath(filePath, config.outputRootDir);

    // Use the new utility function to ensure the directory exists and write the file.
    await writeFileAsync(tsFilePath, finishedFile.join("\n"));
  }

  console.log(`  - Messages: ${totalMessages}`);
  console.log(`  - Enums: ${totalEnums}`);
  console.log(`  - Services: ${totalServices}`);
  console.log("✅ All proto types generated successfully!\n");
}
