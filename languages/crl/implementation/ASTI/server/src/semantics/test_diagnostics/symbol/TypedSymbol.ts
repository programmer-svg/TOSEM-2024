/*
 * This file is released under the MIT license.
 * Copyright (c) 2023, Mike Lischke
 *
 * See LICENSE file for more info.
 */

import { Type } from "./types";
import { BaseSymbol } from "./BaseSymbol";
import { ClassSymbol } from './ClassSymbol';

/** A symbol with an attached type (variables, fields etc.). */
export class TypedSymbol extends BaseSymbol {
    public type: Type | undefined;
    /**
     * added, if a symbol is an instance, it has this parameter pointing to its class.
     */
    public classType : ClassSymbol | undefined;

    public constructor(name: string, type?: Type) {
        super(name);
        this.type = type;
    }
}
