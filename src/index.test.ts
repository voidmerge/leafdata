import { parse, render, leafdataRender } from './index.js';

const FIX_P_AND_R = [
  ['a = b', 'a = b'],
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
  [{ a: 'b', c: 'd' }, 'a=b,c=d', 'a = b\nc = d\n'],
  [{ a: ['a', 'b'] }, 'a=[a,b]', 'a = [\n  a\n  b\n]\n'],
  [{ a: { b: 'c', d: 'e' } }, 'a={b=c,d=e}', 'a = {\n  b = c\n  d = e\n}\n'],
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
});
