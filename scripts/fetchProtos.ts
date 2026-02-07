/**
 * @fileoverview Protobuf File Fetcher
 *
 * This script automates the process of downloading all necessary `.proto` files
 * from the official SteamDatabase/Protobufs GitHub repository. It recursively
 * fetches specified directories, applies any necessary patches to the file
 * contents, and saves them.
 */

import path from "node:path";
import { fileURLToPath } from "node:url";
import { fetchContent, fetchJson, writeFileAsync } from "./common/util";

interface GitHubContentEntry {
  name: string;
  path: string;
  type: "file" | "dir";
  download_url: string | null;
}

/**
 * Configuration for the fetcher, including local paths, the source GitHub API,
 * and rules for filtering which namespaces and files to download.
 */
const config = {
  protosPath: path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../protos"),
  githubApiUrl: "https://api.github.com/repos/SteamDatabase/Protobufs/contents",
  namespaceToFetch: ["steam", "csgo", "webui"], // An empty array fetches all available directories
  protosFilterByNs: {
    steam: [],
    csgo: ["base_gcmessages_csgo.proto", "steammessages_base.proto"],
    webui: ["service_steamvrwebrtc.proto", "service_steamvrvoicechat.proto"],
  } as Record<string, string[]>,
};

function shouldFetchFile(filePath: string, fileName: string): boolean {
  // The 'google' protos are a required dependency for many other protos.
  if (filePath.startsWith("google/")) {
    return true;
  }

  const segments = filePath.split("/");
  const namespace = segments[0];
  if (!namespace) {
    return true;
  }

  const excludedFiles = config.protosFilterByNs[namespace] ?? [];
  return !excludedFiles.includes(fileName);
}

/**
 * Applies specific, one-off patches to the content of certain proto files
 * that are known to have issues.
 */
function processProtoContent(filePath: string, content: string): string {
  if (filePath.endsWith("steammessages_clientserver_login.proto")) {
    // Correct a known typo in the original protobuf file.
    return content.replace("CMsgClientLogonResponse", "CMsgClientLogOnResponse");
  }
  return content;
}

async function fetchAndWriteProto(downloadUrl: string, destPath: string): Promise<void> {
  try {
    const content = await fetchContent(downloadUrl);
    const processed = processProtoContent(destPath, content);
    await writeFileAsync(destPath, processed);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`❌ Failed to fetch ${downloadUrl}: ${message}`);
    throw error;
  }
}

/**
 * Recursively fetches the contents of a directory from the GitHub repository,
 * downloading all `.proto` files and continuing into subdirectories.
 * @param subPath The repository path to fetch (e.g., 'steam' or 'csgo').
 */
async function fetchProtoDirectory(subPath: string): Promise<void> {
  console.log(`  - Fetching ${subPath} protos...`);
  const contents = await fetchJson<GitHubContentEntry[]>(`${config.githubApiUrl}/${subPath}`);

  const [dirs, files] = [
    contents.filter((entry) => entry.type === "dir"),
    contents.filter(
      (entry) =>
        entry.type === "file" &&
        entry.name.endsWith(".proto") &&
        shouldFetchFile(entry.path, entry.name),
    ),
  ];

  await Promise.all([
    ...files.map((entry) =>
      entry.download_url
        ? fetchAndWriteProto(entry.download_url, path.join(config.protosPath, entry.path))
        : Promise.resolve(),
    ),
    ...dirs.map((entry) => fetchProtoDirectory(entry.path)),
  ]);
}

/**
 * Main entry point for the script. Determines which root directories to fetch
 * and initiates the recursive download process for each.
 */
export default async function fetchProtos(): Promise<void> {
  console.log(" Fetching Steam protobuf files");
  try {
    const dirsToFetch =
      config.namespaceToFetch.length > 0
        ? config.namespaceToFetch
        : await getAvailableDirectories();

    // Ensure the 'google' dependency directory is always included.
    if (!dirsToFetch.includes("google")) {
      dirsToFetch.push("google");
    }

    await Promise.all(dirsToFetch.map((dir) => fetchProtoDirectory(dir)));
    console.log("✅ All protobuf files fetched successfully.\n");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ Error fetching protobuf files:", message);
    throw error;
  }
}

async function getAvailableDirectories(): Promise<string[]> {
  const contents = await fetchJson<GitHubContentEntry[]>(config.githubApiUrl);
  return contents.filter((entry) => entry.type === "dir").map((entry) => entry.name);
}
