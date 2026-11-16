import * as lsp from 'vscode-languageserver';
import { getPosition,allSymbolMaps } from '../test_hover/hover';
import {calcTimePass, documents} from '../../browserServerMain';
import { ReferenceVistor } from './referenceVisitor';
import { SymbolTable } from '../test_diagnostics/symbol/SymbolTable';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { TestLangParser } from '../../parser/TestLangParser';

enum Type{
	Struct,
	Other,
	StructMem
}

/**
 * Acccording to the document and symbol table, find the references of the prefixArr and text.
 * @param document 
 * @param symbolTable 
 * @param prefixArr 
 * @param text 
 * @param uri 
 * @returns 
 */
export function getInfoArray(document:TextDocument,symbolTable:SymbolTable,prefixArr:string[],text:string,uri:string,type:Type = Type.Other){
	const parseTree = allSymbolMaps.getParseTree(uri);
	if(parseTree === undefined) return [];
	const visiitor = new ReferenceVistor(symbolTable,prefixArr,text,uri,type);
	visiitor.visit(parseTree);
	return visiitor.infoArray;
}

/**
 * In the symbolTable, we dont store the position where a symbol is used, so we have to visit the tree again.
 * However, with the information of the symbolTable and the symbol's name, we can cut off some nodes of the tree.
 * @param params 
 * @returns 
 */
export async function getReferences(params: lsp.ReferenceParams):Promise<lsp.Location[]|null>{
	const uri = params.textDocument.uri;
	// console.log('getReferences');
	
	const position = await calcTimePass(getPosition,{...params.position,uri:uri},[TestLangParser.ID]);
	// console.log(position);
	if(position){
		const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
		// console.log(symbolTable);
		if(symbolTable === undefined){
			return null;
		}
		const prefixArr:string[] = position.prefix.split(' ');
		const document = documents.get(uri);
		if(document){
			return getInfoArray(document,symbolTable,prefixArr,position.context.text,uri,position.type);
		}	
	}
	return null;
}