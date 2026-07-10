parser grammar leafdataParser;

// vim: set syntax=javascript :

options {
  tokenVocab = leafdataLexer;
}

leafdata :
  NOTES?
  (
    ( v_ident | v_str )
    NOTES?
    (
      v_null | v_bool | v_f64 | v_bigint | v_binpct | v_binb64 |
      v_ident | v_str | v_obj | v_arr
    )
    NOTES?
  )*
  EOF
  ;

v_null : NULL ;

v_bool : TRUE | FALSE ;

v_f64 : F64 ;

v_bigint : BIGINT_MARK v_bigint_val ;
v_bigint_val : BIGINT ;

v_binpct : BINPCT_MARK v_binpct_val ;
v_binpct_val : BINPCT ;

v_binb64 : BINB64_MARK v_binb64_val ;
v_binb64_val : BINB64 ;

v_ident : IDENT ;

v_str : STR ;

v_obj :
  OBJ_OPEN
  NOTES?
  (
    ( v_ident | v_str )
    NOTES?
    (
      v_null | v_bool | v_f64 | v_bigint | v_binpct | v_binb64 |
      v_ident | v_str | v_obj | v_arr
    )
    NOTES?
  )*
  OBJ_CLOSE
  ;

v_arr :
  ARR_OPEN
  NOTES?
  (
    (
      v_null | v_bool | v_f64 | v_bigint | v_binpct | v_binb64 |
      v_ident | v_str | v_obj | v_arr
    )
    NOTES?
  )*
  ARR_CLOSE
  ;
