import UserModel from "../models/UserModel";
import escapeUndefined from "../../utils/EscapeUndefined";

export default class AccountState {
    user: UserModel | null;
    isLoggedIn: boolean;

    constructor(user: UserModel | null = null, isLoggedIn: boolean = false) {
        this.user = user
        this.isLoggedIn = isLoggedIn
    }

    hasUser = (): boolean => this.user !== null

    isRegistered = (): boolean => {
        if (this.user === null) {
            return false
        }

        return this.user.isRegistered
    }

    copy(user?: UserModel | null, isLoggedIn?: boolean) {
        const userEscape = escapeUndefined<UserModel | null>(user, () => this.user)
        const isLoggedInEscaped = escapeUndefined<boolean>(isLoggedIn, () => this.isLoggedIn)

        return new AccountState(userEscape, isLoggedInEscaped)
    }

    static initial(): AccountState {
        return new AccountState(null, false)
    }
}