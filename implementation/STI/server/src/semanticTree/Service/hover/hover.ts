import * as lsp from 'vscode-languageserver';
import { getPosition } from '../../utils/ComputeTokenPosition';
import { find } from '../../utils/AllSymbolMaps';
import { SFieldDef } from '../../SUnits/Sunits';
import { calcTimePass } from '../../../browserServerMain';

export async function getHover(params:lsp.TextDocumentPositionParams){
	const uri = params.textDocument.uri;
	const position = await calcTimePass(getPosition,{
		uri:uri,
		line:params.position.line,
		character:params.position.character
	});
	// console.log('hover!');
	// console.log(position);
	if(!position || !position.sunit.text){
		return { contents: [] };
	}
	const sym = await calcTimePass(find,uri,position.sunit.text,[]);
	// console.log(sym);
	const sunit = sym?.context;
	// console.log(sunit);
	if(!sunit){
		return { contents: [] };
	}
	if(sunit && sunit instanceof SFieldDef){
		let content = sunit.type.name+" "+sunit.ID.text;
		if(sunit.evaluationStmt){
			content = content+" = "+ sunit.evaluationStmt.text;
		}
		return { contents: content};
	}

	
	return { contents: [] };
}