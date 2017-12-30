import { ActionReducerMap } from '@ngrx/store';
import * as authUserReducer from './auth-user.reducer';

export {
    authUserReducer
};

export interface State {
    authUser: authUserReducer.State;
}

export const reducers: ActionReducerMap<State> = {
    authUser: authUserReducer.reducer,
};
