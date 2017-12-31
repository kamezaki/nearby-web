import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { AuthUserActions } from '../actions';
import { AuthService } from '../services';
import { toPayload } from '@ngrx/effects/src/util';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class AuthUserEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    // @Effect() update$: Observable<Action> = this.actions$
    //     .ofType(AuthUserActions.UPDATE)
    //     .pipe(
    //         map(toPayload),
    //         switchMap(payload => )
    //     );

}
