export class Logger{

	static logger?:Logger;
	static errorLit = ["1"];

	public static getLogger():Logger{
		if(!this.logger){
			this.logger = new Logger();
		}
		return this.logger;
	}

	noErrorLit(name:string){
		return  "Cannot resolve reference to ErrorCode "+name; 
	}

	tokenNameLegal(name:string){
		if(name === 'recp' || name === 'int'){
			return name+" is keyword"; 
		}
		return undefined;
	}

	typeMismatchWithOprator3(oprator:string|undefined,type1:string,type2:string){
		return "Type mismatch:Oprator "+oprator+" cannot be applied to '" + type1+"', '"+ type2+"'";
	}
	
	typeMismatchWithOprator2(oprator:string|undefined,type:string){
		return "Type mismatch:Oprator "+oprator+" cannot be applied to '" + type+"'";
	}
	
	typeMismatch2(type1:string,type2:string){
		return "Type mismatch: cannot convert " + type2 +" to "+type1;
	}
	
	CannotReference(name:string){
		return "Cannot reference " + name;
	}
	
	NotUsed(name:string){
		return name + " not used"; 
	}
	
	hasBeenDef(name:string){
		return "variable " + name +" has been defined"; 
	}
	
	parameter(num:number){
		if(num ==1 || num ==0) return num+" parameter";
		return num+" parameters";
	}
	
	functionParameterNumber(name:string,num1:number,num2:number){
		return name +" declared with "+this.parameter(num1)+", but used with "+this.parameter(num2); 
	}
	
	noType(name:string){
		return "no type named "+name;
	}
	
	noClassType(name:string){
		return "no class named "+name;
	}
	
	notClassType(name:string){
		return name+" is not a class";
	}
	
	classHasBeenDef(name:string){
		return name +" has been defined"; 
	}
	
	noReturnType(type:string){
		return  "no "+type+"returned"; 
	}

	notClass(name:string){
		return  name+" is not a class"; 
	}
	
	accessDenied(type1:string,type2:string){
		return  "access denied beacause "+type1+" do not have the access to "+type2; 
	}
}
