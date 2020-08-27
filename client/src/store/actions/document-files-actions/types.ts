import DocumentFileModel from "../../models/DocumentFileModel";

export const INSERT_DOCUMENT_FILE_ACTION = 'INSERT_DOCUMENT_FILE_ACTION'
export const UPDATE_DOCUMENT_FILE_ACTION = 'UPDATE_DOCUMENT_FILE_ACTION'
export const DELETE_DOCUMENT_FILE_ACTION = 'DELETE_DOCUMENT_FILE_ACTION'

interface InsertDocumentFileAction {
    type: typeof INSERT_DOCUMENT_FILE_ACTION
    payload: DocumentFileModel
}

interface DeleteDocumentFileAction {
    type: typeof DELETE_DOCUMENT_FILE_ACTION
    payload: DocumentFileModel
}

interface UpdateDocumentFileAction {
    type: typeof UPDATE_DOCUMENT_FILE_ACTION
    payload: DocumentFileModel
}

export type DocumentFileAction = InsertDocumentFileAction | DeleteDocumentFileAction | UpdateDocumentFileAction

export const insertDocumentFileAction = (documentFile: DocumentFileModel): InsertDocumentFileAction => {
    return {
        type: INSERT_DOCUMENT_FILE_ACTION,
        payload: documentFile
    }
}

export const updateDocumentFileAction = (documentFile: DocumentFileModel): UpdateDocumentFileAction => {
    return {
        type: UPDATE_DOCUMENT_FILE_ACTION,
        payload: documentFile
    }
}

export const deleteDocumentFileAction = (documentFile: DocumentFileModel): DeleteDocumentFileAction => {
    return {
        type: DELETE_DOCUMENT_FILE_ACTION,
        payload: documentFile
    }
}