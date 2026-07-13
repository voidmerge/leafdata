[**@leaf/leafdata**](README.md)

***

[@leaf/leafdata](README.md) / types

# types

## Enumerations

### LdType

Defined in: [types.ts:1](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L1)

#### Enumeration Members

##### Arr

> **Arr**: `"arr"`

Defined in: [types.ts:10](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L10)

##### BigInt

> **BigInt**: `"bigint"`

Defined in: [types.ts:6](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L6)

##### Bool

> **Bool**: `"bool"`

Defined in: [types.ts:4](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L4)

##### Bytes

> **Bytes**: `"bytes"`

Defined in: [types.ts:7](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L7)

##### F64

> **F64**: `"f64"`

Defined in: [types.ts:5](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L5)

##### LeafData

> **LeafData**: `"leafdata"`

Defined in: [types.ts:2](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L2)

##### Null

> **Null**: `"null"`

Defined in: [types.ts:3](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L3)

##### Obj

> **Obj**: `"obj"`

Defined in: [types.ts:9](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L9)

##### Str

> **Str**: `"str"`

Defined in: [types.ts:8](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L8)

## Interfaces

### LdArr

Defined in: [types.ts:60](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L60)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Arr`](#arr)

Defined in: [types.ts:61](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L61)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

Defined in: [types.ts:62](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L62)

***

### LdBigInt

Defined in: [types.ts:40](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L40)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`BigInt`](#bigint)

Defined in: [types.ts:41](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L41)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `bigint`

Defined in: [types.ts:42](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L42)

***

### LdBool

Defined in: [types.ts:30](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L30)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Bool`](#bool)

Defined in: [types.ts:31](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L31)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `boolean`

Defined in: [types.ts:32](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L32)

***

### LdBytes

Defined in: [types.ts:45](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L45)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Bytes`](#bytes)

Defined in: [types.ts:46](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L46)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `ArrayBuffer`

Defined in: [types.ts:47](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L47)

***

### LdF64

Defined in: [types.ts:35](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L35)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`F64`](#f64)

Defined in: [types.ts:36](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L36)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `number`

Defined in: [types.ts:37](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L37)

***

### LdNode

Defined in: [types.ts:16](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L16)

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

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

##### t

> **t**: [`LdType`](#ldtype)

Defined in: [types.ts:17](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L17)

***

### LdNull

Defined in: [types.ts:26](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L26)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Null`](#null)

Defined in: [types.ts:27](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L27)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

***

### LdObj

Defined in: [types.ts:55](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L55)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Obj`](#obj)

Defined in: [types.ts:56](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L56)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

Defined in: [types.ts:57](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L57)

***

### LdStr

Defined in: [types.ts:50](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L50)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`Str`](#str)

Defined in: [types.ts:51](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L51)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: `string`

Defined in: [types.ts:52](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L52)

***

### LeafData

Defined in: [types.ts:21](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L21)

#### Extends

- [`LdNode`](#ldnode)

#### Properties

##### l?

> `optional` **l?**: `string`

Defined in: [types.ts:18](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L18)

###### Inherited from

[`LdNode`](#ldnode).[`l`](#l-5)

##### t

> **t**: [`LeafData`](#leafdata)

Defined in: [types.ts:22](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L22)

###### Overrides

[`LdNode`](#ldnode).[`t`](#t-5)

##### v

> **v**: (`string` \| [`LdVal`](#ldval))[]

Defined in: [types.ts:23](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L23)

## Type Aliases

### LdJsArr

> **LdJsArr** = [`LdJsVal`](#ldjsval)[]

Defined in: [types.ts:70](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L70)

***

### LdJsObj

> **LdJsObj** = `object`

Defined in: [types.ts:68](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L68)

#### Index Signature

\[`key`: `string`\]: [`LdJsVal`](#ldjsval)

***

### LdJsVal

> **LdJsVal** = `null` \| `boolean` \| `number` \| `bigint` \| `ArrayBuffer` \| `string` \| [`LdJsObj`](#ldjsobj) \| [`LdJsArr`](#ldjsarr)

Defined in: [types.ts:65](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L65)

***

### LdVal

> **LdVal** = [`LdNull`](#ldnull) \| [`LdBool`](#ldbool) \| [`LdF64`](#ldf64) \| [`LdBigInt`](#ldbigint) \| [`LdBytes`](#ldbytes) \| [`LdStr`](#ldstr) \| [`LdObj`](#ldobj) \| [`LdArr`](#ldarr)

Defined in: [types.ts:13](https://github.com/neonphog/leaf-data/blob/d224cc4560c248a154c99e7ac47b7df86e343f51/src/types.ts#L13)
