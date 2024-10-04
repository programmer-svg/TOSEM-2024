import {SUnit} from "../SUnits/SUnit";
import XXXValidator from "./XXXValidator";
import {SClassType, SForStmt, SFunctionDef, SNewStmt, SRefStmt} from "../SUnits/Sunits";
import {ClassSymbol} from "../symbol/ClassSymbol";
import {VariableSymbol} from "../symbol/VariableSymbol";
import {TypedSymbol} from "../symbol/TypedSymbol";

export default class SymbolExistingValidator extends XXXValidator{
    public override visitNewStmt(sunit: SNewStmt): any {
        const classType = sunit.classType;
        if(classType){
            const sym = this.resolveSync(classType.name,false);
            if(!sym){
                this.push2InfoArray(sunit,sunit,this.logger.noClassType(classType.name));
                return undefined;
            }

            if(sym instanceof ClassSymbol){

            }
            else{
                this.push2InfoArray(sunit,sunit,this.logger.noClassType(classType.name));
                return undefined;
            }
        }
    }


    public override visitRefStmt(sunit: SRefStmt): any {
        //TODO : REFSTMT (AT | BITAND)

        const id1 = sunit.ID[0];
        const id2 = sunit.ID[1];
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
        if(!id2){
            if(!id1.text) return undefined;
            const sym = this.resolveSync(id1.text,false);
            if(sym instanceof VariableSymbol){
                return sym.type;
            }
            console.log("visit refstmt symbolExisting ---- CurScope is " );
            console.log(this.scope);
            if(sym === undefined){
                this.push2InfoArray(id1,id1,this.logger.CannotReference(id1.text));
            }
            return undefined;
        }else{//id2
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

    public override visitClassType(sunit: SClassType): any {
        const type = sunit.ID[sunit.ID.length-1];
        const classSymbol =  this.resolveSync(type.text!,true);
        if (!classSymbol){
            this.push2InfoArray(type,type,this.logger.noType(sunit.ID[sunit.ID.length-1]!.text!));
        }
    }

    public override visitForStmt(sunit: SForStmt): any {

        const variable1 = sunit.ID;
        let variableName = variable1.text;
        if(variableName === undefined) variableName = '';
        const variable = this.resolveSync(variableName,true);
        if (variable){
            this.push2InfoArray(sunit.ID,sunit.ID,this.logger.hasBeenDef(variableName));
            return;
        }
    }

    public override visitFunctionDef(sunit: SFunctionDef) {
        const functionName = sunit.ID.text!;
        const function1 = this.resolveSync(functionName,true);
        if (function1){
            this.push2InfoArray(sunit.ID,sunit.ID,this.logger.hasBeenDef(functionName));
            return;
        }
    }
}
