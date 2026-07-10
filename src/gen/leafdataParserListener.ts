
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { LeafdataContext } from "./leafdataParser.js";
import { NullContext } from "./leafdataParser.js";
import { BoolContext } from "./leafdataParser.js";
import { F64Context } from "./leafdataParser.js";
import { BigintContext } from "./leafdataParser.js";
import { Bigint_valContext } from "./leafdataParser.js";
import { PctContext } from "./leafdataParser.js";
import { Pct_valContext } from "./leafdataParser.js";
import { B64Context } from "./leafdataParser.js";
import { B64_valContext } from "./leafdataParser.js";
import { IdentContext } from "./leafdataParser.js";
import { StrContext } from "./leafdataParser.js";
import { ObjContext } from "./leafdataParser.js";
import { ArrContext } from "./leafdataParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `leafdataParser`.
 */
export class leafdataParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `leafdataParser.leafdata`.
     * @param ctx the parse tree
     */
    enterLeafdata?: (ctx: LeafdataContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.leafdata`.
     * @param ctx the parse tree
     */
    exitLeafdata?: (ctx: LeafdataContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.null`.
     * @param ctx the parse tree
     */
    enterNull?: (ctx: NullContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.null`.
     * @param ctx the parse tree
     */
    exitNull?: (ctx: NullContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.bool`.
     * @param ctx the parse tree
     */
    enterBool?: (ctx: BoolContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.bool`.
     * @param ctx the parse tree
     */
    exitBool?: (ctx: BoolContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.f64`.
     * @param ctx the parse tree
     */
    enterF64?: (ctx: F64Context) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.f64`.
     * @param ctx the parse tree
     */
    exitF64?: (ctx: F64Context) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.bigint`.
     * @param ctx the parse tree
     */
    enterBigint?: (ctx: BigintContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.bigint`.
     * @param ctx the parse tree
     */
    exitBigint?: (ctx: BigintContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.bigint_val`.
     * @param ctx the parse tree
     */
    enterBigint_val?: (ctx: Bigint_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.bigint_val`.
     * @param ctx the parse tree
     */
    exitBigint_val?: (ctx: Bigint_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.pct`.
     * @param ctx the parse tree
     */
    enterPct?: (ctx: PctContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.pct`.
     * @param ctx the parse tree
     */
    exitPct?: (ctx: PctContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.pct_val`.
     * @param ctx the parse tree
     */
    enterPct_val?: (ctx: Pct_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.pct_val`.
     * @param ctx the parse tree
     */
    exitPct_val?: (ctx: Pct_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.b64`.
     * @param ctx the parse tree
     */
    enterB64?: (ctx: B64Context) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.b64`.
     * @param ctx the parse tree
     */
    exitB64?: (ctx: B64Context) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.b64_val`.
     * @param ctx the parse tree
     */
    enterB64_val?: (ctx: B64_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.b64_val`.
     * @param ctx the parse tree
     */
    exitB64_val?: (ctx: B64_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.ident`.
     * @param ctx the parse tree
     */
    enterIdent?: (ctx: IdentContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.ident`.
     * @param ctx the parse tree
     */
    exitIdent?: (ctx: IdentContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.str`.
     * @param ctx the parse tree
     */
    enterStr?: (ctx: StrContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.str`.
     * @param ctx the parse tree
     */
    exitStr?: (ctx: StrContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.obj`.
     * @param ctx the parse tree
     */
    enterObj?: (ctx: ObjContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.obj`.
     * @param ctx the parse tree
     */
    exitObj?: (ctx: ObjContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.arr`.
     * @param ctx the parse tree
     */
    enterArr?: (ctx: ArrContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.arr`.
     * @param ctx the parse tree
     */
    exitArr?: (ctx: ArrContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

