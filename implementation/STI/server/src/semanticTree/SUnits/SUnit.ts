import { Token } from 'antlr4ts';
export class SUnit{
	start!:Position;
	end!:Position;
	sid!:number;
	text?:string;
	parent?:SUnit;

	constructor();
	constructor(sid:number,start:Token,end:Token|undefined);
	constructor(sid:number,start:Token,end:Token|undefined,text:string);

	constructor(sid?:number,start?:Token,end?:Token|undefined,text?:string){
		if(!sid || !start){
			return;
		}
		
		if(!end){
			this.start = this.token2Pos(start);
			this.end = this.start;
		}else{
			this.start = this.token2Pos(start);
			this.end = this.token2Pos(end);
		}
		this.sid = sid;
		this.text = text;
	}

	private token2Pos(token:Token):Position{
		let length = 0;
		if(token.text) length = token.text.length;
		return {
			line:token.line,
			charPositionInLine:token.charPositionInLine,
			length:length
		};
	}

	public visit(){
		for(const name in this){
			const unit = this[name];
			if(unit instanceof SUnit){
				unit.visit();
			}
		}
		return undefined;
	}
}

export interface Position{
	line:number;
	charPositionInLine:number;
	length:number;
}
