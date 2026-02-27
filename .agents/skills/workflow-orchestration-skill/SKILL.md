---
name: workflow-orchestration-skill
description: Lightweight execution workflow for this repo: explore first, plan small reversible changes, verify with targeted checks, and re-plan when assumptions break
---

# Workflow Orchestration - steam-client

Use this skill for day-to-day execution across coding and test tasks in this repository.

## 1) Ground First

- Inspect current code paths before proposing edits.
- Confirm whether touched files are hand-authored or generated.
- Resolve ambiguities from local context first; ask the user only for true product decisions.

## 2) Plan Minimal, Reversible Changes

- Choose the smallest change set that solves the task.
- Preserve existing architecture boundaries:
  - `steam-client` facade
  - `steam-protocol` orchestration
  - `connection` transport/pipeline
  - `services` wrappers
  - `common` primitives
- Avoid opportunistic refactors unless explicitly requested.

## 3) Execute with Guardrails

- Keep edits localized and coherent.
- Do not manually edit generated artifacts in `src/common/steam-language/**`.
- If assumptions change mid-task (wrong path, wrong API shape, conflicting behavior), stop and re-plan before continuing.

## 4) Verify in Increasing Scope

- Run focused checks first:
  - targeted test file/path
  - then `npm run type-check`
  - then `npm run check`
- Run expensive suites only when relevant:
  - `npm run test:integration:connectors` (Docker/proxy harness)
  - `npm run test:integration:live` only by explicit request
- Prefer the smallest command set that proves correctness.

## 5) Report Clearly

- State what changed and why.
- List exact verification commands run and outcomes.
- Call out anything not run (and why).

## Re-Plan Triggers

- A key assumption is proven false during exploration.
- Required behavior conflicts with current architecture or public API constraints.
- Unexpected workspace changes appear that affect touched files.
