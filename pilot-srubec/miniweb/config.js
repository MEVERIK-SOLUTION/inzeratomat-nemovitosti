/**
 * ============================================================
 *  SRUBEC ESTATE — KONFIGURAČNÍ SOUBOR
 *  Editujte tento soubor pro aktualizaci obsahu webu.
 *  Žádné znalosti programování nejsou potřeba.
 * ============================================================
 *
 *  JAK EDITOVAT:
 *  1. Otevřete tento soubor v textovém editoru (Poznámkový blok, VS Code...)
 *  2. Změňte hodnoty v uvozovkách "" nebo číselné hodnoty
 *  3. Uložte soubor
 *  4. Obnovte webovou stránku v prohlížeči
 *
 *  POZOR: Neměňte strukturu souboru — jen hodnoty za dvojtečkou.
 * ============================================================
 */

const CONFIG = {

  // ----------------------------------------------------------
  //  ZÁKLADNÍ INFO O NEMOVITOSTI
  // ----------------------------------------------------------
  property: {
    title:        "Novostavba 5+kk | Staré Hodějovice u Českých Budějovic",
    tagline:      "Novostavba · Staré Hodějovice · Exkluzivní nabídka",
    headline:     "Moderní bydlení",
    headlineEm:   "klidné přírodě",    // zvýrazněná část nadpisu (kurzívou)
    subtitle:     "Rodinný dům 5+kk s podkrovím, tepelným čerpadlem Viessmann, podlahovým topením a plnou připraveností pro fotovoltaiku. Kolaudace 2026.",
    disposition:  "5+kk",
    area:         "115 m²",
    land:         "500 m²",
    completion:   "2026",
    energyClass:  "A",
    parking:      "3×",
    distanceCB:   "8 min",
    highway:      "D3",
  },

  // ----------------------------------------------------------
  //  CENA
  // ----------------------------------------------------------
  price: {
    display:      "Cena na dotaz",
    // ↑ Např. "12 900 000 Kč" nebo nechte "Cena na dotaz"
    note:         "Cena sdělena zájemcům po první nezávazné konzultaci · Financování možno dojednat",
    includes: [
      "115 m² užitná plocha",
      "500 m² oplocený pozemek",
      "Tepelné čerpadlo Viessmann",
      "40 m² terasa",
      "3 parkovací stání",
    ],
  },

  // ----------------------------------------------------------
  //  KONTAKT — PRODÁVAJÍCÍ
  // ----------------------------------------------------------
  contact: {
    name:         "Vladimír",
    role:         "Majitel nemovitosti",
    phone:        "+420 XXX XXX XXX",
    // ↑ DOPLŇTE — toto pole bude viditelné na webu
    email:        "info@srubec-estate.cz",
    // ↑ DOPLŇTE — toto pole bude viditelné na webu
    address:      "Staré Hodějovice / Srubec, okr. České Budějovice",
    note:         "Prohlídky dle dohody · K dispozici osobně nebo online",
    // Odkaz na Calendly nebo jiný systém rezervací (nebo nechte prázdné "")
    bookingUrl:   "",
  },

  // ----------------------------------------------------------
  //  OBRÁZKY
  //  Vložte URL adresy obrázků (z Google Drive, Cloudinary, apod.)
  //  Jak získat URL z Google Drive:
  //  1. Sdílejte soubor jako "Kdokoli s odkazem může zobrazit"
  //  2. Z odkazu vezměte ID (část za /d/ a před /view)
  //  3. Sestavte URL: https://drive.google.com/uc?id=VASE_ID
  // ----------------------------------------------------------
  images: {
    // Hlavní hero obrázek (exteriér — hlavní záběr)
    hero:     "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Exteriér (druhý pohled na dům)
    ext:      "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Obývací pokoj / vnitřní prostory
    living:   "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Koupelna
    bath:     "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Ložnice / podkrovní pokoj
    bed:      "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Tepelné čerpadlo
    pump:     "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Půdorys PP (přízemí) — 2D výkres nebo fotka
    floor1:   "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Půdorys 1.NP (podkroví) — 2D výkres nebo fotka
    floor2:   "",
    // ↑ Vložte URL fotky. Návod: Drive → pravý klik → Sdílet → Kdokoli s odkazem
    //   → zkopírujte ID z odkazu → použijte: https://drive.google.com/uc?id=VASE_ID
    // Galerie — další fotky (přidejte libovolný počet)
    gallery: [
      // { url: "https://...", caption: "Popis fotky" },
      // { url: "https://...", caption: "Popis fotky" },
    ],
  },

  // ----------------------------------------------------------
  //  LOKALITA — časy dojezdu (upravte dle potřeby)
  // ----------------------------------------------------------
  location: {
    mapSrc: "https://maps.google.com/maps?q=Stare+Hodejovice+%2B+Srubec,+Czech+Republic&t=&z=13&ie=UTF8&iwloc=&output=embed",
    distances: [
      { icon: "🏙️", label: "Centrum ČB",       dist: "8 min",   note: "Autem do centra Českých Budějovic" },
      { icon: "🛣️", label: "Dálnice D3",        dist: "1 min",   note: "Okamžité napojení na dálniční síť" },
      { icon: "🏫", label: "Základní škola",    dist: "V obci",  note: "ZŠ přímo v obci Srubec / St. Hodějovice" },
      { icon: "🛒", label: "Obchody & Lékař",   dist: "V obci",  note: "Kompletní vybavenost v dosahu pěšky" },
    ],
    driveTable: [
      { label: "Centrum Českých Budějovic", time: "8 min" },
      { label: "Napojení D3",               time: "1 min" },
      { label: "Letiště ČB",                time: "15 min" },
      { label: "Obchodní centrum IGY",      time: "10 min" },
      { label: "Fakultní nemocnice ČB",     time: "12 min" },
      { label: "Praha (po D3)",             time: "2 hod" },
    ],
  },

  // ----------------------------------------------------------
  //  PŮDORYSY — popisky
  // ----------------------------------------------------------
  floorplans: {
    floor1label: "PP — Přízemí",
    floor1desc:  "Přízemí o ploše 61 m² — obývací pokoj s výstupem na terasu, kuchyňský kout, zázemí, technická místnost.",
    floor2label: "1.NP — Podkroví",
    floor2desc:  "Podkroví o ploše 54 m² — tři pokoje, koupelna s vanou, střešní okna Velux s výhledem do přírody.",
    note:        "Půdorysy jsou orientační. Přesná dokumentace k dispozici při osobní prohlídce.",
  },

  // ----------------------------------------------------------
  //  TECHNICKÝ LIST — přepsatelné hodnoty
  // ----------------------------------------------------------
  techSpec: {
    basic: [
      { key: "Dispozice",              val: "5+kk" },
      { key: "Celková užitná plocha",  val: "~115 m²" },
      { key: "Přízemí",                val: "61 m²" },
      { key: "Podkroví",               val: "54 m²" },
      { key: "Zastavěná plocha domu",  val: "83 m²" },
      { key: "Terasa",                 val: "40 m²" },
      { key: "Chodníky",               val: "18 m²" },
      { key: "Pozemek",                val: "500 m²" },
      { key: "Parkovací stání",        val: "3 místa" },
      { key: "Typ objektu",            val: "Dvojdům (část A)" },
    ],
    construction: [
      { key: "Nosné zdivo",        val: "Cihelná konstrukce + zateplení" },
      { key: "Základy",            val: "Betonové" },
      { key: "Střešní krytina",    val: "Betonová krytina" },
      { key: "Střešní okna",       val: "Velux (prémiová řada)" },
      { key: "Okna a dveře",       val: "Plastová, trojskla" },
      { key: "Energetická třída",  val: "Nízkoenergetický standard" },
      { key: "Podlahy",            val: "Kombinace dlažby a vinylu" },
      { key: "Schodiště",          val: "Betonové, obklad + dřevěné prvky" },
    ],
    heating: [
      { key: "Tepelné čerpadlo",    val: "Viessmann (německá výroba)" },
      { key: "Typ TČ",              val: "Vzduch–voda" },
      { key: "Hluková zátěž",       val: "Výrazně pod zákonným limitem" },
      { key: "Otopná soustava",     val: "Podlahové vytápění v celém domě" },
      { key: "Příprava klimatizace",val: "✓ Rozvody instalovány" },
      { key: "Příprava FVE",        val: "✓ Připraveno" },
      { key: "Příprava žaluzie",    val: "✓ Elektrické rozvody" },
    ],
    utilities: [
      { key: "Vodovod",       val: "Městský vodovod" },
      { key: "Kanalizace",    val: "Veřejná kanalizace" },
      { key: "Elektřina",     val: "Síťová přípojka" },
      { key: "Stav objektu",  val: "Novostavba, bez závad" },
      { key: "Dosud užíváno", val: "Ne — dosud neobývané" },
      { key: "Kolaudace",     val: "Plánována 2026" },
      { key: "Dostupnost",    val: "Ihned po kolaudaci" },
      { key: "Veřejné osvětlení", val: "Ano" },
      { key: "Komunikace",    val: "Chodník + asfaltová vozovka" },
    ],
  },

};
