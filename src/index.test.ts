import { parse, render } from './index.js';

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
});
