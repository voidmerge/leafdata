**@leaf/leafdata**

---

# @leaf/leafdata

Leafdata is yet another human-readable data format similar to JSON or TOML.

I was tired of not being able to represent big integers and binary data.

Why would you want binary data in a human-readable text format, you ask?

It just comes up sometimes. Like wanting to store cryptographic public keys
along-side other configuration data. Or if you are wanting to debug a format
that can have binary data in it, such as MessagePack.

# Example

```sh
# This is Leaf Data!

# Wouldn't this be nice : )
bugCount = 0

# Big Integer? No Biggie.
huge = bigint@"9876543210000000000000000"

# What about those public key bytes?
pubKey = b64@"68KJMg9WmuadUM3dUVdiaXW7898qanhIuvtftFxCPXw="

# Or, for more human readable binary data...
# Leafdata will pick the smaller of b64@ or pct@ when encoding.
myNullSeparatedData = pct@"age%00color%0A42%00red";

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
import { leafdataParse, leafdataRender } from '@leaf/leafdata`;

const js = leafdataParse(exampleString);

// - the value of 'js':
//
// {
//   bugCount: 0,
//   huge: 9876543210000000000000000n,
//   pubKey: < ArrayBuffer >,
//   myNullSeparatedData: < ArrayBuffer >,
//   tab: { fruit1: "apple", fruit2: "grape" },
//   fruit: [ "apple", "grape" ],
// }

// Then, turn it back into a string:

const output = leafdataRender(js);
```

# Specification

The Antlr4 Lexer and Parser g4 files in this repo are the specification:

- [leafdataLexer.g4](leafdataLexer.g4)
- [leafdataParser.g4](leafdataParser.g4)

Why Antlr4 when there are faster parsers? It is a well recognized format
that compiles into many languages. Feel free to write a new, faster parser,
just make it compliant with this one.

# API Documentation

## Namespaces

- [parse](Namespace.parse.md)
- [render](Namespace.render.md)
- [types](Namespace.types.md)

## Functions

### leafdataParse()

> **leafdataParse**(`doc`): [`JsObj`](Namespace.types.md#jsobj)

Parse a leafdata document string into a Javascript object.

#### Parameters

##### doc

`string`

#### Returns

[`JsObj`](Namespace.types.md#jsobj)

---

### leafdataRender()

> **leafdataRender**(`obj`, `indent?`): `string`

Render a Javascript object into a leafdata document string.

#### Parameters

##### obj

[`JsObj`](Namespace.types.md#jsobj)

the js object to render

##### indent?

`string`

if omitted, the tree will be generated without pretty
printing to conserve space. If specified, the content
will be pretty printed for humans.

#### Returns

`string`
