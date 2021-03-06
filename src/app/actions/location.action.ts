import { Action } from '@ngrx/store';

import { Location } from '../models';

export const CURRENT = '[Location] current';
export const CURRENT_SUCCESS = '[Location] current success';
export const CURRENT_FAILURE = '[Location] current failure';
export const UPDATE = '[Location] update';

export class Current implements Action {
    readonly type = CURRENT;
}

export class CurrentSuccess implements Action {
    readonly type = CURRENT_SUCCESS;
    constructor(public payload: Location) {}
}

export class CurrentFailure implements Action {
    readonly type = CURRENT_FAILURE;
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public payload: Location) {}
}


export type Actions =
    Current |
    CurrentSuccess |
    CurrentFailure |
    Update;
