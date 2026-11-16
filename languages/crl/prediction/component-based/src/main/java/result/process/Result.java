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

    String regex_filename = "vscode-test-web://mount/([A-Za-z0-9_]+)mc";
    String regex_function = "function:(\\w+) duration:(\\d+)";
    String regex_traverse = "function:getInfoArray duration:(\\d+)";
    String regex_find = "find duration:(\\d+)";

    String excelFilePath = "src/main/java/result/ResultV0.1.xlsx";

    ArrayList<RQResult> rq3new_nodeNum_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_loc_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_identDef_Result = new ArrayList<>();
    ArrayList<RQResult> rq3new_identOccur_Result = new ArrayList<>();

    ArrayList<Integer> rq3new_loc = new ArrayList<>();
    ArrayList<Integer> rq3new_identDef = new ArrayList<>();
    ArrayList<Integer> rq3new_identOccur = new ArrayList<>();
    ArrayList<Integer> rq3new_nodeNum = new ArrayList<>();

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
                        if (type == Type.symbolTable) rq3new_loc.add(rqResult.getLOC());
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
                        if (type == Type.symbolTable)rq3new_identDef.add(rqResult.getIdentDef());
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
                        if (type == Type.symbolTable)rq3new_identDef.add(rqResult.getIdentDef());
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
                        if (type == Type.symbolTable)rq3new_loc.add(rqResult.getLOC());
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
                        if (type == Type.symbolTable)rq3new_identOccur.add(rqResult.getLOC());
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
                        if (type == Type.symbolTable)rq3new_nodeNum.add(rqResult.getLOC());
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
                        if (type == Type.symbolTable)rq3new_identOccur.add(rqResult.getIdentOccur());
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
                        if (type == Type.symbolTable)rq3new_nodeNum.add(rqResult.getNodeNum());
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

            //
            workbook.write(fileOutputStream);
            System.out.println("create Excel success ! Excel sheet is  " + sheetName);
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
            createCell(component_Row,currentColumn++,"Search-ASTI");
            metricsArray = this.SSC_search_DEF_regression_ASTI.getMetrics();
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

                    "ASTI -- Search -- dataset-LOC", "ASTI -- Search -- dataset-DEF" , "ASTI -- Search -- dataset-OCC", "ASTI -- Search -- dataset-NODE",

                    "ASTI -- Traverse -- dataset-LOC", "ASTI -- Traverse -- dataset-DEF" , "ASTI -- Traverse -- dataset-OCC", "ASTI -- Traverse -- dataset-NODE",

            };
            String[] featureRow = {"NODE","NODE","NODE","NODE","DEF","DEF","DEF","DEF","OCC","OCC","OCC","OCC"
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
            double[] y_search_actual_ASTI = new double[75];
            double[] y_traverse_actual_ASTI = new double[75];
            double[] y_construct_predicted_ASTI = new double[75];
            double[] y_search_predicted_ASTI = new double[75];
            double[] y_traverse_predicted_ASTI = new double[75];
            int j = 0;
            for (int i = 0; i < this.testLinearRegressionResultArray.size(); i++){
                if (i == 3 || i == 5 || i == 10) continue;

                dataArray = this.testLinearRegressionResultArray.get(i);
                if (i <= 3 ){
                    System.arraycopy(dataArray.get(1), 0, y_construct_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_construct_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 7){

                    System.arraycopy(dataArray.get(1), 0, y_search_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_search_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                else if (i <= 11){
                    System.arraycopy(dataArray.get(1), 0, y_traverse_actual_ASTI, j%3*25, dataArray.get(1).length);
                    System.arraycopy(dataArray.get(2), 0, y_traverse_predicted_ASTI, j%3*25, dataArray.get(2).length);
                }
                j++;
            }
            ArrayList<double[]> y_actual = new ArrayList<>();
            y_actual.add(y_construct_actual_ASTI);
            y_actual.add(y_search_actual_ASTI);
            y_actual.add(y_traverse_actual_ASTI);
            ArrayList<double[]> y_predicted = new ArrayList<>();
            y_predicted.add(y_construct_predicted_ASTI);
            y_predicted.add(y_search_predicted_ASTI);
            y_predicted.add(y_traverse_predicted_ASTI);
            String[] nameRow_metric = {"ASTI -- Construct -- dataset-ALL",
                    "ASTI -- Search -- dataset-ALL",
                    "ASTI -- Traverse -- dataset-ALL",
            };
            for (int i = 0; i < nameRow_metric.length; i++) {
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
            String[] implementations = {"ASTI"};
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

        getResultFromTxt_RQ3new_nodeNum(result + "/ASTI/RQ3_new_nodeNum.txt" , Type.symbolTable);

        getResultFromTxt_RQ3new_def(result + "/ASTI/RQ3_new_def.txt" , Type.symbolTable);

        getResultFromTxt_RQ3new_occur(result + "/ASTI/RQ3_new_occur.txt" , Type.symbolTable);

        getResultFromTxt_RQ3new_def_find(result + "/ASTI/RQ3_new_def_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_loc_find(result +"/ASTI/RQ3_new_loc_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_occ_find(result +"/ASTI/RQ3_new_occur_find.txt" , Type.symbolTable);
        getResultFromTxt_RQ3new_node_find(result +"/ASTI/RQ3_new_nodenum_find.txt" , Type.symbolTable);
//        getResultFromTxt_RQ3new_occur_find("src/main/java/result/performanceResult/ASTI/RQ3_new_occur_find.txt" , Type.symbolTable);
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


    public LinearRegression SSC_search_DEF_regression_ASTI;
    //    public LinearRegression SSC_construct_NODE_regression_ASTI;
//    public LinearRegression SSC_traverse_LOC_regression_ASTI;
    public LinearRegression SSC_traverse_OCC_regression_ASTI;
    public LinearRegression SSC_construct_NODE_regression_ASTI;


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
//        this.SSC_traverse_LOC_regression_ASTI = new LinearRegression(rq3new_loc,getComponentByDelta(Type.Traverse, Type.LOC, Type.symbolTable));
        this.SSC_traverse_OCC_regression_ASTI = new LinearRegression(rq3new_identOccur,getComponentByDelta(Type.Traverse, Type.OCC, Type.symbolTable), "SSC_traverse_OCC_regression_ASTI");

        this.SSC_construct_NODE_regression_ASTI = new LinearRegression(rq3new_nodeNum,getComponentByDelta(Type.Construct, Type.NODE, Type.symbolTable),"SSC_construct_NODE_regression_ASTI");
        long endTime = System.currentTimeMillis();

//        System.out.println("one fit time is " + (firstTime - startTime));
//        System.out.println("six fit time is " + (endTime - startTime));
        System.out.println(this.SSC_search_DEF_regression_ASTI.toString());
        System.out.println(this.SSC_traverse_OCC_regression_ASTI.toString());
        System.out.println(this.SSC_construct_NODE_regression_ASTI.toString());
    }
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_construct_NODE_testIn_NODE_result = new ArrayList<>();


    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Search_DEF_testIn_NODE_result = new ArrayList<>();


    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_LOC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_DEF_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_OCC_result = new ArrayList<>();
    public ArrayList<double[]> Array_ASTI_Traverse_OCC_testIn_NODE_result = new ArrayList<>();


    public ArrayList<ArrayList<double[]>> testLinearRegressionResultArray = new ArrayList<>();

    public void evaluateLinearRegression(){
        //Component traverse under ASTI, whose primary feature is OCC, tests in dataset-LOC. It returns the x / y_actual / y_predicted value array


        this.Array_ASTI_construct_NODE_testIn_LOC_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_construct_NODE_testIn_DEF_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_construct_NODE_testIn_OCC_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_construct_NODE_testIn_NODE_result = this.SSC_construct_NODE_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Construct, Type.NODE, Type.NODE, rq3new_nodeNum_Result);


        this.Array_ASTI_Search_DEF_testIn_LOC_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_Search_DEF_testIn_DEF_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_Search_DEF_testIn_OCC_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_Search_DEF_testIn_NODE_result = this.SSC_search_DEF_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Search, Type.DEF, Type.NODE, rq3new_nodeNum_Result);


        this.Array_ASTI_Traverse_OCC_testIn_LOC_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.LOC, rq3new_loc_Result);
        this.Array_ASTI_Traverse_OCC_testIn_DEF_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.DEF, rq3new_identDef_Result);
        this.Array_ASTI_Traverse_OCC_testIn_OCC_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.OCC, rq3new_identOccur_Result);
        this.Array_ASTI_Traverse_OCC_testIn_NODE_result = this.SSC_traverse_OCC_regression_ASTI.modelEvaluation(Type.symbolTable, Type.Traverse, Type.OCC, Type.NODE, rq3new_nodeNum_Result);


        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_construct_NODE_testIn_NODE_result);


        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Search_DEF_testIn_NODE_result);


        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_LOC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_DEF_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_OCC_result);
        this.testLinearRegressionResultArray.add(Array_ASTI_Traverse_OCC_testIn_NODE_result);

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
