/**
 * productId/参数or部件or统计/部件下算法类型/算法名称/默认字段

1/para or part or s or g/f or c or a/obj/objF
 * uri = '798373788/Parameter/Algorithm/V1';
 */
import { SymbolTable } from '../symbol/SymbolTable';
import { documents } from '../../browserServerMain';


/**
  name-scope-type-obj-objField
	添加product中的内容
*/
export function createFile(fullName:string,uri:string):Scope|undefined{
	console.log('createFile');
	console.log(fullName);

	//check name
	let count = 0;
	for(const n of fullName){
		if(n ==='_') count++;
	}
	if(count  <= 2) return undefined;


	const list = fullName.split('_');
	let ret:Scope|undefined = undefined;
	if(list.length === 1) return ret;

	const Pname = list[0];
	let product = products.get(Pname);
	if(!product){
		product = new Product(Pname,uri);
		products.set(Pname,product);
	}

	const scope = list[1];
	let added = product.global;
	ret = Scope.GloBal;
	console.log(scope.toLocaleLowerCase());
	if(scope.toLowerCase().slice(0,4) === 'para'){
		added = product.parameter;
		ret = Scope.Parameter;
	}
	else if(scope.toLowerCase().slice(0,4) === 'part'){
		added = product.parts;
		ret = Scope.Parts;
	}
	else if(scope.toLowerCase()[0] === 's'){
		added = product.statistics;
		ret = Scope.Statistics;
	}else{
		added = product.global;
		ret = Scope.GloBal;
	}

	const type = list[2];
	const obj = list[3];
	if(type.toLowerCase()[0] === 'f'){
		added.functions.set(obj,uri);
	}
	else if(type.toLowerCase()[0] === 'c'){
		added.const.set(obj,uri);
	}
	else{
		const objField = list[4];
		let alg = added.Algrithm.get(obj);
		if(!alg){
			alg = new Map<string,string>;
			added.Algrithm.set(obj,alg);
		}
		alg.set(objField,uri);
	}
	console.log(ret);
	return ret;
}

/**
  name-scope-type-obj-objField
	添加product中的内容
*/
export function deleteFile(fullName:string):Scope|undefined{
	console.log('deleteFile');
	console.log(fullName);
	const list = fullName.split('_');
	let ret:Scope|undefined = undefined;
	if(list.length === 1) return ret;

	const Pname = list[0];
	const product = products.get(Pname);
	if(!product){
		return undefined;
	}

	const scope = list[1];
	let deleted = product.global;
	ret = Scope.GloBal;
	if(scope.toLowerCase().slice(0,4) === 'para'){
		deleted = product.parameter;
		ret = Scope.Parameter;
	}
	else if(scope.toLowerCase().slice(0,4) === 'part'){
		deleted = product.parts;
		ret = Scope.Parts;
	}
	else if(scope.toLowerCase()[0] === 's'){
		deleted = product.statistics;
		ret = Scope.Statistics;
	}else{
		deleted = product.global;
		ret = Scope.GloBal;
	}

	const type = list[2];
	const obj = list[3];
	if(type.toLowerCase()[0] === 'f'){
		if(deleted.functions.delete(obj)) return ret;
		return undefined;
	}
	else if(type.toLowerCase()[0] === 'c'){
		if(deleted.const.delete(obj)) return ret;
		return undefined;
	}
	else{
		const objField = list[4];
		const alg = deleted.Algrithm.get(obj);
		if(!alg){
			return undefined;
		}
		console.log(alg);
		if(alg.delete(objField)){
			console.log(alg); 
			console.log(products);
			return ret;
		}
		return undefined;
	}
}

/**
  name-scope-type-obj-objField
	获取符号表

	@部件统计 &参数
*/
export function getUri(fullName:string,isAt:boolean,id1:string,id2:string):string|undefined{
	const list = fullName.split("_");
	if(list.length === 1) return;

	const Pname = list[0];
	const product = products.get(Pname);
	let ret:string|undefined = undefined;
	if(!product) return undefined;
	console.log(product);

	if(isAt){
		ret = product.parts.Algrithm.get(id1)?.get(id2);
		if(ret) return ret;

		ret = product.statistics.Algrithm.get(id1)?.get(id2);
		if(ret) return ret;
	}else{
		ret = product.parameter.Algrithm.get(id1)?.get(id2);
		if(ret) return ret;
	}

	return undefined;
}

export function computeUri(fullName:string):string[]{
	console.log('computeUri');
	const ret:string[] = [];
	const uris = documents.all().map(d => {
		return d.uri;
	});
	console.log(uris);
	const list = fullName.split("_");
	const PID = list[0];
	for(const uri of uris){
		const name = uri.split("/").slice(3)[0];
		const namePID = name.split("_")[0];
		if(PID === namePID) ret.push(uri);
	}

	return ret;
}

export function getFile2(fullName:string,isAt:boolean,id1:string,id2:string):SymbolTable|undefined{
	const uri = getUri(fullName,isAt,id1,id2);
	if(uri){
		//TODO return allSymbolMaps.getSymbolTable(uri);
		return undefined;
	}
	return undefined;
}

export const products:Map<string,Product> = new Map();

export enum Scope{
	GloBal,
	Parameter,
	Parts,
	Statistics
}

/**
 * 
 */
export class BaseFolder{
	/**
	 * name 2 uri
	 */
	public functions:Map<string,string> = new Map();

	/**
	 * name 2 new Map a
	 * a is name 2 uri
	 */
	public Algrithm:Map<string,Map<string,string>> = new Map();

	/**
	 * name 2 uri
	 */
	public const:Map<string,string> = new Map();

	parent:Product;

	public constructor(parent:Product){
		this.parent = parent;
	}
}

/**
 * product
 */
export class Product{
	public name = "";
	public id = "";
	public global = new Global(this);
	public parameter = new Parameter(this);
	public parts = new Parts(this);
	public statistics = new Statistics(this);

	public constructor(name:string,id:string){
		this.name = name;
		this.id = id;
	}
}

/**
 * 参数
 */
export class Parameter extends BaseFolder{

}

/**
 * 部件
 */
export class Parts extends BaseFolder{

}

/**
 * 统计
 */
export class Statistics extends BaseFolder{

}

/**
 * 统计
 */
export class Global extends BaseFolder{

}

