/* PyQuest — Multiplayer (update 17): bilik dengan kod 6 aksara di Firebase Realtime Database.
   Baharu dalam update 17:
   - Semua 6 game boleh dimain secara multiplayer (quiz, puzzle, bug, vault, race, shoot).
   - Hos boleh pilih "Main sekali" atau "Tengok sahaja" untuk KEDUA-DUA mod (hos kawal / ikut kadar sendiri).
   - Hos boleh SKIP soalan (sk/<no soalan> = true). Soalan yang di-skip tidak memberi mata kepada sesiapa.
   - Mod hos kawal: markah dikira oleh hos semasa "tunjuk jawapan" (res/<no>/<uid> = mata) daripada masa jawapan
     yang dicop oleh pelayan Firebase — adil dan tidak boleh ditipu.
   - Hos boleh keluarkan (kick) pemain, dan sesiapa boleh sambung semula bilik selepas muat semula halaman.
   Setiap pemain (termasuk Tetamu) menggunakan Firebase Anonymous sign-in supaya peraturan keselamatan boleh
   memastikan pemain hanya mengubah data mereka sendiri dan hanya hos mengawal bilik. */
(() => {
  'use strict';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // tiada O/0/I/1 supaya mudah dibaca
  const ROOM_TTL = 12 * 3600 * 1000;
  const MAX_PLAYERS = 60;
  const LAST_KEY = 'pyquest-mp-last';
  let db = null, auth = null, offset = 0, offsetWatch = false;

  const fail = (code) => { const e = new Error(code); e.code = code; return e; };
  const TS = () => window.firebase.database.ServerValue.TIMESTAMP;

  async function ensure() {
    if (!configured) throw fail('mp/no-config');
    const A = window.PyQuestAuth;
    const ok = A ? await A.loadSdk() : false;
    if (!ok || !window.firebase || !window.firebase.auth) throw fail('sdk');
    db = window.firebase.database();
    auth = window.firebase.auth();
    if (!offsetWatch) { offsetWatch = true; db.ref('.info/serverTimeOffset').on('value', (s) => { offset = Number(s.val()) || 0; }); }
    if (!auth.currentUser) {
      try { await auth.signInAnonymously(); }
      catch (e) {
        if (['auth/operation-not-allowed', 'auth/admin-restricted-operation'].includes(e.code)) throw fail('mp/anon-disabled');
        throw e;
      }
    }
    return auth.currentUser.uid;
  }
  const uid = () => (auth && auth.currentUser ? auth.currentUser.uid : '');
  const now = () => Date.now() + offset;
  const ref = (code, path = '') => db.ref('rooms/' + code + (path ? '/' + path : ''));
  const cleanName = (n) => String(n || '').replace(/[^\p{L}\p{N} _.-]/gu, '').replace(/\s+/g, ' ').trim().slice(0, 16);
  const normCode = (c) => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);

  /* Ingat bilik terakhir supaya boleh sambung semula selepas muat semula halaman. */
  const remember = (code) => { try { localStorage.setItem(LAST_KEY, JSON.stringify({ code, at: Date.now() })); } catch (_) {} };
  const forget = () => { try { localStorage.removeItem(LAST_KEY); } catch (_) {} };
  function lastRoom() {
    try { const v = JSON.parse(localStorage.getItem(LAST_KEY) || 'null'); if (v && /^[A-Z2-9]{6}$/.test(v.code) && Date.now() - v.at < ROOM_TTL) return v.code; } catch (_) {}
    return '';
  }
  /* Semak sama ada bilik terakhir masih wujud dan kita masih ahlinya. */
  async function checkLast() {
    const code = lastRoom(); if (!code) return null;
    await ensure();
    const room = (await ref(code).once('value')).val();
    const me = uid();
    if (!room || !room.h) { forget(); return null; }
    if (room.h !== me && !(room.players || {})[me]) { forget(); return null; }
    if (room.c && now() - room.c > ROOM_TTL) { forget(); return null; }
    return { code, host: room.h === me, st: room.st, m: room.m };
  }

  function newCode() { let s = ''; for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]; return s; }

  async function createRoom(o) {
    const me = await ensure();
    let code = '';
    for (let tries = 0; tries < 8; tries++) {
      code = newCode();
      const snap = await ref(code, 'h').once('value');
      if (!snap.exists()) break;
      code = '';
    }
    if (!code) throw fail('mp/busy');
    const room = { v: 17, h: me, hn: cleanName(o.hostName) || 'Host', ho: true, m: o.mode, d: o.diff, p: o.pace, hp: Boolean(o.hostPlays), n: o.qs.length, sec: Number(o.seconds) || 0, qs: o.qs.join(','), st: 'lobby', qi: 0, qt: 0, g: 1, c: TS() };
    await ref(code).set(room);
    hostPresence(code);
    if (room.hp) await setPlayer(code, o.hostName);
    remember(code);
    return code;
  }
  function hostPresence(code) {
    try { ref(code, 'ho').onDisconnect().set(false); ref(code, 'ho').set(true).catch(() => {}); } catch (_) {}
  }
  async function setPlayer(code, name) {
    const me = uid();
    const p = ref(code, 'players/' + me);
    await p.set({ n: cleanName(name) || 'Player', s: 0, k: 0, a: 0, i: 0, d: false, o: true, t: TS() });
    try { p.child('o').onDisconnect().set(false); } catch (_) {}
  }
  async function joinRoom(rawCode, name) {
    const code = normCode(rawCode);
    if (code.length !== 6) throw fail('mp/bad-code');
    await ensure();
    const snap = await ref(code).once('value');
    const room = snap.val();
    const me = uid();
    if (!room || !room.h) throw fail('mp/not-found');
    if (room.c && now() - room.c > ROOM_TTL) throw fail('mp/closed');
    if ((room.ban || {})[me]) throw fail('mp/banned');
    const existing = (room.players || {})[me];
    if (room.h === me) {                                   // hos kembali ke biliknya sendiri
      hostPresence(code);
      if (existing) { await ref(code, 'players/' + me).update({ o: true }); try { ref(code, 'players/' + me + '/o').onDisconnect().set(false); } catch (_) {} }
      remember(code);
      return { code, host: true };
    }
    if (room.st === 'end' && !existing) throw fail('mp/closed');
    if (!existing && Object.keys(room.players || {}).length >= MAX_PLAYERS) throw fail('mp/full');
    if (existing) {
      const patch = { o: true }; const nn = cleanName(name); if (nn.length >= 2) patch.n = nn;
      await ref(code, 'players/' + me).update(patch);
      try { ref(code, 'players/' + me + '/o').onDisconnect().set(false); } catch (_) {}
    } else await setPlayer(code, name);
    remember(code);
    return { code, host: false };
  }
  async function rejoin(code) {
    await ensure();
    const room = (await ref(code).once('value')).val();
    const me = uid();
    if (!room || !room.h) { forget(); throw fail('mp/not-found'); }
    if (room.h === me) return joinRoom(code, room.hn);
    const p = (room.players || {})[me];
    if (!p) { forget(); throw fail('mp/not-found'); }
    return joinRoom(code, p.n);
  }
  function watch(code, cb, onError) {
    const r = ref(code);
    const h = r.on('value', (s) => cb(s.val()), (e) => onError && onError(e));
    return () => r.off('value', h);
  }
  const hostUpdate = (code, patch) => ref(code).update(patch);
  const startQuestion = (code, qi) => ref(code).update({ st: 'play', qi, qt: TS() });
  /* Skip soalan semasa (mod hos kawal): terus ke soalan seterusnya atau tamat. Tiada mata untuk soalan itu. */
  function skipHost(code, qi, total) {
    const patch = { ['sk/' + qi]: true };
    if (qi + 1 >= total) patch.st = 'end';
    else { patch.st = 'play'; patch.qi = qi + 1; patch.qt = TS(); }
    return ref(code).update(patch);
  }
  /* Skip soalan tertentu (mod ikut kadar sendiri): semua pemain yang belum menjawabnya akan melompat. */
  const skipSelf = (code, qi) => ref(code).update({ ['sk/' + qi]: true });
  /* Tunjuk jawapan + simpan markah (dikira oleh hos). scores = { uid: {s,k,a} }, res = { uid: mata } */
  function reveal(code, qi, res, scores) {
    const patch = { st: 'reveal' };
    if (qi !== undefined && res) {
      patch['res/' + qi] = Object.keys(res).length ? res : null;
      Object.entries(scores || {}).forEach(([id, v]) => { patch['players/' + id + '/s'] = v.s; patch['players/' + id + '/k'] = v.k; patch['players/' + id + '/a'] = v.a; });
    }
    return ref(code).update(patch);
  }
  const endGame = (code) => ref(code).update({ st: 'end' });
  const closeRoom = (code) => { forget(); return ref(code).remove(); };
  const answer = (code, qi, choice) => ref(code, 'ans/' + qi + '/' + uid()).set({ c: choice, t: TS() });
  const updateMe = (code, patch) => ref(code, 'players/' + uid()).update(patch);
  const kick = (code, id) => ref(code).update({ ['players/' + id]: null, ['ban/' + id]: true });
  async function leave(code) {
    forget();
    try { await ref(code, 'players/' + uid() + '/o').onDisconnect().cancel(); } catch (_) {}
    try { await ref(code, 'players/' + uid()).remove(); } catch (_) {}
  }
  async function playAgain(code, room, qs, opts = {}) {
    const players = {};
    Object.entries(room.players || {}).forEach(([id, p]) => { players[id] = { n: p.n, s: 0, k: 0, a: 0, i: 0, d: false, o: p.o !== false, t: p.t || 0 }; });
    await ref(code).update({ st: 'lobby', qi: 0, qt: 0, qs: qs.join(','), n: qs.length, ans: null, res: null, sk: null, players, g: (Number(room.g) || 1) + 1, m: opts.m || room.m, d: opts.d || room.d });
  }
  /* Tukar tetapan semasa di lobi (game / tahap / bilangan soalan). */
  const setGame = (code, patch) => ref(code).update(patch);

  window.PyQuestMP = { configured, ensure, uid, now, createRoom, joinRoom, rejoin, checkLast, lastRoom, forget, watch, hostUpdate, startQuestion, skipHost, skipSelf, reveal, endGame, closeRoom, answer, updateMe, kick, leave, playAgain, setGame, hostPresence, normCode, cleanName, MAX_PLAYERS };
})();
