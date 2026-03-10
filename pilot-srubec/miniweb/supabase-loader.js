/**
 * supabase-loader.js
 * Drop-in replacement za config.js — načítá data ze Supabase.
 * Přidejte do index.html MÍSTO nebo PO <script src="config.js">
 *
 * Pokud Supabase selže nebo nemá data → použije CONFIG z config.js jako fallback.
 */

const SUPABASE_URL = 'https://tpxmmczcqlcjeuphatch.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_4zNh8UDLylGAicG2wz_rtw_EnM8bQkw';
const PROPERTY_ID = 'srubec-estate';

(async function () {
  try {
    const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await sb
      .from('property_config')
      .select('config')
      .eq('id', PROPERTY_ID)
      .single();

    if (!error && data && data.config && Object.keys(data.config).length > 0) {
      window.CONFIG = data.config;
      console.log('[Srubec] Config načten ze Supabase:', data.config.updatedAt);
    } else {
      console.log('[Srubec] Supabase prázdné — používám config.js fallback');
    }
  } catch (e) {
    console.log('[Srubec] Supabase nedostupné — používám config.js fallback', e);
  }

  if (typeof window.renderPage === 'function') {
    window.renderPage();
  } else {
    document.dispatchEvent(new Event('config-ready'));
  }
})();
