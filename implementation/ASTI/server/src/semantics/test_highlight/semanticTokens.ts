import {  SemanticTokens, SemanticTokensParams } from 'vscode-languageserver';
import { allSymbolMaps } from '../test_hover/hover';
import { documents, message } from '../../browserServerMain';
import { SemanticTokenVistors } from './semanticTokenVisitor'; 


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
export let cnt = 0;
export let message2  = "";
export function handleSemanticTokens(params: SemanticTokensParams): SemanticTokens {
	const startDataTime = new Date();
	// return testColor()
	// console.log('handleSemanticTokens');
	// console.log(params);
	const uri  = params.textDocument.uri;
	const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
	const parseTree = allSymbolMaps.getParseTree(params.textDocument.uri);
	// console.log(symbolTable);
	if(symbolTable && parseTree){
		const document = documents.get(uri);
		if(document){
			const code = document.getText();
			const visiitor = new SemanticTokenVistors(symbolTable);
			visiitor.visit(parseTree);
			const data = visiitor.infoArray;
			cnt = visiitor.cnt;
			message2 += "RQ3.1SemanticToken,cnt:"+cnt+",name:"+params.textDocument.uri+"\n";
			// console.log(data)
			const deltaData = delta(data);
			// console.log(deltaData)
			//detla
			return {
				data : deltaData
			};
		}
	}
	
	//{ line: 2, startChar:  5, length: 3, tokenType: 0, tokenModifiers: 3 },
	return {
		data : [1,0,8,5,0,2,0,8,5,0]
	};
}
