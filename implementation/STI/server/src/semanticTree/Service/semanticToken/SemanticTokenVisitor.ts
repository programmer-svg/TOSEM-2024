
import { SUnit } from '../../SUnits/SUnit';
import { SAssignment, SBlock, SEvaluationStmt, SFieldDef, SForStmt, SFunctionDef, SProg, SRefStmt, SSimpleClassDef } from '../../SUnits/Sunits';
import { ParameterSymbol } from '../../symbol/ParameterSymbol';
import { RoutineSymbol } from '../../symbol/RoutineSymbol';
import { ScopedSymbol } from '../../symbol/ScopedSymbol';
import { VariableSymbol } from '../../symbol/VariableSymbol';
import { Type } from '../../symbol/types';
import Visitor from '../visitor';

export const tokenTypesLegend = [
	'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
	'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
	'method', 'decorator', 'macro', 'variable', 'parameter', 'property', 'label'
];
//comment:绿色
//string:棕色
//keyword:紫色
//number:亮绿
//regrex：灰色
//macro:蓝色
export const tokenModifiersLegend = [
	'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
	'modification', 'async'
];

export function getTokenTypes(str:string){
	let ret = 0;
	tokenTypesLegend.find((val:string,index:number)=>{
		if(val === str){
			ret = index;
			return true;
		}
		return false;
	});
	return ret;
}

export class SemanticTokenVistor extends Visitor{
	public infoArray:number[] = [];
	public scope!:ScopedSymbol;
	public cnt = 0;
	public callTime = 0;
	public duration = 0;
	push2infoArray(line:number,startIndex:number,length:number,type:string):void{
		this.infoArray.push(line);
		this.infoArray.push(startIndex);
		this.infoArray.push(length);
		this.infoArray.push(getTokenTypes(type));
		this.infoArray.push(0);
	}

	pushSunit2infoArray(sunit:SUnit,type:string){
		const line = sunit.start.line - 1;
		const index = sunit.start.charPositionInLine;
		const length = sunit.end.charPositionInLine + sunit.end.length - sunit.start.charPositionInLine;
		this.push2infoArray(line,index,length,type);
	}

	pushType2infoArray(sunit:Type,type:string){
		const line = sunit.start.line - 1;
		const index = sunit.start.charPositionInLine;
		const length = sunit.end.charPositionInLine + sunit.end.length - sunit.start.charPositionInLine;
		this.push2infoArray(line,index,length,type);
	}

	public visitRefStmt(sunit: SRefStmt) {
		const id = sunit.ID[0];
		this.resolveFuncAndVar(id);
		this.visitChildren(sunit);
	}

	public visitFunctionDef(sunit: SFunctionDef): void {
		this.cnt+=1;
		this.scope = (this.scope as ScopedSymbol).resolveSync(sunit.ID.text!) as ScopedSymbol;
		this.visitType(sunit.type);
		this.visitChildren(sunit);
		this.scope = this.scope.parent as ScopedSymbol;
	}

	resolveFuncAndVar(token:SUnit){
		if(!token.text) {
			// console.log('resolveFuncAndVar');
			// console.log(token);
			return;
		}
		this.cnt+=1;
		const added = (this.scope as ScopedSymbol).resolveSync(token.text,false);
		if(added instanceof RoutineSymbol) this.pushSunit2infoArray(token,'function');
		if(added instanceof ParameterSymbol) this.pushSunit2infoArray(token,'function');
		else if(added instanceof VariableSymbol) this.pushSunit2infoArray(token,'number');
	}
	
	override visitProg(sunit: SProg) {
		this.visitChildren(sunit);
	}

	visitSimpleClassDef = (sunit:SSimpleClassDef) => {
		this.pushSunit2infoArray(sunit.class,'keyword');
		this.pushType2infoArray(sunit.classType,'number');

		for(const fd of sunit.fieldDef){
			this.visit(fd);
		}
	};

	visitType = (sunit: Type) => {
		this.pushType2infoArray(sunit,'keyword');
	};

	public visitForStmt(sunit: SForStmt) {
		const id = sunit.ID;
		this.resolveFuncAndVar(id);
		this.visitChildren(sunit);
	}

	public visitFieldDef(sunit: SFieldDef) {
		this.visitType(sunit.type);
		this.resolveFuncAndVar(sunit.ID);

		if(sunit.evaluationStmt) this.visit(sunit.evaluationStmt);
	}

	public visitEvaluationStmt(sunit: SEvaluationStmt) {
		if(sunit.ID){
			this.resolveFuncAndVar(sunit.ID);
		}else{
			this.visitChildren(sunit);
		}

		// if(sunit.and){
		// 	this.pushSunit2infoArray(sunit.and,'keyword');
		// }

		// if(sunit.operator1){
		// 	this.pushSunit2infoArray(sunit.operator1,'keyword');
		// }

		// if(sunit.operator2){
		// 	this.pushSunit2infoArray(sunit.operator2,'keyword');
		// }

		// if(sunit.inc){
		// 	this.pushSunit2infoArray(sunit.inc,'keyword');
		// }

		// if(sunit.dec){
		// 	this.pushSunit2infoArray(sunit.dec,'keyword');
		// }
	}

	visitBlock = (sunit:SBlock) => {
		this.withScope("@block"+this.noNameBlockCnt++,() => {
			for(const s of sunit.statement) this.visit(s);
		});
	};

	protected withScope<T>(str:string,action: () => T): T {
		// console.log(str);
		// console.log(this.scope);
		const scope = this.scope?.resolveSync(str) as ScopedSymbol;
		// console.log(scope);
		this.scope = scope;
		try {
				return action();
		} finally {
				this.scope = scope.parent as ScopedSymbol;
		}
	}
}