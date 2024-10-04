import {SymbolTable} from "../symbol/SymbolTable";
import {SUnit} from "../SUnits/SUnit";
import {Type} from "../symbol/types";
import {
    SArray,
    SAssignment, SBlock, SClassType, SCondition, SConstCall,
    SConstDef, SElement, SEvaluationStmt,
    SFieldDef, SForStmt, SForValueStmt, SFunctionCall,
    SFunctionDef, SIfStmt, SIndexer, SLiteral, SNewStmt, SParameter, SParameters,
    SParametersDef,
    SProg, SRefStmt, SReturnStmt,
    SSimpleClassDef,
    SStatement, STuple, SWihilStmt
} from "../SUnits/Sunits";
import { ScopedSymbol } from '../symbol/ScopedSymbol';

export default class Visitor{
    public symbolTable!:SymbolTable;
	public scope!:ScopedSymbol;
	public noNameBlockCnt = 0;

    constructor(symbolTable:SymbolTable){
        this.symbolTable = symbolTable;
        this.scope = symbolTable.resolveSync("") as ScopedSymbol;
    }

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

    public visitChildren(sunit:SUnit):any{
        let name: keyof SUnit;
        for(name in sunit){
            if(name === 'parent') continue;
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
        this.withScope("@block"+this.noNameBlockCnt++, () => {
            for(const s of sunit.statement) this.visit(s);
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

