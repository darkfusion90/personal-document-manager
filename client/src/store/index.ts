import { Store, createStore, Action } from 'redux'

import AppState from './states/AppState'
import appReducer from './reducers'

const appStore: Store<AppState> = createStore<AppState, Action, unknown, unknown>(appReducer)

export default appStore