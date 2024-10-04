/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Type, ReferenceKind, TypeKind } from "./types";

import { BaseSymbol } from "./BaseSymbol";
import { Position } from '../SUnits/SUnit';

export class ArrayType extends BaseSymbol implements Type {

    public readonly elementType: Type;
    public readonly size: number; // > 0 if fixed length.
    public start!:Position;
    public sid!:number;
    public end!:Position;

    private referenceKind: ReferenceKind;

    public constructor(name: string, referenceKind: ReferenceKind, elemType: Type, size = 0) {
        super(name);
        this.referenceKind = referenceKind;
        this.elementType = elemType;
        this.size = size;
    }

    public get baseTypes(): Type[] { return []; }
    public get kind(): TypeKind { return TypeKind.Array; }
    public get reference(): ReferenceKind { return this.referenceKind; }
    public get inner(): Type[] { return this.inner; }
}
