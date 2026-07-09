
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { leafdataListener } from "./leafdataListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class leafdataParser extends antlr.Parser {
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
    public static readonly RULE_leafdata = 0;
    public static readonly RULE_v_null = 1;
    public static readonly RULE_v_bool = 2;
    public static readonly RULE_v_ident = 3;
    public static readonly RULE_v_str = 4;
    public static readonly RULE_v_obj = 5;
    public static readonly RULE_v_arr = 6;
    public static readonly RULE_prop = 7;
    public static readonly RULE_item = 8;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'['", "']'", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "NULL", 
        "TRUE", "FALSE", "IDENT", "STR", "EQ", "NOTES"
    ];
    public static readonly ruleNames = [
        "leafdata", "v_null", "v_bool", "v_ident", "v_str", "v_obj", "v_arr", 
        "prop", "item",
    ];

    public get grammarFileName(): string { return "leafdata.g4"; }
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
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 18;
                    this.prop();
                    }
                    }
                }
                this.state = 23;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 0, this.context);
            }
            this.state = 25;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 24;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 27;
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
            this.state = 29;
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
            this.state = 31;
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 7)) {
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
            this.state = 33;
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
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 35;
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
        this.enterRule(localContext, 10, leafdataParser.RULE_v_obj);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 37;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 41;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 38;
                    this.prop();
                    }
                    }
                }
                this.state = 43;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 2, this.context);
            }
            this.state = 45;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 44;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 47;
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
            this.state = 49;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 53;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 50;
                    this.item();
                    }
                    }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 4, this.context);
            }
            this.state = 57;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 56;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 59;
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
    public prop(): PropContext {
        let localContext = new PropContext(this.context, this.state);
        this.enterRule(localContext, 14, leafdataParser.RULE_prop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 61;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 66;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case leafdataParser.IDENT:
                {
                this.state = 64;
                this.v_ident();
                }
                break;
            case leafdataParser.STR:
                {
                this.state = 65;
                this.v_str();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 68;
            this.match(leafdataParser.EQ);
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case leafdataParser.NULL:
                {
                this.state = 69;
                this.v_null();
                }
                break;
            case leafdataParser.TRUE:
            case leafdataParser.FALSE:
                {
                this.state = 70;
                this.v_bool();
                }
                break;
            case leafdataParser.IDENT:
                {
                this.state = 71;
                this.v_ident();
                }
                break;
            case leafdataParser.STR:
                {
                this.state = 72;
                this.v_str();
                }
                break;
            case leafdataParser.OBJ_OPEN:
                {
                this.state = 73;
                this.v_obj();
                }
                break;
            case leafdataParser.ARR_OPEN:
                {
                this.state = 74;
                this.v_arr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public item(): ItemContext {
        let localContext = new ItemContext(this.context, this.state);
        this.enterRule(localContext, 16, leafdataParser.RULE_item);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 78;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 77;
                this.match(leafdataParser.NOTES);
                }
            }

            this.state = 86;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case leafdataParser.NULL:
                {
                this.state = 80;
                this.v_null();
                }
                break;
            case leafdataParser.TRUE:
            case leafdataParser.FALSE:
                {
                this.state = 81;
                this.v_bool();
                }
                break;
            case leafdataParser.IDENT:
                {
                this.state = 82;
                this.v_ident();
                }
                break;
            case leafdataParser.STR:
                {
                this.state = 83;
                this.v_str();
                }
                break;
            case leafdataParser.OBJ_OPEN:
                {
                this.state = 84;
                this.v_obj();
                }
                break;
            case leafdataParser.ARR_OPEN:
                {
                this.state = 85;
                this.v_arr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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

    public static readonly _serializedATN: number[] = [
        4,1,11,89,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,3,0,26,8,0,
        1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,5,5,40,8,5,10,5,
        12,5,43,9,5,1,5,3,5,46,8,5,1,5,1,5,1,6,1,6,5,6,52,8,6,10,6,12,6,
        55,9,6,1,6,3,6,58,8,6,1,6,1,6,1,7,3,7,63,8,7,1,7,1,7,3,7,67,8,7,
        1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,76,8,7,1,8,3,8,79,8,8,1,8,1,8,1,
        8,1,8,1,8,1,8,3,8,87,8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,
        6,7,98,0,21,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,33,1,0,0,0,8,35,
        1,0,0,0,10,37,1,0,0,0,12,49,1,0,0,0,14,62,1,0,0,0,16,78,1,0,0,0,
        18,20,3,14,7,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,
        0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,24,26,5,11,0,0,25,24,1,0,0,0,25,
        26,1,0,0,0,26,27,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,0,29,30,5,5,0,
        0,30,3,1,0,0,0,31,32,7,0,0,0,32,5,1,0,0,0,33,34,5,8,0,0,34,7,1,0,
        0,0,35,36,5,9,0,0,36,9,1,0,0,0,37,41,5,1,0,0,38,40,3,14,7,0,39,38,
        1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,45,1,0,0,0,
        43,41,1,0,0,0,44,46,5,11,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,
        0,0,0,47,48,5,2,0,0,48,11,1,0,0,0,49,53,5,3,0,0,50,52,3,16,8,0,51,
        50,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,57,1,0,0,
        0,55,53,1,0,0,0,56,58,5,11,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,
        1,0,0,0,59,60,5,4,0,0,60,13,1,0,0,0,61,63,5,11,0,0,62,61,1,0,0,0,
        62,63,1,0,0,0,63,66,1,0,0,0,64,67,3,6,3,0,65,67,3,8,4,0,66,64,1,
        0,0,0,66,65,1,0,0,0,67,68,1,0,0,0,68,75,5,10,0,0,69,76,3,2,1,0,70,
        76,3,4,2,0,71,76,3,6,3,0,72,76,3,8,4,0,73,76,3,10,5,0,74,76,3,12,
        6,0,75,69,1,0,0,0,75,70,1,0,0,0,75,71,1,0,0,0,75,72,1,0,0,0,75,73,
        1,0,0,0,75,74,1,0,0,0,76,15,1,0,0,0,77,79,5,11,0,0,78,77,1,0,0,0,
        78,79,1,0,0,0,79,86,1,0,0,0,80,87,3,2,1,0,81,87,3,4,2,0,82,87,3,
        6,3,0,83,87,3,8,4,0,84,87,3,10,5,0,85,87,3,12,6,0,86,80,1,0,0,0,
        86,81,1,0,0,0,86,82,1,0,0,0,86,83,1,0,0,0,86,84,1,0,0,0,86,85,1,
        0,0,0,87,17,1,0,0,0,11,21,25,41,45,53,57,62,66,75,78,86
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
    public prop(): PropContext[];
    public prop(i: number): PropContext | null;
    public prop(i?: number): PropContext[] | PropContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropContext);
        }

        return this.getRuleContext(i, PropContext);
    }
    public NOTES(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.NOTES, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_leafdata;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterLeafdata) {
             listener.enterLeafdata(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_null) {
             listener.enterV_null(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_bool) {
             listener.enterV_bool(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_ident) {
             listener.enterV_ident(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_str) {
             listener.enterV_str(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public prop(): PropContext[];
    public prop(i: number): PropContext | null;
    public prop(i?: number): PropContext[] | PropContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropContext);
        }

        return this.getRuleContext(i, PropContext);
    }
    public NOTES(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.NOTES, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_obj;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_obj) {
             listener.enterV_obj(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
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
    public item(): ItemContext[];
    public item(i: number): ItemContext | null;
    public item(i?: number): ItemContext[] | ItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }

        return this.getRuleContext(i, ItemContext);
    }
    public NOTES(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.NOTES, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_v_arr;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterV_arr) {
             listener.enterV_arr(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitV_arr) {
             listener.exitV_arr(this);
        }
    }
}


export class PropContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(leafdataParser.EQ, 0)!;
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
    public v_null(): V_nullContext | null {
        return this.getRuleContext(0, V_nullContext);
    }
    public v_bool(): V_boolContext | null {
        return this.getRuleContext(0, V_boolContext);
    }
    public v_obj(): V_objContext | null {
        return this.getRuleContext(0, V_objContext);
    }
    public v_arr(): V_arrContext | null {
        return this.getRuleContext(0, V_arrContext);
    }
    public NOTES(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.NOTES, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_prop;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterProp) {
             listener.enterProp(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitProp) {
             listener.exitProp(this);
        }
    }
}


export class ItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public v_null(): V_nullContext | null {
        return this.getRuleContext(0, V_nullContext);
    }
    public v_bool(): V_boolContext | null {
        return this.getRuleContext(0, V_boolContext);
    }
    public v_ident(): V_identContext | null {
        return this.getRuleContext(0, V_identContext);
    }
    public v_str(): V_strContext | null {
        return this.getRuleContext(0, V_strContext);
    }
    public v_obj(): V_objContext | null {
        return this.getRuleContext(0, V_objContext);
    }
    public v_arr(): V_arrContext | null {
        return this.getRuleContext(0, V_arrContext);
    }
    public NOTES(): antlr.TerminalNode | null {
        return this.getToken(leafdataParser.NOTES, 0);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_item;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterItem) {
             listener.enterItem(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitItem) {
             listener.exitItem(this);
        }
    }
}
