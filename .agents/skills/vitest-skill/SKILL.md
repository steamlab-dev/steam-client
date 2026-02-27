---
name: vitest-skill
description: Enforces strict Vitest 4.x enterprise backend testing standards for Node.js + TypeScript (AAA, type-safe mocks, determinism, lifecycle discipline).
---

# Vitest 4.x Engineering Constitution
## Node.js Backend + TypeScript (Enterprise / Production Grade)

This document defines STRICT, NON-NEGOTIABLE standards for backend testing using Vitest 4.x with TypeScript.

This is not a style guide.
This is an executable contract.

Any generated tests MUST follow this document exactly.
Violation of these rules indicates architectural failure.

---

# 0. Mission Statement

Tests exist to:

- Specify behavior
- Prevent regressions
- Enforce architecture
- Protect refactors
- Document intent

If a test can pass while production is broken, the test is WRONG.

---

# 1. Test Taxonomy (Mandatory)

All tests belong to ONE category:

| Layer | Purpose | Mocking |
|-------|---------|---------|
| Unit | Pure logic | Everything external |
| Service | Business rules | IO only |
| Route / Controller | HTTP contract | DB + external services |
| Integration | Cross-module behavior | Nothing except external systems |

Rules:

- Network access → NOT unit
- Real filesystem → NOT unit
- Real database → NOT unit
- Crypto → MUST be mocked
- Timers → MUST be fake
- Integration tests must be explicitly labeled

---

# 2. Language Rules (Absolute)

- TypeScript ONLY
- `any` is forbidden
- Prefer `unknown` + narrowing
- Explicit types everywhere
- Use Vitest types:

  - Mock
  - MockedFunction<T>
  - MockInstance
  - expectTypeOf

---

# 3. No Globals (Mandatory)

Vitest globals are DISABLED.

Always import explicitly:

```ts
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  expectTypeOf,
  type Mock,
  type MockedFunction,
} from "vitest";
```

Failure to import explicitly is invalid.

---

# 4. AAA Structure (Required)

Every test MUST follow:

Arrange  
Act  
Assert  

---

# 5. Vitest 4 ESM + Mock Hoisting

Vitest hoists `vi.mock()`.

If mocks depend on local variables, they MUST be wrapped with `vi.hoisted()`.

---

# 6. Type-Safe Mocking Only

Always wrap imports with `vi.mocked()` to ensure type safety.

---

# 7. Backend HTTP Testing

Routes MUST be tested via injection (no real network calls).

---

# 8. Lifecycle Discipline

Mandatory:

```ts
beforeEach(() => {
  vi.clearAllMocks();
});

afterEach(() => {
  vi.restoreAllMocks();
});
```

---

# 9. Assertion Standards

Prefer outcome-based assertions over implementation details.

---

# 10. Determinism

- Timers mocked
- Random mocked
- UUID mocked
- Crypto mocked
- Date mocked

Non-deterministic tests are invalid.

---

# 11. Forbidden Patterns

- `any`
- Snapshot testing backend logic
- Real HTTP calls
- Real DB access
- Real filesystem access
- Shared mutable state between tests
- Unawaited promises
- Sleeping tests (`setTimeout`, `sleep`, etc.)

---

## 12. Testing layout
- Tests live under `tests/` and MUST mirror the tested file path from repo root.
  - Example: `src/utils/encryption.ts` -> `tests/utils/encryption.test.ts`
  
---

## 13. Type-Check and Biome Lint Compliance
- All tests MUST be type-checked without errors by doing `tsc --noEmit` on the test files.
- All tests MUST pass `biome format --write` and `biome check --write` on the test files.
- Run vitest to ensure all tests pass.

# FINAL LAW

Tests are executable specifications.

If production breaks and tests pass,
your tests are lying.
