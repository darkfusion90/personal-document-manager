import { account as accountApi } from '../../../api'

import UserModel from '../../models/UserModel';
import { AppThunk, AppThunkDispatch } from '../app-thunk';
import { AccountAction, setUserAction, setLoggedInAction } from './types';


export const updateUser = (): AppThunk => async (dispatch: AppThunkDispatch<AccountAction>) => {
    const user: UserModel = await accountApi.getCurrentUser()

    dispatch(setUserAction(user))
}

export const updateLoggedInStatus = (): AppThunk => async (dispatch: AppThunkDispatch<AccountAction>) => {
    const isLoggedIn: boolean = await accountApi.getLoginStatus()

    dispatch(setLoggedInAction(isLoggedIn))
}