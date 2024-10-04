import * as lsp from 'vscode-languageserver';
import { getPosition } from '../../utils/ComputeTokenPosition';
import { allSymbolMaps, calcTimePass, message } from '../../../browserServerMain';
import { find } from '../../utils/AllSymbolMaps';
import { SUnit } from '../../SUnits/SUnit';
import { SFieldDef } from '../../SUnits/Sunits';

export function getRange(start:SUnit,end:SUnit|undefined,uri:string):lsp.Location{
	let length = 0; 
	if(start.text){
		length = start.end.length;
	}
	if(end === undefined){
		return {
			uri:uri,
			range:{
				start:{
					line:start.start.line-1,
					character:start.start.charPositionInLine
				},
				end:{
					line:start.end.line-1,
					character:start.end.charPositionInLine + length
				}
			}
		};
	}

	if(end.text){
		length = end.end.length;
	}
	return {
		uri:uri,
		range:{
			start:{
				line:start.start.line-1,
				character:start.start.charPositionInLine
			},
			end:{
				line:end.end.line-1,
				character:end.end.charPositionInLine + length
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

	if(!position) return null;
	const sym = await calcTimePass(find,uri,position.sunit.text!,[]);
	let sunit = sym?.context;
	// console.log(sym);
	// console.log(sunit);
	if(sunit){
		if(sunit instanceof SFieldDef){
			sunit = sunit.ID;
		}
		// console.log(getRange(sunit,undefined,uri));
		return getRange(sunit,undefined,uri);
	}
	return null;
}

