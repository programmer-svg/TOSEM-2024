package ASTcompute;

import antlr.TestLangLexer;
import antlr.TestLangParser;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.atn.PredictionMode;
import org.antlr.v4.runtime.tree.ParseTree;
import org.apache.poi.ss.usermodel.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

import static org.apache.poi.ss.util.CellUtil.createCell;

public class Preprocess {

    long tmpTraverseTime = 0;
    public long getPreTime(String filename){
        MyFunc myFunc = new MyFunc();
        String input = myFunc.readFromFile(filename);
        long startTime = System.currentTimeMillis();
        CharStream charStream = CharStreams.fromString(input);
        TestLangLexer testLangLexer = new TestLangLexer(charStream);
        CommonTokenStream tokens = new CommonTokenStream(testLangLexer);
        TestLangParser testLangParser = new TestLangParser(tokens);
        testLangParser.getInterpreter().setPredictionMode(PredictionMode.SLL);
//            AntlrError antlrError = new AntlrError();
//            TestLangParser.addErrorListener(antlrError);
        ParseTree tree = testLangParser.prog();
        MyVisitor myVisitor = new MyVisitor();
        long secondStartTime = System.currentTimeMillis();
        myVisitor.visit(tree);
        long endTime = System.currentTimeMillis();
        tmpTraverseTime = endTime -secondStartTime;
        return endTime-startTime;
    }
    ArrayList<Long> preprocessTimeList = new ArrayList<>();
    ArrayList<Long> traverseTimeList = new ArrayList<>();
    ArrayList<String> filenames = new ArrayList<>();
    String excelPath = "src/main/java/ASTcompute/preprocessTime.xlsx";
    String textPath = "src/main/java/dataset/RQ3_LOC/RQ3new_0_10041_1466_9658_48155_33_7.mc";
    public long traverseFiles(File folder, String path, String dataset) {
        filenames = new ArrayList<>();
        preprocessTimeList = new ArrayList<>();
        traverseTimeList = new ArrayList<>();
        long allTime = 0;
        long tmp = getPreTime(textPath);
        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
//                    traverseFiles(file); // 递归调用，遍历子文件夹中的文件
                } else {
//                    System.out.println(file.getName()); // 输出文件名
                    filenames.add(file.getName());
                    long time = getPreTime(path + dataset + "/" + file.getName());
                    preprocessTimeList.add(time);
                    traverseTimeList.add(tmpTraverseTime);
                    allTime += time;
                }
            }
        }
        outputExcel(excelPath, dataset);

        return allTime;
    }
    int currentRow = 0;
    public void outputExcel(String excelFilePath, String dataset){
        try (FileInputStream fileInputStream = new FileInputStream(excelFilePath);
             Workbook workbook = WorkbookFactory.create(fileInputStream);
             FileOutputStream fileOutputStream = new FileOutputStream(excelFilePath)){
            String sheetName = "preProcessTime_" + dataset;
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


            int currentColumn = 1;
            //
            Row headerRow = sheet.createRow(currentRow++);
            createCell(headerRow,0,dataset);
            Row filenameRow = sheet.createRow(currentRow++);
            Row timeRow = sheet.createRow(currentRow++);
            Row traverseTimeRow = sheet.createRow(currentRow++);
            for (int i = 0; i < preprocessTimeList.size(); i++) {
                createCell(filenameRow,currentColumn,filenames.get(i));
                createCell(timeRow,currentColumn,preprocessTimeList.get(i));
                createCell(traverseTimeRow,currentColumn,traverseTimeList.get(i));
                currentColumn++;
            }
            workbook.write(fileOutputStream);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }
    private static void createCell(Row row, int column, long value) {
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
    }
    private static void createCell(Row row, int column, String value) {
        Cell cell = row.createCell(column);
        cell.setCellValue(value);
    }

    public static void main(String[] args) {

        Preprocess preprocess = new Preprocess();
        String[] datasets = {"RQ3_LOC","RQ3_DEF", "RQ3_OCC", "RQ3_NODE"};
        String path = "src/main/java/dataset/";
        long allTime = 0;
        for (int i = 0; i < datasets.length; i++) {
            long averageTime = 0;
            File folder = new File(path + datasets[i]);
            averageTime = preprocess.traverseFiles(folder, path , datasets[i]);
            allTime += averageTime;
            System.out.println(datasets[i] + " time is " + (double)averageTime / 25);
        }
        System.out.println( "all average time is " + (double)allTime / 100);
    }
}
