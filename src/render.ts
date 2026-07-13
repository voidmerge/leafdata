import {
  LeafData,
  LdType,
  LdVal,
  LdBigInt,
  LdBytes,
  JsObj,
  JsVal,
} from './types.js';

/**
 * Given a leafdata symbol tree, render a leafdata document string.
 */
export function renderTreeToStr(data: LeafData): string {
  const out: string[] = [];
  renderList(out, data.v);
  return out.join('');
}

/**
 * Given a Javascript object, render a leafdata symbol tree.
 *
 * @param data - the js object to render
 * @param indent - if omitted, the tree will be generated without pretty
 *                 printing to conserve space. If specified, the content
 *                 will be pretty printed for humans.
 */
export function renderJsToTree(data: JsObj, indent?: string): LeafData {
  const out: (string | LdVal)[] = [];
  renderTreeObjProps(out, data, 0, indent);
  return { t: LdType.LeafData, v: out };
}

function renderTreeDepth(
  out: (string | LdVal)[],
  depth: number,
  indent?: string,
) {
  if (indent) {
    out.push(indent.repeat(depth));
  }
}

function renderTreeObjProps(
  out: (string | LdVal)[],
  data: JsObj,
  depth: number,
  indent?: string,
) {
  const keys = Object.keys(data);
  for (let idx = 0; idx < keys.length; ++idx) {
    renderTreeDepth(out, depth, indent);
    out.push({ t: LdType.Str, v: keys[idx] });
    if (indent) {
      out.push(' = ');
    } else {
      out.push('=');
    }
    out.push(renderTreeVal(data[keys[idx]], depth, indent));
    if (indent) {
      out.push('\n');
    } else if (idx < keys.length - 1) {
      out.push(',');
    }
  }
}

function renderTreeVal(data: JsVal, depth: number, indent?: string): LdVal {
  if (data instanceof ArrayBuffer) {
    return { t: LdType.Bytes, v: data };
  } else if (Array.isArray(data)) {
    const out: (string | LdVal)[] = [];
    out.push('[');
    if (indent) {
      out.push('\n');
    }
    for (let idx = 0; idx < data.length; ++idx) {
      renderTreeDepth(out, depth + 1, indent);
      out.push(renderTreeVal(data[idx], depth + 1, indent));
      if (indent) {
        out.push('\n');
      } else if (idx < data.length - 1) {
        out.push(',');
      }
    }
    renderTreeDepth(out, depth, indent);
    out.push(']');
    return { t: LdType.Arr, v: out };
  } else if (data === null) {
    return { t: LdType.Null };
  } else {
    switch (typeof data) {
      case 'boolean':
        return { t: LdType.Bool, v: data };
      case 'number':
        return { t: LdType.F64, v: data };
      case 'bigint':
        return { t: LdType.BigInt, v: data };
      case 'string':
        return { t: LdType.Str, v: data };
      case 'object':
        const out: (string | LdVal)[] = [];
        out.push('{');
        if (indent) {
          out.push('\n');
        }
        renderTreeObjProps(out, data, depth + 1, indent);
        renderTreeDepth(out, depth, indent);
        out.push('}');
        return { t: LdType.Obj, v: out };
    }
  }
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
      const [t, bin] = renderBin(item.v);
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
  if (
    /^[a-zA-Z$_][a-zA-Z0-9$_-]*$/.test(str) &&
    str !== 'null' &&
    str !== 'true' &&
    str !== 'false'
  ) {
    out.push(str);
  } else {
    out.push(JSON.stringify(str));
  }
}

function renderBinB64(b: ArrayBuffer): string {
  const bytes = new Uint8Array(b);
  const binary = [];

  for (let i = 0; i < bytes.byteLength; i++) {
    binary.push(String.fromCharCode(bytes[i]));
  }

  return btoa(binary.join(''));
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

function renderBin(b: ArrayBuffer): ['pct' | 'b64', string] {
  const pct = renderBinPct(b);
  const b64 = renderBinB64(b);

  if (b64.length < pct.length) {
    return ['b64', b64];
  }

  return ['pct', pct];
}
