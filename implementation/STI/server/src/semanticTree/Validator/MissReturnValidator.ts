import {SUnit} from "../SUnits/SUnit";
import XXXValidator from "./XXXValidator";
import {SBlock} from "../SUnits/Sunits";

export default class MissReturnValidator extends XXXValidator{
    public override visitBlock(sunit: SBlock) {
        //TODO check return
    }
}
