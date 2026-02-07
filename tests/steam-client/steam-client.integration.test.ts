import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { beforeEach, describe, it } from "vitest";
import { SteamClient } from "@/.";
import type { ConnectionOptions } from "@/connection/types";
import { loadTokens } from "./load-tokens";

describe("Steam-Client", () => {
  beforeEach(() => {});

  it("should authenticate and retrieve owned games", async () => {
    const options: ConnectionOptions = {
      steamCM: { host: "cmp1-iad1.steamserver.net", port: 27018 },
      timeout: 15_000,
    };

    const steamClient = new SteamClient(options);

    // steamClient.emitter.on("steam-messages", (messages) => {
    // 	console.log("Messages received:", messages);
    // });

    steamClient.emitter.on("steam-message-error", (error) => {
      console.error("Message error:", error);
    });

    steamClient.emitter.on("disconnected", (msg) => {
      console.log("Disconnected:", msg);
    });

    await steamClient.connect();
    const existing = loadTokens();

    // no refresh token found, kick QR flow
    if (!existing.refreshToken) {
      type QrPayload = { imageQr: string; terminalQr: string };
      const qrHandler = (qr: QrPayload) => {
        console.log("\n--- Steam QR code emitted (scan with Steam Mobile App) ---\n");
        console.log(qr.terminalQr || qr.imageQr || JSON.stringify(qr));
        console.log(
          "\nScan the QR with the Steam Mobile App. Tokens will be persisted to tests/steam-client/.steam-tokens.env\n",
        );
      };

      steamClient.emitter.once("authentication_qr", qrHandler);

      steamClient.emitter.once("steam_auth_tokens", (tokens) => {
        console.log("\n--- Steam authentication tokens received ---\n");
        console.log("Refresh Token:", tokens.refreshToken);
        console.log("Access Token:", tokens.accessToken);
        console.log("\nTokens will be persisted to tests/steam-client/.steam-tokens.env\n");

        // Also persist to .steam-tokens.env
        const envFile = path.resolve(
          path.dirname(fileURLToPath(import.meta.url)),
          ".steam-tokens.env",
        );
        let content = `TEST_REFRESH_TOKEN=${tokens.refreshToken}\n`;
        if (tokens.accessToken) {
          content += `TEST_ACCESS_TOKEN=${tokens.accessToken}\n`;
        }
        fs.writeFileSync(envFile, content);
        console.log(`Wrote tokens to ${envFile}`);
      });

      const loginRes = await steamClient.services.authentication.loginViaQr();

      console.log(loginRes);
    }

    // if (existing.refreshToken) {
    // 	console.log("Refresh token present — skipping interactive QR flow.");

    // 	applyToProcessEnv(existing);

    // 	await steamClient.logonRequest({
    // 		access_token: existing.refreshToken,
    // 	});

    // 	const res = await steamClient.services.player.GetOwnedGames();
    // 	console.log("Owned games:", res);
    // 	return;
    // }
  }, 999999999);
});
