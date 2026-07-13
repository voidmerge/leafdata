[**@leaf/leafdata**](README.md)

---

[@leaf/leafdata](README.md) / types

# types

Types used by this leafdata library.

## Enumerations

### LdType

Leafdata node type. The value of the "t" property on a leafdata node.

#### Enumeration Members

##### Arr

> **Arr**: `"arr"`

##### BigInt

> **BigInt**: `"bigint"`

##### Bool

> **Bool**: `"bool"`

##### Bytes

> **Bytes**: `"bytes"`

##### F64

> **F64**: `"f64"`

##### LeafData

> **LeafData**: `"leafdata"`

##### Null

> **Null**: `"null"`

##### Obj

> **Obj**: `"obj"`

##### Str

> **Str**: `"str"`

## Interfaces

### LdArr

An "array" or list of values.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Arr`](#arr)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

---

### LdBigInt

An arbitrary precision big integer value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`BigInt`](#bigint)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `bigint`

---

### LdBool

A boolean value (`true` | `false`).

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Bool`](#bool)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `boolean`

---

### LdBytes

A byte array (array of u8 integers) value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Bytes`](#bytes)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `ArrayBuffer`

---

### LdF64

A numeric (f64) value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`F64`](#f64)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `number`

---

### LdNode

Leafdata node base-type definition.

#### Extended by

- [`LeafData`](#leafdata-1)
- [`LdNull`](#ldnull)
- [`LdBool`](#ldbool)
- [`LdF64`](#ldf64)
- [`LdBigInt`](#ldbigint)
- [`LdBytes`](#ldbytes)
- [`LdStr`](#ldstr)
- [`LdObj`](#ldobj)
- [`LdArr`](#ldarr)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

##### t

> **t**: [`LdType`](#ldtype)

The [LdType](#ldtype) of this leafdata node.

---

### LdNull

A null value (`null`).

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Null`](#null)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

---

### LdObj

An "object" or map of strings to values.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Obj`](#obj)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

---

### LdStr

A string value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Str`](#str)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `string`

---

### LeafData

This is the root document type of a leafdata document.

Akin to an [LdObj](#ldobj), but without surrounding braces ('{}').

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

The source location of this leafdata node.

In the form `<linenumber>:<column>:<startindex>:<endindex>`.

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`LeafData`](#leafdata)

The [LdType](#ldtype) of this leafdata node.

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

## Type Aliases

### JsArr

> **JsArr** = [`JsVal`](#jsval)[]

A Javascript "array" or list of values.

---

### JsObj

> **JsObj** = `object`

A Javascript "object" or map of strings to values.

#### Index Signature

\[`key`: `string`\]: [`JsVal`](#jsval)

---

### JsVal

> **JsVal** = `null` \| `boolean` \| `number` \| `bigint` \| `ArrayBuffer` \| `string` \| [`JsObj`](#jsobj) \| [`JsArr`](#jsarr)

A Javascript value.

---

### LdVal

> **LdVal** = [`LdNull`](#ldnull) \| [`LdBool`](#ldbool) \| [`LdF64`](#ldf64) \| [`LdBigInt`](#ldbigint) \| [`LdBytes`](#ldbytes) \| [`LdStr`](#ldstr) \| [`LdObj`](#ldobj) \| [`LdArr`](#ldarr)

A leafdata "value" type. Can be found as the value of an object property,
or the content item of an array.
