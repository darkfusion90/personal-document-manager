import { createSelector } from 'reselect'
import IdMap from '../utils/IdMap'
import DocumentFileModel from '../models/DocumentFileModel'
import AppState from '../states/AppState'
import DocumentFilesState from '../states/DocumentFilesState'

declare type DocumentFileMap = IdMap<DocumentFileModel>
declare type DocumentList = Array<DocumentFileModel>

export const documentFileStateSelector = (state: AppState) => state.filesState

export const documentFileMapSelector = (state: DocumentFilesState) => state.files

export const documentFileListSelector = createSelector<DocumentFilesState, DocumentFileMap, DocumentList>(
    documentFileMapSelector,
    (fileMap: DocumentFileMap) => fileMap.values()
)

export const documentFileSelector = (id: string) =>
    createSelector<DocumentFilesState, DocumentFileMap, DocumentFileModel | undefined>(
        documentFileMapSelector,
        (fileMap) => fileMap.get(id)
    )