---
name: vitest-skill
description: Repository-specific Vitest guidance for this Steam client (unit/integration boundaries, deterministic mocks, config-aware globals behavior, and command selection)
---

# Vitest Standard - steam-client

Use this skill for writing or updating tests in `tests/**`.

## Configuration Reality (Read First)

- Default config: `vitest.config.ts`
  - `globals: true`
  - excludes `**/*.real.test.ts`
  - excludes live integration unless `VITEST_INCLUDE_LIVE=1`
- Integration connectors config: `vitest.integration.config.ts`
  - `globals: false`
  - uses `tests/global-setup.ts`
  - includes `tests/steam-client/connectors.integration.tests.ts`
  - single-worker deterministic execution

Implication:

- Explicit imports from `vitest` are preferred and already the dominant local pattern.
- Do not assume globals behavior is identical across all suites.

## Test Taxonomy for This Repo

- Unit tests:
  - `tests/connection/**`
  - `tests/common/**`
  - Must not use real network or Docker services.
- Deterministic integration (proxy + secure CM harness):
  - `tests/steam-client/connectors.integration.tests.ts`
  - Uses Docker proxy fixtures and local secure server harness.
- Live integration:
  - `tests/steam-client/live.integration.test.ts`
  - Run only when explicitly requested.

## Determinism Rules (MUST)

- Mock time for timeout behavior (`vi.useFakeTimers()` + `vi.advanceTimersByTime(...)`).
- Use stable socket/event helpers from `tests/helpers/socket-mocks.ts` for connector/network unit tests.
- Avoid external network calls in unit tests.
- Cleanup test state:
  - `vi.clearAllMocks()` between cases when call history matters.
  - `vi.restoreAllMocks()` after each test when spies/mocks are used.
  - `vi.useRealTimers()` after fake timer usage.

## File and Naming Guidance

- Place tests under `tests/` in the matching feature area (for example `connection`, `common`, `steam-client`).
- Use `.test.ts` for unit tests.
- Keep existing integration naming conventions (`*.integration.tests.ts`, `*.integration.test.ts`, `*.real.test.ts`).

## Command Selection

- Single file or narrow scope:
  - `npm run test -- --run <path>`
- Unit subsets:
  - `npm run test:unit:connection`
  - `npm run test:unit:common`
- Deterministic connector integration:
  - `npm run test:integration:connectors`
- Live integration (explicit request only):
  - `npm run test:integration:live`

## Quality Checklist

- Tests assert externally observable behavior, not incidental internals.
- Failure paths assert error type/message/cause where meaningful.
- Timeouts, retries, and chunked socket scenarios are covered for connector/protocol changes.
- No flakiness introduced by uncontrolled timers or external dependencies.

## Anti-Patterns

- Assuming Vitest globals are always available.
- Sleeping tests (`setTimeout` delays) instead of deterministic timer control.
- Real network or Docker dependency in unit tests.
- Leaving mocked timers/spies active across tests.
