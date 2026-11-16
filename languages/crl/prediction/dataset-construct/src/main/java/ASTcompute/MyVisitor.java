package ASTcompute;

import antlr.TestLangBaseVisitor;
import antlr.TestLangLexer;
import antlr.TestLangParser;
import org.antlr.v4.runtime.tree.RuleNode;

public class MyVisitor extends TestLangBaseVisitor {
    public int nodeNum = 0;
    public int degree_all = 0;
    public int depth_tmp = 1;
    public int depth_max = 0;
    public int depth_all = 0;
    public int treeNum = 0;
    void nodeCompute(int childCount){
        nodeNum = nodeNum + 1;
        degree_all =  degree_all + childCount;
    }

    @Override
    public Object visitChildren(RuleNode node) {
        depth_tmp  = depth_tmp + 1;
        if (depth_max < depth_tmp) depth_max = depth_tmp;
        super.visitChildren(node);
        depth_tmp = depth_tmp - 1;
        return null;
    }

    @Override
    public Object visitProg(TestLangParser.ProgContext ctx) {
        treeNum = ctx.getChildCount();
        nodeCompute(ctx.getChildCount());
        for (TestLangParser.StatementContext statementContext : ctx.statement()){
            super.visitStatement(statementContext);
            depth_all = depth_all + depth_max;
            depth_max = 0;
        }
        return null;
    }

    @Override
    public Object visitStatement(TestLangParser.StatementContext ctx) {
        nodeCompute(ctx.getChildCount());
        return  super.visitStatement(ctx);
    }

    @Override
    public Object visitSimpleClassDef(TestLangParser.SimpleClassDefContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitSimpleClassDef(ctx);
    }

    @Override
    public Object visitFunctionDef(TestLangParser.FunctionDefContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitFunctionDef(ctx);
    }

    @Override
    public Object visitParametersDef(TestLangParser.ParametersDefContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitParametersDef(ctx);
    }

    @Override
    public Object visitConstDef(TestLangParser.ConstDefContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitConstDef(ctx);
    }

    @Override
    public Object visitFieldDef(TestLangParser.FieldDefContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitFieldDef(ctx);
    }

    @Override
    public Object visitAssignment(TestLangParser.AssignmentContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitAssignment(ctx);
    }

    @Override
    public Object visitIfStmt(TestLangParser.IfStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitIfStmt(ctx);
    }

    @Override
    public Object visitForStmt(TestLangParser.ForStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitForStmt(ctx);
    }

    @Override
    public Object visitWihilStmt(TestLangParser.WihilStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitWihilStmt(ctx);
    }

    @Override
    public Object visitReturnStmt(TestLangParser.ReturnStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitReturnStmt(ctx);
    }

    @Override
    public Object visitEvaluationStmt(TestLangParser.EvaluationStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitEvaluationStmt(ctx);
    }

    @Override
    public Object visitRefStmt(TestLangParser.RefStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitRefStmt(ctx);
    }

    @Override
    public Object visitFunctionCall(TestLangParser.FunctionCallContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitFunctionCall(ctx);
    }

    @Override
    public Object visitConstCall(TestLangParser.ConstCallContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitConstCall(ctx);
    }

    @Override
    public Object visitForValueStmt(TestLangParser.ForValueStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitForValueStmt(ctx);
    }

    @Override
    public Object visitNewStmt(TestLangParser.NewStmtContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitNewStmt(ctx);
    }

    @Override
    public Object visitBlock(TestLangParser.BlockContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitBlock(ctx);
    }

    @Override
    public Object visitParameters(TestLangParser.ParametersContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitParameters(ctx);
    }

    @Override
    public Object visitParameter(TestLangParser.ParameterContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitParameter(ctx);
    }

    @Override
    public Object visitCondition(TestLangParser.ConditionContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitCondition(ctx);
    }

    @Override
    public Object visitType(TestLangParser.TypeContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitType(ctx);
    }

    @Override
    public Object visitArrayType(TestLangParser.ArrayTypeContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitArrayType(ctx);
    }

    @Override
    public Object visitTupleType(TestLangParser.TupleTypeContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitTupleType(ctx);
    }

    @Override
    public Object visitIndexer(TestLangParser.IndexerContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitIndexer(ctx);
    }

    @Override
    public Object visitClassType(TestLangParser.ClassTypeContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitClassType(ctx);
    }

    @Override
    public Object visitLiteral(TestLangParser.LiteralContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitLiteral(ctx);
    }

    @Override
    public Object visitIntegerLiteral(TestLangParser.IntegerLiteralContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitIntegerLiteral(ctx);
    }

    @Override
    public Object visitArray(TestLangParser.ArrayContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitArray(ctx);
    }

    @Override
    public Object visitTuple(TestLangParser.TupleContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitTuple(ctx);
    }

    @Override
    public Object visitElement(TestLangParser.ElementContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitElement(ctx);
    }

    @Override
    public Object visitErrorLiteral(TestLangParser.ErrorLiteralContext ctx) {
        nodeCompute(ctx.getChildCount());
        return super.visitErrorLiteral(ctx);
    }
}
