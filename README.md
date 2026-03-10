# Inzerátomat nemovitostí (WHC / MEVERIK STUDIO)

Generátor inzerátů a prodejních miniwebů nemovitostí – nástroj pro rychlé vytvoření profesionální nabídky, její publikaci a vytvoření hlavní prodejní vitríny jako cílové stanice pro vážné zájemce.

---

## Struktura repozitáře

```
inzeratomat-nemovitosti/
│
├── pilot-srubec/          ← AKTIVNÍ PILOT (pracujte zde jako první)
│   ├── miniweb/           ← Prodejní vitrína – nasadit na Vercel
│   ├── data-model/        ← Datový model / formulář nemovitosti
│   └── assets/            ← Fotografie, dokumenty, plánky (nahrávají se)
│
├── product/               ← Dlouhodobý vývoj produktu (po/souběžně s pilotem)
│   └── listing-generator/ ← Generátor textu inzerátu (prototyp)
│
└── docs/                  ← Strategická a referenční dokumentace
```

> **Pravidlo:** Co je specifické pro Srubec → `pilot-srubec/`.
> Co je generické a znovupoužitelné → `product/`.
> Co je strategické a kontextové → `docs/`.

---

## Větve (Git branch strategie)

| Větev | Účel |
|-------|------|
| `main` | Stabilní stav – produktový základ, schválené výstupy pilotu |
| `pilot-srubec` | **Aktivní pilot** – pracovní větev pro Srubec (deploy i vývoj) |
| `product/*` | Funkce produktového vývoje (po/souběžně s pilotem) |

**Postup:**
1. Pracujte ve větvi `pilot-srubec` – veškeré změny miniwebu i obsahu
2. Vercel je nastaven na deploy z větve `pilot-srubec` → složka `pilot-srubec/miniweb/`
3. Po ukončení pilotu se poznatky + soubory přenáší do `product/` přes PR do `main`

---

## O projektu

Inzerátomat nemovitostí stavíme jako praktický modul v ekosystému WHC / MEVERIK.
Cílem je umožnit přímým prodejcům a menším developerům prodávat nemovitosti moderně a efektivně – bez zbytečných bariér a bez ručního přepisování dat do desítek systémů.

**Klíčová myšlenka:**
- **Datový model** = backend reality (Single Source of Truth)
- **Miniweb** = frontend datového modelu (prodejní vitrína, uzel informací, cílová stanice)
- **Portály** (Sreality, iDNES, apod.) = distribuční kanály přivádějící návštěvnost na miniweb

---

## Pilotní fáze: Srubec / Staré Hodějovice ← PRIORITA

> Složka: [`pilot-srubec/`](pilot-srubec/README.md)

První nasazení probíhá na reálné nemovitosti společníka Vladimíra v lokalitě Srubec / Staré Hodějovice.

**Absolutní priority pilotu:**
1. **Miniweb v1** – nasadit prodejní vitrínu na Vercel (`pilot-srubec/miniweb/index.html`)
2. **Inzerce nemovitosti** – rychle a funkčně; automatizace jen tam, kde pomáhá
3. **Formulář → datový model** – generovat portálový text + balíček médií pro semi-auto zveřejnění

V pilotu je klíčové *vnímat realitu prodejního procesu* – sbírat tření, rozhodovací body, reakce trhu a zpětnou vazbu pro pozdější přenos do produktu.

---

## Vize produktu (dlouhodobě)

> Složka: [`product/`](product/README.md)

Inzerátomat není jen generátor textu – je to prodejní a distribuční mechanika:

1. **Sběr dat** → jednotný datový model
2. **Generování výstupů** → portálový inzerát, miniweb, PDF/Word brožura, balíček médií
3. **Distribuce** → automaticky (API/huby) nebo poloautomaticky (semi-auto checklist)
4. **Měření + iterace** → návštěvnost, poptávky, kvalita leadů

*Strategický směr:* `AKVIZITOR → PRODEJ` – další LEGO kostka v workflow WHC/MEVERIK.

---

## Jak spustit lokálně

**Miniweb Srubec (pilot):**
```
Otevřete: pilot-srubec/miniweb/index.html
```

**Formulář datového modelu (pilot):**
```
Otevřete: pilot-srubec/data-model/property-form.html
```

**Generátor inzerátu (product prototyp):**
```
Otevřete: product/listing-generator/index.html
```

Nasazení miniwebu probíhá přes **Vercel** (`pilot-srubec/miniweb/` jako root).

---

## Technologie

**Základ:**
- GitHub + GitHub Copilot / Codex
- VS Code
- Vercel (nasazení miniwebu)
- Google Disk (sdílení médií a podkladů)

**Volitelné (pokud bude potřeba):**
- Supabase (databáze / storage / API) – u pilotu jen v případě nezbytné potřeby

**AI workflow:**
- ChatGPT – kontext a koordinace projektu
- Claude – návrhy a struktura miniwebu pro pilot Srubec
- Nano Banana – úpravy a standardizace fotografií

---

## Licence

© MEVERIK SOLUTION / WHC s.r.o. – Všechna práva vyhrazena.
