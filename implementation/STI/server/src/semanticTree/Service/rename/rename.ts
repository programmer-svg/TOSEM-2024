import * as lsp from 'vscode-languageserver';
import { getPosition } from '../../utils/ComputeTokenPosition';
import { allSymbolMaps, calcTimePass } from '../../../browserServerMain';
import { reNameVistor } from './RenameVisitor';
import { ScopedSymbol } from '../../symbol/ScopedSymbol';


export async function getRename(params: lsp.RenameParams):Promise<lsp.WorkspaceEdit|null>{
	const uri = params.textDocument.uri;
	const position = await calcTimePass(getPosition,{...params.position,uri:params.textDocument.uri});
	if(position){
		const textEdit:lsp.TextEdit[] = [];
		const ret = await calcTimePass(getInfoArray,uri,position.sunit.text!);
		if(!ret) return null;
		
		for(const loc of ret){
				textEdit.push({range:loc.range,newText:params.newName});
		}
		return {
			changes:{
				[uri]:textEdit
			}
		};
	}
	return null;
}

export function getInfoArray(uri:string,name:string){
	const symbolTable = allSymbolMaps.getSymbolTable(uri);
	const sunit = allSymbolMaps.geSunit(uri);
	if(!symbolTable || !sunit){
		return undefined;
	}
	const visiitor = new reNameVistor(symbolTable);
	
	visiitor.name = name;
	visiitor.uri = uri;
	visiitor.visit(sunit);
	return visiitor.infoArray;
}