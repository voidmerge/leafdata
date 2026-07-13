[**@leaf/leafdata**](README.md)

---

[@leaf/leafdata](README.md) / render

# render

Low-level rendering functions.

## Functions

### renderJsToTree()

> **renderJsToTree**(`data`: [`JsObj`](Namespace.types.md#jsobj), `indent?`: `string`): [`LeafData`](Namespace.types.md#leafdata-1)

Given a Javascript object, render a leafdata symbol tree.

#### Parameters

##### data

[`JsObj`](Namespace.types.md#jsobj)

the js object to render

##### indent?

`string`

if omitted, the tree will be generated without pretty
printing to conserve space. If specified, the content
will be pretty printed for humans.

#### Returns

[`LeafData`](Namespace.types.md#leafdata-1)

---

### renderTreeToStr()

> **renderTreeToStr**(`data`: [`LeafData`](Namespace.types.md#leafdata-1)): `string`

Given a leafdata symbol tree, render a leafdata document string.

#### Parameters

##### data

[`LeafData`](Namespace.types.md#leafdata-1)

#### Returns

`string`
