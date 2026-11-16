export function typeMismatchWithOprator3(oprator:string|undefined,type1:string,type2:string){
	return "Type mismatch:Oprator "+oprator+" cannot be applied to '" + type1+"', '"+ type2+"'";
}

export function typeMismatchWithOprator2(oprator:string|undefined,type:string){
	return "Type mismatch:Oprator "+oprator+" cannot be applied to '" + type+"'";
}

export function typeMismatch2(type1:string,type2:string){
	return "Type mismatch: cannot convert " + type1 +" to "+type2;
}

export function CannotReference(name:string){
	return "Cannot reference " + name;
}

export function NotUsed(name:string){
	return name + " not used"; 
}

export function hasBeenDef(name:string){
	return "variable " + name +" has been defined"; 
}

function parameter(num:number){
	if(num ==1 || num ==0) return num+" parameter";
	return num+" parameters";
}

export function functionParameterNumber(name:string,num1:number,num2:number){
	return name +" declared with "+parameter(num1)+", but used with "+parameter(num2); 
}

export function tokenNameLegal(name:string){
	if(name === 'recp' || name === 'int'){
		return name+" is keyword"; 
	}
	return undefined;
}

export function noType(name:string){
	return "no type named "+name;
}

export function noClassType(name:string){
	return "no class named "+name;
}

export function notClassType(name:string){
	return name+" is not a class";
}

export function classHasBeenDef(name:string){
	return name +" has been defined"; 
}

export function noReturnType(type:string){
	return  "no "+type+"returned"; 
}

export function noErrorLit(name:string){
	return  "Cannot resolve reference to ErrorCode "+name; 
}

export function notClass(name:string){
	return  name+" is not a class"; 
}

export function accessDenied(type1:string,type2:string){
	return  "access denied beacause "+type1+" do not have the access to "+type2; 
}

export const ErrorLit = "1";