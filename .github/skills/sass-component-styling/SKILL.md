---
name: sass-component-styling
description: 'Style Angular components with Sass or SCSS. Use for responsive layout, reusable styling patterns, component theming, spacing systems, and maintainable UI polish in Angular frontends.'
argument-hint: 'Describe the component, layout, visual issue, or SCSS styling change you want solved.'
user-invocable: true
---

# Sass Component Styling

## When to Use
- Fix layout, spacing, and responsiveness in a component
- Refactor component SCSS without changing logic
- Resolve local style regressions

## Procedure
1. Start from owning template + stylesheet.
2. Identify structural, responsive, or specificity cause.
3. Apply smallest SCSS fix using existing patterns.
4. Validate behavior with a focused frontend check.

## Guardrails
- Avoid introducing a new design system for local fixes.
- Avoid brittle selectors and deep nesting.
- Preserve contrast, focus states, and mobile behavior.

## Output
Return:
- changed stylesheet/component
- styling approach
- validation run
