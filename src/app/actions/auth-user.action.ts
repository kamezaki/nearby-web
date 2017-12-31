import { Action } from '@ngrx/store';
import { AuthUser } from '../models/';
import { AuthUserActions } from './index';

export const UPDATE = '[AuthUser] update';
export const LOGIN  = '[AuthUser] login';
export const LOGIN_SUCCESS = '[AuthUser] login success';
export const LOGIN_FAILURE = '[AuthUser] login failure';
export const DELETE = '[AuthUser] delete';

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: AuthUser) {}
}

export class Login implements Action {
    readonly type = LOGIN;
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: AuthUser) {}
}

export class LoginFailure implements Action {
    readonly type = LOGIN_FAILURE;
}

export class Delete implements Action {
    readonly type = DELETE;
}

export type Actions =
    Update |
    Delete;
