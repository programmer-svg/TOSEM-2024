import * as lsp from 'vscode-languageserver';
import { computeTokenPosition } from './ComputeTokenPosition';
import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { TestLangLexer } from '../../parser/TestLangLexer';
import {TestLangParser } from '../../parser/TestLangParser';
import { calcTimePass, documents, message } from '../../browserServerMain';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';
import { RoutineSymbol } from '../test_diagnostics/symbol/RoutineSymbol';
import { TypedSymbol } from '../test_diagnostics/symbol/TypedSymbol';
import { TypeKind } from '../test_diagnostics/symbol/types';
import { BaseSymbol } from '../test_diagnostics/symbol/BaseSymbol';
import { ClassSymbol } from '../test_diagnostics/symbol/ClassSymbol';
import { VariableSymbol } from '../test_diagnostics/symbol/VariableSymbol';
import { ParseTree } from 'antlr4ts/tree';
import diagnosticVisitor from '../test_diagnostics/diagnosticVisitor';
import { Scope } from '../utils/files';
import { PredictionMode } from 'antlr4ts/atn/PredictionMode';

export interface caretPosition{
	uri:string,
	line:number,
	character:number
}
export class AllSymbolMaps{
	public uri2Symbol:Map<string,SymbolTable> = new Map();
	public uri2ParseTree:Map<string,ParseTree> = new Map();
	public uri2TokenStream:Map<string,TokenStream> = new Map();
	public uri2Parser:Map<string,TestLangParser> = new Map();
	public uri2Visitor:Map<string,diagnosticVisitor> = new Map();

	public set(uri:string,symbolTable:SymbolTable) {
		this.uri2Symbol.set(uri,symbolTable);
	}

	public moveAll(from:string,to:string,newName:string) {
		const sym = this.uri2Symbol.get(from);
		if(sym){
			this.uri2Symbol.set(to,sym);
			this.uri2Symbol.delete(from);
		}

		const parseTree = this.uri2ParseTree.get(from);
		if(parseTree){
			this.uri2ParseTree.set(to,parseTree);
			this.uri2ParseTree.delete(from);
		}

		const tokenStream = this.uri2TokenStream.get(from);
		if(tokenStream){
			this.uri2TokenStream.set(to,tokenStream);
			this.uri2TokenStream.delete(from);
		}

		const parser= this.uri2Parser.get(from);
		if(parser){
			this.uri2Parser.set(to,parser);
			this.uri2Parser.delete(from);
		}

		const visitor = this.uri2Visitor.get(from);
		if(visitor){
			this.uri2Visitor.set(to,visitor);
			this.uri2Visitor.delete(from);
			visitor.name = newName;
			visitor.uri = to;
		}
	}

	public get(uri:string,scope:Scope|undefined = undefined):SymbolTable|undefined {
		// console.log('start get');
		const name = uri.split("/").slice(3)[0];
		if(this.uri2Symbol.get(uri) === undefined){
			const document = documents.get(uri);
			if(!document){
				return undefined;
			}
			const startTime = new Date();
			const code = document.getText();
			const input = CharStreams.fromString(code);
			const lexer = new TestLangLexer(input);
			const tokenStream = new CommonTokenStream(lexer);
			this.uri2TokenStream.set(uri,tokenStream);
			const parser = new TestLangParser(tokenStream);
			parser.interpreter.setPredictionMode(PredictionMode.SLL);
			this.uri2Parser.set(uri,parser);
			const parseTree = parser.prog();
			this.uri2ParseTree.set(uri,parseTree);
			const endTime = new Date();
			const duration = endTime.valueOf() - startTime.valueOf();
			// console.log('calc Time Pass:set');
			// console.log(duration);

			const symbolTable = new SymbolTable("", {allowDuplicateSymbols:true});

			const visitor = new diagnosticVisitor(symbolTable,name,uri);
			// console.log(scope);
			if(scope !== undefined){
				visitor.type = scope;
				symbolTable.scope = scope;
			}
			visitor.visit(parseTree);
			this.uri2Visitor.set(uri,visitor);

			this.set(uri,symbolTable);
		}
		return this.uri2Symbol.get(uri);
	}

	public getParseTree(uri:string):ParseTree|undefined {
		if(this.uri2Symbol.get(uri) === undefined){
			this.get(uri);
		}
		return this.uri2ParseTree.get(uri);
	}

	public getTokenStream(uri:string):TokenStream|undefined {
		if(this.uri2Symbol.get(uri) === undefined){
			this.get(uri);
		}
		return this.uri2TokenStream.get(uri);
	}

	public getParser(uri:string):TestLangParser|undefined {
		if(this.uri2Symbol.get(uri) === undefined){
			this.get(uri);
		}
		return this.uri2Parser.get(uri);
	}

	public getSymbolTable(uri:string):SymbolTable|undefined {
		if(this.uri2Symbol.get(uri) === undefined){
			this.get(uri);
		}
		return this.uri2Symbol.get(uri);
	}

	public getVisitor(uri:string):diagnosticVisitor|undefined {
		if(this.uri2Symbol.get(uri) === undefined){
			this.get(uri);
		}
		return this.uri2Visitor.get(uri);
	}

	public remove(uri:string) {
		this.uri2Symbol.delete(uri);
		this.uri2ParseTree.delete(uri);
		this.uri2TokenStream.delete(uri);
		this.uri2Parser.delete(uri);
		this.uri2Visitor.delete(uri);
	}
}

export const allSymbolMaps : AllSymbolMaps = new AllSymbolMaps();

export async function nestedFind(curScope:ScopedSymbol,name:string){
	const ret:BaseSymbol|undefined = undefined;
	// eslint-disable-next-line no-constant-condition
	while(true){
		const symbol = await curScope.resolve(name);
		if(symbol) return symbol;
		if(!curScope.parent) return undefined;
		curScope = curScope.parent as ScopedSymbol;
	}
}

export async function findInSymbolTable(table:SymbolTable,name:string,prefix:string[]){

	const scope = await table.resolve("");
	let curScope:ScopedSymbol = scope as ScopedSymbol;
	for(const scopeName of prefix){
		if(scopeName === '') continue;
		else if(scopeName[0] === '@'){
			// console.log('scopeName[0] === @');
			// console.log(curScope);
			// console.log(scopeName.slice(1));
			const classSym = await nestedFind(curScope,scopeName.slice(1));//寻找定义
			// console.log(classSym);
			if(classSym === undefined) return undefined;
			const ct = (classSym as VariableSymbol).classType;
			if(ct) return await (ct as ClassSymbol).resolve(name);
		}
		else curScope = (await curScope.resolve(scopeName)) as ScopedSymbol;
	}

	//cant diectly use nestedFind in c3,like Func{ a = 3}  Func{ a } 
	//hover on last one should be undifined
	const ret = await nestedFind(curScope,name);
	return ret;
}
/** only return the text of the hover place.
 * TODO waiting for symbol table
 */
export function kind2String (kind:TypeKind|undefined,name?:string|undefined):string{
	if(kind === TypeKind.Class && name){
		return name;
	}
	if(kind === TypeKind.Integer)	
		return 'int';
	if(kind === TypeKind.Float)	
		return 'float';
	if(kind === TypeKind.String)	
		return 'string';
	if(kind === TypeKind.Boolean)	
		return 'bool';
	if(kind === TypeKind.Void)
		return 'void';
	return 'unknown';
}

export async function getHover(params:lsp.TextDocumentPositionParams){
	const position = await calcTimePass(getPosition,
		{uri:params.textDocument.uri,
		line:params.position.line,
		character:params.position.character}); 
	// console.log('hover!');
	// console.log(position);
	if(!position){
		return { contents: [] };
	}
	
	const symbolTable : SymbolTable|undefined = allSymbolMaps.getSymbolTable(params.textDocument.uri);
	// console.log(symbolTable);
	if(symbolTable === undefined){
		return { contents: [] };
	}

	const prefixArr:string[] = position.prefix.split(' ');

	let ret = await calcTimePass(findInSymbolTable,symbolTable,position.context.text,prefixArr);
	// console.log(prefixArr);
	// console.log(ret);
	if(ret !== undefined){
		if(ret instanceof RoutineSymbol){
			const temp = await ret.resolve(position.context.text); 
			if(temp){
				ret = temp;
			}
			const kind = (ret as RoutineSymbol).returnType?.kind;
			const params = await (ret as RoutineSymbol).getParameters();
			// console.log('return RoutineSymbol');
			// console.log(kind);
			// console.log(params);
			let paramString = '';
			for(const param of params){
				if(paramString !== '') paramString+=',';
				paramString+=kind2String(param.type?.kind);
				paramString+=' ';
				paramString+=param.name;
			}
			return {
				contents: "function "+position.context.text +"("+paramString+"):"+kind2String(kind),
			};
		}
		if(ret instanceof ClassSymbol){
			return {
				contents:"class "+ret.name,
			};
		}

		const kind = ret as TypedSymbol;
		// console.log('return ret');
		// console.log(ret);
		return {
			contents:kind2String(kind.type?.kind,kind.type?.name)+" "+position.context.text,
		};
	}
	
	return { contents: [] };
}

/** Get the Position of the caret position.
 * Can't directly using api from c3 because bug exists when pointing to the x if add(x,y) get callled, and we need to only filter ID out.
 * Givern the case of add(int x,int y), if hover on the add, we will get prefix:add, which need to be handled next.
 */
export function getPosition(params:caretPosition,include:number[] = [TestLangParser.ID]){
	const parseTree = allSymbolMaps.getParseTree(params.uri);
	const tokenStream = allSymbolMaps.getTokenStream(params.uri);
	if (parseTree && tokenStream) {
		const caretPosition = { line: params.line + 1, column: params.character };
		const ret = computeTokenPosition(parseTree, tokenStream, caretPosition, include,'');
		return ret;
	}
}