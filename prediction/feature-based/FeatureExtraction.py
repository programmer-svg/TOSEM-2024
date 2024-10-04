

def remove_non_numeric(string):
    numeric_string = ''
    for char in string:
        if char.isnumeric():
            numeric_string += char
    return int(numeric_string)

def non_zero(n):
    return n != 0

def genArray(data:list,string:str,dim = False):
    X = []
    Y = []
    
    if string == "getRename":
        myDict = {}
        for line in data:
            sig = False
            for word in line:
                if word.find(string) != -1:
                    sig = True
            if sig:
                ret = line[0]
                duration = remove_non_numeric(line[len(line)-1])
                
                arr = myDict.setdefault(ret,[])
                arr.append(duration)
        for key,value in myDict.items():
            arr = list(filter(non_zero,value))
            duration = 0
            if len(arr) == 0:
                duration = 0
            else:
                arr.sort(reverse=True)
                duration = arr[0]
            ret = key.split('_')
            ret = [remove_non_numeric(num) for num in ret]
            X.append(ret[1:])
            Y.append(duration)#4 2
            
        
    elif string == "getPosition" or string == "getInfoArray":
        duration = 0
        meet = False
        for line in data:
            for word in line:
                if word.find(string) != -1:
                    meet = True
                    duration = remove_non_numeric(line[len(line)-1])
                    break
            if line[0].startswith("vscode-test-web:") and meet:
                ret = line[0].split('_')
                ret = [remove_non_numeric(num) for num in ret]
                X.append(ret[1:])
                Y.append(duration)
                meet = False
    else:
        for line in data:
            sig = False
            for word in line:
                if word.find(string) != -1:
                    sig = True
            if sig:
                ret = line[0].split('_')
                ret = [remove_non_numeric(num) for num in ret]
                
                # if filter(ret):
                #     continue
                
                X.append(ret[1:])
                Y.append(remove_non_numeric(line[len(line)-1]))#4 2
    # print(X)
    # print(Y)
    return X,Y 
