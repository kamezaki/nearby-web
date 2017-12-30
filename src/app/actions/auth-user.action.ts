import { Action } from '@ngrx/store';
import { AuthUser } from '../models/';

export const UPDATE = '[AuthUser] update';
export const DELETE = '[AuthUser] delete';
export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: AuthUser) {}

}

export class Delete implements Action {
    readonly type = DELETE;
}

export type Actions = Update | Delete;
