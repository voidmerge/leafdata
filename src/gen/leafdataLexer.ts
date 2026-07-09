
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class leafdataLexer extends antlr.Lexer {
    public static readonly OBJ_OPEN = 1;
    public static readonly OBJ_CLOSE = 2;
    public static readonly ARR_OPEN = 3;
    public static readonly ARR_CLOSE = 4;
    public static readonly NULL = 5;
    public static readonly TRUE = 6;
    public static readonly FALSE = 7;
    public static readonly IDENT = 8;
    public static readonly STR = 9;
    public static readonly EQ = 10;
    public static readonly NOTES = 11;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'{'", "'}'", "'['", "']'", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "NULL", 
        "TRUE", "FALSE", "IDENT", "STR", "EQ", "NOTES"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "NULL", "TRUE", 
        "FALSE", "IDENT", "STR", "STR_ESC", "STR_HEX", "EQ", "NOTES", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, leafdataLexer._ATN, leafdataLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "leafdata.g4"; }

    public get literalNames(): (string | null)[] { return leafdataLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return leafdataLexer.symbolicNames; }
    public get ruleNames(): string[] { return leafdataLexer.ruleNames; }

    public get serializedATN(): number[] { return leafdataLexer._serializedATN; }

    public get channelNames(): string[] { return leafdataLexer.channelNames; }

    public get modeNames(): string[] { return leafdataLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,11,114,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,
        1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,56,8,7,10,7,
        12,7,59,9,7,1,8,1,8,1,8,5,8,64,8,8,10,8,12,8,67,9,8,1,8,1,8,1,9,
        1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,79,8,9,1,10,1,10,1,11,5,11,84,8,
        11,10,11,12,11,87,9,11,1,11,1,11,5,11,91,8,11,10,11,12,11,94,9,11,
        1,12,4,12,97,8,12,11,12,12,12,98,1,12,1,12,5,12,103,8,12,10,12,12,
        12,106,9,12,1,12,4,12,109,8,12,11,12,12,12,110,1,13,1,13,0,0,14,
        1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,0,21,0,23,10,25,11,27,
        0,1,0,7,4,0,36,36,65,90,95,95,97,122,6,0,36,36,45,45,48,57,65,90,
        95,95,97,122,2,0,34,34,92,92,8,0,34,34,47,47,92,92,98,98,102,102,
        110,110,114,114,116,116,3,0,48,57,65,70,97,102,1,0,10,10,4,0,9,10,
        13,13,32,32,44,44,120,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,
        0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
        0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,29,1,0,0,0,3,31,1,0,0,0,5,33,1,
        0,0,0,7,35,1,0,0,0,9,37,1,0,0,0,11,42,1,0,0,0,13,47,1,0,0,0,15,53,
        1,0,0,0,17,60,1,0,0,0,19,70,1,0,0,0,21,80,1,0,0,0,23,85,1,0,0,0,
        25,108,1,0,0,0,27,112,1,0,0,0,29,30,5,123,0,0,30,2,1,0,0,0,31,32,
        5,125,0,0,32,4,1,0,0,0,33,34,5,91,0,0,34,6,1,0,0,0,35,36,5,93,0,
        0,36,8,1,0,0,0,37,38,5,110,0,0,38,39,5,117,0,0,39,40,5,108,0,0,40,
        41,5,108,0,0,41,10,1,0,0,0,42,43,5,116,0,0,43,44,5,114,0,0,44,45,
        5,117,0,0,45,46,5,101,0,0,46,12,1,0,0,0,47,48,5,102,0,0,48,49,5,
        97,0,0,49,50,5,108,0,0,50,51,5,115,0,0,51,52,5,101,0,0,52,14,1,0,
        0,0,53,57,7,0,0,0,54,56,7,1,0,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,
        1,0,0,0,57,58,1,0,0,0,58,16,1,0,0,0,59,57,1,0,0,0,60,65,5,34,0,0,
        61,64,3,19,9,0,62,64,8,2,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,67,1,
        0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,0,68,
        69,5,34,0,0,69,18,1,0,0,0,70,78,5,92,0,0,71,79,7,3,0,0,72,73,5,117,
        0,0,73,74,3,21,10,0,74,75,3,21,10,0,75,76,3,21,10,0,76,77,3,21,10,
        0,77,79,1,0,0,0,78,71,1,0,0,0,78,72,1,0,0,0,79,20,1,0,0,0,80,81,
        7,4,0,0,81,22,1,0,0,0,82,84,3,27,13,0,83,82,1,0,0,0,84,87,1,0,0,
        0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,92,
        5,61,0,0,89,91,3,27,13,0,90,89,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,
        0,92,93,1,0,0,0,93,24,1,0,0,0,94,92,1,0,0,0,95,97,3,27,13,0,96,95,
        1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,109,1,0,0,0,
        100,104,5,35,0,0,101,103,8,5,0,0,102,101,1,0,0,0,103,106,1,0,0,0,
        104,102,1,0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,104,1,0,0,0,
        107,109,5,10,0,0,108,96,1,0,0,0,108,100,1,0,0,0,109,110,1,0,0,0,
        110,108,1,0,0,0,110,111,1,0,0,0,111,26,1,0,0,0,112,113,7,6,0,0,113,
        28,1,0,0,0,11,0,57,63,65,78,85,92,98,104,108,110,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!leafdataLexer.__ATN) {
            leafdataLexer.__ATN = new antlr.ATNDeserializer().deserialize(leafdataLexer._serializedATN);
        }

        return leafdataLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(leafdataLexer.literalNames, leafdataLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return leafdataLexer.vocabulary;
    }

    private static readonly decisionsToDFA = leafdataLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}