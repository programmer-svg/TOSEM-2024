import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { TestLangLexer } from '../../parser/TestLangLexer';
import { TestLangParser } from '../../parser/TestLangParser';
import SUnitsBuilder from './SUnitsBuilder';
import { SymbolTable } from '../symbol/SymbolTable';
import SymbolTableBuilder from '../symbol/symbolTableBuilder/SymbolTableBuilder';
import { SUnit } from './SUnit';
import { PredictionMode } from 'antlr4ts/atn/PredictionMode';

export class Union{
	
	sunit!:SUnit;
	symbolTable!:SymbolTable;
	// broswerServerMain执行这行代码 就会导致bug
	public static buildSunits(code:string){
		// const startTime = new Date();
		const input = CharStreams.fromString(code);
		const lexer = new TestLangLexer(input);
		const tokenStream = new CommonTokenStream(lexer);
		const parser = new TestLangParser(tokenStream);
		parser.interpreter.setPredictionMode(PredictionMode.SLL);
		const parseTree = parser.prog();
		// const endTime = new Date();
		// const duration = endTime.valueOf() - startTime.valueOf();
		// console.log('calc Time Pass:antlr');
		// console.log(duration);
		const visitor = new SUnitsBuilder();
		const sunit = visitor.visit(parseTree);
		return sunit;
	}

	// 即使不执行这行代码 但只要这行代码存在，就会导致bug

	public buildSymbolTable(uri:string){
		const symbolTable = new SymbolTable("", {allowDuplicateSymbols:true});
		const symbolTableBuilder = new SymbolTableBuilder(symbolTable,uri,uri);
		symbolTableBuilder.visit(this.sunit);
		this.symbolTable = symbolTable;
		return this.symbolTable;
	}
}