import * as lsp from 'vscode-languageserver';
import { getPosition,allSymbolMaps,findInSymbolTable,kind2String } from '../test_hover/hover';
import { RoutineSymbol } from '../test_diagnostics/symbol/RoutineSymbol';
/**
 * @param params 
 * @returns 
 */
export async function getSignatureHelp(params: lsp.SignatureHelpParams):Promise<lsp.SignatureHelp>{
	console.log('getSignatureHelp');
	console.log(params);
	const plainRet = {
		activeSignature: undefined,
		activeParameter: undefined,
		signatures:[]
	};
	//character needs to minus 1, otherwise it will points to the (, and get undifined eventually => TODO handle if the user press add (a,b)?
	//TODO handle retrigger
	const position = await getPosition({line:params.position.line,character:params.position.character-1,uri:params.textDocument.uri});
	if(position){
		const symbolTable = allSymbolMaps.getSymbolTable(params.textDocument.uri);
		if(symbolTable === undefined){
			return plainRet;
		}

		const prefixArr:string[] = position.prefix.split(' ');
		let ret = await findInSymbolTable(symbolTable,position.context.text,prefixArr);
		// console.log('ret')
		// console.log(ret)
		if(ret && ret instanceof RoutineSymbol){
			const temp = await ret.resolve(position.context.text); 
			if(temp){
				ret = temp;
			}

			const kind = (ret as RoutineSymbol).returnType?.kind;
			const params = await (ret as RoutineSymbol).getParameters();
			let paramString = '';
			for(const param of params){
				if(paramString !== '') paramString+=',';
				paramString+=kind2String(param.type?.kind);
				paramString+=' ';
				paramString+=param.name;
			}
			
			const paramsString = [];
			for(const param of params){
				paramsString.push({label:param.name+" "+kind2String(param.type?.kind)});
			}
			// console.log("paramsString")
			// console.log(paramsString)
			return {
				signatures:[{
					label:kind2String(kind)+" " +position.context.text +"("+paramString+")",
					parameters:paramsString
				}]
			};
		}
	}
	return plainRet;
}