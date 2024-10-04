import { SymbolTable } from '../symbol/SymbolTable';
import { SUnit } from '../SUnits/SUnit';
import { allSymbolMaps, documents } from '../../browserServerMain';
import { Union } from '../SUnits/Union';
import SymbolTableBuilder from '../symbol/symbolTableBuilder/SymbolTableBuilder';
import { BaseSymbol } from '../symbol/BaseSymbol';
import { ScopedSymbol } from '../symbol/ScopedSymbol';

export class AllSymbolMaps{
	public uri2Symbol:Map<string,SymbolTable> = new Map();
	public uri2Sunit:Map<string,SUnit> = new Map();

	public set(uri:string) {
		if(!this.uri2Symbol.get(uri)){
			const document = documents.get(uri);
			if(!document){
				return undefined;
			}

			const code = document.getText();
			const sunit = Union.buildSunits(code);
			this.uri2Sunit.set(uri,sunit);

			const symbolTable = new SymbolTable("", {allowDuplicateSymbols:true});
			const symbolTableBuilder = new SymbolTableBuilder(symbolTable,uri,uri);
			symbolTableBuilder.visit(sunit);

			this.uri2Symbol.set(uri,symbolTable);
		}
	}

	public remove(uri:string) {
		this.uri2Sunit.delete(uri);
		this.uri2Symbol.delete(uri);
	}

	public getSymbolTable(uri:string):SymbolTable|undefined {
		this.set(uri);
		return this.uri2Symbol.get(uri);
	}

	public geSunit(uri:string):SUnit|undefined {
		this.set(uri);
		return this.uri2Sunit.get(uri);
	}
}

export function find(uri:string,name:string,prefix:string[]):BaseSymbol|undefined{
	
	const symbolTable = allSymbolMaps.getSymbolTable(uri);
	// console.log(symbolTable);
	// console.log(name);
	if(!symbolTable) return undefined;

	const scope = symbolTable.resolveSync("") as ScopedSymbol;
	const ret = scope.resolveSync(name);
	return ret;
}

// export async function nestedFind(curScope:ScopedSymbol,name:string){
// 	const ret:BaseSymbol|undefined = undefined;
// 	// eslint-disable-next-line no-constant-condition
// 	while(true){
// 		const symbol = await curScope.resolve(name);
// 		if(symbol) return symbol;
// 		if(!curScope.parent) return undefined;
// 		curScope = curScope.parent as ScopedSymbol;
// 	}
// }
//
// export async function findInSymbolTable(table:SymbolTable,name:string,prefix:string[]){
// 	const scope = await table.resolve("");
// 	let curScope:ScopedSymbol = scope as ScopedSymbol;
//
// 	for(const scopeName of prefix){
// 		if(scopeName === '') continue;
// 		else if(scopeName[0] === '@'){
// 			console.log('scopeName[0] === @');
// 			console.log(curScope);
// 			console.log(scopeName.slice(1));
// 			const classSym = await nestedFind(curScope,scopeName.slice(1));//寻找定义
// 			console.log(classSym);
// 			if(classSym === undefined) return undefined;
// 			const ct = (classSym as VariableSymbol).classType;
// 			if(ct) return await (ct as ClassSymbol).resolve(name);
// 		}
// 		else curScope = (await curScope.resolve(scopeName)) as ScopedSymbol;
// 	}
//
// 	//cant diectly use nestedFind in c3,like Func{ a = 3}  Func{ a }
// 	//hover on last one should be undifined
// 	const ret = await nestedFind(curScope,name);
// 	return ret;
// }