import { files as filesApi } from '../../../api'

import DocumentFileModel from '../../models/DocumentFileModel'
import { AppThunk, AppThunkDispatch } from '../app-thunk'
import {
    DocumentFileAction,
    insertDocumentFileAction,
    updateDocumentFileAction,
    deleteDocumentFileAction,
} from './types'

export const getFile = (id: string): AppThunk => async (dispatch: AppThunkDispatch<DocumentFileAction>) => {
    const documentFile = await filesApi.getFile(id)

    dispatch(insertDocumentFileAction(documentFile))
}

export const updateFile = (documentFile: DocumentFileModel): AppThunk => async (dispatch: AppThunkDispatch<DocumentFileAction>) => {
    const updatedDocument = await filesApi.getFile(documentFile.id)

    dispatch(updateDocumentFileAction(updatedDocument))
}

export const deleteFile = (documentFile: DocumentFileModel): AppThunk => async (dispatch: AppThunkDispatch<DocumentFileAction>) => {
    await filesApi.deleteFile(documentFile.id)

    dispatch(deleteDocumentFileAction(documentFile))
}