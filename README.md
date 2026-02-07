# @steamlab/steam-client

A lean, TypeScript Steam client for Node.js with a focus on speed, clean primitives, and extensibility. This is not a full-featured Steam client yet. It provides a solid base for custom integrations and for wiring your own Steam protos and service calls.

## Highlights

- TypeScript API with typed Steam protos
- QR and credential login flows
- Minimal Steam client core with explicit connect and logon steps
- Supports TCP and WebSocket transports
- HTTP, SOCKS4, and SOCKS5 proxy support

## Installation

```shell
npm i @steamlab/steam-client
```

## Quick Start

How to connect to a Steam CM server

```ts
import { SteamClient } from "@steamlab/steam-client";
import type { ConnectionOptions } from "@steamlab/steam-client";

const options: ConnectionOptions = {
  steamCM: { host: "cmp1-iad1.steamserver.net", port: 27018 },
  timeout: 15_000,
};

const client = new SteamClient(options);

client.emitter.on("steam-message-error", (error) => {
  console.error("Steam message error:", error);
});

client.emitter.on("disconnected", (msg) => {
  console.log("Disconnected:", msg);
});

await client.connect();
```

## Authentication

QR login emits a QR code that can be displayed as an image or in a terminal.

```ts
client.emitter.once("authentication_qr", ({ imageQr, terminalQr }) => {
  console.log(imageQr);
  console.log(terminalQr);
});

// Received after authentication
client.emitter.once("steam_auth_tokens", ({ refreshToken, accessToken }) => {
  console.log("Refresh token:", refreshToken);
  console.log("Access token:", accessToken);
});

const logonRes = await client.services.authentication.loginViaQr();
```

Credential login is a two-step flow:
1) Start the login.
2) If Steam Guard is required, the callback is invoked to supply the code.

Device or email confirmation does not require a code; just approve the sign-in when notified.

```ts
import { EAuthSessionGuardType } from "@steamlab/steam-client";

// Store pending logins so the code can be supplied later from elsewhere
const pendingLogins = new Map<string, (code: string) => void>();

// Optional: Listen for 2FA requirement notification
client.emitter.on("authentication_2fa_required", (guardType) => {
  if (guardType === EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode) {
    console.log("Steam Guard code from mobile app required");
  } else if (guardType === EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode) {
    console.log("Steam Guard code from email required");
  } else if (guardType === EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation) {
    console.log("Approve sign-in from the Steam mobile app");
  } else if (guardType === EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation) {
    console.log("Approve sign-in from the email confirmation link");
  }
});

// Received after authentication
client.emitter.once("steam_auth_tokens", ({ refreshToken, accessToken }) => {
  console.log("Refresh token:", refreshToken);
  console.log("Access token:", accessToken);
});

// Start the login
const loginId = crypto.randomUUID();

// Will be invoked by loginViaCredentials when SteamGuard is needed
const codePromise = new Promise<string>((resolve) => {
  pendingLogins.set(loginId, resolve);
});

const logonPromise = client.services.authentication.loginViaCredentials(
  {
    account_name: "your-username",
    password: "your-password",
  },
  async () => {
    const code = await codePromise;
    pendingLogins.delete(loginId);
    return code;
  }
);

// Helper function to supply the code when it becomes available
function provideSteamGuardCode(loginId: string, code: string) {
  const resolver = pendingLogins.get(loginId);
  if (resolver) {
    resolver(code);
  }
}

// logonPromise will resolve once provideSteamGuardCode() is called.
provideSteamGuardCode(loginId, "123456");
```

If you already have a refresh token, you can log on directly.
This should only be used to login via refreshToken. Do not use it anymore to log on via User/Pass as Steam might deprecate it that functionality.

```ts
const logonRes = await client.logonRequest({
  access_token: refreshToken,
});
```

## Connection Options

The transport is chosen automatically based on the `steamCM.host`.
- IP hosts use TCP
- Hostnames use WebSocket

Proxy connections are supported via the proxy property.

```ts
import type { ConnectionOptions } from "@steamlab/steam-client";

const options: ConnectionOptions = {
  steamCM: { host: "cmp1-iad1.steamserver.net", port: 27018 },
  timeout: 10_000,
  proxy: {
    protocol: "socks5",
    host: "127.0.0.1",
    port: 1080,
    username: "user",
    password: "pass",
  },
};
```

## Client API

```ts
await client.startPlaying(730);

await client.stopPlaying(730);
```

## Services

Available services are exposed via `client.services`.

- `authentication`
- `player`

## Exports

```ts
import {
  SteamClient,
  ProtoManager,
  EMsg,
  EResult,
  EAuthSessionGuardType,
} from "@steamlab/steam-client";
```

## License

ISC

## Links

- [GitHub Repository](https://github.com/steamlab-dev/steam-client)
- [npm Package](https://www.npmjs.com/package/@steamlab/steam-client)