# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !

För att starta appen behöver du:
-Öppna terminalen med ctrl-ö
-Starta json-server --watch db.json --port 3000

Om du vill se sidan behöver du köra en ny terminal med npm run dev.

Det finns en videofil med en kort presentation av mitt projekt (Bun drop presentation_Emma Dahlqvist) och designen från figma (Bun drop design) i projektet.


-	-	-	-	-	-	-	-	-	-	-	-	-	-	-

Reflektion VG

Jag har lärt mig så väldigt mycket i detta projekt då jag inte haft all kunskap som behövts för att skapa hemsidan som jag velat ha. ChatGPT har varit ett ständigt bollplank. Inloggning har varit krånglig att behålla mellan sidor och omladdningar, a-taggar fungerade dåligt, Link är grymt.

Jag är väldigt nöjd med att mitt projekt i princip ser ut som min ursprungliga design jag skapade i början. Jag genererade egna bilder från Adobe Firefly för att skapa en mer enhetlig look och paletten skapade jag utifrån loggans färg.

Det blev väldigt mycket kod snabbt och min app har känts stor och tung. Min App.css har ca 2400 rader kod, vilket jag borde ha delat upp så att varje del fick sin egen css-fil som länkades. Det hade varit mycket mer överskådligt och snyggt.

Jag valde att göra 4 pages, Home, Order, Pay och Confirmation, och varje page använder sig av route i App.jsx. Här valde jag att lägga navbar och footer så att de alltid syns på alla sidor utan att jag behöver lägga till dem varje gång. Jag skickar även med user-värde till alla pages.
Strukturen därefter är att jag skapar en div med komponenter i för att det ska bli rent och snyggt. I komponenterna finns det mycket logik. I Display hanterar jag de flesta förändringarna och skickar data mellan parent och child-komponenter. Det uppdateras users, ordrar, favoriter, sökord, filtreras listor, öppnas och stängs modaler.

Min json-server har flera endpoints, en för menyartiklar, en för kategorier och en för användare. Användare har id, username, password, order, favo. User uppdateras i mångt och mycket runt om i hela appen.

Jag har nog tyckt att många funktioner har behövt ett mer avancerat tillvägagångssätt och att det varit svårt att lösa med baskunskaperna i kursen, dock har de varit väldigt användbara när jag skulle sätta mig in i nya arbetssätt. Det har varit relativt lätt att förstå hur man kan göra när jag letat information eller GPT visat olika sätt. Något som hade varit till hjälp och som du kanske vill ta med i kommande kurs är localStorage, den har varit guld att använda när man vill sätta ordrar till någon som inte är en användare.

Jag har verkligen fått träna på att skicka data mellan komponenter och använda både useState och useEffect, gjort egen hook och skapat komponenter i det oändliga. Jag har även nu svart bälte i css och har jobbat en del med positioning.

Allt som allt ett väldigt roligt och utmanande projekt. Det har varit kul!

Mvh Emma