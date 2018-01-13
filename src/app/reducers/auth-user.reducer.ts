import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthUserActions } from '../actions/';
import { AuthUser } from '../models/';

export interface State {
    user: AuthUser;
}

export const initialState: State = {
    user: undefined
};

export function reducer(state = initialState, action: AuthUserActions.Actions): State {
    switch (action.type) {
        case AuthUserActions.UPDATE: {
            return Object.assign({}, state, { user: action.payload });
        }
        case AuthUserActions.DELETE: {
            return Object.assign({}, state, {user: null});
        }
        default:
            return state;
    }
}

export const getState = createFeatureSelector<State>('authUser');
export const getUser = createSelector(getState, (state: State) => state.user);
