/**
 * Leafdata node type. The value of the "t" property on a leafdata node.
 */
export enum LdType {
  LeafData = 'leafdata',
  Null = 'null',
  Bool = 'bool',
  F64 = 'f64',
  BigInt = 'bigint',
  Bytes = 'bytes',
  Str = 'str',
  Obj = 'obj',
  Arr = 'arr',
}

/**
 * A leafdata "value" type. Can be found as the value of an object property,
 * or the content item of an array.
 */
export type LdVal =
  LdNull | LdBool | LdF64 | LdBigInt | LdBytes | LdStr | LdObj | LdArr;

/**
 * Leafdata node base-type definition.
 */
export interface LdNode {
  /**
   * The {@link LdType} of this leafdata node.
   */
  t: LdType;

  /**
   * The source location of this leafdata node.
   *
   * In the form `<linenumber>:<column>:<startindex>:<endindex>`.
   */
  l?: string;
}

/**
 * This is the root document type of a leafdata document.
 *
 * Akin to an {@link LdObj}, but without surrounding braces ('{}').
 */
export interface LeafData extends LdNode {
  t: LdType.LeafData;
  v: (string | LdVal)[];
}

/**
 * A null value (`null`).
 */
export interface LdNull extends LdNode {
  t: LdType.Null;
}

/**
 * A boolean value (`true` | `false`).
 */
export interface LdBool extends LdNode {
  t: LdType.Bool;
  v: boolean;
}

/**
 * A numeric (f64) value.
 */
export interface LdF64 extends LdNode {
  t: LdType.F64;
  v: number;
}

/**
 * An arbitrary precision big integer value.
 */
export interface LdBigInt extends LdNode {
  t: LdType.BigInt;
  v: bigint;
}

/**
 * A byte array (array of u8 integers) value.
 */
export interface LdBytes extends LdNode {
  t: LdType.Bytes;
  v: ArrayBuffer;
}

/**
 * A string value.
 */
export interface LdStr extends LdNode {
  t: LdType.Str;
  v: string;
}

/**
 * An "object" or map of strings to values.
 */
export interface LdObj extends LdNode {
  t: LdType.Obj;
  v: (string | LdVal)[];
}

/**
 * An "array" or list of values.
 */
export interface LdArr extends LdNode {
  t: LdType.Arr;
  v: (string | LdVal)[];
}

/**
 * A Javascript value.
 */
export type JsVal =
  null | boolean | number | bigint | ArrayBuffer | string | JsObj | JsArr;

/**
 * A Javascript "object" or map of strings to values.
 */
export type JsObj = { [key: string]: JsVal };

/**
 * A Javascript "array" or list of values.
 */
export type JsArr = JsVal[];
