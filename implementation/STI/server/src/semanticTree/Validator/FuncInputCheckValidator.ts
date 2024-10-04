import {SUnit} from "../SUnits/SUnit";
import XXXValidator from "./XXXValidator";
import {SEvaluationStmt, SFunctionCall} from "../SUnits/Sunits";
import {RoutineSymbol} from "../symbol/RoutineSymbol";
import {push2InfoArray} from "../symbol/symbolTableBuilder/utils";
import {Type, TypeKind} from "../symbol/types";
import {VariableSymbol} from "../symbol/VariableSymbol";

export default class FuncInputCheckValidator extends XXXValidator{
    public override visitFunctionCall(sunit: SFunctionCall): any {

        const text = sunit.ID[sunit.ID.length - 1].text;
        if(text){
            //TODO function may be list

            const func = this.resolveSync(text,false);
            // console.log('visitFunctionCall');
            // console.log(funcs);
            //not reference
            if(!func){
                this.push2InfoArray(sunit.ID[sunit.ID.length - 1],sunit.ID[sunit.ID.length - 1],this.logger.CannotReference(text));
                return undefined;
            }

            const pds = sunit.parameters;


            /**
             * 0 未检测
             * 1,2 参数不对齐
             * 3 参数格式不对
             */
            let flag = 0;
            const errorFlag = [1,2,3];
            let pushCnt = 0;
            // for(const func of funcs){
            if(func instanceof RoutineSymbol){
                const pdDefs = this.getPds(func);

                if(pdDefs){
                    if(pds && pds.parameter.length != pdDefs.length){
                        // if(flag == 0){
                        //     flag = 1;
                        //     pushCnt++;
                            this.push2InfoArray(sunit,sunit,this.logger.functionParameterNumber(text,pdDefs.length,pds.parameter.length));
                        // }
                        // continue;
                    }
                    if(!pds && pdDefs.length != 0){
                        // if(flag == 0){
                        //     flag = 2;
                        //     pushCnt++;
                            this.push2InfoArray(sunit,sunit,this.logger.functionParameterNumber(text,pdDefs.length,0));
                        // }
                        // continue;
                    }

                    //正确：都无参数
                    if(!pds){// pdDefs.length == 0
                        // if(errorFlag.includes(flag)){
                        //     for(let i = 0;i<pushCnt;i++){
                        //         this.popInfoArray(this.infoArray);
                        //     }
                        // }
                        return func.returnType;
                    }

                    //from 1 to N, check Type.
                    let minimalLength = pdDefs.length;
                    if(minimalLength > pds.parameter.length) minimalLength = pds.parameter.length;
                    let error = false;
                    for(let index = 0;index<minimalLength;index++){
                        const type = this.visitEvaluationStmt(pds.parameter[index].evaluationStmt);
                        if(type && !this.equalType(type,pdDefs[index])){
                            // if(!error){//第一个错误
                            //     if(flag > 0){
                            //         for(let i = 0;i<pushCnt;i++){
                            //             this.popInfoArray(this.infoArray);
                            //         }
                            //     }
                            //     pushCnt = 0;
                            // }
                            // error = true;
                            // flag = 3;
                            this.push2InfoArray(pds.parameter[index],pds.parameter[index],this.logger.typeMismatch2(type.name,pdDefs[index].name));
                            // pushCnt++;
                        }
                    }

                    // if(!error){
                    //     if(flag !== 0){
                    //         for(let i = 0;i<pushCnt;i++){
                    //             this.popInfoArray(this.infoArray);
                    //         }
                    //     }
                    //     return func.returnType;
                    // }
                }
            }
            // }

        }
        return undefined;
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
            }else{
                const e3 = eva![0];
                const e4 = eva![1];
                const left:Type|null = this.visitEvaluationStmt(e3);
                const right:Type|null = this.visitEvaluationStmt(e4);
                if(left && right){
                    if(this.equalType(left,right)){
                        return this.newType('bool',sunit.ID!);
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
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            if(sym === undefined){
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
            if(lit.boolean) return this.newType('boolean', lit);
            if(lit.integerLiteral) return this.newType('int', lit);
        }

        //refStmt: (AT|BITAND)? id1 = ID (DOT id2 = ID)?;
        // const ref = sunit.refStmt;
        // if(ref){
        //     return this.visitRefStmt(ref);
        // }
        return undefined;
    }
}
