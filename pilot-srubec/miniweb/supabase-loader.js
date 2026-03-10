// supabase-loader.js — Srubec / Staré Hodějovice
// Verze: 2.1 | Synchronní CONFIG — žádný async timing bug
// Názvy souborů ověřeny přímo ze Supabase Storage (ObjectCreated logy)

(function () {
  const BASE =
    "https://tpxmmczcqlcjeuphatch.supabase.co/storage/v1/object/public/" +
    "Srubec%20-%20Nabidka%20nemovitosti/";

  function img(filename) {
    return BASE + encodeURIComponent(filename);
  }

  window.CONFIG = {

    // ─── HERO ─────────────────────────────────────────────────────────────────
    heroImage: img("Kolaz_pohledy_1.jpeg"),

    // ─── ZÁKLADNÍ INFO ────────────────────────────────────────────────────────
    property: {
      title:        "Novostavba 5+kk | Staré Hodějovice u Českých Budějovic",
      tagline:      "Novostavba · Staré Hodějovice / Srubec",
      headline:     "Rodinný dům 5+kk",
      headlineEm:   "Starých Hodějovicích",
      subtitle:     "Nízkoenergetická novostavba s tepelným čerpadlem Viessmann, podlahovým vytápěním a zahradou 500 m² — 8 minut od centra Českých Budějovic.",
      area:         "115 m²",
      land:         "500 m²",
      disposition:  "5+kk",
      completion:   "2025",
      energyClass:  "B",
      parking:      "3 místa",
      distanceCB:   "8 min",
      highway:      "D3 1 min",
    },

    // ─── FOTOGRAFIE ───────────────────────────────────────────────────────────
    // Všechny soubory ověřeny ze Supabase Storage logů
    images: [
      { url: img("Kolaz_pohledy_1.jpeg"),                caption: "Celkový pohled na dům",          category: "exterior"  },
      { url: img("IMG_0682.jpg"),                        caption: "Exteriér — pohled 1",             category: "exterior"  },
      { url: img("IMG_0684.jpg"),                        caption: "Exteriér — pohled 2",             category: "exterior"  },
      { url: img("IMG_0687.jpg"),                        caption: "Exteriér — pohled 3",             category: "exterior"  },
      { url: img("IMG_0688.jpg"),                        caption: "Exteriér — pohled 4",             category: "exterior"  },
      { url: img("IMG_0689.jpg"),                        caption: "Exteriér — pohled 5",             category: "exterior"  },
      { url: img("obyvk_1_PP.jpeg"),                     caption: "Obývací pokoj + kuchyňský kout",  category: "interior"  },
      { url: img("Chodba_PP_vstupnidvere .jpg"),         caption: "Vstupní chodba — přízemí",        category: "interior"  },
      { url: img("PP pokoj 1 prizemmi (pracovna).jpg"),  caption: "Pokoj / pracovna — přízemí",      category: "interior"  },
      { url: img("Loznice1_(pokoj)_1.NP.jpg"),           caption: "Ložnice — podkroví",              category: "interior"  },
      { url: img("koupelna_1.NP_umyvadlo.jpg"),          caption: "Koupelna — umyvadlo",             category: "interior"  },
      { url: img("koupoelna_1_vana_sprcha_1NP.jpeg"),    caption: "Koupelna — vana a sprcha",        category: "interior"  },
      { url: img("Tepelne_cerpadlo_1.jpeg"),             caption: "Tepelné čerpadlo Viessmann",      category: "technical" },
    ],

    // ─── PŮDORYSY ─────────────────────────────────────────────────────────────
    floorplans: {
      floor1url:  "",  // doplnit po dokončení půdorysu
      floor2url:  "",  // doplnit po dokončení půdorysu
      floor1desc: "Přízemí nabízí otevřený obývací prostor s kuchyňským koutem a přímým výstupem na terasu 40 m². Součástí přízemí je technická místnost s tepelným čerpadlem, WC a zádveří.",
      floor2desc: "Podkroví ukrývá tři pokoje včetně hlavní ložnice, prostornou chodbu a plně vybavenou koupelnu s vanou, sprchovým koutem a střešními okny Velux.",
      note:       "Přesná projektová dokumentace k dispozici při osobní prohlídce.",
    },

    // ─── CENA ─────────────────────────────────────────────────────────────────
    price: {
      display:  "Cena na vyžádání",
      note:     "Cena uvedena bez DPH · Možnost financování · Ihned po kolaudaci",
      includes: [
        "Pozemek 500 m² v ceně",
        "Tepelné čerpadlo Viessmann",
        "Podlahové vytápění celý dům",
        "Terasa 40 m²",
      ],
    },

    // ─── LOKALITA ─────────────────────────────────────────────────────────────
    location: {
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.5!2d14.4736!3d48.9286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773953c9f1e1df3%3A0x400af0f6614b4b0!2zU3RhcsOpIEhvZMSbam92aWNl!5e0!3m2!1scs!2scz!4v1699000000000",
      distances: [
        { icon: "🏙️", label: "České Budějovice centrum", dist: "8 min",  note: "8,5 km autem" },
        { icon: "🛣️", label: "Dálnice D3",               dist: "1 min",  note: "Sjezd Hodějovice" },
        { icon: "🛒", label: "Obchod / služby",           dist: "v obci", note: "Škola, lékař, pošta" },
        { icon: "🌿", label: "Příroda a les",             dist: "pěšky",  note: "Louky a lesy v okolí" },
      ],
      driveTable: [
        { label: "Centrum Českých Budějovic", time: "8 min"    },
        { label: "Dálnice D3 (sjezd)",        time: "1 min"    },
        { label: "Nákupní centrum Mercury",   time: "10 min"   },
        { label: "Nemocnice ČB",              time: "12 min"   },
        { label: "Praha (po D3)",             time: "1:45 hod" },
      ],
    },

    // ─── TECHNICKÝ LIST ───────────────────────────────────────────────────────
    techSpec: {
      basic: [
        { key: "Dispozice",            val: "5+kk" },
        { key: "Užitná plocha",        val: "115 m²" },
        { key: "Plocha pozemku",       val: "500 m²" },
        { key: "Terasa",               val: "40 m²" },
        { key: "Podlaží",              val: "2 (přízemí + podkroví)" },
        { key: "Energetická třída",    val: "B — nízkoenergetický standard" },
        { key: "Rok dokončení",        val: "2025" },
        { key: "Parkovací stání",      val: "3 venkovní místa" },
      ],
      construction: [
        { key: "Nosné zdivo",          val: "Porotherm — cihlové bloky" },
        { key: "Základy",              val: "Betonové pasy + deska" },
        { key: "Střecha",              val: "Sedlová, betonová krytina Bramac" },
        { key: "Zateplení",            val: "Certifikovaný fasádní systém ETICS" },
        { key: "Okna",                 val: "Plastová s trojsklem" },
        { key: "Střešní okna",         val: "Velux premium — 4 ks v podkroví" },
        { key: "Fasáda",               val: "Omítka — novostavba" },
      ],
      heating: [
        { key: "Zdroj tepla",          val: "Tepelné čerpadlo Viessmann vzduch-voda" },
        { key: "Vytápění",             val: "Podlahové — celý dům" },
        { key: "Příprava FVE",         val: "Ano — rozvody připraveny" },
        { key: "Příprava klimatizace", val: "Ano — předinstalace" },
        { key: "Žaluzie",              val: "Příprava pro venkovní žaluzie" },
        { key: "Akumulační nádrž",     val: "Součástí systému TČ" },
      ],
      utilities: [
        { key: "Vodovod",              val: "Přípojka — veřejný vodovod" },
        { key: "Kanalizace",           val: "Přípojka — veřejná kanalizace" },
        { key: "Elektřina",            val: "Přípojka 3×400V" },
        { key: "Plyn",                 val: "Není — nepotřebné (TČ)" },
        { key: "Internet",             val: "Příprava pro optiku" },
        { key: "Oplocení",             val: "Celý pozemek oplocen" },
        { key: "Přístupová cesta",     val: "Asfalt, slepá ulice" },
      ],
    },

    // ─── KONTAKT ──────────────────────────────────────────────────────────────
    contact: {
      name:    "Vladimír — majitel nemovitosti",
      role:    "Přímý prodej bez provize",
      phone:   "+420 XXX XXX XXX",
      email:   "info@srubec-estate.cz",
      address: "Staré Hodějovice / Srubec, okr. České Budějovice",
      note:    "Po předchozí domluvě, 7 dní v týdnu",
    },

  };
  // CONFIG je definován synchronně — initFromConfig() v index.html může být volán ihned
})();
