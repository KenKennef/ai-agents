Eyebrow: Agent setup
Title: Sådan arbejder vores agent-setup med Angular-opgaver.
Intro: Siden opsummerer den dokumenterede rolle for agenten, skills, instructions, delt topnavigation og det fælles Angular Material theme, så setupet kan forklares direkte fra `.github`-materialet.
NextStepEyebrow: Dokumentationsdrevet indhold
NextStepTitle: Indholdet på siden læses fra `.github` og har fallback i appen.
NextStepText: Når setupet ændrer sig, bør denne fil opdateres sammen med `.github/README.md`. `npm run sync:docs` kopierer derefter markdown til assets og regenererer den indlejrede fallback, så app og dokumentation fortsat beskriver det samme system.

## Stats
- Agenter: 1 specialiseret frontend-agent
- Skills: 7 fokuserede workflows
- Instructions: 2 Angular-regelsæt
- UI: Angular Material med delt theme og topnavigation

## Hvad agenter gør
Dokumentationen beskriver agenten som den rigtige indgang, når en opgave går på tværs af komponenter, routing, formularer, styling, state og UI-konventioner.
- Brug agenten når opgaven er bred eller uklar, og du vil have ét samlet frontend-overblik.
- Agenten vælger selv et snævrere workflow, hvis problemet i praksis handler mest om forms, styling, RxJS, performance, tests eller Material-baseret UI.
- Den er tænkt som standardvalg, når du ikke på forhånd ved om problemet primært ligger i Angular, SCSS, NgRx, RxJS eller de fælles designkonventioner.

## Hvordan setup er bygget op
`.github/README.md` skelner mellem den brede frontend-agent, målrettede skills og instruktioner, mens appen selv bruger Angular Material, delt topnavigation og dokumentationsdrevne sider som fælles UI-grundlag.
- Agenten bruges til brede opgaver, hvor der skal vælges retning og løses på tværs af flere Angular-flader.
- Skills bruges til snævre workflows som feature-implementering, reactive forms, Sass, NgRx, RxJS, performance og komponenttests.
- Instructions sikrer Angular- og test-konventioner på tværs af `src/app` og tilhørende specs.
- Det delte Material theme giver samme farver, typografi og komponentkonventioner på tværs af siderne.
- App-shellen giver én fælles navigation, så siderne ikke skal gentage lokale tilbage-links.
- Layoutet bruger nu mere af bredden på større skærme gennem bredere shells og responsive grids.

## Hvornår det giver mening
Dokumentationen fremhæver en enkel tommelfingerregel: start bredt med agenten og gå direkte til en skill, når arbejdsområdet allerede er kendt og UI-retningen er klar.
- Start med agenten hvis opgaven er tværgående eller stadig uafklaret.
- Vælg en skill direkte hvis du allerede kender den tekniske kategori og vil have en mere fokuseret løsning.
- Hold setupet ved lige ved at opdatere beskrivelser, docs-filer, navigation og theme-konventioner, når projektet ændrer sig.