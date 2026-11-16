package ASTcompute;

import java.io.*;

public class MyFunc {
    public String readFromFile(String filename){
        try {
            FileReader fileReader = new FileReader(filename);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String readLine = null;
            StringBuilder stringBuilder = new StringBuilder();
            while ((readLine = bufferedReader.readLine())!= null){
                stringBuilder.append(System.lineSeparator() + readLine);
            }
            bufferedReader.close();
            return stringBuilder.toString();
        }catch (Exception e){
            System.out.println("read error");
            e.printStackTrace();
            System.exit(-2);
            return null;
        }
    }
    public void writeToFile(String filename,String content){
        try {
            FileWriter fileWriter = new FileWriter(filename);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
            bufferedWriter.write(content);
            bufferedWriter.flush();
        }catch (Exception e){
            System.out.println("write error");
            e.printStackTrace();
            System.exit(-3);
        }
    }

    public void traverseFiles(File folder) {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    traverseFiles(file); // 递归调用，遍历子文件夹中的文件
                } else {
                    System.out.println(file.getName()); // 输出文件名
                }
            }
        }
    }
}
