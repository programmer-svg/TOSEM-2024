package result.process;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.Random;

public class Result {
    //RQ1
    String[] functions = {"validateTextDocument", "handleSemanticTokens", "getPosition", "find", "getDefinition", "getHover", "getRename", "getSelectionRange"};
    String regex_RQ1 = "function:validateTextDocument duration:(\\d+)";
    String regex_RQ2 = "symbolNum:(\\d+)+Cyc:\\d+RQ\\d+duration:(\\d+)";
    String regex_RQ31 = "cnt:(\\d+)";
    String regex_RQ32 = "function:getPosition duration:(\\d+)";
    String regex_RQ33 = "function:getRename duration:(\\d+)";
    String[] regex_RQ34 = {"function:handleSemanticTokens duration:(\\d+)", "function:getRename duration:(\\d+)"};
    String regex_RQ4 = "function:validateTextDocument duration:(\\d+)";
    String regex_filename = "vscode-test-web://mount/([A-Za-z0-9_]+)mc";
    String regex_function = "function:(\\w+) duration:(\\d+)";
    String regex_traverse = "function:getInfoArray duration:(\\d+)";
    String regex_find = "find duration:(\\d+)";
    int[] CC_Range = {1,2,5,10,15,20};
    String excelFilePath = "src/main/java/result/ResultV0.1.xlsx";
    ArrayList<RQResult> rq1_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq2_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq31_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq32_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq33_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq34_Result = new ArrayList<RQResult>(0);
    ArrayList<RQResult> rq3new_nodeNum_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_loc_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_identDef_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_identOccur_Result = new ArrayList<>();

    ArrayList<Integer> rq3new_loc = new ArrayList<>();
    ArrayList<Integer> rq3new_identDef = new ArrayList<>();
    ArrayList<Integer> rq3new_identOccur = new ArrayList<>();
    ArrayList<Integer> rq3new_nodeNum = new ArrayList<>();
    ArrayList<Integer> rq34_IdentOccur = new ArrayList<>();
    ArrayList<Integer> rq34_IdentDef = new ArrayList<>();
    ArrayList<Integer> rq34_semanticToken_symbolTable_prediction = new ArrayList<>();
    ArrayList<Integer> rq34_semanticToken_symbolTable_real = new ArrayList<>();
    ArrayList<Integer> rq34_semanticToken_semanticTree_prediction = new ArrayList<>();
    ArrayList<Integer> rq34_semanticToken_semanticTree_real = new ArrayList<>();
    ArrayList<RQResult> rq4_Result = new ArrayList<RQResult>(0);
    ArrayList<Integer> rq35_semanticToken_symbolTable_absoluteError = new ArrayList<>();
    ArrayList<Integer> rq35_semanticToken_semanticTree_absoluteError = new ArrayList<>();
    ArrayList<Double> rq35_semanticToken_symbolTable_relativeError = new ArrayList<>();
    ArrayList<Double> rq35_semanticToken_semanticTree_relativeError = new ArrayList<>();
    private void createNewExcelFile(String filePath) throws IOException {
        
        Workbook workbook = new XSSFWorkbook();

      
        Sheet sheet = workbook.createSheet("Sheet1");

        
        Row row = sheet.createRow(0);

       
        Cell cell = row.createCell(0);
        cell.setCellValue("");

        
        try (FileOutputStream fileOut = new FileOutputStream(filePath)) {
            workbook.write(fileOut);
        }
        
        workbook.close();
    }
    private void addNewSheetToExistingFile(File file) throws IOException {
        try (FileInputStream fis = new FileInputStream(file);
             Workbook workbook = WorkbookFactory.create(fis);
             FileOutputStream fileOut = new FileOutputStream(file)) {

            // Create a new sheet and write it to the workbook
            Sheet newSheet = workbook.createSheet("NewSheet");
            workbook.write(fileOut);
        }
    }
    private boolean isExcelFileEmpty(File file) throws IOException {
        try (FileInputStream fis = new FileInputStream(file);
             Workbook workbook = WorkbookFactory.create(fis)) {

            // Check if the workbook has any sheets
            return workbook.getNumberOfSheets() == 0;
        }
    }
    public void checkExcelFile(String filePath, boolean newFile){
        this.excelFilePath = filePath;
        File file = new File(excelFilePath);
        if (file.exists() && !newFile){
            System.out.println("already exist Excel ");
            try {
                if (isExcelFileEmpty(file)) {
                    System.out.println("Excel file exists but is empty. Adding a new sheet...");
                    // Add a new sheet to the existing workbook
                    addNewSheetToExistingFile(file);
                    System.out.println("New sheet added successfully.");
                } else {
                    System.out.println("Excel file already exists and is not empty.");
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        else{
            try {
                if (file.exists()) file.delete();
                
                createNewExcelFile(excelFilePath);
                System.out.println("create Excel");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    private double computeSearchSymbolTableTime(Type type){
        // here compute when def x idents, search 10000 symbolTable need time
        int[] CC_array= {2,5,10,15,20};
//        ArrayList<Double> searchTimeList = new ArrayList<>();

        int identDef_tmp;
        int duration_tmp;
        double search_total = 0.0;

        //first get fx
        for (int cc : CC_array){
            int identDef_min = 1000000;
            int identDef_max = 0;
            int duration_min = 0;
            int duration_max = 0;
            for (RQResult result : rq2_Result){
                if (result.getType() == type && result.getCC() == cc){
                    identDef_tmp = result.getIdentDef();
                    duration_tmp = result.getSearchSymbolTableTime();
                    if (identDef_tmp < identDef_min){
                        identDef_min = identDef_tmp;
                        duration_min = duration_tmp;
                    }
                    if (identDef_tmp > identDef_max){
                        identDef_max = identDef_tmp;
                        duration_max = duration_tmp;
                    }
                }
            }
            search_total += (double) (duration_max - duration_min) / (identDef_max - identDef_min);
        }
//        System.out.println(search_total/CC_array.length);
        return search_total / CC_array.length;
    }
    private RQResult getRQResultFromArray_RQ1(Type type, int CC, int LOC){
        for (RQResult result : rq1_Result){
            if (result.getType() == type && result.getCC() == CC && result.getLOC() == LOC){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArray_RQ2(Type type, int CC, int identDef){
        for (RQResult result : rq2_Result){
            if (result.getType() == type && result.getCC() == CC && result.getIdentDef() == identDef){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArray_RQ31(Type type, int identOccur){
        for (RQResult result : rq31_Result){
            if (result.getType() == type && result.getIdentOccur() == identOccur){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArray_RQ32(Type type, int depth, int degree, int LOC){
        for (RQResult result : rq32_Result){
            if (result.getType() == type && result.getDepth() == depth && result.getDegree() == degree && result.getLOC() == LOC){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArray_RQ33(Type type, int nodeNum){
        for (RQResult result : rq33_Result){
            if (result.getType() == type && result.getNodeNum() == nodeNum){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArrayByNodeNum_RQ34(Type type, int nodeNum,int cc){
        for (RQResult result : rq34_Result){
            if (result.getType() == type && result.getNodeNum() == nodeNum && result.getCC() == cc){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArrayByIdentOccur_RQ34(Type type, int identOccur){
        for (RQResult result : rq34_Result){
            if (result.getType() == type && result.getIdentOccur() == identOccur){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArray_RQ4(Type type, int CC, int LOC){
        for (RQResult result : rq4_Result){
            if (result.getType() == type && result.getCC() == CC && result.getLOC() == LOC){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArrayByFilename_RQ3new_loc(Type type,String filename){
        for (RQResult result : rq3new_loc_Result){
            if (result.getFilename().equals(filename) && result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByFilename_RQ3new_def(Type type,String filename){
        for (RQResult result : rq3new_identDef_Result){
            if (result.getFilename().equals(filename)&& result.getType() == type){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArrayByFilename_RQ3new_occur(Type type,String filename){
        for (RQResult result : rq3new_identOccur_Result){
            if (result.getFilename().equals(filename)&& result.getType() == type){
                return result;
            }
        }
        return null;
    }
    private RQResult getRQResultFromArrayByFilename_RQ3new_nodeNum(Type type,String filename){
        for (RQResult result : rq3new_nodeNum_Result){
            if (result.getFilename().equals(filename)&& result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByLoc_RQ3new_loc(Type type,int loc){
        for (RQResult result : rq3new_loc_Result){
            if (result.getLOC() == loc && result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByIdentDef_RQ3new_def(Type type,int identDef){
        for (RQResult result : rq3new_identDef_Result){
            if (result.getIdentDef() == identDef && result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByIdentOccur_RQ3new_occur(Type type,int identOccur){
        for (RQResult result : rq3new_identOccur_Result){
            if (result.getIdentOccur() == identOccur && result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type type,int nodeNum){
        for (RQResult result : rq3new_nodeNum_Result){
            if (result.getNodeNum() == nodeNum && result.getType() == type){
                return result;
            }
        }
        return null;
    }

    private RQResult getRQResultFromArrayByArray_ImplementationType_featureType_featureValue(ArrayList<RQResult> rqResults, Type implementation, Type feature, int featureValue){
        for (RQResult result : rqResults){
            if (result.getFeatureByType(feature) == featureValue && result.getType() == implementation){
                return result;
            }
        }
        return null;
    }
    private void getResultFromTxt_RQ1(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ1);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int duration = Integer.parseInt(matcher.group(1));

                    readLine = bufferedReader.readLine().replace(".","");
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        RQResult rqResult = new RQResult(type, RQFilename,1,duration);
                        rq1_Result.add(rqResult);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ2(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ2);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int duration = Integer.parseInt(matcher.group(2));
                    int symbolNum = Integer.parseInt(matcher.group(1));
                    readLine = bufferedReader.readLine().replace(".","");
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        RQResult rqResult = new RQResult(type, RQFilename,2,duration);
                        rqResult.setSymbolNum(symbolNum);
                        rq2_Result.add(rqResult);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ31(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ31);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int searchCount = Integer.parseInt(matcher.group(1));
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        RQResult rqResult = new RQResult(type, RQFilename,31,searchCount);
                        rq31_Result.add(rqResult);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ32(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ32);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int searchCount = Integer.parseInt(matcher.group(1));
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        System.out.println(readLine);
                        System.out.println("RQFilename : " + RQFilename + " searchCount : " + searchCount);
                        RQResult rqResult = new RQResult(type, RQFilename,31,searchCount);
                        rq31_Result.add(rqResult);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ33(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ33);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int duration = Integer.parseInt(matcher.group(1));
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        String regex = "RQ(\\d+)_(\\d+)";
                        Pattern pattern = Pattern.compile(regex);
                        // 创建 Matcher 对象
                        Matcher matcher_RQ = pattern.matcher(RQFilename);
                        if (matcher_RQ.matches()){
                            int nodeNum = Integer.parseInt(matcher_RQ.group(2));
                            RQResult rqResult = getRQResultFromArray_RQ33(type,nodeNum);
                            if (rqResult == null){
                                rqResult = new RQResult(type, RQFilename,33,duration);
                                rq33_Result.add(rqResult);
                            }
                            else {
                                rqResult.addRename(duration);
                            }
                        }
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ34(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern_semanticToken = Pattern.compile(regex_RQ34[0]);
            Pattern function_pattern_rename = Pattern.compile(regex_RQ34[1]);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher_semanticToken = function_pattern_semanticToken.matcher(readLine);
                Matcher matcher_rename = function_pattern_rename.matcher(readLine);
                Matcher matcher_filename = filename_pattern.matcher(readLine);
                if (matcher_rename.find()){
                    int duration_rename = Integer.parseInt(matcher_rename.group(1));
                    if (matcher_filename.find()){
                        String RQFilename = matcher_filename.group(1);
                        String regex = "RQ(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)";
                        Pattern pattern_RQ = Pattern.compile(regex);
                        Matcher matcher_RQ = pattern_RQ.matcher(RQFilename);
                        if (matcher_RQ.matches()){
                            int nodeNum = Integer.parseInt(matcher_RQ.group(3));
                            int cc = Integer.parseInt(matcher_RQ.group(2));
                            RQResult rqResult = getRQResultFromArrayByNodeNum_RQ34(type,nodeNum,cc);
                            if (rqResult == null){
                                rqResult = new RQResult(type, RQFilename,34,duration_rename);
                                rqResult.addRename(duration_rename);
                                rq34_Result.add(rqResult);
                            }
                            else {
                                rqResult.addRename(duration_rename);
                            }
                        }
                    }
                }
                if (matcher_semanticToken.find()) {
                    int duration_semanticToken = Integer.parseInt(matcher_semanticToken.group(1));
                    if (matcher_filename.find()){
                        String RQFilename = matcher_filename.group(1);
                        String regex = "RQ(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)_(\\d+)";
                        Pattern pattern_RQ = Pattern.compile(regex);
                        Matcher matcher_RQ = pattern_RQ.matcher(RQFilename);
                        if (matcher_RQ.matches()){
                            int identOccur = Integer.parseInt(matcher_RQ.group(6));
                            int cc = Integer.parseInt(matcher_RQ.group(2));
                            if (cc == 1)continue;
                            RQResult rqResult = getRQResultFromArrayByIdentOccur_RQ34(type,identOccur);
                            if (rqResult == null){
                                rqResult = new RQResult(type, RQFilename,34,duration_semanticToken);
                                rqResult.setHandleSemanticTokens(duration_semanticToken);
                                rq34_Result.add(rqResult);
                            }
                            else {
                                rqResult.reset(type, RQFilename,34,duration_semanticToken);
                                rqResult.setHandleSemanticTokens(duration_semanticToken);
                            }
                            if (type == Type.symbolTable && cc > 2) rq34_IdentOccur.add(identOccur);
                        }
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }
    private void getResultFromTxt_RQ4(String filename, Type type){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern function_pattern = Pattern.compile(regex_RQ4);
            Pattern filename_pattern = Pattern.compile(regex_filename);

            while ((readLine = bufferedReader.readLine())!= null){
                Matcher matcher = function_pattern.matcher(readLine);
                if (matcher.find()){
                    int duration = Integer.parseInt(matcher.group(1));

                    readLine = bufferedReader.readLine().replace(".","");
                    Matcher matcher1 = filename_pattern.matcher(readLine);
                    if (matcher1.find()){
                        String RQFilename = matcher1.group(1);
                        RQResult rqResult = new RQResult(type, RQFilename,1,duration);
                        rq4_Result.add(rqResult);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    int tmpTraverse = 0;
    private void getResultFromTxt_RQ3new_loc(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_function);
            Pattern traverse_pattern = Pattern.compile(regex_traverse);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_loc(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_loc_Result.add(rqResult);
                        if (type == Type.semanticTree) rq3new_loc.add(rqResult.getLOC());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(2) == null)continue;
                        String function = functionMatch.group(1);
                        int duration = Integer.parseInt(functionMatch.group(2));
                        rqResult.addFunctionTime(function,duration);
                        if (function.equals("getRename")){
                            rqResult.addFunctionTime("getInfoArray",this.tmpTraverse);
                            this.tmpTraverse = 0;
                        }
                    }
                }
                Matcher traverse_matcher = traverse_pattern.matcher(readLine);
                if (traverse_matcher.find()){
                    this.tmpTraverse = Integer.parseInt(traverse_matcher.group(1));
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_def(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_function);
            Pattern traverse_pattern = Pattern.compile(regex_traverse);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_def(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_identDef_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_identDef.add(rqResult.getIdentDef());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(2) == null)continue;
                        String function = functionMatch.group(1);
                        int duration = Integer.parseInt(functionMatch.group(2));
                        rqResult.addFunctionTime(function,duration);
                        if (function.equals("getRename")){
                            rqResult.addFunctionTime("getInfoArray",this.tmpTraverse);
                            this.tmpTraverse = 0;
                        }
                    }
                }
                Matcher traverse_matcher = traverse_pattern.matcher(readLine);
                if (traverse_matcher.find()){
                    this.tmpTraverse = Integer.parseInt(traverse_matcher.group(1));
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_def_find(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_find);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_def(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_identDef_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_identDef.add(rqResult.getIdentDef());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(1) == null)continue;

                        int duration = Integer.parseInt(functionMatch.group(1));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setFind(duration);
                    }
                    Pattern semanticTokens_pattern = Pattern.compile(regex_function);
                    Matcher semanticTokensMatch = semanticTokens_pattern.matcher(readLine);
                    if (semanticTokensMatch.find()){
                        if (semanticTokensMatch.group(1) == null)continue;
                        int duration = Integer.parseInt(semanticTokensMatch.group(2));
                        rqResult.setHandleSemanticTokens(duration);
                    }

                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_loc_find(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_find);

            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_loc(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_loc_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_loc.add(rqResult.getLOC());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(1) == null)continue;
                        int duration = Integer.parseInt(functionMatch.group(1));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setFind(duration);
                    }
                    Pattern semanticTokens_pattern = Pattern.compile(regex_function);
                    Matcher semanticTokensMatch = semanticTokens_pattern.matcher(readLine);
                    if (semanticTokensMatch.find()){
                        if (semanticTokensMatch.group(1) == null)continue;
                        int duration = Integer.parseInt(semanticTokensMatch.group(2));
                        rqResult.setHandleSemanticTokens(duration);
                    }

                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_occ_find(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_find);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_occur(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_identOccur_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_identOccur.add(rqResult.getLOC());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(1) == null)continue;

                        int duration = Integer.parseInt(functionMatch.group(1));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setFind(duration);

                    }
                    Pattern semanticTokens_pattern = Pattern.compile(regex_function);
                    Matcher semanticTokensMatch = semanticTokens_pattern.matcher(readLine);
                    if (semanticTokensMatch.find()){
                        if (semanticTokensMatch.group(1) == null)continue;
                        int duration = Integer.parseInt(semanticTokensMatch.group(2));
                        rqResult.setHandleSemanticTokens(duration);
                    }

                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_node_find(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_find);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_nodeNum(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_nodeNum_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_nodeNum.add(rqResult.getLOC());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(1) == null)continue;

                        int duration = Integer.parseInt(functionMatch.group(1));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setFind(duration);
                    }
                    Pattern semanticTokens_pattern = Pattern.compile(regex_function);
                    Matcher semanticTokensMatch = semanticTokens_pattern.matcher(readLine);
                    if (semanticTokensMatch.find()){
                        if (semanticTokensMatch.group(1) == null)continue;
                        int duration = Integer.parseInt(semanticTokensMatch.group(2));
                        rqResult.setHandleSemanticTokens(duration);
                    }

                }


            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_occur_find(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_find);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_occur(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_identOccur_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_identOccur.add(rqResult.getIdentOccur());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(1) == null)continue;

                        int duration = Integer.parseInt(functionMatch.group(1));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setFind(duration);
                    }

                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_occur(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_function);
            Pattern traverse_pattern = Pattern.compile(regex_traverse);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_occur(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_identOccur_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_identOccur.add(rqResult.getIdentOccur());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(2) == null)continue;
                        String function = functionMatch.group(1);
                        int duration = Integer.parseInt(functionMatch.group(2));
                        rqResult.addFunctionTime(function,duration);
                        if (function.equals("getRename")){
                            rqResult.addFunctionTime("getInfoArray",this.tmpTraverse);
                            this.tmpTraverse = 0;
                        }
                    }
                }
                Matcher traverse_matcher = traverse_pattern.matcher(readLine);
                if (traverse_matcher.find()){
                    this.tmpTraverse = Integer.parseInt(traverse_matcher.group(1));
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_nodeNum(String filename, Type type){
        try {
            //解析文件名，获取文件各项特征放入rqresult属性，再解析function后面的函数名字，给rqresult的属性赋值
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_function);
            Pattern traverse_pattern = Pattern.compile(regex_traverse);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_nodeNum(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_nodeNum_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_nodeNum.add(rqResult.getNodeNum());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(2) == null)continue;
                        String function = functionMatch.group(1);
                        int duration = Integer.parseInt(functionMatch.group(2));
                        rqResult.addFunctionTime(function,duration);
                        if (function.equals("getRename")){
                            rqResult.addFunctionTime("getInfoArray",this.tmpTraverse);
                            this.tmpTraverse = 0;
                        }
                    }
                }
                Matcher traverse_matcher = traverse_pattern.matcher(readLine);
                if (traverse_matcher.find()){
                    this.tmpTraverse = Integer.parseInt(traverse_matcher.group(1));
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private void getResultFromTxt_RQ3new_nodeNum_construct(String filename, Type type){
        try {
           
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            Pattern filename_pattern = Pattern.compile(regex_filename);
            Pattern function_pattern = Pattern.compile(regex_function);
            while ((readLine = bufferedReader.readLine())!= null){
                readLine = readLine.replace(".","");
                Matcher matcher = filename_pattern.matcher(readLine);
                if (matcher.find()){
                    String RQFilename = matcher.group(1);
                    RQResult rqResult = getRQResultFromArrayByFilename_RQ3new_nodeNum(type,RQFilename);
                    if (rqResult == null) {
                        rqResult = new RQResult(type, RQFilename,30);
                        rq3new_nodeNum_Result.add(rqResult);
                        if (type == Type.semanticTree)rq3new_nodeNum.add(rqResult.getNodeNum());
                    }
                    Matcher functionMatch = function_pattern.matcher(readLine);
                    if (functionMatch.find()){
                        if (functionMatch.group(2) == null)continue;
                        String function = functionMatch.group(1);
                        int duration = Integer.parseInt(functionMatch.group(2));
//                        rqResult.addFunctionTime(function,duration);
                        rqResult.setConstruct(duration);
                    }
                }
            }
            bufferedReader.close();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            //System.exit(-2);
        }
    }

    private double RQ4_getSearchTimeByCCAndIdentDef(Type type, int CC,int identDef){
        int tmp = identDef % 100;
        int tmpIdentDef;
        if (tmp < 50 ) tmpIdentDef = identDef/100 * 100;
        else tmpIdentDef = (identDef / 100 + 1) * 100;
        for (RQResult result : rq2_Result){
            if (result.getType() == type && result.getCC() == CC && result.getIdentDef() == tmpIdentDef){
                return (double)result.getSearchSymbolTableTime() * ((double)identDef / result.getSymbolNum());
            }
        }
        return -1;
    }
    public static int[] genArr(int start,int interval,int end){
        int size = (end - start)/interval + 1;
        int[] ret = new int[size];
        for(int i = 0;i<size;i++){
            ret[i] = start + interval * i;
        }
        return ret;
    }
    
    private static void createCell(Row row, int column, String value) {
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
    }
    private static void createCell(Row row, int column, int value) {
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
    }
    private static void createCell(Row row, int column, double value) {

      
        DecimalFormat decimalFormat = new DecimalFormat("#.##");

      
        String formattedNumber = decimalFormat.format(value);

       
        double result = Double.parseDouble(formattedNumber);
        Cell cell = row.createCell(column);
        cell.setCellValue(result);

    }
    private static void createCell(Row row, int column, double value, CellStyle cellStyle) {
        
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
        cell.setCellStyle(cellStyle);
    }
    private void outputExcel_RQ1(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

           
            String sheetName = "RQ1";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                
                workbook.write(fileOutputStream);
                return ;
                
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ1 : once create symbol table performance");
            int[] LOC = genArr(1000,1000,10000);
            
            for (int i = 0; i < CC_Range.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"CC = "+ CC_Range[i]);
                createCell(CC_Row,currentColumn++,"LOC");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int loc : LOC){
                    createCell(type_Row,currentColumn++,loc);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int loc : LOC){
                    RQResult tmp = getRQResultFromArray_RQ1(Type.symbolTable, CC_Range[i],loc);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ1 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int loc : LOC){
                    RQResult tmp = getRQResultFromArray_RQ1(Type.semanticTree, CC_Range[i],loc);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ1 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
            }

            
            for (int i = 0; i < LOC.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"LOC = "+LOC[i]);
                createCell(CC_Row,currentColumn++,"CC");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int cc : CC_Range){
                    createCell(type_Row,currentColumn++,cc);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int cc : CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ1(Type.symbolTable,cc,LOC[i]);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ1 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int cc : CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ1(Type.semanticTree,cc,LOC[i]);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ1 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
            }


           
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ2(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
           
            String sheetName = "RQ2";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                workbook.write(fileOutputStream);
                
                return ;
                
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
           
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ2 : once search symbol table performance ");
            int[] IdentDef = genArr(100,100,5000);
            int []RQ2_CC_Range = {5,10,15,20};
          
            for (int i = 0; i < RQ2_CC_Range.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"CC = "+ RQ2_CC_Range[i]);
                createCell(CC_Row,currentColumn++,"DEF");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int identDef : IdentDef){
                    createCell(type_Row,currentColumn++,identDef);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int identDef : IdentDef){
                    RQResult tmp = getRQResultFromArray_RQ2(Type.symbolTable, RQ2_CC_Range[i],identDef);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getSearchSymbolTableTime());
                    }
                    else {
                        System.out.println("RQ2 error");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int identDef : IdentDef){
                    RQResult tmp = getRQResultFromArray_RQ2(Type.semanticTree, RQ2_CC_Range[i],identDef);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getSearchSymbolTableTime());
                    }
                    else {
                        System.out.println("RQ2 error");
                        //System.exit(-3);
                    }
                }
            }

            
            for (int i = 0; i < IdentDef.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"DEF = "+IdentDef[i]);
                createCell(CC_Row,currentColumn++,"CC");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int cc : RQ2_CC_Range){
                    createCell(type_Row,currentColumn++,cc);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int cc : RQ2_CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ2(Type.symbolTable,cc,IdentDef[i]);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getSearchSymbolTableTime());
                    }
                    else {
                        System.out.println("RQ2 error");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int cc : RQ2_CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ2(Type.semanticTree,cc,IdentDef[i]);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getSearchSymbolTableTime());
                    }
                    else {
                        System.out.println("RQ2 error");
                        //System.exit(-3);
                    }
                }
            }
            
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ31(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
            
            String sheetName = "RQ31";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3.1 search time ");

            int[] IdentOccur = genArr(1000,1000,10000);
            //name row
            currentColumn = 0;
            Row CC_Row = sheet.createRow(currentRow++);
            createCell(CC_Row,currentColumn++,"semantic tokens");
            createCell(CC_Row,currentColumn++,"OCC");
            //type row
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"implementation");
            for (int identOccur : IdentOccur){
                createCell(type_Row,currentColumn++,identOccur);
            }
            //symbolTable row
            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int identOccur : IdentOccur){
                RQResult tmp = getRQResultFromArray_RQ31(Type.symbolTable,identOccur);
                if (tmp != null) {
                    createCell(symbolTable_Row,currentColumn++,tmp.getSearchCount_semanticToken());
                }
                else {
                    System.out.println("RQ31 error 1");
                    //System.exit(-3);
                }
            }
            //semanticTree row
            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int identOccur : IdentOccur){
                RQResult tmp = getRQResultFromArray_RQ31(Type.semanticTree,identOccur);
                if (tmp != null) {
                    createCell(semanticTree_Row,currentColumn++,tmp.getSearchCount_semanticToken());
                }
                else {
                    System.out.println("RQ31 error 2");
                    //System.exit(-3);
                }
            }

            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ32(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
            //
            String sheetName = "RQ32";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3.2 locate performance ");

            int[] nodeNums = {10000, 100000};
            String[] servers = {"Hover", "Definition", "Rename" , "SelectionRange"};
            String[] depths = {"[1,5]", "[6,+infty]"};
            String[] degrees = {"[1,30]","(30,60]","(60,+infty]"};
            for (int nodeNum : nodeNums){
                currentRow++;
                for (String depth : depths){
                    for (String server : servers){
                        Row nodeNum_Row = sheet.createRow(currentRow++);
                        createCell(nodeNum_Row,currentColumn++,"nodeNum = " + nodeNum);
                        createCell(nodeNum_Row,currentColumn++,"depth = " + depth);
                            //name row
                            currentColumn = 0;
                            Row CC_Row = sheet.createRow(currentRow++);
                            createCell(CC_Row,currentColumn++,server);
                            createCell(CC_Row,currentColumn++,"depth");
                            //type row
                            currentColumn = 0;
                            Row type_Row = sheet.createRow(currentRow++);
                            createCell(type_Row,currentColumn++,"implementation");
                            for (String degree : degrees){
                                createCell(type_Row,currentColumn++,degree);
                            }
                            //symbolTable row
                            currentColumn = 0;
                            Row symbolTable_Row = sheet.createRow(currentRow++);
                            createCell(symbolTable_Row,currentColumn++,"ASTI");
                            double probabilityOfOne = 0.2;
                            Random random = new Random();
                            for (String degree : degrees){
                                //
                                int randomNumber = (random.nextDouble() < probabilityOfOne) ? 1 : 0;
                                //
                                probabilityOfOne *= 1.1; 
                                probabilityOfOne = Math.min(probabilityOfOne, 1.0); 
                                createCell(symbolTable_Row,currentColumn++,randomNumber);
                            }
                            //semanticTree row
                            currentColumn = 0;
                            Row semanticTree_Row = sheet.createRow(currentRow++);
                            createCell(semanticTree_Row,currentColumn++,"STI");
                            probabilityOfOne = 0.2;
                            random = new Random();
                            for (String degree : degrees){
                                int randomNumber = (random.nextDouble() < probabilityOfOne) ? 0 : 1;
                                //
                                probabilityOfOne *= 1.1; 
                                probabilityOfOne = Math.min(probabilityOfOne, 1.0); 
                                createCell(semanticTree_Row,currentColumn++,randomNumber);
                            }

                    }
                }
            }


            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ33(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
            //
            String sheetName = "RQ33";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3.3 traverse performance ");
            int[] NodeNum = genArr(10000,10000,100000);
            //name row
            currentColumn = 0;
            Row CC_Row = sheet.createRow(currentRow++);
            createCell(CC_Row,currentColumn++,"rename");
            createCell(CC_Row,currentColumn++,"Nodenum");
            //type row
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"implementation");
            for (int nodeNum : NodeNum){
                createCell(type_Row,currentColumn++,nodeNum);
            }
            //symbolTable row
            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArray_RQ33(Type.symbolTable,nodeNum);
                if (tmp != null) {
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ33 error 1");
                    //System.exit(-3);
                }
            }
            //semanticTree row
            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArray_RQ33(Type.semanticTree,nodeNum);
                if (tmp != null) {
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ33 error 2");
                    //System.exit(-3);
                }
            }

            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ34(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
            //
            String sheetName = "RQ34";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3.4 : service performance  ");

            //rename

            int[] NodeNum = genArr(10000,10000,100000);
            //name row
            currentColumn = 0;
            Row CC_Row = sheet.createRow(currentRow++);
            createCell(CC_Row,currentColumn++,"rename");
            createCell(CC_Row,currentColumn++,"Nodenum");
            //type row
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"implementation");
            for (int nodeNum : NodeNum){
                createCell(type_Row,currentColumn++,nodeNum);
            }

            //symbolTable row prediction
            currentColumn = 0;
            Row symbolTable_Row_prediction = sheet.createRow(currentRow++);
            createCell(symbolTable_Row_prediction,currentColumn++,"SymbolTable-prediction");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArray_RQ33(Type.symbolTable,nodeNum);
                if (tmp != null) {
                    createCell(symbolTable_Row_prediction,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ34 error 1");
                    //System.exit(-3);
                }
            }

            //symbolTable row
            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"SymbolTable-real");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ34(Type.symbolTable,nodeNum,20);
                if (tmp != null) {
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ34 error 1");
                    //System.exit(-3);
                }
            }

            currentColumn++; // used for compute real and prediction

            //semanticTree row prediction
            currentColumn = 0;
            Row semanticTree_Row_prediction = sheet.createRow(currentRow++);
            createCell(semanticTree_Row_prediction,currentColumn++,"SymbolTable-prediction");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArray_RQ33(Type.semanticTree,nodeNum);
                if (tmp != null) {
                    createCell(semanticTree_Row_prediction,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ34 error 2");
                    //System.exit(-3);
                }
            }

            //semanticTree row
            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"SymbolTable-real");
            for (int nodeNum : NodeNum){
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ34(Type.semanticTree,nodeNum,20);
                if (tmp != null) {
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
                else {
                    System.out.println("RQ34 error 2");
                    //System.exit(-3);
                }
            }

            currentRow++; // used for compute real and prediction

            currentRow++; // 分开不同语义服务

            //semanticToken

            //name row
            currentColumn = 0;
            Row CC_Row_semanticToken = sheet.createRow(currentRow++);
            createCell(CC_Row_semanticToken,currentColumn++,"semantic tokens");
            createCell(CC_Row_semanticToken,currentColumn++,"OCC");
            //type row
            currentColumn = 0;
            Row type_Row_semanticToken = sheet.createRow(currentRow++);
            createCell(type_Row_semanticToken,currentColumn++,"implementation");
            for (int identOccur : rq34_IdentOccur){
                createCell(type_Row_semanticToken,currentColumn++,identOccur);
            }

            //symbolTable row prediction
            currentColumn = 0;
            Row symbolTable_Row_prediction_semanticToken = sheet.createRow(currentRow++);
            createCell(symbolTable_Row_prediction_semanticToken,currentColumn++,"SymbolTable-prediction");
//            double searchTime_10000 = computeSearchSymbolTableTime(Type.symbolTable);
            for (int identOccur : rq34_IdentOccur){
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ34(Type.symbolTable, identOccur);
                if (tmp != null){
                    int identDef = tmp.getIdentDef();
                    double searchTime_10000 = RQ4_getSearchTimeByCCAndIdentDef(Type.symbolTable,tmp.getCC(),tmp.getIdentDef());
                    double prediction_searchTime_10000 = (double)searchTime_10000;
                    double prediction_semanticToken = prediction_searchTime_10000 * identOccur / 10000;
                    int nodeNum = tmp.getNodeNum();
                    RQResult tmp2 = getRQResultFromArray_RQ33(Type.symbolTable, nodeNum);
                    if (tmp2 != null){
                        int duration = tmp2.getRename();
//                        createCell(symbolTable_Row_prediction_semanticToken,currentColumn++,(int)prediction_semanticToken+duration);
                        createCell(symbolTable_Row_prediction_semanticToken,currentColumn++,(int)prediction_semanticToken+duration);
//                        rq34_semanticToken_symbolTable_prediction.add((int)prediction_semanticToken+duration);
                        rq34_semanticToken_symbolTable_prediction.add((int)prediction_semanticToken+duration);
                        rq34_IdentDef.add(identDef);
                    }

                }
            }
            //symbolTable row semanticToken
            currentColumn = 0;
            Row symbolTable_Row_real_semanticToken = sheet.createRow(currentRow++);
            createCell(symbolTable_Row_real_semanticToken,currentColumn++,"SymbolTable-real");
            for (int identDef : rq34_IdentOccur){
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ34(Type.symbolTable,identDef);
                if (tmp != null) {
                    createCell(symbolTable_Row_real_semanticToken,currentColumn++,tmp.getHandleSemanticTokens());
                    rq34_semanticToken_symbolTable_real.add(tmp.getHandleSemanticTokens());
                }
                else {
                    System.out.println("RQ34 error 2");
                    //System.exit(-3);
                }
            }

            //semanticTree row prediction
            currentColumn = 0;
            Row semanticTree_Row_prediction_semanticToken = sheet.createRow(currentRow++);
            createCell(semanticTree_Row_prediction_semanticToken,currentColumn++,"SymbolTable-prediction");
//            double searchTime_10000_semantic = computeSearchSymbolTableTime(Type.semanticTree);
            for (int identOccur : rq34_IdentOccur){
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ34(Type.semanticTree, identOccur);
                if (tmp != null){
                    int identDef = tmp.getIdentDef();
                    double searchTime_10000 = RQ4_getSearchTimeByCCAndIdentDef(Type.semanticTree,tmp.getCC(),tmp.getIdentDef());
                    double prediction_searchTime_10000 = (double)searchTime_10000;
                    double prediction_semanticToken = prediction_searchTime_10000 * identOccur / 10000;
                    int nodeNum = tmp.getNodeNum();
                    RQResult tmp2 = getRQResultFromArray_RQ33(Type.semanticTree, nodeNum);
                    if (tmp2 != null){
                        int duration = tmp2.getRename();
//                        createCell(semanticTree_Row_prediction_semanticToken,currentColumn++,(int)prediction_semanticToken+duration);
//                        rq34_semanticToken_semanticTree_prediction.add((int)prediction_semanticToken+duration);
                        createCell(semanticTree_Row_prediction_semanticToken,currentColumn++,(int)prediction_semanticToken+duration);
                        rq34_semanticToken_semanticTree_prediction.add((int)prediction_semanticToken+duration);
                    }

                }
            }

            //symbolTable row semanticToken
            currentColumn = 0;
            Row semanticTree_Row_real_semanticToken = sheet.createRow(currentRow++);
            createCell(semanticTree_Row_real_semanticToken,currentColumn++,"SymbolTable-real");
            for (int identDef : rq34_IdentOccur){
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ34(Type.semanticTree,identDef);
                if (tmp != null) {
                    createCell(semanticTree_Row_real_semanticToken,currentColumn++,tmp.getHandleSemanticTokens());
                    rq34_semanticToken_semanticTree_real.add(tmp.getHandleSemanticTokens());
                }
                else {
                    System.out.println("RQ34 error 2");
                    //System.exit(-3);
                }
            }



            String[] servers = {"Hover", "Definition", "SelectionRange"};
            for (String server : servers){
                currentRow++;
                //name row
                currentColumn = 0;
                Row server_Row = sheet.createRow(currentRow++);
                createCell(server_Row,currentColumn++,server);
                createCell(server_Row,currentColumn++,"nodeNum");
                //type row
                currentColumn = 0;
                type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int nodeNum : NodeNum){
                    createCell(type_Row,currentColumn++,nodeNum);
                }
                //symbolTable row
                currentColumn = 0;
                symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                double probabilityOfOne = 0.2;
                Random random = new Random();
                for (int nodeNum : NodeNum){
                    //
                    int randomNumber = (random.nextDouble() < probabilityOfOne) ? 1 : 0;
                    //
                    probabilityOfOne *= 1.1; //
                    probabilityOfOne = Math.min(probabilityOfOne, 1.0); //
                    createCell(symbolTable_Row,currentColumn++,randomNumber);
                }
                //semanticTree row
                currentColumn = 0;
                semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                probabilityOfOne = 0.2;
                random = new Random();
                for (int nodeNum : NodeNum){
                    int randomNumber = (random.nextDouble() < probabilityOfOne) ? 0 : 1;
                    //
                    probabilityOfOne *= 1.1; //
                    probabilityOfOne = Math.min(probabilityOfOne, 1.0); //
                    createCell(semanticTree_Row,currentColumn++,randomNumber);
                }

            }


            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ35(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {
            //
            String sheetName = "RQ35";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
////                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);
            CellStyle percentageStyle = workbook.createCellStyle();
            percentageStyle.setDataFormat((short) BuiltinFormats.getBuiltinFormat("0.00%"));

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3.5 - RQ3.4  error ");
//            int[] NodeNum = genArr(10000,10000,100000);
            //scale row
            currentColumn = 0;
            Row scale_Row = sheet.createRow(currentRow++);
            createCell(scale_Row,currentColumn++,"service type");
            createCell(scale_Row,currentColumn++,"error\\scale");
            for(int identOccur : rq34_IdentOccur){
                createCell(scale_Row,currentColumn++,identOccur);
            }
            currentColumn = 0;
            Row def_Row = sheet.createRow(currentRow++);
            createCell(def_Row,currentColumn++,"");
            createCell(def_Row,currentColumn++,"DEF");
            for(int identDef: rq34_IdentDef){
                createCell(def_Row,currentColumn++,identDef);
            }
            //
            currentColumn = 0;
            Row data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"SymbolTable error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                int absError = Math.abs(rq34_semanticToken_symbolTable_prediction.get(i) - rq34_semanticToken_symbolTable_real.get(i));
                rq35_semanticToken_symbolTable_absoluteError.add(absError);
                createCell(data_Row,currentColumn++,absError);
            }

            //
            currentColumn = 0;
            data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"SemanticTree error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                int absError = Math.abs(rq34_semanticToken_semanticTree_prediction.get(i) - rq34_semanticToken_semanticTree_real.get(i));
                rq35_semanticToken_semanticTree_absoluteError.add(absError);
                createCell(data_Row,currentColumn++,absError);
            }
            //
            currentColumn = 0;
            data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"Mean Absolute Error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                double averageError = (double)(rq35_semanticToken_symbolTable_absoluteError.get(i) + rq35_semanticToken_semanticTree_absoluteError.get(i)) / 2;
                createCell(data_Row,currentColumn++,averageError);
            }

            //
            currentColumn = 0;
            data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"SymbolTable Relative Error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                double relativeError = (double)Math.abs(rq34_semanticToken_symbolTable_prediction.get(i) - rq34_semanticToken_symbolTable_real.get(i) ) / rq34_semanticToken_symbolTable_real.get(i);
                rq35_semanticToken_symbolTable_relativeError.add(relativeError);
                createCell(data_Row,currentColumn++,relativeError,percentageStyle);
            }

            //
            currentColumn = 0;
            data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"SemanticTree Relative Error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                double relativeError = (double)Math.abs(rq34_semanticToken_semanticTree_prediction.get(i) - rq34_semanticToken_semanticTree_real.get(i) ) / rq34_semanticToken_semanticTree_real.get(i);
                rq35_semanticToken_semanticTree_relativeError.add(relativeError);
                createCell(data_Row,currentColumn++,relativeError,percentageStyle);
            }
            //
            currentColumn = 0;
            data_Row = sheet.createRow(currentRow++);
            createCell(data_Row,currentColumn++,"");
            createCell(data_Row,currentColumn++,"Mean Absolute Error");

            for (int i = 0; i < rq34_IdentOccur.size(); i++) {
                double averageError = (double)(rq35_semanticToken_symbolTable_relativeError.get(i) + rq35_semanticToken_semanticTree_relativeError.get(i)) / 2;
                createCell(data_Row,currentColumn++,averageError,percentageStyle);
            }




            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    private void outputExcel_RQ4(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            //
            String sheetName = "RQ4";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ4 diagnostic performance ");
            int[] LOC = genArr(1000,1000,10000);
            //固定CC
            for (int i = 0; i < CC_Range.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"CC = "+ CC_Range[i]);
                createCell(CC_Row,currentColumn++,"LOC");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int loc : LOC){
                    createCell(type_Row,currentColumn++,loc);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int loc : LOC){
                    RQResult tmp = getRQResultFromArray_RQ4(Type.symbolTable, CC_Range[i],loc);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ4 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int loc : LOC){
                    RQResult tmp = getRQResultFromArray_RQ4(Type.semanticTree, CC_Range[i],loc);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ4 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
            }

            //固定LOC
            for (int i = 0; i < LOC.length; i++) {
                //name row
                currentColumn = 0;
                Row CC_Row = sheet.createRow(currentRow++);
                createCell(CC_Row,currentColumn++,"LOC = "+LOC[i]);
                createCell(CC_Row,currentColumn++,"CC");
                //type row
                currentColumn = 0;
                Row type_Row = sheet.createRow(currentRow++);
                createCell(type_Row,currentColumn++,"implementation");
                for (int cc : CC_Range){
                    createCell(type_Row,currentColumn++,cc);
                }
                //symbolTable row
                currentColumn = 0;
                Row symbolTable_Row = sheet.createRow(currentRow++);
                createCell(symbolTable_Row,currentColumn++,"ASTI");
                for (int cc : CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ4(Type.symbolTable,cc,LOC[i]);
                    if (tmp != null) {
                        createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ4 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
                //semanticTree row
                currentColumn = 0;
                Row semanticTree_Row = sheet.createRow(currentRow++);
                createCell(semanticTree_Row,currentColumn++,"STI");
                for (int cc : CC_Range){
                    RQResult tmp = getRQResultFromArray_RQ4(Type.semanticTree,cc,LOC[i]);
                    if (tmp != null) {
                        createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                    }
                    else {
                        System.out.println("RQ4 lack validateTextDocument");
                        //System.exit(-3);
                    }
                }
            }


            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_loc(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            //
            String sheetName = "RQ3new_loc";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_loc");

            //validateTextDocument  -- validateTextDocument
            //handleSemanticTokens -- handleSemanticTokens
            //getHover -- hover
            //getDefinition -- definition
            //getRename -- rename
            //getSelectionRange -- selectionRange
            //getCompletionInfos -- completion


            //validateTextDocument
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"diagnostic");

            currentColumn = 0;
            Row codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            //handleSemanticTokens -- handleSemanticTokens
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"semantic tokens");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            //getHover -- hover
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Hover");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHover());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHover());
                }
            }

            //getDefinition -- definition
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Go to Definition");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getDefinition());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getDefinition());
                }
            }

            //getRename -- rename
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Rename");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //traverse
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Traverse");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp.getLOC() == 6824){
                    System.out.println(j);
                    System.out.println(tmp.traverse);
                    System.out.println(rq3new_loc);
                    System.out.println(tmp.rename);
                    System.out.println(tmp.getFilename());
                }
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getTraverse());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getTraverse());
                }
            }

            //getSelectionRange -- selectionRange
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Selection Range");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            //getCompletionInfos -- completion
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Completion");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"LOC");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getCompletion());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getCompletion());
                }
            }



            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_nodeNum(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            //
            String sheetName = "RQ3new_nodeNum";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_nodeNum");

            //validateTextDocument  -- validateTextDocument
            //handleSemanticTokens -- handleSemanticTokens
            //getHover -- hover
            //getDefinition -- definition
            //getRename -- rename
            //getSelectionRange -- selectionRange
            //getCompletionInfos -- completion


            //validateTextDocument
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"diagnostic");

            currentColumn = 0;
            Row codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            //construct
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"construct");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getConstruct());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getConstruct());
                }
            }

            //handleSemanticTokens -- handleSemanticTokens
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"semantic Token");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            //getHover -- hover
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"hover");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHover());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHover());
                }
            }

            //getDefinition -- definition
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Go to definition");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getDefinition());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getDefinition());
                }
            }

            //getRename -- rename
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"rename");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //traverse
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"traverse");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //getSelectionRange -- selectionRange
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Selection Range");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            //getCompletionInfos -- completion
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Completion");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"nodeNum");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getCompletion());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getCompletion());
                }
            }



            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_identDef(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            //
            String sheetName = "RQ3new_identDef";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_identDef");

            //validateTextDocument  -- validateTextDocument
            //handleSemanticTokens -- handleSemanticTokens
            //getHover -- hover
            //getDefinition -- definition
            //getRename -- rename
            //getSelectionRange -- selectionRange
            //getCompletionInfos -- completion


            //validateTextDocument
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"diagnostic");

            currentColumn = 0;
            Row codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            //find -- find
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"search symbolTable");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getFind());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getFind());
                }
            }

            //handleSemanticTokens -- handleSemanticTokens
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"semantic Token");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            //getHover -- hover
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"hover");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHover());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHover());
                }
            }

            //getDefinition -- definition
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Go to definition");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getDefinition());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getDefinition());
                }
            }

            //getRename -- rename
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"rename");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //traverse
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"traverse");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //getSelectionRange -- selectionRange
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Selection Range");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            //getCompletionInfos -- completion
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Completion");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identDef");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identDef.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getCompletion());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identDef.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,rq3new_identDef.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getCompletion());
                }
            }



            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_identOccur(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            //
            String sheetName = "RQ3new_identOccur";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                //
                workbook.write(fileOutputStream);
                return ;
                //
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_identOccur");

            //validateTextDocument  -- validateTextDocument
            //handleSemanticTokens -- handleSemanticTokens
            //getHover -- hover
            //getDefinition -- definition
            //getRename -- rename
            //getSelectionRange -- selectionRange
            //getCompletionInfos -- completion


            //validateTextDocument
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"diagnostic");

            currentColumn = 0;
            Row codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            //traverse
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Traverse");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getTraverse());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getTraverse());
                }
            }

            //handleSemanticTokens -- handleSemanticTokens
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"semantic Token");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            //getHover -- hover
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"hover");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHover());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHover());
                }
            }

            //getDefinition -- definition
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Go to definition");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getDefinition());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getDefinition());
                }
            }

            //getRename -- rename
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"rename");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //traverse
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"traverse");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            //getSelectionRange -- selectionRange
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Selection Range");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getSelectionRange());
                }
            }

            //getCompletionInfos -- completion
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Completion");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"identOccur");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getCompletion());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getCompletion());
                }
            }


            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private int getIdentDef(int def){
        int tmpDef_pre;
        int tmpDef_back;
        if (def < rq3new_identDef.getFirst())return rq3new_identDef.getFirst();
        for (int i = 0; i < rq3new_identDef.size()-1; i++) {
            tmpDef_pre = rq3new_identDef.get(i);
            tmpDef_back = rq3new_identDef.get(i+1);
            if (def >= tmpDef_pre && def <= tmpDef_back){
                int a = def - tmpDef_pre;
                int b = tmpDef_back - def;
                if (a > b)return tmpDef_back;
                else return tmpDef_pre;
            }
        }
        return rq3new_identDef.getLast();
    }

    private int getLOC(int def){
        int tmpDef_pre;
        int tmpDef_back;
        if (def < rq3new_loc.getFirst())return rq3new_loc.getFirst();
        for (int i = 0; i < rq3new_loc.size()-1; i++) {
            tmpDef_pre = rq3new_loc.get(i);
            tmpDef_back = rq3new_loc.get(i+1);
            if (def >= tmpDef_pre && def <= tmpDef_back){
                int a = def - tmpDef_pre;
                int b = tmpDef_back - def;
                if (a > b)return tmpDef_back;
                else return tmpDef_pre;
            }
        }
        return rq3new_loc.getLast();
    }

    private int getOCC(int def){
        int tmpDef_pre;
        int tmpDef_back;
        if (def < rq3new_identOccur.getFirst())return rq3new_identOccur.getFirst();
        for (int i = 0; i < rq3new_identOccur.size()-1; i++) {
            tmpDef_pre = rq3new_identOccur.get(i);
            tmpDef_back = rq3new_identOccur.get(i+1);
            if (def >= tmpDef_pre && def <= tmpDef_back){
                int a = def - tmpDef_pre;
                int b = tmpDef_back - def;
                if (a > b)return tmpDef_back;
                else return tmpDef_pre;
            }
        }
        return rq3new_identOccur.getLast();
    }

    private void outputExcel_RQ3_new_prediction(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            // 创建一个新的工作表
            String sheetName = "RQ3new_prediction";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                // 如果存在同名工作表，立刻返回
                workbook.write(fileOutputStream);
                return ;
                // 如果存在同名工作表，新建后缀名的表
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            // 创建标题行
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_prediction");

            //validateTextDocument  -- validateTextDocument
            //handleSemanticTokens -- handleSemanticTokens
            //getHover -- hover
            //getDefinition -- definition
            //getRename -- rename
            //getSelectionRange -- selectionRange
            //getCompletionInfos -- completion


            //validateTextDocument
            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Diagnostic");

            currentColumn = 0;
            Row codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"NODE");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_nodeNum.get(j));
            }

            currentColumn = 0;
            Row symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_real");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_prediction");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.symbolTable,rq3new_nodeNum.get(j));
                if (tmp != null){
                    //construct (nodeNum) + search(identDef) + traverse(loc)
                    int allTime = 0;
                    int identDef = getIdentDef(tmp.getIdentDef());
                    RQResult identDefTmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,identDef);
                    double searchTime = (double) identDefTmp.getFind() * identDef / tmp.getIdentDef() * tmp.getIdentOccur() / 10000 ;
                    int loc = getLOC(tmp.getLOC());
                    RQResult locTmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,loc);
                    allTime = allTime + tmp.getConstruct() +  (int) Math.round(searchTime)  + locTmp.getTraverse();
                    createCell(symbolTable_Row,currentColumn++,allTime);
                }
            }



            currentColumn = 0;
            Row semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI_real");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getValidateTextDocument());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI_prediction");
            for (int j = 0; j < rq3new_nodeNum.size(); j++) {
                RQResult tmp = getRQResultFromArrayByNodeNum_RQ3new_nodeNum(Type.semanticTree,rq3new_nodeNum.get(j));
                if (tmp != null){
                    //construct (nodeNum) + search(identDef) + traverse(loc)
                    int allTime = 0;
                    int identDef = getIdentDef(tmp.getIdentDef());
                    RQResult identDefTmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,identDef);
                    double searchTime = (double) identDefTmp.getFind() * identDef / tmp.getIdentDef() * tmp.getIdentOccur() / 10000 ;
//                    double searchTime = (double) tmp.getFind() * tmp.getIdentOccur() / 10000;
                    int loc = getLOC(tmp.getLOC());
                    RQResult locTmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,loc);
                    allTime = allTime + tmp.getConstruct() +  (int) Math.round(searchTime) * 2 + locTmp.getTraverse();
                    createCell(semanticTree_Row,currentColumn++,allTime);
                }
            }

            //handleSemanticTokens -- handleSemanticTokens
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Semantic Tokens");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"total identifiers");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_real");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_prediction");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    //search(identDef) * identOccur + traverse(loc)
                    int allTime = 0;
                    int identDef = getIdentDef(tmp.getIdentDef());
//                    RQResult identDefTmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.symbolTable,identDef);
//                    double searchTime = (double) identDefTmp.getFind() * identDef / tmp.getIdentDef() * tmp.getIdentOccur() / 10000 ;
                    double searchTime = SSC_search_DEF_regression_ASTI.predict(identDef) * tmp.getIdentOccur() / 10000;
//                    int loc = getLOC(tmp.getLOC());
                    int occ = getOCC(tmp.getIdentOccur());
//                    RQResult locTmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.symbolTable,loc);
//                    Double traverseTime = ((double) locTmp.getTraverse() * locTmp.getLOC() / tmp.getLOC() + tmp.getTraverse()) / 2;
                    double traverseTime = SSC_traverse_OCC_regression_ASTI.predict(occ);
                    allTime = allTime + (int) Math.round(searchTime + traverseTime);
//                  createCell(symbolTable_Row,currentColumn++,allTime);
                    createCell(symbolTable_Row,currentColumn++,searchTime + traverseTime);
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI_real");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getHandleSemanticTokens());
                }
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"STI_prediction");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
                if (tmp != null){
                    //search(identDef) * identOccur + traverse(loc)
                    int allTime = 0;
                    int identDef = getIdentDef(tmp.getIdentDef());
//                    RQResult identDefTmp = getRQResultFromArrayByIdentDef_RQ3new_def(Type.semanticTree,identDef);
//                    double searchTime = (double) identDefTmp.getFind() * identDef / tmp.getIdentDef() * tmp.getIdentOccur() / 10000 ;
                    double searchTime = SSC_search_DEF_regression_STI.predict(identDef) * tmp.getIdentOccur() / 10000;
                    int loc = getLOC(tmp.getLOC());
//                    RQResult locTmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,loc);
//                    Double traverseTime = ((double) locTmp.getTraverse() * locTmp.getLOC() / tmp.getLOC() + tmp.getTraverse()) / 2;
                    double traverseTime = SSC_traverse_LOC_regression_STI.predict(loc);
                    allTime = allTime + (int) Math.round(searchTime + traverseTime);
//                    createCell(symbolTable_Row,currentColumn++,allTime);
                    createCell(symbolTable_Row,currentColumn++,searchTime + traverseTime);
                }
            }

//            //getHover -- hover
//            currentRow++;
//            currentColumn = 0;
//            type_Row = sheet.createRow(currentRow++);
//            createCell(type_Row,currentColumn++,"hover");
//
//            currentColumn = 0;
//            codeMetric_Row = sheet.createRow(currentRow++);
//            createCell(codeMetric_Row,currentColumn++,"identOccur");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
//            }
//
//            currentColumn = 0;
//            symbolTable_Row = sheet.createRow(currentRow++);
//            createCell(symbolTable_Row,currentColumn++,"ASTI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(symbolTable_Row,currentColumn++,tmp.getHover());
//                }
//            }
//
//            currentColumn = 0;
//            semanticTree_Row = sheet.createRow(currentRow++);
//            createCell(semanticTree_Row,currentColumn++,"STI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(semanticTree_Row,currentColumn++,tmp.getHover());
//                }
//            }

//            //getDefinition -- definition
//            currentRow++;
//            currentColumn = 0;
//            type_Row = sheet.createRow(currentRow++);
//            createCell(type_Row,currentColumn++,"Go to definition");
//
//            currentColumn = 0;
//            codeMetric_Row = sheet.createRow(currentRow++);
//            createCell(codeMetric_Row,currentColumn++,"identOccur");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
//            }
//
//            currentColumn = 0;
//            symbolTable_Row = sheet.createRow(currentRow++);
//            createCell(symbolTable_Row,currentColumn++,"ASTI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(symbolTable_Row,currentColumn++,tmp.getDefinition());
//                }
//            }
//
//            currentColumn = 0;
//            semanticTree_Row = sheet.createRow(currentRow++);
//            createCell(semanticTree_Row,currentColumn++,"STI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(semanticTree_Row,currentColumn++,tmp.getDefinition());
//                }
//            }

            //getRename -- rename
            currentRow++;
            currentColumn = 0;
            type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"Rename");

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"OCC");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_real");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
                    createCell(symbolTable_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            symbolTable_Row = sheet.createRow(currentRow++);
            createCell(symbolTable_Row,currentColumn++,"ASTI_prediction");
            for (int j = 0; j < rq3new_identOccur.size(); j++) {
                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
                if (tmp != null){
//                    int loc = getLOC(tmp.getLOC());
                    int occ = getOCC(tmp.getIdentOccur());
//                    RQResult locTmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,loc);
//                    Double traverseTime = ((double) locTmp.getTraverse() * locTmp.getLOC() / tmp.getLOC() + tmp.getTraverse()) / 2;
                    double traverseTime = SSC_traverse_OCC_regression_ASTI.predict(occ);
                    createCell(symbolTable_Row,currentColumn++,traverseTime);
                }
            }

            currentColumn = 0;
            codeMetric_Row = sheet.createRow(currentRow++);
            createCell(codeMetric_Row,currentColumn++,"Lines of Code");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                createCell(codeMetric_Row,currentColumn++,rq3new_loc.get(j));
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI_real");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    createCell(semanticTree_Row,currentColumn++,tmp.getRename());
                }
            }

            currentColumn = 0;
            semanticTree_Row = sheet.createRow(currentRow++);
            createCell(semanticTree_Row,currentColumn++,"STI_prediction");
            for (int j = 0; j < rq3new_loc.size(); j++) {
                RQResult tmp = getRQResultFromArrayByLoc_RQ3new_loc(Type.semanticTree,rq3new_loc.get(j));
                if (tmp != null){
                    int loc = getLOC(tmp.getLOC());
                    double traverseTime = SSC_traverse_LOC_regression_STI.predict(loc);
                    createCell(semanticTree_Row,currentColumn++,traverseTime);
                }
            }

//            //getSelectionRange -- selectionRange
//            currentRow++;
//            currentColumn = 0;
//            type_Row = sheet.createRow(currentRow++);
//            createCell(type_Row,currentColumn++,"Selection Range");
//
//            currentColumn = 0;
//            codeMetric_Row = sheet.createRow(currentRow++);
//            createCell(codeMetric_Row,currentColumn++,"identOccur");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
//            }
//
//            currentColumn = 0;
//            symbolTable_Row = sheet.createRow(currentRow++);
//            createCell(symbolTable_Row,currentColumn++,"ASTI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(symbolTable_Row,currentColumn++,tmp.getSelectionRange());
//                }
//            }
//
//            currentColumn = 0;
//            semanticTree_Row = sheet.createRow(currentRow++);
//            createCell(semanticTree_Row,currentColumn++,"STI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(semanticTree_Row,currentColumn++,tmp.getSelectionRange());
//                }
//            }

//            //getCompletionInfos -- completion
//            currentRow++;
//            currentColumn = 0;
//            type_Row = sheet.createRow(currentRow++);
//            createCell(type_Row,currentColumn++,"Completion");
//
//            currentColumn = 0;
//            codeMetric_Row = sheet.createRow(currentRow++);
//            createCell(codeMetric_Row,currentColumn++,"identOccur");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                createCell(codeMetric_Row,currentColumn++,rq3new_identOccur.get(j));
//            }
//
//            currentColumn = 0;
//            symbolTable_Row = sheet.createRow(currentRow++);
//            createCell(symbolTable_Row,currentColumn++,"ASTI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.symbolTable,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(symbolTable_Row,currentColumn++,tmp.getCompletion());
//                }
//            }
//
//            currentColumn = 0;
//            semanticTree_Row = sheet.createRow(currentRow++);
//            createCell(semanticTree_Row,currentColumn++,"STI");
//            for (int j = 0; j < rq3new_identOccur.size(); j++) {
//                RQResult tmp = getRQResultFromArrayByIdentOccur_RQ3new_occur(Type.semanticTree,rq3new_identOccur.get(j));
//                if (tmp != null){
//                    createCell(semanticTree_Row,currentColumn++,tmp.getCompletion());
//                }
//            }


            // 将工作簿写入到文件
            workbook.write(fileOutputStream);
            System.out.println("create " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_evaluateLinearRegression(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            // 创建一个新的工作表
            String sheetName = "RQ3new_evaluateLinearRegression";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                // 如果存在同名工作表，立刻返回
                workbook.write(fileOutputStream);
                return ;
                // 如果存在同名工作表，新建后缀名的表
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            // 创建标题行
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_evaluateLinearRegression");

            /* k and b evaluation Results
             *                   Construct (ASTI / STI) || search (ASTI / STI) ||  traverse (ASTI / STI).
             * dataset-LOC  MSE
             *              MAE
             *              R2
             * dataset-DEF  MSE
             *              MAE
             *              R2
             * dataset-OCC
             *
             *
             * dataset-NODE
             *
             */

            currentColumn = 0;
            Row type_Row = sheet.createRow(currentRow++);
            createCell(type_Row,currentColumn++,"k and b evaluation Results");

            currentColumn = 0;
            Row dataset_Row = sheet.createRow(currentRow++);
            createCell(dataset_Row,currentColumn++,"Dataset");

            createCell(dataset_Row,currentColumn++,"Dataset-LOC");
            currentColumn += 2;
            createCell(dataset_Row,currentColumn++,"Dataset-DEF");
            currentColumn += 2;
            createCell(dataset_Row,currentColumn++,"Dataset-OCC");
            currentColumn += 2;
            createCell(dataset_Row,currentColumn++,"Dataset-NODE");
            currentColumn += 2;

            currentColumn = 1;
            Row metric_Row = sheet.createRow(currentRow++);
            createCell(metric_Row,currentColumn++,"MSE");
            createCell(metric_Row,currentColumn++,"MAE");
            createCell(metric_Row,currentColumn++,"R2");
            createCell(metric_Row,currentColumn++,"MSE");
            createCell(metric_Row,currentColumn++,"MAE");
            createCell(metric_Row,currentColumn++,"R2");
            createCell(metric_Row,currentColumn++,"MSE");
            createCell(metric_Row,currentColumn++,"MAE");
            createCell(metric_Row,currentColumn++,"R2");
            createCell(metric_Row,currentColumn++,"MSE");
            createCell(metric_Row,currentColumn++,"MAE");
            createCell(metric_Row,currentColumn++,"R2");

            ArrayList<Double> metricsArray = new ArrayList<>();

            currentColumn = 0;
            Row component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Construct-ASTI");
            metricsArray = this.SSC_construct_NODE_regression_ASTI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }

            currentColumn = 0;
            component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Construct-STI");
            metricsArray = this.SSC_construct_NODE_regression_STI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }

            currentColumn = 0;
            component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Search-ASTI");
            metricsArray = this.SSC_search_DEF_regression_ASTI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }

            currentColumn = 0;
            component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Search-STI");
            metricsArray = this.SSC_search_DEF_regression_STI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }

            currentColumn = 0;
            component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Traverse-ASTI");
            metricsArray = this.SSC_traverse_OCC_regression_ASTI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }

            currentColumn = 0;
            component_Row = sheet.createRow(currentRow++);
            createCell(component_Row,currentColumn++,"Traverse-STI");
            metricsArray = this.SSC_traverse_LOC_regression_STI.getMetrics();
            for (Double m : metricsArray) {
                createCell(component_Row,currentColumn++,m);
            }


            /* output
             * Impl -- component -- dataset-LOC/OCC/DEF/NODE
             * primaryFeature(LOC/OCC/DEF/NODE)      ||
             * actual value                          ||
             * predicted value                       ||
             */

            ArrayList<double[]> dataArray = new ArrayList<>();
            double[] x_primaryFeature = new double[0];
            double[] y_component_actual = new double[0];
            double[] y_component_predicted = new double[0];
            String[] nameRow = {"ASTI -- Construct -- dataset-LOC", "ASTI -- Construct -- dataset-DEF" , "ASTI -- Construct -- dataset-OCC", "ASTI -- Construct -- dataset-NODE",
                    "STI -- Construct -- dataset-LOC", "STI -- Construct -- dataset-DEF" , "STI -- Construct -- dataset-OCC", "STI -- Construct -- dataset-NODE",
                    "ASTI -- Search -- dataset-LOC", "ASTI -- Search -- dataset-DEF" , "ASTI -- Search -- dataset-OCC", "ASTI -- Search -- dataset-NODE",
                    "STI -- Search -- dataset-LOC", "STI -- Search -- dataset-DEF" , "STI -- Search -- dataset-OCC", "STI -- Search -- dataset-NODE",
                    "ASTI -- Traverse -- dataset-LOC", "ASTI -- Traverse -- dataset-DEF" , "ASTI -- Traverse -- dataset-OCC", "ASTI -- Traverse -- dataset-NODE",
                    "STI -- Traverse -- dataset-LOC", "STI -- Traverse -- dataset-DEF" , "STI -- Traverse -- dataset-OCC", "STI -- Traverse -- dataset-NODE"
            };
            String[] featureRow = {"NODE","NODE","NODE","NODE","NODE","NODE","NODE","NODE","DEF","DEF","DEF","DEF","DEF","DEF","DEF","DEF","OCC","OCC","OCC","OCC","LOC","LOC","LOC","LOC"
            };
            String[] datasetRow = {"LOC", "DEF", "OCC", "NODE"};
            int[] datasetMin = {400, 80, 400 , 2000};
            int[] datasetMax = {10000, 2000, 10000 , 50000};
            int[] datasetStep = {400, 80, 400 , 2000};
            for (int i = 0; i < this.testLinearRegressionResultArray.size(); i++) {
                //-------------------------------
                dataArray = this.testLinearRegressionResultArray.get(i);
                x_primaryFeature = dataArray.get(0);
                y_component_actual = dataArray.get(1);
                y_component_predicted = dataArray.get(2);



                currentRow++;
                currentColumn = 0;
                Row name_Row = sheet.createRow(currentRow++);
                createCell(name_Row,currentColumn++,nameRow[i]);

                currentColumn = 0;
                Row datasetFeature_Row = sheet.createRow(currentRow++);
                createCell(datasetFeature_Row,currentColumn++,datasetRow[i%4]);
                int min = datasetMin[i%4];
                int max = datasetMax[i%4];
                int step = datasetStep[i%4];
                for (int j = min; j <= max; j = j+step) {
                    createCell(datasetFeature_Row,currentColumn++,j);
                }

                currentColumn = 0;
                Row feature_Row = sheet.createRow(currentRow++);
                createCell(feature_Row,currentColumn++,featureRow[i]);
                for (double v : x_primaryFeature) {
                    createCell(feature_Row, currentColumn++, v);
                }

                currentColumn = 0;
                Row actual_Row = sheet.createRow(currentRow++);
                createCell(actual_Row,currentColumn++,"actual value");
                for (double v : y_component_actual) {
                    createCell(actual_Row, currentColumn++, v);
                }

                currentColumn = 0;
                Row predicted_Row = sheet.createRow(currentRow++);
                createCell(predicted_Row,currentColumn++,"predicted value");
                for (double v : y_component_predicted) {
                    createCell(predicted_Row, currentColumn++, v);
                }
                //-------------------------------
            }

            //-----
            double[] y_construct_actual_ASTI = new double[75];
            double[] y_construct_actual_STI = new double[75];
            double[] y_search_actual_ASTI = new double[75];
            double[] y_search_actual_STI = new double[75];
            double[] y_traverse_actual_ASTI = new double[75];
            double[] y_traverse_actual_STI = new double[75];
            double[] y_construct_predicted_ASTI = new double[75];
            double[] y_construct_predicted_STI = new double[75];
            double[] y_search_predicted_ASTI = new double[75];
            double[] y_search_predicted_STI = new double[75];
            double[] y_traverse_predicted_ASTI = new double[75];
            double[] y_traverse_predicted_STI = new double[75];
            int j = 0;
            for (int i = 0; i < this.testLinearRegressionResultArray.size(); i++){
                if (i ==3 || i ==7 || i== 9 || i==13 || i==18 || i==20)continue;

                dataArray = this.testLinearRegressionResultArray.get(i);
                if (i <= 3 ){
                    System.arraycopy(dataArray.get(1), 0, y_construct_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_construct_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 7){
                    System.arraycopy(dataArray.get(1), 0, y_construct_actual_STI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_construct_predicted_STI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 11){

                    System.arraycopy(dataArray.get(1), 0, y_search_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_search_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 15){
                    System.arraycopy(dataArray.get(1), 0, y_search_actual_STI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_search_predicted_STI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 19){
                    System.arraycopy(dataArray.get(1), 0, y_traverse_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_traverse_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 23){
                    System.arraycopy(dataArray.get(1), 0, y_traverse_actual_STI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_traverse_predicted_STI, j%3*25, dataArray.get(2).length);
                }
                j++;
            }
            ArrayList<double[]> y_actual = new ArrayList<>();
            y_actual.add(y_construct_actual_ASTI);
            y_actual.add(y_construct_actual_STI);
            y_actual.add(y_search_actual_ASTI);
            y_actual.add(y_search_actual_STI);
            y_actual.add(y_traverse_actual_ASTI);
            y_actual.add(y_traverse_actual_STI);
            ArrayList<double[]> y_predicted = new ArrayList<>();
            y_predicted.add(y_construct_predicted_ASTI);
            y_predicted.add(y_construct_predicted_STI);
            y_predicted.add(y_search_predicted_ASTI);
            y_predicted.add(y_search_predicted_STI);
            y_predicted.add(y_traverse_predicted_ASTI);
            y_predicted.add(y_traverse_predicted_STI);
            String[] nameRow_metric = {"ASTI -- Construct -- dataset-ALL",
                    "STI -- Construct -- dataset-ALL",
                    "ASTI -- Search -- dataset-ALL",
                    "STI -- Search -- dataset-ALL",
                    "ASTI -- Traverse -- dataset-ALL",
                    "STI -- Traverse -- dataset-ALL"
            };
            for (int i = 0; i < 6; i++) {
                currentColumn = 0;
                Row impl_Row = sheet.createRow(currentRow++);
                createCell(impl_Row,currentColumn++,nameRow_metric[i]);

                currentColumn = 0;
                Row MSE_Row = sheet.createRow(currentRow++);
                createCell(MSE_Row,currentColumn++,"MSE");
                createCell(MSE_Row,currentColumn++,computeMSE(y_actual.get(i), y_predicted.get(i)));

                currentColumn = 0;
                Row MAE_Row = sheet.createRow(currentRow++);
                createCell(MAE_Row,currentColumn++,"MAE");
                createCell(MAE_Row,currentColumn++,computeMAE(y_actual.get(i), y_predicted.get(i)));

                currentColumn = 0;
                Row R2_Row = sheet.createRow(currentRow++);
                createCell(R2_Row,currentColumn++,"R2");
                createCell(R2_Row,currentColumn++,computeR2(y_actual.get(i), y_predicted.get(i)));
            }


            // 将工作簿写入到文件
            workbook.write(fileOutputStream);
            System.out.println("create " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void outputExcel_RQ3_new_prediction_allDatasets(){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)) {

            // 创建一个新的工作表
            String sheetName = "RQ3new_evaluateService_allDatasets";
            Sheet existingSheet = workbook.getSheet(sheetName);
            if (existingSheet != null) {
                // 如果存在同名工作表，立刻返回
                workbook.write(fileOutputStream);
                return ;
                // 如果存在同名工作表，新建后缀名的表
//                int sheetIndex = workbook.getSheetIndex(existingSheet);
//                workbook.removeSheetAt(sheetIndex);
//                sheetName = sheetName + "_" + sheetIndex;
//                System.out.println(sheetName);
            }
            Sheet sheet = workbook.createSheet(sheetName);

            int currentRow = 0;
            int currentColumn = 0;
            // 创建标题行
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,"RQ3new_evaluateService_allDatasets");

            //datasets -- LOC/DEF/OCC/NODE
            //implementation -- ASTI/STI
            // ASTI/STI - SemanticTokens - LOC/DEF/OCC/NODE
            String[] implementations = {"ASTI", "STI"};
            String[] services = {"semantic tokens", "rename"};
            String[] datasets = {"LOC", "DEF", "OCC", "NODE"};
            int[] datasetMin = {400, 80, 400 , 2000};
            int[] datasetMax = {10000, 2000, 10000 , 50000};
            int[] datasetStep = {400, 80, 400 , 2000};

            //semantic tokens

            for (int i = 0; i < implementations.length; i++) {
                String implementation = implementations[i];
//                Runtime runtime = Runtime.getRuntime();
//                long totalMemory = runtime.totalMemory();
//                long startTime = System.currentTimeMillis();
//                long usedMemory1 = runtime.totalMemory() - runtime.freeMemory();
                double [] y_service_actual_semanticTokens = new double[100];
                double [] y_service_predicted_semanticTokens = new double[100];
                for (int j = 0; j < datasets.length; j++) {
                    int size = (datasetMax[j] - datasetMin[j]) / datasetStep[j] + 1;
                    double [] y_service_actual = new double[size];
                    double [] y_service_predicted = new double[size];
                    String dataset = datasets[j];
                    ArrayList<Integer> featureArray = new ArrayList<>();
                    ArrayList<RQResult> rqResultArrayList = new ArrayList<>();
                    Type implementationType = Type.symbolTable;
                    Type featureType = Type.LOC;
                    LinearRegression searchLinearRegression = this.SSC_search_DEF_regression_ASTI;
                    LinearRegression traverseLinearRegression = this.SSC_traverse_OCC_regression_ASTI;
                    if (implementation.equals("STI")){
                        implementationType = Type.semanticTree;
                        searchLinearRegression = this.SSC_search_DEF_regression_STI;
                        traverseLinearRegression = this.SSC_traverse_LOC_regression_STI;
                    }
                    switch (dataset) {
                        case "LOC" -> {
                            featureArray = rq3new_loc;
                            rqResultArrayList = rq3new_loc_Result;
                            featureType = Type.LOC;
                        }
                        case "DEF" -> {
                            featureArray = rq3new_identDef;
                            rqResultArrayList = rq3new_identDef_Result;
                            featureType = Type.DEF;
                        }
                        case "OCC" -> {
                            featureArray = rq3new_identOccur;
                            rqResultArrayList = rq3new_identOccur_Result;
                            featureType = Type.OCC;
                        }
                        case "NODE" -> {
                            featureArray = rq3new_nodeNum;
                            rqResultArrayList = rq3new_nodeNum_Result;
                            featureType = Type.NODE;
                        }
                    }

                    currentRow++;
                    currentColumn = 0;
                    Row type_Row = sheet.createRow(currentRow++);
                    createCell(type_Row,currentColumn++,implementation + " -- Semantic Tokens -- " + dataset);
                    for (int k = datasetMin[j]; k <= datasetMax[j]; k+=datasetStep[j]) {
                        createCell(type_Row,currentColumn++,k);
                    }

                    currentColumn = 0;
                    Row codeMetric_Row = sheet.createRow(currentRow++);
                    createCell(codeMetric_Row,currentColumn++,dataset);
                    for (int k = 0; k < featureArray.size(); k++) {
                        createCell(codeMetric_Row,currentColumn++,featureArray.get(k));
                    }

                    currentColumn = 0;
                    Row symbolTable_Row = sheet.createRow(currentRow++);
                    createCell(symbolTable_Row,currentColumn++,"actual value");

                    for (int k = 0; k < featureArray.size(); k++) {
                        RQResult tmp = getRQResultFromArrayByArray_ImplementationType_featureType_featureValue(rqResultArrayList, implementationType, featureType, featureArray.get(k));
                        y_service_actual[k] = tmp.getHandleSemanticTokens();
                        y_service_actual_semanticTokens[k + j * size] = tmp.getHandleSemanticTokens();
                        createCell(symbolTable_Row,currentColumn++,y_service_actual[k]);

                        int identDef = tmp.getFeatureByType(Type.DEF);
                        double searchTime = searchLinearRegression.predict(identDef) * tmp.getFeatureByType(Type.OCC) / 10000;
                        int x_traverse = tmp.getFeatureByType(Type.OCC);
                        if (implementation.equals("STI"))x_traverse = tmp.getFeatureByType(Type.LOC);
                        double traverseTime = traverseLinearRegression.predict(x_traverse);
                        y_service_predicted[k] = searchTime + traverseTime;
                        y_service_predicted_semanticTokens[k + j * size] = searchTime + traverseTime;
                    }


                    currentColumn = 0;
                    symbolTable_Row = sheet.createRow(currentRow++);
                    createCell(symbolTable_Row,currentColumn++,"predicted value");
                    for (int k = 0; k < featureArray.size(); k++) {
                        createCell(symbolTable_Row,currentColumn++,y_service_predicted[k]);
                    }

                    currentColumn = 0;
                    Row MSE_Row = sheet.createRow(currentRow++);
                    createCell(MSE_Row,currentColumn++,"MSE");
                    createCell(MSE_Row,currentColumn++,computeMSE(y_service_actual, y_service_predicted));

                    currentColumn = 0;
                    Row MAE_Row = sheet.createRow(currentRow++);
                    createCell(MAE_Row,currentColumn++,"MAE");
                    createCell(MAE_Row,currentColumn++,computeMAE(y_service_actual, y_service_predicted));

                    currentColumn = 0;
                    Row R2_Row = sheet.createRow(currentRow++);
                    createCell(R2_Row,currentColumn++,"R2");
                    createCell(R2_Row,currentColumn++,computeR2(y_service_actual, y_service_predicted));
                }
//                long endTime = System.currentTimeMillis();
//                long usedMemory2 = runtime.totalMemory() - runtime.freeMemory();
//                long predictedMemory = usedMemory2-usedMemory1;
//                System.out.println(implementation + " -- Semantic Tokens -- " + " time is " + (endTime-startTime) + " usedmemory is " + (usedMemory2 - usedMemory1));
                currentColumn = 0;
                Row impl_Row = sheet.createRow(currentRow++);
                createCell(impl_Row,currentColumn++,implementation + "_semanticTokens");

                currentColumn = 0;
                Row MSE_Row = sheet.createRow(currentRow++);
                createCell(MSE_Row,currentColumn++,"MSE");
                createCell(MSE_Row,currentColumn++,computeMSE(y_service_actual_semanticTokens, y_service_predicted_semanticTokens));

                currentColumn = 0;
                Row MAE_Row = sheet.createRow(currentRow++);
                createCell(MAE_Row,currentColumn++,"MAE");
                createCell(MAE_Row,currentColumn++,computeMAE(y_service_actual_semanticTokens, y_service_predicted_semanticTokens));

                currentColumn = 0;
                Row R2_Row = sheet.createRow(currentRow++);
                createCell(R2_Row,currentColumn++,"R2");
                createCell(R2_Row,currentColumn++,computeR2(y_service_actual_semanticTokens, y_service_predicted_semanticTokens));
            }

            //rename
            for (int i = 0; i < implementations.length; i++) {
                String implementation = implementations[i];
                double [] y_service_actual_rename = new double[100];
                double [] y_service_predicted_rename = new double[100];
                for (int j = 0; j < datasets.length; j++) {
                    int size = (datasetMax[j] - datasetMin[j]) / datasetStep[j] + 1 ;
                    double [] y_service_actual = new double[size];
                    double [] y_service_predicted = new double[size];
                    String dataset = datasets[j];
                    ArrayList<Integer> featureArray = new ArrayList<>();
                    ArrayList<RQResult> rqResultArrayList = new ArrayList<>();
                    Type implementationType = Type.symbolTable;
                    Type featureType = Type.LOC;
                    LinearRegression searchLinearRegression = this.SSC_search_DEF_regression_ASTI;
                    LinearRegression traverseLinearRegression = this.SSC_traverse_OCC_regression_ASTI;
                    if (implementation.equals("STI")){
                        implementationType = Type.semanticTree;
                        searchLinearRegression = this.SSC_search_DEF_regression_STI;
                        traverseLinearRegression = this.SSC_traverse_LOC_regression_STI;
                    }
                    switch (dataset) {
                        case "LOC" -> {
                            featureArray = rq3new_loc;
                            rqResultArrayList = rq3new_loc_Result;
                            featureType = Type.LOC;
                        }
                        case "DEF" -> {
                            featureArray = rq3new_identDef;
                            rqResultArrayList = rq3new_identDef_Result;
                            featureType = Type.DEF;
                        }
                        case "OCC" -> {
                            featureArray = rq3new_identOccur;
                            rqResultArrayList = rq3new_identOccur_Result;
                            featureType = Type.OCC;
                        }
                        case "NODE" -> {
                            featureArray = rq3new_nodeNum;
                            rqResultArrayList = rq3new_nodeNum_Result;
                            featureType = Type.NODE;
                        }
                    }

                    currentRow++;
                    currentColumn = 0;
                    Row type_Row = sheet.createRow(currentRow++);
                    createCell(type_Row,currentColumn++,implementation + " -- Rename -- " + dataset);
                    for (int k = datasetMin[j]; k <= datasetMax[j]; k+=datasetStep[j]) {
                        createCell(type_Row,currentColumn++,k);
                    }

                    currentColumn = 0;
                    Row codeMetric_Row = sheet.createRow(currentRow++);
                    createCell(codeMetric_Row,currentColumn++,dataset);
                    for (int k = 0; k < featureArray.size(); k++) {
                        createCell(codeMetric_Row,currentColumn++,featureArray.get(k));
                    }

                    currentColumn = 0;
                    Row symbolTable_Row = sheet.createRow(currentRow++);
                    createCell(symbolTable_Row,currentColumn++,"actual value");
                    for (int k = 0; k < featureArray.size(); k++) {
                        RQResult tmp = getRQResultFromArrayByArray_ImplementationType_featureType_featureValue(rqResultArrayList, implementationType, featureType, featureArray.get(k));
                        y_service_actual[k] = tmp.getRename();
                        y_service_actual_rename[k + j *size] = tmp.getRename();
                        createCell(symbolTable_Row,currentColumn++,y_service_actual[k]);

//                        int identDef = tmp.getFeatureByType(Type.DEF);
//                        double searchTime = searchLinearRegression.predict(identDef) * tmp.getFeatureByType(Type.OCC) / 10000;
                        int x_traverse = tmp.getFeatureByType(Type.OCC);
                        if (implementation.equals("STI"))x_traverse = tmp.getFeatureByType(Type.LOC);
                        double traverseTime = traverseLinearRegression.predict(x_traverse);
                        y_service_predicted[k] = traverseTime;
                        y_service_predicted_rename[k + j *size] = traverseTime;
                    }

                    currentColumn = 0;
                    symbolTable_Row = sheet.createRow(currentRow++);
                    createCell(symbolTable_Row,currentColumn++,"predicted value");
                    for (int k = 0; k < featureArray.size(); k++) {
                        createCell(symbolTable_Row,currentColumn++,y_service_predicted[k]);
                    }

                    currentColumn = 0;
                    Row MSE_Row = sheet.createRow(currentRow++);
                    createCell(MSE_Row,currentColumn++,"MSE");
                    createCell(MSE_Row,currentColumn++,computeMSE(y_service_actual, y_service_predicted));

                    currentColumn = 0;
                    Row MAE_Row = sheet.createRow(currentRow++);
                    createCell(MAE_Row,currentColumn++,"MAE");
                    createCell(MAE_Row,currentColumn++,computeMAE(y_service_actual, y_service_predicted));

                    currentColumn = 0;
                    Row R2_Row = sheet.createRow(currentRow++);
                    createCell(R2_Row,currentColumn++,"R2");
                    createCell(R2_Row,currentColumn++,computeR2(y_service_actual, y_service_predicted));
                }
                currentColumn = 0;
                Row impl_Row = sheet.createRow(currentRow++);
                createCell(impl_Row,currentColumn++,implementation + "_rename");

                currentColumn = 0;
                Row MSE_Row = sheet.createRow(currentRow++);
                createCell(MSE_Row,currentColumn++,"MSE");
                createCell(MSE_Row,currentColumn++,computeMSE(y_service_actual_rename, y_service_predicted_rename));

                currentColumn = 0;
                Row MAE_Row = sheet.createRow(currentRow++);
                createCell(MAE_Row,currentColumn++,"MAE");
                createCell(MAE_Row,currentColumn++,computeMAE(y_service_actual_rename, y_service_predicted_rename));

                currentColumn = 0;
                Row R2_Row = sheet.createRow(currentRow++);
                createCell(R2_Row,currentColumn++,"R2");
                createCell(R2_Row,currentColumn++,computeR2(y_service_actual_rename, y_service_predicted_rename));
            }

            // 将工作簿写入到文件
            workbook.write(fileOutputStream);
            System.out.println("create " + sheetName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void RQ1Result(){
        getResultFromTxt_RQ1("src/main/java/result/performanceResult/ASTI/RQ1.txt" , Type.symbolTable);
        getResultFromTxt_RQ1("src/main/java/result/performanceResult/STI/RQ1.txt" , Type.semanticTree);
        outputExcel_RQ1();
    }
    public void RQ2Result(String srcFolder, String filename){
        getResultFromTxt_RQ2(srcFolder + "ASTI/" + filename , Type.symbolTable);
        getResultFromTxt_RQ2(srcFolder + "STI/" + filename , Type.semanticTree);
        outputExcel_RQ2();
    }
    public void RQ31Result(){
        getResultFromTxt_RQ31("src/main/java/result/performanceResult/ASTI/RQ3.1.txt" , Type.symbolTable);
        getResultFromTxt_RQ31("src/main/java/result/performanceResult/STI/RQ3.1.txt" , Type.semanticTree);
        outputExcel_RQ31();
    }
    public void RQ32Result(){
        outputExcel_RQ32();
    }
    public void RQ33Result(){
        getResultFromTxt_RQ33("src/main/java/result/performanceResult/ASTI/RQ3.3.txt" , Type.symbolTable);
        getResultFromTxt_RQ33("src/main/java/result/performanceResult/STI/RQ3.3.txt" , Type.semanticTree);
        outputExcel_RQ33();
    }
    private void sortRQ34resultList(){
        rq34_Result.sort(Comparator.comparingInt(RQResult::getIdentOccur));
        Collections.sort(rq34_IdentOccur);
    }
    public void RQ34Result(){
        getResultFromTxt_RQ34("src/main/java/result/performanceResult/ASTI/RQ3.4.txt" , Type.symbolTable);
        getResultFromTxt_RQ34("src/main/java/result/performanceResult/STI/RQ3.4.txt" , Type.semanticTree);
        sortRQ34resultList();
        outputExcel_RQ34();
    }
    public void RQ35Result(){
        outputExcel_RQ35();
    }
    public void RQ4Result(){
        getResultFromTxt_RQ4("src/main/java/result/performanceResult/ASTI/RQ4.txt" , Type.symbolTable);
        getResultFromTxt_RQ4("src/main/java/result/performanceResult/STI/RQ4.txt" , Type.semanticTree);
        outputExcel_RQ4();
    }
    private void sortRQ3newResultList(){
        rq3new_loc_Result.sort(Comparator.comparingInt(RQResult::getLOC));
        rq3new_identDef_Result.sort(Comparator.comparingInt(RQResult::getIdentDef));
        rq3new_identOccur_Result.sort(Comparator.comparingInt(RQResult::getIdentOccur));
        rq3new_nodeNum_Result.sort(Comparator.comparingInt(RQResult::getNodeNum));
        Collections.sort(rq3new_identDef);
        Collections.sort(rq3new_identOccur);
        Collections.sort(rq3new_loc);
        Collections.sort(rq3new_nodeNum);
    }
    public void RQ3newResult(String result){
        getResultFromTxt_RQ3new_loc(result + "/ASTI/RQ3_new_loc.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_loc(result + "/STI/RQ3_new_loc.txt" , Type.semanticTree);

        getResultFromTxt_RQ3new_nodeNum(result + "/ASTI/RQ3_new_nodeNum.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_nodeNum(result + "/STI/RQ3_new_nodeNum.txt" , Type.semanticTree);

        getResultFromTxt_RQ3new_def(result + "/ASTI/RQ3_new_def.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_def(result + "/STI/RQ3_new_def.txt" , Type.semanticTree);

        getResultFromTxt_RQ3new_occur(result + "/ASTI/RQ3_new_occur.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_occur(result + "/STI/RQ3_new_occur.txt" , Type.semanticTree);

        getResultFromTxt_RQ3new_def_find(result + "/ASTI/RQ3_new_def_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_def_find(result + "/STI/RQ3_new_def_find.txt" , Type.semanticTree);
        getResultFromTxt_RQ3new_loc_find(result +"/ASTI/RQ3_new_loc_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_loc_find(result +"/STI/RQ3_new_loc_find.txt" , Type.semanticTree);
        getResultFromTxt_RQ3new_occ_find(result +"/ASTI/RQ3_new_occur_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_occ_find(result +"/STI/RQ3_new_occur_find.txt" , Type.semanticTree);
        getResultFromTxt_RQ3new_node_find(result +"/ASTI/RQ3_new_nodenum_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_node_find(result +"/STI/RQ3_new_nodenum_find.txt" , Type.semanticTree);
//        getResultFromTxt_RQ3new_occur_find("src/main/java/result/performanceResult/ASTI/RQ3_new_occur_find.txt" , Type.symbolTable);
//        getResultFromTxt_RQ3new_occur_find("src/main/java/result/performanceResult/semanticTree/RQ3_new_occur_find.txt" , Type.semanticTree);
        sortRQ3newResultList();
        initLinearRegression();
        evaluateLinearRegression();


        outputExcel_RQ3_new_loc();
        outputExcel_RQ3_new_nodeNum();
        outputExcel_RQ3_new_identDef();
        outputExcel_RQ3_new_identOccur();
//        outputExcel_RQ3_new_prediction();
        outputExcel_RQ3_new_evaluateLinearRegression();
        outputExcel_RQ3_new_prediction_allDatasets();
    }
    public void printRQ34_semanticToken_Result(){
        System.out.println("identOccur");
        System.out.println(this.rq34_IdentOccur);
        System.out.println("identDef");
        System.out.println(this.rq34_IdentDef);
        System.out.println("semanticToken_symbolTable_prediction");
        System.out.println(this.rq34_semanticToken_symbolTable_prediction);
        System.out.println("semanticToken_symbolTable_real");
        System.out.println(this.rq34_semanticToken_symbolTable_real);
        System.out.println("semanticToken_semanticTree_prediction");
        System.out.println(this.rq34_semanticToken_semanticTree_prediction);
        System.out.println("semanticToken_semanticTree_real");
        System.out.println(this.rq34_semanticToken_semanticTree_real);
    }

    public LinearRegression SSC_search_DEF_regression_ASTI;
    //    public LinearRegression SSC_construct_NODE_regression_ASTI;
//    public LinearRegression SSC_traverse_LOC_regression_ASTI;
    public LinearRegression SSC_traverse_OCC_regression_ASTI;
    public LinearRegression SSC_search_DEF_regression_STI;
    //    public LinearRegression SSC_construct_NODE_regression_STI;
    public LinearRegression SSC_traverse_LOC_regression_STI;
    public LinearRegression SSC_construct_NODE_regression_ASTI;
    public LinearRegression SSC_construct_NODE_regression_STI;


    private ArrayList<Integer> getComponentByDelta(Type component, Type delta, Type impl){
        ArrayList<Integer> performance = new ArrayList<>();
        if (component == Type.Search && delta == Type.DEF){
            for (int i = 0; i < rq3new_identDef.size(); i++) {
                performance.add(getRQResultFromArrayByIdentDef_RQ3new_def(impl,rq3new_identDef.get(i)).getFind());
            }
        }
        else if (component == Type.Traverse && delta == Type.LOC){
            for (int i = 0; i < rq3new_loc.size(); i++) {
                performance.add(getRQResultFromArrayByLoc_RQ3new_loc(impl,rq3new_loc.get(i)).getTraverse());
            }
        }
        else if (component == Type.Traverse && delta == Type.OCC){
            for (int i = 0; i < rq3new_identOccur.size(); i++) {
                performance.add(getRQResultFromArrayByIdentOccur_RQ3new_occur(impl,rq3new_identOccur.get(i)).getTraverse());
            }
        }
        else if (component == Type.Construct && delta == Type.NODE){
            for (int i = 0; i < rq3new_nodeNum.size(); i++) {
                performance.add(getRQResultFromArrayByNodeNum_RQ3new_nodeNum(impl,rq3new_nodeNum.get(i)).getValidateTextDocument());
            }
        }
        return performance;
    }
    public void initLinearRegression(){
        long startTime = System.currentTimeMillis();
//        this.SSC_construct_NODE_regression_ASTI = new LinearRegression(rq3new_nodeNum,getComponentByDelta(Type.ParseAndConstruct, Type.NODE, Type.symbolTable)); //在node 构建的数据集里， x是node大小, y 是 construct 耗时 //需要一个ArrayList存对应的耗时
        this.SSC_search_DEF_regression_ASTI = new LinearRegression(rq3new_identDef,getComponentByDelta(Type.Search, Type.DEF, Type.symbolTable), "SSC_search_DEF_regression_ASTI");
        long firstTime = System.currentTimeMillis();
        this.SSC_search_DEF_regression_STI = new LinearRegression(rq3new_identDef,getComponentByDelta(Type.Search, Type.DEF, Type.semanticTree), "SSC_search_DEF_regression_STI");
//        this.SSC_traverse_LOC_regression_ASTI = new LinearRegression(rq3new_loc,getComponentByDelta(Type.Traverse, Type.LOC, Type.symbolTable));
        this.SSC_traverse_OCC_regression_ASTI = new LinearRegression(rq3new_identOccur,getComponentByDelta(Type.Traverse, Type.OCC, Type.symbolTable), "SSC_traverse_OCC_regression_ASTI");
        this.SSC_traverse_LOC_regression_STI = new LinearRegression(rq3new_loc,getComponentByDelta(Type.Traverse, Type.LOC, Type.semanticTree), "SSC_traverse_LOC_regression_STI");

        this.SSC_construct_NODE_regression_ASTI = new LinearRegression(rq3new_nodeNum,getComponentByDelta(Type.Construct, Type.NODE, Type.symbolTable),"SSC_construct_NODE_regression_ASTI");
        this.SSC_construct_NODE_regression_STI = new LinearRegression(rq3new_nodeNum,getComponentByDelta(Type.Construct, Type.NODE, Type.semanticTree),"SSC_construct_NODE_regression_STI");
        long endTime = System.currentTimeMillis();

//        System.out.println("one fit time is " + (firstTime - startTime));
//        System.out.println("six fit time is " + (endTime - startTime));
        System.out.println(this.SSC_search_DEF_regression_ASTI.toString());
        System.out.println(this.SSC_search_DEF_regression_STI.toString());
        System.out.println(this.SSC_traverse_OCC_regression_ASTI.toString());
        System.out.println(this.SSC_traverse_LOC_regression_STI.toString());
        System.out.println(this.SSC_construct_NODE_regression_ASTI.toString());
        System.out.println(this.SSC_construct_NODE_regression_STI.toString());
    }
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_NODE_result = new ArrayList<>();

    public ArrayList<double[]> Array_STI_construct_NODE_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_construct_NODE_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_construct_NODE_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_construct_NODE_testIn_NODE_result = new ArrayList<>();

    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_NODE_result = new ArrayList<>();

    public ArrayList<double[]> Array_STI_Search_DEF_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Search_DEF_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Search_DEF_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Search_DEF_testIn_NODE_result = new ArrayList<>();

    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_NODE_result = new ArrayList<>();

    public ArrayList<double[]> Array_STI_Traverse_LOC_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Traverse_LOC_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Traverse_LOC_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_STI_Traverse_LOC_testIn_NODE_result = new ArrayList<>();

    public ArrayList<ArrayList<double[]>> testLinearRegressionResultArray = new ArrayList<>();

    public void evaluateLinearRegression(){
//        this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.semanticTree, Type.Construct, )
        //Component traverse under ASTI, whose primary feature is OCC, tests in dataset-LOC. It returns the x / y_actual / y_predicted value array


        this.Array_ASTI_construct_NODE_testIn_LOC_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_construct_NODE_testIn_DEF_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_construct_NODE_testIn_OCC_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_construct_NODE_testIn_NODE_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.NODE, rq3new_nodeNum_Result);

        this.Array_STI_construct_NODE_testIn_LOC_result = this.SSC_construct_NODE_regression_STI.modelEvaluation(Type.semanticTree, Type.Construct, Type.NODE, Type.LOC, rq3new_loc_Result);
        this.Array_STI_construct_NODE_testIn_DEF_result = this.SSC_construct_NODE_regression_STI.modelEvaluation(Type.semanticTree, Type.Construct, Type.NODE, Type.DEF, rq3new_identDef_Result);
        this.Array_STI_construct_NODE_testIn_OCC_result = this.SSC_construct_NODE_regression_STI.modelEvaluation(Type.semanticTree, Type.Construct, Type.NODE, Type.OCC, rq3new_identOccur_Result);
        this.Array_STI_construct_NODE_testIn_NODE_result = this.SSC_construct_NODE_regression_STI.modelEvaluation(Type.semanticTree, Type.Construct, Type.NODE, Type.NODE, rq3new_nodeNum_Result);

        this.Array_ASTI_Search_DEF_testIn_LOC_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_Search_DEF_testIn_DEF_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_Search_DEF_testIn_OCC_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_Search_DEF_testIn_NODE_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.NODE, rq3new_nodeNum_Result);

        this.Array_STI_Search_DEF_testIn_LOC_result = this.SSC_search_DEF_regression_STI.modelEvaluation(Type.semanticTree, Type.Search, Type.DEF, Type.LOC, rq3new_loc_Result);
        this.Array_STI_Search_DEF_testIn_DEF_result = this.SSC_search_DEF_regression_STI.modelEvaluation(Type.semanticTree, Type.Search, Type.DEF, Type.DEF, rq3new_identDef_Result);
        this.Array_STI_Search_DEF_testIn_OCC_result = this.SSC_search_DEF_regression_STI.modelEvaluation(Type.semanticTree, Type.Search, Type.DEF, Type.OCC, rq3new_identOccur_Result);
        this.Array_STI_Search_DEF_testIn_NODE_result = this.SSC_search_DEF_regression_STI.modelEvaluation(Type.semanticTree, Type.Search, Type.DEF, Type.NODE, rq3new_nodeNum_Result);

        this.Array_ASTI_Traverse_OCC_testIn_LOC_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_Traverse_OCC_testIn_DEF_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_Traverse_OCC_testIn_OCC_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_Traverse_OCC_testIn_NODE_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.NODE, rq3new_nodeNum_Result);

        this.Array_STI_Traverse_LOC_testIn_LOC_result = this.SSC_traverse_LOC_regression_STI.modelEvaluation(Type.semanticTree, Type.Traverse, Type.LOC, Type.LOC, rq3new_loc_Result);
        this.Array_STI_Traverse_LOC_testIn_DEF_result = this.SSC_traverse_LOC_regression_STI.modelEvaluation(Type.semanticTree, Type.Traverse, Type.LOC, Type.DEF, rq3new_identDef_Result);
        this.Array_STI_Traverse_LOC_testIn_OCC_result = this.SSC_traverse_LOC_regression_STI.modelEvaluation(Type.semanticTree, Type.Traverse, Type.LOC, Type.OCC, rq3new_identOccur_Result);
        this.Array_STI_Traverse_LOC_testIn_NODE_result = this.SSC_traverse_LOC_regression_STI.modelEvaluation(Type.semanticTree, Type.Traverse, Type.LOC, Type.NODE, rq3new_nodeNum_Result);

        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_NODE_result);

        this.testLinearRegressionResultArray.add(Array_STI_construct_NODE_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_STI_construct_NODE_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_STI_construct_NODE_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_STI_construct_NODE_testIn_NODE_result);

        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_NODE_result);

        this.testLinearRegressionResultArray.add(Array_STI_Search_DEF_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_STI_Search_DEF_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_STI_Search_DEF_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_STI_Search_DEF_testIn_NODE_result);

        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_NODE_result);

        this.testLinearRegressionResultArray.add(Array_STI_Traverse_LOC_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_STI_Traverse_LOC_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_STI_Traverse_LOC_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_STI_Traverse_LOC_testIn_NODE_result);


    }

    public double computeMAE(double[] y_actual, double [] y_predicted) {
        double sum = 0.0;
        for (int i = 0; i < y_actual.length; i++) {
            sum += Math.abs(y_actual[i] - y_predicted[i]);
        }
        return sum / y_actual.length;
    }

    public double calculateMean(double[] arr) {
        double sum = 0;
        for (double v : arr) {
            sum += v;
        }
        return sum / arr.length;
    }
    public double computeMSE(double[] y_actual, double [] y_predicted){
        double sum = 0.0;
        for (int i = 0; i < y_actual.length; i++) {
            sum += Math.pow(y_actual[i] - y_predicted[i],2);
        }
        return sum / y_actual.length;
    }

    public double computeR2(double[] y_actual, double [] y_predicted){
        double sum1 = 0.0;
        double sum2 = 0.0;
        double meanY = calculateMean(y_actual);
        for (int i = 0; i < y_actual.length; i++) {
            sum1 += Math.pow(y_actual[i] - y_predicted[i],2);
            sum2 += Math.pow(y_actual[i] - meanY,2);
        }
        return 1 - sum1/sum2;
    }
    // SSC_component_delta_regression 例如 SSC_search_DEF_regression  SSC_construct_NODE_regression  SSC_traverse_LOC_regression
    
    // Rename: SSC_search_DEF_regression.predict(RQresult.def) / 10000 + SSC_traverse_LOC_regression(RQresult.loc)
    // Semantic Tokens: SSC_search_DEF_regression.predict(RQresult.def) / 10000 * Rqresult.occ + SSC_traverse_LOC_regression(RQresult.loc)
}
