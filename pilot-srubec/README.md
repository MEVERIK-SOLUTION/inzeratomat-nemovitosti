# Pilot Srubec – MEVERIK prodej nemovitosti

> **PRIORITA** – Toto je aktivní pilotní projekt. Pracuje se zde jako první.
>
> **Větev:** veškerá práce a Vercel deploy probíhají na větvi **`pilot-srubec`**.

## O pilotu

Pilotní nasazení inzeratomatu na reálné nemovitosti společníka Vladimíra v lokalitě **Srubec / Staré Hodějovice**.

Cílem pilotu je:
1. **Prodat nemovitost** (reálný výsledek = priorita nad vším)
2. **Ověřit workflow** – datový model → miniweb → portálový inzerát → lead → prodej
3. **Sbírat poznatky** – tření, rozhodovací body, reakce trhu → podklady pro produktový vývoj

## Struktura složky

```
pilot-srubec/
├── miniweb/              # Prodejní vitrína (miniweb v1) – nasazeno na Vercel
│   └── index.html        # Hlavní stránka miniwebu (srubec-estate)
├── data-model/           # Datový model nemovitosti
│   └── property-form.html  # Vyplnitelný formulář – vstupní data pro generování
└── assets/               # Média a dokumenty ke konkrétní nemovitosti
    └── (fotografie, dokumenty, plánky – nahrávají se v další fázi)
```

## Pracovní postup (pilot workflow)

```
[Formulář / datový model]
        ↓
[Miniweb v1 – prodejní vitrína]    ← hlavní cílová stanice
        ↓
[Portálový text – copy-paste]      ← Sreality, iDNES, Bezrealitky…
        ↓
[Lead / poptávka]
        ↓
[Prodej / zpětná vazba → product/]
```

## Co patří do pilotu

- Vše specifické pro **konkrétní nemovitost Srubec / Staré Hodějovice**
- Fotografie, dokumenty, plánky (složka `assets/`)
- Textový obsah miniwebu a inzerátů pro tuto nemovitost
- Poznámky z prodejního procesu

## Co nepatří do pilotu

- Generické nástroje a šablony → patří do [`/product/`](../product/README.md)
- Strategická dokumentace → patří do [`/docs/`](../docs/README.md)

## Technologie pilotu

- **Git/GitHub** – verzování a spolupráce; aktivní větev: `pilot-srubec`
- **Vercel** – nasazení miniwebu z větve `pilot-srubec`, složka `pilot-srubec/miniweb/`
- **Google Disk** – sdílení médií (fotky, dokumenty)
- **Claude** – návrhy a úpravy miniwebu (odděleno od produktového vývoje)
- **Supabase** – pouze pokud bude nezbytně nutné

## Nastavení Vercel (deploy)

Vercel musí být nakonfigurován takto:
- **Branch:** `pilot-srubec`
- **Root Directory:** *(nechat prázdné — řídí `vercel.json` v kořeni repozitáře)*
- `vercel.json` obsahuje `"outputDirectory": "pilot-srubec/miniweb"` → Vercel servíruje z `pilot-srubec/miniweb/`

## Ověření parity (lokál vs Vercel)

- Praktický postup a smoke test skript jsou v `miniweb/PARITY-VERIFICATION.md`
- Rychlý test spustíte v `miniweb/` přes `./parity-smoke.sh`

## Obsahová editace pro prodávající (bez programování)

- Hlavní obsah se upravuje v `miniweb/config.js` (texty, cena, kontakt, URL obrázků).
- Workflow pro média (Drive draft -> assets publish): `miniweb/DRIVE-ASSETS-WORKFLOW.md`
- Import 2D/3D půdorysů jako obrázků: `miniweb/FLOORPLANS-IMPORT-SPEC.md`
- Kontrola konfigurace před publikací: `miniweb/validate-config.sh`

## Výstupy pilotu → přenos do produktu

Po ukončení pilotu (prodej nemovitosti nebo rozhodnutí o přerušení) se vyhodnotí:
- Co fungovalo → přenést jako vzor/šablonu do `product/`
- Co nefungovalo → zdokumentovat jako naučená lekce
- Konkrétní soubory (miniweb šablona, datový model, formulář) → adaptovat pro generické použití

---

*Pilot Srubec je součástí širšího ekosystému MEVERIK / WHC.*  
*Strategická dokumentace: [`/docs/`](../docs/README.md)*
