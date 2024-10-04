import { ParseTree, TerminalNode } from 'antlr4ts/tree';
import {TokenPosition } from './types';
import { AssignmentContext, FieldDefContext, FunctionCallContext, TestLangParser, TupleContext } from '../../parser/TestLangParser';
import { CompletionItem, CompletionItemKind} from 'vscode-languageserver';
import { allSymbolMaps, getPosition } from '../test_hover/hover';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';
import { BaseSymbol } from '../test_diagnostics/symbol/BaseSymbol';
import { RoutineSymbol } from '../test_diagnostics/symbol/RoutineSymbol';
import { ParameterSymbol } from '../test_diagnostics/symbol/ParameterSymbol';
import { Type } from '../test_diagnostics/symbol/types';
import { TypedSymbol } from '../test_diagnostics/symbol/TypedSymbol';
import { VariableSymbol } from '../test_diagnostics/symbol/VariableSymbol';

export function getScope(context: ParseTree, symbolTable: SymbolTable) {
	if (!context) {
		return undefined;
	}
	const scope = symbolTable.symbolWithContextSync(context);
	if (scope) {
		return scope;
	} else {
		if(context.parent) return getScope(context.parent, symbolTable);
	}
}

function getSymbolsOfTypeSync<T extends BaseSymbol>(scope: ScopedSymbol, type: new (...args: any[]) => T) {
	const result: T[] = [];
	scope.children.forEach(child => {
		if (child instanceof type) {
			result.push(child);
		}
	});
	return result;
}

export function getAllSymbolsOfType<T extends BaseSymbol>(scope: ScopedSymbol, type: new (...args: any[]) => T): T[]{
	const symbols: T[] = [];
	const res = getSymbolsOfTypeSync(scope, type);
	symbols.push(...res);
	let parent = scope.parent;
	while (parent && !(parent instanceof ScopedSymbol)) {
		parent = parent.parent;
	}
	if (parent) {
		const reuslts = getAllSymbolsOfType(parent as ScopedSymbol, type);
		symbols.push(...reuslts);
	}
	return symbols;
}

export function getRealAllSymbolsOfType(symbols: BaseSymbol[], symbol: BaseSymbol): BaseSymbol[]{
	symbols.push(symbol);
	if(symbol instanceof ScopedSymbol){
		symbol.children.forEach(child =>{
			getRealAllSymbolsOfType(symbols,child);
		});
	}
	return symbols;
}

export function getParentScope(scope:BaseSymbol): ScopedSymbol{
	if(scope instanceof ScopedSymbol) return scope;
	while(!(scope instanceof ScopedSymbol)){
		scope = scope.parent as BaseSymbol;
	}
	return scope;
}

function suggestVariables(symbolTable: SymbolTable, position: TokenPosition):CompletionItem[] {
	const context = position.context;
	let scope = getScope(context, symbolTable);
	if(!scope) scope = symbolTable.resolveSync("");
	else scope =getParentScope(scope);

	let symbols: BaseSymbol[] = [];

	if (scope instanceof ScopedSymbol) {
		symbols.push(...getAllSymbolsOfType(scope, VariableSymbol));
		symbols.push(...getAllSymbolsOfType(scope, RoutineSymbol));
	} else {
		symbols = getAllSymbolsOfType(symbolTable, VariableSymbol);
	}

	// symbols = getRealAllSymbolsOfType([],symbolTable);
	symbols = filterTokens_startsWith(position.text,symbols);
	symbols = filterTokens_same(symbols);

	const type = getType(getParentScope(scope!),context);
	symbols = filterTokens_Type(type,symbols);

	return filter_NoFunc(symbols);
	return filter_function(symbols);
}

export function getType(scope:ScopedSymbol,ctx:ParseTree):Type|undefined{
	//2 cases are thought: 1:assignment,2:parameter
	//assignment
	// console.log(scope);
	let parent:ParseTree|undefined = ctx;
	// console.log('parent');
	while(parent){
		// console.log(parent);
		if((parent instanceof AssignmentContext) || (parent instanceof FunctionCallContext) || (parent instanceof FieldDefContext)) break;
		parent = parent.parent;
	}
	// console.log(parent);
	if(parent === undefined) return undefined;

	if(parent instanceof AssignmentContext){
		const ref = parent.refStmt()._id1;
		if(!ref || !ref.text) return undefined;
		const symbol = scope.resolveSync(ref.text,false);
		if(!symbol) return undefined;
		return (symbol as TypedSymbol).type;
	}

	if(parent instanceof FieldDefContext){
		const ref = parent.ID();
		if(!ref || !ref.text) return undefined;
		const symbol = scope.resolveSync(ref.text,false);
		if(!symbol) return undefined;
		return (symbol as TypedSymbol).type;
	}

	if(parent instanceof FunctionCallContext){
		const functonName = parent._id2;
		const symbol = scope.resolveSync(functonName.text!,false);
		if(!symbol) return undefined;
		const psDef:ParameterSymbol[] = [];
		(symbol as RoutineSymbol).children.forEach(child => {
			if(child instanceof ParameterSymbol) psDef.push(child);
		});
		const ps = parent.parameters();
		if(!ps) return undefined;
		const p = ps.parameter();
		let i = 0;
		for(i = 0;i<p.length;i++){
			if(p[i].text === ctx.text) break;
		}
		return psDef[i].type;
	}
}


export function filter_function(candidates: BaseSymbol[]):CompletionItem[] {
	const ret = [];
	let index = 0;
	for(const c of candidates){
		if(c instanceof RoutineSymbol){
			let str = "";
			str += c.name;
			str+='(';
			const ps:ParameterSymbol[] = [];
			c.children.forEach(child => {
				if(child instanceof ParameterSymbol) ps.push(child);
			});
			if(ps.length > 0){
				for(let i = 0;i<ps.length-1;i++){
					str+= ps[i].type!.name+" ";
					str+= ps[i].name;
					str+=', ';
				}
				str+= ps[ps.length-1].type!.name+" ";
				str+= ps[ps.length-1].name;
			}

			str+=')';
			ret.push({label:str,kind:CompletionItemKind.Function,data:++index});
		}
		else ret.push({label:c.name,kind:CompletionItemKind.Field,data:++index});
	}
	return ret;
}

export function filter_NoFunc(candidates: BaseSymbol[]):CompletionItem[] {
	const ret = [];
	let index = 0;
	for(const c of candidates){
		ret.push({label:c.name,kind:CompletionItemKind.Field,data:++index});
	}
	return ret;
}

export function filterTokens_startsWith(text: string, candidates: BaseSymbol[]):BaseSymbol[] {
	if (text.trim().length == 0) {
		return candidates;
	} else {
		return candidates.filter(c => c.name.toLowerCase().startsWith(text.toLowerCase()));
	}
}

export function filterTokens_same(candidates: BaseSymbol[]):BaseSymbol[] {
	const filtered: BaseSymbol[] = [];
	const symbols = candidates.sort((a,b) => {return a.name.toLowerCase().localeCompare(b.name.toLowerCase());});
	if(symbols.length == 0) return [];
	filtered.push(symbols[0]);
	let lastIndex = 0;
	for(let i = 1;i<symbols.length;i++){
		if(filtered[lastIndex].name !== symbols[i].name){
			filtered.push(symbols[i]);
			lastIndex++;
		}
	}
	return filtered;
}

export function filterTokens_Type(type:Type|undefined, candidates: BaseSymbol[]):BaseSymbol[] {
	return candidates.filter(c => {
		if(type === undefined) return true;
		return c instanceof TypedSymbol && c.type?.kind === type.kind; 
	});
}

export function getSuggestionForParseTree(
	parser: TestLangParser, symbolTable:SymbolTable, position: TokenPosition
) {

	const completions:CompletionItem[] = [];
	completions.push(... suggestVariables(symbolTable, position));
	return completions;
}

export function getCompletionInfos(params:any) {
	const documents = params.documents;
	const textDocument = params.textDocument;
	const position = params.position;
	const document = documents.get(textDocument.uri);
	if (document) {
		const uri = textDocument.uri;
		const caretPosition = { uri:textDocument.uri, line: position.line, character: position.character };
		const myposition  = getPosition(caretPosition);
		const parser = allSymbolMaps.getParser(uri);
		const symbolTable = allSymbolMaps.getSymbolTable(uri);

		const suggestions = getSuggestionForParseTree(
			parser!, symbolTable!, myposition!);
		return suggestions;
	}
}

