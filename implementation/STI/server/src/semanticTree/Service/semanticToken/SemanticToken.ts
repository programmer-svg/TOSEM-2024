import {  SemanticTokens, SemanticTokensParams } from 'vscode-languageserver';
import { allSymbolMaps } from '../../../browserServerMain';
import { documents } from '../../../browserServerMain';
import { SemanticTokenVistor } from './SemanticTokenVisitor';
import { ScopedSymbol } from '../../symbol/ScopedSymbol';


function delta(data:number[]):number[]{
	const ret:number[] = [];
	for(let i = 0;i<5;i++){
		ret.push(data[i]);
	}
	for(let i = 1;i<data.length/5;i+=1){
		const index = 5*i,lastindex = 5*(i-1);
		if(data[index] === data[lastindex]){
			ret.push(0);
			ret.push(data[index+1]- data[lastindex+1]);
			ret.push(data[index+2],data[index+3],data[index+4]);
		}
		else{
			ret.push(data[index]- data[lastindex]);
			ret.push(data[index+1],data[index+2],data[index+3],data[index+4]);
		}
	}
	return ret;
}

export function handleSemanticTokens(params: SemanticTokensParams): SemanticTokens {

	const uri  = params.textDocument.uri;
	const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
	const sunit= allSymbolMaps.geSunit(params.textDocument.uri);
	if(symbolTable && sunit){
		const visiitor = new SemanticTokenVistor(symbolTable);
		visiitor.scope = symbolTable.resolveSync("") as ScopedSymbol;
		visiitor.visit(sunit);
		const data = visiitor.infoArray;
		// console.log(data)
		const deltaData = delta(data);
		// console.log(deltaData)
		//detla
		// console.log('semanticTokenTime:'+visiitor.cnt);
		return {
			data : deltaData
		};
	}
	
	//{ line: 2, startChar:  5, length: 3, tokenType: 0, tokenModifiers: 3 },
	return {
		data : [1,0,8,5,0,2,0,8,5,0]
	};
}