import { Action } from '@ngrx/store';

import { SearchQuery } from '../models';

export const SEARCH = '[Query] Search';
export const SEARCH_SUCCESS = '[Query] Search success';
export const SEARCH_FAILURE = '[Query] Search failure';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: SearchQuery) {}
}

export class SearchSuccess implements Action {
    readonly type = SEARCH_SUCCESS;
}

export class SearchFailure implements Action {
    readonly type = SEARCH_FAILURE;
}

export type Actions =
    Search |
    SearchSuccess |
    SearchFailure;