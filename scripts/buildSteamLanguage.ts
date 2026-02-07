/**
 * @fileoverview Steam Language Bundler
 *
 * This script scans a directory of TypeScript files generated from Steam's
 * protobuf definitions. It identifies all exported types, enums, and classes,
 * groups them by their functional namespace (e.g., 'steam', 'csgo'), and
 * then bundles them into organized, importable modules.
 *
 * The final output includes:
 * - A separate `...Bundle.ts` file for protos, services, and enums in each namespace.
 * - A main `index.ts` file that re-exports all generated bundles for easy access.
 */

import path from "node:path";
import ts from "typescript";
import { findFilesRecursive, toPascalCase, writeFileAsync } from "./common/util";

/**
 * Main configuration for the bundler script.
 */
const config = {
  // The root directory for all input and output files.
  outputDir: path.resolve("src/common/steam-language"),
  // The directory name that acts as an anchor for identifying namespaces.
  namespaceAnchor: "protos-definitions",
  // Rules to prevent the script from processing its own output or other unwanted files.
  excludePaths: ["enums"],
  excludeSuffixes: ["Bundle.ts"],
  excludeFiles: ["index.ts", "EResult.ts", "EMsgMapping.ts", "protoReqResMapping.ts"],
  // Standard header for all auto-generated files.
  header: ["/**", " * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!", " */"],
  // Templates for generating output file names and interface names.
  templates: {
    serviceFile: (ns: string) => path.join(ns, "serviceInterfaceBundle.ts"),
    protoFile: (ns: string) => path.join(ns, "protoTypesBundle.ts"),
    enumFile: (ns: string) => path.join(ns, "enumsBundle.ts"),
    serviceInterface: (ns: string) => `${toPascalCase(ns)}Services`,
    protoInterface: (ns: string) => `${toPascalCase(ns)}Protos`,
  },
};

interface ExportInfo {
  name: string;
  type: "interface" | "enum" | "class" | "type";
  filePath: string;
  relativeImport: string;
}

const createRelativeImportPath = (from: string, to: string) => {
  const relativePath = path
    .relative(from, to)
    .replace(/\\/g, "/")
    .replace(/\.ts$/, "")
    .replace(/\/index$/, "");
  return relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
};

/**
 * Determines the namespace of a file based on its directory path relative
 * to the `namespaceAnchor`. Returns `null` if the file is not in a valid namespace,
 * which prevents the creation of an unwanted "root" directory.
 */
const getNamespace = (exportInfo: ExportInfo): string | null => {
  const relativePath = path.relative(config.outputDir, exportInfo.filePath);
  const pathParts = relativePath.split(path.sep);
  const protoDefIndex = pathParts.indexOf(config.namespaceAnchor);
  if (protoDefIndex !== -1 && protoDefIndex + 1 < pathParts.length) {
    return pathParts[protoDefIndex + 1] ?? null;
  }
  return null;
};

/**
 * Checks if a file should be excluded from parsing based on the rules
 * defined in the main configuration.
 */
const shouldExcludeFile = (filePath: string): boolean => {
  const baseName = path.basename(filePath);
  if (config.excludeFiles.includes(baseName)) {
    return true;
  }
  if (config.excludeSuffixes.some((suffix) => baseName.endsWith(suffix))) {
    return true;
  }

  const relativePath = path.relative(config.outputDir, filePath);
  return config.excludePaths.some((excludePath) =>
    relativePath.split(path.sep).includes(excludePath),
  );
};

/**
 * Helper function to check if a variable declaration is a const object with 'as const'
 */
const isConstEnumObject = (node: ts.VariableDeclaration): boolean => {
  if (!node.initializer) {
    return false;
  }

  // Check for 'as const' assertion
  if (
    ts.isAsExpression(node.initializer) &&
    ts.isTypeReferenceNode(node.initializer.type) &&
    ts.isIdentifier(node.initializer.type.typeName) &&
    node.initializer.type.typeName.text === "const"
  ) {
    // Check if the expression is an object literal
    if (ts.isObjectLiteralExpression(node.initializer.expression)) {
      return true;
    }
  }

  return false;
};

const parseFileExports = async (filePath: string): Promise<ExportInfo[]> => {
  try {
    const content = await ts.sys.readFile(filePath, "utf8");
    if (content === undefined) {
      throw new Error(`Could not read file: ${filePath}`);
    }
    const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    const exports: ExportInfo[] = [];

    const namespace = getNamespace({ filePath } as ExportInfo);
    const outputFileDir = namespace ? path.join(config.outputDir, namespace) : config.outputDir;
    const relativeImport = createRelativeImportPath(outputFileDir, filePath);

    const typeMap = {
      [ts.SyntaxKind.InterfaceDeclaration]: "interface" as const,
      [ts.SyntaxKind.EnumDeclaration]: "enum" as const,
      [ts.SyntaxKind.ClassDeclaration]: "class" as const,
      [ts.SyntaxKind.TypeAliasDeclaration]: "type" as const,
    };

    sourceFile.forEachChild((node) => {
      // Handle regular declarations (interface, enum, class, type)
      const nodeType = typeMap[node.kind as keyof typeof typeMap];
      if (nodeType) {
        const isExported =
          (ts.getCombinedModifierFlags(node as ts.Declaration) & ts.ModifierFlags.Export) !== 0;
        if (isExported) {
          const name = (node as ts.DeclarationStatement).name?.text;
          if (name) {
            exports.push({ name, type: nodeType, filePath, relativeImport });
          }
        }
        return;
      }

      // Handle variable declarations (for const enums)
      if (ts.isVariableStatement(node)) {
        // --- FIX: Check the modifiers array directly for the ExportKeyword ---
        const isExported =
          node.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword) ?? false;

        if (isExported && node.declarationList) {
          for (const declaration of node.declarationList.declarations) {
            if (ts.isIdentifier(declaration.name) && isConstEnumObject(declaration)) {
              exports.push({
                name: declaration.name.text,
                type: "enum",
                filePath,
                relativeImport,
              });
            }
          }
        }
      }
    });

    return exports;
  } catch (error) {
    console.warn(`⚠️ Failed to parse ${path.basename(filePath)}:`, error);
    return [];
  }
};

const createImports = (exports: ExportInfo[], useType = false) => {
  const map = new Map<string, Set<string>>();
  exports.forEach((e) => {
    if (!map.has(e.relativeImport)) {
      map.set(e.relativeImport, new Set());
    }
    map.get(e.relativeImport)?.add(e.name);
  });
  return Array.from(map.keys())
    .sort()
    .map((file) => {
      const names = Array.from(map.get(file) ?? new Set())
        .sort()
        .join(", ");
      return `${useType ? "import type" : "import"} { ${names} } from '${file}';`;
    });
};

const groupByNamespace = (exports: ExportInfo[]) => {
  const grouped = new Map<string, ExportInfo[]>();
  exports.forEach((exp) => {
    const ns = getNamespace(exp);
    // Ignore any exports that do not belong to a valid namespace.
    if (!ns) {
      return;
    }

    if (!grouped.has(ns)) {
      grouped.set(ns, []);
    }
    const existing = grouped.get(ns) ?? [];
    if (!existing.some((e) => e.name === exp.name)) {
      existing.push(exp);
    }
  });
  return grouped;
};

/**
 * Main build process. Scans for source files, parses their exports, groups them
 * by namespace, and writes the final bundle files and a master index file.
 */
export default async function buildSteamLanguage(): Promise<void> {
  try {
    console.log(" Starting types bundle generation...");
    const allFiles = await findFilesRecursive(config.outputDir, "ts");
    console.log(`   - Found ${allFiles.length} source files to analyze`);

    const filesToProcess = allFiles.filter((filePath) => !shouldExcludeFile(filePath));
    console.log(`   - Processing ${filesToProcess.length} files after exclusions.`);

    const allExports = (await Promise.all(filesToProcess.map(parseFileExports))).flat();
    console.log(`   - Total exports found: ${allExports.length}`);

    const [enums, services, protos] = [
      allExports.filter((e) => e.type === "enum"),
      allExports.filter((e) => e.type === "class"),
      allExports.filter((e) => e.type === "interface"),
    ];
    console.log(
      `   - Categorized: ${protos.length} protos, ${enums.length} enums, ${services.length} services`,
    );

    const groupedEnums = groupByNamespace(enums);
    const groupedServices = groupByNamespace(services);
    const groupedProtos = groupByNamespace(protos);

    const writePromises: Promise<void>[] = [];

    for (const [ns, exports] of groupedEnums.entries()) {
      const imports = createImports(exports);
      const uniqueNames = [...new Set(exports.map((e) => e.name))].sort();
      const content = [
        ...config.header,
        ...imports,
        "",
        `export const ${ns}Enums = {`,
        ...uniqueNames.map((n) => `  ${n}: ${n},`),
        "} as const;",
      ].join("\n");
      const filePath = path.join(config.outputDir, config.templates.enumFile(ns));
      writePromises.push(
        writeFileAsync(filePath, content).then(() =>
          console.log(`   - Generated ${config.templates.enumFile(ns)}`),
        ),
      );
    }

    for (const [ns, exports] of groupedServices.entries()) {
      const imports = createImports(exports, true);
      const interfaceName = config.templates.serviceInterface(ns);
      const sortedExports = exports.sort((a, b) => a.name.localeCompare(b.name));
      const content = [
        ...config.header,
        ...imports,
        "",
        `export interface ${interfaceName} {`,
        ...sortedExports.map((e) => `  ${e.name}: ${e.name};`),
        "}",
      ].join("\n");
      const filePath = path.join(config.outputDir, config.templates.serviceFile(ns));
      writePromises.push(
        writeFileAsync(filePath, content).then(() =>
          console.log(`   - Generated ${config.templates.serviceFile(ns)}`),
        ),
      );
    }

    for (const [ns, exports] of groupedProtos.entries()) {
      const imports = createImports(exports, true);
      const interfaceName = config.templates.protoInterface(ns);
      const sortedExports = exports.sort((a, b) => a.name.localeCompare(b.name));
      const content = [
        ...config.header,
        ...imports,
        "",
        `export interface ${interfaceName} {`,
        ...sortedExports.map((e) => `  ${e.name}: ${e.name};`),
        "}",
      ].join("\n");
      const filePath = path.join(config.outputDir, config.templates.protoFile(ns));
      writePromises.push(
        writeFileAsync(filePath, content).then(() =>
          console.log(`   - Generated ${config.templates.protoFile(ns)}`),
        ),
      );
    }

    await Promise.all(writePromises);

    const enumNamespaces = Array.from(groupedEnums.keys()).sort();
    const serviceNamespaces = Array.from(groupedServices.keys()).sort();
    const protoNamespaces = Array.from(groupedProtos.keys()).sort();

    const indexContent = [
      ...config.header,
      "",
      ...enumNamespaces.map((ns) => `export { ${ns}Enums } from './${ns}/enumsBundle';`),
      "",
      ...serviceNamespaces.map(
        (ns) =>
          `export type { ${config.templates.serviceInterface(
            ns,
          )} } from './${ns}/serviceInterfaceBundle';`,
      ),
      "",
      ...protoNamespaces.map(
        (ns) =>
          `export type { ${config.templates.protoInterface(ns)} } from './${ns}/protoTypesBundle';`,
      ),
      "",
      /*'export type ProtoNamespaces = {',
      ...protoNamespaces.map((ns) => `  ${ns}: ${config.templates.protoInterface(ns)},`),
      '}',
      '',
      'export const EnumNamespaces = {',
      ...enumNamespaces.map((ns) => `  ${ns}: ${ns}Enums,`),
      '} as const',
      '',
      'export type ServiceNamespaces = {',
      ...serviceNamespaces.map((ns) => `  ${ns}: ${config.templates.serviceInterface(ns)},`),
      '}',
      '',*/
      'export { EResult } from "./EResult"',
      'export { EMsg } from "./protos-definitions/steam/enums_clientserver"',
    ].join("\n");

    await writeFileAsync(path.join(config.outputDir, "index.ts"), indexContent);
    console.log("✅ Generated index.ts - All files generated successfully!\n");
  } catch (error) {
    console.error("❌ Failed to generate types:", error);
    throw error;
  }
}
