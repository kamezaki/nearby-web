import { Action } from '@ngrx/store';
import { AuthUser } from '../models/';
import { AuthUserActions } from './index';

export const UPDATE = '[AuthUser] update';
export const UPDATE_SUCCESS = '[AuthUser] update success';
export const UPDATE_FAILURE = '[AuthUser] update failure';
export const DELETE = '[AuthUser] delete';

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: AuthUser) {}
}

// export class UpdateSuccess implements Action {
//     readonly type = UPDATE_SUCCESS;
//     constructor(public payload: AuthUser) {}
// }

// export class UpdateFailure implements Action {
//     readonly type = UPDATE_FAILURE;
// }

export class Delete implements Action {
    readonly type = DELETE;
}

export type Actions =
    Update |
    Delete;
