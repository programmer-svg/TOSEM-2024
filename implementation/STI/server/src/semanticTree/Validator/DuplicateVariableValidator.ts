
import { SUnit } from '../SUnits/SUnit';
import {SFieldDef, SLiteral, SProg} from '../SUnits/Sunits';
import { ScopedSymbol } from '../symbol/ScopedSymbol';
import { Logger } from './Logger';
import { Validator } from './Validator';
import XXXValidator from "./XXXValidator";
import {BaseSymbol} from "../symbol/BaseSymbol";

export class DuplicateVariableValidator extends XXXValidator{
	// public logger = Logger.getLogger();

	public duplicateVariableSet = new Set<string>();
	

	protected withScope(name:string,action: () => any){
		this.duplicateVariableSet.clear();
        const scope = this.scope.resolveSync(name);
        // scope.context = tree;
        this.scope = scope as ScopedSymbol;
        try {
            return action();
        } finally {
            this.scope = this.scope.parent as ScopedSymbol;
        }
    }


    private dfs(symbolTable: ScopedSymbol) : void{
        const names = symbolTable.names;
        for (const name of names.entries()){
            if (name[1] > 1){
                this.duplicateVariableSet.add(name[0]);
            }
        }
        const children = symbolTable.children;
        for (const symbol of children){
            if (symbol instanceof ScopedSymbol){
                this.withScope(symbol.name,()=>{
                    this.dfs(symbol);
                });

            }
        }
        return;
    }
	public override visitProg(sunit: SProg): any {
        // const children = this.symbolTable.children;
        // for (const symbol  of children){
        //     if (symbol instanceof ScopedSymbol){
        //         this.withScope(symbol.name,()=>{
        //             this.dfs(symbol);
        //         });
        //     }
        // }
        
	}

	public override visitFieldDef(sunit:SFieldDef){
		// if(this.duplicateVariableSet.has(sunit.ID.text!)){
		// 	this.push2InfoArray(sunit.ID,undefined,this.logger.hasBeenDef(sunit.ID.text!));
		// }
		// this.duplicateVariableSet.add(sunit.ID.text!);
		// const sym = this.resolveSync(sunit.ID.text!,false);
		// if (sym){
		// 	this.push2InfoArray(sunit.ID,undefined,this.logger.hasBeenDef(sunit.ID.text!));
		// }
        const names = this.scope.names;
        const number = names.get(sunit.ID.text!);
        if (number && number > 1){
            this.push2InfoArray(sunit.ID,undefined,this.logger.hasBeenDef(sunit.ID.text!));
        }
	}
}

