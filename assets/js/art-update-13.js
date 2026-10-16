/* PyQuest — lukisan SVG asli (update 13: skin, tema Fantasi Gelap & Cahaya, avatar profil): maskot ular adiwira, aksesori tema, raksasa bug, ikon.
   Warna dikawal oleh CSS (theme-update-7.css) melalui kelas, jadi tukar tema = berubah serta-merta. */
(() => {
  'use strict';

  /* ---------- Maskot utama: ular adiwira ---------- */
  let uid = 0;
  function skinAttr(skinId) {
    const K = window.PYQUEST_SKINS, sk = K && skinId ? K.get(skinId) : null;
    if (!sk) return { cls: '', style: '' };
    return { cls: ' has-skin rar-' + sk.rarity + (sk.fx ? ' fx-' + sk.fx : ''), style: ' style="' + K.style(skinId) + '"' };
  }
  function hero(extra = '', skinId = '') {
    const n = ++uid, sk = skinAttr(skinId);
    const rays = Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2, b = a + Math.PI / 16;
      const x1 = 210 + Math.cos(a) * 205, y1 = 225 + Math.sin(a) * 205, x2 = 210 + Math.cos(b) * 205, y2 = 225 + Math.sin(b) * 205;
      return `<path d="M210 225 L${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}Z" class="hx-ray${i % 2 ? ' alt' : ''}"/>`;
    }).join('');
    const body = 'M352 386 C 310 414, 150 414, 116 374 C 92 344, 136 318, 200 320 C 274 323, 304 292, 286 258 C 268 226, 206 232, 208 196 C 210 172, 226 164, 238 158';
    return `<svg class="hero-svg ${extra}${sk.cls}"${sk.style} viewBox="0 0 420 440" role="img" aria-label="PyQuest snake superhero">
  <defs>
    <clipPath id="hx-clip${n}"><circle cx="210" cy="225" r="200"/></clipPath>
    <radialGradient id="hx-glow${n}" cx="50%" cy="45%" r="55%"><stop offset="0" class="hx-glow-a"/><stop offset="1" class="hx-glow-b"/></radialGradient>
  </defs>
  <g class="hx-bg">
    <circle cx="210" cy="225" r="200" fill="url(#hx-glow${n})"/>
    <g clip-path="url(#hx-clip${n})" class="hx-rays">${rays}</g>
    <circle cx="210" cy="225" r="200" class="hx-ring" fill="none"/>
    <g class="hx-cyber-grid" clip-path="url(#hx-clip${n})">${Array.from({ length: 9 }, (_, i) => `<path d="M10 ${60 + i * 42} H410"/><path d="M${30 + i * 45} 20 V430"/>`).join('')}</g>
  </g>
  <g class="hx-sparkles">
    <path class="hx-star s1" d="M64 120 l7 -18 l7 18 l18 7 l-18 7 l-7 18 l-7 -18 l-18 -7z"/>
    <path class="hx-star s2" d="M352 92 l5 -13 l5 13 l13 5 l-13 5 l-5 13 l-5 -13 l-13 -5z"/>
    <path class="hx-star s3" d="M366 250 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4z"/>
    <circle class="hx-dot" cx="98" cy="62" r="5"/><circle class="hx-dot" cx="330" cy="330" r="6"/><circle class="hx-dot" cx="52" cy="268" r="4"/>
  </g>
  <g class="sk-aura" aria-hidden="true"><circle class="sk-aura-glow" cx="220" cy="270" r="150"/><circle class="sk-aura-ring" cx="220" cy="270" r="168" fill="none"/><circle class="sk-aura-ring r2" cx="220" cy="270" r="186" fill="none"/></g>
  <g class="hx-float">
    <!-- sayap (Fantasi Cahaya) -->
    <g class="acc acc-light hx-wings"><path class="hx-wing" d="M238 176 C 210 120, 150 92, 96 104 C 126 116, 146 130, 156 146 C 128 140, 100 146, 80 164 C 112 166, 140 172, 158 184 C 136 188, 116 200, 104 218 C 150 210, 196 206, 236 206 Z"/><path class="hx-wingline" d="M226 186 C 196 150, 150 128, 112 124 M216 196 C 186 176, 140 166, 104 170 M206 204 C 176 198, 144 200, 120 210" fill="none"/></g>
    <!-- jubah -->
    <path class="hx-cape" d="M246 150 C 196 160, 112 214, 64 330 C 98 318, 120 336, 136 366 C 150 332, 172 340, 196 352 C 196 300, 236 250, 276 214 Z"/>
    <path class="hx-cape2" d="M246 150 C 214 170, 160 220, 128 300 C 150 296, 170 310, 180 328 C 194 286, 226 246, 270 214 Z"/>
    <g class="acc acc-pirate"><path class="hx-trim" d="M64 330 C 98 318, 120 336, 136 366 C 150 332, 172 340, 196 352" fill="none"/></g>
    <g class="acc acc-cyber hx-capegrid"><path d="M110 260 L 230 200 M96 296 L 216 236 M 150 210 L 176 344 M 196 190 L 214 330" fill="none"/></g>
    <g class="acc acc-girls hx-capestars"><path d="M120 300 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3z"/><path d="M168 250 l2.5 -6 l2.5 6 l6 2.5 l-6 2.5 l-2.5 6 l-2.5 -6 l-6 -2.5z"/><path d="M156 318 l2 -5 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2z"/></g>
    <!-- badan -->
    <path class="hx-out" d="${body}"/>
    <path class="hx-main" d="${body}"/>
    <path class="hx-belly" d="${body}"/>
    <path class="hx-scales" d="${body}"/>
    <g class="acc acc-cyber"><path class="hx-circuit" d="${body}"/></g>
    <path class="sk-pattern" d="${body}"/>
    <path class="sk-shine" d="${body}"/>
    <g class="acc acc-dark"><path class="hx-runes" d="${body}"/></g>
    <path class="hx-tail" d="M352 386 C 372 374, 380 356, 370 340"/>
    <path class="hx-tailtip" d="M370 340 l-4 -16 l14 8z"/>
    <!-- lambang dada -->
    <g transform="translate(278 262)">
      <path class="hx-shield" d="M-30 -26 H30 V2 C30 22, 12 32, 0 38 C-12 32, -30 22, -30 2 Z"/>
      <g class="acc acc-default acc-boys"><path class="hx-emblem" d="M4 -20 L-12 4 H0 L-6 28 L14 -2 H2 L8 -20 Z"/></g>
      <g class="acc acc-pirate"><g class="hx-emblem"><circle cx="0" cy="-8" r="5" fill="none" stroke-width="3"/><path d="M0 -3 V24 M-12 10 H12 M-14 16 C-10 26, 10 26, 14 16" fill="none" stroke-width="3.4" stroke-linecap="round"/></g></g>
      <g class="acc acc-cyber"><g class="hx-emblem"><rect x="-13" y="-14" width="26" height="26" rx="4" fill="none" stroke-width="3"/><rect x="-6" y="-7" width="12" height="12" rx="2"/><path d="M-13 -6 h-6 M-13 4 h-6 M13 -6 h6 M13 4 h6 M-5 -14 v-6 M5 -14 v-6 M-5 12 v6 M5 12 v6" stroke-width="2.6" stroke-linecap="round"/></g></g>
      <g class="acc acc-girls"><path class="hx-emblem" d="M0 22 C -26 4, -20 -18, -8 -18 C -2 -18, 0 -12, 0 -10 C 0 -12, 2 -18, 8 -18 C 20 -18, 26 4, 0 22 Z"/></g>
      <g class="acc acc-dark"><path class="hx-emblem" d="M6 -20 A 21 21 0 1 0 8 22 A 16 16 0 1 1 6 -20 Z"/><circle class="hx-emblem2" cx="10" cy="-2" r="3"/></g>
      <g class="acc acc-light"><g class="hx-emblem"><circle cx="0" cy="2" r="9"/><path d="M0 -18 V-11 M0 15 V22 M-20 2 H-13 M13 2 H20 M-14 -12 l5 5 M9 11 l5 5 M14 -12 l-5 5 M-9 11 l-5 5" fill="none" stroke-width="3.4" stroke-linecap="round"/></g></g>
    </g>
    <!-- kepala -->
    <g class="hx-head" transform="translate(262 118) rotate(-6)">
      <path class="hx-tongue" d="M58 22 L80 26 M80 26 L90 18 M80 26 L88 36"/>
      <ellipse class="hx-headout" cx="0" cy="0" rx="72" ry="58"/>
      <ellipse class="hx-headmain" cx="0" cy="0" rx="66" ry="52"/>
      <ellipse class="hx-headshine" cx="-22" cy="-30" rx="26" ry="10" transform="rotate(-12 -22 -30)"/>
      <ellipse class="hx-cheek" cx="-34" cy="22" rx="11" ry="6"/><ellipse class="hx-cheek" cx="40" cy="20" rx="10" ry="6"/>
      <circle class="hx-nostril" cx="50" cy="-2" r="2.6"/><circle class="hx-nostril" cx="58" cy="2" r="2.6"/>
      <!-- topeng / visor -->
      <g class="acc acc-default acc-boys acc-girls">
        <path class="hx-masktail" d="M-62 -18 C -86 -30, -104 -20, -118 -34 C -106 -8, -86 -8, -66 -6 Z"/>
        <path class="hx-masktail" d="M-62 -6 C -84 -2, -96 14, -114 10 C -96 24, -80 14, -64 4 Z"/>
        <path class="hx-mask" d="M-64 -20 C -40 -36, 40 -38, 64 -18 C 66 -4, 60 8, 52 10 C 30 0, 14 2, 0 8 C -14 2, -34 0, -58 8 C -66 0, -66 -10, -64 -20 Z"/>
      </g>
      <g class="eyes">
        <g class="eye eye-l"><ellipse class="hx-eyew" cx="-20" cy="-10" rx="15" ry="16"/><circle class="hx-pupil" cx="-15" cy="-8" r="8"/><circle class="hx-glint" cx="-12" cy="-12" r="3"/></g>
        <g class="eye eye-r"><ellipse class="hx-eyew" cx="24" cy="-11" rx="15" ry="16"/><circle class="hx-pupil" cx="29" cy="-9" r="8"/><circle class="hx-glint" cx="32" cy="-13" r="3"/></g>
      </g>
      <g class="acc acc-girls hx-lash"><path d="M-34 -22 l-7 -6 M-28 -26 l-4 -8 M38 -24 l7 -6 M32 -27 l4 -8" fill="none"/></g>
      <path class="hx-smile" d="M-18 22 C -4 36, 22 36, 34 20"/>
      <path class="hx-fang" d="M-6 29 l3 7 l3 -6z"/>
      <!-- ekor tutup mata (halaman login: bila taip kata laluan) -->
      <g class="hx-cover"><path class="hx-cover-out" d="M-110 70 C -96 10, -40 -14, 10 -12 C 46 -10, 66 -22, 72 -34"/><path class="hx-cover-main" d="M-110 70 C -96 10, -40 -14, 10 -12 C 46 -10, 66 -22, 72 -34"/><path class="hx-cover-tip" d="M72 -34 l2 -14 l10 12z"/></g>
      <!-- pirate -->
      <g class="acc acc-pirate">
        <path class="hx-patchstrap" d="M-66 -34 L 60 4" fill="none"/>
        <ellipse class="hx-patch" cx="24" cy="-10" rx="17" ry="15"/>
        <circle class="hx-earring" cx="-50" cy="30" r="7" fill="none"/>
        <g transform="translate(-6 -50) rotate(-4)">
          <path class="hx-hat" d="M-92 6 C -60 -16, -40 -58, 0 -60 C 40 -58, 60 -16, 92 6 C 60 -6, 30 -10, 0 -10 C -30 -10, -60 -6, -92 6 Z"/>
          <path class="hx-hattrim" d="M-92 6 C -60 -6, -30 -10, 0 -10 C 30 -10, 60 -6, 92 6" fill="none"/>
          <g transform="translate(0 -32)"><circle class="hx-skull" cx="0" cy="-2" r="9"/><circle class="hx-skulleye" cx="-3.2" cy="-3" r="2.2"/><circle class="hx-skulleye" cx="3.2" cy="-3" r="2.2"/><path class="hx-bones" d="M-13 8 L13 18 M13 8 L-13 18" fill="none"/></g>
        </g>
      </g>
      <!-- cyber -->
      <g class="acc acc-cyber">
        <path class="hx-antenna" d="M-20 -50 L -34 -86" fill="none"/><circle class="hx-antball" cx="-34" cy="-88" r="7"/>
        <path class="hx-visor" d="M-66 -24 C -40 -36, 44 -38, 68 -20 L 66 2 C 40 -8, -40 -8, -62 4 Z"/>
        <path class="hx-visorline" d="M-56 -12 C -30 -20, 34 -22, 60 -8" fill="none"/>
        <rect class="hx-plate" x="-56" y="10" width="20" height="10" rx="3"/><circle class="hx-bolt" cx="-50" cy="15" r="2"/><circle class="hx-bolt" cx="-42" cy="15" r="2"/>
      </g>
      <!-- girls -->
      <g class="acc acc-girls" transform="translate(-14 -50)">
        <path class="hx-tiara" d="M-34 6 L -28 -18 L -14 -4 L 0 -28 L 14 -4 L 28 -18 L 34 6 Z"/>
        <circle class="hx-gem" cx="0" cy="-8" r="6"/><circle class="hx-gem2" cx="-24" cy="-6" r="3.4"/><circle class="hx-gem2" cx="24" cy="-6" r="3.4"/>
      </g>
      <!-- Fantasi Gelap: tanduk + mata bercahaya -->
      <g class="acc acc-dark">
        <path class="hx-horn" d="M-30 -44 C -52 -58, -66 -84, -54 -108 C -48 -88, -34 -72, -12 -56 Z"/>
        <path class="hx-horn" d="M20 -50 C 38 -66, 56 -86, 48 -110 C 62 -90, 60 -64, 40 -44 Z"/>
        <path class="hx-hornline" d="M-40 -60 l 8 -4 M-48 -76 l 8 -2 M36 -64 l -8 -3 M46 -80 l -8 -1" fill="none"/>
      </g>
      <!-- Fantasi Cahaya: lingkaran cahaya + mahkota daun -->
      <g class="acc acc-light">
        <ellipse class="hx-halo" cx="-4" cy="-84" rx="42" ry="11" fill="none"/>
        <path class="hx-laurel" d="M-62 -26 C -46 -52, 36 -56, 62 -28" fill="none"/>
        <g class="hx-leaves"><ellipse cx="-52" cy="-40" rx="9" ry="4.5" transform="rotate(-50 -52 -40)"/><ellipse cx="-34" cy="-50" rx="9" ry="4.5" transform="rotate(-28 -34 -50)"/><ellipse cx="-14" cy="-54" rx="9" ry="4.5" transform="rotate(-10 -14 -54)"/><ellipse cx="8" cy="-55" rx="9" ry="4.5" transform="rotate(8 8 -55)"/><ellipse cx="30" cy="-50" rx="9" ry="4.5" transform="rotate(26 30 -50)"/><ellipse cx="50" cy="-39" rx="9" ry="4.5" transform="rotate(48 50 -39)"/></g>
        <circle class="hx-gem" cx="-2" cy="-55" r="5"/>
      </g>
      <!-- boys -->
      <g class="acc acc-boys" transform="translate(-6 -44)">
        <path class="hx-cap" d="M-56 10 C -54 -30, 50 -34, 58 8 Z"/>
        <path class="hx-capbrim" d="M-58 10 C -80 10, -96 4, -104 -6 C -86 -10, -66 -4, -50 4 Z"/>
        <circle class="hx-capbtn" cx="0" cy="-22" r="5"/>
        <path class="hx-capbolt" d="M8 -14 L-4 2 H4 L-2 14 L12 -2 H4 L10 -14Z"/>
      </g>
    </g>
  </g>
  <g class="sk-orbs" aria-hidden="true"><circle class="o1" cx="96" cy="196" r="9"/><circle class="o2" cx="352" cy="210" r="7"/><circle class="o3" cx="150" cy="96" r="6"/><path class="o4" d="M330 120 l5 -12 l5 12 l12 5 l-12 5 l-5 12 l-5 -12 l-12 -5z"/></g>
  <ellipse class="hx-shadow" cx="230" cy="420" rx="120" ry="12"/>
</svg>`;
  }

  /* ---------- Raksasa bug untuk Quiz Battle ---------- */
  function boss() {
    return `<svg class="boss-svg" viewBox="0 0 220 220" aria-hidden="true">
  <g class="bs-float">
    <g class="acc acc-pirate bs-tentacles"><path d="M60 160 C 40 190, 20 186, 18 206 M90 172 C 84 200, 70 206, 74 216 M130 172 C 136 200, 150 206, 146 216 M160 160 C 180 190, 200 186, 202 206" fill="none"/></g>
    <g class="acc acc-default acc-boys acc-girls acc-dark acc-light bs-legs"><path d="M64 150 L 36 176 L 30 196 M84 166 L 72 196 M136 166 L 148 196 M156 150 L 184 176 L 190 196" fill="none"/></g>
    <g class="acc acc-cyber bs-legs"><path d="M60 150 L 30 170 V 196 M84 166 L 76 200 M136 166 L 144 200 M160 150 L 190 170 V 196" fill="none"/></g>
    <path class="bs-ant" d="M88 54 C 80 30, 66 22, 52 24 M132 54 C 140 30, 154 22, 168 24" fill="none"/>
    <circle class="bs-antball" cx="52" cy="24" r="8"/><circle class="bs-antball" cx="168" cy="24" r="8"/>
    <path class="bs-body" d="M110 46 C 160 46, 186 86, 182 124 C 178 162, 146 180, 110 180 C 74 180, 42 162, 38 124 C 34 86, 60 46, 110 46 Z"/>
    <g class="acc acc-cyber"><path class="bs-hex" d="M110 56 L 164 86 V 146 L 110 174 L 56 146 V 86 Z" fill="none"/></g>
    <circle class="bs-spot" cx="70" cy="126" r="9"/><circle class="bs-spot" cx="152" cy="136" r="7"/><circle class="bs-spot" cx="140" cy="70" r="6"/>
    <g class="acc acc-default acc-boys acc-girls acc-pirate acc-dark acc-light bs-eyes">
      <ellipse class="bs-eyew" cx="86" cy="100" rx="17" ry="19"/><ellipse class="bs-eyew" cx="134" cy="100" rx="17" ry="19"/>
      <circle class="bs-pupil" cx="90" cy="104" r="8"/><circle class="bs-pupil" cx="130" cy="104" r="8"/>
      <path class="bs-brow" d="M66 78 L 102 90 M154 78 L 118 90" fill="none"/>
    </g>
    <g class="acc acc-cyber"><rect class="bs-visor" x="60" y="88" width="100" height="26" rx="13"/><circle class="bs-redeye" cx="110" cy="101" r="9"/></g>
    <path class="bs-mouth" d="M78 138 C 96 150, 124 150, 142 138 C 136 158, 84 158, 78 138 Z"/>
    <path class="bs-teeth" d="M88 141 l5 8 l5 -6 l5 7 l5 -7 l5 7 l5 -6 l5 8" fill="none"/>
    <g class="acc acc-pirate"><path class="bs-bandana" d="M44 86 C 70 50, 150 50, 176 86 C 150 72, 70 72, 44 86 Z"/><path class="bs-bandana" d="M176 86 l 22 -6 l -8 16 z"/></g>
    <g class="acc acc-girls"><path class="bs-bow" d="M110 44 l -22 -12 v 24 z M110 44 l 22 -12 v 24 z"/><circle class="bs-bowc" cx="110" cy="44" r="6"/></g>
    <g class="acc acc-boys"><circle class="bs-eyew" cx="110" cy="66" r="10"/><circle class="bs-pupil" cx="110" cy="68" r="5"/></g>
    <g class="acc acc-dark"><path class="bs-horn" d="M70 62 C 52 50, 44 30, 50 12 C 60 30, 72 40, 88 50 Z M150 62 C 168 50, 176 30, 170 12 C 160 30, 148 40, 132 50 Z"/></g>
    <g class="acc acc-light bs-wings"><path d="M44 96 C 16 70, 0 80, 4 104 C 16 98, 26 104, 40 116 Z M176 96 C 204 70, 220 80, 216 104 C 204 98, 194 104, 180 116 Z"/></g>
  </g>
</svg>`;
  }

  /* ---------- Ikon kecil ---------- */
  const ICON = {
    heart: '<svg viewBox="0 0 24 24" class="ic ic-heart" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.8 4.5c2.2 0 3.6 1.2 5.2 3 1.6-1.8 3-3 5.2-3 3.8 0 5.9 4 4.4 7.3C19.5 16.4 12 21 12 21z"/></svg>',
    quiz: '<svg viewBox="0 0 48 48" class="ic" aria-hidden="true"><path class="i1" d="M24 4 L28.5 14 L40 12 L33 21 L42 30 L30 30 L26 42 L21 31 L9 34 L15 24 L6 15 L18 15 Z"/><path class="i2" d="M20.5 20.5 C 20.5 17, 27.5 17, 27.5 20.5 C 27.5 23, 24 23, 24 26" fill="none" stroke-width="3" stroke-linecap="round"/><circle class="i3" cx="24" cy="30.5" r="1.9"/></svg>',
    puzzle: '<svg viewBox="0 0 48 48" class="ic" aria-hidden="true"><path class="i1" d="M8 12 a4 4 0 0 1 4 -4 h8 a4 4 0 1 1 8 0 h8 a4 4 0 0 1 4 4 v8 a4 4 0 1 0 0 8 v8 a4 4 0 0 1 -4 4 h-8 a4 4 0 1 0 -8 0 h-8 a4 4 0 0 1 -4 -4 Z"/><path class="i2" d="M17 25 l5 5 l9 -11" fill="none" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    info: '<svg viewBox="0 0 48 48" class="ic" aria-hidden="true"><circle class="i1" cx="24" cy="24" r="19"/><circle class="i3" cx="24" cy="15" r="2.8"/><path class="i2" d="M24 21 v13" stroke-width="4.4" stroke-linecap="round"/></svg>',
    palette: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.6 0-.5-.2-.8-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.6 1.7-1.6H16a5 5 0 0 0 5-5c0-4-4-7.4-9-7.4z" fill="currentColor" opacity=".25"/><path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.8 1.7-1.6 0-.5-.2-.8-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.6 1.7-1.6H16a5 5 0 0 0 5-5c0-4-4-7.4-9-7.4z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7.5" cy="11" r="1.6" fill="#ff5d73"/><circle cx="10" cy="7" r="1.6" fill="#ffc93c"/><circle cx="14.5" cy="7" r="1.6" fill="#3ccf91"/><circle cx="17" cy="10.5" r="1.6" fill="#4aa8ff"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M13 2 L4 14 h7 l-1 8 l9-12 h-7z" fill="currentColor"/></svg>',
    shield: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M12 2 L20 5 V11 C20 16.5 16.4 20.4 12 22 C7.6 20.4 4 16.5 4 11 V5 Z" fill="currentColor"/><path d="M8.5 12 l2.5 2.5 l4.5 -5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    half: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 3 a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
    sound: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M4 9 h4 l5 -4 v14 l-5 -4 H4z" fill="currentColor"/><path d="M16 8.5 a5 5 0 0 1 0 7 M18.5 6 a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    mute: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M4 9 h4 l5 -4 v14 l-5 -4 H4z" fill="currentColor"/><path d="M16 9 l6 6 M22 9 l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    clock: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 9 v4 l3 2 M9 2 h6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    star: '<svg viewBox="0 0 24 24" class="ic ic-star" aria-hidden="true"><path d="M12 2.5 l2.9 6 6.6.8 -4.9 4.6 1.3 6.5 L12 17.2 6.1 20.4l1.3-6.5L2.5 9.3l6.6-.8z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M12 2 C 13 6, 18 8, 18 14 a6 6 0 0 1 -12 0 c0 -3 2 -5 3 -6 c0 2 1 3 2 3 C 13 9, 11 6, 12 2 Z" fill="currentColor"/></svg>',
    eye: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M2 12 C 5 6, 19 6, 22 12 C 19 18, 5 18, 2 12 Z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.2" fill="currentColor"/></svg>',
    eyeoff: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M2 12 C 5 6, 19 6, 22 12 C 19 18, 5 18, 2 12 Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 4 L20 20" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M5 12.5 l4.5 4.5 L19 7.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cross: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
    bug: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><ellipse cx="12" cy="14" rx="6" ry="7" fill="currentColor"/><circle cx="12" cy="6.5" r="3.2" fill="currentColor"/><path d="M6 11 H2.5 M6 15 H2.5 M18 11 h3.5 M18 15 h3.5 M7 19 l-3 2 M17 19 l3 2 M10 4 L8 1.5 M14 4 l2 -2.5 M12 8 V20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M7 3 h10 v5 a5 5 0 0 1 -10 0z M7 5 H3.5 a3.5 3.5 0 0 0 3.8 4.2 M17 5 h3.5 a3.5 3.5 0 0 1 -3.8 4.2 M10 13 h4 v3 h-4z M8 20 h8 v-4 h-8z" fill="currentColor" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    door: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M5 3 h10 v18 H5z" fill="currentColor" opacity=".25"/><path d="M5 3 h10 v18 H5z M11 12 h.01 M15 12 h6 M18 9 l3 3 -3 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    user: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 21 c0 -4.5 3.6 -7.5 8 -7.5 s8 3 8 7.5z" fill="currentColor"/></svg>',
    plus: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".2"/><path d="M12 7 v10 M7 12 h10" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
    login: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M14 3 h5 a2 2 0 0 1 2 2 v14 a2 2 0 0 1 -2 2 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 12 h11 M10 8 l4 4 -4 4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ghost: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M5 21 V11 a7 7 0 0 1 14 0 v10 l-2.4 -1.8 -2.3 1.8 -2.3 -1.8 -2.3 1.8 -2.3 -1.8z" fill="currentColor"/><circle cx="9.5" cy="11" r="1.5" fill="#fff"/><circle cx="14.5" cy="11" r="1.5" fill="#fff"/></svg>',
    coin: '<svg viewBox="0 0 24 24" class="ic ic-coin" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#fbbf24" stroke="#b45309" stroke-width="1.6"/><circle cx="12" cy="12" r="6.6" fill="none" stroke="#fde68a" stroke-width="1.4"/><path d="M12 7.6 v8.8 M9.6 9.8 h3.8 a1.8 1.8 0 0 1 0 3.6 h-3" fill="none" stroke="#92400e" stroke-width="1.8" stroke-linecap="round"/></svg>',
    bag: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M5 8 h14 l-1.2 12 a2 2 0 0 1 -2 1.8 H8.2 a2 2 0 0 1 -2 -1.8 Z" fill="currentColor"/><path d="M9 10 V7 a3 3 0 0 1 6 0 v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    camera: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M4 8 h3 l2 -3 h6 l2 3 h3 a1 1 0 0 1 1 1 v10 a1 1 0 0 1 -1 1 H4 a1 1 0 0 1 -1 -1 V9 a1 1 0 0 1 1 -1 Z" fill="currentColor"/><circle cx="12" cy="13.5" r="3.6" fill="none" stroke="#fff" stroke-width="2"/></svg>',
    pencil: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><path d="M4 20 l1 -4 L16 5 l3 3 L8 19 Z" fill="currentColor"/><path d="M14 7 l3 3" stroke="#fff" stroke-width="1.6"/></svg>',
    lock: '<svg viewBox="0 0 24 24" class="ic" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="2" fill="currentColor"/><path d="M8 10 V7 a4 4 0 0 1 8 0 v3" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>',
    chest: '<svg viewBox="0 0 64 56" class="ic chest" aria-hidden="true"><path class="c-lid" d="M6 22 C 6 8, 58 8, 58 22 Z"/><rect class="c-box" x="6" y="22" width="52" height="30" rx="3"/><path class="c-band" d="M6 30 H58 M20 22 V52 M44 22 V52" fill="none"/><rect class="c-lock" x="27" y="25" width="10" height="12" rx="2"/></svg>',
  };

  /* ---------- Kepala ular kecil (pratonton tema / avatar) ---------- */
  function miniHead(theme, skinId = '') {
    const acc = {
      pirate: '<path d="M4 15 C10 8, 14 2, 20 2 C26 2, 30 8, 36 15 C28 12, 12 12, 4 15Z" fill="#1d1d1f"/><path d="M4 15 C12 12, 28 12, 36 15" stroke="#f4b41a" stroke-width="1.6" fill="none"/><circle cx="20" cy="8" r="2.4" fill="#fff"/><ellipse cx="25" cy="22" rx="4.6" ry="4" fill="#1d1d1f"/>',
      cyber: '<path d="M10 14 L6 4" stroke="#9aa6b2" stroke-width="2"/><circle cx="6" cy="4" r="2.4" fill="#ff2a6d"/><path d="M5 19 C12 15, 30 15, 36 19 L35 25 C28 22, 12 22, 6 26 Z" fill="#00f0ff" opacity=".9"/>',
      boys: '<path d="M7 16 C8 7, 32 6, 34 16 Z" fill="#2563eb"/><path d="M7 16 C2 16, -1 14, -2 12 C2 11, 5 13, 9 15Z" fill="#1e3a8a"/><circle cx="20" cy="9" r="1.8" fill="#f97316"/>',
      girls: '<path d="M20 12 l-7 -5 v10z M20 12 l7 -5 v10z" fill="#ec4899"/><circle cx="20" cy="12" r="2.6" fill="#f9a8d4"/>',
      default: '<path d="M5 20 C10 15, 30 15, 35 20 C34 24, 30 25, 28 25 C24 22, 16 22, 12 25 C9 25, 5 24, 5 20Z" fill="#ff4d6d"/>',
      dark: '<path d="M9 15 C4 11, 2 5, 5 0 C7 5, 10 8, 14 12Z" fill="#e7dcc8" stroke="#1a1026" stroke-width="1"/><path d="M31 15 C36 11, 38 5, 35 0 C33 5, 30 8, 26 12Z" fill="#e7dcc8" stroke="#1a1026" stroke-width="1"/>',
      light: '<ellipse cx="20" cy="6" rx="11" ry="3" fill="none" stroke="#fbbf24" stroke-width="2"/><path d="M6 16 C12 10, 28 10, 34 16" stroke="#65a30d" stroke-width="2" fill="none"/><circle cx="20" cy="12" r="2" fill="#38bdf8"/>',
    }[theme] || '';
    let col = { default: ['#22c55e', '#0b3d22'], pirate: ['#14b8a6', '#063c37'], cyber: ['#7c8a99', '#1b2330'], boys: ['#38bdf8', '#0c3756'], girls: ['#c084fc', '#4a1f6b'], dark: ['#5b3a8c', '#130a22'], light: ['#a7f3d0', '#065f46'] }[theme] || ['#22c55e', '#0b3d22'];
    const K = window.PYQUEST_SKINS, sk = K && skinId ? K.get(skinId) : null;
    if (sk) col = [sk.v['--sk-head'], sk.v['--sk-out']];
    const eyeW = theme === 'dark' ? '#1a1026' : '#fff', pup = theme === 'dark' ? '#e879f9' : '#111';
    const eyes = theme === 'cyber' ? '' : `<circle cx="15" cy="22" r="4" fill="${eyeW}"/><circle cx="16" cy="22.5" r="2" fill="${pup}"/>${theme === 'pirate' ? '' : `<circle cx="25" cy="22" r="4" fill="${eyeW}"/><circle cx="26" cy="22.5" r="2" fill="${pup}"/>`}`;
    const glow = sk && (sk.rarity === 'epic' || sk.rarity === 'legend') ? `<ellipse cx="20" cy="24" rx="19.5" ry="15.5" fill="none" stroke="${sk.fxc}" stroke-width="2" opacity=".85"/>` : '';
    return `<svg viewBox="-4 0 48 40" class="mini-head" aria-hidden="true">${glow}<ellipse cx="20" cy="24" rx="17" ry="13" fill="${col[1]}"/><ellipse cx="20" cy="24" rx="15" ry="11" fill="${col[0]}"/>${eyes}${acc}<path d="M14 30 C18 33, 23 33, 26 30" stroke="${col[1]}" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;
  }

  /* ---------- Gambar profil sedia ada ---------- */
  const AV_BG = ['#6c4cf5', '#ff5d73', '#ffb020', '#2ec27e', '#06b6d4', '#a855f7', '#0f6e7f', '#1f1033', '#f472b6', '#2563eb', '#84cc16', '#f97316'];
  const AV_ART = {
    rocket: '<path d="M24 8 C 32 14, 34 24, 30 34 H18 C 14 24, 16 14, 24 8 Z" fill="#fff"/><circle cx="24" cy="21" r="4" fill="#38bdf8" stroke="#1e3a8a" stroke-width="1.5"/><path d="M18 30 l-6 6 l7 -1 Z M30 30 l6 6 l-7 -1 Z" fill="#ef4444"/><path d="M20 34 C 21 40, 27 40, 28 34 Z" fill="#fbbf24"/>',
    robot: '<rect x="12" y="14" width="24" height="20" rx="5" fill="#e5e7eb"/><circle cx="19" cy="23" r="3.4" fill="#0ea5e9"/><circle cx="29" cy="23" r="3.4" fill="#0ea5e9"/><rect x="18" y="29" width="12" height="2.4" rx="1.2" fill="#475569"/><path d="M24 14 V8" stroke="#e5e7eb" stroke-width="2"/><circle cx="24" cy="7" r="2.4" fill="#f43f5e"/>',
    cat: '<path d="M12 20 L 13 9 L 20 15 H28 L35 9 L36 20 C 36 30, 30 36, 24 36 C 18 36, 12 30, 12 20 Z" fill="#fde68a"/><circle cx="19.5" cy="23" r="2.2" fill="#1f2937"/><circle cx="28.5" cy="23" r="2.2" fill="#1f2937"/><path d="M22 28 l2 2 l2 -2" stroke="#1f2937" stroke-width="1.5" fill="none"/>',
    star: '<path d="M24 8 l4.6 9.6 10.4 1.4 -7.6 7.2 2 10.4 -9.4 -5 -9.4 5 2 -10.4 -7.6 -7.2 10.4 -1.4 Z" fill="#fde047" stroke="#b45309" stroke-width="1.4"/><circle cx="21" cy="22" r="1.6" fill="#1f2937"/><circle cx="27" cy="22" r="1.6" fill="#1f2937"/>',
    ghost: '<path d="M14 36 V22 a10 10 0 0 1 20 0 v14 l-3.4 -2.6 -3.3 2.6 -3.3 -2.6 -3.3 2.6 -3.3 -2.6 Z" fill="#fff"/><circle cx="20.5" cy="22" r="2.2" fill="#1f2937"/><circle cx="27.5" cy="22" r="2.2" fill="#1f2937"/>',
    controller: '<path d="M12 20 C 12 15, 16 14, 20 15 H28 C 32 14, 36 15, 36 20 L 38 30 C 38 34, 34 35, 31 31 L 29 28 H19 L17 31 C 14 35, 10 34, 10 30 Z" fill="#f1f5f9"/><path d="M18 19 v6 M15 22 h6" stroke="#334155" stroke-width="2.2" stroke-linecap="round"/><circle cx="30" cy="20" r="1.8" fill="#ef4444"/><circle cx="33" cy="23.5" r="1.8" fill="#22c55e"/>',
  };
  const AVATARS = ['snake-default', 'snake-pirate', 'snake-cyber', 'snake-dark', 'snake-light', 'snake-girls', 'rocket', 'robot', 'cat', 'star', 'ghost', 'controller'];
  function avatar(id) {
    const i = Math.max(0, AVATARS.indexOf(id));
    const key = AVATARS[i], bg = AV_BG[i % AV_BG.length];
    const inner = key.startsWith('snake-') ? `<g transform="translate(8 6) scale(.8)">${miniHead(key.slice(6)).replace(/^<svg[^>]*>|<\/svg>$/g, '')}</g>` : AV_ART[key];
    return `<svg viewBox="0 0 48 48" class="pf-avatar" aria-hidden="true"><circle cx="24" cy="24" r="24" fill="${bg}"/>${inner}</svg>`;
  }
  window.PyQuestArt = { hero, boss, ICON, miniHead, avatar, AVATARS };
})();
