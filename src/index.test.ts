import { LeafObj, LeafArr } from './index.js';

describe('leaf-data', async () => {
  it('stringify sanity', async () => {
    const inner = new LeafObj()
      .withBool('test', true, [' second note'])
      .withProp('arr', new LeafArr().pushBool(true))
      .withBin('b1', new TextEncoder().encode('hello"').buffer)
      .withBin('b2', new Uint8Array([0, 1, 2, 3, 4, 5]).buffer)
      .withBin('b3', new Uint8Array(180).buffer)
      .withF64('num', 3.141)
      .withBigInt('big', 94878374687368437684n);
    inner.tailNotes = [' nother tail'];
    const obj = new LeafObj()
      .withBool('test', true, [' note test'])
      .withProp('obj', inner);
    obj.tailNotes = [' test tail note'];

    //console.log(JSON.stringify(obj));

    expect(obj.stringify()).to.equal(`# note test
test = true
obj = {
  # second note
  test = true
  arr = [
    true
  ]
  b1 = b@"hello%22"
  b2 = B@"AAECAwQF"
  b3 = B@"
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    AAAAAAAAAAAAAAAAAA"
  num = 3.141
  big = n@"94878374687368437684"
  # nother tail
}
# test tail note
`);
  });

  it('parse sanity', async () => {
    const obj = LeafObj.parse(`
# top
obj = {
  # inner
  test = bob
  ned = true
  "fred" = "bob
multi"
  zorb = null
  num = 3.141
  big = n@"94878374687368437684"
  b1 = b@"hell
o%22"
  b2 = B@"A
    AE
    CA
    wQF"
  # tail
}
`);
    console.log(JSON.stringify(obj, null, 2));
  });
});
