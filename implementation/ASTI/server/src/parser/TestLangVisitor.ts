// Generated from .\\server\\src\\grammar\\TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./TestLangParser";
import { StatementContext } from "./TestLangParser";
import { SimpleClassDefContext } from "./TestLangParser";
import { FunctionDefContext } from "./TestLangParser";
import { ParametersDefContext } from "./TestLangParser";
import { ConstDefContext } from "./TestLangParser";
import { FieldDefContext } from "./TestLangParser";
import { AssignmentContext } from "./TestLangParser";
import { IfStmtContext } from "./TestLangParser";
import { ForStmtContext } from "./TestLangParser";
import { WihilStmtContext } from "./TestLangParser";
import { ReturnStmtContext } from "./TestLangParser";
import { EvaluationStmtContext } from "./TestLangParser";
import { RefStmtContext } from "./TestLangParser";
import { FunctionCallContext } from "./TestLangParser";
import { ConstCallContext } from "./TestLangParser";
import { ForValueStmtContext } from "./TestLangParser";
import { NewStmtContext } from "./TestLangParser";
import { BlockContext } from "./TestLangParser";
import { ParametersContext } from "./TestLangParser";
import { ParameterContext } from "./TestLangParser";
import { ConditionContext } from "./TestLangParser";
import { TypeContext } from "./TestLangParser";
import { ArrayTypeContext } from "./TestLangParser";
import { TupleTypeContext } from "./TestLangParser";
import { IndexerContext } from "./TestLangParser";
import { ClassTypeContext } from "./TestLangParser";
import { LiteralContext } from "./TestLangParser";
import { IntegerLiteralContext } from "./TestLangParser";
import { ArrayContext } from "./TestLangParser";
import { TupleContext } from "./TestLangParser";
import { ElementContext } from "./TestLangParser";
import { ErrorLiteralContext } from "./TestLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TestLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TestLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TestLangParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.simpleClassDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleClassDef?: (ctx: SimpleClassDefContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.functionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDef?: (ctx: FunctionDefContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.parametersDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametersDef?: (ctx: ParametersDefContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.constDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstDef?: (ctx: ConstDefContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.fieldDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDef?: (ctx: FieldDefContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.forStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStmt?: (ctx: ForStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.wihilStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWihilStmt?: (ctx: WihilStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.evaluationStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvaluationStmt?: (ctx: EvaluationStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.refStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefStmt?: (ctx: RefStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.constCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstCall?: (ctx: ConstCallContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.forValueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForValueStmt?: (ctx: ForValueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.newStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewStmt?: (ctx: NewStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.indexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer?: (ctx: IndexerContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.errorLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorLiteral?: (ctx: ErrorLiteralContext) => Result;
}

