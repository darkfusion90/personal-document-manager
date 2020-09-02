import thunk from 'redux-thunk'

import documentFilesMiddleware from './document-files-middleware'
import documentsMiddleware from './documents-middleware'

export default [thunk, ...documentFilesMiddleware, ...documentsMiddleware]