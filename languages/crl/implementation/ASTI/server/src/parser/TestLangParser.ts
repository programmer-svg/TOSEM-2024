// Generated from .\\server\\src\\grammar\\TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TestLangListener } from "./TestLangListener";
import { TestLangVisitor } from "./TestLangVisitor";


export class TestLangParser extends Parser {
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
	public static readonly RULE_prog = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_simpleClassDef = 2;
	public static readonly RULE_functionDef = 3;
	public static readonly RULE_parametersDef = 4;
	public static readonly RULE_constDef = 5;
	public static readonly RULE_fieldDef = 6;
	public static readonly RULE_assignment = 7;
	public static readonly RULE_ifStmt = 8;
	public static readonly RULE_forStmt = 9;
	public static readonly RULE_wihilStmt = 10;
	public static readonly RULE_returnStmt = 11;
	public static readonly RULE_evaluationStmt = 12;
	public static readonly RULE_refStmt = 13;
	public static readonly RULE_functionCall = 14;
	public static readonly RULE_constCall = 15;
	public static readonly RULE_forValueStmt = 16;
	public static readonly RULE_newStmt = 17;
	public static readonly RULE_block = 18;
	public static readonly RULE_parameters = 19;
	public static readonly RULE_parameter = 20;
	public static readonly RULE_condition = 21;
	public static readonly RULE_type = 22;
	public static readonly RULE_arrayType = 23;
	public static readonly RULE_tupleType = 24;
	public static readonly RULE_indexer = 25;
	public static readonly RULE_classType = 26;
	public static readonly RULE_literal = 27;
	public static readonly RULE_integerLiteral = 28;
	public static readonly RULE_array = 29;
	public static readonly RULE_tuple = 30;
	public static readonly RULE_element = 31;
	public static readonly RULE_errorLiteral = 32;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statement", "simpleClassDef", "functionDef", "parametersDef", 
		"constDef", "fieldDef", "assignment", "ifStmt", "forStmt", "wihilStmt", 
		"returnStmt", "evaluationStmt", "refStmt", "functionCall", "constCall", 
		"forValueStmt", "newStmt", "block", "parameters", "parameter", "condition", 
		"type", "arrayType", "tupleType", "indexer", "classType", "literal", "integerLiteral", 
		"array", "tuple", "element", "errorLiteral",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TestLangParser._LITERAL_NAMES, TestLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TestLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TestLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return TestLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TestLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TestLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TestLangParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.PRIMITIVE_TYPE) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.RETURN) | (1 << TestLangParser.WHILE) | (1 << TestLangParser.FOR) | (1 << TestLangParser.IF) | (1 << TestLangParser.CLASS) | (1 << TestLangParser.BREAK) | (1 << TestLangParser.CONTINUE) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LBRACE) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.ELLIPSIS - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)) | (1 << (TestLangParser.NL - 32)) | (1 << (TestLangParser.COMMENT - 32)) | (1 << (TestLangParser.COMMENTS - 32)))) !== 0)) {
				{
				{
				this.state = 66;
				this.statement();
				}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 72;
			this.match(TestLangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TestLangParser.RULE_statement);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 74;
				this.match(TestLangParser.COMMENTS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 75;
				this.match(TestLangParser.COMMENT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 76;
				this.match(TestLangParser.NL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 77;
				this.simpleClassDef();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 78;
				this.functionDef();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 79;
				this.constDef();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 80;
				this.fieldDef();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 81;
				this.assignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 82;
				this.ifStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 83;
				this.forStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 84;
				this.wihilStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 85;
				this.returnStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 86;
				this.evaluationStmt(0);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 87;
				this.match(TestLangParser.LBRACE);
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.PRIMITIVE_TYPE) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.RETURN) | (1 << TestLangParser.WHILE) | (1 << TestLangParser.FOR) | (1 << TestLangParser.IF) | (1 << TestLangParser.CLASS) | (1 << TestLangParser.BREAK) | (1 << TestLangParser.CONTINUE) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LBRACE) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.ELLIPSIS - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)) | (1 << (TestLangParser.NL - 32)) | (1 << (TestLangParser.COMMENT - 32)) | (1 << (TestLangParser.COMMENTS - 32)))) !== 0)) {
					{
					{
					this.state = 88;
					this.statement();
					}
					}
					this.state = 93;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 94;
				this.match(TestLangParser.RBRACE);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 95;
				this.match(TestLangParser.CONTINUE);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 96;
				this.match(TestLangParser.BREAK);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simpleClassDef(): SimpleClassDefContext {
		let _localctx: SimpleClassDefContext = new SimpleClassDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TestLangParser.RULE_simpleClassDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(TestLangParser.CLASS);
			this.state = 100;
			this.classType();
			this.state = 101;
			this.match(TestLangParser.LBRACE);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TestLangParser.PRIMITIVE_TYPE || _la === TestLangParser.LPAREN || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (TestLangParser.ELLIPSIS - 39)) | (1 << (TestLangParser.LSQUARE - 39)) | (1 << (TestLangParser.ID - 39)))) !== 0)) {
				{
				{
				this.state = 102;
				this.fieldDef();
				}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 108;
			this.match(TestLangParser.RBRACE);
			this.state = 109;
			this.match(TestLangParser.END_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDef(): FunctionDefContext {
		let _localctx: FunctionDefContext = new FunctionDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TestLangParser.RULE_functionDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.type();
			this.state = 112;
			this.match(TestLangParser.ID);
			this.state = 113;
			this.match(TestLangParser.LPAREN);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.PRIMITIVE_TYPE || _la === TestLangParser.LPAREN || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (TestLangParser.ELLIPSIS - 39)) | (1 << (TestLangParser.LSQUARE - 39)) | (1 << (TestLangParser.ID - 39)))) !== 0)) {
				{
				this.state = 114;
				this.parametersDef();
				}
			}

			this.state = 117;
			this.match(TestLangParser.RPAREN);
			this.state = 118;
			this.match(TestLangParser.LBRACE);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.PRIMITIVE_TYPE) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.RETURN) | (1 << TestLangParser.WHILE) | (1 << TestLangParser.FOR) | (1 << TestLangParser.IF) | (1 << TestLangParser.CLASS) | (1 << TestLangParser.BREAK) | (1 << TestLangParser.CONTINUE) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LBRACE) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.ELLIPSIS - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)) | (1 << (TestLangParser.NL - 32)) | (1 << (TestLangParser.COMMENT - 32)) | (1 << (TestLangParser.COMMENTS - 32)))) !== 0)) {
				{
				{
				this.state = 119;
				this.statement();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(TestLangParser.RBRACE);
			this.state = 126;
			this.match(TestLangParser.END_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parametersDef(): ParametersDefContext {
		let _localctx: ParametersDefContext = new ParametersDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TestLangParser.RULE_parametersDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.fieldDef();
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TestLangParser.COMMA) {
				{
				{
				this.state = 129;
				this.match(TestLangParser.COMMA);
				this.state = 130;
				this.fieldDef();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constDef(): ConstDefContext {
		let _localctx: ConstDefContext = new ConstDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TestLangParser.RULE_constDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.type();
			this.state = 137;
			this.match(TestLangParser.ID);
			this.state = 138;
			this.match(TestLangParser.ASSIGN);
			this.state = 139;
			this.match(TestLangParser.LBRACE);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.PRIMITIVE_TYPE) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.RETURN) | (1 << TestLangParser.WHILE) | (1 << TestLangParser.FOR) | (1 << TestLangParser.IF) | (1 << TestLangParser.CLASS) | (1 << TestLangParser.BREAK) | (1 << TestLangParser.CONTINUE) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LBRACE) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.ELLIPSIS - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)) | (1 << (TestLangParser.NL - 32)) | (1 << (TestLangParser.COMMENT - 32)) | (1 << (TestLangParser.COMMENTS - 32)))) !== 0)) {
				{
				{
				this.state = 140;
				this.statement();
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.match(TestLangParser.RBRACE);
			this.state = 147;
			this.match(TestLangParser.END_LINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDef(): FieldDefContext {
		let _localctx: FieldDefContext = new FieldDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TestLangParser.RULE_fieldDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.type();
			this.state = 150;
			this.match(TestLangParser.ID);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.ASSIGN) {
				{
				this.state = 151;
				this.match(TestLangParser.ASSIGN);
				this.state = 152;
				this.evaluationStmt(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TestLangParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.refStmt();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.LSQUARE) {
				{
				this.state = 156;
				this.indexer();
				}
			}

			this.state = 159;
			this.match(TestLangParser.ASSIGN);
			this.state = 160;
			this.evaluationStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TestLangParser.RULE_ifStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(TestLangParser.IF);
			this.state = 163;
			this.condition();
			this.state = 164;
			this.block();
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 165;
					this.match(TestLangParser.ELIF);
					this.state = 166;
					this.condition();
					this.state = 167;
					this.block();
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 174;
				this.match(TestLangParser.ELSE);
				this.state = 175;
				this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let _localctx: ForStmtContext = new ForStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TestLangParser.RULE_forStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(TestLangParser.FOR);
			this.state = 179;
			this.match(TestLangParser.ID);
			this.state = 180;
			this.match(TestLangParser.IN);
			this.state = 181;
			this.evaluationStmt(0);
			this.state = 182;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wihilStmt(): WihilStmtContext {
		let _localctx: WihilStmtContext = new WihilStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TestLangParser.RULE_wihilStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(TestLangParser.WHILE);
			this.state = 185;
			this.condition();
			this.state = 186;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TestLangParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(TestLangParser.RETURN);
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 189;
				this.evaluationStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public evaluationStmt(): EvaluationStmtContext;
	public evaluationStmt(_p: number): EvaluationStmtContext;
	// @RuleVersion(0)
	public evaluationStmt(_p?: number): EvaluationStmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: EvaluationStmtContext = new EvaluationStmtContext(this._ctx, _parentState);
		let _prevctx: EvaluationStmtContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, TestLangParser.RULE_evaluationStmt, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 193;
				this.match(TestLangParser.LPAREN);
				this.state = 194;
				this.evaluationStmt(0);
				this.state = 195;
				this.match(TestLangParser.RPAREN);
				}
				break;

			case 2:
				{
				this.state = 197;
				this.match(TestLangParser.OPERATOR2);
				this.state = 198;
				this.evaluationStmt(20);
				}
				break;

			case 3:
				{
				this.state = 199;
				this.match(TestLangParser.NOT);
				this.state = 200;
				this.evaluationStmt(15);
				}
				break;

			case 4:
				{
				this.state = 201;
				this.match(TestLangParser.INC);
				this.state = 202;
				this.evaluationStmt(10);
				}
				break;

			case 5:
				{
				this.state = 203;
				this.match(TestLangParser.DEC);
				this.state = 204;
				this.evaluationStmt(9);
				}
				break;

			case 6:
				{
				this.state = 205;
				this.functionCall();
				}
				break;

			case 7:
				{
				this.state = 206;
				this.match(TestLangParser.ID);
				}
				break;

			case 8:
				{
				this.state = 207;
				this.constCall();
				}
				break;

			case 9:
				{
				this.state = 208;
				this.forValueStmt();
				}
				break;

			case 10:
				{
				this.state = 209;
				this.newStmt();
				}
				break;

			case 11:
				{
				this.state = 210;
				this.refStmt();
				}
				break;

			case 12:
				{
				this.state = 211;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 239;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 214;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 215;
						this.match(TestLangParser.OPERATOR1);
						this.state = 216;
						this.evaluationStmt(20);
						}
						break;

					case 2:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 217;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 218;
						this.match(TestLangParser.OPERATOR2);
						this.state = 219;
						this.evaluationStmt(19);
						}
						break;

					case 3:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 220;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 221;
						this.match(TestLangParser.NOT);
						this.state = 222;
						this.match(TestLangParser.IN);
						this.state = 223;
						this.evaluationStmt(18);
						}
						break;

					case 4:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 224;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 225;
						this.match(TestLangParser.IN);
						this.state = 226;
						this.evaluationStmt(17);
						}
						break;

					case 5:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 227;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 228;
						this.match(TestLangParser.AND);
						this.state = 229;
						this.evaluationStmt(15);
						}
						break;

					case 6:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 230;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 231;
						this.match(TestLangParser.OR);
						this.state = 232;
						this.evaluationStmt(14);
						}
						break;

					case 7:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 233;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 234;
						this.match(TestLangParser.INC);
						}
						break;

					case 8:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 235;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 236;
						this.match(TestLangParser.DEC);
						}
						break;

					case 9:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_evaluationStmt);
						this.state = 237;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 238;
						this.indexer();
						}
						break;
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refStmt(): RefStmtContext {
		let _localctx: RefStmtContext = new RefStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TestLangParser.RULE_refStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.AT || _la === TestLangParser.BITAND) {
				{
				this.state = 244;
				_la = this._input.LA(1);
				if (!(_la === TestLangParser.AT || _la === TestLangParser.BITAND)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 247;
			_localctx._id1 = this.match(TestLangParser.ID);
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.match(TestLangParser.DOT);
				this.state = 249;
				_localctx._id2 = this.match(TestLangParser.ID);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TestLangParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.CALL) {
				{
				this.state = 252;
				this.match(TestLangParser.CALL);
				}
			}

			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				_localctx._id1 = this.match(TestLangParser.ID);
				this.state = 256;
				this.match(TestLangParser.COLON_CALL);
				}
				break;
			}
			this.state = 259;
			_localctx._id2 = this.match(TestLangParser.ID);
			this.state = 260;
			this.match(TestLangParser.LPAREN);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.FOR) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)))) !== 0)) {
				{
				this.state = 261;
				this.parameters();
				}
			}

			this.state = 264;
			this.match(TestLangParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constCall(): ConstCallContext {
		let _localctx: ConstCallContext = new ConstCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TestLangParser.RULE_constCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 266;
				_localctx._id1 = this.match(TestLangParser.ID);
				this.state = 267;
				this.match(TestLangParser.COLON_CALL);
				}
				break;
			}
			this.state = 270;
			_localctx._id2 = this.match(TestLangParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forValueStmt(): ForValueStmtContext {
		let _localctx: ForValueStmtContext = new ForValueStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TestLangParser.RULE_forValueStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(TestLangParser.FOR);
			this.state = 273;
			this.match(TestLangParser.ID);
			this.state = 274;
			this.match(TestLangParser.IN);
			this.state = 275;
			this.evaluationStmt(0);
			this.state = 276;
			this.match(TestLangParser.COLON);
			this.state = 277;
			this.evaluationStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public newStmt(): NewStmtContext {
		let _localctx: NewStmtContext = new NewStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TestLangParser.RULE_newStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(TestLangParser.NEW);
			this.state = 280;
			this.classType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TestLangParser.RULE_block);
		let _la: number;
		try {
			this.state = 291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.match(TestLangParser.LBRACE);
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.PRIMITIVE_TYPE) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.RETURN) | (1 << TestLangParser.WHILE) | (1 << TestLangParser.FOR) | (1 << TestLangParser.IF) | (1 << TestLangParser.CLASS) | (1 << TestLangParser.BREAK) | (1 << TestLangParser.CONTINUE) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LBRACE) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.ELLIPSIS - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)) | (1 << (TestLangParser.NL - 32)) | (1 << (TestLangParser.COMMENT - 32)) | (1 << (TestLangParser.COMMENTS - 32)))) !== 0)) {
					{
					{
					this.state = 283;
					this.statement();
					}
					}
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 289;
				this.match(TestLangParser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 290;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TestLangParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.parameter();
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TestLangParser.COMMA) {
				{
				{
				this.state = 294;
				this.match(TestLangParser.COMMA);
				this.state = 295;
				this.parameter();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TestLangParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.evaluationStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TestLangParser.RULE_condition);
		try {
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this.evaluationStmt(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(TestLangParser.LPAREN);
				this.state = 305;
				this.evaluationStmt(0);
				this.state = 306;
				this.match(TestLangParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TestLangParser.RULE_type);
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.PRIMITIVE_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 310;
				this.match(TestLangParser.PRIMITIVE_TYPE);
				}
				break;
			case TestLangParser.LSQUARE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.arrayType();
				}
				break;
			case TestLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 312;
				this.tupleType();
				}
				break;
			case TestLangParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 313;
				this.classType();
				}
				break;
			case TestLangParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 314;
				this.match(TestLangParser.ELLIPSIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TestLangParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(TestLangParser.LSQUARE);
			this.state = 318;
			this.type();
			this.state = 319;
			this.match(TestLangParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, TestLangParser.RULE_tupleType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 321;
			this.match(TestLangParser.LPAREN);
			this.state = 322;
			this.type();
			this.state = 323;
			this.match(TestLangParser.COMMA);
			this.state = 324;
			this.type();
			this.state = 325;
			this.match(TestLangParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexer(): IndexerContext {
		let _localctx: IndexerContext = new IndexerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, TestLangParser.RULE_indexer);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 327;
					this.match(TestLangParser.LSQUARE);
					this.state = 328;
					this.evaluationStmt(0);
					this.state = 329;
					this.match(TestLangParser.RSQUARE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classType(): ClassTypeContext {
		let _localctx: ClassTypeContext = new ClassTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, TestLangParser.RULE_classType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 335;
				_localctx._id1 = this.match(TestLangParser.ID);
				this.state = 336;
				this.match(TestLangParser.COLON_CALL);
				}
				break;
			}
			this.state = 339;
			_localctx._id2 = this.match(TestLangParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, TestLangParser.RULE_literal);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(TestLangParser.STRING);
				}
				break;
			case TestLangParser.FloatLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.match(TestLangParser.FloatLiteral);
				}
				break;
			case TestLangParser.OPERATOR2:
			case TestLangParser.INT_NO_SIGN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 343;
				this.integerLiteral();
				}
				break;
			case TestLangParser.TILDE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 344;
				this.errorLiteral();
				}
				break;
			case TestLangParser.LSQUARE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 345;
				this.array();
				}
				break;
			case TestLangParser.LPAREN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 346;
				this.tuple();
				}
				break;
			case TestLangParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 347;
				this.match(TestLangParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, TestLangParser.RULE_integerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TestLangParser.OPERATOR2) {
				{
				this.state = 350;
				this.match(TestLangParser.OPERATOR2);
				}
			}

			this.state = 353;
			this.match(TestLangParser.INT_NO_SIGN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, TestLangParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(TestLangParser.LSQUARE);
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.OPERATOR2) | (1 << TestLangParser.STRING) | (1 << TestLangParser.FloatLiteral) | (1 << TestLangParser.INT_NO_SIGN) | (1 << TestLangParser.BOOLEAN) | (1 << TestLangParser.FOR) | (1 << TestLangParser.CALL) | (1 << TestLangParser.NEW) | (1 << TestLangParser.NOT) | (1 << TestLangParser.LPAREN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TestLangParser.INC - 32)) | (1 << (TestLangParser.DEC - 32)) | (1 << (TestLangParser.AT - 32)) | (1 << (TestLangParser.BITAND - 32)) | (1 << (TestLangParser.LSQUARE - 32)) | (1 << (TestLangParser.TILDE - 32)) | (1 << (TestLangParser.ID - 32)))) !== 0)) {
				{
				this.state = 356;
				this.element();
				this.state = 361;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.COMMA) {
					{
					{
					this.state = 357;
					this.match(TestLangParser.COMMA);
					this.state = 358;
					this.element();
					}
					}
					this.state = 363;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 366;
			this.match(TestLangParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, TestLangParser.RULE_tuple);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(TestLangParser.LPAREN);
			this.state = 369;
			this.element();
			this.state = 370;
			this.match(TestLangParser.COMMA);
			this.state = 371;
			this.element();
			this.state = 372;
			this.match(TestLangParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, TestLangParser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.evaluationStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorLiteral(): ErrorLiteralContext {
		let _localctx: ErrorLiteralContext = new ErrorLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, TestLangParser.RULE_errorLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(TestLangParser.TILDE);
			this.state = 377;
			this.integerLiteral();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.evaluationStmt_sempred(_localctx as EvaluationStmtContext, predIndex);
		}
		return true;
	}
	private evaluationStmt_sempred(_localctx: EvaluationStmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 19);

		case 1:
			return this.precpred(this._ctx, 18);

		case 2:
			return this.precpred(this._ctx, 17);

		case 3:
			return this.precpred(this._ctx, 16);

		case 4:
			return this.precpred(this._ctx, 14);

		case 5:
			return this.precpred(this._ctx, 13);

		case 6:
			return this.precpred(this._ctx, 12);

		case 7:
			return this.precpred(this._ctx, 11);

		case 8:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u017E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03\x02" +
		"\x07\x02F\n\x02\f\x02\x0E\x02I\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03\\\n\x03\f\x03\x0E\x03_\v\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03d\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04j\n\x04\f\x04\x0E\x04m\v\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05v\n\x05\x03\x05\x03\x05\x03\x05\x07\x05{\n\x05" +
		"\f\x05\x0E\x05~\v\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x07\x06\x86\n\x06\f\x06\x0E\x06\x89\v\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07\x90\n\x07\f\x07\x0E\x07\x93\v\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\b\x9C\n\b\x03\t\x03\t\x05\t\xA0\n" +
		"\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xAC" +
		"\n\n\f\n\x0E\n\xAF\v\n\x03\n\x03\n\x05\n\xB3\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\xC1\n\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\xD7\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xF2\n\x0E\f\x0E\x0E\x0E\xF5\v\x0E\x03\x0F\x05\x0F" +
		"\xF8\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xFD\n\x0F\x03\x10\x05\x10\u0100" +
		"\n\x10\x03\x10\x03\x10\x05\x10\u0104\n\x10\x03\x10\x03\x10\x03\x10\x05" +
		"\x10\u0109\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x05\x11\u010F\n\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u011F\n\x14\f\x14\x0E\x14" +
		"\u0122\v\x14\x03\x14\x03\x14\x05\x14\u0126\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x07\x15\u012B\n\x15\f\x15\x0E\x15\u012E\v\x15\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0137\n\x17\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u013E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x06\x1B\u014E\n\x1B\r\x1B\x0E\x1B\u014F\x03\x1C\x03\x1C\x05\x1C" +
		"\u0154\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u015F\n\x1D\x03\x1E\x05\x1E\u0162\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u016A\n\x1F\f\x1F\x0E\x1F" +
		"\u016D\v\x1F\x05\x1F\u016F\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03!\x03!\x03\"\x03\"\x03\"\x03\"\x02\x02\x03\x1A#\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02\x02\x03\x03\x02" +
		"$%\x02\u01A4\x02G\x03\x02\x02\x02\x04c\x03\x02\x02\x02\x06e\x03\x02\x02" +
		"\x02\bq\x03\x02\x02\x02\n\x82\x03\x02\x02\x02\f\x8A\x03\x02\x02\x02\x0E" +
		"\x97\x03\x02\x02\x02\x10\x9D\x03\x02\x02\x02\x12\xA4\x03\x02\x02\x02\x14" +
		"\xB4\x03\x02\x02\x02\x16\xBA\x03\x02\x02\x02\x18\xBE\x03\x02\x02\x02\x1A" +
		"\xD6\x03\x02\x02\x02\x1C\xF7\x03\x02\x02\x02\x1E\xFF\x03\x02\x02\x02 " +
		"\u010E\x03\x02\x02\x02\"\u0112\x03\x02\x02\x02$\u0119\x03\x02\x02\x02" +
		"&\u0125\x03\x02\x02\x02(\u0127\x03\x02\x02\x02*\u012F\x03\x02\x02\x02" +
		",\u0136\x03\x02\x02\x02.\u013D\x03\x02\x02\x020\u013F\x03\x02\x02\x02" +
		"2\u0143\x03\x02\x02\x024\u014D\x03\x02\x02\x026\u0153\x03\x02\x02\x02" +
		"8\u015E\x03\x02\x02\x02:\u0161\x03\x02\x02\x02<\u0165\x03\x02\x02\x02" +
		">\u0172\x03\x02\x02\x02@\u0178\x03\x02\x02\x02B\u017A\x03\x02\x02\x02" +
		"DF\x05\x04\x03\x02ED\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02" +
		"GH\x03\x02\x02\x02HJ\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07\x02\x02\x03" +
		"K\x03\x03\x02\x02\x02Ld\x071\x02\x02Md\x070\x02\x02Nd\x07/\x02\x02Od\x05" +
		"\x06\x04\x02Pd\x05\b\x05\x02Qd\x05\f\x07\x02Rd\x05\x0E\b\x02Sd\x05\x10" +
		"\t\x02Td\x05\x12\n\x02Ud\x05\x14\v\x02Vd\x05\x16\f\x02Wd\x05\x18\r\x02" +
		"Xd\x05\x1A\x0E\x02Y]\x07\x1C\x02\x02Z\\\x05\x04\x03\x02[Z\x03\x02\x02" +
		"\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^`\x03\x02" +
		"\x02\x02_]\x03\x02\x02\x02`d\x07\x1D\x02\x02ad\x07\x14\x02\x02bd\x07\x13" +
		"\x02\x02cL\x03\x02\x02\x02cM\x03\x02\x02\x02cN\x03\x02\x02\x02cO\x03\x02" +
		"\x02\x02cP\x03\x02\x02\x02cQ\x03\x02\x02\x02cR\x03\x02\x02\x02cS\x03\x02" +
		"\x02\x02cT\x03\x02\x02\x02cU\x03\x02\x02\x02cV\x03\x02\x02\x02cW\x03\x02" +
		"\x02\x02cX\x03\x02\x02\x02cY\x03\x02\x02\x02ca\x03\x02\x02\x02cb\x03\x02" +
		"\x02\x02d\x05\x03\x02\x02\x02ef\x07\x12\x02\x02fg\x056\x1C\x02gk\x07\x1C" +
		"\x02\x02hj\x05\x0E\b\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02" +
		"\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mk\x03\x02\x02\x02no\x07\x1D" +
		"\x02\x02op\x07\x16\x02\x02p\x07\x03\x02\x02\x02qr\x05.\x18\x02rs\x07-" +
		"\x02\x02su\x07\x1E\x02\x02tv\x05\n\x06\x02ut\x03\x02\x02\x02uv\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02wx\x07\x1F\x02\x02x|\x07\x1C\x02\x02y{\x05\x04" +
		"\x03\x02zy\x03\x02\x02\x02{~\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02" +
		"\x02\x02}\x7F\x03\x02\x02\x02~|\x03\x02\x02\x02\x7F\x80\x07\x1D\x02\x02" +
		"\x80\x81\x07\x16\x02\x02\x81\t\x03\x02\x02\x02\x82\x87\x05\x0E\b\x02\x83" +
		"\x84\x07 \x02\x02\x84\x86\x05\x0E\b\x02\x85\x83\x03\x02\x02\x02\x86\x89" +
		"\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\v" +
		"\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x05.\x18\x02\x8B\x8C" +
		"\x07-\x02\x02\x8C\x8D\x07!\x02\x02\x8D\x91\x07\x1C\x02\x02\x8E\x90\x05" +
		"\x04\x03\x02\x8F\x8E\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03" +
		"\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x94\x03\x02\x02\x02\x93\x91\x03" +
		"\x02\x02\x02\x94\x95\x07\x1D\x02\x02\x95\x96\x07\x16\x02\x02\x96\r\x03" +
		"\x02\x02\x02\x97\x98\x05.\x18\x02\x98\x9B\x07-\x02\x02\x99\x9A\x07!\x02" +
		"\x02\x9A\x9C\x05\x1A\x0E\x02\x9B\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02" +
		"\x02\x9C\x0F\x03\x02\x02\x02\x9D\x9F\x05\x1C\x0F\x02\x9E\xA0\x054\x1B" +
		"\x02\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1\xA2\x07!\x02\x02\xA2\xA3\x05\x1A\x0E\x02\xA3\x11\x03\x02\x02" +
		"\x02\xA4\xA5\x07\x0F\x02\x02\xA5\xA6\x05,\x17\x02\xA6\xAD\x05&\x14\x02" +
		"\xA7\xA8\x07\x10\x02\x02\xA8\xA9\x05,\x17\x02\xA9\xAA\x05&\x14\x02\xAA" +
		"\xAC\x03\x02\x02\x02\xAB\xA7\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB2\x03\x02\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xB0\xB1\x07\x11\x02\x02\xB1\xB3\x05&\x14\x02\xB2" +
		"\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\x13\x03\x02\x02\x02\xB4" +
		"\xB5\x07\x0E\x02\x02\xB5\xB6\x07-\x02\x02\xB6\xB7\x07\x1B\x02\x02\xB7" +
		"\xB8\x05\x1A\x0E\x02\xB8\xB9\x05&\x14\x02\xB9\x15\x03\x02\x02\x02\xBA" +
		"\xBB\x07\r\x02\x02\xBB\xBC\x05,\x17\x02\xBC\xBD\x05&\x14\x02\xBD\x17\x03" +
		"\x02\x02\x02\xBE\xC0\x07\f\x02\x02\xBF\xC1\x05\x1A\x0E\x02\xC0\xBF\x03" +
		"\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x19\x03\x02\x02\x02\xC2\xC3\b" +
		"\x0E\x01\x02\xC3\xC4\x07\x1E\x02\x02\xC4\xC5\x05\x1A\x0E\x02\xC5\xC6\x07" +
		"\x1F\x02\x02\xC6\xD7\x03\x02\x02\x02\xC7\xC8\x07\x04\x02\x02\xC8\xD7\x05" +
		"\x1A\x0E\x16\xC9\xCA\x07\x18\x02\x02\xCA\xD7\x05\x1A\x0E\x11\xCB\xCC\x07" +
		"\"\x02\x02\xCC\xD7\x05\x1A\x0E\f\xCD\xCE\x07#\x02\x02\xCE\xD7\x05\x1A" +
		"\x0E\v\xCF\xD7\x05\x1E\x10\x02\xD0\xD7\x07-\x02\x02\xD1\xD7\x05 \x11\x02" +
		"\xD2\xD7\x05\"\x12\x02\xD3\xD7\x05$\x13\x02\xD4\xD7\x05\x1C\x0F\x02\xD5" +
		"\xD7\x058\x1D\x02\xD6\xC2\x03\x02\x02\x02\xD6\xC7\x03\x02\x02\x02\xD6" +
		"\xC9\x03\x02\x02\x02\xD6\xCB\x03\x02\x02\x02\xD6\xCD\x03\x02\x02\x02\xD6" +
		"\xCF\x03\x02\x02\x02\xD6\xD0\x03\x02\x02\x02\xD6\xD1\x03\x02\x02\x02\xD6" +
		"\xD2\x03\x02\x02\x02\xD6\xD3\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD6" +
		"\xD5\x03\x02\x02\x02\xD7\xF3\x03\x02\x02\x02\xD8\xD9\f\x15\x02\x02\xD9" +
		"\xDA\x07\x03\x02\x02\xDA\xF2\x05\x1A\x0E\x16\xDB\xDC\f\x14\x02\x02\xDC" +
		"\xDD\x07\x04\x02\x02\xDD\xF2\x05\x1A\x0E\x15\xDE\xDF\f\x13\x02\x02\xDF" +
		"\xE0\x07\x18\x02\x02\xE0\xE1\x07\x1B\x02\x02\xE1\xF2\x05\x1A\x0E\x14\xE2" +
		"\xE3\f\x12\x02\x02\xE3\xE4\x07\x1B\x02\x02\xE4\xF2\x05\x1A\x0E\x13\xE5" +
		"\xE6\f\x10\x02\x02\xE6\xE7\x07\x1A\x02\x02\xE7\xF2\x05\x1A\x0E\x11\xE8" +
		"\xE9\f\x0F\x02\x02\xE9\xEA\x07\x19\x02\x02\xEA\xF2\x05\x1A\x0E\x10\xEB" +
		"\xEC\f\x0E\x02\x02\xEC\xF2\x07\"\x02\x02\xED\xEE\f\r\x02\x02\xEE\xF2\x07" +
		"#\x02\x02\xEF\xF0\f\n\x02\x02\xF0\xF2\x054\x1B\x02\xF1\xD8\x03\x02\x02" +
		"\x02\xF1\xDB\x03\x02\x02\x02\xF1\xDE\x03\x02\x02\x02\xF1\xE2\x03\x02\x02" +
		"\x02\xF1\xE5\x03\x02\x02\x02\xF1\xE8\x03\x02\x02\x02\xF1\xEB\x03\x02\x02" +
		"\x02\xF1\xED\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF5\x03\x02\x02" +
		"\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\x1B\x03\x02\x02" +
		"\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF8\t\x02\x02\x02\xF7\xF6\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFC\x07-\x02" +
		"\x02\xFA\xFB\x07&\x02\x02\xFB\xFD\x07-\x02\x02\xFC\xFA\x03\x02\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\x1D\x03\x02\x02\x02\xFE\u0100\x07\x15\x02" +
		"\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0103\x03" +
		"\x02\x02\x02\u0101\u0102\x07-\x02\x02\u0102\u0104\x07\'\x02\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105\x03\x02" +
		"\x02\x02\u0105\u0106\x07-\x02\x02\u0106\u0108\x07\x1E\x02\x02\u0107\u0109" +
		"\x05(\x15\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02" +
		"\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x07\x1F\x02\x02\u010B\x1F\x03" +
		"\x02\x02\x02\u010C\u010D\x07-\x02\x02\u010D\u010F\x07\'\x02\x02\u010E" +
		"\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x03\x02" +
		"\x02\x02\u0110\u0111\x07-\x02\x02\u0111!\x03\x02\x02\x02\u0112\u0113\x07" +
		"\x0E\x02\x02\u0113\u0114\x07-\x02\x02\u0114\u0115\x07\x1B\x02\x02\u0115" +
		"\u0116\x05\x1A\x0E\x02\u0116\u0117\x07(\x02\x02\u0117\u0118\x05\x1A\x0E" +
		"\x02\u0118#\x03\x02\x02\x02\u0119\u011A\x07\x17\x02\x02\u011A\u011B\x05" +
		"6\x1C\x02\u011B%\x03\x02\x02\x02\u011C\u0120\x07\x1C\x02\x02\u011D\u011F" +
		"\x05\x04\x03\x02\u011E\u011D\x03\x02\x02\x02\u011F\u0122\x03\x02\x02\x02" +
		"\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0123\x03" +
		"\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0126\x07\x1D\x02\x02\u0124" +
		"\u0126\x05\x04\x03\x02\u0125\u011C\x03\x02\x02\x02\u0125\u0124\x03\x02" +
		"\x02\x02\u0126\'\x03\x02\x02\x02\u0127\u012C\x05*\x16\x02\u0128\u0129" +
		"\x07 \x02\x02\u0129\u012B\x05*\x16\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012C\u012D\x03\x02" +
		"\x02\x02\u012D)\x03\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012F\u0130" +
		"\x05\x1A\x0E\x02\u0130+\x03\x02\x02\x02\u0131\u0137\x05\x1A\x0E\x02\u0132" +
		"\u0133\x07\x1E\x02\x02\u0133\u0134\x05\x1A\x0E\x02\u0134\u0135\x07\x1F" +
		"\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0131\x03\x02\x02\x02\u0136" +
		"\u0132\x03\x02\x02\x02\u0137-\x03\x02\x02\x02\u0138\u013E\x07\x05\x02" +
		"\x02\u0139\u013E\x050\x19\x02\u013A\u013E\x052\x1A\x02\u013B\u013E\x05" +
		"6\x1C\x02\u013C\u013E\x07)\x02\x02\u013D\u0138\x03\x02\x02\x02\u013D\u0139" +
		"\x03\x02\x02\x02\u013D\u013A\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02" +
		"\u013D\u013C\x03\x02\x02\x02\u013E/\x03\x02\x02\x02\u013F\u0140\x07*\x02" +
		"\x02\u0140\u0141\x05.\x18\x02\u0141\u0142\x07+\x02\x02\u01421\x03\x02" +
		"\x02\x02\u0143\u0144\x07\x1E\x02\x02\u0144\u0145\x05.\x18\x02\u0145\u0146" +
		"\x07 \x02\x02\u0146\u0147\x05.\x18\x02\u0147\u0148\x07\x1F\x02\x02\u0148" +
		"3\x03\x02\x02\x02\u0149\u014A\x07*\x02\x02\u014A\u014B\x05\x1A\x0E\x02" +
		"\u014B\u014C\x07+\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D\u0149\x03" +
		"\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F" +
		"\u0150\x03\x02\x02\x02\u01505\x03\x02\x02\x02\u0151\u0152\x07-\x02\x02" +
		"\u0152\u0154\x07\'\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x07-\x02\x02\u0156" +
		"7\x03\x02\x02\x02\u0157\u015F\x07\x06\x02\x02\u0158\u015F\x07\t\x02\x02" +
		"\u0159\u015F\x05:\x1E\x02\u015A\u015F\x05B\"\x02\u015B\u015F\x05<\x1F" +
		"\x02\u015C\u015F\x05> \x02\u015D\u015F\x07\v\x02\x02\u015E\u0157\x03\x02" +
		"\x02\x02\u015E\u0158\x03\x02\x02\x02\u015E\u0159\x03\x02\x02\x02\u015E" +
		"\u015A\x03\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015E\u015C\x03\x02" +
		"\x02\x02\u015E\u015D\x03\x02\x02\x02\u015F9\x03\x02\x02\x02\u0160\u0162" +
		"\x07\x04\x02\x02\u0161\u0160\x03\x02\x02\x02\u0161\u0162\x03\x02\x02\x02" +
		"\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x07\n\x02\x02\u0164;\x03\x02" +
		"\x02\x02\u0165\u016E\x07*\x02\x02\u0166\u016B\x05@!\x02\u0167\u0168\x07" +
		" \x02\x02\u0168\u016A\x05@!\x02\u0169\u0167\x03\x02\x02\x02\u016A\u016D" +
		"\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02" +
		"\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016E\u0166\x03" +
		"\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170" +
		"\u0171\x07+\x02\x02\u0171=\x03\x02\x02\x02\u0172\u0173\x07\x1E\x02\x02" +
		"\u0173\u0174\x05@!\x02\u0174\u0175\x07 \x02\x02\u0175\u0176\x05@!\x02" +
		"\u0176\u0177\x07\x1F\x02\x02\u0177?\x03\x02\x02\x02\u0178\u0179\x05\x1A" +
		"\x0E\x02\u0179A\x03\x02\x02\x02\u017A\u017B\x07,\x02\x02\u017B\u017C\x05" +
		":\x1E\x02\u017CC\x03\x02\x02\x02#G]cku|\x87\x91\x9B\x9F\xAD\xB2\xC0\xD6" +
		"\xF1\xF3\xF7\xFC\xFF\u0103\u0108\u010E\u0120\u0125\u012C\u0136\u013D\u014F" +
		"\u0153\u015E\u0161\u016B\u016E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestLangParser.__ATN) {
			TestLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TestLangParser._serializedATN));
		}

		return TestLangParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TestLangParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_prog; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public COMMENTS(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COMMENTS, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COMMENT, 0); }
	public NL(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.NL, 0); }
	public simpleClassDef(): SimpleClassDefContext | undefined {
		return this.tryGetRuleContext(0, SimpleClassDefContext);
	}
	public functionDef(): FunctionDefContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefContext);
	}
	public constDef(): ConstDefContext | undefined {
		return this.tryGetRuleContext(0, ConstDefContext);
	}
	public fieldDef(): FieldDefContext | undefined {
		return this.tryGetRuleContext(0, FieldDefContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public forStmt(): ForStmtContext | undefined {
		return this.tryGetRuleContext(0, ForStmtContext);
	}
	public wihilStmt(): WihilStmtContext | undefined {
		return this.tryGetRuleContext(0, WihilStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public evaluationStmt(): EvaluationStmtContext | undefined {
		return this.tryGetRuleContext(0, EvaluationStmtContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.CONTINUE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BREAK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleClassDefContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(TestLangParser.CLASS, 0); }
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(TestLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(TestLangParser.RBRACE, 0); }
	public END_LINE(): TerminalNode { return this.getToken(TestLangParser.END_LINE, 0); }
	public fieldDef(): FieldDefContext[];
	public fieldDef(i: number): FieldDefContext;
	public fieldDef(i?: number): FieldDefContext | FieldDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDefContext);
		} else {
			return this.getRuleContext(i, FieldDefContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_simpleClassDef; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterSimpleClassDef) {
			listener.enterSimpleClassDef(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitSimpleClassDef) {
			listener.exitSimpleClassDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitSimpleClassDef) {
			return visitor.visitSimpleClassDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(TestLangParser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(TestLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TestLangParser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(TestLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(TestLangParser.RBRACE, 0); }
	public END_LINE(): TerminalNode { return this.getToken(TestLangParser.END_LINE, 0); }
	public parametersDef(): ParametersDefContext | undefined {
		return this.tryGetRuleContext(0, ParametersDefContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_functionDef; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterFunctionDef) {
			listener.enterFunctionDef(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitFunctionDef) {
			listener.exitFunctionDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitFunctionDef) {
			return visitor.visitFunctionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersDefContext extends ParserRuleContext {
	public fieldDef(): FieldDefContext[];
	public fieldDef(i: number): FieldDefContext;
	public fieldDef(i?: number): FieldDefContext | FieldDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDefContext);
		} else {
			return this.getRuleContext(i, FieldDefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_parametersDef; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterParametersDef) {
			listener.enterParametersDef(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitParametersDef) {
			listener.exitParametersDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitParametersDef) {
			return visitor.visitParametersDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(TestLangParser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(TestLangParser.ASSIGN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(TestLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(TestLangParser.RBRACE, 0); }
	public END_LINE(): TerminalNode { return this.getToken(TestLangParser.END_LINE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_constDef; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterConstDef) {
			listener.enterConstDef(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitConstDef) {
			listener.exitConstDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitConstDef) {
			return visitor.visitConstDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDefContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ID(): TerminalNode { return this.getToken(TestLangParser.ID, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.ASSIGN, 0); }
	public evaluationStmt(): EvaluationStmtContext | undefined {
		return this.tryGetRuleContext(0, EvaluationStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_fieldDef; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterFieldDef) {
			listener.enterFieldDef(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitFieldDef) {
			listener.exitFieldDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitFieldDef) {
			return visitor.visitFieldDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public refStmt(): RefStmtContext {
		return this.getRuleContext(0, RefStmtContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(TestLangParser.ASSIGN, 0); }
	public evaluationStmt(): EvaluationStmtContext {
		return this.getRuleContext(0, EvaluationStmtContext);
	}
	public indexer(): IndexerContext | undefined {
		return this.tryGetRuleContext(0, IndexerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_assignment; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(TestLangParser.IF, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public ELIF(): TerminalNode[];
	public ELIF(i: number): TerminalNode;
	public ELIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.ELIF);
		} else {
			return this.getToken(TestLangParser.ELIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(TestLangParser.FOR, 0); }
	public ID(): TerminalNode { return this.getToken(TestLangParser.ID, 0); }
	public IN(): TerminalNode { return this.getToken(TestLangParser.IN, 0); }
	public evaluationStmt(): EvaluationStmtContext {
		return this.getRuleContext(0, EvaluationStmtContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_forStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterForStmt) {
			listener.enterForStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitForStmt) {
			listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WihilStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(TestLangParser.WHILE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_wihilStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterWihilStmt) {
			listener.enterWihilStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitWihilStmt) {
			listener.exitWihilStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitWihilStmt) {
			return visitor.visitWihilStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(TestLangParser.RETURN, 0); }
	public evaluationStmt(): EvaluationStmtContext | undefined {
		return this.tryGetRuleContext(0, EvaluationStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EvaluationStmtContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LPAREN, 0); }
	public evaluationStmt(): EvaluationStmtContext[];
	public evaluationStmt(i: number): EvaluationStmtContext;
	public evaluationStmt(i?: number): EvaluationStmtContext | EvaluationStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EvaluationStmtContext);
		} else {
			return this.getRuleContext(i, EvaluationStmtContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.RPAREN, 0); }
	public OPERATOR2(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.OPERATOR2, 0); }
	public OPERATOR1(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.OPERATOR1, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.NOT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.IN, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.OR, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.DEC, 0); }
	public indexer(): IndexerContext | undefined {
		return this.tryGetRuleContext(0, IndexerContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.ID, 0); }
	public constCall(): ConstCallContext | undefined {
		return this.tryGetRuleContext(0, ConstCallContext);
	}
	public forValueStmt(): ForValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ForValueStmtContext);
	}
	public newStmt(): NewStmtContext | undefined {
		return this.tryGetRuleContext(0, NewStmtContext);
	}
	public refStmt(): RefStmtContext | undefined {
		return this.tryGetRuleContext(0, RefStmtContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_evaluationStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterEvaluationStmt) {
			listener.enterEvaluationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitEvaluationStmt) {
			listener.exitEvaluationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitEvaluationStmt) {
			return visitor.visitEvaluationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RefStmtContext extends ParserRuleContext {
	public _id1!: Token;
	public _id2!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.ID);
		} else {
			return this.getToken(TestLangParser.ID, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.DOT, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.AT, 0); }
	public BITAND(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BITAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_refStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterRefStmt) {
			listener.enterRefStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitRefStmt) {
			listener.exitRefStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitRefStmt) {
			return visitor.visitRefStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public _id1!: Token;
	public _id2!: Token;
	public LPAREN(): TerminalNode { return this.getToken(TestLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TestLangParser.RPAREN, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.ID);
		} else {
			return this.getToken(TestLangParser.ID, i);
		}
	}
	public CALL(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.CALL, 0); }
	public COLON_CALL(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COLON_CALL, 0); }
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstCallContext extends ParserRuleContext {
	public _id1!: Token;
	public _id2!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.ID);
		} else {
			return this.getToken(TestLangParser.ID, i);
		}
	}
	public COLON_CALL(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COLON_CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_constCall; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterConstCall) {
			listener.enterConstCall(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitConstCall) {
			listener.exitConstCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitConstCall) {
			return visitor.visitConstCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForValueStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(TestLangParser.FOR, 0); }
	public ID(): TerminalNode { return this.getToken(TestLangParser.ID, 0); }
	public IN(): TerminalNode { return this.getToken(TestLangParser.IN, 0); }
	public evaluationStmt(): EvaluationStmtContext[];
	public evaluationStmt(i: number): EvaluationStmtContext;
	public evaluationStmt(i?: number): EvaluationStmtContext | EvaluationStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EvaluationStmtContext);
		} else {
			return this.getRuleContext(i, EvaluationStmtContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(TestLangParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_forValueStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterForValueStmt) {
			listener.enterForValueStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitForValueStmt) {
			listener.exitForValueStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitForValueStmt) {
			return visitor.visitForValueStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewStmtContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(TestLangParser.NEW, 0); }
	public classType(): ClassTypeContext {
		return this.getRuleContext(0, ClassTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_newStmt; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterNewStmt) {
			listener.enterNewStmt(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitNewStmt) {
			listener.exitNewStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitNewStmt) {
			return visitor.visitNewStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_block; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_parameters; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterParameters) {
			listener.enterParameters(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitParameters) {
			listener.exitParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public evaluationStmt(): EvaluationStmtContext {
		return this.getRuleContext(0, EvaluationStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_parameter; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public evaluationStmt(): EvaluationStmtContext {
		return this.getRuleContext(0, EvaluationStmtContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_condition; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public PRIMITIVE_TYPE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PRIMITIVE_TYPE, 0); }
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public classType(): ClassTypeContext | undefined {
		return this.tryGetRuleContext(0, ClassTypeContext);
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_type; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public LSQUARE(): TerminalNode { return this.getToken(TestLangParser.LSQUARE, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RSQUARE(): TerminalNode { return this.getToken(TestLangParser.RSQUARE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(TestLangParser.LPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(TestLangParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TestLangParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_tupleType; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterTupleType) {
			listener.enterTupleType(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitTupleType) {
			listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexerContext extends ParserRuleContext {
	public LSQUARE(): TerminalNode[];
	public LSQUARE(i: number): TerminalNode;
	public LSQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.LSQUARE);
		} else {
			return this.getToken(TestLangParser.LSQUARE, i);
		}
	}
	public evaluationStmt(): EvaluationStmtContext[];
	public evaluationStmt(i: number): EvaluationStmtContext;
	public evaluationStmt(i?: number): EvaluationStmtContext | EvaluationStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EvaluationStmtContext);
		} else {
			return this.getRuleContext(i, EvaluationStmtContext);
		}
	}
	public RSQUARE(): TerminalNode[];
	public RSQUARE(i: number): TerminalNode;
	public RSQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.RSQUARE);
		} else {
			return this.getToken(TestLangParser.RSQUARE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_indexer; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterIndexer) {
			listener.enterIndexer(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitIndexer) {
			listener.exitIndexer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitIndexer) {
			return visitor.visitIndexer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTypeContext extends ParserRuleContext {
	public _id1!: Token;
	public _id2!: Token;
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.ID);
		} else {
			return this.getToken(TestLangParser.ID, i);
		}
	}
	public COLON_CALL(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COLON_CALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_classType; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterClassType) {
			listener.enterClassType(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitClassType) {
			listener.exitClassType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitClassType) {
			return visitor.visitClassType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.STRING, 0); }
	public FloatLiteral(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.FloatLiteral, 0); }
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public errorLiteral(): ErrorLiteralContext | undefined {
		return this.tryGetRuleContext(0, ErrorLiteralContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BOOLEAN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_literal; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public INT_NO_SIGN(): TerminalNode { return this.getToken(TestLangParser.INT_NO_SIGN, 0); }
	public OPERATOR2(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.OPERATOR2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_integerLiteral; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public LSQUARE(): TerminalNode { return this.getToken(TestLangParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(TestLangParser.RSQUARE, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_array; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(TestLangParser.LPAREN, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(TestLangParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(TestLangParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_tuple; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public evaluationStmt(): EvaluationStmtContext {
		return this.getRuleContext(0, EvaluationStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_element; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorLiteralContext extends ParserRuleContext {
	public TILDE(): TerminalNode { return this.getToken(TestLangParser.TILDE, 0); }
	public integerLiteral(): IntegerLiteralContext {
		return this.getRuleContext(0, IntegerLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_errorLiteral; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterErrorLiteral) {
			listener.enterErrorLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitErrorLiteral) {
			listener.exitErrorLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitErrorLiteral) {
			return visitor.visitErrorLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


