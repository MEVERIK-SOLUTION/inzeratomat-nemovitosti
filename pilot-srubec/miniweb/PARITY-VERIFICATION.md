# Parity Verification: Local vs Vercel

Tento dokument je prakticky navazan na miniweb v `pilot-srubec/miniweb`.

## Scope

- `index.html` runtime chovani
- `config.js` nacitani a mapovani obsahu
- dostupnost endpointu lokalne a na Vercelu
- externi zavislosti: Google Fonts, Google Maps, Google Drive media

## Rychly smoke test

1. Spust lokalni server z rootu repa:

```bash
cd /Users/matejkocanda/inzeratomat-nemovitosti
python3 -m http.server 4173 --directory .
```

1. V dalsim terminalu spust test:

```bash
cd /Users/matejkocanda/inzeratomat-nemovitosti/pilot-srubec/miniweb
chmod +x parity-smoke.sh
chmod +x validate-config.sh
./validate-config.sh
./parity-smoke.sh
```

Volitelne pro explicitni URL:

```bash
LOCAL_BASE="http://localhost:4173/pilot-srubec/miniweb" \
VERCEL_BASE="https://<tvuj-projekt>.vercel.app" \
./parity-smoke.sh
```

## Cileny audit index.html

- Fonty: `pilot-srubec/miniweb/index.html:7`, `pilot-srubec/miniweb/index.html:8`
- Form submit handler: `pilot-srubec/miniweb/index.html:920`, `pilot-srubec/miniweb/index.html:1099`
- Nacitani configu: `pilot-srubec/miniweb/index.html:945`
- Google Maps source se bere z `config.js`: `pilot-srubec/miniweb/config.js:104`
- Google Drive obrazky: instrukce + gallery v `pilot-srubec/miniweb/config.js:74`, `pilot-srubec/miniweb/config.js:76`, `pilot-srubec/miniweb/config.js:94`

## Aktualni stav (10. 3. 2026)

- Lokalni smoke check:
  - `/` -> `200`
  - `/index.html` -> `200`
  - `/config.js` -> `200`
- Odhadnuta Vercel URL `https://srubec-estate-meveriks-projects.vercel.app`
- Pokud Vercel vraci `404`: viz sekci "Reseni 404 na Vercelu" nize.
- Pokud Vercel vraci `401`: Deployment Protection je zapnuta (ocekavane chovani).

## Reseni 404 na Vercelu

Pokud Vercel vraci 404 "not found", zkontrolujte nasledujici v Vercel dashboardu:

1. **Output Directory** (Project Settings → General): musi byt **prazdne** (ne `pilot-srubec/miniweb`)
   - `vercel.json` nastavi `outputDirectory` automaticky
   - Rucne nastavene Output Directory v dashboardu prepise `vercel.json`!
2. **Root Directory** (Project Settings → General):
   - Bud prazdne (pouzije `/vercel.json` s `outputDirectory: "pilot-srubec/miniweb"`)
   - Nebo `pilot-srubec` (pouzije `pilot-srubec/vercel.json` s `outputDirectory: "miniweb"`)
3. **Framework Preset**: musi byt `Other` nebo zadny framework
4. **Build Command**: musi byt prazdne (zadny build)
5. **Branch**: `main` (nebo ta vetev, ktera obsahuje soubory v `pilot-srubec/miniweb/`)

Po oprave nastaveni spuste novy deploy rucne v Vercel dashboardu.

## Drive uloziste

- Link: `https://drive.google.com/drive/folders/1zINwdjjZYpOYyF-4J3zyO1cta_t24XEX?usp=drive_link`
- Bez prihlaseni je pristup pres API/nastroj presmerovan na Google login.
- Overeni realne dostupnosti souboru je potreba provest v autorizovane browser session.

## Pass/Fail pravidla

- Pass: Lokalni endpointy `200` + bez kritickych JS chyb v Console.
- Pass: Vercel endpointy `200` (public) nebo `401` (protected, ocekavane).
- Fail: 404 na `config.js` nebo `index.html` na Vercelu.
- Fail: Rozdilne behavior v navigaci, renderu obsahu z `CONFIG`, nebo JS runtime chyby.

Poznamka: script testuje Google Fonts pres konkretni CSS endpoint, ne root domenu.
