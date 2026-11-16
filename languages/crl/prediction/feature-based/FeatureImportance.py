import numpy as np
from sklearn.model_selection import KFold

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import KFold

from prediction import genArray, openreadtxt
from sklearn.inspection import permutation_importance

import xlsxwriter as xw
import os

# Feature importance for ASTI.
def model(data,model,name,flag = False):
  X,Y = genArray(data,"getDefinition") #handleSemanticTokens getRename validateTextDocument find getPosition getInfoArray
  X = np.array(X)
  Y = np.array(Y)
  weight = [0] * 7
  print(len(Y))
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
      result = permutation_importance(cur,xtest,ytest)
      print(result['importances_mean'])
      for i in range(7):
        weight[i] += result['importances_mean'][i]
        
  for i in range(7):
        weight[i]/=5
        
  print(name)
  print('weight')
  print(weight)
  output(weight)

def ans1():
  names = [os.path.join("data", "symbolTable", f"RQ3_new_{feature}.txt")
           for feature in ("def", "loc", "nodeNum", "occur")]
  data = openreadtxt(names)
  model(data, RandomForestRegressor, "RF")

def output(arr):
    global excel1,workbook,worksheet1
    print(arr)
    excel1 += 1
    for i in range(len(arr)):
      eA = chr(ord('A')+i)
      worksheet1.write(eA+ str(excel1) , arr[i])
       
excel1 = 0   
if __name__=="__main__":
 
  if os.path.exists('featureImportance.xlsx'):
        os.remove('featureImportance.xlsx')
  workbook = xw.Workbook('featureImportance.xlsx')
  worksheet1 = workbook.add_worksheet("featureImportance")
  worksheet1.activate() 
  
  ans1()
  
  workbook.close()

  
  
  