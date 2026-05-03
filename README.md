# AI Agents Frontend

Dette repository er en Angular 17 frontend, der demonstrerer et agent-baseret setup for frontend-arbejde.
Appen bruger Angular Material som fælles designgrundlag og viser i UI'et både hvordan agent-setupet er organiseret,
og hvilke styrker og svagheder der følger med agent driven development.

## Sider i appen

- `/` giver et kort overblik over projektet og linker videre til de to forklarende sider.
- `/agent-setup` beskriver den nuværende opsætning med agent, skills, instructions, delt topnavigation og Material-baserede UI-konventioner.
- `/why-agents` forklarer fordele og ulemper ved agent driven development i praksis.

## Teknisk retning

- Angular standalone components og router-baserede feature-sider.
- Angular Material med et delt custom theme i `src/theme/_material-theme.scss`.
- Dokumentationsdrevne tekstsektioner, der læses fra `.github/app-content/*.md` og synkroniseres til assets før `start`, `build` og `test`.
- Fallback til genererede markdown-strenge i appen, så siderne stadig kan rendere selv hvis docs-assets midlertidigt ikke bliver servet.
- Fælles app-shell med topnavigation og layouts, der udnytter mere af den tilgængelige bredde på større skærme.
- Agent-dokumentation og specialiseringer samlet under `.github/`.

## Udvikling

- `npm start` starter udviklingsserveren på `http://localhost:4200/`.
- `npm run build` laver en produktionsbuild i `dist/app`.
- `npm test` kører enhedstests via Karma.
- `npm run sync:docs` kopierer `.github/app-content` til `src/assets/docs` og regenererer indlejrede docs-fallbacks.

## Dokumentation

- [`.github/README.md`](.github/README.md) beskriver agenten, skills og instructions.
- `.github/app-content/landing-page.md` er kilden til teksterne på `/`.
- `.github/app-content/agent-setup.md` er kilden til teksterne på `/agent-setup`.
- `.github/app-content/why-agents.md` er kilden til teksterne på `/why-agents`.
