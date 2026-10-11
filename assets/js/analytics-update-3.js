/* PyQuest — statistik lawatan langsung (Firebase Realtime Database).
   Hanya kiraan tanpa nama dihantar: halaman yang dibuka, bahasa, dan bilangan pusingan selesai.
   Jika firebase-config-update-3.js kosong, modul ini tidak berbuat apa-apa. */
(() => {
  'use strict';
  const SDK = 'https://www.gstatic.com/firebasejs/10.12.5/';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  const ONLINE_MS = 90000;
  let ready = null, db = null, me = null, started = false;
  let page = 'home', lang = 'en', lastPage = '', beat = null;

  const pad = (n) => String(n).padStart(2, '0');
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const rand = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
  const load = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('sdk')); document.head.appendChild(s); });
  const safe = (fn) => { try { const r = fn(); if (r && r.catch) r.catch(() => {}); } catch (_) {} };

  function boot() {
    if (!configured) return Promise.resolve(false);
    if (ready) return ready;
    ready = (async () => {
      try {
        if (!window.firebase) { await load(SDK + 'firebase-app-compat.js'); await load(SDK + 'firebase-database-compat.js'); }
        if (!window.firebase.apps.length) window.firebase.initializeApp(cfg);
        db = window.firebase.database();
        return true;
      } catch (_) { return false; }
    })();
    return ready;
  }
  const inc = (path) => safe(() => db.ref(path).transaction((v) => (v || 0) + 1));
  function push() {
    if (!me || document.hidden) return;
    safe(() => me.set({ t: window.firebase.database.ServerValue.TIMESTAMP, p: String(page).slice(0, 12), l: lang }));
  }
  function countPage() { if (page !== lastPage) { lastPage = page; inc('stats/pages/' + page); } }

  async function start(opts) {
    if (started) return;
    started = true;
    if (opts) { lang = opts.lang || lang; page = opts.page || page; }
    if (!(await boot())) return;
    let sid = sessionStorage.getItem('pq_sid');
    if (!sid) { sid = rand(); sessionStorage.setItem('pq_sid', sid); }
    me = db.ref('presence/' + sid);
    db.ref('.info/connected').on('value', (snap) => {
      if (snap.val() === true) { safe(() => me.onDisconnect().remove()); push(); }
    });
    beat = setInterval(push, 30000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) push(); });
    const today = dayKey();
    if (!sessionStorage.getItem('pq_counted')) {
      sessionStorage.setItem('pq_counted', '1');
      inc('stats/views'); inc('stats/daily/' + today + '/views'); inc('stats/lang/' + lang);
      if (!localStorage.getItem('pq_vid')) { localStorage.setItem('pq_vid', rand()); inc('stats/visitors'); }
      if (localStorage.getItem('pq_vday') !== today) { localStorage.setItem('pq_vday', today); inc('stats/daily/' + today + '/unique'); }
    }
    countPage();
  }
  function setPage(p) { page = p; if (!db) return; push(); countPage(); }
  function setLang(l) { lang = l; push(); }
  function event(kind) { if (db && (kind === 'quiz' || kind === 'puzzle')) inc('stats/activity/' + kind + '_rounds'); }

  async function subscribe(cb) {
    if (!(await boot())) { cb({ error: 'sdk' }); return () => {}; }
    let presence = {}, stats = {}, offset = 0, connected = false;
    const emit = () => cb({ presence, stats, offset, connected });
    const fail = () => cb({ error: 'permission' });
    const r = { p: db.ref('presence'), s: db.ref('stats'), o: db.ref('.info/serverTimeOffset'), c: db.ref('.info/connected') };
    const h = {
      p: r.p.on('value', (x) => { presence = x.val() || {}; emit(); }, fail),
      s: r.s.on('value', (x) => { stats = x.val() || {}; emit(); }, fail),
      o: r.o.on('value', (x) => { offset = x.val() || 0; emit(); }),
      c: r.c.on('value', (x) => { connected = x.val() === true; emit(); }),
    };
    const tick = setInterval(emit, 5000);
    return () => { clearInterval(tick); Object.keys(r).forEach((k) => r[k].off('value', h[k])); };
  }

  window.PyQuestAnalytics = { configured, ONLINE_MS, dayKey, start, setPage, setLang, event, subscribe };
})();
