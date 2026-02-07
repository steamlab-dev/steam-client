import { RSA_PKCS1_PADDING } from "node:constants";
import { createPublicKey, publicEncrypt, randomBytes } from "node:crypto";
import { glob } from "node:fs";
import { access, constants } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import QRCode from "qrcode";
import type { SteamJWT } from "@/steam-protocol/types";
import type { SteamProtos } from "./steam-language";
import type { EAuthSessionGuardType } from "./steam-language/protos-definitions/steam/steammessages_auth.steamclient";

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

const createMachineName = (): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const name = Array.from({ length: 5 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");
  return `DESKTOP-${name}`;
};

const createMachineId = (): Buffer => {
  const hexBB3 = randomBytes(20).toString("hex");
  const hexFF2 = randomBytes(20).toString("hex");
  const hex3B3 = randomBytes(20).toString("hex");

  return Buffer.from(
    `004D6573736167654F626A656374000142423300${hexBB3}000146463200${hexFF2}000133423300${hex3B3}000808`,
    "hex",
  );
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

const isValidRefreshToken = (jwt: SteamJWT): boolean => {
  const now = Math.floor(Date.now() / 1000);

  return (
    jwt.payload.iss === "steam" &&
    jwt.payload.per === 1 &&
    jwt.payload.exp > now &&
    jwt.payload.nbf <= now
  );
};

const encryptRsaPassword = async (
  text: string,
  response: SteamProtos["CAuthentication_GetPasswordRSAPublicKey_Response"],
): Promise<string> => {
  // 1. Input Validation
  if (!response.publickey_mod || !response.publickey_exp) {
    throw new Error("Missing RSA key components from Steam response");
  }

  try {
    // 2. Simplified buffer creation directly from hex
    const modulus = Buffer.from(response.publickey_mod, "hex");
    const exponent = Buffer.from(response.publickey_exp, "hex");

    // 3. Create the public key using JWK format
    const publicKey = createPublicKey({
      key: {
        kty: "RSA",
        n: modulus.toString("base64url"), // Use base64url for JWK
        e: exponent.toString("base64url"),
      },
      format: "jwk",
    });

    // 4. Encrypt the text
    const encrypted = publicEncrypt(
      {
        key: publicKey,
        padding: RSA_PKCS1_PADDING,
      },
      Buffer.from(text, "utf8"),
    );

    // 5. Return the result. 'async' functions automatically handle the promise.
    return encrypted.toString("base64");
  } catch (error) {
    throw new Error("Failed to encrypt data for Steam.", { cause: error });
  }
};

const hasConfirmationType = (
  confirmations: SteamProtos["CAuthentication_AllowedConfirmation"][],
  confirmationType: EAuthSessionGuardType,
): boolean => {
  return (confirmations || []).some((item) => item.confirmation_type === confirmationType);
};

const genTerminalQR = async (text: string) => {
  return QRCode.toString(text, { type: "terminal" });
};

const genImageQR = async (text: string) => {
  return QRCode.toDataURL(text);
};

export {
  pathExists,
  findFilesRecursive,
  listSubdirectories,
  createMachineName,
  createMachineId,
  jwtToJson,
  isValidRefreshToken,
  encryptRsaPassword,
  hasConfirmationType,
  genTerminalQR,
  genImageQR,
};
