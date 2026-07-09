import {
  Token,
  CharStream,
  ParseTree,
  TerminalNode,
  ParserRuleContext,
  CommonTokenStream,
} from 'antlr4ng';
import { leafdataLexer } from './gen/leafdataLexer.js';
import { leafdataParser } from './gen/leafdataParser.js';

export interface CSTNode {
  t: string;
  l: string;
  v: string | CSTNode[];
}

export function treeToCST(
  node: ParseTree,
  tokenStream: CommonTokenStream,
): CSTNode {
  if (node instanceof TerminalNode) {
    const token = node.symbol;
    const tokenIndex = token.tokenIndex;

    if (token.type === Token.EOF) {
      return {
        t: 'eof',
        l: `${token.line}:${token.column}:${token.start}:${token.stop}`,
        v: '',
      };
    }

    return {
      t: 'lit',
      l: `${token.line}:${token.column}:${token.start}:${token.stop}`,
      v: token.text ?? '',
    };
  }

  const ctx = node as ParserRuleContext;
  const ruleName = ctx.constructor.name.replace(/Context$/, '');

  const childrenNodes: CSTNode[] = [];
  if (ctx.children) {
    for (const child of ctx.children) {
      childrenNodes.push(treeToCST(child, tokenStream));
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
a = [ null, true
  false
]
o = { a = null, b = true
  c = false
}
# hey
"a$876_ao" = abz
# yowza
`;

const inputStream = CharStream.fromString(input);
const lexer = new leafdataLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new leafdataParser(tokenStream);

const parseTree = parser.leafdata();

const completeJSONTree = treeToCST(parseTree, tokenStream);

console.log(JSON.stringify(completeJSONTree, null, 2));
