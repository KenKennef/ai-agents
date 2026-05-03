---
name: "Angular Frontend Conventions"
description: "Use when editing Angular frontend code in this project. Covers Angular 17 standalone patterns, templates, SCSS structure, RxJS usage, and when NgRx is justified."
applyTo:
  - "src/app/**/*.ts"
  - "src/app/**/*.html"
  - "src/app/**/*.scss"
---

# Angular Frontend Conventions

- Prefer existing Angular 17 standalone patterns.
- Keep changes local before introducing shared abstractions.
- Use signals/inputs/outputs/router state idiomatically.
- Prefer reactive forms for non-trivial forms.
- Use declarative RxJS; avoid nested subscriptions.
- Use NgRx only for shared or durable state.
- Keep templates accessible and semantic.
- Keep SCSS readable, restrained, and component-local.
- Avoid unrelated rewrites while fixing a local task.
- Validate with the narrowest useful test or build.