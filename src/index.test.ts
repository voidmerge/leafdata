//import { Render, Parse } from './index.js';
import { LeafObj, LeafArr } from './index.js';

describe('leaf-data', async () => {
  it('stringify sanity', async () => {
    const obj = new LeafObj()
      .withBool('test', true, ['note test'])
      .withObj('obj', new LeafObj()
        .withBool('test', true, ['second note'])
        .withArr('arr', new LeafArr()
          .pushBool(true)
        )
      );

    //console.log(JSON.stringify(obj));

    expect(obj.stringify()).to.equal(`# note test
test = true
obj = {
  # second note
  test = true
  arr = [
    true
  ]
}
`);
  });

  it('parse sanity', async () => {
    /*
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
    */

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
