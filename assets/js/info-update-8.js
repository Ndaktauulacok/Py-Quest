/* PyQuest — halaman Info (update 8): bar sisi kiri dengan "Tentang PyQuest" + Nota Python penuh (18 bab).
   Kandungan nota ada dalam data/notes-update-8.js. Dipaparkan oleh app-update-8.js. */
(() => {
  'use strict';
  const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const hl = (c) => (window.PyQuestHighlight ? window.PyQuestHighlight(c) : esc(c));
  const NOTES = () => (Array.isArray(window.PYQUEST_NOTES) ? window.PYQUEST_NOTES : []);
  const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch (_) { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} } };

  let current = store.get('pyquest-info-sec', 'why');
  let done = new Set(store.get('pyquest-notes-done', []));
  let sideOpen = false;

  const L = {
    en: {
      title: 'Info & Python Notes', lead: 'Read why PyQuest was made, then study Python chapter by chapter before you play.',
      about: 'About PyQuest', notes: 'Python Notes', contents: 'Contents', chapter: 'Chapter', of: 'of', read: 'chapters read',
      why: 'Why PyQuest', howLabel: 'How PyQuest works', output: 'Output', tip: 'Tip', check: 'Check yourself', reveal: 'Show answer',
      markDone: 'Mark as read', isDone: 'Read ✓', prev: 'Previous', next: 'Next', practice: 'Practise this in the Game', practiceLvl: '{mode} · {lvl} level',
      quiz: 'Quiz Battle', puzzle: 'Bug Hunt', lvl: { easy: 'Easy', normal: 'Normal', medium: 'Medium', hard: 'Hard' }, startNotes: 'Start the Python notes →',
      whyTitle: 'Why PyQuest was made',
      whyP: [
        'PyQuest is made for students, children and teenagers aged 17 and under who are taking their first steps in Python.',
        'Many young learners think coding is difficult, plain and boring, so they usually only practise when a teacher asks them to. PyQuest wants to change that. Learning Python should feel like playing a game.',
        'That is why everything here is colourful and playful. You can pick a theme, cheer on a snake superhero, climb the ranks, unlock badges, battle bug monsters, hunt for treasure and challenge friends in Multiplayer rooms.',
        'Our biggest hope is simple: students open PyQuest on their own, at home too, because they WANT to learn, not only because they have to.'],
      goalsTitle: 'Our goals',
      goals: ['Make Python fun and colourful so students want to learn by themselves.', 'Let every student learn at their own level: Easy, Normal, Medium or Hard.', 'Train students to read code and spot bugs before writing their own programs.', 'Give instant feedback with a short explanation after every answer, in Bahasa Melayu or English.', 'Provide complete Python notes so students can study first and then practise in the games.', 'Help teachers run exciting class activities with live Multiplayer rooms.'],
      forTitle: 'Who is PyQuest for?',
      forWho: [['Students (17 and under)', 'Learn Python through short games, at school or at home, at your own pace.'], ['Teachers', 'Use the notes in class, then run a live Multiplayer quiz where you control each question.'], ['Parents', 'A safe, free and ad-free place for children to practise coding in two languages.']],
      howTitle: 'How PyQuest works',
      how: [['Python Notes', '18 chapters from your first print() to functions and errors. Every example shows its real output. Study a chapter, then practise it in the Game.'], ['Game', 'Open Game and use the sidebar to choose Quiz Battle or Bug Hunt (Puzzle) and a level: Easy, Normal, Medium or Hard. Every round has 10 random questions.'], ['Quiz Battle', '332 questions. Each right answer hits the bug monster. You have 5 hearts and one 50/50 power-up per round. Get all 10 right for a +50 XP bonus.'], ['Bug Hunt', '200 code puzzles. Decide if the code runs fine or has a bug, then read why. The Shield power-up blocks one mistake.'], ['Multiplayer', 'One person creates a room and gets a 6-letter code. Friends type the code to join. The host either controls each question (teacher mode) or lets everyone play at their own pace.'], ['XP, ranks and themes', 'Right answers give Easy +10, Normal +15, Medium +20 or Hard +25 XP. Climb 6 ranks. The Pirate theme goes from Python Crew to Python Pirate King, and the Cyberpunk theme has robot ranks.'], ['Your data', 'With an account, your XP and badges are saved online. Guest progress disappears when you leave. Theme, language and the chapters you have read are remembered in your browser.']],
      privacyTitle: 'Privacy',
      privacy: 'Signing up needs only a username and password (email is optional, just for password reset). Passwords are kept securely by Firebase and never shown to anyone. Multiplayer rooms only store a nickname and score, and visit statistics are anonymous counts.',
    },
    ms: {
      title: 'Info & Nota Python', lead: 'Baca kenapa PyQuest dibuat, kemudian belajar Python bab demi bab sebelum bermain.',
      about: 'Tentang PyQuest', notes: 'Nota Python', contents: 'Kandungan', chapter: 'Bab', of: 'daripada', read: 'bab dibaca',
      why: 'Kenapa PyQuest', howLabel: 'Cara PyQuest berfungsi', output: 'Output', tip: 'Tip', check: 'Uji diri', reveal: 'Tunjuk jawapan',
      markDone: 'Tanda sudah baca', isDone: 'Sudah baca ✓', prev: 'Sebelum', next: 'Seterusnya', practice: 'Latih bab ini dalam Game', practiceLvl: '{mode} · tahap {lvl}',
      quiz: 'Pertempuran Kuiz', puzzle: 'Buru Bug', lvl: { easy: 'Easy', normal: 'Normal', medium: 'Medium', hard: 'Hard' }, startNotes: 'Mula baca Nota Python →',
      whyTitle: 'Kenapa PyQuest dibuat',
      whyP: [
        'PyQuest dibina khas untuk pelajar, kanak-kanak dan remaja berumur 17 tahun ke bawah yang baru mula belajar Python.',
        'Ramai pelajar muda menganggap coding susah, kaku dan membosankan, jadi mereka biasanya hanya berlatih apabila disuruh oleh guru. PyQuest mahu mengubah perkara itu. Belajar Python sepatutnya terasa seperti bermain game.',
        'Sebab itu semua di sini berwarna-warni dan menyeronokkan. Anda boleh memilih tema, bersama wira ular adiwira, naik pangkat, membuka lencana, melawan raksasa bug, memburu harta karun dan mencabar kawan dalam bilik Multiplayer.',
        'Harapan terbesar kami mudah sahaja: pelajar membuka PyQuest sendiri, termasuk di rumah, kerana mereka MAHU belajar, bukan hanya kerana disuruh.'],
      goalsTitle: 'Matlamat kami',
      goals: ['Menjadikan Python seronok dan berwarna-warni supaya pelajar mahu belajar sendiri.', 'Membolehkan setiap pelajar belajar mengikut tahap masing-masing: Easy, Normal, Medium atau Hard.', 'Melatih pelajar membaca kod dan mengesan bug sebelum menulis atur cara sendiri.', 'Memberi maklum balas segera dengan penerangan ringkas selepas setiap jawapan, dalam Bahasa Melayu atau English.', 'Menyediakan nota Python yang lengkap supaya pelajar boleh belajar dahulu, kemudian berlatih dalam game.', 'Membantu guru menjalankan aktiviti kelas yang menarik melalui bilik Multiplayer secara langsung.'],
      forTitle: 'PyQuest untuk siapa?',
      forWho: [['Pelajar (17 tahun ke bawah)', 'Belajar Python melalui game pendek, di sekolah atau di rumah, mengikut kadar sendiri.'], ['Guru', 'Guna nota semasa kelas, kemudian jalankan kuiz Multiplayer secara langsung di mana guru mengawal setiap soalan.'], ['Ibu bapa', 'Tempat yang selamat, percuma dan tanpa iklan untuk anak-anak berlatih coding dalam dua bahasa.']],
      howTitle: 'Cara PyQuest berfungsi',
      how: [['Nota Python', '18 bab dari print() pertama hingga fungsi dan ralat. Setiap contoh menunjukkan output sebenar. Baca satu bab, kemudian latih dalam Game.'], ['Game', 'Buka Game dan guna bar sisi untuk memilih Pertempuran Kuiz atau Buru Bug (Puzzle) serta tahap: Easy, Normal, Medium atau Hard. Setiap pusingan ada 10 soalan rawak.'], ['Pertempuran Kuiz', '332 soalan. Setiap jawapan betul menyerang raksasa bug. Anda ada 5 nyawa dan satu kuasa 50/50 setiap pusingan. Betul kesemua 10 soalan untuk bonus +50 XP.'], ['Buru Bug', '200 puzzle kod. Tentukan sama ada kod berjalan lancar atau ada bug, kemudian baca sebabnya. Kuasa Perisai menahan satu kesilapan.'], ['Multiplayer', 'Seorang mencipta bilik dan mendapat kod 6 aksara. Kawan-kawan menaip kod itu untuk masuk. Hos sama ada mengawal setiap soalan (mod guru) atau membiarkan semua bermain mengikut kadar sendiri.'], ['XP, pangkat dan tema', 'Jawapan betul memberi Easy +10, Normal +15, Medium +20 atau Hard +25 XP. Naik 6 pangkat. Tema Lanun bermula dari Python Crew hingga Python Pirate King, dan tema Cyberpunk ada pangkat robot.'], ['Data anda', 'Dengan akaun, XP dan lencana disimpan dalam talian. Kemajuan Tetamu hilang apabila anda keluar. Tema, bahasa dan bab yang sudah dibaca diingati dalam pelayar anda.']],
      privacyTitle: 'Privasi',
      privacy: 'Pendaftaran hanya memerlukan nama pengguna dan kata laluan (emel adalah pilihan, untuk tetapan semula kata laluan). Kata laluan disimpan dengan selamat oleh Firebase dan tidak dipaparkan kepada sesiapa. Bilik Multiplayer hanya menyimpan nama panggilan dan markah, dan statistik lawatan hanyalah kiraan tanpa nama.',
    },
  };

  function sections() { return ['why', 'how'].concat(NOTES().map((n) => n.id)); }
  function go(id) { if (sections().includes(id)) { current = id; store.set('pyquest-info-sec', id); } sideOpen = false; }
  function toggleDone(id) { if (done.has(id)) done.delete(id); else done.add(id); store.set('pyquest-notes-done', [...done]); }
  function toggleSide() { sideOpen = !sideOpen; }

  function sidebar(T, k) {
    const notes = NOTES();
    const n = notes.filter((x) => done.has(x.id)).length;
    const item = (id, label, num) => `<button type="button" class="is-item${current === id ? ' active' : ''}${done.has(id) ? ' done' : ''}" data-info-go="${id}">${num !== undefined ? `<span class="is-num">${done.has(id) ? '✓' : num}</span>` : '<span class="is-num is-dot">★</span>'}<span class="is-label">${esc(label)}</span></button>`;
    const idx = notes.findIndex((x) => x.id === current);
    const curLabel = idx >= 0 ? `${T.chapter} ${idx + 1}: ${notes[idx].title[k]}` : (current === 'how' ? T.howLabel : T.why);
    return `<aside class="info-side card${sideOpen ? ' open' : ''}"><button type="button" class="is-toggle" data-info-toggle aria-expanded="${sideOpen}"><span>☰ ${esc(T.contents)}</span><b>${esc(curLabel)}</b></button>
      <div class="is-body"><h3>${esc(T.about)}</h3>${item('why', T.why)}${item('how', T.howLabel)}
      <h3>${esc(T.notes)}</h3><div class="is-progress"><div class="xp-track"><i style="width:${notes.length ? Math.round(100 * n / notes.length) : 0}%"></i></div><small>${n}/${notes.length} ${esc(T.read)}</small></div>
      ${notes.map((x, i) => item(x.id, x.title[k], i + 1)).join('')}</div></aside>`;
  }
  function aboutWhy(T) {
    return `<article class="card info-card info-why"><div class="why-head"><div class="why-art">${window.PyQuestArt ? window.PyQuestArt.hero('no-bg') : ''}</div><div><h2>${esc(T.whyTitle)}</h2>${T.whyP.map((p) => `<p>${esc(p)}</p>`).join('')}</div></div>
      <h3>${esc(T.goalsTitle)}</h3><ul class="goal-list">${T.goals.map((g, i) => `<li><span class="g-n">${i + 1}</span>${esc(g)}</li>`).join('')}</ul>
      <h3>${esc(T.forTitle)}</h3><div class="info-grid who-grid">${T.forWho.map(([a, b]) => `<div class="info-tile"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join('')}</div>
      <div class="note-nav"><span></span><button type="button" class="btn btn-primary" data-info-go="${NOTES()[0] ? NOTES()[0].id : 'how'}">${esc(T.startNotes)}</button></div></article>`;
  }
  function aboutHow(T) {
    return `<article class="card info-card"><h2>${esc(T.howTitle)}</h2><div class="info-grid">${T.how.map(([a, b]) => `<div class="info-tile"><h3>${esc(a)}</h3><p>${esc(b)}</p></div>`).join('')}</div><h3>${esc(T.privacyTitle)}</h3><p>${esc(T.privacy)}</p></article>`;
  }
  function outBox(out) {
    if (!out) return '';
    const isErr = /^[A-Za-z]*Error: /m.test(out);
    return `<div class="note-out${isErr ? ' err' : ''}"><span>${isErr ? '⚠ ' : '▶ '}Output</span><pre>${esc(out)}</pre></div>`;
  }
  function chapter(T, k, n, idx, total) {
    const prev = idx > 0 ? NOTES()[idx - 1] : null, next = idx < total - 1 ? NOTES()[idx + 1] : null;
    const blocks = n.blocks.map((b) => `<section class="note-block"><h3>${esc(b.h[k])}</h3><p>${esc(b.p[k])}</p>${b.code ? `<pre class="q-code"><code>${hl(b.code)}</code></pre>${outBox(b.out)}` : ''}</section>`).join('');
    const c = n.check;
    return `<article class="card info-card note-card"><div class="note-head"><span class="note-chip">${esc(T.chapter)} ${idx + 1} ${esc(T.of)} ${total}</span>${done.has(n.id) ? `<span class="note-chip ok">${esc(T.isDone)}</span>` : ''}</div>
      <h2 class="note-title">${esc(n.title[k])}</h2><p class="note-intro">${esc(n.intro[k])}</p>${blocks}
      <div class="note-tip"><span class="tip-ic">💡</span><div><b>${esc(T.tip)}</b><p>${esc(n.tip[k])}</p></div></div>
      <details class="note-check"><summary><b>${esc(T.check)}:</b> ${esc(c.q[k])}</summary>${c.code ? `<pre class="q-code"><code>${hl(c.code)}</code></pre>` : ''}<div class="check-ans"><b>${esc(T.reveal)}:</b> ${esc(c.a[k])}</div></details>
      <div class="note-practice"><div><b>${esc(T.practice)}</b><small>${esc(T.practiceLvl.replace('{mode}', T[n.mode]).replace('{lvl}', T.lvl[n.level]))}</small></div><button type="button" class="btn btn-accent" data-page="${n.mode}" data-diff="${n.level}">▶ ${esc(T[n.mode])}</button></div>
      <div class="note-nav">${prev ? `<button type="button" class="btn btn-secondary" data-info-go="${prev.id}">← ${esc(T.prev)}</button>` : '<span></span>'}<button type="button" class="btn ${done.has(n.id) ? 'btn-secondary' : 'btn-primary'}" data-info-done="${n.id}">${esc(done.has(n.id) ? T.isDone : T.markDone)}</button>${next ? `<button type="button" class="btn btn-secondary" data-info-go="${next.id}">${esc(T.next)} →</button>` : '<span></span>'}</div></article>`;
  }

  function render(lang) {
    const k = lang === 'ms' ? 'ms' : 'en';
    const T = L[k];
    if (!sections().includes(current)) current = 'why';
    const notes = NOTES();
    const idx = notes.findIndex((x) => x.id === current);
    const body = current === 'why' ? aboutWhy(T) : current === 'how' ? aboutHow(T) : chapter(T, k, notes[idx], idx, notes.length);
    return `<section class="info-page info-v8" id="info-top"><header class="info-hero"><span class="eyebrow">Info</span><h1 class="page-title">${esc(T.title)}</h1><p class="page-subtitle">${esc(T.lead)}</p></header>
      <div class="info-layout">${sidebar(T, k)}<div class="info-main" id="info-main">${body}</div></div></section>`;
  }

  window.PyQuestInfo = { render, go, toggleDone, toggleSide, current: () => current };
})();
