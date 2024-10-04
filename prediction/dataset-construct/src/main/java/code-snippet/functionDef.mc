# CC = 2, LOC = 3, identDef = 3, identOccur = 6, degree = 15, depth = 3, nodeNum = 14
int function_1_ ( int a, int b) {
    a = a + b
};
# CC = 5, LOC = 6, identDef = 3, identOccur = 7, degree = 23, depth = 4, nodeNum = 22
int function_1_ ( int a, int b) {
    if (a > b){
        return a
    }
    return b
};
# CC = 10, LOC = 14, identDef = 4, identOccur = 16, degree = 54, depth = 6, nodeNum = 54
int function_1_ ( int a, int b, int c) {
    if (a > b){
        if (a > c){
            return a
        }
        return c
    }
    if (b > c){
        return b
    }
    if (b <= c){
        return c
    }
};
# CC = 15, LOC = 26, identDef = 5, identOccur = 27, degree = 94, depth = 6, nodeNum = 94
int function_1_ ( int a, int b, int c, int d) {
    if (a > b){
        if (a > c){
            return a
        }
        if (a <= c){
            return c
        }
    }
    if (a <= b ){
        if (b > c){
            return b
        }
        if (b <= c){
            return c
        }
    }
    if (c > d){
        return c
    }
    if (c <= d){
        return d
    }
};
# CC = 20, LOC = 30, identDef = 5, identOccur = 33, degree = 115, depth = 7, nodeNum = 116
int function_1_ ( int a, int b, int c, int d) {
    if (a > b){
        if (a > c){
            if (a > d){
                return a
            }
            return d
        }
        if (a <= c){
            if (c > d){
                return c
            }
            return d
        }
    }
    if (a<=b){
        if (b > c){
            if (b > d){
                return b
            }
            return d
        }
        if (b <= c){
            if (c > d){
                return c
            }
            return d
        }
    }
};