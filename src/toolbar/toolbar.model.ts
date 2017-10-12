﻿import { Portal }           from '@angular/cdk/portal';

import { LeftAction }       from './left-action.model';

export class Toolbar {
    constructor(
        public leftAction: LeftAction,
        public portal: Portal<any>,
        public title: string) {
    }
}
