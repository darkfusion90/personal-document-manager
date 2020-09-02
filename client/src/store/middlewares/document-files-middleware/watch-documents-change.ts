import { Middleware } from 'redux';
import {
    INSERT_DOCUMENT_ACTION,
    INSERT_BULK_DOCUMENT_ACTION,
    UPDATE_DOCUMENT_ACTION
} from '../../actions/documents-actions/types';
import filteredMiddleware from '../filtered-middleware';
import { getFile } from '../../actions/document-files-actions/documents-file-actions';
import { AppThunkDispatch } from '../../actions/app-thunk';




const onDocumentChange: Middleware = ({ dispatch }) => next => action => {
    const dispatchOneDocumentFile = (fileId: string) => {
        console.log({ fileId })
        if (fileId !== undefined) {
            console.log('will dispatch file')
            const thunkDispatch = dispatch as AppThunkDispatch
            thunkDispatch(getFile(fileId))
        }
    }

    console.log('DocumentChanged: ', action)

    if (Array.isArray(action.payload)) {
        for (let item of action.payload) {
            dispatchOneDocumentFile(item.fileId)
        }
    } else {
        dispatchOneDocumentFile(action.payload.fileId)
    }

    next(action)
}

export default filteredMiddleware(onDocumentChange, [
    INSERT_DOCUMENT_ACTION,
    INSERT_BULK_DOCUMENT_ACTION,
    UPDATE_DOCUMENT_ACTION
])


