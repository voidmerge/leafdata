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

| Property                     | Type                              | Description                                                                                             | Overrides                                | Inherited from                           |
| ---------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l"></a> `l?` | `string`                          | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t"></a> `t`  | [`Arr`](#arr)                     | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v"></a> `v`  | (`string` \| [`LdVal`](#ldval))[] | -                                                                                                       | -                                        | -                                        |

---

### LdBigInt

An arbitrary precision big integer value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type                | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-1"></a> `l?` | `string`            | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-1"></a> `t`  | [`BigInt`](#bigint) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-1"></a> `v`  | `bigint`            | -                                                                                                       | -                                        | -                                        |

---

### LdBool

A boolean value (`true` | `false`).

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type            | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-2"></a> `l?` | `string`        | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-2"></a> `t`  | [`Bool`](#bool) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-2"></a> `v`  | `boolean`       | -                                                                                                       | -                                        | -                                        |

---

### LdBytes

A byte array (array of u8 integers) value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type              | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | ----------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-3"></a> `l?` | `string`          | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-3"></a> `t`  | [`Bytes`](#bytes) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-3"></a> `v`  | `ArrayBuffer`     | -                                                                                                       | -                                        | -                                        |

---

### LdF64

A numeric (f64) value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type          | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-4"></a> `l?` | `string`      | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-4"></a> `t`  | [`F64`](#f64) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-4"></a> `v`  | `number`      | -                                                                                                       | -                                        | -                                        |

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

| Property                       | Type                | Description                                                                                             |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------- |
| <a id="property-l-5"></a> `l?` | `string`            | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. |
| <a id="property-t-5"></a> `t`  | [`LdType`](#ldtype) | The [LdType](#ldtype) of this leafdata node.                                                            |

---

### LdNull

A null value (`null`).

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type            | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-6"></a> `l?` | `string`        | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-6"></a> `t`  | [`Null`](#null) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |

---

### LdObj

An "object" or map of strings to values.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type                              | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-7"></a> `l?` | `string`                          | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-7"></a> `t`  | [`Obj`](#obj)                     | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-5"></a> `v`  | (`string` \| [`LdVal`](#ldval))[] | -                                                                                                       | -                                        | -                                        |

---

### LdStr

A string value.

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type          | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-8"></a> `l?` | `string`      | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-8"></a> `t`  | [`Str`](#str) | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-6"></a> `v`  | `string`      | -                                                                                                       | -                                        | -                                        |

---

### LeafData

This is the root document type of a leafdata document.

Akin to an [LdObj](#ldobj), but without surrounding braces ('{}').

#### Extends

- [`LdNode`](#ldnode)

#### Properties

| Property                       | Type                              | Description                                                                                             | Overrides                                | Inherited from                           |
| ------------------------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| <a id="property-l-9"></a> `l?` | `string`                          | The source location of this leafdata node. In the form `<linenumber>:<column>:<startindex>:<endindex>`. | -                                        | [`LdNode`](#ldnode).[`l`](#property-l-5) |
| <a id="property-t-9"></a> `t`  | [`LeafData`](#leafdata)           | The [LdType](#ldtype) of this leafdata node.                                                            | [`LdNode`](#ldnode).[`t`](#property-t-5) | -                                        |
| <a id="property-v-7"></a> `v`  | (`string` \| [`LdVal`](#ldval))[] | -                                                                                                       | -                                        | -                                        |

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
