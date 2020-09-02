import { Middleware, Action } from 'redux';

const isActionInList = (list: string[], action: string) => {
    for (let listItem of list) {
        if (listItem === action) {
            return true
        }
    }

    return false
}

const asArray = <T>(what: T | T[]): T[] => {
    if (Array.isArray(what)) {
        return what
    }

    return [what]
}

const filteredMiddleware = (middleware: Middleware, filterWithActions: string | string[]): Middleware => {
    return (api) => next => (action: Action<string>) => {
        const shouldInvokeMiddleware = isActionInList(asArray(filterWithActions), action.type)
        if (shouldInvokeMiddleware) {
            middleware(api)(next)(action)
        } else {
            next(action)
        }
    }
}

export default filteredMiddleware