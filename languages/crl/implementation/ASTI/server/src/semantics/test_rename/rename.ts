import * as lsp from 'vscode-languageserver';
import { getPosition,allSymbolMaps } from '../test_hover/hover';
import {calcTimePass, documents} from '../../browserServerMain';
import { getInfoArray } from '../test_references/references';
import { getRange } from '../test_gotoDefinition/gotoDefinition';
import { TerminalNode } from 'antlr4ts/tree';
/**
 * @param params 
 * @returns 
 */
export async function getRename(params: lsp.RenameParams):Promise<lsp.WorkspaceEdit|null>{
	// console.log('rename');
	// console.log(params);
	const uri = params.textDocument.uri;
	const position = await calcTimePass(getPosition,{...params.position,uri:params.textDocument.uri});
	if(position){
		const textEdit:lsp.TextEdit[] = [];
		let ret:lsp.Location[];
		const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
		if(symbolTable === undefined){
			return null;
		}
		const document = documents.get(uri);
		const prefixArr:string[] = position.prefix.split(' ');
		if(document){
			ret = await calcTimePass(getInfoArray,document,symbolTable,prefixArr,position.context.text,uri);
			// console.log(position);
			if(position.context instanceof TerminalNode){
				textEdit.push({range:getRange(position.context._symbol,position.context._symbol,"").range,newText:params.newName});
			}
			for(const loc of ret){
				textEdit.push({range:loc.range,newText:params.newName});
			}
			// console.log(textEdit);
			return {
				changes:{
					[uri]:textEdit
				}
			};
		}
	}
	return null;
}