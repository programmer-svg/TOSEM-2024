# CC = 2, LOC = 7, identDef = 2, identOccur = 8, degree = 7, depth = 4, nodeNum = 26
int int_1_
int_1_ = 0
int int_2_
int_2_ = 0
if (int_1_ > int_2_){
    int_2_ = int_1_
}
# CC = 5, LOC = 20, identDef = 4, identOccur = 24, degree = 13, depth = 5, nodeNum = 72
int int_1_
int_1_ = 1
int int_2_
int_2_ = 2
int int_3_
int_3_ = 3
int int_4_
int_4_ = 0
if (int_1_ < int_2_){
    int_4_ = int_2_
    if (int_2_ < int_3_){
        int_4_ = int_3_
    }
}
elif (int_1_ < int_3_){
    int_4_ = int_3_
}
elif (int_1_ > int_3_){
    int_4_ = int_1_
}
# CC = 10, LOC = 44, identDef = 4, identOccur = 26, degree = 31, depth = 5, nodeNum = 174
int int_1_
int_1_ = 1
int int_2_
int_2_ = 2
int int_3_
int_3_ = 3
int int_4_
int_4_ = 0
if (int_1_ > 0){
    if (int_2_ > 0){
        if (int_3_ > 0){
            int_4_ = 3
        }
        elif (int_3_ < 1){
            int_4_ = 2
        }
    }
    elif (int_2_ < 1){
        if (int_3_ > 0){
            int_4_ = 2
        }
        elif (int_3_ < 1){
            int_4_ = 1
        }
    }
}
else{
    if (int_2_ < 1){
        if (int_3_ < 1){
            int_4_ = 0
        }
        else {
            int_4_ = 1
        }
    }
    else {
        if (int_3_ < 1){
            int_4_ = 1
        }
        else {
            int_4_ = 2
        }
    }
}
# CC = 15, LOC = 43, identDef = 5, identOccur = 27, degree = 24, depth = 7, nodeNum = 191
int int_1_
int_1_ = 1
int int_2_
int_2_ = 2
int int_3_
int_3_ = 3
int int_4_
int_4_ = 4
int int_5_
int_5_ = 5
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ > 0){
                if (int_5_ > 0){
                    int_5_ = 51
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ > 0){
                if (int_5_ < 0){
                    int_5_ = 52
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ < 0){
                    int_5_ = 53
            }
        }
    }
}
# CC = 20, LOC = 65, identDef = 5, identOccur = 39, degree = 33, depth = 9, nodeNum = 301
int int_1_
int_1_ = 1
int int_2_
int_2_ = 2
int int_3_
int_3_ = 3
int int_4_
int_4_ = 4
int int_5_
int_5_ = 5
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ > 0){
                if (int_5_ > 0){
                    int_5_ = 51
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ > 0){
                if (int_5_ < 0){
                    int_5_ = 52
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ > 0){
            if (int_4_ < 0){
                if (int_5_ < 0){
                    int_5_ = 53
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ > 0){
        if (int_3_ < 0){
            if (int_4_ < 0){
                if (int_5_ < 0){
                    int_5_ = 54
                }
            }
        }
    }
}
if (int_1_ > 0) {
    if (int_2_ < 0){
        if (int_3_ < 0){
            if (int_4_ < 0){
                    int_5_ = 55
            }
        }
    }
}


