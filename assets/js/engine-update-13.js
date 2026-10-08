/* PyQuest engine (update 13: syiling & skin). Semua berjalan dalam pelayar.
   - 4 tahap kesukaran: easy / normal / medium / hard
   - Setiap pusingan = 10 soalan rawak (soalan yang belum dilihat diutamakan)
   - Quiz dan Puzzle kedua-duanya dikawal di sini supaya markah tidak boleh diubah dari luar dengan mudah. */
(() => {
  'use strict';
  const BANK = Array.isArray(window.PYQUEST_QUESTIONS) ? window.PYQUEST_QUESTIONS : [];
  const DIFFS = ['easy', 'normal', 'medium', 'hard'];
  const POINTS = { easy: 10, normal: 15, medium: 20, hard: 25 };
  const TIMER_OPTIONS = [30, 20, 15, 10];
  const ROUND = 10;
  const PERFECT_BONUS = 50;
  /* Syiling maksimum satu pusingan (markah penuh). Ada salah = dipotong ikut jawapan betul: floor(maks × betul / 10). */
  const COINS = { easy: 3, normal: 6, medium: 10, hard: 15 };
  const coinsFor = (difficulty, correct, total) => Math.floor((COINS[difficulty] || 0) * Math.max(0, correct) / (total || ROUND));
  const SK = () => window.PYQUEST_SKINS;
  /* XP minimum untuk setiap tahap (6 tahap). Nama tahap ikut tema — lihat app. */
  const LEVELS = [0, 100, 250, 500, 850, 1300];
  const KEYS = ['quizzes_completed', 'quiz_correct', 'quiz_answered', 'puzzles_completed', 'puzzle_correct', 'puzzle_answered', 'streak'];

  const state = {
    name: '', xp: 0, quiz_xp: 0, puzzle_xp: 0,
    quizzes_completed: 0, quiz_correct: 0, quiz_answered: 0, perfect_quiz: false, recent_quiz: null,
    puzzles_completed: 0, puzzle_correct: 0, puzzle_answered: 0, perfect_puzzle: false, recent_puzzle: null,
    streak: 0, last_activity_date: '',
    coins: 0, coins_total: 0, skins: [], eq: {},
  };
  let quiz = null;
  let puzzle = null;

  const fail = (message) => { throw new Error(message); };
  const pct = (a, b) => (b ? Math.round((100 * a) / b) : 0);
  const clamp = (value) => Math.max(0, Math.min(1000000, parseInt(value, 10) || 0));
  const dayString = (date) => {
    const p = (n) => String(n).padStart(2, '0');
    return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
  };
  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };
  const cleanDiff = (d) => (DIFFS.includes(d) ? d : 'easy');

  /* Ingat soalan yang baru dilihat supaya pusingan seterusnya tidak berulang. */
  function seenGet(key) { try { return JSON.parse(localStorage.getItem('pyquest-seen-' + key) || '[]'); } catch (_) { return []; } }
  function seenSet(key, ids) { try { localStorage.setItem('pyquest-seen-' + key, JSON.stringify(ids.slice(-300))); } catch (_) {} }
  function pickRound(pool, key) {
    const seen = new Set(seenGet(key));
    const fresh = shuffle(pool.filter((q) => !seen.has(q.id)));
    let picked = fresh.slice(0, ROUND);
    if (picked.length < ROUND) {
      const ids = new Set(picked.map((q) => q.id));
      picked = picked.concat(shuffle(pool.filter((q) => !ids.has(q.id))).slice(0, ROUND - picked.length));
      seenSet(key, picked.map((q) => q.id));   // kitaran baharu
    } else {
      seenSet(key, Array.from(seen).concat(picked.map((q) => q.id)));
    }
    return shuffle(picked);
  }

  function level(xp) {
    let current = 0;
    LEVELS.forEach((min, index) => { if (xp >= min) current = index; });
    const next = LEVELS[current + 1] !== undefined ? LEVELS[current + 1] : null;
    return { number: current + 1, max: LEVELS.length, level_xp: LEVELS[current], next_xp: next, progress: next === null ? 100 : pct(xp - LEVELS[current], next - LEVELS[current]) };
  }
  function publicState() {
    return {
      ...state, skins: state.skins.slice(), eq: { ...state.eq },
      level: level(state.xp),
      accuracy: pct(state.quiz_correct, state.quiz_answered),
      puzzle_accuracy: pct(state.puzzle_correct, state.puzzle_answered),
    };
  }
  function recordActivityDay() {
    const today = dayString(new Date());
    if (state.last_activity_date === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    state.streak = state.last_activity_date === dayString(yesterday) ? state.streak + 1 : 1;
    state.last_activity_date = today;
  }
  function localizedQuestion(entry, lang) {
    const q = BANK.find((item) => item.id === entry.id);
    return {
      id: q.id,
      question: String(q.question[lang] || q.question.en),
      code: q.code || '',
      choices: entry.option_order.map((index) => (q.options[lang] || q.options.en)[index]),
      difficulty: q.difficulty, points: q.points || POINTS[q.difficulty], category: q.category,
    };
  }
  function finishQuiz() {
    if (!quiz || quiz.done) return state.recent_quiz;
    const total = quiz.questions.length;
    const perfect = quiz.answered === total && quiz.score === total;
    const bonus = perfect ? PERFECT_BONUS : 0;
    state.quiz_xp += bonus; state.xp += bonus;
    state.quizzes_completed++;
    state.quiz_correct += quiz.score;
    state.quiz_answered += quiz.answered;
    if (perfect) state.perfect_quiz = true;
    const coins = coinsFor(quiz.difficulty, quiz.score, total);
    state.coins += coins; state.coins_total += coins;
    recordActivityDay();
    quiz.done = true;
    state.recent_quiz = {
      score: quiz.score, correct: quiz.score, wrong: quiz.answered - quiz.score, total, answered: quiz.answered,
      xp: quiz.points + bonus, bonus, accuracy: pct(quiz.score, total), points: quiz.points, perfect,
      timed: quiz.timed, difficulty: quiz.difficulty, early: quiz.answered < total, coins, coins_max: COINS[quiz.difficulty],
    };
    return state.recent_quiz;
  }
  function finishPuzzle() {
    if (!puzzle || puzzle.done) return state.recent_puzzle;
    const total = puzzle.items.length;
    const perfect = puzzle.answered === total && puzzle.score === total;
    state.puzzles_completed++;
    if (perfect) state.perfect_puzzle = true;
    const coins = coinsFor(puzzle.difficulty, puzzle.score, total);
    state.coins += coins; state.coins_total += coins;
    recordActivityDay();
    puzzle.done = true;
    state.recent_puzzle = {
      score: puzzle.score, total, answered: puzzle.answered, accuracy: pct(puzzle.score, total), xp: puzzle.points,
      perfect, difficulty: puzzle.difficulty, early: puzzle.answered < total, coins, coins_max: COINS[puzzle.difficulty],
    };
    return state.recent_puzzle;
  }
  function content() {
    const quizCounts = {}, puzzleCounts = {};
    DIFFS.forEach((d) => { quizCounts[d] = 0; puzzleCounts[d] = 0; });
    BANK.forEach((q) => { if (q.difficulty in quizCounts) quizCounts[q.difficulty]++; });
    (window.PYQUEST_PUZZLES || []).forEach((p) => { if (p.difficulty in puzzleCounts) puzzleCounts[p.difficulty]++; });
    return { ok: true, difficulties: DIFFS, points: POINTS, coins: COINS, quiz_counts: quizCounts, puzzle_counts: puzzleCounts, round: ROUND, timers: TIMER_OPTIONS, levels: LEVELS };
  }
  function puzzleView(p, n, total) {
    return { id: p.id, code: p.code, question: p.question, number: n, total, difficulty: p.difficulty };
  }

  function handle(action, body = {}) {
    const lang = body.lang === 'ms' ? 'ms' : 'en';
    const ms = lang === 'ms';
    if (action === 'state') return { ok: true, state: publicState() };
    if (action === 'content') return content();

    if (action === 'reset') {
      Object.assign(state, { name: '', xp: 0, quiz_xp: 0, puzzle_xp: 0, quizzes_completed: 0, quiz_correct: 0, quiz_answered: 0, perfect_quiz: false, recent_quiz: null, puzzles_completed: 0, puzzle_correct: 0, puzzle_answered: 0, perfect_puzzle: false, recent_puzzle: null, streak: 0, last_activity_date: '', coins: 0, coins_total: 0, skins: [], eq: {} });
      quiz = null; puzzle = null;
      return { ok: true, state: publicState() };
    }
    if (action === 'start') {
      const name = String(body.name || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      if (!name || [...name].length > 40) fail(ms ? 'Masukkan nama sehingga 40 aksara.' : 'Please enter a name up to 40 characters.');
      state.name = name;
      return { ok: true, state: publicState() };
    }
    if (action === 'restore_profile') {
      const saved = body.profile && typeof body.profile === 'object' ? body.profile : {};
      state.quiz_xp = Math.max(state.quiz_xp, clamp(saved.quiz_xp));
      state.puzzle_xp = Math.max(state.puzzle_xp, clamp(saved.puzzle_xp));
      state.xp = Math.max(state.xp, state.quiz_xp + state.puzzle_xp);
      KEYS.forEach((key) => { state[key] = Math.max(state[key], clamp(saved[key])); });
      state.perfect_quiz = state.perfect_quiz || Boolean(saved.perfect_quiz);
      state.perfect_puzzle = state.perfect_puzzle || Boolean(saved.perfect_puzzle);
      const clean = (recent, keys) => {
        const out = {};
        keys.forEach((key) => {
          if (key === 'perfect' || key === 'timed' || key === 'early') out[key] = Boolean(recent[key]);
          else if (key === 'category' || key === 'difficulty') out[key] = String(recent[key] || 'easy').toLowerCase().replace(/[^a-z_]/g, '').slice(0, 20);
          else out[key] = clamp(recent[key]);
        });
        return out;
      };
      if (saved.recent_quiz && typeof saved.recent_quiz === 'object') state.recent_quiz = clean(saved.recent_quiz, ['score', 'correct', 'wrong', 'total', 'answered', 'xp', 'bonus', 'accuracy', 'points', 'perfect', 'timed', 'difficulty', 'early']);
      if (saved.recent_puzzle && typeof saved.recent_puzzle === 'object') state.recent_puzzle = clean(saved.recent_puzzle, ['score', 'total', 'answered', 'accuracy', 'xp', 'perfect', 'difficulty', 'early']);
      if (/^\d{4}-\d{2}-\d{2}$/.test(String(saved.last_activity_date || ''))) state.last_activity_date = saved.last_activity_date;
      if (saved.coins !== undefined) state.coins = clamp(saved.coins);
      state.coins_total = Math.max(state.coins_total, clamp(saved.coins_total));
      const owned = Array.isArray(saved.skins) ? saved.skins : (saved.skins && typeof saved.skins === 'object' ? Object.values(saved.skins) : []);
      owned.forEach((id) => { if (SK() && SK().get(id) && !state.skins.includes(id)) state.skins.push(id); });
      if (saved.eq && typeof saved.eq === 'object') Object.keys(saved.eq).forEach((th) => { const id = saved.eq[th]; if (/^[a-z]{1,12}$/.test(th) && (id === 'base' || state.skins.includes(id))) state.eq[th] = id; });
      return { ok: true, state: publicState() };
    }

    if (!state.name) fail(ms ? 'Log masuk atau pilih Tetamu dahulu.' : 'Log in or choose Guest first.');

    /* ---------------- KEDAI SKIN ---------------- */
    if (action === 'buy_skin') {
      const sk = SK() && SK().get(String(body.id || ''));
      if (!sk) fail(ms ? 'Skin tidak dijumpai.' : 'Skin not found.');
      if (state.skins.includes(sk.id)) return { ok: true, state: publicState(), already: true };
      if (state.coins < sk.price) fail(ms ? `Syiling tidak cukup. Perlu ${sk.price - state.coins} lagi.` : `Not enough coins. You need ${sk.price - state.coins} more.`);
      state.coins -= sk.price; state.skins.push(sk.id); state.eq[sk.theme] = sk.id;
      return { ok: true, state: publicState() };
    }
    if (action === 'equip_skin') {
      const theme = String(body.theme || '');
      if (!/^[a-z]{1,12}$/.test(theme)) fail('Invalid theme.');
      const id = String(body.id || 'base');
      if (id !== 'base') { const sk = SK() && SK().get(id); if (!sk || sk.theme !== theme || !state.skins.includes(id)) fail(ms ? 'Beli skin ini dahulu.' : 'Buy this skin first.'); }
      state.eq[theme] = id;
      return { ok: true, state: publicState() };
    }
    if (action === 'rename') {   // nama paparan (had 7 hari dikawal oleh app + peraturan Firebase)
      const name = String(body.name || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      if (!name || [...name].length > 20) fail('name');
      state.name = name;
      return { ok: true, state: publicState() };
    }

    /* ---------------- QUIZ ---------------- */
    if (action === 'start_quiz') {
      const difficulty = cleanDiff(String(body.difficulty || 'easy'));
      const seconds = TIMER_OPTIONS.includes(Number(body.seconds)) ? Number(body.seconds) : 0;
      const pool = BANK.filter((q) => q.difficulty === difficulty);
      if (!pool.length) fail(ms ? 'Tiada soalan untuk tahap ini.' : 'No questions for this level.');
      const entries = pickRound(pool, 'quiz-' + difficulty).map((q) => {
        const order = shuffle([0, 1, 2, 3]);
        return { id: q.id, option_order: order, answer_index: order.indexOf(q.answer) };
      });
      quiz = { questions: entries, index: 0, score: 0, points: 0, answered: 0, difficulty, timed: seconds > 0, seconds, done: false };
      return { ok: true, question: localizedQuestion(entries[0], lang), number: 1, total: entries.length, timed: quiz.timed, seconds };
    }
    if (action === 'quiz_question') {   // dipanggil bila bahasa ditukar di tengah permainan
      if (!quiz || quiz.done) fail('No active quiz.');
      return { ok: true, question: localizedQuestion(quiz.questions[quiz.index], lang) };
    }
    if (action === 'answer_quiz') {
      if (!quiz || quiz.done) fail(ms ? 'Tiada kuiz aktif.' : 'No active quiz.');
      const choice = Number.isInteger(body.choice) ? body.choice : -1;
      const timedOut = choice === -1;
      if (!timedOut && (choice < 0 || choice > 3)) fail(ms ? 'Pilih satu jawapan.' : 'Choose an answer.');
      const entry = quiz.questions[quiz.index];
      const q = BANK.find((item) => item.id === entry.id);
      const pts = q.points || POINTS[q.difficulty];
      const correct = !timedOut && choice === entry.answer_index;
      quiz.answered++;
      if (correct) { quiz.score++; quiz.points += pts; state.quiz_xp += pts; state.xp += pts; }
      quiz.index++;
      const feedback = {
        correct, correctIndex: entry.answer_index, answer: (q.options[lang] || q.options.en)[entry.option_order[entry.answer_index]],
        explanation: q.explanation[lang] || q.explanation.en, timeout: timedOut, points: pts, score: quiz.score, xp_earned: quiz.points,
      };
      if (quiz.index >= quiz.questions.length) return { ok: true, finished: true, feedback, result: finishQuiz(), state: publicState() };
      return { ok: true, finished: false, feedback, question: localizedQuestion(quiz.questions[quiz.index], lang), number: quiz.index + 1, total: quiz.questions.length, state: publicState() };
    }
    if (action === 'fifty_fifty') {
      if (!quiz || quiz.done || quiz.usedFifty) fail('Not available.');
      quiz.usedFifty = true;
      const entry = quiz.questions[quiz.index];
      const wrong = shuffle([0, 1, 2, 3].filter((i) => i !== entry.answer_index)).slice(0, 2);
      return { ok: true, hide: wrong };
    }
    if (action === 'end_quiz') {   // nyawa habis: tamatkan awal, XP yang sudah dikumpul kekal
      if (!quiz) fail(ms ? 'Tiada kuiz aktif.' : 'No active quiz.');
      return { ok: true, result: finishQuiz(), state: publicState() };
    }
    if (action === 'cancel_quiz') {
      if (quiz && !quiz.done) { state.quiz_xp = Math.max(0, state.quiz_xp - quiz.points); state.xp = Math.max(0, state.xp - quiz.points); }
      quiz = null;
      return { ok: true, state: publicState() };
    }

    /* ---------------- MULTIPLAYER: XP selepas bilik tamat ---------------- */
    if (action === 'record_mp') {
      const kind = body.kind === 'puzzle' ? 'puzzle' : 'quiz';
      const k = Math.min(30, clamp(body.correct)), a = Math.min(30, Math.max(k, clamp(body.answered)));
      const pts = Math.min(clamp(body.points), k * 25);
      if (kind === 'quiz') { state.quiz_xp += pts; state.quizzes_completed++; state.quiz_correct += k; state.quiz_answered += a; }
      else { state.puzzle_xp += pts; state.puzzles_completed++; state.puzzle_correct += k; state.puzzle_answered += a; }
      state.xp += pts; recordActivityDay();
      return { ok: true, awarded: pts, state: publicState() };
    }

    /* ---------------- PUZZLE ---------------- */
    if (action === 'start_puzzle') {
      const difficulty = cleanDiff(String(body.difficulty || 'easy'));
      const source = Array.isArray(body.pool) ? body.pool : (window.PYQUEST_PUZZLES || []);
      const pool = source.filter((p) => p && p.difficulty === difficulty && typeof p.code === 'string' && typeof p.correct === 'boolean');
      if (!pool.length) fail(ms ? 'Tiada puzzle untuk tahap ini.' : 'No puzzles for this level.');
      const seconds = TIMER_OPTIONS.includes(Number(body.seconds)) ? Number(body.seconds) : 0;
      const items = pickRound(pool, 'puzzle-' + difficulty);
      puzzle = { items, index: 0, score: 0, points: 0, answered: 0, difficulty, timed: seconds > 0, seconds, done: false };
      return { ok: true, puzzle: puzzleView(items[0], 1, items.length), timed: puzzle.timed, seconds };
    }
    if (action === 'answer_puzzle') {
      if (!puzzle || puzzle.done) fail(ms ? 'Tiada puzzle aktif.' : 'No active puzzle.');
      const timedOut = body.choice === null || body.choice === undefined;
      if (!timedOut && typeof body.choice !== 'boolean') fail('Invalid Puzzle answer.');
      const p = puzzle.items[puzzle.index];
      const correct = !timedOut && body.choice === p.correct;
      const pts = POINTS[puzzle.difficulty];
      puzzle.answered++; state.puzzle_answered++;
      if (correct) { puzzle.score++; puzzle.points += pts; state.puzzle_correct++; state.puzzle_xp += pts; state.xp += pts; }
      puzzle.index++;
      const feedback = { correct, timeout: timedOut, answer: p.correct, explanation: p.explanation, points: pts, awarded: correct ? pts : 0 };
      if (puzzle.index >= puzzle.items.length) return { ok: true, finished: true, feedback, result: finishPuzzle(), state: publicState() };
      return { ok: true, finished: false, feedback, puzzle: puzzleView(puzzle.items[puzzle.index], puzzle.index + 1, puzzle.items.length), state: publicState() };
    }
    if (action === 'end_puzzle') {
      if (!puzzle) fail(ms ? 'Tiada puzzle aktif.' : 'No active puzzle.');
      return { ok: true, result: finishPuzzle(), state: publicState() };
    }
    if (action === 'cancel_puzzle') {
      if (puzzle && !puzzle.done) {
        state.puzzle_answered = Math.max(0, state.puzzle_answered - puzzle.answered);
        state.puzzle_correct = Math.max(0, state.puzzle_correct - puzzle.score);
        state.puzzle_xp = Math.max(0, state.puzzle_xp - puzzle.points); state.xp = Math.max(0, state.xp - puzzle.points);
      }
      puzzle = null;
      return { ok: true, state: publicState() };
    }
    return fail('Unknown action.');
  }

  window.PyQuestEngine = { handle, DIFFS, POINTS, LEVELS, COINS, coinsFor };
})();
