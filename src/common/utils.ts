import { glob } from "node:fs";
import { access, constants } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import type { SteamJWT } from "@/steam-protocol/types";

const globAsync = promisify(glob);

/**
 * Normalize a path to an absolute, POSIX-style string (forward slashes).
 * @param p - The path to normalize.
 * @returns The normalized absolute POSIX path.
 */
const normalize = (p: string): string => {
  return path.resolve(p).replace(/\\/g, "/");
};

/**
 * Check if a path exists (async, non-blocking).
 * @param filePath - The path to check.
 * @returns True if path exists, false otherwise.
 */
const pathExists = async (filePath: string): Promise<boolean> => {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get file paths recursively by extension.
 * Excludes files located directly inside any directory in `ignoreDirs`.
 *
 * @param dirPath - The root directory to search in.
 * @param fileExtension - The file extension to filter by (e.g., '.ts', 'js').
 * @param ignoreDirs - Array of directory paths; files directly inside these will be ignored.
 * @returns Array of absolute file paths matching the extension.
 */
const findFilesRecursive = async (
  dirPath: string,
  fileExtension: string,
  ignoreDirs: string[] = [],
): Promise<string[]> => {
  try {
    const ext = fileExtension.startsWith(".") ? fileExtension : `.${fileExtension}`;
    const pattern = path.join(dirPath, "**", `*${ext}`).replace(/\\/g, "/");
    const files = (await globAsync(pattern)) as string[];

    const ignoredDirs = ignoreDirs.map(normalize);

    return files.map(normalize).filter((filePath) => {
      const fileParent = path.posix.dirname(filePath);
      return !ignoredDirs.includes(fileParent);
    });
  } catch (error) {
    throw new Error(
      `Failed to get files in '${dirPath}' with extension '${fileExtension}': ${(error as Error).message}`,
    );
  }
};

/**
 * Get all immediate subdirectory names in a directory (non-recursive).
 *
 * @param dirPath - The directory path to search in.
 * @returns Array of subdirectory names (not full paths).
 */
const listSubdirectories = async (dirPath: string): Promise<string[]> => {
  try {
    const pattern = path.join(dirPath, "*/").replace(/\\/g, "/");
    const dirs = (await globAsync(pattern)) as string[];

    return dirs
      .map((dir) => dir.replace(/\/$/, "")) // Remove trailing slash
      .map((dir) => path.basename(dir)); // Return just the folder name
  } catch (error) {
    throw new Error(`Failed to get subdirectories in '${dirPath}': ${(error as Error).message}`);
  }
};

const jwtToJson = (token: string): SteamJWT => {
  const [header, payload] = token.split(".");
  if (!header || !payload) {
    throw new Error("Invalid JWT format");
  }

  return {
    header: JSON.parse(atob(header.replace(/-/g, "+").replace(/_/g, "/"))),
    payload: JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/"))),
  };
};

const isValidRefreshToken = (jwt: SteamJWT | string): boolean => {
  const now = Math.floor(Date.now() / 1000);

  if (typeof jwt === "string") {
    jwt = jwtToJson(jwt);
  }

  return (
    jwt.payload.iss === "steam" &&
    jwt.payload.per === 1 &&
    jwt.payload.exp > now &&
    jwt.payload.nbf <= now
  );
};

export { findFilesRecursive, isValidRefreshToken, jwtToJson, listSubdirectories, pathExists };
