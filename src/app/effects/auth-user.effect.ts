import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { AuthUserActions } from '../actions';
import { AuthService } from '../services';

@Injectable()
export class AuthUserEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    @Effect()
    login$: Observable<Action> = this.actions$
        .ofType(AuthUserActions.LOGIN)
        .pipe(
            map(toPayload),
            switchMap(payload => {
                this.authService.login();
                return this.authService.loginResult$()
                    .pipe(
                        map(result => new AuthUserActions.LoginSuccess(result)),
                        catchError(err => of(new AuthUserActions.LoginFailure()))
                    );

            })
        );
}
