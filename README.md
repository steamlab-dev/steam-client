# @steamlab/steam-client

A lean TypeScript Steam client for Node.js. It handles the low-level CM connection, authentication, and message framing — giving you a clean foundation to build Steam integrations on top of.

## Features

- Full TypeScript API with typed Steam protos
- QR code and credential login flows (with Steam Guard support)
- Logon via refresh token
- WebSocket transport to Steam CM servers
- HTTP, HTTPS, and SOCKS5 proxy support

## Requirements

- Node.js `>= 22`
- npm `>= 9.5.1`

## Installation

```sh
npm install @steamlab/steam-client
```

## Quick Start

```ts
import { SteamClient } from "@steamlab/steam-client";
import type { ConnectionOptions } from "@steamlab/steam-client";

const options: ConnectionOptions = {
  steamCM: { host: "cmp1-iad1.steamserver.net", port: 27018 },
  timeout: 15_000,
};

const client = new SteamClient(options);

client.emitter.on("disconnected", (msg) => {
  console.log("Disconnected:", msg);
});

await client.connect();
```

## Authentication

### QR Login

The `authentication-qr` event fires with a `challengeUrl`. Render the QR code however you like — the client polls Steam in the background and resolves once the user scans it.

```ts
client.emitter.once("authentication-qr", ({ challengeUrl }) => {
  // Render challengeUrl as a QR code in your UI
  console.log(challengeUrl);
});

client.emitter.once("steam-auth-tokens", ({ tokens }) => {
  console.log("Refresh token:", tokens.refreshToken);
  console.log("Access token:", tokens.accessToken);
});

await client.services.authentication.loginViaQr();
```

### Credential Login

Credential login is a two-step flow. Pass a `Promise<string>` as the second argument so the client can await a Steam Guard code if Steam requests one during sign-in. Resolve it with the device or email code when it becomes available.

```ts
// Listen for the type of guard required
client.emitter.on("authentication-2fa-required", ({ guardType }) => {
  // guardType: "device_code" | "email_code" | "device_confirmation" | "email_confirmation"
  console.log("Steam Guard required:", guardType);
});

client.emitter.once("steam-auth-tokens", ({ tokens }) => {
  console.log("Refresh token:", tokens.refreshToken);
  console.log("Access token:", tokens.accessToken);
});

// Use a promise to bridge the guard code from wherever it arrives
const { promise: codePromise, resolve: resolveCode } = Promise.withResolvers<string>();

const logonPromise = client.services.authentication.loginViaCredentials(
  { account_name: "your-username", password: "your-password" },
  codePromise,
);

// Supply the code when it arrives (e.g. from user input or your own service)
resolveCode("AB123");

await logonPromise;
```

Device and email **confirmation** types do not require a code — just approve the sign-in notification when it arrives in the Steam app or email.

### Logon with Refresh Token

If you already have a valid refresh token from a previous session, you can skip the full auth flow:

```ts
await client.logonRequest({ access_token: refreshToken });
```

## Connection Options

All options are passed to the `SteamClient` constructor.

| Option | Type | Required | Description |
|---|---|---|---|
| `steamCM.host` | `string` | Yes | CM server hostname |
| `steamCM.port` | `number` | Yes | CM server port |
| `timeout` | `number` | Yes | Connection timeout in milliseconds |
| `proxy` | `ProxyConfiguration` | No | HTTP, HTTPS, or SOCKS5 proxy |

### Proxy Example

```ts
import type { ConnectionOptions } from "@steamlab/steam-client";

const options: ConnectionOptions = {
  steamCM: { host: "cmp1-iad1.steamserver.net", port: 27018 },
  timeout: 10_000,
  proxy: {
    protocol: "socks5",
    host: "127.0.0.1",
    port: 1080,
    username: "user",   // optional
    password: "pass",   // optional
  },
};
```

## Client API

| Method | Description |
|---|---|
| `client.connect()` | Connects to the Steam CM server |
| `client.disconnect()` | Disconnects from the CM server |
| `client.logonRequest(payload)` | Logs on using a refresh token |
| `client.startPlaying(gameId)` | Reports a game as being played. Accepts `bigint`, `number`, `string`, or arrays of those values |
| `client.stopPlaying(gameId)` | Stops reporting a game as being played. Accepts `bigint`, `number`, `string`, or arrays of those values |

## Services

Services are available via `client.services`.

| Service | Description |
|---|---|
| `client.services.authentication` | QR and credential login flows |
| `client.services.player` | Player-related Steam service calls. `GetOwnedGames()` is implemented; many generated player methods are not implemented yet |

At the moment, `client.services.player.GetOwnedGames()` is the main ready-to-use player helper:

```ts
const ownedGames = await client.services.player.GetOwnedGames();
console.log(ownedGames.games);
```

## Events

Listen to events via `client.emitter`.

| Event | Payload | Description |
|---|---|---|
| `disconnected` | `DisconnectMsg` | Fired when the connection drops |
| `authentication-qr` | `{ challengeUrl: string }` | QR login URL ready to render |
| `authentication-2fa-required` | `{ guardType: SteamGuardType }` | Steam Guard code or confirmation needed |
| `steam-auth-tokens` | `{ tokens: SteamAuthTokens }` | Auth tokens received after login |

## Exports

```ts
import {
  SteamClient,
  ProtoManager,
  EMsg,
  EResult,
  SteamEnums,
  ConnectionError,
  SteamClientError,
  SteamProtocolError,
  SteamProtocolEResultError,
} from "@steamlab/steam-client";
```

## License

[ISC](https://opensource.org/licenses/ISC) — © steamlab-dev

## Links

- [GitHub](https://github.com/steamlab-dev/steam-client)
- [npm Package](https://www.npmjs.com/package/@steamlab/steam-client)
