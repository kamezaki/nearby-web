import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as authUserReducer from './auth-user.reducer';
import * as locationReducer from './location.reducer';
import * as queryReducer from './query.reducer';

export {
    authUserReducer,
    locationReducer,
    queryReducer
};

export interface State {
    authUser: authUserReducer.State;
    location: locationReducer.State;
    query: queryReducer.State;
}

export const reducers = {
    authUser: authUserReducer.reducer,
    location: locationReducer.reducer,
    query: queryReducer.reducer,
    routerReducer: routerReducer
};
