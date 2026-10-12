/* PyQuest — Kuasa admin (update 18): beri syiling dan sekat (ban) akaun.
   Data di Firebase Realtime Database:
     gifts/<uid>/<id>  = { c: syiling, m: mesej, by: nama admin, t: masa }   — admin tulis, pemilik tuntut (padam)
     giftlog/<id>      = { u: uid, n: nama pengguna, c, by, t }               — rekod untuk admin sahaja
     bans/<uid>        = { r: sebab, u: nama pengguna, by: nama admin, t }     — admin tulis, pemilik boleh baca
   Hanya akaun dalam "admins/<uid>: true" boleh beri syiling / ban (lihat database.rules.json). */
(() => {
  'use strict';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  let db = null;
  const fail = (code) => { const e = new Error(code); e.code = code; return e; };
  const TS = () => window.firebase.database.ServerValue.TIMESTAMP;
  async function ready() {
    if (!configured) throw fail('power/no-config');
    const A = window.PyQuestAuth;
    if (!A || !(await A.loadSdk())) throw fail('sdk');
    db = window.firebase.database();
    return db;
  }
  const me = () => { const u = window.firebase && window.firebase.auth ? window.firebase.auth().currentUser : null; return u && !u.isAnonymous ? u : null; };
  const adminName = () => { const u = me(); return String((u && (u.displayName || String(u.email || '').split('@')[0])) || 'admin').slice(0, 20); };
  const clip = (s, n) => String(s || '').replace(/\s+/g, ' ').trim().slice(0, n);

  /* ---------- admin ---------- */
  async function gift(uid, username, amount, message) {
    await ready();
    const c = Math.round(Number(amount));
    if (!(c >= 1 && c <= 1000)) throw fail('power/amount');
    const key = db.ref('giftlog').push().key;
    const by = adminName();
    await db.ref().update({
      ['gifts/' + uid + '/' + key]: { c, m: clip(message, 120), by, t: TS() },
      ['giftlog/' + key]: { u: uid, n: clip(username, 20), c, by, t: TS() },
    });
    return key;
  }
  async function ban(uid, username, reason) {
    await ready();
    await db.ref('bans/' + uid).set({ r: clip(reason, 200), u: clip(username, 20), by: adminName(), t: TS() });
  }
  async function unban(uid) { await ready(); await db.ref('bans/' + uid).remove(); }
  /* Senarai ban + rekod hadiah terkini (untuk tab Pengguna). */
  async function subscribeAdmin(cb) {
    await ready();
    const out = { bans: {}, log: [] };
    const rb = db.ref('bans'), rl = db.ref('giftlog').orderByChild('t').limitToLast(30);
    const hb = rb.on('value', (s) => { out.bans = s.val() || {}; cb({ ...out }); }, () => cb({ ...out, error: 'permission' }));
    const hl = rl.on('value', (s) => { const v = s.val() || {}; out.log = Object.keys(v).map((k) => ({ id: k, ...v[k] })).sort((a, b) => (b.t || 0) - (a.t || 0)); cb({ ...out }); }, () => {});
    return () => { rb.off('value', hb); rl.off('value', hl); };
  }

  /* ---------- pengguna ---------- */
  /* Dengar hadiah & ban untuk akaun sendiri. onGift(gift) dipanggil SEKALI bagi setiap hadiah (tuntutan selamat). */
  async function watchMine(uid, onGift, onBan) {
    await ready();
    const gref = db.ref('gifts/' + uid), bref = db.ref('bans/' + uid);
    const busy = new Set();
    const hg = gref.on('value', (s) => {
      const v = s.val() || {};
      Object.keys(v).forEach((id) => {
        if (busy.has(id)) return;
        busy.add(id);
        let claimed = null;
        gref.child(id).transaction((cur) => { claimed = cur; return null; })
          .then(() => { if (claimed && Number(claimed.c) > 0) onGift({ id, ...claimed }); })
          .catch(() => { busy.delete(id); });
      });
    }, () => {});
    const hb = bref.on('value', (s) => { onBan(s.val() || null); }, () => {});
    return () => { gref.off('value', hg); bref.off('value', hb); };
  }
  async function checkBan(uid) {
    await ready();
    try { return (await db.ref('bans/' + uid).once('value')).val() || null; } catch (_) { return null; }
  }

  window.PyQuestPower = { configured, gift, ban, unban, subscribeAdmin, watchMine, checkBan };
})();
