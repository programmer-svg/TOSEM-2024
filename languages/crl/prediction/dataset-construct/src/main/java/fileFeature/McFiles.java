package fileFeature;

import fileFeature.McFile;

import java.util.*;

public class McFiles {
    List<McFile> files;
    Random rand = new Random();
    public int loc;
    public int def;
    public int occur;

    int nodeNum;
    Map<String, Map<String,int[]> > map = new HashMap<>();
    public <T> T randomPick(List<T> list){
        int random = rand.nextInt(list.size());
        return list.get(random);
    }

    public McFiles(List<McFile> files){
        this.files = files;
    }



    /**
     * @param types 0:loc 1:identDef 2:identOccur 3:nodeNum
     */
    public List<String> genFiles(int[]ns,int loc,String req, int... types){
        int type = types.length > 0 ? types[0] : 0;
        List<McFile> newFile;
        newFile = filter(ns,req,files);
        return  genFilesRandomPick(loc,newFile,type);
    }

    public List<McFile> filter(int[]ns,String req,List<McFile> files){
        List<McFile> newFile = files;
        if(Objects.equals(req, "cc")) newFile = newFile.stream().filter(f -> f.cc >= ns[0] && f.cc <= ns[1]).toList();
        if(Objects.equals(req, "degree")) newFile = newFile.stream().filter(f -> f.degree >= ns[0] && f.degree <= ns[1]).toList();
        if(Objects.equals(req, "depth")) newFile = newFile.stream().filter(f -> f.depth >= ns[0] && f.depth <= ns[1]).toList();
        return newFile;
    }


    /**
     * @param types 0:loc 1:identDef 2:identOccur 3:nodeNum
     */
    public List<String> genFiles(int[]ns1,String req1,int[]ns2,String req2,int loc, int... types){
        int type = types.length > 0 ? types[0] : 0;
        List<McFile> newFile;
        newFile = filter(ns1,req1,files);
        newFile = filter(ns2,req2,newFile);
        if(newFile.isEmpty()){
            return new ArrayList<>();
        }
        return  genFilesRandomPick(loc,newFile,type);
    }

    public void reset(){
        this.def = this.occur = this.loc = this.nodeNum = 0;
    }

    public List<String> genFilesRandomPick(int loc, List<McFile> newFile, int type){
        reset();
        List<String> res = new ArrayList<>();
        while(loc > 0){
            McFile file = randomPick(newFile);
            res.addAll(file.output());
            if(type == 0) loc -= file.text.size();
            else if(type == 1) loc -= file.indentDef;
            else if(type == 2) loc -= file.identOccur;
            else loc -= file.nodeNum;
            this.def += file.indentDef;
            this.occur += file.identOccur;
            this.loc += file.loc;
            this.nodeNum += file.nodeNum;
        }
        this.nodeNum+=11;
        this.def+=1;
        this.loc+=2;
        res.add("f");
        res.add("int xxx = i");
        return res;
    }

    /**
     * @param type 0:loc 1:identDef 2:identOccur 3:nodeNum
     */
    public List<String> genFiles(int loc,int type){
        List<McFile> newFile = files;
        return  genFilesRandomPick(loc,newFile,type);
    }

    public List<String> genFiles(String name,int loc,String req){
        List<String> res = new ArrayList<>();
        List<McFile> newFile = new ArrayList<>();
//        if(Objects.equals(req, "cc")) newFile = files.stream().filter(f -> f.cc == n).toList();
//        if(Objects.equals(req, "indentDef")) newFile = files.stream().filter(f -> f.indentDef == n).toList();
        while(loc > 0){
            McFile file = randomPick(newFile);
            res.addAll(file.output());
            loc -= file.text.size();
        }
        return res;
    }
}
