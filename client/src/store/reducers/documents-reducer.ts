import DocumentsState from "../states/DocumentsState"
import {
    DocumentAction,
    INSERT_DOCUMENT_ACTION,
    INSERT_BULK_DOCUMENT_ACTION,
    DELETE_DOCUMENT_ACTION,
    UPDATE_DOCUMENT_ACTION
} from "../actions/documents-actions/types"
import DocumentModel from "../models/DocumentModel"
import IdMap from "../utils/IdMap"
import { documentMapSelector } from "../selectors/document-selectors"

const insertDocument = (state: DocumentsState, document: DocumentModel): DocumentsState => {
    const documents = documentMapSelector(state)
    documents.put(document)

    return state.copy(documents.copy())
}

const insertDocumentsBulk = (state: DocumentsState, documents: DocumentModel[]): DocumentsState => {
    const documentsMap = IdMap.fromList<DocumentModel>(documents)
    return state.copy(documentsMap)
}

const deleteDocument = (state: DocumentsState, document: DocumentModel): DocumentsState => {
    const documents =  documentMapSelector(state)
    documents.remove(document)

    return state.copy(documents.copy())
}

const documentsReducer = (
    state: DocumentsState = DocumentsState.initial(),
    action: DocumentAction
): DocumentsState => {
    switch (action.type) {
        case INSERT_DOCUMENT_ACTION:
        case UPDATE_DOCUMENT_ACTION:
            return insertDocument(state, action.payload)
        case INSERT_BULK_DOCUMENT_ACTION:
            return insertDocumentsBulk(state, action.payload)
        case DELETE_DOCUMENT_ACTION:
            return deleteDocument(state, action.payload)
        default:
            return state
    }
}

export default documentsReducer