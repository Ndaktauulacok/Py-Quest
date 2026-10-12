/* PyQuest — kesan bunyi (Web Audio, tiada fail audio) dan konfeti (canvas). */
(() => {
  'use strict';
  let ctx = null;
  let muted = false;
  try { muted = localStorage.getItem('pyquest-muted') === '1'; } catch (_) {}
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ac() {
    if (muted) return null;
    try {
      if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    } catch (_) { return null; }
  }
  function tone(freq, start, dur, type = 'sine', vol = 0.16, slide = 0) {
    const a = ac(); if (!a) return;
    const t = a.currentTime + start;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t); o.stop(t + dur + 0.05);
  }
  function noise(start, dur, vol = 0.12) {
    const a = ac(); if (!a) return;
    const len = Math.floor(a.sampleRate * dur), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = a.createBufferSource(), g = a.createGain(), f = a.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 1400;
    s.buffer = buf; g.gain.value = vol;
    s.connect(f).connect(g).connect(a.destination); s.start(a.currentTime + start);
  }
  const SFX = {
    click: () => tone(660, 0, 0.06, 'triangle', 0.08),
    correct: () => { tone(660, 0, 0.12, 'triangle'); tone(990, 0.09, 0.2, 'triangle'); },
    wrong: () => { tone(220, 0, 0.18, 'sawtooth', 0.09, -80); tone(160, 0.12, 0.25, 'sawtooth', 0.08, -60); },
    hit: () => { noise(0, 0.18, 0.18); tone(300, 0, 0.18, 'square', 0.07, -200); },
    combo: () => { [784, 988, 1175].forEach((f, i) => tone(f, i * 0.06, 0.12, 'triangle', 0.1)); },
    power: () => { tone(400, 0, 0.3, 'sine', 0.12, 800); },
    tick: () => tone(1200, 0, 0.04, 'square', 0.04),
    win: () => { [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.22, 'triangle', 0.13)); },
    lose: () => { [392, 330, 262, 196].forEach((f, i) => tone(f, i * 0.16, 0.3, 'sine', 0.12)); },
    pop: () => tone(880, 0, 0.08, 'sine', 0.1, 400),
  };
  function play(name) { if (!muted && SFX[name]) try { SFX[name](); } catch (_) {} }
  function setMuted(v) { muted = Boolean(v); try { localStorage.setItem('pyquest-muted', muted ? '1' : '0'); } catch (_) {} }

  /* ---------- Konfeti ---------- */
  let canvas = null, c2d = null, parts = [], raf = 0;
  function colours() {
    const cs = getComputedStyle(document.documentElement);
    return ['--c1', '--c2', '--c3', '--c4', '--c5', '--accent'].map((v) => cs.getPropertyValue(v).trim() || '#ffc93c');
  }
  function ensure() {
    if (canvas) return;
    canvas = document.createElement('canvas'); canvas.id = 'fx-canvas';
    document.body.appendChild(canvas); c2d = canvas.getContext('2d');
    const size = () => { canvas.width = innerWidth * devicePixelRatio; canvas.height = innerHeight * devicePixelRatio; };
    size(); addEventListener('resize', size);
  }
  function confetti(opts = {}) {
    if (reduce) return;
    ensure();
    const cols = colours(), n = opts.count || 120;
    const x = (opts.x ?? innerWidth / 2) * devicePixelRatio, y = (opts.y ?? innerHeight / 3) * devicePixelRatio;
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, s = (opts.power || 9) * (0.4 + Math.random()) * devicePixelRatio;
      parts.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 6 * devicePixelRatio, r: (4 + Math.random() * 5) * devicePixelRatio, c: cols[i % cols.length], rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, life: 1, shape: i % 3 });
    }
    if (!raf) raf = requestAnimationFrame(step);
  }
  function step() {
    c2d.clearRect(0, 0, canvas.width, canvas.height);
    parts = parts.filter((p) => p.life > 0 && p.y < canvas.height + 40);
    for (const p of parts) {
      p.vy += 0.32 * devicePixelRatio; p.vx *= 0.985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.006;
      c2d.save(); c2d.translate(p.x, p.y); c2d.rotate(p.rot); c2d.globalAlpha = Math.max(0, Math.min(1, p.life * 1.6)); c2d.fillStyle = p.c;
      if (p.shape === 0) c2d.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      else if (p.shape === 1) { c2d.beginPath(); c2d.arc(0, 0, p.r * 0.7, 0, Math.PI * 2); c2d.fill(); }
      else { c2d.beginPath(); c2d.moveTo(0, -p.r); c2d.lineTo(p.r, p.r); c2d.lineTo(-p.r, p.r); c2d.closePath(); c2d.fill(); }
      c2d.restore();
    }
    raf = parts.length ? requestAnimationFrame(step) : 0;
    if (!raf) c2d.clearRect(0, 0, canvas.width, canvas.height);
  }
  /* Nombor terapung: "+20 XP" dsb. */
  function floatText(text, x, y, cls = '') {
    const el = document.createElement('div');
    el.className = 'float-text ' + cls; el.textContent = text;
    el.style.left = x + 'px'; el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }

  window.PyQuestFX = { play, setMuted, isMuted: () => muted, confetti, floatText };
})();
