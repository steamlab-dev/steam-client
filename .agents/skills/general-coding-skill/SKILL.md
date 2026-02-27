---
name: general-coding-skill
description: Repo-specific engineering standard for this Node.js TypeScript Steam client library (architecture boundaries, generated proto safety, typed errors/events, and verification workflow)
---

# General Coding Standard - steam-client

Use this skill when implementing or refactoring production code in this repository.

## Scope and Goals

- Keep changes aligned with the existing Steam client architecture.
- Preserve public API stability unless explicitly requested.
- Favor small, testable, reversible changes.

## Repository Architecture Map

- `src/steam-client/`: Public facade (`SteamClient`) and session/game-play orchestration.
- `src/steam-protocol/`: Steam message handling, proto/service-call messaging, and session lifecycle.
- `src/connection/`: Transport/connectors/proxy support, connection pipeline, state, and event handling.
- `src/services/`: Steam service wrappers layered on `steamProtocol.sendServiceCallWithRes(...)`.
- `src/common/`: Shared primitives (`GenericError`, `TypedEventEmitter`, utilities, and generated language exports).

## Core Guardrails (MUST)

- Runtime and tooling:
  - Node `>=20`, ESM project (`"type": "module"`).
  - TypeScript strict mode; do not introduce `any`.
  - Use the `@` path alias for internal imports.
- Public surface:
  - Treat `src/index.ts` exports as a contract.
  - Do not add/remove/rename exports unless the user explicitly asks.
- Generated boundaries:
  - Do not hand-edit files under `src/common/steam-language/**` marked `AUTO-GENERATED FILE - DO NOT EDIT`.
  - If language/proto artifacts must change, run `npm run generate-resources` and review generated diffs.
- Error model:
  - For new domain/infrastructure errors, prefer `GenericError` subclasses and preserve `cause`.
  - Do not leak low-context raw errors across module boundaries.
- Event and resource lifecycle:
  - Preserve typed event contracts with `TypedEventEmitter<T>`.
  - Ensure listeners/sockets/timers are cleaned up in failure and disconnect paths.

## Preferred Implementation Patterns

- Connection/protocol changes:
  - Keep state transitions explicit.
  - Keep cleanup idempotent.
  - Validate context before send operations.
- Service wrapper changes:
  - Use generated request/response types from `src/common/steam-language/protos-definitions/**`.
  - Use `steamProtocol.sendServiceCallWithRes(...)` for request/response service calls.
  - Apply defaults explicitly, then merge caller overrides deliberately.
- Utility changes:
  - Keep helpers pure where practical and isolate side effects.

## Change Workflow

1. Identify the narrowest module boundary that solves the task.
2. Update code in focused increments (avoid broad opportunistic refactors).
3. Add or update tests nearest to impacted behavior under `tests/**`.
4. Run targeted verification first, then broaden only as needed.

## Verification Checklist

- `npm run type-check`
- `npm run check`
- Targeted tests for touched areas (for example `npm run test -- --run tests/connection/...`)
- Broader suites only when required by risk.

## Anti-Patterns

- Porting unrelated backend conventions (Fastify/HTTP-route schema/ORM patterns) into this library.
- Manually editing generated Steam language/proto files.
- Unintentional public export surface changes.
- Throwing bare `Error` for new domain boundaries where a typed `GenericError` subclass is expected.
- Skipping cleanup behavior for connection/protocol resources.
