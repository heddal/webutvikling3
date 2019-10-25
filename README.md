## Dokumentasjon
### Krav til funksjonalitet
*En dialog/form for input av søk*

Vi hentet søkefeltet vårt fra material.ui og endret den til våre behov. Vi endret den slik at hvis brukeren trykker på enter-knappen så lagres søkeordet med redux slik at vi kan over alle komponenter vite hvilket ord som det blir søkt med.

*Listebasert presentasjon av søk*
Etter første søk så blir brukeren omdirigert til søkesiden vår hvor alle stedene som matcher søket kommer opp på hvert sitt card. (Ønsker man å se alle stedene kan man enten trykke enter uten søkeord eller søke “all”). På PC-skjerm er cardene plassert tre og tre på rad. Vi har brukt Infinite scroll slik at brukeren kan dynamisk laste flere resultater ved scrolling.

*Muligheten til å se mer detaljer om hvert av objektene*
På hvert card så har vi en “view more” knapp som omdirigerer brukeren til en side med mer informasjon om stedet de har valgt. Vi syns dette var den mest ryddige og effektive måten å gi brukeren mer informasjon.

*Mulighet for sortering og filtrering*
Vi har to typer for filtrering: det første er søkefeltet hvor brukeren kan søke etter by og land. 
Når brukeren har kommet inn på søkesiden er det også muligheten for å velge mellom 5 kontinenter eller alle på en gang ved å trykke på knappene under søkefeltet.

Sortering gjøres mulig ved en drop-meny oppe i høyre hjørne. Her kan brukeren velge å sortere etter popularitet (populariteten velges etter hvor mange ganger et sted har blitt “viewed more”) eller alfabetisk. 

*Noen bruker/brukergenererte data som lagres og presenteres & Avansert visning av data*
Her valgte vi å slå to fluer i en smekk og vise vår brukergenererte data som en ordsky. Hver gang en bruker trykker på “view more” øker “popularity”-fieldet til den byen med 1. Hvor mer populært en by er, jo større vises bynavnet i ordskyen. Ordskyen finner brukeren ved å klikke på “click here” på hovedsiden. 

### Krav til backend

Vi har i dette prosjekt valgt å bruke MongoDB som database. Vi satte opp denne på den virtuelle maskinen, og brukte så MongoDB Compass for å visualisere databasen, samt å legge til/slette objekter i databasen. Den ligger nå 50 objekter der, og vi tenkte dette var nok for å teste ut prototypen. 

Vi bruker express for å holde styr på routing og requester, så henter vi ut data og kommuniserer med databasen gjennom express sin routerfunksjon. Gjennom oppsettet av dette tok vi mye inspirasjon fra: https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274




### Krav til bruk av teknologi
*React*

I dette prosjektet valgte vi å “dele” komponentene våre i to. Vi har laget 4 komponenter (Main, Searchpage, Destination, Wordcloud) i mappen “pages” som er, som navnet tilsvarer, sidene våre. De 4 sidene er alle definert i app.js og blir routet mellom ved hjelp av ‘react-router-dom’ biblioteket. 

Vi har bygget opp sidene ved hjelp av de andre komponentene som er under “component”-mappa. For å få så lite kode som mulig, ønket vi å lage komponenter som kunne brukes på flere av pagesene (gjenbruk woho!). Vi startet derfor å bare ha et Card komponent vi tenkte å bruke på både hoved- og søkesiden. Vi så etterhvert at hvordan vi ønsket Card til å hente ut data ble så forskjellig at det ble enklere og “renere” å separere dette komponentet til to komponenter: MainCards og FilterCards. Vi holdt fremdeles stylinga til cardene enkle ved å bruke samme css fil til begge komponentene. 

Vi startet SearchBox ved å bruke kode fra material.ui og heller bygge på det vi trengte (her i blant lagring av søkeord i redux). 

*Redux*

Vi har brukt redux til å håndtere states som vi ønsker at skal kunne deles mellom komponenter. Eksempelvis lagres hvilken sorterings-type som er valgt i componenten Sorting.js i redux. Denne staten deles så til komponenten FilterCards.js som da sorterer dataen ut fra hvilken sorterings-type som er valgt. 

Som nevnt har vi brukt MongoDB som database på serveren, og brukt Express til REST API-et. Alt som ligger i databasen er opprettet av og vil videre driftes av gruppa.

For å holde designet mer eller mindre konsistent har vi brukt design-rammeverket MaterialUI. Herfra har vi hentet ut ikoner, og brukt deres komponenter som Paper, Grid og Menu for å designe sidene og komponentene våre.


### Krav til testing
*Cypress*

De Cypress-testene vi har laget ligger under Cypress -> integration. Disse testene sjekker hovedsakelig at sidene laster inn riktig informasjon. 

Sjekk ut wiki for å se hvordan man kjører testene. 

Vi tester bl.a:

1.  Dersom vi trykker oss inn på Oslo så skal Destination-page vise informasjonen som ligger under Oslo.
2.  Når man går fra hovedsiden til ordskyen, og da må minst de tre mest populære byene vises i ordskyen.
3.  Hvis man søker på "all", altså søker med tomt søkefelt, sjekkes det om Trondheim finnes på siden. Det sjekkes også at riktig info kommer opp dersom man søker på spesielt sted, eks Amsaterdam som det står i testen.
4.  Det er også en test for generell info som sjekker at alt blir riktig hvis du trykker deg rundt.  

Alle testene sjekker "hardkodet" data og vil kun funke for visse tilfeller. Eks vil test 2 kun funke dersom Oslo, Trondheim og Paris er de mest populære byene.