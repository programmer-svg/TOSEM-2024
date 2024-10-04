import { SUnit } from '../SUnits/SUnit';
import { SArray, SAssignment, SBlock, SClassType, SCondition, SConstCall, SConstDef, SElement, SEvaluationStmt, SFieldDef, SForStmt, SForValueStmt, SFunctionCall, SFunctionDef, SIfStmt, SIndexer, SLiteral, SNewStmt, SParameter, SParameters, SParametersDef, SProg, SRefStmt, SReturnStmt, SSimpleClassDef, SStatement, STuple, SWihilStmt } from '../SUnits/Sunits';
import { ScopedSymbol } from '../symbol/ScopedSymbol';
import { SymbolTable } from '../symbol/SymbolTable';
import { Type } from '../symbol/types';
import {TokenNameIsKeyWordValidator} from "./TokenNameIsKeyWordValidator";
import TypeMismatchValidator from "./TypeMismatchValidator";
import CurrentUnUsedValidator from "./CurrentUnUsedValidator";
import FuncInputCheckValidator from "./FuncInputCheckValidator";
import SymbolExistingValidator from "./SymbolExistingValidator";
import {ErrorCodeValidator} from "./ErrorCodeValidator";
import {DuplicateVariableValidator} from "./DuplicateVariableValidator";
import DuplicateValidator from "./DuplicateValidator";

interface info{
    msg:string,
    startLine:number,
    startColumn:number,
    endLine:number,
    endColumn:number,
    length:number
}

export class Validator{
	
	public infoArray: info[] = [];
	public symbolTable!:SymbolTable;
	public scope:ScopedSymbol;
	public noNameBlockCnt = 0;
	public callTime = 0;
    public duration = 0;

	constructor(symbolTable:SymbolTable){
		this.symbolTable = symbolTable;
		const scope = symbolTable.resolveSync("") as ScopedSymbol;
		this.scope = scope as ScopedSymbol;

		this.tokenNameIsKeyWordValidator = new TokenNameIsKeyWordValidator(symbolTable,this.infoArray,scope);
		this.typeMismatchValidator = new TypeMismatchValidator(symbolTable,this.infoArray,scope);
		this.funcInputCheckValidator = new FuncInputCheckValidator(symbolTable,this.infoArray,scope);
		this.symbolExistingValidator = new SymbolExistingValidator(symbolTable,this.infoArray,scope);
		this.errorCodeValidator = new ErrorCodeValidator(symbolTable,this.infoArray,scope);
		this.duplicateVariableValidator = new DuplicateVariableValidator(symbolTable,this.infoArray,scope);
		this.duplicateValidator = new DuplicateValidator(symbolTable,this.infoArray,scope);
	}



	private tokenNameIsKeyWordValidator!: TokenNameIsKeyWordValidator;

	private typeMismatchValidator! : TypeMismatchValidator;

	private currentUnUsedValidator! : CurrentUnUsedValidator;

	private funcInputCheckValidator! : FuncInputCheckValidator;

	private symbolExistingValidator !: SymbolExistingValidator;

	private errorCodeValidator !: ErrorCodeValidator;

	private duplicateVariableValidator !: DuplicateVariableValidator;

	private duplicateValidator !:DuplicateValidator;
	public getInfoArray():info[]{
		return this.infoArray;
	}

	initXXXValidator() : void{
		this.tokenNameIsKeyWordValidator = new TokenNameIsKeyWordValidator(this.symbolTable, this.infoArray,this.scope);
		this.typeMismatchValidator = new TypeMismatchValidator(this.symbolTable, this.infoArray, this.scope);
		this.currentUnUsedValidator = new CurrentUnUsedValidator(this.symbolTable,this.infoArray,this.scope);
		this.funcInputCheckValidator = new FuncInputCheckValidator(this.symbolTable,this.infoArray,this.scope);
		this.symbolExistingValidator = new  SymbolExistingValidator(this.symbolTable,this.infoArray,this.scope);
		this.errorCodeValidator = new ErrorCodeValidator(this.symbolTable,this.infoArray,this.scope);
		this.duplicateVariableValidator = new DuplicateVariableValidator(this.symbolTable,this.infoArray,this.scope);
		this.duplicateValidator = new DuplicateValidator(this.symbolTable,this.infoArray,this.scope);
		// this.accessibilityValidator = new AccessibilityValidator(this.symbolTable);
	}





	push2InfoArray(start:SUnit,end:SUnit|undefined,msg:string):void
	push2InfoArray(start:SUnit,end:SUnit|undefined,msg:string):void{
		let length = 0; 
		const len = 0;
		if(start.text){
			length = start.end.length;
		}
		if(end === undefined){
			this.infoArray.push({
				msg:msg,
				startLine:start.start.line,
				startColumn:start.start.charPositionInLine,
				endLine:start.end.line,
				endColumn:start.end.charPositionInLine + length,
				length:0
			});
			return;
		}

		if(end.text){
			length = end.end.length;
		}
		this.infoArray.push({
			msg:msg,
			startLine:start.start.line,
			startColumn:start.start.charPositionInLine,
			endLine:end.end.line,
			endColumn:end.end.charPositionInLine + length,
			length:len
		});
		
    }

	protected withScope(name:string,action: () => any){
		// console.log("with scope =====");
		// console.log(name);
		// console.log(this.scope);
        const scope = this.scope.resolveSync(name);
        // scope.context = tree;
        this.scope = scope as ScopedSymbol;
        try {
            return action();
        } finally {
            this.scope = this.scope.parent as ScopedSymbol;
        }
    }

	pushType2InfoArray(start:Type,end:Type|undefined,msg:string){
		let length = 0; 
		const len = 0;
		length = start.end.length;
		if(end === undefined){
			this.infoArray.push({
				msg:msg,
				startLine:start.start.line,
				startColumn:start.start.charPositionInLine,
				endLine:start.end.line,
				endColumn:start.end.charPositionInLine + length,
				length:0
			});
			return;
		}

		length = end.end.length;
		
		this.infoArray.push({
			msg:msg,
			startLine:start.start.line,
			startColumn:start.start.charPositionInLine,
			endLine:end.end.line,
			endColumn:end.end.charPositionInLine + length,
			length:len
		});
	}

	public visitChildren(sunit:SUnit):any{
        let name: keyof SUnit;
        for(name in sunit){
            const unit = sunit[name];
            if(unit instanceof SUnit){
                this.visit(unit);
            }
            if(unit instanceof Array){
                for(const u of unit){
                    if(u instanceof SUnit){
                        this.visit(u);
                    }
                }
            }
        }
        return undefined;
    }

	public visit(sunit:SUnit):any{


		if(sunit instanceof SProg) return this.visitProg(sunit);
		if(sunit instanceof SStatement) return this.visitStatement(sunit);
		if(sunit instanceof SSimpleClassDef) return this.visitSimpleClassDef(sunit);
		if(sunit instanceof SFunctionDef) return this.visitFunctionDef(sunit);
		if(sunit instanceof SParametersDef) return this.visitParametersDef(sunit);
		if(sunit instanceof SConstDef) return this.visitConstDef(sunit);
		if(sunit instanceof SFieldDef) return this.visitFieldDef(sunit);
		if(sunit instanceof SAssignment) return this.visitAssignment(sunit);
		if(sunit instanceof SIfStmt) return this.visitIfStmt(sunit);
		if(sunit instanceof SForStmt) return this.visitForStmt(sunit);
		if(sunit instanceof SWihilStmt) return this.visitWihilStmt(sunit);
		if(sunit instanceof SReturnStmt) return this.visitReturnStmt(sunit);
		if(sunit instanceof SEvaluationStmt) return this.visitEvaluationStmt(sunit);
		if(sunit instanceof SRefStmt) return this.visitRefStmt(sunit);
		if(sunit instanceof SFunctionCall) return this.visitFunctionCall(sunit);
		if(sunit instanceof SConstCall) return this.visitConstCall(sunit);
		if(sunit instanceof SForValueStmt) return this.visitForValueStmt(sunit);
		if(sunit instanceof SNewStmt) return this.visitNewStmt(sunit);
		if(sunit instanceof SBlock) return this.visitBlock(sunit);
		if(sunit instanceof SParameters) return this.visitParameters(sunit);
		if(sunit instanceof SParameter) return this.visitParameter(sunit);
		if(sunit instanceof SCondition) return this.visitCondition(sunit);
		if(sunit instanceof SIndexer) return this.visitIndexer(sunit);
		if(sunit instanceof SClassType) return this.visitClassType(sunit);
		if(sunit instanceof SLiteral) return this.visitLiteral(sunit);
		if(sunit instanceof SArray) return this.visitArray(sunit);
		if(sunit instanceof STuple) return this.visitTuple(sunit);
		if(sunit instanceof SElement) return this.visitElement(sunit);
	}

	public doValidator(sunit:SUnit){
		if(sunit instanceof SProg) return this.visitProg(sunit);
		if(sunit instanceof SStatement) return this.visitStatement(sunit);
		if(sunit instanceof SSimpleClassDef) return this.visitSimpleClassDef(sunit);
		if(sunit instanceof SFunctionDef) return this.visitFunctionDef(sunit);
		if(sunit instanceof SParametersDef) return this.visitParametersDef(sunit);
		if(sunit instanceof SConstDef) return this.visitConstDef(sunit);
		if(sunit instanceof SFieldDef) return this.visitFieldDef(sunit);
		if(sunit instanceof SAssignment) return this.visitAssignment(sunit);
		if(sunit instanceof SIfStmt) return this.visitIfStmt(sunit);
		if(sunit instanceof SForStmt) return this.visitForStmt(sunit);
		if(sunit instanceof SWihilStmt) return this.visitWihilStmt(sunit);
		if(sunit instanceof SReturnStmt) return this.visitReturnStmt(sunit);
		if(sunit instanceof SEvaluationStmt) return this.visitEvaluationStmt(sunit);
		if(sunit instanceof SRefStmt) return this.visitRefStmt(sunit);
		if(sunit instanceof SFunctionCall) return this.visitFunctionCall(sunit);
		if(sunit instanceof SConstCall) return this.visitConstCall(sunit);
		if(sunit instanceof SForValueStmt) return this.visitForValueStmt(sunit);
		if(sunit instanceof SNewStmt) return this.visitNewStmt(sunit);
		if(sunit instanceof SBlock) return this.visitBlock(sunit);
		if(sunit instanceof SParameters) return this.visitParameters(sunit);
		if(sunit instanceof SParameter) return this.visitParameter(sunit);
		if(sunit instanceof SCondition) return this.visitCondition(sunit);
		if(sunit instanceof SIndexer) return this.visitIndexer(sunit);
		if(sunit instanceof SClassType) return this.visitClassType(sunit);
		if(sunit instanceof SLiteral) return this.visitLiteral(sunit);
		if(sunit instanceof SArray) return this.visitArray(sunit);
		if(sunit instanceof STuple) return this.visitTuple(sunit);
		if(sunit instanceof SElement) return this.visitElement(sunit);
	}

	public visitProg(sunit:SProg){
		// this.initXXXValidator();
		this.duplicateVariableValidator.doValidator(sunit,this.scope);
		this.visitChildren(sunit);

		// console.log('calcTimePass:resolveSync');
		// console.log(this.typeMismatchValidator.callTime);
		// console.log(this.typeMismatchValidator.duration);
	}

	public visitStatement(sunit:SStatement){
		return this.visitChildren(sunit);
	}

	public visitSimpleClassDef(sunit:SSimpleClassDef){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		this.duplicateValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitFunctionDef(sunit:SFunctionDef){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		this.symbolExistingValidator.doValidator(sunit,this.scope);
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		this.withScope(sunit.ID.text!,()=>{
			this.visitChildren(sunit);
		});
	}

	public visitParametersDef(sunit:SParametersDef){
		return this.visitChildren(sunit);
	}

	public visitConstDef(sunit:SConstDef){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		this.withScope("@"+sunit.ID.text,()=>{
			this.visitChildren(sunit);
		});
	}

	public visitFieldDef(sunit:SFieldDef){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		this.duplicateVariableValidator.doValidator(sunit,this.scope);
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitAssignment(sunit:SAssignment){
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitIfStmt(sunit:SIfStmt){
		return this.visitChildren(sunit);
	}

	public visitForStmt(sunit:SForStmt){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		this.symbolExistingValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitWihilStmt(sunit:SWihilStmt){
		return this.visitChildren(sunit);
	}

	public visitReturnStmt(sunit:SReturnStmt){
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitEvaluationStmt(sunit:SEvaluationStmt){
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitRefStmt(sunit:SRefStmt){
		this.symbolExistingValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitFunctionCall(sunit:SFunctionCall){
		this.funcInputCheckValidator.doValidator(sunit,this.scope);
		// this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitConstCall(sunit:SConstCall){
		return this.visitChildren(sunit);
	}

	public visitForValueStmt(sunit:SForValueStmt){
		this.tokenNameIsKeyWordValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}
	
	public visitNewStmt(sunit:SNewStmt){
		this.symbolExistingValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitBlock(sunit:SBlock){
		this.withScope("@block"+this.noNameBlockCnt++,()=>{
			this.visitChildren(sunit);
		});
	}

	public visitParameters(sunit:SParameters){
		return this.visitChildren(sunit);
	}

	public visitParameter(sunit:SParameter){
		return this.visitChildren(sunit);
	}

	public visitCondition(sunit:SCondition){
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitIndexer(sunit:SIndexer){
		return this.visitChildren(sunit);
	}

	public visitClassType(sunit:SClassType){
		this.symbolExistingValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitLiteral(sunit:SLiteral){
		this.errorCodeValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitArray(sunit:SArray){
		this.typeMismatchValidator.doValidator(sunit,this.scope);
		return this.visitChildren(sunit);
	}

	public visitTuple(sunit:STuple){
		return this.visitChildren(sunit);
	}

	public visitElement(sunit:SElement){
		return this.visitChildren(sunit);
	}
}
