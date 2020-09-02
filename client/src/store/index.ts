import { Store, createStore, Action, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import AppState from './states/AppState'
import appReducer from './reducers'
import middlewares from './middlewares'

const storeEnhancer = composeWithDevTools({ latency: 0, trace: true })(applyMiddleware(...middlewares))

const appStore: Store<AppState> =
    createStore<AppState, Action, unknown, unknown>(appReducer, storeEnhancer)

export default appStore