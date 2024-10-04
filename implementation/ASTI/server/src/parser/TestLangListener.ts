// Generated from .\\server\\src\\grammar\\TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `TestLangParser`.
 */
export interface TestLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TestLangParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.simpleClassDef`.
	 * @param ctx the parse tree
	 */
	enterSimpleClassDef?: (ctx: SimpleClassDefContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.simpleClassDef`.
	 * @param ctx the parse tree
	 */
	exitSimpleClassDef?: (ctx: SimpleClassDefContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.functionDef`.
	 * @param ctx the parse tree
	 */
	enterFunctionDef?: (ctx: FunctionDefContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.functionDef`.
	 * @param ctx the parse tree
	 */
	exitFunctionDef?: (ctx: FunctionDefContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.parametersDef`.
	 * @param ctx the parse tree
	 */
	enterParametersDef?: (ctx: ParametersDefContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.parametersDef`.
	 * @param ctx the parse tree
	 */
	exitParametersDef?: (ctx: ParametersDefContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.constDef`.
	 * @param ctx the parse tree
	 */
	enterConstDef?: (ctx: ConstDefContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.constDef`.
	 * @param ctx the parse tree
	 */
	exitConstDef?: (ctx: ConstDefContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.fieldDef`.
	 * @param ctx the parse tree
	 */
	enterFieldDef?: (ctx: FieldDefContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.fieldDef`.
	 * @param ctx the parse tree
	 */
	exitFieldDef?: (ctx: FieldDefContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.forStmt`.
	 * @param ctx the parse tree
	 */
	enterForStmt?: (ctx: ForStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.forStmt`.
	 * @param ctx the parse tree
	 */
	exitForStmt?: (ctx: ForStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.wihilStmt`.
	 * @param ctx the parse tree
	 */
	enterWihilStmt?: (ctx: WihilStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.wihilStmt`.
	 * @param ctx the parse tree
	 */
	exitWihilStmt?: (ctx: WihilStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.evaluationStmt`.
	 * @param ctx the parse tree
	 */
	enterEvaluationStmt?: (ctx: EvaluationStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.evaluationStmt`.
	 * @param ctx the parse tree
	 */
	exitEvaluationStmt?: (ctx: EvaluationStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.refStmt`.
	 * @param ctx the parse tree
	 */
	enterRefStmt?: (ctx: RefStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.refStmt`.
	 * @param ctx the parse tree
	 */
	exitRefStmt?: (ctx: RefStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.constCall`.
	 * @param ctx the parse tree
	 */
	enterConstCall?: (ctx: ConstCallContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.constCall`.
	 * @param ctx the parse tree
	 */
	exitConstCall?: (ctx: ConstCallContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.forValueStmt`.
	 * @param ctx the parse tree
	 */
	enterForValueStmt?: (ctx: ForValueStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.forValueStmt`.
	 * @param ctx the parse tree
	 */
	exitForValueStmt?: (ctx: ForValueStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.newStmt`.
	 * @param ctx the parse tree
	 */
	enterNewStmt?: (ctx: NewStmtContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.newStmt`.
	 * @param ctx the parse tree
	 */
	exitNewStmt?: (ctx: NewStmtContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.indexer`.
	 * @param ctx the parse tree
	 */
	enterIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.indexer`.
	 * @param ctx the parse tree
	 */
	exitIndexer?: (ctx: IndexerContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.classType`.
	 * @param ctx the parse tree
	 */
	enterClassType?: (ctx: ClassTypeContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.classType`.
	 * @param ctx the parse tree
	 */
	exitClassType?: (ctx: ClassTypeContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.errorLiteral`.
	 * @param ctx the parse tree
	 */
	enterErrorLiteral?: (ctx: ErrorLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.errorLiteral`.
	 * @param ctx the parse tree
	 */
	exitErrorLiteral?: (ctx: ErrorLiteralContext) => void;
}

