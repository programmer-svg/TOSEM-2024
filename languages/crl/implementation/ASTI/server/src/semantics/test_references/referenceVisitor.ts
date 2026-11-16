
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';
import { AbstractParseTreeVisitor, ParseTree, TerminalNode } from 'antlr4ts/tree';
import { TestLangVisitor } from '../../parser/TestLangVisitor';
import { ClassTypeContext, ConstDefContext, EvaluationStmtContext, FieldDefContext, FunctionCallContext,FunctionDefContext, ParametersDefContext, ProgContext, RefStmtContext, TypeContext } from '../../parser/TestLangParser';
import { Location } from 'vscode-languageserver';
import { getRange } from '../test_gotoDefinition/gotoDefinition';

//parameter:macro
//var:comment
enum Type{
	Struct,
	Other,
	StructMem
}
export class ReferenceVistor extends AbstractParseTreeVisitor<number> implements TestLangVisitor<number> {
	public infoArray:Location[] = [];
	public symbolTable: SymbolTable;
	public prefix:string[];
	public name:string;
	public searchInner = false;
	public includeDefinition = false;
	public uri:string;
	public names:string[] = [];
	/**
	 * If precisely check, we can start search when cur = prefix.length.
	 * Or we will do this everytime the cur is larger than prefix 
	 */
	public cur = 0;
	/**  
	 * 0:havn't search, 1:searching, 2:done search
	 * If state === 2, we can skip all the visits. 
	 * If state === 0, we can skip some of the visits except the one can enter the block.
	 * TODO change the number as enum
	 */
	public state = 0;
	/**
	 * 
	 * TODO use lock to make sure that the symbolTable will not be set in more than one protocol's handling process.
	 * @param _symbolTable //_symbolTable: SymbolTable
	 */

	public type:Type = Type.Other;

	public className = "";
	constructor(_symbolTable: SymbolTable,_prefix:string[],_name:string,_uri:string,type:Type,public scope =_symbolTable.resolveSync("")){
		super();
		this.symbolTable = _symbolTable;
		if(_prefix[0] === ''){
			this.prefix = _prefix.slice(1);
		}else[
			this.prefix = _prefix
		];
		
		this.name = _name;
		this.uri = _uri;

		//TODO make it clear!!!
		//Struct StructMem other
		//In this case, we need to find reference for a method. 
		//the input is prefix:add add2 name:add2 so we need to remove prefix.
		if(type === Type.Other){
			if(this.prefix.length != 0 && this.name === this.prefix[this.prefix.length-1]){
				this.prefix.splice(this.prefix.length-1,1);
			}
		}else{
			if(this.prefix.length != 0 && this.name === this.prefix[this.prefix.length-1]){
				this.type = Type.Struct;
				this.prefix.splice(this.prefix.length-1,1);
			}
			else{
				this.className = this.prefix.splice(this.prefix.length-1,1)[0];
				this.type = Type.StructMem;
			}
		}
		//In this case, the state will never set to 2
		if(this.prefix.length === 0){
			// console.log('state change : 1');
			this.state = 1;
		}
	}

	print(str:string){
		// console.log(str)
		// console.log(this.scope)
		// console.log(this.cur)
		// console.log(this.state)
		// console.log(this.prefix)
	}

	canEnter(str:string): boolean{
		switch(this.state){
			case 2:
				return false;
			case 1:
				return this.searchInner;
			case 0:
				return this.prefix[this.cur] === str;
		}
		return false;//avoid warning
	}	

	defaultResult(): number {
		return 0;
	}

	visitProg = (ctx: ProgContext) => {
		this.visitChildren(ctx);
		// console.log(this.names);
		return 0;
	};

	visitFunctionCall = (ctx:FunctionCallContext) => {
		// this.print('Function_call')
		if(this.state !== 1) return 0;
		const id2 = ctx._id2;
		if(this.name === id2.text){
			this.infoArray.push(getRange(id2,id2,this.uri));
		}
		return this.visitChildren(ctx);
	};
	
	visitEvaluationStmt = (ctx:EvaluationStmtContext) =>{
		
		if(this.state !== 1) return 0;
		const id = ctx.ID();
		if(id && id.text == this.name){
			this.infoArray.push(getRange(id._symbol,id._symbol,this.uri));
			return 0;
		}
		else return this.visitChildren(ctx);
	};

	pushName(type:TypeContext,name:string){
		const ct = type.classType();
		if(ct){
			const id = ct._id2.text;
			// console.log(id);
			// console.log(name);
			if(id === this.className){
				this.names.push(name);
			}
		}
	}
	visitFieldDef = (ctx: FieldDefContext) => {
		if(this.state !== 1) return 0;

		if(this.type === Type.Struct && ctx.type().text === this.name){
			this.infoArray.push(getRange(ctx.type()._start,ctx.type()._stop,this.uri));
			return 0;
		}
		const type = ctx.type();
		this.pushName(type,ctx.ID().text);
		return 0;
	};

	visitConstDef = (ctx: ConstDefContext) => {
		if(this.state !== 1) return 0;

		if(this.type === Type.Struct && ctx.type().text === this.name){
			this.infoArray.push(getRange(ctx.type()._start,ctx.type()._stop,this.uri));
			return 0;
		}
		const type = ctx.type();
		this.pushName(type,ctx.ID().text);
		return this.visitChildren(ctx);
	};

	visitRefStmt = (ctx: RefStmtContext) => {
		if(this.state !== 1) return 0;
		const id1 = ctx._id1;
		const id2 = ctx._id2;
		if(this.type === Type.Other && id1.text == this.name){
			this.infoArray.push(getRange(id1,id1,this.uri));
		}
		if(this.type === Type.StructMem && id1 && id1.text && this.names.includes(id1.text) && id2 &&id2.text == this.name){
			this.infoArray.push(getRange(id2,id2,this.uri));
		}
		return 0;
	};

	visitFunctionDef = (ctx:FunctionDefContext) => {
		const text = ctx.ID().text;
		this.print('visitFunction_define');
		if(this.canEnter(text)){
			this.cur++;
			const stateChange:boolean = this.cur === this.prefix.length;
			if(stateChange){
				// console.log('state change : 1');
				this.state = 1;
			}
			
			this.scope = (this.scope as ScopedSymbol).resolveSync(text,true);
			for(const s of ctx.statement()){
				this.visit(s);
			}
			this.cur--;
			this.scope = (this.scope as ScopedSymbol).parent;
			if(stateChange){
				// console.log('stateChange : 2')
				// console.log(ctx.ID().text)
				this.state = 2;
			}
		}
		return 0;
	};

}