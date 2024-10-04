import { ParseTree, TerminalNode } from "antlr4ts/tree";
import { CaretPosition } from "../test_completion/types";
import { ParserRuleContext, Token, TokenStream } from "antlr4ts";
import { getRange } from '../test_gotoDefinition/gotoDefinition';
import { Range } from 'vscode-languageserver';
interface ret{
	index:number,
	context: ParseTree,
	text: string,
	prefix: Range[],
	range:Range
}

export function computeTokenPosition(
	parseTree: ParseTree, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:Range[]):ret|undefined {
	if (parseTree instanceof TerminalNode) {
		return computeTokenPositionOfTerminal(parseTree, tokenStream, caretPosition, identifierTokenTypes,prefix);
	} else {
		return computeTokenPositionOfChildNode(parseTree as ParserRuleContext, tokenStream, caretPosition, identifierTokenTypes,prefix);
	}
}

export function computeTokenPositionOfTerminal(
	parseTree: TerminalNode, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:Range[]):ret|undefined {
	const token = parseTree.symbol;
	const text = parseTree.text;
	return positionOfToken(token, text, caretPosition, identifierTokenTypes, parseTree,prefix);
}

export function computeTokenPositionOfChildNode(
	parseTree: ParserRuleContext, tokenStream: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = [],prefix:Range[]):ret|undefined {
	if ((parseTree.start && parseTree.start.line > caretPosition.line) || (parseTree.stop && parseTree.stop.line < caretPosition.line)) {
		return undefined;
	}
	for (let i = 0; i < parseTree.childCount; i++) {
		prefix.push(getRange(parseTree._start,parseTree._stop,"").range);
		const position = computeTokenPosition(parseTree.getChild(i), tokenStream, caretPosition, identifierTokenTypes,prefix);
		if (position !== undefined) {
			return position;
		}
		prefix.pop();
	}
	if (parseTree.start && parseTree.stop) {
		for (let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
			prefix.push(getRange(parseTree._start,parseTree._stop,"").range);
			const pos = positionOfToken(tokenStream.get(i), tokenStream.get(i).text, caretPosition, identifierTokenTypes, parseTree,prefix);
			if (pos) {
				return pos;
			}
			prefix.pop();
		}
	}
	return undefined;
}

/**
 * When the prefix. the character after @  == name, we need to remove it.
 * @param prefix 
 * @param name 
 */

export function positionOfToken(token: Token, text: string|undefined, caretPosition: CaretPosition, identifierTokenTypes: number[], parseTree: ParseTree,prefix:Range[]):ret|undefined {
	if(text === undefined) text = '';
	const start = token.charPositionInLine;
  const stop = token.charPositionInLine + text.length;
	if (token.line == caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
		
		const index = token.tokenIndex;
		// if (!identifierTokenTypes.includes(token.type)) {
		// 	return undefined;
		// }
		return {
			index: index,
			context: parseTree,
			text: parseTree.text,
			prefix: prefix,
			range: getRange(token,token,"").range
		};
	} else{
		return undefined;
	}
}
