
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { leafdataParserListener } from "./leafdataParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class leafdataParser extends antlr.Parser {
    public static readonly BIGINT_MARK = 1;
    public static readonly PCT_MARK = 2;
    public static readonly B64_MARK = 3;
    public static readonly OBJ_OPEN = 4;
    public static readonly OBJ_CLOSE = 5;
    public static readonly ARR_OPEN = 6;
    public static readonly ARR_CLOSE = 7;
    public static readonly NULL = 8;
    public static readonly TRUE = 9;
    public static readonly FALSE = 10;
    public static readonly F64 = 11;
    public static readonly IDENT = 12;
    public static readonly NOTES = 13;
    public static readonly STR = 14;
    public static readonly BIGINT = 15;
    public static readonly PCT = 16;
    public static readonly B64 = 17;
    public static readonly RULE_leafdata = 0;
    public static readonly RULE_v_null = 1;
    public static readonly RULE_v_bool = 2;
    public static readonly RULE_v_f64 = 3;
    public static readonly RULE_v_bigint = 4;
    public static readonly RULE_v_bigint_val = 5;
    public static readonly RULE_v_pct = 6;
    public static readonly RULE_v_pct_val = 7;
    public static readonly RULE_v_b64 = 8;
    public static readonly RULE_v_b64_val = 9;
    public static readonly RULE_v_ident = 10;
    public static readonly RULE_v_str = 11;
    public static readonly RULE_v_obj = 12;
    public static readonly RULE_v_arr = 13;

    public static readonly literalNames = [
        null, "'bigint@'", "'pct@'", "'b64@'", "'{'", "'}'", "'['", "']'", 
        "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "BIGINT_MARK", "PCT_MARK", "B64_MARK", "OBJ_OPEN", "OBJ_CLOSE", 
        "ARR_OPEN", "ARR_CLOSE", "NULL", "TRUE", "FALSE", "F64", "IDENT", 
        "NOTES", "STR", "BIGINT", "PCT", "B64"
    ];
    public static readonly ruleNames = [
        "leafdata", "v_null", "v_bool", "v_f64", "v_bigint", "v_bigint_val", 
        "v_pct", "v_pct_val", "v_b64", "v_b64_val", "v_ident", "v_str", 
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 29;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 28;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 55;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12 || _la === 14) {
                {
                {
                this.state = 33;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 31;
                    this.v_ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 32;
                    this.v_str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 36;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 35;
                    this.match(leafdataParser.NOTES);
                    }
                }

                this.state = 48;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 38;
                    this.v_null();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 39;
                    this.v_bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 40;
                    this.v_f64();
                    }
                    break;
                case leafdataParser.BIGINT_MARK:
                    {
                    this.state = 41;
                    this.v_bigint();
                    }
                    break;
                case leafdataParser.PCT_MARK:
                    {
                    this.state = 42;
                    this.v_pct();
                    }
                    break;
                case leafdataParser.B64_MARK:
                    {
                    this.state = 43;
                    this.v_b64();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 44;
                    this.v_ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 45;
                    this.v_str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 46;
                    this.v_obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 47;
                    this.v_arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 51;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 50;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
                }
                this.state = 57;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 58;
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
            this.state = 60;
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
            this.state = 62;
            _la = this.tokenStream.LA(1);
            if(!(_la === 9 || _la === 10)) {
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
    public v_f64(): V_f64Context {
        let localContext = new V_f64Context(this.context, this.state);
        this.enterRule(localContext, 6, leafdataParser.RULE_v_f64);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.match(leafdataParser.F64);
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
    public v_bigint(): V_bigintContext {
        let localContext = new V_bigintContext(this.context, this.state);
        this.enterRule(localContext, 8, leafdataParser.RULE_v_bigint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.match(leafdataParser.BIGINT_MARK);
            this.state = 67;
            this.v_bigint_val();
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
    public v_bigint_val(): V_bigint_valContext {
        let localContext = new V_bigint_valContext(this.context, this.state);
        this.enterRule(localContext, 10, leafdataParser.RULE_v_bigint_val);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.match(leafdataParser.BIGINT);
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
    public v_pct(): V_pctContext {
        let localContext = new V_pctContext(this.context, this.state);
        this.enterRule(localContext, 12, leafdataParser.RULE_v_pct);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 71;
            this.match(leafdataParser.PCT_MARK);
            this.state = 72;
            this.v_pct_val();
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
    public v_pct_val(): V_pct_valContext {
        let localContext = new V_pct_valContext(this.context, this.state);
        this.enterRule(localContext, 14, leafdataParser.RULE_v_pct_val);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 74;
            this.match(leafdataParser.PCT);
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
    public v_b64(): V_b64Context {
        let localContext = new V_b64Context(this.context, this.state);
        this.enterRule(localContext, 16, leafdataParser.RULE_v_b64);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 76;
            this.match(leafdataParser.B64_MARK);
            this.state = 77;
            this.v_b64_val();
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
    public v_b64_val(): V_b64_valContext {
        let localContext = new V_b64_valContext(this.context, this.state);
        this.enterRule(localContext, 18, leafdataParser.RULE_v_b64_val);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.match(leafdataParser.B64);
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
        this.enterRule(localContext, 20, leafdataParser.RULE_v_ident);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
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
        this.enterRule(localContext, 22, leafdataParser.RULE_v_str);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
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
        this.enterRule(localContext, 24, leafdataParser.RULE_v_obj);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 86;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 113;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 12 || _la === 14) {
                {
                {
                this.state = 91;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 89;
                    this.v_ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 90;
                    this.v_str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 94;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 93;
                    this.match(leafdataParser.NOTES);
                    }
                }

                this.state = 106;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 96;
                    this.v_null();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 97;
                    this.v_bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 98;
                    this.v_f64();
                    }
                    break;
                case leafdataParser.BIGINT_MARK:
                    {
                    this.state = 99;
                    this.v_bigint();
                    }
                    break;
                case leafdataParser.PCT_MARK:
                    {
                    this.state = 100;
                    this.v_pct();
                    }
                    break;
                case leafdataParser.B64_MARK:
                    {
                    this.state = 101;
                    this.v_b64();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 102;
                    this.v_ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 103;
                    this.v_str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 104;
                    this.v_obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 105;
                    this.v_arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 108;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
                }
                this.state = 115;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 116;
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
        this.enterRule(localContext, 26, leafdataParser.RULE_v_arr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 120;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 13) {
                {
                this.state = 119;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 24414) !== 0)) {
                {
                {
                this.state = 132;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 122;
                    this.v_null();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 123;
                    this.v_bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 124;
                    this.v_f64();
                    }
                    break;
                case leafdataParser.BIGINT_MARK:
                    {
                    this.state = 125;
                    this.v_bigint();
                    }
                    break;
                case leafdataParser.PCT_MARK:
                    {
                    this.state = 126;
                    this.v_pct();
                    }
                    break;
                case leafdataParser.B64_MARK:
                    {
                    this.state = 127;
                    this.v_b64();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 128;
                    this.v_ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 129;
                    this.v_str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 130;
                    this.v_obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 131;
                    this.v_arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 135;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 13) {
                    {
                    this.state = 134;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
                }
                this.state = 141;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 142;
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
        4,1,17,145,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        1,0,3,0,30,8,0,1,0,1,0,3,0,34,8,0,1,0,3,0,37,8,0,1,0,1,0,1,0,1,0,
        1,0,1,0,1,0,1,0,1,0,1,0,3,0,49,8,0,1,0,3,0,52,8,0,5,0,54,8,0,10,
        0,12,0,57,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,5,1,
        5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
        12,1,12,3,12,88,8,12,1,12,1,12,3,12,92,8,12,1,12,3,12,95,8,12,1,
        12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,107,8,12,1,
        12,3,12,110,8,12,5,12,112,8,12,10,12,12,12,115,9,12,1,12,1,12,1,
        13,1,13,3,13,121,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
        13,1,13,3,13,133,8,13,1,13,3,13,136,8,13,5,13,138,8,13,10,13,12,
        13,141,9,13,1,13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,
        24,26,0,1,1,0,9,10,170,0,29,1,0,0,0,2,60,1,0,0,0,4,62,1,0,0,0,6,
        64,1,0,0,0,8,66,1,0,0,0,10,69,1,0,0,0,12,71,1,0,0,0,14,74,1,0,0,
        0,16,76,1,0,0,0,18,79,1,0,0,0,20,81,1,0,0,0,22,83,1,0,0,0,24,85,
        1,0,0,0,26,118,1,0,0,0,28,30,5,13,0,0,29,28,1,0,0,0,29,30,1,0,0,
        0,30,55,1,0,0,0,31,34,3,20,10,0,32,34,3,22,11,0,33,31,1,0,0,0,33,
        32,1,0,0,0,34,36,1,0,0,0,35,37,5,13,0,0,36,35,1,0,0,0,36,37,1,0,
        0,0,37,48,1,0,0,0,38,49,3,2,1,0,39,49,3,4,2,0,40,49,3,6,3,0,41,49,
        3,8,4,0,42,49,3,12,6,0,43,49,3,16,8,0,44,49,3,20,10,0,45,49,3,22,
        11,0,46,49,3,24,12,0,47,49,3,26,13,0,48,38,1,0,0,0,48,39,1,0,0,0,
        48,40,1,0,0,0,48,41,1,0,0,0,48,42,1,0,0,0,48,43,1,0,0,0,48,44,1,
        0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,51,1,0,0,0,50,
        52,5,13,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,33,1,0,
        0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,58,1,0,0,0,57,55,
        1,0,0,0,58,59,5,0,0,1,59,1,1,0,0,0,60,61,5,8,0,0,61,3,1,0,0,0,62,
        63,7,0,0,0,63,5,1,0,0,0,64,65,5,11,0,0,65,7,1,0,0,0,66,67,5,1,0,
        0,67,68,3,10,5,0,68,9,1,0,0,0,69,70,5,15,0,0,70,11,1,0,0,0,71,72,
        5,2,0,0,72,73,3,14,7,0,73,13,1,0,0,0,74,75,5,16,0,0,75,15,1,0,0,
        0,76,77,5,3,0,0,77,78,3,18,9,0,78,17,1,0,0,0,79,80,5,17,0,0,80,19,
        1,0,0,0,81,82,5,12,0,0,82,21,1,0,0,0,83,84,5,14,0,0,84,23,1,0,0,
        0,85,87,5,4,0,0,86,88,5,13,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,113,
        1,0,0,0,89,92,3,20,10,0,90,92,3,22,11,0,91,89,1,0,0,0,91,90,1,0,
        0,0,92,94,1,0,0,0,93,95,5,13,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,
        106,1,0,0,0,96,107,3,2,1,0,97,107,3,4,2,0,98,107,3,6,3,0,99,107,
        3,8,4,0,100,107,3,12,6,0,101,107,3,16,8,0,102,107,3,20,10,0,103,
        107,3,22,11,0,104,107,3,24,12,0,105,107,3,26,13,0,106,96,1,0,0,0,
        106,97,1,0,0,0,106,98,1,0,0,0,106,99,1,0,0,0,106,100,1,0,0,0,106,
        101,1,0,0,0,106,102,1,0,0,0,106,103,1,0,0,0,106,104,1,0,0,0,106,
        105,1,0,0,0,107,109,1,0,0,0,108,110,5,13,0,0,109,108,1,0,0,0,109,
        110,1,0,0,0,110,112,1,0,0,0,111,91,1,0,0,0,112,115,1,0,0,0,113,111,
        1,0,0,0,113,114,1,0,0,0,114,116,1,0,0,0,115,113,1,0,0,0,116,117,
        5,5,0,0,117,25,1,0,0,0,118,120,5,6,0,0,119,121,5,13,0,0,120,119,
        1,0,0,0,120,121,1,0,0,0,121,139,1,0,0,0,122,133,3,2,1,0,123,133,
        3,4,2,0,124,133,3,6,3,0,125,133,3,8,4,0,126,133,3,12,6,0,127,133,
        3,16,8,0,128,133,3,20,10,0,129,133,3,22,11,0,130,133,3,24,12,0,131,
        133,3,26,13,0,132,122,1,0,0,0,132,123,1,0,0,0,132,124,1,0,0,0,132,
        125,1,0,0,0,132,126,1,0,0,0,132,127,1,0,0,0,132,128,1,0,0,0,132,
        129,1,0,0,0,132,130,1,0,0,0,132,131,1,0,0,0,133,135,1,0,0,0,134,
        136,5,13,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,138,1,0,0,0,137,
        132,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,
        142,1,0,0,0,141,139,1,0,0,0,142,143,5,7,0,0,143,27,1,0,0,0,16,29,
        33,36,48,51,55,87,91,94,106,109,113,120,132,135,139
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
    public v_f64(): V_f64Context[];
    public v_f64(i: number): V_f64Context | null;
    public v_f64(i?: number): V_f64Context[] | V_f64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_f64Context);
        }

        return this.getRuleContext(i, V_f64Context);
    }
    public v_bigint(): V_bigintContext[];
    public v_bigint(i: number): V_bigintContext | null;
    public v_bigint(i?: number): V_bigintContext[] | V_bigintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_bigintContext);
        }

        return this.getRuleContext(i, V_bigintContext);
    }
    public v_pct(): V_pctContext[];
    public v_pct(i: number): V_pctContext | null;
    public v_pct(i?: number): V_pctContext[] | V_pctContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_pctContext);
        }

        return this.getRuleContext(i, V_pctContext);
    }
    public v_b64(): V_b64Context[];
    public v_b64(i: number): V_b64Context | null;
    public v_b64(i?: number): V_b64Context[] | V_b64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_b64Context);
        }

        return this.getRuleContext(i, V_b64Context);
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


export class V_f64Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public F64(): antlr.TerminalNode {
        return this.getToken(leafdataParser.F64, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_f64;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_f64) {
             listener.enterV_f64(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_f64) {
             listener.exitV_f64(this);
        }
    }
}


export class V_bigintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BIGINT_MARK(): antlr.TerminalNode {
        return this.getToken(leafdataParser.BIGINT_MARK, 0)!;
    }
    public v_bigint_val(): V_bigint_valContext {
        return this.getRuleContext(0, V_bigint_valContext)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_bigint;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_bigint) {
             listener.enterV_bigint(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_bigint) {
             listener.exitV_bigint(this);
        }
    }
}


export class V_bigint_valContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BIGINT(): antlr.TerminalNode {
        return this.getToken(leafdataParser.BIGINT, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_bigint_val;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_bigint_val) {
             listener.enterV_bigint_val(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_bigint_val) {
             listener.exitV_bigint_val(this);
        }
    }
}


export class V_pctContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PCT_MARK(): antlr.TerminalNode {
        return this.getToken(leafdataParser.PCT_MARK, 0)!;
    }
    public v_pct_val(): V_pct_valContext {
        return this.getRuleContext(0, V_pct_valContext)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_pct;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_pct) {
             listener.enterV_pct(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_pct) {
             listener.exitV_pct(this);
        }
    }
}


export class V_pct_valContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PCT(): antlr.TerminalNode {
        return this.getToken(leafdataParser.PCT, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_pct_val;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_pct_val) {
             listener.enterV_pct_val(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_pct_val) {
             listener.exitV_pct_val(this);
        }
    }
}


export class V_b64Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public B64_MARK(): antlr.TerminalNode {
        return this.getToken(leafdataParser.B64_MARK, 0)!;
    }
    public v_b64_val(): V_b64_valContext {
        return this.getRuleContext(0, V_b64_valContext)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_b64;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_b64) {
             listener.enterV_b64(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_b64) {
             listener.exitV_b64(this);
        }
    }
}


export class V_b64_valContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public B64(): antlr.TerminalNode {
        return this.getToken(leafdataParser.B64, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_b64_val;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterV_b64_val) {
             listener.enterV_b64_val(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitV_b64_val) {
             listener.exitV_b64_val(this);
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
    public STR(): antlr.TerminalNode {
        return this.getToken(leafdataParser.STR, 0)!;
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
    public v_f64(): V_f64Context[];
    public v_f64(i: number): V_f64Context | null;
    public v_f64(i?: number): V_f64Context[] | V_f64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_f64Context);
        }

        return this.getRuleContext(i, V_f64Context);
    }
    public v_bigint(): V_bigintContext[];
    public v_bigint(i: number): V_bigintContext | null;
    public v_bigint(i?: number): V_bigintContext[] | V_bigintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_bigintContext);
        }

        return this.getRuleContext(i, V_bigintContext);
    }
    public v_pct(): V_pctContext[];
    public v_pct(i: number): V_pctContext | null;
    public v_pct(i?: number): V_pctContext[] | V_pctContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_pctContext);
        }

        return this.getRuleContext(i, V_pctContext);
    }
    public v_b64(): V_b64Context[];
    public v_b64(i: number): V_b64Context | null;
    public v_b64(i?: number): V_b64Context[] | V_b64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_b64Context);
        }

        return this.getRuleContext(i, V_b64Context);
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
    public v_f64(): V_f64Context[];
    public v_f64(i: number): V_f64Context | null;
    public v_f64(i?: number): V_f64Context[] | V_f64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_f64Context);
        }

        return this.getRuleContext(i, V_f64Context);
    }
    public v_bigint(): V_bigintContext[];
    public v_bigint(i: number): V_bigintContext | null;
    public v_bigint(i?: number): V_bigintContext[] | V_bigintContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_bigintContext);
        }

        return this.getRuleContext(i, V_bigintContext);
    }
    public v_pct(): V_pctContext[];
    public v_pct(i: number): V_pctContext | null;
    public v_pct(i?: number): V_pctContext[] | V_pctContext | null {
        if (i === undefined) {
            return this.getRuleContexts(V_pctContext);
        }

        return this.getRuleContext(i, V_pctContext);
    }
    public v_b64(): V_b64Context[];
    public v_b64(i: number): V_b64Context | null;
    public v_b64(i?: number): V_b64Context[] | V_b64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(V_b64Context);
        }

        return this.getRuleContext(i, V_b64Context);
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
