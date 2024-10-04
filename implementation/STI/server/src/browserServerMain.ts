/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { createConnection, BrowserMessageReader, BrowserMessageWriter } from 'vscode-languageserver/browser';

import { FileChangeType, Color, ColorInformation, Range, InitializeParams, InitializeResult, ServerCapabilities, TextDocuments, ColorPresentation, TextEdit, TextDocumentIdentifier, TextDocumentSyncKind, Diagnostic, DiagnosticSeverity, TextDocumentPositionParams, CompletionItem, CompletionItemKind } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { DidChangeWatchedFilesParams } from 'vscode-languageserver';
import { AllSymbolMaps } from './semanticTree/utils/AllSymbolMaps';
import { SymbolTable } from './semanticTree/symbol/SymbolTable';
import SymbolTableBuilder from './semanticTree/symbol/symbolTableBuilder/SymbolTableBuilder';
import { SUnit } from './semanticTree/SUnits/SUnit';
import { Union } from './semanticTree/SUnits/Union';
import { TokenNameIsKeyWordValidator } from './semanticTree/Validator/TokenNameIsKeyWordValidator';
import { DuplicateVariableValidator } from './semanticTree/Validator/DuplicateVariableValidator';
import { handleSemanticTokens } from './semanticTree/Service/semanticToken/SemanticToken';
import { getDefinition } from './semanticTree/Service/gotoDefinition/gotoDefinition';
import { getRename } from './semanticTree/Service/rename/rename';
import { getHover } from './semanticTree/Service/hover/hover';
import { getSelectionRange } from './semanticTree/Service/selectionRange/selectionRange';
import { Validator } from './semanticTree/Validator/Validator';
import * as lsp from 'vscode-languageserver';

import { ScopedSymbol } from './semanticTree/symbol/ScopedSymbol';
import { VariableSymbol } from './semanticTree/symbol/VariableSymbol';
import { RoutineSymbol } from './semanticTree/symbol/RoutineSymbol';
import { ParameterSymbol } from './semanticTree/symbol/ParameterSymbol';
import { BaseSymbol } from './semanticTree/symbol/BaseSymbol';
import { getCompletionInfos } from './semanticTree/Service/test_completion/completion';


console.log('running server lsp-web-extension-sample');
const semanticCheck = true;
/* browser specific setup code */
export let message = "";
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

/* from here on, all code is non-browser specific and could be shared with a regular extension */
// eslint-disable-next-line @typescript-eslint/ban-types
export async function calcTimePass(fun:Function, ...params:any):Promise<any>{
	try{
		const startTime = new Date();
		const ret = await fun(...params);
		const endTime = new Date();
		const duration = endTime.valueOf() - startTime.valueOf();
		// console.log(params);
		// console.log(fun);
		const param = params[0];

		if(fun.name !== "findInSymbolTable" && fun.name !== "getPosition" && fun.name !== "getInfoArray"  && fun.name !== "validateTextDocument") {
			if(param.textDocument) {
				const document = param.textDocument as lsp.TextDocumentIdentifier;
				message += document.uri+" ";
			}else if(param.uri) {
				message += param.uri+" ";
			}else {
				console.log('ERROR!!!');
				message+=('ERROR!!!') + " ";
			}
			if(param.position) {
				const position = param.position as lsp.Position;
				message += "line:"+position.line+" character:"+position.character+" ";
			}else if(param.line !== null && param.character !== null) {
				message += "line:"+param.line+" character:"+param.character+" ";
			}else if(param.positions !== null) {
				const position = param.positions[0] as lsp.Position;
				message += "line:"+position.line+" character:"+position.character+" ";
			}else {
				console.log('ERROR!!!');
				message+='ERROR!!!' + " ";
			}
		}

		if(fun.name === "validateTextDocument"){
			message+=param+" ";
		}
		
		message += "function:"+fun.name  + " ";
		message += "duration:"+duration + "\n";
		// message += params.id;
		return ret;
	}catch(err){
		console.log('ERROR!!!');
		console.log(err);
	}
}


connection.onInitialize((params: InitializeParams): InitializeResult => {
	const capabilities: ServerCapabilities = {
		colorProvider: {}, // provide a color provider
		completionProvider: { //TODO add cache
			resolveProvider: true
		},
		signatureHelpProvider: {
			triggerCharacters: ['(', ',', '<'],
			retriggerCharacters: [')'],
		},
		hoverProvider: true,
		definitionProvider:true,
		referencesProvider:false,
		documentSymbolProvider:false,
		selectionRangeProvider:true,
		renameProvider:true,
		documentHighlightProvider:false,
		workspaceSymbolProvider:false,
		textDocumentSync: TextDocumentSyncKind.Incremental
	};
	return { capabilities };
});

function getRandomInt(min: number, max: number): number {
	// 使用 Math.floor() 将浮点数向下取整
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function myResolveSync(scope:ScopedSymbol,strs:string[]):void{
	let ret = scope;
	for(let i = 0;i<strs.length;i++){
		ret = ret.resolveSync(strs[i]) as ScopedSymbol;
		if(!ret){
			console.log('ERROR!@');
			console.log(strs);
			console.log(scope);
			console.log(i);
		}
	}
}

let symbolCnt = 0;
function getSymbolsOfTypeSync<T extends BaseSymbol>(scope: ScopedSymbol, type: new (...args: any[]) => T,array:string[]):Map<number,string[]> {
	const result:Map<number,string[]> = new Map();
	scope.children.forEach(child => {
		if (child instanceof type) {
			const newArray = array.concat();
			newArray.push(child.name);
			result.set(symbolCnt++,newArray);
		}
		else if (child instanceof ScopedSymbol){
			const newArray = array.concat();
			newArray.push(child.name);
			const res = getSymbolsOfTypeSync(child, type,newArray);
			for(const entry of res.entries()){
				result.set(entry[0],entry[1]);
			}
		}
	});
	return result;
}

export function getAllSymbolsOfType<T extends BaseSymbol>(scope: ScopedSymbol, type: new (...args: any[]) => T):Map<number,string[]>{
	return getSymbolsOfTypeSync(scope, type,[]);
}

export async function RQ2calcTimePass(textDocument: string,flag = true): Promise<void> {
	// console.log("validateTextDocument");

	// const oldMap = allSymbolMaps.getSymbolTable(textDocument);
	symbolCnt = 0;

	allSymbolMaps.remove(textDocument);
	allSymbolMaps.set(textDocument);
	// const name = textDocument.split("/").slice(3)[0];
	// let count  = 0;
	// let fileNameRight = true;
	// for(const n of name){
	// 	if(n ==='_') count++;
	// }
	// if(count  <= 2) fileNameRight = false;

	// let scope:Scope|undefined = undefined;
	// if(fileNameRight) scope = createFile(name,textDocument);

	const sunit = allSymbolMaps.geSunit(textDocument);
	if (!sunit)return ;
	const symbolTable = new SymbolTable("",{allowDuplicateSymbols:true});
	const symbolTableBuilder = new SymbolTableBuilder(symbolTable,textDocument,textDocument);
	symbolTableBuilder.visit(sunit);

	// const parseTree = allSymbolMaps.getParseTree(textDocument);
	// if(!parseTree) return;
	// const newMap = visitor.symbolTable;

	// //const m = "vscode-test-web://mount/test3_1.mc"; 中的test3_1.mc

	const val = new Validator(symbolTable);
	val.visit(sunit);
	const infoArray = val.getInfoArray();

	const diagnostics: Diagnostic[] = [];
	infoArray.forEach(info => {
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Error,
			range: {
				start: {"line": info.startLine - 1, "character": info.startColumn},
				end: {"line": info.endLine - 1, "character": info.endColumn + info.length}
			},
			message: info.msg,
			source: 'test'
		};
		diagnostics.push(diagnostic);
	});
	connection.sendDiagnostics({ uri: textDocument, diagnostics });

	// if(!fileNameRight) return;
	// if(flag){
	// 	if(oldMap){
	// 		const ref = oldMap.ref;
	// 		const refd = oldMap.refd;
	// 		if(ref && ref.size > 0){
	// 			ref.forEach(r => {
	// 				const refMap = allSymbolMaps.getSymbolTable(r);
	// 				if(refMap){
	// 					refMap.refd.delete(textDocument);
	// 				}
	// 			});
	// 		}
	// 		newMap.refd = refd;

	// 		refd.forEach(r =>{
	// 			validateTextDocument(r,false);
	// 		});
	// 	}

	// }

	const cyc = textDocument.split('_')[1];
	const result:Map<number,string[]> = new Map();
	const scope = symbolTable.resolveSync("") as ScopedSymbol;
	let res = getAllSymbolsOfType(scope, VariableSymbol);
	for(const entry of res.entries()){
		result.set(entry[0],entry[1]);
	}
	// parameter symbol is instance of variableSymbol
	// res = getAllSymbolsOfType(scope, ParameterSymbol);
	// for(const entry of res.entries()){
	// 	result.set(entry[0],entry[1]);
	// }
	res = getAllSymbolsOfType(scope, RoutineSymbol);
	for(const entry of res.entries()){
		result.set(entry[0],entry[1]);
	}

	const symbolNum = symbolCnt;
	//compute search 1000 times in symbolTable
	const startTime = new Date();
	let i = 0;
	while(i<10000){
		i = i+1;
		const randomNumber: number = getRandomInt(0, symbolNum-1);
		// const symbolTable = allSymbolMaps.getSymbolTable(uri);
		// // // console.log(symbolTable);
		// // // console.log(name);
		// // if(!symbolTable) return undefined;
		const scope = symbolTable.resolveSync("") as ScopedSymbol;
		const arr = result.get(randomNumber);
		if(!arr) console.log("ERROR121");
		else myResolveSync(scope,arr);
	}
	const endTime = new Date();
	const duration = endTime.valueOf() - startTime.valueOf();
	message+= textDocument + " ";
	message += "find duration:"+duration + "\n";
}


// Track open, change and close text document events
export const documents = new TextDocuments(TextDocument);
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	// console.log('change');
	// console.log(change.document);
	calcTimePass(validateTextDocument,change.document.uri);
	// RQ2calcTimePass(change.document.uri);
});


// Register providers
function voidFunction (){
	return null;
}

function voidFunction2 (){
	return {
		data:[1,0,8,5,0,2,0,8,5,0]
	};
}

connection.onDocumentColor(voidFunction);
// connection.onColorPresentation(params => getColorPresentation(params.color, params.range));
connection.onCompletion(params => {
	const param = {documents:documents,textDocument:params.textDocument,position:params.position};
	return calcTimePass(getCompletionInfos,param);
});
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
	return item;
}
);
// connection.onWorkspaceSymbol(params => calcTimePass(getWorkSapceSymbol,params));
connection.onHover(params => calcTimePass(getHover,params));
connection.onDefinition(params => calcTimePass(getDefinition,params));
// connection.onReferences(params => calcTimePass(getReferences,params));
connection.onRenameRequest(params => calcTimePass(getRename,params));
// connection.onDidChangeWatchedFiles(params => calcTimePass(ChangeWatchedFiles,params));
// connection.onDocumentSymbol(params => calcTimePass(getDocumentSymbol,params));
connection.onSelectionRanges(params => calcTimePass(getSelectionRange,params));
// connection.onDocumentHighlight(params => calcTimePass(getDocumentHighLight,params));
// connection.onSignatureHelp(params => calcTimePass(getSignatureHelp,params));
connection.languages.semanticTokens.on(params => calcTimePass(handleSemanticTokens,params));
documents.listen(connection);
// Listen on the connection
connection.listen();


async function ChangeWatchedFiles(params:DidChangeWatchedFilesParams){
	console.log('ChangeWatchedFiles');
	console.log(params);
}


export const allSymbolMaps : AllSymbolMaps = new AllSymbolMaps();
/**
 * 
 * @param textDocument 
 * @param flag if flag == true continue validate; flag == false stop validate
 * @returns 
 */
export async function validateTextDocument(uri: string,flag = true): Promise<void> {
	const document = documents.get(uri);
	if(!document){
		return undefined;
	}
	allSymbolMaps.remove(uri);
	allSymbolMaps.set(uri);
	
	
	const sunit = allSymbolMaps.geSunit(uri);
	if(!sunit) return;
	const symbolTable = new SymbolTable("", {allowDuplicateSymbols:true});
	const symbolTableBuilder = new SymbolTableBuilder(symbolTable,uri,uri);

	symbolTableBuilder.visit(sunit);
	

	if(semanticCheck){
		const val = new Validator(symbolTable);
		val.visit(sunit);
		

		const infoArray = val.infoArray;

		const diagnostics: Diagnostic[] = [];
		infoArray.forEach(info => {
			const diagnostic: Diagnostic = {
				severity: DiagnosticSeverity.Error,
				range: {
					start: {"line": info.startLine - 1, "character": info.startColumn},
					end: {"line": info.endLine - 1, "character": info.endColumn + info.length}
				},
				message: info.msg,
				source: 'test'
			};
			diagnostics.push(diagnostic);
		});
		connection.sendDiagnostics({ uri: uri, diagnostics });
	}




	// const sunit = allSymbolMaps.geSunit(uri);
	// console.log(sunit);
	// const symbolTable = new SymbolTable("", {allowDuplicateSymbols:true});
	// const symbolTableBuilder = new SymbolTableBuilder(symbolTable,uri,uri);
	// calcTimePass(symbolTableBuilder.visit,sunit);
	
	// const val = new Validator(symbolTable);
	// console.log(sunit);
	// calcTimePass(val.visit,sunit);
	// const infoArray = val.infoArray;

	// const diagnostics: Diagnostic[] = [];
	// infoArray.forEach(info => {
	// 	const diagnostic: Diagnostic = {
	// 		severity: DiagnosticSeverity.Error,
	// 		range: {
	// 			start: {"line": info.startLine - 1, "character": info.startColumn},
	// 			end: {"line": info.endLine - 1, "character": info.endColumn + info.length}
	// 		},
	// 		message: info.msg,
	// 		source: 'test'
	// 	};
	// 	diagnostics.push(diagnostic);
	// });
	// connection.sendDiagnostics({ uri: uri, diagnostics });



	// const oldMap = allSymbolMaps.getSymbolTable(textDocument);
	// allSymbolMaps.remove(textDocument);

	// const name = textDocument.split("/").slice(3)[0];
	// let count  = 0;
	// let fileNameRight = true;
	// for(const n of name){
	// 	if(n ==='_') count++;
	// }
	// if(count  <= 2) fileNameRight = false;

	// let scope:Scope|undefined = undefined;
	// if(fileNameRight) scope = createFile(name,textDocument);
	// allSymbolMaps.get(textDocument,scope);
	// const parseTree = allSymbolMaps.getParseTree(textDocument);
	// if(!parseTree) return;
	
	
	// const visitor = allSymbolMaps.getVisitor(textDocument);
	// if(!visitor) return;
	// const newMap = visitor.symbolTable;

	// //const m = "vscode-test-web://mount/test3_1.mc"; 中的test3_1.mc
	

	// const infoArray = visitor.getInfoArray();

	// const diagnostics: Diagnostic[] = [];
	// infoArray.forEach(info => {
	// 	const diagnostic: Diagnostic = {
	// 		severity: DiagnosticSeverity.Error,
	// 		range: {
	// 			start: {"line": info.startLine - 1, "character": info.startColumn},
	// 			end: {"line": info.endLine - 1, "character": info.endColumn + info.length}
	// 		},
	// 		message: info.msg,
	// 		source: 'test'
	// 	};
	// 	diagnostics.push(diagnostic);
	// });
	// connection.sendDiagnostics({ uri: textDocument, diagnostics });

	// if(!fileNameRight) return;
	// if(flag){
	// 	if(oldMap){
	// 		const ref = oldMap.ref;
	// 		const refd = oldMap.refd;
	// 		if(ref && ref.size > 0){
	// 			ref.forEach(r => {
	// 				const refMap = allSymbolMaps.getSymbolTable(r);
	// 				if(refMap){
	// 					refMap.refd.delete(textDocument);
	// 				}
	// 			});
	// 		}
	// 		newMap.refd = refd;

	// 		refd.forEach(r =>{
	// 			validateTextDocument(r,false);
	// 		});
	// 	}

	// }
}
