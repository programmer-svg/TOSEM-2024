import {AbstractParseTreeVisitor, ParseTree, TerminalNode} from "antlr4ts/tree";

import {TestLangVisitor} from "../../parser/TestLangVisitor";
import {
    ArrayTypeContext,
    AssignmentContext,
    BlockContext,
    ClassTypeContext,
    ConditionContext,
    ConstCallContext,
    ConstDefContext,
    ElementContext,
    ErrorLiteralContext,
    EvaluationStmtContext,
    FieldDefContext,
    ForStmtContext,
    ForValueStmtContext,
    FunctionCallContext,
    FunctionDefContext,
    IfStmtContext,
    IndexerContext,
    IntegerLiteralContext,
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
    TupleTypeContext,
    TupleContext,
    TypeContext,
    WihilStmtContext,
    ArrayContext
} from "../../parser/TestLangParser";
import {SymbolTable} from "./symbol/SymbolTable";
import {IScopedSymbol, ScopedSymbol} from "./symbol/ScopedSymbol";
import {VariableSymbol} from "./symbol/VariableSymbol";
import {RoutineSymbol} from "./symbol/RoutineSymbol";
import {ReferenceKind, Type, TypeKind} from "./symbol/types";
import {FundamentalType} from "./symbol/FundamentalType";
import { ParserRuleContext, Token } from 'antlr4ts';
import * as info from './Info';
import { TypedSymbol } from './symbol/TypedSymbol';
import { BaseSymbol } from './symbol/BaseSymbol';
import { ParameterSymbol } from './symbol/ParameterSymbol';
import { ClassSymbol } from './symbol/ClassSymbol';
import { computeUri, getFile2, getUri,Global,Scope } from '../utils/files';
import { validateTextDocument } from '../../browserServerMain';

interface info{
    msg:string,
    startLine:number,
    startColumn:number,
    endLine:number,
    endColumn:number,
    length:number
}
export default class diagnosticVisitor extends AbstractParseTreeVisitor<any> implements TestLangVisitor<any>{
    public symbolTable: SymbolTable;
    public name: string;
    public uri: string;
    public type: Scope|undefined = undefined;
    constructor(
        _symbolTable: SymbolTable,
        _name:string,
        _uri:string,
        protected scope = _symbolTable.addNewSymbolOfType(ScopedSymbol, undefined)
    ) {
        super();
        this.symbolTable = _symbolTable;
        this.name = _name;
        this.uri = _uri;
    }
    protected defaultResult(): SymbolTable {
        return this.symbolTable;
    }
    private infoArray: info[] = [];
    private noNameBlockCnt = 0;
    //可能存在function的嵌套？所以需要是list
    private returnType :Type|undefined = undefined;
    private haveReturned = false;

    /**
     * 该函数是对withScope中action函数进行再一次的封装，添加返回值校验相关逻辑
     * @param type 
     * @param ctx 
     * @param action 
     * @param Log 
     * @returns 
     */
    private typeAction(type:Type|undefined,ctx:ParserRuleContext,action:() => void,Log = true): () => void {
        return () => {
            const prev = this.haveReturned;
            const prevReturnType = this.returnType;
            if(type) {
                this.returnType = type;
            }else{
                this.returnType = undefined;
            }
            this.haveReturned = false;
            
            action();

            if(this.returnType && !this.haveReturned && this.returnType.kind !== TypeKind.Void && Log){
                if(ctx._stop) this.push2InfoArray(ctx._stop,ctx._stop,info.noType(this.returnType.name));
                else this.push2InfoArray(ctx._start,ctx._start,info.noType(this.returnType.name));
            }
            this.returnType = prevReturnType;
            this.haveReturned = prev;
        };
    }

    private scope2String(scope:Scope):string{
        if(scope === Scope.GloBal) return 'Global';
        if(scope === Scope.Parameter) return 'Parameter';
        if(scope === Scope.Parts) return 'Parts';
        return 'Statistics';
    }

    private scope2Num(scope:Scope):number{
        if(scope === Scope.GloBal) return 0;
        if(scope === Scope.Parameter) return 1;
        if(scope === Scope.Parts) return 2;
        return 3;
    }

    protected withScope<T>(tree: ParseTree, type: new (...args: any[]) => ScopedSymbol, args: any[], action: () => T): T {
        const scope = this.symbolTable.addNewSymbolOfType(type, this.scope, ...args);
        scope.context = tree;
        this.scope = scope;
        try {
            return action();
        } finally {
            this.scope = scope.parent as ScopedSymbol;
        }
    }

    resolveSync(name:string,localOnly = true,scope:IScopedSymbol|undefined = this.scope){
        const start = new Date();
        const ret = this.resolveSyncInner(name,localOnly,scope);
        const end = new Date();
        this.callTIme += 1;
        this.duration += (end.valueOf() - start.valueOf());
        return ret;
    }
    /**
     * localOnly:define is true, use is false.
     * 对scope.resolveSync进行封装，设置isUsed为true，从而保证使用过的变量被记录，之后通过afterVisit输出
     * @param name 
     * @param localOnly 
     * @param scope 
     * @returns 
     */
    resolveSyncInner(name:string,localOnly = true,scope:IScopedSymbol|undefined = this.scope): BaseSymbol|undefined {
        if(!scope) return undefined;
        let curScope = scope;
        if(localOnly){
            const sym = curScope.resolveSync(name,localOnly);
            if(sym){
                sym.isUsed = true;
                return sym;
            }
            return undefined;
        }

        else{
            // eslint-disable-next-line no-constant-condition
            while(true){
                const sym = curScope.resolveSync(name,localOnly);
                if(sym){
                    sym.isUsed = true;
                    return sym;
                }
                if(!curScope.parent) return undefined;
                curScope = curScope.parent as ScopedSymbol;
            }
        }
    }

    /**
     * localOnly:define is true, use is false.
     * 对scope.resolveSync进行封装，设置isUsed为true，从而保证使用过的变量被记录，之后通过afterVisit输出
     * 该函数返回list
     * @param name 
     * @param localOnly 
     * @param scope 
     * @returns 
     */
    resolveSyncAll(name:string,localOnly = true,scope:IScopedSymbol|undefined = this.scope): BaseSymbol[]|undefined {
        if(!scope) return undefined;
        let curScope = scope;
        if(localOnly){
            const sym = curScope.children.filter((child)=>{
                if(child.name === name) return true;
                return false;
            });
            return sym;
        }

        else{
            const all = [];
            // eslint-disable-next-line no-constant-condition
            while(true){
                const cur = curScope.children.filter((child)=>{
                    if(child.name === name) return true;
                    return false;
                });
                all.push(...cur);
                if(!curScope.parent) return all;
                curScope = curScope.parent as ScopedSymbol;
            }
        }
    }

    getType(ctx: TypeContext): Type | undefined {
        let type : Type;
        if (typeof ctx.PRIMITIVE_TYPE() !== 'undefined'){
            const typeName = ctx.PRIMITIVE_TYPE()?.text;
            let typeKind : TypeKind;
            switch (typeName) {
                case 'int' : typeKind = TypeKind.Integer; break;
                case 'float' : typeKind = TypeKind.Float; break;
                case 'string' : typeKind = TypeKind.String; break;
                case 'bool' : typeKind = TypeKind.Boolean; break;
                case 'void' : typeKind = TypeKind.Void; break;
                default : typeKind = TypeKind.Unknown;
            }
            type = new FundamentalType(typeof typeName === "string" ? typeName : "undefined",typeKind, ReferenceKind.Instance);
            return type;
        }
        else if (typeof ctx.arrayType() !== 'undefined'){
            const typeName = "array" ;//+ ctx.array_type()?.type().PRIMITIVE_TYPE()?.text;
            type = new FundamentalType(typeName,TypeKind.Array, ReferenceKind.Instance);
            return type;
        }
        else if (typeof ctx.tupleType() !== 'undefined'){
            const typeName = "tuple" ;
            type = new FundamentalType(typeName,TypeKind.Tuple, ReferenceKind.Instance);
            return type;
        }
        else if (typeof ctx.classType() !== 'undefined'){
            type = new FundamentalType(ctx.text,TypeKind.Class, ReferenceKind.Instance);
            return type;
        }
        return undefined;
    }

    newType(name:string):Type{
        let typeKind : TypeKind | undefined;
        switch (name){
            case 'int' : typeKind = TypeKind.Integer; break;
            case 'float' : typeKind = TypeKind.Float; break;
            case 'string' : typeKind = TypeKind.String; break;
            case 'bool' : typeKind = TypeKind.Boolean; break;
            case 'array' : typeKind = TypeKind.Array; break;
            case 'tuple' : typeKind = TypeKind.Tuple; break;
            case 'void' : typeKind = TypeKind.Void; break;
        }
        if(typeKind === undefined){
            typeKind = TypeKind.Class;
        }
        return new FundamentalType(name,typeKind, ReferenceKind.Instance); 
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

    getInfoArray(): any[] {
        return this.infoArray;
    }

    print(msg:string|undefined,ctx:ParseTree){
        // console.log(msg);
        // console.log(ctx.text);
    }

    /**
     * 获取一个函数的所有参数
     * @param name 
     * @returns 
     */
    getPds(func:RoutineSymbol):Type[]|undefined{
        const arr:Type[] = [];
        let first = func.firstChild;
        while(first){
            if(first instanceof ParameterSymbol){
                if(first.type) arr.push(first.type);
            }
            first = first.nextSibling;
        }
        return arr;
    }

    push2InfoArray(start:Token,end:Token|undefined,msg:string,token?:Token):void{
        let length = 0; 
        let len = 0;
        if(start.text){
            length = start.text.length;
        }
        if(end === undefined){
            this.infoArray.push({
                msg:msg,
                startLine:start.line,
                startColumn:start.charPositionInLine,
                endLine:start.line,
                endColumn:start.charPositionInLine + length,
                length:0
            });
            return;
        }
        if(end.text){
            length = end.text.length;
        }
        if(token && token.text) {
            len = token.text?.length;
        }
        this.infoArray.push({
            msg:msg,
            startLine:start.line,
            startColumn:start.charPositionInLine,
            endLine:end.line,
            endColumn:end.charPositionInLine + length,
            length:len
        });
    }

    /**
     * 弹出警告信息
     * 通过该函数，将infoArray作为一个堆，从而拥有暂存作用
     */
    popInfoArray():void{
        this.infoArray.pop();
    }

    /**
     * 检查isUsed
     * @param scope 
     */
    afterVisit(scope:IScopedSymbol){
        const syms = scope.children;
        for(const sym of syms){

            if(sym instanceof VariableSymbol){
                if(sym.isUsed === false && sym.context && sym.context instanceof FieldDefContext){
                    this.push2InfoArray(sym.context.ID()._symbol,sym.context.ID()._symbol,info.NotUsed(sym.context.ID().text));
                }
            }

            if(sym instanceof ScopedSymbol){
                this.afterVisit(sym);
            }
        }
    }

    visitProg = (ctx: ProgContext) => {
        this.scope.context = ctx;
        this.visitChildren(ctx);
        this.afterVisit(this.symbolTable);
        // this.removeDuplicate();

        // console.log('calcTimePass:build');
        // console.log(this.symbolTable.duration2);
        // console.log('calcTimePass:resolveSync');
        // console.log(this.callTIme);
        // console.log(this.duration);
    };

    /**
     * 去重,TODO 重复的原因在于部分节点访问多次，为了保证效率之后需要修改程序。
     */
    removeDuplicate(){
        const infoArray:info[] = [];
        this.infoArray.sort((a,b)=>{
            if(a.startLine != b.startLine) return a.startLine - b.startLine;
            return a.startColumn - b.startColumn;
        });
        if(this.infoArray.length >= 1){
            infoArray[0] = this.infoArray[0];
            let cur = 0;
            for(let i = 1;i<this.infoArray.length;i++){
                if(infoArray[cur].msg === this.infoArray[i].msg && infoArray[cur].startLine === this.infoArray[i].startLine &&
                    infoArray[cur].startColumn === this.infoArray[i].startColumn && infoArray[cur].endLine === this.infoArray[i].endLine && 
                    infoArray[cur].endColumn === this.infoArray[i].endColumn) continue;
                infoArray.push(this.infoArray[i]);
                cur++;
            }
        }
        this.infoArray = infoArray;
    }

    /**
     * After Adding symbol, we need to add its context, which will be used in afterVisit function, to symbol.
     * @param ctx 
     * @returns 
     */
    private set:Set<string> = new Set();
    private callTIme = 0;
    private duration = 0;
    visitFieldDef = (ctx: FieldDefContext) => {
        const id = info.tokenNameLegal(ctx.ID().text);
        if(id){
            this.push2InfoArray(ctx.ID()._symbol,ctx.ID()._symbol,id);
        }

        const variable1 = ctx.ID();
        let variableName = variable1.text;
        if(variableName === undefined) variableName = '';
        let variableType = null;
        if (typeof ctx.type().PRIMITIVE_TYPE() !== 'undefined'){
            variableType = ctx.type().text;
        }
        if (this.set.has(variableName)){
            this.infoArray.push({msg: "variable " + variableName +" has been defined", startLine: variable1?.symbol.line, startColumn: variable1?.symbol.charPositionInLine,
                endLine: variable1?.symbol.line, endColumn: variable1?.symbol.charPositionInLine, length: variableName?.length});
            return;
        }
        this.set.add(variableName);

        const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, ctx.ID().text ,undefined,this.visitType(ctx.type()));
        sym.context = ctx;
        

        const ct = ctx.type().classType();
        if(ct){
            const cla = this.resolveSync(ct.text,true);
            if(cla){
                sym.classType = cla as ClassSymbol;
            }else{
                this.push2InfoArray(ctx.type()._start,ctx.type()._stop,info.noType(ct.text));
            }
        }

        const es = ctx.evaluationStmt();
        if(es){
            const eType = this.visit(es);
            if(eType){
                const type1 = sym.type;
                const type2 = eType as Type;
                if(type1 && !this.equalType(type1,type2)){
                    this.push2InfoArray(ctx.start,ctx.stop,info.typeMismatch2(type1.name,type2.name));
                    return null;
                }
            }
        }
        return null;
    };

    visitFunctionDef = (ctx: FunctionDefContext) => {
        const type = this.visitType(ctx.type());
        this.withScope(ctx, RoutineSymbol, [ctx.ID().text],this.typeAction(type,ctx,()=>{
            if(type) (this.scope as RoutineSymbol).returnType = type;
            this.visitChildren(ctx);
        }));
    };

    visitEvaluationStmt = (ctx: EvaluationStmtContext):Type|undefined => {
        if (typeof ctx.functionCall() !== 'undefined'){
            this.visitChildren(ctx);
        }

        const op1 = ctx.OPERATOR1();
        const op2 = ctx.OPERATOR2();
        const eva = ctx.evaluationStmt();
        //LPAREN evaluationStmt RPAREN
        if(ctx.LPAREN()){
            return this.visit(ctx.evaluationStmt(0));
        }

        //LPAREN evaluationStmt RPAREN
        //e1 = evaluable_statement OPERATOR1 e2 = evaluable_statement
        if(op1){
            if(op1.text === '*' || op1.text === '/' || op1.text === '%'){
                const e1 = ctx.evaluationStmt(0);
                const e2 = ctx.evaluationStmt(1);
                const left:Type|null = this.visit(e1);
                const right:Type|null = this.visit(e2);
                if(left && right){
                    if(this.equalType(left,right)){
                        return left;
                    }else{
                        this.push2InfoArray(e1.start,e2.stop,info.typeMismatchWithOprator3(ctx.OPERATOR1()?.text,left.name,right.name));
                        return undefined;
                    }
                }
            }else{
                const e3 = ctx.evaluationStmt(0);
                const e4 = ctx.evaluationStmt(1);
                const left:Type|null = this.visit(e3);
                const right:Type|null = this.visit(e4);
                if(left && right){
                    if(this.equalType(left,right)){
                        return this.newType('bool');
                    }else{
                        this.push2InfoArray(e3.start,e4.stop,info.typeMismatchWithOprator3(op1.text,left.name,right.name));
                        return undefined;
                    }
                }
            }
        }

        //e21 = evaluable_statement OPERATOR2 e22 = evaluable_statement
        if(op2 && eva.length === 2){
            const e21 = ctx.evaluationStmt(0);
            const e22 = ctx.evaluationStmt(1);
            const left:Type|null = this.visit(e21);
            const right:Type|null = this.visit(e22);
            if(left && right){
                if(this.equalType(left,right)){
                    return left;
                }else{
                    this.push2InfoArray(e21.start,e22.stop,info.typeMismatchWithOprator3(ctx.OPERATOR2()?.text,left.name,right.name));
                    return undefined;
                }
            }
        }

        //e5 = evaluable_statement AND e6 = evaluable_statement
        if(ctx.AND()){
            const e5 = ctx.evaluationStmt(0);
            const e6 = ctx.evaluationStmt(1);
            const left:Type|null = this.visit(e5);
            const right:Type|null = this.visit(e6);
            if(left && right){
                if(this.equalType(left,right) && left.kind === TypeKind.Boolean){
                    return left;
                }else{
                    this.push2InfoArray(e5.start,e6.stop,info.typeMismatchWithOprator3("and",left.name,right.name));
                    return undefined;
                }
            }
        }

        //OPERATOR2 e23 = evaluable_statement
        if(op2 && eva.length === 1){
            const e23 = ctx.evaluationStmt(0);
            const type = this.visit(e23);
            if(type){
                if(type.kind === TypeKind.Integer || type.kind === TypeKind.Float){
                    return type;
                }else{
                    this.push2InfoArray(e23.start,e23.stop,info.typeMismatchWithOprator2(ctx.OPERATOR2()?.text,type.name));
                    return undefined;
                }
            }
            return undefined;
        }

        //LPAREN e20 = evaluable_statement RPAREN
        if(ctx.LPAREN()){
            return this.visit(ctx.evaluationStmt(0));
        }

        const id = ctx.ID();
        if(id){
            const sym = this.resolveSync(id.text,false);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
                this.push2InfoArray(id._symbol,undefined,info.CannotReference(id.text));
            }
            return undefined;
        }

        const constCall = ctx.constCall();
        const _id2 = constCall?._id2;
        if(constCall && _id2 && _id2.text){
            const sym = this.resolveSync(_id2.text,false);  //this.scope.resolveSync(constCall._id2.text,true);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
                this.push2InfoArray(_id2,undefined,info.CannotReference(_id2.text));
            }
        }

        const funcCall = ctx.functionCall();
        if(funcCall){
            return this.visitFunctionCall(funcCall);
        }

        //newStmt: NEW classType;
        //classType: (id1 = ID COLON_CALL)? id2 = ID;
        const newStmt = ctx.newStmt();
        if(newStmt){
            const id2 = newStmt.classType()._id2;
            if(id2.text){
                const sym = this.resolveSync(id2.text,false);
                if(!sym){
                    this.push2InfoArray(id2,id2,info.noClassType(id2.text));
                    return undefined;
                }

                if(sym instanceof ClassSymbol){
                    return this.newType(id2.text);
                }else{  
                    this.push2InfoArray(id2,id2,info.noClassType(id2.text));
                    return undefined;
                }
            }
            return undefined;
        }

        const lit = ctx.literal();
        if(lit){
            const a = lit.array();
            const t = lit.tuple();
            const el = lit.errorLiteral();
            if(lit.FloatLiteral()) return this.newType('float');
            if(lit.STRING()) return this.newType('string');
            if(lit.BOOLEAN()) return this.newType('boolean');
            if(lit.integerLiteral()) return this.newType('int');
            if(a) return this.visitArray(a);
            if(t) return this.visitTuple(t);
            if(el) return this.visitErrorLiteral(el);
        }

        //refStmt: (AT|BITAND)? id1 = ID (DOT id2 = ID)?;
        const ref = ctx.refStmt();
        if(ref){
            return this.visitRefStmt(ref);
        }
        return undefined;
    };



    visitArrayType(ctx: ArrayTypeContext): any {
        return null;
    }

    //LSQUARE (element (COMMA element)*)? RSQUARE
    visitArray (ctx: ArrayContext): Type|undefined {
        let type:Type|undefined = undefined;
        for(const ele of ctx.element()){
            if(!type){
                type = this.visitEvaluationStmt(ele.evaluationStmt());
            }else{
                const cur = this.visitEvaluationStmt(ele.evaluationStmt());
                if(cur && !this.equalType(type,cur)){
                    this.push2InfoArray(ctx._start,ctx._stop,info.typeMismatch2(cur?.name,type.name));
                    return undefined;
                }
            }
        }
        if(type) return new FundamentalType("["+type.name+"]", TypeKind.Array, ReferenceKind.Instance,[type]);
    }

    //tuple: LPAREN element COMMA element RPAREN;
    visitTuple(ctx: TupleContext): Type {
        return new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance);
    }

    visitAssignment(ctx: AssignmentContext): any {
        const ref = ctx.refStmt();
        const text = ref._id1.text;
        if(!text) return;

        const type = this.visitRefStmt(ctx.refStmt());
        if(!type){
            this.push2InfoArray(ref._start,ref._stop,info.CannotReference(text));
            return;
        }
        const rightType = this.visit(ctx.evaluationStmt());
        if(rightType && !this.equalType(type,rightType)){
            this.push2InfoArray(ctx.start,ctx.stop,info.typeMismatch2(type.name,rightType.name));
            return null;
        }
    }

    visitBlock(ctx: BlockContext): boolean {
        let returned = false;
        if(this.returnType){
            //需哟使用typeAction封装，保证内部的return语句不会影响外部
            this.withScope(ctx, ScopedSymbol, ["@block"+this.noNameBlockCnt++], this.typeAction(this.returnType,ctx,() => {
                for(const s of ctx.statement()){
                    this.visit(s);
                    if(s.returnStmt()) returned = true;
                }
            },false));
        }
        else{
            this.withScope(ctx, ScopedSymbol, ["@block"+this.noNameBlockCnt++], () => {
                for(const s of ctx.statement()) this.visit(s);
            });
        }
        return returned;
    }

    visitClassType(ctx: ClassTypeContext): any {
        return null;
    }

    visitCondition(ctx: ConditionContext): any {
        const type = this.visit(ctx.evaluationStmt()) as Type;
        if(!type) return;
        
        if(type.kind === TypeKind.Boolean) return;
        else this.push2InfoArray(ctx._start,ctx._stop,info.typeMismatch2(type.name,'bool'));
        return null;
    }

    visitConstCall(ctx: ConstCallContext): any {
        return null;
    }

    visitConstDef(ctx: ConstDefContext): any {
        const variable1 = ctx.ID();
        const variableName = ctx.ID().text;
        let variableType = null;
        if (typeof ctx.type().PRIMITIVE_TYPE() !== 'undefined'){
            variableType = ctx.type().text;
        }
        const variable = this.resolveSync(variableName,true);
        if (variable  && variable1){
            this.push2InfoArray(variable1.symbol,variable1?.symbol, "variable " + variableName +" has been defined");
            return;
        }
        const type = this.visitType(ctx.type());
        const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, ctx.ID().text ,undefined,type);
        sym.context = ctx;
        const statements = ctx.statement();
        if(statements) this.withScope(ctx, RoutineSymbol, ["@"+ctx.ID().text], this.typeAction(type,ctx,()=>{
            for(const s of statements) this.visit(s);
        }));
        return null;
    }

    visitElement(ctx: ElementContext): any {
        return null;
    }

    visitErrorLiteral(ctx: ErrorLiteralContext): undefined {
        const num = ctx.integerLiteral().INT_NO_SIGN().text;
        if(num !== info.ErrorLit){
            this.push2InfoArray(ctx._start,ctx._stop,info.noErrorLit(ctx.text));
        }
        return undefined;
    }

    visitForStmt(ctx: ForStmtContext): any {
        const str = info.tokenNameLegal(ctx.ID().text);
        if(str){
            this.push2InfoArray(ctx.ID()._symbol,ctx.ID()._symbol,str);
        }

        const variable1 = ctx.ID();
        let variableName = variable1.text;
        if(variableName === undefined) variableName = '';
        const variable = this.resolveSync(variableName,true);
        if (variable){
            this.infoArray.push({msg: "variable " + variableName +" has been defined", startLine: variable1?.symbol.line, startColumn: variable1?.symbol.charPositionInLine,
                endLine: variable1?.symbol.line, endColumn: variable1?.symbol.charPositionInLine, length: variableName?.length});
        }

        const type = this.visitEvaluationStmt(ctx.evaluationStmt());
        if(type){
            const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, ctx.ID().text ,undefined,type.inner[0]);
            sym.context = ctx;
        }
        const returned = this.visitBlock(ctx.block());
        if(returned && this.returnType) this.haveReturned = true;
        return null;
    }

    visitForValueStmt(ctx: ForValueStmtContext): any {
        return this.visitChildren(ctx);
    }

    visitFunctionCall(ctx: FunctionCallContext):Type|undefined {
        const text = ctx._id2.text;
        if(text){
            const funcs = this.resolveSyncAll(text,false);
            // console.log('visitFunctionCall');
            // console.log(funcs);
            //not reference
            if(!funcs){
                this.push2InfoArray(ctx.start,ctx.stop,info.CannotReference(text));
                return undefined;
            }
            const pds = ctx.parameters()?.parameter();

            /**
             * 0 未检测
             * 1,2 参数不对齐
             * 3 参数格式不对
             */
            let flag = 0;
            const errorFlag = [1,2,3];
            let pushCnt = 0;
            for(const func of funcs){
                if(func instanceof RoutineSymbol){
                    const pdDefs = this.getPds(func);
                    if(pdDefs){
                        if(pds && pds.length != pdDefs.length){
                            if(flag == 0){
                                flag = 1;
                                pushCnt++;
                                this.push2InfoArray(ctx.start,ctx.stop,info.functionParameterNumber(text,pdDefs.length,pds.length));
                            }
                            continue;
                        }
                        if(!pds && pdDefs.length != 0){
                            if(flag == 0){
                                flag = 2;
                                pushCnt++;
                                this.push2InfoArray(ctx.start,ctx.stop,info.functionParameterNumber(text,pdDefs.length,0));
                            }
                            continue;
                        }

                        //正确：都无参数
                        if(!pds){// pdDefs.length == 0
                            if(errorFlag.includes(flag)){
                                for(let i = 0;i<pushCnt;i++){
                                    this.popInfoArray();
                                }
                            }
                            return func.returnType;
                        }

                        //from 1 to N, check Type.
                        let minimalLength = pdDefs.length;
                        if(minimalLength > pds.length) minimalLength = pds.length;
                        let error = false;
                        for(let index = 0;index<minimalLength;index++){
                            const type = this.visitEvaluationStmt(pds[index].evaluationStmt());
                            if(type && !this.equalType(type,pdDefs[index])){
                                if(!error){//第一个错误
                                    if(flag > 0){
                                        for(let i = 0;i<pushCnt;i++){
                                            this.popInfoArray();
                                        }
                                    }
                                    pushCnt = 0;
                                }
                                error = true;
                                flag = 3;
                                this.push2InfoArray(pds[index].start,pds[index].stop,info.typeMismatch2(type.name,pdDefs[index].name));
                                pushCnt++;
                            }
                        }

                        if(!error){
                            if(flag !== 0){
                                for(let i = 0;i<pushCnt;i++){
                                    this.popInfoArray();
                                }
                            }
                            return func.returnType;
                        }
                    }
                }
            }
            
        }
        return undefined;
    }

    /**
     * 如果存在else并且所有语句都有return语句，则将haveReturned赋值为true.
     * 存在递归的情况！
     * @param ctx 
     * @returns 
     */
    visitIfStmt(ctx: IfStmtContext): any {
        if(!this.returnType) return this.visitChildren(ctx);
        let returned = true;
        if(ctx.children){
            for(const c of ctx.children){
                if(c instanceof BlockContext){
                    returned = returned && this.visitBlock(c);
                }
                else this.visit(c);
            }
        }
        if(returned && ctx.ELSE()) this.haveReturned = true;
    }

    visitIndexer(ctx: IndexerContext): any {
        return null;
    }

    visitIntegerLiteral(ctx: IntegerLiteralContext): any {
        return null;
    }

    visitLiteral(ctx: LiteralContext): any {
        return null;
    }

    visitNewStmt(ctx: NewStmtContext): any {
        return null;
    }

    visitParameter(ctx: ParameterContext): any {
        return null;
    }

    visitParameters(ctx: ParametersContext): any {
        for(const param of ctx.parameter()){
            this.visit(param);
        }
        return null;
    }

    visitParametersDef(ctx: ParametersDefContext): any {
        const func = this.scope;
        for(const param of ctx.fieldDef()){
            const name = param.ID().text;
            const variable = this.resolveSync(name,true);
            if (variable){
                this.push2InfoArray(param.start,param.stop,info.hasBeenDef(name));
                return null;
            }

            const sym = this.symbolTable.addNewSymbolOfType(ParameterSymbol, this.scope, name ,undefined,this.visitType(param.type()));
            sym.context = param;
        }
        return null;
    }

    visitRefStmt(ctx: RefStmtContext):Type|undefined {
        const ref = ctx;

        const id1 = ref._id1; 
        const id2 = ref._id2;
        
        const at = ctx.AT();
        const bitand = ctx.BITAND();
        if(at || bitand){
            // console.log('atORbitand');
            // console.log(ref);
            let sym:SymbolTable|undefined;
            if(!id1.text || !id2.text) return undefined;
            let uri:string|undefined;
            if(at) uri = getUri(this.name,true,id1.text,id2.text);
            if(bitand) uri = getUri(this.name,false,id1.text,id2.text);
            if(at) sym = getFile2(this.name,true,id1.text,id2.text);
            if(bitand) sym = getFile2(this.name,false,id1.text,id2.text);
            // console.log(uri);
            // console.log(sym);
            if(!sym){

                const compute = computeUri(this.name);
                // console.log(compute);
                for(const uri of compute){
                    if(uri === this.uri) continue;
                    validateTextDocument(uri,false);
                }

                if(at) uri = getUri(this.name,true,id1.text,id2.text);
                if(bitand) uri = getUri(this.name,false,id1.text,id2.text);
                if(at) sym = getFile2(this.name,true,id1.text,id2.text);
                if(bitand) sym = getFile2(this.name,false,id1.text,id2.text);

                if(!sym){
                    this.push2InfoArray(ctx.start,ctx.stop,info.CannotReference(id1.text+"."+id2.text));
                    return undefined;
                }
            }
            
            if(this.type !== undefined && sym.scope !== undefined && this.scope2Num(this.type) < this.scope2Num(sym.scope)){
                this.push2InfoArray(ctx.start,ctx.stop,info.accessDenied(this.scope2String(this.type),this.scope2String(sym.scope)));
                return undefined;
            }
            if(uri){
                this.symbolTable.ref.add(uri);
                sym.refd.add(this.uri);
            }
            return sym.type;
        }
        
        if(!id2){
            if(!id1.text) return undefined;
            const sym = this.resolveSync(id1.text,false);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
                this.push2InfoArray(id1,id1,info.CannotReference(id1.text));
            }
            return undefined;
        }else{//id2
            if(!id1.text || !id2.text) return undefined;
            const sym = this.resolveSync(id1.text);
            if(sym === undefined){
                this.push2InfoArray(id1,id1,info.CannotReference(id1.text));
                return undefined;
            }

            if(sym instanceof VariableSymbol){
                const claSym = sym.classType;
                if(!claSym){
                    this.push2InfoArray(id1,id1,info.noClassType(id1.text));
                    return undefined;
                }
                const variable = this.resolveSync(id2.text,false,claSym);
                if(!variable){
                    this.push2InfoArray(id2,id2,info.CannotReference(id2.text));
                    return undefined;
                }
                return (variable as TypedSymbol).type;
            }
            return undefined;
        }
    }

    visitReturnStmt(ctx: ReturnStmtContext): any {
        const es = ctx.evaluationStmt();
        // console.log('returnStmt');
        // if(es) console.log(this.visit(es));
        if(this.scope === this.symbolTable.resolveSync("",true)){
            //处于最外层
            // console.log('outer scope');
            if(es){
                const type:Type|undefined = this.visit(es);
                if(type) this.symbolTable.type = type;
            }
        }

        this.haveReturned = true;
        if(!es){
            if(this.returnType && this.returnType.kind !== TypeKind.Void){
                this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2('void',this.returnType.name));
            }
            return null;
        }
        if(es){
            const type:Type|undefined = this.visit(es);
            if(type && this.returnType){
                if(this.returnType.kind === TypeKind.Void){
                    this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2(type.name,'void'));
                    return null;
                }

                if(!this.equalType(type,this.returnType)){
                    this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2(type.name,this.returnType.name));
                    return null;
                }
            }
        }
        return null;
    }

    visitSimpleClassDef(ctx: SimpleClassDefContext): any {
        const text = ctx.classType()._id2.text;
		if(text === undefined){
			// console.log('class name is undefined!!');
			return 0;
		}

        const classDef = this.resolveSync(text,true);
        if(classDef){
            const ct = ctx.classType();
            this.push2InfoArray(ct.start,ct.stop,info.classHasBeenDef(text));
            return;
        }

		const scope = this.symbolTable.addNewSymbolOfType(ClassSymbol, this.scope, text,[],[]);
		(scope as ClassSymbol).isStruct = true;
		scope.context = ctx;
		this.scope = scope;
		try{
			for(const fd of ctx.fieldDef()){
				this.visit(fd);
			}
			} finally {
					this.scope = scope.parent as ScopedSymbol;
			}
		return null;
    }

    visitStatement(ctx: StatementContext): any {
        if (typeof ctx.functionDef() !== 'undefined'){
            this.visitChildren(ctx);
        }
        else if (typeof ctx.assignment() !== 'undefined'){
            this.visitChildren(ctx);
        }
        else if (typeof ctx.returnStmt() !== 'undefined'){
            this.visitChildren(ctx);
        }
        else if(typeof ctx.constDef() !== 'undefined'){
            this.visitChildren(ctx);
            
        }
        else if (typeof ctx.fieldDef() !== 'undefined'){
            // this.visitChildrenField_define(<Field_defineContext>ctx.field_define());
            this.visitFieldDef(<FieldDefContext>ctx.fieldDef());
            
        }
        else if (typeof ctx.evaluationStmt() !== 'undefined'){
            this.visitChildren(ctx);
        }
        else if (ctx.ifStmt()){
            this.visitChildren(ctx);
        }
        else return this.visitChildren(ctx);
    }

    visitTupleType(ctx: TupleTypeContext): any {
        return null; 
    }

    visitType(ctx: TypeContext): Type{
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
            type = new FundamentalType(typeName,typeKind, ReferenceKind.Instance);
            return type;
        }
        else if (at){
            type = new FundamentalType(text,TypeKind.Array, ReferenceKind.Instance);
            type.inner.push(this.visitType(at.type()));
            return type;
        }
        else if (tt){
            const ts = tt.type();
            type = new FundamentalType(text,TypeKind.Tuple, ReferenceKind.Instance);
            type.inner.push(this.visitType(ts[0]));
            type.inner.push(this.visitType(ts[1]));
            return type;
        }
        else if (ct){
            type = new FundamentalType(text,TypeKind.Class, ReferenceKind.Instance);
            return type;
        }
        this.push2InfoArray(ctx._start,ctx._stop,info.noType(ctx.text));
        return this.newType('void');//这里应该报错？但目前为了书写方便返回void
    }

    visitWihilStmt(ctx: WihilStmtContext): any {
        this.visitChildren(ctx);
        return null;
    }
}


