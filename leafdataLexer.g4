lexer grammar leafdataLexer;

// vim: set syntax=javascript :

// Typed CDATA-style marker e.g. bigint@"0" b64@"AA==" pct@"%00",
// The only requirement is no literal double quotes.
TYPED_MARK: [a-zA-Z]+ [a-zA-Z0-9]* '@' -> pushMode(TYPED_MODE);

// Object bounding markers.
OBJ_OPEN : '{' ;
OBJ_CLOSE : '}' ;

// Array bounding markers.
ARR_OPEN : '[' ;
ARR_CLOSE : ']' ;

// Literal null
NULL : 'null' ;

// Literal true
TRUE : 'true' ;

// Literal false
FALSE : 'false' ;

// JSON-style number
F64 : '-'? ( '0' | [1-9] [0-9]* ) ( '.' [0-9]+ )? ( [eE] [+-]? [0-9]+ )? ;

// Javascript style identifier, but '-' allowed except at the front.
IDENT : [a-zA-Z$_] [a-zA-Z0-9$_-]* ;

// Comments and value separators. Allows TOML or JSON assignments.
NOTES : ( [:=, \t\r\n]+ | '#' ~[\r\n]* )+ ;

// JSON-style string
STR : '"' ( ~["\\\u0000-\u001F] | [\r\n] | STR_ESC )* '"' ;
fragment STR_ESC : '\\' ( ["\\/bfnrt] | 'u' HEX HEX HEX HEX ) ;
fragment HEX : [0-9a-fA-F] ;

// See TYPED_MARK above.
mode TYPED_MODE ;
TYPED : '"' ~'"'* '"' -> popMode ;
