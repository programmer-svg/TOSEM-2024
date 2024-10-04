import {SUnit} from "../SUnits/SUnit";
import XXXValidator from "./XXXValidator";
import {SSimpleClassDef} from "../SUnits/Sunits";

export default class DuplicateValidator extends XXXValidator{
    public override visitSimpleClassDef(sunit: SSimpleClassDef): any {

        const classType = sunit.classType;
        const text = classType.name;

        if(text === undefined){
            console.log('class name is undefined!!');
            return 0;
        }

        const classDef = this.resolveSync(text,true);
        if(classDef){
            this.push2InfoArray(sunit,sunit,this.logger.classHasBeenDef(text));
            return;
        }
    }
}
