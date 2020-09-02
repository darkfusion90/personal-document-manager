import { combineReducers } from 'redux';

import accountReducer from './account-reducer';
import documentsReducer from './documents-reducer';
import filesReducer from './document-files-reducer';
import AppState from '../states/AppState';
import modalReducer from './modal-reducer';

const appReducer = combineReducers<AppState>({
    accountState: accountReducer,
    documentsState: documentsReducer,
    filesState: filesReducer,
    modalState: modalReducer
})

export default appReducer
