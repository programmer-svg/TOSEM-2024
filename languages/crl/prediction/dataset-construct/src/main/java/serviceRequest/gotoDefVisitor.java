package serviceRequest;

import antlr.TestLangBaseVisitor;
import antlr.TestLangParser;
import org.antlr.v4.runtime.Token;
public class gotoDefVisitor extends TestLangBaseVisitor<Integer> {
    public int middleLine = 0;
    Token first,middle,last;
    Token firstfun,middlefun,lastfun;
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
        //avoid completion 的影响
        if(id1.getLine() > size - 2) return;
        last = id1;
    }

    public void setfun(Token id1){
        if(firstfun == null){
            firstfun = id1;
        }
        if(middlefun == null){
            middlefun = id1;
        }else{
            if(Math.abs(middleLine - id1.getLine()) < Math.abs(middleLine - middlefun.getLine())) middlefun = id1;
        }
        lastfun = id1;
    }
    public Integer visitRefStmt(TestLangParser.RefStmtContext ctx){
        Token id1 = ctx.id1;
        set(id1);
        return 0;
    }

    public Integer visitFunctionCall(TestLangParser.FunctionCallContext ctx){
        Token id2 = ctx.id2;
        setfun(id2);
        return 0;
    }

    /**
     * 	await client.sendRequest(
     * 		'textDocument/definition',{
     * 			textDocument: {
     * 				uri: document.uri.toString()
     *            },
     * 			position:{
     * 				line:12,
     * 				character:0
     *            }
     *        }
     * 	);
     * @param token
     * @return
     */
    public String token2String(Token token,String str){
        int l =  token.getLine() - 1;
        String s= "";
        s+="    await client.sendRequest(\n";
        s+="    'textDocument/"+str+"',{\n";
        s+="        textDocument: {uri: document.uri.toString()},\n";
        s+="        position:{line:"+l+", character:"+token.getCharPositionInLine()+"}\n";
        s+="    });\n";
        return s;
    }

    public String output(String str){
        String ret = "";
        ret += token2String(first,str);
        ret += token2String(middle,str);
        ret += token2String(last,str);
        return ret;
    }

    /**
     * this function is used to show that there is not distinction between word and function, so next we only use word in experiment
     * @return
     */
    public String outputfun(){
        String ret = "";
//        ret += token2String(firstfun);
//        ret += token2String(middlefun);
//        ret += token2String(lastfun);
        return ret;
    }
}
