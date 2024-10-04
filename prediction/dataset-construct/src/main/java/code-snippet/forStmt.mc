# CC = 2, LOC = 8, identDef = 3, identOccur = 10, degree = 10, depth = 5, nodeNum = 43
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
[int] intArray_1_ = [0,1,2]
for int_1_ in intArray_1_ {
    int_2_ =  int_1_ + int_2_
}
# CC = 5, LOC = 16, identDef = 3, identOccur = 17, degree = 21, depth = 6, nodeNum = 85
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
[int] intArray_1_ = [0,1,2]
for int_1_ in intArray_1_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
    }
}
# CC = 10, LOC = 29, identDef = 4, identOccur = 30, degree = 22, depth = 6, nodeNum = 104
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
[int] intArray_1_ = [0,1,2]
[int] intArray_2_ = [3,4,5]
for int_1_ in intArray_1_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
    }
}
for int_1_ in intArray_2_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
        break
    }
}
# CC = 15, LOC = 42, identDef = 5, identOccur = 43, degree = 36, depth = 7, nodeNum = 227
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
[int] intArray_1_ = [0,1,2]
[int] intArray_2_ = [3,4,5]
[int] intArray_3_ = [6,7,8]
for int_1_ in intArray_1_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
    }
}
for int_1_ in intArray_2_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
        break
    }
}
for int_1_ in intArray_3_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        int_2_ =  0
        break
    }
}
# CC = 20, LOC = 57, identDef = 7, identOccur = 63, degree = 53, depth = 9, nodeNum = 329
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
[int] intArray_1_ = [0,1,2]
[int] intArray_2_ = [3,4,5]
[int] intArray_3_ = [6,7,8]
[int] intArray_4_ = [9,10,11]
[int] intArray_5_ = [12,13,14]
for int_1_ in intArray_1_ {
    if (int_1_ > 0){
        int_2_ =  int_1_ + int_2_
    }
    if (int_1_ < 0){
        int_2_ =  int_2_ - int_1_
    }
    if (int_1_ == 0){
        for int_1_ in intArray_2_ {
            if (int_1_ > 0){
                int_2_ =  int_1_ + int_2_
            }
            if (int_1_ < 0){
                int_2_ =  int_2_ - int_1_
            }
            if (int_1_ == 0){
                for int_1_ in intArray_3_ {
                    if (int_1_ > 0){
                        int_2_ =  int_1_ + int_2_
                    }
                    if (int_1_ < 0){
                        int_2_ =  int_2_ - int_1_
                    }
                    if (int_1_ == 0){
                        for int_1_ in intArray_4_ {
                            if (int_1_ > 0){
                                int_2_ =  int_1_ + int_2_
                            }
                            if (int_1_ < 0){
                                int_2_ =  int_2_ - int_1_
                            }
                            if (int_1_ == 0){
                                for int_1_ in intArray_5_ {
                                    if (int_1_ > 0){
                                        int_2_ =  int_1_ + int_2_
                                    }
                                    if (int_1_ < 0){
                                        int_2_ =  int_2_ - int_1_
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}




