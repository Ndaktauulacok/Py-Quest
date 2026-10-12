/* PyQuest — Pyko Runner (update 19): jurubahasa Python mini yang berjalan terus dalam pelayar.
   Menyokong Python asas untuk pelajar: pemboleh ubah, nombor (int besar & float), string, f-string, list, tuple,
   dict, set, if/elif/else, for, while, break/continue, fungsi (def/return/lambda), try/except/raise,
   list comprehension, import math / random, input() dan banyak fungsi terbina dalam.
   Mesej ralat meniru Python sebenar supaya pelajar belajar membaca ralat. Ciri yang belum disokong
   dilaporkan dengan jelas (bukan diteka). Disahkan dengan CPython melalui ujian automatik. */
(() => {
  'use strict';

  /* =========================== nilai =========================== */
  const NONE = null;
  class PyList { constructor(items) { this.items = items || []; } }
  class PyTuple { constructor(items) { this.items = items || []; } }
  class PyDict { constructor() { this.map = new Map(); } }   // key -> [k, v]
  class PySet { constructor() { this.map = new Map(); } }    // key -> k
  class PyRange { constructor(a, b, c) { this.start = a; this.stop = b; this.step = c; } }
  class PyFunc { constructor(o) { Object.assign(this, o); } }
  class PyBuiltin { constructor(name, fn, typeName) { this.name = name; this.fn = fn; this.typeName = typeName || ''; } }
  class PyMethod { constructor(self, name, fn) { this.self = self; this.name = name; this.fn = fn; } }
  class PyModule { constructor(name, attrs) { this.name = name; this.attrs = attrs; } }
  class PyType { constructor(name, call) { this.name = name; this.call = call; } }
  class PyView { constructor(kind, dict) { this.kind = kind; this.dict = dict; } }
  class PyIter { constructor(arr, kind) { this.arr = arr; this.kind = kind; } }   // enumerate/zip/map/filter/reversed
  class PyClass { constructor(o) { Object.assign(this, o); } }                    // kelas ciptaan pelajar
  class PyInstance { constructor(cls) { this.cls = cls; this.attrs = new Map(); this.addr = 0x7f3a2c000000 + Math.floor(Math.random() * 0xffff) * 16; } }
  class PyBound { constructor(self, func) { this.self = self; this.func = func; } }
  class PySuper { constructor(cls, self) { this.cls = cls; this.self = self; } }
  let HOOK = null;   // fungsi dalaman run() untuk __str__/__repr__/operator

  class PyError extends Error { constructor(type, msg, line) { super(msg); this.type = type; this.pyMsg = msg; this.line = line; } }
  class Unsupported extends Error { constructor(what, line) { super(what); this.what = what; this.line = line; } }
  class NeedInput extends Error {}
  class BreakSig {} class ContinueSig {}
  class ReturnSig { constructor(v) { this.value = v; } }
  const BREAK = new BreakSig(), CONTINUE = new ContinueSig();

  const err = (type, msg) => { throw new PyError(type, msg); };
  const isInt = (v) => typeof v === 'bigint';
  const isFloat = (v) => typeof v === 'number';
  const isBool = (v) => typeof v === 'boolean';
  const isNum = (v) => isInt(v) || isFloat(v) || isBool(v);
  const isStr = (v) => typeof v === 'string';

  function typeName(v) {
    if (v === NONE) return 'NoneType';
    if (v && v.__exc) return v.type;
    if (v instanceof PyInstance) return v.cls.name;
    if (v instanceof PyClass) return 'type';
    if (v instanceof PyBound) return 'method';
    if (v instanceof PySuper) return 'super';
    if (isBool(v)) return 'bool';
    if (isInt(v)) return 'int';
    if (isFloat(v)) return 'float';
    if (isStr(v)) return 'str';
    if (v instanceof PyList) return 'list';
    if (v instanceof PyTuple) return 'tuple';
    if (v instanceof PyDict) return 'dict';
    if (v instanceof PySet) return 'set';
    if (v instanceof PyRange) return 'range';
    if (v instanceof PyFunc) return 'function';
    if (v instanceof PyBuiltin) return 'builtin_function_or_method';
    if (v instanceof PyMethod) return 'builtin_function_or_method';
    if (v instanceof PyModule) return 'module';
    if (v instanceof PyType) return 'type';
    if (v instanceof PyView) return 'dict_' + v.kind;
    if (v instanceof PyIter) return v.kind;
    return 'object';
  }

  /* ------- nombor ------- */
  const toBig = (v) => (isBool(v) ? (v ? 1n : 0n) : v);
  const toF = (v) => (isBool(v) ? (v ? 1 : 0) : isInt(v) ? Number(v) : v);
  function floatRepr(x) {
    if (Number.isNaN(x)) return 'nan';
    if (!Number.isFinite(x)) return x > 0 ? 'inf' : '-inf';
    if (x === 0) return Object.is(x, -0) ? '-0.0' : '0.0';
    const s = x.toExponential();                     // digit terpendek yang tepat
    const m = /^(-?)(\d)(?:\.(\d+))?e([+-]\d+)$/.exec(s);
    const sign = m[1], digits = m[2] + (m[3] || ''), e = parseInt(m[4], 10);
    if (e >= -4 && e < 16) {
      if (e >= 0) {
        const intPart = digits.length > e + 1 ? digits.slice(0, e + 1) : digits + '0'.repeat(e + 1 - digits.length);
        const frac = digits.length > e + 1 ? digits.slice(e + 1) : '0';
        return sign + intPart + '.' + frac;
      }
      return sign + '0.' + '0'.repeat(-e - 1) + digits;
    }
    const mant = digits.length > 1 ? digits[0] + '.' + digits.slice(1) : digits;
    return sign + mant + 'e' + (e < 0 ? '-' : '+') + String(Math.abs(e)).padStart(2, '0');
  }
  /* Nilai tepat bagi double sebagai pecahan BigInt: x = num / den */
  function exactRatio(x) {
    const buf = new DataView(new ArrayBuffer(8)); buf.setFloat64(0, x);
    const hi = buf.getUint32(0), lo = buf.getUint32(4);
    const sign = hi >>> 31 ? -1n : 1n, exp = (hi >>> 20) & 0x7ff;
    let mant = (BigInt(hi & 0xfffff) << 32n) | BigInt(lo);
    let e;
    if (exp === 0) e = -1074; else { mant |= 1n << 52n; e = exp - 1075; }
    if (e >= 0) return { num: sign * (mant << BigInt(e)), den: 1n };
    return { num: sign * mant, den: 1n << BigInt(-e) };
  }
  /* Bundarkan x kepada p tempat perpuluhan (bundar separuh-genap tepat seperti Python). Pulangkan BigInt N = x*10^p dibundar. */
  function roundScaled(x, p) {
    const { num, den } = exactRatio(x);
    let n = num, d = den;
    if (p >= 0) n *= 10n ** BigInt(p); else d *= 10n ** BigInt(-p);
    const neg = n < 0n; if (neg) n = -n;
    let q = n / d; const r = n % d;
    if (r * 2n > d || (r * 2n === d && q % 2n === 1n)) q += 1n;
    return neg ? -q : q;
  }
  function fixed(x, p) {
    if (!Number.isFinite(x)) return floatRepr(x);
    const q = roundScaled(x, p);
    const neg = q < 0n || (q === 0n && (x < 0 || Object.is(x, -0)));
    let s = (q < 0n ? -q : q).toString();
    if (p > 0) { s = s.padStart(p + 1, '0'); s = s.slice(0, -p) + '.' + s.slice(-p); }
    return (neg ? '-' : '') + s;
  }

  /* ------- repr / str ------- */
  function strRepr(s) {
    const q = s.includes("'") && !s.includes('"') ? '"' : "'";
    let out = q;
    for (const ch of s) {
      const c = ch.codePointAt(0);
      if (ch === '\\') out += '\\\\';
      else if (ch === q) out += '\\' + q;
      else if (ch === '\n') out += '\\n';
      else if (ch === '\t') out += '\\t';
      else if (ch === '\r') out += '\\r';
      else if (c < 32 || c === 127) out += '\\x' + c.toString(16).padStart(2, '0');
      else out += ch;
    }
    return out + q;
  }
  function repr(v, seen) {
    if (v === NONE) return 'None';
    if (isBool(v)) return v ? 'True' : 'False';
    if (isInt(v)) return v.toString();
    if (isFloat(v)) return floatRepr(v);
    if (isStr(v)) return strRepr(v);
    seen = seen || new Set();
    if (seen.has(v)) return v instanceof PyList ? '[...]' : '{...}';
    seen.add(v);
    try {
      if (v instanceof PyList) return '[' + v.items.map((x) => repr(x, seen)).join(', ') + ']';
      if (v instanceof PyTuple) return v.items.length === 1 ? '(' + repr(v.items[0], seen) + ',)' : '(' + v.items.map((x) => repr(x, seen)).join(', ') + ')';
      if (v instanceof PyDict) return '{' + [...v.map.values()].map(([k, x]) => repr(k, seen) + ': ' + repr(x, seen)).join(', ') + '}';
      if (v instanceof PySet) return v.map.size ? '{' + setOrder(v).map((x) => repr(x, seen)).join(', ') + '}' : 'set()';
    } finally { seen.delete(v); }
    if (v instanceof PyRange) return 'range(' + v.start + ', ' + v.stop + (v.step !== 1n ? ', ' + v.step : '') + ')';
    if (v instanceof PyFunc) return '<function ' + v.name + '>';
    if (v instanceof PyBuiltin) return '<built-in function ' + v.name + '>';
    if (v instanceof PyMethod) return '<built-in method ' + v.name + '>';
    if (v instanceof PyModule) return "<module '" + v.name + "'>";
    if (v instanceof PyType) return "<class '" + v.name + "'>";
    if (v instanceof PyView) return 'dict_' + v.kind + '(' + repr(new PyList(viewItems(v))) + ')';
    if (v instanceof PyIter) return '<' + v.kind + ' object>';
    if (v && v.__exc) return v.type + '(' + (v.msg ? strRepr(v.msg) : '') + ')';
    if (v instanceof PyClass) return "<class '__main__." + v.name + "'>";
    if (v instanceof PyInstance) return HOOK ? HOOK.text(v, 'repr') : '<' + v.cls.name + ' object>';
    if (v instanceof PyBound) return '<bound method ' + v.func.qualname + ' of ' + repr(v.self) + '>';
    return '<object>';
  }
  const str = (v) => (isStr(v) ? v : v && v.__exc ? v.msg : v instanceof PyInstance && HOOK ? HOOK.text(v, 'str') : repr(v));
  /* Susunan set: integer kecil disusun menaik (seperti CPython untuk nombor kecil), lain-lain ikut masukan. */
  function setOrder(s) {
    const vals = [...s.map.values()];
    if (vals.length && vals.every((x) => (isInt(x) || isBool(x)) && toBig(x) >= 0n && toBig(x) < 32n)) return vals.slice().sort((a, b) => (toBig(a) < toBig(b) ? -1 : 1));
    return vals;
  }

  /* ------- kunci hash ------- */
  function hkey(v) {
    if (v === NONE) return 'N';
    if (isBool(v) || isInt(v)) return 'n' + toBig(v).toString();
    if (isFloat(v)) return Number.isInteger(v) ? 'n' + BigInt(v).toString() : 'f' + v;
    if (isStr(v)) return 's' + v;
    if (v instanceof PyTuple) return 't(' + v.items.map(hkey).join(',') + ')';
    if (v instanceof PyFunc || v instanceof PyBuiltin || v instanceof PyType) return 'o' + (v.__id || (v.__id = Math.random()));
    err('TypeError', "unhashable type: '" + typeName(v) + "'");
  }
  const dictGet = (d, k) => { const e = d.map.get(hkey(k)); return e ? e[1] : undefined; };
  const dictSet = (d, k, v) => { const h = hkey(k); const e = d.map.get(h); if (e) e[1] = v; else d.map.set(h, [k, v]); };
  const viewItems = (v) => [...v.dict.map.values()].map(([k, x]) => (v.kind === 'keys' ? k : v.kind === 'values' ? x : new PyTuple([k, x])));

  /* ------- kebenaran & kesamaan ------- */
  function truthy(v) {
    if (v === NONE) return false;
    if (isBool(v)) return v;
    if (isInt(v)) return v !== 0n;
    if (isFloat(v)) return v !== 0;
    if (isStr(v)) return v.length > 0;
    if (v instanceof PyList || v instanceof PyTuple) return v.items.length > 0;
    if (v instanceof PyDict || v instanceof PySet) return v.map.size > 0;
    if (v instanceof PyRange) return rangeLen(v) > 0n;
    if (v instanceof PyView) return v.dict.map.size > 0;
    return true;
  }
  function eq(a, b) {
    if ((a instanceof PyInstance || b instanceof PyInstance) && HOOK) { const r = HOOK.dunder('__eq__', a, b); if (r !== undefined) return truthy(r); return a === b; }
    if (isNum(a) && isNum(b)) {
      if (isFloat(a) || isFloat(b)) return toF(a) === toF(b);
      return toBig(a) === toBig(b);
    }
    if (isStr(a) && isStr(b)) return a === b;
    if (a === NONE || b === NONE) return a === b;
    if ((a instanceof PyList && b instanceof PyList) || (a instanceof PyTuple && b instanceof PyTuple)) {
      if (a.items.length !== b.items.length) return false;
      return a.items.every((x, i) => eq(x, b.items[i]));
    }
    if (a instanceof PyDict && b instanceof PyDict) {
      if (a.map.size !== b.map.size) return false;
      for (const [h, [, v]] of a.map) { const e = b.map.get(h); if (!e || !eq(v, e[1])) return false; }
      return true;
    }
    if (a instanceof PySet && b instanceof PySet) { if (a.map.size !== b.map.size) return false; for (const h of a.map.keys()) if (!b.map.has(h)) return false; return true; }
    if (a instanceof PyRange && b instanceof PyRange) return eq(new PyList(iterArr(a)), new PyList(iterArr(b)));
    return a === b;
  }
  function cmp(a, b, op) {
    const fail = () => err('TypeError', "'" + op + "' not supported between instances of '" + typeName(a) + "' and '" + typeName(b) + "'");
    if ((a instanceof PyInstance || b instanceof PyInstance) && HOOK) {
      const lt = HOOK.dunder('__lt__', a, b); if (lt !== undefined) { if (truthy(lt)) return -1; const gt = HOOK.dunder('__lt__', b, a); return gt !== undefined && truthy(gt) ? 1 : 0; }
      return fail();
    }
    if (isNum(a) && isNum(b)) {
      if (isFloat(a) || isFloat(b)) { const x = toF(a), y = toF(b); return x < y ? -1 : x > y ? 1 : x === y ? 0 : NaN; }
      const x = toBig(a), y = toBig(b); return x < y ? -1 : x > y ? 1 : 0;
    }
    if (isStr(a) && isStr(b)) { const x = [...a], y = [...b]; for (let i = 0; i < Math.min(x.length, y.length); i++) { const c1 = x[i].codePointAt(0), c2 = y[i].codePointAt(0); if (c1 !== c2) return c1 < c2 ? -1 : 1; } return x.length - y.length < 0 ? -1 : x.length > y.length ? 1 : 0; }
    if ((a instanceof PyList && b instanceof PyList) || (a instanceof PyTuple && b instanceof PyTuple)) {
      for (let i = 0; i < Math.min(a.items.length, b.items.length); i++) { if (!eq(a.items[i], b.items[i])) return cmp(a.items[i], b.items[i], op); }
      return a.items.length < b.items.length ? -1 : a.items.length > b.items.length ? 1 : 0;
    }
    if (a instanceof PySet && b instanceof PySet && (op === '<=' || op === '>=' || op === '<' || op === '>')) {
      const sub = (x, y) => [...x.map.keys()].every((h) => y.map.has(h));
      if (op === '<=') return sub(a, b) ? -1 : 1; if (op === '>=') return sub(b, a) ? 1 : -1;
      if (op === '<') return sub(a, b) && a.map.size < b.map.size ? -1 : 1; return sub(b, a) && a.map.size > b.map.size ? 1 : -1;
    }
    return fail();
  }

  /* ------- lelaran ------- */
  const rangeLen = (r) => { const { start, stop, step } = r; if (step > 0n) return stop > start ? (stop - start + step - 1n) / step : 0n; return start > stop ? (start - stop - step - 1n) / -step : 0n; };
  function iterArr(v, ctx) {
    if (isStr(v)) return [...v];
    if (v instanceof PyList || v instanceof PyTuple) return v.items.slice();
    if (v instanceof PyDict) return [...v.map.values()].map((e) => e[0]);
    if (v instanceof PySet) return setOrder(v);
    if (v instanceof PyView) return viewItems(v);
    if (v instanceof PyIter) { const a = v.arr; v.arr = []; return a; }
    if (v instanceof PyRange) {
      const n = rangeLen(v); if (n > 1000000n) throw new Unsupported('range-too-big');
      const out = []; for (let i = 0n, x = v.start; i < n; i++, x += v.step) out.push(x); return out;
    }
    err('TypeError', "'" + typeName(v) + "' object is not iterable");
  }

  /* ------- aritmetik ------- */
  const DUNDER = { '+': '__add__', '-': '__sub__', '*': '__mul__', '/': '__truediv__', '//': '__floordiv__', '%': '__mod__', '**': '__pow__' };
  function binop(op, a, b) {
    const ta = typeName(a), tb = typeName(b);
    if ((a instanceof PyInstance || b instanceof PyInstance) && HOOK && DUNDER[op]) { const r = HOOK.dunder(DUNDER[op], a, b); if (r !== undefined) return r; }
    const unsup = () => err('TypeError', 'unsupported operand type(s) for ' + op + ": '" + ta + "' and '" + tb + "'");
    if (isNum(a) && isNum(b)) {
      const fl = isFloat(a) || isFloat(b);
      if (op === '+') return fl ? toF(a) + toF(b) : toBig(a) + toBig(b);
      if (op === '-') return fl ? toF(a) - toF(b) : toBig(a) - toBig(b);
      if (op === '*') return fl ? toF(a) * toF(b) : toBig(a) * toBig(b);
      if (op === '/') { const y = toF(b); if (y === 0) err('ZeroDivisionError', fl ? 'float division by zero' : 'division by zero'); if (!fl) { const x = toBig(a), z = toBig(b); if (x % z === 0n && (x / z) < 9007199254740992n && (x / z) > -9007199254740992n) return Number(x / z); } return toF(a) / y; }
      if (op === '//') {
        if (fl) { const y = toF(b); if (y === 0) err('ZeroDivisionError', 'float floor division by zero'); return Math.floor(toF(a) / y); }
        const x = toBig(a), y = toBig(b); if (y === 0n) err('ZeroDivisionError', 'integer division or modulo by zero');
        let q = x / y; if ((x % y !== 0n) && ((x < 0n) !== (y < 0n))) q -= 1n; return q;
      }
      if (op === '%') {
        if (fl) { const y = toF(b); if (y === 0) err('ZeroDivisionError', 'float modulo by zero'); let r = toF(a) % y; if (r !== 0 && (r < 0) !== (y < 0)) r += y; return r === 0 ? (y < 0 ? -0 : 0) : r; }
        const x = toBig(a), y = toBig(b); if (y === 0n) err('ZeroDivisionError', 'integer modulo by zero');
        let r = x % y; if (r !== 0n && (r < 0n) !== (y < 0n)) r += y; return r;
      }
      if (op === '**') {
        if (!fl) {
          const x = toBig(a), y = toBig(b);
          if (y < 0n) { if (x === 0n) err('ZeroDivisionError', 'zero to a negative power'); return Math.pow(Number(x), Number(y)); }
          if (y > 10000n && x !== 0n && x !== 1n && x !== -1n) throw new Unsupported('huge-number');
          const r = x ** y; if (r.toString().length > 4300) err('ValueError', 'Exceeds the limit (4300 digits) for integer string conversion');
          return r;
        }
        const x = toF(a), y = toF(b);
        if (x === 0 && y < 0) err('ZeroDivisionError', 'zero to a negative power');
        if (x < 0 && !Number.isInteger(y)) throw new Unsupported('complex-numbers');
        return Math.pow(x, y);
      }
      if (op === '&' || op === '|' || op === '^' || op === '<<' || op === '>>') {
        if (fl) unsup();
        const x = toBig(a), y = toBig(b);
        if (op === '&') return isBool(a) && isBool(b) ? Boolean(x & y) : x & y;
        if (op === '|') return isBool(a) && isBool(b) ? Boolean(x | y) : x | y;
        if (op === '^') return isBool(a) && isBool(b) ? Boolean(x ^ y) : x ^ y;
        if (y < 0n) err('ValueError', 'negative shift count');
        return op === '<<' ? x << y : x >> y;
      }
    }
    if (op === '+') {
      if (isStr(a)) { if (isStr(b)) return a + b; err('TypeError', 'can only concatenate str (not "' + tb + '") to str'); }
      if (a instanceof PyList) { if (b instanceof PyList) return new PyList(a.items.concat(b.items)); err('TypeError', 'can only concatenate list (not "' + tb + '") to list'); }
      if (a instanceof PyTuple) { if (b instanceof PyTuple) return new PyTuple(a.items.concat(b.items)); err('TypeError', 'can only concatenate tuple (not "' + tb + '") to tuple'); }
    }
    if (op === '*') {
      const seqTimes = (s, n) => {
        if (!(isInt(n) || isBool(n))) err('TypeError', "can't multiply sequence by non-int of type '" + typeName(n) + "'");
        const k = Number(toBig(n)); if (k <= 0) return isStr(s) ? '' : s instanceof PyList ? new PyList([]) : new PyTuple([]);
        if (isStr(s)) { if (s.length * k > 1000000) throw new Unsupported('huge-string'); return s.repeat(k); }
        if (s.items.length * k > 200000) throw new Unsupported('huge-list');
        let out = []; for (let i = 0; i < k; i++) out = out.concat(s.items); return s instanceof PyList ? new PyList(out) : new PyTuple(out);
      };
      if (isStr(a) || a instanceof PyList || a instanceof PyTuple) return seqTimes(a, b);
      if (isStr(b) || b instanceof PyList || b instanceof PyTuple) return seqTimes(b, a);
    }
    if (op === '%' && isStr(a)) return percentFormat(a, b);
    if (a instanceof PySet && b instanceof PySet && '|&-^'.includes(op)) {
      const out = new PySet();
      if (op === '|') { for (const [h, v] of a.map) out.map.set(h, v); for (const [h, v] of b.map) if (!out.map.has(h)) out.map.set(h, v); }
      if (op === '&') for (const [h, v] of a.map) { if (b.map.has(h)) out.map.set(h, v); }
      if (op === '-') for (const [h, v] of a.map) { if (!b.map.has(h)) out.map.set(h, v); }
      if (op === '^') { for (const [h, v] of a.map) if (!b.map.has(h)) out.map.set(h, v); for (const [h, v] of b.map) if (!a.map.has(h)) out.map.set(h, v); }
      return out;
    }
    if (op === '|' && a instanceof PyDict && b instanceof PyDict) { const d = new PyDict(); for (const [h, e] of a.map) d.map.set(h, [e[0], e[1]]); for (const [, e] of b.map) dictSet(d, e[0], e[1]); return d; }
    return unsup();
  }
  function contains(container, item) {
    if (isStr(container)) { if (!isStr(item)) err('TypeError', "'in <string>' requires string as left operand, not " + typeName(item)); return container.includes(item); }
    if (container instanceof PyList || container instanceof PyTuple) return container.items.some((x) => eq(x, item));
    if (container instanceof PyDict || container instanceof PySet) return container.map.has(hkey(item));
    if (container instanceof PyView) return viewItems(container).some((x) => eq(x, item));
    if (container instanceof PyRange) return iterArr(container).some((x) => eq(x, item));
    err('TypeError', "argument of type '" + typeName(container) + "' is not iterable");
  }

  /* ------- format ------- */
  function formatSpec(v, spec) {
    if (!spec) return str(v);
    const m = /^(?:(.)?([<>^=]))?([+\- ])?(#)?(0)?(\d+)?([,_])?(?:\.(\d+))?([bcdeEfFgGnosxX%])?$/.exec(spec);
    if (!m) err('ValueError', "Invalid format specifier '" + spec + "' for object of type '" + typeName(v) + "'");
    let [, fill, align, sign, , zero, width, group, prec, type] = m;
    fill = fill || (zero && !align ? '0' : ' ');
    if (zero && !align) align = '=';
    let s;
    const numeric = isNum(v);
    if (type && 'dbxXoc'.includes(type)) {
      if (!(isInt(v) || isBool(v))) err('ValueError', "Unknown format code '" + type + "' for object of type '" + typeName(v) + "'");
      const n = toBig(v);
      if (type === 'c') s = String.fromCodePoint(Number(n));
      else { const base = { d: 10, b: 2, x: 16, X: 16, o: 8 }[type]; s = (n < 0n ? -n : n).toString(base); if (type === 'X') s = s.toUpperCase(); if (group) s = groupDigits(s, group); if (n < 0n) s = '-' + s; else if (sign === '+') s = '+' + s; else if (sign === ' ') s = ' ' + s; }
    } else if (type && 'fFeE%gG'.includes(type) || (!type && isFloat(v) && prec !== undefined)) {
      if (!numeric) err('ValueError', "Unknown format code '" + (type || 'f') + "' for object of type '" + typeName(v) + "'");
      let x = toF(v), p = prec !== undefined ? parseInt(prec, 10) : 6;
      if (type === '%') { x *= 100; }
      if (type === 'e' || type === 'E') { s = x.toExponential(p).replace(/e([+-])(\d)$/, 'e$10$2'); if (type === 'E') s = s.toUpperCase(); }
      else if (type === 'g' || type === 'G' || !type) { s = floatRepr(Number(x.toPrecision(Math.max(1, p)))); if (s.endsWith('.0')) s = s.slice(0, -2); }
      else s = fixed(x, p);
      if (group && !/e/i.test(s)) { const [ip, fp] = s.replace('-', '').split('.'); s = (s.startsWith('-') ? '-' : '') + groupDigits(ip, group) + (fp !== undefined ? '.' + fp : ''); }
      if (type === '%') s += '%';
      if (!s.startsWith('-')) { if (sign === '+') s = '+' + s; else if (sign === ' ') s = ' ' + s; }
    } else if (type === 's' || !type) {
      if (type === 's' && !isStr(v)) err('ValueError', "Unknown format code 's' for object of type '" + typeName(v) + "'");
      s = str(v);
      if (prec !== undefined && isStr(v)) s = s.slice(0, parseInt(prec, 10));
      if (numeric && (isInt(v) || isBool(v)) && group) s = (toBig(v) < 0n ? '-' : '') + groupDigits((toBig(v) < 0n ? -toBig(v) : toBig(v)).toString(), group);
      if (numeric && !isStr(v)) { if (sign === '+' && !s.startsWith('-')) s = '+' + s; }
    } else err('ValueError', "Unknown format code '" + type + "'");
    const w = width ? parseInt(width, 10) : 0;
    if (s.length < w) {
      const pad = w - [...s].length;
      const al = align || (numeric ? '>' : '<');
      if (al === '<') s = s + fill.repeat(pad);
      else if (al === '>') s = fill.repeat(pad) + s;
      else if (al === '^') { const l = Math.floor(pad / 2); s = fill.repeat(l) + s + fill.repeat(pad - l); }
      else if (al === '=') { const sg = /^[+\- ]/.test(s) ? s[0] : ''; s = sg + fill.repeat(pad) + s.slice(sg.length); }
    }
    return s;
  }
  const groupDigits = (s, g) => s.replace(/\B(?=(\d{3})+(?!\d))/g, g);
  function percentFormat(fmt, args) {
    const list = args instanceof PyTuple ? args.items.slice() : [args];
    let i = 0;
    const out = fmt.replace(/%(-)?(\d+)?(?:\.(\d+))?([sdifr%])/g, (all, left, w, p, t) => {
      if (t === '%') return '%';
      if (i >= list.length) err('TypeError', 'not enough arguments for format string');
      const v = list[i++];
      let s;
      if (t === 's') s = str(v); else if (t === 'r') s = repr(v);
      else { if (!isNum(v)) err('TypeError', '%' + t + ' format: a real number is required, not ' + typeName(v)); s = t === 'f' ? fixed(toF(v), p !== undefined ? +p : 6) : (isFloat(v) ? (v < 0 ? Math.ceil(v) : Math.floor(v)) : toBig(v)).toString(); }
      if (w) s = left ? s.padEnd(+w) : s.padStart(+w);
      return s;
    });
    if (i < list.length) err('TypeError', 'not all arguments converted during string formatting');
    return out;
  }
  function strFormat(fmt, args, kwargs) {
    let auto = 0;
    return fmt.replace(/\{\{|\}\}|\{([^{}]*)\}/g, (all, inner) => {
      if (all === '{{') return '{'; if (all === '}}') return '}';
      const [field, spec] = inner.split(/:(.*)/s);
      let v;
      if (field === '') { if (auto >= args.length) err('IndexError', 'Replacement index ' + auto + ' out of range for positional args tuple'); v = args[auto++]; }
      else if (/^\d+$/.test(field)) { const k = +field; if (k >= args.length) err('IndexError', 'Replacement index ' + k + ' out of range for positional args tuple'); v = args[k]; }
      else { if (!kwargs.has(field)) err('KeyError', strRepr(field)); v = kwargs.get(field); }
      return formatSpec(v, spec || '');
    });
  }

  /* =========================== lexer =========================== */
  const KW = new Set(['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']);
  const OPS = ['**=', '//=', '>>=', '<<=', '...', '->', '**', '//', '==', '!=', '<=', '>=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<', '>>', ':=', '+', '-', '*', '/', '%', '<', '>', '=', '(', ')', '[', ']', '{', '}', ',', ':', '.', ';', '@', '&', '|', '^', '~'];
  const SynErr = (msg, line) => new PyError('SyntaxError', msg, line);
  function lex(src) {
    const toks = [];
    const lines = src.replace(/\r\n?/g, '\n').split('\n');
    const indents = [0];
    const brackets = [];   // [char, line]
    let i = 0;   // indeks baris
    let cont = false;
    const push = (t, v, line, col) => toks.push({ t, v, line, col });
    while (i < lines.length) {
      let line = lines[i], pos = 0;
      const lineNo = i + 1;
      if (!brackets.length && !cont) {
        // kira indentasi
        let col = 0;
        while (pos < line.length && (line[pos] === ' ' || line[pos] === '\t')) { col = line[pos] === '\t' ? (Math.floor(col / 8) + 1) * 8 : col + 1; pos++; }
        if (pos >= line.length || line[pos] === '#') { i++; continue; }   // baris kosong
        const top = indents[indents.length - 1];
        if (col > top) {
          const prev = toks[toks.length - 1];
          indents.push(col); push('INDENT', col, lineNo, 0);
        } else if (col < top) {
          while (col < indents[indents.length - 1]) { indents.pop(); push('DEDENT', col, lineNo, 0); }
          if (col !== indents[indents.length - 1]) throw new PyError('IndentationError', 'unindent does not match any outer indentation level', lineNo);
        }
      }
      cont = false;
      while (pos < line.length) {
        const ch = line[pos];
        if (ch === ' ' || ch === '\t') { pos++; continue; }
        if (ch === '#') break;
        if (ch === '\\' && pos === line.length - 1) { cont = true; pos++; break; }
        // string
        const sm = /^([rRfFbBuU]{0,2})("""|'''|"|')/.exec(line.slice(pos));
        if (sm && (sm[1] === '' || /^(?:[rRfFbBuU]|[fF][rR]|[rR][fF])$/.test(sm[1]))) {
          const prefix = sm[1].toLowerCase(), q = sm[2];
          if (prefix.includes('b')) throw new Unsupported('bytes', lineNo);
          let j = pos + sm[0].length, val = '', curLine = i, fdepth = 0;
          const isF = prefix.includes('f');
          const startLine = lineNo;
          for (;;) {
            if (j >= line.length) {
              if (q.length === 3) { val += '\n'; curLine++; if (curLine >= lines.length) throw SynErr('unterminated triple-quoted string literal (detected at line ' + curLine + ')', startLine); line = lines[curLine]; j = 0; continue; }
              throw SynErr('unterminated string literal (detected at line ' + startLine + ')', startLine);
            }
            if (isF && fdepth > 0) {
              const c0 = line[j];
              if (c0 === '{') fdepth++; else if (c0 === '}') fdepth--;
              else if (c0 === '"' || c0 === "'") { const k = line.indexOf(c0, j + 1); if (k > j) { val += line.slice(j, k + 1); j = k + 1; continue; } }
              val += c0; j++; continue;
            }
            if (line.startsWith(q, j)) { j += q.length; break; }
            const c = line[j];
            if (isF && c === '{') { if (line[j + 1] === '{') { val += '{{'; j += 2; continue; } fdepth = 1; val += c; j++; continue; }
            if (c === '\\' && !prefix.includes('r')) {
              if (j + 1 >= line.length) { curLine++; if (curLine >= lines.length) throw SynErr('unterminated string literal (detected at line ' + startLine + ')', startLine); line = lines[curLine]; j = 0; continue; }
              const n = line[j + 1];
              const map = { n: '\n', t: '\t', r: '\r', '\\': '\\', "'": "'", '"': '"', '0': '\0', a: '\x07', b: '\b', f: '\f', v: '\v' };
              if (n in map) { val += map[n]; j += 2; continue; }
              if (n === 'x' && /^[0-9a-fA-F]{2}$/.test(line.substr(j + 2, 2))) { val += String.fromCharCode(parseInt(line.substr(j + 2, 2), 16)); j += 4; continue; }
              if (n === 'u' && /^[0-9a-fA-F]{4}$/.test(line.substr(j + 2, 4))) { val += String.fromCharCode(parseInt(line.substr(j + 2, 4), 16)); j += 6; continue; }
              if (n === 'N') throw new Unsupported('unicode-names', lineNo);
              val += '\\' + n; j += 2; continue;
            }
            val += c; j++;
          }
          if (curLine !== i) { i = curLine; }
          push(prefix.includes('f') ? 'FSTR' : 'STR', val, startLine, pos);
          pos = j;
          continue;
        }
        // nombor
        const nm = /^(?:0[xX][0-9a-fA-F_]+|0[bB][01_]+|0[oO][0-7_]+|(?:\d[\d_]*(?:\.[\d_]*)?|\.\d[\d_]*)(?:[eE][+-]?\d+)?[jJ]?)/.exec(line.slice(pos));
        if (nm && nm[0] && /[\d]/.test(nm[0])) {
          let s = nm[0].replace(/_/g, '');
          if (/[jJ]$/.test(s)) throw new Unsupported('complex-numbers', lineNo);
          let v;
          if (/^0[xX]/.test(s)) v = BigInt(s); else if (/^0[bB]/.test(s)) v = BigInt(s); else if (/^0[oO]/.test(s)) v = BigInt(s);
          else if (/[.eE]/.test(s)) v = parseFloat(s);
          else { if (/^0\d/.test(s) && /[1-9]/.test(s)) throw SynErr('leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers', lineNo); v = BigInt(s); }
          push('NUM', v, lineNo, pos); pos += nm[0].length;
          if (/^[A-Za-z_]/.test(line.slice(pos))) throw SynErr('invalid decimal literal', lineNo);
          continue;
        }
        // nama
        const id = /^[\p{L}_][\p{L}\p{N}_]*/u.exec(line.slice(pos));
        if (id) { push(KW.has(id[0]) ? 'KW' : 'NAME', id[0], lineNo, pos); pos += id[0].length; continue; }
        const op = OPS.find((o) => line.startsWith(o, pos));
        if (op) {
          if ('([{'.includes(op)) brackets.push([op, lineNo]);
          if (')]}'.includes(op)) {
            const b = brackets.pop();
            const want = { ')': '(', ']': '[', '}': '{' }[op];
            if (!b) throw SynErr("unmatched '" + op + "'", lineNo);
            if (b[0] !== want) throw SynErr("closing parenthesis '" + op + "' does not match opening parenthesis '" + b[0] + "'" + (b[1] !== lineNo ? ' on line ' + b[1] : ''), lineNo);
          }
          push('OP', op, lineNo, pos); pos += op.length; continue;
        }
        if (ch === '$' || ch === '?' || ch === '`' || ch === '!') throw SynErr('invalid syntax', lineNo);
        if ('“”‘’'.includes(ch)) throw SynErr("invalid character '" + ch + "' (U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + ')', lineNo);
        throw SynErr("invalid character '" + ch + "' (U+" + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0') + ')', lineNo);
      }
      if (!brackets.length && !cont) {
        const last = toks[toks.length - 1];
        if (last && last.t !== 'NEWLINE' && last.t !== 'INDENT' && last.t !== 'DEDENT') push('NEWLINE', '', lineNo, line.length);
      }
      i++;
    }
    if (brackets.length) { const b = brackets[brackets.length - 1]; throw SynErr("'" + b[0] + "' was never closed", b[1]); }
    const lastLine = lines.length;
    if (toks.length && toks[toks.length - 1].t !== 'NEWLINE') push('NEWLINE', '', lastLine, 0);
    while (indents.length > 1) { indents.pop(); push('DEDENT', 0, lastLine, 0); }
    push('EOF', '', lastLine, 0);
    return toks;
  }

  /* =========================== parser =========================== */
  function parse(src) {
    const toks = lex(src);
    let p = 0;
    const peek = (k = 0) => toks[p + k];
    const at = (t, v) => { const x = toks[p]; return x.t === t && (v === undefined || x.v === v); };
    const atOp = (v) => at('OP', v);
    const atKw = (v) => at('KW', v);
    const next = () => toks[p++];
    const describe = (x) => (x.t === 'EOF' ? 'end of file' : x.t === 'NEWLINE' ? 'end of line' : "'" + x.v + "'");
    const expectOp = (v, msg) => { if (!atOp(v)) throw SynErr(msg || "expected '" + v + "'", peek().line); return next(); };
    const N = (type, line, o) => Object.assign({ type, line }, o);

    function block(kind, headLine) {
      if (!at('NEWLINE')) { // satu baris: if x: print(x)
        const stmts = simpleStmts(); return stmts;
      }
      next();
      if (!at('INDENT')) throw new PyError('IndentationError', "expected an indented block after " + kind + ' on line ' + headLine, peek().line);
      next();
      const body = [];
      while (!at('DEDENT') && !at('EOF')) body.push(...statement());
      if (at('DEDENT')) next();
      return body;
    }
    function colon(test) {
      if (!atOp(':')) {
        if (test && atOp('=')) {
          const nx = peek(1);
          if (nx.t === 'OP' && ['>', '<', '='].includes(nx.v)) throw SynErr('invalid syntax', peek().line);
          if (test.type === 'Name') throw SynErr("invalid syntax. Maybe you meant '==' or ':=' instead of '='?", peek().line);
          if (test.type === 'Const') throw SynErr("cannot assign to literal here. Maybe you meant '==' instead of '='?", peek().line);
          if (test.type === 'Call') throw SynErr("cannot assign to function call here. Maybe you meant '==' instead of '='?", peek().line);
          throw SynErr("cannot assign to expression here. Maybe you meant '==' instead of '='?", peek().line);
        }
        throw SynErr("expected ':'", peek().line);
      }
      next();
    }
    function statement() {
      const x = peek();
      if (x.t === 'INDENT') throw new PyError('IndentationError', 'unexpected indent', x.line);
      if (x.t === 'KW') {
        const line = x.line;
        switch (x.v) {
          case 'if': {
            next(); const test = expr(); colon(test); const body = block("'if' statement", line);
            let orelse = [];
            if (atKw('elif')) { const l2 = peek().line; toks[p] = { ...toks[p], v: 'if' }; orelse = statement(); orelse[0].line = l2; }
            else if (atKw('else')) { const l2 = peek().line; next(); colon(); orelse = block("'else' statement", l2); }
            return [N('If', line, { test, body, orelse })];
          }
          case 'while': { next(); const test = expr(); colon(test); const body = block("'while' statement", line); let orelse = []; if (atKw('else')) { const l2 = peek().line; next(); colon(); orelse = block("'else' statement", l2); } return [N('While', line, { test, body, orelse })]; }
          case 'for': {
            next(); const target = targetList(); if (!atKw('in')) throw SynErr("expected 'in'", peek().line); next();
            const iter = exprList(); colon(); const body = block("'for' statement", line);
            let orelse = []; if (atKw('else')) { const l2 = peek().line; next(); colon(); orelse = block("'else' statement", l2); }
            return [N('For', line, { target, iter, body, orelse })];
          }
          case 'def': {
            next(); if (!at('NAME')) throw SynErr('invalid syntax', line); const name = next().v;
            expectOp('(', "expected '('"); const params = paramList(')'); expectOp(')');
            if (atOp('->')) { next(); expr(); }
            colon(); const body = block("function definition", line);
            return [N('Def', line, { name, params, body })];
          }
          case 'try': {
            next(); colon(); const body = block("'try' statement", line); const handlers = [];
            while (atKw('except')) {
              const l2 = next().line; let etype = null, ename = null;
              if (!atOp(':')) { etype = expr(); if (atKw('as')) { next(); ename = next().v; } }
              colon(); handlers.push({ etype, ename, body: block("'except' statement", l2), line: l2 });
            }
            let orelse = [], fin = [];
            if (atKw('else')) { const l2 = next().line; colon(); orelse = block("'else' statement", l2); }
            if (atKw('finally')) { const l2 = next().line; colon(); fin = block("'finally' statement", l2); }
            if (!handlers.length && !fin.length) throw SynErr("expected 'except' or 'finally' block", peek().line);
            return [N('Try', line, { body, handlers, orelse, fin })];
          }
          case 'class': {
            next(); if (!at('NAME')) throw SynErr('invalid syntax', line); const name = next().v; const bases = [];
            if (atOp('(')) { next(); while (!atOp(')')) { bases.push(expr()); if (atOp(',')) next(); else break; } expectOp(')'); }
            colon(); const body = block('class definition', line);
            return [N('ClassDef', line, { name, bases, body })];
          }
          case 'with': throw new Unsupported('with', line);
          case 'async': case 'await': case 'yield': throw new Unsupported(x.v, line);
          case 'elif': case 'else': case 'except': case 'finally': throw SynErr('invalid syntax', line);
          default: break;
        }
      }
      return simpleStmts();
    }
    function simpleStmts() {
      const out = [small()];
      while (atOp(';')) { next(); if (at('NEWLINE')) break; out.push(small()); }
      if (!at('NEWLINE') && !at('EOF')) {
        const t = peek();
        throw SynErr('invalid syntax', t.line);
      }
      if (at('NEWLINE')) next();
      return out;
    }
    function small() {
      const x = peek(), line = x.line;
      if (x.t === 'KW') {
        if (x.v === 'pass') { next(); return N('Pass', line); }
        if (x.v === 'break') { next(); return N('Break', line); }
        if (x.v === 'continue') { next(); return N('Continue', line); }
        if (x.v === 'return') { next(); const value = at('NEWLINE') || atOp(';') ? null : exprList(); return N('Return', line, { value }); }
        if (x.v === 'global' || x.v === 'nonlocal') { next(); const names = [next().v]; while (atOp(',')) { next(); names.push(next().v); } return N('Global', line, { names, nonlocal: x.v === 'nonlocal' }); }
        if (x.v === 'del') { next(); const targets = [expr()]; while (atOp(',')) { next(); targets.push(expr()); } return N('Del', line, { targets }); }
        if (x.v === 'raise') { next(); const exc = at('NEWLINE') ? null : expr(); if (atKw('from')) { next(); expr(); } return N('Raise', line, { exc }); }
        if (x.v === 'assert') { next(); const test = expr(); let msg = null; if (atOp(',')) { next(); msg = expr(); } return N('Assert', line, { test, msg }); }
        if (x.v === 'import') { next(); const names = []; do { if (atOp(',')) next(); let nm = next().v; while (atOp('.')) { next(); nm += '.' + next().v; } let as = null; if (atKw('as')) { next(); as = next().v; } names.push({ nm, as }); } while (atOp(',')); return N('Import', line, { names }); }
        if (x.v === 'from') { next(); let mod = next().v; while (atOp('.')) { next(); mod += '.' + next().v; } if (!atKw('import')) throw SynErr('invalid syntax', line); next(); const names = []; if (atOp('*')) { next(); names.push({ nm: '*' }); } else { const paren = atOp('('); if (paren) next(); do { if (atOp(',')) next(); if (atOp(')')) break; const nm = next().v; let as = null; if (atKw('as')) { next(); as = next().v; } names.push({ nm, as }); } while (atOp(',')); if (paren) expectOp(')'); } return N('ImportFrom', line, { mod, names }); }
      }
      const first = exprList(true);
      if (atOp('=')) {
        const targets = [first];
        let value;
        for (;;) { next(); const v = exprList(true); if (atOp('=')) targets.push(v); else { value = v; break; } }
        targets.forEach((t) => checkTarget(t));
        return N('Assign', line, { targets, value });
      }
      const aug = ['+=', '-=', '*=', '/=', '//=', '%=', '**=', '&=', '|=', '^=', '<<=', '>>='].find((o) => atOp(o));
      if (aug) { next(); checkTarget(first, true); const value = exprList(); return N('AugAssign', line, { target: first, op: aug.slice(0, -1), value }); }
      if (atOp(':') && first.type === 'Name') { next(); expr(); if (atOp('=')) { next(); const value = exprList(); return N('Assign', line, { targets: [first], value }); } return N('Pass', line); }
      if (first.type === 'Name' && (at('NAME') || at('STR') || at('NUM'))) {
        if (first.id === 'print' && (at('STR') || at('NAME') || at('NUM'))) throw SynErr("Missing parentheses in call to 'print'. Did you mean print(...)?", line);
        throw SynErr('invalid syntax', line);
      }
      return N('Expr', line, { value: first });
    }
    function checkTarget(t, aug) {
      if (t.type === 'Name' || t.type === 'Subscript' || t.type === 'Attribute') return;
      if (t.type === 'Starred' && !aug) { checkTarget(t.value); return; }
      if (!aug && (t.type === 'Tuple' || t.type === 'List')) { t.elts.forEach((e) => checkTarget(e)); return; }
      if (t.type === 'Call') throw SynErr("cannot assign to function call here. Maybe you meant '==' instead of '='?", t.line);
      if (t.type === 'Const') throw SynErr("cannot assign to literal here. Maybe you meant '==' instead of '='?", t.line);
      throw SynErr("cannot assign to expression here. Maybe you meant '==' instead of '='?", t.line);
    }
    function targetList() {
      const line = peek().line, elts = [primaryTarget()];
      let tuple = false;
      while (atOp(',')) { next(); tuple = true; if (atKw('in')) break; elts.push(primaryTarget()); }
      return tuple ? N('Tuple', line, { elts }) : elts[0];
    }
    function primaryTarget() {
      if (atOp('(')) { const line = next().line; const t = targetList(); expectOp(')'); return t.type === 'Tuple' ? t : t; }
      const e = bitor(); checkTarget(e); return e;
    }
    function paramList(close) {
      const params = [];
      let star = false;
      while (!atOp(close)) {
        if (atOp('*') || atOp('**')) { const kind = next().v; const name = next().v; params.push({ name, kind }); star = true; }
        else {
          if (!at('NAME')) throw SynErr('invalid syntax', peek().line);
          const name = next().v; let def = null;
          if (atOp(':') && close === ')') { next(); bitor(); }
          if (atOp('=')) { next(); def = expr(); } else if (params.some((q) => q.def) && !star) throw SynErr('parameter without a default follows parameter with a default', peek().line);
          params.push({ name, def, kwonly: star });
        }
        if (atOp(',')) next(); else break;
      }
      return params;
    }
    function exprList(allowStar) {
      const line = peek().line;
      const first = starOrExpr();
      if (!atOp(',')) return first;
      const elts = [first];
      while (atOp(',')) { next(); if (at('NEWLINE') || atOp('=') || atOp(')') || atOp(':') || at('EOF') || atOp(';')) break; elts.push(starOrExpr()); }
      return N('Tuple', line, { elts });
    }
    function starOrExpr() { if (atOp('*')) { const line = next().line; return N('Starred', line, { value: bitor() }); } return expr(); }
    function expr() {
      const line = peek().line;
      if (atKw('lambda')) { next(); const params = paramList(':'); expectOp(':'); const body = expr(); return N('Lambda', line, { params, body }); }
      const a = orTest();
      if (atKw('if') ) {
        // ungkapan bersyarat: a if c else b
        const save = p; next(); const test = orTest();
        if (!atKw('else')) { if (atOp(':') || at('NEWLINE')) throw SynErr("expected 'else' after 'if' expression", line); throw SynErr("expected 'else' after 'if' expression", line); }
        next(); const orelse = expr(); return N('IfExp', line, { test, body: a, orelse });
      }
      if (atOp(':=')) throw new Unsupported('walrus', line);
      return a;
    }
    function orTest() { let a = andTest(); while (atKw('or')) { const line = next().line; a = N('BoolOp', line, { op: 'or', a, b: andTest() }); } return a; }
    function andTest() { let a = notTest(); while (atKw('and')) { const line = next().line; a = N('BoolOp', line, { op: 'and', a, b: notTest() }); } return a; }
    function notTest() { if (atKw('not')) { const line = next().line; return N('Not', line, { value: notTest() }); } return comparison(); }
    function comparison() {
      const line = peek().line;
      const first = bitor(); const ops = [], comps = [];
      for (;;) {
        let op = null;
        if (at('OP') && ['<', '>', '==', '>=', '<=', '!='].includes(peek().v)) op = next().v;
        else if (atKw('in')) { next(); op = 'in'; }
        else if (atKw('not') && peek(1).t === 'KW' && peek(1).v === 'in') { next(); next(); op = 'not in'; }
        else if (atKw('is')) { next(); if (atKw('not')) { next(); op = 'is not'; } else op = 'is'; }
        else if (atOp('=') && false) op = '=';
        if (!op) break;
        ops.push(op); comps.push(bitor());
      }
      return ops.length ? N('Compare', line, { left: first, ops, comps }) : first;
    }
    const binLevel = (ops, nextFn) => () => { let a = nextFn(); while (at('OP') && ops.includes(peek().v)) { const t = next(); a = N('BinOp', t.line, { op: t.v, a, b: nextFn() }); } return a; };
    function factor() {
      if (at('OP') && ['-', '+', '~'].includes(peek().v)) { const t = next(); return N('Unary', t.line, { op: t.v, value: factor() }); }
      return power();
    }
    function power() { const base = primary(); if (atOp('**')) { const t = next(); return N('BinOp', t.line, { op: '**', a: base, b: factor() }); } return base; }
    const term = binLevel(['*', '/', '//', '%', '@'], factor);
    const arith = binLevel(['+', '-'], term);
    const shift = binLevel(['<<', '>>'], arith);
    const band = binLevel(['&'], shift);
    const bxor = binLevel(['^'], band);
    const bitor = binLevel(['|'], bxor);
    function primary() {
      let e = atom();
      for (;;) {
        if (atOp('(')) {
          const line = next().line; const args = [], kwargs = [];
          while (!atOp(')')) {
            if (atOp('*')) { next(); args.push(N('Starred', line, { value: expr() })); }
            else if (atOp('**')) { next(); kwargs.push({ name: null, value: expr() }); }
            else if (at('NAME') && peek(1).t === 'OP' && peek(1).v === '=') { const name = next().v; next(); kwargs.push({ name, value: expr() }); }
            else {
              if (kwargs.length) throw SynErr('positional argument follows keyword argument', peek().line);
              const a = expr();
              if (atKw('for')) { args.push(comprehension('gen', a, line)); }
              else args.push(a);
            }
            if (atOp(',')) next(); else if (!atOp(')')) { const t = peek(); throw SynErr(t.t === 'NEWLINE' || t.t === 'EOF' ? "'(' was never closed" : 'invalid syntax. Perhaps you forgot a comma?', t.line); }
          }
          next(); e = N('Call', line, { func: e, args, kwargs });
        } else if (atOp('[')) {
          const line = next().line; const idx = subscriptList(); expectOp(']'); e = N('Subscript', line, { value: e, index: idx });
        } else if (atOp('.')) {
          const line = next().line; if (!at('NAME') && !at('KW')) throw SynErr('invalid syntax', line); e = N('Attribute', line, { value: e, attr: next().v });
        } else break;
      }
      return e;
    }
    function subscriptList() {
      const line = peek().line;
      const one = () => {
        let lo = null, hi = null, st = null;
        if (!atOp(':')) { lo = expr(); if (!atOp(':')) return lo; }
        next(); if (!atOp(']') && !atOp(':') && !atOp(',')) hi = expr();
        if (atOp(':')) { next(); if (!atOp(']') && !atOp(',')) st = expr(); }
        return N('Slice', line, { lo, hi, st });
      };
      const first = one();
      if (!atOp(',')) return first;
      const elts = [first]; while (atOp(',')) { next(); if (atOp(']')) break; elts.push(one()); }
      return N('Tuple', line, { elts });
    }
    function comprehension(kind, elt, line, valueExpr) {
      const gens = [];
      while (atKw('for')) {
        next(); const target = targetList(); if (!atKw('in')) throw SynErr("expected 'in'", peek().line); next();
        const iter = orTest(); const ifs = [];
        while (atKw('if')) { next(); ifs.push(orTestNoCond()); }
        gens.push({ target, iter, ifs });
      }
      return N('Comp', line, { kind, elt, value: valueExpr, gens });
    }
    function orTestNoCond() { return orTest(); }
    function atom() {
      const x = peek(), line = x.line;
      if (x.t === 'NUM') { next(); return N('Const', line, { value: x.v }); }
      if (x.t === 'STR' || x.t === 'FSTR') {
        const parts = [];
        while (at('STR') || at('FSTR')) { const s = next(); parts.push(s.t === 'FSTR' ? fstring(s.v, s.line) : N('Const', s.line, { value: s.v })); }
        if (parts.length === 1) return parts[0];
        return N('JoinedStr', line, { parts });
      }
      if (x.t === 'NAME') { next(); return N('Name', line, { id: x.v }); }
      if (x.t === 'KW') {
        if (x.v === 'True' || x.v === 'False') { next(); return N('Const', line, { value: x.v === 'True' }); }
        if (x.v === 'None') { next(); return N('Const', line, { value: NONE }); }
        throw SynErr('invalid syntax', line);
      }
      if (x.t === 'OP') {
        if (x.v === '(') {
          next(); if (atOp(')')) { next(); return N('Tuple', line, { elts: [] }); }
          const first = starOrExpr();
          if (atKw('for')) { const c = comprehension('gen', first, line); expectOp(')'); return c; }
          if (atOp(')')) { next(); return first.type === 'Tuple' ? Object.assign({}, first, { paren: true }) : first; }
          const elts = [first]; while (atOp(',')) { next(); if (atOp(')')) break; elts.push(starOrExpr()); }
          expectOp(')'); return N('Tuple', line, { elts });
        }
        if (x.v === '[') {
          next(); if (atOp(']')) { next(); return N('List', line, { elts: [] }); }
          const first = starOrExpr();
          if (atKw('for')) { const c = comprehension('list', first, line); expectOp(']'); return c; }
          const elts = [first]; while (atOp(',')) { next(); if (atOp(']')) break; elts.push(starOrExpr()); }
          if (!atOp(']')) throw SynErr(at('NEWLINE') || at('EOF') ? "'[' was never closed" : 'invalid syntax. Perhaps you forgot a comma?', peek().line);
          next(); return N('List', line, { elts });
        }
        if (x.v === '{') {
          next(); if (atOp('}')) { next(); return N('Dict', line, { keys: [], values: [] }); }
          if (atOp('**')) throw new Unsupported('dict-unpack', line);
          const first = starOrExpr();
          if (atOp('=')) throw SynErr(first.type === 'Const' ? "cannot assign to literal here. Maybe you meant '==' instead of '='?" : "invalid syntax. Maybe you meant '==' or ':=' instead of '='?", peek().line);
          if (atOp(':')) {
            next(); const v1 = expr();
            if (atKw('for')) { const c = comprehension('dict', first, line, v1); expectOp('}'); return c; }
            const keys = [first], values = [v1];
            while (atOp(',')) { next(); if (atOp('}')) break; keys.push(expr()); expectOp(':'); values.push(expr()); }
            expectOp('}'); return N('Dict', line, { keys, values });
          }
          if (atKw('for')) { const c = comprehension('set', first, line); expectOp('}'); return c; }
          const elts = [first]; while (atOp(',')) { next(); if (atOp('}')) break; elts.push(starOrExpr()); }
          expectOp('}'); return N('SetLit', line, { elts });
        }
        if (x.v === '...') { next(); return N('Const', line, { value: NONE }); }
      }
      if (x.t === 'NEWLINE' || x.t === 'EOF') throw SynErr('invalid syntax', line);
      if (x.t === 'INDENT') throw SynErr('unexpected indent', line);
      throw SynErr('invalid syntax', line);
    }
    function fstring(s, line) {
      const parts = []; let buf = '', i = 0;
      while (i < s.length) {
        const c = s[i];
        if (c === '{' && s[i + 1] === '{') { buf += '{'; i += 2; continue; }
        if (c === '}' && s[i + 1] === '}') { buf += '}'; i += 2; continue; }
        if (c === '}') throw SynErr("f-string: single '}' is not allowed", line);
        if (c === '{') {
          if (buf) { parts.push(N('Const', line, { value: buf })); buf = ''; }
          let depth = 0, j = i + 1, inStr = null;
          for (; j < s.length; j++) {
            const d = s[j];
            if (inStr) { if (d === inStr) inStr = null; continue; }
            if (d === '"' || d === "'") { inStr = d; continue; }
            if ('([{'.includes(d)) depth++;
            else if (')]}'.includes(d)) { if (d === '}' && depth === 0) break; depth--; }
            else if ((d === ':' || d === '!') && depth === 0 && s[j + 1] !== '=') break;
          }
          if (j >= s.length) throw SynErr("f-string: expecting '}'", line);
          let exprSrc = s.slice(i + 1, j), conv = null, spec = '';
          let selfDoc = false;
          if (/=\s*$/.test(exprSrc) && !/[=!<>]=\s*$/.test(exprSrc)) { selfDoc = true; }
          let k = j;
          if (s[k] === '!') { conv = s[k + 1]; k += 2; }
          if (s[k] === ':') {
            let d2 = 0, m = k + 1;
            for (; m < s.length; m++) { if (s[m] === '{') d2++; else if (s[m] === '}') { if (d2 === 0) break; d2--; } }
            spec = s.slice(k + 1, m); k = m;
          }
          if (s[k] !== '}') throw SynErr("f-string: expecting '}'", line);
          if (!exprSrc.trim()) throw SynErr('f-string: valid expression required before \'}\'', line);
          const src2 = selfDoc ? exprSrc.replace(/=\s*$/, '') : exprSrc;
          let sub;
          try { sub = parseExprOnly(src2.trim(), line); } catch (e) { if (e instanceof PyError) { e.line = line; } throw e; }
          if (selfDoc) parts.push(N('Const', line, { value: exprSrc }));
          parts.push(N('FormattedValue', line, { value: sub, conv: conv || (selfDoc && !spec ? 'r' : null), spec: spec.includes('{') ? fstring(spec, line) : spec }));
          i = k + 1; continue;
        }
        buf += c; i++;
      }
      if (buf || !parts.length) parts.push(N('Const', line, { value: buf }));
      return N('JoinedStr', line, { parts });
    }
    const body = [];
    while (!at('EOF')) {
      if (at('NEWLINE')) { next(); continue; }
      if (at('INDENT')) throw new PyError('IndentationError', 'unexpected indent', peek().line);
      if (at('DEDENT')) { next(); continue; }
      body.push(...statement());
    }
    return body;
  }
  function parseExprOnly(src, line) {
    const ast = parse(src);
    if (ast.length !== 1 || ast[0].type !== 'Expr') throw SynErr('f-string: invalid syntax', line);
    const fix = (n) => { if (n && typeof n === 'object') { if (n.line !== undefined) n.line = line; Object.values(n).forEach((v) => { if (Array.isArray(v)) v.forEach(fix); else if (v && typeof v === 'object') fix(v); }); } };
    fix(ast[0].value);
    return ast[0].value;
  }

  /* =========================== interpreter =========================== */
  function run(src, opts = {}) {
    const inputs = (opts.inputs || []).slice();
    const maxSteps = opts.maxSteps || 300000;
    const maxOut = opts.maxOut || 20000;
    let out = '', steps = 0, depth = 0, curLine = 0, usedInput = false, truncated = false;
    const write = (s) => { if (out.length + s.length > maxOut) { out += s.slice(0, Math.max(0, maxOut - out.length)); truncated = true; throw new Unsupported('too-much-output', curLine); } out += s; };
    const tick = () => { if (++steps > maxSteps) throw new Unsupported('too-long', curLine); };

    /* ---- skop ---- */
    class Scope {
      constructor(parent, locals) { this.vars = new Map(); this.parent = parent; this.locals = locals || null; this.globals = new Set(); this.isGlobal = !parent; }
    }
    const builtins = new Map();
    const G = new Scope(null);
    function lookup(scope, name) {
      if (scope.globals.has(name)) { if (G.vars.has(name)) return G.vars.get(name); }
      else if (scope.locals && scope.locals.has(name)) {
        if (scope.vars.has(name)) return scope.vars.get(name);
        err('UnboundLocalError', "cannot access local variable '" + name + "' where it is not associated with a value");
      }
      for (let s = scope; s; s = s.parent) if (s.vars.has(name)) return s.vars.get(name);
      if (builtins.has(name)) return builtins.get(name);
      const e = new PyError('NameError', "name '" + name + "' is not defined"); e.hint = nameHint(name); throw e;
    }
    const nameHint = (name) => {
      const fixed = { pritn: 'print', prnt: 'print', pirnt: 'print', Print: 'print', PRINT: 'print', imput: 'input', inpt: 'input', Input: 'input', lenght: 'len', length: 'len', Len: 'len', true: 'True', false: 'False', none: 'None', null: 'None', Range: 'range', rang: 'range', Str: 'str', Int: 'int', integer: 'int', string: 'str', elseif: 'elif', echo: 'print', console: 'print', printf: 'print', println: 'print', raw_input: 'input' }[name];
      if (fixed) return fixed;
      const cands = [...G.vars.keys(), ...builtins.keys()];
      let best = '', bd = 99;
      const lev = (a, b) => { const d = Array.from({ length: a.length + 1 }, (_, i) => [i]); for (let j = 1; j <= b.length; j++) d[0][j] = j; for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : a[i - 1].toLowerCase() === b[j - 1].toLowerCase() ? 0.5 : 1)); return d[a.length][b.length]; };
      for (const c of cands) { if (EXC.has(c)) continue; const dd = lev(name, c); if (dd < bd) { bd = dd; best = c; } }
      return bd <= Math.max(1, Math.floor(name.length / 3)) ? best : '';
    };
    function assignName(scope, name, v) { if (scope.globals.has(name)) G.vars.set(name, v); else if (scope.nonlocals && scope.nonlocals.has(name)) { for (let s = scope.parent; s; s = s.parent) if (s.vars.has(name)) { s.vars.set(name, v); return; } } else scope.vars.set(name, v); }

    /* ---- panggilan ---- */
    function call(f, args, kwargs, line) {
      tick();
      if (f instanceof PyBuiltin) return f.fn(args, kwargs || new Map(), line);
      if (f instanceof PyMethod) return f.fn(f.self, args, kwargs || new Map(), line);
      if (f instanceof PyType) return f.call(args, kwargs || new Map(), line);
      if (f instanceof PyBound) return call(f.func, [f.self, ...args], kwargs, line);
      if (f instanceof PyClass) {
        if (f.excBase) return { __exc: true, type: f.name, msg: args.length ? str(args[0]) : '' };
        const inst = new PyInstance(f);
        const init = classLookup(f, '__init__');
        if (init) { const r = call(init, [inst, ...args], kwargs, line); if (r !== NONE) err('TypeError', "__init__() should return None, not '" + typeName(r) + "'"); }
        else if (args.length || (kwargs && kwargs.size)) err('TypeError', f.name + '() takes no arguments');
        return inst;
      }
      if (f instanceof PyFunc) {
        if (++depth > 180) { depth = 0; err('RecursionError', 'maximum recursion depth exceeded'); }
        frames.push({ f, args });
        try {
          const scope = new Scope(f.closure, f.locals);
          scope.globals = f.globalNames; scope.nonlocals = f.nonlocalNames;
          bindParams(f, args, kwargs || new Map(), scope);
          try { execBlock(f.body, scope); } catch (e) { if (e instanceof ReturnSig) return e.value; throw e; }
          return NONE;
        } finally { depth--; frames.pop(); }
      }
      err('TypeError', "'" + typeName(f) + "' object is not callable");
    }
    const frames = [];
    function mro(cls) { const out = []; const walk = (c) => { if (out.includes(c)) return; out.push(c); c.bases.forEach(walk); }; walk(cls); return out; }
    function classLookup(cls, name, after) {
      let list = mro(cls); if (after) list = list.slice(list.indexOf(after) + 1);
      for (const c of list) if (c.attrs.has(name)) return c.attrs.get(name);
      return undefined;
    }
    HOOK = {
      text(inst, kind) {
        const m = classLookup(inst.cls, kind === 'str' ? '__str__' : '__repr__') || (kind === 'str' ? classLookup(inst.cls, '__repr__') : undefined);
        if (m) { const r = call(m, [inst]); if (!isStr(r)) err('TypeError', (kind === 'str' ? '__str__' : '__repr__') + ' returned non-string (type ' + typeName(r) + ')'); return r; }
        return '<__main__.' + inst.cls.name + ' object at 0x' + inst.addr.toString(16) + '>';
      },
      dunder(name, a, b) {
        if (a instanceof PyInstance) { const m = classLookup(a.cls, name); if (m) return call(m, [a, b]); }
        return undefined;
      },
    };
    function bindParams(f, args, kwargs, scope) {
      const ps = f.params; let ai = 0;
      const pos = ps.filter((q) => !q.kind && !q.kwonly);
      const star = ps.find((q) => q.kind === '*'), dstar = ps.find((q) => q.kind === '**');
      const given = new Set();
      for (const q of pos) { if (ai < args.length) { scope.vars.set(q.name, args[ai++]); given.add(q.name); } }
      if (ai < args.length) {
        if (star) scope.vars.set(star.name, new PyTuple(args.slice(ai)));
        else err('TypeError', (f.qualname || f.name) + '() takes ' + pos.length + ' positional argument' + (pos.length === 1 ? '' : 's') + ' but ' + args.length + (args.length === 1 ? ' was' : ' were') + ' given');
      } else if (star) scope.vars.set(star.name, new PyTuple([]));
      const extra = new PyDict();
      for (const [k, v] of kwargs) {
        const q = ps.find((x) => x.name === k && !x.kind);
        if (!q) { if (dstar) { dictSet(extra, k, v); continue; } err('TypeError', (f.qualname || f.name) + "() got an unexpected keyword argument '" + k + "'"); }
        if (given.has(k)) err('TypeError', f.name + "() got multiple values for argument '" + k + "'");
        scope.vars.set(k, v); given.add(k);
      }
      if (dstar) scope.vars.set(dstar.name, extra);
      const missing = [];
      ps.forEach((q, i) => { if (q.kind || given.has(q.name)) return; if (q.def !== null && q.def !== undefined) scope.vars.set(q.name, f.defaults[i]); else missing.push(q.name); });
      if (missing.length) err('TypeError', (f.qualname || f.name) + '() missing ' + missing.length + ' required positional argument' + (missing.length > 1 ? 's' : '') + ': ' + missing.map((m) => "'" + m + "'").join(missing.length > 2 ? ', ' : ' and ').replace(/, ('[^']+')$/, ', and $1'));
    }
    const localsOf = (body, params) => {
      const set = new Set(params.map((q) => q.name)); const glob = new Set(), nonl = new Set();
      const tgt = (t) => { if (!t) return; if (t.type === 'Name') set.add(t.id); else if (t.type === 'Tuple' || t.type === 'List') t.elts.forEach(tgt); else if (t.type === 'Starred') tgt(t.value); };
      const walk = (stmts) => stmts.forEach((s) => {
        if (s.type === 'Assign') s.targets.forEach(tgt); else if (s.type === 'AugAssign') tgt(s.target);
        else if (s.type === 'For') { tgt(s.target); walk(s.body); walk(s.orelse); }
        else if (s.type === 'If' || s.type === 'While') { walk(s.body); walk(s.orelse); }
        else if (s.type === 'Def') set.add(s.name);
        else if (s.type === 'Try') { walk(s.body); s.handlers.forEach((h) => { if (h.ename) set.add(h.ename); walk(h.body); }); walk(s.orelse); walk(s.fin); }
        else if (s.type === 'Global') s.names.forEach((n) => (s.nonlocal ? nonl : glob).add(n));
        else if (s.type === 'Import') s.names.forEach((n) => set.add(n.as || n.nm.split('.')[0]));
        else if (s.type === 'ImportFrom') s.names.forEach((n) => set.add(n.as || n.nm));
        else if (s.type === 'Del') s.targets.forEach(tgt);
      });
      walk(body);
      glob.forEach((n) => set.delete(n)); nonl.forEach((n) => set.delete(n));
      return { locals: set, glob, nonl };
    };

    /* ---- penilaian ungkapan ---- */
    function ev(n, scope) {
      switch (n.type) {
        case 'Const': return n.value;
        case 'Name': return lookup(scope, n.id);
        case 'JoinedStr': return n.parts.map((q) => (q.type === 'Const' ? q.value : ev(q, scope))).join('');
        case 'FormattedValue': {
          let v = ev(n.value, scope);
          if (n.conv === 'r') v = repr(v); else if (n.conv === 's') v = str(v);
          const spec = typeof n.spec === 'string' ? n.spec : ev(n.spec, scope);
          return formatSpec(v, spec);
        }
        case 'Tuple': return new PyTuple(evList(n.elts, scope));
        case 'List': return new PyList(evList(n.elts, scope));
        case 'SetLit': { const s = new PySet(); evList(n.elts, scope).forEach((v) => { const h = hkey(v); if (!s.map.has(h)) s.map.set(h, v); }); return s; }
        case 'Dict': { const d = new PyDict(); n.keys.forEach((k, i) => dictSet(d, ev(k, scope), ev(n.values[i], scope))); return d; }
        case 'BoolOp': { const a = ev(n.a, scope); if (n.op === 'and') return truthy(a) ? ev(n.b, scope) : a; return truthy(a) ? a : ev(n.b, scope); }
        case 'Not': return !truthy(ev(n.value, scope));
        case 'Unary': {
          const v = ev(n.value, scope);
          if (n.op === '-') { if (isInt(v) || isBool(v)) return -toBig(v); if (isFloat(v)) return -v; err('TypeError', "bad operand type for unary -: '" + typeName(v) + "'"); }
          if (n.op === '+') { if (isInt(v) || isBool(v)) return toBig(v); if (isFloat(v)) return v; err('TypeError', "bad operand type for unary +: '" + typeName(v) + "'"); }
          if (n.op === '~') { if (isInt(v) || isBool(v)) return ~toBig(v); err('TypeError', "bad operand type for unary ~: '" + typeName(v) + "'"); }
          break;
        }
        case 'BinOp': { curLine = n.line; const a = ev(n.a, scope), b = ev(n.b, scope); curLine = n.line; if (n.op === '@') throw new Unsupported('matrix', n.line); return binop(n.op, a, b); }
        case 'Compare': {
          let a = ev(n.left, scope);
          for (let i = 0; i < n.ops.length; i++) {
            const b = ev(n.comps[i], scope), op = n.ops[i]; let r;
            curLine = n.line;
            if (op === '==') r = eq(a, b); else if (op === '!=') r = !eq(a, b);
            else if (op === 'in') r = contains(b, a); else if (op === 'not in') r = !contains(b, a);
            else if (op === 'is') r = isSame(a, b); else if (op === 'is not') r = !isSame(a, b);
            else { const c = cmp(a, b, op); r = op === '<' ? c < 0 : op === '>' ? c > 0 : op === '<=' ? c <= 0 : c >= 0; }
            if (!r) return false; a = b;
          }
          return true;
        }
        case 'IfExp': return truthy(ev(n.test, scope)) ? ev(n.body, scope) : ev(n.orelse, scope);
        case 'Lambda': {
          const info = { locals: new Set(n.params.map((q) => q.name)) };
          return new PyFunc({ name: '<lambda>', params: n.params, defaults: n.params.map((q) => (q.def ? ev(q.def, scope) : null)), body: [{ type: 'Return', line: n.line, value: n.body }], closure: scope, locals: info.locals, globalNames: new Set(), nonlocalNames: new Set() });
        }
        case 'Call': {
          curLine = n.line;
          let f; let selfObj = null;
          f = ev(n.func, scope);
          const args = [];
          for (const a of n.args) { if (a.type === 'Starred') args.push(...iterArr(ev(a.value, scope))); else args.push(ev(a, scope)); }
          const kw = new Map();
          for (const k of n.kwargs) { if (k.name === null) { const d = ev(k.value, scope); if (!(d instanceof PyDict)) err('TypeError', 'argument after ** must be a mapping'); for (const [, [kk, vv]] of d.map) kw.set(str(kk), vv); } else kw.set(k.name, ev(k.value, scope)); }
          curLine = n.line;
          return call(f, args, kw, n.line);
        }
        case 'Attribute': { const v = ev(n.value, scope); curLine = n.line; return getAttr(v, n.attr); }
        case 'Subscript': { const v = ev(n.value, scope); const idx = n.index.type === 'Slice' ? n.index : ev(n.index, scope); curLine = n.line; return getItem(v, idx, scope); }
        case 'Comp': return comp(n, scope);
        case 'Starred': err('SyntaxError', "can't use starred expression here");
        case 'Slice': err('SyntaxError', 'invalid syntax');
        default: break;
      }
      throw new Unsupported(n.type, n.line);
    }
    const isSame = (a, b) => { if (a === NONE || b === NONE || isBool(a) || isBool(b)) return a === b; if (isInt(a) && isInt(b)) return a === b && a >= -5n && a <= 256n; if (isStr(a) && isStr(b)) return a === b; return a === b; };
    function evList(elts, scope) { const out = []; for (const e of elts) { if (e.type === 'Starred') out.push(...iterArr(ev(e.value, scope))); else out.push(ev(e, scope)); } return out; }
    function comp(n, scope) {
      const inner = new Scope(scope);
      const out = [];
      const d = new PyDict(), s = new PySet();
      const loop = (gi) => {
        if (gi === n.gens.length) {
          tick();
          if (n.kind === 'dict') dictSet(d, ev(n.elt, inner), ev(n.value, inner));
          else if (n.kind === 'set') { const v = ev(n.elt, inner); const h = hkey(v); if (!s.map.has(h)) s.map.set(h, v); }
          else out.push(ev(n.elt, inner));
          return;
        }
        const g = n.gens[gi];
        for (const v of iterArr(ev(g.iter, gi === 0 ? scope : inner))) {
          tick();
          assignTarget(g.target, v, inner);
          if (g.ifs.every((c) => truthy(ev(c, inner)))) loop(gi + 1);
        }
      };
      loop(0);
      if (n.kind === 'dict') return d; if (n.kind === 'set') return s;
      if (n.kind === 'gen') return new PyIter(out, 'generator');
      return new PyList(out);
    }
    function normIndex(i, len, what) {
      if (isFloat(i)) err('TypeError', what + ' indices must be integers or slices, not float');
      if (!(isInt(i) || isBool(i))) err('TypeError', what + ' indices must be integers or slices, not ' + typeName(i));
      let k = Number(toBig(i)); if (k < 0) k += len;
      if (k < 0 || k >= len) err('IndexError', (what === 'str' ? 'string' : what) + ' index out of range');
      return k;
    }
    function sliceIdx(sl, len, scope) {
      const g = (x) => { if (!x) return null; const v = ev(x, scope); if (v === NONE) return null; if (!(isInt(v) || isBool(v))) err('TypeError', 'slice indices must be integers or None or have an __index__ method'); return Number(toBig(v)); };
      let lo = g(sl.lo), hi = g(sl.hi), st = g(sl.st);
      if (st === null) st = 1; if (st === 0) err('ValueError', 'slice step cannot be zero');
      const idx = [];
      if (st > 0) {
        lo = lo === null ? 0 : lo < 0 ? Math.max(0, lo + len) : Math.min(lo, len);
        hi = hi === null ? len : hi < 0 ? Math.max(0, hi + len) : Math.min(hi, len);
        for (let i = lo; i < hi; i += st) idx.push(i);
      } else {
        lo = lo === null ? len - 1 : lo < 0 ? Math.max(-1, lo + len) : Math.min(lo, len - 1);
        hi = hi === null ? -1 : hi < 0 ? Math.max(-1, hi + len) : Math.min(hi, len - 1);
        for (let i = lo; i > hi; i += st) idx.push(i);
      }
      return idx;
    }
    function getItem(v, idx, scope) {
      if (idx && idx.type === 'Slice') {
        if (isStr(v)) { const ch = [...v]; return sliceIdx(idx, ch.length, scope).map((i) => ch[i]).join(''); }
        if (v instanceof PyList) return new PyList(sliceIdx(idx, v.items.length, scope).map((i) => v.items[i]));
        if (v instanceof PyTuple) return new PyTuple(sliceIdx(idx, v.items.length, scope).map((i) => v.items[i]));
        if (v instanceof PyRange) { const a = iterArr(v); return new PyList(sliceIdx(idx, a.length, scope).map((i) => a[i])); }
        err('TypeError', "'" + typeName(v) + "' object is not subscriptable");
      }
      if (isStr(v)) { const ch = [...v]; return ch[normIndex(idx, ch.length, 'str')]; }
      if (v instanceof PyList) return v.items[normIndex(idx, v.items.length, 'list')];
      if (v instanceof PyTuple) return v.items[normIndex(idx, v.items.length, 'tuple')];
      if (v instanceof PyRange) { const n = Number(rangeLen(v)); const k = normIndex(idx, n, 'range'); return v.start + BigInt(k) * v.step; }
      if (v instanceof PyDict) { const r = dictGet(v, idx); if (r === undefined) err('KeyError', repr(idx)); return r; }
      err('TypeError', "'" + typeName(v) + "' object is not subscriptable");
    }
    function setItem(v, idx, val, scope) {
      if (v instanceof PyList) {
        if (idx && idx.type === 'Slice') {
          const items = iterArr(val);
          const ids = sliceIdx(idx, v.items.length, scope);
          if (idx.st) { if (ids.length !== items.length) err('ValueError', 'attempt to assign sequence of size ' + items.length + ' to extended slice of size ' + ids.length); ids.forEach((i, k) => { v.items[i] = items[k]; }); return; }
          const lo = ids.length ? ids[0] : sliceIdx({ lo: idx.lo, hi: null, st: null }, v.items.length, scope)[0] ?? v.items.length;
          v.items.splice(lo, ids.length, ...items); return;
        }
        v.items[normIndex(idx, v.items.length, 'list')] = val; return;
      }
      if (v instanceof PyDict) { dictSet(v, idx, val); return; }
      err('TypeError', "'" + typeName(v) + "' object does not support item assignment");
    }
    function assignTarget(t, v, scope) {
      if (t.type === 'Name') { assignName(scope, t.id, v); return; }
      if (t.type === 'Tuple' || t.type === 'List') {
        const items = iterArr(v);
        const si = t.elts.findIndex((e) => e.type === 'Starred');
        if (si < 0) {
          if (items.length !== t.elts.length) err('ValueError', items.length > t.elts.length ? 'too many values to unpack (expected ' + t.elts.length + ')' : 'not enough values to unpack (expected ' + t.elts.length + ', got ' + items.length + ')');
          t.elts.forEach((e, i) => assignTarget(e, items[i], scope)); return;
        }
        const before = si, after = t.elts.length - si - 1;
        if (items.length < before + after) err('ValueError', 'not enough values to unpack (expected at least ' + (before + after) + ', got ' + items.length + ')');
        t.elts.forEach((e, i) => { if (i < si) assignTarget(e, items[i], scope); else if (i === si) assignTarget(e.value, new PyList(items.slice(si, items.length - after)), scope); else assignTarget(e, items[items.length - (t.elts.length - i)], scope); });
        return;
      }
      if (t.type === 'Subscript') { const obj = ev(t.value, scope); const idx = t.index.type === 'Slice' ? t.index : ev(t.index, scope); setItem(obj, idx, v, scope); return; }
      if (t.type === 'Attribute') { const obj = ev(t.value, scope); if (obj instanceof PyInstance || obj instanceof PyClass) { obj.attrs.set(t.attr, v); return; } err('AttributeError', "'" + typeName(obj) + "' object has no attribute '" + t.attr + "' and no __dict__ for setting new attributes"); }
      throw new Unsupported('assign-' + t.type, t.line);
    }

    /* ---- pelaksanaan pernyataan ---- */
    function execBlock(stmts, scope) { for (const s of stmts) exec(s, scope); }
    function exec(s, scope) {
      try { return exec1(s, scope); }
      catch (e) { if (e instanceof PyError && !e.line) e.line = s.line; throw e; }
    }
    function exec1(s, scope) {
      curLine = s.line; tick();
      switch (s.type) {
        case 'Expr': ev(s.value, scope); return;
        case 'Assign': { const v = ev(s.value, scope); curLine = s.line; for (const t of s.targets) assignTarget(t, v, scope); return; }
        case 'AugAssign': {
          const t = s.target;
          if (t.type === 'Name') { const cur = lookup(scope, t.id); const v = ev(s.value, scope); curLine = s.line; assignName(scope, t.id, inplace(cur, s.op, v)); return; }
          if (t.type === 'Subscript') { const obj = ev(t.value, scope); const idx = t.index.type === 'Slice' ? t.index : ev(t.index, scope); const cur = getItem(obj, idx, scope); const v = ev(s.value, scope); setItem(obj, idx, inplace(cur, s.op, v), scope); return; }
          if (t.type === 'Attribute') { const obj = ev(t.value, scope); const cur = getAttr(obj, t.attr); const v = ev(s.value, scope); curLine = s.line; const nv = inplace(cur, s.op, v); if (obj instanceof PyInstance || obj instanceof PyClass) { obj.attrs.set(t.attr, nv); return; } err('AttributeError', "'" + typeName(obj) + "' object attribute '" + t.attr + "' is read-only"); }
          throw new Unsupported('augassign', s.line);
        }
        case 'If': { if (truthy(ev(s.test, scope))) execBlock(s.body, scope); else execBlock(s.orelse, scope); return; }
        case 'While': {
          for (;;) {
            curLine = s.line; tick();
            if (!truthy(ev(s.test, scope))) { execBlock(s.orelse, scope); return; }
            try { execBlock(s.body, scope); } catch (e) { if (e === BREAK) return; if (e === CONTINUE) continue; throw e; }
          }
        }
        case 'For': {
          const it = ev(s.iter, scope);
          let arr;
          if (it instanceof PyList) arr = it.items;   // senarai hidup (seperti Python)
          else arr = iterArr(it);
          const watch = it instanceof PyDict || it instanceof PySet ? it : null, size0 = watch ? watch.map.size : 0;
          for (let i = 0; i < arr.length; i++) {
            curLine = s.line; tick();
            if (watch && watch.map.size !== size0) { const e = new PyError('RuntimeError', (watch instanceof PyDict ? 'dictionary' : 'Set') + ' changed size during iteration'); e.line = s.line; throw e; }
            assignTarget(s.target, arr[i], scope);
            try { execBlock(s.body, scope); } catch (e) { if (e === BREAK) return; if (e !== CONTINUE) throw e; }
            if (watch && watch.map.size !== size0) { const e = new PyError('RuntimeError', (watch instanceof PyDict ? 'dictionary' : 'Set') + ' changed size during iteration'); e.line = s.line; throw e; }
          }
          execBlock(s.orelse, scope); return;
        }
        case 'Break': throw BREAK;
        case 'Continue': throw CONTINUE;
        case 'Pass': return;
        case 'Return': throw new ReturnSig(s.value ? ev(s.value, scope) : NONE);
        case 'Def': {
          const info = localsOf(s.body, s.params);
          scope.vars.set(s.name, new PyFunc({ name: s.name, qualname: s.name, params: s.params, defaults: s.params.map((q) => (q.def ? ev(q.def, scope) : null)), body: s.body, closure: scope.isClass ? scope.parent : scope, locals: info.locals, globalNames: info.glob, nonlocalNames: info.nonl }));
          if (scope.globals.has(s.name)) G.vars.set(s.name, scope.vars.get(s.name));
          return;
        }
        case 'ClassDef': {
          const bases = s.bases.map((b) => ev(b, scope));
          let excBase = null;
          const realBases = [];
          for (const b of bases) {
            if (b instanceof PyClass) { realBases.push(b); if (b.excBase) excBase = b.name; }
            else if (b instanceof PyType && EXC.has(b.name)) excBase = b.name;
            else if (b instanceof PyType && b.name === 'object') { /* asas lalai */ }
            else if (b instanceof PyType) throw new Unsupported('subclass-builtin', s.line);
            else err('TypeError', 'bases must be types');
          }
          const cs = new Scope(scope); cs.isClass = true; cs.globals = scope.globals;
          execBlock(s.body, cs);
          const cls = new PyClass({ name: s.name, bases: realBases, attrs: cs.vars, excBase });
          for (const [k, v] of cs.vars) if (v instanceof PyFunc) { v.ownerClass = cls; v.qualname = s.name + '.' + k; }
          if (excBase) { EXC.add(s.name); EXC_PARENT[s.name] = excBase; }
          assignName(scope, s.name, cls);
          return;
        }
        case 'Global': s.names.forEach((n) => (s.nonlocal ? (scope.nonlocals || (scope.nonlocals = new Set())) : scope.globals).add(n)); return;
        case 'Del': {
          for (const t of s.targets) {
            if (t.type === 'Name') { if (!scope.vars.has(t.id)) err('NameError', "name '" + t.id + "' is not defined"); scope.vars.delete(t.id); }
            else if (t.type === 'Subscript') {
              const obj = ev(t.value, scope);
              if (obj instanceof PyList) { if (t.index.type === 'Slice') { const ids = new Set(sliceIdx(t.index, obj.items.length, scope)); obj.items = obj.items.filter((_, i) => !ids.has(i)); } else obj.items.splice(normIndex(ev(t.index, scope), obj.items.length, 'list'), 1); }
              else if (obj instanceof PyDict) { const k = ev(t.index, scope); const h = hkey(k); if (!obj.map.has(h)) err('KeyError', repr(k)); obj.map.delete(h); }
              else err('TypeError', "'" + typeName(obj) + "' object doesn't support item deletion");
            } else throw new Unsupported('del', s.line);
          }
          return;
        }
        case 'Raise': {
          if (!s.exc) { if (scope.__exc) throw scope.__exc; err('RuntimeError', 'No active exception to reraise'); }
          const v = ev(s.exc, scope);
          if (v instanceof PyType && EXC.has(v.name)) err(v.name, '');
          if (v instanceof PyClass && v.excBase) err(v.name, '');
          if (v && v.__exc) err(v.type, v.msg);
          err('TypeError', 'exceptions must derive from BaseException');
          return;
        }
        case 'Assert': { if (!truthy(ev(s.test, scope))) err('AssertionError', s.msg ? str(ev(s.msg, scope)) : ''); return; }
        case 'Try': {
          let failed = null;
          try {
            try { execBlock(s.body, scope); }
            catch (e) {
              if (!(e instanceof PyError)) throw e;
              failed = e;
              const h = s.handlers.find((hd) => matchExc(hd.etype, e, scope));
              if (!h) throw e;
              if (h.ename) scope.vars.set(h.ename, excObj(e));
              const prev = scope.__exc; scope.__exc = e;
              try { execBlock(h.body, scope); } finally { scope.__exc = prev; }
              return;
            }
            execBlock(s.orelse, scope);
          } finally { if (s.fin.length) execBlock(s.fin, scope); }
          return;
        }
        case 'Import': {
          for (const { nm, as } of s.names) { const m = getModule(nm, s.line); assignName(scope, as || nm.split('.')[0], m); }
          return;
        }
        case 'ImportFrom': {
          const m = getModule(s.mod, s.line);
          for (const { nm, as } of s.names) {
            if (nm === '*') { for (const [k, v] of Object.entries(m.attrs)) assignName(scope, k, v); continue; }
            if (!(nm in m.attrs)) err('ImportError', "cannot import name '" + nm + "' from '" + s.mod + "' (unknown location)");
            assignName(scope, as || nm, m.attrs[nm]);
          }
          return;
        }
        default: throw new Unsupported(s.type, s.line);
      }
    }
    function inplace(cur, op, v) {
      if (op === '+' && cur instanceof PyList) { cur.items.push(...iterArr(v)); return cur; }
      return binop(op, cur, v);
    }
    const EXC = new Set(['Exception', 'BaseException', 'ValueError', 'TypeError', 'NameError', 'ZeroDivisionError', 'IndexError', 'KeyError', 'AttributeError', 'RuntimeError', 'ArithmeticError', 'LookupError', 'AssertionError', 'RecursionError', 'UnboundLocalError', 'ImportError', 'ModuleNotFoundError', 'StopIteration', 'NotImplementedError', 'OverflowError', 'KeyboardInterrupt']);
    const EXC_PARENT = { ZeroDivisionError: 'ArithmeticError', OverflowError: 'ArithmeticError', IndexError: 'LookupError', KeyError: 'LookupError', UnboundLocalError: 'NameError', RecursionError: 'RuntimeError', ModuleNotFoundError: 'ImportError', NotImplementedError: 'RuntimeError' };
    function isSubExc(name, base) { if (base === 'BaseException') return true; if (base === 'Exception') return name !== 'KeyboardInterrupt'; for (let n = name; n; n = EXC_PARENT[n]) if (n === base) return true; return false; }
    function matchExc(etype, e, scope) {
      if (!etype) return true;
      const t = ev(etype, scope);
      const list = t instanceof PyTuple ? t.items : [t];
      return list.some((x) => (x instanceof PyType || (x instanceof PyClass && x.excBase)) && isSubExc(e.type, x.name));
    }
    const excObj = (e) => ({ __exc: true, type: e.type, msg: e.pyMsg });

    /* ---- atribut & kaedah ---- */
    function getAttr(v, name) {
      if (v instanceof PyInstance) {
        if (v.attrs.has(name)) return v.attrs.get(name);
        const a = classLookup(v.cls, name);
        if (a !== undefined) return a instanceof PyFunc ? new PyBound(v, a) : a;
        if (name === '__class__') return v.cls;
        if (name === '__dict__') { const d = new PyDict(); for (const [k, x] of v.attrs) dictSet(d, k, x); return d; }
        err('AttributeError', "'" + v.cls.name + "' object has no attribute '" + name + "'");
      }
      if (v instanceof PyClass) {
        const a = classLookup(v, name); if (a !== undefined) return a;
        if (name === '__name__') return v.name;
        err('AttributeError', "type object '" + v.name + "' has no attribute '" + name + "'");
      }
      if (v instanceof PySuper) {
        const a = classLookup(v.self.cls, name, v.cls);
        if (a !== undefined) return a instanceof PyFunc ? new PyBound(v.self, a) : a;
        if (name === '__init__') return new PyBuiltin('__init__', () => NONE);
        err('AttributeError', "'super' object has no attribute '" + name + "'");
      }
      if (v instanceof PyModule) { if (name in v.attrs) return v.attrs[name]; err('AttributeError', "module '" + v.name + "' has no attribute '" + name + "'"); }
      if (v && v.__exc) { if (name === 'args') return new PyTuple(v.msg ? [v.msg] : []); }
      const tbl = METHODS[typeName(v)];
      if (tbl && tbl[name]) return new PyMethod(v, name, tbl[name]);
      if ((isInt(v) || isBool(v)) && name === 'real') return toBig(v);
      if (v instanceof PyType && name === '__name__') return v.name;
      if (v instanceof PyType && METHODS[v.name] && METHODS[v.name][name]) { const fn = METHODS[v.name][name]; return new PyBuiltin(v.name + '.' + name, (args, kw) => { if (!args.length || typeName(args[0]) !== v.name) err('TypeError', "descriptor '" + name + "' for '" + v.name + "' objects doesn't apply to a '" + (args.length ? typeName(args[0]) : 'nothing') + "' object"); return fn(args[0], args.slice(1), kw); }); }
      if (v instanceof PyFunc && name === '__name__') return v.name;
      err('AttributeError', "'" + typeName(v) + "' object has no attribute '" + name + "'");
    }
    const argN = (args, min, max, name) => { if (args.length < min || args.length > max) err('TypeError', name + '() takes ' + (min === max ? (min === 0 ? 'no arguments' : 'exactly ' + (min === 1 ? 'one' : min) + ' argument' + (min > 1 ? 's' : '')) : 'from ' + min + ' to ' + max + ' arguments') + ' (' + args.length + ' given)'); };
    const needStr = (x, fn) => { if (!isStr(x)) err('TypeError', fn + '() argument must be str, not ' + typeName(x)); return x; };
    const sortKey = (arr, kw, line) => {
      const key = kw.get('key') || NONE, rev = truthy(kw.get('reverse') || false);
      const dec = arr.map((x) => [key === NONE ? x : call(key, [x], null, line), x]);
      dec.sort((a, b) => { const c = cmp(a[0], b[0], '<'); return rev ? -c : c; });
      if (rev) { /* stabil seperti Python */ }
      return dec.map((d) => d[1]);
    };
    const METHODS = {
      str: {
        upper: (s, a) => (argN(a, 0, 0, 'upper'), s.toUpperCase()), lower: (s, a) => (argN(a, 0, 0, 'lower'), s.toLowerCase()),
        title: (s) => s.toLowerCase().replace(/(^|[^A-Za-z])([a-z])/g, (m, p, c) => p + c.toUpperCase()),
        capitalize: (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(),
        swapcase: (s) => [...s].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join(''),
        strip: (s, a) => stripChars(s, a[0], 3), lstrip: (s, a) => stripChars(s, a[0], 1), rstrip: (s, a) => stripChars(s, a[0], 2),
        replace: (s, a) => { argN(a, 2, 3, 'replace'); const [o, n] = [needStr(a[0], 'replace'), needStr(a[1], 'replace')]; let c = a[2] === undefined ? -1 : Number(toBig(a[2])); if (o === '') { const ch = [...s]; let r = ''; let k = 0; for (let i = 0; i <= ch.length; i++) { if (c < 0 || k < c) { r += n; k++; } if (i < ch.length) r += ch[i]; } return r; } let r = '', i = 0, k = 0; for (;;) { const j = s.indexOf(o, i); if (j < 0 || (c >= 0 && k >= c)) break; r += s.slice(i, j) + n; i = j + o.length; k++; } return r + s.slice(i); },
        split: (s, a, kw) => { const sep = a[0] !== undefined ? a[0] : kw.get('sep'); const max = a[1] !== undefined ? Number(toBig(a[1])) : kw.has('maxsplit') ? Number(toBig(kw.get('maxsplit'))) : -1; if (sep === undefined || sep === NONE) { let parts = s.trim().split(/\s+/).filter((x) => x !== ''); if (max >= 0 && parts.length > max + 1) { const re = /\S+/g; let m, k = 0, pos = 0; const out = []; while (k < max && (m = re.exec(s))) { out.push(m[0]); pos = re.lastIndex; k++; } out.push(s.slice(pos).replace(/^\s+/, '')); parts = out; } return new PyList(parts); } needStr(sep, 'split'); if (sep === '') err('ValueError', 'empty separator'); const parts = s.split(sep); if (max >= 0 && parts.length > max + 1) return new PyList(parts.slice(0, max).concat([parts.slice(max).join(sep)])); return new PyList(parts); },
        rsplit: (s, a) => { if (a[0] === undefined || a[0] === NONE) return new PyList(s.trim().split(/\s+/).filter(Boolean)); const parts = s.split(a[0]); const max = a[1] !== undefined ? Number(toBig(a[1])) : -1; if (max >= 0 && parts.length > max + 1) return new PyList([parts.slice(0, parts.length - max).join(a[0])].concat(parts.slice(parts.length - max))); return new PyList(parts); },
        splitlines: (s) => new PyList(s.split(/\r?\n/).filter((x, i, arr) => !(i === arr.length - 1 && x === ''))),
        join: (s, a) => { argN(a, 1, 1, 'join'); const items = iterArr(a[0]); items.forEach((x, i) => { if (!isStr(x)) err('TypeError', 'sequence item ' + i + ': expected str instance, ' + typeName(x) + ' found'); }); return items.join(s); },
        find: (s, a) => BigInt(s.indexOf(needStr(a[0], 'find'), a[1] !== undefined ? Number(toBig(a[1])) : 0)),
        rfind: (s, a) => BigInt(s.lastIndexOf(needStr(a[0], 'rfind'))),
        index: (s, a) => { const i = s.indexOf(needStr(a[0], 'index'), a[1] !== undefined ? Number(toBig(a[1])) : 0); if (i < 0) err('ValueError', 'substring not found'); return BigInt([...s.slice(0, i)].length); },
        count: (s, a) => { const sub = needStr(a[0], 'count'); if (sub === '') return BigInt([...s].length + 1); let c = 0, i = 0; for (;;) { const j = s.indexOf(sub, i); if (j < 0) break; c++; i = j + sub.length; } return BigInt(c); },
        startswith: (s, a) => (a[0] instanceof PyTuple ? a[0].items.some((x) => s.startsWith(x)) : s.startsWith(needStr(a[0], 'startswith'))),
        endswith: (s, a) => (a[0] instanceof PyTuple ? a[0].items.some((x) => s.endsWith(x)) : s.endsWith(needStr(a[0], 'endswith'))),
        isdigit: (s) => s.length > 0 && /^[0-9٠-٩²³¹]+$/.test(s), isnumeric: (s) => s.length > 0 && /^[0-9]+$/.test(s), isdecimal: (s) => s.length > 0 && /^[0-9]+$/.test(s),
        isalpha: (s) => s.length > 0 && /^\p{L}+$/u.test(s), isalnum: (s) => s.length > 0 && /^[\p{L}\p{N}]+$/u.test(s), isspace: (s) => s.length > 0 && /^\s+$/.test(s),
        isupper: (s) => /\p{Lu}/u.test(s) && !/\p{Ll}/u.test(s), islower: (s) => /\p{Ll}/u.test(s) && !/\p{Lu}/u.test(s), istitle: (s) => /^(?:[A-Z][a-z]*[^A-Za-z]*)+$/.test(s),
        center: (s, a) => { const w = Number(toBig(a[0])), f = a[1] || ' '; const n = [...s].length; if (w <= n) return s; const pad = w - n; const l = Math.floor(pad / 2) + (pad & w & 1); return f.repeat(l) + s + f.repeat(pad - l); },
        ljust: (s, a) => s.padEnd(Number(toBig(a[0])), a[1] || ' '), rjust: (s, a) => s.padStart(Number(toBig(a[0])), a[1] || ' '),
        zfill: (s, a) => { const w = Number(toBig(a[0])); const sg = /^[+-]/.test(s) ? s[0] : ''; const body = s.slice(sg.length); return sg + body.padStart(w - sg.length, '0'); },
        format: (s, a, kw) => strFormat(s, a, kw),
        encode: () => { throw new Unsupported('bytes'); },
      },
      list: {
        append: (l, a) => { argN(a, 1, 1, 'list.append'); l.items.push(a[0]); return NONE; },
        extend: (l, a) => { l.items.push(...iterArr(a[0])); return NONE; },
        insert: (l, a) => { argN(a, 2, 2, 'insert'); let i = Number(toBig(a[0])); const n = l.items.length; if (i < 0) i = Math.max(0, i + n); if (i > n) i = n; l.items.splice(i, 0, a[1]); return NONE; },
        remove: (l, a) => { const i = l.items.findIndex((x) => eq(x, a[0])); if (i < 0) err('ValueError', 'list.remove(x): x not in list'); l.items.splice(i, 1); return NONE; },
        pop: (l, a) => { if (!l.items.length) err('IndexError', 'pop from empty list'); let i = a.length ? Number(toBig(a[0])) : l.items.length - 1; if (i < 0) i += l.items.length; if (i < 0 || i >= l.items.length) err('IndexError', 'pop index out of range'); return l.items.splice(i, 1)[0]; },
        index: (l, a) => { const i = l.items.findIndex((x) => eq(x, a[0])); if (i < 0) err('ValueError', repr(a[0]) + ' is not in list'); return BigInt(i); },
        count: (l, a) => BigInt(l.items.filter((x) => eq(x, a[0])).length),
        sort: (l, a, kw) => { if (a.length) err('TypeError', 'sort() takes no positional arguments'); l.items = sortKey(l.items, kw); return NONE; },
        reverse: (l) => { l.items.reverse(); return NONE; },
        copy: (l) => new PyList(l.items.slice()), clear: (l) => { l.items = []; return NONE; },
      },
      tuple: { count: (l, a) => BigInt(l.items.filter((x) => eq(x, a[0])).length), index: (l, a) => { const i = l.items.findIndex((x) => eq(x, a[0])); if (i < 0) err('ValueError', 'tuple.index(x): x not in tuple'); return BigInt(i); } },
      dict: {
        keys: (d) => new PyView('keys', d), values: (d) => new PyView('values', d), items: (d) => new PyView('items', d),
        get: (d, a) => { const r = dictGet(d, a[0]); return r === undefined ? (a.length > 1 ? a[1] : NONE) : r; },
        pop: (d, a) => { const h = hkey(a[0]); const e = d.map.get(h); if (!e) { if (a.length > 1) return a[1]; err('KeyError', repr(a[0])); } d.map.delete(h); return e[1]; },
        update: (d, a, kw) => { if (a[0] instanceof PyDict) for (const [, [k, v]] of a[0].map) dictSet(d, k, v); else if (a[0]) for (const pr of iterArr(a[0])) { const it = iterArr(pr); dictSet(d, it[0], it[1]); } for (const [k, v] of kw) dictSet(d, k, v); return NONE; },
        setdefault: (d, a) => { const r = dictGet(d, a[0]); if (r !== undefined) return r; const v = a.length > 1 ? a[1] : NONE; dictSet(d, a[0], v); return v; },
        copy: (d) => { const n = new PyDict(); for (const [h, e] of d.map) n.map.set(h, [e[0], e[1]]); return n; }, clear: (d) => { d.map.clear(); return NONE; },
        popitem: (d) => { const last = [...d.map.keys()].pop(); if (last === undefined) err('KeyError', "'popitem(): dictionary is empty'"); const e = d.map.get(last); d.map.delete(last); return new PyTuple([e[0], e[1]]); },
      },
      set: {
        add: (s, a) => { const h = hkey(a[0]); if (!s.map.has(h)) s.map.set(h, a[0]); return NONE; },
        remove: (s, a) => { const h = hkey(a[0]); if (!s.map.has(h)) err('KeyError', repr(a[0])); s.map.delete(h); return NONE; },
        discard: (s, a) => { s.map.delete(hkey(a[0])); return NONE; },
        pop: (s) => { const k = s.map.keys().next(); if (k.done) err('KeyError', "'pop from an empty set'"); const v = s.map.get(k.value); s.map.delete(k.value); return v; },
        union: (s, a) => binop('|', s, toSet(a[0])), intersection: (s, a) => binop('&', s, toSet(a[0])), difference: (s, a) => binop('-', s, toSet(a[0])), symmetric_difference: (s, a) => binop('^', s, toSet(a[0])),
        issubset: (s, a) => [...s.map.keys()].every((h) => toSet(a[0]).map.has(h)), issuperset: (s, a) => [...toSet(a[0]).map.keys()].every((h) => s.map.has(h)),
        update: (s, a) => { for (const v of iterArr(a[0])) { const h = hkey(v); if (!s.map.has(h)) s.map.set(h, v); } return NONE; },
        copy: (s) => { const n = new PySet(); for (const [h, v] of s.map) n.map.set(h, v); return n; }, clear: (s) => { s.map.clear(); return NONE; },
      },
      int: { bit_length: (n) => BigInt(toBig(n) === 0n ? 0 : (toBig(n) < 0n ? -toBig(n) : toBig(n)).toString(2).length) },
      float: { is_integer: (x) => Number.isInteger(x) },
    };
    METHODS.bool = METHODS.int;
    function stripChars(s, chars, mode) {
      if (chars === undefined || chars === NONE) { if (mode & 1) s = s.replace(/^\s+/, ''); if (mode & 2) s = s.replace(/\s+$/, ''); return s; }
      const set = new Set([...chars]); const a = [...s]; let i = 0, j = a.length;
      if (mode & 1) while (i < j && set.has(a[i])) i++;
      if (mode & 2) while (j > i && set.has(a[j - 1])) j--;
      return a.slice(i, j).join('');
    }
    const toSet = (v) => { if (v instanceof PySet) return v; const s = new PySet(); for (const x of iterArr(v)) { const h = hkey(x); if (!s.map.has(h)) s.map.set(h, x); } return s; };

    /* ---- fungsi terbina dalam ---- */
    const B = (name, fn) => builtins.set(name, new PyBuiltin(name, fn));
    const T = (name, fn) => builtins.set(name, new PyType(name, fn));
    B('print', (args, kw) => {
      for (const k of kw.keys()) if (!['sep', 'end', 'flush', 'file'].includes(k)) err('TypeError', "'" + k + "' is an invalid keyword argument for print()");
      const sep = kw.has('sep') && kw.get('sep') !== NONE ? kw.get('sep') : ' ', end = kw.has('end') && kw.get('end') !== NONE ? kw.get('end') : '\n';
      if (!isStr(sep)) err('TypeError', 'sep must be None or a string, not ' + typeName(sep));
      if (!isStr(end)) err('TypeError', 'end must be None or a string, not ' + typeName(end));
      write(args.map(str).join(sep) + end); return NONE;
    });
    B('input', (args) => {
      if (args.length) write(str(args[0]));
      usedInput = true;
      if (!inputs.length) throw new NeedInput();
      const v = String(inputs.shift());
      if (opts.echo !== false) write(v + '\n');
      return v;
    });
    B('len', (args) => {
      argN(args, 1, 1, 'len'); const v = args[0];
      if (isStr(v)) return BigInt([...v].length);
      if (v instanceof PyList || v instanceof PyTuple) return BigInt(v.items.length);
      if (v instanceof PyDict || v instanceof PySet) return BigInt(v.map.size);
      if (v instanceof PyRange) return rangeLen(v);
      if (v instanceof PyView) return BigInt(v.dict.map.size);
      if (v instanceof PyInstance) { const m = classLookup(v.cls, '__len__'); if (m) return call(m, [v]); }
      err('TypeError', "object of type '" + typeName(v) + "' has no len()");
    });
    const toIntArg = (v, fname) => { if (isInt(v) || isBool(v)) return toBig(v); err('TypeError', "'" + typeName(v) + "' object cannot be interpreted as an integer"); };
    T('range', (args) => {
      if (!args.length) err('TypeError', 'range expected at least 1 argument, got 0');
      if (args.length > 3) err('TypeError', 'range expected at most 3 arguments, got ' + args.length);
      const a = args.map((x) => toIntArg(x, 'range'));
      if (a.length === 1) return new PyRange(0n, a[0], 1n);
      if (a[2] === 0n) err('ValueError', 'range() arg 3 must not be zero');
      return new PyRange(a[0], a[1], a.length > 2 ? a[2] : 1n);
    });
    T('int', (args, kw) => {
      if (!args.length) return 0n;
      const v = args[0], base = args[1] !== undefined ? Number(toBig(args[1])) : kw.has('base') ? Number(toBig(kw.get('base'))) : null;
      if (isStr(v)) {
        const s = v.trim().replace(/_/g, '');
        if (base !== null && base !== 10) { const t = s.replace(/^0[xbo]/i, ''); const digits = '0123456789abcdefghijklmnopqrstuvwxyz'.slice(0, base); if (!t || ![...t.toLowerCase().replace(/^[+-]/, '')].every((c) => digits.includes(c))) err('ValueError', "invalid literal for int() with base " + base + ': ' + strRepr(v)); const neg = t.startsWith('-'); let r = 0n; for (const c of t.toLowerCase().replace(/^[+-]/, '')) r = r * BigInt(base) + BigInt(digits.indexOf(c)); return neg ? -r : r; }
        if (!/^[+-]?\d+$/.test(s)) err('ValueError', 'invalid literal for int() with base 10: ' + strRepr(v));
        return BigInt(s);
      }
      if (isBool(v) || isInt(v)) return toBig(v);
      if (isFloat(v)) { if (!Number.isFinite(v)) err(Number.isNaN(v) ? 'ValueError' : 'OverflowError', Number.isNaN(v) ? 'cannot convert float NaN to integer' : 'cannot convert float infinity to integer'); return BigInt(Math.trunc(v)); }
      err('TypeError', "int() argument must be a string, a bytes-like object or a real number, not '" + typeName(v) + "'");
    });
    T('float', (args) => {
      if (!args.length) return 0;
      const v = args[0];
      if (isStr(v)) { const s = v.trim().replace(/_/g, '').toLowerCase(); if (/^[+-]?(inf|infinity)$/.test(s)) return s.startsWith('-') ? -Infinity : Infinity; if (/^[+-]?nan$/.test(s)) return NaN; if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/.test(s)) err('ValueError', 'could not convert string to float: ' + strRepr(v)); return parseFloat(s); }
      if (isNum(v)) return toF(v);
      err('TypeError', "float() argument must be a string or a real number, not '" + typeName(v) + "'");
    });
    T('str', (args) => (args.length ? str(args[0]) : ''));
    T('bool', (args) => (args.length ? truthy(args[0]) : false));
    T('list', (args) => new PyList(args.length ? iterArr(args[0]) : []));
    T('tuple', (args) => new PyTuple(args.length ? iterArr(args[0]) : []));
    T('set', (args) => (args.length ? toSet(args[0]) : new PySet()));
    T('dict', (args, kw) => {
      const d = new PyDict();
      if (args.length) { if (args[0] instanceof PyDict) for (const [, [k, v]] of args[0].map) dictSet(d, k, v); else for (const pr of iterArr(args[0])) { const it = iterArr(pr); if (it.length !== 2) err('ValueError', 'dictionary update sequence element #0 has length ' + it.length + '; 2 is required'); dictSet(d, it[0], it[1]); } }
      for (const [k, v] of kw) dictSet(d, k, v); return d;
    });
    T('type', (args) => { argN(args, 1, 1, 'type'); const v = args[0]; if (v instanceof PyInstance) return v.cls; const n = typeName(v); return builtins.get(n) instanceof PyType ? builtins.get(n) : new PyType(n, () => err('TypeError', "cannot create '" + n + "' instances")); });
    builtins.set('NoneType', new PyType('NoneType', () => NONE));
    builtins.set('object', new PyType('object', () => new PyInstance(new PyClass({ name: 'object', bases: [], attrs: new Map() }))));
    B('super', (args) => {
      if (args.length === 2) return new PySuper(args[0], args[1]);
      const fr = frames[frames.length - 1];
      if (!fr || !fr.f.ownerClass || !fr.args.length) err('RuntimeError', 'super(): no arguments');
      return new PySuper(fr.f.ownerClass, fr.args[0]);
    });
    B('hasattr', (args) => { try { getAttr(args[0], str(args[1])); return true; } catch (e) { if (e instanceof PyError && e.type === 'AttributeError') return false; throw e; } });
    B('getattr', (args) => { try { return getAttr(args[0], str(args[1])); } catch (e) { if (args.length > 2 && e instanceof PyError && e.type === 'AttributeError') return args[2]; throw e; } });
    B('setattr', (args) => { if (args[0] instanceof PyInstance || args[0] instanceof PyClass) { args[0].attrs.set(str(args[1]), args[2]); return NONE; } err('AttributeError', "'" + typeName(args[0]) + "' object has no attribute '" + str(args[1]) + "'"); });
    B('abs', (args) => { argN(args, 1, 1, 'abs'); const v = args[0]; if (isInt(v) || isBool(v)) { const b = toBig(v); return b < 0n ? -b : b; } if (isFloat(v)) return Math.abs(v); err('TypeError', "bad operand type for abs(): '" + typeName(v) + "'"); });
    B('round', (args, kw) => {
      const v = args[0], nd = args.length > 1 ? args[1] : kw.get('ndigits');
      if (!isNum(v)) err('TypeError', 'type ' + typeName(v) + " doesn't define __round__ method");
      if (nd === undefined || nd === NONE) { if (isFloat(v)) { if (!Number.isFinite(v)) err(Number.isNaN(v) ? 'ValueError' : 'OverflowError', 'cannot convert float ' + (Number.isNaN(v) ? 'NaN' : 'infinity') + ' to integer'); return roundScaled(v, 0); } return toBig(v); }
      const k = Number(toBig(nd));
      if (isFloat(v)) { if (!Number.isFinite(v)) return v; const q = roundScaled(v, k); return k >= 0 ? Number(q) / 10 ** k : Number(q) * 10 ** -k; }
      if (k >= 0) return toBig(v);
      const m = 10n ** BigInt(-k); const x = toBig(v); let q = x / m, r = x % m; if (r < 0n) { r += m; q -= 1n; } if (r * 2n > m || (r * 2n === m && q % 2n !== 0n)) q += 1n; return q * m;
    });
    const minmax = (name, sign) => (args, kw) => {
      let items = args.length === 1 ? iterArr(args[0]) : args;
      if (!args.length) err('TypeError', name + ' expected at least 1 argument, got 0');
      if (!items.length) { if (kw.has('default')) return kw.get('default'); err('ValueError', name + '() iterable argument is empty'); }
      const key = kw.get('key') || NONE;
      let best = items[0], bk = key === NONE ? best : call(key, [best]);
      for (let i = 1; i < items.length; i++) { const k = key === NONE ? items[i] : call(key, [items[i]]); if (cmp(k, bk, sign > 0 ? '>' : '<') * sign > 0) { best = items[i]; bk = k; } }
      return best;
    };
    B('max', minmax('max', 1)); B('min', minmax('min', -1));
    B('sum', (args) => {
      let acc = args.length > 1 ? args[1] : 0n;
      if (isStr(acc)) err('TypeError', "sum() can't sum strings [use ''.join(seq) instead]");
      const items = iterArr(args[0]);
      if (isNum(acc) && items.every(isNum) && (isFloat(acc) || items.some(isFloat))) {
        // jumlah terpampas (Neumaier) seperti Python 3.12+
        let ints = 0n, s = 0, c = 0, anyF = isFloat(acc);
        const all = [acc, ...items];
        for (const x of all) { if (isFloat(x)) { anyF = true; const t = s + x; c += Math.abs(s) >= Math.abs(x) ? (s - t) + x : (x - t) + s; s = t; } else ints += toBig(x); }
        return Number(ints) + s + c;
      }
      for (const x of items) acc = binop('+', acc, x);
      return acc;
    });
    B('sorted', (args, kw) => new PyList(sortKey(iterArr(args[0]), kw)));
    B('reversed', (args) => { const v = args[0]; if (!(isStr(v) || v instanceof PyList || v instanceof PyTuple || v instanceof PyRange)) err('TypeError', "'" + typeName(v) + "' object is not reversible"); return new PyIter(iterArr(v).reverse(), 'list_reverseiterator'); });
    B('enumerate', (args, kw) => { let i = toBig(args[1] !== undefined ? args[1] : kw.get('start') || 0n); return new PyIter(iterArr(args[0]).map((x) => new PyTuple([i++, x])), 'enumerate'); });
    B('zip', (args) => { const arrs = args.map((a) => iterArr(a)); const n = arrs.length ? Math.min(...arrs.map((a) => a.length)) : 0; const out = []; for (let i = 0; i < n; i++) out.push(new PyTuple(arrs.map((a) => a[i]))); return new PyIter(out, 'zip'); });
    B('map', (args) => { const f = args[0]; const arrs = args.slice(1).map((a) => iterArr(a)); const n = Math.min(...arrs.map((a) => a.length)); const out = []; for (let i = 0; i < n; i++) out.push(call(f, arrs.map((a) => a[i]))); return new PyIter(out, 'map'); });
    B('filter', (args) => { const f = args[0]; return new PyIter(iterArr(args[1]).filter((x) => truthy(f === NONE ? x : call(f, [x]))), 'filter'); });
    B('any', (args) => iterArr(args[0]).some(truthy)); B('all', (args) => iterArr(args[0]).every(truthy));
    B('isinstance', (args) => { const v = args[0]; const ts = args[1] instanceof PyTuple ? args[1].items : [args[1]]; const n = typeName(v); if (v instanceof PyInstance) return ts.some((t) => t instanceof PyClass && mro(v.cls).includes(t)) || ts.some((t) => t instanceof PyType && t.name === 'object'); return ts.some((t) => (t instanceof PyType && t.name === 'object') || t instanceof PyType && (t.name === n || (t.name === 'int' && n === 'bool') || (EXC.has(t.name) && v && v.__exc && isSubExc(v.type, t.name)))); });
    B('chr', (args) => { const n = Number(toIntArg(args[0], 'chr')); if (n < 0 || n > 0x10ffff) err('ValueError', 'chr() arg not in range(0x110000)'); return String.fromCodePoint(n); });
    B('ord', (args) => { const s = args[0]; if (!isStr(s)) err('TypeError', 'ord() expected string of length 1, but ' + typeName(s) + ' found'); const ch = [...s]; if (ch.length !== 1) err('TypeError', 'ord() expected a character, but string of length ' + ch.length + ' found'); return BigInt(ch[0].codePointAt(0)); });
    B('divmod', (args) => new PyTuple([binop('//', args[0], args[1]), binop('%', args[0], args[1])]));
    B('pow', (args) => { if (args.length === 3) { let b = toBig(args[0]) % toBig(args[2]), e = toBig(args[1]), m = toBig(args[2]), r = 1n; while (e > 0n) { if (e & 1n) r = (r * b) % m; b = (b * b) % m; e >>= 1n; } return r; } return binop('**', args[0], args[1]); });
    B('bin', (args) => { const n = toIntArg(args[0]); return (n < 0n ? '-0b' + (-n).toString(2) : '0b' + n.toString(2)); });
    B('hex', (args) => { const n = toIntArg(args[0]); return (n < 0n ? '-0x' + (-n).toString(16) : '0x' + n.toString(16)); });
    B('oct', (args) => { const n = toIntArg(args[0]); return (n < 0n ? '-0o' + (-n).toString(8) : '0o' + n.toString(8)); });
    B('repr', (args) => repr(args[0]));
    B('format', (args) => formatSpec(args[0], args[1] || ''));
    B('callable', (args) => args[0] instanceof PyFunc || args[0] instanceof PyBuiltin || args[0] instanceof PyType || args[0] instanceof PyMethod);
    B('iter', (args) => new PyIter(iterArr(args[0]), 'iterator'));
    B('next', (args) => { const it = args[0]; if (!(it instanceof PyIter)) err('TypeError', "'" + typeName(it) + "' object is not an iterator"); if (!it.arr.length) { if (args.length > 1) return args[1]; err('StopIteration', ''); } return it.arr.shift(); });
    B('id', () => BigInt(Math.floor(Math.random() * 1e12)));
    B('hash', (args) => { hkey(args[0]); return isInt(args[0]) ? args[0] : BigInt([...str(args[0])].reduce((a, c) => (a * 31 + c.codePointAt(0)) | 0, 7)); });
    B('help', () => { write('Help: ask Pyko! / Tanya Pyko!\n'); return NONE; });
    B('exit', () => { throw new Unsupported('exit'); }); builtins.set('quit', builtins.get('exit'));
    B('open', () => { throw new Unsupported('files'); });
    B('eval', () => { throw new Unsupported('eval'); }); B('exec', () => { throw new Unsupported('eval'); });
    B('globals', () => { throw new Unsupported('globals'); });
    EXC.forEach((name) => builtins.set(name, new PyType(name, (args) => ({ __exc: true, type: name, msg: args.length ? str(args[0]) : '' }))));

    /* ---- modul ---- */
    function getModule(name, line) {
      if (name === 'math') {
        const f1 = (fn, nm) => new PyBuiltin(nm, (a) => { if (!isNum(a[0])) err('TypeError', 'must be real number, not ' + typeName(a[0])); return fn(toF(a[0])); });
        return new PyModule('math', {
          pi: Math.PI, e: Math.E, tau: Math.PI * 2, inf: Infinity, nan: NaN,
          sqrt: f1((x) => { if (x < 0) err('ValueError', 'expected a nonnegative input, got ' + floatRepr(x)); return Math.sqrt(x); }, 'sqrt'),
          floor: new PyBuiltin('floor', (a) => (isInt(a[0]) || isBool(a[0]) ? toBig(a[0]) : BigInt(Math.floor(toF(a[0]))))),
          ceil: new PyBuiltin('ceil', (a) => (isInt(a[0]) || isBool(a[0]) ? toBig(a[0]) : BigInt(Math.ceil(toF(a[0]))))),
          trunc: new PyBuiltin('trunc', (a) => BigInt(Math.trunc(toF(a[0])))),
          fabs: f1(Math.abs, 'fabs'), pow: new PyBuiltin('pow', (a) => Math.pow(toF(a[0]), toF(a[1]))),
          factorial: new PyBuiltin('factorial', (a) => { if (!(isInt(a[0]) || isBool(a[0]))) err('TypeError', "'" + typeName(a[0]) + "' object cannot be interpreted as an integer"); let n = toBig(a[0]); if (n < 0n) err('ValueError', 'factorial() not defined for negative values'); if (n > 1500n) throw new Unsupported('huge-number'); let r = 1n; while (n > 1n) { r *= n; n--; } return r; }),
          gcd: new PyBuiltin('gcd', (a) => { let x = a.length ? toBig(a[0]) : 0n; for (const y0 of a.slice(1)) { let y = toBig(y0); x = x < 0n ? -x : x; y = y < 0n ? -y : y; while (y) [x, y] = [y, x % y]; } return x < 0n ? -x : x; }),
          isqrt: new PyBuiltin('isqrt', (a) => { const n = toBig(a[0]); if (n < 0n) err('ValueError', 'isqrt() argument must be nonnegative'); if (n < 2n) return n; let x = BigInt(Math.floor(Math.sqrt(Number(n)))); while (x * x > n) x--; while ((x + 1n) * (x + 1n) <= n) x++; return x; }),
          sin: f1(Math.sin, 'sin'), cos: f1(Math.cos, 'cos'), tan: f1(Math.tan, 'tan'), log10: f1(Math.log10, 'log10'), log2: f1(Math.log2, 'log2'), exp: f1(Math.exp, 'exp'),
          log: new PyBuiltin('log', (a) => { const x = toF(a[0]); if (x <= 0) err('ValueError', 'expected a positive input'); return a.length > 1 ? Math.log(x) / Math.log(toF(a[1])) : Math.log(x); }),
          radians: f1((x) => x * Math.PI / 180, 'radians'), degrees: f1((x) => x * 180 / Math.PI, 'degrees'), hypot: new PyBuiltin('hypot', (a) => Math.hypot(...a.map(toF))),
          isclose: new PyBuiltin('isclose', (a) => Math.abs(toF(a[0]) - toF(a[1])) <= Math.max(1e-9 * Math.max(Math.abs(toF(a[0])), Math.abs(toF(a[1]))), 0)),
        });
      }
      if (name === 'random') {
        const ri = (lo, hi) => lo + BigInt(Math.floor(Math.random() * Number(hi - lo + 1n)));
        return new PyModule('random', {
          randint: new PyBuiltin('randint', (a) => { const lo = toIntArg(a[0]), hi = toIntArg(a[1]); if (hi < lo) err('ValueError', 'empty range in randrange(' + lo + ', ' + (hi + 1n) + ')'); return ri(lo, hi); }),
          random: new PyBuiltin('random', () => Math.random()),
          uniform: new PyBuiltin('uniform', (a) => toF(a[0]) + Math.random() * (toF(a[1]) - toF(a[0]))),
          choice: new PyBuiltin('choice', (a) => { const arr = iterArr(a[0]); if (!arr.length) err('IndexError', 'Cannot choose from an empty sequence'); return arr[Math.floor(Math.random() * arr.length)]; }),
          shuffle: new PyBuiltin('shuffle', (a) => { const l = a[0]; if (!(l instanceof PyList)) err('TypeError', "'" + typeName(l) + "' object does not support item assignment"); for (let i = l.items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [l.items[i], l.items[j]] = [l.items[j], l.items[i]]; } return NONE; }),
          randrange: new PyBuiltin('randrange', (a) => { const r = builtins.get('range').call(a, new Map()); const arr = iterArr(r); if (!arr.length) err('ValueError', 'empty range for randrange()'); return arr[Math.floor(Math.random() * arr.length)]; }),
          sample: new PyBuiltin('sample', (a) => { const arr = iterArr(a[0]).slice(); const k = Number(toBig(a[1])); if (k > arr.length) err('ValueError', 'Sample larger than population or is negative'); for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return new PyList(arr.slice(0, k)); }),
          seed: new PyBuiltin('seed', () => NONE),
        });
      }
      if (name === 'time') return new PyModule('time', { sleep: new PyBuiltin('sleep', () => NONE), time: new PyBuiltin('time', () => Date.now() / 1000) });
      if (name === 'string') return new PyModule('string', { ascii_letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ascii_lowercase: 'abcdefghijklmnopqrstuvwxyz', ascii_uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', digits: '0123456789', punctuation: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~' });
      const known = ['turtle', 'pygame', 'tkinter', 'os', 'sys', 'datetime', 'json', 'requests', 'numpy', 'pandas', 'matplotlib', 'collections', 'itertools', 'statistics', 'csv', 're', 'functools', 'copy', 'decimal', 'fractions', 'calendar'];
      if (known.includes(name.split('.')[0])) throw new Unsupported('module:' + name, line);
      err('ModuleNotFoundError', "No module named '" + name + "'");
    }

    /* ---- jalankan ---- */
    const t0 = Date.now();
    let ast;
    try { ast = parse(src); }
    catch (e) {
      if (e instanceof PyError) return { ok: false, out: '', err: { type: e.type, msg: e.pyMsg, line: e.line }, phase: 'syntax' };
      if (e instanceof Unsupported) return { ok: false, out: '', unsupported: { what: e.what, line: e.line } };
      return { ok: false, out: '', crash: String(e && e.message || e) };
    }
    try {
      execBlock(ast, G);
      return { ok: true, out, steps, usedInput, ms: Date.now() - t0 };
    } catch (e) {
      if (e instanceof PyError) return { ok: false, out, err: { type: e.type, msg: e.pyMsg, line: e.line || curLine }, usedInput };
      if (e instanceof NeedInput) return { ok: false, out, needInput: true, usedInput: true };
      if (e instanceof Unsupported) return { ok: false, out, unsupported: { what: e.what, line: e.line || curLine }, truncated, usedInput };
      if (e === BREAK || e === CONTINUE) return { ok: false, out, err: { type: 'SyntaxError', msg: e === BREAK ? "'break' outside loop" : "'continue' not properly in loop", line: curLine } };
      if (e instanceof ReturnSig) return { ok: false, out, err: { type: 'SyntaxError', msg: "'return' outside function", line: curLine } };
      if (e instanceof RangeError) return { ok: false, out, err: { type: 'RecursionError', msg: 'maximum recursion depth exceeded', line: curLine } };
      return { ok: false, out, crash: String(e && e.stack || e) };
    }
  }

  /* Semak sintaks sahaja (tanpa menjalankan). */
  function check(src) {
    try { parse(src); return null; }
    catch (e) { if (e instanceof PyError) return { type: e.type, msg: e.pyMsg, line: e.line }; if (e instanceof Unsupported) return { unsupported: e.what, line: e.line }; return { crash: String(e) }; }
  }
  /* Format paparan ralat ala Python. */
  function traceback(e) { return (e.type === 'SyntaxError' || e.type === 'IndentationError' ? '  File "main.py", line ' + e.line + '\n' : 'Traceback (most recent call last):\n  File "main.py", line ' + e.line + ', in <module>\n') + e.type + (e.msg ? ': ' + e.msg : ''); }

  const api = { run, check, traceback, floatRepr };
  if (typeof window !== 'undefined') window.PykoRun = api;
  if (typeof module !== 'undefined') module.exports = api;
})();
