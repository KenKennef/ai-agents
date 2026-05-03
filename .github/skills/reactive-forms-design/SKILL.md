---
name: reactive-forms-design
description: 'Design and implement Angular reactive forms. Use for form groups, form arrays, validation, dynamic controls, submission flow, error messaging, typed forms, and maintainable form architecture in Angular applications.'
argument-hint: 'Describe the form flow, validation rules, dynamic fields, submission behavior, or reactive form bug you want solved.'
user-invocable: true
---

# Reactive Forms Design

## When to Use
- Build or refactor a reactive form
- Add validators, dynamic controls, arrays, or submit flow
- Debug validity, value updates, or error display

## Procedure
1. Identify the form owner and user flow.
2. Model control shape, defaults, validators, and submit states.
3. Keep validation explicit and close to form definition.
4. Validate with focused test, typecheck, or build.

## Guardrails
- Prefer reactive forms for non-trivial flows.
- Avoid scattering form state unless workflow sharing requires it.
- Keep validators readable and preserve accessible labels/errors.

## Output
Return:
- changed form surface
- form and validation approach
- validation run
