import { Location } from 'vscode-languageserver';
import Visitor from '../visitor';
import { SEvaluationStmt, SFieldDef, SRefStmt } from '../../SUnits/Sunits';
import { getRange } from '../gotoDefinition/gotoDefinition';


export class reNameVistor extends Visitor{
	public infoArray:Location[] = [];
	name!:string;
	uri!:string;

	visitEvaluationStmt = (sunit:SEvaluationStmt) =>{
		if(sunit.ID && sunit.ID.text! === this.name){
			this.infoArray.push(getRange(sunit.ID,undefined,this.uri));
		}
		else return this.visitChildren(sunit);
	};

	public visitFieldDef(sunit: SFieldDef) {
		if(sunit.ID && sunit.ID.text == this.name){
			this.infoArray.push(getRange(sunit.ID,undefined,this.uri));
		}
		if(sunit.evaluationStmt )this.visit(sunit.evaluationStmt);
	}

	public visitRefStmt(sunit: SRefStmt) {
		for(const id of sunit.ID){
			if(id.text == this.name){
				this.infoArray.push(getRange(id,undefined,this.uri));
			}
		}
	}
}