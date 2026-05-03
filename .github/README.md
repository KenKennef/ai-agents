# Angular Frontend Copilot Setup

Denne mappe indeholder en specialiseret Copilot-agent og et sæt fokuserede skills til Angular-frontendarbejde.

## Brug Agenten Når
- Opgaven er bred og kræver Angular-overblik på tværs af komponenter, routing, formularer, styling og state.
- Du vil have én frontend-specialist til at analysere og løse en Angular-opgave end-to-end.
- Du ikke på forhånd ved, om problemet primært handler om Angular, SCSS, NgRx eller RxJS.

Agent:
- [agents/angular-frontend-expert.agent.md](agents/angular-frontend-expert.agent.md)

## Brug En Skill Når
- Opgaven passer til et konkret workflow og bør løses mere snævert.
- Du vil trigge en mere præcis specialisering direkte med slash command eller via automatisk discovery.

Skills:
- [skills/angular-feature-implementation/SKILL.md](skills/angular-feature-implementation/SKILL.md) for komponenter, routes, formularer, template wiring og feature-adfærd.
- [skills/reactive-forms-design/SKILL.md](skills/reactive-forms-design/SKILL.md) for form groups, validators, dynamiske felter, fejlvisning og submit-flow.
- [skills/sass-component-styling/SKILL.md](skills/sass-component-styling/SKILL.md) for layout, responsivitet, SCSS-struktur og visuel polish.
- [skills/ngrx-state-slice/SKILL.md](skills/ngrx-state-slice/SKILL.md) for actions, reducers, selectors, effects og state boundaries.
- [skills/rxjs-flow-debugging/SKILL.md](skills/rxjs-flow-debugging/SKILL.md) for observable bugs, cancellation, operatorvalg og subscriptions.
- [skills/angular-performance-debugging/SKILL.md](skills/angular-performance-debugging/SKILL.md) for langsom rendering, change detection-problemer, tunge lister og UI-responsivitet.
- [skills/component-testing-patterns/SKILL.md](skills/component-testing-patterns/SKILL.md) for standalone component-specs, DOM-assertions, output-tests og fokuseret regressionsdækning.

## Tommelfingerregel
- Start med agenten, hvis problemet er uklart eller bredt.
- Brug en skill direkte, hvis du allerede ved hvilket arbejdsområde opgaven tilhører.
- Hold skills fokuserede. Hvis en ny skill dækker for meget, bør den splittes op.

## Vedligeholdelse
- Opdater agentens beskrivelse, hvis der kommer nye frontend-ansvarsområder.
- Tilføj nye skills, når et workflow bliver gentaget ofte nok til at fortjene en separat specialist.
- Hold beskrivelser keyword-rige, så discovery fungerer stabilt.