Inzerátomat nemovitostí (WHC / MEVERIK STUDIO)

Generátor inzerátů a prodejních miniwebů nemovitostí – nástroj pro rychlé vytvoření profesionální nabídky, její publikaci (tam, kde to jde automaticky) a vytvoření hlavní prodejní vitríny jako cílové stanice pro vážné zájemce.

⸻

O projektu

Inzerátomat nemovitostí stavíme jako praktický modul v ekosystému WHC / MEVERIK.
Cílem je umožnit přímým prodejcům a menším developerům prodávat nemovitosti moderně a efektivně – bez zbytečných bariér a bez ručního přepisování dat do desítek systémů.

Klíčová myšlenka:
	•	Datový model = backend reality
	•	Miniweb = frontend datového modelu (prodejní vitrína, uzel informací, cílová stanice)
	•	Portály (Sreality, iDNES, apod.) jsou distribuční kanály, které přivádějí návštěvnost na miniweb.

Miniweb umožňuje hloubku, kterou klasický “makléřský” inzerát neobsáhne:
	•	detailní technické informace a dokumenty,
	•	fotodeník / časosběr výstavby,
	•	příběh projektu (povolení, přípojky, jednání s obcí, infrastruktura…),
	•	recyklaci dat do dalších fází životního cyklu nemovitosti.

⸻

Pilotní fáze: Srubec / Staré Hodějovice (PRIORITA)

První nasazení probíhá na reálné nemovitosti společníka Vladimíra v lokalitě Srubec / Staré Hodějovice.

Co je v pilotu absolutní priorita
	1.	Miniweb v1 – nasadit prodejní vitrínu (hlavní cílová stanice)
	•	Miniweb v1 už existuje v repozitáři jako funkční prototyp.
	•	Miniweb je schválen prodávajícím jako hlavní destinace pro vážné zájemce.
	2.	Inzerce nemovitosti (rychle a funkčně)
	•	Nesmíme ohrozit prodejní záměr Vladimíra.
	•	Automatizace zavádíme jen do té míry, aby pomáhala a nezpomalovala.
	3.	První automatizace – “nabídkovač + formulář → datový model”
	•	Z formuláře/datového modelu generujeme:
	•	portálový text inzerátu,
	•	dlouhý text pro miniweb,
	•	checklist + balíček médií pro poloautomatické zveřejnění tam, kde není API.

V pilotu je klíčové „vnímat realitu prodejního procesu“ – tedy sbírat tření, rozhodovací body, reakce trhu a zpětnou vazbu a promítat je do architektury.

⸻

Vize projektu (dlouhodobě)

Inzerátomat není jen generátor textu. Je to prodejní a distribuční mechanika:
	1.	Sběr dat o nemovitosti do jednotného modelu (Single Source of Truth)
	2.	Generování výstupů:
	•	inzerát pro portály (kratší, strukturovaný),
	•	miniweb (hluboký detail),
	•	PDF/Word brožura (později),
	•	balíček médií (pořadí, titulní fotka, dokumenty).
	3.	Distribuce:
	•	automaticky přes API/huby tam, kde to jde,
	•	poloautomaticky (semi-auto) tam, kde API není nebo je zakázáno.
	4.	Měření + iterace:
	•	návštěvnost miniwebu,
	•	poptávky,
	•	kvalita leadů,
	•	průběžné vylepšování šablon, textů a mediální struktury.

Strategický směr (ekosystém)

Tento modul je zároveň případová studie pro rozšíření směru:
AKVIZITOR → (co je po akvizici) → PRODEJ
a další LEGO kostka v širším workflow WHC/MEVERIK (životní cyklus budovy i po výstavbě/rekonstrukci).

⸻

Obsah repozitáře

1) Demo generátoru inzerátu

property-listing-demo/
	•	index.html – UI + formulář
	•	styles.css – vzhled
	•	script.js – generování inzerátu

2) Formulář datového modelu (vyplnitelný)

property_form.html
	•	vyplnitelný formulář pro zadání dat (Srubec v1 / obecný model),
	•	slouží jako standardizovaný vstup pro generování textů a miniwebu.

3) Miniweb v1 (prodejní vitrína)
	•	Miniweb v1 je součást pilotu a slouží jako “frontend datového modelu”.
	•	Je to hlavní cílová stanice pro vážné zájemce (schváleno prodávajícím).

Pozn.: Struktura miniwebu se může v pilotu dočasně přizpůsobovat realitě prodeje (v zájmu výsledku), aby nevznikal dluh v kontextu jádra WHC ekosystému.

⸻

Jak to spustit (lokálně)

Demo generátor

Otevřete v prohlížeči:
	•	property-listing-demo/index.html

Formulář datového modelu

Otevřete v prohlížeči:
	•	property_form.html

Nasazení miniwebu probíhá přes hosting (např. Vercel) dle aktuální pilotní potřeby.

⸻

Plánované funkce
	•	Miniweb generátor: automatické generování HTML miniwebu z datového modelu
	•	Exportní balíček (semi-auto):
	•	copy-paste bloky pro portály,
	•	ZIP médií (fotky, pořadí, titulní fotka),
	•	checklist pro ruční vložení
	•	Integrace distribuce:
	•	napojení tam, kde to je možné (API, exportní můstky, hub)
	•	Archivace a verzování nabídek:
	•	historie úprav, verze textů a médií
	•	Výstupy do PDF/Word
	•	Podpora developerských projektů:
	•	Projekt → Budova → Jednotka → dostupnost / rezervace

⸻

Technologie (pilot Srubec)

Základ:
	•	GitHub
	•	VS Code
	•	Codex / GitHub Copilot
	•	Vercel (nasazení)
	•	Google Disk (sdílení médií a podkladů)
  • Vercel (deploy)

Volitelné (pokud bude potřeba):
	•	Supabase (databáze / storage / jednoduché API)- u pilotního projektu Srubec pouze v případě nezbytné potřeby, dlouhodobě nevyhnutelné

AI workflow:
	•	ChatGPT: kontext a koordinace projektu (tento repo / ekosystémové myšlení)
	•	Claude: návrhy a struktura miniwebu pro pilot Srubec (odděleně kvůli možným kompromisům pilotu)
  •	Nano Banana (lehké úpravy a standardizace fotografií)

⸻

Přispívání

Příspěvky jsou vítány – zejména:
	•	šablony textů pro různé typy nemovitostí,
	•	optimalizace miniwebu (UX, struktura, rychlost),
	•	semi-auto exportní workflow,
	•	integrace s portály/huby tam, kde je to legitimní.

⸻

Licence

© MEVERIK SOLUTION / WHC s.r.o. – Všechna práva vyhrazena.

⸻
