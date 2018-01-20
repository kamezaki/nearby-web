import { createFeatureSelector, createSelector } from '@ngrx/store';

import { LocationActions } from '../actions';
import { Location } from '../models';

export interface State {
    location: Location;
}

export const initialState: State = {
    location: {
        longitude: 0,
        latitude: 0
    }
};

export function reducer(state = initialState, action: LocationActions.Actions): State {
    switch (action.type) {
        case LocationActions.UPDATE:
        case LocationActions.CURRENT_SUCCESS: {
            return Object.assign({}, state, { location: action.payload });
        }
        default:
            return state;
    }
}

export const getState = createFeatureSelector<State>('location');
export const getLocation = createSelector(getState, (state: State) => state.location);
