import {SymbolTable} from "../symbol/SymbolTable";
import {IScopedSymbol, ScopedSymbol} from "../symbol/ScopedSymbol";
import {SUnit} from "../SUnits/SUnit";
import {ReferenceKind, Type, TypeKind} from "../symbol/types";
import {
    SArray,
    SAssignment,
    SBlock,
    SClassType,
    SCondition,
    SConstCall,
    SConstDef,
    SElement,
    SEvaluationStmt,
    SFieldDef,
    SForStmt,
    SForValueStmt,
    SFunctionCall,
    SFunctionDef,
    SIfStmt,
    SIndexer,
    SLiteral,
    SNewStmt,
    SParameter,
    SParameters,
    SParametersDef,
    SProg,
    SRefStmt,
    SReturnStmt,
    SSimpleClassDef,
    SStatement,
    STuple,
    SWihilStmt
} from "../SUnits/Sunits";
import {BaseSymbol} from "../symbol/BaseSymbol";
import {Logger} from "./Logger";
import {FundamentalType} from "../symbol/FundamentalType";
import {RoutineSymbol} from "../symbol/RoutineSymbol";
import {ParameterSymbol} from "../symbol/ParameterSymbol";

interface info{
    msg:string,
    startLine:number,
    startColumn:number,
    endLine:number,
    endColumn:number,
    length:number
}
export default class XXXValidator{
    public infoArray: info[] = [];
    public symbolTable!:SymbolTable;
    public scope:ScopedSymbol;
    public noNameBlockCnt = 0;
    public logger = Logger.getLogger();

    public callTime = 0;
    public duration = 0;

    public resolveSyncCount_validator = 0;

    constructor(symbolTable:SymbolTable, infoArray : info[], scope : ScopedSymbol){
        this.symbolTable = symbolTable;
        this.infoArray = infoArray;
        this.scope = scope;
    }



    push2InfoArray(start:SUnit,end:SUnit|undefined,msg:string):void
    push2InfoArray(start:SUnit,end:SUnit|undefined,msg:string):void{
        let length = 0;
        const len = 0;
        if(start.text){
            length = start.end.length;
        }
        if(end === undefined){
            this.infoArray.push({
                msg:msg,
                startLine:start.start.line,
                startColumn:start.start.charPositionInLine,
                endLine:start.end.line,
                endColumn:start.end.charPositionInLine + length,
                length:0
            });
            return;
        }

        if(end.text){
            length = end.end.length;
        }
        this.infoArray.push({
            msg:msg,
            startLine:start.start.line,
            startColumn:start.start.charPositionInLine,
            endLine:end.end.line,
            endColumn:end.end.charPositionInLine + length,
            length:len
        });

    }

    pushType2InfoArray(start:Type,end:Type|undefined,msg:string){
        let length = 0;
        const len = 0;
        length = start.end.length;
        if(end === undefined){
            this.infoArray.push({
                msg:msg,
                startLine:start.start.line,
                startColumn:start.start.charPositionInLine,
                endLine:start.end.line,
                endColumn:start.end.charPositionInLine + length,
                length:0
            });
            return;
        }

        length = end.end.length;

        this.infoArray.push({
            msg:msg,
            startLine:start.start.line,
            startColumn:start.start.charPositionInLine,
            endLine:end.end.line,
            endColumn:end.end.charPositionInLine + length,
            length:len
        });
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    calcTimePass(fun:Function, name:string,...params:any):any{
        try{
            const startTime = new Date();
            const ret = fun(...params);
            const endTime = new Date();
            const duration = endTime.valueOf() - startTime.valueOf();
            
            this.callTime += 1;

            this.duration += duration;
            
            return ret;
        }catch(err){
            console.log('ERROR!!!');
            console.log(err);
        }
    }

    /**
     * 检查符号表中是否存在该符号
     * localOnly:define is true, use is false.
     * 对scope.resolveSync进行封装，设置isUsed为true，从而保证使用过的变量被记录，之后通过afterVisit输出
     * @param name
     * @param localOnly
     * @param scope
     */
    resolveSync(name:string,localOnly = true,scope:IScopedSymbol|undefined = this.scope): BaseSymbol|undefined {
        return this.calcTimePass(this.resolveSyncInner,"resolveSync",name,localOnly,scope);
    }

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



    public visitChildren(sunit:SUnit):any{
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

    public visit(sunit:SUnit):any{



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

    public doValidator(sunit:SUnit,scope:ScopedSymbol){
        this.scope = scope;
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


    //套个scope,然后进入scope，里面的记录完后退回到当前scope
    protected withScope(name:string,action: () => any){
        const scope = this.scope.resolveSync(name);
        // scope.context = tree;
        this.scope = scope as ScopedSymbol;
        try {
            return action();
        } finally {
            this.scope = this.scope.parent as ScopedSymbol;
        }
    }

    /**
     * TODO ['int'] == [ 'int' ] type相同但name不同,所以判定name相同时需要将空格都删掉
     * @param type1
     * @param type2
     * @returns
     */
    public equalType(type1:Type,type2:Type){
        if(!type1 || !type2) return true;
        if (type1.kind == TypeKind.Array || type2.kind == TypeKind.Array){
            return type1.name == type2.name;
        }
        if(type1.kind !== type2.kind || type1.name !== type2.name) return false;
        if(type1.inner.length !== type2.inner.length) return false;
        for(let i = 0;i<type1.inner.length;i++){
            if(!this.equalType(type1.inner[i],type2.inner[i])) return false;
        }
        return true;
    }

    public newType(name:string , sunit:SUnit):Type{
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
        return new FundamentalType(name,typeKind, ReferenceKind.Instance, sunit.sid , sunit.start, sunit.end );

    }

    public popInfoArray(infoArray:info[]):void{
        infoArray.pop();
    }

    public getPds(func:RoutineSymbol):Type[]|undefined{
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

    public visitProg(sunit:SProg){
        return this.visitChildren(sunit);
    }

    public visitStatement(sunit:SStatement){
        return this.visitChildren(sunit);
    }

    public visitSimpleClassDef(sunit:SSimpleClassDef){
        return this.visitChildren(sunit);
    }

    public visitFunctionDef(sunit:SFunctionDef){
        this.withScope(sunit.ID.text!,()=>{
            this.visitChildren(sunit);
        });
    }

    public visitParametersDef(sunit:SParametersDef){
        return this.visitChildren(sunit);
    }

    public visitConstDef(sunit:SConstDef){
        this.withScope("@"+sunit.ID.text,()=>{
            this.visitChildren(sunit);
        });
    }

    public visitFieldDef(sunit:SFieldDef){
        return this.visitChildren(sunit);
    }

    public visitAssignment(sunit:SAssignment){
        return this.visitChildren(sunit);
    }

    public visitIfStmt(sunit:SIfStmt){
        return this.visitChildren(sunit);
    }

    public visitForStmt(sunit:SForStmt){
        return this.visitChildren(sunit);
    }

    public visitWihilStmt(sunit:SWihilStmt){
        return this.visitChildren(sunit);
    }

    public visitReturnStmt(sunit:SReturnStmt){
        return this.visitChildren(sunit);
    }

    public visitEvaluationStmt(sunit:SEvaluationStmt){
        return this.visitChildren(sunit);
    }

    public visitRefStmt(sunit:SRefStmt){
        return this.visitChildren(sunit);
    }

    public visitFunctionCall(sunit:SFunctionCall){
        return this.visitChildren(sunit);
    }

    public visitConstCall(sunit:SConstCall){
        return this.visitChildren(sunit);
    }

    public visitForValueStmt(sunit:SForValueStmt){
        return this.visitChildren(sunit);
    }

    public visitNewStmt(sunit:SNewStmt){
        return this.visitChildren(sunit);
    }

    public visitBlock(sunit:SBlock){
        this.withScope("@block"+this.noNameBlockCnt++,()=>{
            this.visitChildren(sunit);
        });
    }

    public visitParameters(sunit:SParameters){
        return this.visitChildren(sunit);
    }

    public visitParameter(sunit:SParameter){
        return this.visitChildren(sunit);
    }

    public visitCondition(sunit:SCondition){
        return this.visitChildren(sunit);
    }

    public visitIndexer(sunit:SIndexer){
        return this.visitChildren(sunit);
    }

    public visitClassType(sunit:SClassType){
        return this.visitChildren(sunit);
    }

    public visitLiteral(sunit:SLiteral){
        return this.visitChildren(sunit);
    }

    public visitArray(sunit:SArray){
        return this.visitChildren(sunit);
    }

    public visitTuple(sunit:STuple){
        return this.visitChildren(sunit);
    }

    public visitElement(sunit:SElement){
        return this.visitChildren(sunit);
    }


}

