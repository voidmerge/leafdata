
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { LeafdataContext } from "./leafdataParser.js";
import { V_nullContext } from "./leafdataParser.js";
import { V_boolContext } from "./leafdataParser.js";
import { V_f64Context } from "./leafdataParser.js";
import { V_bigintContext } from "./leafdataParser.js";
import { V_bigint_valContext } from "./leafdataParser.js";
import { V_pctContext } from "./leafdataParser.js";
import { V_pct_valContext } from "./leafdataParser.js";
import { V_b64Context } from "./leafdataParser.js";
import { V_b64_valContext } from "./leafdataParser.js";
import { V_identContext } from "./leafdataParser.js";
import { V_strContext } from "./leafdataParser.js";
import { V_objContext } from "./leafdataParser.js";
import { V_arrContext } from "./leafdataParser.js";


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
     * Enter a parse tree produced by `leafdataParser.v_null`.
     * @param ctx the parse tree
     */
    enterV_null?: (ctx: V_nullContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_null`.
     * @param ctx the parse tree
     */
    exitV_null?: (ctx: V_nullContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_bool`.
     * @param ctx the parse tree
     */
    enterV_bool?: (ctx: V_boolContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_bool`.
     * @param ctx the parse tree
     */
    exitV_bool?: (ctx: V_boolContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_f64`.
     * @param ctx the parse tree
     */
    enterV_f64?: (ctx: V_f64Context) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_f64`.
     * @param ctx the parse tree
     */
    exitV_f64?: (ctx: V_f64Context) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_bigint`.
     * @param ctx the parse tree
     */
    enterV_bigint?: (ctx: V_bigintContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_bigint`.
     * @param ctx the parse tree
     */
    exitV_bigint?: (ctx: V_bigintContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_bigint_val`.
     * @param ctx the parse tree
     */
    enterV_bigint_val?: (ctx: V_bigint_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_bigint_val`.
     * @param ctx the parse tree
     */
    exitV_bigint_val?: (ctx: V_bigint_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_pct`.
     * @param ctx the parse tree
     */
    enterV_pct?: (ctx: V_pctContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_pct`.
     * @param ctx the parse tree
     */
    exitV_pct?: (ctx: V_pctContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_pct_val`.
     * @param ctx the parse tree
     */
    enterV_pct_val?: (ctx: V_pct_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_pct_val`.
     * @param ctx the parse tree
     */
    exitV_pct_val?: (ctx: V_pct_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_b64`.
     * @param ctx the parse tree
     */
    enterV_b64?: (ctx: V_b64Context) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_b64`.
     * @param ctx the parse tree
     */
    exitV_b64?: (ctx: V_b64Context) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_b64_val`.
     * @param ctx the parse tree
     */
    enterV_b64_val?: (ctx: V_b64_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_b64_val`.
     * @param ctx the parse tree
     */
    exitV_b64_val?: (ctx: V_b64_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_ident`.
     * @param ctx the parse tree
     */
    enterV_ident?: (ctx: V_identContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_ident`.
     * @param ctx the parse tree
     */
    exitV_ident?: (ctx: V_identContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_str`.
     * @param ctx the parse tree
     */
    enterV_str?: (ctx: V_strContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_str`.
     * @param ctx the parse tree
     */
    exitV_str?: (ctx: V_strContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_obj`.
     * @param ctx the parse tree
     */
    enterV_obj?: (ctx: V_objContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_obj`.
     * @param ctx the parse tree
     */
    exitV_obj?: (ctx: V_objContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_arr`.
     * @param ctx the parse tree
     */
    enterV_arr?: (ctx: V_arrContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_arr`.
     * @param ctx the parse tree
     */
    exitV_arr?: (ctx: V_arrContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

