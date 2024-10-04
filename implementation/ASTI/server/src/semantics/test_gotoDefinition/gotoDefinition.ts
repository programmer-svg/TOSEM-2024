import * as lsp from 'vscode-languageserver';
import { getPosition,allSymbolMaps,findInSymbolTable } from '../test_hover/hover';
import { FieldDefContext, FunctionDefContext, SimpleClassDefContext } from '../../parser/TestLangParser';
import { Token } from 'antlr4ts';
import { calcTimePass, message } from '../../browserServerMain';
import { message2 } from '../test_highlight/semanticTokens';
/**
 * needs the token's information of position.
 * @param params 
 * @returns 
 */
export function getRange(start:Token,end:Token|undefined,uri:string):lsp.Location{


	let length = 0; 
	if(start.text){
		length = start.text.length;
	}
	if(end === undefined){
		return {
			uri:uri,
			range:{
				start:{
					line:start.line-1,
					character:start.charPositionInLine
				},
				end:{
					line:start.line-1,
					character:start.charPositionInLine + length
				}
			}
		};
	}

	if(end.text){
		length = end.text.length;
	}
	return {
		uri:uri,
		range:{
			start:{
				line:start.line-1,
				character:start.charPositionInLine
			},
			end:{
				line:end.line-1,
				character:end.charPositionInLine + length
			}
		}
	};
}
export async function getDefinition(params: lsp.DefinitionParams):Promise<lsp.Location|null>{
	const name = params.textDocument.uri;
	if(name === 'returnInformation' ) {
		console.log('final Result');
		console.log(message);
		return null;
	}


	const uri = params.textDocument.uri;
	// console.log('getDefinition');
	const position = await calcTimePass(getPosition,{...params.position,uri:uri});
	// console.log(position);
	if(position){
		const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
		if(symbolTable === undefined){
			return null;
		}
		const prefixArr:string[] = position.prefix.split(' ');
		const ret = await calcTimePass(findInSymbolTable,symbolTable,position.context.text,prefixArr);
		// console.log('ret');
		// console.log(ret);
		if(ret && ret.context){
			if(ret.context instanceof FunctionDefContext){
				return getRange(ret.context._start,ret.context._stop,uri);
			}
			if(ret.context instanceof FieldDefContext){
				return getRange(ret.context._start,ret.context._stop,uri);
			}
			if(ret.context instanceof SimpleClassDefContext){
				return getRange(ret.context._start,ret.context._stop,uri);
			}
		}
	}
	return null;
}