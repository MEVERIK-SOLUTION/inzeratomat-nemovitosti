# Inzeratomat nemovitostí

**Generátor inzerátů nemovitostí** – nástroj pro snadné vytváření a automatické zveřejňování realitních nabídek na největší české inzertní servery.

## O projektu

Inzeratomat nemovitostí umožňuje realitním makléřům a prodávajícím rychle vygenerovat profesionální inzerát nemovitosti na základě zadaných parametrů. Cílem je automatizovat přípravu a publikaci nabídek na české inzertní portály. Nedílnou součástí nabídkovače bude i generátor HTML kódů prodejních webů konkréktní nemovitosti, které se bude generovaný inzerát týkat. Zájmem je i napojení "inzerátomatu nemovitostí" na webové služby zabývající se nabídkou nemovitostí (jako např. www.sreality.cz ) přes API či jiné řešení, tak aby uměl přímo z vlastního užiuvatelského prostředí zveřejňovat nabídky na více inzertních webech najednou.

## Obsah repozitáře

```
property-listing-demo/   # Demo generátoru realitního inzerátu (HTML/CSS/JS)
  index.html             # Hlavní stránka s formulářem
  styles.css             # Styly
  script.js              # Logika generování inzerátu
```

## Demo generátor

Složka `property-listing-demo/` obsahuje funkční demo ukázku generátoru inzerátu. Aplikace běží přímo v prohlížeči – stačí otevřít soubor `index.html`.

### Funkce dema

- Výběr typu nabídky (Prodej / Pronájem)
- Výběr typu nemovitosti (rodinný dům, dvojdům, řadový dům)
- Zadání dispozice, plochy a lokality
- Výběr orientace zahrady
- Volitelné technologie a vybavení
- Automatické formátování ceny v českém formátu
- Generování textového inzerátu připraveného ke zveřejnění

### Spuštění

```bash
# Otevřete soubor přímo v prohlížeči
open property-listing-demo/index.html
```

nebo jednoduše poklepejte na soubor `index.html` ve správci souborů.

## Plánované funkce

- [ ] Integrace s inzertními portály (Sreality, Bezrealitky, Reality.iDNES.cz, …)
- [ ] Automatické zveřejňování inzerátů přes API
- [ ] Podpora více typů nemovitostí (byty, komerční prostory, pozemky)
- [ ] Správa a archivace inzerátů
- [ ] Export do formátů PDF / Word

## Technologie

- HTML, CSS, JavaScript (demo)
- Plánováno: rozšíření o backend pro automatizaci publikace

## Přispívání

Příspěvky jsou vítány. 

## Licence

© MEVERIK SOLUTION – Všechna práva vyhrazena.
