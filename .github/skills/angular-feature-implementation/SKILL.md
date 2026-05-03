---
name: angular-feature-implementation
description: 'Implement Angular frontend features. Use for new components, routes, reactive forms, standalone APIs, signals, template wiring, UI behavior, and feature-level refactors in Angular applications.'
argument-hint: 'Describe the Angular feature, component behavior, route, form, or UI change you want implemented.'
user-invocable: true
---

# Angular Feature Implementation

## When to Use
- Build or update a component, page, or route
- Wire inputs/outputs/signals/observables/template behavior
- Implement local feature changes without broad refactors

## Procedure
1. Identify the owning surface (component, route, service, or form).
2. Trace local data flow and bindings.
3. Implement the smallest coherent change using existing standalone patterns.
4. Validate with a focused test, typecheck, or build.

## Guardrails
- Favor idiomatic Angular and existing project conventions.
- Keep logic local unless sharing is clearly justified.
- Preserve accessibility and responsive layout.

## Output
Return:
- changed surface
- implementation approach
- validation run
