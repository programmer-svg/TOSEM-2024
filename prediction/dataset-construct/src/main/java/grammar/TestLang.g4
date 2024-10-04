grammar TestLang;

prog: (statement)* EOF;

statement:
    COMMENTS |
    COMMENT |
    NL |
    simpleClassDef |
    functionDef |
    constDef |
    fieldDef |
    assignment |
    ifStmt |
    forStmt |
    wihilStmt |
    returnStmt |
    evaluationStmt |
    LBRACE statement* RBRACE |
    CONTINUE |
    BREAK;

simpleClassDef: CLASS classType LBRACE fieldDef* RBRACE END_LINE;
functionDef: type ID LPAREN parametersDef? RPAREN LBRACE statement* RBRACE END_LINE;
parametersDef: fieldDef (COMMA fieldDef)*;
constDef: type ID ASSIGN LBRACE statement* RBRACE END_LINE;
fieldDef: type ID (ASSIGN evaluationStmt)?;
assignment: refStmt (indexer)? ASSIGN evaluationStmt;
ifStmt: IF condition block  (ELIF condition block)* (ELSE block)?;
forStmt: FOR ID IN evaluationStmt block;
wihilStmt: WHILE condition block;
returnStmt: RETURN evaluationStmt?;
evaluationStmt:
    LPAREN evaluationStmt RPAREN |
    OPERATOR2 evaluationStmt |
    evaluationStmt OPERATOR1 evaluationStmt |
    evaluationStmt OPERATOR2 evaluationStmt |
    evaluationStmt NOT IN evaluationStmt |
    evaluationStmt IN evaluationStmt |
    NOT evaluationStmt |
    evaluationStmt AND evaluationStmt |
    evaluationStmt OR evaluationStmt |
    evaluationStmt INC|
    evaluationStmt DEC|
    INC evaluationStmt |
    DEC evaluationStmt |
    evaluationStmt indexer |
    functionCall |
    ID |
    constCall |
    forValueStmt |
    newStmt |
    refStmt |
    literal;

refStmt: (AT|BITAND)? id1 = ID (DOT id2 = ID)?;
functionCall: (CALL)? (id1 = ID COLON_CALL)? id2 = ID LPAREN parameters? RPAREN;
constCall: (id1 = ID COLON_CALL)? id2 = ID;
forValueStmt: FOR ID IN evaluationStmt COLON evaluationStmt;
newStmt: NEW classType;
block: LBRACE statement* RBRACE | statement;

parameters: parameter (COMMA parameter)*;
parameter: evaluationStmt;
condition: evaluationStmt | LPAREN evaluationStmt RPAREN;
OPERATOR1: '*' | '/' | '%' | '<' | '>' | '==' | '>=' | '<=' | '!=';
OPERATOR2: '+' | '-';

type: PRIMITIVE_TYPE | arrayType | tupleType | classType | ELLIPSIS;
PRIMITIVE_TYPE : 'int' | 'float' | 'string' | 'bool' | 'void' ;
arrayType: LSQUARE type RSQUARE;
tupleType: LPAREN type COMMA type RPAREN;
indexer: (LSQUARE evaluationStmt RSQUARE)+;
classType: (id1 = ID COLON_CALL)? id2 = ID;

literal: STRING | FloatLiteral | integerLiteral | errorLiteral | array | tuple | BOOLEAN;
STRING: QUOTE CHAR_IN_DOUBLE_QUOTE* QUOTE| SINGLE_QUOTE CHAR_IN_QUOTE* SINGLE_QUOTE;
QUOTE: '"';
SINGLE_QUOTE: '\'';
fragment CHAR_IN_QUOTE: ~['\\] | ESCAPE_IN_QUOTE;
fragment ESCAPE_IN_QUOTE: '\\' ['\\];
fragment CHAR_IN_DOUBLE_QUOTE: ~["\\] | ESCAPE_IN_DOUBLE_QUOTE;
fragment ESCAPE_IN_DOUBLE_QUOTE: '\\' ["\\];
FloatLiteral
    : INT_NO_SIGN? DOT INT_NO_SIGN EXPONENT?
    | INT_NO_SIGN EXPONENT
    | INT_NO_SIGN DOT
    ;
fragment EXPONENT: FloatE OPERATOR2? INT_NO_SIGN;
fragment FloatE : [eE] ;
integerLiteral: OPERATOR2? INT_NO_SIGN;
INT_NO_SIGN: ((DIGIT_NO_ZERO DIGIT*) | DIGIT)+;
array: LSQUARE (element (COMMA element)*)? RSQUARE;
tuple: LPAREN element COMMA element RPAREN;
element: evaluationStmt;
BOOLEAN: 'true' | 'false';
errorLiteral: TILDE integerLiteral;

RETURN : 'return' ;
WHILE : 'while' ;
FOR : 'for' ;
IF : 'if' ;
ELIF : 'elif' ;
ELSE : 'else' ;
CLASS : 'class' ;
BREAK : 'break' ;
CONTINUE : 'continue' ;
CALL : 'call' ;
END_LINE : ';' ;

NEW : 'new';
NOT : 'not' ;
OR : 'or' ;
AND : 'and' ;
IN : 'in' ;

LBRACE: '{' ;
RBRACE: '}' ;
LPAREN: '(' ;
RPAREN: ')' ;
COMMA: ',' ;
ASSIGN: '=' ;
INC: '++' ;
DEC: '--' ;
AT: '@' ;
BITAND: '&' ;
DOT: '.' ;
COLON_CALL: '::' ;
COLON: ':' ;
ELLIPSIS: '...' ;
LSQUARE: '[' ;
RSQUARE: ']' ;
TILDE: '~' ;

ID: (LETTER|'_') (LETTER|DIGIT|'_')*;
fragment LETTER: [a-zA-Z];
fragment DIGIT_NO_ZERO:  [1-9];
fragment DIGIT:  [0-9];
fragment UPPERCASE_LETTER: [A-Z];
WS: [\u0020\u0009\u000C]+ -> channel(HIDDEN);
NL: ('\u000A' | '\u000D' '\u000A') (WS? ('\u000A' | '\u000D' '\u000A'))* -> channel(HIDDEN);
COMMENT: '#' ~[\u000A\u000D]* -> channel(HIDDEN);
COMMENTS: '/*' .*? '*/' -> channel(HIDDEN);

ErrorCharacter: . ;