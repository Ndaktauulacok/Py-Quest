/* PyQuest — akaun pengguna (update 13: profil paparan) (Firebase Authentication + Realtime Database).
   Pengguna guna nama pengguna + kata laluan; emel pemulihan adalah pilihan. Di belakang tabir, nama pengguna
   ditukar kepada alamat palsu "nama@pyquest.app" kerana Firebase memerlukan format emel; tiada emel dihantar.
   Kata laluan TIDAK disimpan oleh PyQuest: Firebase menyimpannya secara selamat (hash). */
(() => {
  'use strict';
  const SDK = 'https://www.gstatic.com/firebasejs/10.12.5/';
  const cfg = window.PYQUEST_FIREBASE || {};
  const configured = Boolean(cfg.apiKey && cfg.databaseURL && cfg.projectId);
  const DOMAIN = '@pyquest.app';
  const NAME_RE = /^[A-Za-z0-9_]{3,20}$/;
  const MIN_PASS = 6;
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

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const synth = (u) => u.toLowerCase() + DOMAIN;
  const isTaken = async (lower) => {
    const m = await db.ref('usernames/' + lower).once('value');
    if (m.exists()) return true;
    const all = await db.ref('signups').once('value');   // akaun lama (sebelum senarai nama wujud)
    const v = all.val() || {};
    return Object.keys(v).some((k) => String(v[k].u || '').toLowerCase() === lower);
  };

  async function signUp(username, password, email) {
    username = String(username || '').trim();
    email = String(email || '').trim();
    if (!NAME_RE.test(username)) throw fail('pq/username');
    if ([...String(password || '')].length < MIN_PASS) throw fail('pq/password');
    if (email && !EMAIL_RE.test(email)) throw fail('pq/email');
    await needSdk();
    const lower = username.toLowerCase();
    if (await isTaken(lower)) throw fail('pq/taken');
    const login = email ? email : synth(username);
    let cred;
    try { cred = await auth.createUserWithEmailAndPassword(login, password); }
    catch (e) { if (email && e.code === 'auth/email-already-in-use') throw fail('pq/email-taken'); throw e; }
    const user = cred.user;
    try {
      await db.ref('usernames/' + lower).set({ uid: user.uid, e: email || null });
    } catch (e) {
      try { await user.delete(); } catch (_) {}
      throw fail('pq/taken');
    }
    try {
      await user.updateProfile({ displayName: username });
      await db.ref('users/' + user.uid).set({ u: username, t: TS() });
      await db.ref('signups/' + user.uid).set({ u: username, t: TS(), x: 0, a: TS() });
    } catch (e) { throw fail('pq/rules'); }
    return who(user);
  }
  /* idf = nama pengguna ATAU emel pemulihan */
  async function resolveLogin(idf) {
    idf = String(idf || '').trim();
    if (idf.includes('@')) return { email: idf, name: null };
    const lower = idf.toLowerCase();
    const m = await db.ref('usernames/' + lower).once('value');
    const v = m.val();
    return { email: (v && v.e) || synth(idf), name: lower, mapped: Boolean(v), recovery: Boolean(v && v.e) };
  }
  async function logIn(idf, password) {
    if (!String(idf || '').trim() || !password) throw fail('auth/invalid-credential');
    await needSdk();
    const r = await resolveLogin(idf);
    const cred = await auth.signInWithEmailAndPassword(r.email, password);
    const u = cred.user;
    if (r.name && !r.mapped) {   // akaun lama: daftarkan nama dalam senarai
      try { await db.ref('usernames/' + r.name).set({ uid: u.uid, e: null }); } catch (_) {}
    }
    return who(u);
  }
  async function forgot(idf, lang) {
    idf = String(idf || '').trim();
    if (!idf) throw fail('pq/forgot-empty');
    await needSdk();
    let email = idf;
    if (!idf.includes('@')) {
      const r = await resolveLogin(idf);
      if (!r.recovery) throw fail('pq/no-recovery');
      email = r.email;
    } else if (!EMAIL_RE.test(idf)) throw fail('pq/email');
    auth.languageCode = lang === 'ms' ? 'ms' : 'en';
    /* Pautan "Continue" selepas reset kembali ke PyQuest (halaman Log Masuk). Jika domain belum dibenarkan
       dalam Firebase (Authorized domains), hantar semula tanpa pautan itu supaya emel tetap sampai. */
    /* handleCodeInApp: Firebase terus membawa pautan emel ke reset.html PyQuest (dengan mode & oobCode),
       jadi TIDAK perlu "Customize action URL" dalam Firebase Console. Domain mesti ada dalam Authorized domains. */
    const back = location.origin + location.pathname.replace(/[^/]*$/, '') + 'reset.html';
    const swallow = (e) => { if (e.code !== 'auth/user-not-found') throw e; };   // jangan dedahkan sama ada emel wujud
    try { await auth.sendPasswordResetEmail(email, { url: back, handleCodeInApp: true }); }
    catch (e) {
      if (['auth/unauthorized-continue-uri', 'auth/invalid-continue-uri', 'auth/missing-continue-uri', 'auth/argument-error'].includes(e.code)) {
        try { await auth.sendPasswordResetEmail(email); } catch (e2) { swallow(e2); }
      } else swallow(e);
    }
    return { to: maskEmail(email), byUsername: !idf.includes('@') };
  }
  function maskEmail(e) {
    const [name, dom] = String(e).split('@');
    if (!dom) return e;
    const shown = name.length <= 2 ? name[0] + '*' : name[0] + '*'.repeat(Math.min(6, name.length - 2)) + name[name.length - 1];
    return shown + '@' + dom;
  }
  async function restore() {
    if (!(await loadSdk())) return null;
    return new Promise((resolve) => {
      const off = auth.onAuthStateChanged((u) => { off(); resolve(u && !u.isAnonymous ? who(u) : null); });   // akaun Multiplayer tanpa nama bukan akaun pengguna
    });
  }
  async function loadProfile() {
    await needSdk();
    const u = auth.currentUser; if (!u) return null;
    const snap = await db.ref('users/' + u.uid + '/p').once('value');
    return snap.val();
  }
  /* Profil paparan (update 13): users/<uid>/prof = { n: nama paparan, nt: masa tukar nama, pic: gambar (data URL kecil), av: id avatar sedia ada } */
  async function loadProf() {
    await needSdk();
    const u = auth.currentUser; if (!u) return null;
    try { const snap = await db.ref('users/' + u.uid + '/prof').once('value'); return snap.val() || {}; } catch (_) { return {}; }
  }
  async function saveProf(patch) {
    await needSdk();
    const u = auth.currentUser; if (!u) throw fail('pq/login');
    const out = { ...patch };
    if ('n' in out) out.nt = TS();
    await db.ref('users/' + u.uid + '/prof').update(out);
    if ('n' in out) { try { await db.ref('signups/' + u.uid).update({ n: out.n }); } catch (_) {} }   // senarai admin (perlu peraturan baharu)
    const snap = await db.ref('users/' + u.uid + '/prof').once('value');
    return snap.val() || {};
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
  window.PyQuestAuth = { configured, MIN_PASS, NAME_RE, EMAIL_RE, loadSdk, signUp, logIn, forgot, logOut, restore, loadProfile, saveProfile, flush, subscribeSignups, loadProf, saveProf };
})();
