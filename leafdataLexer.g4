lexer grammar leafdataLexer;

// vim: set syntax=javascript :

BIGINT_MARK : 'bigint@' -> pushMode(BIGINT_MODE) ;
PCT_MARK : 'pct@' -> pushMode(PCT_MODE) ;
B64_MARK : 'b64@' -> pushMode(B64_MODE) ;

OBJ_OPEN : '{' ;
OBJ_CLOSE : '}' ;
ARR_OPEN : '[' ;
ARR_CLOSE : ']' ;
NULL : 'null' ;
TRUE : 'true' ;
FALSE : 'false' ;

F64 : '-'? ( '0' | [1-9] [0-9]* ) ( '.' [0-9]+ )? ( [eE] [+-]? [0-9]+ )? ;

IDENT : [a-zA-Z$_] [a-zA-Z0-9$_-]* ;

NOTES : ( [:=, \t\r\n]+ | '#' ~[\r\n]* )+ ;

STR : '"' ( ~["\\\u0000-\u001F] | [\r\n] | STR_ESC )* '"' ;
fragment STR_ESC : '\\' ( ["\\/bfnrt] | 'u' HEX HEX HEX HEX ) ;

fragment HEX : [0-9a-fA-F] ;

mode BIGINT_MODE ;
BIGINT : '"' ( '0' | [1-9] [0-9]* ) '"' -> popMode ;

mode PCT_MODE ;
PCT :
  '"' (
    [ \u0021\u0023\u0024\u0026-\u005B\u005D-\u007E] | '%' HEX HEX
  )* '"' -> popMode ;

mode B64_MODE ;
B64 : '"' [ \t\r\na-zA-Z0-9+/=]* '"' -> popMode ;
