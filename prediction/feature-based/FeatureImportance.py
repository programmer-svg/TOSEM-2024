import numpy as np
from sklearn.model_selection import KFold

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import KFold

from prediction import genArray, openreadtxt
from sklearn.inspection import permutation_importance

import xlsxwriter as xw
import os

#study the feature importance using AST and STI differently
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

#study the feature importance using AST and STI together
def model2(data1,data2,model,name,flag = False):
  str = "validateTextDocument"
  X1,Y1 = genArray(data1,str) #handleSemanticTokens getRename validateTextDocument find getPosition getInfoArray getCompletionInfos
  X2,Y2 = genArray(data2,str) #handleSemanticTokens getRename validateTextDocument find getPosition getInfoArray getCompletionInfos

  weight = [0] * 8
  X = []
  Y = []
  for i in range(len(X1)):
     X1[i].append(0)
     X.append(X1[i])
     Y.append(Y1[i])
  for i in range(len(X2)):
     X2[i].append(1)
     X.append(X2[i])
     Y.append(Y2[i])
  # print(X)

  X = np.array(X)
  Y = np.array(Y)
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
      for i in range(8):
        weight[i] += result['importances_mean'][i]

  print(name)
  print('weight')
  print(weight)
  # output(weight)

# the number in the data before, for example i in {i}Com{str}.txt, stands for the following meanings:
# 0:no filter 1:filter scope 2:filter type 3:filter function 4:filter ALL in the completion serverice.
# You can change to whatever you want by setting {i} and {str}
def ans1():
  str = 'Sym'
  names = []
  for i in range(0,4): 
     names.append(f'data\\{i}Com{str}.txt')
  data = openreadtxt(names)
  model(data,RandomForestRegressor,"RF")
  
  str = 'Sem'
  names = []
  for i in range(3,4): 
     names.append(f'data\\{i}Com{str}.txt')
  data = openreadtxt(names)
  model(data,RandomForestRegressor,"RF")

def ans2():
  str = 'Sym'
  names = []
  for i in range(1,2): 
     names.append(f'data\\{i}Com{str}.txt')
  data1 = openreadtxt(names)
  str = 'Sem'
  names = []
  for i in range(1,2): 
     names.append(f'data\\{i}Com{str}.txt')
  data2 = openreadtxt(names)
  model2(data1,data2,RandomForestRegressor,"RF")

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
  # ans2()
  
  workbook.close()

  
  
  