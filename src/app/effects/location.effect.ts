import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import { LocationActions } from '../actions';
import { Location } from '../models';
import { CurrentLocationService } from '../services';

@Injectable()
export class LocationEffects {
    constructor(private action$: Actions, private currentLocationService: CurrentLocationService) {}

    @Effect()
    current$: Observable<Action> = this.action$
        .ofType(LocationActions.CURRENT)
        .pipe(
            map(toPayload),
            switchMap(payload => {
                return this.currentLocationService.getLocation$({})
                    .pipe(
                        map(position => {
                            const l: Location = {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            };
                            return new LocationActions.CurrentSuccess(l);
                        }),
                        catchError(err => of(new LocationActions.CurrentFailure()))
                    );
            })
        );
}
