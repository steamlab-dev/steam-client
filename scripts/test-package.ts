import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { ProtoManager, SteamClient } from "@steamlab/steam-client";

async function runTests() {
  // Test 1: Package exports correctly
  if (typeof SteamClient !== "function") {
    console.error("❌ SteamClient is not exported as a constructor");
    process.exit(1);
  }

  // Test 2: Verify package.json metadata (discover from resolved entry)
  const entryPath = require.resolve("@steamlab/steam-client");
  let currentDir = dirname(entryPath);
  let pkgPath = resolve(currentDir, "package.json");
  while (!existsSync(pkgPath) && currentDir !== dirname(currentDir)) {
    currentDir = dirname(currentDir);
    pkgPath = resolve(currentDir, "package.json");
  }

  if (!existsSync(pkgPath)) {
    console.error("❌ package.json not found for installed package");
    process.exit(1);
  }

  const pkg = JSON.parse(readFileSync(pkgPath, "utf8")) as {
    name?: string;
    version?: string;
    main?: string;
    types?: string;
  };
  if (!pkg.name || !pkg.version || !pkg.main || !pkg.types) {
    console.error("❌ Package metadata incomplete");
    process.exit(1);
  }
  console.log("✅ Package metadata valid");
  console.log("   - Name:", pkg.name);
  console.log("   - Version:", pkg.version);
  console.log("   - Main:", pkg.main);
  console.log("   - Types:", pkg.types);

  // Test 3: Check TypeScript types exist (use package.json path)
  const packagePath = dirname(pkgPath);
  const typesPath = resolve(packagePath, pkg.types);

  if (!existsSync(typesPath)) {
    console.error("❌ Type definitions not found at:", typesPath);
    process.exit(1);
  }

  // Test 4: Check for public methods
  try {
    const publicMethods = ["connect", "disconnect", "startPlaying", "stopPlaying"];
    const hasAllMethods = publicMethods.every((method) =>
      Object.getOwnPropertyNames(SteamClient.prototype).includes(method),
    );

    if (!hasAllMethods) {
      throw new Error(
        `Missing public methods. Available: ${Object.getOwnPropertyNames(SteamClient.prototype).join(", ")}`,
      );
    }
  } catch (error) {
    console.error("❌ Failed to verify SteamClient methods:", error);
    process.exit(1);
  }

  // Test 5: Verify proto files can be loaded
  try {
    const protos = new ProtoManager("steam");
    await protos.loadProtos();
  } catch (error) {
    console.error("❌ Failed to load proto files:", error);
    process.exit(1);
  }
}

runTests();
