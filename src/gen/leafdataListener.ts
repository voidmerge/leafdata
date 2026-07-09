
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { LeafdataContext } from "./leafdataParser.js";
import { V_nullContext } from "./leafdataParser.js";
import { V_boolContext } from "./leafdataParser.js";
import { V_identContext } from "./leafdataParser.js";
import { V_strContext } from "./leafdataParser.js";
import { V_objContext } from "./leafdataParser.js";
import { V_arrContext } from "./leafdataParser.js";
import { Obj_propsContext } from "./leafdataParser.js";
import { PropContext } from "./leafdataParser.js";
import { Arr_itemsContext } from "./leafdataParser.js";
import { ItemContext } from "./leafdataParser.js";
import { NotesContext } from "./leafdataParser.js";
import { AssignContext } from "./leafdataParser.js";
import { KeyContext } from "./leafdataParser.js";
import { ValContext } from "./leafdataParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `leafdataParser`.
 */
export class leafdataListener implements ParseTreeListener {
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
    /**
     * Enter a parse tree produced by `leafdataParser.obj_props`.
     * @param ctx the parse tree
     */
    enterObj_props?: (ctx: Obj_propsContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.obj_props`.
     * @param ctx the parse tree
     */
    exitObj_props?: (ctx: Obj_propsContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.prop`.
     * @param ctx the parse tree
     */
    enterProp?: (ctx: PropContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.prop`.
     * @param ctx the parse tree
     */
    exitProp?: (ctx: PropContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.arr_items`.
     * @param ctx the parse tree
     */
    enterArr_items?: (ctx: Arr_itemsContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.arr_items`.
     * @param ctx the parse tree
     */
    exitArr_items?: (ctx: Arr_itemsContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.item`.
     * @param ctx the parse tree
     */
    enterItem?: (ctx: ItemContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.item`.
     * @param ctx the parse tree
     */
    exitItem?: (ctx: ItemContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.notes`.
     * @param ctx the parse tree
     */
    enterNotes?: (ctx: NotesContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.notes`.
     * @param ctx the parse tree
     */
    exitNotes?: (ctx: NotesContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.assign`.
     * @param ctx the parse tree
     */
    enterAssign?: (ctx: AssignContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.assign`.
     * @param ctx the parse tree
     */
    exitAssign?: (ctx: AssignContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.key`.
     * @param ctx the parse tree
     */
    enterKey?: (ctx: KeyContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.key`.
     * @param ctx the parse tree
     */
    exitKey?: (ctx: KeyContext) => void;
    /**
     * Enter a parse tree produced by `leafdataParser.val`.
     * @param ctx the parse tree
     */
    enterVal?: (ctx: ValContext) => void;
    /**
     * Exit a parse tree produced by `leafdataParser.val`.
     * @param ctx the parse tree
     */
    exitVal?: (ctx: ValContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

