package result.process;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Collections;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Getter
@Setter
public class RQResult {
    String[] functions = {"validateTextDocument", "handleSemanticTokens", "getPosition", "find", "getDefinition", "getHover", "getRename", "getSelectionRange"};
    Type type;
    Type functionType;
    // RQ metrics --- duration
    int validateTextDocument;

    int handleSemanticTokens;

    int getPosition;

    int find;//search symbolTable duration

    int construct; // construct symbolTable duration

    ArrayList<Integer> definition;

    ArrayList<Integer> hover;

    ArrayList<Integer> completion;

    ArrayList<Integer> rename;

    ArrayList<Integer> traverse;

    int selectionRange;

    int searchSymbolTableTime; // duration

    //search count
    int searchCount_semanticToken;

    //File attribute
    String filename;

    int RQ;

    int CC;

    int LOC;

    int identDef;

    int identOccur;

    int degree;

    int depth;

    int nodeNum;

    int symbolNum;

    public void reset(Type type, String filename , int RQ, int value){
        if (RQ == 34){

            String regex = "RQ(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(filename);
            if (matcher.matches()) {
                int num1 = Integer.parseInt(matcher.group(1));
                int num2 = Integer.parseInt(matcher.group(2));
                int num3 = Integer.parseInt(matcher.group(3));
                int num4 = Integer.parseInt(matcher.group(4));
                int num5 = Integer.parseInt(matcher.group(5));
                int num6 = Integer.parseInt(matcher.group(6));
                if (RQ != num1) {
                    System.out.println("RQ34 File " + filename + "error!");
                    System.exit(-1);
                }
                this.CC = num2;
                this.nodeNum = num3;
                this.identDef = num4;
                this.LOC = num5;
                this.identOccur = num6;
            } else {
                System.out.println("No match found. -- " + filename);
                System.exit(-1);
            }
        }
    }

    public void addFunctionTime(String functionName, int duration){
        //validateTextDocument  -- validateTextDocument
        //handleSemanticTokens -- handleSemanticTokens
        //getHover -- hover
        //getDefinition -- definition
        //getRename -- rename
        //getSelectionRange -- selectionRange
        //getCompletionInfos -- completion
        if (functionName.equals("validateTextDocument")){
            this.validateTextDocument = duration;
            if (this.type == Type.symbolTable) this.construct = duration;
        }
        if (functionName.equals("handleSemanticTokens")){
            this.handleSemanticTokens = duration;
        }
        if (functionName.equals("getHover")){
            this.hover.add(duration);
        }
        if (functionName.equals("getRename")){
            this.rename.add(duration);
        }
        if (functionName.equals("getDefinition")){
            this.definition.add(duration);
        }
        if (functionName.equals("getCompletion")){
            this.completion.add(duration);
        }
        if (functionName.equals("getSelectionRange")){
            this.selectionRange = duration;
        }
        if (functionName.equals("find")){
            this.find = duration;
        }
        if (functionName.equals("getInfoArray")){
            this.traverse.add(duration);
        }

    }



    public RQResult(Type type, String filename , int RQ){
        this.type = type;
        this.filename = filename;
        this.RQ = RQ;
        this.rename = new ArrayList<>();
        this.hover = new ArrayList<>();
        this.definition = new ArrayList<>();
        this.completion = new ArrayList<>();
        this.traverse = new ArrayList<>();
        if (RQ == 30){
            //cc,loc,def,occur,nodeNum,degree, depth
            String regex = "RQ3new_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(filename);
            if (matcher.matches()) {

                int num1 = Integer.parseInt(matcher.group(1));
                int num2 = Integer.parseInt(matcher.group(2));
                int num3 = Integer.parseInt(matcher.group(3));
                int num4 = Integer.parseInt(matcher.group(4));
                int num5 = Integer.parseInt(matcher.group(5));
                int num6 = Integer.parseInt(matcher.group(6));
                int num7 = Integer.parseInt(matcher.group(7));
                this.CC = num1;
                this.LOC = num2;
                this.identDef = num3;
                this.identOccur = num4;
                this.nodeNum = num5;
                this.degree = num6;
                this.depth = num7;
            } else {
                System.out.println("No match found. -- " + filename);
                System.exit(-1);
            }
        }


    }

    public RQResult(Type type, String filename , int RQ, int value){
        this.type = type;
        this.filename = filename;
        this.RQ = RQ;
        this.rename = new ArrayList<>();
        this.hover = new ArrayList<>();
        this.definition = new ArrayList<>();
        this.completion = new ArrayList<>();
        //filename : "RQ"+rq+"_"+cyc+"_"+line+".mc";

        if (RQ == 1 || RQ == 2){
            String regex = "RQ(\\d+)_(\\d+)_(\\d+)";

            Pattern pattern = Pattern.compile(regex);

            Matcher matcher = pattern.matcher(filename);

            if (matcher.matches()) {

                int num1 = Integer.parseInt(matcher.group(1));
                int num2 = Integer.parseInt(matcher.group(2));
                int num3 = Integer.parseInt(matcher.group(3));
                if (RQ != num1) {
                    System.out.println("RQ1or2 File " + filename + "error!");
                    System.exit(-1);
                }
                if (RQ == 1){
                    this.CC = num2;
                    this.LOC = num3;
                    this.validateTextDocument = value;
                }
                else if (RQ == 2) {
                    this.CC = num2;
                    this.identDef = num3;
                    this.searchSymbolTableTime = value;
                }
            } else {
                System.out.println("No match found. -- " + filename);
                System.exit(-1);
            }
        }
        else if (RQ == 31 || RQ == 33) {
            String regex = "RQ(\\d+)_(\\d+)";

            Pattern pattern = Pattern.compile(regex);

            Matcher matcher = pattern.matcher(filename);

            if (matcher.matches()) {

                int num1 = Integer.parseInt(matcher.group(1));
                int num2 = Integer.parseInt(matcher.group(2));
                if (RQ != num1) {
                    System.out.println("RQ31 or 33 File " + filename + "error!");
                    System.exit(-1);
                }
                if (RQ == 31){
                    this.identOccur = num2;
                    this.searchCount_semanticToken = value;
                } else {
                    this.nodeNum = num2;

                    this.rename.add(value);
                }
            } else {
                System.out.println("No match found. -- " + filename);
                System.exit(-1);
            }
        }
        else if (RQ == 34){

            String regex = "RQ(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(filename);
            if (matcher.matches()) {

                int num1 = Integer.parseInt(matcher.group(1));
                int num2 = Integer.parseInt(matcher.group(2));
                int num3 = Integer.parseInt(matcher.group(3));
                int num4 = Integer.parseInt(matcher.group(4));
                int num5 = Integer.parseInt(matcher.group(5));
                int num6 = Integer.parseInt(matcher.group(6));
                if (RQ != num1) {
                    System.out.println("RQ34 File " + filename + "error!");
                    System.exit(-1);
                }
                this.CC = num2;
                this.nodeNum = num3;
                this.identDef = num4;
                this.LOC = num5;
                this.identOccur = num6;
            } else {
                System.out.println("No match found. -- " + filename);
                System.exit(-1);
            }
        }


    }

    public int getRename(){
        return calculateMedian(this.rename);
    }
    public int getTraverse(){
        return calculateMedian(this.traverse);
    }
    public int getHover(){
        return calculateAverage(this.hover);
    }
    public int getDefinition(){
        return calculateAverage(this.definition);
    }
    public int getCompletion(){
        return calculateAverage(this.completion);
    }

    public void addRename(int value){
        this.rename.add(value);
    }

    public void addHover(int value){
        this.hover.add(value);
    }

    public void addDefinition(int value){
        this.definition.add(value);
    }

    public void addCompletion(int value){
        this.completion.add(value);
    }
    public int getComponentByType(Type component){
        if (component == Type.Construct){
            return this.validateTextDocument;
        }
        if (component == Type.Search){
            return this.find;
        }
        if (component == Type.Traverse){
            return this.getTraverse();
        }
        return -100;
    }
    public int getFeatureByType(Type feature){
        if (feature == Type.LOC){
            return this.LOC;
        }
        if (feature == Type.OCC){
            return this.identOccur;
        }
        if (feature == Type.DEF){
            return this.identDef;
        }
        if (feature == Type.NODE){
            return this.nodeNum;
        }

        return -100;
    }
    private int calculateAverage(ArrayList<Integer> numbers){
        int sum = 0;
        int notZero = 0;
        for (int i : numbers){
            sum = sum + i;
            notZero ++;
        }
        if (numbers.isEmpty()) return 0;
        return (int) Math.round((double) sum/notZero);
    }

    private int calculateMedian(ArrayList<Integer> numbers) {
        // 对列表进行排序
        Collections.sort(numbers);
        int size = numbers.size();
        if (size == 0){
            System.out.println("file name is : " + this.filename + " duration is" + numbers + "  size is " + size);
        }
        return numbers.getLast();
        // 判断列表长度是奇数还是偶数
//        if (size % 2 == 0) {
//            // 如果是偶数，取中间两个元素的平均值
////            int middle1 = numbers.get(size / 2 -1);
//            int middle2 = numbers.get(size / 2 + 1);
////            if (middle2 == 0){
////                return numbers.get(size/2 + 1);
////            }
//            return middle2;
//        } else {
//            // 如果是奇数，直接取中间元素
//            return numbers.get(size / 2);
//        }
    }

}
