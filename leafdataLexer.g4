lexer grammar leafdataLexer;

// vim: set syntax=javascript :

OBJ_OPEN : '{' ;
OBJ_CLOSE : '}' ;
ARR_OPEN : '[' ;
ARR_CLOSE : ']' ;
EQ : '=' ;
NULL : 'null' ;
TRUE : 'true' ;
FALSE : 'false' ;

IDENT : [a-zA-Z$_] [a-zA-Z0-9$_-]* ;

NOTES : ( [, \t\n\r]+ | '#' (~'\n')* '\n' )+ ;

STR_OPEN : '"' -> pushMode(STR_MODE) ;

mode STR_MODE;
STR_CLOSE : '"' -> popMode ;
STR : ( ~["\\] | STR_ESC )+ ;

fragment STR_ESC : '\\' ( ["\\/bfnrt] | 'u' STR_HEX STR_HEX STR_HEX STR_HEX ) ;
fragment STR_HEX : [0-9a-fA-F] ;
