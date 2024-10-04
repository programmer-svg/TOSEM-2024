//@ts-nocheck
import { ParserRuleContext, Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Position, Range } from 'vscode-languageserver';

export function toRange(ctx: ParserRuleContext): Range {
	return {
		start: {
			line: ctx.start.line - 1,
			character: ctx.start.charPositionInLine
		},
		end: {
			line: ctx.stop.line - 1,
			character: ctx.stop.charPositionInLine + ctx.stop.text.length
		}
	};
}


export function toRange(ctx: TerminalNode) {
	return {
		start: {
			line: ctx.symbol.line - 1,
			character: ctx.symbol.charPositionInLine
		},
		end: {
			line: ctx.symbol.line - 1,
			character: ctx.symbol.charPositionInLine + ctx.symbol.text.length
		}
	};
}

export function positionToRange(position: Position) {
	return {
		start: position,
		end: position
	};
}



