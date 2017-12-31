import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import * as _ from 'lodash';

import { State } from '../reducers';
import { AuthUser } from '../models';
import { authUserReducer } from '../reducers';


@Injectable()
export class AuthUserGuard implements CanActivate {

  constructor(private store: Store<State>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.select(authUserReducer.getUser)
        .filter(u => !_.isUndefined(u))
        .map(u => !_.isNil(u));
  }
}
