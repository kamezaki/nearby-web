import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as authUserReducer from './auth-user.reducer';

export {
    authUserReducer
};

export interface State {
    authUser: authUserReducer.State;
}

export const reducers = {
    authUser: authUserReducer.reducer,
    routerReducer: routerReducer
};
