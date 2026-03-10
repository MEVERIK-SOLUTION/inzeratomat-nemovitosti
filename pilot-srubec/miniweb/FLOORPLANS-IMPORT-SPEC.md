# Floorplans Import Spec (2D/3D)

V tomto projektu se 2D/3D pudorysy negeneruji automaticky. Dodavaji se jako hotove soubory.

## Co dodat

- 2D pudorys 1.NP jako JPG/PNG/PDF.
- 2D pudorys 2.NP jako JPG/PNG/PDF.
- 3D pudorys (volitelny) jako JPG/PNG.

## Doporucene parametry

- 2D: minimalne 1800 px sirka, cisty kontrast, bez marketingoveho textoveho sumu.
- 3D: minimalne 1600 px sirka, jednotny styl se zbytkem galerie.
- Nazvy souboru bez mezer, mala pismena, pomlcky.

## Ulozeni a napojeni

1. Uloz soubory do `pilot-srubec/assets/`.
1. V `config.js` vypln:

- `images.floor1`
- `images.floor2`

1. Popisky aktualizuj v sekci `floorplans`:

- `floor1label`, `floor1desc`
- `floor2label`, `floor2desc`

## Priklad

```js
images: {
  floor1: "/pilot-srubec/assets/pudorys-1np.jpg",
  floor2: "/pilot-srubec/assets/pudorys-2np.jpg",
}
```

## Kontrola po importu

1. Otevri miniweb a prepni zalozky pudorysu.
2. Zkontroluj, ze se obrazky nacitaji bez 404.
3. Zkontroluj citelnost na desktopu i mobilu.
