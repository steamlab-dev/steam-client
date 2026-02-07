import * as fsSync from "node:fs";
import { promises as fs } from "node:fs";
import * as path from "node:path";
import * as ts from "typescript";

//================================================================================
// String Utilities
//================================================================================

/**
 * Converts a string from kebab-case or snake_case to PascalCase.
 * Used for generating consistent interface and class names.
 * @param str The input string (e.g., 'my-service' or 'my_service').
 * @returns The PascalCase version of the string (e.g., 'MyService').
 */
export const toPascalCase = (str: string): string =>
  str
    .split(/[-_]/)
    .map((w) => {
      if (!w) {
        return "";
      }
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join("");

//================================================================================
// File System Utilities (Asynchronous)
//================================================================================

/**
 * Ensures that the directory for a given file path exists, creating it if necessary.
 * Asynchronous version.
 * @param filePath The full path to the file whose directory needs to exist.
 */
export async function ensureDirectoryExists(filePath: string): Promise<void> {
  const dir = path.dirname(filePath);
  try {
    // fs.mkdir with recursive:true is idempotent and will not throw if the directory exists.
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    console.error(`Failed to ensure directory exists: ${dir}`, error);
    throw error;
  }
}

/**
 * Writes content to a file, ensuring the directory exists first.
 * Asynchronous version.
 * @param filePath The path where the file will be written.
 * @param content The content to write to the file.
 */
export async function writeFileAsync(filePath: string, content: string): Promise<void> {
  await ensureDirectoryExists(filePath);
  await fs.writeFile(filePath, content, "utf8");
}

/**
 * Recursively finds all files with a specific extension in a directory, ignoring specified paths.
 * @param dir The starting directory.
 * @param extension The file extension to look for (e.g., 'ts').
 * @param skipPaths An optional array of directory or file names to skip.
 * @returns A promise that resolves to an array of full file paths.
 */
export async function findFilesRecursive(
  dir: string,
  extension: string,
  skipPaths: string[] = [],
): Promise<string[]> {
  const results: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (skipPaths.includes(entry.name)) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results.push(...(await findFilesRecursive(fullPath, extension, skipPaths)));
    } else if (path.extname(entry.name) === `.${extension}`) {
      results.push(fullPath);
    }
  }
  return results;
}

//================================================================================
// File System Utilities (Synchronous)
//================================================================================

/**
 * Ensures that the directory for a given file path exists, creating it if necessary.
 * Synchronous version.
 * @param filePath The full path to the file whose directory needs to exist.
 */
export function ensureDirectoryExistsSync(filePath: string): void {
  const dir = path.dirname(filePath);
  if (!fsSync.existsSync(dir)) {
    fsSync.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Writes content to a file, ensuring the directory exists first.
 * Synchronous version.
 * @param filePath The path where the file will be written.
 * @param content The content to write to the file.
 */
export function writeFileSync(filePath: string, content: string): void {
  ensureDirectoryExistsSync(filePath);
  fsSync.writeFileSync(filePath, content, "utf8");
}

//================================================================================
// TypeScript AST Utilities
//================================================================================

/**
 * Parses a TypeScript file to extract the names of properties from a specified interface.
 * This is a synchronous operation, as it's typically used in build scripts.
 * @param filePath The path to the TypeScript file.
 * @param interfaceName The name of the interface to inspect.
 * @returns An array of property names found in the interface.
 * @throws An error if the file cannot be read.
 */
export function extractInterfaceProperties(filePath: string, interfaceName: string): string[] {
  try {
    const fileContent = fsSync.readFileSync(filePath, "utf8");
    const sourceFile = ts.createSourceFile(
      filePath,
      fileContent,
      ts.ScriptTarget.Latest,
      true, // setParentNodes
    );

    const properties: string[] = [];
    let interfaceFound = false;

    const findInterfaceMembers = (node: ts.Node) => {
      // Find the interface declaration with the matching name.
      if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
        interfaceFound = true;
        // Iterate over all members of the interface.
        node.members.forEach((member) => {
          // Check if the member is a property signature (e.g., `propertyName: type;`)
          if (ts.isPropertySignature(member) && member.name) {
            // Get the text of the property name.
            properties.push(member.name.getText(sourceFile));
          }
        });
      }
      // Continue searching children if the interface hasn't been found yet.
      if (!interfaceFound) {
        ts.forEachChild(node, findInterfaceMembers);
      }
    };

    findInterfaceMembers(sourceFile);

    if (!interfaceFound) {
      console.warn(`[util.ts] ⚠️  Could not find interface '${interfaceName}' in ${filePath}.`);
    }

    return properties;
  } catch (error) {
    console.error(`[util.ts] ❌ Error reading or parsing file ${filePath}:`, error);
    // Re-throw to allow the calling script to handle the failure.
    throw error;
  }
}

//================================================================================
// Network Utilities
//================================================================================

/**
 * Fetches text content from a URL.
 * Throws an error if the network response is not OK.
 * @param url The URL to fetch.
 * @param options Optional fetch options.
 * @returns A promise that resolves to the text content.
 */
export async function fetchContent(url: string, options?: RequestInit): Promise<string> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}

/**
 * Fetches and parses JSON content from a URL.
 * Throws an error if the network response is not OK.
 * @param url The URL to fetch.
 * @param options Optional fetch options.
 * @returns A promise that resolves to the parsed JSON object.
 */
export async function fetchJson<T = unknown>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.json() as Promise<T>;
}
