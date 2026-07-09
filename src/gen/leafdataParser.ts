
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
    public static readonly RULE_obj_props = 7;
    public static readonly RULE_prop = 8;
    public static readonly RULE_arr_items = 9;
    public static readonly RULE_item = 10;
    public static readonly RULE_notes = 11;
    public static readonly RULE_assign = 12;
    public static readonly RULE_key = 13;
    public static readonly RULE_val = 14;

    public static readonly literalNames = [
        null, "'{'", "'}'", "'['", "']'", "'null'", "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, "OBJ_OPEN", "OBJ_CLOSE", "ARR_OPEN", "ARR_CLOSE", "NULL", 
        "TRUE", "FALSE", "IDENT", "STR", "EQ", "NOTES"
    ];
    public static readonly ruleNames = [
        "leafdata", "v_null", "v_bool", "v_ident", "v_str", "v_obj", "v_arr", 
        "obj_props", "prop", "arr_items", "item", "notes", "assign", "key", 
        "val",
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 31;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2816) !== 0)) {
                {
                this.state = 30;
                this.obj_props();
                }
            }

            this.state = 33;
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
            this.state = 35;
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
            this.state = 37;
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
            this.state = 39;
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
            this.state = 41;
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.match(leafdataParser.OBJ_OPEN);
            this.state = 45;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2816) !== 0)) {
                {
                this.state = 44;
                this.obj_props();
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
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 49;
            this.match(leafdataParser.ARR_OPEN);
            this.state = 51;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3050) !== 0)) {
                {
                this.state = 50;
                this.arr_items();
                }
            }

            this.state = 53;
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
    public obj_props(): Obj_propsContext {
        let localContext = new Obj_propsContext(this.context, this.state);
        this.enterRule(localContext, 14, leafdataParser.RULE_obj_props);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 55;
                    this.prop();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 58;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 60;
                this.notes();
                }
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
    public prop(): PropContext {
        let localContext = new PropContext(this.context, this.state);
        this.enterRule(localContext, 16, leafdataParser.RULE_prop);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 63;
                this.notes();
                }
            }

            this.state = 66;
            this.key();
            this.state = 67;
            this.assign();
            this.state = 68;
            this.val();
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
    public arr_items(): Arr_itemsContext {
        let localContext = new Arr_itemsContext(this.context, this.state);
        this.enterRule(localContext, 18, leafdataParser.RULE_arr_items);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 71;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 70;
                    this.item();
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 73;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 76;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 75;
                this.notes();
                }
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
        this.enterRule(localContext, 20, leafdataParser.RULE_item);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 79;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 78;
                this.notes();
                }
            }

            this.state = 81;
            this.val();
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
    public notes(): NotesContext {
        let localContext = new NotesContext(this.context, this.state);
        this.enterRule(localContext, 22, leafdataParser.RULE_notes);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.match(leafdataParser.NOTES);
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
    public assign(): AssignContext {
        let localContext = new AssignContext(this.context, this.state);
        this.enterRule(localContext, 24, leafdataParser.RULE_assign);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 85;
            this.match(leafdataParser.EQ);
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
    public key(): KeyContext {
        let localContext = new KeyContext(this.context, this.state);
        this.enterRule(localContext, 26, leafdataParser.RULE_key);
        try {
            this.state = 89;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case leafdataParser.IDENT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 87;
                this.v_ident();
                }
                break;
            case leafdataParser.STR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 88;
                this.v_str();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
    public val(): ValContext {
        let localContext = new ValContext(this.context, this.state);
        this.enterRule(localContext, 28, leafdataParser.RULE_val);
        try {
            this.state = 97;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case leafdataParser.NULL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 91;
                this.v_null();
                }
                break;
            case leafdataParser.TRUE:
            case leafdataParser.FALSE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 92;
                this.v_bool();
                }
                break;
            case leafdataParser.IDENT:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 93;
                this.v_ident();
                }
                break;
            case leafdataParser.STR:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 94;
                this.v_str();
                }
                break;
            case leafdataParser.OBJ_OPEN:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 95;
                this.v_obj();
                }
                break;
            case leafdataParser.ARR_OPEN:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 96;
                this.v_arr();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
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
        4,1,11,100,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,1,0,3,0,32,8,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,
        1,5,1,5,3,5,46,8,5,1,5,1,5,1,6,1,6,3,6,52,8,6,1,6,1,6,1,7,4,7,57,
        8,7,11,7,12,7,58,1,7,3,7,62,8,7,1,8,3,8,65,8,8,1,8,1,8,1,8,1,8,1,
        9,4,9,72,8,9,11,9,12,9,73,1,9,3,9,77,8,9,1,10,3,10,80,8,10,1,10,
        1,10,1,11,1,11,1,12,1,12,1,13,1,13,3,13,90,8,13,1,14,1,14,1,14,1,
        14,1,14,1,14,3,14,98,8,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,0,1,1,0,6,7,99,0,31,1,0,0,0,2,35,1,0,0,0,4,37,1,0,0,
        0,6,39,1,0,0,0,8,41,1,0,0,0,10,43,1,0,0,0,12,49,1,0,0,0,14,56,1,
        0,0,0,16,64,1,0,0,0,18,71,1,0,0,0,20,79,1,0,0,0,22,83,1,0,0,0,24,
        85,1,0,0,0,26,89,1,0,0,0,28,97,1,0,0,0,30,32,3,14,7,0,31,30,1,0,
        0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,0,0,1,34,1,1,0,0,0,35,36,
        5,5,0,0,36,3,1,0,0,0,37,38,7,0,0,0,38,5,1,0,0,0,39,40,5,8,0,0,40,
        7,1,0,0,0,41,42,5,9,0,0,42,9,1,0,0,0,43,45,5,1,0,0,44,46,3,14,7,
        0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,2,0,0,48,11,
        1,0,0,0,49,51,5,3,0,0,50,52,3,18,9,0,51,50,1,0,0,0,51,52,1,0,0,0,
        52,53,1,0,0,0,53,54,5,4,0,0,54,13,1,0,0,0,55,57,3,16,8,0,56,55,1,
        0,0,0,57,58,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,
        62,3,22,11,0,61,60,1,0,0,0,61,62,1,0,0,0,62,15,1,0,0,0,63,65,3,22,
        11,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,3,26,13,0,67,
        68,3,24,12,0,68,69,3,28,14,0,69,17,1,0,0,0,70,72,3,20,10,0,71,70,
        1,0,0,0,72,73,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,76,1,0,0,0,
        75,77,3,22,11,0,76,75,1,0,0,0,76,77,1,0,0,0,77,19,1,0,0,0,78,80,
        3,22,11,0,79,78,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,3,28,14,
        0,82,21,1,0,0,0,83,84,5,11,0,0,84,23,1,0,0,0,85,86,5,10,0,0,86,25,
        1,0,0,0,87,90,3,6,3,0,88,90,3,8,4,0,89,87,1,0,0,0,89,88,1,0,0,0,
        90,27,1,0,0,0,91,98,3,2,1,0,92,98,3,4,2,0,93,98,3,6,3,0,94,98,3,
        8,4,0,95,98,3,10,5,0,96,98,3,12,6,0,97,91,1,0,0,0,97,92,1,0,0,0,
        97,93,1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,0,98,29,1,
        0,0,0,11,31,45,51,58,61,64,73,76,79,89,97
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
    public obj_props(): Obj_propsContext | null {
        return this.getRuleContext(0, Obj_propsContext);
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
    public obj_props(): Obj_propsContext | null {
        return this.getRuleContext(0, Obj_propsContext);
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
    public arr_items(): Arr_itemsContext | null {
        return this.getRuleContext(0, Arr_itemsContext);
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


export class Obj_propsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public prop(): PropContext[];
    public prop(i: number): PropContext | null;
    public prop(i?: number): PropContext[] | PropContext | null {
        if (i === undefined) {
            return this.getRuleContexts(PropContext);
        }

        return this.getRuleContext(i, PropContext);
    }
    public notes(): NotesContext | null {
        return this.getRuleContext(0, NotesContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_obj_props;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterObj_props) {
             listener.enterObj_props(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitObj_props) {
             listener.exitObj_props(this);
        }
    }
}


export class PropContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public key(): KeyContext {
        return this.getRuleContext(0, KeyContext)!;
    }
    public assign(): AssignContext {
        return this.getRuleContext(0, AssignContext)!;
    }
    public val(): ValContext {
        return this.getRuleContext(0, ValContext)!;
    }
    public notes(): NotesContext | null {
        return this.getRuleContext(0, NotesContext);
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


export class Arr_itemsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public item(): ItemContext[];
    public item(i: number): ItemContext | null;
    public item(i?: number): ItemContext[] | ItemContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ItemContext);
        }

        return this.getRuleContext(i, ItemContext);
    }
    public notes(): NotesContext | null {
        return this.getRuleContext(0, NotesContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_arr_items;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterArr_items) {
             listener.enterArr_items(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitArr_items) {
             listener.exitArr_items(this);
        }
    }
}


export class ItemContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public val(): ValContext {
        return this.getRuleContext(0, ValContext)!;
    }
    public notes(): NotesContext | null {
        return this.getRuleContext(0, NotesContext);
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


export class NotesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NOTES(): antlr.TerminalNode {
        return this.getToken(leafdataParser.NOTES, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_notes;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterNotes) {
             listener.enterNotes(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitNotes) {
             listener.exitNotes(this);
        }
    }
}


export class AssignContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode {
        return this.getToken(leafdataParser.EQ, 0)!;
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_assign;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterAssign) {
             listener.enterAssign(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitAssign) {
             listener.exitAssign(this);
        }
    }
}


export class KeyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public v_ident(): V_identContext | null {
        return this.getRuleContext(0, V_identContext);
    }
    public v_str(): V_strContext | null {
        return this.getRuleContext(0, V_strContext);
    }
    public override get ruleIndex(): number {
        return leafdataParser.RULE_key;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterKey) {
             listener.enterKey(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitKey) {
             listener.exitKey(this);
        }
    }
}


export class ValContext extends antlr.ParserRuleContext {
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
    public override get ruleIndex(): number {
        return leafdataParser.RULE_val;
    }
    public override enterRule(listener: leafdataListener): void {
        if(listener.enterVal) {
             listener.enterVal(this);
        }
    }
    public override exitRule(listener: leafdataListener): void {
        if(listener.exitVal) {
             listener.exitVal(this);
        }
    }
}
