import { combineReducers } from 'redux';

import accountReducer from './account-reducer';
import documentsReducer from './documents-reducer';
import filesReducer from './document-files-reducer';
import AppState from '../states/AppState';

const appReducer = combineReducers<AppState>({
    accountState: accountReducer,
    documentsState: documentsReducer,
    filesState: filesReducer
})

export default appReducer
