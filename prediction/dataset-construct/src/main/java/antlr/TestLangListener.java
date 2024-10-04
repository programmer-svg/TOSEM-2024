// Generated from D:/study/semanticDSL/gen2/untitled/src/main/java/org/example/TestLang.g4 by ANTLR 4.13.1
package antlr;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link TestLangParser}.
 */
public interface TestLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link TestLangParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(TestLangParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(TestLangParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(TestLangParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(TestLangParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#simpleClassDef}.
	 * @param ctx the parse tree
	 */
	void enterSimpleClassDef(TestLangParser.SimpleClassDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#simpleClassDef}.
	 * @param ctx the parse tree
	 */
	void exitSimpleClassDef(TestLangParser.SimpleClassDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDef(TestLangParser.FunctionDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#functionDef}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDef(TestLangParser.FunctionDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#parametersDef}.
	 * @param ctx the parse tree
	 */
	void enterParametersDef(TestLangParser.ParametersDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#parametersDef}.
	 * @param ctx the parse tree
	 */
	void exitParametersDef(TestLangParser.ParametersDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#constDef}.
	 * @param ctx the parse tree
	 */
	void enterConstDef(TestLangParser.ConstDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#constDef}.
	 * @param ctx the parse tree
	 */
	void exitConstDef(TestLangParser.ConstDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#fieldDef}.
	 * @param ctx the parse tree
	 */
	void enterFieldDef(TestLangParser.FieldDefContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#fieldDef}.
	 * @param ctx the parse tree
	 */
	void exitFieldDef(TestLangParser.FieldDefContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(TestLangParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(TestLangParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void enterIfStmt(TestLangParser.IfStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#ifStmt}.
	 * @param ctx the parse tree
	 */
	void exitIfStmt(TestLangParser.IfStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void enterForStmt(TestLangParser.ForStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#forStmt}.
	 * @param ctx the parse tree
	 */
	void exitForStmt(TestLangParser.ForStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#wihilStmt}.
	 * @param ctx the parse tree
	 */
	void enterWihilStmt(TestLangParser.WihilStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#wihilStmt}.
	 * @param ctx the parse tree
	 */
	void exitWihilStmt(TestLangParser.WihilStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void enterReturnStmt(TestLangParser.ReturnStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#returnStmt}.
	 * @param ctx the parse tree
	 */
	void exitReturnStmt(TestLangParser.ReturnStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#evaluationStmt}.
	 * @param ctx the parse tree
	 */
	void enterEvaluationStmt(TestLangParser.EvaluationStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#evaluationStmt}.
	 * @param ctx the parse tree
	 */
	void exitEvaluationStmt(TestLangParser.EvaluationStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#refStmt}.
	 * @param ctx the parse tree
	 */
	void enterRefStmt(TestLangParser.RefStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#refStmt}.
	 * @param ctx the parse tree
	 */
	void exitRefStmt(TestLangParser.RefStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(TestLangParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#functionCall}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(TestLangParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#constCall}.
	 * @param ctx the parse tree
	 */
	void enterConstCall(TestLangParser.ConstCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#constCall}.
	 * @param ctx the parse tree
	 */
	void exitConstCall(TestLangParser.ConstCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#forValueStmt}.
	 * @param ctx the parse tree
	 */
	void enterForValueStmt(TestLangParser.ForValueStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#forValueStmt}.
	 * @param ctx the parse tree
	 */
	void exitForValueStmt(TestLangParser.ForValueStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#newStmt}.
	 * @param ctx the parse tree
	 */
	void enterNewStmt(TestLangParser.NewStmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#newStmt}.
	 * @param ctx the parse tree
	 */
	void exitNewStmt(TestLangParser.NewStmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(TestLangParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(TestLangParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#parameters}.
	 * @param ctx the parse tree
	 */
	void enterParameters(TestLangParser.ParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#parameters}.
	 * @param ctx the parse tree
	 */
	void exitParameters(TestLangParser.ParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(TestLangParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(TestLangParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#condition}.
	 * @param ctx the parse tree
	 */
	void enterCondition(TestLangParser.ConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#condition}.
	 * @param ctx the parse tree
	 */
	void exitCondition(TestLangParser.ConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(TestLangParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(TestLangParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void enterArrayType(TestLangParser.ArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void exitArrayType(TestLangParser.ArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void enterTupleType(TestLangParser.TupleTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void exitTupleType(TestLangParser.TupleTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#indexer}.
	 * @param ctx the parse tree
	 */
	void enterIndexer(TestLangParser.IndexerContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#indexer}.
	 * @param ctx the parse tree
	 */
	void exitIndexer(TestLangParser.IndexerContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#classType}.
	 * @param ctx the parse tree
	 */
	void enterClassType(TestLangParser.ClassTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#classType}.
	 * @param ctx the parse tree
	 */
	void exitClassType(TestLangParser.ClassTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(TestLangParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(TestLangParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#integerLiteral}.
	 * @param ctx the parse tree
	 */
	void enterIntegerLiteral(TestLangParser.IntegerLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#integerLiteral}.
	 * @param ctx the parse tree
	 */
	void exitIntegerLiteral(TestLangParser.IntegerLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#array}.
	 * @param ctx the parse tree
	 */
	void enterArray(TestLangParser.ArrayContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#array}.
	 * @param ctx the parse tree
	 */
	void exitArray(TestLangParser.ArrayContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#tuple}.
	 * @param ctx the parse tree
	 */
	void enterTuple(TestLangParser.TupleContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#tuple}.
	 * @param ctx the parse tree
	 */
	void exitTuple(TestLangParser.TupleContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#element}.
	 * @param ctx the parse tree
	 */
	void enterElement(TestLangParser.ElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#element}.
	 * @param ctx the parse tree
	 */
	void exitElement(TestLangParser.ElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link TestLangParser#errorLiteral}.
	 * @param ctx the parse tree
	 */
	void enterErrorLiteral(TestLangParser.ErrorLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link TestLangParser#errorLiteral}.
	 * @param ctx the parse tree
	 */
	void exitErrorLiteral(TestLangParser.ErrorLiteralContext ctx);
}