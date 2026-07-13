Low-level parsing functions.

## Functions

### parseStrToTree()

> **parseStrToTree**(`doc`: `string`): [`LeafData`](Namespace.types.md#leafdata-1)

Takes a leafdata document string, and parses it into
a leafdata symbol tree ([LeafData](Namespace.types.md#leafdata-1)).

#### Parameters

| Parameter | Type     |
| --------- | -------- |
| `doc`     | `string` |

#### Returns

[`LeafData`](Namespace.types.md#leafdata-1)

---

### parseTreeToJs()

> **parseTreeToJs**(`data`: [`LeafData`](Namespace.types.md#leafdata-1)): [`JsObj`](Namespace.types.md#jsobj)

Takes a leafdata symbol tree ([LeafData](Namespace.types.md#leafdata-1)) and parses
it into a javascript object.

#### Parameters

| Parameter | Type                                        |
| --------- | ------------------------------------------- |
| `data`    | [`LeafData`](Namespace.types.md#leafdata-1) |

#### Returns

[`JsObj`](Namespace.types.md#jsobj)
