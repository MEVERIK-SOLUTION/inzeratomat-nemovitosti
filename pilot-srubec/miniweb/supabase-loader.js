// supabase-loader.js v3.0
// Projekt: Srubec Estate | Upraveno: 2026
// Tento soubor je jediný zdroj pravdy pro konfiguraci webu a admin panelu.

window.SUPABASE_URL  = 'https://tpxmmczcqlcjeuphatch.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweG1tY3pjcWxjamV1cGhhdGNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNTQ3NjIsImV4cCI6MjA4ODczMDc2Mn0.YHbNxMZnmVAZ4dfAZrwkTynYildz9mG1as6GmkzM7HI';

window.CONFIG = {
  property: {
    name: 'Srubec Estate',
    address: 'Staré Hodějovice / Srubec',
    subtitle: 'Novostavba 5+kk · 115 m² · Pozemek 500 m²',
    price: 'Na vyžádání',
    priceNote: 'Kontaktujte prodejce',
    status: 'Kolaudace 2026',
    description: 'Moderní novostavba rodinného domu 5+kk v klidné slepé ulici obce Staré Hodějovice / Srubec, lokalita u Veselských. Dům realizovala rodinná stavební firma s důrazem na kvalitu a moderní technologie. Součást dvojdomu, dosud neužívaný.',
  },
  contact: {
    name: 'Vladimír',
    phone: '+420 XXX XXX XXX',
    email: 'info@srubec-estate.cz',
    note: 'Přímý prodej bez provize'
  },
  hero: {
    image: 'Kolaz_pohledy_1.jpeg',
    badge: 'Přímý prodej · Bez provize'
  },
  gallery: [
    { file: 'Kolaz_pohledy_1.jpeg',       label: 'Koláž pohledů',        category: 'exterior' },
    { file: 'Pohled_1.jpeg',              label: 'Pohled na dům',         category: 'exterior' },
    { file: 'IMG_0682.jpg',               label: 'Exteriér — západ',      category: 'exterior' },
    { file: 'IMG_0684.jpg',               label: 'Exteriér — jihozápad',  category: 'exterior' },
    { file: 'IMG_0687.jpg',               label: 'Exteriér — jih',        category: 'exterior' },
    { file: 'IMG_0688.jpg',               label: 'Exteriér — detail',     category: 'exterior' },
    { file: 'IMG_0689.jpg',               label: 'Exteriér — sever',      category: 'exterior' },
    { file: 'obyvk_1_PP.jpeg',            label: 'Obývací pokoj + kk',    category: 'interior' },
    { file: 'Chodba_PP_vstupnidvere .jpg',label: 'Chodba — vstupní dveře',category: 'interior' },
    { file: 'PP pokoj 1 prizemmi (pracovna).jpg', label: 'Pracovna (přízemí)', category: 'interior' },
    { file: 'Loznice1_(pokoj)_1.NP.jpg',  label: 'Ložnice 1 (1. NP)',     category: 'interior' },
    { file: 'koupelna_1.NP_umyvadlo.jpg', label: 'Koupelna — umyvadlo',   category: 'interior' },
    { file: 'koupoelna_1_vana_sprcha_1NP.jpeg', label: 'Koupelna — vana + sprcha', category: 'interior' },
    { file: 'Tepelne_cerpadlo_1.jpeg',    label: 'Tepelné čerpadlo',      category: 'tech'     },
  ],
  floorplans: {
    floor1url: '',
    floor2url: '',
    floor1label: 'Přízemí (PP)',
    floor2label: 'Podkroví (1. NP)'
  },
  specs: {
    usable: '115 m²',
    plot: '500 m²',
    terrace: '40 m²',
    built: '83 m²',
    rooms: '5+kk',
    floors: '2 podlaží (přízemí + podkroví)',
    parking: '3 stání',
    energy: 'B',
    heating: 'Tepelné čerpadlo Viessmann vzduch-voda',
    windows: 'Trojskla + 4× Velux premium',
    structure: 'Porotherm + ETICS',
    roof: 'Betonová krytina Bramac',
    readyFor: 'FVE, klimatizace, žaluzie',
    colaudace: '2026',
    gps: '48.9286, 14.4736'
  },
  location: {
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2589!2d14.4736!3d48.9286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2z0J3QsNGA0LLQvtC00L3QuA!5e0!3m2!1scs!2scz!4v1',
    distances: [
      { place: 'Centrum Č. Budějovic', time: '8 min', icon: '🏙️' },
      { place: 'Dálnice D3', time: '1 min', icon: '🛣️' },
      { place: 'Obchod / služby', time: 'v obci', icon: '🛒' },
      { place: 'Škola Srubec', time: '3 min', icon: '🏫' },
    ]
  }
};

// Inicializace webu (volá index.html)
if (typeof initFromConfig === 'function') initFromConfig();
