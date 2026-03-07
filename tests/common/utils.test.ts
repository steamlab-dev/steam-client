import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  findFilesRecursive,
  isValidRefreshToken,
  jwtToJson,
  listSubdirectories,
  pathExists,
} from "@/common/utils";

const toBase64Url = (value: string) => Buffer.from(value, "utf8").toString("base64url");

describe("common/utils", () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    for (const dir of tempDirs) {
      rmSync(dir, { recursive: true, force: true });
    }
    tempDirs.length = 0;
  });

  it("checks path existence", async () => {
    const root = mkdtempSync(path.join(tmpdir(), "utils-test-"));
    tempDirs.push(root);
    const filePath = path.join(root, "a.txt");
    writeFileSync(filePath, "x");

    await expect(pathExists(filePath)).resolves.toBe(true);
    await expect(pathExists(path.join(root, "missing.txt"))).resolves.toBe(false);
  });

  it("finds files recursively and excludes direct children of ignored dirs", async () => {
    const root = mkdtempSync(path.join(tmpdir(), "utils-find-"));
    tempDirs.push(root);

    mkdirSync(path.join(root, "a"), { recursive: true });
    mkdirSync(path.join(root, "ignore", "nested"), { recursive: true });
    writeFileSync(path.join(root, "a", "one.ts"), "export {}");
    writeFileSync(path.join(root, "ignore", "top.ts"), "export {}");
    writeFileSync(path.join(root, "ignore", "nested", "deep.ts"), "export {}");
    writeFileSync(path.join(root, "a", "note.txt"), "x");

    const files = await findFilesRecursive(root, "ts", [path.join(root, "ignore")]);
    const relative = files.map((f) => path.relative(root, f).replace(/\\/g, "/")).sort();

    expect(relative).toContain("a/one.ts");
    expect(relative).not.toContain("ignore/top.ts");
    expect(relative).toContain("ignore/nested/deep.ts");
  });

  it("lists immediate subdirectories", async () => {
    const root = mkdtempSync(path.join(tmpdir(), "utils-dirs-"));
    tempDirs.push(root);
    mkdirSync(path.join(root, "alpha"));
    mkdirSync(path.join(root, "beta"));

    const subdirs = await listSubdirectories(root);

    expect(subdirs.sort()).toEqual(["alpha", "beta"]);
  });

  it("parses valid JWT and throws for invalid format", () => {
    const header = { typ: "JWT", alg: "EdDSA" };
    const payload = { iss: "steam", per: 1, exp: 9999999999, nbf: 0, sub: "1" };
    const token = `${toBase64Url(JSON.stringify(header))}.${toBase64Url(JSON.stringify(payload))}.sig`;

    const parsed = jwtToJson(token);
    expect(parsed.header.typ).toBe("JWT");
    expect(parsed.payload.iss).toBe("steam");

    expect(() => jwtToJson("invalid-token")).toThrow("Invalid JWT format");
  });

  it("validates refresh token objects and token strings", () => {
    const now = Math.floor(Date.now() / 1000);
    const valid = {
      header: { typ: "JWT", alg: "EdDSA" },
      payload: {
        iss: "steam",
        per: 1,
        exp: now + 300,
        nbf: now - 1,
      },
    };
    expect(isValidRefreshToken(valid as never)).toBe(true);

    const token = `${toBase64Url(JSON.stringify(valid.header))}.${toBase64Url(JSON.stringify(valid.payload))}.sig`;
    expect(isValidRefreshToken(token)).toBe(true);

    expect(
      isValidRefreshToken({
        ...valid,
        payload: { ...valid.payload, iss: "other" },
      } as never),
    ).toBe(false);
    expect(
      isValidRefreshToken({
        ...valid,
        payload: { ...valid.payload, per: 0 },
      } as never),
    ).toBe(false);
    expect(
      isValidRefreshToken({
        ...valid,
        payload: { ...valid.payload, exp: now - 1 },
      } as never),
    ).toBe(false);
    expect(
      isValidRefreshToken({
        ...valid,
        payload: { ...valid.payload, nbf: now + 100 },
      } as never),
    ).toBe(false);
  });
});
