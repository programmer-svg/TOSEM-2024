import { SUnit } from '../SUnits/SUnit';
import { SLiteral } from '../SUnits/Sunits';
import { Logger } from './Logger';
import { Validator } from './Validator';
import XXXValidator from "./XXXValidator";

export class ErrorCodeValidator extends XXXValidator{
	public logger = Logger.getLogger();

	public visitLiteral(sunit:SLiteral){
		const el = sunit.errorLiteral;
        if(el && el.text && !(el.text in Logger.errorLit)){
            this.push2InfoArray(el,undefined,this.logger.noErrorLit(el.text));
        }
        return undefined;
	}
}

