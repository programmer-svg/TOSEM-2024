
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error,mean_absolute_error
from sklearn.linear_model import ElasticNet
from sklearn.linear_model import Ridge
from sklearn.svm import SVR
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import Lasso
from sklearn.neighbors import KNeighborsRegressor
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import KFold
import xlsxwriter as xw
import os
import time
import psutil
from sklearn.metrics import r2_score
from FeatureExtraction import genArray
def openreadtxt(file_names):
    data = []
    for file_name in file_names:
        file = open(file_name,'r')
        file_data = file.readlines() 
        for row in file_data:
            tmp_list = row.split(' ') 
            data.append(tmp_list) 
    return data



def model(data,model,name,flag = False):
    totMSE = 0
    totMAE = 0
    totR2 = 0
    totPred = 0
    totYtest = 0
    global excelA,excel1,workbook,worksheet1
    eA = chr(ord('A')+excelA)
    eB = chr(ord('A')+excelA +1)
    # print(eA+ str(excel1))
    worksheet1.write(eA+ str(excel1), name)
    worksheet1.write(eA+ str(excel1+1), 'ytest')
    worksheet1.write(eB+ str(excel1+1), 'prediction')
    X,Y = genArray(data,"getRename") #getRename handleSemanticTokens validateTextDocument. select which data you want
    X = np.array(X)
    Y = np.array(Y)
    startTime = time.perf_counter()
    memory_usage = get_memory_usage()
    print(f"内存占用: {memory_usage}")
    KF = KFold(5,shuffle=True,random_state=42)
    for train,test in KF.split(X):
        xtrain = X[train]
        xtest = X[test]
        ytrain = Y[train]
        ytest = Y[test]
        if flag:
            cur = model(max_iter=100000)
        else: cur = model()


        cur.fit(xtrain,ytrain)
        prediction = cur.predict(xtest)
        memory_usage = get_memory_usage()
        print(f"内存占用: {memory_usage}")
        # mse = mean_squared_error(ytest, prediction)
        # mae = mean_absolute_error(ytest,prediction)
        # r2 = r2_score(ytest, prediction)
        # output(ytest,prediction)
        # totMSE += mse
        # totMAE += mae
        # totR2 += r2
        # for i in range(ytest.shape[0]):
        #     totPred += prediction[i]
        #     totYtest += ytest[i]
    endTime = time.perf_counter()
    duration = endTime - startTime
    milliseconds = int(duration * 1000)
    print(f"Time : {milliseconds}")

    # outputResult("mse:",totMSE/5)
    # outputResult("mae:",totMAE/5)
    # outputResult("r2:",totR2/5)
    # outputResult("totPred",totPred/X.shape[0])
    # outputResult("totYtest",totYtest/X.shape[0])
    excelA += 2
    excel1 = 1
    print(name)
    # print("mse:",totMSE/5)
    # print("mae:",totMAE/5)
    # print("r2:",totR2/5)
    
def output(ytest,prediction):
    global excelA,excel1,workbook,worksheet1
    
    eA = chr(ord('A')+excelA)
    eB = chr(ord('A')+excelA + 1)
        
    for i in range(ytest.shape[0]):
        worksheet1.write(eA+ str(excel1+i+2), ytest[i])
        worksheet1.write(eB+ str(excel1+i+2), prediction[i])
    excel1 += ytest.shape[0]

def outputResult(desc,res):
    global excelA,excel1,workbook,worksheet1
    
    eA = chr(ord('A')+excelA)
    eB = chr(ord('A')+excelA + 1)
    worksheet1.write(eA+ str(excel1+2), desc)
    worksheet1.write(eB+ str(excel1+2), res)
    
    excel1 += 1
     
excel1 = 1
excelA = 0
def get_memory_usage():
    memory_info = psutil.virtual_memory()
    memory_usage = str(int(round(memory_info.percent))) + "%"
    return memory_usage

if __name__=="__main__":
    if os.path.exists('prediction.xlsx'):
        os.remove('prediction.xlsx')
    workbook = xw.Workbook('prediction.xlsx')
    worksheet1 = workbook.add_worksheet("prediction")
    worksheet1.activate() 
    
    #Sym stands for AST (only symbol table)
    names = []
    # names.append(f'data\\semanticTree\\RQ3_new_def.txt')
    names.append(f'data\\symbolTable\\RQ3_new_def.txt')
    
    # names.append(f'data\\semanticTree\\RQ3_new_loc.txt')
    names.append(f'data\\symbolTable\\RQ3_new_loc.txt')
    
    # names.append(f'data\\semanticTree\\RQ3_new_nodeNum.txt')
    names.append(f'data\\symbolTable\\RQ3_new_nodeNum.txt')
    
    # names.append(f'data\\semanticTree\\RQ3_new_occur.txt')
    names.append(f'data\\symbolTable\\RQ3_new_occur.txt')
    data = openreadtxt(names)


    model(data,LinearRegression,"LR",)
    model(data,DecisionTreeRegressor,"DecisionTree")
    model(data,SVR,"SVM")
    model(data,Ridge,"Ridge")
    model(data,RandomForestRegressor,"RF")
    model(data,Lasso,"Lasso",True)
    model(data,ElasticNet,"ElasticNet",True)
    model(data,KNeighborsRegressor," KNeighborsRegressor")
    model(data,GradientBoostingRegressor,"GradientBoostingRegressor")
    
    print('-------')
    #Sem stands for STI (semantic tree)
    # strr = 'Sem'
    # names = []
    
    # names.append(f'data\\def{strr}.txt')
    # names.append(f'data\\loc{strr}.txt')
    # names.append(f'data\\node{strr}.txt')
    # names.append(f'data\\occ{strr}.txt')
    # data = openreadtxt(names)
    
    # model(data,LinearRegression,"LR",)
    # model(data,DecisionTreeRegressor,"DecisionTree")
    # model(data,SVR,"SVM")
    # model(data,Ridge,"Ridge")
    # model(data,RandomForestRegressor,"RF")
    # model(data,Lasso,"Lasso",True)
    # model(data,ElasticNet,"ElasticNet",True)
    # model(data,KNeighborsRegressor," KNeighborsRegressor")
    # model(data,GradientBoostingRegressor,"GradientBoostingRegressor")
    
    workbook.close()
    
