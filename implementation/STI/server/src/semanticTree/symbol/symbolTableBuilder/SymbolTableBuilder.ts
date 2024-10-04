
import {SUnit} from "../../SUnits/SUnit";
import {TestLangVisitor} from "../../../parser/TestLangVisitor";
import {SymbolTable} from "../SymbolTable";

import {ScopedSymbol} from "../ScopedSymbol";
import {Scope} from "../../utils/files";
import {ReferenceKind, Type, TypeKind} from "../types";
import {ParserRuleContext, Token} from "antlr4ts";
import {IScopedSymbol} from "../ScopedSymbol";
import {BaseSymbol} from "../BaseSymbol";
import {
    ArrayContext,
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
    ParameterContext, ParametersContext, ParametersDefContext,
    ProgContext, RefStmtContext, ReturnStmtContext, SimpleClassDefContext, StatementContext,
    TupleContext, TupleTypeContext,
    TypeContext, WihilStmtContext
} from "../../../parser/TestLangParser";
import {FundamentalType} from "../FundamentalType";
import {RoutineSymbol} from "../RoutineSymbol";
import {ParameterSymbol} from "../ParameterSymbol";
import {VariableSymbol} from "../VariableSymbol";
import {ClassSymbol} from "../ClassSymbol";
import {computeUri, getFile2, getUri} from "../../utils/files";
import {validateTextDocument} from "../../../browserServerMain";
import {TypedSymbol} from "../TypedSymbol";
import * as info from './Info';
import {equalType, newType} from "./utils";
import {SUnitVisitor} from "../../SUnits/SUnitVisitor";
import {
    SArray,
    SAssignment, SBlock, SClassType, SCondition, SConstCall,
    SConstDef, SElement, SErrorLiteral, SEvaluationStmt,
    SFieldDef, SForStmt, SForValueStmt, SFunctionCall,
    SFunctionDef, SIfStmt, SIndexer, SIntegerLiteral, SLiteral, SNewStmt, SParameter, SParameters,
    SParametersDef,
    SProg, SRefStmt, SReturnStmt,
    SSimpleClassDef,
    SStatement, STuple, SWihilStmt
} from "../../SUnits/Sunits";
interface info{
    msg:string,
    startLine:number,
    startColumn:number,
    endLine:number,
    endColumn:number,
    length:number
}

export default class SymbolTableBuilder {

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

    //套个scope,然后进入scope，里面的记录完后退回到当前scope
    protected withScope<T>(sunit:SUnit,type: new (...args: any[]) => ScopedSymbol, args: any[], action: () => T): T {
        const scope = this.symbolTable.addNewSymbolOfType(type, this.scope, ...args);
        // scope.context = tree;
        this.scope = scope;
        try {
            return action();
        } finally {
            this.scope = scope.parent as ScopedSymbol;
        }
    }


    /**
     * localOnly:define is true, use is false.
     * 对scope.resolveSync进行封装，设置isUsed为true，从而保证使用过的变量被记录，之后通过afterVisit输出
     * @param name
     * @param localOnly
     * @param scope
     * @returns
     */
    resolveSync(name:string,localOnly = true,scope:IScopedSymbol|undefined = this.scope): BaseSymbol|undefined {
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


    public visitChildren(sunit:SUnit){
        let name: keyof SUnit;
        
        for(name in sunit){
            const unit = sunit[name];
            if(unit instanceof SUnit){
                this.visit(unit);
            }
            if(unit instanceof Array){
                for(const u of unit){
                    if(u instanceof SUnit){
                        this.visit(u);
                    }
                }
            }
        }
        return undefined;
    }

    public visit(sunit:SUnit){
        if(sunit instanceof SProg) return this.visitProg(sunit);
        if(sunit instanceof SStatement) return this.visitStatement(sunit);
        if(sunit instanceof SSimpleClassDef) return this.visitSimpleClassDef(sunit);
        if(sunit instanceof SFunctionDef) return this.visitFunctionDef(sunit);
        if(sunit instanceof SParametersDef) return this.visitParametersDef(sunit);
        if(sunit instanceof SConstDef) return this.visitConstDef(sunit);
        if(sunit instanceof SFieldDef) return this.visitFieldDef(sunit);
        if(sunit instanceof SAssignment) return this.visitAssignment(sunit);
        if(sunit instanceof SIfStmt) return this.visitIfStmt(sunit);
        if(sunit instanceof SForStmt) return this.visitForStmt(sunit);
        if(sunit instanceof SWihilStmt) return this.visitWihilStmt(sunit);
        if(sunit instanceof SReturnStmt) return this.visitReturnStmt(sunit);
        if(sunit instanceof SEvaluationStmt) return this.visitEvaluationStmt(sunit);
        if(sunit instanceof SRefStmt) return this.visitRefStmt(sunit);
        if(sunit instanceof SFunctionCall) return this.visitFunctionCall(sunit);
        if(sunit instanceof SConstCall) return this.visitConstCall(sunit);
        if(sunit instanceof SForValueStmt) return this.visitForValueStmt(sunit);
        if(sunit instanceof SNewStmt) return this.visitNewStmt(sunit);
        if(sunit instanceof SBlock) return this.visitBlock(sunit);
        if(sunit instanceof SParameters) return this.visitParameters(sunit);
        if(sunit instanceof SParameter) return this.visitParameter(sunit);
        if(sunit instanceof SCondition) return this.visitCondition(sunit);
        if(sunit instanceof SIndexer) return this.visitIndexer(sunit);
        if(sunit instanceof SClassType) return this.visitClassType(sunit);
        if(sunit instanceof SLiteral) return this.visitLiteral(sunit);
        if(sunit instanceof SArray) return this.visitArray(sunit);
        if(sunit instanceof STuple) return this.visitTuple(sunit);
        if(sunit instanceof SElement) return this.visitElement(sunit);
    }

    visitProg = (sunit:SProg) => {
        this.visitChildren(sunit);

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
     * @returns
     * @param sunit
     */
    visitFieldDef = (sunit:SFieldDef) => {
        const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, sunit.ID.text!, undefined, sunit.type);
        sym.context = sunit;
        return this.visitChildren(sunit);
    };

    visitFunctionDef = (sunit:SFunctionDef) => {
        const type = sunit.type;
        this.withScope(sunit,RoutineSymbol, [sunit.ID.text],()=>{
            if(type) (this.scope as RoutineSymbol).returnType = type;
            this.visitChildren(sunit);
        });
    };

    visitEvaluationStmt = (sunit:SEvaluationStmt):Type|undefined => {
        if (sunit.functionCall !== null){
            this.visitChildren(sunit);

        }
        const op1 = sunit.operator1;
        const op2 = sunit.operator2;
        const eva = sunit.evaluationStmt;
        //LPAREN evaluationStmt RPAREN
        if(sunit.lparen){
            return this.visit(eva![0]);
        }


        //LPAREN e20 = evaluable_statement RPAREN
        if(sunit.lparen){
            return this.visit(eva![0]);
        }

        //TODO : RECORD VARIABLE IS USED



        const funcCall = sunit.functionCall;
        if(funcCall){
            return this.visit(funcCall);
        }

        //newStmt: NEW classType;
        //classType: (id1 = ID COLON_CALL)? id2 = ID;
        const newStmt = sunit.newStmt;
        if(newStmt){
            const classType = newStmt.classType;
            return classType;
            //TODO : CHECK IF IS USED

        }


        const lit = sunit.literal;
        if(lit){
            const a = lit.array;
            const t = lit.tuple;
            const el = lit.errorLiteral;
            if(lit.floatLiteral) return newType('float', lit);
            if(lit.string) return newType('string', lit);
            if(lit.boolean) return newType('bool', lit);
            if(lit.integerLiteral) return newType('int', lit);
            if(a) return this.visitArray(a);
            if(t) return this.visitTuple(t);
            if(el) return this.visitErrorLiteral(el);
        }

        //refStmt: (AT|BITAND)? id1 = ID (DOT id2 = ID)?;
        const ref = sunit.refStmt;
        if(ref){
            return this.visitRefStmt(ref);
        }
        return undefined;
    };



    visitArrayType(ctx: ArrayTypeContext): any {
        return null;
    }

    //LSQUARE (element (COMMA element)*)? RSQUARE
    visitArray (sunit:SArray): Type|undefined {
        let type:Type|undefined = undefined;
        for(const ele of sunit.element!){
            if(!type){
                type = this.visitEvaluationStmt(ele.evaluationStmt);
                break;
            }
            // else{
            //     const cur = this.visitEvaluationStmt(ele.evaluationStmt);
            //     if(cur && ! equalType(type,cur)){
            //         this.push2InfoArray(sunit.start,sunit.end,info.typeMismatch2(cur?.name,type.name));
            //         return undefined;
            //     }
            // }
        }
        if(type) return new FundamentalType("["+type.name+"]", TypeKind.Array, ReferenceKind.Instance,sunit.sid,sunit.start,sunit.end);
    }

    //tuple: LPAREN element COMMA element RPAREN;
    visitTuple(sunit:STuple): Type {
        return new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance,sunit.sid,sunit.start,sunit.end);
    }

    visitAssignment(sunit:SAssignment): any {

        // const ref = sunit.refStmt;
        // const text = ref.text;
        // if(!text) return;
        //
        // const type = this.visitRefStmt(ref);


        // if(!type){
        //     this.push2InfoArray(ref._start,ref._stop,info.CannotReference(text));
        //     return;
        // }
        // const rightType = this.visit(sunit.evaluationStmt);
        // if(rightType && ! equalType(type,rightType)){
        //     this.push2InfoArray(ctx.start,ctx.stop,info.typeMismatch2(type.name,rightType.name));
        //     return null;
        // }
    }

    visitBlock(sunit:SBlock): boolean {
        //TODO : CHECK BLOCK RETURN VALUE
        const returned = false;
        // if(this.returnType){
        //     //需哟使用typeAction封装，保证内部的return语句不会影响外部
        //     this.withScope(ScopedSymbol, ["@block"+this.noNameBlockCnt++], () => {
        //         for(const s of sunit.statement){
        //             this.visit(s);
        //             if(s.returnStmt) returned = true;
        //         }
        //     });
        // }
        // else{
            this.withScope(sunit,ScopedSymbol, ["@block"+this.noNameBlockCnt++], () => {
                for(const s of sunit.statement) this.visit(s);
            });
        // }
        return returned;
    }

    visitClassType(sunit:SClassType): any {
        return null;
    }

    visitCondition(sunit:SCondition): any {
        const type = this.visit(sunit.evaluationStmt) as Type;
        if(!type) return;

        if(type.kind === TypeKind.Boolean) return;
        // else this.push2InfoArray(ctx._start,ctx._stop,info.typeMismatch2(type.name,'bool'));
        return null;
    }

    visitConstCall(sunit:SConstCall): any {
        return null;
    }

    visitConstDef(sunit:SConstDef): any {
        // const variable1 = ctx.ID();
        // const variableName = ctx.ID().text;
        // let variableType = null;
        // if (typeof ctx.type().PRIMITIVE_TYPE() !== 'undefined'){
        //     variableType = ctx.type().text;
        // }
        // const variable = this.resolveSync(variableName,true);
        // if (variable  && variable1){
        //     this.push2InfoArray(variable1.symbol,variable1?.symbol, "variable " + variableName +" has been defined");
        //     return;
        // }
        // const type = this.visitType(ctx.type());
        const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, sunit.ID.text! ,undefined,sunit.type);
        sym.context = sunit;
        const statements = sunit.statement;
        if(statements) this.withScope(sunit,RoutineSymbol, ["@"+sunit.ID.text], ()=>{
            for(const s of statements) this.visit(s);
        });
        return null;
    }

    visitElement(sunit:SElement): any {
        return null;
    }

    visitErrorLiteral(sunit:SErrorLiteral): undefined {
        // const num = sunit.text;
        // if(num !== info.ErrorLit){
        //     this.push2InfoArray(ctx._start,ctx._stop,info.noErrorLit(ctx.text));
        // }
        // return undefined;
    }

    visitForStmt(sunit:SForStmt): any {
        // const str = info.tokenNameLegal(sunit.text!);
        // if(str){
        //     this.push2InfoArray(ctx.ID()._symbol,ctx.ID()._symbol,str);
        // }

        // const variable1 = ctx.ID();
        // let variableName = variable1.text;
        // if(variableName === undefined) variableName = '';
        // const variable = this.resolveSync(variableName,true);
        // if (variable){
        //     this.infoArray.push({msg: "variable " + variableName +" has been defined", startLine: variable1?.symbol.line, startColumn: variable1?.symbol.charPositionInLine,
        //         endLine: variable1?.symbol.line, endColumn: variable1?.symbol.charPositionInLine, length: variableName?.length});
        //     return;
        // }

        //TODO : CHECK BLOCK 'RETURN'

        const type = this.visitEvaluationStmt(sunit.evaluationStmt);
        if(type){
            const sym = this.symbolTable.addNewSymbolOfType(VariableSymbol, this.scope, sunit.ID.text! ,undefined,type.inner[0]);
            sym.context = sunit;
        }
        const returned = this.visitBlock(sunit.block);
        // if(returned && this.returnType) this.haveReturned = true;
        return null;
    }

    visitForValueStmt(sunit:SForValueStmt): any {
        return null;
    }

    visitFunctionCall(sunit:SFunctionCall):Type|undefined {

        const text = sunit.ID[sunit.ID.length - 1].text;
        if(text){
            const funcs = this.resolveSyncAll(text,false);
            // console.log('visitFunctionCall');
            // console.log(funcs);
            //not reference
            // if(!funcs){
            //     this.push2InfoArray(ctx.start,ctx.stop,info.CannotReference(text));
            //     return undefined;
            // }

            // const pds = ctx.parameters()?.parameter();

            /**
             * 0 未检测
             * 1,2 参数不对齐
             * 3 参数格式不对
             */
            // let flag = 0;
            // const errorFlag = [1,2,3];
            // let pushCnt = 0;
            // for(const func of funcs){
            //     if(func instanceof RoutineSymbol){
            //         const pdDefs = this.getPds(func);
            //         if(pdDefs){
            //             if(pds && pds.length != pdDefs.length){
            //                 if(flag == 0){
            //                     flag = 1;
            //                     pushCnt++;
            //                     this.push2InfoArray(ctx.start,ctx.stop,info.functionParameterNumber(text,pdDefs.length,pds.length));
            //                 }
            //                 continue;
            //             }
            //             if(!pds && pdDefs.length != 0){
            //                 if(flag == 0){
            //                     flag = 2;
            //                     pushCnt++;
            //                     this.push2InfoArray(ctx.start,ctx.stop,info.functionParameterNumber(text,pdDefs.length,0));
            //                 }
            //                 continue;
            //             }
            //
            //             //正确：都无参数
            //             if(!pds){// pdDefs.length == 0
            //                 if(errorFlag.includes(flag)){
            //                     for(let i = 0;i<pushCnt;i++){
            //                         this.popInfoArray();
            //                     }
            //                 }
            //                 return func.returnType;
            //             }
            //
            //             //from 1 to N, check Type.
            //             let minimalLength = pdDefs.length;
            //             if(minimalLength > pds.length) minimalLength = pds.length;
            //             let error = false;
            //             for(let index = 0;index<minimalLength;index++){
            //                 const type = this.visitEvaluationStmt(pds[index].evaluationStmt());
            //                 if(type && !this.equalType(type,pdDefs[index])){
            //                     if(!error){//第一个错误
            //                         if(flag > 0){
            //                             for(let i = 0;i<pushCnt;i++){
            //                                 this.popInfoArray();
            //                             }
            //                         }
            //                         pushCnt = 0;
            //                     }
            //                     error = true;
            //                     flag = 3;
            //                     this.push2InfoArray(pds[index].start,pds[index].stop,info.typeMismatch2(type.name,pdDefs[index].name));
            //                     pushCnt++;
            //                 }
            //             }
            //
            //             if(!error){
            //                 if(flag !== 0){
            //                     for(let i = 0;i<pushCnt;i++){
            //                         this.popInfoArray();
            //                     }
            //                 }
            //                 return func.returnType;
            //             }
            //         }
            //     }
            // }

        }
        return undefined;
    }

    /**
     * 如果存在else并且所有语句都有return语句，则将haveReturned赋值为true.
     * 存在递归的情况！
     * @param ctx
     * @returns
     */
    visitIfStmt(sunit:SIfStmt): any {
        //TODO : CHECK IF HAVE 'RETURN'

        // if(!this.returnType) return this.visitChildren(sunit);
        // let returned = true;
        // if(ctx.children){
        //     for(const c of ctx.children){
        //         if(c instanceof BlockContext){
        //             returned = returned && this.visitBlock(c);
        //         }
        //         this.visit(c);
        //     }
        // }
        this.visitChildren(sunit);
        // if(returned && ctx.ELSE()) this.haveReturned = true;
    }

    visitIndexer(sunit:SIndexer): any {
        return null;
    }

    visitIntegerLiteral(sunit:SIntegerLiteral): any {
        return null;
    }

    visitLiteral(sunit:SLiteral): any {
        return null;
    }

    visitNewStmt(sunit:SNewStmt): any {
        return null;
    }

    visitParameter(sunit:SParameter): any {

        return null;
    }

    visitParameters(sunit:SParameters): any {
        for(const param of sunit.parameter){
            this.visit(param);
        }
        return null;
    }

    visitParametersDef(sunit:SParametersDef): any {
        const func = this.scope;
        for(const param of sunit.fieldDef){
            const name = param.ID.text!;
            // const variable = this.resolveSync(name,true);
            // if (variable){
            //     this.push2InfoArray(param.start,param.stop,info.hasBeenDef(name));
            //     return null;
            // }

            const sym = this.symbolTable.addNewSymbolOfType(ParameterSymbol, this.scope, name ,undefined,param.type);
            sym.context = param;
        }
        return null;
    }

    visitRefStmt(sunit:SRefStmt):Type|undefined {

        // const id1 = sunit.ID[0];
        // const id2 = sunit.ID[1];
        //
        // const at = sunit.AT;
        // const bitand = sunit.BITAND;
        // if(at || bitand){
        //     console.log('at OR bitand');
        //     // console.log(ref);
        //     let sym:SymbolTable|undefined;
        //     if(!id1.text || !id2.text) return undefined;
        //     let uri:string|undefined;
        //     if(at) uri = getUri(this.name,true,id1.text,id2.text);
        //     if(bitand) uri = getUri(this.name,false,id1.text,id2.text);
        //     if(at) sym = getFile2(this.name,true,id1.text,id2.text);
        //     if(bitand) sym = getFile2(this.name,false,id1.text,id2.text);
        //     console.log(uri);
        //     console.log(sym);
        //     if(!sym){
        //
        //         const compute = computeUri(this.name);
        //         console.log(compute);
        //         for(const uri of compute){
        //             if(uri === this.uri) continue;
        //             validateTextDocument(uri,false);
        //         }
        //
        //         if(at) uri = getUri(this.name,true,id1.text,id2.text);
        //         if(bitand) uri = getUri(this.name,false,id1.text,id2.text);
        //         if(at) sym = getFile2(this.name,true,id1.text,id2.text);
        //         if(bitand) sym = getFile2(this.name,false,id1.text,id2.text);
        //
        //         if(!sym){
        //             this.push2InfoArray(ctx.start,ctx.stop,info.CannotReference(id1.text+"."+id2.text));
        //             return undefined;
        //         }
        //     }
        //
        //     if(this.type !== undefined && sym.scope !== undefined && this.scope2Num(this.type) < this.scope2Num(sym.scope)){
        //         this.push2InfoArray(ctx.start,ctx.stop,info.accessDenied(this.scope2String(this.type),this.scope2String(sym.scope)));
        //         return undefined;
        //     }
        //     if(uri){
        //         this.symbolTable.ref.add(uri);
        //         sym.refd.add(this.uri);
        //     }
        //     return sym.type;
        // }
        //
        // if(!id2){
        //     if(!id1.text) return undefined;
        //     const sym = this.resolveSync(id1.text,false);
        //     if(sym instanceof VariableSymbol){
        //         return sym.type;
        //     }
        //     if(sym === undefined){
        //         this.push2InfoArray(id1,id1,info.CannotReference(id1.text));
        //     }
        //     return undefined;
        // }else{//id2
        //     if(!id1.text || !id2.text) return undefined;
        //     const sym = this.resolveSync(id1.text);
        //     if(sym === undefined){
        //         this.push2InfoArray(id1,id1,info.CannotReference(id1.text));
        //         return undefined;
        //     }
        //
        //     if(sym instanceof VariableSymbol){
        //         const claSym = sym.classType;
        //         if(!claSym){
        //             this.push2InfoArray(id1,id1,info.noClassType(id1.text));
        //             return undefined;
        //         }
        //         const variable = this.resolveSync(id2.text,false,claSym);
        //         if(!variable){
        //             this.push2InfoArray(id2,id2,info.CannotReference(id2.text));
        //             return undefined;
        //         }
        //         return (variable as TypedSymbol).type;
        //     }
        //     return undefined;
        // }
        return undefined;
    }

    visitReturnStmt(sunit:SReturnStmt): any {
        const es = sunit.evaluationStmt;
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

        // this.haveReturned = true;
        // if(!es){
        //     if(this.returnType && this.returnType.kind !== TypeKind.Void){
        //         this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2('void',this.returnType.name));
        //     }
        //     return null;
        // }
        // if(es){
        //     const type:Type|undefined = this.visit(es);
        //     if(type && this.returnType){
        //         if(this.returnType.kind === TypeKind.Void){
        //             this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2(type.name,'void'));
        //             return null;
        //         }
        //
        //         if(!this.equalType(type,this.returnType)){
        //             this.push2InfoArray(ctx.RETURN()._symbol,ctx.RETURN()._symbol,info.typeMismatch2(type.name,this.returnType.name));
        //             return null;
        //         }
        //     }
        // }
        return null;
    }

    visitSimpleClassDef(sunit:SSimpleClassDef): any {
        //TODO : check if class have been defined before

        // const text = ctx.classType()._id2.text;
        //
        // if(text === undefined){
        //     console.log('class name is undefined!!');
        //     return 0;
        // }
        //
        // const classDef = this.resolveSync(text,true);
        // if(classDef){
        //     const ct = ctx.classType();
        //     this.push2InfoArray(ct.start,ct.stop,info.classHasBeenDef(text));
        //     return;
        // }

        const scope = this.symbolTable.addNewSymbolOfType(ClassSymbol, this.scope, sunit.ID[sunit.ID.length-1].text!,[],[]);
        (scope as ClassSymbol).isStruct = true;
        scope.context = sunit;
        this.scope = scope;
        try{
            for(const fd of sunit.fieldDef){
                this.visit(fd);
            }
        } finally {
            this.scope = scope.parent as ScopedSymbol;
        }
        return null;
    }

    visitStatement(sunit:SStatement): any {
        if (typeof sunit.functionDef !== 'undefined'){
            this.visitChildren(sunit);
        }
        else if (typeof sunit.assignment !== 'undefined'){
            this.visitChildren(sunit);
        }
        else if (typeof sunit.returnStmt !== 'undefined'){
            this.visitChildren(sunit);
        }
        else if(typeof sunit.constDef !== 'undefined'){
            this.visitChildren(sunit);

        }
        else if (typeof sunit.fieldDef !== 'undefined'){
            // this.visitChildrenField_define(<Field_defineContext>ctx.field_define());
            this.visitFieldDef(sunit.fieldDef);

        }
        else if (typeof sunit.evaluationStmt !== 'undefined'){
            this.visitChildren(sunit);
        }
        else if (sunit.ifStmt){
            this.visitChildren(sunit);
        }
        else return this.visitChildren(sunit);
    }

    visitTupleType(sunit:STuple): any {
        return null;
    }



    visitWihilStmt(sunit:SWihilStmt): any {
        this.visitChildren(sunit);
        return null;
    }

}
