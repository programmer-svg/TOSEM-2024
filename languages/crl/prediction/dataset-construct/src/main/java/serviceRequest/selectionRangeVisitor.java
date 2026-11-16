package serviceRequest;

import antlr.TestLangBaseVisitor;
import antlr.TestLangParser;
import org.antlr.v4.runtime.Token;

public class selectionRangeVisitor extends TestLangBaseVisitor<Integer> {
    public int middleLine = 0;
    Token first,middle,last;

    public int size = 0;
    public void set(Token id1){
        if(first == null){
            first = id1;
        }
        if(middle == null){
            middle = id1;
        }else{
            if(Math.abs(middleLine - id1.getLine()) < Math.abs(middleLine - middle.getLine())) middle = id1;
        }
        if(id1.getLine() > size - 2) return;
        last = id1;
    }
    @Override
    public Integer visitEvaluationStmt(TestLangParser.EvaluationStmtContext ctx){
        //if not empty, find the inner one
        if(!ctx.evaluationStmt().isEmpty()){
            this.visitChildren(ctx);
            return 0;
        }
        set(ctx.start);
        return 0;
    }

    /**
     * @param token
     * @return
     */
    public String token2String(Token token){
        int l =  token.getLine() - 1;
        String s= "";
        s+="    await client.sendRequest(\n";
        s+="    'textDocument/selectionRange',{\n";
        s+="        textDocument: {uri: document.uri.toString()},\n";
        s+="        positions:[{line:"+l+", character:"+token.getCharPositionInLine()+"}]\n";
        s+="    });\n";
        return s;
    }
    public String output(){
        String ret = "";
        ret += token2String(first);
        ret += token2String(middle);
        ret += token2String(last);
        return ret;
    }
}
