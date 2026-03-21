/**
 * @fileoverview Protobuf File Fetcher
 *
 * This script automates the process of downloading all necessary `.proto` files
 * from the SteamDatabase/Protobufs GitHub repository. It recursively
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

const PROTOS_ROOT_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../protos");
const GITHUB_CONTENTS_API_URL = "https://api.github.com/repos/SteamDatabase/Protobufs/contents";
const REQUIRED_NAMESPACE = "google";

// Configuration
const FETCH_ALL_ROOT_NAMESPACES = false;
const SELECTED_ROOT_NAMESPACES = ["steam", "csgo", "webui"];
const EXCLUDED_PROTO_FILES_BY_NAMESPACE: Record<string, string[]> = {
  steam: [],
  csgo: ["base_gcmessages_csgo.proto", "steammessages_base.proto"],
  webui: ["service_steamvrwebrtc.proto", "service_steamvrvoicechat.proto"],
};

// Apply any necessary one-off patches to the content of specific proto files
const PROTO_CONTENT_PATCHES: Record<string, (content: string) => string> = {
  "steam/steammessages_clientserver_login.proto": (content) =>
    content.replace("CMsgClientLogonResponse", "CMsgClientLogOnResponse"),
};

function getNamespace(repoPath: string): string | undefined {
  return repoPath.split("/")[0];
}

function isProtoFile(entry: GitHubContentEntry): boolean {
  return entry.type === "file" && entry.name.endsWith(".proto");
}

function isRequiredDependency(repoPath: string): boolean {
  return repoPath.startsWith(`${REQUIRED_NAMESPACE}/`);
}

function shouldFetchFile(filePath: string, fileName: string): boolean {
  // The 'google' protos are a required dependency for many other protos.
  if (isRequiredDependency(filePath)) {
    return true;
  }

  const namespace = getNamespace(filePath);
  if (!namespace) {
    return true;
  }

  const excludedFiles = EXCLUDED_PROTO_FILES_BY_NAMESPACE[namespace] ?? [];
  return !excludedFiles.includes(fileName);
}

/**
 * Applies specific, one-off patches to the content of certain proto files
 * that are known to have issues.
 */
function processProtoContent(filePath: string, content: string): string {
  const patch = PROTO_CONTENT_PATCHES[filePath];
  if (patch) {
    return patch(content);
  }

  return content;
}

async function fetchAndWriteProto(downloadUrl: string, repoPath: string): Promise<void> {
  try {
    const content = await fetchContent(downloadUrl);
    const processed = processProtoContent(repoPath, content);
    await writeFileAsync(path.join(PROTOS_ROOT_PATH, repoPath), processed);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`❌ Failed to fetch ${downloadUrl}: ${message}`);
    throw error;
  }
}

function getChildDirectories(entries: GitHubContentEntry[]): GitHubContentEntry[] {
  return entries.filter((entry) => entry.type === "dir");
}

function getDownloadableProtoFiles(
  entries: GitHubContentEntry[],
): Array<GitHubContentEntry & { download_url: string }> {
  return entries.filter(
    (entry): entry is GitHubContentEntry & { download_url: string } =>
      isProtoFile(entry) && shouldFetchFile(entry.path, entry.name) && entry.download_url !== null,
  );
}

async function fetchDirectoryContents(subPath: string): Promise<GitHubContentEntry[]> {
  return fetchJson<GitHubContentEntry[]>(`${GITHUB_CONTENTS_API_URL}/${subPath}`);
}

function getConfiguredRootNamespaces(availableDirectories: string[]): string[] {
  if (FETCH_ALL_ROOT_NAMESPACES) {
    return availableDirectories;
  }

  return availableDirectories.filter((directory) => SELECTED_ROOT_NAMESPACES.includes(directory));
}

function getNamespacesToFetch(availableDirectories: string[]): string[] {
  const configuredNamespaces = getConfiguredRootNamespaces(availableDirectories);

  return [...new Set([...configuredNamespaces, REQUIRED_NAMESPACE])];
}

/**
 * Recursively fetches the contents of a directory from the GitHub repository,
 * downloading all `.proto` files and continuing into subdirectories.
 * @param subPath The repository path to fetch (e.g., 'steam' or 'csgo').
 */
async function fetchProtoDirectory(subPath: string): Promise<void> {
  console.log(`  - Fetching ${subPath} protos...`);
  const contents = await fetchDirectoryContents(subPath);
  const dirs = getChildDirectories(contents);
  const files = getDownloadableProtoFiles(contents);

  await Promise.all([
    ...files.map((entry) => fetchAndWriteProto(entry.download_url, entry.path)),
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
    const dirsToFetch = getNamespacesToFetch(await getAvailableDirectories());

    await Promise.all(dirsToFetch.map((dir) => fetchProtoDirectory(dir)));
    console.log("✅ All protobuf files fetched successfully.\n");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ Error fetching protobuf files:", message);
    throw error;
  }
}

async function getAvailableDirectories(): Promise<string[]> {
  const contents = await fetchJson<GitHubContentEntry[]>(GITHUB_CONTENTS_API_URL);
  return contents.filter((entry) => entry.type === "dir").map((entry) => entry.name);
}
