grammar leafdata;

// vim: set syntax=javascript :

// -- parser -- //

leafdata : prop* NOTES? EOF ;

v_null : NULL ;
v_bool : TRUE | FALSE ;
v_ident : IDENT ;
v_str : STR ;
v_obj : OBJ_OPEN prop* NOTES? OBJ_CLOSE ;
v_arr : ARR_OPEN item* NOTES? ARR_CLOSE ;

prop :
  NOTES?
  ( v_ident | v_str )
  EQ
  ( v_null | v_bool | v_ident | v_str | v_obj | v_arr )
  ;

item :
  NOTES?
  ( v_null | v_bool | v_ident | v_str | v_obj | v_arr )
  ;

// -- lexer -- //

OBJ_OPEN : '{' ;
OBJ_CLOSE : '}' ;
ARR_OPEN : '[' ;
ARR_CLOSE : ']' ;
NULL : 'null' ;
TRUE : 'true' ;
FALSE : 'false' ;

IDENT : [a-zA-Z$_] [a-zA-Z0-9$_-]* ;

STR : '"' ( STR_ESC | ~["\\] )* '"' ;
fragment STR_ESC : '\\' ( ["\\/bfnrt] | 'u' STR_HEX STR_HEX STR_HEX STR_HEX ) ;
fragment STR_HEX : [0-9a-fA-F] ;

EQ : WS* '=' WS* ;

NOTES : ( WS+ | '#' (~'\n')* '\n' )+ ;

fragment WS : [, \t\n\r] ;
