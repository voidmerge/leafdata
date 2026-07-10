
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { LeafdataContext } from "./leafdataParser.js";
import { V_nullContext } from "./leafdataParser.js";
import { V_boolContext } from "./leafdataParser.js";
import { V_f64Context } from "./leafdataParser.js";
import { V_bigintContext } from "./leafdataParser.js";
import { V_bigint_valContext } from "./leafdataParser.js";
import { V_binpctContext } from "./leafdataParser.js";
import { V_binpct_valContext } from "./leafdataParser.js";
import { V_binb64Context } from "./leafdataParser.js";
import { V_binb64_valContext } from "./leafdataParser.js";
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
     * Enter a parse tree produced by `leafdataParser.v_binpct`.
     * @param ctx the parse tree
     */
    enterV_binpct?: (ctx: V_binpctContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_binpct`.
     * @param ctx the parse tree
     */
    exitV_binpct?: (ctx: V_binpctContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_binpct_val`.
     * @param ctx the parse tree
     */
    enterV_binpct_val?: (ctx: V_binpct_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_binpct_val`.
     * @param ctx the parse tree
     */
    exitV_binpct_val?: (ctx: V_binpct_valContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_binb64`.
     * @param ctx the parse tree
     */
    enterV_binb64?: (ctx: V_binb64Context) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_binb64`.
     * @param ctx the parse tree
     */
    exitV_binb64?: (ctx: V_binb64Context) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.v_binb64_val`.
     * @param ctx the parse tree
     */
    enterV_binb64_val?: (ctx: V_binb64_valContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.v_binb64_val`.
     * @param ctx the parse tree
     */
    exitV_binb64_val?: (ctx: V_binb64_valContext) => void;
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

