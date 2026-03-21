/**
 * @fileoverview EResult Enum Generator
 *
 * This script automates the creation of the EResult const object and its
 * corresponding type definition by fetching data from SteamKit and the
 * official Steamworks documentation.
 */

import { fetchContent, writeFileAsync } from "./common/util";

interface EResultEntry {
  name: string;
  value: number;
  comment?: string;
}

/**
 * Defines the data sources and the output destination for the generator.
 */
const OUTPUT_PATH = "./src/common/steam-language/EResult.ts";
const STEAMKIT_URL =
  "https://raw.githubusercontent.com/SteamRE/SteamKit/master/Resources/SteamLanguage/eresult.steamd";
const STEAM_DOCS_URL = "https://partner.steamgames.com/doc/api/steam_api";

/**
 * Parses the text content of a SteamKit `.steamd` file to extract enum members.
 * @param content The raw text content of the eresult.steamd file.
 * @returns An array of EResult entries with names and values.
 */
const parseSteamKitEnum = (content: string): EResultEntry[] => {
  const entries: EResultEntry[] = [];
  const lines = content.split("\n");
  let insideEnum = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("enum EResult")) {
      insideEnum = true;
      continue;
    }

    if (insideEnum && trimmed === "}") {
      break;
    }

    if (insideEnum && trimmed && !trimmed.startsWith("{") && !trimmed.startsWith("//")) {
      const match = trimmed.match(/^(\w+)\s*=\s*(\d+);?/);
      if (match) {
        const [, name, valueStr] = match;
        if (!name || !valueStr) {
          continue;
        }
        entries.push({ name, value: Number(valueStr) });
      }
    }
  }

  return entries;
};

/**
 * Scrapes the Steamworks documentation HTML to extract descriptions for EResult members.
 * @param html The raw HTML content of the documentation page.
 * @returns A record mapping EResult member names to their descriptions.
 */
const parseDocumentation = (html: string): Record<string, string> => {
  const docs: Record<string, string> = {};
  // This regex is designed to capture the table row for each EResult member,
  // extracting the name, value, and description from their respective <td> cells.
  const rowPattern =
    /<tr[^>]*>\s*<td>\s*<strong>\s*k_EResult(\w+)\s*<\/strong>\s*<\/td>\s*<td>\s*(\d+)\s*<\/td>\s*<td>\s*([^<]+?)\s*<\/td>\s*<\/tr>/g;

  let match: RegExpExecArray | null;
  while (true) {
    match = rowPattern.exec(html);
    if (match === null) {
      break;
    }
    const [, name, _value, description] = match;
    if (!name || !description) {
      continue;
    }
    const cleanDesc = description.trim().replace(/\.$/, "");
    docs[name] = `${cleanDesc}.`;
  }
  return docs;
};

/**
 * Generates the complete TypeScript const object and type definition as a string.
 * @param entries The final, enriched list of enum entries.
 * @returns The formatted TypeScript output as a string.
 */
const generateTypeScriptOutput = (entries: EResultEntry[]): string => {
  const lines = [
    "/**",
    " * ⚠️ AUTO-GENERATED FILE — DO NOT EDIT!",
    " */",
    "",
    "/**",
    " * An object mapping EResult names to their numeric values.",
    " * @see {@link https://partner.steamgames.com/doc/api/steam_api#EResult}",
    " */",
    "export const EResult = {",
  ];

  for (const { name, value, comment } of entries) {
    if (comment) {
      lines.push(`  /** ${comment} */`);
    }
    lines.push(`  ${name}: ${value},`);
  }

  lines.push("} as const;", "");
  lines.push("/**", " * A union type representing all possible numeric values of EResult.", " */");
  lines.push("export type EResult = (typeof EResult)[keyof typeof EResult];", "");

  return lines.join("\n");
};

/**
 * Main orchestration function that fetches data, processes it, and writes the final file.
 */
export default async function generateEResult(): Promise<void> {
  try {
    console.log("\n Starting EResult generation...");

    console.log(" ‐ Fetching SteamKit EResult definitions...");
    const steamKitRaw = await fetchContent(STEAMKIT_URL);

    console.log(" ‐ Parsing EResult entries...");
    const entries = parseSteamKitEnum(steamKitRaw);
    console.log(`   - Found ${entries.length} entries`);

    console.log(" ‐ Fetching Steam documentation...");
    const docsHtml = await fetchContent(STEAM_DOCS_URL);

    console.log(" ‐ Extracting documentation from HTML...");
    const docMap = parseDocumentation(docsHtml);

    // Enrich the parsed enum entries with the scraped documentation comments.
    const enriched = entries.map((e) => ({
      ...e,
      comment: docMap[e.name] || undefined,
    }));
    const withDocs = enriched.filter((e) => e.comment).length;
    const withoutDocs = enriched.length - withDocs;
    console.log(`   - Documented: ${withDocs}`);
    console.log(`   - Undocumented: ${withoutDocs}`);

    console.log(" ‐ Generating TypeScript const object and type...");
    const content = generateTypeScriptOutput(enriched);

    console.log(" ‐ Writing output file...");
    await writeFileAsync(OUTPUT_PATH, content);

    console.log(`✅ Generated ${OUTPUT_PATH} — All entries written successfully!\n`);
  } catch (err) {
    console.error("\n❌ Failed to generate EResult");
    console.error(err); // Log the actual error for better debugging
    throw err;
  }
}
