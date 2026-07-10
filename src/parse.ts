import {
  Token,
  CharStream,
  ParseTree,
  TerminalNode,
  ParserRuleContext,
  CommonTokenStream,
  BaseErrorListener,
  RecognitionException,
  Recognizer,
} from 'antlr4ng';
import { leafdataLexer } from './gen/leafdataLexer.js';
import { leafdataParser } from './gen/leafdataParser.js';
import {
  LeafData,
  LdNode,
  LdType,
  LdObj,
  LdStr,
  LdVal,
  LdBigInt,
  LdBytes,
  LdJsObj,
  LdJsVal,
  LdJsArr,
} from './types.js';

class StrictErrorListener extends BaseErrorListener {
  syntaxError(
    recognizer: Recognizer<any>,
    offendingSymbol: Token | null,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | null,
  ): void {
    throw new Error(
      `Parse error at line ${line}:${charPositionInLine} - ${msg}`,
    );
  }
}

function parsePct(pct: string): ArrayBuffer {
  const tokenMatcher = /%[0-9a-fA-F]{2}|[^"]/g;
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
  const binaryString = atob(b64.replaceAll(/[" \t\r\n]/g, ''));
  const len = binaryString.length;

  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

function treeToCST(node: ParseTree): string | LdVal | LeafData {
  if (node instanceof TerminalNode) {
    const token = node.symbol;

    if (token.type === Token.EOF) {
      return '';
    }

    return token.text ?? '';
  }

  const ctx = node as ParserRuleContext;
  const ruleName = ctx.constructor.name.replace(/Context$/, '');

  const childNodes: (string | LdVal)[] = [];
  if (ctx.children) {
    for (const child of ctx.children) {
      let n = treeToCST(child);
      if (n !== '' && !(typeof n === 'object' && n.t === LdType.LeafData)) {
        childNodes.push(n);
      }
    }
  }

  let line = 0;
  let column = 0;
  let start = -1;
  let stop = -1;

  if (ctx.start) {
    line = ctx.start.line;
    column = ctx.start.column;
    start = ctx.start.start;
  }
  if (ctx.stop) {
    stop = ctx.stop.stop;
  }

  const t = ruleName.toLowerCase();
  const l = `${line}:${column}:${start}:${stop}`;

  switch (t) {
    case LdType.LeafData:
      return { t: LdType.LeafData, l, v: childNodes };
    case LdType.Null:
      return { t: LdType.Null, l };
    case LdType.Bool:
      return { t: LdType.Bool, l, v: childNodes[0] === 'true' };
    case LdType.F64:
      return { t: LdType.F64, l, v: parseFloat(childNodes[0] as string) };
    case 'bigint_val':
      const bigint = BigInt(JSON.parse(childNodes[0] as string));
      return { t: LdType.BigInt, l, v: bigint };
    case LdType.BigInt:
      return childNodes[1] as LdBigInt;
    case 'pct_val':
      const pct = parsePct(childNodes[0] as string);
      return { t: LdType.Bytes, l, v: pct };
    case 'b64_val':
      const b64 = parseB64(childNodes[0] as string);
      return { t: LdType.Bytes, l, v: b64 };
    case 'pct':
    case 'b64':
      return childNodes[1] as LdBytes;
    case 'ident':
      return { t: LdType.Str, l, v: childNodes[0] as string };
    case LdType.Str:
      const str = (childNodes[0] as string)
        .replaceAll(/\r/g, '\\r')
        .replaceAll(/\n/g, '\\n');
      return { t: LdType.Str, l, v: JSON.parse(str) };
    case LdType.Obj:
      return { t: LdType.Obj, l, v: childNodes };
    case LdType.Arr:
      return { t: LdType.Arr, l, v: childNodes };
    default:
      throw new Error(`unexpected node type: ${t}`);
  }
}

export function leafdataParse(input: string): LeafData {
  const inputStream = CharStream.fromString(input);
  const lexer = new leafdataLexer(inputStream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new StrictErrorListener());

  const tokenStream = new CommonTokenStream(lexer);
  const parser = new leafdataParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(new StrictErrorListener());

  const parseTree = parser.leafdata();

  const ld = treeToCST(parseTree);
  if (typeof ld === 'string' || ld.t !== LdType.LeafData) {
    throw new Error(`unexpected root type: ${JSON.stringify(ld)}`);
  }

  return ld as LeafData;
}

export function leafdataToJs(data: LeafData): LdJsObj {
  const out: LdJsObj = {};
  objToJs(out, data.v);
  return out;
}

function objToJs(out: LdJsObj, list: (string | LdVal)[]) {
  let key: null | string = null;
  for (const item of list) {
    if (typeof item === 'string') {
      continue;
    }
    if (!key && item.t === LdType.Str) {
      key = item.v;
    } else if (key) {
      out[key] = valToJs(item);
      key = null;
    }
  }
}

function valToJs(item: LdVal): LdJsVal {
  switch (item.t) {
    case LdType.Null:
      return null;
    case LdType.Bool:
    case LdType.F64:
    case LdType.BigInt:
    case LdType.Bytes:
    case LdType.Str:
      return item.v;
    case LdType.Obj:
      const obj: LdJsObj = {};
      objToJs(obj, item.v);
      return obj;
    case LdType.Arr:
      const arr: LdJsArr = [];
      for (const sub of item.v) {
        if (typeof sub === 'string') {
          continue;
        }
        arr.push(valToJs(sub));
      }
      return arr;
  }
}
