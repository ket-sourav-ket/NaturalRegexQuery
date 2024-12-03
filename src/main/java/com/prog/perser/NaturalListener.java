// Generated from Natural.g4 by ANTLR 4.13.2
package com.prog.perser;

import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link NaturalParser}.
 */
public interface NaturalListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the {@code quantUB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterQuantUB(NaturalParser.QuantUBContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantUB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitQuantUB(NaturalParser.QuantUBContext ctx);
	/**
	 * Enter a parse tree produced by the {@code number}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterNumber(NaturalParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by the {@code number}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitNumber(NaturalParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by the {@code connector}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterConnector(NaturalParser.ConnectorContext ctx);
	/**
	 * Exit a parse tree produced by the {@code connector}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitConnector(NaturalParser.ConnectorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code strt}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterStrt(NaturalParser.StrtContext ctx);
	/**
	 * Exit a parse tree produced by the {@code strt}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitStrt(NaturalParser.StrtContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dot}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterDot(NaturalParser.DotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dot}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitDot(NaturalParser.DotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code prefixCon}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterPrefixCon(NaturalParser.PrefixConContext ctx);
	/**
	 * Exit a parse tree produced by the {@code prefixCon}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitPrefixCon(NaturalParser.PrefixConContext ctx);
	/**
	 * Enter a parse tree produced by the {@code end}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterEnd(NaturalParser.EndContext ctx);
	/**
	 * Exit a parse tree produced by the {@code end}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitEnd(NaturalParser.EndContext ctx);
	/**
	 * Enter a parse tree produced by the {@code charClass}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterCharClass(NaturalParser.CharClassContext ctx);
	/**
	 * Exit a parse tree produced by the {@code charClass}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitCharClass(NaturalParser.CharClassContext ctx);
	/**
	 * Enter a parse tree produced by the {@code quantB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterQuantB(NaturalParser.QuantBContext ctx);
	/**
	 * Exit a parse tree produced by the {@code quantB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitQuantB(NaturalParser.QuantBContext ctx);
	/**
	 * Enter a parse tree produced by the {@code literal}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(NaturalParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code literal}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(NaturalParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code connectorSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void enterConnectorSimpl(NaturalParser.ConnectorSimplContext ctx);
	/**
	 * Exit a parse tree produced by the {@code connectorSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void exitConnectorSimpl(NaturalParser.ConnectorSimplContext ctx);
	/**
	 * Enter a parse tree produced by the {@code literalSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void enterLiteralSimpl(NaturalParser.LiteralSimplContext ctx);
	/**
	 * Exit a parse tree produced by the {@code literalSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void exitLiteralSimpl(NaturalParser.LiteralSimplContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dotSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void enterDotSimpl(NaturalParser.DotSimplContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dotSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void exitDotSimpl(NaturalParser.DotSimplContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numberSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void enterNumberSimpl(NaturalParser.NumberSimplContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numberSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void exitNumberSimpl(NaturalParser.NumberSimplContext ctx);
	/**
	 * Enter a parse tree produced by the {@code charClassSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void enterCharClassSimpl(NaturalParser.CharClassSimplContext ctx);
	/**
	 * Exit a parse tree produced by the {@code charClassSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 */
	void exitCharClassSimpl(NaturalParser.CharClassSimplContext ctx);
	/**
	 * Enter a parse tree produced by {@link NaturalParser#con}.
	 * @param ctx the parse tree
	 */
	void enterCon(NaturalParser.ConContext ctx);
	/**
	 * Exit a parse tree produced by {@link NaturalParser#con}.
	 * @param ctx the parse tree
	 */
	void exitCon(NaturalParser.ConContext ctx);
	/**
	 * Enter a parse tree produced by the {@code between}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void enterBetween(NaturalParser.BetweenContext ctx);
	/**
	 * Exit a parse tree produced by the {@code between}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void exitBetween(NaturalParser.BetweenContext ctx);
	/**
	 * Enter a parse tree produced by the {@code exact}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void enterExact(NaturalParser.ExactContext ctx);
	/**
	 * Exit a parse tree produced by the {@code exact}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void exitExact(NaturalParser.ExactContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lower}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void enterLower(NaturalParser.LowerContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lower}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 */
	void exitLower(NaturalParser.LowerContext ctx);
	/**
	 * Enter a parse tree produced by the {@code plus}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 */
	void enterPlus(NaturalParser.PlusContext ctx);
	/**
	 * Exit a parse tree produced by the {@code plus}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 */
	void exitPlus(NaturalParser.PlusContext ctx);
	/**
	 * Enter a parse tree produced by the {@code kleene}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 */
	void enterKleene(NaturalParser.KleeneContext ctx);
	/**
	 * Exit a parse tree produced by the {@code kleene}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 */
	void exitKleene(NaturalParser.KleeneContext ctx);
}