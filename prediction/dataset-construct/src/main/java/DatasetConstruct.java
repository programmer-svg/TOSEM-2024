import ASTcompute.MyVisitor;
import antlr.TestLangLexer;
import antlr.TestLangParser;
import fileFeature.McFile;
import fileFeature.McFiles;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.antlr.v4.runtime.tree.ParseTree;
import serviceRequest.gotoDefVisitor;
import serviceRequest.renameVisitor;
import serviceRequest.selectionRangeVisitor;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DatasetConstruct {
    public static String request ="";

    /**
     *
     * @param start includes
     * @param end includes
     * @return array
     */
    public static int[] genArr(int start,int interval,int end){
        int size = (end - start)/interval + 1;
        int[] ret = new int[size];
        for(int i = 0;i<size;i++){
            ret[i] = start + interval * i;
        }
        return ret;
    }

    public static String param2(int cyc, int line, String rq){
        return "RQ"+rq+"_"+cyc+"_"+line+".mc";
    }

    public static String param3(int q1, int q2,int q3, String rq){
        return "RQ"+q1+"_"+q2+"_"+q3+"_"+rq+".mc";
    }

    public static String param1(int cyc, String rq){
        return "RQ"+rq+"_"+cyc+".mc";
    }

    public static String params(String rq,int ...fs){
        StringBuilder q = new StringBuilder();
        for(int f : fs){
            q.append("_");
            q.append(f);
        }
        return "RQ"+rq+q+".mc";
    }
    public static void getAllFile(File fileInput, List<File> allFileList) {

        File[] fileList = fileInput.listFiles();
        assert fileList != null;
        allFileList.addAll(Arrays.asList(fileList));
    }

    public static List<String> txt2String(File file) {
        List<String> list = new ArrayList<String>();
        try {
            BufferedReader br = new BufferedReader(new FileReader(file));
            String s = null;

            while ((s = br.readLine()) != null) {
                list.add(s);
            }
            br.close();
        } catch (Exception ignored) {
        }
        return list;
    }

    public static List<McFile> getFiles(){
        File dir = new File("./src/main/java/code-snippet");
        List<File> allFileList = new ArrayList<>();
        List<McFile> files = new ArrayList<>();

        if (!dir.exists()) {
            System.out.println("目录不存在");
            return files;
        }
        getAllFile(dir, allFileList);

        for (File file : allFileList) {
            if(file.getName().endsWith(".mc")){
                List<String> strings = txt2String(file);
                System.out.println(strings);
                files.addAll(McFile.parseMcFile(strings,file.getName().replaceAll(".mc","")));
            }
        }

        return files;
    }

    public static void deleteFile(String path){
        File file = new File(path);
        File[] files = file.listFiles();

        assert files != null;
        for (File f: files){
            f.delete();
        }
    }
    public static File checkAndInsert(String path, String name){
        String p = path +'/'+name;
        File f = new File(p);
        try{
            if(!f.exists()) f.createNewFile();
        }catch (Exception e){
            System.out.println(e);
        }
        return f;
    }

    public static void writeFile(File f, List<String> codes) {
        try{
            BufferedWriter writer = new BufferedWriter(new FileWriter(f));
            for(String code:codes){
                writer.write(code);
                writer.newLine();
            }
            writer.flush();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
    public static void getPos(File f){
        try{
            FileReader fr = new FileReader(f);
            LineNumberReader lnr = new LineNumberReader(fr);
            int linenumber = 0;
            while (lnr.readLine() != null){
                linenumber++;
            }
            int mid = linenumber /2;
            lnr.close();

            TestLangLexer lexer=new TestLangLexer(CharStreams.fromFileName(f.getPath()));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            TestLangParser parser = new TestLangParser(tokens);
            parser.getInterpreter().setPredictionMode(PredictionMode.SLL);
            TestLangParser.ProgContext tree = parser.prog();

            gotoDefVisitor gdv = new gotoDefVisitor();
            gdv.middleLine = mid;
            gdv.size = linenumber;
            gdv.visit(tree);
            request += gdv.output("hover");
            request += gdv.output("definition");

            renameVisitor rv = new renameVisitor();
            rv.middleLine = mid;
            rv.size = linenumber;
            rv.visit(tree);
            request += rv.output();

            selectionRangeVisitor srv = new selectionRangeVisitor();
            srv.middleLine = mid;
            srv.size = linenumber;
            srv.visit(tree);
            request += srv.output();

            request += completion("completion",linenumber);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static String completion(String str,int size){
        String s= "";
        s+="    await client.sendRequest(\n";
        s+="    'textDocument/"+str+"',{\n";
        s+="        textDocument: {uri: document.uri.toString()},\n";
        s+="        position:{line:"+(size-2)+", character:"+1+"}\n";
        s+="    });\n";

        s+="    await client.sendRequest(\n";
        s+="    'textDocument/"+str+"',{\n";
        s+="        textDocument: {uri: document.uri.toString()},\n";
        s+="        position:{line:"+(size-1)+", character:"+11+"}\n";
        s+="    });\n";
        return s;
    }

    public static void getPosWrapper(File f){
        //if(document.fileName === '\Q1_50.mc') {
        request += "  if(document.fileName === '\\\\"+f.getName()+"') {\n";
        getPos(f);
        request+="  }\n";
    }

    public static void autoGen(String path) {
        File f = checkAndInsert(path,"autoGen.ts");
        try{
            BufferedWriter writer = new BufferedWriter(new FileWriter(f));
            writer.write("import * as vscode from 'vscode';\n");
            writer.write("import { type LanguageClient } from 'vscode-languageclient/node';\n");
            writer.write("import { type LanguageClient as BrowserLanguageClient } from 'vscode-languageclient/browser';\n");
            writer.write("export async function autoGen(client: LanguageClient | BrowserLanguageClient,document: vscode.TextDocument) {\n");
            writer.write(request);
            writer.write("}\n");
            writer.flush();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * for RQ1&2 we don't need to change the autoGen because these RQ don't need to send request.
     */
    public static void RQ1(McFiles mcFiles, String path){
        int [] constraints  = new int[]{1,2,5,10,15,20};
        int []lines = genArr(1000,1000,10000);
        for(int constraint:constraints){
            for(int line:lines){
                File f = checkAndInsert(path, param2(constraint,line,"1"));
                writeFile(f,mcFiles.genFiles(new int[]{constraint,constraint},line,"cc"));
            }
        }
        autoGen(path);
    }

    public static void RQ2(McFiles mcFiles,String path){
        int [] constraints  = new int[]{5,10,15,20};
        int []lines = genArr(100,100,5000);
        for(int constraint:constraints){
            for(int line:lines){
                File f = checkAndInsert(path, param2(constraint,line,"2"));
                writeFile(f,mcFiles.genFiles(new int[]{constraint,constraint},line,"cc",1));
            }
        }
        autoGen(path);
    }

    /**
     * for RQ3, due to the way of generating file is different from 3.1 to 3.3
     * , so we need to split it into 3 functions.
     */
    public static void RQ31(McFiles mcFiles,String path){
        int []lines = genArr(1000,1000,10000);
        for(int line:lines){
            File f = checkAndInsert(path, param1(line,"3.1"));
            writeFile(f,mcFiles.genFiles(line,2));
            getPosWrapper(f);
        }
        autoGen(path);
    }

    /**
     *
     * @param mcFiles
     * @param path
     */
    public static void RQ32(McFiles mcFiles,String path){
        int [] constraints1  = new int[]{1,6,100};
        int [] constraints2  = new int[]{1,30,60,100};
        int []lines = new int[]{10000,100000};
        for(int line : lines){
            for(int i = 0;i<constraints1.length - 1;i++){
                int l1 = constraints1[i];
                int r1 = constraints1[i+1] -1;
                for(int j = 0;j<constraints2.length - 1;j++){
                    int l2 = constraints2[j];
                    int r2 = constraints2[j+1] -1;
                    File f = checkAndInsert(path, param3(l1,l2,line,"3.2"));
                    List<String> write = mcFiles.genFiles(new int[]{l1,r1},"depth",new int[]{l2,r2},"degree",line,3);
                    if(!write.isEmpty()){
                        writeFile(f,write);
                        getPosWrapper(f);
                    }
                }
            }
        }
        autoGen(path);
    }

    public static void RQ33(McFiles mcFiles,String path){
        int []lines = genArr(10000,10000,100000);
        for(int line:lines){
            File f = checkAndInsert(path, param1(line,"3.3"));
            writeFile(f,mcFiles.genFiles(line,3));
            getPosWrapper(f);
        }
        autoGen(path);
    }

    public static void RQ34(McFiles mcFiles,String path){
        int [] constraints  = new int[]{1,2,5,10,15,20};
        int []lines = genArr(1000,1000,10000);
        for(int constraint:constraints){
            for(int line:lines){
                List <String> temp = mcFiles.genFiles(new int[]{constraint,constraint},line,"cc");
                File f = checkAndInsert(path, params("0",constraint,line,mcFiles.def, mcFiles.loc, mcFiles.occur));
                writeFile(f,temp);
            }
        }
        autoGen(path);
    }

    public static void RQ0(McFiles mcFiles,String path){
        int [] constraints  = new int[]{5,10,15,20};
        int []lines = genArr(400,400,10000);
        for(int constraint:constraints){
            for(int line:lines){
                List <String> temp = mcFiles.genFiles(new int[]{constraint,constraint},line,"cc");
                MyVisitor myVisitor = genVisitor(temp);
                File f = checkAndInsert(path, params("0",constraint,temp.size(),mcFiles.def,mcFiles.occur,myVisitor.nodeNum,myVisitor.degree_all / myVisitor.treeNum,myVisitor.depth_all/ myVisitor.treeNum));
                writeFile(f,temp);
                getPosWrapper(f);
                System.out.println("completed:"+constraint+" "+line);
            }
        }
        autoGen(path);
    }

    public static void RQ3_new_loc(McFiles mcFiles,String path){
        int []lines = genArr(400,400,10000);
        for(int line:lines){
            List <String> temp = mcFiles.genFiles(line,0);
            MyVisitor myVisitor = genVisitor(temp);
            File f = checkAndInsert(path, params("3new",0,temp.size(),mcFiles.def,mcFiles.occur,myVisitor.nodeNum,myVisitor.degree_all / myVisitor.treeNum,myVisitor.depth_all/ myVisitor.treeNum));
            writeFile(f,temp);
            getPosWrapper(f);
            System.out.println("completed:"+" "+line);
        }
        autoGen(path);
    }

    public static void RQ3_new_def(McFiles mcFiles,String path){
        int []lines = genArr(80,80,2000);
        for(int line:lines){
            List <String> temp = mcFiles.genFiles(line,1);
            MyVisitor myVisitor = genVisitor(temp);
            File f = checkAndInsert(path, params("3new",0,temp.size(),mcFiles.def,mcFiles.occur,myVisitor.nodeNum,myVisitor.degree_all / myVisitor.treeNum,myVisitor.depth_all/ myVisitor.treeNum));
            writeFile(f,temp);
            getPosWrapper(f);
            System.out.println("completed:"+" "+line);
        }
        autoGen(path);
    }

    public static void RQ3_new_occur(McFiles mcFiles,String path){
        int []lines = genArr(400,400,10000);
        for(int line:lines){
            List <String> temp = mcFiles.genFiles(line,2);
            MyVisitor myVisitor = genVisitor(temp);
            File f = checkAndInsert(path, params("3new",0,temp.size(),mcFiles.def,mcFiles.occur,myVisitor.nodeNum,myVisitor.degree_all / myVisitor.treeNum,myVisitor.depth_all/ myVisitor.treeNum));
            writeFile(f,temp);
            getPosWrapper(f);
            System.out.println("completed:"+" "+line);
        }
        autoGen(path);
    }

    public static void RQ3_new_nodenum(McFiles mcFiles,String path){
        int []lines = genArr(2000,2000,50000);
        for(int line:lines){
            List <String> temp = mcFiles.genFiles(line,3);
            MyVisitor myVisitor = genVisitor(temp);
            File f = checkAndInsert(path, params("3new",0,temp.size(),mcFiles.def,mcFiles.occur,myVisitor.nodeNum,myVisitor.degree_all / myVisitor.treeNum,myVisitor.depth_all/ myVisitor.treeNum));
            writeFile(f,temp);
            getPosWrapper(f);
            System.out.println("completed:"+" "+line);
        }
        autoGen(path);
    }

    public static MyVisitor genVisitor(List <String> temp){
        StringBuilder sb = new StringBuilder();
        for(String s : temp){
            sb.append(s);
            sb.append("\n");
        }
        CharStream charStream = CharStreams.fromString(sb.toString());
        TestLangLexer testLangLexer = new TestLangLexer(charStream);
        CommonTokenStream tokens = new CommonTokenStream(testLangLexer);
        TestLangParser testLangParser = new TestLangParser(tokens);
        testLangParser.getInterpreter().setPredictionMode(PredictionMode.SLL);
        ParseTree tree = testLangParser.prog();
        MyVisitor myVisitor = new MyVisitor();
        myVisitor.visit(tree);
        return myVisitor;
    }

    public static void main(String[] args) {
        List<McFile> files = getFiles();
        McFiles mcFiles = new McFiles(files);
        String path = "./src/main/java/dataset1/";
        String nodePath = path + "RQ3_Node";
        String locPath = path + "RQ3_LOC";
        String defPath = path + "RQ3_DEF";
        String occPath = path + "RQ3_OCC";
        deleteFile(nodePath);
        deleteFile(defPath);
        deleteFile(locPath);
        deleteFile(occPath);
        RQ3_new_nodenum(mcFiles,nodePath);
        RQ3_new_def(mcFiles,defPath);
        RQ3_new_loc(mcFiles,locPath);
        RQ3_new_occur(mcFiles,occPath);
    }
}