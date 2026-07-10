parser grammar leafdataParser;

// vim: set syntax=javascript :

options {
  tokenVocab = leafdataLexer;
}

leafdata :
  NOTES?
  (
    ( ident | str )
    NOTES?
    (
      null | bool | f64 | bigint | pct | b64 | ident | str | obj | arr
    )
    NOTES?
  )*
  EOF
  ;

null : NULL ;

bool : TRUE | FALSE ;

f64 : F64 ;

bigint : BIGINT_MARK bigint_val ;
bigint_val : BIGINT ;

pct : PCT_MARK pct_val ;
pct_val : PCT ;

b64 : B64_MARK b64_val ;
b64_val : B64 ;

ident : IDENT ;

str : STR ;

obj :
  OBJ_OPEN
  NOTES?
  (
    ( ident | str )
    NOTES?
    (
      null | bool | f64 | bigint | pct | b64 | ident | str | obj | arr
    )
    NOTES?
  )*
  OBJ_CLOSE
  ;

arr :
  ARR_OPEN
  NOTES?
  (
    (
      null | bool | f64 | bigint | pct | b64 | ident | str | obj | arr
    )
    NOTES?
  )*
  ARR_CLOSE
  ;
