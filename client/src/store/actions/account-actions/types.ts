import UserModel from "../../models/UserModel"

export const SET_USER_ACTION = 'SET_USER_ACTION'
export const SET_LOGGED_IN_ACTION = 'SET_LOGGED_IN_ACTION'

interface SetUserAction {
    type: typeof SET_USER_ACTION
    payload: UserModel
}

interface SetLoggedInAction {
    type: typeof SET_LOGGED_IN_ACTION
    payload: boolean
}

export type AccountAction = SetUserAction | SetLoggedInAction

export const setUserAction = (user: UserModel): SetUserAction => {
    return {
        type: SET_USER_ACTION,
        payload: user
    }
}

export const setLoggedInAction = (isLoggedIn: boolean): SetLoggedInAction => {
    return {
        type: SET_LOGGED_IN_ACTION,
        payload: isLoggedIn
    }
}