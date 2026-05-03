---
name: "Angular Testing Conventions"
description: "Use when writing or updating Angular tests in this project. Covers standalone component tests, TestBed setup, DOM assertions, focused test scope, and maintainable frontend test structure."
applyTo:
  - "src/app/**/*.spec.ts"
---

# Angular Testing Conventions

- Follow current standalone test style.
- For standalone components, prefer `imports: [ComponentUnderTest]`.
- Test user-visible behavior, outputs, and public state.
- Keep setup and mocks minimal and local.
- Run `fixture.detectChanges()` only when needed.
- Add tests only for changed behavior unless broader scope is justified.
- Keep test names behavior-oriented.
- Validate with the narrowest useful Angular test command.