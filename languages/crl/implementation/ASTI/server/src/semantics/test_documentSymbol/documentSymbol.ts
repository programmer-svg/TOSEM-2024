import { Range,DocumentSymbol,DocumentSymbolParams,SymbolKind } from 'vscode-languageserver';
import { allSymbolMaps } from '../test_hover/hover';
import { BaseSymbol } from '../test_diagnostics/symbol/BaseSymbol';
import { getRange } from '../test_gotoDefinition/gotoDefinition';
import { FieldDefContext, FunctionDefContext, SimpleClassDefContext } from '../../parser/TestLangParser';
import { VariableSymbol } from '../test_diagnostics/symbol/VariableSymbol';
import { RoutineSymbol } from '../test_diagnostics/symbol/RoutineSymbol';
import { ClassSymbol } from '../test_diagnostics/symbol/ClassSymbol';
import { ScopedSymbol } from '../test_diagnostics/symbol/ScopedSymbol';

export async function getNestedDocumentSymbol(symbol:BaseSymbol):Promise<DocumentSymbol|null> {

	let range:Range|null = null;
	// console.log('getNestedDocumentSymbol')
	// console.log(symbol)
	if(symbol && symbol.context){
		if(symbol.context instanceof FunctionDefContext || symbol.context instanceof FieldDefContext || symbol.context instanceof SimpleClassDefContext){
			range = getRange(symbol.context._start,symbol.context._stop,"").range;
		}
	}

	let kind:SymbolKind|null = null;
	if(symbol instanceof VariableSymbol){
		kind = SymbolKind.Variable;
	}
	if(symbol instanceof RoutineSymbol){
		kind = SymbolKind.Method;
	}
	if(symbol instanceof ClassSymbol){
		kind = SymbolKind.Class;
	}

	// console.log(kind)
	// console.log(range)
	if(range === null) return null;
	if(kind === null) return null;

	const documentSymbol:DocumentSymbol = {
		name:symbol.name,
		kind:kind,
		range:range,
		selectionRange:range,
		children:[]
	};

	//Because in routineSymbol and class we have outer symbol itself twice, we need to ignore its son.
	if(symbol instanceof RoutineSymbol || symbol instanceof ClassSymbol){
		for(const sym of (await symbol.getSymbolsOfType(BaseSymbol))){
			if(sym.name === symbol.name) continue;
			const ds = await getNestedDocumentSymbol(sym);
			if(ds) documentSymbol.children?.push(ds);
		}
	}
	
	return documentSymbol;
}

export async function getDocumentSymbol(params:DocumentSymbolParams):Promise<DocumentSymbol[]|null>{
	// console.log('getDocumentSymbol');
	// console.log(params);
	const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);

	if(symbolTable === undefined){
		return null;
	}
	// console.log(symbolTable)
	const scope = symbolTable.resolveSync("");
	// console.log(scope)
	if(scope === undefined) return null;
	const ret:DocumentSymbol[] = [];
	for(const sym of await (scope as ScopedSymbol).getSymbolsOfType(BaseSymbol)){
		const ds = await getNestedDocumentSymbol(sym);
		if(ds) ret.push(ds);
	}
	// console.log('ret');
	// console.log(ret);
	return ret;
}