parser grammar leafdataParser;

// vim: set syntax=javascript :

options {
  tokenVocab = leafdataLexer;
}

leafdata :
  (
    NOTES?
    ( v_ident | v_str )
    NOTES?
    EQ
    NOTES?
    ( v_null | v_bool | v_ident | v_str | v_obj | v_arr )
  )*
  NOTES?
  EOF
  ;

v_null : NULL ;

v_bool : TRUE | FALSE ;

v_ident : IDENT ;

v_str : STR_OPEN STR? STR_CLOSE ;

v_obj :
  OBJ_OPEN
  (
    NOTES?
    ( v_ident | v_str )
    NOTES?
    EQ
    NOTES?
    ( v_null | v_bool | v_ident | v_str | v_obj | v_arr )
  )*
  NOTES?
  OBJ_CLOSE
  ;

v_arr :
  ARR_OPEN
  ( NOTES? ( v_null | v_bool | v_ident | v_str | v_obj | v_arr ) )*
  NOTES?
  ARR_CLOSE
  ;
