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
