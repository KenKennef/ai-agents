---
name: angular-performance-debugging
description: 'Debug and improve Angular frontend performance. Use for slow rendering, excessive change detection, large lists, template inefficiencies, unnecessary recomputation, routing delays, bundle concerns, and UI responsiveness issues.'
argument-hint: 'Describe the Angular performance issue, slow view, rendering bottleneck, or responsiveness problem you want analyzed.'
user-invocable: true
---

# Angular Performance Debugging

## When to Use
- Investigate slow render, interaction lag, or route slowness
- Reduce change detection or expensive template work
- Improve list rendering and responsiveness

## Procedure
1. Start from one user-visible slowdown.
2. Locate the nearest owning surface (template/component/route/stream/state).
3. Apply smallest targeted optimization tied to one hypothesis.
4. Validate with focused check and note remaining hotspots.

## Guardrails
- Prefer local fixes before architectural change.
- Keep templates simple and avoid repeated expensive bindings.
- Preserve correctness and accessibility.

## Output
Return:
- observed issue and suspected bottleneck
- optimization applied
- validation run
