import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Lightweight token container used by tests.
 */
export type Tokens = {
  refreshToken?: string;
  accessToken?: string;
};

/**
 * Parse a simple env-style file. Supports lines like `key=value` and ignores comments (#).
 * Recognizes keys: refresh_token, access_token (case-insensitive) and returns camelCased keys.
 */
function parseEnv(content: string): Tokens {
  const out: Tokens = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const idx = line.indexOf("=");
    if (idx === -1) {
      continue;
    }

    const key = line.slice(0, idx).trim().toLowerCase();
    let val = line.slice(idx + 1).trim();

    // Support quoted values
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    switch (key) {
      case "refresh_token":
      case "test_refresh_token":
        out.refreshToken = val;
        break;
      case "access_token":
      case "test_access_token":
        out.accessToken = val;
        break;
      default:
        break;
    }
  }
  return out;
}

/**
 * Load tokens from `tests/steam-client/.steam-tokens.env` (next to this file) or from process.env fallbacks.
 * By default this function does NOT mutate process.env; call `applyToProcessEnv()` explicitly if you want that behavior.
 */
export function loadTokens(): Tokens {
  const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".steam-tokens.env");
  let parsed: Tokens = {};

  try {
    if (fs.existsSync(file)) {
      parsed = parseEnv(fs.readFileSync(file, "utf8"));
    }
  } catch (_err) {
    // ignore read errors; we'll use process.env as fallback
  }

  const refreshToken = process.env.TEST_REFRESH_TOKEN ?? parsed.refreshToken;
  const accessToken = process.env.TEST_ACCESS_TOKEN ?? parsed.accessToken;

  return { refreshToken, accessToken };
}

/**
 * Helper to write whatever tokens are loaded into process.env (opt-in).
 */
export function applyToProcessEnv(tokens: Tokens): void {
  if (tokens.refreshToken) {
    process.env.TEST_REFRESH_TOKEN = tokens.refreshToken;
  }
  if (tokens.accessToken) {
    process.env.TEST_ACCESS_TOKEN = tokens.accessToken;
  }
}

// Eagerly load tokens for convenience exports.
const _tokens = loadTokens();
export const refreshToken = _tokens.refreshToken;
export const accessToken = _tokens.accessToken;
export default refreshToken;
