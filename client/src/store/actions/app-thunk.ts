import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import AppState from '../states/AppState';

export type AppThunk<R = void> = ThunkAction<
    R,
    AppState,
    unknown,
    Action<string>
>

export type AppThunkDispatch<A extends Action = Action<string>> = ThunkDispatch<
    AppState,
    unknown,
    A
>