import DocumentFilesState from '../states/DocumentFilesState'
import {
    DocumentFileAction,
    INSERT_DOCUMENT_FILE_ACTION,
    UPDATE_DOCUMENT_FILE_ACTION,
    DELETE_DOCUMENT_FILE_ACTION
} from '../actions/document-files-actions/types'
import DocumentFileModel from '../models/DocumentFileModel'
import { documentFileMapSelector } from '../selectors/document-file-selectors'

const insertDocumentFile = (state: DocumentFilesState, file: DocumentFileModel): DocumentFilesState => {
    const files = documentFileMapSelector(state)
    files.put(file)

    return state.copy(files.copy())
}

const deleteDocumentFile = (state: DocumentFilesState, file: DocumentFileModel): DocumentFilesState => {
    const files = documentFileMapSelector(state)
    files.remove(file)

    return state.copy(files.copy())
}

const filesReducer = (
    state: DocumentFilesState = DocumentFilesState.initial(),
    action: DocumentFileAction
): DocumentFilesState => {
    switch (action.type) {
        case INSERT_DOCUMENT_FILE_ACTION:
        case UPDATE_DOCUMENT_FILE_ACTION:
            return insertDocumentFile(state, action.payload)
        case DELETE_DOCUMENT_FILE_ACTION:
            return deleteDocumentFile(state, action.payload)
        default:
            return state
    }
}

export default filesReducer