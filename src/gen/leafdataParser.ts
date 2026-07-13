
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { leafdataParserListener } from "./leafdataParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class leafdataParser extends antlr.Parser {
    public static readonly TYPED_MARK = 1;
    public static readonly OBJ_OPEN = 2;
    public static readonly OBJ_CLOSE = 3;
    public static readonly ARR_OPEN = 4;
    public static readonly ARR_CLOSE = 5;
    public static readonly NULL = 6;
    public static readonly TRUE = 7;
    public static readonly FALSE = 8;
    public static readonly F64 = 9;
    public static readonly IDENT = 10;
    public static readonly NOTES = 11;
    public static readonly STR = 12;
    public static readonly TYPED = 13;
    public static readonly RULE_leafdata = 0;
    public static readonly RULE_null = 1;
    public static readonly RULE_bool = 2;
    public static readonly RULE_f64 = 3;
    public static readonly RULE_typed = 4;
    public static readonly RULE_typed_val = 5;
    public static readonly RULE_ident = 6;
    public static readonly RULE_str = 7;
    public static readonly RULE_obj = 8;
    public static readonly RULE_arr = 9;

    public static readonly literalNames = [
        null, null, "'{'", "'}'", "'['", "']'", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "TYPED_MARK", "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", 
        "NULL", "TRUE", "FALSE", "F64", "IDENT", "NOTES", "STR", "TYPED"
    ];
    public static readonly ruleNames = [
        "leafdata", "null", "bool", "f64", "typed", "typed_val", "ident", 
        "str", "obj", "arr",
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
            this.state = 21;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 20;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 12) {
                {
                this.state = 25;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 23;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 24;
                    this.str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 27;
                this.match(leafdataParser.NOTES);
                this.state = 36;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 28;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 29;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 30;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 31;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 32;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 33;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 34;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 35;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 56;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 38;
                        this.match(leafdataParser.NOTES);
                        this.state = 41;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.IDENT:
                            {
                            this.state = 39;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 40;
                            this.str();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 43;
                        this.match(leafdataParser.NOTES);
                        this.state = 52;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 44;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 45;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 46;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 47;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 48;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 49;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 50;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 51;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 58;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 5, this.context);
                }
                this.state = 60;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 59;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
            }

            this.state = 64;
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
    public null_(): NullContext {
        let localContext = new NullContext(this.context, this.state);
        this.enterRule(localContext, 2, leafdataParser.RULE_null);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
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
    public bool(): BoolContext {
        let localContext = new BoolContext(this.context, this.state);
        this.enterRule(localContext, 4, leafdataParser.RULE_bool);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
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
    public f64(): F64Context {
        let localContext = new F64Context(this.context, this.state);
        this.enterRule(localContext, 6, leafdataParser.RULE_f64);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 70;
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
    public typed(): TypedContext {
        let localContext = new TypedContext(this.context, this.state);
        this.enterRule(localContext, 8, leafdataParser.RULE_typed);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(leafdataParser.TYPED_MARK);
            this.state = 73;
            this.typed_val();
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
    public typed_val(): Typed_valContext {
        let localContext = new Typed_valContext(this.context, this.state);
        this.enterRule(localContext, 10, leafdataParser.RULE_typed_val);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.match(leafdataParser.TYPED);
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
    public ident(): IdentContext {
        let localContext = new IdentContext(this.context, this.state);
        this.enterRule(localContext, 12, leafdataParser.RULE_ident);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
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
    public str(): StrContext {
        let localContext = new StrContext(this.context, this.state);
        this.enterRule(localContext, 14, leafdataParser.RULE_str);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
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
    public obj(): ObjContext {
        let localContext = new ObjContext(this.context, this.state);
        this.enterRule(localContext, 16, leafdataParser.RULE_obj);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 81;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 83;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 82;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 12) {
                {
                this.state = 87;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 85;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 86;
                    this.str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 89;
                this.match(leafdataParser.NOTES);
                this.state = 98;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 90;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 91;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 92;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 93;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 94;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 95;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 96;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 97;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 118;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 100;
                        this.match(leafdataParser.NOTES);
                        this.state = 103;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.IDENT:
                            {
                            this.state = 101;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 102;
                            this.str();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 105;
                        this.match(leafdataParser.NOTES);
                        this.state = 114;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 106;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 107;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 108;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 109;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 110;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 111;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 112;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 113;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 120;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
                }
                this.state = 122;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 121;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
            }

            this.state = 126;
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
    public arr(): ArrContext {
        let localContext = new ArrContext(this.context, this.state);
        this.enterRule(localContext, 18, leafdataParser.RULE_arr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 128;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 129;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6102) !== 0)) {
                {
                this.state = 140;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 132;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 133;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 134;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 135;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 136;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 137;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 138;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 139;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 155;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 142;
                        this.match(leafdataParser.NOTES);
                        this.state = 151;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 143;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 144;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 145;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 146;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 147;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 148;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 149;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 150;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 157;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                }
                this.state = 159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 158;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
            }

            this.state = 163;
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
        4,1,13,166,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,3,0,22,8,0,1,0,1,0,3,0,26,8,0,1,0,
        1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,37,8,0,1,0,1,0,1,0,3,0,42,8,
        0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,53,8,0,5,0,55,8,0,10,0,
        12,0,58,9,0,1,0,3,0,61,8,0,3,0,63,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,
        3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,3,8,84,8,8,1,8,
        1,8,3,8,88,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,99,8,8,1,
        8,1,8,1,8,3,8,104,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,115,
        8,8,5,8,117,8,8,10,8,12,8,120,9,8,1,8,3,8,123,8,8,3,8,125,8,8,1,
        8,1,8,1,9,1,9,3,9,131,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,141,
        8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,152,8,9,5,9,154,8,9,
        10,9,12,9,157,9,9,1,9,3,9,160,8,9,3,9,162,8,9,1,9,1,9,1,9,0,0,10,
        0,2,4,6,8,10,12,14,16,18,0,1,1,0,7,8,213,0,21,1,0,0,0,2,66,1,0,0,
        0,4,68,1,0,0,0,6,70,1,0,0,0,8,72,1,0,0,0,10,75,1,0,0,0,12,77,1,0,
        0,0,14,79,1,0,0,0,16,81,1,0,0,0,18,128,1,0,0,0,20,22,5,11,0,0,21,
        20,1,0,0,0,21,22,1,0,0,0,22,62,1,0,0,0,23,26,3,12,6,0,24,26,3,14,
        7,0,25,23,1,0,0,0,25,24,1,0,0,0,26,27,1,0,0,0,27,36,5,11,0,0,28,
        37,3,2,1,0,29,37,3,4,2,0,30,37,3,6,3,0,31,37,3,8,4,0,32,37,3,12,
        6,0,33,37,3,14,7,0,34,37,3,16,8,0,35,37,3,18,9,0,36,28,1,0,0,0,36,
        29,1,0,0,0,36,30,1,0,0,0,36,31,1,0,0,0,36,32,1,0,0,0,36,33,1,0,0,
        0,36,34,1,0,0,0,36,35,1,0,0,0,37,56,1,0,0,0,38,41,5,11,0,0,39,42,
        3,12,6,0,40,42,3,14,7,0,41,39,1,0,0,0,41,40,1,0,0,0,42,43,1,0,0,
        0,43,52,5,11,0,0,44,53,3,2,1,0,45,53,3,4,2,0,46,53,3,6,3,0,47,53,
        3,8,4,0,48,53,3,12,6,0,49,53,3,14,7,0,50,53,3,16,8,0,51,53,3,18,
        9,0,52,44,1,0,0,0,52,45,1,0,0,0,52,46,1,0,0,0,52,47,1,0,0,0,52,48,
        1,0,0,0,52,49,1,0,0,0,52,50,1,0,0,0,52,51,1,0,0,0,53,55,1,0,0,0,
        54,38,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,60,1,
        0,0,0,58,56,1,0,0,0,59,61,5,11,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,
        63,1,0,0,0,62,25,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,5,0,0,
        1,65,1,1,0,0,0,66,67,5,6,0,0,67,3,1,0,0,0,68,69,7,0,0,0,69,5,1,0,
        0,0,70,71,5,9,0,0,71,7,1,0,0,0,72,73,5,1,0,0,73,74,3,10,5,0,74,9,
        1,0,0,0,75,76,5,13,0,0,76,11,1,0,0,0,77,78,5,10,0,0,78,13,1,0,0,
        0,79,80,5,12,0,0,80,15,1,0,0,0,81,83,5,2,0,0,82,84,5,11,0,0,83,82,
        1,0,0,0,83,84,1,0,0,0,84,124,1,0,0,0,85,88,3,12,6,0,86,88,3,14,7,
        0,87,85,1,0,0,0,87,86,1,0,0,0,88,89,1,0,0,0,89,98,5,11,0,0,90,99,
        3,2,1,0,91,99,3,4,2,0,92,99,3,6,3,0,93,99,3,8,4,0,94,99,3,12,6,0,
        95,99,3,14,7,0,96,99,3,16,8,0,97,99,3,18,9,0,98,90,1,0,0,0,98,91,
        1,0,0,0,98,92,1,0,0,0,98,93,1,0,0,0,98,94,1,0,0,0,98,95,1,0,0,0,
        98,96,1,0,0,0,98,97,1,0,0,0,99,118,1,0,0,0,100,103,5,11,0,0,101,
        104,3,12,6,0,102,104,3,14,7,0,103,101,1,0,0,0,103,102,1,0,0,0,104,
        105,1,0,0,0,105,114,5,11,0,0,106,115,3,2,1,0,107,115,3,4,2,0,108,
        115,3,6,3,0,109,115,3,8,4,0,110,115,3,12,6,0,111,115,3,14,7,0,112,
        115,3,16,8,0,113,115,3,18,9,0,114,106,1,0,0,0,114,107,1,0,0,0,114,
        108,1,0,0,0,114,109,1,0,0,0,114,110,1,0,0,0,114,111,1,0,0,0,114,
        112,1,0,0,0,114,113,1,0,0,0,115,117,1,0,0,0,116,100,1,0,0,0,117,
        120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,122,1,0,0,0,120,
        118,1,0,0,0,121,123,5,11,0,0,122,121,1,0,0,0,122,123,1,0,0,0,123,
        125,1,0,0,0,124,87,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,
        5,3,0,0,127,17,1,0,0,0,128,130,5,4,0,0,129,131,5,11,0,0,130,129,
        1,0,0,0,130,131,1,0,0,0,131,161,1,0,0,0,132,141,3,2,1,0,133,141,
        3,4,2,0,134,141,3,6,3,0,135,141,3,8,4,0,136,141,3,12,6,0,137,141,
        3,14,7,0,138,141,3,16,8,0,139,141,3,18,9,0,140,132,1,0,0,0,140,133,
        1,0,0,0,140,134,1,0,0,0,140,135,1,0,0,0,140,136,1,0,0,0,140,137,
        1,0,0,0,140,138,1,0,0,0,140,139,1,0,0,0,141,155,1,0,0,0,142,151,
        5,11,0,0,143,152,3,2,1,0,144,152,3,4,2,0,145,152,3,6,3,0,146,152,
        3,8,4,0,147,152,3,12,6,0,148,152,3,14,7,0,149,152,3,16,8,0,150,152,
        3,18,9,0,151,143,1,0,0,0,151,144,1,0,0,0,151,145,1,0,0,0,151,146,
        1,0,0,0,151,147,1,0,0,0,151,148,1,0,0,0,151,149,1,0,0,0,151,150,
        1,0,0,0,152,154,1,0,0,0,153,142,1,0,0,0,154,157,1,0,0,0,155,153,
        1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,160,
        5,11,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,140,
        1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,164,5,5,0,0,164,19,1,
        0,0,0,22,21,25,36,41,52,56,60,62,83,87,98,103,114,118,122,124,130,
        140,151,155,159,161
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
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public str(): StrContext[];
    public str(i: number): StrContext | null;
    public str(i?: number): StrContext[] | StrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StrContext);
        }

        return this.getRuleContext(i, StrContext);
    }
    public null_(): NullContext[];
    public null_(i: number): NullContext | null;
    public null_(i?: number): NullContext[] | NullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NullContext);
        }

        return this.getRuleContext(i, NullContext);
    }
    public bool(): BoolContext[];
    public bool(i: number): BoolContext | null;
    public bool(i?: number): BoolContext[] | BoolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BoolContext);
        }

        return this.getRuleContext(i, BoolContext);
    }
    public f64(): F64Context[];
    public f64(i: number): F64Context | null;
    public f64(i?: number): F64Context[] | F64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(F64Context);
        }

        return this.getRuleContext(i, F64Context);
    }
    public typed(): TypedContext[];
    public typed(i: number): TypedContext | null;
    public typed(i?: number): TypedContext[] | TypedContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypedContext);
        }

        return this.getRuleContext(i, TypedContext);
    }
    public obj(): ObjContext[];
    public obj(i: number): ObjContext | null;
    public obj(i?: number): ObjContext[] | ObjContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjContext);
        }

        return this.getRuleContext(i, ObjContext);
    }
    public arr(): ArrContext[];
    public arr(i: number): ArrContext | null;
    public arr(i?: number): ArrContext[] | ArrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrContext);
        }

        return this.getRuleContext(i, ArrContext);
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


export class NullContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NULL(): antlr.TerminalNode {
        return this.getToken(leafdataParser.NULL, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_null;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterNull) {
             listener.enterNull(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitNull) {
             listener.exitNull(this);
        }
    }
}


export class BoolContext extends antlr.ParserRuleContext {
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
        return leafdataParser.RULE_bool;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterBool) {
             listener.enterBool(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitBool) {
             listener.exitBool(this);
        }
    }
}


export class F64Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public F64(): antlr.TerminalNode {
        return this.getToken(leafdataParser.F64, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_f64;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterF64) {
             listener.enterF64(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitF64) {
             listener.exitF64(this);
        }
    }
}


export class TypedContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPED_MARK(): antlr.TerminalNode {
        return this.getToken(leafdataParser.TYPED_MARK, 0)!;
    }
    public typed_val(): Typed_valContext {
        return this.getRuleContext(0, Typed_valContext)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_typed;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterTyped) {
             listener.enterTyped(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitTyped) {
             listener.exitTyped(this);
        }
    }
}


export class Typed_valContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public TYPED(): antlr.TerminalNode {
        return this.getToken(leafdataParser.TYPED, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_typed_val;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterTyped_val) {
             listener.enterTyped_val(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitTyped_val) {
             listener.exitTyped_val(this);
        }
    }
}


export class IdentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(leafdataParser.IDENT, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_ident;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterIdent) {
             listener.enterIdent(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitIdent) {
             listener.exitIdent(this);
        }
    }
}


export class StrContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public STR(): antlr.TerminalNode {
        return this.getToken(leafdataParser.STR, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_str;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterStr) {
             listener.enterStr(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitStr) {
             listener.exitStr(this);
        }
    }
}


export class ObjContext extends antlr.ParserRuleContext {
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
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public str(): StrContext[];
    public str(i: number): StrContext | null;
    public str(i?: number): StrContext[] | StrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StrContext);
        }

        return this.getRuleContext(i, StrContext);
    }
    public null_(): NullContext[];
    public null_(i: number): NullContext | null;
    public null_(i?: number): NullContext[] | NullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NullContext);
        }

        return this.getRuleContext(i, NullContext);
    }
    public bool(): BoolContext[];
    public bool(i: number): BoolContext | null;
    public bool(i?: number): BoolContext[] | BoolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BoolContext);
        }

        return this.getRuleContext(i, BoolContext);
    }
    public f64(): F64Context[];
    public f64(i: number): F64Context | null;
    public f64(i?: number): F64Context[] | F64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(F64Context);
        }

        return this.getRuleContext(i, F64Context);
    }
    public typed(): TypedContext[];
    public typed(i: number): TypedContext | null;
    public typed(i?: number): TypedContext[] | TypedContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypedContext);
        }

        return this.getRuleContext(i, TypedContext);
    }
    public obj(): ObjContext[];
    public obj(i: number): ObjContext | null;
    public obj(i?: number): ObjContext[] | ObjContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjContext);
        }

        return this.getRuleContext(i, ObjContext);
    }
    public arr(): ArrContext[];
    public arr(i: number): ArrContext | null;
    public arr(i?: number): ArrContext[] | ArrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrContext);
        }

        return this.getRuleContext(i, ArrContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_obj;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterObj) {
             listener.enterObj(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitObj) {
             listener.exitObj(this);
        }
    }
}


export class ArrContext extends antlr.ParserRuleContext {
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
    public null_(): NullContext[];
    public null_(i: number): NullContext | null;
    public null_(i?: number): NullContext[] | NullContext | null {
        if (i === undefined) {
            return this.getRuleContexts(NullContext);
        }

        return this.getRuleContext(i, NullContext);
    }
    public bool(): BoolContext[];
    public bool(i: number): BoolContext | null;
    public bool(i?: number): BoolContext[] | BoolContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BoolContext);
        }

        return this.getRuleContext(i, BoolContext);
    }
    public f64(): F64Context[];
    public f64(i: number): F64Context | null;
    public f64(i?: number): F64Context[] | F64Context | null {
        if (i === undefined) {
            return this.getRuleContexts(F64Context);
        }

        return this.getRuleContext(i, F64Context);
    }
    public typed(): TypedContext[];
    public typed(i: number): TypedContext | null;
    public typed(i?: number): TypedContext[] | TypedContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypedContext);
        }

        return this.getRuleContext(i, TypedContext);
    }
    public ident(): IdentContext[];
    public ident(i: number): IdentContext | null;
    public ident(i?: number): IdentContext[] | IdentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentContext);
        }

        return this.getRuleContext(i, IdentContext);
    }
    public str(): StrContext[];
    public str(i: number): StrContext | null;
    public str(i?: number): StrContext[] | StrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StrContext);
        }

        return this.getRuleContext(i, StrContext);
    }
    public obj(): ObjContext[];
    public obj(i: number): ObjContext | null;
    public obj(i?: number): ObjContext[] | ObjContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ObjContext);
        }

        return this.getRuleContext(i, ObjContext);
    }
    public arr(): ArrContext[];
    public arr(i: number): ArrContext | null;
    public arr(i?: number): ArrContext[] | ArrContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ArrContext);
        }

        return this.getRuleContext(i, ArrContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_arr;
    }
    public override enterRule(listener: leafdataParserListener): void {
        if(listener.enterArr) {
             listener.enterArr(this);
        }
    }
    public override exitRule(listener: leafdataParserListener): void {
        if(listener.exitArr) {
             listener.exitArr(this);
        }
    }
}
