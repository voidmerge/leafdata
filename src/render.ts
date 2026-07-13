import { LeafData, LdType, LdVal, LdBigInt, LdBytes } from './types.js';

export function renderTreeToStr(data: LeafData): string {
  const out: string[] = [];
  renderList(out, data.v);
  return out.join('');
}

function renderList(out: string[], list: (string | LdVal)[]) {
  for (const item of list) {
    if (typeof item === 'string') {
      out.push(item);
    } else {
      render(out, item);
    }
  }
}

function render(out: string[], item: LdVal) {
  switch (item.t) {
    case LdType.Null:
      out.push('null');
      break;
    case LdType.Bool:
      out.push(item.v.toString());
      break;
    case LdType.F64:
      out.push(JSON.stringify(item.v));
      break;
    case LdType.BigInt:
      out.push(`bigint@${JSON.stringify(item.v.toString())}`);
      break;
    case LdType.Bytes:
      const [t, bin] = renderBin(item.v, 0);
      if (t === 'pct') {
        out.push(`pct@${JSON.stringify(bin)}`);
      } else {
        out.push(`b64@${JSON.stringify(bin)}`);
      }
      break;
    case LdType.Str:
      renderStr(out, item.v);
      break;
    case LdType.Obj:
      renderList(out, item.v);
      break;
    case LdType.Arr:
      renderList(out, item.v);
      break;
  }
}

function renderStr(out: string[], str: string) {
  if (/[a-zA-Z$_](?:a-zA-Z0-9$_-)*/.test(str)) {
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
