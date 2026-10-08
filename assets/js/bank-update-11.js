/* PyQuest — bank soalan dikongsi (update 11).
   Soalan asas datang dari data/questions-update-7.js & puzzles-update-7.js. Perubahan admin (tambah / edit / padam)
   disimpan dalam Firebase di laluan "bank/quiz" dan "bank/puzzle":
     bank/<jenis>/items/<id>   = soalan baharu atau versi yang diedit
     bank/<jenis>/deleted/<id> = true   (soalan asas yang dipadam)
   Semua pemain membaca "bank" secara langsung, jadi perubahan terus dilihat oleh semua akaun.
   Hanya akaun yang disenaraikan dalam "admins/<uid>: true" boleh menulis (lihat database.rules.json). */
(() => {
  'use strict';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  let db = null;
  const fail = (code) => { const e = new Error(code); e.code = code; return e; };
  const KINDS = ['quiz', 'puzzle'];

  async function ready() {
    if (!configured) throw fail('bank/no-config');
    const ok = window.PyQuestAuth ? await window.PyQuestAuth.loadSdk() : false;
    if (!ok || !window.firebase) throw fail('sdk');
    db = window.firebase.database();
    return db;
  }
  /* Langgan perubahan bank (dipanggil sekali semasa laman dibuka). */
  async function watch(cb) {
    try { await ready(); } catch (e) { cb(null, e); return () => {}; }
    const ref = db.ref('bank');
    const h = ref.on('value', (s) => cb(s.val() || {}), (e) => cb(null, e));
    return () => ref.off('value', h);
  }
  function me() {
    const u = window.firebase && window.firebase.auth ? window.firebase.auth().currentUser : null;
    if (!u) return null;
    return { uid: u.uid, anon: Boolean(u.isAnonymous), name: u.displayName || String(u.email || '').split('@')[0] };
  }
  /* 'ok' | 'login' (perlu log masuk akaun) | 'not-admin' | 'rules' (peraturan belum diterbitkan) */
  async function status() {
    await ready();
    const u = me();
    if (!u || u.anon) return { state: 'login' };
    try {
      const s = await db.ref('admins/' + u.uid).once('value');
      return { state: s.val() === true ? 'ok' : 'not-admin', uid: u.uid, name: u.name };
    } catch (e) { return { state: 'rules', uid: u.uid, name: u.name }; }
  }
  const clean = (o) => JSON.parse(JSON.stringify(o));
  async function saveItems(kind, entries) {
    if (!KINDS.includes(kind)) throw fail('bank/kind');
    await ready();
    const patch = {};
    entries.forEach((e) => { patch['items/' + e.id] = clean(e); patch['deleted/' + e.id] = null; });
    await db.ref('bank/' + kind).update(patch);
  }
  async function remove(kind, id, isBase) {
    await ready();
    const patch = { ['items/' + id]: null };
    if (isBase) patch['deleted/' + id] = true;
    await db.ref('bank/' + kind).update(patch);
  }
  async function reset(kind) { await ready(); await db.ref('bank/' + kind).remove(); }

  /* Gabungkan soalan asas dengan perubahan dari Firebase. */
  function merge(base, part, valid) {
    const items = (part && part.items) || {}, deleted = (part && part.deleted) || {};
    const out = [];
    base.forEach((b) => { if (deleted[b.id]) return; const o = items[b.id]; out.push(o && valid(o) ? o : b); });
    const baseIds = new Set(base.map((b) => b.id));
    Object.keys(items).sort().forEach((id) => { const o = items[id]; if (!baseIds.has(id) && valid(o)) out.push(o); });
    return out;
  }

  window.PyQuestBank = { configured, watch, me, status, saveItems, remove, reset, merge };
})();
