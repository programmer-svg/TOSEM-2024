import {
    SArray,
    SAssignment, SBlock,
    SClassType, SCondition, SConstDef,
    SEvaluationStmt,
    SFieldDef,
    SFunctionCall, SFunctionDef,
    SRefStmt,
    SReturnStmt
} from "../SUnits/Sunits";
import XXXValidator from "./XXXValidator";
import {ReferenceKind, Type, TypeKind} from "../symbol/types";
import {VariableSymbol} from "../symbol/VariableSymbol";
import {ClassSymbol} from "../symbol/ClassSymbol";
import {FundamentalType} from "../symbol/FundamentalType";
import {computeUri, getFile2, getUri} from "../utils/files";
import {validateTextDocument} from "../../browserServerMain";
import {TypedSymbol} from "../symbol/TypedSymbol";
import {ParserRuleContext} from "antlr4ts";
import {SUnit} from "../SUnits/SUnit";
import {RoutineSymbol} from "../symbol/RoutineSymbol";
import {ParameterSymbol} from "../symbol/ParameterSymbol";


export default class TypeMismatchValidator extends XXXValidator{

    private returnType :Type|undefined = undefined;
    private haveReturned = false;
    public noNameBlockCnt = 0;
    public override visitFieldDef(sunit: SFieldDef): any {
        this.returnType = sunit.type;
        if (sunit.evaluationStmt){
            const leftType = sunit.type;
            // console.log("leftType = " + leftType?.name);
            const rightType = this.visitEvaluationStmt(sunit.evaluationStmt);
            // console.log("rightType = " + rightType?.name);
            if(!this.equalType(leftType,rightType)){
                this.push2InfoArray(sunit.evaluationStmt,sunit.evaluationStmt,this.logger.typeMismatch2(leftType.name,rightType.name));
                return undefined;
            }
        }
    }

    public override visitClassType(sunit: SClassType): any {
        const type = sunit.ID[sunit.ID.length-1];
        const classSymbol =  this.resolveSync(type.text!,true);
        if (!classSymbol){
            this.push2InfoArray(type,type,this.logger.noType(sunit.ID[sunit.ID.length-1]!.text!));
        }
    }

    public override visitFunctionDef(sunit: SFunctionDef) {
        this.returnType = sunit.type;
    }

    public override visitConstDef(sunit: SConstDef) {
        this.returnType = sunit.type;
    }

    public override visitEvaluationStmt(sunit: SEvaluationStmt): any {
        const op1 = sunit.operator1;
        const op2 = sunit.operator2;
        const eva = sunit.evaluationStmt;

        //LPAREN evaluationStmt RPAREN
        //e1 = evaluable_statement OPERATOR1 e2 = evaluable_statement
        if(op1){
            if(op1.text === '*' || op1.text === '/' || op1.text === '%'){
                const e1 = eva![0];
                const e2 = eva![1];
                const left:Type|null = this.visitEvaluationStmt(e1);
                const right:Type|null = this.visitEvaluationStmt(e2);


                if(left && right){
                    if(this.equalType(left,right)){
                        return left;
                    }else{
                        this.push2InfoArray(e1.ID!,e2.ID!,this.logger.typeMismatchWithOprator3(sunit.operator1?.text,left.name,right.name));
                        return undefined;
                    }
                }
            }else{ // '<' | '>' | '==' | '>=' | '<=' | '!=';
                const e3 = eva![0];
                const e4 = eva![1];
                const left:Type|null = this.visitEvaluationStmt(e3);
                const right:Type|null = this.visitEvaluationStmt(e4);
                if(left && right){
                    if(this.equalType(left,right)){
                        return this.newType('bool',sunit);
                    }else{
                        this.push2InfoArray(e3.ID!,e4.ID!,this.logger.typeMismatchWithOprator3(op1.text,left.name,right.name));
                        return undefined;
                    }
                }
            }
        }

        //e21 = evaluable_statement OPERATOR2 e22 = evaluable_statement
        if(op2 && eva!.length === 2){
            const e21 = eva![0];
            const e22 = eva![1];
            const left:Type|null = this.visitEvaluationStmt(e21);
            const right:Type|null = this.visitEvaluationStmt(e22);
            if(left && right){
                if(this.equalType(left,right)){
                    return left;
                }else{
                    this.push2InfoArray(e21.ID!,e22.ID!,this.logger.typeMismatchWithOprator3(sunit.operator2?.text,left.name,right.name));
                    return undefined;
                }
            }
        }

        //e5 = evaluable_statement AND e6 = evaluable_statement
        if(sunit.and){
            const e5 = eva![0];
            const e6 = eva![1];
            const left:Type|null = this.visitEvaluationStmt(e5);
            const right:Type|null = this.visitEvaluationStmt(e6);
            if(left && right){
                if(this.equalType(left,right) && left.kind === TypeKind.Boolean){
                    return left;
                }else{
                    this.push2InfoArray(e5.ID!,e6.ID!, this.logger.typeMismatchWithOprator3("and",left.name,right.name));
                    return undefined;
                }
            }
        }

        //OPERATOR2 e23 = evaluable_statement
        if(op2 && eva!.length === 1){
            const e23 = eva![0];
            const type = this.visitEvaluationStmt(e23);
            if(type){
                if(type.kind === TypeKind.Integer || type.kind === TypeKind.Float){
                    return type;
                }else{
                    this.push2InfoArray(e23.ID!,e23.ID!,this.logger.typeMismatchWithOprator2(sunit.operator2?.text,type.name));
                    return undefined;
                }
            }
            return undefined;
        }

        //LPAREN e20 = evaluable_statement RPAREN
        if(sunit.lparen){
            return this.visitEvaluationStmt(eva![0]);
        }

        //TODO : RECORD VARIABLE IS USED

        const id = sunit.ID;
        if(id){
            const sym = this.resolveSync(id.text!,false);
            if(sym instanceof VariableSymbol || sym instanceof ParameterSymbol){
                return sym.type;
            }
            if(sym === undefined){
                // console.log("sym undefined 1");
                this.push2InfoArray(id,undefined,this.logger.CannotReference(id.text!));
            }
            return undefined;
        }

        const constCall = sunit.cosntCall;

        const _id2 = constCall?.ID[constCall.ID.length - 1];
        if(constCall && _id2 && _id2.text){
            const sym = this.resolveSync(_id2.text,false);  //this.scope.resolveSync(constCall._id2.text,true);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
                this.push2InfoArray(_id2,undefined,this.logger.CannotReference(_id2.text));
            }
        }

        const funcCall = sunit.functionCall;
        if(funcCall){
            const text = funcCall.ID[funcCall.ID.length -1].text;
            const func = this.resolveSync(text!,false);
            if (func instanceof RoutineSymbol){
                return func.returnType;
            }
            return undefined;
        }

        //newStmt: NEW classType;
        //classType: (id1 = ID COLON_CALL)? id2 = ID;
        // const newStmt = sunit.newStmt;
        // if(newStmt){
        //     let classType = sunit.newStmt!.classType;
        //     if(classType){
        //         const sym = this.resolveSync(classType.name,false);
        //         if(!sym){
        //             this.push2InfoArray(sunit,sunit,this.logger.noClassType(classType.name));
        //             return undefined;
        //         }
        //
        //         if(sym instanceof ClassSymbol){
        //
        //         }
        //         else{
        //             this.push2InfoArray(sunit,sunit,this.logger.noClassType(classType.name));
        //             return undefined;
        //         }
        //     }
        //     return newStmt.classType;
        // }


        const lit = sunit.literal;
        if(lit){
            const a = lit.array;
            const t = lit.tuple;
            const el = lit.errorLiteral;
            if(lit.floatLiteral) return this.newType('float', lit);
            if(lit.string) return this.newType('string', lit);
            if(lit.boolean) return this.newType('bool', lit);
            if(lit.integerLiteral) return this.newType('int', lit);
            if(a) return this.visitArray(a);
            if(t) return this.visitTuple(t);
            // if(el) return this.visitErrorLiteral(el);
        }

        //refStmt: (AT|BITAND)? id1 = ID (DOT id2 = ID)?;
        // const ref = sunit.refStmt;
        // if(ref){
        //     return this.visitRefStmt(ref);
        // }
        return undefined;
    }



    public override visitArray(sunit: SArray): any {
        let type:Type|undefined = undefined;
        for(const ele of sunit.element!){
            if(!type){
                type = this.visitEvaluationStmt(ele.evaluationStmt);
            }
            else{
                const cur = this.visitEvaluationStmt(ele.evaluationStmt);
                if(cur && ! this.equalType(type,cur)){
                    this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2(cur?.name,type.name));
                    return undefined;
                }
            }
        }
        if(type) return new FundamentalType("["+type.name+"]", TypeKind.Array, ReferenceKind.Instance,sunit.sid,sunit.start,sunit.end);
    }

    public override visitAssignment(sunit: SAssignment): any {
        // console.log("visit assignment typeMismatch");
        const ref = sunit.refStmt;
        const left = ref.ID[0];
        const type = this.visitRefStmt(ref);
        if(!type){
            this.push2InfoArray(left,left,this.logger.CannotReference(left.text!));
            return;
        }
        // console.log("visit assignment typeMismatch ---- left type is " + type.name);
        const rightType = this.visitEvaluationStmt(sunit.evaluationStmt);
        // console.log("visit assignment typeMismatch ---- right type is " + rightType.name);
        if(rightType && ! this.equalType(type,rightType)){
            this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2(type.name,rightType.name));
            return null;
        }
    }

    public override visitRefStmt(sunit: SRefStmt): any {
        //TODO : REFSTMT (AT | BITAND)
        // console.log("visit refstmt typeMismatch");
        const id1 = sunit.ID[0];

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
        if(sunit.ID.length == 1){
            if(!id1.text) return undefined;
            const sym = this.resolveSync(id1.text,false);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
                this.push2InfoArray(id1,id1,this.logger.CannotReference(id1.text));
            }
            return undefined;
        }else{//id2
            const id2 = sunit.ID[1];
            if(!id1.text || !id2.text) return undefined;
            const sym = this.resolveSync(id1.text);
            if(sym === undefined){
                this.push2InfoArray(id1,id1,this.logger.CannotReference(id1.text));
                return undefined;
            }
            if(sym instanceof VariableSymbol){
                const claSym = sym.classType;
                if(!claSym){
                    this.push2InfoArray(id1,id1,this.logger.noClassType(id1.text));
                    return undefined;
                }
                const variable = this.resolveSync(id2.text,false,claSym);
                if(!variable){
                    this.push2InfoArray(id2,id2,this.logger.CannotReference(id2.text));
                    return undefined;
                }
                return (variable as TypedSymbol).type;
            }
            return undefined;
        }
        return undefined;
    }

    public override visitBlock(sunit: SBlock) {
        //TODO SET RETURNTYPE

        // const returned = false;
        // if(this.returnType){
        //     //需哟使用typeAction封装，保证内部的return语句不会影响外部
        //     this.withScope( ["@block"+this.noNameBlockCnt++], () => {
        //         for(const s of sunit.statement){
        //             this.visit(s);
        //             if(s.returnStmt) returned = true;
        //         }
        //     });
        // }
    }

    public override visitReturnStmt(sunit: SReturnStmt): any {
        const es = sunit.evaluationStmt;
        // console.log('returnStmt');
        if(es) this.visitEvaluationStmt(es);
        if(this.scope === this.symbolTable.resolveSync("",true)){
            //处于最外层
            // console.log('outer scope');
            if(es){
                const type:Type|undefined = this.visitEvaluationStmt(es);
                if(type) this.symbolTable.type = type;
            }
        }

        //TODO : CHECK RETURN TYPE

        this.haveReturned = true;
        if(!es){
            if(this.returnType && this.returnType.kind !== TypeKind.Void){
                this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2('void',this.returnType.name));
            }
            return null;
        }
        if(es){
            const type:Type|undefined = this.visit(es);
            if(type && this.returnType){
                if(this.returnType.kind === TypeKind.Void){
                    this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2(type.name,'void'));
                    return null;
                }

                if(!this.equalType(type,this.returnType)){
                    this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2(type.name,this.returnType.name));
                    return null;
                }
            }
        }
        return null;
    }

    public override visitCondition(sunit: SCondition): any {
        const type = this.visitEvaluationStmt(sunit.evaluationStmt);
        if(!type) return;

        if(type.kind === TypeKind.Boolean) return;
        else this.push2InfoArray(sunit,sunit,this.logger.typeMismatch2(type.name,'bool'));
    }




    /**
     * 该函数是对withScope中action函数进行再一次的封装，添加返回值校验相关逻辑
     * @param type
     * @param ctx
     * @param action
     * @param Log
     * @returns
     */
    private typeAction(type:Type|undefined,sunit:SUnit,action:() => void,Log = true): () => void {
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

            // if(this.returnType && !this.haveReturned && this.returnType.kind !== TypeKind.Void && Log){
            //     if(sunit.end) this.push2InfoArray(sunit,sunit,this.logger.noType(this.returnType.name));
            //     else this.push2InfoArray(sunit,sunit,this.logger.noType(this.returnType.name));
            // }
            this.returnType = prevReturnType;
            this.haveReturned = prev;
        };
    }

}
