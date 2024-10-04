
import { Range } from 'vscode-languageserver';
import { allSymbolMaps } from '../../../browserServerMain';
import { SUnit } from '../../SUnits/SUnit';
import { getRange } from '../gotoDefinition/gotoDefinition';


interface ret{
	sunit: SUnit,
	prefix: Range[],
}


function isFinal(sunit:SUnit):boolean{
	let name: keyof SUnit;
	for(name in sunit){
		const unit = sunit[name];
		if(unit instanceof SUnit){
			return false;
		}
		if(unit instanceof Array){
			for(const u of unit){
				if(u instanceof SUnit){
					return false;
				}
			}
		}
	}
	return true;
}

export type CaretPosition = { line: number, column: number };
export type CaretPositionAndUri = { line: number, character: number, uri:string };

export function contains(sunit:SUnit,caretPosition:CaretPosition){
	return caretPosition.line === sunit.start.line && caretPosition.line === sunit.end.line && caretPosition.column >= sunit.start.charPositionInLine && caretPosition.column <= sunit.end.charPositionInLine + sunit.end.length;
}

export function computePosition(sunit:SUnit,caretPosition:CaretPosition,prefix:Range[]):ret|undefined {
	if(isFinal(sunit)){
		return positionOfFinal(sunit,caretPosition,prefix);
	}
	return positionOfChildren(sunit,caretPosition,prefix);

}

export function positionOfChildren(sunit:SUnit,caretPosition:CaretPosition,prefix:Range[]):ret|undefined {
	let name: keyof SUnit;
        for(name in sunit){
            const unit = sunit[name];
            if(unit instanceof SUnit && contains(unit,caretPosition)){
				if(unit.text !== undefined){
					prefix.push(getRange(unit,unit,"").range);
				}
                return computePosition(unit,caretPosition,prefix);
            }
            if(unit instanceof Array){
                for(const u of unit){
                    if(u instanceof SUnit && contains(u,caretPosition)){
						if(u.text !== undefined){
							prefix.push(getRange(u,u,"").range);
						}
                        return computePosition(u,caretPosition,prefix);
                    }
                }
            }
        }
        return undefined;
}

/**
 * To be extended.
 */

export function positionOfFinal(sunit:SUnit,caretPosition:CaretPosition,prefix:Range[]):ret|undefined {
	return {
		sunit:sunit,
		prefix:prefix
	};
}

/**
 * 
 * @param params 
 * @param include TO Be extended. 
 */
export function getPosition(params:CaretPositionAndUri,include:number[] = []):ret|undefined{
	const sunit = allSymbolMaps.geSunit(params.uri);
	const position = {
		line:params.line + 1,
		column:params.character
	};
	if(sunit) return computePosition(sunit,position,[]);
	return undefined;
}

