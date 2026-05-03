Eyebrow: Agent driven development
Title: Hvornår agents hjælper, og hvad de koster i en moderne frontend.
Intro: Agent driven development kan øge hastighed og beslutningskvalitet, men kun når setup, ansvar, dokumentation, navigation og UI-konventioner er tydelige. Siden forklarer begge sider, så brugeren kan vælge modellen bevidst.
ComparisonEyebrow: Pro / con i praksis
ComparisonTitle: Det vigtige er ikke bare om agents er gode, men hvor de passer.
RecommendationEyebrow: Anbefaling
RecommendationText: Brug agents til opgaver med reel kompleksitet, gentagne workflows eller behov for tværgående kontekst. Ved små ændringer er den bedste løsning ofte stadig en direkte lokal rettelse med et snævert scope.

## Fordele
Agents er stærke, når de kan tage et klart afgrænset ansvar og genbruge dokumenteret viden, fælles konventioner og et delt designsystem.
- De reducerer starttid, fordi agenten hurtigt kan vælge et relevant workflow og samle lokal kontekst.
- De gør løsninger mere konsistente, når instruktioner, skills og konventioner bruges på tværs af opgaver.
- De hjælper med at holde momentum i brede opgaver, hvor brugeren ellers selv skulle skifte mellem flere specialiseringer.
- De gør det lettere at holde UI, tekst og kode i sync, når flere flader bygger på samme Material theme, samme navigation og samme dokumentationskilder.

## Ulemper
Modellen har også omkostninger, især hvis agenten får for brede mål eller svag dokumentation.
- Der er risiko for overautomatisering, hvis agenten får lov at gætte i stedet for at validere tæt på den relevante kodeflade.
- Dokumentation og skills skal holdes opdaterede, ellers bliver agentens beslutninger mindre præcise over tid.
- Ekstra abstraktion kan gøre simple opgaver tungere, hvis man bruger agent-flow hvor en lille lokal ændring havde været nok.
- Hvis designkonventioner, navigation eller side-tekster sakker bagud i forhold til koden, kan brugeren få et forkert billede af systemets faktiske tilstand.

## Sammenligning
Brug sammenligningen til at vurdere om agent-flow giver reel værdi i den konkrete opgave.
- Hastighed | Hurtig opstart og færre manuelle skift mellem domæner. | Kan koste tid, hvis agenten skal korrigeres efter en upræcis første antagelse.
- Kvalitet | Ensartede løsninger gennem genbrug af konventioner, workflows, navigation og et fælles Material theme. | Kvaliteten afhænger direkte af at regler, designvalg og dokumentation faktisk afspejler projektet.
- Skalerbarhed | Flere typer frontend-opgaver kan håndteres med en fælles indgang og specialiserede skills. | For mange overlappende skills eller uklare roller gør setupet sværere at forstå og vedligeholde.