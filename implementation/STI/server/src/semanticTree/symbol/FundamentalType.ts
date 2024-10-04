/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Position } from '../SUnits/SUnit';
import { Type, TypeKind, ReferenceKind } from "./types";

/** A single class for all fundamental types. They are distinguished via the kind field. */
export class FundamentalType implements Type {
    public name: string;

    private typeKind: TypeKind;
    private referenceKind: ReferenceKind;
    public inner:Type[];
    public start:Position;
	public end!:Position;//if end don't exists, it is equal to start.
	public sid:number;


    public constructor(name: string, typeKind = TypeKind.Unknown, referenceKind = ReferenceKind.Irrelevant,SID:number,start:Position,end:Position|undefined,inner:Type[] = []) {
        this.name = name;
        this.typeKind = typeKind;
        this.referenceKind = referenceKind;
        this.inner = inner;
        this.start = start;
        if(!end) this.end = start;
        else this.end = end;
        this.sid = SID;
    }

    public get baseTypes(): Type[] {
        return [];
    }

    public get kind(): TypeKind {
        return this.typeKind;
    }

    public get reference(): ReferenceKind {
        return this.referenceKind;
    }
}
