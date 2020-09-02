import { createSelector } from 'reselect'
import AppState from '../states/AppState'
import AccountState from '../states/AccountState'
import UserModel from '../models/UserModel'

const accountStateSelector = (state: AppState): AccountState => state.accountState

export const userSelector = createSelector<AppState, AccountState, UserModel | null>(
    accountStateSelector,
    (accountState: AccountState) => accountState.user
)

export const isRegisteredSelector = createSelector<AppState, AccountState, boolean>(
    accountStateSelector,
    (accState: AccountState) => accState.isRegistered()
)

export const isLoggedInSelector = createSelector<AppState, AccountState, boolean>(
    accountStateSelector,
    (accState: AccountState) => accState.isLoggedIn
)

export const hasUserSelector = createSelector<AppState, AccountState, boolean>(
    accountStateSelector,
    (accState: AccountState) => accState.hasUser()
)