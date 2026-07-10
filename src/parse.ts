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

class StrictErrorListener extends BaseErrorListener {
    syntaxError(
        recognizer: Recognizer<any>,
        offendingSymbol: Token | null,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | null
    ): void {
        throw new Error(`Parse error at line ${line}:${charPositionInLine} - ${msg}`);
    }
}

export interface CSTNode {
  t: string;
  l: string;
  v: (string | CSTNode)[];
}

export function treeToCST(
  node: ParseTree,
  tokenStream: CommonTokenStream,
): string | CSTNode {
  if (node instanceof TerminalNode) {
    const token = node.symbol;
    const tokenIndex = token.tokenIndex;

    if (token.type === Token.EOF) {
      return '';
    }

    return token.text ?? '';
  }

  const ctx = node as ParserRuleContext;
  const ruleName = ctx.constructor.name.replace(/Context$/, '');

  const childrenNodes: (string | CSTNode)[] = [];
  if (ctx.children) {
    for (const child of ctx.children) {
      const n = treeToCST(child, tokenStream);
      if (n !== '') {
        childrenNodes.push(n);
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

  return {
    t: ruleName.toLowerCase(),
    l: `${line}:${column}:${start}:${stop}`,
    v: childrenNodes,
  };
}

const input = `
bigint = bigint@"9876543210000000000000"
pct = pct@"hello%22"
b64 = b64@"bgBsbA=="
a=[ null, true
  false
  -3.141e0
]
o = { a = null, b = true
  c = false
}
# hey
"a\\u0000$8
\\t76_ao
  " = abz
# yowza
`;

const inputStream = CharStream.fromString(input);
const lexer = new leafdataLexer(inputStream);
lexer.removeErrorListeners();
lexer.addErrorListener(new StrictErrorListener());

const tokenStream = new CommonTokenStream(lexer);
const parser = new leafdataParser(tokenStream);
parser.removeErrorListeners();
parser.addErrorListener(new StrictErrorListener());

const parseTree = parser.leafdata();

const completeJSONTree = treeToCST(parseTree, tokenStream);

console.log(JSON.stringify(completeJSONTree, null, 2));
