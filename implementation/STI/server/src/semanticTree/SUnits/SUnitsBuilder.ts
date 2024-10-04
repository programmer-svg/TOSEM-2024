import {AbstractParseTreeVisitor, ParseTree, TerminalNode} from "antlr4ts/tree";
import {TestLangVisitor} from "../../parser/TestLangVisitor";
import { Position, SUnit } from './SUnit';

import {
	AssignmentContext,
	BlockContext,
	ConditionContext,
	ConstDefContext,
	ElementContext,
	EvaluationStmtContext,
	FieldDefContext,
	ForStmtContext,
	ForValueStmtContext,
	FunctionCallContext,
	FunctionDefContext,
	IfStmtContext,
	LiteralContext,
	NewStmtContext,
	ParameterContext,
	ParametersDefContext,
	ParametersContext,
	ProgContext,
	RefStmtContext,
	ReturnStmtContext,
	SimpleClassDefContext,
	StatementContext,
	TupleContext,
	TypeContext,
	WihilStmtContext,
	ArrayContext
} from "../../parser/TestLangParser";
import {ReferenceKind, Type, TypeKind} from "../symbol/types";
import {FundamentalType} from "../symbol/FundamentalType";
import { Token } from 'antlr4ts';
import {
	SArray,
	SAssignment,
	SBOOLEAN,
	SBlock,
	SCondition,
	SConstCall,
	SConstDef,
	SElement,
	SErrorLiteral,
	SEvaluationStmt,
	SFieldDef,
	SFloatLiteral,
	SForStmt,
	SForValueStmt,
	SFunctionCall,
	SFunctionDef,
	SID,
	SIfStmt,
	SIndexer,
	SLiteral,
	SNewStmt,
	SOPERATOR1,
	SOPERATOR2,
	SParameter,
	SParameters,
	SParametersDef,
	SProg,
	SRefStmt,
	SReturnStmt,
	SSimpleClassDef,
	SStatement,
	SString,
	STuple,
	SWihilStmt,
	SIntegerLiteral
} from './Sunits';
import * as auto from './autoGenSUnits';
export default class SUnitsBuilder extends AbstractParseTreeVisitor<SUnit> implements TestLangVisitor<SUnit>{
	protected defaultResult(): SUnit {
			return new SUnit();
	}

	private id = 0;
	newSID():number{
		return this.id++;
	}

	token2Pos(token:Token):Position;
	token2Pos(token:Token|undefined):Position|undefined;

	token2Pos(token:Token|undefined):Position|undefined{
		if(!token) return undefined;

		let length = 0;
		if(token.text) length = token.text.length;
		return {
			line:token.line,
			charPositionInLine:token.charPositionInLine,
			length:length
		};
	}

	getType(ctx: TypeContext): Type{
        let type : Type;
        const at = ctx.arrayType();
        const pt = ctx.PRIMITIVE_TYPE();
        const tt = ctx.tupleType();
        const ct = ctx.classType();
        const text = ctx.text;
        if (pt){
            const typeName = pt.text;
            let typeKind : TypeKind;
            switch (typeName) {
                case 'int' : typeKind = TypeKind.Integer; break;
                case 'float' : typeKind = TypeKind.Float; break;
                case 'string' : typeKind = TypeKind.String; break;
                case 'bool' : typeKind = TypeKind.Boolean; break;
                case 'void' : typeKind = TypeKind.Void; break;
                default : typeKind = TypeKind.Unknown;
            }
            type = new FundamentalType(typeName,typeKind, ReferenceKind.Instance,this.newSID()
			,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
            return type;
        }
        else if (at){
			type = new FundamentalType(text,TypeKind.Array, ReferenceKind.Instance,this.newSID()
			,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
            type.inner.push(this.getType(at.type()));
            return type;
        }
        else if (tt){
            const ts = tt.type();
			type = new FundamentalType(text,TypeKind.Tuple, ReferenceKind.Instance,this.newSID()
			,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
            type.inner.push(this.getType(ts[0]));
            type.inner.push(this.getType(ts[1]));
            return type;
        }
        else if(ct){// if (ct)
			type = new FundamentalType(text,TypeKind.Class, ReferenceKind.Instance,this.newSID()
			,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
            return type;
        }else{
			type = new FundamentalType(text,TypeKind.Error, ReferenceKind.Instance,this.newSID()
			,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
            return type;
		}
    }

	/**
	 * TODO ['int'] == [ 'int' ] type相同但name不同,所以判定name相同时需要将空格都删掉
	 * @param type1 
	 * @param type2 
	 * @returns 
	 */
	equalType(type1:Type,type2:Type){
			if(type1.kind !== type2.kind || type1.name !== type2.name) return false;
			if(type1.inner.length !== type2.inner.length) return false;
			for(let i = 0;i<type1.inner.length;i++){
					if(!this.equalType(type1.inner[i],type2.inner[i])) return false;
			}
			return true;
	}

	visitProg = (ctx: ProgContext) => {
		const s = new SProg(this.newSID(),ctx._start,ctx._stop);
		s.statement = [];
		for(const c of ctx.statement()){
			s.statement.push(this.visit(c));
		}
		return s;
	};
	
	visitStatement =(ctx: StatementContext)=>{
		const s = new SStatement(this.newSID(),ctx._start,ctx._stop);
		const scd = ctx.simpleClassDef();
		if(scd){
			s.simpleClassDef = this.visit(scd) as SSimpleClassDef;
		}

		const fd = ctx.functionDef();
		if(fd){
			s.functionDef = this.visit(fd) as SFunctionDef;
		}

		const cd = ctx.constDef();
		if(cd){
			s.constDef = this.visit(cd) as SConstDef;
		}

		const fieldd = ctx.fieldDef();
		if(fieldd){
			s.fieldDef = this.visit(fieldd) as SFieldDef;
		}

		const ass = ctx.assignment();
		if(ass){
			s.assignment = this.visit(ass) as SAssignment;
		}

		const ifst = ctx.ifStmt();
		if(ifst){
			s.ifStmt = this.visit(ifst) as SIfStmt;
		} 

		const forv = ctx.forStmt();
		if(forv){
			s.forStmt = this.visit(forv) as SForStmt;
		}

		const wi = ctx.wihilStmt();
		if(wi){
			s.wihilStmt = this.visit(wi) as SWihilStmt;
		}

		const ret = ctx.returnStmt();
		if(ret){
			s.returnStmt = this.visit(ret) as SReturnStmt;
		}

		const eva = ctx.evaluationStmt();
		if(eva){
			s.evaluationStmt = this.visit(eva) as SEvaluationStmt;
		}

		const sts = ctx.statement();
		if(sts){
			s.statement = [];
			for(const st of sts){
				s.statement.push(this.visit(st) as SStatement);
			}
		}

		const ct = ctx.CONTINUE();
		if(ct){
			s.continue = new auto.CONTINUE(this.newSID(),ct.symbol,ct.symbol);
		}

		const br = ctx.BREAK();
		if(br){
			s.break = new auto.BREAK(this.newSID(),br.symbol,br.symbol);
		}
		return s;
	};

	visitSimpleClassDef = (ctx: SimpleClassDefContext) => {
        const ct = ctx.classType();
		const type = new FundamentalType(ct.text,TypeKind.Class, ReferenceKind.Instance,this.newSID()
		,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
		const s = new SSimpleClassDef(this.newSID(),ctx._start,ctx._stop);
		const cla = new auto.CLASS(this.newSID(),ctx.CLASS()._symbol,ctx.CLASS()._symbol);
		s.fieldDef = [];
		s.classType = type;
		s.ID = [];
		for(const id of ctx.classType().ID()){
			s.ID.push(new SID(this.newSID(),id.symbol,undefined,id.text));
		}
		return s;
    };

	visitFunctionDef = (ctx: FunctionDefContext) => {
		const type = this.getType(ctx.type());
		const s = new SFunctionDef(this.newSID(),ctx._start,ctx._stop);
		s.type = type;
		const id = ctx.ID();
		s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		s.ID.parent = s;
		const pds = ctx.parametersDef();
		if(pds){
			s.parametersDef = this.visit(pds) as SParametersDef;
		}

		s.statement = [];
		const sts = ctx.statement();
		for(const st of sts){
			s.statement.push(this.visit(st) as SStatement);
		}
		return s;
    };

	visitParametersDef = (ctx: ParametersDefContext) => {
		const s = new SParametersDef(this.newSID(),ctx._start,ctx._stop);
		s.fieldDef = [];
		for(const fd of ctx.fieldDef()){
			s.fieldDef.push(this.visit(fd) as SFieldDef);
		}
		return s;
	};

	visitConstDef = (ctx: ConstDefContext) => {
		const s = new SConstDef(this.newSID(),ctx._start,ctx._stop);
		const type = this.getType(ctx.type());
		s.text = ctx.ID().text;
		s.type = type;
		s.statement = [];
		const id = ctx.ID();
		s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		s.ID.parent = s;
		for(const st of ctx.statement()){
			s.statement.push(this.visit(st));
		}
		return s;
	};

	visitFieldDef = (ctx: FieldDefContext) => {
		const s = new SFieldDef(this.newSID(),ctx._start,ctx._stop);
		const eva = ctx.evaluationStmt();
		
		const id = ctx.ID();
		
		s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		s.ID.parent = s;
		// s.text = ctx.ID().text;
		if(eva){
			s.evaluationStmt = this.visit(eva);
			s.evaluationStmt.text = eva.text;
		}

		const type = this.getType(ctx.type());
		s.type = type;
		return s;
	};

	visitAssignment= (ctx: AssignmentContext) => {
		const s = new SAssignment(this.newSID(),ctx._start,ctx._stop);
		s.refStmt = this.visit(ctx.refStmt()) as SRefStmt;

		const ind = ctx.indexer();
		if(ind) s.indexer = this.visit(ind) as SIndexer;

		s.evaluationStmt = this.visit(ctx.evaluationStmt());
		return s;
	};

	visitIfStmt= (ctx: IfStmtContext) => {
		const s = new SIfStmt(this.newSID(),ctx._start,ctx._stop);
		s.condition = [];
		s.block = [];
		for(const cond of ctx.condition()){
			s.condition.push(this.visit(cond) as SCondition);
		}

		for(const blo of ctx.block()){
			s.block.push(this.visit(blo) as SBlock);
		}
		return s;
	};
	
	visitForStmt= (ctx: ForStmtContext) => {
		const s = new SForStmt(this.newSID(),ctx._start,ctx._stop);
		s.evaluationStmt = this.visit(ctx.evaluationStmt());
		s.block = this.visit(ctx.block()) as SBlock;
		s.text = ctx.ID().text;
		const id = ctx.ID();
		s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		return s;
	};

	visitWihilStmt= (ctx: WihilStmtContext) => {
		const s = new SWihilStmt(this.newSID(),ctx._start,ctx._stop);
		s.condition = this.visit(ctx.condition()) as SCondition;
		s.block = this.visit(ctx.block()) as SBlock;
		return s;
	};

	visitReturnStmt= (ctx: ReturnStmtContext) => {
		const s = new SReturnStmt(this.newSID(),ctx._start,ctx._stop);
		const eva = ctx.evaluationStmt();
		if(eva){
			s.evaluationStmt = this.visit(eva);
		}
		return s;
	};

	visitEvaluationStmt= (ctx: EvaluationStmtContext) => {
		const s = new SEvaluationStmt(this.newSID(),ctx._start,ctx._stop);
		const lp = ctx.LPAREN();
		const evas = ctx.evaluationStmt();
		s.evaluationStmt = [];
		if(evas && evas.length > 0){
			for(const eva of evas){
				s.evaluationStmt.push(this.visit(eva));
			}
		}
		if(lp){
			s.lparen = new auto.LPAREN(this.newSID(),lp.symbol,undefined);
		}

		const op1 = ctx.OPERATOR1();
		if(op1){
			s.operator1 = new SOPERATOR1(this.newSID(),op1.symbol,undefined,op1.text);
		}

		const op2 = ctx.OPERATOR2();
		if(op2){
			s.operator2 = new SOPERATOR2(this.newSID(),op2.symbol,undefined,op2.text);
		}

		const not = ctx.NOT();
		if(not){
			s.not = new auto.NOT(this.newSID(),not.symbol,undefined);
		}

		const inn = ctx.IN();
		if(inn){
			s.in = new auto.IN(this.newSID(),inn.symbol,undefined);
		}

		const and = ctx.AND();
		if(and){
			s.and = new auto.AND(this.newSID(),and.symbol,undefined);
		}

		const or = ctx.OR();
		if(or){
			s.or = new auto.OR(this.newSID(),or.symbol,undefined);
		}

		const inc = ctx.INC();
		if(inc){
			s.inc = new auto.INC(this.newSID(),inc.symbol,undefined);
		}

		const dec = ctx.DEC();
		if(dec){
			s.dec = new auto.DEC(this.newSID(),dec.symbol,undefined);
		}

		const ind = ctx.indexer();
		if(ind){
			s.indexer = this.visit(ind) as SIndexer;
		}

		const fc = ctx.functionCall();
		if(fc){
			s.functionCall = this.visit(fc) as SFunctionCall;
		}

		const id = ctx.ID();
		if(id){
			s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		}

		const cc = ctx.constCall();
		if(cc){
			s.cosntCall = this.visit(cc) as SConstCall;
		}

		const fv = ctx.forValueStmt();
		if(fv){
			s.forValueStmt = this.visit(fv) as SForValueStmt;
		}

		const ns = ctx.newStmt();
		if(ns){
			s.newStmt = this.visit(ns) as SNewStmt;
		}
		
		const rs = ctx.refStmt();
		if(rs){
			s.refStmt = this.visit(rs) as SRefStmt;
		}

		const lit = ctx.literal();
		if(lit){
			s.literal = this.visit(lit) as SLiteral;
		}
		return s;

	};

	visitRefStmt= (ctx: RefStmtContext) => {
		const s = new SRefStmt(this.newSID(),ctx._start,ctx._stop);
		const at = ctx.AT();
		if(at) s.AT = new auto.AT(this.newSID(),at.symbol,undefined);

		const bitand = ctx.BITAND();
		if(bitand) s.AT = new auto.AT(this.newSID(),bitand.symbol,undefined);

		s.ID = [];
		for(const id of ctx.ID()){
			s.ID.push(new SID(this.newSID(),id.symbol,undefined,id.text));
		}
		return s;
	};

	visitFunctionCall= (ctx: FunctionCallContext) => {
		const s = new SFunctionCall(this.newSID(),ctx._start,ctx._stop);
		s.ID = [];
		for(const id of ctx.ID()){
			s.ID.push(new SID(this.newSID(),id.symbol,undefined,id.text));
		}

		const ps = ctx.parameters();
		if(ps) s.parameters = this.visit(ps) as SParameters;
		return s;
	};

	visitForValueStmt= (ctx: ForValueStmtContext) => {
		const s = new SForValueStmt(this.newSID(),ctx._start,ctx._stop);
		s.evaluationStmt = [];
		for(const es of ctx.evaluationStmt()){
			s.evaluationStmt.push(this.visit(es));
		}
		const id = ctx.ID();
		s.ID = new SID(this.newSID(),id.symbol,undefined,id.text);
		return s;
	};

	visitNewStmt= (ctx: NewStmtContext) => {
		const s = new SNewStmt(this.newSID(),ctx._start,ctx._stop);
		const ct = ctx.classType();
		const type = new FundamentalType(ct.text,TypeKind.Class, ReferenceKind.Instance,this.newSID()
		,this.token2Pos(ctx._start),this.token2Pos(ctx._stop));
		s.classType = type;

		return s;
	};

	visitBlock= (ctx: BlockContext) => {
		const s = new SBlock(this.newSID(),ctx._start,ctx._stop);
		s.statement = [];
		for(const c of ctx.statement()){
			s.statement.push(this.visit(c));
		}
		return s;
	};

	visitParameters= (ctx: ParametersContext) => {
		const s = new SParameters(this.newSID(),ctx._start,ctx._stop);
		s.parameter = [];
		for(const p of ctx.parameter()){
			s.parameter.push(this.visit(p) as SParameter);
		}
		return s;
	};

	visitParameter= (ctx: ParameterContext) => {
		const s = new SParameter(this.newSID(),ctx._start,ctx._stop);
		const eva = ctx.evaluationStmt();
		if(eva){
			s.evaluationStmt = this.visit(eva) as SEvaluationStmt;
		}
		return s;
	};

	visitCondition= (ctx: ConditionContext) => {
		const s = new SCondition(this.newSID(),ctx._start,ctx._stop);
		const eva = ctx.evaluationStmt();
		if(eva){
			s.evaluationStmt = this.visit(eva) as SEvaluationStmt;
		}
		return s;
	};

	visitLiteral= (ctx: LiteralContext) => {
		const s = new SLiteral(this.newSID(),ctx._start,ctx._stop);
		const str = ctx.STRING();
		if(str){
			s.string = new SString(this.newSID(),str.symbol,undefined,str.text);
		}
		
		const fl = ctx.FloatLiteral();
		if(fl){
			s.floatLiteral = new SFloatLiteral(this.newSID(),fl.symbol,undefined,fl.text);
		}

		const il = ctx.integerLiteral();
		if(il){
			s.integerLiteral = new SIntegerLiteral(this.newSID(),il._start,il._stop,il.text);
		}

		const el = ctx.errorLiteral();
		if(el){
			s.errorLiteral = new SErrorLiteral(this.newSID(),el.start,el.stop,el.text);
			s.errorLiteral.text = ctx.errorLiteral()!.integerLiteral().INT_NO_SIGN().text;
		}

		const arr = ctx.array();
		if(arr){
			s.array = this.visit(arr) as SArray;
		}
		
		const tu = ctx.tuple();
		if(tu){
			s.tuple = this.visit(tu) as STuple; 
		}

		const bo = ctx.BOOLEAN();
		if(bo){
			s.boolean = new SBOOLEAN(this.newSID(),bo.symbol,undefined,bo.text); 
		}
		return s;
	};

	visitArray= (ctx: ArrayContext) => {
		const s = new SArray(this.newSID(),ctx._start,ctx._stop);
		const ele = ctx.element();
		if(ele){
			s.element = [];
			for(const e of ele){
				s.element.push(this.visit(e) as SElement);
			}
		}
		return s;
	};

	visitTuple= (ctx: TupleContext) => {
		const s = new STuple(this.newSID(),ctx._start,ctx._stop);
		const ele = ctx.element();
		s.element = [];
		for(const e of ele){
			s.element.push(this.visit(e) as SElement);
		}
		return s;
	};

	visitElement= (ctx: ElementContext) => {
		const s = new SElement(this.newSID(),ctx._start,ctx._stop);
		const eva = ctx.evaluationStmt();
		if(eva){
			s.evaluationStmt = this.visit(eva) as SEvaluationStmt;
		}
		return s;
	};
}
