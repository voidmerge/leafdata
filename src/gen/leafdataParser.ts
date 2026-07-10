
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { leafdataParserListener } from "./leafdataParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class leafdataParser extends antlr.Parser {
    public static readonly OBJ_OPEN = 1;
    public static readonly OBJ_CLOSE = 2;
    public static readonly ARR_OPEN = 3;
    public static readonly ARR_CLOSE = 4;
    public static readonly EQ = 5;
    public static readonly NULL = 6;
    public static readonly TRUE = 7;
    public static readonly FALSE = 8;
    public static readonly IDENT = 9;
    public static readonly NOTES = 10;
    public static readonly STR_OPEN = 11;
    public static readonly STR_CLOSE = 12;
    public static readonly STR = 13;
    public static readonly RULE_leafdata = 0;
    public static readonly RULE_v_null = 1;
    public static readonly RULE_v_bool = 2;
    public static readonly RULE_v_ident = 3;
    public static readonly RULE_v_str = 4;
    public static readonly RULE_v_str_data = 5;
    public static readonly RULE_v_obj = 6;
    public static readonly RULE_v_arr = 7;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'['", "']'", "'='", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "EQ", "NULL", 
        "TRUE", "FALSE", "IDENT", "NOTES", "STR_OPEN", "STR_CLOSE", "STR"
    ];
    public static readonly ruleNames = [
        "leafdata", "v_null", "v_bool", "v_ident", "v_str", "v_str_data", 
        "v_obj", "v_arr",
    ];

    public get grammarFileName(): string { return "leafdataParser.g4"; }
    public get literalNames(): (string | null)[] { return leafdataParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return leafdataParser.symbolicNames; }
    public get ruleNames(): string[] { return leafdataParser.ruleNames; }
    public get serializedATN(): number[] { return leafdataParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, leafdataParser._ATN, leafdataParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public leafdata(): LeafdataContext {
        let localContext = new LeafdataContext(this.context, this.state);
        this.enterRule(localContext, 0, leafdataParser.RULE_leafdata);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 17;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 16;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 21;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.IDENT:
                        {
                        this.state = 19;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 20;
                        this.v_str();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 24;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 23;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 26;
                    this.match(leafdataParser.EQ);
                    this.state = 28;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 27;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 36;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 30;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 31;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 32;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 33;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 34;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 35;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 42;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 44;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 43;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 46;
            this.match(leafdataParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_null(): V_nullContext {
        let localContext = new V_nullContext(this.context, this.state);
        this.enterRule(localContext, 2, leafdataParser.RULE_v_null);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            this.match(leafdataParser.NULL);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_bool(): V_boolContext {
        let localContext = new V_boolContext(this.context, this.state);
        this.enterRule(localContext, 4, leafdataParser.RULE_v_bool);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 50;
            _la = this.tokenStream.LA(1);
            if(!(_la === 7 || _la === 8)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_ident(): V_identContext {
        let localContext = new V_identContext(this.context, this.state);
        this.enterRule(localContext, 6, leafdataParser.RULE_v_ident);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 52;
            this.match(leafdataParser.IDENT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_str(): V_strContext {
        let localContext = new V_strContext(this.context, this.state);
        this.enterRule(localContext, 8, leafdataParser.RULE_v_str);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.match(leafdataParser.STR_OPEN);
            this.state = 56;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 55;
                this.v_str_data();
                }
            }

            this.state = 58;
            this.match(leafdataParser.STR_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_str_data(): V_str_dataContext {
        let localContext = new V_str_dataContext(this.context, this.state);
        this.enterRule(localContext, 10, leafdataParser.RULE_v_str_data);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 60;
            this.match(leafdataParser.STR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_obj(): V_objContext {
        let localContext = new V_objContext(this.context, this.state);
        this.enterRule(localContext, 12, leafdataParser.RULE_v_obj);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 62;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 87;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 64;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 63;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 68;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.IDENT:
                        {
                        this.state = 66;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 67;
                        this.v_str();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 71;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 70;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 73;
                    this.match(leafdataParser.EQ);
                    this.state = 75;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 74;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 83;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 77;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 78;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 79;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 80;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 81;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 82;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 89;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 90;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 93;
            this.match(leafdataParser.OBJ_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public v_arr(): V_arrContext {
        let localContext = new V_arrContext(this.context, this.state);
        this.enterRule(localContext, 14, leafdataParser.RULE_v_arr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 95;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 109;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 97;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 96;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 105;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 99;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 100;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 101;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 102;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 103;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 104;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 111;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            }
            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 112;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 115;
            this.match(leafdataParser.ARR_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,13,118,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,1,0,3,0,18,8,0,1,0,1,0,3,0,22,8,0,1,0,3,0,25,8,0,1,0,1,
        0,3,0,29,8,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,37,8,0,5,0,39,8,0,10,0,
        12,0,42,9,0,1,0,3,0,45,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,
        4,3,4,57,8,4,1,4,1,4,1,5,1,5,1,6,1,6,3,6,65,8,6,1,6,1,6,3,6,69,8,
        6,1,6,3,6,72,8,6,1,6,1,6,3,6,76,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,
        84,8,6,5,6,86,8,6,10,6,12,6,89,9,6,1,6,3,6,92,8,6,1,6,1,6,1,7,1,
        7,3,7,98,8,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,106,8,7,5,7,108,8,7,10,
        7,12,7,111,9,7,1,7,3,7,114,8,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,
        14,0,1,1,0,7,8,140,0,40,1,0,0,0,2,48,1,0,0,0,4,50,1,0,0,0,6,52,1,
        0,0,0,8,54,1,0,0,0,10,60,1,0,0,0,12,62,1,0,0,0,14,95,1,0,0,0,16,
        18,5,10,0,0,17,16,1,0,0,0,17,18,1,0,0,0,18,21,1,0,0,0,19,22,3,6,
        3,0,20,22,3,8,4,0,21,19,1,0,0,0,21,20,1,0,0,0,22,24,1,0,0,0,23,25,
        5,10,0,0,24,23,1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,28,5,5,0,0,
        27,29,5,10,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,36,1,0,0,0,30,37,3,
        2,1,0,31,37,3,4,2,0,32,37,3,6,3,0,33,37,3,8,4,0,34,37,3,12,6,0,35,
        37,3,14,7,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,
        0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,39,1,0,0,0,38,17,1,0,0,0,39,42,
        1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,
        43,45,5,10,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,46,1,0,0,0,46,47,5,
        0,0,1,47,1,1,0,0,0,48,49,5,6,0,0,49,3,1,0,0,0,50,51,7,0,0,0,51,5,
        1,0,0,0,52,53,5,9,0,0,53,7,1,0,0,0,54,56,5,11,0,0,55,57,3,10,5,0,
        56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,12,0,0,59,9,1,
        0,0,0,60,61,5,13,0,0,61,11,1,0,0,0,62,87,5,1,0,0,63,65,5,10,0,0,
        64,63,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,66,69,3,6,3,0,67,69,3,
        8,4,0,68,66,1,0,0,0,68,67,1,0,0,0,69,71,1,0,0,0,70,72,5,10,0,0,71,
        70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,75,5,5,0,0,74,76,5,10,
        0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,83,1,0,0,0,77,84,3,2,1,0,78,84,
        3,4,2,0,79,84,3,6,3,0,80,84,3,8,4,0,81,84,3,12,6,0,82,84,3,14,7,
        0,83,77,1,0,0,0,83,78,1,0,0,0,83,79,1,0,0,0,83,80,1,0,0,0,83,81,
        1,0,0,0,83,82,1,0,0,0,84,86,1,0,0,0,85,64,1,0,0,0,86,89,1,0,0,0,
        87,85,1,0,0,0,87,88,1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,90,92,5,
        10,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,5,2,0,0,94,
        13,1,0,0,0,95,109,5,3,0,0,96,98,5,10,0,0,97,96,1,0,0,0,97,98,1,0,
        0,0,98,105,1,0,0,0,99,106,3,2,1,0,100,106,3,4,2,0,101,106,3,6,3,
        0,102,106,3,8,4,0,103,106,3,12,6,0,104,106,3,14,7,0,105,99,1,0,0,
        0,105,100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,
        0,105,104,1,0,0,0,106,108,1,0,0,0,107,97,1,0,0,0,108,111,1,0,0,0,
        109,107,1,0,0,0,109,110,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,
        112,114,5,10,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,
        115,116,5,4,0,0,116,15,1,0,0,0,19,17,21,24,28,36,40,44,56,64,68,
        71,75,83,87,91,97,105,109,113
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!leafdataParser.__ATN) {
            leafdataParser.__ATN = new antlr.ATNDeserializer().deserialize(leafdataParser._serializedATN);
        }

        return leafdataParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(leafdataParser.literalNames, leafdataParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return leafdataParser.vocabulary;
    }

    private static readonly decisionsToDFA = leafdataParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class LeafdataContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(leafdataParser.EOF, 0)!;
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(leafdataParser.EQ);
    	} else {
    		return this.getToken(leafdataParser.EQ, i);
    	}
    }
    public NOTES(): antlr.TerminalNode[];
    public NOTES(i: number): antlr.TerminalNode | null;
    public NOTES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(leafdataParser.NOTES);
    	} else {
    		return this.getToken(leafdataParser.NOTES, i);
    	}
    }
    public v_ident(): V_identContext[];
    public v_ident(i: number): V_identContext | null;
    public v_ident(i?: number): V_identContext[] | V_identContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_identContext);
        }

        return this.getRuleContext(i, V_identContext);
    }
    public v_str(): V_strContext[];
    public v_str(i: number): V_strContext | null;
    public v_str(i?: number): V_strContext[] | V_strContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_strContext);
        }

        return this.getRuleContext(i, V_strContext);
    }
    public v_null(): V_nullContext[];
    public v_null(i: number): V_nullContext | null;
    public v_null(i?: number): V_nullContext[] | V_nullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_nullContext);
        }

        return this.getRuleContext(i, V_nullContext);
    }
    public v_bool(): V_boolContext[];
    public v_bool(i: number): V_boolContext | null;
    public v_bool(i?: number): V_boolContext[] | V_boolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_boolContext);
        }

        return this.getRuleContext(i, V_boolContext);
    }
    public v_obj(): V_objContext[];
    public v_obj(i: number): V_objContext | null;
    public v_obj(i?: number): V_objContext[] | V_objContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_objContext);
        }

        return this.getRuleContext(i, V_objContext);
    }
    public v_arr(): V_arrContext[];
    public v_arr(i: number): V_arrContext | null;
    public v_arr(i?: number): V_arrContext[] | V_arrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_arrContext);
        }

        return this.getRuleContext(i, V_arrContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_leafdata;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterLeafdata) {
             listener.enterLeafdata(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitLeafdata) {
             listener.exitLeafdata(this);
        }
    }
}


export class V_nullContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(leafdataParser.NULL, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_null;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_null) {
             listener.enterV_null(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_null) {
             listener.exitV_null(this);
        }
    }
}


export class V_boolContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.FALSE, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_bool;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_bool) {
             listener.enterV_bool(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_bool) {
             listener.exitV_bool(this);
        }
    }
}


export class V_identContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(leafdataParser.IDENT, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_ident;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_ident) {
             listener.enterV_ident(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_ident) {
             listener.exitV_ident(this);
        }
    }
}


export class V_strContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STR_OPEN(): antlr.TerminalNode {
        return this.getToken(leafdataParser.STR_OPEN, 0)!;
    }
    public STR_CLOSE(): antlr.TerminalNode {
        return this.getToken(leafdataParser.STR_CLOSE, 0)!;
    }
    public v_str_data(): V_str_dataContext | null {
        return this.getRuleContext(0, V_str_dataContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_str;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_str) {
             listener.enterV_str(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_str) {
             listener.exitV_str(this);
        }
    }
}


export class V_str_dataContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STR(): antlr.TerminalNode {
        return this.getToken(leafdataParser.STR, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_str_data;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_str_data) {
             listener.enterV_str_data(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_str_data) {
             listener.exitV_str_data(this);
        }
    }
}


export class V_objContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public OBJ_OPEN(): antlr.TerminalNode {
        return this.getToken(leafdataParser.OBJ_OPEN, 0)!;
    }
    public OBJ_CLOSE(): antlr.TerminalNode {
        return this.getToken(leafdataParser.OBJ_CLOSE, 0)!;
    }
    public EQ(): antlr.TerminalNode[];
    public EQ(i: number): antlr.TerminalNode | null;
    public EQ(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(leafdataParser.EQ);
    	} else {
    		return this.getToken(leafdataParser.EQ, i);
    	}
    }
    public NOTES(): antlr.TerminalNode[];
    public NOTES(i: number): antlr.TerminalNode | null;
    public NOTES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(leafdataParser.NOTES);
    	} else {
    		return this.getToken(leafdataParser.NOTES, i);
    	}
    }
    public v_ident(): V_identContext[];
    public v_ident(i: number): V_identContext | null;
    public v_ident(i?: number): V_identContext[] | V_identContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_identContext);
        }

        return this.getRuleContext(i, V_identContext);
    }
    public v_str(): V_strContext[];
    public v_str(i: number): V_strContext | null;
    public v_str(i?: number): V_strContext[] | V_strContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_strContext);
        }

        return this.getRuleContext(i, V_strContext);
    }
    public v_null(): V_nullContext[];
    public v_null(i: number): V_nullContext | null;
    public v_null(i?: number): V_nullContext[] | V_nullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_nullContext);
        }

        return this.getRuleContext(i, V_nullContext);
    }
    public v_bool(): V_boolContext[];
    public v_bool(i: number): V_boolContext | null;
    public v_bool(i?: number): V_boolContext[] | V_boolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_boolContext);
        }

        return this.getRuleContext(i, V_boolContext);
    }
    public v_obj(): V_objContext[];
    public v_obj(i: number): V_objContext | null;
    public v_obj(i?: number): V_objContext[] | V_objContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_objContext);
        }

        return this.getRuleContext(i, V_objContext);
    }
    public v_arr(): V_arrContext[];
    public v_arr(i: number): V_arrContext | null;
    public v_arr(i?: number): V_arrContext[] | V_arrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_arrContext);
        }

        return this.getRuleContext(i, V_arrContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_obj;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_obj) {
             listener.enterV_obj(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_obj) {
             listener.exitV_obj(this);
        }
    }
}


export class V_arrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ARR_OPEN(): antlr.TerminalNode {
        return this.getToken(leafdataParser.ARR_OPEN, 0)!;
    }
    public ARR_CLOSE(): antlr.TerminalNode {
        return this.getToken(leafdataParser.ARR_CLOSE, 0)!;
    }
    public NOTES(): antlr.TerminalNode[];
    public NOTES(i: number): antlr.TerminalNode | null;
    public NOTES(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(leafdataParser.NOTES);
    	} else {
    		return this.getToken(leafdataParser.NOTES, i);
    	}
    }
    public v_null(): V_nullContext[];
    public v_null(i: number): V_nullContext | null;
    public v_null(i?: number): V_nullContext[] | V_nullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_nullContext);
        }

        return this.getRuleContext(i, V_nullContext);
    }
    public v_bool(): V_boolContext[];
    public v_bool(i: number): V_boolContext | null;
    public v_bool(i?: number): V_boolContext[] | V_boolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_boolContext);
        }

        return this.getRuleContext(i, V_boolContext);
    }
    public v_ident(): V_identContext[];
    public v_ident(i: number): V_identContext | null;
    public v_ident(i?: number): V_identContext[] | V_identContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_identContext);
        }

        return this.getRuleContext(i, V_identContext);
    }
    public v_str(): V_strContext[];
    public v_str(i: number): V_strContext | null;
    public v_str(i?: number): V_strContext[] | V_strContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_strContext);
        }

        return this.getRuleContext(i, V_strContext);
    }
    public v_obj(): V_objContext[];
    public v_obj(i: number): V_objContext | null;
    public v_obj(i?: number): V_objContext[] | V_objContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_objContext);
        }

        return this.getRuleContext(i, V_objContext);
    }
    public v_arr(): V_arrContext[];
    public v_arr(i: number): V_arrContext | null;
    public v_arr(i?: number): V_arrContext[] | V_arrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_arrContext);
        }

        return this.getRuleContext(i, V_arrContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_arr;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_arr) {
             listener.enterV_arr(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_arr) {
             listener.exitV_arr(this);
        }
    }
}
