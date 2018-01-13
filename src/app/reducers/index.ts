import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as authUserReducer from './auth-user.reducer';
import * as locationReducer from './location.reducer';

export {
    authUserReducer,
    locationReducer
};

export interface State {
    authUser: authUserReducer.State;
    location: locationReducer.State;
}

export const reducers = {
    authUser: authUserReducer.reducer,
    location: locationReducer.reducer,
    routerReducer: routerReducer
};
