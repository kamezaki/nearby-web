import { createFeatureSelector, createSelector } from '@ngrx/store';

import { QueryActions } from '../actions';
import { SearchQuery } from '../models';

export interface State {
    query: SearchQuery;
    result: any;
}

export const initialState: State = {
    query: undefined,
    result: undefined
};

export function reducer(state = initialState, action: QueryActions.Actions): State {
    switch(action.type) {
        case QueryActions.SEARCH: {
            return Object.assign({}, state, { query: action.payload });
        }
        default:
            return state;            
    }
}

export const getState = createFeatureSelector<State>('query');
export const getQuery = createSelector(getState, (state: State) => state.query);
export const getQueryResult = createSelector(getState, (state: State) => state.result);
