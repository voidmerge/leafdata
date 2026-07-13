parser grammar leafdataParser;

// vim: set syntax=javascript :

options {
  tokenVocab = leafdataLexer;
}

leafdata :
  NOTES?
  (
    ( ident | str )
    NOTES
    ( null | bool | f64 | typed | ident | str | obj | arr )
    (
      NOTES
      ( ident | str )
      NOTES
      ( null | bool | f64 | typed | ident | str | obj | arr )
    )*
    NOTES?
  )?
  EOF
  ;

null : NULL ;

bool : TRUE | FALSE ;

f64 : F64 ;

typed: TYPED_MARK typed_val ;
typed_val : TYPED ;

ident : IDENT ;

str : STR ;

obj :
  OBJ_OPEN
  NOTES?
  (
    ( ident | str )
    NOTES
    ( null | bool | f64 | typed | ident | str | obj | arr )
    (
      NOTES
      ( ident | str )
      NOTES
      ( null | bool | f64 | typed | ident | str | obj | arr )
    )*
    NOTES?
  )?
  OBJ_CLOSE
  ;

arr :
  ARR_OPEN
  NOTES?
  (
    ( null | bool | f64 | typed | ident | str | obj | arr )
    (
      NOTES
      ( null | bool | f64 | typed | ident | str | obj | arr )
    )*
    NOTES?
  )?
  ARR_CLOSE
  ;
