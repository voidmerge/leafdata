**@leaf/leafdata**

***

# @leaf/leafdata

# leaf-data encoding

```sh
# This is Leaf Data!

# Wouldn't this be nice : )
bugCount = 0

# Big Integer? No Biggie.
huge = n@"9876543210000000000000000"

# What about those public key bytes?
pubKey = B@"68KJMg9WmuadUM3dUVdiaXW7898qanhIuvtftFxCPXw="

# We gotz tablez.
tab = {
  fruit1 = apple
  fruit2 = grape
}

# Wait a sec... that'd be better as an array:
fruit = [
  apple
  grape
]
```

```ts
import { LeafObj } from '@leaf/leafdata`;

const s = new LeafObj()
  .withBigInt('huge', 9876543210000000000000000n)
  .stringify();

// huge = n@"9876543210000000000000000"

const parsed = LeafObj.parse(s);
```

## Namespaces

- [types](Namespace.types.md)

## Functions

### leafdataParse()

> **leafdataParse**(`input`): [`LeafData`](Namespace.types.md#leafdata-1)

Defined in: [parse.ts:155](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/parse.ts#L155)

#### Parameters

##### input

`string`

#### Returns

[`LeafData`](Namespace.types.md#leafdata-1)

***

### leafdataRender()

> **leafdataRender**(`data`): `string`

Defined in: [render.ts:3](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/render.ts#L3)

#### Parameters

##### data

[`LeafData`](Namespace.types.md#leafdata-1)

#### Returns

`string`

***

### leafdataToJs()

> **leafdataToJs**(`data`): [`LdJsObj`](Namespace.types.md#ldjsobj)

Defined in: [parse.ts:176](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/parse.ts#L176)

#### Parameters

##### data

[`LeafData`](Namespace.types.md#leafdata-1)

#### Returns

[`LdJsObj`](Namespace.types.md#ldjsobj)
