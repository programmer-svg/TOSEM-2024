package result;

import result.process.Result;

public class ComponentBasedResult {
    public static void main(String[] args) {
        String srcFolder = "src/main/java/result/";
        String excelFilePath = srcFolder + "Result_componentBased.xlsx";
        boolean getNewExcelResult = true;
        Result result = new Result();
        result.checkExcelFile(excelFilePath, getNewExcelResult);
        String resultPath = "src/main/java/result/performanceResult";
        result.RQ3newResult(resultPath);

    }
}
