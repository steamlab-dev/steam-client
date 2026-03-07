import { generateKeyPairSync } from "node:crypto";
import { describe, expect, it } from "vitest";
import { EAuthSessionGuardType } from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";
import {
  createMachineId,
  createMachineName,
  encryptRsaPassword,
  hasConfirmationType,
  mapSteamGuardToString,
} from "@/steam-client/services/utils";

const base64UrlToHex = (value: string) => Buffer.from(value, "base64url").toString("hex");

describe("steam-client/services/utils", () => {
  it("creates machine name and id", () => {
    const machineName = createMachineName();
    const machineId = createMachineId();

    expect(machineName).toMatch(/^DESKTOP-[A-Z]{5}$/);
    expect(machineId).toBeInstanceOf(Buffer);
    expect(machineId.length).toBeGreaterThan(30);
    expect(machineId.toString("hex")).toContain("42423300");
  });

  it("encrypts password with valid RSA key and wraps errors", async () => {
    const { publicKey } = generateKeyPairSync("rsa", { modulusLength: 1024 });
    const jwk = publicKey.export({ format: "jwk" }) as { n: string; e: string };
    const publickey_mod = base64UrlToHex(jwk.n);
    const publickey_exp = base64UrlToHex(jwk.e);

    await expect(
      encryptRsaPassword("secret", {
        publickey_mod,
        publickey_exp,
      } as never),
    ).resolves.toMatch(/^[A-Za-z0-9+/=]+$/);

    await expect(
      encryptRsaPassword("secret", {
        publickey_mod: undefined,
        publickey_exp,
      } as never),
    ).rejects.toThrow("Missing RSA key components from Steam response");

    await expect(
      encryptRsaPassword("secret", {
        publickey_mod: "zz",
        publickey_exp: "zz",
      } as never),
    ).rejects.toThrow("Failed to encrypt data for Steam.");
  });

  it("checks confirmation types", () => {
    const confirmations = [
      { confirmation_type: EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode },
    ];

    expect(
      hasConfirmationType(
        confirmations as never,
        EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode,
      ),
    ).toBe(true);
    expect(
      hasConfirmationType(
        confirmations as never,
        EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode,
      ),
    ).toBe(false);
    expect(
      hasConfirmationType(
        undefined as never,
        EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode,
      ),
    ).toBe(false);
  });

  it("maps guard values to strings dynamically", () => {
    expect(mapSteamGuardToString(EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode)).toBe(
      "device_code",
    );
    expect(
      mapSteamGuardToString(EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation),
    ).toBe("email_confirmation");
    expect(mapSteamGuardToString(999)).toBe("unknown");
  });
});
