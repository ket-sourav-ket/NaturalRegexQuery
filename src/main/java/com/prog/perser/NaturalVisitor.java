// Generated from Natural.g4 by ANTLR 4.13.2

package com.prog.perser;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link NaturalParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface NaturalVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by the {@code quantUB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuantUB(NaturalParser.QuantUBContext ctx);
	/**
	 * Visit a parse tree produced by the {@code number}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(NaturalParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by the {@code connector}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConnector(NaturalParser.ConnectorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code strt}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStrt(NaturalParser.StrtContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dot}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDot(NaturalParser.DotContext ctx);
	/**
	 * Visit a parse tree produced by the {@code prefixCon}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixCon(NaturalParser.PrefixConContext ctx);
	/**
	 * Visit a parse tree produced by the {@code end}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnd(NaturalParser.EndContext ctx);
	/**
	 * Visit a parse tree produced by the {@code charClass}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCharClass(NaturalParser.CharClassContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quantB}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuantB(NaturalParser.QuantBContext ctx);
	/**
	 * Visit a parse tree produced by the {@code literal}
	 * labeled alternative in {@link NaturalParser#sentence}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(NaturalParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by the {@code connectorSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConnectorSimpl(NaturalParser.ConnectorSimplContext ctx);
	/**
	 * Visit a parse tree produced by the {@code literalSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteralSimpl(NaturalParser.LiteralSimplContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dotSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDotSimpl(NaturalParser.DotSimplContext ctx);
	/**
	 * Visit a parse tree produced by the {@code numberSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumberSimpl(NaturalParser.NumberSimplContext ctx);
	/**
	 * Visit a parse tree produced by the {@code charClassSimpl}
	 * labeled alternative in {@link NaturalParser#simplSent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCharClassSimpl(NaturalParser.CharClassSimplContext ctx);
	/**
	 * Visit a parse tree produced by {@link NaturalParser#con}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCon(NaturalParser.ConContext ctx);
	/**
	 * Visit a parse tree produced by the {@code between}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBetween(NaturalParser.BetweenContext ctx);
	/**
	 * Visit a parse tree produced by the {@code exact}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExact(NaturalParser.ExactContext ctx);
	/**
	 * Visit a parse tree produced by the {@code lower}
	 * labeled alternative in {@link NaturalParser#quantifierB}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLower(NaturalParser.LowerContext ctx);
	/**
	 * Visit a parse tree produced by the {@code plus}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlus(NaturalParser.PlusContext ctx);
	/**
	 * Visit a parse tree produced by the {@code kleene}
	 * labeled alternative in {@link NaturalParser#quantifierUB}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKleene(NaturalParser.KleeneContext ctx);
}