# Drive -> Assets Workflow (Srubec Estate)

Tento postup je urceny pro netechnicke editory i admina projektu.

## Cile

- Rychla editace obsahu pro prodavajiciho.
- Stabilni publikace na Vercelu.
- Minimalizace chyb pri praci s URL v `config.js`.

## Pravidlo pipeline

- Draft faze: obrazky mohou byt na Google Drive.
- Publikacni faze: klicove obrazky presunout do `pilot-srubec/assets` a v `config.js` prepnout na lokalni cestu.

## Draft (Google Drive)

1. Nahraj fotky do sdilene slozky na Drive.
2. Nastav sdileni: `Kdokoli s odkazem muze zobrazit`.
3. Ziskany odkaz `.../file/d/FILE_ID/view` preved na:
`https://drive.google.com/uc?id=FILE_ID`
4. Vloz URL do `pilot-srubec/miniweb/config.js` (`images.hero`, `images.ext`, `images.gallery`...).

## Publish (Assets)

1. Klicove soubory zkopiruj do `pilot-srubec/assets/`.
2. URL v `config.js` zmen na cesty jako:
`/pilot-srubec/assets/nazev-souboru.jpg`
3. Spust pred release:

- `./validate-config.sh`
- `./parity-smoke.sh`

## Minimalni release checklist

1. `contact.phone` a `contact.email` jsou vyplnene.
2. `price.display` neni prazdne.
3. `images.hero` neni prazdne.
4. `images.floor1` a `images.floor2` jsou vyplnene (nebo vedome prazdne).
5. Smoke test proti cilovemu URL je PASS.

## Poznamka

Drive je skvely pro rychly draft, ale ve vyssim provozu muze omezovat primy hotlink. Proto je pro publikaci preferovana slozka `assets`.
