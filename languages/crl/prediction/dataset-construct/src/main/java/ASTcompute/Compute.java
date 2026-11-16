package ASTcompute;

import antlr.TestLangLexer;
import antlr.TestLangParser;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTree;

public class Compute {
    public static void main(String[] args) {
        try {
            MyFunc myFunc = new MyFunc();
            System.out.println("-------------------------");
            String input = myFunc.readFromFile("src/main/java/ASTcompute/RQ3new_0_10041_1466_9658_48155_33_7.mc");

//            String input = "";
//            System.out.println(input);
            System.out.println("-------------------------");
            long startTime = System.currentTimeMillis();
            CharStream charStream = CharStreams.fromString(input);
            TestLangLexer testLangLexer = new TestLangLexer(charStream);
            CommonTokenStream tokens = new CommonTokenStream(testLangLexer);
            TestLangParser testLangParser = new TestLangParser(tokens);
//            AntlrError antlrError = new AntlrError();
//            TestLangParser.addErrorListener(antlrError);
            ParseTree tree = testLangParser.prog();
            MyVisitor myVisitor = new MyVisitor();
            long secondStartTime = System.currentTimeMillis();
            myVisitor.visit(tree);
            long endTime = System.currentTimeMillis();
            System.out.println("pre time: " + (endTime - startTime));
            System.out.println("-------------------------");
//            String output = myVisitor.outputListString;
//            System.out.println(output);
            System.out.println("nodeNum = " + myVisitor.nodeNum
//                    + " degree_all = " + myVisitor.degree_all
                            + " degree_average = " + myVisitor.degree_all / myVisitor.treeNum
//                    + " depth_max = " + myVisitor.depth_max + " depth_all = " + myVisitor.depth_all
                    + " depth_average = " + myVisitor.depth_all/ myVisitor.treeNum
            );
            System.out.println("-------------------------");

//            myFunc.writeToFile(args[1],output);
            System.exit(0);
        }catch (Exception e){
            e.printStackTrace();
            System.exit(-1);
        }
    }


}
