export enum LeafNodeType {
  Null = 'Null',
  Obj = 'Obj',
  Arr = 'Arr',
  Bool = 'Bool',
  Str = 'Str',
}

export class LeafNode {
  readonly t: LeafNodeType = LeafNodeType.Null;
  notes?: string[];

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

export type LeafVal = LeafObj | LeafArr | LeafBool | LeafStr;

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

function renderObjProps(out: string[], depth: number, obj: LeafObj) {
  for (const prop in obj.v) {
    const v = obj.v[prop];

    if (v.notes) {
      for (const note of v.notes) {
        renderDepth(out, depth);
        out.push(`# ${note}\n`);
      }
    }

    renderDepth(out, depth);
    renderStr(out, prop);
    out.push(' = ');
    renderVal(out, depth, v);
    out.push('\n');
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
        out.push(`# ${note}\n`);
      }
    }

    renderDepth(out, depth + 1);
    renderVal(out, depth + 1, v);
    out.push('\n');
  }
  renderDepth(out, depth);
  out.push(']');
}

const RE: [string, RegExp][] = [
  ['whitespace', /([, \t\r\n]+)/y],
  ['{', /(\{)/y],
  ['}', /(\})/y],
  ['[', /(\[)/y],
  [']', /(\])/y],
  ['bool', /(true|false)\b/y],
  ['prop-id', /([a-zA-Z_$][a-zA-Z0-9_$]{0,63})[ \t\r\n]*=/y],
  ['prop-str', /("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")[ \t\r\n]*=/y],
  ['id', /([a-zA-Z_$][a-zA-Z0-9_$]{0,63})/y],
  ['str', /("(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*")/y],
];

type Tok = [string, string, string | boolean, string, string];

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

        let value = match[1];
        switch (t) {
          case 'prop-str':
          case 'str':
          case 'bool':
            value = JSON.parse(value);
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
  const val = peekTok(tok, ['{', 'id', 'str', 'bool']);
  tok.shift();
  switch (val[0]) {
    case '{':
      return parseObj(tok);
    case 'id':
    case 'str':
      return new LeafStr(val[2] as string);
    case 'bool':
      return new LeafBool(val[2] as boolean);
  }
  throw new Error('unreachable');
}

function parseObjProps(tok: Tok[], obj: LeafObj, isTop?: boolean) {
  while (true) {
    if (isTop === true && !tok.length) {
      return;
    }
    const key = peekTok(tok, ['prop-id', 'prop-str', '}']);
    if (key[0] === '}') {
      return;
    }
    tok.shift();
    const val = parseVal(tok);
    obj.withProp(key[2] as string, val);
  }
}

function parseObj(tok: Tok[]): LeafObj {
  const obj = new LeafObj();

  parseObjProps(tok, obj);

  peekTok(tok, ['}']);
  tok.shift();

  return obj;
}

/*
export enum LeafType {
  Ws = 'Ws',
  Prop = 'Prop',
  ObjBeg = 'ObjBeg',
  ObjEnd = 'ObjEnd',
  ArrBeg = 'ArrBeg',
  ArrEnd = 'ArrEnd',
  Bool = 'Bool',
  Str = 'Str',
}
export type LeafLocStart = string;
export type LeafLocEnd = string;
export type LeafRepr = string;
export type LeafVal = null | number | boolean | string;
export type Leaf = [LeafType, LeafRepr, LeafVal, LeafLocStart?, LeafLocEnd?];

export class Render {
  #out: Leaf[];

  constructor() {
    this.#out = [];
  }

  *[Symbol.iterator](): Iterator<Leaf> {
    for (let out = this.#out.shift(); out; out = this.#out.shift()) {
      if (out) {
        yield out;
      } else {
        break;
      }
    }
  }

  render(): string {
    const out = [];
    for (const [_, repr] of this) {
      out.push(repr);
    }
    return out.join('');
  }

  prop(key: string) {
    this.#out.push([LeafType.Prop, `${key}=`, key]);
  }

  str(str: string) {
    this.#out.push([LeafType.Str, JSON.stringify(str), str]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }

  bool(bool: boolean) {
    this.#out.push([LeafType.Bool, bool.toString(), bool]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }

  objBeg() {
    this.#out.push([LeafType.ObjBeg, '{', null]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }

  objEnd() {
    this.#out.push([LeafType.ObjEnd, '}', null]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }

  arrBeg() {
    this.#out.push([LeafType.ArrBeg, '[', null]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }

  arrEnd() {
    this.#out.push([LeafType.ArrEnd, ']', null]);
    this.#out.push([LeafType.Ws, '\n', null]);
  }
}

const reList: [LeafType, RegExp][] = [
  [LeafType.Ws, /^[, \t\r\n]+/],
  [LeafType.Prop, /^([a-zA-Z_$][a-zA-Z0-9_$]*)[ \t\r\n]*=/],
  [
    LeafType.Prop,
    /^"((?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*)"[ \t\r\n]*=/,
  ],
  [LeafType.ObjBeg, /^\{/],
  [LeafType.ObjEnd, /^\}/],
  [LeafType.ArrBeg, /^\[/],
  [LeafType.ArrEnd, /^\]/],
  [LeafType.Bool, /^(?:true|false)\b/],
  [LeafType.Str, /^"(?:[^"\\]|\\["\\\/bfnrt]|\\u[0-9a-fA-F]{4})*"/],
];

export class Parse {
  #input: string;
  #out: Leaf[];

  constructor() {
    this.#input = '';
    this.#out = [];
  }

  *[Symbol.iterator](): Iterator<Leaf> {
    while (true) {
      let didMatch = false;
      for (const [type, re] of reList) {
        const match = this.#input.match(re);

        if (match) {
          const value = match[0];
          this.#input = this.#input.slice(value.length);

          switch (type) {
            case LeafType.Prop:
              yield [type, value, match[1]];
              break;
            case LeafType.Str:
              yield [type, value, JSON.parse(value)];
              break;
            case LeafType.Bool:
              yield [type, value, JSON.parse(value)];
              break;
            default:
              yield [type, value, null];
              break;
          }

          didMatch = true;
        }
      }
      if (!didMatch) {
        return;
      }
    }
  }

  parse(): Leaf[] {
    const out = this.#out;
    this.#out = [];
    return out;
  }

  writeChunk(chunk: string) {
    this.#input = this.#input + chunk;
  }
}
*/
