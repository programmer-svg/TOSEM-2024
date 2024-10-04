import { SConstDef, SFieldDef, SForStmt, SForValueStmt, SFunctionDef, SLiteral, SSimpleClassDef } from '../SUnits/Sunits';
import { Logger } from './Logger';
import { Validator } from './Validator';
import XXXValidator from "./XXXValidator";

export class TokenNameIsKeyWordValidator extends XXXValidator{


	public override visitFieldDef(sunit:SFieldDef){
		if(!sunit.ID.text) return;

		const id = this.logger.tokenNameLegal(sunit.ID.text);
        if(id){
            this.push2InfoArray(sunit.ID,sunit.ID,id);
        }
	}

	public override visitConstDef(sunit:SConstDef){
		if(!sunit.ID.text) return;
		
		const id = this.logger.tokenNameLegal(sunit.ID.text);
        if(id){
            this.push2InfoArray(sunit.ID,sunit.ID,id);
        }
	}

	public override visitForValueStmt(sunit:SForValueStmt){
		if(!sunit.ID.text) return;
		
		const id = this.logger.tokenNameLegal(sunit.ID.text);
        if(id){
            this.push2InfoArray(sunit.ID,sunit.ID,id);
        }
	}

	public override visitFunctionDef(sunit:SFunctionDef){
		if(!sunit.ID.text) return;
		
		const id = this.logger.tokenNameLegal(sunit.ID.text);
        if(id){
            this.push2InfoArray(sunit.ID,sunit.ID,id);
        }
	}

	public override visitForStmt(sunit:SForStmt){
		if(!sunit.ID.text) return;
		
		const id = this.logger.tokenNameLegal(sunit.ID.text);
        if(id){
            this.push2InfoArray(sunit.ID,sunit.ID,id);
        }
	}

	public override visitSimpleClassDef(sunit:SSimpleClassDef){

		
		const id = this.logger.tokenNameLegal(sunit.classType.name);
        if(id){
            this.pushType2InfoArray(sunit.classType,sunit.classType,id);
        }
	}
}

