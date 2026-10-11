/* PyQuest — Python Pet (update 17): streak gaya TikTok.
   Setiap hari bermain, telur python membesar: telur → retak → menetas → anak → muda → dewasa → raja → legenda.
   Terlepas 1 hari = python sakit (boleh diselamatkan sekali setiap 7 hari). Terlepas lebih = python mati.
   Semua lukisan ialah SVG asli PyQuest. */
(() => {
  'use strict';
  /* Peringkat ikut bilangan hari streak (hari minimum). */
  const STAGES = [
    { id: 'egg', min: 0 },
    { id: 'crack', min: 3 },
    { id: 'hatch', min: 5 },
    { id: 'baby', min: 7 },
    { id: 'young', min: 14 },
    { id: 'adult', min: 30 },
    { id: 'king', min: 60 },
    { id: 'legend', min: 100 },
  ];
  const NAMES = {
    en: { egg: 'Python Egg', crack: 'Cracking Egg', hatch: 'Hatchling', baby: 'Baby Python', young: 'Young Python', adult: 'Grown Python', king: 'Python King', legend: 'Legendary Python' },
    ms: { egg: 'Telur Python', crack: 'Telur Retak', hatch: 'Baru Menetas', baby: 'Anak Python', young: 'Python Muda', adult: 'Python Dewasa', king: 'Raja Python', legend: 'Python Legenda' },
  };
  function stageIndex(days) { let i = 0; STAGES.forEach((s, k) => { if (days >= s.min) i = k; }); return i; }
  function stage(days) {
    const i = stageIndex(Math.max(0, days | 0));
    const next = STAGES[i + 1] || null;
    return { index: i, id: STAGES[i].id, min: STAGES[i].min, next: next ? next.id : '', nextAt: next ? next.min : 0, left: next ? next.min - days : 0,
      pct: next ? Math.round(100 * (days - STAGES[i].min) / (next.min - STAGES[i].min)) : 100 };
  }
  const name = (id, lang) => (NAMES[lang] || NAMES.en)[id] || id;

  let uid = 0;
  /* ---------- bahagian lukisan ---------- */
  const nest = () => `<g class="pet-nest"><ellipse cx="100" cy="176" rx="74" ry="16" class="pn-shadow"/><path d="M30 168 Q100 196 170 168 Q160 186 100 190 Q40 186 30 168Z" class="pn-base"/><path d="M38 170 l18 6 M60 178 l20 2 M92 182 l22 -1 M126 179 l20 -4 M150 173 l14 -5 M46 176 l-10 -8 M160 176 l8 -9" class="pn-straw"/></g>`;
  function eyes(mood, x1, x2, y, r) {
    if (mood === 'dead') return `<g class="pet-x"><path d="M${x1 - r} ${y - r} l${2 * r} ${2 * r} M${x1 + r} ${y - r} l${-2 * r} ${2 * r} M${x2 - r} ${y - r} l${2 * r} ${2 * r} M${x2 + r} ${y - r} l${-2 * r} ${2 * r}"/></g>`;
    if (mood === 'sick') return `<g class="pet-swirl"><path d="M${x1} ${y} m-${r} 0 a${r} ${r} 0 1 1 ${r} ${r} a${r * .55} ${r * .55} 0 1 1 -${r * .5} -${r * .5}"/><path d="M${x2} ${y} m-${r} 0 a${r} ${r} 0 1 1 ${r} ${r} a${r * .55} ${r * .55} 0 1 1 -${r * .5} -${r * .5}"/></g>`;
    if (mood === 'hungry') return `<g class="pet-eye"><circle cx="${x1}" cy="${y}" r="${r}"/><circle cx="${x2}" cy="${y}" r="${r}"/><path class="pet-lid" d="M${x1 - r - 1} ${y - 1} a${r + 1} ${r + 1} 0 0 1 ${2 * r + 2} 0Z M${x2 - r - 1} ${y - 1} a${r + 1} ${r + 1} 0 0 1 ${2 * r + 2} 0Z"/></g>`;
    if (mood === 'sleep') return `<g class="pet-sleep"><path d="M${x1 - r} ${y} q${r} ${r} ${2 * r} 0 M${x2 - r} ${y} q${r} ${r} ${2 * r} 0"/></g>`;
    return `<g class="pet-eye"><circle cx="${x1}" cy="${y}" r="${r}"/><circle cx="${x2}" cy="${y}" r="${r}"/><circle class="pet-shine" cx="${x1 + r * .35}" cy="${y - r * .4}" r="${r * .38}"/><circle class="pet-shine" cx="${x2 + r * .35}" cy="${y - r * .4}" r="${r * .38}"/></g>`;
  }
  function mouth(mood, x, y, w) {
    if (mood === 'dead') return `<path class="pet-mouth" d="M${x - w} ${y + 3} q${w} -6 ${2 * w} 0"/>`;
    if (mood === 'sick') return `<path class="pet-mouth" d="M${x - w} ${y + 2} q${w * .5} -5 ${w} 0 t${w} 0"/>`;
    if (mood === 'hungry') return `<ellipse class="pet-mouth-o" cx="${x}" cy="${y + 2}" rx="${w * .45}" ry="${w * .55}"/>`;
    return `<path class="pet-mouth" d="M${x - w} ${y} q${w} ${w * .9} ${2 * w} 0"/>`;
  }
  function eggFace(mood) {
    const m = mood === 'fed' ? 'sleep' : mood;   // telur yang kenyang sedang tidur lena
    return `<g class="pet-face">${eyes(m, 84, 116, 118, 6)}${mouth(mood === 'fed' ? 'happy' : mood, 100, 134, 7)}<ellipse class="pet-blush" cx="74" cy="132" rx="7" ry="4"/><ellipse class="pet-blush" cx="126" cy="132" rx="7" ry="4"/></g>`;
  }
  const eggShape = (id) => `<path class="egg-shell" d="M100 42 C140 42 156 96 156 124 C156 158 132 178 100 178 C68 178 44 158 44 124 C44 96 60 42 100 42Z"/>
    <g class="egg-spots"><ellipse class="es-b" cx="78" cy="78" rx="9" ry="7"/><ellipse class="es-y" cx="124" cy="96" rx="11" ry="8"/><ellipse class="es-b" cx="134" cy="146" rx="8" ry="6"/><ellipse class="es-y" cx="64" cy="156" rx="7" ry="5"/><ellipse class="es-b" cx="108" cy="62" rx="5" ry="4"/></g>
    <path class="egg-shine" d="M70 70 Q62 88 64 104"/>`;
  function egg(mood, cracked) {
    const crack = cracked ? `<path class="egg-crack" d="M60 104 L74 96 L82 108 L94 94 L104 108 L116 96 L126 106 L140 98"/><path class="egg-crack thin" d="M94 94 L98 82 M116 96 L122 86"/>` : '';
    return `<g class="pet-egg${cracked ? ' cracked' : ''}">${eggShape()}${crack}${eggFace(mood)}</g>`;
  }
  function hatch(mood) {
    return `<g class="pet-hatch">
      <path class="egg-shell back" d="M48 118 C48 158 70 178 100 178 C130 178 152 158 152 118 L140 110 L128 122 L114 108 L100 122 L86 108 L72 122 L60 110Z"/>
      <g class="pet-snake"><ellipse class="sn-body" cx="100" cy="98" rx="30" ry="34"/><ellipse class="sn-belly" cx="100" cy="110" rx="17" ry="22"/>
      <ellipse class="sn-head" cx="100" cy="76" rx="32" ry="26"/>${eyes(mood, 88, 112, 72, 7)}${mouth(mood, 100, 86, 6)}${mood === 'fed' ? '<path class="sn-tongue" d="M100 92 v10 l-4 5 M100 102 l4 5"/>' : ''}</g>
      <path class="egg-shell front" d="M44 122 C44 160 68 180 100 180 C132 180 156 160 156 122 L144 114 L130 128 L114 112 L100 126 L86 112 L70 128 L56 114Z"/>
      <g class="egg-spots"><ellipse class="es-b" cx="76" cy="152" rx="8" ry="6"/><ellipse class="es-y" cx="128" cy="150" rx="9" ry="6"/></g>
      <path class="egg-shell cap" d="M68 56 C72 34 128 34 132 56 L122 50 L112 60 L100 48 L88 60 L78 50Z" transform="rotate(-14 100 50)"/></g>`;
  }
  /* Ular berlingkar. opts: {scale, pattern, crown, gold, aura} */
  function coil(mood, o) {
    const s = o.scale;
    const crown = o.crown ? `<g class="pet-crown"><path d="M78 38 L84 18 L94 32 L100 12 L106 32 L116 18 L122 38Z"/><rect x="78" y="36" width="44" height="8" rx="2"/><circle class="cr-gem" cx="100" cy="40" r="3"/><circle class="cr-gem g2" cx="88" cy="40" r="2.2"/><circle class="cr-gem g2" cx="112" cy="40" r="2.2"/></g>` : '';
    const aura = o.aura ? `<g class="pet-aura"><circle cx="100" cy="112" r="88"/><path class="spark" d="M30 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4Z"/><path class="spark s2" d="M168 46 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3Z"/><path class="spark s3" d="M172 132 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3Z"/></g>` : '';
    const pat = o.pattern ? `<ellipse class="sn-pat" cx="100" cy="154" rx="62" ry="20"/><ellipse class="sn-pat" cx="100" cy="128" rx="46" ry="16"/>` : '';
    return `${aura}<g class="pet-coil${o.gold ? ' gold' : ''}" transform="translate(100 176) scale(${s}) translate(-100 -176)">
      <path class="sn-tail" d="M40 156 Q22 160 18 146 Q26 152 38 148Z"/>
      <ellipse class="sn-ring" cx="100" cy="154" rx="62" ry="20"/>
      <ellipse class="sn-ring-belly" cx="100" cy="160" rx="56" ry="13"/>
      <ellipse class="sn-ring" cx="100" cy="128" rx="46" ry="16"/>
      <ellipse class="sn-ring-belly" cx="100" cy="133" rx="40" ry="10"/>${pat}
      <path class="sn-neck" d="M136 124 C150 104 140 86 118 76"/>
      <path class="sn-neck-belly" d="M131 120 C142 104 134 90 118 82"/>
      <g class="sn-headg"><ellipse class="sn-head" cx="104" cy="66" rx="36" ry="28"/><ellipse class="sn-snout" cx="104" cy="78" rx="22" ry="12"/>${eyes(mood, 90, 118, 60, 8)}${mouth(mood, 104, 80, 7)}
      ${mood === 'fed' ? '<path class="sn-tongue" d="M104 88 v12 l-5 6 M104 100 l5 6"/>' : ''}<ellipse class="pet-blush" cx="80" cy="76" rx="6" ry="3.5"/><ellipse class="pet-blush" cx="128" cy="76" rx="6" ry="3.5"/>${crown}</g></g>`;
  }
  function extras(mood) {
    if (mood === 'dead') return `<g class="pet-halo"><ellipse cx="100" cy="22" rx="30" ry="8"/></g>`;
    if (mood === 'sick') return `<g class="pet-sick"><path class="drop" d="M150 54 q8 12 0 18 q-8 -6 0 -18Z"/><path class="drop d2" d="M46 70 q6 9 0 14 q-6 -5 0 -14Z"/></g>`;
    if (mood === 'hungry') return `<g class="pet-think"><circle cx="150" cy="48" r="4"/><circle cx="160" cy="34" r="6"/><ellipse cx="174" cy="16" rx="20" ry="13"/><text x="174" y="21" text-anchor="middle">&lt;/&gt;</text></g>`;
    if (mood === 'fed') return `<g class="pet-hearts"><path d="M160 40 c-4 -8 -14 -4 -10 4 l10 10 l10 -10 c4 -8 -6 -12 -10 -4Z"/><path class="h2" d="M40 54 c-3 -6 -10 -3 -7 3 l7 7 l7 -7 c3 -6 -4 -9 -7 -3Z"/></g>`;
    return '';
  }
  const tomb = () => `<g class="pet-tomb"><path d="M60 178 V86 Q60 50 100 50 Q140 50 140 86 V178Z"/><text x="100" y="104" text-anchor="middle" class="t1">R.I.P</text><path class="tomb-snake" d="M78 140 q10 -12 22 0 t22 0"/><circle class="tomb-eye" cx="122" cy="138" r="2"/></g>`;
  /* svg(days, mood): mood = fed | hungry | sick | dead | new */
  function svg(days, mood, extraCls) {
    const st = stage(days);
    const m = mood === 'new' ? 'fed' : mood;
    let art = '';
    if (mood === 'dead') art = tomb();
    else if (st.id === 'egg') art = egg(m, false);
    else if (st.id === 'crack') art = egg(m, true);
    else if (st.id === 'hatch') art = hatch(m);
    else {
      const o = { baby: { scale: .62 }, young: { scale: .78, pattern: true }, adult: { scale: .94, pattern: true }, king: { scale: 1, pattern: true, crown: true }, legend: { scale: 1, pattern: true, crown: true, gold: true, aura: true } }[st.id];
      art = coil(m, o);
    }
    const id = 'pet' + (++uid);
    return `<svg class="pet-svg st-${st.id} mood-${mood}${extraCls ? ' ' + extraCls : ''}" viewBox="0 0 200 200" role="img" aria-labelledby="${id}"><title id="${id}">${st.id}</title>${nest()}<g class="pet-bob">${art}</g>${extras(mood === 'new' ? '' : m)}</svg>`;
  }
  window.PyQuestPet = { STAGES, stage, stageIndex, name, svg };
})();
