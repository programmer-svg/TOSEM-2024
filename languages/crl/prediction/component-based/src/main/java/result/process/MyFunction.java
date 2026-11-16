package result.process;

import java.io.BufferedReader;
import java.io.FileReader;

public class MyFunction {
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
}
