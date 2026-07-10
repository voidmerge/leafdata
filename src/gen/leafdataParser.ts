
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
    public static readonly RULE_v_obj = 5;
    public static readonly RULE_v_arr = 6;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'['", "']'", "'='", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "EQ", "NULL", 
        "TRUE", "FALSE", "IDENT", "NOTES", "STR_OPEN", "STR_CLOSE", "STR"
    ];
    public static readonly ruleNames = [
        "leafdata", "v_null", "v_bool", "v_ident", "v_str", "v_obj", "v_arr",
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
            this.state = 38;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 15;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 14;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 19;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.IDENT:
                        {
                        this.state = 17;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 18;
                        this.v_str();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 22;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 21;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 24;
                    this.match(leafdataParser.EQ);
                    this.state = 26;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 25;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 34;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 28;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 29;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 30;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 31;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 32;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 33;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 40;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
            }
            this.state = 42;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 41;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 44;
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
            this.state = 46;
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
            this.state = 48;
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
            this.state = 50;
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
            this.state = 52;
            this.match(leafdataParser.STR_OPEN);
            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 53;
                this.match(leafdataParser.STR);
                }
            }

            this.state = 56;
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
    public v_obj(): V_objContext {
        let localContext = new V_objContext(this.context, this.state);
        this.enterRule(localContext, 10, leafdataParser.RULE_v_obj);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 83;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 60;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 59;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 64;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.IDENT:
                        {
                        this.state = 62;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 63;
                        this.v_str();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    this.state = 67;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 66;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 69;
                    this.match(leafdataParser.EQ);
                    this.state = 71;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 70;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 79;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 73;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 74;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 75;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 76;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 77;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 78;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 85;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 86;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 89;
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
        this.enterRule(localContext, 12, leafdataParser.RULE_v_arr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 91;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 105;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 93;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 10) {
                        {
                        this.state = 92;
                        this.match(leafdataParser.NOTES);
                        }
                    }

                    this.state = 101;
                    this.errorHandler.sync(this);
                    switch (this.tokenStream.LA(1)) {
                    case leafdataParser.NULL:
                        {
                        this.state = 95;
                        this.v_null();
                        }
                        break;
                    case leafdataParser.TRUE:
                    case leafdataParser.FALSE:
                        {
                        this.state = 96;
                        this.v_bool();
                        }
                        break;
                    case leafdataParser.IDENT:
                        {
                        this.state = 97;
                        this.v_ident();
                        }
                        break;
                    case leafdataParser.STR_OPEN:
                        {
                        this.state = 98;
                        this.v_str();
                        }
                        break;
                    case leafdataParser.OBJ_OPEN:
                        {
                        this.state = 99;
                        this.v_obj();
                        }
                        break;
                    case leafdataParser.ARR_OPEN:
                        {
                        this.state = 100;
                        this.v_arr();
                        }
                        break;
                    default:
                        throw new antlr.NoViableAltException(this);
                    }
                    }
                    }
                }
                this.state = 107;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            }
            this.state = 109;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 108;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 111;
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
        4,1,13,114,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,1,0,3,0,16,8,0,1,0,1,0,3,0,20,8,0,1,0,3,0,23,8,0,1,0,1,0,3,0,27,
        8,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,35,8,0,5,0,37,8,0,10,0,12,0,40,9,
        0,1,0,3,0,43,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,55,
        8,4,1,4,1,4,1,5,1,5,3,5,61,8,5,1,5,1,5,3,5,65,8,5,1,5,3,5,68,8,5,
        1,5,1,5,3,5,72,8,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,80,8,5,5,5,82,8,5,
        10,5,12,5,85,9,5,1,5,3,5,88,8,5,1,5,1,5,1,6,1,6,3,6,94,8,6,1,6,1,
        6,1,6,1,6,1,6,1,6,3,6,102,8,6,5,6,104,8,6,10,6,12,6,107,9,6,1,6,
        3,6,110,8,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,7,8,137,0,
        38,1,0,0,0,2,46,1,0,0,0,4,48,1,0,0,0,6,50,1,0,0,0,8,52,1,0,0,0,10,
        58,1,0,0,0,12,91,1,0,0,0,14,16,5,10,0,0,15,14,1,0,0,0,15,16,1,0,
        0,0,16,19,1,0,0,0,17,20,3,6,3,0,18,20,3,8,4,0,19,17,1,0,0,0,19,18,
        1,0,0,0,20,22,1,0,0,0,21,23,5,10,0,0,22,21,1,0,0,0,22,23,1,0,0,0,
        23,24,1,0,0,0,24,26,5,5,0,0,25,27,5,10,0,0,26,25,1,0,0,0,26,27,1,
        0,0,0,27,34,1,0,0,0,28,35,3,2,1,0,29,35,3,4,2,0,30,35,3,6,3,0,31,
        35,3,8,4,0,32,35,3,10,5,0,33,35,3,12,6,0,34,28,1,0,0,0,34,29,1,0,
        0,0,34,30,1,0,0,0,34,31,1,0,0,0,34,32,1,0,0,0,34,33,1,0,0,0,35,37,
        1,0,0,0,36,15,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,
        39,42,1,0,0,0,40,38,1,0,0,0,41,43,5,10,0,0,42,41,1,0,0,0,42,43,1,
        0,0,0,43,44,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,0,46,47,5,6,0,0,47,
        3,1,0,0,0,48,49,7,0,0,0,49,5,1,0,0,0,50,51,5,9,0,0,51,7,1,0,0,0,
        52,54,5,11,0,0,53,55,5,13,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,56,
        1,0,0,0,56,57,5,12,0,0,57,9,1,0,0,0,58,83,5,1,0,0,59,61,5,10,0,0,
        60,59,1,0,0,0,60,61,1,0,0,0,61,64,1,0,0,0,62,65,3,6,3,0,63,65,3,
        8,4,0,64,62,1,0,0,0,64,63,1,0,0,0,65,67,1,0,0,0,66,68,5,10,0,0,67,
        66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,71,5,5,0,0,70,72,5,10,
        0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,79,1,0,0,0,73,80,3,2,1,0,74,80,
        3,4,2,0,75,80,3,6,3,0,76,80,3,8,4,0,77,80,3,10,5,0,78,80,3,12,6,
        0,79,73,1,0,0,0,79,74,1,0,0,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,
        1,0,0,0,79,78,1,0,0,0,80,82,1,0,0,0,81,60,1,0,0,0,82,85,1,0,0,0,
        83,81,1,0,0,0,83,84,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,86,88,5,
        10,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,2,0,0,90,
        11,1,0,0,0,91,105,5,3,0,0,92,94,5,10,0,0,93,92,1,0,0,0,93,94,1,0,
        0,0,94,101,1,0,0,0,95,102,3,2,1,0,96,102,3,4,2,0,97,102,3,6,3,0,
        98,102,3,8,4,0,99,102,3,10,5,0,100,102,3,12,6,0,101,95,1,0,0,0,101,
        96,1,0,0,0,101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,
        1,0,0,0,102,104,1,0,0,0,103,93,1,0,0,0,104,107,1,0,0,0,105,103,1,
        0,0,0,105,106,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,108,110,5,
        10,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,112,5,
        4,0,0,112,13,1,0,0,0,19,15,19,22,26,34,38,42,54,60,64,67,71,79,83,
        87,93,101,105,109
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
    public STR(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.STR, 0);
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
