
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
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                {
                this.state = 20;
                this.match(leafdataParser.NOTES);
                }
                break;
            }
            this.state = 24;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 23;
                this.match(leafdataParser.OBJ_OPEN);
                }
            }

            this.state = 27;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 2, this.context) ) {
            case 1:
                {
                this.state = 26;
                this.match(leafdataParser.NOTES);
                }
                break;
            }
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 12) {
                {
                this.state = 31;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 29;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 30;
                    this.str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 33;
                this.match(leafdataParser.NOTES);
                this.state = 42;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 34;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 35;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 36;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 37;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 38;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 39;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 40;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 41;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 62;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 44;
                        this.match(leafdataParser.NOTES);
                        this.state = 47;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.IDENT:
                            {
                            this.state = 45;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 46;
                            this.str();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 49;
                        this.match(leafdataParser.NOTES);
                        this.state = 58;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 50;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 51;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 52;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 53;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 54;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 55;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 56;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 57;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 64;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
                }
                this.state = 66;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
                case 1:
                    {
                    this.state = 65;
                    this.match(leafdataParser.NOTES);
                    }
                    break;
                }
                }
            }

            this.state = 71;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 70;
                this.match(leafdataParser.OBJ_CLOSE);
                }
            }

            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 73;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 76;
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
            this.state = 78;
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
            this.state = 80;
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
            this.state = 82;
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
            this.state = 84;
            this.match(leafdataParser.TYPED_MARK);
            this.state = 85;
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
            this.state = 87;
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
            this.state = 89;
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
            this.state = 91;
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
            this.state = 93;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 95;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 94;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10 || _la === 12) {
                {
                this.state = 99;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.IDENT:
                    {
                    this.state = 97;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 98;
                    this.str();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 101;
                this.match(leafdataParser.NOTES);
                this.state = 110;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 102;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 103;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 104;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 105;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 106;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 107;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 108;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 109;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 130;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 112;
                        this.match(leafdataParser.NOTES);
                        this.state = 115;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.IDENT:
                            {
                            this.state = 113;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 114;
                            this.str();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        this.state = 117;
                        this.match(leafdataParser.NOTES);
                        this.state = 126;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 118;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 119;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 120;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 121;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 122;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 123;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 124;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 125;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 132;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 133;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
            }

            this.state = 138;
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
            this.state = 140;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 142;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 141;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 173;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 6102) !== 0)) {
                {
                this.state = 152;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case leafdataParser.NULL:
                    {
                    this.state = 144;
                    this.null_();
                    }
                    break;
                case leafdataParser.TRUE:
                case leafdataParser.FALSE:
                    {
                    this.state = 145;
                    this.bool();
                    }
                    break;
                case leafdataParser.F64:
                    {
                    this.state = 146;
                    this.f64();
                    }
                    break;
                case leafdataParser.TYPED_MARK:
                    {
                    this.state = 147;
                    this.typed();
                    }
                    break;
                case leafdataParser.IDENT:
                    {
                    this.state = 148;
                    this.ident();
                    }
                    break;
                case leafdataParser.STR:
                    {
                    this.state = 149;
                    this.str();
                    }
                    break;
                case leafdataParser.OBJ_OPEN:
                    {
                    this.state = 150;
                    this.obj();
                    }
                    break;
                case leafdataParser.ARR_OPEN:
                    {
                    this.state = 151;
                    this.arr();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 167;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 154;
                        this.match(leafdataParser.NOTES);
                        this.state = 163;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                        case leafdataParser.NULL:
                            {
                            this.state = 155;
                            this.null_();
                            }
                            break;
                        case leafdataParser.TRUE:
                        case leafdataParser.FALSE:
                            {
                            this.state = 156;
                            this.bool();
                            }
                            break;
                        case leafdataParser.F64:
                            {
                            this.state = 157;
                            this.f64();
                            }
                            break;
                        case leafdataParser.TYPED_MARK:
                            {
                            this.state = 158;
                            this.typed();
                            }
                            break;
                        case leafdataParser.IDENT:
                            {
                            this.state = 159;
                            this.ident();
                            }
                            break;
                        case leafdataParser.STR:
                            {
                            this.state = 160;
                            this.str();
                            }
                            break;
                        case leafdataParser.OBJ_OPEN:
                            {
                            this.state = 161;
                            this.obj();
                            }
                            break;
                        case leafdataParser.ARR_OPEN:
                            {
                            this.state = 162;
                            this.arr();
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                        }
                        }
                        }
                    }
                    this.state = 169;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
                }
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 11) {
                    {
                    this.state = 170;
                    this.match(leafdataParser.NOTES);
                    }
                }

                }
            }

            this.state = 175;
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
        4,1,13,178,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,3,0,22,8,0,1,0,3,0,25,8,0,1,0,3,0,
        28,8,0,1,0,1,0,3,0,32,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,
        0,43,8,0,1,0,1,0,1,0,3,0,48,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
        1,0,3,0,59,8,0,5,0,61,8,0,10,0,12,0,64,9,0,1,0,3,0,67,8,0,3,0,69,
        8,0,1,0,3,0,72,8,0,1,0,3,0,75,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,
        3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,3,8,96,8,8,1,8,1,8,
        3,8,100,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,111,8,8,1,8,
        1,8,1,8,3,8,116,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,127,
        8,8,5,8,129,8,8,10,8,12,8,132,9,8,1,8,3,8,135,8,8,3,8,137,8,8,1,
        8,1,8,1,9,1,9,3,9,143,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,153,
        8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,164,8,9,5,9,166,8,9,
        10,9,12,9,169,9,9,1,9,3,9,172,8,9,3,9,174,8,9,1,9,1,9,1,9,0,0,10,
        0,2,4,6,8,10,12,14,16,18,0,1,1,0,7,8,229,0,21,1,0,0,0,2,78,1,0,0,
        0,4,80,1,0,0,0,6,82,1,0,0,0,8,84,1,0,0,0,10,87,1,0,0,0,12,89,1,0,
        0,0,14,91,1,0,0,0,16,93,1,0,0,0,18,140,1,0,0,0,20,22,5,11,0,0,21,
        20,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,25,5,2,0,0,24,23,1,0,0,
        0,24,25,1,0,0,0,25,27,1,0,0,0,26,28,5,11,0,0,27,26,1,0,0,0,27,28,
        1,0,0,0,28,68,1,0,0,0,29,32,3,12,6,0,30,32,3,14,7,0,31,29,1,0,0,
        0,31,30,1,0,0,0,32,33,1,0,0,0,33,42,5,11,0,0,34,43,3,2,1,0,35,43,
        3,4,2,0,36,43,3,6,3,0,37,43,3,8,4,0,38,43,3,12,6,0,39,43,3,14,7,
        0,40,43,3,16,8,0,41,43,3,18,9,0,42,34,1,0,0,0,42,35,1,0,0,0,42,36,
        1,0,0,0,42,37,1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,
        42,41,1,0,0,0,43,62,1,0,0,0,44,47,5,11,0,0,45,48,3,12,6,0,46,48,
        3,14,7,0,47,45,1,0,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,58,5,11,0,
        0,50,59,3,2,1,0,51,59,3,4,2,0,52,59,3,6,3,0,53,59,3,8,4,0,54,59,
        3,12,6,0,55,59,3,14,7,0,56,59,3,16,8,0,57,59,3,18,9,0,58,50,1,0,
        0,0,58,51,1,0,0,0,58,52,1,0,0,0,58,53,1,0,0,0,58,54,1,0,0,0,58,55,
        1,0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,61,1,0,0,0,60,44,1,0,0,0,
        61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,66,1,0,0,0,64,62,1,
        0,0,0,65,67,5,11,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,
        31,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,72,5,3,0,0,71,70,1,0,0,
        0,71,72,1,0,0,0,72,74,1,0,0,0,73,75,5,11,0,0,74,73,1,0,0,0,74,75,
        1,0,0,0,75,76,1,0,0,0,76,77,5,0,0,1,77,1,1,0,0,0,78,79,5,6,0,0,79,
        3,1,0,0,0,80,81,7,0,0,0,81,5,1,0,0,0,82,83,5,9,0,0,83,7,1,0,0,0,
        84,85,5,1,0,0,85,86,3,10,5,0,86,9,1,0,0,0,87,88,5,13,0,0,88,11,1,
        0,0,0,89,90,5,10,0,0,90,13,1,0,0,0,91,92,5,12,0,0,92,15,1,0,0,0,
        93,95,5,2,0,0,94,96,5,11,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,136,
        1,0,0,0,97,100,3,12,6,0,98,100,3,14,7,0,99,97,1,0,0,0,99,98,1,0,
        0,0,100,101,1,0,0,0,101,110,5,11,0,0,102,111,3,2,1,0,103,111,3,4,
        2,0,104,111,3,6,3,0,105,111,3,8,4,0,106,111,3,12,6,0,107,111,3,14,
        7,0,108,111,3,16,8,0,109,111,3,18,9,0,110,102,1,0,0,0,110,103,1,
        0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,1,
        0,0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,130,1,0,0,0,112,115,5,
        11,0,0,113,116,3,12,6,0,114,116,3,14,7,0,115,113,1,0,0,0,115,114,
        1,0,0,0,116,117,1,0,0,0,117,126,5,11,0,0,118,127,3,2,1,0,119,127,
        3,4,2,0,120,127,3,6,3,0,121,127,3,8,4,0,122,127,3,12,6,0,123,127,
        3,14,7,0,124,127,3,16,8,0,125,127,3,18,9,0,126,118,1,0,0,0,126,119,
        1,0,0,0,126,120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,126,123,
        1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,129,1,0,0,0,128,112,
        1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,130,131,1,0,0,0,131,134,
        1,0,0,0,132,130,1,0,0,0,133,135,5,11,0,0,134,133,1,0,0,0,134,135,
        1,0,0,0,135,137,1,0,0,0,136,99,1,0,0,0,136,137,1,0,0,0,137,138,1,
        0,0,0,138,139,5,3,0,0,139,17,1,0,0,0,140,142,5,4,0,0,141,143,5,11,
        0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,173,1,0,0,0,144,153,3,2,
        1,0,145,153,3,4,2,0,146,153,3,6,3,0,147,153,3,8,4,0,148,153,3,12,
        6,0,149,153,3,14,7,0,150,153,3,16,8,0,151,153,3,18,9,0,152,144,1,
        0,0,0,152,145,1,0,0,0,152,146,1,0,0,0,152,147,1,0,0,0,152,148,1,
        0,0,0,152,149,1,0,0,0,152,150,1,0,0,0,152,151,1,0,0,0,153,167,1,
        0,0,0,154,163,5,11,0,0,155,164,3,2,1,0,156,164,3,4,2,0,157,164,3,
        6,3,0,158,164,3,8,4,0,159,164,3,12,6,0,160,164,3,14,7,0,161,164,
        3,16,8,0,162,164,3,18,9,0,163,155,1,0,0,0,163,156,1,0,0,0,163,157,
        1,0,0,0,163,158,1,0,0,0,163,159,1,0,0,0,163,160,1,0,0,0,163,161,
        1,0,0,0,163,162,1,0,0,0,164,166,1,0,0,0,165,154,1,0,0,0,166,169,
        1,0,0,0,167,165,1,0,0,0,167,168,1,0,0,0,168,171,1,0,0,0,169,167,
        1,0,0,0,170,172,5,11,0,0,171,170,1,0,0,0,171,172,1,0,0,0,172,174,
        1,0,0,0,173,152,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,
        5,5,0,0,176,19,1,0,0,0,26,21,24,27,31,42,47,58,62,66,68,71,74,95,
        99,110,115,126,130,134,136,142,152,163,167,171,173
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
    public OBJ_OPEN(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.OBJ_OPEN, 0);
    }
    public OBJ_CLOSE(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.OBJ_CLOSE, 0);
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
