package fileFeature;

import java.util.ArrayList;
import java.util.List;


public class McFile {
    int cc;
    int loc;
    int indentDef;
    int identOccur;
    int degree;
    int depth;
    int nodeNum;
    String name;

    int nameCnt;

    List<String> text;

    int cnt = 0;
    public McFile() {
    }

    public String toString(){
        return "cc:"+cc+",loc:"+loc+",def:"+indentDef+",occur:"+identOccur+",degree:"+degree+"depth:"+depth+",nodenum"+nodeNum+",text:"+text;
    }

    public static McFile create(String[] regex,String name,int cnt){
        McFile file = new McFile();
        file.name = name;
        file.nameCnt = cnt;
        for(String c:regex){
            String lower = c.toLowerCase();
            lower = lower.replaceAll(" |#","");
            String[] x = lower.split("=");
            System.out.println(x[0]);
            if(x[0].startsWith("cc")) file.cc = Integer.parseInt(x[1]);
            else if(x[0].startsWith("loc")) file.loc = Integer.parseInt(x[1]);
            else if(x[0].startsWith("identdef")) file.indentDef = Integer.parseInt(x[1]);
            else if(x[0].startsWith("identoccur")) file.identOccur = Integer.parseInt(x[1]);
            else if(x[0].startsWith("degree")) file.degree = Integer.parseInt(x[1]);
            else if(x[0].startsWith("depth")) file.depth = Integer.parseInt(x[1]);
            else if(x[0].startsWith("nodenum")) file.nodeNum = Integer.parseInt(x[1]);
            else System.out.println(x[0]+" not matches, with value = "+x[1]);
        }
        return file;
    }
    public static List<McFile> parseMcFile(List<String> texts,String name){
        ArrayList<McFile> files = new ArrayList<>();
        List<String> text = new ArrayList<>();
        int cnt = -1;
        for(String line:texts){
            if(line.isEmpty()) continue;
            if(line.startsWith("#")){
                if(!files.isEmpty()){
                    files.getLast().text = text;
                    text = new ArrayList<>();
                }
                cnt++;
                String[] regex = line.split(",");
                files.add(create(regex,name,cnt));
            }else{
                text.add(line);
            }
        }
        files.getLast().text = text;
        return files;
    }

    public List<String> output(){
        List<String> res = new ArrayList<>();
        for(String line:text){
            String[] words = line.split(" ");
            for (int i = 0;i<words.length;i++) {
                words[i] = words[i].replaceAll("_$", "_"+name+"_"+this.nameCnt+"_"+this.cnt);
                words[i] = words[i].replaceAll("_\\)\\{$", "_"+name+"_"+this.nameCnt+"_"+this.cnt+"){");
                words[i] = words[i].replaceAll("_\\)$", "_"+name+"_"+this.nameCnt+"_"+this.cnt+")");
                words[i] = words[i].replaceAll("_\\{$", "_"+name+"_"+this.nameCnt+"_"+this.cnt+"{");
                words[i] = words[i].replaceAll("_\\($", "_"+name+"_"+this.nameCnt+"_"+this.cnt+"(");
            }
            res.add(String.join(" ",words));
        }
        this.cnt++;
        return res;
    }
}