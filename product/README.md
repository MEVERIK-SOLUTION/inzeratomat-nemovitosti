# Product – Inzerátomat nemovitostí (dlouhodobý vývoj)

> Tato složka obsahuje **generické, znovupoužitelné součásti** produktu Inzerátomat.  
> Pracuje se zde **po vyhodnocení pilotu Srubec** nebo souběžně, pokud pilot nevyžaduje veškerou pozornost.

## Kontext

Inzerátomat nemovitostí je prodejní a distribuční mechanika pro nemovitosti:

1. **Sběr dat** – jednotný datový model (Single Source of Truth)
2. **Generování výstupů** – portálový inzerát, miniweb, PDF/Word brožura, balíček médií
3. **Distribuce** – automaticky (API/huby) nebo poloautomaticky (semi-auto checklist)
4. **Měření + iterace** – návštěvnost, poptávky, kvalita leadů

## Struktura složky

```
product/
└── listing-generator/    # Prototyp generátoru realitního inzerátu
    ├── index.html         # UI + formulář generátoru
    ├── styles.css         # Stylování
    └── script.js          # Logika generování inzerátu
```

## Plánované součásti

- [x] **listing-generator/** – generátor textu inzerátu (portálový formát) ✓
- [ ] **miniweb-generator/** – automatické generování HTML miniwebu z datového modelu
- [ ] **property-form/** – generický formulář datového modelu (různé typy nemovitostí)
- [ ] **export-package/** – semi-auto exportní balíček (copy-paste bloky, checklist, ZIP médií)
- [ ] **distribution/** – integrace s portály/huby (Sreality API, atd.)
- [ ] **templates/** – šablony textů pro různé typy nemovitostí

## Jak spustit listing-generator lokálně

```
Otevřete v prohlížeči: product/listing-generator/index.html
```

## Aktuální výstupy listing-generatoru

- Krátká varianta inzerátu (rychlý portálový zápis)
- Střední varianta inzerátu (běžný detail inzerátu)
- Dlouhá varianta inzerátu (rozšířený text)
- Každá varianta má tlačítko `Kopírovat` pro copy-paste workflow

## Vztah k pilotu

Pilot Srubec (`/pilot-srubec/`) je **testovacím prostředím** pro ověření konceptů, které pak  
putují sem jako generické, zdokumentované a znovupoužitelné součásti produktu.

Pilot → [`/pilot-srubec/`](../pilot-srubec/README.md)  
Dokumentace → [`/docs/`](../docs/README.md)
