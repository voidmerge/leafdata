import {
  parse,
  render,
  types,
  leafdataRender,
  leafdataParse,
} from './index.js';

const FIX_P_AND_R = [
  ['a = ""', 'a = ""'],
  ['"" = a', '"" = a'],
  ['a = b', 'a = b'],
  ['a = "hello world"', 'a = "hello world"'],
  ['a = "x,y", z:"1"', 'a = "x,y", z:"1"'],
  ['a = "123abc"', 'a = "123abc"'],
  ['a = "null"', 'a = "null"'],
  ['a = "true"', 'a = "true"'],
  ['a = "false"', 'a = "false"'],
  ['a = "b"', 'a = b'],
  ['"a" = b', 'a = b'],
  ['a = null', 'a = null'],
  ['a = true', 'a = true'],
  ['a = false', 'a = false'],
  ['a = -3.141e0', 'a = -3.141'],
  ['a = bigint@"123"', 'a = bigint@"123"'],
  ['a = b64@"AAECAw=="', 'a = b64@"AAECAw=="'],
  ['a = pct@"hello%22"', 'a = pct@"hello%22"'],
  ['a = {}', 'a = {}'],
  ['a = { a = a }', 'a = { a = a }'],
  ['a = []', 'a = []'],
  ['a = [ a ]', 'a = [ a ]'],
  ['# note', '# note'],
  ['# note\n', '# note\n'],
  [
    `# note
a = a
# note
`,
    `# note
a = a
# note
`,
  ],
];

const FIX_TO_JS: [string, any][] = [
  ['a = ""', { a: '' }],
  ['"" = a', { '': 'a' }],
  ['a = b', { a: 'b' }],
  ['a = null', { a: null }],
  ['a = true', { a: true }],
  ['a = false', { a: false }],
  ['a = -3.141', { a: -3.141 }],
  ['a = bigint@"123"', { a: 123n }],
  ['a = pct@"a"', { a: new Uint8Array([97]).buffer }],
  ['a = b64@"AQ=="', { a: new Uint8Array([1]).buffer }],
  ['a = { a = a }', { a: { a: 'a' } }],
  ['a = [ a ]', { a: ['a'] }],
];

const FIX_RENDER: [any, string, string][] = [
  [{ a: '' }, 'a=""', 'a = ""\n'],
  [{ '': 'a' }, '""=a', '"" = a\n'],
  [{ a: 'b', c: 'd' }, 'a=b,c=d', 'a = b\nc = d\n'],
  [{ a: ['a', 'b'] }, 'a=[a,b]', 'a = [\n  a\n  b\n]\n'],
  [{ a: { b: 'c', d: 'e' } }, 'a={b=c,d=e}', 'a = {\n  b = c\n  d = e\n}\n'],
  [{ a: [['a']] }, 'a=[[a]]', 'a = [\n  [\n    a\n  ]\n]\n'],
  [
    { a: { b: { c: 'd' } } },
    'a={b={c=d}}',
    'a = {\n  b = {\n    c = d\n  }\n}\n',
  ],
];

const FIX_JS_LEAF_JS: any[] = [
  { a: '' },
  { '': 'a' },
  { a: 'b' },
  { a: null },
  { a: true },
  { a: false },
  { a: -3.141 },
  { a: 123n },
  { a: new Uint8Array([97]).buffer },
  { a: new Uint8Array([1]).buffer },
  { a: { a: 'a' } },
  { a: { a: { a: 'a' } } },
  { a: ['a'] },
  { a: [['a']] },
];

describe('leafdata', async () => {
  it('parse and render fixtures', () => {
    for (const [fix, exp] of FIX_P_AND_R) {
      const tree = parse.parseStrToTree(fix);
      const leaf = render.renderTreeToStr(tree);
      expect(leaf).to.equal(exp);
    }
  });

  it('toJs fixtures', () => {
    for (const [fix, exp] of FIX_TO_JS) {
      const tree = parse.parseStrToTree(fix);
      const js = parse.parseTreeToJs(tree);
      expect(js).to.deep.equal(exp);
    }
  });

  it('render fixtures', () => {
    for (const [fix, expCompress, expPretty] of FIX_RENDER) {
      const comp = leafdataRender(fix);
      expect(comp).to.equal(expCompress);
      const pretty = leafdataRender(fix, '  ');
      expect(pretty).to.equal(expPretty);
    }
  });

  it('js->leaf->js fixtures', () => {
    for (const fix of FIX_JS_LEAF_JS) {
      const comp = leafdataParse(leafdataRender(fix));
      expect(comp).to.deep.equal(fix);
      const pretty = leafdataParse(leafdataRender(fix, '  '));
      expect(pretty).to.deep.equal(fix);
    }
  });
});
