import { RSA_PKCS1_PADDING } from "node:constants";
import { createPublicKey, publicEncrypt, randomBytes } from "node:crypto";
import type { SteamProtos } from "@/common/steam-language";
import { EAuthSessionGuardType } from "@/common/steam-language/protos-definitions/steam/steammessages_auth.steamclient";

export type RequireSome<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type SteamGuardType = string;

const mapSteamGuardToString = (value: number): SteamGuardType =>
  Object.keys(EAuthSessionGuardType)
    .find((k) => EAuthSessionGuardType[k as keyof typeof EAuthSessionGuardType] === value)
    ?.replace(/^k_EAuthSessionGuardType_/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toLowerCase() ?? "unknown";

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

const encryptRsaPassword = async (
  text: string,
  response: SteamProtos["CAuthentication_GetPasswordRSAPublicKey_Response"],
): Promise<string> => {
  if (!response.publickey_mod || !response.publickey_exp) {
    throw new Error("Missing RSA key components from Steam response");
  }

  try {
    const modulus = Buffer.from(response.publickey_mod, "hex");
    const exponent = Buffer.from(response.publickey_exp, "hex");

    const publicKey = createPublicKey({
      key: {
        kty: "RSA",
        n: modulus.toString("base64url"),
        e: exponent.toString("base64url"),
      },
      format: "jwk",
    });

    const encrypted = publicEncrypt(
      {
        key: publicKey,
        padding: RSA_PKCS1_PADDING,
      },
      Buffer.from(text, "utf8"),
    );

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

export {
  mapSteamGuardToString,
  createMachineName,
  createMachineId,
  encryptRsaPassword,
  hasConfirmationType,
};
