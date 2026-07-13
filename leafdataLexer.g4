lexer grammar leafdataLexer;

// vim: set syntax=javascript :

TYPED_MARK: [a-zA-Z]+ [a-zA-Z0-9]* '@' -> pushMode(TYPED_MODE);

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

mode TYPED_MODE ;
TYPED : '"' ~'"'* '"' -> popMode ;
