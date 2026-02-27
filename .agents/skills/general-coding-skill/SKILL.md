---
name: general-coding-skill
description: Enforces strict Fastify v5 + TypeScript backend engineering standards (TypeBox schemas, Drizzle-derived types, boundary validation, typed errors mapped to HTTP codes, auth/ownership checks, structured logging)
--- 

# Engineering Standard — Fastify v5 + TypeScript

Single source of truth for backend development and AI-generated code.

Non‑compliance is a defect.

---

## Purpose

This standard enforces:

- Type safety
- Security
- Deterministic behavior
- Architectural consistency
- Production hygiene

All contributors and AI agents MUST follow this document.

---

## Golden Rules (Never Break)

1. Fastify v5 only (async hooks only)
2. Node >= 18.16.0, ESM (`"type": "module"`)
3. TypeScript `strict: true`, zero `any`
4. All routes use TypeBox with full request + response schemas
5. Declare **all** response codes (200, 4xx, 5xx)
6. Runtime types from schemas, persisted types from Drizzle (`$inferSelect` / `$inferInsert`)
7. Validate + sanitize at API boundaries
8. Typed domain errors only (AuthenticationError, ValidationError, etc.)
9. Map typed errors to explicit HTTP codes
10. Logging via `fastify.log` / `request.log` only
11. Short‑lived access tokens + refresh tokens
12. Authorization on ALL mutations (DELETE/PATCH/PUT/POST)
13. Account lockout: 5 failures → 15 min (423)
14. API dates are ISO strings
15. Health endpoint returns 503 if DB unavailable
16. DB pools must register error handlers + timeouts (~30s)
17. No dead or commented‑out code
18. Documentation updates are mandatory
19. Response envelope is `{ success: true, data }` or `{ success: false, error }`

---

## Type System

### ✅ Correct

```ts
import type { users } from '@/database/schema.js';

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
```

### ❌ Wrong

```ts
interface User {
  id: string;
}
```

---

## Runtime

- Use `fastify().withTypeProvider<TypeBoxTypeProvider>()`
- Top‑level await allowed
- `await fastify.listen({ port, host })` only
- Shared services are attached via `fastify.decorate(...)`
- Fastify type augmentation lives in `src/middleware/types.ts`

---

## Schemas

- TypeBox for ALL routes
- Always include response schemas
- Routes should be declared via `FastifyPluginAsyncTypebox`
- Controllers may accept `FastifyRequest` / `FastifyReply` without custom generics; rely on schemas for validation
- Reapply TypeProvider inside plugin scopes
- Convert Dates to ISO at serialization
- Prefer shared response schemas from `src/common.schemas.ts` (`successResponseSchema`, `ErrorResponseSchema`)

---

## Architecture

- fastify-plugin only for infrastructure
- Routes stay encapsulated
- Prefix by domain (`/api`, `/admin`, etc.)
- Organize modules under `src/modules/<domain>/` with `*.routes.ts` + optional `*.controller.ts`

---

## Lifecycle Hooks (Async Only)

1. onRequest
2. preParsing
3. preValidation
4. preHandler
5. preSerialization
6. onError
7. onSend
8. onResponse

---

## Security

- Use Object.hasOwn for params
- Request decorators are limited to auth context (`request.user`)
- Service decorators live on the Fastify instance (`fastify.decorate`)
- Protected routes must use `authenticateToken` in `onRequest`
- Streams require `reply.hijack()`
- Inputs validated at boundary
- DB errors never exposed
- Health checks include DB
- Singleton DB initialization must be concurrency-safe

---

## Errors & Logging

- Services throw typed errors
- Routes map to HTTP codes
- Never mix throw + reply.send
- Structured logging only
- Prefer `replyWithError` for catch-all error responses in controllers

---

## Minimal Example

```ts
import fastify from 'fastify'
import { Type } from '@sinclair/typebox'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const app = fastify().withTypeProvider<TypeBoxTypeProvider>()

app.get('/user/:id', {
  schema: {
    params: Type.Object({ id: Type.String() }),
    response: {
      200: Type.Object({
        id: Type.String(),
        name: Type.String()
      })
    }
  }
}, async (req) => {
  return { id: req.params.id, name: 'demo' }
})

await app.listen({ port: 3000, host: '0.0.0.0' })
```

---

## AI / PR Checklist

- Fastify v5 APIs only
- TypeBox schemas complete
- All HTTP codes declared
- Drizzle-derived types only
- Authorization on mutations
- Typed errors mapped
- fastify.log only
- ISO dates
- DB health verified
- No dead code
- Docs updated

---

## Anti‑Patterns (Reject Immediately)

- Missing schemas
- Generic Error in services
- No ownership checks
- Health returning 200 on DB failure
- console.log
- Shared decorators
- Callback hooks
- Commented code
- Missing documentation

---

## Pre‑Commit

```bash
npm run type-check
npm run check
npm run build
```

---

Last Updated: 2026‑02‑14
Version: 1.2.0
