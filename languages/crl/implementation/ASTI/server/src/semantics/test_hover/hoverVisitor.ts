import { RoutineSymbol  } from '../test_diagnostics/symbol/RoutineSymbol';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';
import { VariableSymbol } from '../test_diagnostics/symbol/VariableSymbol';
import { Type,ReferenceKind,TypeKind } from '../test_diagnostics/symbol/types';
import { AbstractParseTreeVisitor, ParseTree } from 'antlr4ts/tree';
import { TestLangVisitor } from '../../parser/TestLangVisitor';
import { FieldDefContext, FunctionDefContext, ProgContext, SimpleClassDefContext, StatementContext, TypeContext } from '../../parser/TestLangParser';
import {ParameterSymbol} from '../test_diagnostics/symbol/ParameterSymbol';
import { ClassSymbol } from '../test_diagnostics/symbol/ClassSymbol';
interface Signature {
	params:[
		{
			type:string,
			name:string,
			ctx:ParseTree|undefined
		}
	]
	returnType:string
}
export class SymbolTableVisitor extends AbstractParseTreeVisitor<number> implements TestLangVisitor<number> {
	public symbolTable: SymbolTable;
	constructor(
		_symbolTable: SymbolTable,
		public scope = _symbolTable.addNewSymbolOfType(ScopedSymbol, undefined)
	){
		super();
		this.symbolTable = _symbolTable;
	}

	public string2Kind(kind:string):TypeKind{
		if(kind === 'int')	
			return TypeKind.Integer;
		if(kind === 'float')	
			return TypeKind.Float;
		if(kind === 'string')	
			return TypeKind.String;
		if(kind === 'bool')	
			return TypeKind.Boolean;
		if(kind === 'void')
			return TypeKind.Void;
		if(kind === 'class')
			return TypeKind.Class;
		return TypeKind.Unknown;
	}

	/**
	 * @param text 
	 * @param kind 
	 * @returns 
	 */
	public getType(text:string,kind:string):Type{
		return {
			name : text,
			baseTypes : [],
			kind : this.string2Kind(kind),
			reference : ReferenceKind.Irrelevant,
			inner : []
		};
	}

	protected defaultResult(): number {
		return 0;
	}

	visitProg = (ctx: ProgContext) => {
		this.scope.context = ctx;
		for(const stmt of ctx.statement()){
			this.visit(stmt);
		}
		return 0;
	};

	visitStatement = (ctx:StatementContext) => {
		this.visitChildren(ctx);
		return 0;
	};

	visitSimpleClassDef = (ctx:SimpleClassDefContext) => {
		const text = ctx.classType()._id2.text;
		if(text === undefined){
			console.log('class name is undefined!!');
			return 0;
		}
		const classDef = this.scope.resolveSync(text);
		if(classDef) return 0;

		const scope = this.symbolTable.addNewSymbolOfType(ClassSymbol, this.scope, text,[],[]);
		(scope as ClassSymbol).isStruct = true;
		scope.context = ctx;
		this.scope = scope;
		const classScope = this.symbolTable.addNewSymbolOfType(ClassSymbol, this.scope, text,[],[]);
		classScope.context = ctx;
		try{
			for(const fd of ctx.fieldDef()){
				this.visit(fd);
			}
			} finally {
					this.scope = scope.parent as ScopedSymbol;
			}
		return 0;
	};

	visitFieldDef = (ctx: FieldDefContext) => {
		/**
		 * In the hover,we don't handle wrong informations.
		 */
		if(this.scope.resolveSync(ctx.ID().text,true) !== undefined){
			return this.visitChildren(ctx);
		}

		/**
		 * Handle class intance next.
		 * We will use the TypedSymbol here, and treat that the class definition is always in the outest scope, 
		 * which means that we only identify a class type by its name, otherthan its prefix name and its name
		 */
		const ct = ctx.type().classType();
		if(ct){
			let text = '';
			if(ct._id2.text) text = ct._id2.text;
			const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, ctx.ID().text, undefined,this.getType(text,'class'));
			sym.context = ctx;
			return this.visitChildren(ctx);
		}
		const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, ctx.ID().text, undefined,this.getType(ctx.ID().text,ctx.type().text));
		sym.context = ctx;
		return this.visitChildren(ctx);
	};

	visitFunctionDef = (ctx: FunctionDefContext) => {
		const scope = this.symbolTable.addNewSymbolOfType(RoutineSymbol, this.scope, ...[ctx.ID().text,this.getType(ctx.ID().text,ctx.type().text)]);
		scope.context = ctx;
    this.scope = scope;
		const funcScope = this.symbolTable.addNewSymbolOfType(RoutineSymbol, scope, ...[ctx.ID().text,this.getType(ctx.ID().text,ctx.type().text)]);
		funcScope.context = ctx;
		const signature:Signature = {params:[{type:"",name:"",ctx:undefined}],returnType:""};//为了防止报错，需要新添加一个“”的type以及name
		const parametersDefine = ctx.parametersDef();
		if(parametersDefine !== undefined){
			for(const fieldDefine of parametersDefine.fieldDef()){
				signature.params.push({type:ctx.type().text,name:fieldDefine.ID().text,ctx:fieldDefine});
			}
		}
		signature.returnType = ctx.type().text;

		this.putFunctionParameter(signature,funcScope);
		try {
			//enter child scope
            this.visitChildren(ctx);
        } finally {
			//return to father scope
            this.scope = scope.parent as ScopedSymbol;
        }
		return 0;
	};

	putFunctionParameter(signature:Signature,scope:RoutineSymbol){
		scope.returnType = this.getType(signature.returnType,signature.returnType);
		for(const param of signature.params){
			if(param.type === '') continue;
			if(scope.resolveSync(param.name)) return;
			const sym = this.symbolTable.addNewSymbolOfType(ParameterSymbol, scope, param.name, undefined,this.getType(param.name,param.type));
			sym.context = param.ctx;
		}
	}
}