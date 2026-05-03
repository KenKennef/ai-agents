---
name: rxjs-flow-debugging
description: 'Debug and improve RxJS flows in Angular applications. Use for observable lifecycles, operator choice, cancellation, stream composition, async template integration, and subscription issues.'
argument-hint: 'Describe the observable bug, subscription issue, race condition, or RxJS flow you want analyzed.'
user-invocable: true
---

# RxJS Flow Debugging

## When to Use
- Debug duplicate requests, stale UI, races, or missing emissions
- Replace nested subscriptions with safer stream composition
- Improve cancellation, teardown, and async pipe integration

## Procedure
1. Start at the observable driving the failing behavior.
2. Trace sources, operators, subscriptions, and teardown.
3. Form one hypothesis and apply the smallest operator/composition fix.
4. Validate with focused test, reproduction, typecheck, or build.

## Guardrails
- Prefer declarative composition over manual chains.
- Avoid unnecessary subjects.
- Be explicit about cancellation/replay/multicasting.

## Output
Return:
- failing flow and likely issue
- operator/composition change
- validation run