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

export type LdVal =
  LdNull | LdBool | LdF64 | LdBigInt | LdBytes | LdStr | LdObj | LdArr;

export interface LdNode {
  t: LdType;
  l?: string;
}

export interface LeafData extends LdNode {
  t: LdType.LeafData;
  v: (string | LdVal)[];
}

export interface LdNull extends LdNode {
  t: LdType.Null;
}

export interface LdBool extends LdNode {
  t: LdType.Bool;
  v: boolean;
}

export interface LdF64 extends LdNode {
  t: LdType.F64;
  v: number;
}

export interface LdBigInt extends LdNode {
  t: LdType.BigInt;
  v: bigint;
}

export interface LdBytes extends LdNode {
  t: LdType.Bytes;
  v: ArrayBuffer;
}

export interface LdStr extends LdNode {
  t: LdType.Str;
  v: string;
}

export interface LdObj extends LdNode {
  t: LdType.Obj;
  v: (string | LdVal)[];
}

export interface LdArr extends LdNode {
  t: LdType.Arr;
  v: (string | LdVal)[];
}

export type LdJsVal =
  null | boolean | number | bigint | ArrayBuffer | string | LdJsObj | LdJsArr;

export type LdJsObj = { [key: string]: LdJsVal };

export type LdJsArr = LdJsVal[];
