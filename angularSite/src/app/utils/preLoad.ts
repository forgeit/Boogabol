import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Helper } from '../utils/helper';

declare var $: any;

@Injectable()
export class PreLoad implements CanActivate {

    constructor(private helper: Helper) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.helper.startSpinnerLoader();
        return true;        
    }
}