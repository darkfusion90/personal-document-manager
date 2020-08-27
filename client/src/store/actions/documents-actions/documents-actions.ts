import { documents as documentsApi } from '../../../api'

import DocumentModel from '../../models/DocumentModel'
import { AppThunk, AppThunkDispatch } from '../app-thunk'
import {
    DocumentAction,
    insertDocumentAction,
    updateDocumentAction,
    deleteDocumentAction,
    insertBulkDocumentAction
} from './types'

export const createDocument = (name: string): AppThunk => async (dispatch: AppThunkDispatch<DocumentAction>) => {
    const document = await documentsApi.createDocument(name)

    dispatch(insertDocumentAction(document))
}

export const getDocument = (id: string): AppThunk => async (dispatch: AppThunkDispatch<DocumentAction>) => {
    const document = await documentsApi.getDocument(id)

    dispatch(insertDocumentAction(document))
}

export const getAllDocuments = (): AppThunk => async (dispatch: AppThunkDispatch<DocumentAction>) => {
    const documents = await documentsApi.getAllDocuments()

    dispatch(insertBulkDocumentAction(documents))
}

export const updateDocument = (document: DocumentModel): AppThunk => async (dispatch: AppThunkDispatch<DocumentAction>) => {
    const updatedDocument = await documentsApi.getDocument(document.id)

    dispatch(updateDocumentAction(updatedDocument))
}

export const deleteDocument = (document: DocumentModel): AppThunk => async (dispatch: AppThunkDispatch<DocumentAction>) => {
    await documentsApi.deleteDocument(document.id)

    dispatch(deleteDocumentAction(document))
}