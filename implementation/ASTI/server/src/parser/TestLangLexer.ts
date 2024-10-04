// Generated from .\\server\\src\\grammar\\TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TestLangLexer extends Lexer {
	public static readonly OPERATOR1 = 1;
	public static readonly OPERATOR2 = 2;
	public static readonly PRIMITIVE_TYPE = 3;
	public static readonly STRING = 4;
	public static readonly QUOTE = 5;
	public static readonly SINGLE_QUOTE = 6;
	public static readonly FloatLiteral = 7;
	public static readonly INT_NO_SIGN = 8;
	public static readonly BOOLEAN = 9;
	public static readonly RETURN = 10;
	public static readonly WHILE = 11;
	public static readonly FOR = 12;
	public static readonly IF = 13;
	public static readonly ELIF = 14;
	public static readonly ELSE = 15;
	public static readonly CLASS = 16;
	public static readonly BREAK = 17;
	public static readonly CONTINUE = 18;
	public static readonly CALL = 19;
	public static readonly END_LINE = 20;
	public static readonly NEW = 21;
	public static readonly NOT = 22;
	public static readonly OR = 23;
	public static readonly AND = 24;
	public static readonly IN = 25;
	public static readonly LBRACE = 26;
	public static readonly RBRACE = 27;
	public static readonly LPAREN = 28;
	public static readonly RPAREN = 29;
	public static readonly COMMA = 30;
	public static readonly ASSIGN = 31;
	public static readonly INC = 32;
	public static readonly DEC = 33;
	public static readonly AT = 34;
	public static readonly BITAND = 35;
	public static readonly DOT = 36;
	public static readonly COLON_CALL = 37;
	public static readonly COLON = 38;
	public static readonly ELLIPSIS = 39;
	public static readonly LSQUARE = 40;
	public static readonly RSQUARE = 41;
	public static readonly TILDE = 42;
	public static readonly ID = 43;
	public static readonly WS = 44;
	public static readonly NL = 45;
	public static readonly COMMENT = 46;
	public static readonly COMMENTS = 47;
	public static readonly ErrorCharacter = 48;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPERATOR1", "OPERATOR2", "PRIMITIVE_TYPE", "STRING", "QUOTE", "SINGLE_QUOTE", 
		"CHAR_IN_QUOTE", "ESCAPE_IN_QUOTE", "CHAR_IN_DOUBLE_QUOTE", "ESCAPE_IN_DOUBLE_QUOTE", 
		"FloatLiteral", "EXPONENT", "FloatE", "INT_NO_SIGN", "BOOLEAN", "RETURN", 
		"WHILE", "FOR", "IF", "ELIF", "ELSE", "CLASS", "BREAK", "CONTINUE", "CALL", 
		"END_LINE", "NEW", "NOT", "OR", "AND", "IN", "LBRACE", "RBRACE", "LPAREN", 
		"RPAREN", "COMMA", "ASSIGN", "INC", "DEC", "AT", "BITAND", "DOT", "COLON_CALL", 
		"COLON", "ELLIPSIS", "LSQUARE", "RSQUARE", "TILDE", "ID", "LETTER", "DIGIT_NO_ZERO", 
		"DIGIT", "UPPERCASE_LETTER", "WS", "NL", "COMMENT", "COMMENTS", "ErrorCharacter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'\"'", "'''", 
		undefined, undefined, undefined, "'return'", "'while'", "'for'", "'if'", 
		"'elif'", "'else'", "'class'", "'break'", "'continue'", "'call'", "';'", 
		"'new'", "'not'", "'or'", "'and'", "'in'", "'{'", "'}'", "'('", "')'", 
		"','", "'='", "'++'", "'--'", "'@'", "'&'", "'.'", "'::'", "':'", "'...'", 
		"'['", "']'", "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "OPERATOR1", "OPERATOR2", "PRIMITIVE_TYPE", "STRING", "QUOTE", 
		"SINGLE_QUOTE", "FloatLiteral", "INT_NO_SIGN", "BOOLEAN", "RETURN", "WHILE", 
		"FOR", "IF", "ELIF", "ELSE", "CLASS", "BREAK", "CONTINUE", "CALL", "END_LINE", 
		"NEW", "NOT", "OR", "AND", "IN", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
		"COMMA", "ASSIGN", "INC", "DEC", "AT", "BITAND", "DOT", "COLON_CALL", 
		"COLON", "ELLIPSIS", "LSQUARE", "RSQUARE", "TILDE", "ID", "WS", "NL", 
		"COMMENT", "COMMENTS", "ErrorCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TestLangLexer._LITERAL_NAMES, TestLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TestLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TestLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TestLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return TestLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TestLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TestLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TestLangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x022\u01AC\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\x81" +
		"\n\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x9B\n" +
		"\x04\x03\x05\x03\x05\x07\x05\x9F\n\x05\f\x05\x0E\x05\xA2\v\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05\xA8\n\x05\f\x05\x0E\x05\xAB\v\x05\x03" +
		"\x05\x03\x05\x05\x05\xAF\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03" +
		"\b\x05\b\xB7\n\b\x03\t\x03\t\x03\t\x03\n\x03\n\x05\n\xBE\n\n\x03\v\x03" +
		"\v\x03\v\x03\f\x05\f\xC4\n\f\x03\f\x03\f\x03\f\x05\f\xC9\n\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\xD1\n\f\x03\r\x03\r\x05\r\xD5\n\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F\xDD\n\x0F\f\x0F\x0E\x0F" +
		"\xE0\v\x0F\x03\x0F\x06\x0F\xE3\n\x0F\r\x0F\x0E\x0F\xE4\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xF0\n" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$" +
		"\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03" +
		"0\x030\x031\x031\x032\x032\x052\u0167\n2\x032\x032\x032\x072\u016C\n2" +
		"\f2\x0E2\u016F\v2\x033\x033\x034\x034\x035\x035\x036\x036\x037\x067\u017A" +
		"\n7\r7\x0E7\u017B\x037\x037\x038\x038\x038\x058\u0183\n8\x038\x058\u0186" +
		"\n8\x038\x038\x038\x058\u018B\n8\x078\u018D\n8\f8\x0E8\u0190\v8\x038\x03" +
		"8\x039\x039\x079\u0196\n9\f9\x0E9\u0199\v9\x039\x039\x03:\x03:\x03:\x03" +
		":\x07:\u01A1\n:\f:\x0E:\u01A4\v:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		"\u01A2\x02\x02<\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
		"\r\x02\b\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15\x02\x02\x17\x02\t\x19" +
		"\x02\x02\x1B\x02\x02\x1D\x02\n\x1F\x02\v!\x02\f#\x02\r%\x02\x0E\'\x02" +
		"\x0F)\x02\x10+\x02\x11-\x02\x12/\x02\x131\x02\x143\x02\x155\x02\x167\x02" +
		"\x179\x02\x18;\x02\x19=\x02\x1A?\x02\x1BA\x02\x1CC\x02\x1DE\x02\x1EG\x02" +
		"\x1FI\x02 K\x02!M\x02\"O\x02#Q\x02$S\x02%U\x02&W\x02\'Y\x02([\x02)]\x02" +
		"*_\x02+a\x02,c\x02-e\x02\x02g\x02\x02i\x02\x02k\x02\x02m\x02.o\x02/q\x02" +
		"0s\x021u\x022\x03\x02\r\x07\x02\'\',,11>>@@\x04\x02--//\x04\x02))^^\x04" +
		"\x02$$^^\x04\x02GGgg\x04\x02C\\c|\x03\x023;\x03\x022;\x03\x02C\\\x05\x02" +
		"\v\v\x0E\x0E\"\"\x04\x02\f\f\x0F\x0F\x02\u01C2\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
		"#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
		"\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
		"\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
		"7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
		"\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
		"\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
		"\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
		"\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
		"Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
		"\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03" +
		"\x02\x02\x02\x03\x80\x03\x02\x02\x02\x05\x82\x03\x02\x02\x02\x07\x9A\x03" +
		"\x02\x02\x02\t\xAE\x03\x02\x02\x02\v\xB0\x03\x02\x02\x02\r\xB2\x03\x02" +
		"\x02\x02\x0F\xB6\x03\x02\x02\x02\x11\xB8\x03\x02\x02\x02\x13\xBD\x03\x02" +
		"\x02\x02\x15\xBF\x03\x02\x02\x02\x17\xD0\x03\x02\x02\x02\x19\xD2\x03\x02" +
		"\x02\x02\x1B\xD8\x03\x02\x02\x02\x1D\xE2\x03\x02\x02\x02\x1F\xEF\x03\x02" +
		"\x02\x02!\xF1\x03\x02\x02\x02#\xF8\x03\x02\x02\x02%\xFE\x03\x02\x02\x02" +
		"\'\u0102\x03\x02\x02\x02)\u0105\x03\x02\x02\x02+\u010A\x03\x02\x02\x02" +
		"-\u010F\x03\x02\x02\x02/\u0115\x03\x02\x02\x021\u011B\x03\x02\x02\x02" +
		"3\u0124\x03\x02\x02\x025\u0129\x03\x02\x02\x027\u012B\x03\x02\x02\x02" +
		"9\u012F\x03\x02\x02\x02;\u0133\x03\x02\x02\x02=\u0136\x03\x02\x02\x02" +
		"?\u013A\x03\x02\x02\x02A\u013D\x03\x02\x02\x02C\u013F\x03\x02\x02\x02" +
		"E\u0141\x03\x02\x02\x02G\u0143\x03\x02\x02\x02I\u0145\x03\x02\x02\x02" +
		"K\u0147\x03\x02\x02\x02M\u0149\x03\x02\x02\x02O\u014C\x03\x02\x02\x02" +
		"Q\u014F\x03\x02\x02\x02S\u0151\x03\x02\x02\x02U\u0153\x03\x02\x02\x02" +
		"W\u0155\x03\x02\x02\x02Y\u0158\x03\x02\x02\x02[\u015A\x03\x02\x02\x02" +
		"]\u015E\x03\x02\x02\x02_\u0160\x03\x02\x02\x02a\u0162\x03\x02\x02\x02" +
		"c\u0166\x03\x02\x02\x02e\u0170\x03\x02\x02\x02g\u0172\x03\x02\x02\x02" +
		"i\u0174\x03\x02\x02\x02k\u0176\x03\x02\x02\x02m\u0179\x03\x02\x02\x02" +
		"o\u0182\x03\x02\x02\x02q\u0193\x03\x02\x02\x02s\u019C\x03\x02\x02\x02" +
		"u\u01AA\x03\x02\x02\x02w\x81\t\x02\x02\x02xy\x07?\x02\x02y\x81\x07?\x02" +
		"\x02z{\x07@\x02\x02{\x81\x07?\x02\x02|}\x07>\x02\x02}\x81\x07?\x02\x02" +
		"~\x7F\x07#\x02\x02\x7F\x81\x07?\x02\x02\x80w\x03\x02\x02\x02\x80x\x03" +
		"\x02\x02\x02\x80z\x03\x02\x02\x02\x80|\x03\x02\x02\x02\x80~\x03\x02\x02" +
		"\x02\x81\x04\x03\x02\x02\x02\x82\x83\t\x03\x02\x02\x83\x06\x03\x02\x02" +
		"\x02\x84\x85\x07k\x02\x02\x85\x86\x07p\x02\x02\x86\x9B\x07v\x02\x02\x87" +
		"\x88\x07h\x02\x02\x88\x89\x07n\x02\x02\x89\x8A\x07q\x02\x02\x8A\x8B\x07" +
		"c\x02\x02\x8B\x9B\x07v\x02\x02\x8C\x8D\x07u\x02\x02\x8D\x8E\x07v\x02\x02" +
		"\x8E\x8F\x07t\x02\x02\x8F\x90\x07k\x02\x02\x90\x91\x07p\x02\x02\x91\x9B" +
		"\x07i\x02\x02\x92\x93\x07d\x02\x02\x93\x94\x07q\x02\x02\x94\x95\x07q\x02" +
		"\x02\x95\x9B\x07n\x02\x02\x96\x97\x07x\x02\x02\x97\x98\x07q\x02\x02\x98" +
		"\x99\x07k\x02\x02\x99\x9B\x07f\x02\x02\x9A\x84\x03\x02\x02\x02\x9A\x87" +
		"\x03\x02\x02\x02\x9A\x8C\x03\x02\x02\x02\x9A\x92\x03\x02\x02\x02\x9A\x96" +
		"\x03\x02\x02\x02\x9B\b\x03\x02\x02\x02\x9C\xA0\x05\v\x06\x02\x9D\x9F\x05" +
		"\x13\n\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03" +
		"\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA0\x03" +
		"\x02\x02\x02\xA3\xA4\x05\v\x06\x02\xA4\xAF\x03\x02\x02\x02\xA5\xA9\x05" +
		"\r\x07\x02\xA6\xA8\x05\x0F\b\x02\xA7\xA6\x03\x02\x02\x02\xA8\xAB\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02" +
		"\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x05\r\x07\x02\xAD\xAF\x03\x02" +
		"\x02\x02\xAE\x9C\x03\x02\x02\x02\xAE\xA5\x03\x02\x02\x02\xAF\n\x03\x02" +
		"\x02\x02\xB0\xB1\x07$\x02\x02\xB1\f\x03\x02\x02\x02\xB2\xB3\x07)\x02\x02" +
		"\xB3\x0E\x03\x02\x02\x02\xB4\xB7\n\x04\x02\x02\xB5\xB7\x05\x11\t\x02\xB6" +
		"\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\x10\x03\x02\x02\x02\xB8" +
		"\xB9\x07^\x02\x02\xB9\xBA\t\x04\x02\x02\xBA\x12\x03\x02\x02\x02\xBB\xBE" +
		"\n\x05\x02\x02\xBC\xBE\x05\x15\v\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03" +
		"\x02\x02\x02\xBE\x14\x03\x02\x02\x02\xBF\xC0\x07^\x02\x02\xC0\xC1\t\x05" +
		"\x02\x02\xC1\x16\x03\x02\x02\x02\xC2\xC4\x05\x1D\x0F\x02\xC3\xC2\x03\x02" +
		"\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x05U" +
		"+\x02\xC6\xC8\x05\x1D\x0F\x02\xC7\xC9\x05\x19\r\x02\xC8\xC7\x03\x02\x02" +
		"\x02\xC8\xC9\x03\x02\x02\x02\xC9\xD1\x03\x02\x02\x02\xCA\xCB\x05\x1D\x0F" +
		"\x02\xCB\xCC\x05\x19\r\x02\xCC\xD1\x03\x02\x02\x02\xCD\xCE\x05\x1D\x0F" +
		"\x02\xCE\xCF\x05U+\x02\xCF\xD1\x03\x02\x02\x02\xD0\xC3\x03\x02\x02\x02" +
		"\xD0\xCA\x03\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD1\x18\x03\x02\x02\x02" +
		"\xD2\xD4\x05\x1B\x0E\x02\xD3\xD5\x05\x05\x03\x02\xD4\xD3\x03\x02\x02\x02" +
		"\xD4\xD5\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x05\x1D\x0F\x02" +
		"\xD7\x1A\x03\x02\x02\x02\xD8\xD9\t\x06\x02\x02\xD9\x1C\x03\x02\x02\x02" +
		"\xDA\xDE\x05g4\x02\xDB\xDD\x05i5\x02\xDC\xDB\x03\x02\x02\x02\xDD\xE0\x03" +
		"\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE3\x03" +
		"\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE1\xE3\x05i5\x02\xE2\xDA\x03\x02" +
		"\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02" +
		"\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\x1E\x03\x02\x02\x02\xE6\xE7\x07v" +
		"\x02\x02\xE7\xE8\x07t\x02\x02\xE8\xE9\x07w\x02\x02\xE9\xF0\x07g\x02\x02" +
		"\xEA\xEB\x07h\x02\x02\xEB\xEC\x07c\x02\x02\xEC\xED\x07n\x02\x02\xED\xEE" +
		"\x07u\x02\x02\xEE\xF0\x07g\x02\x02\xEF\xE6\x03\x02\x02\x02\xEF\xEA\x03" +
		"\x02\x02\x02\xF0 \x03\x02\x02\x02\xF1\xF2\x07t\x02\x02\xF2\xF3\x07g\x02" +
		"\x02\xF3\xF4\x07v\x02\x02\xF4\xF5\x07w\x02\x02\xF5\xF6\x07t\x02\x02\xF6" +
		"\xF7\x07p\x02\x02\xF7\"\x03\x02\x02\x02\xF8\xF9\x07y\x02\x02\xF9\xFA\x07" +
		"j\x02\x02\xFA\xFB\x07k\x02\x02\xFB\xFC\x07n\x02\x02\xFC\xFD\x07g\x02\x02" +
		"\xFD$\x03\x02\x02\x02\xFE\xFF\x07h\x02\x02\xFF\u0100\x07q\x02\x02\u0100" +
		"\u0101\x07t\x02\x02\u0101&\x03\x02\x02\x02\u0102\u0103\x07k\x02\x02\u0103" +
		"\u0104\x07h\x02\x02\u0104(\x03\x02\x02\x02\u0105\u0106\x07g\x02\x02\u0106" +
		"\u0107\x07n\x02\x02\u0107\u0108\x07k\x02\x02\u0108\u0109\x07h\x02\x02" +
		"\u0109*\x03\x02\x02\x02\u010A\u010B\x07g\x02\x02\u010B\u010C\x07n\x02" +
		"\x02\u010C\u010D\x07u\x02\x02\u010D\u010E\x07g\x02\x02\u010E,\x03\x02" +
		"\x02\x02\u010F\u0110\x07e\x02\x02\u0110\u0111\x07n\x02\x02\u0111\u0112" +
		"\x07c\x02\x02\u0112\u0113\x07u\x02\x02\u0113\u0114\x07u\x02\x02\u0114" +
		".\x03\x02\x02\x02\u0115\u0116\x07d\x02\x02\u0116\u0117\x07t\x02\x02\u0117" +
		"\u0118\x07g\x02\x02\u0118\u0119\x07c\x02\x02\u0119\u011A\x07m\x02\x02" +
		"\u011A0\x03\x02\x02\x02\u011B\u011C\x07e\x02\x02\u011C\u011D\x07q\x02" +
		"\x02\u011D\u011E\x07p\x02\x02\u011E\u011F\x07v\x02\x02\u011F\u0120\x07" +
		"k\x02\x02\u0120\u0121\x07p\x02\x02\u0121\u0122\x07w\x02\x02\u0122\u0123" +
		"\x07g\x02\x02\u01232\x03\x02\x02\x02\u0124\u0125\x07e\x02\x02\u0125\u0126" +
		"\x07c\x02\x02\u0126\u0127\x07n\x02\x02\u0127\u0128\x07n\x02\x02\u0128" +
		"4\x03\x02\x02\x02\u0129\u012A\x07=\x02\x02\u012A6\x03\x02\x02\x02\u012B" +
		"\u012C\x07p\x02\x02\u012C\u012D\x07g\x02\x02\u012D\u012E\x07y\x02\x02" +
		"\u012E8\x03\x02\x02\x02\u012F\u0130\x07p\x02\x02\u0130\u0131\x07q\x02" +
		"\x02\u0131\u0132\x07v\x02\x02\u0132:\x03\x02\x02\x02\u0133\u0134\x07q" +
		"\x02\x02\u0134\u0135\x07t\x02\x02\u0135<\x03\x02\x02\x02\u0136\u0137\x07" +
		"c\x02\x02\u0137\u0138\x07p\x02\x02\u0138\u0139\x07f\x02\x02\u0139>\x03" +
		"\x02\x02\x02\u013A\u013B\x07k\x02\x02\u013B\u013C\x07p\x02\x02\u013C@" +
		"\x03\x02\x02\x02\u013D\u013E\x07}\x02\x02\u013EB\x03\x02\x02\x02\u013F" +
		"\u0140\x07\x7F\x02\x02\u0140D\x03\x02\x02\x02\u0141\u0142\x07*\x02\x02" +
		"\u0142F\x03\x02\x02\x02\u0143\u0144\x07+\x02\x02\u0144H\x03\x02\x02\x02" +
		"\u0145\u0146\x07.\x02\x02\u0146J\x03\x02\x02\x02\u0147\u0148\x07?\x02" +
		"\x02\u0148L\x03\x02\x02\x02\u0149\u014A\x07-\x02\x02\u014A\u014B\x07-" +
		"\x02\x02\u014BN\x03\x02\x02\x02\u014C\u014D\x07/\x02\x02\u014D\u014E\x07" +
		"/\x02\x02\u014EP\x03\x02\x02\x02\u014F\u0150\x07B\x02\x02\u0150R\x03\x02" +
		"\x02\x02\u0151\u0152\x07(\x02\x02\u0152T\x03\x02\x02\x02\u0153\u0154\x07" +
		"0\x02\x02\u0154V\x03\x02\x02\x02\u0155\u0156\x07<\x02\x02\u0156\u0157" +
		"\x07<\x02\x02\u0157X\x03\x02\x02\x02\u0158\u0159\x07<\x02\x02\u0159Z\x03" +
		"\x02\x02\x02\u015A\u015B\x070\x02\x02\u015B\u015C\x070\x02\x02\u015C\u015D" +
		"\x070\x02\x02\u015D\\\x03\x02\x02\x02\u015E\u015F\x07]\x02\x02\u015F^" +
		"\x03\x02\x02\x02\u0160\u0161\x07_\x02\x02\u0161`\x03\x02\x02\x02\u0162" +
		"\u0163\x07\x80\x02\x02\u0163b\x03\x02\x02\x02\u0164\u0167\x05e3\x02\u0165" +
		"\u0167\x07a\x02\x02\u0166\u0164\x03\x02\x02\x02\u0166\u0165\x03\x02\x02" +
		"\x02\u0167\u016D\x03\x02\x02\x02\u0168\u016C\x05e3\x02\u0169\u016C\x05" +
		"i5\x02\u016A\u016C\x07a\x02\x02\u016B\u0168\x03\x02\x02\x02\u016B\u0169" +
		"\x03\x02\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02" +
		"\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016Ed\x03\x02" +
		"\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0171\t\x07\x02\x02\u0171f" +
		"\x03\x02\x02\x02\u0172\u0173\t\b\x02\x02\u0173h\x03\x02\x02\x02\u0174" +
		"\u0175\t\t\x02\x02\u0175j\x03\x02\x02\x02\u0176\u0177\t\n\x02\x02\u0177" +
		"l\x03\x02\x02\x02\u0178\u017A\t\v\x02\x02\u0179\u0178\x03\x02\x02\x02" +
		"\u017A\u017B\x03\x02\x02\x02\u017B\u0179\x03\x02\x02\x02\u017B\u017C\x03" +
		"\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E\b7\x02\x02\u017E" +
		"n\x03\x02\x02\x02\u017F\u0183\x07\f\x02\x02\u0180\u0181\x07\x0F\x02\x02" +
		"\u0181\u0183\x07\f\x02\x02\u0182\u017F\x03\x02\x02\x02\u0182\u0180\x03" +
		"\x02\x02\x02\u0183\u018E\x03\x02\x02\x02\u0184\u0186\x05m7\x02\u0185\u0184" +
		"\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u018A\x03\x02\x02\x02" +
		"\u0187\u018B\x07\f\x02\x02\u0188\u0189\x07\x0F\x02\x02\u0189\u018B\x07" +
		"\f\x02\x02\u018A\u0187\x03\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018B" +
		"\u018D\x03\x02\x02\x02\u018C\u0185\x03\x02\x02\x02\u018D\u0190\x03\x02" +
		"\x02\x02\u018E\u018C\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F" +
		"\u0191\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0191\u0192\b8\x02" +
		"\x02\u0192p\x03\x02\x02\x02\u0193\u0197\x07%\x02\x02\u0194\u0196\n\f\x02" +
		"\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0195" +
		"\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02" +
		"\u0199\u0197\x03\x02\x02\x02\u019A\u019B\b9\x02\x02\u019Br\x03\x02\x02" +
		"\x02\u019C\u019D\x071\x02\x02\u019D\u019E\x07,\x02\x02\u019E\u01A2\x03" +
		"\x02\x02\x02\u019F\u01A1\v\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1" +
		"\u01A4\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
		"\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A5" +
		"\u01A6\x07,\x02\x02\u01A6\u01A7\x071\x02\x02\u01A7\u01A8\x03\x02\x02\x02" +
		"\u01A8\u01A9\b:\x02\x02\u01A9t\x03\x02\x02\x02\u01AA\u01AB\v\x02\x02\x02" +
		"\u01ABv\x03\x02\x02\x02\x1C\x02\x80\x9A\xA0\xA9\xAE\xB6\xBD\xC3\xC8\xD0" +
		"\xD4\xDE\xE2\xE4\xEF\u0166\u016B\u016D\u017B\u0182\u0185\u018A\u018E\u0197" +
		"\u01A2\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestLangLexer.__ATN) {
			TestLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TestLangLexer._serializedATN));
		}

		return TestLangLexer.__ATN;
	}

}

