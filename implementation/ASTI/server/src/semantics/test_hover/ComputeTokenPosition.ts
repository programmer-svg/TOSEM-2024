import { ParseTree, TerminalNode } from "antlr4ts/tree";
import { CaretPosition } from "../test_completion/types";
import { ParserRuleContext, Token, TokenStream } from "antlr4ts";
import { FunctionDefContext, RefStmtContext, SimpleClassDefContext } from '../../parser/TestLangParser';

interface ret{
	index:number,
	context: ParseTree,
	text: string,
	prefix: string,
	type:Type
}

enum Type{
	Struct,
	Other,
	StructMem
}

export function computeTokenPosition(
	parseTree: ParseTree, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:string,type:Type = Type.Other):ret|undefined {
	if (parseTree instanceof TerminalNode) {
		return computeTokenPositionOfTerminal(parseTree, tokenStream, caretPosition, identifierTokenTypes,prefix,type);
	} else {
		return computeTokenPositionOfChildNode(parseTree as ParserRuleContext, tokenStream, caretPosition, identifierTokenTypes,prefix,type);
	}
}

export function computeTokenPositionOfTerminal(
	parseTree: TerminalNode, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:string,type:Type):ret|undefined {
	const token = parseTree.symbol;
	const text = parseTree.text;
	return positionOfToken(token, text, caretPosition, identifierTokenTypes, parseTree,prefix,type);
}

export function computeTokenPositionOfChildNode(
	parseTree: ParserRuleContext, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:string,type:Type):ret|undefined {
	if ((parseTree.start && parseTree.start.line > caretPosition.line) || (parseTree.stop && parseTree.stop.line < caretPosition.line)) {
		return undefined;
	}
	for (let i = 0; i < parseTree.childCount; i++) {
		if(parseTree.getChild(i) instanceof FunctionDefContext){
			const functionDef = parseTree.getChild(i) as FunctionDefContext;
			if(prefix !== '') prefix += ' ';
			prefix += functionDef.ID().text;
		}
		// if(parseTree.getChild(i) instanceof SimpleClassDefContext){
		// 	const classDef = parseTree.getChild(i) as SimpleClassDefContext;
		// 	if(prefix !== '') prefix += ' ';
		// 	prefix += classDef.classType()._id2.text;
		// }
		// //We need to tell the one from the class with the one from the outer scope, so we add an @ here to distinguish.
		// if(parseTree.getChild(i) instanceof RefStmtContext && (parseTree.getChild(i) as RefStmtContext)._id2){
		// 	const refDef = parseTree.getChild(i) as RefStmtContext;
		// 	console.log((parseTree.getChild(i) as RefStmtContext)._id2);
		// 	if(prefix !== '') prefix += ' ';
		// 	//when we point at x in x.y we will get a prefix of x, which will use handleClass function handle later
		// 	prefix += '@'+refDef._id1.text;
		// }

		// if(parseTree.getChild(i) instanceof SimpleClassDefContext){
		// 	type = Type.Struct;
		// }
		const position = computeTokenPosition(parseTree.getChild(i), tokenStream, caretPosition, identifierTokenTypes,prefix,type);
		if (position !== undefined) {
			return position;
		}
	}
	if (parseTree.start && parseTree.stop) {
		for (let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
			const pos = positionOfToken(tokenStream.get(i), tokenStream.get(i).text, caretPosition, identifierTokenTypes, parseTree,prefix,type);
			if (pos) {
				return pos;
			}
		}
	}
	return undefined;
}

/**
 * When the prefix. the character after @  == name, we need to remove it.
 * @param prefix 
 * @param name 
 */
export function handleClass(prefix:string,name:string):string{
	const prefixArr:string[] = prefix.split(' ');
	let ret = '';
	prefixArr.map((val,index)=>{
		if(val === '') return;
		if(val[0] === '@' && val.slice(1) === name && index === prefixArr.length - 1) return;
		if(ret !== '') ret += ' ';
		ret += val;
	});
	return ret;
}

export function positionOfToken(token: Token, text: string|undefined, caretPosition: CaretPosition, identifierTokenTypes: number[], parseTree: ParseTree,prefix:string,type:Type):ret|undefined {
	if(text === undefined) text = '';
	const start = token.charPositionInLine;
  const stop = token.charPositionInLine + text.length;
	if (token.line == caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
		
		const index = token.tokenIndex;
		if (!identifierTokenTypes.includes(token.type)) {
			return undefined;
		}
		prefix = handleClass(prefix,parseTree.text);
		return {
			index: index,
			context: parseTree,
			text: parseTree.text,
			prefix: prefix,
			type:type
		};
	} else{
		return undefined;
	}
}
