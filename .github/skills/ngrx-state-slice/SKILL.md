---
name: ngrx-state-slice
description: 'Design or update NgRx state slices. Use for actions, reducers, selectors, effects, entity state, feature stores, and side-effect boundaries in Angular applications using NgRx.'
argument-hint: 'Describe the feature state, action flow, selector need, or effect behavior you want designed or fixed.'
user-invocable: true
---

# NgRx State Slice

## When to Use
- Add or refactor NgRx feature state
- Create/fix actions, reducers, selectors, and effects
- Debug incorrect store flow or derived state

## Procedure
1. Confirm NgRx is justified over local component/service state.
2. Trace trigger -> action -> reducer -> selector -> effect.
3. Keep reducers pure and effects for side effects only.
4. Validate with focused test or typecheck.

## Guardrails
- Do not use NgRx for short-lived local state.
- Keep selectors focused and composable.
- Keep side effects in effects, not components.

## Output
Return:
- chosen state boundary
- action-to-selector flow
- validation run
