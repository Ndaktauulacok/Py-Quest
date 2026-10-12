/* PyQuest engine: menggantikan API PHP. Semua berjalan dalam pelayar; skor disimpan oleh app-update.js dalam localStorage. */
(() => {
  'use strict';
  const BANK = Array.isArray(window.PYQUEST_QUESTIONS) ? window.PYQUEST_QUESTIONS : [];
  const PUZZLE_TOTAL = () => (Array.isArray(window.PYQUEST_DEFAULT_PUZZLES) ? window.PYQUEST_DEFAULT_PUZZLES.length : 0);
  const TIMER_OPTIONS = [30, 15, 10];
  const QUIZ_LENGTH = 30;
  const LABELS = {
    basics: { en: 'Python Basics', ms: 'Asas Python' },
    variables: { en: 'Variables & Data Types', ms: 'Pemboleh Ubah & Jenis Data' },
    operators: { en: 'Operators', ms: 'Operator' },
    if_else: { en: 'If / Else', ms: 'If / Else' },
    loops: { en: 'Loops', ms: 'Gelung' },
    lists: { en: 'Lists', ms: 'Senarai' },
    functions: { en: 'Functions', ms: 'Fungsi' },
    strings: { en: 'Strings', ms: 'String' },
    dictionaries: { en: 'Dictionaries', ms: 'Kamus' },
    intermediate: { en: 'Intermediate Python', ms: 'Python Pertengahan' },
  };
  const LEVELS = [[0, 'Python Rookie'], [150, 'Python Explorer'], [400, 'Python Coder'], [800, 'Python Master']];
  const KEYS = ['quizzes_completed', 'quiz_correct', 'quiz_answered', 'puzzles_completed', 'puzzle_correct', 'puzzle_answered', 'streak'];

  const state = {
    name: '', xp: 0, quiz_xp: 0, puzzle_xp: 0,
    quizzes_completed: 0, quiz_correct: 0, quiz_answered: 0, perfect_quiz: false, recent_quiz: null,
    puzzles_completed: 0, puzzle_correct: 0, puzzle_answered: 0, perfect_puzzle: false, recent_puzzle: null,
    streak: 0, last_activity_date: '',
  };
  let quiz = null;

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

  function level(xp) {
    let current = 0;
    LEVELS.forEach((item, index) => { if (xp >= item[0]) current = index; });
    const next = LEVELS[current + 1] ? LEVELS[current + 1][0] : LEVELS[current][0];
    return { number: current + 1, name: LEVELS[current][1], next_xp: next, level_xp: LEVELS[current][0] };
  }
  function publicState() {
    return {
      ...state,
      level: level(state.xp),
      accuracy: pct(state.quiz_correct, state.quiz_answered),
      puzzle_accuracy: pct(state.puzzle_correct, state.puzzle_answered),
      csrf: '',
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
      question: String(q.question[lang]).replace(/\\n/g, '\n'),
      choices: entry.option_order.map((index) => q.options[lang][index]),
      difficulty: q.difficulty, points: q.points, category: q.category,
    };
  }
  function finishQuiz() {
    if (!quiz || quiz.done) return state.recent_quiz;
    const total = quiz.questions.length;
    const perfect = quiz.answered === total && quiz.score === total;
    const bonus = perfect ? 50 : 0;
    state.quiz_xp += bonus; state.xp += bonus;
    state.quizzes_completed++;
    state.quiz_correct += quiz.score;
    state.quiz_answered += quiz.answered;
    if (perfect) state.perfect_quiz = true;
    recordActivityDay();
    quiz.done = true;
    state.recent_quiz = {
      score: quiz.score, correct: quiz.score, wrong: total - quiz.score, total,
      xp: quiz.points + bonus, bonus, accuracy: pct(quiz.score, total), rank: pct(quiz.score, total),
      points: quiz.points, perfect, timed: quiz.timed, category: quiz.category, difficulty: quiz.difficulty,
    };
    return state.recent_quiz;
  }
  function content(lang) {
    const ms = lang === 'ms';
    const counts = { all: { all: BANK.length, easy: 0, medium: 0, hard: 0 } };
    const catCount = {}; const diffCount = { easy: 0, medium: 0, hard: 0 };
    Object.keys(LABELS).forEach((id) => { counts[id] = { all: 0, easy: 0, medium: 0, hard: 0 }; catCount[id] = 0; });
    BANK.forEach((q) => {
      if (!(q.category in catCount) || !(q.difficulty in diffCount)) return;
      catCount[q.category]++; diffCount[q.difficulty]++;
      counts[q.category][q.difficulty]++; counts[q.category].all++; counts.all[q.difficulty]++;
    });
    return {
      ok: true,
      quiz_categories: [{ id: 'all', label: ms ? 'Semua kategori' : 'All categories', count: BANK.length }]
        .concat(Object.keys(LABELS).map((id) => ({ id, label: LABELS[id][lang], count: catCount[id] }))),
      quiz_difficulties: [
        { id: 'all', label: ms ? 'Semua tahap' : 'All difficulties', count: BANK.length },
        { id: 'easy', label: ms ? 'Mudah' : 'Easy', count: diffCount.easy },
        { id: 'medium', label: ms ? 'Sederhana' : 'Medium', count: diffCount.medium },
        { id: 'hard', label: ms ? 'Sukar' : 'Hard', count: diffCount.hard },
      ],
      quiz_counts: counts, puzzle_total: PUZZLE_TOTAL(),
    };
  }

  function handle(action, body = {}) {
    const lang = body.lang === 'ms' ? 'ms' : 'en';
    const ms = lang === 'ms';
    if (action === 'state') return { ok: true, state: publicState() };
    if (action === 'content') return content(lang);

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
          if (key === 'perfect' || key === 'timed') out[key] = Boolean(recent[key]);
          else if (key === 'category' || key === 'difficulty') out[key] = String(recent[key] || 'all').toLowerCase().replace(/[^a-z_]/g, '').slice(0, 20);
          else out[key] = clamp(recent[key]);
        });
        return out;
      };
      if (saved.recent_quiz && typeof saved.recent_quiz === 'object') state.recent_quiz = clean(saved.recent_quiz, ['score', 'correct', 'wrong', 'total', 'xp', 'bonus', 'accuracy', 'rank', 'points', 'perfect', 'timed', 'category', 'difficulty']);
      if (saved.recent_puzzle && typeof saved.recent_puzzle === 'object') state.recent_puzzle = clean(saved.recent_puzzle, ['score', 'total', 'accuracy', 'xp', 'perfect']);
      if (/^\d{4}-\d{2}-\d{2}$/.test(String(saved.last_activity_date || ''))) state.last_activity_date = saved.last_activity_date;
      return { ok: true, state: publicState() };
    }
    if (action === 'record_puzzle_answer') {
      if (typeof body.correct !== 'boolean') fail('Invalid Puzzle answer.');
      state.puzzle_answered++;
      const award = body.correct ? 10 : 0;
      if (body.correct) { state.puzzle_correct++; state.puzzle_xp += award; state.xp += award; }
      return { ok: true, awarded: award, state: publicState() };
    }
    if (action === 'cancel_puzzle') {
      const a = clamp(body.answered), c = Math.min(a, clamp(body.correct));
      state.puzzle_answered = Math.max(0, state.puzzle_answered - a);
      state.puzzle_correct = Math.max(0, state.puzzle_correct - c);
      state.puzzle_xp = Math.max(0, state.puzzle_xp - c * 10); state.xp = Math.max(0, state.xp - c * 10);
      return { ok: true, state: publicState() };
    }
    if (action === 'record_puzzle_result') {
      const score = Number.isInteger(body.score) ? body.score : -1;
      const total = Number.isInteger(body.total) ? body.total : -1;
      if (total < 1 || total > 100 || score < 0 || score > total) fail('Invalid puzzle result.');
      state.puzzles_completed++;
      const perfect = score === total;
      if (perfect) state.perfect_puzzle = true;
      state.recent_puzzle = { score, total, accuracy: pct(score, total), xp: score * 10, perfect };
      recordActivityDay();
      return { ok: true, result: state.recent_puzzle, state: publicState() };
    }

    if (!state.name) fail(ms ? 'Masukkan nama anda dahulu.' : 'Enter your name first.');

    if (action === 'start_quiz') {
      let category = String(body.category || 'all');
      let difficulty = String(body.difficulty || 'all');
      if (category !== 'all' && !(category in LABELS)) category = 'all';
      if (!['all', 'easy', 'medium', 'hard'].includes(difficulty)) difficulty = 'all';
      const seconds = TIMER_OPTIONS.includes(Number(body.seconds)) ? Number(body.seconds) : 0;
      const pool = shuffle(BANK.filter((q) => (category === 'all' || q.category === category) && (difficulty === 'all' || q.difficulty === difficulty)));
      if (!pool.length) fail(ms ? 'Tiada soalan sepadan dengan tapisan ini.' : 'No questions match those filters.');
      const entries = pool.slice(0, QUIZ_LENGTH).map((q) => {
        const order = shuffle([0, 1, 2, 3]);
        return { id: q.id, option_order: order, answer_index: order.indexOf(q.answer) };
      });
      quiz = { questions: entries, index: 0, score: 0, points: 0, answered: 0, category, difficulty, timed: seconds > 0, seconds, started_at: Date.now(), done: false };
      return { ok: true, question: localizedQuestion(entries[0], lang), number: 1, total: entries.length, timed: quiz.timed, seconds, remaining: seconds };
    }
    if (action === 'answer_quiz') {
      if (!quiz || quiz.done) fail(ms ? 'Tiada kuiz aktif.' : 'No active quiz.');
      const choice = Number.isInteger(body.choice) ? body.choice : -1;
      const timedOut = quiz.timed && choice === -1;
      if (!timedOut && (choice < 0 || choice > 3)) fail(ms ? 'Pilih satu jawapan.' : 'Choose an answer.');
      const entry = quiz.questions[quiz.index];
      const q = BANK.find((item) => item.id === entry.id);
      const correct = !timedOut && choice === entry.answer_index;
      quiz.answered++;
      if (correct) { quiz.score++; quiz.points += q.points; state.quiz_xp += q.points; state.xp += q.points; }
      quiz.index++;
      const feedback = {
        correct, answer: q.options[lang][entry.option_order[entry.answer_index]],
        explanation: q.explanation[lang], timeout: timedOut, points: q.points, score: quiz.score, xp_earned: quiz.points,
      };
      if (quiz.index >= quiz.questions.length) return { ok: true, finished: true, feedback, result: finishQuiz(), state: publicState() };
      return { ok: true, finished: false, feedback, question: localizedQuestion(quiz.questions[quiz.index], lang), number: quiz.index + 1, total: quiz.questions.length, state: publicState() };
    }
    if (action === 'cancel_quiz') {
      if (quiz && !quiz.done) { state.quiz_xp = Math.max(0, state.quiz_xp - quiz.points); state.xp = Math.max(0, state.xp - quiz.points); }
      quiz = null;
      return { ok: true, state: publicState() };
    }
    if (action === 'finish_quiz') {
      if (!quiz) fail(ms ? 'Tiada kuiz aktif.' : 'No active quiz.');
      return { ok: true, result: finishQuiz(), state: publicState() };
    }
    return fail('Unknown action.');
  }

  window.PyQuestEngine = { handle };
})();
