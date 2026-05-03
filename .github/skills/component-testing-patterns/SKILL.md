---
name: component-testing-patterns
description: 'Write and refine Angular component tests. Use for standalone component specs, TestBed setup, DOM assertions, input and output behavior, change detection, mocks, and focused frontend test coverage in Angular applications.'
argument-hint: 'Describe the component test, missing behavior coverage, failing spec, or Angular test pattern you want implemented or improved.'
user-invocable: true
---

# Component Testing Patterns

## When to Use
- Add or update component specs
- Test DOM output, inputs, outputs, and public behavior
- Add focused regression tests for UI changes

## Procedure
1. Start from user-visible behavior.
2. Use standalone TestBed style (`imports: [ComponentUnderTest]`) where applicable.
3. Keep setup/mocks minimal and local.
4. Prefer DOM/public-output assertions and validate with focused test run.

## Guardrails
- Do not widen scope without concrete reason.
- Avoid private-implementation assertions.
- Keep mocks small and names behavior-oriented.

## Output
Return:
- covered behavior
- spec changes
- validation run
