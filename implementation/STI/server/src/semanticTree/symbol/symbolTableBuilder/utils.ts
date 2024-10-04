import {Scope} from "../../utils/files";
import {Type, TypeKind} from "../types";
import {ParserRuleContext, Token} from "antlr4ts";
import {RoutineSymbol} from "../RoutineSymbol";
import {ParameterSymbol} from "../ParameterSymbol";
import {FundamentalType} from "../FundamentalType";
import {ReferenceKind} from "../types";
import {Position} from "vscode-languageserver";
import {SLiteral} from "../../SUnits/Sunits";

interface info{
    msg:string,
    startLine:number,
    startColumn:number,
    endLine:number,
    endColumn:number,
    length:number
}
export function scope2String(scope:Scope):string{
    if(scope === Scope.GloBal) return 'Global';
    if(scope === Scope.Parameter) return 'Parameter';
    if(scope === Scope.Parts) return 'Parts';
    return 'Statistics';
}

export function scope2Num(scope:Scope):number{
    if(scope === Scope.GloBal) return 0;
    if(scope === Scope.Parameter) return 1;
    if(scope === Scope.Parts) return 2;
    return 3;
}

/**
 * TODO ['int'] == [ 'int' ] type相同但name不同,所以判定name相同时需要将空格都删掉
 * @param type1
 * @param type2
 * @returns
 */
export function equalType(type1:Type,type2:Type){
    if(type1.kind !== type2.kind || type1.name !== type2.name) return false;
    if(type1.inner.length !== type2.inner.length) return false;
    for(let i = 0;i<type1.inner.length;i++){
        if(!equalType(type1.inner[i],type2.inner[i])) return false;
    }
    return true;
}

/**
 * 获取一个函数的所有参数
 * @param name
 * @returns
 */
export function getPds(func:RoutineSymbol):Type[]|undefined{
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

export function push2InfoArray(infoArray:info[],start:Token,end:Token|undefined,msg:string,token?:Token):void{
    let length = 0;
    let len = 0;
    if(start.text){
        length = start.text.length;
    }
    if(end === undefined){
        infoArray.push({
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
    infoArray.push({
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
export function popInfoArray(infoArray:info[]):void{
    infoArray.pop();
}

export function newType(name:string , literal:SLiteral):Type{
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
    return new FundamentalType(name,typeKind, ReferenceKind.Instance, literal.sid , literal.start, literal.end );

}

