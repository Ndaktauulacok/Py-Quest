/* PyQuest — Pyko, bot pembantu Python (update 19).
   - Menjawab soalan Python & PyQuest (EN / BM) daripada pangkalan pengetahuan data/pyko-kb-update-19.js
   - Menerangkan mesej ralat Python dengan cadangan pembaikan khusus
   - Menjalankan kod pelajar terus dalam pelayar (assets/js/pyko-run-update-19.js), termasuk input()
   - Kuiz pantas daripada bank soalan PyQuest, lawak, senarai topik, butang navigasi ke game / nota
   - Ikut bahasa (EN/BM) dan tema laman secara automatik; sejarah sembang disimpan dalam pelayar. */
(() => {
  'use strict';
  const KB = () => window.PYKO_KB || [];
  const RUN = () => window.PykoRun;
  const LS = 'pyquest-pyko-v1';
  const MAX_MSGS = 60;
  const lang = () => (document.documentElement.lang === 'ms' ? 'ms' : 'en');

  /* ------------------------------ teks antara muka ------------------------------ */
  const UI = {
    en: {
      ask: 'Ask Pyko', title: 'Pyko', sub: 'Python helper · online', placeholder: 'Ask about Python or paste code / an error…', codePh: 'Paste or type Python code, then press ▶ Run', send: 'Send', run: 'Run', runAgain: 'Run again', copy: 'Copy', copied: 'Copied!', edit: 'Edit',
      clear: 'Clear chat', clearQ: 'Clear the whole chat?', close: 'Close', codeMode: 'Code box', typing: 'Pyko is typing…', output: 'Output', noOutput: '(no output: the code ran but printed nothing)',
      inputsLabel: 'This code uses input(). Type the answers, one per line:', inputsMore: 'The code asked for more input. Add more answers (one per line):', runWith: 'Run with these answers',
      errTitle: 'Python found an error', lineShort: 'line', fixTip: 'How to fix it', readNotes: 'Read notes', related: 'Related', moreHelp: 'More about this error',
      welcome: 'Hi! I am **Pyko** 🐍, your Python helper. Ask me anything about Python or PyQuest, in English or Bahasa Melayu. You can also paste an **error message** or **code** and I will explain or run it!',
      fallback: 'Hmm, I am not sure about that one. 🤔 Try using a key word (like "list", "loop", "function", "error"), or pick a topic below. You can also paste code or an error message.',
      maybe: 'Did you mean:', youMean: 'I think you are asking about:',
      chips: ['What is a variable?', 'How do for loops work?', 'Quiz me!', 'Show topics', 'How do I earn coins?'],
      chipRun: 'Run my code', chipScreen: 'Explain the code on screen', chipJoke: 'Tell me a joke', chipErr: 'Explain an error',
      quizQ: 'Quiz time! 🧠', quizRight: 'Correct! 🎉', quizWrong: 'Not quite!', quizAns: 'The answer is', quizNext: 'Another question', quizLvl: 'Level',
      topicsTitle: 'Everything I can help with:', jokeMore: 'Another joke',
      screenNone: 'I cannot see any code on the screen right now. Open a game or the Python Notes, or paste the code here.', screenWait: 'Answer the question first, then I will explain the code! 😉', screenIntro: 'Here is the code on your screen. Press ▶ Run to see what it does:',
      outputQ: 'Let me run that for you:', busyGame: 'Finish or leave your current round first, then try again.',
      explainIntro: 'This code uses:', unsupported: 'My mini runner cannot run this part yet', why: 'why',
      unsup: {
        'class': 'classes', 'with': 'the with statement (files)', files: 'files', 'too-long': 'The code ran for too long and I stopped it. Is there an infinite loop? Check that your while condition can become False.', 'too-much-output': 'The code printed too much, so I stopped it. Is there an infinite loop?',
        'huge-number': 'numbers this huge', 'range-too-big': 'a range this big', eval: 'eval / exec', exit: 'exit()', bytes: 'bytes', 'complex-numbers': 'complex numbers', walrus: 'the := operator', generic: 'this feature',
        module: 'The module "{m}" needs a full Python installation (IDLE or Thonny). My runner supports math, random, time and string.',
      },
      nav: { home: 'Open Home', game: 'Open games', multi: 'Open Multiplayer', profile: 'Open profile', info: 'Open Info & Notes', theme: 'Change theme', pet: 'My python pet', quiz: 'Play Quiz Battle', puzzle: 'Play Bug Hunt', bug: 'Play Debug Detective', vault: 'Play Code Vault', race: 'Play Turbo Race', shoot: 'Play Galaxy Defender', avatar: 'Open Skin Shop' },
      tips: {},
    },
    ms: {
      ask: 'Tanya Pyko', title: 'Pyko', sub: 'Pembantu Python · dalam talian', placeholder: 'Tanya tentang Python atau tampal kod / ralat…', codePh: 'Tampal atau taip kod Python, kemudian tekan ▶ Jalankan', send: 'Hantar', run: 'Jalankan', runAgain: 'Jalankan semula', copy: 'Salin', copied: 'Disalin!', edit: 'Edit',
      clear: 'Padam sembang', clearQ: 'Padam seluruh sembang?', close: 'Tutup', codeMode: 'Kotak kod', typing: 'Pyko sedang menaip…', output: 'Output', noOutput: '(tiada output: kod berjalan tetapi tidak mencetak apa-apa)',
      inputsLabel: 'Kod ini guna input(). Taip jawapan, satu setiap baris:', inputsMore: 'Kod meminta lebih banyak input. Tambah jawapan (satu setiap baris):', runWith: 'Jalankan dengan jawapan ini',
      errTitle: 'Python menjumpai ralat', lineShort: 'baris', fixTip: 'Cara membetulkannya', readNotes: 'Baca nota', related: 'Berkaitan', moreHelp: 'Lagi tentang ralat ini',
      welcome: 'Hai! Saya **Pyko** 🐍, pembantu Python anda. Tanya apa sahaja tentang Python atau PyQuest, dalam English atau Bahasa Melayu. Anda juga boleh tampal **mesej ralat** atau **kod** dan saya akan terangkan atau jalankannya!',
      fallback: 'Hmm, saya kurang pasti tentang itu. 🤔 Cuba guna kata kunci (seperti "list", "gelung", "fungsi", "ralat"), atau pilih topik di bawah. Anda juga boleh tampal kod atau mesej ralat.',
      maybe: 'Adakah maksud anda:', youMean: 'Saya rasa anda bertanya tentang:',
      chips: ['Apa itu pemboleh ubah?', 'Bagaimana gelung for berfungsi?', 'Beri saya kuiz!', 'Tunjuk topik', 'Bagaimana dapat syiling?'],
      chipRun: 'Jalankan kod saya', chipScreen: 'Terangkan kod di skrin', chipJoke: 'Ceritakan lawak', chipErr: 'Terangkan ralat',
      quizQ: 'Masa kuiz! 🧠', quizRight: 'Betul! 🎉', quizWrong: 'Belum tepat!', quizAns: 'Jawapannya ialah', quizNext: 'Soalan lain', quizLvl: 'Tahap',
      topicsTitle: 'Semua perkara yang saya boleh bantu:', jokeMore: 'Lawak lain',
      screenNone: 'Saya tidak nampak sebarang kod di skrin sekarang. Buka game atau Nota Python, atau tampal kod di sini.', screenWait: 'Jawab soalan dahulu, kemudian saya akan terangkan kodnya! 😉', screenIntro: 'Ini kod di skrin anda. Tekan ▶ Jalankan untuk melihat apa yang ia lakukan:',
      outputQ: 'Biar saya jalankan untuk anda:', busyGame: 'Habiskan atau keluar dari pusingan semasa dahulu, kemudian cuba lagi.',
      explainIntro: 'Kod ini menggunakan:', unsupported: 'Penjalan mini saya belum boleh menjalankan bahagian ini', why: 'kenapa',
      unsup: {
        'class': 'kelas', 'with': 'pernyataan with (fail)', files: 'fail', 'too-long': 'Kod berjalan terlalu lama dan saya menghentikannya. Adakah ada gelung tanpa henti? Pastikan syarat while boleh menjadi False.', 'too-much-output': 'Kod mencetak terlalu banyak, jadi saya menghentikannya. Adakah ada gelung tanpa henti?',
        'huge-number': 'nombor sebesar ini', 'range-too-big': 'range sebesar ini', eval: 'eval / exec', exit: 'exit()', bytes: 'bytes', 'complex-numbers': 'nombor kompleks', walrus: 'operator :=', generic: 'ciri ini',
        module: 'Modul "{m}" memerlukan pemasangan Python penuh (IDLE atau Thonny). Penjalan saya menyokong math, random, time dan string.',
      },
      nav: { home: 'Buka Utama', game: 'Buka game', multi: 'Buka Multiplayer', profile: 'Buka profil', info: 'Buka Info & Nota', theme: 'Tukar tema', pet: 'Python saya', quiz: 'Main Pertempuran Kuiz', puzzle: 'Main Buru Bug', bug: 'Main Detektif Debug', vault: 'Main Peti Besi Kod', race: 'Main Lumba Turbo', shoot: 'Main Wira Galaksi', avatar: 'Buka Kedai Skin' },
      tips: {},
    },
  };
  const tr = (k, vals) => { let s = UI[lang()][k] ?? UI.en[k] ?? k; if (typeof s === 'string' && vals) s = s.replace(/\{(\w+)\}/g, (_, n) => vals[n] ?? ''); return s; };

  /* ------------------------------ alat ------------------------------ */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  /* Markdown ringkas: **tebal**, *condong*, `kod`, • senarai, 1. bernombor */
  function md(text) {
    const lines = String(text || '').split('\n');
    let html = '', list = null;
    const inline = (s) => esc(s)
      .replace(/`([^`]+)`/g, (_, c) => '<code>' + c + '</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[\s(])\*([^*\s][^*]*)\*(?=[\s).,!?:]|$)/g, '$1<i>$2</i>');
    const close = () => { if (list) { html += '</' + list + '>'; list = null; } };
    for (const ln of lines) {
      const b = /^\s*•\s+(.*)$/.exec(ln), n = /^\s*(\d+)\.\s+(.*)$/.exec(ln);
      if (b) { if (list !== 'ul') { close(); html += '<ul>'; list = 'ul'; } html += '<li>' + inline(b[1]) + '</li>'; }
      else if (n) { if (list !== 'ol') { close(); html += '<ol>'; list = 'ol'; } html += '<li>' + inline(n[2]) + '</li>'; }
      else { close(); if (ln.trim()) html += '<p>' + inline(ln) + '</p>'; }
    }
    close();
    return html;
  }
  /* Penyerlah sintaks Python ringkas. */
  const PYKW = new Set(['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']);
  const PYBI = new Set(['print', 'input', 'len', 'range', 'int', 'float', 'str', 'bool', 'list', 'dict', 'set', 'tuple', 'type', 'abs', 'round', 'max', 'min', 'sum', 'sorted', 'enumerate', 'zip', 'map', 'filter', 'isinstance', 'super', 'open']);
  function hl(code) {
    const re = /(#[^\n]*)|([fFrR]?(?:"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?))|(\b\d+(?:\.\d+)?\b)|([A-Za-z_]\w*)/g;
    let out = '', last = 0, m;
    while ((m = re.exec(code))) {
      out += esc(code.slice(last, m.index));
      if (m[1]) out += '<span class="pk-c">' + esc(m[1]) + '</span>';
      else if (m[2]) out += '<span class="pk-s">' + esc(m[2]) + '</span>';
      else if (m[3]) out += '<span class="pk-n">' + esc(m[3]) + '</span>';
      else if (PYKW.has(m[4])) out += '<span class="pk-k">' + m[4] + '</span>';
      else if (PYBI.has(m[4])) out += '<span class="pk-b">' + m[4] + '</span>';
      else out += esc(m[4]);
      last = re.lastIndex;
    }
    return out + esc(code.slice(last));
  }

  /* ------------------------------ padanan soalan ------------------------------ */
  const STOP = new Set(('a an the is are am was be do does did i you me my your it its this that these those to of in on for with what whats how why when where which who can could should would will please pls tell explain about show give know want need use using make get help me ' +
    'apa apakah itu ini ialah adalah bagaimana macam mana camne cemana kenapa mengapa bila di ke dari dan atau yang untuk dengan saya aku awak kamu anda nak hendak mahu boleh tolong terangkan beritahu tunjuk cara guna menggunakan buat tentang pasal sikit sedikit ke tak tidak ada adakah kah lah je ja tu ni nya kepada pada sahaja jer sangat lagi mcm camana gimana utk dgn yg nk dah sudah akan sini situ punya kita kami dia satu sekarang now just very really so some any there their them they then than also too ok okay')
    .split(/\s+/));
  /* Sinonim BM → EN supaya soalan BM sepadan dengan kata kunci EN (dan sebaliknya). */
  const SYN = {
    gelung: 'loop', ulang: 'loop', ulangan: 'loop', pengulangan: 'loop', senarai: 'list', fungsi: 'function', pembolehubah: 'variable', variabel: 'variable', ralat: 'error', kesilapan: 'error', silap: 'error',
    kamus: 'dictionary', rentetan: 'string', teks: 'string', syarat: 'if', jika: 'if', kalau: 'if', cetak: 'print', papar: 'print', nombor: 'number', perpuluhan: 'float', bulat: 'int', integer: 'int', baki: 'modulo',
    tambah: 'add', tolak: 'subtract', darab: 'multiply', bahagi: 'divide', modul: 'module', pustaka: 'library', kelas: 'class', objek: 'object', fail: 'file', masukkan: 'input', input: 'input',
    susun: 'sort', susunan: 'sort', rawak: 'random', kuasa: 'power', indeks: 'index', hirisan: 'slicing', potong: 'slice', jenis: 'type', tukar: 'convert', benar: 'true', palsu: 'false', kosong: 'empty',
    syiling: 'coins', duit: 'coins', tema: 'theme', pangkat: 'rank', tahap: 'level', akaun: 'account', daftar: 'signup', telur: 'egg', peliharaan: 'pet', bilik: 'room', kawan: 'friends', guru: 'teacher',
    loops: 'loop', lists: 'list', functions: 'function', variables: 'variable', errors: 'error', strings: 'string', dicts: 'dictionary', dict: 'dictionary', modules: 'module', classes: 'class', numbers: 'number',
    looping: 'loop', iterate: 'loop', array: 'list', arrays: 'list', func: 'function', method: 'function', var: 'variable', bug: 'error', bugs: 'error',
  };
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/\s+/g, ' ').trim();
  /* stem ringkas: loops→loop, classes→class, dictionaries→dictionary */
  const stem = (w) => {
    if (w.length <= 3 || !w.endsWith('s') || /(ss|us|is)$/.test(w)) return w;
    if (w.endsWith('sses')) return w.slice(0, -2);
    if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
    return w.slice(0, -1);
  };
  const words = (s) => norm(s).split(/[^a-z0-9_]+/).filter(Boolean);
  const keyw = (w) => stem(SYN[w] || w);
  /* perkataan terlalu umum: sumbangan kecil sahaja */
  const GENERIC = new Set(['python', 'code', 'kod', 'program', 'programming', 'coding', 'pyquest', 'thing', 'benda', 'work', 'way', 'one', 'new', 'baru', 'good', 'best', 'mean', 'maksud']);
  /* perkataan lemah: biasa dalam ayat, jadi sumbangannya kecil */
  const WEAK = new Set(['and', 'or', 'not', 'if', 'in', 'check', 'time', 'number', 'value', 'user', 'word', 'kali', 'item', 'thing', 'all', 'semua', 'other', 'lain', 'same', 'sama', 'first', 'last', 'two', 'dua']);
  let INDEX = null;
  function buildIndex() {
    const kb = KB(); const df = new Map();
    const entries = kb.map((e) => {
      const tags = (e.t || []).map(norm);
      const single = new Map(), phrases = [], symbols = [], vocab = new Set();
      tags.forEach((t, ti) => {
        const primary = ti < 2;
        if (/[^a-z0-9_ ]/.test(t)) symbols.push(t);
        const ws = words(t).map(keyw);
        ws.forEach((w) => vocab.add(w));
        if (ws.length === 1 && /^[a-z0-9_ ]+$/.test(t)) { if (!single.has(ws[0]) || primary) single.set(ws[0], primary || single.get(ws[0])); }
        else if (ws.length > 1) phrases.push({ raw: words(t), ws, ns: ws.filter((w) => !STOP.has(w)), n: new Set(ws.filter((w) => !STOP.has(w))).size || ws.length * 0.8, primary });
      });
      const title = new Set([...words(e.q?.en), ...words(e.q?.ms)].filter((w) => !STOP.has(w)).map(keyw));
      title.forEach((w) => vocab.add(w));
      single.forEach((_, w) => df.set(w, (df.get(w) || 0) + 1));
      return { e, single, phrases, symbols, vocab, title };
    });
    const allSingles = new Set(); entries.forEach((it) => it.single.forEach((_, w) => allSingles.add(w)));
    INDEX = { entries, df, N: entries.length, allSingles };
  }
  function lev1(a, b) { // jarak Levenshtein <= 1 ?
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0, j = 0, diff = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++diff > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++;
      else if (a[i + 1] === b[j] && a[i] === b[j + 1]) { i += 2; j += 2; } // huruf bertukar tempat
      else { i++; j++; }
    }
    return diff + (a.length - i) + (b.length - j) <= 1;
  }
  const seqIn = (hay, ws) => { outer: for (let i = 0; i + ws.length <= hay.length; i++) { for (let k = 0; k < ws.length; k++) if (hay[i + k] !== ws[k]) continue outer; return true; } return false; };
  function match(query) {
    if (!INDEX) buildIndex();
    const raw = norm(query);
    const toks = words(query).map(keyw);                 // semua perkataan (untuk frasa)
    const content = [...new Set(words(query).filter((w) => !STOP.has(w)).map(keyw))];
    // gabung perkataan bersebelahan yang menjadi satu tag ("type error" → typeerror)
    const rw = words(query);
    for (let i = 0; i + 1 < rw.length; i++) { const c = rw[i] + rw[i + 1]; if (c.length >= 6 && INDEX.allSingles.has(c) && !content.includes(c)) content.push(c); }
    const tokSet = new Set(toks);
    const short = content.length <= 3;
    const symToks = new Set(raw.split(/\s+/));
    const allGeneric = content.every((w) => GENERIC.has(w)) && !/[^a-z0-9_\s'"?!.,]/.test(raw);
    const allWeak = content.every((w) => GENERIC.has(w) || WEAK.has(w));
    const wIdf = (w) => { const df = INDEX.df.get(w) || 1; return (1.6 + Math.log(INDEX.N / df) / 2.2) * (GENERIC.has(w) && !allGeneric ? 0.3 : WEAK.has(w) && !allWeak ? 0.4 : 1); };
    const toksNS = toks.filter((w) => !STOP.has(w));
    const scored = [];
    for (const it of INDEX.entries) {
      let s = 0;
      const covered = new Set();
      for (const sym of it.symbols) {
        if (sym.length >= 2 && raw.includes(sym)) { s += 2.8 + Math.min(2.5, sym.length * 0.25); words(sym).map(keyw).forEach((w) => covered.add(w)); }
        else if (sym.length === 1 && short && symToks.has(sym)) s += 3.5;
      }
      for (const ph of it.phrases) {
        if (seqIn(toks, ph.ws) || (ph.ns.length >= 2 && seqIn(toksNS, ph.ns))) {
          if (ph.ns.length >= 2 && seqIn(rw, ph.raw)) s += 2; /* padanan tepat */  s += 3 + 2.8 * ph.n + (ph.primary ? 1 : 0); ph.ws.forEach((w) => covered.add(w)); }
        else if (ph.ws.every((w) => tokSet.has(w) || STOP.has(w)) && ph.ws.some((w) => !STOP.has(w) && tokSet.has(w)) && ph.n >= 2) { s += 1.2 + 0.9 * ph.n; ph.ws.forEach((w) => covered.add(w)); }
      }
      for (const w of content) {
        if (it.single.has(w)) { s += wIdf(w) + (it.single.get(w) ? 0.8 : 0); covered.add(w); }
        else if (w.length >= 4 && !it.vocab.has(w) && !INDEX.allSingles.has(w)) { for (const [t, prim] of it.single) if (t.length >= 4 && t[0] === w[0] && (t.length >= 5 || t.length === w.length) && lev1(w, t)) { s += wIdf(t) * (prim ? 0.85 : 0.6); covered.add(w); break; } }
      }
      if (s <= 0) continue;
      // liputan: lebih banyak perkataan soalan dijelaskan oleh entri → lebih tinggi
      let cov = 0;
      for (const w of content) if (covered.has(w) || it.vocab.has(w)) cov += GENERIC.has(w) || WEAK.has(w) ? 0.25 : 1;
      s += cov * 0.7;
      scored.push({ id: it.e.id, s, small: Boolean(it.e.small), e: it.e });
    }
    scored.sort((a, b) => b.s - a.s);
    const bigQuery = content.length > 3;
    const nonSmall = scored.filter((x) => !x.small), small = scored.filter((x) => x.small);
    let best = null;
    if (small.length && small[0].s >= 3 && (!nonSmall.length || small[0].s >= nonSmall[0].s * (bigQuery ? 1.3 : 0.9))) best = small[0];
    else if (nonSmall.length && nonSmall[0].s >= 2.2) best = nonSmall[0];
    else if (small.length && small[0].s >= 2.2) best = small[0];
    const alts = nonSmall.filter((x) => !best || x.id !== best.id).slice(0, 3).filter((x) => x.s >= 2).map((x) => x.id);
    return { best: best ? best.id : null, score: best ? best.s : 0, alts, top: scored.slice(0, 5).map((x) => x.id + ':' + x.s.toFixed(1)) };
  }

  /* ------------------------------ pengesanan niat ------------------------------ */
  const ERR_RE = /\b([A-Z][A-Za-z]*(?:Error|Exception)|StopIteration|KeyboardInterrupt)\b(?:\s*:\s*([^\n]*))?/;
  function detectError(text) {
    if (!/Error\b|Exception\b|Traceback/.test(text)) return null;
    const lines = text.trim().split('\n');
    let found = null;
    for (let i = lines.length - 1; i >= 0; i--) { const m = ERR_RE.exec(lines[i]); if (m) { found = { type: m[1], msg: (m[2] || '').trim() }; break; } }
    if (!found) return null;
    const ln = /line (\d+)/.exec(text);
    if (ln) found.line = +ln[1];
    return found;
  }
  const CODE_LINE = /^\s*(print\s*\(|for\s+[\w, ]+\s+in\b|while\b.*:\s*$|if\b.*:\s*$|elif\b|else\s*:|def\s+\w+\s*\(|class\s+\w+|import\s+\w+|from\s+\w+\s+import|return\b|try\s*:|except\b|finally\s*:|break\s*$|continue\s*$|pass\s*$|[A-Za-z_]\w*(\[[^\]]*\])?\s*([+\-*/%]|\/\/|\*\*)?=\s*[^=\s]|[A-Za-z_][\w.]*\.\w+\(.*\)\s*$|[A-Za-z_]\w*\(.*\)\s*$|#|"""|''')/;
  function detectCode(text) {
    const fence = /```(?:python|py)?\s*\n?([\s\S]*?)```/i.exec(text);
    if (fence && fence[1].trim()) return fence[1].replace(/\s+$/, '');
    const lines = text.replace(/\r/g, '').split('\n');
    const nonEmpty = lines.filter((l) => l.trim());
    if (!nonEmpty.length) return null;
    const codeLike = nonEmpty.filter((l) => CODE_LINE.test(l) || /^\s{2,}\S/.test(l)).length;
    if (nonEmpty.length >= 2 && codeLike / nonEmpty.length >= 0.6) return text.replace(/\s+$/, '');
    if (nonEmpty.length === 1) {
      const l = nonEmpty[0].trim();
      if (/\?$/.test(l) && !/^print\s*\(/.test(l)) return null;
      const okSyntax = () => !RUN() || !RUN().check(l);
      if (/^(print|input)\s*\(.*\)?$/.test(l)) return l;
      if (/^[A-Za-z_][\w.]*(\[[^\]]*\])?\s*([+\-*/%]|\/\/|\*\*)?=\s*[^=]/.test(l) && !/\s(is|ialah|maksud|means|dan|and|vs)\s/i.test(l) && okSyntax()) return l;
      if (/^(for|while|if|elif|def|class)\b.*:$/.test(l) && !/\?/.test(l)) return l;
      if (/^(for|while|if|def|import|from|class)\b/.test(l) && /[:(=]/.test(l) && okSyntax()) return l;
    }
    return null;
  }
  /* "apa output print(2**3)?" / "what is 7 // 2" → potongan kod untuk dijalankan */
  function detectExpr(text) {
    if (!/\b(output|keluaran|hasil|result|jawapan|answer|what is|what's|apa|berapa|kira|calculate|evaluate|nilai)\b/i.test(text)) return null;
    const call = /\b(print|len|type|int|str|float|round|max|min|sum|sorted|list|range|abs|bool|divmod|pow)\s*\(/.exec(text);
    if (call) {
      let depth = 0, i = call.index + call[0].length - 1, inS = null;
      for (; i < text.length; i++) {
        const c = text[i];
        if (inS) { if (c === inS) inS = null; continue; }
        if (c === '"' || c === "'") { inS = c; continue; }
        if (c === '(') depth++; else if (c === ')') { depth--; if (depth === 0) break; }
      }
      if (depth === 0 && i < text.length) {
        let snip = text.slice(call.index, i + 1);
        while (text[i + 1] === '.' || text[i + 1] === '[') { const m = /^(\.\w+\([^)]*\)|\[[^\]]*\])/.exec(text.slice(i + 1)); if (!m) break; snip += m[0]; i += m[0].length; }
        return call[1] === 'print' ? snip : 'print(' + snip + ')';
      }
    }
    const ex = /(?:^|[\s:=])(-?\(?\s*\d[\d.]*\s*(?:(?:\*\*|\/\/|[+\-*/%])\s*\(?\s*-?\d[\d.]*\s*\)?\s*)+)/.exec(text);
    if (ex && /(\*\*|\/\/|[+\-*/%])/.test(ex[1])) { const e2 = ex[1].trim().replace(/[?.!]+$/, ''); if (!RUN() || RUN().check('print(' + e2 + ')')) return null; return 'print(' + e2 + ')'; }
    const str = /(["'][^"']*["']\s*(?:\*\s*\d+|\+\s*["'][^"']*["'])(?:\s*[+*]\s*(?:\d+|["'][^"']*["']))*)/.exec(text);
    if (str && RUN() && !RUN().check('print(' + str[1] + ')')) return 'print(' + str[1] + ')';
    return null;
  }

  /* ------------------------------ nasihat ralat khusus ------------------------------ */
  function errorTip(err, code) {
    const L = lang(), ms = L === 'ms';
    const t = err.type || '', m = err.msg || '';
    const lineTxt = code && err.line ? (code.split('\n')[err.line - 1] || '').trim() : '';
    const q = (s) => '`' + s + '`';
    let tip = '';
    let mm;
    if (t === 'NameError' && (mm = /name '([^']+)' is not defined/.exec(m))) {
      const nm = mm[1];
      if (err.hint) tip = ms ? `Python tidak kenal ${q(nm)}. Adakah maksud anda ${q(err.hint)}? Semak ejaan dan huruf besar/kecil.` : `Python does not know ${q(nm)}. Did you mean ${q(err.hint)}? Check the spelling and capital letters.`;
      else if (code && new RegExp('print\\(\\s*' + nm + '\\s*\\)').test(code)) tip = ms ? `Jika anda mahu mencetak perkataan ${q(nm)}, letak dalam tanda petik: ${q('print("' + nm + '")')}. Jika ia pemboleh ubah, cipta dahulu: ${q(nm + ' = ...')}.` : `If you want to print the word ${q(nm)}, put it in quotes: ${q('print("' + nm + '")')}. If it is a variable, create it first: ${q(nm + ' = ...')}.`;
      else tip = ms ? `Python tidak kenal ${q(nm)}. Pastikan anda mencipta pemboleh ubah/fungsi ini **sebelum** baris ini, dan ejaannya sama tepat.` : `Python does not know ${q(nm)}. Make sure you create this variable/function **before** this line, with exactly the same spelling.`;
    } else if (t === 'TypeError' && /can only concatenate str \(not "(\w+)"\) to str/.test(m)) {
      tip = ms ? 'Anda menyambung teks dengan nombor menggunakan `+`. Tukar nombor kepada teks dengan `str()`, contoh `"Umur: " + str(umur)`, atau guna f-string: `f"Umur: {umur}"`.' : 'You joined text and a number with `+`. Turn the number into text with `str()`, e.g. `"Age: " + str(age)`, or use an f-string: `f"Age: {age}"`.';
    } else if (t === 'TypeError' && (mm = /unsupported operand type\(s\) for ([^:]+): '(\w+)' and '(\w+)'/.exec(m))) {
      const [, op, a, b] = mm;
      if ((a === 'str' || b === 'str') && (a === 'int' || b === 'int' || a === 'float' || b === 'float')) tip = ms ? `Anda cuba ${q(op)} antara nombor dan teks. Jika teks datang daripada ${q('input()')}, tukar dahulu: ${q('int(input(...))')}.` : `You tried ${q(op)} between a number and text. If the text comes from ${q('input()')}, convert it first: ${q('int(input(...))')}.`;
      else tip = ms ? `${q(op)} tidak boleh digunakan antara ${q(a)} dan ${q(b)}. Semak jenis setiap nilai dengan ${q('type()')}.` : `${q(op)} cannot be used between ${q(a)} and ${q(b)}. Check each value's type with ${q('type()')}.`;
    } else if (t === 'TypeError' && /missing (\d+) required positional argument/.test(m)) {
      tip = ms ? 'Fungsi memerlukan lebih banyak nilai dalam kurungan. Bandingkan bilangan nilai dalam panggilan dengan bilangan parameter dalam `def`.' : 'The function needs more values in the brackets. Compare the number of values in the call with the parameters in the `def` line.';
    } else if (t === 'TypeError' && /takes (\d+) positional argument/.test(m)) {
      tip = ms ? 'Anda menghantar terlalu banyak nilai kepada fungsi. Dalam kelas, ingat parameter pertama kaedah mesti `self`.' : 'You passed too many values to the function. In a class, remember the first parameter of a method must be `self`.';
    } else if (t === 'TypeError' && /object is not callable/.test(m)) {
      tip = ms ? 'Anda meletakkan `( )` selepas sesuatu yang bukan fungsi. Mungkin tertinggal `*` (contoh `2(3)` → `2*(3)`), atau anda menamakan pemboleh ubah sama seperti fungsi (contoh `print = 5`).' : 'You put `( )` after something that is not a function. Maybe a `*` is missing (e.g. `2(3)` → `2*(3)`), or you named a variable the same as a function (e.g. `print = 5`).';
    } else if (t === 'TypeError' && /does not support item assignment/.test(m)) {
      tip = ms ? 'String dan tuple tidak boleh diubah selepas dicipta. Buat yang baharu, contoh `s = "H" + s[1:]`, atau guna list.' : 'Strings and tuples cannot be changed after they are made. Build a new one, e.g. `s = "H" + s[1:]`, or use a list.';
    } else if (t === 'TypeError' && /has no len/.test(m)) {
      tip = ms ? '`len()` hanya untuk string, list, tuple, dict dan set, bukan nombor. Untuk bilangan digit, guna `len(str(n))`.' : '`len()` only works on strings, lists, tuples, dicts and sets, not numbers. For the number of digits use `len(str(n))`.';
    } else if (t === 'ValueError' && (mm = /invalid literal for int\(\) with base 10: (.+)$/.exec(m))) {
      tip = ms ? `Teks ${mm[1]} bukan nombor bulat, jadi ${q('int()')} tidak boleh menukarnya. Untuk perpuluhan guna ${q('float()')}; untuk input pengguna, guna ${q('try/except')} atau ${q('.isdigit()')}.` : `The text ${mm[1]} is not a whole number, so ${q('int()')} cannot convert it. For decimals use ${q('float()')}; for user input, use ${q('try/except')} or ${q('.isdigit()')}.`;
    } else if (t === 'ValueError' && /unpack/.test(m)) {
      tip = ms ? 'Bilangan pemboleh ubah di sebelah kiri `=` mesti sama dengan bilangan nilai di sebelah kanan.' : 'The number of variables on the left of `=` must match the number of values on the right.';
    } else if (t === 'IndexError') {
      tip = ms ? 'Indeks bermula pada **0**, jadi item terakhir ialah `len(x) - 1` (atau `x[-1]`). Semak nilai indeks anda dengan `print()`.' : 'Indexes start at **0**, so the last item is `len(x) - 1` (or `x[-1]`). Check your index value with `print()`.';
    } else if (t === 'KeyError') {
      tip = ms ? `Kunci ${m} tiada dalam dictionary. Semak ejaan, atau guna ${q('d.get(kunci, 0)')} untuk nilai lalai.` : `The key ${m} is not in the dictionary. Check the spelling, or use ${q('d.get(key, 0)')} for a default value.`;
    } else if (t === 'ZeroDivisionError') {
      tip = ms ? 'Pastikan nombor pembahagi bukan 0 sebelum membahagi: `if b != 0:`.' : 'Make sure the number you divide by is not 0 before dividing: `if b != 0:`.';
    } else if (t === 'AttributeError' && (mm = /'(\w+)' object has no attribute '(\w+)'/.exec(m))) {
      const sugg = { str: { append: '+ (join strings)', push: '+', length: 'len(s)', size: 'len(s)', toUpperCase: '.upper()', toLowerCase: '.lower()', contains: '"x" in s', trim: '.strip()' }, list: { push: '.append()', length: 'len(lst)', size: 'len(lst)', add: '.append()', lenght: 'len(lst)', upper: '[s.upper() for s in lst]', split: '(lists cannot be split; join them first)' }, int: { append: '(numbers have no append: use a list)', upper: 'str(n)', length: 'len(str(n))' } }[mm[1]]?.[mm[2]];
      tip = ms ? `Jenis ${q(mm[1])} tiada ${q('.' + mm[2])}.` + (sugg ? ` Cuba ${q(sugg)}.` : ' Semak ejaan dan jenis nilai dengan `type()`.') : `Type ${q(mm[1])} has no ${q('.' + mm[2])}.` + (sugg ? ` Try ${q(sugg)}.` : ' Check the spelling and the value\'s type with `type()`.');
    } else if (t === 'SyntaxError' || t === 'IndentationError') {
      if (/expected ':'/.test(m)) tip = ms ? `Tambah titik bertindih ${q(':')} di hujung baris ${err.line}.` : `Add a colon ${q(':')} at the end of line ${err.line}.`;
      else if (/was never closed/.test(m)) tip = ms ? 'Ada kurungan yang dibuka tetapi tidak ditutup. Kira `(` dan `)` (juga `[ ]` dan `{ }`) pada baris itu.' : 'A bracket was opened but never closed. Count the `(` and `)` (and `[ ]`, `{ }`) on that line.';
      else if (/unmatched|does not match/.test(m)) tip = ms ? 'Ada kurungan penutup berlebihan atau jenis kurungan tidak sepadan.' : 'There is an extra closing bracket, or the bracket types do not match.';
      else if (/unterminated/.test(m)) tip = ms ? 'Tanda petik string tidak ditutup. Pastikan setiap `"` atau `\'` ada pasangannya.' : 'A string quote was not closed. Make sure every `"` or `\'` has a partner.';
      else if (/Missing parentheses in call to 'print'/.test(m)) tip = ms ? 'Dalam Python 3, print perlukan kurungan: `print("hello")`.' : 'In Python 3, print needs brackets: `print("hello")`.';
      else if (/Maybe you meant '=='/.test(m)) tip = ms ? 'Untuk membandingkan, guna `==` (dua tanda sama). Satu `=` hanya untuk menyimpan nilai.' : 'To compare, use `==` (two equals signs). A single `=` only stores a value.';
      else if (/invalid character/.test(m)) tip = ms ? 'Ada aksara pelik (contoh tanda petik melengkung “ ” atau ÷). Taip semula dengan papan kekunci biasa: `"` dan `/`.' : 'There is a strange character (e.g. curly quotes “ ” or ÷). Retype it with normal keyboard keys: `"` and `/`.';
      else if (/expected an indented block/.test(m)) tip = ms ? `Baris selepas ${q(':')} mesti diinden 4 ruang.` : `The line after ${q(':')} must be indented by 4 spaces.`;
      else if (/unexpected indent/.test(m)) tip = ms ? 'Baris ini ada ruang di hadapan yang tidak sepatutnya. Buang ruang itu, atau semak baris sebelumnya (mungkin tertinggal `:`).' : 'This line has spaces in front that should not be there. Remove them, or check the line before (maybe a missing `:`).';
      else if (/unindent/.test(m)) tip = ms ? 'Baris dalam blok yang sama mesti bermula pada kedudukan yang sama. Guna 4 ruang bagi setiap tahap.' : 'Lines in the same block must start at the same position. Use 4 spaces per level.';
      else if (/leading zeros/.test(m)) tip = ms ? 'Nombor tidak boleh bermula dengan 0 (contoh `05`). Tulis `5`.' : 'Numbers cannot start with 0 (like `05`). Write `5`.';
      else if (/outside (loop|function)/.test(m)) tip = ms ? '`break`/`continue` hanya dalam gelung, dan `return` hanya dalam fungsi. Semak inden.' : '`break`/`continue` only work inside a loop, and `return` only inside a function. Check the indentation.';
      else tip = ms ? `Semak baris ${err.line} dan baris sebelumnya: tanda ${q(':')}, kurungan, tanda petik, koma dan ejaan kata kunci.` : `Check line ${err.line} and the line before it: colons ${q(':')}, brackets, quotes, commas and keyword spelling.`;
    } else if (t === 'RecursionError') tip = ms ? 'Pastikan fungsi rekursif ada kes asas yang menghentikannya.' : 'Make sure the recursive function has a base case that stops it.';
    else if (t === 'UnboundLocalError') tip = ms ? 'Tambah `global nama` di bahagian atas fungsi, atau hantar nilai sebagai parameter.' : 'Add `global name` at the top of the function, or pass the value in as a parameter.';
    else if (t === 'ModuleNotFoundError' || t === 'ImportError') tip = ms ? 'Semak ejaan nama modul. Pustaka luar perlu `pip install`.' : 'Check the module name spelling. External libraries need `pip install`.';
    return { tip, lineTxt };
  }

  /* ------------------------------ keadaan & storan ------------------------------ */
  const st = { open: false, msgs: [], code: false, typing: false, draft: '' };
  function load() { try { const v = JSON.parse(localStorage.getItem(LS) || 'null'); if (v && Array.isArray(v.msgs)) st.msgs = v.msgs.slice(-MAX_MSGS); } catch (_) {} }
  function save() { try { localStorage.setItem(LS, JSON.stringify({ msgs: st.msgs.slice(-MAX_MSGS) })); } catch (_) {} }
  let uid = Date.now();
  const add = (m) => { m.k = ++uid; st.msgs.push(m); if (st.msgs.length > MAX_MSGS) st.msgs.splice(0, st.msgs.length - MAX_MSGS); save(); return m; };
  const byK = (k) => st.msgs.find((m) => m.k === Number(k));
  const entry = (id) => KB().find((e) => e.id === id);
  const randInt = (n) => Math.floor(Math.random() * n);

  /* ------------------------------ jawab ------------------------------ */
  function respond(text) {
    const raw = String(text || '').replace(/\s+$/, '');
    if (!raw.trim()) return;
    const asCode = st.code;
    add({ who: 'me', text: raw, code: asCode });
    // 1. kod
    const code = asCode ? raw : detectCode(raw);
    if (code && !(detectError(raw) && !/\n/.test(code))) { botRun(code, true); return; }
    // 2. mesej ralat
    const er = detectError(raw);
    if (er) { add({ who: 'bot', kind: 'error', etype: er.type, emsg: er.msg, line: er.line || 0 }); return; }
    // 3. soalan output pendek
    const ex = /^\s*(why|kenapa|mengapa|how come)\b/i.test(raw) ? null : detectExpr(raw);
    if (ex) { botRun(ex, true, true); return; }
    // 4. pangkalan pengetahuan
    const m = match(raw);
    if (!m.best) { add({ who: 'bot', kind: 'fallback', alts: m.alts }); return; }
    const e = entry(m.best);
    if (e.special === 'quiz') return botQuiz();
    if (e.special === 'topics') { add({ who: 'bot', kind: 'topics' }); return; }
    if (e.special === 'joke') { add({ who: 'bot', kind: 'joke', j: randInt((window.PYKO_JOKES || [1]).length) }); return; }
    add({ who: 'bot', kind: 'entry', id: e.id, alts: m.score < 3.2 ? m.alts.slice(0, 2) : [] });
  }
  function botRun(code, auto, short) {
    const m = add({ who: 'bot', kind: 'run', code, short: Boolean(short) });
    if (auto) execute(m);
    return m;
  }
  function needsInput(code) { return /\binput\s*\(/.test(code); }
  function execute(m, inputsText) {
    const R = RUN(); if (!R) return;
    if (inputsText !== undefined) m.inputs = inputsText;
    if (needsInput(m.code) && m.inputs === undefined) { m.ask = true; m.res = null; save(); return; }
    const inputs = m.inputs ? String(m.inputs).split('\n') : [];
    let res;
    try { res = R.run(m.code, { inputs }); } catch (e) { res = { ok: false, out: '', crash: String(e) }; }
    if (res.needInput) { m.ask = true; m.more = true; } else { m.ask = false; m.more = false; }
    m.res = { ok: res.ok, out: res.out, err: res.err ? { type: res.err.type, msg: res.err.msg, line: res.err.line, hint: res.err.hint } : null, unsupported: res.unsupported || null, needInput: Boolean(res.needInput), crash: res.crash ? true : false };
    save();
  }
  function botQuiz() {
    const bank = (window.PYQUEST_QUESTIONS || []).filter((q) => q && (q.difficulty === 'easy' || q.difficulty === 'normal' || q.difficulty === 'medium') && q.options && q.question);
    if (!bank.length) { add({ who: 'bot', kind: 'fallback', alts: [] }); return; }
    const q = bank[randInt(bank.length)];
    add({ who: 'bot', kind: 'quiz', qid: q.id, pick: -1 });
  }
  function screenCode() {
    const fb = document.querySelector('main .fb-panel');
    const inGame = document.querySelector('main .arena, main .mp-q');
    if (inGame && !fb) return { wait: true };
    let code = '';
    const lines = document.querySelectorAll('main .code-lines .cl code');
    if (lines.length) code = [...lines].map((c) => c.textContent).join('\n');
    if (!code) { const el = document.querySelector('main .q-code code, main .scan-card pre code, main pre.q-code'); if (el) code = el.textContent; }
    if (!code) { const n = document.querySelector('main .note-block .q-code code'); if (n) code = n.textContent; }
    if (!code) {
      const target = document.querySelector('main .target-box code');
      const exprs = [...document.querySelectorAll('main .alien .al-expr')].map((e) => e.textContent);
      if (target && exprs.length) code = exprs.map((x) => 'print(' + x + ')').join('\n');
    }
    code = code.replace(/ /g, ' ');
    if (!code.trim()) return { none: true };
    if (/___/.test(code)) {
      const right = document.querySelector('main .gear.right code');
      if (right) code = code.replace('___', right.textContent); else return { wait: true };
    }
    return { code: code.replace(/\s+$/, '') };
  }

  /* ------------------------------ paparan mesej ------------------------------ */
  const NAV_LABEL = (a) => { const N = UI[lang()].nav; if (a.theme) return '🎨 ' + N.theme; if (a.pet) return '🥚 ' + N.pet; if (a.page === 'game' && a.mode) return '🎮 ' + N[a.mode]; if (a.page === 'profile' && a.pv === 'avatar') return '🛍️ ' + N.avatar; if (a.page === 'info' && a.info) return '📖 ' + noteTitle(a.info); return { home: '🏠 ', game: '🎮 ', multi: '👥 ', profile: '👤 ', info: '📖 ' }[a.page] + N[a.page]; };
  const noteTitle = (id) => { const n = (window.PYQUEST_NOTES || []).find((x) => x.id === id); return n ? (n.title[lang()] || n.title.en) : tr('readNotes'); };
  function codeBlock(m, opts = {}) {
    const L = UI[lang()];
    let html = `<div class="pk-code"><pre><code>${hl(m.code)}</code></pre><div class="pk-code-bar"><button type="button" class="pk-run" data-pk="run" data-k="${m.k}">▶ ${m.res ? L.runAgain : L.run}</button><button type="button" data-pk="copy" data-k="${m.k}">${L.copy}</button><button type="button" data-pk="edit" data-k="${m.k}">${L.edit}</button></div>`;
    if (m.ask) html += `<div class="pk-inputs"><label>${m.more ? L.inputsMore : L.inputsLabel}</label><textarea rows="3" data-pk-in="${m.k}" spellcheck="false">${esc(m.inputs || '')}</textarea><button type="button" class="pk-run" data-pk="runin" data-k="${m.k}">▶ ${L.runWith}</button></div>`;
    if (m.res && !m.ask) html += resultBlock(m);
    return html + '</div>';
  }
  function resultBlock(m) {
    const L = UI[lang()], r = m.res;
    let html = '<div class="pk-out' + (r.err ? ' bad' : r.unsupported ? ' warn' : ' good') + '"><small>' + L.output + '</small>';
    if (r.out) html += '<pre>' + esc(r.out) + '</pre>';
    if (r.err) html += '<pre class="pk-tb">' + esc(RUN().traceback(r.err)) + '</pre>';
    if (!r.out && !r.err && !r.unsupported && r.ok) html += '<p class="pk-muted">' + L.noOutput + '</p>';
    if (r.unsupported) {
      const w = r.unsupported.what || 'generic';
      let msg;
      if (w.startsWith('module:')) msg = tr('unsup').module.replace('{m}', w.slice(7));
      else if (w === 'too-long' || w === 'too-much-output') msg = L.unsup[w];
      else msg = L.unsupported + ': ' + (L.unsup[w] || L.unsup.generic) + (r.unsupported.line ? ' (' + L.lineShort + ' ' + r.unsupported.line + ')' : '') + '.';
      html += '<p class="pk-note">⚠️ ' + esc(msg) + '</p>';
    }
    html += '</div>';
    if (r.err) html += errorBlock(r.err, m.code);
    return html;
  }
  function errorBlock(err, code) {
    const L = UI[lang()];
    const e = entry('err_' + err.type) || entry('errors');
    const { tip, lineTxt } = errorTip(err, code);
    let html = '<div class="pk-err">';
    html += '<b class="pk-err-h">🐞 ' + esc(err.type) + (err.line ? ' · ' + L.lineShort + ' ' + err.line : '') + '</b>';
    if (lineTxt) html += '<pre class="pk-line"><code>' + hl(lineTxt) + '</code></pre>';
    if (tip) html += '<div class="pk-tip"><small>💡 ' + L.fixTip + '</small>' + md(tip) + '</div>';
    if (e) html += `<button type="button" class="pk-chip" data-pk="topic" data-id="${e.id}">📘 ${L.moreHelp}</button>`;
    return html + '</div>';
  }
  function entryBlock(e, m) {
    const L = lang();
    let html = `<h4>${esc(e.q[L] || e.q.en)}</h4>` + md(e.a[L] || e.a.en);
    if (e.code) {
      let cm = m.ex;
      if (!cm || cm.code !== e.code) { cm = m.ex = { k: m.k, code: e.code, inputs: e.inputs ? e.inputs.join('\n') : undefined }; }
      html += codeBlock(cm);
    }
    const acts = [];
    if (e.note) acts.push(`<button type="button" class="pk-act" data-pk="nav" data-nav='${esc(JSON.stringify({ page: 'info', info: e.note }))}'>📖 ${esc(noteTitle(e.note))}</button>`);
    for (const a of e.act || []) acts.push(`<button type="button" class="pk-act" data-pk="nav" data-nav='${esc(JSON.stringify(a))}'>${esc(NAV_LABEL(a))}</button>`);
    if (acts.length) html += '<div class="pk-acts">' + acts.join('') + '</div>';
    const see = (e.see || []).map(entry).filter(Boolean);
    if (see.length) html += `<div class="pk-see"><small>${UI[L].related}:</small>${see.map((s) => `<button type="button" class="pk-chip" data-pk="topic" data-id="${s.id}">${esc(s.q[L] || s.q.en)}</button>`).join('')}</div>`;
    return html;
  }
  function renderMsg(m) {
    const L = lang(), U = UI[L];
    if (m.who === 'me') return `<div class="pk-msg me"><div class="pk-bub">${m.code || /\n/.test(m.text) && detectCode(m.text) ? '<pre><code>' + hl(m.text) + '</code></pre>' : esc(m.text).replace(/\n/g, '<br>')}</div></div>`;
    let body = '';
    switch (m.kind) {
      case 'welcome': body = md(U.welcome); break;
      case 'entry': { const e = entry(m.id); if (!e) { body = md(U.fallback); break; } body = entryBlock(e, m); if (m.alts && m.alts.length) body += altsBlock(m.alts, U.maybe); break; }
      case 'fallback': body = md(U.fallback) + (m.alts && m.alts.length ? altsBlock(m.alts, U.maybe) : '') + topicChips(['print', 'variables', 'ifelse', 'for', 'lists', 'functions', 'errors', 'pyko_help']); break;
      case 'run': body = (m.short ? '<p>' + esc(U.outputQ) + '</p>' : '') + codeBlock(m) + (m.explain !== false && !m.short ? explainCode(m.code) : ''); break;
      case 'screen': body = '<p>' + esc(m.none ? U.screenNone : m.wait ? U.screenWait : U.screenIntro) + '</p>' + (m.code ? codeBlock(m) + explainCode(m.code) : ''); break;
      case 'error': body = `<p>${esc(U.errTitle)}: <b>${esc(m.etype)}</b>${m.emsg ? ' — <code>' + esc(m.emsg) + '</code>' : ''}</p>` + errorBlock({ type: m.etype, msg: m.emsg, line: m.line }, null) + (() => { const e = entry('err_' + m.etype); return e ? md(e.a[L] || e.a.en) : ''; })(); break;
      case 'quiz': body = quizBlock(m); break;
      case 'topics': body = `<p><b>${esc(U.topicsTitle)}</b></p>` + (window.PYKO_TOPICS || []).map((g) => `<div class="pk-topic"><small>${esc(g[L] || g.en)}</small><div>${g.ids.map(entry).filter(Boolean).map((e) => `<button type="button" class="pk-chip" data-pk="topic" data-id="${e.id}">${esc(e.q[L] || e.q.en)}</button>`).join('')}</div></div>`).join(''); break;
      case 'joke': { const J = window.PYKO_JOKES || []; const j = J[m.j % J.length] || { en: '😄', ms: '😄' }; body = '<p>' + esc(j[L] || j.en) + '</p>' + `<div class="pk-acts"><button type="button" class="pk-act" data-pk="say" data-text="${esc(U.chipJoke)}">😂 ${esc(U.jokeMore)}</button></div>`; break; }
      default: body = md(U.fallback);
    }
    return `<div class="pk-msg bot"><span class="pk-ava">${avatar()}</span><div class="pk-bub">${body}</div></div>`;
  }
  const altsBlock = (ids, label) => { const L = lang(); const es = ids.map(entry).filter(Boolean); return es.length ? `<div class="pk-see"><small>${esc(label)}</small>${es.map((e) => `<button type="button" class="pk-chip" data-pk="topic" data-id="${e.id}">${esc(e.q[L] || e.q.en)}</button>`).join('')}</div>` : ''; };
  const topicChips = (ids) => { const L = lang(); return `<div class="pk-see">${ids.map(entry).filter(Boolean).map((e) => `<button type="button" class="pk-chip" data-pk="topic" data-id="${e.id}">${esc(e.q[L] || e.q.en)}</button>`).join('')}</div>`; };
  function quizBlock(m) {
    const L = lang(), U = UI[L];
    const q = (window.PYQUEST_QUESTIONS || []).find((x) => x.id === m.qid);
    if (!q) return md(U.fallback);
    const opts = q.options[L] || q.options.en, picked = m.pick;
    let html = `<p><b>${U.quizQ}</b> <span class="pk-lvl">${U.quizLvl}: ${esc(q.difficulty)}</span></p><p>${esc(q.question[L] || q.question.en)}</p>`;
    if (q.code) html += `<div class="pk-code"><pre><code>${hl(q.code)}</code></pre></div>`;
    html += '<div class="pk-opts">' + opts.map((o, i) => {
      let cls = 'pk-opt';
      if (picked >= 0) { if (i === q.answer) cls += ' right'; else if (i === picked) cls += ' wrong'; else cls += ' dim'; }
      return `<button type="button" class="${cls}" data-pk="qpick" data-k="${m.k}" data-i="${i}" ${picked >= 0 ? 'disabled' : ''}><b>${'ABCD'[i]}</b> ${esc(o)}</button>`;
    }).join('') + '</div>';
    if (picked >= 0) {
      const ok = picked === q.answer;
      html += `<div class="pk-qres ${ok ? 'good' : 'bad'}"><b>${ok ? U.quizRight : U.quizWrong}</b>${ok ? '' : ` ${U.quizAns} <b>${esc(opts[q.answer])}</b>.`}${md(q.explanation[L] || q.explanation.en)}</div>`;
      html += `<div class="pk-acts"><button type="button" class="pk-act" data-pk="quiz">🧠 ${U.quizNext}</button>${q.code ? `<button type="button" class="pk-act" data-pk="qrun" data-k="${m.k}">▶ ${U.run}</button>` : ''}</div>`;
    }
    return html;
  }
  /* Terangkan binaan yang digunakan dalam kod (topik berkaitan sebagai cip). */
  function explainCode(code) {
    const L = lang();
    const checks = [
      [/\bdef\s+\w+/, 'functions'], [/\bclass\s+\w+/, 'classes'], [/\bfor\s+.+\bin\b/, 'for'], [/\bwhile\b/, 'while'], [/\brange\s*\(/, 'range'], [/\bif\b/, 'ifelse'],
      [/\binput\s*\(/, 'input'], [/\b(int|float|str)\s*\(/, 'casting'], [/f["']/, 'fstring'], [/\[[^\]]*:[^\]]*\]/, 'slicing'], [/\.(append|insert|remove|pop|sort|extend)\(/, 'list_methods'],
      [/\.(upper|lower|strip|replace|split|find|count|title)\(/, 'string_methods'], [/\{[^{}]*:[^{}]*\}/, 'dicts'], [/\btry\s*:/, 'try_except'], [/\bimport\s+random|\brandom\./, 'random'], [/\bimport\s+math|\bmath\./, 'math'],
      [/\breturn\b/, 'return'], [/\blambda\b/, 'lambda'], [/\b(break|continue)\b/, 'break_continue'], [/\[.+\bfor\b.+\bin\b.+\]/, 'list_comp'], [/(?:^|[^=!<>])==(?!=)|!=|<=|>=/, 'comparison'], [/\b(and|or|not)\b/, 'logical'], [/%/, 'modulo'], [/\/\//, 'floordiv'],
    ];
    const ids = []; for (const [re, id] of checks) if (re.test(code) && !ids.includes(id)) ids.push(id);
    if (!ids.length) return '';
    return `<div class="pk-see"><small>${esc(UI[L].explainIntro)}</small>${ids.slice(0, 8).map(entry).filter(Boolean).map((e) => `<button type="button" class="pk-chip" data-pk="topic" data-id="${e.id}">${esc(e.q[L] || e.q.en)}</button>`).join('')}</div>`;
  }

  /* ------------------------------ avatar Pyko (ikut tema melalui pemboleh ubah CSS) ------------------------------ */
  function avatar(big) {
    return `<svg class="pk-face${big ? ' big' : ''}" viewBox="0 0 64 64" aria-hidden="true">
      <path class="pk-tail" d="M50 55 q9 -1 8 -8 q-1 -4 -4 -2"/><path class="pk-tail-in" d="M50 55 q9 -1 8 -8 q-1 -4 -4 -2"/>
      <ellipse class="pk-body" cx="31" cy="55" rx="21" ry="6.5"/>
      <path class="pk-body" d="M21 56 V37 h20 V56 q-10 4 -20 0z"/>
      <path class="pk-belly" d="M26 55 V39 h10 V55 q-5 2 -10 0z"/><path class="pk-stripe" d="M26 44 h10 M26 49 h10"/>
      <path class="pk-head" d="M32 5 C50 5 59 13 59 23 C59 34 48 40 32 40 C16 40 5 34 5 23 C5 13 14 5 32 5Z"/>
      <circle class="pk-spot" cx="23" cy="10.5" r="2.2"/><circle class="pk-spot" cx="32" cy="8.6" r="2.6"/><circle class="pk-spot" cx="41" cy="10.5" r="2.2"/>
      <g class="pk-eyes"><ellipse class="pk-eye" cx="21.5" cy="21.5" rx="6.3" ry="7"/><ellipse class="pk-eye" cx="42.5" cy="21.5" rx="6.3" ry="7"/>
        <circle class="pk-pupil" cx="22.8" cy="22.6" r="3.8"/><circle class="pk-pupil" cx="43.8" cy="22.6" r="3.8"/>
        <circle class="pk-shine" cx="24.3" cy="20.6" r="1.4"/><circle class="pk-shine" cx="45.3" cy="20.6" r="1.4"/></g>
      <ellipse class="pk-blush" cx="13.5" cy="30" rx="3.6" ry="2"/><ellipse class="pk-blush" cx="50.5" cy="30" rx="3.6" ry="2"/>
      <circle class="pk-nose" cx="29" cy="28" r="1"/><circle class="pk-nose" cx="35" cy="28" r="1"/>
      <path class="pk-mouth" d="M25.5 31.5 q6.5 5 13 0"/><path class="pk-tongue" d="M32 35 v6 l-3 3 M32 41 l3 3"/></svg>`;
  }

  /* ------------------------------ DOM ------------------------------ */
  let root, list, input, chipsEl, fab;
  function mount() {
    if (root) return;
    load();
    fab = document.createElement('button');
    fab.type = 'button'; fab.className = 'pk-fab'; fab.id = 'pyko-fab';
    root = document.createElement('section');
    root.className = 'pk-panel'; root.id = 'pyko'; root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'false');
    document.body.appendChild(root); document.body.appendChild(fab);
    fab.addEventListener('click', () => toggle());
    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKey);
    root.addEventListener('input', (e) => { if (e.target === input) { st.draft = input.value; autosize(); } });
    paintFab(); paint();
    new MutationObserver(() => { paintFab(); paint(true); }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang', 'data-theme'] });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && st.open && root.contains(document.activeElement)) { e.stopPropagation(); toggle(false); } }, true);
    // butang di halaman lain (contoh Info): data-pyko-open / data-pyko-ask="soalan"
    document.addEventListener('click', (e) => {
      const o = e.target.closest('[data-pyko-open],[data-pyko-ask]'); if (!o || root.contains(o)) return;
      e.preventDefault();
      if (!st.open) toggle(true);
      if (o.dataset.pykoAsk) send(o.dataset.pykoAsk);
    });
    // sembunyi butang semasa modal terbuka (supaya tidak menghalang)
    new MutationObserver(() => { document.body.classList.toggle('pk-modal-open', Boolean(document.querySelector('.pq-modal'))); }).observe(document.body, { childList: true });
  }
  function paintFab() {
    fab.innerHTML = `<span class="pk-fab-label">💬 ${esc(tr('ask'))}</span><span class="pk-fab-ava">${avatar(true)}</span>`;
    fab.setAttribute('aria-label', tr('ask')); fab.setAttribute('aria-expanded', String(st.open));
    fab.classList.toggle('open', st.open);
  }
  function paint(keepScroll) {
    const U = UI[lang()];
    const prevScroll = list ? list.scrollTop : 0;
    const atBottom = list ? list.scrollHeight - list.scrollTop - list.clientHeight < 40 : true;
    const draft = input ? input.value : st.draft;
    root.classList.toggle('open', st.open);
    root.setAttribute('aria-label', U.title);
    root.innerHTML = `<header class="pk-head-bar"><span class="pk-ava big">${avatar(true)}</span><div class="pk-who"><b>${U.title}</b><small><i class="pk-dot"></i>${esc(U.sub)}</small></div>
        <button type="button" class="pk-ico" data-pk="clear" title="${esc(U.clear)}" aria-label="${esc(U.clear)}">🗑</button><button type="button" class="pk-ico" data-pk="close" title="${esc(U.close)}" aria-label="${esc(U.close)}">✕</button></header>
      <div class="pk-list" role="log" aria-live="polite">${[{ who: 'bot', kind: 'welcome', k: 0 }, ...st.msgs].map(renderMsg).join('')}${st.typing ? `<div class="pk-msg bot"><span class="pk-ava">${avatar()}</span><div class="pk-bub pk-typing"><i></i><i></i><i></i><span class="sr">${esc(U.typing)}</span></div></div>` : ''}</div>
      <div class="pk-chips">${chips().map((c) => `<button type="button" class="pk-chip" data-pk="say" data-text="${esc(c)}">${esc(c)}</button>`).join('')}</div>
      <form class="pk-form${st.code ? ' code' : ''}" data-pk-form="1"><button type="button" class="pk-ico pk-codebtn${st.code ? ' on' : ''}" data-pk="code" title="${esc(U.codeMode)}" aria-label="${esc(U.codeMode)}" aria-pressed="${st.code}">{ }</button>
        <textarea rows="1" class="pk-input" placeholder="${esc(st.code ? U.codePh : U.placeholder)}" aria-label="${esc(U.placeholder)}" spellcheck="${st.code ? 'false' : 'true'}">${esc(draft || '')}</textarea>
        <button type="submit" class="pk-send" aria-label="${esc(U.send)}">${st.code ? '▶' : '➤'}</button></form>`;
    list = root.querySelector('.pk-list'); input = root.querySelector('.pk-input'); chipsEl = root.querySelector('.pk-chips');
    root.querySelector('form').addEventListener('submit', (e) => { e.preventDefault(); send(); });
    autosize();
    if (keepScroll && !atBottom) list.scrollTop = prevScroll; else list.scrollTop = list.scrollHeight;
  }
  function chips() {
    const U = UI[lang()];
    const base = U.chips.slice();
    const sc = document.querySelector('main .fb-panel') && (document.querySelector('main .q-code, main .code-lines, main .alien'));
    if (sc) base.unshift(U.chipScreen);
    if (document.querySelector('main .note-block .q-code')) base.unshift(U.chipScreen);
    return [...new Set(base)].slice(0, 6);
  }
  function autosize() { if (!input) return; input.style.height = 'auto'; input.style.height = Math.min(st.code ? 220 : 120, input.scrollHeight) + 'px'; }
  function toggle(force) {
    st.open = force === undefined ? !st.open : force;
    paintFab(); paint();
    document.body.classList.toggle('pk-open', st.open);
    if (st.open) { setTimeout(() => input && input.focus({ preventScroll: true }), 60); }
    else fab.focus({ preventScroll: true });
  }
  function send(textOverride) {
    const text = textOverride !== undefined ? textOverride : input.value;
    if (!String(text).trim()) return;
    if (textOverride === undefined) { input.value = ''; st.draft = ''; }
    st.typing = true; paint();
    const isCode = st.code;
    setTimeout(() => {
      st.typing = false;
      if (textOverride !== undefined) st.code = false;
      respond(text);
      if (isCode && textOverride === undefined) st.code = false;
      paint();
    }, 280);
  }
  const SAYS = () => { const U = UI[lang()]; return { [U.chipScreen]: 'screen' }; };
  async function onClick(e) {
    const b = e.target.closest('[data-pk]'); if (!b) return;
    const act = b.dataset.pk, U = UI[lang()];
    if (act === 'close') return toggle(false);
    if (act === 'clear') { if (!st.msgs.length) return; if (window.confirm(U.clearQ)) { st.msgs = []; save(); paint(); } return; }
    if (act === 'code') { st.code = !st.code; paint(); input.focus(); return; }
    if (act === 'say') {
      const text = b.dataset.text;
      if (SAYS()[text] === 'screen') { add({ who: 'me', text }); const sc = screenCode(); const m = add({ who: 'bot', kind: 'screen', none: Boolean(sc.none), wait: Boolean(sc.wait), code: sc.code }); if (sc.code) execute(m); paint(); return; }
      return send(text);
    }
    if (act === 'topic') { const e2 = entry(b.dataset.id); if (!e2) return; add({ who: 'me', text: e2.q[lang()] || e2.q.en }); if (e2.special === 'quiz') botQuiz(); else if (e2.special === 'topics') add({ who: 'bot', kind: 'topics' }); else if (e2.special === 'joke') add({ who: 'bot', kind: 'joke', j: randInt((window.PYKO_JOKES || [1]).length) }); else add({ who: 'bot', kind: 'entry', id: e2.id, alts: [] }); paint(); return; }
    if (act === 'quiz') { add({ who: 'me', text: U.quizNext }); botQuiz(); paint(); return; }
    if (act === 'qpick') { const m = byK(b.dataset.k); if (!m || m.pick >= 0) return; m.pick = Number(b.dataset.i); save(); paint(true); return; }
    if (act === 'qrun') { const m = byK(b.dataset.k); const q = m && (window.PYQUEST_QUESTIONS || []).find((x) => x.id === m.qid); if (q && q.code) { const r = add({ who: 'bot', kind: 'run', code: q.code }); execute(r); paint(); } return; }
    if (act === 'run' || act === 'runin' || act === 'copy' || act === 'edit') {
      const host = byK(b.dataset.k); if (!host) return;
      const m = host.kind === 'entry' ? host.ex : host;
      if (!m) return;
      if (act === 'copy') { try { await navigator.clipboard.writeText(m.code); b.textContent = U.copied; } catch (_) { b.textContent = '✗'; } return; }
      if (act === 'edit') { st.code = true; st.draft = m.code; paint(); input.value = m.code; autosize(); input.focus(); return; }
      if (act === 'runin') { const ta = root.querySelector(`[data-pk-in="${b.dataset.k}"]`); execute(m, ta ? ta.value : ''); save(); paint(true); return; }
      execute(m); save(); paint(true); return;
    }
    if (act === 'nav') {
      let a; try { a = JSON.parse(b.dataset.nav); } catch (_) { return; }
      if (window.matchMedia && window.matchMedia('(max-width: 600px)').matches) toggle(false);
      setTimeout(() => navigate(a), 0);   // selepas klik semasa selesai
    }
  }
  function onKey(e) {
    if (e.target === input && e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      if (st.code && !(e.ctrlKey || e.metaKey)) return;   // mod kod: Enter = baris baharu, Ctrl+Enter = jalankan
      e.preventDefault(); send();
    }
    if (e.target === input && e.key === 'Tab' && st.code) { e.preventDefault(); const s = input.selectionStart, en = input.selectionEnd; input.value = input.value.slice(0, s) + '    ' + input.value.slice(en); input.selectionStart = input.selectionEnd = s + 4; }
    e.stopPropagation();   // jangan biar kekunci (1–4, Enter) menjawab soalan game
  }
  /* Navigasi melalui pengendali klik sedia ada PyQuest (klik sintetik). */
  function synthClick(attrs) {
    const a = document.createElement('button'); a.type = 'button'; a.hidden = true;
    Object.entries(attrs).forEach(([k, v]) => a.setAttribute(k, v));
    document.body.appendChild(a); a.click(); a.remove();
  }
  function navigate(a) {
    if (a.theme) return synthClick({ 'data-action': 'open-theme' });
    if (a.pet) return synthClick({ 'data-action': 'pet-open' });
    if (a.page === 'game' && a.mode) return synthClick({ 'data-page': a.mode });
    if (a.page === 'profile') return synthClick({ 'data-page': 'profile', 'data-pv': a.pv || 'profile' });
    if (a.page === 'info') {
      synthClick({ 'data-page': 'info' });
      if (a.info) setTimeout(() => synthClick({ 'data-info-go': a.info }), 80);
      return;
    }
    synthClick({ 'data-page': a.page || 'home' });
  }

  /* API (untuk ujian & kegunaan lain) */
  window.PyQuestPyko = { avatar, open: () => toggle(true), close: () => toggle(false), ask: (t) => { if (!st.open) toggle(true); send(t); }, match, detectCode, detectError, detectExpr, respondSync: (t) => { respond(t); paint(); return st.msgs[st.msgs.length - 1]; }, messages: () => st.msgs, reset: () => { st.msgs = []; save(); paint(); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
