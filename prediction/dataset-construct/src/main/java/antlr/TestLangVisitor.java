// Generated from D:/study/semanticDSL/gen2/untitled/src/main/java/org/example/TestLang.g4 by ANTLR 4.13.1
package antlr;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link TestLangParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface TestLangVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link TestLangParser#prog}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProg(TestLangParser.ProgContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(TestLangParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#simpleClassDef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSimpleClassDef(TestLangParser.SimpleClassDefContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#functionDef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDef(TestLangParser.FunctionDefContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#parametersDef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParametersDef(TestLangParser.ParametersDefContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#constDef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstDef(TestLangParser.ConstDefContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#fieldDef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFieldDef(TestLangParser.FieldDefContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#assignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignment(TestLangParser.AssignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#ifStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStmt(TestLangParser.IfStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#forStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForStmt(TestLangParser.ForStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#wihilStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWihilStmt(TestLangParser.WihilStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#returnStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStmt(TestLangParser.ReturnStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#evaluationStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEvaluationStmt(TestLangParser.EvaluationStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#refStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRefStmt(TestLangParser.RefStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#functionCall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCall(TestLangParser.FunctionCallContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#constCall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstCall(TestLangParser.ConstCallContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#forValueStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForValueStmt(TestLangParser.ForValueStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#newStmt}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNewStmt(TestLangParser.NewStmtContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(TestLangParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#parameters}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameters(TestLangParser.ParametersContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(TestLangParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondition(TestLangParser.ConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitType(TestLangParser.TypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#arrayType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayType(TestLangParser.ArrayTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#tupleType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleType(TestLangParser.TupleTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#indexer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIndexer(TestLangParser.IndexerContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#classType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassType(TestLangParser.ClassTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(TestLangParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#integerLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntegerLiteral(TestLangParser.IntegerLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#array}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArray(TestLangParser.ArrayContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#tuple}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTuple(TestLangParser.TupleContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#element}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElement(TestLangParser.ElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link TestLangParser#errorLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitErrorLiteral(TestLangParser.ErrorLiteralContext ctx);
}