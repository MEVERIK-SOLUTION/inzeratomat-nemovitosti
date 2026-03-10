// supabase-loader.js — fires config-ready after optionally loading from Supabase
(async function () {
    const SUPABASE_URL = 'https://tpxmmczcqlcjeuphatch.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_4zNh8UDLylGAicG2wz_rtw_EnM8bQkw';
    const PROPERTY_ID = 'srubec-estate';
    try {
          if (typeof supabase !== 'undefined') {
                  const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
                  const { data, error } = await sb.from('property_config').select('config').eq('id', PROPERTY_ID).single();
                  if (!error && data && data.config && Object.keys(data.config).length > 0) {
                            window.CONFIG = data.config;
                  }
          }
    } catch (e) {
          console.log('[Srubec] Supabase unavailable, using config.js');
    }
    if (typeof window.renderPage === 'function') {
          window.renderPage();
    } else {
          document.dispatchEvent(new Event('config-ready'));
    }
})();
