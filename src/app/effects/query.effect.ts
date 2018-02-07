import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { QueryActions } from '../actions';
import { GatewayService } from '../services';

@Injectable()
export class QueryEffects {
    constructor(private actions$: Actions, private gatewayService: GatewayService) {}

    @Effect()
    query$: Observable<Action> = this.actions$
        .ofType(QueryActions.SEARCH)
        .pipe(
            map(toPayload),
            switchMap(payload => {
                return this.gatewayService.search$(payload)
                    .pipe(
                        map(result => new QueryActions.SearchSuccess()),
                        catchError(err => of(new QueryActions.SearchFailure()))
                    );
            })
        )
}
