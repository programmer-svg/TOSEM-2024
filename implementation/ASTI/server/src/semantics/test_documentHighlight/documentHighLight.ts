import * as lsp from 'vscode-languageserver';
import { getPosition,allSymbolMaps,findInSymbolTable } from '../test_hover/hover';
import {documents} from '../../browserServerMain';
import { getInfoArray } from '../test_references/references';
import { FieldDefContext, FunctionDefContext, SimpleClassDefContext } from '../../parser/TestLangParser';
import { getRange } from '../test_gotoDefinition/gotoDefinition';
import { Token } from 'antlr4ts';

export async function getDocumentHighLight(params: lsp.DocumentHighlightParams):Promise<lsp.DocumentHighlight[]|null>{
	// console.log('rename');
	// console.log(params);
	const uri = params.textDocument.uri;
	const position = await getPosition({...params.position,uri:params.textDocument.uri});
	if(position){
		let infoArray:lsp.Location[];
		const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
		if(symbolTable === undefined){
			return null;
		}
		const document = documents.get(uri);
		const prefixArr:string[] = position.prefix.split(' ');
		if(document){
			infoArray = getInfoArray(document,symbolTable,prefixArr,position.context.text,uri);
			const ret : lsp.DocumentHighlight[] = [];
			const def = await findInSymbolTable(symbolTable,position.context.text,prefixArr);

			if(def && def.context){
				let sym : Token|undefined = undefined;
				if(def.context instanceof FunctionDefContext){
					sym = def.context.ID()._symbol;
				}
				if(def.context instanceof FieldDefContext){
					sym = def.context.ID()._symbol;
				}
				if(def.context instanceof SimpleClassDefContext){
					sym = def.context.classType()._id2;
				}

				if(sym) ret.push({range:getRange(sym,sym,"").range});
			}

			for(const info of infoArray){
				ret.push({range:info.range});
			}
			return ret;
		}
	}
	return null;
}