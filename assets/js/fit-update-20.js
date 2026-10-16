/* PyQuest — update 20: game muat dalam skrin (tanpa scroll).
   Setiap kali soalan baharu muncul (6 game + Multiplayer), kawasan permainan diukur dan dikecilkan secara automatik
   (CSS zoom) supaya soalan DAN semua butang jawapan muat di skrin peranti, kemudian diskrol tepat di bawah bar atas.
   Selepas menjawab, butang "Seterusnya" dipastikan kelihatan. Saiz dikira semula bila skrin diputar / saiz tetingkap berubah. */
(() => {
  'use strict';
  const ANS = '[data-quiz-choice],[data-gchoice],[data-gline],.pz-btn,[data-action="mp-ans"]';
  const minZoom = () => (innerHeight < 470 ? 0.56 : innerWidth < 600 ? 0.7 : 0.62);
  const reduced = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let lastKey = '', lastZoom = 1, lastShort = false, fbDoneFor = '', busy = false;

  /* tinggi bahagian atas yang melekat (bar atas laman + bar bilik Multiplayer) */
  const headerH = () => {
    let h = 0;
    document.querySelectorAll('.site-header, main .mp-bar').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.position === 'fixed') h = Math.max(h, el.getBoundingClientRect().bottom);
      else if (cs.position === 'sticky') h = Math.max(h, (parseFloat(cs.top) || 0) + el.offsetHeight);
    });
    return Math.max(0, h);
  };
  /* ruang di bawah untuk butang Pyko di telefon */
  const bottomGap = () => (innerWidth < 600 ? 50 : 10);
  function target() {
    return document.querySelector('#game-main .arena') || document.querySelector('main .mp-room.st-play .mp-q, main .mp-room .mp-q');
  }
  function keyOf(t) {
    const code = t.querySelector('pre, .q-code, .code-lines');
    const ans = [...t.querySelectorAll(ANS)].map((b) => b.textContent.trim()).join('|');
    const q = t.querySelector('.q-text, .case-title, h2, h3');
    return t.className.split(' ')[0] + '#' + (q ? q.textContent : '') + '#' + (code ? code.textContent.slice(0, 400) : '') + '#' + ans;
  }
  const answered = (t) => Boolean(t.querySelector('.fb-panel')) || t.classList.contains('revealed');
  const setZoom = (t, z) => { const v = z >= 0.995 ? '' : String(Math.round(z * 1000) / 1000); if (t.style.zoom !== v) t.style.zoom = v; t.classList.toggle('pq-fit', Boolean(v)); };

  function scrollToY(y, force) {
    y = Math.max(0, Math.round(y));
    const near = Math.abs(y - scrollY) < 3;
    if (near && !force) return;
    // force: batalkan skrol lancar lain yang sedang berjalan (contohnya skrol asal game) dengan skrol kita sendiri
    window.scrollTo({ top: y, behavior: near || reduced() ? 'auto' : 'smooth' });
  }
  function fitNew(t) {
    setZoom(t, 1);
    // jawapan pendek: susun 2 lajur di telefon supaya jimat ruang
    const texts = [...t.querySelectorAll(ANS)].map((b) => b.textContent.replace(/\s+/g, ' ').trim().replace(/^\d\s*/, '').replace(/\s*\d$/, ''));
    lastShort = texts.length >= 2 && texts.length <= 4 && texts.every((x) => x.length <= 15);
    t.classList.toggle('pq-short', lastShort);
    const hh = headerH();
    const avail = innerHeight - hh - 8 - bottomGap();
    // bahagian yang mesti kelihatan: dari atas kawasan hingga butang jawapan terakhir (atau ruang angkasa Wira Galaksi)
    const r0 = t.getBoundingClientRect();
    const bots = [...t.querySelectorAll(ANS + ',.space')].map((b) => b.getBoundingClientRect().bottom);
    const h = bots.length ? Math.min(r0.height, Math.max(...bots) - r0.top + 14) : r0.height;
    let z = h > avail ? Math.max(minZoom(), avail / h) : 1;
    setZoom(t, z);
    lastZoom = z;
    // letak kawasan permainan tepat di bawah bar atas (setiap soalan baharu)
    const r = t.getBoundingClientRect();
    scrollToY(scrollY + r.top - hh - 8, true);
  }
  function showNext(t) {
    const next = t.querySelector('.fb-next') || document.querySelector('main .fb-next, main [data-action="mp-self-next"], main [data-action="mp-next"]');
    const fb = t.querySelector('.fb-panel'); if (!next || !fb) return;
    const nb = next.getBoundingClientRect().bottom, room = innerHeight - bottomGap() + 4;
    if (nb <= room) return;
    const limit = fb.getBoundingClientRect().top - headerH() - 8;   // jangan sorok bahagian atas penerangan
    const delta = Math.min(nb - room + 8, Math.max(0, limit));
    if (delta > 4) scrollToY(scrollY + delta);
  }
  function run() {
    if (busy) return; busy = true;
    try {
      const t = target();
      if (!t) { lastKey = ''; fbDoneFor = ''; document.body.classList.remove('pq-playing'); return; }
      document.body.classList.add('pq-playing');
      const k = answered(t) && lastKey ? lastKey : keyOf(t);   // selepas menjawab: soalan yang sama
      if (k !== lastKey) { lastKey = k; fbDoneFor = ''; fitNew(t); }
      else { t.classList.toggle('pq-short', lastShort); setZoom(t, lastZoom); }   // render semula soalan yang sama: kekalkan saiz tanpa berkelip
      if (answered(t) && fbDoneFor !== k) { fbDoneFor = k; requestAnimationFrame(() => showNext(t)); }
    } finally { busy = false; }
  }
  const mo = new MutationObserver(run);
  function start() {
    const main = document.getElementById('main-content') || document.body;
    mo.observe(main, { childList: true, subtree: true });
    run();
  }
  let rt = 0;
  const refit = () => { clearTimeout(rt); rt = setTimeout(() => { lastKey = ''; fbDoneFor = 'x'; run(); }, 150); };
  addEventListener('resize', refit);
  addEventListener('orientationchange', refit);
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', refit);
  window.PyQuestFit = { refit: () => { lastKey = ''; run(); }, zoom: () => lastZoom };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
