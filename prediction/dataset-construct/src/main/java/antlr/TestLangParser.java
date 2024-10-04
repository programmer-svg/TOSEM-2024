// Generated from D:/study/semanticDSL/gen2/untitled/src/main/java/org/example/TestLang.g4 by ANTLR 4.13.1
package antlr;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TestLangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		OPERATOR1=1, OPERATOR2=2, PRIMITIVE_TYPE=3, STRING=4, QUOTE=5, SINGLE_QUOTE=6, 
		FloatLiteral=7, INT_NO_SIGN=8, BOOLEAN=9, RETURN=10, WHILE=11, FOR=12, 
		IF=13, ELIF=14, ELSE=15, CLASS=16, BREAK=17, CONTINUE=18, CALL=19, END_LINE=20, 
		NEW=21, NOT=22, OR=23, AND=24, IN=25, LBRACE=26, RBRACE=27, LPAREN=28, 
		RPAREN=29, COMMA=30, ASSIGN=31, INC=32, DEC=33, AT=34, BITAND=35, DOT=36, 
		COLON_CALL=37, COLON=38, ELLIPSIS=39, LSQUARE=40, RSQUARE=41, TILDE=42, 
		ID=43, WS=44, NL=45, COMMENT=46, COMMENTS=47, ErrorCharacter=48;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_simpleClassDef = 2, RULE_functionDef = 3, 
		RULE_parametersDef = 4, RULE_constDef = 5, RULE_fieldDef = 6, RULE_assignment = 7, 
		RULE_ifStmt = 8, RULE_forStmt = 9, RULE_wihilStmt = 10, RULE_returnStmt = 11, 
		RULE_evaluationStmt = 12, RULE_refStmt = 13, RULE_functionCall = 14, RULE_constCall = 15, 
		RULE_forValueStmt = 16, RULE_newStmt = 17, RULE_block = 18, RULE_parameters = 19, 
		RULE_parameter = 20, RULE_condition = 21, RULE_type = 22, RULE_arrayType = 23, 
		RULE_tupleType = 24, RULE_indexer = 25, RULE_classType = 26, RULE_literal = 27, 
		RULE_integerLiteral = 28, RULE_array = 29, RULE_tuple = 30, RULE_element = 31, 
		RULE_errorLiteral = 32;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "statement", "simpleClassDef", "functionDef", "parametersDef", 
			"constDef", "fieldDef", "assignment", "ifStmt", "forStmt", "wihilStmt", 
			"returnStmt", "evaluationStmt", "refStmt", "functionCall", "constCall", 
			"forValueStmt", "newStmt", "block", "parameters", "parameter", "condition", 
			"type", "arrayType", "tupleType", "indexer", "classType", "literal", 
			"integerLiteral", "array", "tuple", "element", "errorLiteral"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, "'\"'", "'''", null, null, null, "'return'", 
			"'while'", "'for'", "'if'", "'elif'", "'else'", "'class'", "'break'", 
			"'continue'", "'call'", "';'", "'new'", "'not'", "'or'", "'and'", "'in'", 
			"'{'", "'}'", "'('", "')'", "','", "'='", "'++'", "'--'", "'@'", "'&'", 
			"'.'", "'::'", "':'", "'...'", "'['", "']'", "'~'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "OPERATOR1", "OPERATOR2", "PRIMITIVE_TYPE", "STRING", "QUOTE", 
			"SINGLE_QUOTE", "FloatLiteral", "INT_NO_SIGN", "BOOLEAN", "RETURN", "WHILE", 
			"FOR", "IF", "ELIF", "ELSE", "CLASS", "BREAK", "CONTINUE", "CALL", "END_LINE", 
			"NEW", "NOT", "OR", "AND", "IN", "LBRACE", "RBRACE", "LPAREN", "RPAREN", 
			"COMMA", "ASSIGN", "INC", "DEC", "AT", "BITAND", "DOT", "COLON_CALL", 
			"COLON", "ELLIPSIS", "LSQUARE", "RSQUARE", "TILDE", "ID", "WS", "NL", 
			"COMMENT", "COMMENTS", "ErrorCharacter"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "grammar/TestLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TestLangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(TestLangParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitProg(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitProg(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 261198778941340L) != 0)) {
				{
				{
				setState(66);
				statement();
				}
				}
				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(72);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public TerminalNode COMMENTS() { return getToken(TestLangParser.COMMENTS, 0); }
		public TerminalNode COMMENT() { return getToken(TestLangParser.COMMENT, 0); }
		public TerminalNode NL() { return getToken(TestLangParser.NL, 0); }
		public SimpleClassDefContext simpleClassDef() {
			return getRuleContext(SimpleClassDefContext.class,0);
		}
		public FunctionDefContext functionDef() {
			return getRuleContext(FunctionDefContext.class,0);
		}
		public ConstDefContext constDef() {
			return getRuleContext(ConstDefContext.class,0);
		}
		public FieldDefContext fieldDef() {
			return getRuleContext(FieldDefContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public ForStmtContext forStmt() {
			return getRuleContext(ForStmtContext.class,0);
		}
		public WihilStmtContext wihilStmt() {
			return getRuleContext(WihilStmtContext.class,0);
		}
		public ReturnStmtContext returnStmt() {
			return getRuleContext(ReturnStmtContext.class,0);
		}
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(TestLangParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TestLangParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode CONTINUE() { return getToken(TestLangParser.CONTINUE, 0); }
		public TerminalNode BREAK() { return getToken(TestLangParser.BREAK, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			setState(97);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(74);
				match(COMMENTS);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(75);
				match(COMMENT);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(76);
				match(NL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(77);
				simpleClassDef();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(78);
				functionDef();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(79);
				constDef();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(80);
				fieldDef();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(81);
				assignment();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(82);
				ifStmt();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(83);
				forStmt();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(84);
				wihilStmt();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(85);
				returnStmt();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(86);
				evaluationStmt(0);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(87);
				match(LBRACE);
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 261198778941340L) != 0)) {
					{
					{
					setState(88);
					statement();
					}
					}
					setState(93);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(94);
				match(RBRACE);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(95);
				match(CONTINUE);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(96);
				match(BREAK);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SimpleClassDefContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(TestLangParser.CLASS, 0); }
		public ClassTypeContext classType() {
			return getRuleContext(ClassTypeContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(TestLangParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TestLangParser.RBRACE, 0); }
		public TerminalNode END_LINE() { return getToken(TestLangParser.END_LINE, 0); }
		public List<FieldDefContext> fieldDef() {
			return getRuleContexts(FieldDefContext.class);
		}
		public FieldDefContext fieldDef(int i) {
			return getRuleContext(FieldDefContext.class,i);
		}
		public SimpleClassDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_simpleClassDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterSimpleClassDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitSimpleClassDef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitSimpleClassDef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SimpleClassDefContext simpleClassDef() throws RecognitionException {
		SimpleClassDefContext _localctx = new SimpleClassDefContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_simpleClassDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(99);
			match(CLASS);
			setState(100);
			classType();
			setState(101);
			match(LBRACE);
			setState(105);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 10445628899336L) != 0)) {
				{
				{
				setState(102);
				fieldDef();
				}
				}
				setState(107);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(108);
			match(RBRACE);
			setState(109);
			match(END_LINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDefContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public TerminalNode LBRACE() { return getToken(TestLangParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TestLangParser.RBRACE, 0); }
		public TerminalNode END_LINE() { return getToken(TestLangParser.END_LINE, 0); }
		public ParametersDefContext parametersDef() {
			return getRuleContext(ParametersDefContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterFunctionDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitFunctionDef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitFunctionDef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionDefContext functionDef() throws RecognitionException {
		FunctionDefContext _localctx = new FunctionDefContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_functionDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			type();
			setState(112);
			match(ID);
			setState(113);
			match(LPAREN);
			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 10445628899336L) != 0)) {
				{
				setState(114);
				parametersDef();
				}
			}

			setState(117);
			match(RPAREN);
			setState(118);
			match(LBRACE);
			setState(122);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 261198778941340L) != 0)) {
				{
				{
				setState(119);
				statement();
				}
				}
				setState(124);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(125);
			match(RBRACE);
			setState(126);
			match(END_LINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametersDefContext extends ParserRuleContext {
		public List<FieldDefContext> fieldDef() {
			return getRuleContexts(FieldDefContext.class);
		}
		public FieldDefContext fieldDef(int i) {
			return getRuleContext(FieldDefContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TestLangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TestLangParser.COMMA, i);
		}
		public ParametersDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametersDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterParametersDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitParametersDef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitParametersDef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParametersDefContext parametersDef() throws RecognitionException {
		ParametersDefContext _localctx = new ParametersDefContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_parametersDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			fieldDef();
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(129);
				match(COMMA);
				setState(130);
				fieldDef();
				}
				}
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstDefContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(TestLangParser.ASSIGN, 0); }
		public TerminalNode LBRACE() { return getToken(TestLangParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TestLangParser.RBRACE, 0); }
		public TerminalNode END_LINE() { return getToken(TestLangParser.END_LINE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ConstDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterConstDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitConstDef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitConstDef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConstDefContext constDef() throws RecognitionException {
		ConstDefContext _localctx = new ConstDefContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_constDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			type();
			setState(137);
			match(ID);
			setState(138);
			match(ASSIGN);
			setState(139);
			match(LBRACE);
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 261198778941340L) != 0)) {
				{
				{
				setState(140);
				statement();
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			match(RBRACE);
			setState(147);
			match(END_LINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FieldDefContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public TerminalNode ASSIGN() { return getToken(TestLangParser.ASSIGN, 0); }
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public FieldDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterFieldDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitFieldDef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitFieldDef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldDefContext fieldDef() throws RecognitionException {
		FieldDefContext _localctx = new FieldDefContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fieldDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			type();
			setState(150);
			match(ID);
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(151);
				match(ASSIGN);
				setState(152);
				evaluationStmt(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends ParserRuleContext {
		public RefStmtContext refStmt() {
			return getRuleContext(RefStmtContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(TestLangParser.ASSIGN, 0); }
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public IndexerContext indexer() {
			return getRuleContext(IndexerContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterAssignment(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitAssignment(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitAssignment(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_assignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			refStmt();
			setState(157);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LSQUARE) {
				{
				setState(156);
				indexer();
				}
			}

			setState(159);
			match(ASSIGN);
			setState(160);
			evaluationStmt(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStmtContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(TestLangParser.IF, 0); }
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public List<TerminalNode> ELIF() { return getTokens(TestLangParser.ELIF); }
		public TerminalNode ELIF(int i) {
			return getToken(TestLangParser.ELIF, i);
		}
		public TerminalNode ELSE() { return getToken(TestLangParser.ELSE, 0); }
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterIfStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitIfStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitIfStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifStmt);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(IF);
			setState(163);
			condition();
			setState(164);
			block();
			setState(171);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(165);
					match(ELIF);
					setState(166);
					condition();
					setState(167);
					block();
					}
					} 
				}
				setState(173);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			setState(176);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
			case 1:
				{
				setState(174);
				match(ELSE);
				setState(175);
				block();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForStmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(TestLangParser.FOR, 0); }
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public TerminalNode IN() { return getToken(TestLangParser.IN, 0); }
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ForStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterForStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitForStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitForStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForStmtContext forStmt() throws RecognitionException {
		ForStmtContext _localctx = new ForStmtContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_forStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(FOR);
			setState(179);
			match(ID);
			setState(180);
			match(IN);
			setState(181);
			evaluationStmt(0);
			setState(182);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WihilStmtContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(TestLangParser.WHILE, 0); }
		public ConditionContext condition() {
			return getRuleContext(ConditionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public WihilStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wihilStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterWihilStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitWihilStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitWihilStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WihilStmtContext wihilStmt() throws RecognitionException {
		WihilStmtContext _localctx = new WihilStmtContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_wihilStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(WHILE);
			setState(185);
			condition();
			setState(186);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ReturnStmtContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(TestLangParser.RETURN, 0); }
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterReturnStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitReturnStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitReturnStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_returnStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(188);
			match(RETURN);
			setState(190);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(189);
				evaluationStmt(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EvaluationStmtContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public List<EvaluationStmtContext> evaluationStmt() {
			return getRuleContexts(EvaluationStmtContext.class);
		}
		public EvaluationStmtContext evaluationStmt(int i) {
			return getRuleContext(EvaluationStmtContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public TerminalNode OPERATOR2() { return getToken(TestLangParser.OPERATOR2, 0); }
		public TerminalNode NOT() { return getToken(TestLangParser.NOT, 0); }
		public TerminalNode INC() { return getToken(TestLangParser.INC, 0); }
		public TerminalNode DEC() { return getToken(TestLangParser.DEC, 0); }
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public ConstCallContext constCall() {
			return getRuleContext(ConstCallContext.class,0);
		}
		public ForValueStmtContext forValueStmt() {
			return getRuleContext(ForValueStmtContext.class,0);
		}
		public NewStmtContext newStmt() {
			return getRuleContext(NewStmtContext.class,0);
		}
		public RefStmtContext refStmt() {
			return getRuleContext(RefStmtContext.class,0);
		}
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public TerminalNode OPERATOR1() { return getToken(TestLangParser.OPERATOR1, 0); }
		public TerminalNode IN() { return getToken(TestLangParser.IN, 0); }
		public TerminalNode AND() { return getToken(TestLangParser.AND, 0); }
		public TerminalNode OR() { return getToken(TestLangParser.OR, 0); }
		public IndexerContext indexer() {
			return getRuleContext(IndexerContext.class,0);
		}
		public EvaluationStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_evaluationStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterEvaluationStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitEvaluationStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitEvaluationStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EvaluationStmtContext evaluationStmt() throws RecognitionException {
		return evaluationStmt(0);
	}

	private EvaluationStmtContext evaluationStmt(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		EvaluationStmtContext _localctx = new EvaluationStmtContext(_ctx, _parentState);
		EvaluationStmtContext _prevctx = _localctx;
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_evaluationStmt, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(193);
				match(LPAREN);
				setState(194);
				evaluationStmt(0);
				setState(195);
				match(RPAREN);
				}
				break;
			case 2:
				{
				setState(197);
				match(OPERATOR2);
				setState(198);
				evaluationStmt(20);
				}
				break;
			case 3:
				{
				setState(199);
				match(NOT);
				setState(200);
				evaluationStmt(15);
				}
				break;
			case 4:
				{
				setState(201);
				match(INC);
				setState(202);
				evaluationStmt(10);
				}
				break;
			case 5:
				{
				setState(203);
				match(DEC);
				setState(204);
				evaluationStmt(9);
				}
				break;
			case 6:
				{
				setState(205);
				functionCall();
				}
				break;
			case 7:
				{
				setState(206);
				match(ID);
				}
				break;
			case 8:
				{
				setState(207);
				constCall();
				}
				break;
			case 9:
				{
				setState(208);
				forValueStmt();
				}
				break;
			case 10:
				{
				setState(209);
				newStmt();
				}
				break;
			case 11:
				{
				setState(210);
				refStmt();
				}
				break;
			case 12:
				{
				setState(211);
				literal();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(241);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(239);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
					case 1:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(214);
						if (!(precpred(_ctx, 19))) throw new FailedPredicateException(this, "precpred(_ctx, 19)");
						setState(215);
						match(OPERATOR1);
						setState(216);
						evaluationStmt(20);
						}
						break;
					case 2:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(217);
						if (!(precpred(_ctx, 18))) throw new FailedPredicateException(this, "precpred(_ctx, 18)");
						setState(218);
						match(OPERATOR2);
						setState(219);
						evaluationStmt(19);
						}
						break;
					case 3:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(220);
						if (!(precpred(_ctx, 17))) throw new FailedPredicateException(this, "precpred(_ctx, 17)");
						setState(221);
						match(NOT);
						setState(222);
						match(IN);
						setState(223);
						evaluationStmt(18);
						}
						break;
					case 4:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(224);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(225);
						match(IN);
						setState(226);
						evaluationStmt(17);
						}
						break;
					case 5:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(227);
						if (!(precpred(_ctx, 14))) throw new FailedPredicateException(this, "precpred(_ctx, 14)");
						setState(228);
						match(AND);
						setState(229);
						evaluationStmt(15);
						}
						break;
					case 6:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(230);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(231);
						match(OR);
						setState(232);
						evaluationStmt(14);
						}
						break;
					case 7:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(233);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(234);
						match(INC);
						}
						break;
					case 8:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(235);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(236);
						match(DEC);
						}
						break;
					case 9:
						{
						_localctx = new EvaluationStmtContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_evaluationStmt);
						setState(237);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(238);
						indexer();
						}
						break;
					}
					} 
				}
				setState(243);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RefStmtContext extends ParserRuleContext {
		public Token id1;
		public Token id2;
		public List<TerminalNode> ID() { return getTokens(TestLangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TestLangParser.ID, i);
		}
		public TerminalNode DOT() { return getToken(TestLangParser.DOT, 0); }
		public TerminalNode AT() { return getToken(TestLangParser.AT, 0); }
		public TerminalNode BITAND() { return getToken(TestLangParser.BITAND, 0); }
		public RefStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_refStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterRefStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitRefStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitRefStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RefStmtContext refStmt() throws RecognitionException {
		RefStmtContext _localctx = new RefStmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_refStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT || _la==BITAND) {
				{
				setState(244);
				_la = _input.LA(1);
				if ( !(_la==AT || _la==BITAND) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(247);
			((RefStmtContext)_localctx).id1 = match(ID);
			setState(250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				setState(248);
				match(DOT);
				setState(249);
				((RefStmtContext)_localctx).id2 = match(ID);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends ParserRuleContext {
		public Token id1;
		public Token id2;
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public List<TerminalNode> ID() { return getTokens(TestLangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TestLangParser.ID, i);
		}
		public TerminalNode CALL() { return getToken(TestLangParser.CALL, 0); }
		public TerminalNode COLON_CALL() { return getToken(TestLangParser.COLON_CALL, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterFunctionCall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitFunctionCall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitFunctionCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CALL) {
				{
				setState(252);
				match(CALL);
				}
			}

			setState(257);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(255);
				((FunctionCallContext)_localctx).id1 = match(ID);
				setState(256);
				match(COLON_CALL);
				}
				break;
			}
			setState(259);
			((FunctionCallContext)_localctx).id2 = match(ID);
			setState(260);
			match(LPAREN);
			setState(262);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 14358350926740L) != 0)) {
				{
				setState(261);
				parameters();
				}
			}

			setState(264);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConstCallContext extends ParserRuleContext {
		public Token id1;
		public Token id2;
		public List<TerminalNode> ID() { return getTokens(TestLangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TestLangParser.ID, i);
		}
		public TerminalNode COLON_CALL() { return getToken(TestLangParser.COLON_CALL, 0); }
		public ConstCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constCall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterConstCall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitConstCall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitConstCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConstCallContext constCall() throws RecognitionException {
		ConstCallContext _localctx = new ConstCallContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_constCall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
			case 1:
				{
				setState(266);
				((ConstCallContext)_localctx).id1 = match(ID);
				setState(267);
				match(COLON_CALL);
				}
				break;
			}
			setState(270);
			((ConstCallContext)_localctx).id2 = match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ForValueStmtContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(TestLangParser.FOR, 0); }
		public TerminalNode ID() { return getToken(TestLangParser.ID, 0); }
		public TerminalNode IN() { return getToken(TestLangParser.IN, 0); }
		public List<EvaluationStmtContext> evaluationStmt() {
			return getRuleContexts(EvaluationStmtContext.class);
		}
		public EvaluationStmtContext evaluationStmt(int i) {
			return getRuleContext(EvaluationStmtContext.class,i);
		}
		public TerminalNode COLON() { return getToken(TestLangParser.COLON, 0); }
		public ForValueStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forValueStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterForValueStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitForValueStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitForValueStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForValueStmtContext forValueStmt() throws RecognitionException {
		ForValueStmtContext _localctx = new ForValueStmtContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_forValueStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			match(FOR);
			setState(273);
			match(ID);
			setState(274);
			match(IN);
			setState(275);
			evaluationStmt(0);
			setState(276);
			match(COLON);
			setState(277);
			evaluationStmt(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NewStmtContext extends ParserRuleContext {
		public TerminalNode NEW() { return getToken(TestLangParser.NEW, 0); }
		public ClassTypeContext classType() {
			return getRuleContext(ClassTypeContext.class,0);
		}
		public NewStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_newStmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterNewStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitNewStmt(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitNewStmt(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NewStmtContext newStmt() throws RecognitionException {
		NewStmtContext _localctx = new NewStmtContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_newStmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(279);
			match(NEW);
			setState(280);
			classType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(TestLangParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(TestLangParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_block);
		int _la;
		try {
			setState(291);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(282);
				match(LBRACE);
				setState(286);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 261198778941340L) != 0)) {
					{
					{
					setState(283);
					statement();
					}
					}
					setState(288);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(289);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(290);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametersContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TestLangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TestLangParser.COMMA, i);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitParameters(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitParameters(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(293);
			parameter();
			setState(298);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(294);
				match(COMMA);
				setState(295);
				parameter();
				}
				}
				setState(300);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterContext extends ParserRuleContext {
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitParameter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_parameter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(301);
			evaluationStmt(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConditionContext extends ParserRuleContext {
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterCondition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitCondition(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitCondition(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_condition);
		try {
			setState(308);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(303);
				evaluationStmt(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(304);
				match(LPAREN);
				setState(305);
				evaluationStmt(0);
				setState(306);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TypeContext extends ParserRuleContext {
		public TerminalNode PRIMITIVE_TYPE() { return getToken(TestLangParser.PRIMITIVE_TYPE, 0); }
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public TupleTypeContext tupleType() {
			return getRuleContext(TupleTypeContext.class,0);
		}
		public ClassTypeContext classType() {
			return getRuleContext(ClassTypeContext.class,0);
		}
		public TerminalNode ELLIPSIS() { return getToken(TestLangParser.ELLIPSIS, 0); }
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_type);
		try {
			setState(315);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PRIMITIVE_TYPE:
				enterOuterAlt(_localctx, 1);
				{
				setState(310);
				match(PRIMITIVE_TYPE);
				}
				break;
			case LSQUARE:
				enterOuterAlt(_localctx, 2);
				{
				setState(311);
				arrayType();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(312);
				tupleType();
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 4);
				{
				setState(313);
				classType();
				}
				break;
			case ELLIPSIS:
				enterOuterAlt(_localctx, 5);
				{
				setState(314);
				match(ELLIPSIS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayTypeContext extends ParserRuleContext {
		public TerminalNode LSQUARE() { return getToken(TestLangParser.LSQUARE, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode RSQUARE() { return getToken(TestLangParser.RSQUARE, 0); }
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterArrayType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitArrayType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitArrayType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_arrayType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			match(LSQUARE);
			setState(318);
			type();
			setState(319);
			match(RSQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleTypeContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(TestLangParser.COMMA, 0); }
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public TupleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterTupleType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitTupleType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitTupleType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleTypeContext tupleType() throws RecognitionException {
		TupleTypeContext _localctx = new TupleTypeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_tupleType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(321);
			match(LPAREN);
			setState(322);
			type();
			setState(323);
			match(COMMA);
			setState(324);
			type();
			setState(325);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IndexerContext extends ParserRuleContext {
		public List<TerminalNode> LSQUARE() { return getTokens(TestLangParser.LSQUARE); }
		public TerminalNode LSQUARE(int i) {
			return getToken(TestLangParser.LSQUARE, i);
		}
		public List<EvaluationStmtContext> evaluationStmt() {
			return getRuleContexts(EvaluationStmtContext.class);
		}
		public EvaluationStmtContext evaluationStmt(int i) {
			return getRuleContext(EvaluationStmtContext.class,i);
		}
		public List<TerminalNode> RSQUARE() { return getTokens(TestLangParser.RSQUARE); }
		public TerminalNode RSQUARE(int i) {
			return getToken(TestLangParser.RSQUARE, i);
		}
		public IndexerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterIndexer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitIndexer(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitIndexer(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IndexerContext indexer() throws RecognitionException {
		IndexerContext _localctx = new IndexerContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_indexer);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(331); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(327);
					match(LSQUARE);
					setState(328);
					evaluationStmt(0);
					setState(329);
					match(RSQUARE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(333); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ClassTypeContext extends ParserRuleContext {
		public Token id1;
		public Token id2;
		public List<TerminalNode> ID() { return getTokens(TestLangParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(TestLangParser.ID, i);
		}
		public TerminalNode COLON_CALL() { return getToken(TestLangParser.COLON_CALL, 0); }
		public ClassTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterClassType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitClassType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitClassType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassTypeContext classType() throws RecognitionException {
		ClassTypeContext _localctx = new ClassTypeContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_classType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(337);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(335);
				((ClassTypeContext)_localctx).id1 = match(ID);
				setState(336);
				match(COLON_CALL);
				}
				break;
			}
			setState(339);
			((ClassTypeContext)_localctx).id2 = match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(TestLangParser.STRING, 0); }
		public TerminalNode FloatLiteral() { return getToken(TestLangParser.FloatLiteral, 0); }
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public ErrorLiteralContext errorLiteral() {
			return getRuleContext(ErrorLiteralContext.class,0);
		}
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public TerminalNode BOOLEAN() { return getToken(TestLangParser.BOOLEAN, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_literal);
		try {
			setState(348);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				enterOuterAlt(_localctx, 1);
				{
				setState(341);
				match(STRING);
				}
				break;
			case FloatLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(342);
				match(FloatLiteral);
				}
				break;
			case OPERATOR2:
			case INT_NO_SIGN:
				enterOuterAlt(_localctx, 3);
				{
				setState(343);
				integerLiteral();
				}
				break;
			case TILDE:
				enterOuterAlt(_localctx, 4);
				{
				setState(344);
				errorLiteral();
				}
				break;
			case LSQUARE:
				enterOuterAlt(_localctx, 5);
				{
				setState(345);
				array();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 6);
				{
				setState(346);
				tuple();
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 7);
				{
				setState(347);
				match(BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IntegerLiteralContext extends ParserRuleContext {
		public TerminalNode INT_NO_SIGN() { return getToken(TestLangParser.INT_NO_SIGN, 0); }
		public TerminalNode OPERATOR2() { return getToken(TestLangParser.OPERATOR2, 0); }
		public IntegerLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_integerLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterIntegerLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitIntegerLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitIntegerLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IntegerLiteralContext integerLiteral() throws RecognitionException {
		IntegerLiteralContext _localctx = new IntegerLiteralContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_integerLiteral);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(351);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OPERATOR2) {
				{
				setState(350);
				match(OPERATOR2);
				}
			}

			setState(353);
			match(INT_NO_SIGN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode LSQUARE() { return getToken(TestLangParser.LSQUARE, 0); }
		public TerminalNode RSQUARE() { return getToken(TestLangParser.RSQUARE, 0); }
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(TestLangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(TestLangParser.COMMA, i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterArray(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitArray(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitArray(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(355);
			match(LSQUARE);
			setState(364);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 14358350926740L) != 0)) {
				{
				setState(356);
				element();
				setState(361);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(357);
					match(COMMA);
					setState(358);
					element();
					}
					}
					setState(363);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(366);
			match(RSQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TupleContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(TestLangParser.LPAREN, 0); }
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public TerminalNode COMMA() { return getToken(TestLangParser.COMMA, 0); }
		public TerminalNode RPAREN() { return getToken(TestLangParser.RPAREN, 0); }
		public TupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuple; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterTuple(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitTuple(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitTuple(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TupleContext tuple() throws RecognitionException {
		TupleContext _localctx = new TupleContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_tuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(368);
			match(LPAREN);
			setState(369);
			element();
			setState(370);
			match(COMMA);
			setState(371);
			element();
			setState(372);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementContext extends ParserRuleContext {
		public EvaluationStmtContext evaluationStmt() {
			return getRuleContext(EvaluationStmtContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitElement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitElement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_element);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			evaluationStmt(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ErrorLiteralContext extends ParserRuleContext {
		public TerminalNode TILDE() { return getToken(TestLangParser.TILDE, 0); }
		public IntegerLiteralContext integerLiteral() {
			return getRuleContext(IntegerLiteralContext.class,0);
		}
		public ErrorLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_errorLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).enterErrorLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof TestLangListener ) ((TestLangListener)listener).exitErrorLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof TestLangVisitor ) return ((TestLangVisitor<? extends T>)visitor).visitErrorLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ErrorLiteralContext errorLiteral() throws RecognitionException {
		ErrorLiteralContext _localctx = new ErrorLiteralContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_errorLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(376);
			match(TILDE);
			setState(377);
			integerLiteral();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 12:
			return evaluationStmt_sempred((EvaluationStmtContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean evaluationStmt_sempred(EvaluationStmtContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 19);
		case 1:
			return precpred(_ctx, 18);
		case 2:
			return precpred(_ctx, 17);
		case 3:
			return precpred(_ctx, 16);
		case 4:
			return precpred(_ctx, 14);
		case 5:
			return precpred(_ctx, 13);
		case 6:
			return precpred(_ctx, 12);
		case 7:
			return precpred(_ctx, 11);
		case 8:
			return precpred(_ctx, 8);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u00010\u017c\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0001\u0000\u0005\u0000D\b\u0000"+
		"\n\u0000\f\u0000G\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u0001Z\b\u0001\n\u0001\f\u0001]\t\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001b\b\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002h\b\u0002\n\u0002\f\u0002k\t\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003t\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0005\u0003y\b\u0003\n\u0003\f\u0003|\t\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0005\u0004\u0084\b\u0004"+
		"\n\u0004\f\u0004\u0087\t\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0005\u0005\u008e\b\u0005\n\u0005\f\u0005\u0091\t\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0003\u0006\u009a\b\u0006\u0001\u0007\u0001\u0007\u0003\u0007"+
		"\u009e\b\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\b\u00aa\b\b\n\b\f\b\u00ad\t\b"+
		"\u0001\b\u0001\b\u0003\b\u00b1\b\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0003"+
		"\u000b\u00bf\b\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0003\f\u00d5\b\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0005\f\u00f0\b\f\n\f\f\f\u00f3\t\f"+
		"\u0001\r\u0003\r\u00f6\b\r\u0001\r\u0001\r\u0001\r\u0003\r\u00fb\b\r\u0001"+
		"\u000e\u0003\u000e\u00fe\b\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u0102"+
		"\b\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0003\u000e\u0107\b\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0003\u000f\u010d\b\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0005\u0012\u011d\b\u0012\n\u0012\f\u0012\u0120"+
		"\t\u0012\u0001\u0012\u0001\u0012\u0003\u0012\u0124\b\u0012\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0005\u0013\u0129\b\u0013\n\u0013\f\u0013\u012c"+
		"\t\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0001"+
		"\u0015\u0001\u0015\u0003\u0015\u0135\b\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u013c\b\u0016\u0001\u0017\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001"+
		"\u0018\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u0019\u0001"+
		"\u0019\u0004\u0019\u014c\b\u0019\u000b\u0019\f\u0019\u014d\u0001\u001a"+
		"\u0001\u001a\u0003\u001a\u0152\b\u001a\u0001\u001a\u0001\u001a\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b\u0001\u001b"+
		"\u0003\u001b\u015d\b\u001b\u0001\u001c\u0003\u001c\u0160\b\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0001\u001d\u0005"+
		"\u001d\u0168\b\u001d\n\u001d\f\u001d\u016b\t\u001d\u0003\u001d\u016d\b"+
		"\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0001\u001e\u0001\u001e\u0001\u001f\u0001\u001f\u0001 \u0001 \u0001"+
		" \u0001 \u0000\u0001\u0018!\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0000\u0001"+
		"\u0001\u0000\"#\u01a2\u0000E\u0001\u0000\u0000\u0000\u0002a\u0001\u0000"+
		"\u0000\u0000\u0004c\u0001\u0000\u0000\u0000\u0006o\u0001\u0000\u0000\u0000"+
		"\b\u0080\u0001\u0000\u0000\u0000\n\u0088\u0001\u0000\u0000\u0000\f\u0095"+
		"\u0001\u0000\u0000\u0000\u000e\u009b\u0001\u0000\u0000\u0000\u0010\u00a2"+
		"\u0001\u0000\u0000\u0000\u0012\u00b2\u0001\u0000\u0000\u0000\u0014\u00b8"+
		"\u0001\u0000\u0000\u0000\u0016\u00bc\u0001\u0000\u0000\u0000\u0018\u00d4"+
		"\u0001\u0000\u0000\u0000\u001a\u00f5\u0001\u0000\u0000\u0000\u001c\u00fd"+
		"\u0001\u0000\u0000\u0000\u001e\u010c\u0001\u0000\u0000\u0000 \u0110\u0001"+
		"\u0000\u0000\u0000\"\u0117\u0001\u0000\u0000\u0000$\u0123\u0001\u0000"+
		"\u0000\u0000&\u0125\u0001\u0000\u0000\u0000(\u012d\u0001\u0000\u0000\u0000"+
		"*\u0134\u0001\u0000\u0000\u0000,\u013b\u0001\u0000\u0000\u0000.\u013d"+
		"\u0001\u0000\u0000\u00000\u0141\u0001\u0000\u0000\u00002\u014b\u0001\u0000"+
		"\u0000\u00004\u0151\u0001\u0000\u0000\u00006\u015c\u0001\u0000\u0000\u0000"+
		"8\u015f\u0001\u0000\u0000\u0000:\u0163\u0001\u0000\u0000\u0000<\u0170"+
		"\u0001\u0000\u0000\u0000>\u0176\u0001\u0000\u0000\u0000@\u0178\u0001\u0000"+
		"\u0000\u0000BD\u0003\u0002\u0001\u0000CB\u0001\u0000\u0000\u0000DG\u0001"+
		"\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000"+
		"FH\u0001\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000HI\u0005\u0000\u0000"+
		"\u0001I\u0001\u0001\u0000\u0000\u0000Jb\u0005/\u0000\u0000Kb\u0005.\u0000"+
		"\u0000Lb\u0005-\u0000\u0000Mb\u0003\u0004\u0002\u0000Nb\u0003\u0006\u0003"+
		"\u0000Ob\u0003\n\u0005\u0000Pb\u0003\f\u0006\u0000Qb\u0003\u000e\u0007"+
		"\u0000Rb\u0003\u0010\b\u0000Sb\u0003\u0012\t\u0000Tb\u0003\u0014\n\u0000"+
		"Ub\u0003\u0016\u000b\u0000Vb\u0003\u0018\f\u0000W[\u0005\u001a\u0000\u0000"+
		"XZ\u0003\u0002\u0001\u0000YX\u0001\u0000\u0000\u0000Z]\u0001\u0000\u0000"+
		"\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\^\u0001\u0000"+
		"\u0000\u0000][\u0001\u0000\u0000\u0000^b\u0005\u001b\u0000\u0000_b\u0005"+
		"\u0012\u0000\u0000`b\u0005\u0011\u0000\u0000aJ\u0001\u0000\u0000\u0000"+
		"aK\u0001\u0000\u0000\u0000aL\u0001\u0000\u0000\u0000aM\u0001\u0000\u0000"+
		"\u0000aN\u0001\u0000\u0000\u0000aO\u0001\u0000\u0000\u0000aP\u0001\u0000"+
		"\u0000\u0000aQ\u0001\u0000\u0000\u0000aR\u0001\u0000\u0000\u0000aS\u0001"+
		"\u0000\u0000\u0000aT\u0001\u0000\u0000\u0000aU\u0001\u0000\u0000\u0000"+
		"aV\u0001\u0000\u0000\u0000aW\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000"+
		"\u0000a`\u0001\u0000\u0000\u0000b\u0003\u0001\u0000\u0000\u0000cd\u0005"+
		"\u0010\u0000\u0000de\u00034\u001a\u0000ei\u0005\u001a\u0000\u0000fh\u0003"+
		"\f\u0006\u0000gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000ig\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000\u0000"+
		"ki\u0001\u0000\u0000\u0000lm\u0005\u001b\u0000\u0000mn\u0005\u0014\u0000"+
		"\u0000n\u0005\u0001\u0000\u0000\u0000op\u0003,\u0016\u0000pq\u0005+\u0000"+
		"\u0000qs\u0005\u001c\u0000\u0000rt\u0003\b\u0004\u0000sr\u0001\u0000\u0000"+
		"\u0000st\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000uv\u0005\u001d"+
		"\u0000\u0000vz\u0005\u001a\u0000\u0000wy\u0003\u0002\u0001\u0000xw\u0001"+
		"\u0000\u0000\u0000y|\u0001\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000"+
		"z{\u0001\u0000\u0000\u0000{}\u0001\u0000\u0000\u0000|z\u0001\u0000\u0000"+
		"\u0000}~\u0005\u001b\u0000\u0000~\u007f\u0005\u0014\u0000\u0000\u007f"+
		"\u0007\u0001\u0000\u0000\u0000\u0080\u0085\u0003\f\u0006\u0000\u0081\u0082"+
		"\u0005\u001e\u0000\u0000\u0082\u0084\u0003\f\u0006\u0000\u0083\u0081\u0001"+
		"\u0000\u0000\u0000\u0084\u0087\u0001\u0000\u0000\u0000\u0085\u0083\u0001"+
		"\u0000\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\t\u0001\u0000"+
		"\u0000\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0088\u0089\u0003,\u0016"+
		"\u0000\u0089\u008a\u0005+\u0000\u0000\u008a\u008b\u0005\u001f\u0000\u0000"+
		"\u008b\u008f\u0005\u001a\u0000\u0000\u008c\u008e\u0003\u0002\u0001\u0000"+
		"\u008d\u008c\u0001\u0000\u0000\u0000\u008e\u0091\u0001\u0000\u0000\u0000"+
		"\u008f\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000"+
		"\u0090\u0092\u0001\u0000\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000"+
		"\u0092\u0093\u0005\u001b\u0000\u0000\u0093\u0094\u0005\u0014\u0000\u0000"+
		"\u0094\u000b\u0001\u0000\u0000\u0000\u0095\u0096\u0003,\u0016\u0000\u0096"+
		"\u0099\u0005+\u0000\u0000\u0097\u0098\u0005\u001f\u0000\u0000\u0098\u009a"+
		"\u0003\u0018\f\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u0099\u009a\u0001"+
		"\u0000\u0000\u0000\u009a\r\u0001\u0000\u0000\u0000\u009b\u009d\u0003\u001a"+
		"\r\u0000\u009c\u009e\u00032\u0019\u0000\u009d\u009c\u0001\u0000\u0000"+
		"\u0000\u009d\u009e\u0001\u0000\u0000\u0000\u009e\u009f\u0001\u0000\u0000"+
		"\u0000\u009f\u00a0\u0005\u001f\u0000\u0000\u00a0\u00a1\u0003\u0018\f\u0000"+
		"\u00a1\u000f\u0001\u0000\u0000\u0000\u00a2\u00a3\u0005\r\u0000\u0000\u00a3"+
		"\u00a4\u0003*\u0015\u0000\u00a4\u00ab\u0003$\u0012\u0000\u00a5\u00a6\u0005"+
		"\u000e\u0000\u0000\u00a6\u00a7\u0003*\u0015\u0000\u00a7\u00a8\u0003$\u0012"+
		"\u0000\u00a8\u00aa\u0001\u0000\u0000\u0000\u00a9\u00a5\u0001\u0000\u0000"+
		"\u0000\u00aa\u00ad\u0001\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000"+
		"\u0000\u00ab\u00ac\u0001\u0000\u0000\u0000\u00ac\u00b0\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ae\u00af\u0005\u000f\u0000"+
		"\u0000\u00af\u00b1\u0003$\u0012\u0000\u00b0\u00ae\u0001\u0000\u0000\u0000"+
		"\u00b0\u00b1\u0001\u0000\u0000\u0000\u00b1\u0011\u0001\u0000\u0000\u0000"+
		"\u00b2\u00b3\u0005\f\u0000\u0000\u00b3\u00b4\u0005+\u0000\u0000\u00b4"+
		"\u00b5\u0005\u0019\u0000\u0000\u00b5\u00b6\u0003\u0018\f\u0000\u00b6\u00b7"+
		"\u0003$\u0012\u0000\u00b7\u0013\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005"+
		"\u000b\u0000\u0000\u00b9\u00ba\u0003*\u0015\u0000\u00ba\u00bb\u0003$\u0012"+
		"\u0000\u00bb\u0015\u0001\u0000\u0000\u0000\u00bc\u00be\u0005\n\u0000\u0000"+
		"\u00bd\u00bf\u0003\u0018\f\u0000\u00be\u00bd\u0001\u0000\u0000\u0000\u00be"+
		"\u00bf\u0001\u0000\u0000\u0000\u00bf\u0017\u0001\u0000\u0000\u0000\u00c0"+
		"\u00c1\u0006\f\uffff\uffff\u0000\u00c1\u00c2\u0005\u001c\u0000\u0000\u00c2"+
		"\u00c3\u0003\u0018\f\u0000\u00c3\u00c4\u0005\u001d\u0000\u0000\u00c4\u00d5"+
		"\u0001\u0000\u0000\u0000\u00c5\u00c6\u0005\u0002\u0000\u0000\u00c6\u00d5"+
		"\u0003\u0018\f\u0014\u00c7\u00c8\u0005\u0016\u0000\u0000\u00c8\u00d5\u0003"+
		"\u0018\f\u000f\u00c9\u00ca\u0005 \u0000\u0000\u00ca\u00d5\u0003\u0018"+
		"\f\n\u00cb\u00cc\u0005!\u0000\u0000\u00cc\u00d5\u0003\u0018\f\t\u00cd"+
		"\u00d5\u0003\u001c\u000e\u0000\u00ce\u00d5\u0005+\u0000\u0000\u00cf\u00d5"+
		"\u0003\u001e\u000f\u0000\u00d0\u00d5\u0003 \u0010\u0000\u00d1\u00d5\u0003"+
		"\"\u0011\u0000\u00d2\u00d5\u0003\u001a\r\u0000\u00d3\u00d5\u00036\u001b"+
		"\u0000\u00d4\u00c0\u0001\u0000\u0000\u0000\u00d4\u00c5\u0001\u0000\u0000"+
		"\u0000\u00d4\u00c7\u0001\u0000\u0000\u0000\u00d4\u00c9\u0001\u0000\u0000"+
		"\u0000\u00d4\u00cb\u0001\u0000\u0000\u0000\u00d4\u00cd\u0001\u0000\u0000"+
		"\u0000\u00d4\u00ce\u0001\u0000\u0000\u0000\u00d4\u00cf\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d0\u0001\u0000\u0000\u0000\u00d4\u00d1\u0001\u0000\u0000"+
		"\u0000\u00d4\u00d2\u0001\u0000\u0000\u0000\u00d4\u00d3\u0001\u0000\u0000"+
		"\u0000\u00d5\u00f1\u0001\u0000\u0000\u0000\u00d6\u00d7\n\u0013\u0000\u0000"+
		"\u00d7\u00d8\u0005\u0001\u0000\u0000\u00d8\u00f0\u0003\u0018\f\u0014\u00d9"+
		"\u00da\n\u0012\u0000\u0000\u00da\u00db\u0005\u0002\u0000\u0000\u00db\u00f0"+
		"\u0003\u0018\f\u0013\u00dc\u00dd\n\u0011\u0000\u0000\u00dd\u00de\u0005"+
		"\u0016\u0000\u0000\u00de\u00df\u0005\u0019\u0000\u0000\u00df\u00f0\u0003"+
		"\u0018\f\u0012\u00e0\u00e1\n\u0010\u0000\u0000\u00e1\u00e2\u0005\u0019"+
		"\u0000\u0000\u00e2\u00f0\u0003\u0018\f\u0011\u00e3\u00e4\n\u000e\u0000"+
		"\u0000\u00e4\u00e5\u0005\u0018\u0000\u0000\u00e5\u00f0\u0003\u0018\f\u000f"+
		"\u00e6\u00e7\n\r\u0000\u0000\u00e7\u00e8\u0005\u0017\u0000\u0000\u00e8"+
		"\u00f0\u0003\u0018\f\u000e\u00e9\u00ea\n\f\u0000\u0000\u00ea\u00f0\u0005"+
		" \u0000\u0000\u00eb\u00ec\n\u000b\u0000\u0000\u00ec\u00f0\u0005!\u0000"+
		"\u0000\u00ed\u00ee\n\b\u0000\u0000\u00ee\u00f0\u00032\u0019\u0000\u00ef"+
		"\u00d6\u0001\u0000\u0000\u0000\u00ef\u00d9\u0001\u0000\u0000\u0000\u00ef"+
		"\u00dc\u0001\u0000\u0000\u0000\u00ef\u00e0\u0001\u0000\u0000\u0000\u00ef"+
		"\u00e3\u0001\u0000\u0000\u0000\u00ef\u00e6\u0001\u0000\u0000\u0000\u00ef"+
		"\u00e9\u0001\u0000\u0000\u0000\u00ef\u00eb\u0001\u0000\u0000\u0000\u00ef"+
		"\u00ed\u0001\u0000\u0000\u0000\u00f0\u00f3\u0001\u0000\u0000\u0000\u00f1"+
		"\u00ef\u0001\u0000\u0000\u0000\u00f1\u00f2\u0001\u0000\u0000\u0000\u00f2"+
		"\u0019\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000\u0000\u0000\u00f4"+
		"\u00f6\u0007\u0000\u0000\u0000\u00f5\u00f4\u0001\u0000\u0000\u0000\u00f5"+
		"\u00f6\u0001\u0000\u0000\u0000\u00f6\u00f7\u0001\u0000\u0000\u0000\u00f7"+
		"\u00fa\u0005+\u0000\u0000\u00f8\u00f9\u0005$\u0000\u0000\u00f9\u00fb\u0005"+
		"+\u0000\u0000\u00fa\u00f8\u0001\u0000\u0000\u0000\u00fa\u00fb\u0001\u0000"+
		"\u0000\u0000\u00fb\u001b\u0001\u0000\u0000\u0000\u00fc\u00fe\u0005\u0013"+
		"\u0000\u0000\u00fd\u00fc\u0001\u0000\u0000\u0000\u00fd\u00fe\u0001\u0000"+
		"\u0000\u0000\u00fe\u0101\u0001\u0000\u0000\u0000\u00ff\u0100\u0005+\u0000"+
		"\u0000\u0100\u0102\u0005%\u0000\u0000\u0101\u00ff\u0001\u0000\u0000\u0000"+
		"\u0101\u0102\u0001\u0000\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000"+
		"\u0103\u0104\u0005+\u0000\u0000\u0104\u0106\u0005\u001c\u0000\u0000\u0105"+
		"\u0107\u0003&\u0013\u0000\u0106\u0105\u0001\u0000\u0000\u0000\u0106\u0107"+
		"\u0001\u0000\u0000\u0000\u0107\u0108\u0001\u0000\u0000\u0000\u0108\u0109"+
		"\u0005\u001d\u0000\u0000\u0109\u001d\u0001\u0000\u0000\u0000\u010a\u010b"+
		"\u0005+\u0000\u0000\u010b\u010d\u0005%\u0000\u0000\u010c\u010a\u0001\u0000"+
		"\u0000\u0000\u010c\u010d\u0001\u0000\u0000\u0000\u010d\u010e\u0001\u0000"+
		"\u0000\u0000\u010e\u010f\u0005+\u0000\u0000\u010f\u001f\u0001\u0000\u0000"+
		"\u0000\u0110\u0111\u0005\f\u0000\u0000\u0111\u0112\u0005+\u0000\u0000"+
		"\u0112\u0113\u0005\u0019\u0000\u0000\u0113\u0114\u0003\u0018\f\u0000\u0114"+
		"\u0115\u0005&\u0000\u0000\u0115\u0116\u0003\u0018\f\u0000\u0116!\u0001"+
		"\u0000\u0000\u0000\u0117\u0118\u0005\u0015\u0000\u0000\u0118\u0119\u0003"+
		"4\u001a\u0000\u0119#\u0001\u0000\u0000\u0000\u011a\u011e\u0005\u001a\u0000"+
		"\u0000\u011b\u011d\u0003\u0002\u0001\u0000\u011c\u011b\u0001\u0000\u0000"+
		"\u0000\u011d\u0120\u0001\u0000\u0000\u0000\u011e\u011c\u0001\u0000\u0000"+
		"\u0000\u011e\u011f\u0001\u0000\u0000\u0000\u011f\u0121\u0001\u0000\u0000"+
		"\u0000\u0120\u011e\u0001\u0000\u0000\u0000\u0121\u0124\u0005\u001b\u0000"+
		"\u0000\u0122\u0124\u0003\u0002\u0001\u0000\u0123\u011a\u0001\u0000\u0000"+
		"\u0000\u0123\u0122\u0001\u0000\u0000\u0000\u0124%\u0001\u0000\u0000\u0000"+
		"\u0125\u012a\u0003(\u0014\u0000\u0126\u0127\u0005\u001e\u0000\u0000\u0127"+
		"\u0129\u0003(\u0014\u0000\u0128\u0126\u0001\u0000\u0000\u0000\u0129\u012c"+
		"\u0001\u0000\u0000\u0000\u012a\u0128\u0001\u0000\u0000\u0000\u012a\u012b"+
		"\u0001\u0000\u0000\u0000\u012b\'\u0001\u0000\u0000\u0000\u012c\u012a\u0001"+
		"\u0000\u0000\u0000\u012d\u012e\u0003\u0018\f\u0000\u012e)\u0001\u0000"+
		"\u0000\u0000\u012f\u0135\u0003\u0018\f\u0000\u0130\u0131\u0005\u001c\u0000"+
		"\u0000\u0131\u0132\u0003\u0018\f\u0000\u0132\u0133\u0005\u001d\u0000\u0000"+
		"\u0133\u0135\u0001\u0000\u0000\u0000\u0134\u012f\u0001\u0000\u0000\u0000"+
		"\u0134\u0130\u0001\u0000\u0000\u0000\u0135+\u0001\u0000\u0000\u0000\u0136"+
		"\u013c\u0005\u0003\u0000\u0000\u0137\u013c\u0003.\u0017\u0000\u0138\u013c"+
		"\u00030\u0018\u0000\u0139\u013c\u00034\u001a\u0000\u013a\u013c\u0005\'"+
		"\u0000\u0000\u013b\u0136\u0001\u0000\u0000\u0000\u013b\u0137\u0001\u0000"+
		"\u0000\u0000\u013b\u0138\u0001\u0000\u0000\u0000\u013b\u0139\u0001\u0000"+
		"\u0000\u0000\u013b\u013a\u0001\u0000\u0000\u0000\u013c-\u0001\u0000\u0000"+
		"\u0000\u013d\u013e\u0005(\u0000\u0000\u013e\u013f\u0003,\u0016\u0000\u013f"+
		"\u0140\u0005)\u0000\u0000\u0140/\u0001\u0000\u0000\u0000\u0141\u0142\u0005"+
		"\u001c\u0000\u0000\u0142\u0143\u0003,\u0016\u0000\u0143\u0144\u0005\u001e"+
		"\u0000\u0000\u0144\u0145\u0003,\u0016\u0000\u0145\u0146\u0005\u001d\u0000"+
		"\u0000\u01461\u0001\u0000\u0000\u0000\u0147\u0148\u0005(\u0000\u0000\u0148"+
		"\u0149\u0003\u0018\f\u0000\u0149\u014a\u0005)\u0000\u0000\u014a\u014c"+
		"\u0001\u0000\u0000\u0000\u014b\u0147\u0001\u0000\u0000\u0000\u014c\u014d"+
		"\u0001\u0000\u0000\u0000\u014d\u014b\u0001\u0000\u0000\u0000\u014d\u014e"+
		"\u0001\u0000\u0000\u0000\u014e3\u0001\u0000\u0000\u0000\u014f\u0150\u0005"+
		"+\u0000\u0000\u0150\u0152\u0005%\u0000\u0000\u0151\u014f\u0001\u0000\u0000"+
		"\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152\u0153\u0001\u0000\u0000"+
		"\u0000\u0153\u0154\u0005+\u0000\u0000\u01545\u0001\u0000\u0000\u0000\u0155"+
		"\u015d\u0005\u0004\u0000\u0000\u0156\u015d\u0005\u0007\u0000\u0000\u0157"+
		"\u015d\u00038\u001c\u0000\u0158\u015d\u0003@ \u0000\u0159\u015d\u0003"+
		":\u001d\u0000\u015a\u015d\u0003<\u001e\u0000\u015b\u015d\u0005\t\u0000"+
		"\u0000\u015c\u0155\u0001\u0000\u0000\u0000\u015c\u0156\u0001\u0000\u0000"+
		"\u0000\u015c\u0157\u0001\u0000\u0000\u0000\u015c\u0158\u0001\u0000\u0000"+
		"\u0000\u015c\u0159\u0001\u0000\u0000\u0000\u015c\u015a\u0001\u0000\u0000"+
		"\u0000\u015c\u015b\u0001\u0000\u0000\u0000\u015d7\u0001\u0000\u0000\u0000"+
		"\u015e\u0160\u0005\u0002\u0000\u0000\u015f\u015e\u0001\u0000\u0000\u0000"+
		"\u015f\u0160\u0001\u0000\u0000\u0000\u0160\u0161\u0001\u0000\u0000\u0000"+
		"\u0161\u0162\u0005\b\u0000\u0000\u01629\u0001\u0000\u0000\u0000\u0163"+
		"\u016c\u0005(\u0000\u0000\u0164\u0169\u0003>\u001f\u0000\u0165\u0166\u0005"+
		"\u001e\u0000\u0000\u0166\u0168\u0003>\u001f\u0000\u0167\u0165\u0001\u0000"+
		"\u0000\u0000\u0168\u016b\u0001\u0000\u0000\u0000\u0169\u0167\u0001\u0000"+
		"\u0000\u0000\u0169\u016a\u0001\u0000\u0000\u0000\u016a\u016d\u0001\u0000"+
		"\u0000\u0000\u016b\u0169\u0001\u0000\u0000\u0000\u016c\u0164\u0001\u0000"+
		"\u0000\u0000\u016c\u016d\u0001\u0000\u0000\u0000\u016d\u016e\u0001\u0000"+
		"\u0000\u0000\u016e\u016f\u0005)\u0000\u0000\u016f;\u0001\u0000\u0000\u0000"+
		"\u0170\u0171\u0005\u001c\u0000\u0000\u0171\u0172\u0003>\u001f\u0000\u0172"+
		"\u0173\u0005\u001e\u0000\u0000\u0173\u0174\u0003>\u001f\u0000\u0174\u0175"+
		"\u0005\u001d\u0000\u0000\u0175=\u0001\u0000\u0000\u0000\u0176\u0177\u0003"+
		"\u0018\f\u0000\u0177?\u0001\u0000\u0000\u0000\u0178\u0179\u0005*\u0000"+
		"\u0000\u0179\u017a\u00038\u001c\u0000\u017aA\u0001\u0000\u0000\u0000!"+
		"E[aisz\u0085\u008f\u0099\u009d\u00ab\u00b0\u00be\u00d4\u00ef\u00f1\u00f5"+
		"\u00fa\u00fd\u0101\u0106\u010c\u011e\u0123\u012a\u0134\u013b\u014d\u0151"+
		"\u015c\u015f\u0169\u016c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}