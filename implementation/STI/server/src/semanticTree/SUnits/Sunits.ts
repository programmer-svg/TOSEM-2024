import { SUnit } from './SUnit';
import * as auto from './autoGenSUnits';
import {ReferenceKind, Type, TypeKind} from "../symbol/types";

export class SProg extends SUnit{
	statement!:SStatement[];
}

export class SStatement extends SUnit{
	simpleClassDef?:SSimpleClassDef = undefined;
	functionDef?:SFunctionDef = undefined;
	constDef?:SConstDef = undefined;
	fieldDef?:SFieldDef = undefined;
	assignment?:SAssignment = undefined;
	ifStmt?:SIfStmt = undefined;
	forStmt?:SForStmt = undefined;
	wihilStmt?:SWihilStmt = undefined;
	returnStmt?:SReturnStmt = undefined;
	evaluationStmt?:SEvaluationStmt = undefined;
	statement?:SStatement[] = undefined;
	continue?:auto.CONTINUE = undefined;
	break?:auto.BREAK = undefined;
}
export class SSimpleClassDef extends SUnit{
	class!:auto.CLASS;
	classType!:Type;
	fieldDef!:SFieldDef[];
	ID!:SID[];
}

export class SFunctionDef extends SUnit{
	parametersDef?:SParametersDef = undefined;
	statement!:SStatement[];
	type!:Type;
	ID!:SID;
}

export class SParametersDef extends SUnit{
	fieldDef!:SFieldDef[];
}

export class SConstDef extends SUnit{
	type!:Type;
	statement!:SStatement[];
	used!:boolean;
	ID!:SID;
}

export class SFieldDef extends SUnit{
	type!:Type;
	ID!:SID;
	evaluationStmt?:SEvaluationStmt = undefined;
	used!:boolean;
}

export class SAssignment extends SUnit{
	refStmt!:SRefStmt;
	indexer?:SIndexer = undefined;
	evaluationStmt!:SEvaluationStmt;
}

export class SIfStmt extends SUnit{
	condition!:SCondition[];
	block!:SBlock[];
}

export class SForStmt extends SUnit{
	evaluationStmt!:SEvaluationStmt;
	block!:SBlock;
	ID!:SID;
}

export class SWihilStmt extends SUnit{
	condition!:SCondition;
	block!:SBlock;
}

export class SReturnStmt extends SUnit{
	evaluationStmt?:SEvaluationStmt = undefined;
}

//we need lparen to distinguish
export class SEvaluationStmt extends SUnit{
	operator2?:SOPERATOR2 = undefined;
	not?:auto.NOT = undefined;
	in?:auto.IN = undefined;
	operator1?:SOPERATOR1 = undefined;
	evaluationStmt?:SEvaluationStmt[] = undefined;
	lparen?:auto.LPAREN = undefined;
	and?:auto.AND = undefined;
	or?:auto.OR = undefined;
	inc?:auto.INC = undefined;
	dec?:auto.DEC = undefined;
	ID?:SID;
	indexer?:SIndexer;
	functionCall?:SFunctionCall;
	cosntCall?:SConstCall;
	newStmt?:SNewStmt;
	refStmt?:SRefStmt;
	forValueStmt?:SForValueStmt;
	literal?:SLiteral;
}

export class SRefStmt extends SUnit{
	AT?:auto.AT;
	BITAND?:auto.BITAND;
	ID!:SID[];
}

export class SFunctionCall extends SUnit{
	ID!:SID[];
	parameters?:SParameters;
}

export class SConstCall extends SUnit{
	ID!:SID[];
}

export class SForValueStmt extends SUnit{
	evaluationStmt!:SEvaluationStmt[];
	ID!:SID;
}

export class SNewStmt extends SUnit{
	classType!:Type;
}

export class SBlock extends SUnit{
	statement!:SStatement[];
}

export class SParameters extends SUnit{
	parameter!:SParameter[];
}

export class SParameter extends SUnit{
	evaluationStmt!:SEvaluationStmt;
}

export class SCondition extends SUnit{
	evaluationStmt!:SEvaluationStmt;
}

export class SOPERATOR1 extends SUnit{

}

export class SOPERATOR2 extends SUnit{
	
}

export class SIndexer extends SUnit{
	evaluationStmt!:SEvaluationStmt[];
}

export class SClassType extends SUnit{
	ID!:SID[];
}

export class SLiteral extends SUnit{
	string?:SString;
	floatLiteral?:SFloatLiteral;
	integerLiteral?:SIntegerLiteral;
	errorLiteral?:SErrorLiteral;
	array?:SArray;
	tuple?:STuple;
	boolean?:SBOOLEAN;
}

export class SString extends SUnit{
}

export class SFloatLiteral extends SUnit{
}

export class SIntegerLiteral extends SUnit{
}

export class SArray extends SUnit{
	element?:SElement[];
}

export class STuple extends SUnit{
	element!:SElement[];
}

export class SElement extends SUnit{
	evaluationStmt!:SEvaluationStmt;
}

export class SBOOLEAN extends SUnit{
}

export class SErrorLiteral extends SUnit{
}

export class SID extends SUnit{
}






