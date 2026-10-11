/* PyQuest — katalog skin (update 14: + tema Permainan Klasik 8-bit).
   Setiap tema ada 5 skin: 2 Normal, 1 Special, 1 Epic, 1 Legend. Skin hanya mengubah warna ular dan
   kesan khas (corak / cahaya / aura). Aksesori tema (topi lanun, visor siber …) kekal ikut tema.
   v = pemboleh ubah warna CSS yang menggantikan warna asal tema. fx = kesan tambahan.
     stripes / spots / scales2 : corak pada badan (Special)
     glow                      : badan bercahaya + bebola terapung (Epic)
     aura / rainbow            : aura berdenyut + cahaya bergerak di badan (Legend) */
(() => {
  'use strict';
  const PRICE = { normal: 15, special: 30, epic: 50, legend: 100 };
  const RARITY = ['normal', 'special', 'epic', 'legend'];
  const c = (main, out, belly, scale, head, cape, cape2, extra = {}) => ({ '--sk-main': main, '--sk-out': out, '--sk-belly': belly, '--sk-scale': scale, '--sk-head': head, '--cape': cape, '--cape2': cape2, ...extra });
  const S = (id, theme, rarity, en, ms, v, fx = '', fxc = '') => ({ id, theme, rarity, price: PRICE[rarity], name: { en, ms }, v, fx, fxc });

  const SKINS = [
    /* ---------- Klasik Ceria ---------- */
    S('df-mint', 'default', 'normal', 'Mint Fresh', 'Pudina Segar', c('#5eead4', '#134e4a', '#ccfbf1', '#14b8a6', '#6ff0dc', '#f472b6', '#be185d', { '--mask': '#0ea5e9', '--mask-tail': '#0369a1' })),
    S('df-lemon', 'default', 'normal', 'Sunny Lemon', 'Lemon Ceria', c('#facc15', '#713f12', '#fef9c3', '#ca8a04', '#fde047', '#2563eb', '#1e3a8a', { '--mask': '#ef4444', '--mask-tail': '#b91c1c' })),
    S('df-tiger', 'default', 'special', 'Tiger Stripe', 'Belang Harimau', c('#fb923c', '#431407', '#ffedd5', '#c2410c', '#fdba74', '#16a34a', '#14532d', { '--mask': '#1c1917', '--mask-tail': '#000' }), 'stripes', '#1c1917'),
    S('df-galaxy', 'default', 'epic', 'Galaxy', 'Galaksi', c('#6d28d9', '#1e1b4b', '#c4b5fd', '#a78bfa', '#7c3aed', '#0f172a', '#1e1b4b', { '--mask': '#f0abfc', '--mask-tail': '#c026d3', '--shield': '#1e1b4b', '--emblem': '#f0abfc' }), 'glow', '#c084fc'),
    S('df-rainbow', 'default', 'legend', 'Rainbow King', 'Raja Pelangi', c('#ef4444', '#3b0764', '#fff7ed', '#f59e0b', '#f97316', '#fbbf24', '#d97706', { '--mask': '#2563eb', '--mask-tail': '#1d4ed8', '--shield': '#fde047' }), 'rainbow', '#fde047'),
    /* ---------- Lanun ---------- */
    S('pr-turtle', 'pirate', 'normal', 'Sea Turtle', 'Penyu Laut', c('#65a30d', '#1a2e05', '#ecfccb', '#3f6212', '#84cc16', '#92400e', '#451a03')),
    S('pr-coral', 'pirate', 'normal', 'Coral Reef', 'Terumbu Karang', c('#fb7185', '#4c0519', '#ffe4e6', '#e11d48', '#fda4af', '#0f766e', '#134e4a')),
    S('pr-serpent', 'pirate', 'special', 'Sea Serpent', 'Ular Laut', c('#0e7490', '#082f49', '#a5f3fc', '#155e75', '#0891b2', '#1e3a8a', '#172554'), 'stripes', '#fbbf24'),
    S('pr-ghost', 'pirate', 'epic', 'Ghost Ship', 'Kapal Hantu', c('#cffafe', '#155e75', '#ffffff', '#67e8f9', '#e0f7fa', '#334155', '#0f172a', { '--shield': '#e0f2fe', '--emblem': '#0e7490' }), 'glow', '#67e8f9'),
    S('pr-gold', 'pirate', 'legend', 'Golden Treasure', 'Harta Emas', c('#f59e0b', '#451a03', '#fef3c7', '#b45309', '#fbbf24', '#7f1d1d', '#450a0a', { '--shield': '#fde68a', '--emblem': '#7f1d1d' }), 'aura', '#fde047'),
    /* ---------- Neon Cyberpunk ---------- */
    S('cy-chrome', 'cyber', 'normal', 'Chrome', 'Krom', c('#d1d5db', '#111827', '#f9fafb', '#6b7280', '#e5e7eb', '#00e5ff', '#0e7490')),
    S('cy-toxic', 'cyber', 'normal', 'Toxic Green', 'Hijau Toksik', c('#4ade80', '#052e16', '#dcfce7', '#16a34a', '#86efac', '#a3e635', '#3f6212')),
    S('cy-glitch', 'cyber', 'special', 'Glitch', 'Glitch', c('#1e1b4b', '#000000', '#a5b4fc', '#4338ca', '#312e81', '#ff2a6d', '#8f0e3c'), 'stripes', '#ff2a6d'),
    S('cy-pink', 'cyber', 'epic', 'Neon Pink', 'Neon Merah Jambu', c('#ff2a6d', '#2a0418', '#ffd1e0', '#be123c', '#ff5c8f', '#00e5ff', '#0e7490', { '--shield': '#2a0418', '--emblem': '#ff2a6d', '--shield-out': '#ff2a6d' }), 'glow', '#ff2a6d'),
    S('cy-holo', 'cyber', 'legend', 'Hologram', 'Hologram', c('#67e8f9', '#0c4a6e', '#ecfeff', '#22d3ee', '#a5f3fc', '#c084fc', '#7e22ce', { '--shield': '#0c4a6e', '--emblem': '#67e8f9' }), 'rainbow', '#67e8f9'),
    /* ---------- Fantasi Gelap ---------- */
    S('dk-ash', 'dark', 'normal', 'Ash Knight', 'Kesatria Abu', c('#9ca3af', '#111827', '#e5e7eb', '#4b5563', '#a8b0bb', '#374151', '#111827')),
    S('dk-blood', 'dark', 'normal', 'Blood Moon', 'Bulan Merah', c('#b91c1c', '#2b0606', '#fecaca', '#7f1d1d', '#dc2626', '#1f1033', '#0b0614')),
    S('dk-venom', 'dark', 'special', 'Venom', 'Bisa', c('#16a34a', '#03140a', '#bbf7d0', '#14532d', '#22c55e', '#111827', '#030712'), 'stripes', '#030712'),
    S('dk-shadow', 'dark', 'epic', 'Shadow Flame', 'Api Bayang', c('#581c87', '#0b0614', '#e9d5ff', '#a855f7', '#6b21a8', '#0b0614', '#2e1065', { '--emblem': '#c084fc' }), 'glow', '#a855f7'),
    S('dk-dragon', 'dark', 'legend', 'Dragon Lord', 'Raja Naga', c('#1f2937', '#000000', '#fca5a5', '#ef4444', '#374151', '#7f1d1d', '#450a0a', { '--shield': '#f59e0b', '--emblem': '#7f1d1d' }), 'aura', '#f97316'),
    /* ---------- Fantasi Cahaya ---------- */
    S('lt-leaf', 'light', 'normal', 'Leaf Sprite', 'Pari-pari Daun', c('#86efac', '#14532d', '#f0fdf4', '#22c55e', '#a7f3d0', '#fbbf24', '#b45309')),
    S('lt-sky', 'light', 'normal', 'Sky Dancer', 'Penari Langit', c('#93c5fd', '#1e3a8a', '#eff6ff', '#3b82f6', '#bfdbfe', '#f9a8d4', '#db2777')),
    S('lt-blossom', 'light', 'special', 'Blossom', 'Bunga Sakura', c('#fbcfe8', '#831843', '#fff1f2', '#f472b6', '#fce7f3', '#a7f3d0', '#059669'), 'spots', '#ec4899'),
    S('lt-moon', 'light', 'epic', 'Moonbeam', 'Cahaya Bulan', c('#e0e7ff', '#3730a3', '#ffffff', '#a5b4fc', '#eef2ff', '#6366f1', '#3730a3', { '--emblem': '#6366f1' }), 'glow', '#a5b4fc'),
    S('lt-sun', 'light', 'legend', 'Sun Guardian', 'Penjaga Matahari', c('#fde047', '#713f12', '#fffbeb', '#f59e0b', '#fef08a', '#ffffff', '#fde68a', { '--shield': '#fff7ed', '--emblem': '#f59e0b' }), 'aura', '#fbbf24'),
    /* ---------- Permainan Klasik (8-bit) — rekaan asli, diilhamkan oleh jenis permainan arked ---------- */
    S('rt-dash', 'retro', 'normal', 'Speed Runner', 'Pelari Laju', c('#a3e635', '#1a2e05', '#f7fee7', '#4d7c0f', '#bef264', '#f97316', '#9a3412')),
    S('rt-commando', 'retro', 'normal', 'Jungle Commando', 'Komando Hutan', c('#6b7c3a', '#1c2209', '#e2e8c0', '#3f4a1c', '#7d8f45', '#57534e', '#292524')),
    S('rt-blocks', 'retro', 'special', 'Block Stacker', 'Penyusun Blok', c('#22d3ee', '#083344', '#ecfeff', '#0891b2', '#67e8f9', '#a855f7', '#6b21a8'), 'blocks', '#facc15'),
    S('rt-fighter', 'retro', 'epic', 'Arena Fighter', 'Pejuang Arena', c('#dc2626', '#1c0606', '#fecaca', '#7f1d1d', '#ef4444', '#111827', '#000000', { '--emblem': '#dc2626' }), 'glow', '#f87171'),
    S('rt-king', 'retro', 'legend', 'Arcade Champion', 'Juara Arked', c('#facc15', '#422006', '#fef9c3', '#ca8a04', '#fde047', '#7c3aed', '#4c1d95', { '--shield': '#fef08a', '--emblem': '#7c3aed' }), 'aura', '#facc15'),
    /* ---------- Wira Biru ---------- */
    S('by-lava', 'boys', 'normal', 'Lava Red', 'Merah Lava', c('#ef4444', '#450a0a', '#fee2e2', '#b91c1c', '#f87171', '#1f2937', '#030712')),
    S('by-forest', 'boys', 'normal', 'Forest Ranger', 'Renjer Hutan', c('#16a34a', '#052e16', '#dcfce7', '#15803d', '#22c55e', '#92400e', '#451a03')),
    S('by-camo', 'boys', 'special', 'Camo', 'Celoreng', c('#65a30d', '#1a2e05', '#d9f99d', '#3f6212', '#84cc16', '#57534e', '#292524'), 'spots', '#3f3f1a'),
    S('by-thunder', 'boys', 'epic', 'Thunder', 'Petir', c('#facc15', '#1c1917', '#fef9c3', '#a16207', '#fde047', '#1c1917', '#000000', { '--mask': '#1c1917', '--mask-tail': '#000', '--emblem': '#1c1917' }), 'glow', '#facc15'),
    S('by-dragon', 'boys', 'legend', 'Dragon Knight', 'Kesatria Naga', c('#dc2626', '#1c0606', '#fde68a', '#f59e0b', '#ef4444', '#111827', '#000000', { '--mask': '#f59e0b', '--mask-tail': '#b45309', '--shield': '#f59e0b', '--emblem': '#7f1d1d' }), 'aura', '#f59e0b'),
    /* ---------- Kilauan Merah Jambu ---------- */
    S('gr-bubble', 'girls', 'normal', 'Bubblegum', 'Gula-gula Kapas', c('#f9a8d4', '#831843', '#fdf2f8', '#ec4899', '#fbcfe8', '#a78bfa', '#6d28d9')),
    S('gr-mint', 'girls', 'normal', 'Mint Candy', 'Gula-gula Pudina', c('#6ee7b7', '#064e3b', '#ecfdf5', '#10b981', '#a7f3d0', '#f472b6', '#be185d')),
    S('gr-berry', 'girls', 'special', 'Strawberry', 'Strawberi', c('#f43f5e', '#4c0519', '#ffe4e6', '#be123c', '#fb7185', '#22c55e', '#15803d'), 'spots', '#fef08a'),
    S('gr-unicorn', 'girls', 'epic', 'Unicorn Dream', 'Mimpi Unikorn', c('#e9d5ff', '#581c87', '#ffffff', '#c084fc', '#f3e8ff', '#67e8f9', '#0891b2'), 'glow', '#f0abfc'),
    S('gr-crystal', 'girls', 'legend', 'Crystal Princess', 'Puteri Kristal', c('#a5f3fc', '#164e63', '#ffffff', '#22d3ee', '#cffafe', '#f0abfc', '#c026d3', { '--shield': '#ffffff', '--emblem': '#c026d3' }), 'rainbow', '#f0abfc'),
  ];
  const BY_ID = Object.fromEntries(SKINS.map((s) => [s.id, s]));
  const forTheme = (theme) => SKINS.filter((s) => s.theme === theme);
  const get = (id) => BY_ID[id] || null;
  /* Gaya inline (pemboleh ubah CSS) untuk skin; kosong = warna asal tema */
  function style(id) {
    const s = get(id); if (!s) return '';
    const v = { ...s.v }; if (s.fxc) v['--sk-fx'] = s.fxc;
    return Object.entries(v).map(([k, val]) => k + ':' + val).join(';');
  }
  window.PYQUEST_SKINS = { SKINS, PRICE, RARITY, get, forTheme, style };
})();
