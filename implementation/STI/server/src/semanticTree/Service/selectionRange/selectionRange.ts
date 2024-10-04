import { SelectionRangeParams,SelectionRange,Range, Position } from 'vscode-languageserver';
import { CaretPositionAndUri, computePosition } from './computeTokenPosition';
import { allSymbolMaps, calcTimePass, documents } from '../../../browserServerMain';
import { TestLangParser } from '../../../parser/TestLangParser';

export function isSamePosition(x:Position,y:Position):boolean{
	return x.line === y.line && x.character === y.character;
}

export function isSameRange(x:Range,y:Range):boolean{
	return isSamePosition(x.start,y.start) && isSamePosition(x.end,y.end);
}

export function deleteSamePosition(range:Range[]):Range[]{
	let ret:Range[] = [];
	ret = range.filter((val,index) =>{
		if(index === 0) return true;
		if(isSameRange(val,range[index-1])) return false;
		return true;
	});
	return ret;
}

export async function getPosition(params:CaretPositionAndUri){
	
	const sunit = allSymbolMaps.geSunit(params.uri);
	if (sunit) {
		//TODO cache the parseTree and tokenStream
		const caretPosition = { line: params.line + 1, column: params.character };
		const ret = computePosition(sunit,caretPosition,[]);
		return ret;
	}
}

export function getEmptySelectionRange():SelectionRange{
	return {
		range:{start:{line:0,character:0},end:{line:0,character:0}}
	};
}
/**
 * shift + alt + (left or right)
 * @param params 
 * @returns 
 */
export async function getSelectionRange(params:SelectionRangeParams):Promise<SelectionRange[]|null>{
	// console.log('getSelectionRange');
	const uri = params.textDocument.uri;
	const position = await calcTimePass(getPosition,{...params.positions[0],uri:uri});
	// console.log(position);
	if(position === undefined) return null;
	const PosArr = deleteSamePosition(position.prefix);
	// console.log(PosArr);
	
	let cur:SelectionRange|null = null;
	let last:SelectionRange|null = null;
	for(const pos of PosArr){
		cur = getEmptySelectionRange();
		cur.range = pos;
		if(last) cur.parent = last;
		last = cur;
	}
	// console.log('getSelectionRange');
	// console.log(cur);
	
	if(cur) return [cur];
	return null;
}