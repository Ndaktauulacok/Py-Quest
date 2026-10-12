/* PyQuest — Multiplayer (update 8): bilik dengan kod 6 aksara di Firebase Realtime Database.
   Setiap pemain (termasuk Tetamu) menggunakan Firebase Anonymous sign-in supaya peraturan keselamatan boleh
   memastikan pemain hanya mengubah data mereka sendiri dan hanya hos mengawal bilik.
   Lihat SETUP-MULTIPLAYER-update-8.md. */
(() => {
  'use strict';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // tiada O/0/I/1 supaya mudah dibaca
  const ROOM_TTL = 12 * 3600 * 1000;
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

  function newCode() { let s = ''; for (let i = 0; i < 6; i++) s += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]; return s; }

  async function createRoom(o) {
    const me = await ensure();
    let code = '';
    for (let tries = 0; tries < 6; tries++) {
      code = newCode();
      const snap = await ref(code, 'h').once('value');
      if (!snap.exists()) break;
      code = '';
    }
    if (!code) throw fail('mp/busy');
    const room = { h: me, hn: cleanName(o.hostName) || 'Host', m: o.mode, d: o.diff, p: o.pace, hp: Boolean(o.hostPlays), n: o.qs.length, sec: Number(o.seconds) || 0, qs: o.qs.join(','), st: 'lobby', qi: 0, qt: 0, c: TS() };
    await ref(code).set(room);
    if (room.hp) await setPlayer(code, o.hostName);
    return code;
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
    if (!room || !room.h) throw fail('mp/not-found');
    if (room.st === 'end' || (room.c && now() - room.c > ROOM_TTL)) throw fail('mp/closed');
    if (Object.keys(room.players || {}).length >= 60 && !(room.players || {})[uid()]) throw fail('mp/full');
    if (room.h === uid() && !room.hp) return { code, host: true };
    const existing = (room.players || {})[uid()];
    if (existing) { await ref(code, 'players/' + uid()).update({ o: true, n: cleanName(name) || existing.n }); try { ref(code, 'players/' + uid() + '/o').onDisconnect().set(false); } catch (_) {} }
    else await setPlayer(code, name);
    return { code, host: room.h === uid() };
  }
  function watch(code, cb, onError) {
    const r = ref(code);
    const h = r.on('value', (s) => cb(s.val()), (e) => onError && onError(e));
    return () => r.off('value', h);
  }
  const hostUpdate = (code, patch) => ref(code).update(patch);
  const startQuestion = (code, qi) => ref(code).update({ st: 'play', qi, qt: TS() });
  const reveal = (code) => ref(code).update({ st: 'reveal' });
  const endGame = (code) => ref(code).update({ st: 'end' });
  const closeRoom = (code) => ref(code).remove();
  async function answer(code, qi, choice, scorePatch) {
    await ref(code, 'ans/' + qi + '/' + uid()).set(choice);
    if (scorePatch) await ref(code, 'players/' + uid()).update(scorePatch);
  }
  const updateMe = (code, patch) => ref(code, 'players/' + uid()).update(patch);
  async function leave(code) {
    try { await ref(code, 'players/' + uid() + '/o').onDisconnect().cancel(); } catch (_) {}
    try { await ref(code, 'players/' + uid()).remove(); } catch (_) {}
  }
  async function playAgain(code, room, qs) {
    const players = {};
    Object.entries(room.players || {}).forEach(([id, p]) => { players[id] = { ...p, s: 0, k: 0, a: 0, i: 0, d: false }; });
    await ref(code).update({ st: 'lobby', qi: 0, qt: 0, qs: qs.join(','), n: qs.length, ans: null, players });
  }

  window.PyQuestMP = { configured, ensure, uid, now, createRoom, joinRoom, watch, hostUpdate, startQuestion, reveal, endGame, closeRoom, answer, updateMe, leave, playAgain, normCode, cleanName };
})();
