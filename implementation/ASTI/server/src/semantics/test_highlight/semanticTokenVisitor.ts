import { RoutineSymbol  } from '../test_diagnostics/symbol/RoutineSymbol';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';
import { VariableSymbol } from '../test_diagnostics/symbol/VariableSymbol';
import { AbstractParseTreeVisitor, ParseTree } from 'antlr4ts/tree';
import { TestLangVisitor } from '../../parser/TestLangVisitor';
import { ArrayTypeContext, BlockContext, ClassTypeContext, ConstDefContext, EvaluationStmtContext, ForStmtContext, IfStmtContext } from '../../parser/TestLangParser';
import { FieldDefContext, FunctionCallContext, FunctionDefContext, ParametersDefContext } from '../../parser/TestLangParser';
import { ProgContext, RefStmtContext, ReturnStmtContext, SimpleClassDefContext, TypeContext } from '../../parser/TestLangParser';
import { Token } from 'antlr4ts';
import { ParameterSymbol } from '../test_diagnostics/symbol/ParameterSymbol';

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

//parameter:macro
//var:comment
export class SemanticTokenVistors extends AbstractParseTreeVisitor<number> implements TestLangVisitor<number> {
	public cnt = 0;
	public infoArray:number[] = [];
	public symbolTable: SymbolTable;
	/**
	 * The symbolTable needs to be constructed already.
	 * Because we dont need to change the symbolTable which is global, the visitor here is just for looking up the symbolTable.
	 * 
	 * TODO use lock to make sure that the symbolTable will not be set in more than one protocol's handling process.
	 * @param _symbolTable //_symbolTable: SymbolTable
	 */

	public callTime = 0;
	public duration = 0;
	constructor(_symbolTable: SymbolTable,public scope =_symbolTable.resolveSync("")){
		super();
		this.symbolTable = _symbolTable;
	}

	resolveFuncAndVar(token:Token){
		if(token.text === undefined) return;
		this.cnt+=1;
		const added = (this.scope as ScopedSymbol).resolveSync(token.text,false);
		if(added instanceof RoutineSymbol) this.pushToken2infoArray(token,'function');
		if(added instanceof ParameterSymbol) this.pushToken2infoArray(token,'function');
		else if(added instanceof VariableSymbol) this.pushToken2infoArray(token,'keyword');
	}

	push2infoArray(line:number,startIndex:number,length:number,type:string):void{
		this.infoArray.push(line);
		this.infoArray.push(startIndex);
		this.infoArray.push(length);
		this.infoArray.push(getTokenTypes(type));
		this.infoArray.push(0);
	}

	pushToken2infoArray(token:Token,type:string){
		this.push2infoArray(token.line-1,token.charPositionInLine,token.stopIndex-token.startIndex+1,type);
	}

	print(str:string|undefined|null,ctx:ParseTree){
		// console.log(ctx.text);
		// if(str) console.log(str);
		// else console.log('null');
	}

	defaultResult(): number {
		return 0;
	}

	visitProg = (ctx: ProgContext) => {
		// console.log('visitProg')
		// console.log(this.symbolTable)
		// console.log(this.scope)
		this.visitChildren(ctx);
		// console.log('calcTImePass:semanticToken:resolveSync');
		// console.log(this.callTime);
		// console.log(this.duration);
		return 0;
	};

	visitSimpleClassDef = (ctx:SimpleClassDefContext) => {
		const text = ctx.classType()._id2.text;
		this.cnt+=1;
		if(text) this.scope = (this.scope as ScopedSymbol).resolveSync(text);
		this.pushToken2infoArray(ctx.CLASS()._symbol,'keyword');
		this.pushToken2infoArray(ctx.classType()._id2,'number');
		this.visitChildren(ctx);
		this.scope = this.scope?.parent;
		return 0;
	};
	
	visitFunctionCall = (ctx:FunctionCallContext) => {
		// console.log('visitFunction_call')
		const call = ctx.CALL();
		if(call) this.pushToken2infoArray(call.symbol,'keyword');
		this.pushToken2infoArray(ctx._id2,'function');
		return this.visitChildren(ctx);
	};
	
	visitEvaluationStmt = (ctx:EvaluationStmtContext) =>{
		const id = ctx.ID();
		// const ns = ctx.newStmt();
		// if( ns ){
		// 	this.pushToken2infoArray(ns.NEW()._symbol,'keyword');
		// 	this.pushToken2infoArray(ns.classType()._id2,'number');
		// 	return 0;
		// }else 
		if(id){
				this.resolveFuncAndVar(id._symbol);
		}
		else{
			this.visitChildren(ctx);
		}
		return 0;
	};

	visitFieldDef = (ctx: FieldDefContext) => {
		this.visit(ctx.type());
		this.cnt+=1;
		this.scope?.resolveSync(ctx.ID().text);


		// this.pushToken2infoArray(ctx.ID()._symbol,'comment');
		const es = ctx.evaluationStmt();
		if(es) this.visit(es);
		return 0;
	};

	visitConstDef = (ctx: ConstDefContext) => {
		this.pushToken2infoArray(ctx.ID()._symbol,'comment');
		return this.visitChildren(ctx);
	};

	visitRefStmt = (ctx: RefStmtContext) => {
		this.resolveFuncAndVar(ctx._id1);
		// if(ctx.ID().length === 2){
		// 	const id2 = ctx._id2;
		// 	this.pushToken2infoArray(id2,'regrex');
		// }
		return this.visitChildren(ctx);
	};

	visitType = (ctx: TypeContext) => {
		this.pushToken2infoArray(ctx._start,'keyword');
		// let type:any = ctx.PRIMITIVE_TYPE();
		// if(type){
		// 	this.pushToken2infoArray(type._symbol,'keyword');
		// }
		// type = ctx.arrayType();
		// if(type){
		// 	this.pushToken2infoArray((type as ArrayTypeContext).LSQUARE()._symbol,'keyword');
		// }
		// type = ctx.classType();
		// if(type){
		// 	this.pushToken2infoArray(type._id2,'regrex');
		// }
		return 0;
	};

	visitFunctionDef = (ctx: FunctionDefContext) => {
		this.cnt+=1;
		this.scope = (this.scope as ScopedSymbol).resolveSync(ctx.ID().text);
		// console.log('in');
		// console.log(this.scope);
		// this.visit(ctx.type());
		// this.pushToken2infoArray(ctx.ID()._symbol,'function');

		this.visitChildren(ctx);
		this.scope = (this.scope as ScopedSymbol).parent;
		// console.log('out');
		// console.log(this.scope);
		return 0;
	};

	visitReturnStmt = (ctx: ReturnStmtContext) => {
		this.pushToken2infoArray(ctx.RETURN()._symbol,'keyword');
		const eva = ctx.evaluationStmt();
		if(eva)this.visit(eva);
		return 0;
	};

	// visitIfStmt = (ctx: IfStmtContext) => {
	// 	if(!ctx.children) return 0;
	// 	for(const c of ctx.children){
	// 		if(c instanceof BlockContext){
	// 			this.visitBlock(c);
	// 		}
	// 	}
	// };

	visitParametersDef = (ctx:ParametersDefContext) => {
		for(const fd of ctx.fieldDef()){
			this.cnt+=1;
			this.visit(fd.type());
			this.pushToken2infoArray(fd.ID()._symbol,'macro');
		}
		return 0;
	};

	visitForStmt = (ctx:ForStmtContext) => {
		const id = ctx.ID();
		this.resolveFuncAndVar(id.symbol);
		this.visitChildren(ctx);
		return 0;
	};

	private noNameBlockCnt = 0;
	visitBlock = (ctx: BlockContext) => {
		this.withScope("@block"+this.noNameBlockCnt++,() => {
			for(const s of ctx.statement()) this.visit(s);
		});
		return 0;
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