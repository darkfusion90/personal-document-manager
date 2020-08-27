import AccountState from "../states/AccountState";
import {
    AccountAction,
    SET_USER_ACTION,
    SET_LOGGED_IN_ACTION
} from "../actions/account-actions/types";
import UserModel from "../models/UserModel";

const setUser = (state: AccountState, user: UserModel): AccountState => {
    return state.copy(user)
}

const setLoggedInStatus = (state: AccountState, isLoggedIn: boolean): AccountState => {
    return state.copy(state.user, isLoggedIn)
}

const accountReducer = (
    state: AccountState = AccountState.initial(),
    action: AccountAction
): AccountState => {
    switch (action.type) {
        case SET_USER_ACTION:
            return setUser(state, action.payload)
        case SET_LOGGED_IN_ACTION:
            return setLoggedInStatus(state, action.payload)
        default:
            return state
    }
}

export default accountReducer