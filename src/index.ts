export enum LeafNodeType {
  Null = 'null',
  Bool = 'bool',
  Str = 'str',
  F64 = 'f64',
  BigInt = 'bigint',
  Obj = 'obj',
  Arr = 'arr',
  Bin = 'bin',
}

export class LeafNode {
  readonly t: LeafNodeType = LeafNodeType.Null;
  notes?: string[];
  loc?: [string, string];

  constructor(notes?: string[]) {
    if (notes) {
      const newNotes = this.notes || [];
      for (const note of notes) {
        if (note.includes('\n')) {
          newNotes.push(...note.split('\n'));
        } else {
          newNotes.push(note);
        }
      }
      this.notes = newNotes;
    }
  }
}

export class LeafObj extends LeafNode {
  readonly t = LeafNodeType.Obj;
  tailNotes?: string[];

  v: { [prop: string]: LeafVal };

  constructor() {
    super();
    this.v = {};
  }

  withProp(k: string, v: LeafVal): LeafObj {
    this.v[k] = v;
    return this;
  }

  withBool(k: string, v: boolean, notes?: string[]): LeafObj {
    return this.withProp(k, new LeafBool(v, notes));
  }

  withStr(k: string, v: string, notes?: string[]): LeafObj {
    return this.withProp(k, new LeafStr(v, notes));
  }

  withBin(k: string, v: ArrayBuffer, notes?: string[]): LeafObj {
    return this.withProp(k, new LeafBin(v, notes));
  }

  withF64(k: string, v: number, notes?: string[]): LeafObj {
    return this.withProp(k, new LeafF64(v, notes));
  }

  withBigInt(k: string, v: bigint, notes?: string[]): LeafObj {
    return this.withProp(k, new LeafBigInt(v, notes));
  }

  stringify(): string {
    const out: string[] = [];
    renderObjProps(out, 0, this);
    return out.join('');
  }

  static parse(leaf: string): LeafObj {
    return parse(leaf);
  }
}

export class LeafArr extends LeafNode {
  readonly t = LeafNodeType.Arr;

  v: LeafVal[];

  constructor() {
    super();
    this.v = [];
  }

  pushBool(v: boolean): LeafArr {
    this.v.push(new LeafBool(v));
    return this;
  }
}

export class LeafNull extends LeafNode {
  readonly t = LeafNodeType.Null;

  constructor(notes?: string[]) {
    super(notes);
  }
}

export class LeafBool extends LeafNode {
  readonly t = LeafNodeType.Bool;

  v: boolean;

  constructor(v: boolean, notes?: string[]) {
    super(notes);
    this.v = v;
  }
}

export class LeafStr extends LeafNode {
  readonly t = LeafNodeType.Str;

  v: string;

  constructor(v: string, notes?: string[]) {
    super(notes);
    this.v = v;
  }
}

export class LeafBin extends LeafNode {
  readonly t = LeafNodeType.Bin;

  v: ArrayBuffer;

  constructor(v: ArrayBuffer, notes?: string[]) {
    super(notes);
    this.v = v;
  }

  toJSON(): any {
    const out: any = { t: this.t };
    if (this.notes) {
      out.notes = this.notes;
    }
    if (this.loc) {
      out.loc = this.loc;
    }
    out.v = renderBin(this.v);
    return out;
  }
}

export class LeafF64 extends LeafNode {
  readonly t = LeafNodeType.F64;

  v: number;

  constructor(v: number, notes?: string[]) {
    super(notes);
    this.v = v;
  }
}

export class LeafBigInt extends LeafNode {
  readonly t = LeafNodeType.BigInt;

  v: bigint;

  constructor(v: bigint, notes?: string[]) {
    super(notes);
    this.v = v;
  }

  toJSON(): any {
    const out: any = { t: this.t };
    if (this.notes) {
      out.notes = this.notes;
    }
    if (this.loc) {
      out.loc = this.loc;
    }
    out.v = this.v.toString();
    return out;
  }
}

export type LeafVal =
  | LeafObj
  | LeafArr
  | LeafNull
  | LeafBool
  | LeafStr
  | LeafBin
  | LeafF64
  | LeafBigInt;

function renderVal(out: string[], depth: number, val: LeafVal) {
  switch (val.t) {
    case LeafNodeType.Obj:
      renderObj(out, depth, val);
      break;
    case LeafNodeType.Arr:
      renderArr(out, depth, val);
      break;
    case LeafNodeType.Bool:
      out.push(JSON.stringify(val.v));
      break;
    case LeafNodeType.Str:
      renderStr(out, val.v);
      break;
    case LeafNodeType.Bin:
      const [t, s] = renderBin(val.v, depth);
      if (t === 'pct') {
        out.push(`b@${JSON.stringify(s)}`);
      } else {
        out.push(`B@"${s}"`);
      }
      break;
    case LeafNodeType.F64:
      out.push(JSON.stringify(val.v));
      break;
    case LeafNodeType.BigInt:
      out.push(`n@"${val.v.toString()}"`);
      break;
  }
}

function renderDepth(out: string[], depth: number) {
  for (let i = 0; i < depth; ++i) {
    out.push('  ');
  }
}

function renderStr(out: string[], str: string) {
  if (/[a-zA-Z_$](?:a-zA-Z0-9_$){0,63}/.test(str)) {
    out.push(str);
  } else {
    out.push(JSON.stringify(str));
  }
}

function renderBinB64(b: ArrayBuffer, depth?: number): string {
  const bytes = new Uint8Array(b);
  const binary = [];

  for (let i = 0; i < bytes.byteLength; i++) {
    binary.push(String.fromCharCode(bytes[i]));
  }

  let result = btoa(binary.join(''));

  if (depth) {
    depth += 1;

    let limit = 78 - depth * 2;
    if (limit < 64) {
      limit = 64;
    }

    if (result.length > limit) {
      const re = new RegExp(`.{1,${limit}}`, 'g');
      const chunks: string[] = result.match(re) || [];

      chunks.unshift('');
      result = chunks.join('\n' + '  '.repeat(depth));
    }
  }

  return result;
}

function renderBinPct(b: ArrayBuffer): string {
  const bytes = new Uint8Array(b);
  const result = [];

  for (let i = 0; i < bytes.length; i++) {
    const byte = bytes[i];
    if (
      (byte >= 0x00 && byte <= 0x1f) || // control characters
      byte == 0x22 || // "
      byte == 0x25 || // %
      byte == 0x5c || // \
      (byte >= 0x7f && byte <= 0xff) // extended ascii
    ) {
      // we need to escape this character
      const hex = byte.toString(16).toUpperCase().padStart(2, '0');
      result.push(`%${hex}`);
    } else {
      // this character is allowed
      result.push(String.fromCharCode(byte));
    }
  }

  return result.join('');
}

function renderBin(b: ArrayBuffer, depth?: number): ['pct' | 'b64', string] {
  const pct = renderBinPct(b);
  const b64 = renderBinB64(b, depth);

  if (b64.length < pct.length) {
    return ['b64', b64];
  }

  return ['pct', pct];
}

function renderObjProps(out: string[], depth: number, obj: LeafObj) {
  for (const prop in obj.v) {
    const v = obj.v[prop];

    if (v.notes) {
      for (const note of v.notes) {
        renderDepth(out, depth);
        out.push(`#${note}\n`);
      }
    }

    renderDepth(out, depth);
    renderStr(out, prop);
    out.push(' = ');
    renderVal(out, depth, v);
    out.push('\n');
  }
  if (obj.tailNotes) {
    for (const note of obj.tailNotes) {
      renderDepth(out, depth);
      out.push(`#${note}\n`);
    }
  }
}

function renderObj(out: string[], depth: number, obj: LeafObj) {
  out.push('{\n');
  renderObjProps(out, depth + 1, obj);
  renderDepth(out, depth);
  out.push('}');
}

function renderArr(out: string[], depth: number, arr: LeafArr) {
  out.push('[\n');
  for (const v of arr.v) {
    if (v.notes) {
      for (const note of v.notes) {
        renderDepth(out, depth + 1);
        out.push(`#${note}\n`);
      }
    }

    renderDepth(out, depth + 1);
    renderVal(out, depth + 1, v);
    out.push('\n');
  }
  renderDepth(out, depth);
  out.push(']');
}

function parsePct(pct: string): ArrayBuffer {
  const tokenMatcher = /%[0-9a-fA-F]{2}|[\s\S]/g;
  const matches = pct.match(tokenMatcher) || [];

  const byteArray = new Uint8Array(matches.length);

  for (let i = 0; i < matches.length; i++) {
    const token = matches[i];

    if (token.startsWith('%')) {
      byteArray[i] = parseInt(token.substring(1), 16);
    } else {
      byteArray[i] = token.charCodeAt(0);
    }
  }

  return byteArray.buffer;
}

function parseB64(b64: string): ArrayBuffer {
  const binaryString = atob(b64);
  const len = binaryString.length;

  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

const RE: [string, RegExp][] = [
  ['whitespace', /([, \t\r\n]+)/y],
  ['{', /(\{)/y],
  ['}', /(\})/y],
  ['[', /(\[)/y],
  [']', /(\])/y],
  ['note', /#(.*)/my],
  ['null', /null\b/y],
  ['bool', /(true|false)\b/y],
  ['bigint', /n@("-?(?:0|[1-9]\d*)")/y],
  ['bin-pct', /b@("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")/y],
  ['bin-b64', /B@("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")/y],
  ['prop-id', /([a-zA-Z_$][a-zA-Z0-9_$]{0,63})[ \t\r\n]*=/y],
  ['prop-str', /("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")[ \t\r\n]*=/y],
  ['id', /([a-zA-Z_$][a-zA-Z0-9_$]{0,63})/y],
  ['str', /("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")/y],
  ['f64', /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/y],
];

type TokVal = null | string | boolean | number | bigint | ArrayBuffer;
type Tok = [string, string, TokVal, string, string];

function lex(data: string): Tok[] {
  const out: Tok[] = [];
  let index = 0;
  let line = 1;
  let col = 1;

  while (index < data.length) {
    let didMatch = false;

    for (const [t, re] of RE) {
      re.lastIndex = index;

      const match = data.match(re);

      if (match) {
        const start = `${line}:${col}:${index}`;
        const raw = match[0];
        index += raw.length;
        for (const c of raw) {
          col++;
          if (c === '\n') {
            line++;
            col = 1;
          }
        }

        let value: TokVal = match[1];
        switch (t) {
          case 'null':
            value = null;
            break;
          case 'str':
          case 'prop-str':
            value = JSON.parse(value.replaceAll('\n', '\\n'));
            break;
          case 'bool':
          case 'f64':
            value = JSON.parse(value);
            break;
          case 'bigint':
            value = BigInt(JSON.parse(value));
            break;
          case 'bin-pct':
            value = value.replaceAll('\n', '\\n');
            value = parsePct(JSON.parse(value));
            break;
          case 'bin-b64':
            value = value.replaceAll(/[ \t\r\n]+/g, '');
            value = parseB64(JSON.parse(value));
            break;
        }

        if (t !== 'whitespace') {
          out.push([t, raw, value, start, `${line}:${col}:${index}`]);
        }
        didMatch = true;
        break;
      }
    }

    if (!didMatch) {
      throw new Error(
        `leaf parser unexpected ${line}:${col}:${index} ${JSON.stringify(data.substring(index, index + 16))}...`,
      );
    }
  }

  return out;
}

function parse(data: string): LeafObj {
  const tok = lex(data);
  const out = new LeafObj();
  parseObjProps(tok, out, true);
  return out;
}

function peekTok(tok: Tok[], want: string[]): Tok {
  if (!tok.length) {
    throw new Error(`expected ${JSON.stringify(want)}, got: eof`);
  }
  if (!want.includes(tok[0][0])) {
    throw new Error(`expected ${JSON.stringify(want)}, got: ${tok[0][0]}`);
  }
  return tok[0]!;
}

function parseVal(tok: Tok[]): LeafVal {
  const val = peekTok(tok, [
    '{',
    'null',
    'id',
    'str',
    'bin-pct',
    'bin-b64',
    'bool',
    'f64',
    'bigint',
  ]);
  tok.shift();
  let out: LeafVal = new LeafNull();
  switch (val[0]) {
    case '{':
      return parseObj(tok);
    case 'null':
      out.loc = [val[3], val[4]];
      return out;
    case 'id':
    case 'str':
      out = new LeafStr(val[2] as string);
      out.loc = [val[3], val[4]];
      return out;
    case 'bin-pct':
    case 'bin-b64':
      out = new LeafBin(val[2] as ArrayBuffer);
      out.loc = [val[3], val[4]];
      return out;
    case 'bool':
      out = new LeafBool(val[2] as boolean);
      out.loc = [val[3], val[4]];
      return out;
    case 'f64':
      out = new LeafF64(val[2] as number);
      out.loc = [val[3], val[4]];
      return out;
    case 'bigint':
      out = new LeafBigInt(val[2] as bigint);
      out.loc = [val[3], val[4]];
      return out;
  }
  throw new Error('unreachable');
}

function parseObjProps(tok: Tok[], obj: LeafObj, isTop?: boolean) {
  let notes = [];
  while (true) {
    if (isTop === true && !tok.length) {
      break;
    }
    const key = peekTok(tok, ['note', 'prop-id', 'prop-str', '}']);
    if (key[0] === '}') {
      break;
    }
    tok.shift();
    if (key[0] === 'note') {
      notes.push(key[2] as string);
      continue;
    }
    const val = parseVal(tok);
    if (notes.length) {
      val.notes = notes;
      notes = [];
    }
    obj.withProp(key[2] as string, val);
  }
  if (notes.length) {
    obj.tailNotes = notes;
  }
}

function parseObj(tok: Tok[]): LeafObj {
  const obj = new LeafObj();

  parseObjProps(tok, obj);

  peekTok(tok, ['}']);
  tok.shift();

  return obj;
}
