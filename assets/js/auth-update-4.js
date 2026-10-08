/* PyQuest — akaun pengguna (Firebase Authentication + Realtime Database).
   Pengguna hanya guna nama pengguna + kata laluan (tiada emel). Di belakang tabir, nama pengguna
   ditukar kepada alamat palsu "nama@pyquest.app" kerana Firebase memerlukan format emel; tiada emel dihantar.
   Kata laluan TIDAK disimpan oleh PyQuest: Firebase menyimpannya secara selamat (hash). */
(() => {
  'use strict';
  const SDK = 'https://www.gstatic.com/firebasejs/10.12.5/';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  const DOMAIN = '@pyquest.app';
  const NAME_RE = /^[A-Za-z0-9_]{3,20}$/;
  const MIN_PASS = 12;
  let sdk = null, auth = null, db = null, saveTimer = null, pending = null;

  const load = (src) => new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('sdk')); document.head.appendChild(s); });
  const fail = (code) => { const e = new Error(code); e.code = code; return e; };
  const TS = () => window.firebase.database.ServerValue.TIMESTAMP;

  function loadSdk() {
    if (!configured) return Promise.resolve(false);
    if (sdk) return sdk;
    sdk = (async () => {
      try {
        if (!window.firebase) await load(SDK + 'firebase-app-compat.js');
        const jobs = [];
        if (!window.firebase.database) jobs.push(load(SDK + 'firebase-database-compat.js'));
        if (!window.firebase.auth) jobs.push(load(SDK + 'firebase-auth-compat.js'));
        await Promise.all(jobs);
        if (!window.firebase.apps.length) window.firebase.initializeApp(cfg);
        auth = window.firebase.auth();
        db = window.firebase.database();
        return true;
      } catch (_) { return false; }
    })();
    return sdk;
  }
  const needSdk = async () => { if (!(await loadSdk())) throw fail('sdk'); };
  const shown = (u) => u.displayName || String(u.email || '').split('@')[0];
  const who = (u) => ({ uid: u.uid, username: shown(u) });

  async function signUp(username, password) {
    username = String(username || '').trim();
    if (!NAME_RE.test(username)) throw fail('pq/username');
    if ([...String(password || '')].length < MIN_PASS) throw fail('pq/password');
    await needSdk();
    const cred = await auth.createUserWithEmailAndPassword(username.toLowerCase() + DOMAIN, password);
    const user = cred.user;
    try {
      await user.updateProfile({ displayName: username });
      await db.ref('users/' + user.uid).set({ u: username, t: TS() });
      await db.ref('signups/' + user.uid).set({ u: username, t: TS(), x: 0, a: TS() });
    } catch (e) { throw fail('pq/rules'); }
    return who(user);
  }
  async function logIn(username, password) {
    username = String(username || '').trim();
    if (!username || !password) throw fail('auth/invalid-credential');
    await needSdk();
    const cred = await auth.signInWithEmailAndPassword(username.toLowerCase() + DOMAIN, password);
    return who(cred.user);
  }
  async function restore() {
    if (!(await loadSdk())) return null;
    return new Promise((resolve) => {
      const off = auth.onAuthStateChanged((u) => { off(); resolve(u ? who(u) : null); });
    });
  }
  async function loadProfile() {
    await needSdk();
    const u = auth.currentUser; if (!u) return null;
    const snap = await db.ref('users/' + u.uid + '/p').once('value');
    return snap.val();
  }
  function flush() {
    if (!pending || !auth || !auth.currentUser) return;
    const { snapshot, xp } = pending; pending = null; clearTimeout(saveTimer);
    const uid = auth.currentUser.uid;
    try {
      db.ref('users/' + uid + '/p').set(snapshot).catch(() => {});
      db.ref('signups/' + uid).update({ x: Number(xp) || 0, a: TS() }).catch(() => {});
    } catch (_) {}
  }
  function saveProfile(snapshot, xp) {
    if (!auth || !auth.currentUser) return;
    pending = { snapshot: JSON.parse(JSON.stringify(snapshot)), xp };
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flush, 1500);
  }
  async function logOut() { flush(); if (await loadSdk()) await auth.signOut(); }

  async function subscribeSignups(cb) {
    if (!(await loadSdk())) { cb({ error: 'sdk' }); return () => {}; }
    const ref = db.ref('signups');
    const h = ref.on('value', (x) => {
      const v = x.val() || {};
      cb({ list: Object.keys(v).map((k) => ({ uid: k, ...v[k] })) });
    }, () => cb({ error: 'permission' }));
    return () => ref.off('value', h);
  }

  window.addEventListener('pagehide', flush);
  document.addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
  window.PyQuestAuth = { configured, MIN_PASS, NAME_RE, loadSdk, signUp, logIn, logOut, restore, loadProfile, saveProfile, flush, subscribeSignups };
})();
