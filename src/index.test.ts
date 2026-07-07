import { Render, Parse } from './index.js';

describe('leaf-data', async () => {
  it('render sanity', async () => {
    const r = new Render();
    r.prop('foo');
    r.objBeg();
    r.prop('hello');
    r.str('world');
    r.prop('bool');
    r.bool(true);
    r.objEnd();
    expect(r.render()).to.equal('foo={\nhello="world"\nbool=true\n}\n');
  });

  it('tokenize sanity', async () => {
    const p = new Parse();
    p.writeChunk(`
foo = {
  hello="world"
  bool=true
  "neddo"=false
}
`);
    for (const leaf of p) {
      console.log(JSON.stringify(leaf));
    }
    /*
    const pos = { line: 1, col: 1 };

    for (const chunk of [
      '{',
      '  // what up?\n',
      '  t:@t, // thing\n',
      '  f:@f,\n  n:@n,\n',
      '  num:3.141,\n',
      '}',
    ]) {
      const res = tokenize(chunk, pos);
      console.error(JSON.stringify(res));
    }
    */
  });
});
