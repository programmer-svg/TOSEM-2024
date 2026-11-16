import * as lsp from 'vscode-languageserver';
import { allSymbolMaps } from '../test_hover/hover';
import { getRange } from '../test_gotoDefinition/gotoDefinition';
import { BaseSymbol } from '../test_diagnostics/symbol/BaseSymbol';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import {ScopedSymbol} from "../test_diagnostics/symbol/ScopedSymbol";
import {RoutineSymbol} from "../test_diagnostics/symbol/RoutineSymbol";
import { ClassSymbol } from '../test_diagnostics/symbol/ClassSymbol';

import {
	ConstDefContext,
	FieldDefContext,
	FunctionDefContext,
	SimpleClassDefContext,
} from "../../parser/TestLangParser";


export function nestedFind(sym:BaseSymbol,searchString:string,uri:string):lsp.WorkspaceSymbol[]{
	const ret:lsp.WorkspaceSymbol[] = [];
	if(sym.name === searchString && sym.context){
			if(sym.context instanceof FunctionDefContext){
				ret.push({location:getRange(sym.context._start,
					sym.context._stop,uri),name:searchString,kind:lsp.SymbolKind.Function});
			}
			if(sym.context instanceof FieldDefContext){
				ret.push({location:getRange(sym.context._start,
					sym.context._stop,uri),name:searchString,kind:lsp.SymbolKind.Field});
			}
			if(sym.context instanceof ConstDefContext){
				ret.push({location:getRange(sym.context._start,
					sym.context._stop,uri),name:searchString,kind:lsp.SymbolKind.Constant});
			}
			if(sym.context instanceof SimpleClassDefContext){
				ret.push({location:getRange(sym.context._start,
					sym.context._stop,uri),name:searchString,kind:lsp.SymbolKind.Class});
			}
		}

	if(sym instanceof ClassSymbol || sym instanceof ScopedSymbol || 
		sym instanceof RoutineSymbol || sym instanceof SymbolTable){
			for(const innerSym of sym.children){
				ret.push(...nestedFind(innerSym,searchString,uri));
			}
			
		}
		return ret;
}

export async function getWorkSapceSymbol(params: lsp.WorkspaceSymbolParams):Promise<lsp.WorkspaceSymbol[] | null>{
	console.log('getWorkSapceSymbol');
	const ret:lsp.WorkspaceSymbol[] = [];
	for(const entry of allSymbolMaps.uri2Symbol.entries()){
		ret.push(...nestedFind(entry[1],params.query,entry[0]));
	}

	if(ret) return ret;
	return null;
}