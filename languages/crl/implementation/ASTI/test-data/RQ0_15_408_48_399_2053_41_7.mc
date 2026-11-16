int int_1_forStmt_3_0
int_1_forStmt_3_0 = 0
int int_2_forStmt_3_0
int_2_forStmt_3_0 = 0
[int] intArray_1_forStmt_3_0 = [0,1,2]
[int] intArray_2_forStmt_3_0 = [3,4,5]
[int] intArray_3_forStmt_3_0 = [6,7,8]
for int_1_forStmt_3_0 in intArray_1_forStmt_3_0 {
    if (int_1_forStmt_3_0 > 0){
        int_2_forStmt_3_0 =  int_1_forStmt_3_0 + int_2_forStmt_3_0
    }
    if (int_1_forStmt_3_0 < 0){
        int_2_forStmt_3_0 =  int_2_forStmt_3_0 - int_1_forStmt_3_0
    }
    if (int_1_forStmt_3_0 == 0){
        int_2_forStmt_3_0 =  0
    }
}
for int_1_forStmt_3_0 in intArray_2_forStmt_3_0 {
    if (int_1_forStmt_3_0 > 0){
        int_2_forStmt_3_0 =  int_1_forStmt_3_0 + int_2_forStmt_3_0
    }
    if (int_1_forStmt_3_0 < 0){
        int_2_forStmt_3_0 =  int_2_forStmt_3_0 - int_1_forStmt_3_0
    }
    if (int_1_forStmt_3_0 == 0){
        int_2_forStmt_3_0 =  0
        break
    }
}
for int_1_forStmt_3_0 in intArray_3_forStmt_3_0 {
    if (int_1_forStmt_3_0 > 0){
        int_2_forStmt_3_0 =  int_1_forStmt_3_0 + int_2_forStmt_3_0
    }
    if (int_1_forStmt_3_0 < 0){
        int_2_forStmt_3_0 =  int_2_forStmt_3_0 - int_1_forStmt_3_0
    }
    if (int_1_forStmt_3_0 == 0){
        int_2_forStmt_3_0 =  0
        break
    }
}
int int_1_forStmt_3_1
int_1_forStmt_3_1 = 0
int int_2_forStmt_3_1
int_2_forStmt_3_1 = 0
[int] intArray_1_forStmt_3_1 = [0,1,2]
[int] intArray_2_forStmt_3_1 = [3,4,5]
[int] intArray_3_forStmt_3_1 = [6,7,8]
for int_1_forStmt_3_1 in intArray_1_forStmt_3_1 {
    if (int_1_forStmt_3_1 > 0){
        int_2_forStmt_3_1 =  int_1_forStmt_3_1 + int_2_forStmt_3_1
    }
    if (int_1_forStmt_3_1 < 0){
        int_2_forStmt_3_1 =  int_2_forStmt_3_1 - int_1_forStmt_3_1
    }
    if (int_1_forStmt_3_1 == 0){
        int_2_forStmt_3_1 =  0
    }
}
for int_1_forStmt_3_1 in intArray_2_forStmt_3_1 {
    if (int_1_forStmt_3_1 > 0){
        int_2_forStmt_3_1 =  int_1_forStmt_3_1 + int_2_forStmt_3_1
    }
    if (int_1_forStmt_3_1 < 0){
        int_2_forStmt_3_1 =  int_2_forStmt_3_1 - int_1_forStmt_3_1
    }
    if (int_1_forStmt_3_1 == 0){
        int_2_forStmt_3_1 =  0
        break
    }
}
for int_1_forStmt_3_1 in intArray_3_forStmt_3_1 {
    if (int_1_forStmt_3_1 > 0){
        int_2_forStmt_3_1 =  int_1_forStmt_3_1 + int_2_forStmt_3_1
    }
    if (int_1_forStmt_3_1 < 0){
        int_2_forStmt_3_1 =  int_2_forStmt_3_1 - int_1_forStmt_3_1
    }
    if (int_1_forStmt_3_1 == 0){
        int_2_forStmt_3_1 =  0
        break
    }
}
int function_1_functionDef_3_0 ( int a, int b, int c, int d) {
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
int int_1_ifStmt_3_0
int_1_ifStmt_3_0 = 1
int int_2_ifStmt_3_0
int_2_ifStmt_3_0 = 2
int int_3_ifStmt_3_0
int_3_ifStmt_3_0 = 3
int int_4_ifStmt_3_0
int_4_ifStmt_3_0 = 4
int int_5_ifStmt_3_0
int_5_ifStmt_3_0 = 5
if (int_1_ifStmt_3_0 > 0) {
    if (int_2_ifStmt_3_0 > 0){
        if (int_3_ifStmt_3_0 > 0){
            if (int_4_ifStmt_3_0 > 0){
                if (int_5_ifStmt_3_0 > 0){
                    int_5_ifStmt_3_0 = 51
                }
            }
        }
    }
}
if (int_1_ifStmt_3_0 > 0) {
    if (int_2_ifStmt_3_0 > 0){
        if (int_3_ifStmt_3_0 > 0){
            if (int_4_ifStmt_3_0 > 0){
                if (int_5_ifStmt_3_0 < 0){
                    int_5_ifStmt_3_0 = 52
                }
            }
        }
    }
}
if (int_1_ifStmt_3_0 > 0) {
    if (int_2_ifStmt_3_0 > 0){
        if (int_3_ifStmt_3_0 > 0){
            if (int_4_ifStmt_3_0 < 0){
                    int_5_ifStmt_3_0 = 53
            }
        }
    }
}
int int_1_wihilStmt_3_0
int_1_wihilStmt_3_0 = 5
int int_2_wihilStmt_3_0
int_2_wihilStmt_3_0 = 0
int int_3_wihilStmt_3_0
int_3_wihilStmt_3_0 = 0
int int_4_wihilStmt_3_0
int_4_wihilStmt_3_0 = 0
while int_2_wihilStmt_3_0 < int_1_wihilStmt_3_0{
    int_2_wihilStmt_3_0 =  int_2_wihilStmt_3_0 + 1
    if (int_3_wihilStmt_3_0 < 100){
        int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + int_2_wihilStmt_3_0
    }
    if (int_3_wihilStmt_3_0 < 1000){
        int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 100
    }
    if (int_3_wihilStmt_3_0 < 10000){
        int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 1000
    }
    while int_2_wihilStmt_3_0 < int_3_wihilStmt_3_0{
        int_2_wihilStmt_3_0 =  int_2_wihilStmt_3_0 * 2
        if (int_3_wihilStmt_3_0 < 100){
            int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 10
        }
        if (int_3_wihilStmt_3_0 < 1000){
            int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 100
        }
        if (int_3_wihilStmt_3_0 < 10000){
            int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 1000
        }
        if (int_3_wihilStmt_3_0 < 100000){
            int_3_wihilStmt_3_0 =  int_3_wihilStmt_3_0 + 10000
        }
        while int_2_wihilStmt_3_0 < int_4_wihilStmt_3_0{
            int_2_wihilStmt_3_0 =  int_2_wihilStmt_3_0 * 2
            if (int_4_wihilStmt_3_0 < 100){
                int_4_wihilStmt_3_0 =  int_4_wihilStmt_3_0 + 10
            }
            if (int_4_wihilStmt_3_0 < 1000){
                int_4_wihilStmt_3_0 =  int_4_wihilStmt_3_0 + 100
            }
            if (int_4_wihilStmt_3_0 < 10000){
                int_4_wihilStmt_3_0 =  int_4_wihilStmt_3_0 + 1000
            }
            if (int_4_wihilStmt_3_0 < 100000){
                int_4_wihilStmt_3_0 =  int_4_wihilStmt_3_0 + 10000
            }
        }
    }
}
int int_1_wihilStmt_3_1
int_1_wihilStmt_3_1 = 5
int int_2_wihilStmt_3_1
int_2_wihilStmt_3_1 = 0
int int_3_wihilStmt_3_1
int_3_wihilStmt_3_1 = 0
int int_4_wihilStmt_3_1
int_4_wihilStmt_3_1 = 0
while int_2_wihilStmt_3_1 < int_1_wihilStmt_3_1{
    int_2_wihilStmt_3_1 =  int_2_wihilStmt_3_1 + 1
    if (int_3_wihilStmt_3_1 < 100){
        int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + int_2_wihilStmt_3_1
    }
    if (int_3_wihilStmt_3_1 < 1000){
        int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 100
    }
    if (int_3_wihilStmt_3_1 < 10000){
        int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 1000
    }
    while int_2_wihilStmt_3_1 < int_3_wihilStmt_3_1{
        int_2_wihilStmt_3_1 =  int_2_wihilStmt_3_1 * 2
        if (int_3_wihilStmt_3_1 < 100){
            int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 10
        }
        if (int_3_wihilStmt_3_1 < 1000){
            int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 100
        }
        if (int_3_wihilStmt_3_1 < 10000){
            int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 1000
        }
        if (int_3_wihilStmt_3_1 < 100000){
            int_3_wihilStmt_3_1 =  int_3_wihilStmt_3_1 + 10000
        }
        while int_2_wihilStmt_3_1 < int_4_wihilStmt_3_1{
            int_2_wihilStmt_3_1 =  int_2_wihilStmt_3_1 * 2
            if (int_4_wihilStmt_3_1 < 100){
                int_4_wihilStmt_3_1 =  int_4_wihilStmt_3_1 + 10
            }
            if (int_4_wihilStmt_3_1 < 1000){
                int_4_wihilStmt_3_1 =  int_4_wihilStmt_3_1 + 100
            }
            if (int_4_wihilStmt_3_1 < 10000){
                int_4_wihilStmt_3_1 =  int_4_wihilStmt_3_1 + 1000
            }
            if (int_4_wihilStmt_3_1 < 100000){
                int_4_wihilStmt_3_1 =  int_4_wihilStmt_3_1 + 10000
            }
        }
    }
}
int int_1_ifStmt_3_1
int_1_ifStmt_3_1 = 1
int int_2_ifStmt_3_1
int_2_ifStmt_3_1 = 2
int int_3_ifStmt_3_1
int_3_ifStmt_3_1 = 3
int int_4_ifStmt_3_1
int_4_ifStmt_3_1 = 4
int int_5_ifStmt_3_1
int_5_ifStmt_3_1 = 5
if (int_1_ifStmt_3_1 > 0) {
    if (int_2_ifStmt_3_1 > 0){
        if (int_3_ifStmt_3_1 > 0){
            if (int_4_ifStmt_3_1 > 0){
                if (int_5_ifStmt_3_1 > 0){
                    int_5_ifStmt_3_1 = 51
                }
            }
        }
    }
}
if (int_1_ifStmt_3_1 > 0) {
    if (int_2_ifStmt_3_1 > 0){
        if (int_3_ifStmt_3_1 > 0){
            if (int_4_ifStmt_3_1 > 0){
                if (int_5_ifStmt_3_1 < 0){
                    int_5_ifStmt_3_1 = 52
                }
            }
        }
    }
}
if (int_1_ifStmt_3_1 > 0) {
    if (int_2_ifStmt_3_1 > 0){
        if (int_3_ifStmt_3_1 > 0){
            if (int_4_ifStmt_3_1 < 0){
                    int_5_ifStmt_3_1 = 53
            }
        }
    }
}
int int_1_wihilStmt_3_2
int_1_wihilStmt_3_2 = 5
int int_2_wihilStmt_3_2
int_2_wihilStmt_3_2 = 0
int int_3_wihilStmt_3_2
int_3_wihilStmt_3_2 = 0
int int_4_wihilStmt_3_2
int_4_wihilStmt_3_2 = 0
while int_2_wihilStmt_3_2 < int_1_wihilStmt_3_2{
    int_2_wihilStmt_3_2 =  int_2_wihilStmt_3_2 + 1
    if (int_3_wihilStmt_3_2 < 100){
        int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + int_2_wihilStmt_3_2
    }
    if (int_3_wihilStmt_3_2 < 1000){
        int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 100
    }
    if (int_3_wihilStmt_3_2 < 10000){
        int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 1000
    }
    while int_2_wihilStmt_3_2 < int_3_wihilStmt_3_2{
        int_2_wihilStmt_3_2 =  int_2_wihilStmt_3_2 * 2
        if (int_3_wihilStmt_3_2 < 100){
            int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 10
        }
        if (int_3_wihilStmt_3_2 < 1000){
            int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 100
        }
        if (int_3_wihilStmt_3_2 < 10000){
            int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 1000
        }
        if (int_3_wihilStmt_3_2 < 100000){
            int_3_wihilStmt_3_2 =  int_3_wihilStmt_3_2 + 10000
        }
        while int_2_wihilStmt_3_2 < int_4_wihilStmt_3_2{
            int_2_wihilStmt_3_2 =  int_2_wihilStmt_3_2 * 2
            if (int_4_wihilStmt_3_2 < 100){
                int_4_wihilStmt_3_2 =  int_4_wihilStmt_3_2 + 10
            }
            if (int_4_wihilStmt_3_2 < 1000){
                int_4_wihilStmt_3_2 =  int_4_wihilStmt_3_2 + 100
            }
            if (int_4_wihilStmt_3_2 < 10000){
                int_4_wihilStmt_3_2 =  int_4_wihilStmt_3_2 + 1000
            }
            if (int_4_wihilStmt_3_2 < 100000){
                int_4_wihilStmt_3_2 =  int_4_wihilStmt_3_2 + 10000
            }
        }
    }
}
int function_1_functionDef_3_1 ( int a, int b, int c, int d) {
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
int int_1_forStmt_3_2
int_1_forStmt_3_2 = 0
int int_2_forStmt_3_2
int_2_forStmt_3_2 = 0
[int] intArray_1_forStmt_3_2 = [0,1,2]
[int] intArray_2_forStmt_3_2 = [3,4,5]
[int] intArray_3_forStmt_3_2 = [6,7,8]
for int_1_forStmt_3_2 in intArray_1_forStmt_3_2 {
    if (int_1_forStmt_3_2 > 0){
        int_2_forStmt_3_2 =  int_1_forStmt_3_2 + int_2_forStmt_3_2
    }
    if (int_1_forStmt_3_2 < 0){
        int_2_forStmt_3_2 =  int_2_forStmt_3_2 - int_1_forStmt_3_2
    }
    if (int_1_forStmt_3_2 == 0){
        int_2_forStmt_3_2 =  0
    }
}
for int_1_forStmt_3_2 in intArray_2_forStmt_3_2 {
    if (int_1_forStmt_3_2 > 0){
        int_2_forStmt_3_2 =  int_1_forStmt_3_2 + int_2_forStmt_3_2
    }
    if (int_1_forStmt_3_2 < 0){
        int_2_forStmt_3_2 =  int_2_forStmt_3_2 - int_1_forStmt_3_2
    }
    if (int_1_forStmt_3_2 == 0){
        int_2_forStmt_3_2 =  0
        break
    }
}
for int_1_forStmt_3_2 in intArray_3_forStmt_3_2 {
    if (int_1_forStmt_3_2 > 0){
        int_2_forStmt_3_2 =  int_1_forStmt_3_2 + int_2_forStmt_3_2
    }
    if (int_1_forStmt_3_2 < 0){
        int_2_forStmt_3_2 =  int_2_forStmt_3_2 - int_1_forStmt_3_2
    }
    if (int_1_forStmt_3_2 == 0){
        int_2_forStmt_3_2 =  0
        break
    }
}
f
int xxx = i
