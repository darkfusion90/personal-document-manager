import DocumentModel from "../../models/DocumentModel";

export const INSERT_DOCUMENT_ACTION = 'INSERT_DOCUMENT_ACTION'
export const INSERT_BULK_DOCUMENT_ACTION = 'INSERT_BULK_DOCUMENT_ACTION'
export const UPDATE_DOCUMENT_ACTION = 'UPDATE_DOCUMENT_ACTION'
export const DELETE_DOCUMENT_ACTION = 'DELETE_DOCUMENT_ACTION'

export interface InsertDocumentAction {
    type: typeof INSERT_DOCUMENT_ACTION
    payload: DocumentModel
}

export interface DeleteDocumentAction {
    type: typeof DELETE_DOCUMENT_ACTION
    payload: DocumentModel
}

export interface UpdateDocumentAction {
    type: typeof UPDATE_DOCUMENT_ACTION
    payload: DocumentModel
}

export interface InsertBulkDocumentAction {
    type: typeof INSERT_BULK_DOCUMENT_ACTION
    payload: DocumentModel[]
}

export type DocumentAction = InsertDocumentAction | InsertBulkDocumentAction | DeleteDocumentAction | UpdateDocumentAction

export const insertDocumentAction = (document: DocumentModel): InsertDocumentAction => {
    return {
        type: INSERT_DOCUMENT_ACTION,
        payload: document
    }
}

export const updateDocumentAction = (document: DocumentModel): UpdateDocumentAction => {
    return {
        type: UPDATE_DOCUMENT_ACTION,
        payload: document
    }
}

export const deleteDocumentAction = (document: DocumentModel): DeleteDocumentAction => {
    return {
        type: DELETE_DOCUMENT_ACTION,
        payload: document
    }
}

export const insertBulkDocumentAction = (documents: DocumentModel[]): InsertBulkDocumentAction => {
    return {
        type: INSERT_BULK_DOCUMENT_ACTION,
        payload: documents
    }
}