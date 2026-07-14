parser grammar leafdataParser;

// vim: set syntax=javascript :

options {
  tokenVocab = leafdataLexer;
}

// The leafdata document root is basically an object where the bounding
// markers are optional.
leafdata :
  NOTES?
  OBJ_OPEN?
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
  OBJ_CLOSE?
  NOTES?
  EOF
  ;

// Null value.
null : NULL ;

// Booolean value.
bool : TRUE | FALSE ;

// Floating-point (64-bit) number value.
f64 : F64 ;

// Typed CDATA-style value.
typed: TYPED_MARK typed_val ;
typed_val : TYPED ;

// Javascript-style identifier value.
ident : IDENT ;

// JSON-style string value.
str : STR ;

// Objects below the document root must be marked with braces.
// The contents must always be pairs of keys (ident | str) and values.
// The keys, values, and subsequent keys must be separated by NOTES,
// or whitespace, commas, colons, equal signs or optional comments.
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

// Arrays must be marked with brackets. Array items must be separated
// by NOTES (see comment above for objects).
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
